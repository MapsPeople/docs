---
title: Location Data Sources
eleventyNavigation:
  parent: map-displaying-objects
  key: map-displaying-objects-location-sources
  title: Location Data Sources
  order: 40
---

<mi-tabs>
<mi-tab label="Android" tab-for="android"></mi-tab>
<mi-tab label="iOS" tab-for="ios"></mi-tab>
<mi-tab-panel id="android">

In this tutorial we will show how you can build a custom Location Source, representing locations of robot vacuums. The robots locations will be served from a mocked list and displayed on a map.

We will start by creating our implementation of a location source.

Create the class `RobotVacuumLocationSource` that implements `MPLocationSource`:

Implement the methods from MPLocationSource and extend the constructor of the `RobotVacuumLocationSource` to accept a list of locations that will represent the Robot vacuums.

```kotlin
class RobotVacuumLocationSource(private val robots: ArrayList<MPLocation>): MPLocationSource {
    private val mObservers = ArrayList<MPLocationsObserver>()
    private var mStatus = MPLocationSourceStatus.NOT_INITIALIZED
    override fun getLocations(): MutableList<MPLocation> {
        return robots
    }
    override fun addLocationsObserver(observer: MPLocationsObserver?) {
        if (observer != null) {
            mObservers.add(observer)
        }
    }
    override fun removeLocationsObserver(observer: MPLocationsObserver?) {
        if (observer != null) {
            mObservers.remove(observer)
        }
    }
    private fun notifyUpdateLocations() {
        for (observer in mObservers) {
            observer.onLocationsUpdated(robots, this)
        }
    }
    override fun getStatus(): MPLocationSourceStatus {
        return mStatus
    }
    override fun getSourceId(): Int {
        return 10101010
    }
    override fun clearCache() {
        robots.clear()
        mObservers.clear()
    }
    override fun terminate() {
        robots.clear()
        mObservers.clear()
    }
}
```

Create a `Fragment` or `Activity` that contains a map with MapsIndoors loaded.

Add a `BASE_POSITION MPLatLng` that will be used to calculate a random location for the Robot Vacuums.

```kotlin
private val BASE_POSITION = MPLatLng(57.0582502, 9.9504788)
```

Then we need to add some variables:

```kotlin
private var baseDisplayRule: WeakReference<MPDisplayRule?>? = null
private var robotDisplayRule: MPDisplayRule? = null
private var mLocations: ArrayList<MPLocation>? = null
private var mRobotVacuumLocationSource: RobotVacuumLocationSource? = null
```

Create the baseDisplayRule after `MapsIndoors` has loaded:

```kotlin
MapsIndoors.load(requireActivity().applicationContext, "MY_API_KEY") { error ->
    if (error == null) {
        baseDisplayRule = WeakReference(MapsIndoors.getMainDisplayRule())
        setupLocationSource()
    }
}
```

create a method to setup the `RobotVacuumLocationSource` inside your fragment:

```kotlin
private fun setupLocationSource() {
    if (mLocations == null) {
        generateLocations()
    }
    val locationSource = RobotVacuumLocationSource(mLocations!!)
    MapsIndoors.addLocationSources(Collections.singletonList(locationSource) as List<MPLocationSource>) {
    }
    locationSource.setup()
    startUpdatingPositions()
}
```

As seen in the example above we add the `RobotVacuumLocationSource` through `MapsIndoors.addLocationSources` and call `RobotVacuumLocationSource.setup()`

This method sets the status to of the source to available and notifies `MapsIndoors` that locations are updated.

```kotlin
fun setup() {
    status = MPLocationSourceStatus.AVAILABLE
    notifyUpdateLocations()
}
fun setStatus(status: MPLocationSourceStatus) {
    mStatus = status
    for (observer in mObservers) {
        observer.onStatusChanged(mStatus, this)
    }
}
```

In the `setupLocationSource` method we call `generateLocations` to populate the location list with new locations:

