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
<mi-tab-panel id="android">

In this tutorial we will cover from start to end, how you can implement a positioning system with the MapsIndoors SDK, and use it to have a position indicator (blue dot) shown on the map. We will be creating a `PositionProvider` (implementing the `MPPositionProvider` interface), which will produce random positions, and attach it to the MapsIndoors SDK which will render the blue dot. We also cover how the blue dot can be styled by modifying its display rule.

We will start by creating our implementation of the `MPPositionProvider` interface.

# Implementing a Position Provider
Create the class `PositionProvider` that implements `MPPositionProvider`:

```kotlin
class PositionProvider : MPPositionProvider 
```

Add some member variables to `PositionProvider`:

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

Implement the `addOnPositionUpdateListener` and `removeOnPositionUpdateListener`, which simply adds and removes an entry in our list `mUpdateListeners`.

```kotlin
override fun addOnPositionUpdateListener(updateListener: OnPositionUpdateListener) {
    mUpdateListeners.add(updateListener)
}

override fun removeOnPositionUpdateListener(updateListener: OnPositionUpdateListener) {
    mUpdateListeners.remove(updateListener)
}
```

Next, implement `getLatestPosition`, simply returning `mLatestPosition`

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

In the timer task's `run()` method, we compute a random latitude/longitude position within some bounds. We create a new `MPPoint` for the derived position. We also randomize accuracy (meters) and bearing (degrees) values, and create a new `MPPositionResult`. The position result can optionally have a bearing. Some positioning systems support this, some don't.

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

# Integrating with MapsIndoors SDK

In order for your `PositionProvider`'s produced positions to be rendered on the map, you need to attach it to the MapsIndoors SDK. Simply use `MapsIndoors.setPositionProvider()` to set the position provider on the SDK.

```kotlin
// Create a position provider
mPositionProvider = PositionProvider()

MapsIndoors.load(requireActivity().applicationContext, "your mapsindoors api key") {
    // Attach the position provider to the SDK
    MapsIndoors.setPositionProvider(mPositionProvider)
}
```
And remember to start your `PositionProvider` instance with `start()`, so it begins producing positioning results.
```kotlin
mPositionProvider?.start()
```

The MapsIndoors only support having a single position provider attached at a time. If you wish to have multiple positioning providers, remove your old provider before setting a new one - or incoorporate multiple positioning systems into a single `MPPositionProvider` imlpementation. 

In order for the MapsIndoors SDK to render the positioning on the map, make sure to invoke `showUserPosition(true)` on your `MapControl` instance.

```kotlin
// Enable showing the position indicator (aka. the blue dot)
mMapControl?.showUserPosition(true)
```
You should now have a position indicator on the map, jumping around inside The White House.

# Styling the Blue Dot

The default blue dot styling is boring, and likely needs to be styled to fit your application and make sense to users.

Like with most other things in the MapsIndoors SDK, the styling of the blue dot is dictated by a display rule. 

A good approach is to attach an `OnPositionUpdateListener` on your `PositionProvider` instance. 

```kotlin
mPositionProvider?.addOnPositionUpdateListener(object: OnPositionUpdateListener {
    override fun onPositioningStarted(provider: MPPositionProvider) {}

    override fun onPositionFailed(provider: MPPositionProvider) {}

    override fun onPositionUpdate(position: MPPositionResultInterface) {}
})
```

In the `onPositionUpdate()` method, we can get the display rule reserved for the blue dot via `MapsIndoors.getDisplayRule()` with `MPSolutionDisplayRule.POSITION_INDICATOR` enum as argument. We can now modify the blue dot styling directly on the display rule `bluedot`. In this case, we want the blue dot to have a different icons depending on whether or not the position is directional (has a bearing value) or not. If the position has a bearing, the icon should be a blue circle with a white arrow pointing in the bearing direction. If there is no bearing, the icon should just be a blue circle.

```kotlin
override fun onPositionUpdate(position: MPPositionResultInterface) {
    // Adjust the display rule style
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

This is also a good place to animate the camera to the new position, if this is a use case.

[See the full implementation in our samples repository](https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/positioning/PositioningFragment.kt)
</mi-tab-panel>
</mi-tabs>
