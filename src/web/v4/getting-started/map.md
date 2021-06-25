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
{% include "src/shared/getting-started/map/overview.md" %}

<!-- JS Fiddle intro -->
{% include "src/web/v4/getting-started/js-fiddle-intro.md" %}

<mi-tabs>
<mi-tab label="Manually" tab-for="manually"></mi-tab>
<mi-tab label="MI Components" tab-for="components"></mi-tab>
  <mi-tab-panel id="manually">
    <iframe width="100%" src="//jsfiddle.net/simonlaustsen/3z9tby8q/42/embedded/js,html,result/" frameborder="0"></iframe>
  </mi-tab-panel>

  <mi-tab-panel id="components">
    <iframe width="100%" src="//jsfiddle.net/simonlaustsen/fb5rauto/24/embedded/js,html,result/" frameborder="0"></iframe>
  </mi-tab-panel>
</mi-tabs>

<!-- Set up MapsIndoors -->
{% include "src/shared/getting-started/map/show-map.md" %}

<mi-tabs>
<mi-tab label="Manually" tab-for="manually"></mi-tab>
<mi-tab label="MI Components" tab-for="components"></mi-tab>

<mi-tab-panel id="manually">
The MapsIndoors SDK is hosted on a CDN and should be loaded using a script tag.

Insert the MapsIndoors SDK script tag into `<head>`, followed by the Google Maps script tag:

```html
<!-- index.html -->

<head>
  ...
  <script src="https://app.mapsindoors.com/mapsindoors/js/sdk/4.5.1/mapsindoors-4.5.1.js.gz?apikey=YOUR_MAPSINDOORS_API_KEY"></script>
  <script src="https://maps.googleapis.com/maps/api/js?libraries=geometry&key=YOUR_GOOGLE_MAPS_API_KEY"></script>
</head>
```

> Remember to add your API keys. You can use the demo MapsIndoors API key showing "The White House": {{sdk.tutorialAPIKey}}

Add an empty `<div>` element to `<body>` with the `id` attribute set to "map":

```html
<!-- index.html -->

<body>
  <div id="map" style="width: 600px; height: 600px;"></div>
  ...
</body>
```

To load data and display it on the map, we need to create a new _instance_ of the [`MapsIndoors` class](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.MapsIndoors.html#MapsIndoors) with a [`mapView` instance](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.mapView.GoogleMapsView.html#GoogleMapsView) with a few _properties_ set:

```js
// main.js

const mapViewOptions = {
  element: document.getElementById('map'),
  center: { lat: 38.8974905, lng: -77.0362723 }, // The White House
  zoom: 17,
  maxZoom: 22,
};
const mapViewInstance = new mapsindoors.mapView.GoogleMapsView(mapViewOptions);
const mapsIndoorsInstance = new mapsindoors.MapsIndoors({
    mapView: mapViewInstance
});
```

What happens in this snippet is we create a `mapViewInstance` that pulls up a `GoogleMapsView` with some `mapViewOptions`. The options define which element in the html-file to display the map in (in this case `<div id="map">`), where the map should center, what zoom level to display, and what the max zoom level is.

<!-- Add screenshot -->

</mi-tab-panel>
<mi-tab-panel id="components">

Using the `<mi-map-googlemaps>` component, the MapsIndoors JS SDK is automatically inserted into the DOM when initialized.

The MapsIndoors Web Components library can be loaded using [unpkg](https://unpkg.com/), a widely used CDN for everything on [npm](https://npmjs.com).

Insert script tag into `<head>`:

> Check [@mapsindoors/components](https://www.npmjs.com/package/@mapsindoors/components) for latest version.

```html
<!-- index.html -->

<head>
  ...
  <script src="https://unpkg.com/@mapsindoors/components@8.2.0/dist/mi-components/mi-components.js"></script>
</head>
```

After you added the script tag into `<head>`, add the `<mi-map-googlemaps>` custom element into `<body>`. We need to add and populate the `gm-api-key` and `mi-api-key` attributes with your API keys as well:

```html
<!-- index.html -->

<body>
  <mi-map-googlemaps
    style="width: 600px; height: 600px;"
    gm-api-key="YOUR_GOOGLE_MAPS_API_KEY"
    mi-api-key="YOUR_MAPSINDOORS_API_KEY">
  </mi-map-googlemaps>
  ...
</body>
```

> Remember to add your API keys. You can use the demo MapsIndoors API key showing "The White House": {{sdk.tutorialAPIKey}}

To center the map correctly, you need need the Google Maps _instance_ in your JavaScript-file.

First we get a reference to the `<mi-map-googlemaps>` element. Then we attach the [`mapsIndoorsReady`](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.MapsIndoors.html#event:ready) event listener so we'll know when MapsIndoors is ready after loading. Lastly, on the `mapsIndoorsReady` event, get the Google Map _instance_ and call its [`setCenter` method](https://developers.google.com/maps/documentation/javascript/reference/map#Map.setCenter) to center the map on the loaded data:

```js
// main.js

const miMapElement = document.querySelector('mi-map-googlemaps');

miMapElement.addEventListener('mapsIndoorsReady', () => {
  miMapElement.getMapInstance().then((mapInstance) => {
    mapInstance.setCenter({ lat: 38.8974905, lng: -77.0362723 }); // The White House
  });
})
```

> For more information on how to configure the `<mi-map-googlemaps>` component, see [components.mapsindoors.com/map-googlemaps](https://components.mapsindoors.com/map-googlemaps/).

</mi-tab-panel>
</mi-tabs>

You should now see a Google Maps map with MapsIndoors data loaded on top.

## Show a Floor Selector

Next, we'll add a Floor Selector for changing between Floors.

<mi-tabs>
<mi-tab label="Manually" tab-for="manually"></mi-tab>
<mi-tab label="MI Components" tab-for="components"></mi-tab>
<mi-tab-panel id="manually">

First, we add an empty `<div>` element programmatically. Then we create a new `FloorSelector` _instance_ and push the `floorSelectorElement` to the `googleMapsInstance` to position it as a map controller:

```js
// main.js

const googleMapsInstance = mapViewInstance.getMap();

const floorSelectorElement = document.createElement('div');
new mapsindoors.FloorSelector(floorSelectorElement, mapsIndoorsInstance);
googleMapsInstance.controls[google.maps.ControlPosition.RIGHT_TOP].push(floorSelectorElement);
```

</mi-tab-panel>
<mi-tab-panel id="components">

Using the `<mi-map-googlemaps>` element, you can add the [floorSelectorControlPosition attribute](https://components.mapsindoors.com/map-googlemaps/) to your existing element. In this case with the value `"TOP_RIGHT"`:

```html
<!-- index.html -->

<mi-map-googlemaps
  ...
  floor-selector-control-position="TOP_RIGHT">
</mi-map-googlemaps>
```

> See all available control positions in the [Google Maps Documentation](https://developers.google.com/maps/documentation/javascript/controls#ControlPositioning).

</mi-tab-panel>

You should now be able to switch between the first and second Floors of The White House.

<!-- Add screenshot -->

<p class="next-article"><a class="mi-button mi-button--outline" href="{{ site.url }}/web/v4/getting-started/search/">Next up: Search</a></p>
