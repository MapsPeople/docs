---
layout: tutorial
title: Working with Live Updates / Real Time Data in MapsIndoors for iOS
parent: live-data
nav_weight: 330
published: true
date: 2020-08-07
permalink: /ios/v3/live-data/live-data-tutorial
---

In this tutorial you will learn to work with Live Updates / real-time data in MapsIndoors. It is recommended that you read the [Live Data Introduction](/ios/v3/live-data) before continuing.

We will create a view controller displaying a map that shows some dynamic changes that are initiated from Live Data sources known by MapsIndoors. The test data are of the Occupancy Domain Type and the Position Domain Type.

Create a class `LiveDataController` that inherits from `UIViewController`.

```swift
class LiveDataController: UIViewController {
```

Add buttons for toggling subscriptions, one button for Live Position Updates and one for Live Occupancy Updates.

```swift
let positionButton = UIButton.init()
let occupancyButton = UIButton.init()
```

Add a `GMSMapView` and a `MPMapControl` to the class

```swift
var map: GMSMapView? = nil
var mapControl: MPMapControl? = nil
```

Add a `MPLiveDataManager` to the class, being the shared instance. The property is declared `lazy` in order to only instantiate the shared instance once it is needed.

```swift
lazy var liveManager = MPLiveDataManager.sharedInstance()
```

Add a method `setupSubscriptionButtons()` setting up buttons that enables/disables the subscriptions.

```swift
fileprivate func setupSubscriptionButtons() {
    positionButton.setTitle("See Live Positions", for: .normal)
    positionButton.setTitle("Tracking Live Positions", for: .selected)
    positionButton.addTarget(self, action: #selector(togglePosition), for: .touchUpInside)
    positionButton.backgroundColor = UIColor.blue

    occupancyButton.setTitle("See Live Occupancy", for: .normal)
    occupancyButton.setTitle("Showing Live Occupancy", for: .selected)
    occupancyButton.addTarget(self, action: #selector(toggleOccupancy), for: .touchUpInside)
    occupancyButton.backgroundColor = UIColor.red
}

```swift
Add a method `toggleSubscription()` that does the actual toggling of a subscription for a button based on the buttons `isSelected` flag. Swap current selected state for button. If the flag is true and the button is selected, call the Live Data Manager's `subscribe()` method with the given Topic Criteria. We will also call a `startFlash()`method that should make the button flash. More on this later. If the flag is false and the button is not selected, call the Live Data Manager's `unsubscribe()` method with the given Topic Criteria. Similarly we will call a `stopFlash()`method that should stop the button flash.

```swift
fileprivate func toggleSubscription(_ button: UIButton, _ topic: MPLiveTopicCriteria) {
    button.isSelected = !button.isSelected
    if button.isSelected {
        liveManager.subscribe(topic)
        button.startFlash()
    } else {
        liveManager.unsubscribe(topic)
        button.stopFlash()
    }
}
```

Define an objective-c method `togglePosition()` that will receive events from your `positionButton`. In this method create a `position` Topic Criteria and call `togglePosition` with the button and the Topic Criteria.

```swift
@objc func togglePosition(button:UIButton) {
    let topic = MPLiveTopicCriteria.domainType(MPLiveDomainType.position)
    toggleSubscription(button, topic)
}
```

Define an objective-c method `toggleOccupancy()` that will receive events from your `occupancyButton`. In this method create a `occupancy` Topic Criteria and call `togglePosition` with the button and the Topic Criteria.

```swift
@objc func toggleOccupancy(button:UIButton) {
    let topic = MPLiveTopicCriteria.domainType(MPLiveDomainType.occupancy)
    toggleSubscription(button, topic)
}

override func viewDidLoad() {

    super.viewDidLoad()

    MapsIndoors.provideAPIKey("e4e4dcc9b98a4730b426c269", googleAPIKey: nil)
```

Inside `viewDidLoad()`, initialise your instance of `GMSMapView` and `MPMapControl`. Set the delegate to be able to get notified about Live Updates for the map.

```swift
self.map = GMSMapView.init(frame: CGRect.zero)
self.mapControl = MPMapControl.init(map: self.map!)
self.mapControl?.delegate = self as MPMapControlDelegate
```

Inside `viewDidLoad()`, also request a building and go to this building on the map.

