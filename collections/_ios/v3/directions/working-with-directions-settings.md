---
layout: tutorial
title: Working with Directions Settings
parent: directions
nav_weight: 4
published: true
date: 2019-08-26
---

Avoid certain **way types** on the route using the `avoidWayTypes` property.

```swift
let directionsQuery = MPDirectionsQuery.init(originPoint: origin!, destination: destination!)
directionsQuery.avoidWayTypes = ["stairs"]
```

Set a **departure date** or an **arrival date** on the route using the `departure` or `arrival` property. It will only make sense to set one of these properties at a time.

```swift
let directionsQuery = MPDirectionsQuery.init(originPoint: origin!, destination: destination!)
directionsQuery.departure = Date.init()
```
