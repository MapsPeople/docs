---
title: Getting a Marker from a Location and Vice Versa
eleventyNavigation:
  key: Getting a Marker from a Location and Vice Versa
  parent: ios-v3-guides-map-control
  order: 220
---

If a `MPLocation` has been displayed on a map, the marker can be retrieved using `location.marker`. On the opposite, get a `MPLocation` from a `GMSMarker` using `getLocation(marker: GMSMarker)` on `MPMapControl`:

```swift
myMapControl.getLocation(marker : GMSMarker!)
```
