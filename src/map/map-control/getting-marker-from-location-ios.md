---
title: Getting a Marker from a Location for iOS
eleventyNavigation:
  key: map-map-control-marker-from-location-ios
  parent: map-map-control
  title: Getting a Marker from a Location for iOS
  order: 220
---

If a `MPLocation` has been displayed on a map, the marker can be retrieved using `location.marker`. On the opposite, get a `MPLocation` from a `GMSMarker` using `getLocation(marker: GMSMarker)` on `MPMapControl`:

```swift
myMapControl.getLocation(marker : GMSMarker!)
```
