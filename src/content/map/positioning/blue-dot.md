---
title: Show User's Location aka. Blue Dot
toc: true
eleventyNavigation:
  key: map-positioning-blue-dot
  parent: map-positioning
  title: Show User's Location aka. Blue Dot
  order: 100
---

<mi-tabs>
<mi-tab label="Android" tab-for="android"></mi-tab>
<mi-tab label="iOS" tab-for="ios"></mi-tab>
<mi-tab label="Web" tab-for="web"></mi-tab>
<mi-tab-panel id="android">

In this tutorial we will cover how you can implement a positioning system with the MapsIndoors SDK, and use it to have a position indicator for the user (blue dot) shown on the map. We will be creating a `PositionProvider` (implementing the `MPPositionProvider` interface), which for the purpose of this tutorial will produce random positions, and attach it to the MapsIndoors SDK which will render the blue dot. We also cover how the blue dot can be styled by modifying its Display Rule.

We will start by creating our implementation of the `MPPositionProvider` interface.

## Implementing a Position Provider

Start by creating the class `PositionProvider` that implements `MPPositionProvider`:

```kotlin
class PositionProvider : MPPositionProvider
```

Add these member variables to `PositionProvider`:

* `mUpdateListeners`: A list for holding listeners
* `mLatestPosition`: The latest derived position result
* `mPositionProducer`: A timer we will use to execute our positioning code periodically
* `mWhiteHouseBounds`: Latitude/longitude coordinate bounds for a part of the White House building

```kotlin
private val mUpdateListeners = ArrayList<OnPositionUpdateListener>()
private var mLatestPosition: MPPositionResultInterface? = null
private var mPositionProducer : Timer? = null
private val mWhiteHouseBounds = MPLatLngBounds(MPLatLng(38.897545509875954, -77.03687635385639), MPLatLng(38.89779861672662, -77.03623597646553))
```

Next, implement the `addOnPositionUpdateListener` and `removeOnPositionUpdateListener`, which adds and removes an entry in our list `mUpdateListeners`.

```kotlin
override fun addOnPositionUpdateListener(updateListener: OnPositionUpdateListener) {
    mUpdateListeners.add(updateListener)
}

override fun removeOnPositionUpdateListener(updateListener: OnPositionUpdateListener) {
    mUpdateListeners.remove(updateListener)
}
```

Next, implement `getLatestPosition`, returning `mLatestPosition`:

```kotlin
override fun getLatestPosition(): MPPositionResultInterface? {
    return mLatestPosition
}
```

These three methods require an implementation as the MapsIndoors SDK needs to attach a listener to be notified of positioning changes, as well as get the latest positioning. As long as these three methods are implemented in this manner, you are free to implement the rest of your position provider class as you see fit.

Next, we need to set up some code to generate random positioning results. We define two methods `start()` and `stop()` on our class `PositionProvider`. In the body of `start()` we start a fixed schedule timer task to execute every second - until our `stop()` method is called.

```kotlin
fun start(){
    mPositionProducer = Timer(true)
    mPositionProducer?.scheduleAtFixedRate(object: TimerTask() {
        override fun run() {

        }
    }, 0, 1000L)
}

fun stop(){
    mPositionProducer?.cancel()
}
```

In the timer task's `run()` method, we compute a random latitude/longitude position within some defined bounds. We create a new `MPPoint` for the derived position. We also randomize accuracy (meters) and bearing (degrees) values, and create a new `MPPositionResult`. The position result can optionally have a bearing. Some positioning systems support this, some don't. Refer to the documentation of your chosen positioning provider for this information.

```kotlin
override fun run() {
    // Produce a random positioning inside The White House bounds
    val randomLat = Random.nextDouble(mWhiteHouseBounds.southWest.lat, mWhiteHouseBounds.northEast.lat)
    val randomLng = Random.nextDouble(mWhiteHouseBounds.southWest.lng, mWhiteHouseBounds.northEast.lng)

    val floorIndex = 10.0
    val accuracy = (3..10).random().toFloat() // In meters
    val bearing = (0..360).random().toFloat() // In degrees

    val position = MPPoint(randomLat, randomLng, floorIndex)

    // Randomize whether or not the position result has a bearing
    if(Random.nextInt() % 2 == 0)
        mLatestPosition = MPPositionResult(position, accuracy, bearing)
    else
        mLatestPosition = MPPositionResult(position, accuracy)

    // Report the updated positioning to attached listeners
    for(listener in mUpdateListeners){
        listener.onPositionUpdate(mLatestPosition as MPPositionResult)
    }
}
```

