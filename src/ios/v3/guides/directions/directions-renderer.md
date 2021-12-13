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
renderer.fitBounds = true
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

## Controlling the Visible Segments on the Directions Renderer

As previously mentioned, the route object is seperated into objects of `MPRouteLeg` and these legs are again seperated indo objects of `MPRouteStep`. Unless the Route only contains one Leg, the Directions Renderer does not allow the full Route to be rendered all at once. A specific segment of the route can be rendered by setting the `routeLegIndex` and/or `routeStepIndex` properties on the `MPDirectionsRenderer`.

```swift
let renderer = MPDirectionsRenderer.init()
renderer.routeLegIndex = 0
renderer.routeStepIndex = 1
```

The length of the `legs` and `steps` arrays determines the possible values of `routeLegIndex` and `routeStepIndex` (`0 ..< length`).

## Reacting to Directions Renderer Events

Assigning a `MPDirectionsRenderer` delegate will make it possible to know which floor the currently rendered part of the route belongs to. As such, you may want to change the currently visible floor on `MPMapControl` like shown in the example below.

```swift
func floorDidChange(_ floor: NSNumber!) {
    mapControl?.currentFloor = floor
}
```

### Reacting to Label Tapping

The Directions Labels refer to labels shown at the start and/or end of the rendered route segment (leg or step) path, that may provide contextual information or show instructions for the needed user action at that point. E.g. the end label can be retrieved with `.nextRouteLegButton`. The labels are created as simple `UIButton` instances that are rendered as markers on the map. As with most buttons, it is possible to add targets to these labels, so you can react to touch events.

```swift

override func viewDidAppear(_ animated: Bool) {
    let renderer = MPDirectionsRenderer.init()
    renderer.delegate = self
    renderer.map = self.map

    renderer.nextRouteLegButton?.addTarget(self, action: #selector(nextLeg), for: .touchUpInside)
    renderer.previousRouteLegButton?.addTarget(self, action: #selector(previousLeg), for: .touchUpInside)
}

@objc func nextLeg() {
    renderer.routeLegIndex += 1
}

@objc func previousLeg() {
    renderer.routeLegIndex -= 1
}

```

In the above example, a target is added to `nextRouteLegButton` and  `nextRouteLegButton` calling the method `nextLeg` and `previousLeg` respectively. These methods then changes the visible Route Leg.

## Show Content of Nearby Locations

It is possible to show contextual information on the start or end points of the rendered path of a route segment by configuring the directions renderer to look for nearby locations or POIs.

![Show content of nearby locations](/assets/ios/directions-renderer/directions_renderer_contextual_info.png)

This is done by creating an appropriate `MPDirectionsRendererContextualInfoSettings` object and passing it to the directions renderer. If the `contextualInfoSettings` property is not set, no contextual information will be searched for and shown.

```swift
class MPDirectionsRendererContextualInfoSettings {
    // The Types of Location that should be used when showing text and icon for a start or end marker.
    // If no Types are supplied, all Types of Locations will be considered.
    var types: [String]?
    
    // The Categories of Location that should be used when showing text and icon for a start or end marker.
    // If no Categories are supplied, all Categories of Locations will be considered.
    var categories: [String]?

    // The maximum distance in meters allowed for using text and icon from a Location. Leave blank for a sensible default.
    var maxDistance: Double
        
    // Which content should be used. Default is IconAndName.
    var contentScope: MPDirectionsRendererContextualInfoScope
}
```

Possible values for `contentScope` are `IconAndName` (default), `IconOnly`, or `NameOnly` as defined in `MPDirectionsRendererContextualInfoScope`.

This is an example of how to show information about locations of type "Entry" within 20 meters from the route with both an icon and the name:

```swift
let contextualSettings = DirectionsRendererContextualInfoSettings()
contextualSettings.types = ["Entry"]
contextualSettings.maxDistance = 20
myDirectionsRenderer.contextualInfoSettings = contextualSettings
```
