---
layout: ios/v2/default
title: Set up your environment
slug: set-up-your-environment
published: true
date: 2019-07-10
last_modified_at: 2019-07-12
---

# {{ page.title }}

Created: {{ page.date | date: "%B %-d, %Y" }}. {% if page.last_modified_at %}Updated: {{ page.last_modified_at |date: "%B %-d, %Y" }} {% endif %}

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

{% include tip.html tip="Drink plenty of water." %}

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

---

{% include next.html next_url="/ios/v2/get-a-google-maps-up-and-running" next_title="Get a Google Maps up and running" %}
