---
title: Showing the user's location aka. Blue Dot
eleventyNavigation:
  parent: web-v4-guides
  key: Showing the user's location aka. Blue Dot
---

## Overview

In this guide, you will learn how to show a dot on the map, representing the user's current location.

The JSFiddle example below draws a MapsIndoors map, and adds a position control. Whenever a position is received or updated, if the user has not moved the map themselves, the map will pan to the new location. If the user has moved the map, it will not center on the new location until position control is clicked.

<script async src="//jsfiddle.net/ammapspeople/wtan25gv/embed/html,result/"></script>

### How the position is determined

The position is determined by utilizing the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API), which all modern browsers expose.

Behind the scenes, the browser determines your position based on a number of factors, including IP address, cell towers, GPS, Wifi access points etc. The implementation varies from browser to browser, and from device to device. There is currently no way to tweak the Geolocation API to use different positioning providers.

All browsers will ask the user for permission to share the location by displaying a prompt. This prompt is a part of the browser, thus not customizable.

Also note that the Geolocation API will only work on `https` websites (and `localhost` for development).

### The MapsIndoors `PositionControl` class

The MapsIndoors JavaScript SDK exposes a `PositionControl` class.

An instantiation of this class will generate a button that, when clicked:

* will start tracking the user's device location
* show a dot on the map representing location (if accuracy is good enough - more on that later)
* show a circle representing the position accuracy

Clicking on the button will pan the map, so the current position is in the center of the map.

The button will be blue whenever the position is in center of the map.

If the user has granted permission indefinitely, the map will pan to the current position when reloading the app *(this may not work in certain browsers, such as Internet Explorer 11, due to missing support of the [Permissions API](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API))*.

You will have to add the generated button to the map yourself.

### Basic Example

MapsIndoors supports both Google Maps and MapBox, and the methods for each vary slightly. Both still revolve around `PositionControl`.

<mi-tabs>
<mi-tab label="Google Maps" tab-for="google-maps"></mi-tab>
<mi-tab label="Mapbox" tab-for="mapbox"></mi-tab>
<mi-tab-panel id="google-maps">

```js
// MapsIndoors MapView instantiation, which you should already have
const mapViewInstance = new mapsindoors.mapView.GoogleMapsView(/*...*/);
// MapsIndoors instantiation, which you should already have
const mapsIndoorsInstance = new mapsindoors.MapsIndoors(/*...*/);
// Obtain a reference to the Google map.
const googleMapsInstance = mapViewInstance.getMap();
// Create element to hold the position control
const positionControlElement = document.createElement("div");
// Create position control and attach it to element
const positionControl = new mapsindoors.PositionControl(positionControlElement, {
    mapsIndoors: mapsIndoorsInstance,
});
// Add the element now holding position control to your map
googleMapsInstance.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(positionControlElement);
```

</mi-tab-panel>
<mi-tab-panel id="mapbox">

```js
// MapsIndoors MapView instantiation, which you should already have
const mapViewInstance = new mapsindoors.mapView.GoogleMapsView(/*...*/);
// MapsIndoors instantiation, which you should already have
const mapsIndoorsInstance = new mapsindoors.MapsIndoors(/*...*/);
// Obtain a reference to the Mapbox map.
const mapboxInstance = mapViewInstance.getMap();

// Create element to hold the position control
const positionControlElement = document.createElement("div");
// Create position control and attach it to element
const positionControl = new mapsindoors.PositionControl(positionControlElement, {
    mapsIndoors: mapsIndoorsInstance,
});
// Add the element now holding position control to your map
mapboxInstance.addControl({ onAdd: function () { return positionControlElement }, onRemove: function () { } });
```

</mi-tab-panel>
</mi-tabs>

### maxAccuracy

Since browsers sometimes give inaccurate positions, you can use the `maxAccuracy` option when instantiating the `PositionControl`. Then the dot is only shown on the map if the given accuracy is below the given value:

```js
// Generate PositionControl and only show the dot on the map if accuracy is better than 80 meters
new mapsindoors.PositionControl(myPositionControlElm, { mapsIndoors: myMapsIndoors, maxAccuracy: 80 });
```