```kotlin
private fun generateLocations() {
    mLocations = ArrayList()
    for (i in 0..15) {
        val robotName = "vacuum$i"
        val startPosition = getRandomPosition()
        val charge = nextInt(1, 100)
        val floorIndex = nextInt(4) * 10
        var mpLocation = MPLocation.Builder(robotName)
            .setPosition(startPosition.lat, startPosition.lng)
            .setFloorIndex(floorIndex)
            .setName(robotName)
            .setBuilding("Stigsborgvej")
            .build()
        robotDisplayRule = MPDisplayRule(robotName, baseDisplayRule!!)
        robotDisplayRule?.isVisible = true
        if (charge >= 60) {
            robotDisplayRule?.setIcon(R.drawable.ic_baseline_robo_vacuum, Color.GREEN)
        }else if (charge >= 30) {
            robotDisplayRule?.setIcon(R.drawable.ic_baseline_robo_vacuum, Color.YELLOW)
        }else {
            robotDisplayRule?.setIcon(R.drawable.ic_baseline_robo_vacuum, Color.RED)
        }
        MapsIndoors.addDisplayRuleForLocation(mpLocation, robotDisplayRule!!)
        mLocations?.add(mpLocation)
    }
}
private fun getRandomPosition(): MPLatLng {
    val lat: Double = BASE_POSITION.lat + (-4 + nextInt(20)) * 0.000005
    val lng: Double = BASE_POSITION.lng + (-4 + nextInt(20)) * 0.000010
    return MPLatLng(lat, lng)
}
```

Create the `startUpdatingPositions` method that calls `updateLocations` every second:

```kotlin
private fun startUpdatingPositions() {
    mUpdateTimer?.cancel()
    mUpdateTimer = Timer()
    mUpdateTimer?.scheduleAtFixedRate(object: TimerTask() {
        override fun run() {
            updateLocations();
        }
    }, 2000, 500)
}
```

Create a method that can stop the positions updates at any time:

```java
fun stopUpdatingPositions() {
    mUpdateTimer?.cancel()
    mUpdateTimer?.purge()
}
```

Create a method called `updateLocations` that will update the position of the Locations:

```kotlin
fun updateLocations() {
    var updatedLocations = ArrayList<MPLocation>()
    mLocations?.forEach {
        var newPosition = getRandomPosition()
        var newLocation = MPLocation.Builder(it).setPosition(MPPoint(newPosition.lat, newPosition.lng), 20)
        var charge = nextInt(1, 100)
        updatedLocations.add(newLocation.build())
        robotDisplayRule = MPDisplayRule("robot", baseDisplayRule!!)
        robotDisplayRule?.isVisible = true
        if (charge >= 60) {
            robotDisplayRule?.setIcon(R.drawable.ic_baseline_robo_vacuum, Color.GREEN)
        }else if (charge >= 30) {
            robotDisplayRule?.setIcon(R.drawable.ic_baseline_robo_vacuum, Color.YELLOW)
        }else {
            robotDisplayRule?.setIcon(R.drawable.ic_baseline_robo_vacuum, Color.RED)
        }
        MapsIndoors.addDisplayRuleForLocation(it, robotDisplayRule!!)
    }
    mRobotVacuumLocationSource?.updateLocations(updatedLocations)
}
```

