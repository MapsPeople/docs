---
title: Show a map
toc: true
eleventyNavigation:
  title: Show a map
  key: web-v4-getting-started-map
  parent: web-v4-getting-started
  order: 130
---

<!-- Overview -->
{% include "../../../shared/getting-started/map/overview.md" %}

<!-- Set up MapsIndoors -->
{% include "../../../shared/getting-started/map/show-map.md" %}

* **TODO: Initialize MapsIndoors and show a map with MapsIndoors tiles (MapControl, mi-map-googlemaps component)**

<mi-tabs>
<mi-tab label="Manually" tab-for="manually"></mi-tab>
<mi-tab label="MapsIndoors Web Components" tab-for="components"></mi-tab>

<mi-tab-panel id="manually">

The MapsIndoors SDK is loaded using a script tag which should be inserted into the end of the `head` tag at your `index.html` page followed by the Google Maps script tag:

```html
<!-- index.html -->

<head>
  ...
  <script src="https://app.mapsindoors.com/mapsindoors/js/sdk/4.5.1/mapsindoors-4.5.1.js.gz?apikey=YOUR_MAPSINDOORS_API_KEY"></script>
  <script src="https://maps.googleapis.com/maps/api/js?libraries=geometry&key=YOUR_GOOGLE_MAPS_API_KEY"></script>
</head>
```

Remember to insert your Google Maps and MapsIndoors API keys.

</mi-tab-panel>

<mi-tab-panel id="components">

Using the `mi-map-googlemaps` component the initialization of Google Maps and MapsIndoors is handled inside of it. Insert the component tag in the begging of your body tag.

```html
<!-- index.html -->

<body>
  <mi-map-googlemaps
      style="width: 600px; height: 400px;"
      gm-api-key="YOUR_GOOGLE_MAPS_API_KEY"
      mi-api-key="YOUR_MAPSINDOORS_API_KEY">
  </mi-map-googlemaps>
</body>
```

For more information on how to configure the `mi-map-googlemaps` component, see [components.mapsindoors.com](https://components.mapsindoors.com/map-googlemaps/).

</mi-tab-panel>
</mi-tabs>
