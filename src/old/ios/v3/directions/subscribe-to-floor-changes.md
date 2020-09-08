---
title: Subscribe to floor changes in the rendering
---

Assigning a `MPDirectionsRenderer` delegate will make it possible to know which floor the currently rendered part of the route belongs to:

```swift
func floorDidChange(_ floor: NSNumber!) {
    mapControl?.currentFloor = floor
}
```
