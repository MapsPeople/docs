---
title: Getting directions
toc: true
eleventyNavigation:
  title: Directions
  key: ios-v3-getting-started-directions
  parent: ios-v3-getting-started
  order: 160
---

<!-- Overview -->
{% include "src/shared/getting-started/directions/overview.md" %}

<!-- Directions -->
{% include "src/shared/getting-started/directions/directions.md" %}

Use the `MPDirectionsService` class to search for directions. You need to build a query using the `MPDirectionsQuery` class.

This example shows how to modify the view controller with a query for a route and display the result on the map:

```swift
class MapViewController: UIViewController {
  private var mapControl: MPMapControl?
  private let renderer = MPDirectionsRenderer()

  override func viewDidLoad() {
    super.viewDidLoad()
    mapControl = MPMapControl(map: mapView)
    directions()
  }

  func directions() {
    let directions = MPDirectionsService()

    let origin = MPPoint(lat: 38.897382, lon: -77.037447, zValue:0)
    let destination = MPPoint(lat: 38.897583, lon: -77.037821, zValue:0)

    let directionsQuery = MPDirectionsQuery(originPoint: origin!, destination: destination!)

    directions.routing(with: directionsQuery) { (route, error) in
      self.renderer.map = self.mapView
      self.renderer.route = route
      self.renderer.routeLegIndex = 0
      self.renderer.animate(5)
    }
  }
}
```

The route object is seperated into objects of `MPRouteLeg` and these legs are again seperated indo objects of `MPRouteStep`. A specific part of the route can be rendered by setting the `routeLegIndex` and/or `routeStepIndex` properties.

```swift
renderer.routeLegIndex = 1
```

The length of the `legs` and `steps` arrays determines the possible values of `routeLegIndex` and `routeStepIndex` (`0 ..< length`).

<!-- Travel-mode -->
{% include "src/shared/getting-started/directions/travel-mode.md" %}

Set **travel mode** on your request using the `travelMode` property on `MPDirectionsQuery`:

```swift
let directionsQuery = MPDirectionsQuery.init(originPoint: origin!, destination: destination!)
directionsQuery.travelMode = .driving
```

<p class="next-article"><a class="mi-button mi-button--outline" href="{{ site.url }}/ios/v3/getting-started/livedata/">Next up: Live Data</a></p>
