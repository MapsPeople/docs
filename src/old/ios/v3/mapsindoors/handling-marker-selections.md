---
title: Handling marker selections and other user events
---

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
