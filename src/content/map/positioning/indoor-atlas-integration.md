---
title: Using Indoor Atlas
toc: true
eleventyNavigation:
  title: Using Indoor Atlas
  parent: map-positioning-blue-dot
  key: map-positioning-indoor-atlas
  order: 130
---

<mi-tabs>
<mi-tab label="Android" tab-for="android"></mi-tab>
<mi-tab label="iOS" tab-for="ios"></mi-tab>
<mi-tab-panel id="android">

To get started with Indoor Atlas positioning, you need to create a positioning implementation which enables communicating the positions received from Indoor Atlas with the MapsIndoors SDK.

The Position Provider implementation exists at the customer application level, and needs to use the `MPPositionProvider` interface from the MapsIndoors SDK. The MapsIndoors SDK can then use the positioning results given by the given Position Provider, by setting the Position Provider with `MapsIndoors.setPositionProvider(MPPositionProvider)`.

### Floor Mapping

The Position Provider should align with the MapsIndoors Floor index convention (floors are indexed as e.g 0, 10, 20, 30 corresponding to ground floor, 1st floor, 2nd floor, 3rd floor, with negative floors indices allowed as well to indicate Floors below ground, e.g. -10). It is therefore up to the Position Provider class to convert any given Floor indexing from the positioning source to that of MapsIndoors.

For a typical Position Provider, the mapping from the positioning's index needs to be mapped to the MapsIndoors Floor format. This is possible through the CMS or creating your own int:int mapping.

<!-- Fetch data from solution -->
{% include "src/content/shared/map/positioning-fetch-android.md" %}

### Implementing Indoor Atlas

