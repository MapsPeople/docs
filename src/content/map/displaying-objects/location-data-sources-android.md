---
title: Location Data Sources for Android
eleventyNavigation:
  parent: map-displaying-objects
  key: map-displaying-objects-location-sources-android
  title: Location Data Sources for Android
  order: 40
---

In this tutorial we will show how you can build a custom Location Source, representing locations of robot vacuums. The robots locations will be served from a mocked list and displayed on a map.

We will start by creating our implementation of a location source.

Create the class `RobotVacuumLocationSource` that implements `MPLocationSource`:

implement the methods from MPLocationSource and extend the constructor of the `RobotVacuumLocationSource` to accept a list of locations that will represent the Robot vacuums.

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
private var BASE_POSITION = MPLatLng(57.0582502, 9.9504788)
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

In the `setupLocationSource` method we call `generateLocations` to populate the location list with new locations. Lets implement that:

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

Create the `startUpdatingPositions` method that simply calls `updateLocations` every second:

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
