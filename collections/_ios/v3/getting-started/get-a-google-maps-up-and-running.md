---
layout: tutorial
title: Get a Google Maps up and running
parent: getting-started
nav_weight: 3
published: false
date: 2019-08-26
---
## Get a Google Maps up and running

Use the `MPMapControl` class to set up a Google map with MapsPeople venues, buildings & locations. Place the following code in the `viewDidLoad` method in your view controller displaying the Google map.

```swift
// Place the map above the demo-building
let camera = GMSCameraPosition.camera(withLatitude: 57.08585, longitude: 9.95751, zoom: 17)
// Initialise the Google map
mapView = GMSMapView.map(withFrame: CGRect.zero, camera: camera)
view = mapView
let myMapControl = MPMapControl.init(map: mapView)!
```
