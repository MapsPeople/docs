---
title: Enable Live Data
toc: true
eleventyNavigation:
  title: Enable Live Data
  key: v3-getting-started-web-livedata
  parent: v3-getting-started-web
  order: 170
---

{% include "src/content/shared/live-data/live-data-intro.md" %}

{% include "src/content/shared/getting-started/live-data/live-position-demo-preconditions.md" %}

To enable Live Data in your web app, create an instance of `LiveDataManager`. Call the method `enableLiveData()` on it with a Domain Type.

This should be done after you have initialized your MapsIndoors instance, since the instance must be given as argument in the `LiveDataManager` constructor:

<mi-tabs>
<mi-tab label="Google Maps - Manually" tab-for="gm-manually"></mi-tab>
<mi-tab label="Google Maps - MI Components" tab-for="gm-components"></mi-tab>
<mi-tab label="Mapbox - Manually" tab-for="mb-manually"></mi-tab>
<mi-tab label="Mapbox - MI Components" tab-for="mb-components"></mi-tab>

<mi-tab-panel id="gm-manually">

```diff-js
// main.js

const mapViewOptions = {
  element: document.getElementById('map'),
  center: { lat: 38.8974905, lng: -77.0362723 }, // The White House
  zoom: 17,
  maxZoom: 22,
};
const mapViewInstance = new mapsindoors.mapView.GoogleMapsView(mapViewOptions);
+ const mapsIndoorsInstance = new mapsindoors.MapsIndoors({ mapView: mapViewInstance });
const googleMapsInstance = mapViewInstance.getMap();

const externalDirectionsProvider = new mapsindoors.directions.GoogleMapsProvider();
const miDirectionsServiceInstance = new mapsindoors.services.DirectionsService(externalDirectionsProvider);
const directionsRendererOptions = { mapsIndoors: mapsIndoorsInstance }
const miDirectionsRendererInstance = new mapsindoors.directions.DirectionsRenderer(directionsRendererOptions);

+ // Enable Live Data
+ const liveDataManagerInstance = new mapsindoors.LiveDataManager(mapsIndoorsInstance);
+ liveDataManagerInstance.enableLiveData(mapsindoors.LiveDataManager.LiveDataDomainTypes.POSITION);

// Floor Selector
const floorSelectorElement = document.createElement('div');
new mapsindoors.FloorSelector(floorSelectorElement, mapsIndoorsInstance);
googleMapsInstance.controls[google.maps.ControlPosition.RIGHT_TOP].push(floorSelectorElement);

function onSearch() {
  const searchInputElement = document.querySelector('input');
  const searchResultsElement = document.getElementById('search-results');

  const searchParameters = { q: searchInputElement.value };
  mapsindoors.services.LocationsService.getLocations(searchParameters).then(locations => {
    // Reset search results list
    searchResultsElement.innerHTML = null;

    // Append new search results
    locations.forEach(location => {
      const listElement = document.createElement('li');
      listElement.innerHTML = location.properties.name;
      // Add click event listener
      listElement.addEventListener("click", () => getRoute(location), false);
      searchResultsElement.appendChild(listElement);
    });
    // Filter map to only display search results
    mapsIndoorsInstance.filter(locations.map(location => location.id), false);
  });
}

function getRoute(location) {
  const originLocationCoordinate = { lat: 38.897389429704695, lng: -77.03740973527613, floor: 0 }; // Oval Office, The White House (Hardcoded coordinate and floor index)
  const destinationCoordinate = { lat: location.properties.anchor.coordinates[1], lng: location.properties.anchor.coordinates[0], floor: location.properties.floor };

  // Route parameters
  const routeParameters = {
    origin: originLocationCoordinate,
    destination: destinationCoordinate,
    travelMode: document.getElementById('travel-modes').value.toUpperCase()
  };

  // Get route from directions service
  miDirectionsServiceInstance.getRoute(routeParameters).then((directionsResult) => {
    // Use directions render to display route
    miDirectionsRendererInstance.setRoute(directionsResult);
  });
}
```

</mi-tab-panel>
<mi-tab-panel id="gm-components">

