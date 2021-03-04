---
title: Working with Directions Settings
eleventyNavigation:
  parent: ios-v3-guides-directions
  key: Working with Directions Settings
  order: 440
---

## Travel Modes

Set **travel mode** on your request using the `traveMode` property on `MPDirectionsQuery`:

```swift
let directionsQuery = MPDirectionsQuery.init(originPoint: origin!, destination: destination!)
directionsQuery.travelMode = .driving
```

The travel modes generally applies for outdoor navigation. Indoor navigation calculations are based on **walking** travel mode.

## Route Restrictions

Avoid certain **way types** on the route using the `avoidWayTypes` property:

```swift
let directionsQuery = MPDirectionsQuery.init(originPoint: origin!, destination: destination!)
directionsQuery.avoidWayTypes = ["stairs"]
```

## Departure and Arrival Time

Set a **departure date** or an **arrival date** on the route using the `departure` or `arrival` property. It will only make sense to set one of these properties at a time.

```swift
let directionsQuery = MPDirectionsQuery.init(originPoint: origin!, destination: destination!)
directionsQuery.departure = Date.init()
```
