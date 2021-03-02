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

<!-- Set up MapsIndoors -->
{% include "src/shared/getting-started/map/show-map.md" %}

<mi-tabs>
<mi-tab label="Manually" tab-for="manually"></mi-tab>
<mi-tab label="MI Components" tab-for="components"></mi-tab>

<mi-tab-panel id="manually">

The MapsIndoors SDK is hosted on a CDN and should be loaded using a script tag.

* Insert the MapsIndoors SDK script tag into `<head>` followed by the Google Maps script tag:

```html
<!-- index.html -->

<head>
  ...
  <script src="https://app.mapsindoors.com/mapsindoors/js/sdk/4.5.1/mapsindoors-4.5.1.js.gz?apikey=YOUR_MAPSINDOORS_API_KEY"></script>
  <script src="https://maps.googleapis.com/maps/api/js?libraries=geometry&key=YOUR_GOOGLE_MAPS_API_KEY"></script>
</head>
```

> Remember to add your API keys.

* Add a empty `<div>` element to `<body>` with the `id` attribute set to "map".
  
```html
<!-- index.html -->

...
<body>
  <div id="map" style="width: 600px; height: 600px;"></div>
  ...
</body>
```

To create a new instance of the [MapsIndoors class](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.MapsIndoors.html#MapsIndoors) you need a [MapView instance](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.mapView.GoogleMapsView.html#GoogleMapsView) with a few properties set.

* Create a MapView instance.
* Create a MapsIndoors instance and populate it with the mapView property.

```js
// main.js

const mapViewOptions = {
  element: document.getElementById('map'),
  center: { lat: 38.8974905, lng: -77.0362723 }, // The White House
  zoom: 17,
  maxZoom: 21,
};
const mapViewInstance = new mapsindoors.mapView.GoogleMapsView(mapViewOptions);
const mapsIndoorsInstance = new mapsindoors.MapsIndoors({
    mapView: mapViewInstance
});
```

</mi-tab-panel>
<mi-tab-panel id="components">

Using the `<mi-map-googlemaps>` component the MapsIndoors JS SDK is automatically inserted into the DOM when initialized.

The MI Components library can be loaded using [unpkg](https://unpkg.com/), a widely used CDN for everything on npm.

* Insert script tag into `<head>`.

> Check [@mapsindoors/components](https://www.npmjs.com/package/@mapsindoors/components) for latest version.

```html
<!-- index.html -->

<head>
  ...
  <script src="https://unpkg.com/@mapsindoors/components@8.2.0/dist/mi-components/mi-components.js"></script>
</head>
```

* Insert the `<mi-map-googlemaps>` custom element tag into `<body>`.
* Add and populate the `gm-api-key` and `mi-api-key` attributes with your API keys.

```html
<!-- index.html -->

...
<body>
  <mi-map-googlemaps
    style="width: 600px; height: 600px;"
    gm-api-key="YOUR_GOOGLE_MAPS_API_KEY"
    mi-api-key="YOUR_MAPSINDOORS_API_KEY">
  </mi-map-googlemaps>
  ...
</body>
```

To center the map correctly you need need the Google Maps instance.

* Get a reference to the `<mi-map-googlemaps>` element.
* Attach an ["mapsIndoorsReady"](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.MapsIndoors.html#event:ready) event listener.
* On "mapsIndoorsReady" event, get the Google Map instance and call its [`setCenter` method](https://developers.google.com/maps/documentation/javascript/reference/map#Map.setCenter).

```js
// main.js

const miMapElement = document.querySelector('mi-map-googlemaps');

miMapElement.addEventListener('mapsIndoorsReady', () => {
  miMapElement.getMapInstance().then((mapInstance) => {
    
    mapInstance.setCenter({ lat: 38.8974905, lng: -77.0362723 }); // The White House
  });
})
```

>For more information on how to configure the `<mi-map-googlemaps>` component, see [components.mapsindoors.com/map-googlemaps](https://components.mapsindoors.com/map-googlemaps/).

</mi-tab-panel>
</mi-tabs>

## Interactive Floor Selector

Next you'll display a floor selector to navigate between floors. The floor selector element will be positioned as an map control.

<mi-tabs>
<mi-tab label="Manually" tab-for="manually"></mi-tab>
<mi-tab label="MI Components" tab-for="components"></mi-tab>
<mi-tab-panel id="manually">

* Add an empty `<div>` element programmatically.
* Create a new floor selector instance.
* Push the `floorSelectorElement` to the `googleMapsInstance` as an control element.

```js
// main.js

const googleMapsInstance = mapViewInstance.getMap();

const floorSelectorElement = document.createElement('div');
new mapsindoors.FloorSelector(floorSelectorElement, mapsIndoorsInstance);
googleMapsInstance.controls[google.maps.ControlPosition.RIGHT_TOP].push(floorSelectorElement);
```

</mi-tab-panel>
<mi-tab-panel id="components">

Using the `<mi-map-googlemaps>` element you can add the  [floorSelectorControlPosition attribute](https://components.mapsindoors.com/map-googlemaps/) to your existing element.

* Add the `floor-selector-control-position` attribute with the value "TOP_RIGHT".

```html
<!-- index.html -->

<mi-map-googlemaps
  ...
  floor-selector-control-position="TOP_RIGHT">
</mi-map-googlemaps>
```

> See all available control positions in the [Google Maps Documentation](https://developers.google.com/maps/documentation/javascript/controls#ControlPositioning).

</mi-tab-panel>
