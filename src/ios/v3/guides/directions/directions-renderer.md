---
title: Directions Rendering
eleventyNavigation:
  key: ios-v3-guides-directions-renderer
  parent: ios-v3-guides-directions
  title: Directions Rendering
  order: 20
---

When getting the result Route from a [Directions Service](../directions/directions-service), we may want to display this Route on a map. To perform this task the `MPDirectionsRenderer` can be used.

This example shows how to setup a query for a route and display the result on a Google Map using the `MPDirectionsRenderer`:

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

As previously mentioned, the route object is seperated into objects of `MPRouteLeg` and these legs are again seperated indo objects of `MPRouteStep`. Unless the Route only contains one Leg, the Directions Renderer does not allow the full Route to be rendered all at once. A specific part of the route can be rendered by setting the `routeLegIndex` and/or `routeStepIndex` properties on the `MPDirectionsRenderer`.

```swift
let renderer = MPDirectionsRenderer.init()
renderer.routeLegIndex = 0
renderer.routeStepIndex = 1
```

The length of the `legs` and `steps` arrays determines the possible values of `routeLegIndex` and `routeStepIndex` (`0 ..< length`).

Assigning a `MPDirectionsRenderer` delegate will make it possible to know which floor the currently rendered part of the route belongs to:

```swift
func floorDidChange(_ floor: NSNumber!) {
    mapControl?.currentFloor = floor
}
```
