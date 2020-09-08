---
title: Getting a marker from a location and vice versa
---

If a `MPLocation` has been displayed on a map, the marker can be retrieved using `location.marker`. On the opposite, get a `MPLocation` from a `GMSMarker` using `getLocation(marker: GMSMarker)` on `MPMapControl`:

```swift
myMapControl.getLocation(marker : GMSMarker!)
```
