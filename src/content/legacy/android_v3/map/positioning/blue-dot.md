---
title: Show User's Location aka. Blue Dot
toc: true
eleventyNavigation:
  key: legacy-android-v3-map-positioning-blue-dot
  parent: legacy-android-v3-map-positioning
  title: Show User's Location aka. Blue Dot
  order: 100
---

<mi-tabs>
<mi-tab label="Android" tab-for="android"></mi-tab>
<mi-tab label="iOS" tab-for="ios"></mi-tab>
<mi-tab label="Web" tab-for="web"></mi-tab>
<mi-tab-panel id="android">

In this tutorial we will show how you can show a blue dot on the map, representing the user's location. The position will be served from a mocked positioning provider and displayed on a map in a view controller.

We will start by creating our implementation of a positioning provider.

Create the class `DemoPositionProvider` that implements `PositionProvider`:

```java
public class DemoPositionProvider implements PositionProvider
```

Add some member variables to `DemoPositionProvider`:

* `mPositionUpdateListener`: The listener object
* `isRunning`: A running state boolean flag
* `mLatestPosition`: The latest positioning result
* `mPositionUpdateTimer`: A timer so we can update the position of the user within an time interval

```java
OnPositionUpdateListener mPositionUpdateListener;
boolean isRunning = false;
MPPositionResult mLatestPosition;
MPPositionResult fixedPosition =  new MPPositionResult(
        new Point( 57.05813067, 9.95058065  ),
        0,
        0
);
Timer mPositionUpdateTimer = new Timer();
```

Implement the `addOnPositionUpdateListener`. Assign the `mPositionUpdateListener` inside the method with the `PositionUpdateListener` from the method:

```java
@Override
public void addOnPositionUpdateListener( @Nullable OnPositionUpdateListener listener ) {
    mPositionUpdateListener = listener;
}
```

Create a method called `updatePosition`. This will be our "loop" constantly posting a new position to the delegate:

* Check if the provider has a running state
* Assign the `fixedPosition` value to `mLatestPosition`
* Notify the listener by calling `onPositionUpdate` passing the new position as argument

```java
void updatePosition(){
    if(isRunning){
        mLatestPosition = fixedPosition;
        mLatestPosition.setProvider( this );
        if (mPositionUpdateListener != null) {
            mPositionUpdateListener.onPositionUpdate(mLatestPosition);
        }
    }
}
```

Implement the `isPSEnabled` method to check is the Positioning system is working or not, in this case the PS is always working since it's a mocked positioning provider.

```java
@Override
public boolean isPSEnabled() {
    return true ;
}
```

Implement the `startPositioning` method. We set the `running` boolean to true and schedule the repeating task of updating the user position by calling the updatePosition every 3 seconds:

```java
@Override
public void startPositioning(@Nullable String arg) {
    isRunning = true;
    // Set the schedule function and rate
    mPositionUpdateTimer.scheduleAtFixedRate( new TimerTask() {
        @Override
        public void run() {
            updatePosition();
        }
    }, 0, 3000 );
}
```

Implement the `stopPositioning` method. We set the `running` boolean to false and stop the timer:

```java
@Override
public void stopPositioning(@Nullable String arg) {
    isRunning = false;
    mPositionUpdateTimer.cancel();
}
```

Implement the `isRunning` method. Return the value of `isRunning`:

```java
@Override
public boolean isRunning() {
    return isRunning ;
}
```

[See the sample in DemoPositionProvider.java](https://github.com/mapspeople/MapsIndoorsAndroid-Demo-Samples/blob/master/app/src/main/java/com/mapsindoors/showuserLocation/DemoPositionProvider.java)

Now we will create a Fragment displaying a map that shows the users (mock) location.

Create the class `ShowUserLocationFragment` that inherits from `Fragment`:

```java
public class ShowUserLocationFragment extends Fragment {
```

Add a `GoogleMap` and a `MapControl` to the class:

```java
GoogleMap mGoogleMap;
MapControl mMapControl;
```

Add a map fragment:

```java
SupportMapFragment mMapFragment;
```

The Venue's coordinates:

```java
static final LatLng VENUE_LAT_LNG = new LatLng( 57.05813067, 9.95058065 );
```

In the `onDestroyView` method, we need to free the MapsIndoors PositionProvider:

```java
MapsIndoors.setPositionProvider( null );
```

Set the API key to the MapsIndoors Solution:

```java
if( !MapsIndoors.getAPIKey().equalsIgnoreCase( getString( R.string.mi_api_key ) ) )
{
    MapsIndoors.setAPIKey( getString( R.string.mi_api_key ) );
}
```

Instantiate the mapControl object:

```java
mMapControl = new MapControl( context );
mMapControl.setGoogleMap( mGoogleMap, mMapFragment.getView() );
```

Create an instance of the 'DemoPositionProvider' that we defined previously:

```java
DemoPositionProvider demoPositionProvider = new DemoPositionProvider();
```

Assign the `DemoPositionProvider` instance to the `MapsIndoors.positionProvider` by calling the 'MapsIndoors.setPositionProvider':

```java
MapsIndoors.setPositionProvider( demoPositionProvider );
```

Tell the mapControl to show the users location:

```java
mMapControl.showUserPosition( true );
```

Init the mapControl object:

```java
mMapControl.init( miError -> {
    if( miError == null )
    {
        final Activity _context = getActivity();
        if( _context != null )
        {
            mMapControl.selectFloor( 1 );
            mGoogleMap.animateCamera( CameraUpdateFactory.newLatLngZoom( VENUE_LAT_LNG, 20f ) );
```

Start positioning:

```java
demoPositionProvider.startPositioning(null);
```

[See the sample in ShowUserLocationFragment.java](https://github.com/mapspeople/MapsIndoorsAndroid-Demo-Samples/blob/master/app/src/main/java/com/mapsindoors/showuserLocation/ShowUserLocationFragment.java)

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
