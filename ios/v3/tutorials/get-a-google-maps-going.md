---
layout: default
title: Get a Google Maps going
permalink: /tutorials/get-a-google-maps-going
nav_order: 2
parent: Tutorials
has_children: true
has_toc: false
next_tutorial_url: /tutorials/get-a-google-maps-going/find-google-maps-keys
next_tutorial_name: Find Google Maps keys
---

# {{ page.title }}

## Headline 2

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

```swift
// Place the map above the demo-building
let camera = GMSCameraPosition.camera(withLatitude: 57.08585, longitude: 9.95751, zoom: 17)
// Initialise the Google map
mapView = GMSMapView.map(withFrame: CGRect.zero, camera: camera)
view = mapView
let myMapControl = MPMapControl.init(map: mapView)!
```

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

---

{% include next.html %}
