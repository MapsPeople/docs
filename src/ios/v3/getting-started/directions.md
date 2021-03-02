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

This example shows how to setup a query for a route and display the result on the map:

```swift
let directions = MPDirectionsService.init()
let renderer = MPDirectionsRenderer.init()

let origin = MPPoint.init(lat: 57.057917, lon: 9.950361, zValue:0)
let destination = MPPoint.init(lat: 57.058038, lon: 9.950509, zValue:0)

let directionsQuery = MPDirectionsQuery.init(originPoint: origin!, destination: destination!)

directions.routing(with: directionsQuery) { (route, error) in
    renderer.map = self.googleMap
    renderer.route = route
    renderer.routeLegIndex = 0
    renderer.animate(5)
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

The travel modes generally applies for outdoor navigation. Indoor navigation calculations are based on **walking** travel mode.