When we have derived a new position and assigned it to `mLatestPosition`, we invoke `onPositionUpdate()` on each attached update listener.

We have now completed the implementation of `PositionProvider` - we will now cover how this is integrated with the MapsIndoors SDK so the produced positioning is reflected on the map, as well as how we can configure the blue dot styling.

[See the full implementation of PositionProvider in our samples repository](https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/positioning/PositionProvider.kt)

## Integrating with MapsIndoors SDK

In order for your `PositionProvider`'s produced positions to be rendered on the map, you need to attach it to the MapsIndoors SDK. Use `MapsIndoors.setPositionProvider()` to set the position provider on the SDK.

```kotlin
// Create a position provider
mPositionProvider = PositionProvider()

MapsIndoors.load(requireActivity().applicationContext, "your mapsindoors api key") {
    // Attach the position provider to the SDK
    MapsIndoors.setPositionProvider(mPositionProvider)
}
```

Start your `PositionProvider` instance with `start()`, so it begins producing positioning results.

```kotlin
mPositionProvider?.start()
```

The MapsIndoors SDK only supports having a single position provider attached at a time. If you wish to have multiple positioning providers, remove your old provider before setting a new one - or incoorporate multiple positioning systems into a single `MPPositionProvider` imlpementation.

In order for the MapsIndoors SDK to render the positioning on the map, invoke `showUserPosition(true)` on your `MapControl` instance.

```kotlin
// Enable showing the position indicator (aka. the blue dot)
mMapControl?.showUserPosition(true)
```

You should now have a position indicator on the map, jumping around inside The White House.

## Styling the Blue Dot

The default blue dot styling is basic, and likely needs to be styled to fit your application and make sense to users.

Like with most other things in the MapsIndoors SDK, the styling of the blue dot is dictated by a Display Rule.

A good approach is to attach an `OnPositionUpdateListener` on your `PositionProvider` instance.

```kotlin
mPositionProvider?.addOnPositionUpdateListener(object: OnPositionUpdateListener {
    override fun onPositioningStarted(provider: MPPositionProvider) {}

    override fun onPositionFailed(provider: MPPositionProvider) {}

    override fun onPositionUpdate(position: MPPositionResultInterface) {}
})
```

In the `onPositionUpdate()` method, we can fetch the Display Rule reserved for the blue dot via `MapsIndoors.getDisplayRule()` with `MPSolutionDisplayRule.POSITION_INDICATOR` enum as argument. We can now modify the blue dot styling directly on the Display Rule `bluedot`. In this case, we want the blue dot to have different icons depending on whether or not the position is directional (has a bearing value) or not. If the position has a bearing, the icon should be a blue circle with a white arrow pointing in the bearing direction. If there is no bearing, the icon should just be a blue circle.

```kotlin
override fun onPositionUpdate(position: MPPositionResultInterface) {
    // Adjust the Display Rule style
    val bluedot = MapsIndoors.getDisplayRule(MPSolutionDisplayRule.POSITION_INDICATOR)
    bluedot.let {
        if(position.hasBearing())
            it?.setIcon(R.drawable.ic_bluedot_bearing)
        else
            it?.setIcon(R.drawable.ic_bluedot)
    }

    // Move the camera to the updated position
    activity?.runOnUiThread {
        mMap?.animateCamera(CameraUpdateFactory
            .newLatLngZoom(LatLngConverter.toLatLng(position.point!!.latLng), 20f))
    }
}
```

This is also a good place to animate the camera to the new position, if this is the desired use case.

[See the full implementation in our samples repository](https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/positioning/PositioningFragment.kt)

</mi-tab-panel>
<mi-tab-panel id="ios">

<!-- Known Issues -->
{% include "src/content/shared/known-issues-ios.md" %}

In this tutorial we will show how you can show a blue dot on the map, representing the users location. The position will be served from a mocked positioning provider and displayed on a map in a view controller.

We will start by creating our implementation of a positioning provider.

Create a class `MyPositionProvider` that inherits from NSObject and implements `MPPositionProvider`.

```swift
class MyPositionProvider : NSObject, MPPositionProvider {
```

