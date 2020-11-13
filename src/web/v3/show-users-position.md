---
title: Showing the user's location aka. Blue Dot
eleventyNavigation:
  parent: web-v3
  key: Showing the user's location aka. Blue Dot
---

## Overview

In this guide, you will learn how to show a dot on the map, representing the user's current location.

The JSFiddle example below draws a MapsIndoors map, and adds a position control. Whenever position is received or updated, the map is always panned to that position. The code will be run through bit by bit in this guide.

<script async src="//jsfiddle.net/ammapspeople/4qxL90ta/embed/html,result/"></script>

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

If the user has granted permission indefinitely, the map will pan to the current position when reloading the app *(this does not work in Internet Explorer 11 due to missing support of the [Permissions API](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API))*.

You will have to add the generated button to the map yourself.

### Minimal example

```js
// MapsIndoors instantiation, which you should already have
const myMapsIndoors = new mapsindoors.MapsIndoors( /* ... */ );

// Create element to hold the position control
const myPositionControlElement = document.createElement('div');
// Create position control and attach it to element
new mapsindoors.PositionControl(myPositionControlElement, { mapsIndoors: myMapsIndoors });
// Add the element now holding position control to your map
myGoogleMap.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(myPositionControlElement);
```

### maxAccuracy

Since browsers sometimes give inaccurate positions, you can use the `maxAccuracy` option when instantiating the `PositionControl`. Then the dot is only shown on the map if the given accuracy is below the given value:

```js
// Generate PositionControl and only show the dot on the map if accuracy is better than 80 meters
new mapsindoors.PositionControl(myPositionControlElm, { mapsIndoors: myMapsIndoors, maxAccuracy: 80 });
```

### Other options

See the [options description](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/global.html#PositionControlOptions) to see how you can configure [Geolocation PositionOptions](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions), dot and circle marker styles.

---

## Guides

* [Create a simple map with MapsIndoors](/../web/v3/guides/simple_map/)
* [Update display rules dynamically](/../web/v3/guides/dynamic-updates/)
* [Event handling](/../web/v3/guides/using_events/)
* [Search and filtering](/../web/v3/guides/search_and_filtering/)