```diff-js
// main.js

const miMapElement = document.querySelector('mi-map-googlemaps');
const miSearchElement = document.querySelector('mi-search');
const miListElement = document.querySelector('mi-list');

let miDirectionsServiceInstance;
let miDirectionsRendererInstance;

miMapElement.addEventListener('mapsIndoorsReady', () => {
  miMapElement.getMapInstance().then((mapInstance) => {
    mapInstance.setCenter({ lat: 38.8974905, lng: -77.0362723 }); // The White House
  });

  miMapElement.getDirectionsServiceInstance().then((directionsServiceInstance) => miDirectionsServiceInstance = directionsServiceInstance);

  miMapElement.getDirectionsRendererInstance().then((directionsRendererInstance) => miDirectionsRendererInstance = directionsRendererInstance);

  miMapElement.getMapsIndoorsInstance().then((mapsIndoorsInstance) => {
+   // Enable Live Data
+   const liveDataManagerInstance = new mapsindoors.LiveDataManager(mapsIndoorsInstance);
+   liveDataManagerInstance.enableLiveData(mapsindoors.LiveDataManager.LiveDataDomainTypes.POSITION);
  });
})

miSearchElement.addEventListener('results', (event) => {
  // Reset search results list
  miListElement.innerHTML = null;

  // Append new search results
  event.detail.forEach(location => {
    const miListItemElement = document.createElement('mi-list-item-location');
    miListItemElement.location = location;
    // Add click event listener
    miListItemElement.addEventListener("click", () => getRoute(location), false);
    miListElement.appendChild(miListItemElement);
  });

  // Get the MapsIndoors instance
  miMapElement.getMapsIndoorsInstance().then((mapsIndoorsInstance) => {
    // Filter map to only display search results
    mapsIndoorsInstance.filter(event.detail.map(location => location.id), false);
  });
});

function getRoute(location) {
  const originLocationCoordinate = { lat: 38.897389429704695, lng: -77.03740973527613, floor: 0 }; // Oval Office, The White House (Hardcoded coordinate and floor index)
  const destinationCoordinate = { lat: location.properties.anchor.coordinates[1], lng: location.properties.anchor.coordinates[0], floor: location.properties.floor };

  // Route parameters
  const routeParameters = {
    origin: originLocationCoordinate,
    destination: destinationCoordinate,
    travelMode: document.getElementById('travel-modes').value.toUpperCase()
  };

  // Get route from directions service
  miDirectionsServiceInstance.getRoute(routeParameters).then((directionsResult) => {
    // Use directions render to display route
    miDirectionsRendererInstance.setRoute(directionsResult);
  });
}
```

</mi-tab-panel>
<mi-tab-panel id="mb-manually">

```diff-js
// main.js

const mapViewOptions = {
  accessToken: 'YOUR_MAPBOX_ACCESS_TOKEN',
  element: document.getElementById('map'),
  center: { lat: 38.8974905, lng: -77.0362723 }, // The White House
  zoom: 17,
  maxZoom: 22,
};
const mapViewInstance = new mapsindoors.mapView.MapboxView(mapViewOptions);
+ const mapsIndoorsInstance = new mapsindoors.MapsIndoors({ mapView: mapViewInstance });
const mapboxInstance = mapViewInstance.getMap();

const externalDirectionsProvider = new mapsindoors.directions.MapboxProvider();
const miDirectionsServiceInstance = new mapsindoors.services.DirectionsService(externalDirectionsProvider);
const directionsRendererOptions = { mapsIndoors: mapsIndoorsInstance }
const miDirectionsRendererInstance = new mapsindoors.directions.DirectionsRenderer(directionsRendererOptions);

+ // Enable Live Data
+ const liveDataManagerInstance = new mapsindoors.LiveDataManager(mapsIndoorsInstance);
+ liveDataManagerInstance.enableLiveData(mapsindoors.LiveDataManager.LiveDataDomainTypes.POSITION);

// Floor Selector
const floorSelectorElement = document.createElement('div');
new mapsindoors.FloorSelector(floorSelectorElement, mapsIndoorsInstance);
mapboxInstance.controls[google.maps.ControlPosition.RIGHT_TOP].push(floorSelectorElement);

function onSearch() {
  const searchInputElement = document.querySelector('input');
  const searchResultsElement = document.getElementById('search-results');

  const searchParameters = { q: searchInputElement.value };
  mapsindoors.services.LocationsService.getLocations(searchParameters).then(locations => {
    // Reset search results list
    searchResultsElement.innerHTML = null;

    // Append new search results
    locations.forEach(location => {
      const listElement = document.createElement('li');
      listElement.innerHTML = location.properties.name;
      // Add click event listener
      listElement.addEventListener("click", () => getRoute(location), false);
      searchResultsElement.appendChild(listElement);
    });
    // Filter map to only display search results
    mapsIndoorsInstance.filter(locations.map(location => location.id), false);
  });
}

function getRoute(location) {
  const originLocationCoordinate = { lat: 38.897389429704695, lng: -77.03740973527613, floor: 0 }; // Oval Office, The White House (Hardcoded coordinate and floor index)
  const destinationCoordinate = { lat: location.properties.anchor.coordinates[1], lng: location.properties.anchor.coordinates[0], floor: location.properties.floor };

  // Route parameters
  const routeParameters = {
    origin: originLocationCoordinate,
    destination: destinationCoordinate,
    travelMode: document.getElementById('travel-modes').value.toUpperCase()
  };

  // Get route from directions service
  miDirectionsServiceInstance.getRoute(routeParameters).then((directionsResult) => {
    // Use directions render to display route
    miDirectionsRendererInstance.setRoute(directionsResult);
  });
}
```