Add some member variables to `MyPositionProvider`.

* `delegate`: The delegate object
* `running`: A running state boolean flag
* `latestPositionResult`: The latest positioning result
* `preferAlwaysLocationPermission`: A boolean that indicates whether this provider requires Apple Location Services to always be active
* `locationServicesActive`: A boolean that indicates whether Apple Location Services is currently active
* `providerType`: A provider type enum, convenient when working with multiple positioning providers in the same application

```swift
var delegate: MPPositionProviderDelegate?
private var running = false
var latestPositionResult: MPPositionResult?
var preferAlwaysLocationPermission: Bool = false
var locationServicesActive: Bool = false
var providerType: MPPositionProviderType = .GPS_POSITION_PROVIDER
var heading:Double = 0
```

Create a method called `updatePosition`. This will be our "loop" constantly posting a new position to the delegate.

* Check if the provider has a running state
* Assign a new `MPPositionResult` to `latestPositionResult`
* Assign a new position point
* Optionally specify that heading is available and set a heading
* Notify the delegate by calling `onPositionUpdate` passing the new position as argument
* Schedule a new delayed call of this method

```swift
private func updatePosition() {
    if running {
        latestPositionResult = MPPositionResult.init()
        latestPositionResult?.geometry = MPPoint.init(lat: 57.057964, lon: 9.9504112)
        latestPositionResult?.provider = self
        latestPositionResult?.headingAvailable = true
        heading = (heading + 10).truncatingRemainder(dividingBy: 360)
        latestPositionResult?.setHeadingDegrees(heading)

        if let delegate = self.delegate, let latestPositionResult = self.latestPositionResult {
            delegate.onPositionUpdate(latestPositionResult)
        }

        DispatchQueue.main.asyncAfter(deadline: .now() + 1) {
            self.updatePosition()
        }
    }
}
```

Implement the `requestLocationPermissions` method. In this example we will just set the `locationServicesActive` to true.

```swift
func requestLocationPermissions() {
    locationServicesActive = true
}
```

Implement the `updateLocationPermissionStatus` method. In this example we will just set the `locationServicesActive` to true.

```swift
func updateLocationPermissionStatus() {
    locationServicesActive = true
}
```

Implement the `startPositioning` method. We set the `running` boolean to true and call `updatePos`.

```swift
func startPositioning(_ arg: String?) {
    running = true
    updatePosition()
}
```

Implement the `stopPositioning` method. We set the `running` boolean to false.

```swift
func stopPositioning(_ arg: String?) {
    running = false
}
```

Implement the `startPositioningAfter` method. This is just a convenience method that should support a delayed start.

```swift
func startPositioning(after millis: Int32, arg: String?) {
    DispatchQueue.main.asyncAfter(deadline: .now() + (0.001 * Double(millis))) {
        self.startPositioning(arg)
    }
}
```

Implement the `isRunning` method. Return the value of `running`.

```swift
func isRunning() -> Bool {
    return running
}
```

