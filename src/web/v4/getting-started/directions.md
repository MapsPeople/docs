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

</mi-tab-panel>
<mi-tab-panel id="components">

</mi-tab-panel>
</mi-tabs>

* **TODO: How to get directions between two coordinates and render it on the map (MPDirectionsService, MPDirectionsQuery, MPRoutingProvider, onResultListener, MPDirectionsRenderer)**

<!-- Travel-mode -->
{% include "src/shared/getting-started/directions/travel-mode.md" %}

* **TODO: How to swap between travel modes**
