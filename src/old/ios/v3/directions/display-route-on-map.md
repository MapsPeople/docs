---
title: Display Route on map
---

Use the `MPDirectionsService` class to search for directions. You need to build a query using the `MPDirectionsQuery` class.

This example shows how to setup a query for a route and display the result on the map:

```swift
let directions = MPDirectionsService.init()
let renderer = MPDirectionsRenderer.init()
renderer.delegate = self

let origin = MPPoint.init(lat: 57.057917, lon: 9.950361, zValue:0)
let destination = MPPoint.init(lat: 57.058038, lon: 9.950509, zValue:0)

let directionsQuery = MPDirectionsQuery.init(originPoint: origin!, destination: destination!)

directions.routing(with: directionsQuery) { (route, error) in
    renderer.map = self.map
    renderer.route = route
    renderer.routeLegIndex = 0
    renderer.animate(5)
}
```

The route object is seperated into objects of `MPRouteLeg` and these legs are again seperated indo objects of `MPRouteStep`. A specific part of the route can be rendered by setting the `routeLegIndex` and/or `routeStepIndex` properties.

```swift
let renderer = MPDirectionsRenderer.init()
renderer.routeLegIndex = 0
renderer.routeStepIndex = 1
```

The length of the `legs` and `steps` arrays determines the possible values of `routeLegIndex` and `routeStepIndex` (`0 ..< length`).
