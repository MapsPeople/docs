---
title: Subscribe to floor changes in the rendering
published: true
date: 2019-09-30
eleventyNavigation:
  key: directions-floor-changes
  title: Subscribe to floor changes in the rendering
  parent: ios-v3-directions
  order: 6
---

Assigning a `MPDirectionsRenderer` delegate will make it possible to know which floor the currently rendered part of the route belongs to:

```swift
func floorDidChange(_ floor: NSNumber!) {
    mapControl?.currentFloor = floor
}
```