This Guide requires you to already have an activity that shows a MapsIndoors Map as well as a Indoor Atlas beacon network for positioning. We use Indoor Atlas v3 for this guide. Here is how to set it up in your project: [Indoor Atlas setup](https://indooratlas.freshdesk.com/support/solutions/articles/36000050564-setup-positioning-sdk-with-android)

To begin, we will start implementing the Indoor Atlas position provider. Create a class called `IndoorAtlasPositionProvider` that implements the `MPPositionProvider` interface from the MapsIndoors SDK, also create a constructor that takes a `Context` as parameter. If you have IndoorAtlas setup through MapsIndoors you can use the MPIndoorAtlasConfig from your solution as a convenience on setup.

<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/positioning/IndoorAtlasPositionProvider.kt#L8-L18">IndoorAtlasPositionProvider.kt</a>

```kotlin
class IndoorAtlasPositionProvider(private val context: Context, private val config: MPIndoorAtlasConfig): MPPositionProvider {
    private var mLatestPosition: MPPositionResultInterface? = null
    private var mLatestBearing: Float? = null
    private var indoorAtlasClient: IALocationManager? = null
}
```

We will start by implementing methods from the `MPPositionProvider` interface.

<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/positioning/IndoorAtlasPositionProvider.kt#L116-L126">IndoorAtlasPositionProvider.kt</a>

```kotlin
class IndoorAtlasPositionProvider(private val context: Context, private val config: MPIndoorAtlasConfig): MPPositionProvider {
    ...
    override fun addOnPositionUpdateListener(p0: OnPositionUpdateListener) {
        positionUpdateListeners.add(p0)
    }

    override fun removeOnPositionUpdateListener(p0: OnPositionUpdateListener) {
        positionUpdateListeners.remove(p0)
    }

    override fun getLatestPosition(): MPPositionResultInterface? {
        return mLatestPosition
    }
}
```

We will then start implementing the code to get Indoor Atlas positioning up and running.

For Indoor Atlas to work you will need to supply Indoor Atlas with a API key and a secret key. This can be handled in two ways, if the Indoor Atlas account is setup through MapsPeople CMS on the Position Provider tab, we will have the data for this stored on the MapsIndoors SDK. If not you will have to handle the two keys yourself, this can be done through String resources as an example.

We start by creating a method to initiate the Indoor Atlas client. Here the method is called `initClient`.

<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/positioning/IndoorAtlasPositionProvider.kt#L91-L97">IndoorAtlasPositionProvider.kt</a>

```kotlin
class IndoorAtlasPositionProvider(private val context: Context, private val config: MPIndoorAtlasConfig): MPPositionProvider {
    ...
    private void initClient(){
        val extras = Bundle(2)
        extras.putString(IALocationManager.EXTRA_API_KEY, config.key)
        extras.putString(IALocationManager.EXTRA_API_SECRET, config.secret)

        indoorAtlasClient = IALocationManager.create(context, extras)
    }
    ...
}
```

Create a `IAOrientationListener` and `IALocationListener` we will register theese to the IndoorAtlas client when we start positioning. We will also implement a `notifyPositionUpdate` method to notify the Positionupdate Listeners of a position change.

<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/positioning/IndoorAtlasPositionProvider.kt#L8-L89">IndoorAtlasPositionProvider.kt</a>

```kotlin
class IndoorAtlasPositionProvider(private val context: Context, private val config: MPIndoorAtlasConfig): MPPositionProvider {
    private var mLastHeadingUpdateTime: Long = 0
    private val MIN_TIME_BETWEEN_UPDATES_IN_MS: Long = 100
    private var mLatestBearing: Float? = null

    private val orientationListener: IAOrientationListener = object : IAOrientationListener {
        override fun onHeadingChanged(timestamp: Long, heading: Double) {
            mLatestPosition?.let {
                val dt: Long = timestamp - mLastHeadingUpdateTime

                if (dt < MIN_TIME_BETWEEN_UPDATES_IN_MS) {
                    return
                }

                mLastHeadingUpdateTime = timestamp

                it.bearing = heading.toFloat()
                mLatestBearing = it.bearing

                notifyPositionUpdate()
            }
        }

        override fun onOrientationChange(p0: Long, p1: DoubleArray?) {
            //Empty as we only use heading here
        }
    }

    private val locationListener = object : IALocationListener {
        override fun onLocationChanged(location: IALocation?) {
            location?.let {
                val lat = it.latitude
                val lng = it.longitude
                val floorLevel = it.floorLevel
                val accuracy = it.accuracy

                val hasFloorLevel = it.hasFloorLevel()

                val positionResult = MPPositionResult(MPPoint(lat, lng), accuracy)
                positionResult.androidLocation = it.toLocation()
                if (mLatestBearing != null) {
                    positionResult.bearing = mLatestBearing!!
                }
                //Notice we use a method from our IndoorAtlasConfig to retreive the correct MapsIndoors floor level from the IndoorAtlas result. If you do not have a config set up through the CMS,
                //You can create a method that handles the floor mapping itself.
                if (hasFloorLevel) {
                    if (config.getMappedFloorIndex(floorLevel) != null) {
                        positionResult.floorIndex = config.getMappedFloorIndex(floorLevel)!!
                    }else {
                        positionResult.floorIndex = MPFloor.DEFAULT_GROUND_FLOOR_INDEX
                    }
                }else {
                    positionResult.floorIndex = MPFloor.DEFAULT_GROUND_FLOOR_INDEX
                }

                positionResult.provider = this@IndoorAtlasPositionProvider

                mLatestPosition = positionResult
                notifyPositionUpdate()
            }
        }

        override fun onStatusChanged(p0: String?, p1: Int, p2: Bundle?) {
            //Blank for this, can be used to report if indoor atlas is unavailable etc.
        }
    }


    fun notifyPositionUpdate() {
        for (positionUpdateListener in positionUpdateListeners) {
            mLatestPosition?.let {
                positionUpdateListener.onPositionUpdate(it)
            }
        }
    }
}
```

Implement the `startPositoning` and `stopPositioning` method:

<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/positioning/IndoorAtlasPositionProvider.kt#L99-L114">IndoorAtlasPositionProvider.kt</a>

```java
fun startPositioning() {
    if (indoorAtlasClient == null) {
        initClient()
    }
    indoorAtlasClient?.registerOrientationListener(IAOrientationRequest(1.0, 0.0), orientationListener)
    indoorAtlasClient?.requestLocationUpdates(IALocationRequest.create(), locationListener)
    indoorAtlasClient?.lockIndoors(false)
}

fun stopPositioning() {
    indoorAtlasClient?.let {
        it.unregisterOrientationListener(orientationListener)
        it.removeLocationUpdates(locationListener)
        it.lockIndoors(true)
    }
}
```

Now to use our implemented position provider. We will handle that in our activity or fragment.

<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/positioning/PositioningFragment.kt#L40-L54">PositioningFragment.kt</a>

```kotlin
class myFragment: Fragment(), OnMapReadyCallback {
    private var mPositionProvider: IndoorAtlasPositionProvider? = null

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?,): View {
        ...
        MapsIndoors.load(requireActivity().applicationContext, "myapikey") {
            // Attach the position provider to the SDK
            mPositionProvider = IndoorAtlasPositionProvider(requireActivity(), MapsIndoors.getSolution()!!.indoorAtlasConfig!!)
            MapsIndoors.setPositionProvider(mPositionProvider)
        }

        //Have a buttton or other logic to start positioning:
        binding.startPositioningButton.setOnClickListener {
            //Remember to handle permissions specific to the Position provider you are using
            mPositionProvider?.startPositioning()
        }
        ...
    }
}
```

Lastly, we need to tell `MapControl` that we want to show the position on the map.

<mi-tabs>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/positioning/PositioningFragment.kt#L93-L97">PositioningFragment.kt</a>

```kotlin
MapControl.create(mapConfig) { mapControl: MapControl?, miError: MIError? ->
    mMapControl = mapControl

    // Enable showing the position indicator (aka. the blue dot)
    mMapControl?.showUserPosition(true)
}
```

</mi-tab-panel>
</mi-tabs>

A full example implementation of the Indoor Atlas position provider can be found here: [PositionProviders](https://github.com/MapsPeople/MapsIndoors-Android-Examples/tree/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/positioning)

</mi-tab-panel>
<mi-tab-panel id="ios">

## MapsIndoors and IndoorAtlas

MapsIndoors is a dynamic mapping platform from MapsPeople that can provide maps of your indoor and outdoor localities and helps you create search and navigation experiences for your local users. IndoorAtlas is a MapsPeople partner that works with indoor location based services. Among other things, IndoorAtlas can precisely provide an indoor position with the help of various technologies utilizing various mobile device sensors.

## How User Positioning Works in MapsIndoors

In order to show a user's position in an indoor map with MapsIndoors, a Position Provider must be implemented. MapsIndoors does not implement a Position Provider itself, but rely on 3rd party positioning software to create this experience. In an outdoor environment this Position Provider can be a wrapper of the Core Location Services in iOS.

A Position Provider in MapsIndoors must adhere to the `MPPositionProvider` protocol. Once you have an instance of an `MPPositionProvider` you can register it by assigning it to `MapsIndoors.positionProvider`. See the overview of the interface dependencies below.

![cisco-dna-ios](/assets/map/positioning/positioning-diagram.png)

## Wrapping IndoorAtlas in a Position Provider

As previously explained we need to implement a Position Provider that wraps the Indoor Atlas services to inject the indoor positioning into MapsIndoors. We have created an example of such a Position Provider, `IAPositionProvider`, which we will utilize in the following setup instructions. The `IAPositionProvider` is written in Objective C, but can of course be used in Swift as well.

### Floor Mapping

The Position Provider that you supply to MapsIndoors must know about the floor indexes that exist in MapsIndoors. These floor indexes may not exist in the 3rd party system that provides the indoor position. In order to account for this, we have created a floor mapping in the provider, which is basically a lookup table that can give you the MapsIndoors floor index based on another index or id. The mapping is illustrated below:

```swift
// { IndoorAtlas floor index : MapsIndoors floor index }
{
  0:0,
  1:10,
  2:20,
  3:30,
  4:40
}
```

As illustrated, the floor mapping is a dictionary, where the IndoorAtlas floor index operates as the key and the MapsIndoors floor index is the value.

## Integration Setup Steps

1. Make sure you have [integrated MapsIndoors]({{site.url}}/content/getting-started/ios) succesfully.
1. Download and unzip [this zip file](https://drive.google.com/file/d/1F50FRWBmtHnO9HxASY-T2rkgjRJt7TNm/view?usp=sharing) containing the IndoorAtlas integration source.
1. Create a group in your Xcode project, e.g. called IndoorAtlas.
1. Drag and drop the files in the downloaded folder to your new group. Choose "Copy items if needed".
1. If this is the first Objective C code in your project, Xcode will suggest that you create an Objective C Bridging Header file. Select "Yes" or "Create Bridging Header".
1. In your Objective C Bridging Header, add `#import "IAPositionProvider.h"`.
1. At the time of writing this guide, IndoorAtlas does not support BitCode, so this must be disabled. In the settings, under your XCode project > "Targets" > "Your App Target" > "Build Settings" > "Build Options", set "Enable BitCode" to "No".
1. In your Apps `Info.plist` file add the following descriptions (preferably right click `Info.plist` and choose "Open as" > "Source Code"):

    ```xml
    <key>NSLocationWhenInUseUsageDescription</key>
    <string>This application uses your location in order to provide wayfinding to indoor facilities.</string>
    <key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
    <string>This application uses your location in order to provide wayfinding to indoor facilities.</string>
    <key>NSLocationAlwaysUsageDescription</key>
    <string>This application uses your location in order to provide wayfinding to indoor facilities.</string>
    <key>NSMotionUsageDescription</key>
    <string>This application uses motion data in order to determine your indoor position.</string>
    <key>NSBluetoothAlwaysUsageDescription</key>
    <string>This application uses BlueTooth in order to determine your indoor position.</string>
    <key>NSBluetoothPeripheralUsageDescription</key>
    <string>This application uses BlueTooth in order to determine your indoor position.</string>
    ```

1. In `AppDelegate.swift` - `didFinishLaunchingWithOptions`, add the following code:

    ```swift
    let pp = IAPositionProvider.init(apiKey: "my-indoor-atlas-key", apiSecret: "my-indoor-atlas-secret", floorMapping: [NSNumber(0):NSNumber(0)])
        MapsIndoors.positionProvider = pp
        MapsIndoors.positionProvider?.startPositioning(nil)
    ```

1. In the added code, replace:
    * `my-indoor-atlas-key` with your own IndoorAtlas application key.
    * `my-indoor-atlas-secret` with your own IndoorAtlas application key.
    * `[NSNumber(0):NSNumber(0)]` with the correct floor mapping.

1. In your view controller displaying the Google Map using `MPMapControl`, call `mapControl.showUserPosition(true)`.
1. Build and run the application. You should now be able to show a blue dot for the user's position.

If you need a working project example with MapsIndoors and IndoorAtlas (excluding API keys), you can [download it here](https://drive.google.com/file/d/1CS13NPYjvLl_Q4zbuinevannsKyuiuBM/view?usp=sharing).

<!-- Fetch data from solution -->
{% include "src/content/shared/map/positioning-fetch-ios.md" %}

</mi-tab-panel>
</mi-tabs>
