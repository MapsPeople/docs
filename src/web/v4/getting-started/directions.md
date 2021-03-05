---
title: Getting directions
toc: true
eleventyNavigation:
  title: Directions
  key: web-v4-getting-started-directions
  parent: web-v4-getting-started
  order: 160
---

<!-- Overview -->
{% include "src/shared/getting-started/directions/overview.md" %}

<!-- Directions -->
{% include "src/shared/getting-started/directions/directions.md" %}

<mi-tabs>
<mi-tab label="Manually" tab-for="manually"></mi-tab>
<mi-tab label="MI Components" tab-for="components"></mi-tab>
<mi-tab-panel id="manually">

### Set up Directions Service and Render

* Initialize the [MapsIndoors Directions Service](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.services.DirectionsService.html) with a external directions provider.

```js
// main.js

const externalDirectionsProvider = new mapsindoors.directions.GoogleMapsProvider();
const directionsServiceInstance = new mapsindoors.services.DirectionsService(externalDirectionsProvider);
```

* Initialize the [MapsIndoors Directions Render](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.directions.DirectionsRenderer.html).

```js
// main.js

const directionsRendererOptions = { mapsIndoors: mapsIndoorsInstance }
const directionsRendererInstance = new mapsindoors.directions.DirectionsRenderer(directionsRendererOptions);
```

> See all available directions render options in the [reference documentation](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.directions.DirectionsRenderer.html).

### Draw a route on the map

To display a route between two coordinates the MapsIndoors `directionsRender` need an origin coordinate and destination coordinate. The destination coordinate will be retrieved dynamically using the coordinate of the clicked location in the search results list.

* Create a new `getRoute` method in main.js which accepts a "location".
* Create two new constants, one for origin coordinate and another for destination coordinate. For the sake of simplicity of this tutorial the origin will be a hardcoded coordinate.
* Add another constant defining the route parameters.
* Using the [MapsIndoors Directions Service](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.services.DirectionsService.html#getRoute) call the `getRoute` method to get the fastest route between the two coordinates.

> See all available route parameters in the [reference documentation](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.services.DirectionsService.html#getRoute).

* Using the [MapsIndoors Directions Renderer](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.directions.DirectionsRenderer.html#setRoute) call the `setRoute` method to display the route on the map.

```js
// main.js

function getRoute(location) {
  const originLocationCoordinate = { lat: 38.897389429704695, lng: -77.03740973527613, floor: 0 }; // Oval Office, The White House (Hardcoded coordinate and floor index)
  const destinationCoordinate = { lat: location.properties.anchor.coordinates[1], lng: location.properties.anchor.coordinates[0] };

  // Route parameters
  const routeParameters = {
    origin: originLocationCoordinate,
    destination: destinationCoordinate
  };

  // Get route from directions service
  directionsServiceInstance.getRoute(routeParameters).then((directionsResult) => {
    // Use directions render to display route
    directionsRendererInstance.setRoute(directionsResult);
  });
}
```

* In the `onSearch` method, attach a `click` event listener for each location appended to the search results list element and add the `getRoute` method as the callback function.

```js
// main.js

locations.forEach(location => {
  ...
  // Add click event listener
  listElement.addEventListener("click", () => getRoute(location), false);

  searchResultsElement.appendChild(listElement);
});

```

</mi-tab-panel>
<mi-tab-panel id="components">

</mi-tab-panel>
</mi-tabs>

<!-- Travel-mode -->
{% include "src/shared/getting-started/directions/travel-mode.md" %}

* **TODO: How to swap between travel modes**
