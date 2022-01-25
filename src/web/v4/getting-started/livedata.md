---
title: Enable Live Data
toc: false
eleventyNavigation:
  title: Enable Live Data
  key: web-v4-getting-started-enable-live-data
  parent: web-v4-getting-started
  order: 170
---

{% include "src/shared/live-data/live-data-intro.md" %}

{% include "src/shared/getting-started/live-data/live-position-demo-preconditions.md" %}

To enable Live Data in your web app, create an instance of `LiveDataManager`. Call the method `enableLiveData()` on it with a [Domain Type]({{ site.url }}/web/v4/live-data/#domain-type).

This should be done after you have initialized your MapsIndoors instance, since the instance must be given as argument in the `LiveDataManager` constructor:

<mi-tabs>
<mi-tab label="Manually" tab-for="manually"></mi-tab>
<mi-tab label="MI Components" tab-for="components"></mi-tab>
<mi-tab-panel id="manually">

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
<mi-tab-panel id="components">

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
</mi-tabs>

In the example above we create an instance of `LiveDataManager` and enable Live Data for the "Position" Domain type.

{% include "src/shared/getting-started/live-data/live-position-demo-result.md" %}

Learn more about controlling and rendering Live Data in MapsIndoors in the [introduction to Live Data]({{ site.url }}/web/v4/live-data/).

<!-- JS Fiddle intro -->
{% include "src/web/v4/getting-started/js-fiddle-intro.md" %}

<mi-tabs>
<mi-tab label="Manually" tab-for="manually"></mi-tab>
<mi-tab label="MI Components" tab-for="components"></mi-tab>
  <mi-tab-panel id="manually">
  <iframe width="100%" src="//jsfiddle.net/simonlaustsen/3z9tby8q/37/embedded/js,html,result/" frameborder="0"></iframe>
  </mi-tab-panel>

  <mi-tab-panel id="components">
    <iframe width="100%" src="//jsfiddle.net/simonlaustsen/fb5rauto/19/embedded/js,html,result/" frameborder="0"></iframe>
  </mi-tab-panel>
</mi-tabs>

<!-- Congrats -->
{% include "src/shared/getting-started/congrats.md" %}