```swift
let q = MPQuery.init()
let f = MPFilter.init()
q.query = "Building"

MPLocationService.sharedInstance().getLocationsUsing(q, filter: f) { (locations, error) in
    if let loc = locations?.first {
        self.mapControl?.go(to: loc)
    }
}
```

Inside `viewDidLoad()` method, call `setupSubscriptionButtons()` arrange the map view and the buttons in stackviews.

```swift
setupSubscriptionButtons()
let buttonStackView = UIStackView.init(arrangedSubviews: [positionButton, occupancyButton])
buttonStackView.axis = .horizontal
buttonStackView.distribution = .fillEqually
let stackView = UIStackView.init(arrangedSubviews: [map!, buttonStackView])
stackView.axis = .vertical
view = stackView
```

Optionally, when you leave this controller, unsubscribe all Live Update Topics.

```swift
override func viewDidDisappear(_ animated: Bool) {
    liveManager.unsubscribeAll()
}
```

Create an extension for `LiveDataController` to make it adopt the `MPMapControlDelegate` protocol.

```swift
extension LiveDataController : MPMapControlDelegate {
```

In the `LiveDataController` extension, add the method `handleLiveUpdate()` that handles a Live Update for a `MPLocation`. This method should only handle the `occupancy` Domain Type, so the first thing is to check for an `occupied` value in the `occupancy` Domain Type. After this verification, do the following:

1. If `occupied == "True"` create the "closed" image, else create the "open" image.
1. Setup a Location Display Rule with that image.
1. Check for a `nrOfPeople`value in the same Domain Type.
1. If present use the value in the label for the Location.
1. Assign the new Display Rule to the Location through `MPMapControl`.

```swift
private func handleLiveUpdate(_ forLocation: MPLocation) {
    let domainType = MPLiveDomainType.occupancy
    if let occupied = loc.getLiveValue(forKey:"occupied", domainType: domainType) {
        var img:UIImage?
        if occupied == "True" {
            img = UIImage.init(named: "closed.png")
        } else {
            img = UIImage.init(named: "open.png")
        }
        let dr = MPLocationDisplayRule.init(name: domainType, andIcon: img, andZoomLevelOn: 15)!
        dr.iconSize = CGSize.init(width: 10, height: 10)

        if let peopleCount = loc.getLiveValue(forKey:"nrOfPeople", domainType: domainType) {
            dr.label = peopleCount
            dr.showLabel = true
        } else {
            dr.showLabel = false
        }
        self.mapControl?.setDisplayRule(dr, for: loc)
    }
}
```

In the `LiveDataController` extension, add the method `willUpdateLocations()`. This is the actual delegate method that recieves all `MPLocation` objects that was updated on the map. Iterate through these locations and skip the ones that have the `position` Domain Type. Call the `handleLiveUpdate()` method for all others.

```swift
func willUpdateLocationsOnMap(locations: [MPLocation]) {
    for loc in locations {
        let positionUpdate = loc.getLiveUpdate(forDomainType: MPLiveDomainType.position)
        if positionUpdate == nil {
            handleLiveUpdate(loc)
        }
    }
}
```

Earlier we called some non-existing methods, `startFlash()` and `stopFlash()` on a `UIButton`. We will create these methods now. Create an extension for `UIButton`.

```swift
extension UIButton {
```

In the `UIButton` extension, add the method `startFlash()` that creates and adds an animation layer that manipulates with the opacity of the button over time.

```swift
func startFlash() {
    let flash = CABasicAnimation(keyPath: "opacity")
    flash.duration = 0.5
    flash.fromValue = 1
    flash.toValue = 0.5
    flash.timingFunction = CAMediaTimingFunction(name: kCAMediaTimingFunctionEaseInEaseOut)
    flash.autoreverses = true
    flash.repeatCount = .greatestFiniteMagnitude
    layer.add(flash, forKey: "flash")
}
```

In the `UIButton` extension, add the method `stopFlash()` that removes the above layer again.

```swift
func stopFlash() {
    layer.removeAnimation(forKey: "flash")
}
```

This completes the tutorial on Live Data. [See the sample in LiveDataController.swift](<https://github.com/MapsIndoors/MapsIndoorsIOS/blob/master/Example/DemoSamples/Live Data/LiveDataController.swift>).