[See the sample in MyPositionProvider.swift](https://github.com/MapsIndoors/MapsIndoorsIOS/blob/master/Example/DemoSamples/Show%20My%20Location/MyPositionProvider.swift)

## Create a view controller displaying a map that shows the user's "mocked" location

Create a class `ShowMyLocationController` that inherits from `UIViewController`.

```swift
class ShowMyLocationController: UIViewController {
```

Add a `GMSMapView` and a `MPMapControl` to the class

```swift
var map: GMSMapView? = nil
var mapControl: MPMapControl? = nil

override func viewDidLoad() {

    super.viewDidLoad()
```

Inside `viewDidLoad`, setup the map so that it shows the demo venue and initialise mapControl

```swift
self.map = GMSMapView.init(frame: CGRect.zero)
self.view = self.map
self.map?.camera = .camera(withLatitude: 57.057964, longitude: 9.9504112, zoom: 20)
self.mapControl = MPMapControl.init(map: self.map!)
```

Inside `viewDidLoad`, optionally add a special icon for the user location

```swift
let myLocationRule = MPLocationDisplayRule.init(name: "my-location", andIcon: UIImage.init(named: "MyLocationDirection"), andZoomLevelOn: 0)
myLocationRule?.iconSize = CGSize(width: 30, height: 30)
self.mapControl?.add(myLocationRule!)
```

Inside `viewDidLoad`, finally

* Tell mapControl to show the users location
* Assign your position provider `MyPositionProvider` to `MapsIndoors.positionProvider`
* Start positioning

```swift
self.mapControl?.showUserPosition(true)
MapsIndoors.positionProvider = MyPositionProvider()
MapsIndoors.positionProvider.startPositioning(nil)
```

[See the sample in ShowMyLocationController.swift](https://github.com/MapsIndoors/MapsIndoorsIOS/blob/master/Example/DemoSamples/Show%20My%20Location/ShowMyLocationController.swift)

</mi-tab-panel>
<mi-tab-panel id="web">

## Overview

In this guide, you will learn how to show a dot on the map, representing the user's current location.

The JSFiddle example below draws a MapsIndoors map, and adds a position control. Whenever a position is received or updated, if the user has not moved the map themselves, the map will pan to the new location. If the user has moved the map, it will not center on the new location until position control is clicked.

<script async src="//jsfiddle.net/ammapspeople/wtan25gv/embed/html,result/"></script>

### How the position is determined

The position is determined by utilizing the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API), which all modern browsers expose.

Behind the scenes, the browser determines your position based on a number of factors, including IP address, cell towers, GPS, Wifi access points etc. The implementation varies from browser to browser, and from device to device. There is currently no way to tweak the Geolocation API to use different positioning providers.

All browsers will ask the user for permission to share the location by displaying a prompt. This prompt is a part of the browser, thus not customizable.

Also note that the Geolocation API will only work on `https` websites (and `localhost` for development).

### The MapsIndoors `PositionControl` class

The MapsIndoors JavaScript SDK exposes a `PositionControl` class.

An instantiation of this class will generate a button that, when clicked:

* will start tracking the user's device location
* show a dot on the map representing location (if accuracy is good enough - more on that later)
* show a circle representing the position accuracy

Clicking on the button will pan the map, so the current position is in the center of the map.

The button will be blue whenever the position is in center of the map.

If the user has granted permission indefinitely, the map will pan to the current position when reloading the app *(this may not work in certain browsers, such as Internet Explorer 11, due to missing support of the [Permissions API](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API))*.

You will have to add the generated button to the map yourself.

### Basic Example

MapsIndoors supports both Google Maps and MapBox, and the methods for each vary slightly. Both still revolve around `PositionControl`.

#### Google Maps

```js
// MapsIndoors MapView instantiation, which you should already have
const mapViewInstance = new mapsindoors.mapView.GoogleMapsView(/*...*/);
// MapsIndoors instantiation, which you should already have
const mapsIndoorsInstance = new mapsindoors.MapsIndoors(/*...*/);
// Obtain a reference to the Google map.
const googleMapsInstance = mapViewInstance.getMap();
// Create element to hold the position control
const positionControlElement = document.createElement("div");
// Create position control and attach it to element
const positionControl = new mapsindoors.PositionControl(positionControlElement, {
    mapsIndoors: mapsIndoorsInstance,
});
// Add the element now holding position control to your map
googleMapsInstance.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(positionControlElement);
```

#### Mapbox

```js
// MapsIndoors MapView instantiation, which you should already have
const mapViewInstance = new mapsindoors.mapView.GoogleMapsView(/*...*/);
// MapsIndoors instantiation, which you should already have
const mapsIndoorsInstance = new mapsindoors.MapsIndoors(/*...*/);
// Obtain a reference to the Mapbox map.
const mapboxInstance = mapViewInstance.getMap();

// Create element to hold the position control
const positionControlElement = document.createElement("div");
// Create position control and attach it to element
const positionControl = new mapsindoors.PositionControl(positionControlElement, {
    mapsIndoors: mapsIndoorsInstance,
});
// Add the element now holding position control to your map
mapboxInstance.addControl({ onAdd: function () { return positionControlElement }, onRemove: function () { } });
```

### maxAccuracy

Since browsers sometimes give inaccurate positions, you can use the `maxAccuracy` option when instantiating the `PositionControl`. Then the dot is only shown on the map if the given accuracy is below the given value:

```js
// Generate PositionControl and only show the dot on the map if accuracy is better than 80 meters
new mapsindoors.PositionControl(myPositionControlElm, { mapsIndoors: myMapsIndoors, maxAccuracy: 80 });
```

</mi-tab-panel>
</mi-tabs>
