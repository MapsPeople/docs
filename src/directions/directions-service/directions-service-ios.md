---
title: Directions Service for iOS
eleventyNavigation:
  key: directions-service-ios
  parent: directions-service
  title: Directions Service for iOS
  order: 20
---

The class `MPDirectionsService` is used to request routes from one point to another. The minimal required input is an `origin` and a `destination`. You need to build a query using the `MPDirectionsQuery` class.

This example shows how to setup and execute a query for a Route:

```swift
let directions = MPDirectionsService.init()
let origin = MPPoint.init(lat: 57.057917, lon: 9.950361, zValue:0)!
let destination = MPPoint.init(lat: 57.058038, lon: 9.950509, zValue:0)!
let directionsQuery = MPDirectionsQuery.init(originPoint: origin, destination: destination)

directions.routing(with: directionsQuery) { (route, error) in

}
```

<!-- Travel-mode -->
{% include "src/shared/getting-started/directions/travel-mode.md" %}

Set **travel mode** on your request using the `travelMode` property on `MPDirectionsQuery`:

```swift
let directionsQuery = MPDirectionsQuery.init(originPoint: origin!, destination: destination!)
directionsQuery.travelMode = .driving
```

The travel modes generally applies for outdoor navigation. Indoor navigation calculations are based on **walking** travel mode.

## Route Restrictions

### Avoiding Stairs and Steps

For a wheelchair user or a user with physical disabilities it may be relevant to request a Route that avoids stairs and steps. Avoid certain **way types** on the route using the `avoidWayTypes` property.

```swift
let directionsQuery = MPDirectionsQuery.init(originPoint: origin, destination: destination)
directionsQuery.avoidWayTypes = ["stairs"]
```

### App User Role Restrictions

In the MapsIndoors CMS it is possible to restrict certain ways in the Route Network to be used by users of certain Roles.

It is possible to get the available Roles with help of the `MPSolutionProvider`:

```swift
MPSolutionProvider.init().getUserRoles { (userRoles, error) in
    let myUserRole = myUserRole.first
}
```

User Roles can be set on a global level using `MapsIndoors.userRoles`.

```swift
MapsIndoors.userRoles = [myUserRole]
```

This will affect all following Directions requests as well as search queries with `MPLocationService`. User Roles can also be set for a single Directions request.

```swift
let directionsQuery = MPDirectionsQuery.init(originPoint: origin, destination: destination)
directionsQuery.userRoles = [myUserRole]

directionsService.routing(with: directionsQuery) { (route, error) in

}
```

User Role restrictions set for a specific Directions Query will take precedence over User Roles set on a global level.

## Transit Departure and Arrival Time

Set a **departure date** or an **arrival date** on the route using the `departure` or `arrival` property. This is relevant when using the Transit travel mode. It will only make sense to set one of these properties at a time.

```swift
let directionsQuery = MPDirectionsQuery.init(originPoint: origin, destination: destination)
directionsQuery.departure = Date.init()
```
