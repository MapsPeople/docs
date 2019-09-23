---
layout: tutorial
title: Subscribe to floor changes in the rendering
parent: directions
nav_weight: 460
published: true
date: 2019-08-26
---

Assigning a `MPDirectionsRenderer` delegate will make it possible to know which floor the currently rendered part of the route belongs to:

```swift
func floorDidChange(_ floor: NSNumber!) {
    mapControl?.currentFloor = floor
}
```
