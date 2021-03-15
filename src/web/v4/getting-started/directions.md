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

To get _Directions_ between two MapsIndoors Locations, or Places outside of your MapsIndoors Solution, we need two things:

1. The _Directions Service_ instance
2. The _Directions Render_ instance

We need the _Directions Service_ to calculate the fastest route between two points, and use the _Directions Render_ to actually draw the route on the map.

<mi-tabs>
<mi-tab label="Manually" tab-for="manually"></mi-tab>
<mi-tab label="MI Components" tab-for="components"></mi-tab>
<mi-tab-panel id="manually">

### Set up Directions Service and Render

First, initialize the [MapsIndoors Directions _Service_](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.services.DirectionsService.html), and add an _external directions provider_ (in this case Google Maps):

```js
// main.js

const externalDirectionsProvider = new mapsindoors.directions.GoogleMapsProvider();
const miDirectionsServiceInstance = new mapsindoors.services.DirectionsService(externalDirectionsProvider);
```

Then, we need to initialize the [MapsIndoors Directions Render](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.directions.DirectionsRenderer.html) with the MapsIndoors _instance_:

```js
// main.js

const directionsRendererOptions = { mapsIndoors: mapsIndoorsInstance }
const miDirectionsRendererInstance = new mapsindoors.directions.DirectionsRenderer(directionsRendererOptions);
```

</mi-tab-panel>
<mi-tab-panel id="components">

### Get Directions Service and Render instances

First, add two new `let` statements all the way at the top, after the `miMapElement` constant, for storing our _Directions Service_ and _Directions Renderer_ instances:

```js
// main.js

let miDirectionsServiceInstance;
let miDirectionsRendererInstance;
```

Then, we populate them with the instances within the `mapsIndoorsReady` event:

```js
miMapElement.addEventListener('mapsIndoorsReady', () => {
  ...
  miMapElement.getDirectionsServiceInstance()
    .then((directionsServiceInstance) => miDirectionsServiceInstance = directionsServiceInstance);

  miMapElement.getDirectionsRendererInstance()
    .then((directionsRendererInstance) => miDirectionsRendererInstance = directionsRendererInstance);
})
```

</mi-tab-panel>
</mi-tabs>

> See all available directions render options and methods in the [reference documentation](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.directions.DirectionsRenderer.html).

Now our example app is ready to provide Directions. Next up is how to give it an _Origin_ and _Destination_ and draw the route between.

### Draw a route on the map

To display a route on the map, we use the _coordinates_ of an _Origin_ and _Destination_ and draw a line between them. For this, we use MapsIndoors' `directionsRender`.

The _Destination_ coordinate is retrieved dynamically, using the coordinate of the selected Location in the search results list. In this tutorial, the _Origin_ is a hardcoded coordinate.

In the following example, this is what happens:

1. Create a new `getRoute` method in `main.js` which accepts a `location`
1. Create two new constants, one for the _Origin_'s coordinate, and another for the _Destination_'s coordinate
1. Add another constant defining the `routeParameters`
1. Using the [MapsIndoors Directions Service](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.services.DirectionsService.html#getRoute) call the `getRoute` method to get the fastest route between the two coordinates

    > See all available route parameters in the [reference documentation](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.services.DirectionsService.html#getRoute).

1. Using the [MapsIndoors Directions Renderer](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.directions.DirectionsRenderer.html#setRoute) call the `setRoute` method to display the route on the map

```js
// main.js

function getRoute(location) {
  const originLocationCoordinate = { lat: 38.897389429704695, lng: -77.03740973527613, floor: 0 }; // Oval Office, The White House (Hardcoded coordinate and floor index)
  const destinationCoordinate = { lat: location.properties.anchor.coordinates[1], lng: location.properties.anchor.coordinates[0], floor: location.properties.floor };

  // Route parameters
  const routeParameters = {
    origin: originLocationCoordinate,
    destination: destinationCoordinate,
    travelMode: 'WALKING'
  };

  // Get route from directions service
  miDirectionsServiceInstance.getRoute(routeParameters).then((directionsResult) => {
    // Use directions render to display route
    miDirectionsRendererInstance.setRoute(directionsResult);
  });
}
```

Now, to make it more dynamic, we attach a `click` event listener with the `getRoute` method as callback function, in the `onSearch` method for each location appended to the search results list element.

<mi-tabs>
<mi-tab label="Manually" tab-for="manually"></mi-tab>
<mi-tab label="MI Components" tab-for="components"></mi-tab>
<mi-tab-panel id="manually">

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

```js
// main.js

event.detail.forEach(location => {
  ...
  // Add click event listener
  miListItemElement.addEventListener("click", () => getRoute(location), false);

  miListElement.appendChild(miListItemElement);
});
```

</mi-tab-panel>
</mi-tabs>

Now you can click on each item in the search results list to get directions from The Oval Office to any Location in The White House.

<!-- Add screenshot -->

<!-- Travel-mode -->
{% include "src/shared/getting-started/directions/travel-mode.md" %}

To change between travel modes we first need to add a `<select>` element with all four transportation options above the search field:

```HTML
<!-- index.html -->

<body>
  ...
  <!-- Travel mode selector -->
  <label for="travel-modes">Choose a travel mode:</label>
  <select name="travelModeSelector" id="travel-modes">
    <option value="walking" selected>Walking</option>
    <option value="bicycling">Bicycling</option>
    <option value="driving">Driving</option>
    <option value="transit">Transit</option>
  </select>
  ...
</body>
```

To use the chosen transportation when getting a route, we need to replace the hardcoded value for `travelMode` parameter inside the `getRoute` method with the `<select>` elements value:

```js
// main.js

function getRoute(location) {
  ...
  // Route parameters
  const routeParameters = {
    origin: originLocationCoordinate,
    destination: destinationCoordinate,
    travelMode: document.getElementById('travel-modes').value.toUpperCase()
  };
  ...
}
```
