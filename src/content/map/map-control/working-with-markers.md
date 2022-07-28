---
title: Working with Markers
eleventyNavigation:
  key: map-map-control-working-with-markers
  parent: map-map-control
  title: Working with Markers
  order: 11
---

<mi-tabs>
<mi-tab label="iOS" tab-for="ios"></mi-tab>
<mi-tab-panel id="ios">

<!-- Known Issues -->
{% include "src/content/shared/known-issues-ios.md" %}

## Getting Marker from Location

If a `MPLocation` has been displayed on a map, the marker can be retrieved using `location.marker`. On the opposite, get a `MPLocation` from a `GMSMarker` using `getLocation(marker: GMSMarker)` on `MPMapControl`:

```swift
myMapControl.getLocation(marker : GMSMarker!)
```

## Handling Marker Selections

Detecting the user tapping a marker or an infowindow is part of the Google Maps SDK for iOS. Assign `myGMSMapView.delegate` and implementing the methods: `mapView.didTapMarker(marker: GMSMarker)` and `mapView.didTapInfoWindowOfMarker(marker: GMSMarker)`

```swift
func mapView(_ mapView: GMSMapView, didTap marker: GMSMarker) -> Bool {
    let location = mapControl?.getLocation(marker)
    if location != nil {
        myTextLabel.text = location!.name
    }
    return false
}

func mapView(_ mapView: GMSMapView, didTapInfoWindowOf marker: GMSMarker) -> Bool {
    let location = mapControl?.getLocation(marker)
    if location != nil {
        myTextLabel.text = location!.name
    }
    return false
}
```

</mi-tab-panel>
</mi-tabs>
