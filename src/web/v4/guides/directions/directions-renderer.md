---
title: Directions Rendering
eleventyNavigation:
  key: web-v4-guides-directions-renderer
  parent: web-v4-guides-directions
  title: Directions Rendering
  order: 20
---

When getting the result Route from a [Directions Service](../directions/directions-service), we may want to display this Route on a map. To perform this task the `DirectionsRenderer` can be used.

This example shows how to setup a query for a route and display the result on a Google Map using the DirectionsRenderer`:

```js
const externalDirectionsProvider = new mapsindoors.directions.GoogleMapsProvider();
const miDirectionsServiceInstance = new mapsindoors.services.DirectionsService(externalDirectionsProvider);

const directionsRendererOptions = { mapsIndoors: mapsIndoorsInstance }
const miDirectionsRendererInstance = new mapsindoors.directions.DirectionsRenderer(directionsRendererOptions);

const routeParameters = {
  origin: { lat: 38.897389429704695, lng: -77.03740973527613, floor: 0 }, // Oval Office, The White House
  destination: { lat: 38.897579747054046, lng: -77.03658652944773, floor: 1 } // Blue Room, The White House
};

miDirectionsServiceInstance.getRoute(routeParameters).then(directionsResult => {
  miDirectionsRendererInstance.setRoute(directionsResult);
});
```

> See all available directions render options in the [reference documentation](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.directions.DirectionsRenderer.html).

As previously mentioned, the route object is separated into objects of [`Leg`](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/Leg.html) and these legs are again separated into objects of [`Step`](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/Step.html). Unless the Route only contains one Leg, the Directions Renderer does not allow the full Route to be rendered all at once. A specific part of the route can be rendered by setting the step index and/or leg index using the `DirectionsRenderer`.

```js
miDirectionsRendererInstance.setStepIndex(stepIndex, legIndex)
```

> See all available methods in the [reference documentation](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.directions.DirectionsRenderer.html)

The length of the `Legs` and `Steps` arrays determines the possible values of `legIndex` and `stepIndex`.