[See the samples in the locationsources folder](https://github.com/MapsPeople/MapsIndoors-Android-Examples/tree/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/locationsources)

</mi-tab-panel>
<mi-tab-panel id="ios">

<!-- Known Issues -->
{% include "src/content/shared/known-issues-ios.md" %}

## The Concepts

The central concepts in this feature are Location Sources and Location Observers, and they are best described in the following illustration:

![Location Data Sources, Observers and their relation]({{ site.url }}/assets/introductions/location-sources/source_observer.png)

### Location Source

Maintains an array of locations and notifies its Location Observers about location and status updates.

### Location Observer

Can observe a Location Source for status changes and location updates.

## Creating Your own Location Source

In this tutorial we will show how you can build a custom Location Source, representing locations of people. The people locations will be served from a mocked list in the source and displayed on a map in a view controller.

We will start by creating our implementation of a location source.

Create a class `PeopleLocationsDataSource` that inherits from NSObject and implements `MPLocationSource`.

```swift
class PeopleLocationSource : NSObject, MPLocationSource {
```

Add some member variables to `PeopleLocationsDataSource`.

* `observers`: The observer objects that we will notify about changes
* `locationUpdates`: A list of MPLocationUpdate - the MPLocation builders
* `locationPoints`: A list of MPPoint - the positions that we will mock
* `locationDirs`: A list of directions - the walking direction for each "person"
* `queue`: A backround queue
* `numberOfPeople`: The number of people to mock

```swift
private var observers = [MPLocationsObserver]()
private var locationUpdates = [MPLocationUpdate]()
private var locationPoints = [MPPoint]()
private var locationDirs = [Double]()
private let queue = DispatchQueue.init(label: "UpdatePositions")
private let numberOfPeople = 100
```

Create a method called `getRandomPoint` that simply just returns a random point (here within proximity of the demo venue)

```swift
func getRandomPoint() -> MPPoint {
    let lat = 57.058037 + Double.random(in: -0.0004 ..< 0.0004)
    let lng = 9.950572 + Double.random(in: -0.0004 ..< 0.0004)
    return MPPoint.init(lat: lat, lon: lng, zValue: 1)
}
```

Create a method called `createPeople` that takes a type string. Iterate numberOfPeople and for each iteration create:

* An MPLocationUpdate with an id and a source (self)
* A type - later used to style the location
* A floor
* A random point and initial direction for the person

```swift
func createPeople(_ type: String) {
    for locId in 0 ..< numberOfPeople {

        let locationUpdate = MPLocationUpdate.init(id: locId, from: self)

        locationUpdate.type = type
        locationUpdate.addPropertyValue("John Doe #\(locId)", forKey: MPLocationFieldName)
        locationUpdate.floor = 1
        let p = getRandomPoint()
        locationPoints.append(p)
        locationDirs.append(Double.random(in: 0 ..< 360))
        locationUpdate.position = p.getCoordinate()
        locationUpdates.append(locationUpdate)

    }
}
```

Create a method called `updatePositions`. Iterate numberOfPeople again and for each iteration:

* Get the corresponding MPLocationUpdate
* Set a new position using Google Maps' offsetting function
* Save a new heading and position
* Generate MPLocation from the MPLocationUpdate
After iteration, notify each observer about the updates locations

```swift
func updatePositions() {
    var updatedLocations = [MPLocation]()
    for locId in 0 ..< numberOfPeople {
        let locationUpdate = locationUpdates[locId]
        let newPos = GMSGeometryOffset(locationPoints[locId].getCoordinate(), 0.5, locationDirs[locId])
        locationUpdate.position = newPos
        locationDirs[locId] = locationDirs[locId] + Double.random(in: -22 ..< 22)
        locationPoints[locId] = MPPoint.init(lat: newPos.latitude, lon: newPos.longitude)
        updatedLocations.append(locationUpdate.location())
    }
    for observer in observers {
        observer.onLocationsUpdate(updatedLocations, source: self)
    }
    queue.asyncAfter(deadline: .now() + 0.5) {
        self.updatePositions()
    }
}
```

Create a method called `startMockingPositions` that simply just calls `updatePositions` in the future.

```swift
func startMockingPositions() {
    DispatchQueue.main.asyncAfter(deadline: .now() + 1) {
        self.updatePositions()
    }
}
```

Create an initialiser that takes a type string. Call `createPeople` and `startMockingPositions`.

```swift
convenience init(type:String) {

    self.init()

    createPeople(type)

    startMockingPositions()
}
```

Implement the MPLocationSource method `getAllLocations`. For this demo just return an empty array as each update will also contain the full list of locations.

```swift
func getLocations() -> [MPLocation] {
    return []
}
```

Implement the MPLocationSource method `addLocationObserver`.

```swift
func add(_ observer: MPLocationsObserver) {
    observers.append(observer)
}
```

Implement the MPLocationSource method `removeLocationObserver`.

```swift
func remove(_ observer: MPLocationsObserver) {
    observers = observers.filter({ (obsvr) -> Bool in
        return obsvr === observer
    })
}
```

Implement the MPLocationSource method `sourceStatus`.

```swift
func status() -> MPLocationSourceStatus {
    return .available
}
```

Implement the MPLocationSource method `sourceIdentifier`.

```swift
func sourceId() -> Int32 {
    return 0;
}
```

[See the sample in PeopleLocationSource.swift](https://github.com/MapsIndoors/MapsIndoorsIOS/blob/master/Example/DemoSamples/Location%20Sources/PeopleLocationSource.swift)

## Create Another Location Source That Mocks the Availability of Meeting Rooms or Work Desks

This location source rely on MapsIndoors data, so we will consume the locations of `MPMapsIndoorsLocationSource` and relay them as this source's own locations. Thus we need to observe the `MPMapsIndoorsLocationSource` and act as a LocationSource at the same time.

Create a class `RoomAvailabilitySource` that inherits from NSObject and implements `MPLocationSource` and `MPLocationsObserver`.

```swift
class RoomAvailabilitySource : NSObject, MPLocationSource, MPLocationsObserver {
```

Add some member variables to `RoomAvailabilitySource`.

* `observers`: The observer objects that we will notify about changes
* `locationUpdates`: A dictionary of reusable `MPLocationUpdate` models
* `miMapsIndoorsSource`: The MapsIndoors source to observe

```swift
private var observers = [MPLocationsObserver]()
private var locationUpdates = Dictionary<String, MPLocationUpdate>()
private let miMapsIndoorsSource:MPLocationSource = MPMapsIndoorsLocationSource()
```

In the initialiser, add this instance as observer for The MapsIndoors source.

```swift
override init() {
    super.init()
    self.miMapsIndoorsSource.add(self)
}
```

Create a method `updateIconForLocation` that takes a location and grabs or creates a location update object. Randomly modify the icon of that location so it looks occupied.

```swift
func updateIconForLocation(location:MPLocation) -> MPLocationUpdate? {
    if locationUpdates[location.locationId!] == nil {
        locationUpdates[location.locationId!] = MPLocationUpdate.init(location: location)
    }
    let locUpdate = locationUpdates[location.locationId!]

    if (Int.random(in: 0...1) == 0) {
        locUpdate?.icon = UIImage(named: "closed")!
    }
    return locUpdate
}
```

Create a method `updateLocations` that runs through a list of locations add creates location update objects.

```swift
func updateLocations(locations:[MPLocation]) -> [MPLocation] {

    var updatedLocations = [MPLocation]()

    for location in locations {
        if let locUpdate = updateIconForLocation(location: location) {
            updatedLocations.append(locUpdate.location())
        }
    }

    return updatedLocations
}
```

Implement the MPLocationSource method `getLocations`. For this demo just return the full list of MapsIndoors' locations.

```swift
func getLocations() -> [MPLocation] {
    return miMapsIndoorsSource.getLocations()
}
```

Implement the MPLocationSource method `addLocationObserver`.

```swift
func add(_ observer: MPLocationsObserver) {
    observers.append(observer)
}
```

Implement the MPLocationSource method `removeLocationObserver`.

```swift
func remove(_ observer: MPLocationsObserver) {
    observers = observers.filter({ (obsvr) -> Bool in
        return obsvr !== observer
    })
}
```

Implement the MPLocationSource method `sourceStatus`.

```swift
func status() -> MPLocationSourceStatus {
    return .available
}
```

Implement the MPLocationSource method `sourceIdentifier`.

```swift
func sourceId() -> Int32 {
    return 2;
}
```

Relay `onLocationsDelete` events to this sources own observers.

```swift
func onLocationsDelete(_ locations: [String], source: MPLocationSource) {
    for obsvr in observers {
        obsvr.onLocationsDelete(locations, source: self)
    }
}
```

In `onLocationsUpdate` create new modified locations objects and call the observers.

```swift
func onLocationsUpdate(_ locationUpdates: [MPLocation], source: MPLocationSource) {
    let locations = updateLocations(locations: locationUpdates)
    for obsvr in observers {
        obsvr.onLocationsUpdate(locations, source: self)
    }
}
```

Relay `onStatusChange` events to this sources own observers.

```swift
func onStatusChange(_ status: MPLocationSourceStatus, source: MPLocationSource) {
    for obsvr in observers {
        obsvr.onStatusChange(status, source: self)
    }
}
```

[See the sample in RoomAvailabilitySource.swift](https://github.com/MapsIndoors/MapsIndoorsIOS/blob/master/Example/DemoSamples/Location%20Sources/RoomAvailabilitySource.swift)

## Create a View Controller Displaying a Map That Shows the Mocked People Locations and the Mocked Room Availability on top of a MapsIndoors Map

Create a class `LocationSourcesController` that inherits from `UIViewController`.

```swift
class LocationSourcesController: UIViewController {
```

Add a `GMSMapView` and a `MPMapControl` to the class

```swift
var map: GMSMapView? = nil
var mapControl: MPMapControl? = nil

override func viewDidLoad() {

    super.viewDidLoad()
```

Inside `viewDidLoad`, register the sources `PeopleLocationSource` and `RoomAvailabilitySource`

```swift
MapsIndoors.register([
    PeopleLocationSource.init(type: "People"),
    RoomAvailabilitySource.init()
])
```

Inside `viewDidLoad`, setup the map so that it shows the demo venue and initialise mapControl

```swift
self.map = GMSMapView.init(frame: CGRect.zero)
self.view = self.map
self.map?.camera = .camera(withLatitude: 57.057964, longitude: 9.9504112, zoom: 20)
self.mapControl = MPMapControl.init(map: self.map!)
```

Inside `viewDidLoad`, setup a display setting that refers to the type of locations that your people location source operates with.

```swift
let dr = MPLocationDisplayRule.init(name: "People", andIcon: UIImage.init(named: "user.png"), andZoomLevelOn: 17)!
self.mapControl?.add(dr)
```

Optionally, when you leave this controller. Remove the custom Location Source by adding back the `MPMapsIndoorsLocationSource` as the only one.

```swift
override func viewDidDisappear(_ animated: Bool) {
    MapsIndoors.register([MPMapsIndoorsLocationSource()])
}
```

[See the sample in LocationSourcesController.swift](https://github.com/MapsIndoors/MapsIndoorsIOS/blob/master/Example/DemoSamples/Location%20Sources/LocationSourcesController.swift)

</mi-tab-panel>
</mi-tabs>
