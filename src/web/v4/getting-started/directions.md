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

To get _Directions_ between two MapsIndoors Locations, or Places outside of your MapsIndoors Solution, we need two things:

1. Initialize the _Directions Service_ (including an _external directions provider_)
2. Initialize the _Directions Render_

We need the _Directions Service_ to calculate the fastest route between two points, and use the _Directions Render_ to actually draw the route on the map.

### Set up Directions Service and Render

First, initialize the [MapsIndoors Directions _Service_](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.services.DirectionsService.html), and add an _external directions provider_ (in this case Google Maps):

```js
// main.js

const externalDirectionsProvider = new mapsindoors.directions.GoogleMapsProvider();
const directionsServiceInstance = new mapsindoors.services.DirectionsService(externalDirectionsProvider);
```

Then, we need to initialize the [MapsIndoors Directions Render](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.directions.DirectionsRenderer.html) with the MapsIndoors _instance_:

```js
// main.js

const directionsRendererOptions = { mapsIndoors: mapsIndoorsInstance }
const directionsRendererInstance = new mapsindoors.directions.DirectionsRenderer(directionsRendererOptions);
```

> See all available directions render options in the [reference documentation](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.directions.DirectionsRenderer.html).

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

Now, to make it more dynamic, we attach a `click` event listener in the `onSearch` method for each location appended to the search results list element. Then we add the `getRoute` method as the callback function.

```js
// main.js

locations.forEach(location => {
  ...
  // Add click event listener
  listElement.addEventListener("click", () => getRoute(location), false);

  searchResultsElement.appendChild(listElement);
});

```

Now you can click on each item in the search results list to get directions from The Oval Office to any Location in The White House.

<!-- Add screenshot -->

</mi-tab-panel>
<mi-tab-panel id="components">

</mi-tab-panel>
</mi-tabs>

<!-- Travel-mode -->
{% include "src/shared/getting-started/directions/travel-mode.md" %}

* **TODO: How to swap between travel modes**
