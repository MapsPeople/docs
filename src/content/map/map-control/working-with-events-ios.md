---
title: Working with Events for iOS
eleventyNavigation:
  key: map-map-control-events-ios
  parent: map-map-control
  title: Working with Events for iOS
  order: 220
---

<!-- Known Issues -->
{% include "src/shared/known-issues-ios.md" %}

The MapControl delegate can inform you when the various data from the MapsIndoors services are loaded through it's `MPMapControlDelegate` so you should set the delegate, in most of the cases with the current UIViewController:

```swift
myMapControl.delegate = self
```

Implement the `onMapDataReady` method :

```swift
class ViewController: UIViewController, MPMapControlDelegate
```

Then implementing the methods below :

```swift
func onMapDataReady(){

}
```