</mi-tab-panel>
<mi-tab-panel id="mb-components">

```diff-js
// main.js

const miMapElement = document.querySelector('mi-map-mapbox');
const miSearchElement = document.querySelector('mi-search');
const miListElement = document.querySelector('mi-list');

let miDirectionsServiceInstance;
let miDirectionsRendererInstance;

miMapElement.addEventListener('mapsIndoorsReady', () => {
  miMapElement.getMapInstance().then((mapInstance) => {
    mapInstance.setCenter({ lat: 38.8974905, lng: -77.0362723 }); // The White House
  });

  miMapElement.getDirectionsServiceInstance().then((directionsServiceInstance) => miDirectionsServiceInstance = directionsServiceInstance);

  miMapElement.getDirectionsRendererInstance().then((directionsRendererInstance) => miDirectionsRendererInstance = directionsRendererInstance);

  miMapElement.getMapsIndoorsInstance().then((mapsIndoorsInstance) => {
+   // Enable Live Data
+   const liveDataManagerInstance = new mapsindoors.LiveDataManager(mapsIndoorsInstance);
+   liveDataManagerInstance.enableLiveData(mapsindoors.LiveDataManager.LiveDataDomainTypes.POSITION);
+ });
})

miSearchElement.addEventListener('results', (event) => {
  // Reset search results list
  miListElement.innerHTML = null;

  // Append new search results
  event.detail.forEach(location => {
    const miListItemElement = document.createElement('mi-list-item-location');
    miListItemElement.location = location;
    // Add click event listener
    miListItemElement.addEventListener("click", () => getRoute(location), false);
    miListElement.appendChild(miListItemElement);
  });

  // Get the MapsIndoors instance
  miMapElement.getMapsIndoorsInstance().then((mapsIndoorsInstance) => {
    // Filter map to only display search results
    mapsIndoorsInstance.filter(event.detail.map(location => location.id), false);
  });
});

function getRoute(location) {
  const originLocationCoordinate = { lat: 38.897389429704695, lng: -77.03740973527613, floor: 0 }; // Oval Office, The White House (Hardcoded coordinate and floor index)
  const destinationCoordinate = { lat: location.properties.anchor.coordinates[1], lng: location.properties.anchor.coordinates[0], floor: location.properties.floor };

  // Route parameters
  const routeParameters = {
    origin: originLocationCoordinate,
    destination: destinationCoordinate,
    travelMode: document.getElementById('travel-modes').value.toUpperCase()
  };

  // Get route from directions service
  miDirectionsServiceInstance.getRoute(routeParameters).then((directionsResult) => {
    // Use directions render to display route
    miDirectionsRendererInstance.setRoute(directionsResult);
  });
}
```

</mi-tab-panel>
</mi-tabs>

In the example above we create an instance of `LiveDataManager` and enable Live Data for the "Position" Domain type.

{% include "src/content/shared/getting-started/live-data/live-position-demo-result.md" %}

Learn more about controlling and rendering Live Data in MapsIndoors in the [introduction to Live Data]({{ site.url }}/content/map/live-data/).

<!-- JS Fiddle intro -->
{% include "src/content/getting-started/web/js-fiddle-intro.md" %}

<mi-tabs>
<mi-tab label="Google Maps - Manually" tab-for="gm-manually"></mi-tab>
<mi-tab label="Google Maps - MI Components" tab-for="gm-components"></mi-tab>
<mi-tab label="Mapbox - Manually" tab-for="mb-manually"></mi-tab>
<mi-tab label="Mapbox - MI Components" tab-for="mb-components"></mi-tab>
  <mi-tab-panel id="gm-manually">
    <iframe width="100%" src="//jsfiddle.net/mapspeople/9e3o1un4/embedded/js,html,result/" frameborder="0"></iframe>
  </mi-tab-panel>

  <mi-tab-panel id="gm-components">
    <iframe width="100%" src="//jsfiddle.net/mapspeople/gzc1uamo/embedded/js,html,result/" frameborder="0"></iframe>
  </mi-tab-panel>

  <mi-tab-panel id="mb-manually">
    <iframe width="100%" src="//jsfiddle.net/mapspeople/7Luf93yo/embedded/js,html/" frameborder="0"></iframe>
  </mi-tab-panel>

  <mi-tab-panel id="mb-components">
    <iframe width="100%" src="//jsfiddle.net/mapspeople/Lr70ngoh/embedded/js,html/" frameborder="0"></iframe>
  </mi-tab-panel>
</mi-tabs>

<!-- Congrats -->
{% include "src/content/shared/getting-started/congrats.md" %}
