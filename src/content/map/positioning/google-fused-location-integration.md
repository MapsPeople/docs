---
title: Using Google Fused Location Provider
toc: true
eleventyNavigation:
  title: Using Google Fused Location Provider
  parent: map-positioning-blue-dot
  key: map-positioning-google-fused
  order: 120
---

To get started with Google Fused Location Provider, you need to create a positioning implementation which enables communicating the positions received from the API with the MapsIndoors SDK.

The Position Provider implementation exists at the customer application level, and needs to use the `MPPositionProvider` interface from the MapsIndoors SDK. The MapsIndoors SDK can then use the positioning results given by the given Position Provider, by setting the Position Provider with `MapsIndoors.setPositionProvider(MPPositionProvider)`.

<!-- Fetch data from solution -->
{% include "src/content/shared/map/positioning-fetch-android.md" %}

### Implementing Google Fused Location Provider API

This Guide requires you to already have an activity that shows a MapsIndoors Map and to have the Google Play Services Location library dependency added to your project.

```java
dependencies {
    implementation 'com.google.android.gms:play-services-location:18.0.0'
}
```

</mi-tab-panel>
</mi-tabs>

We will start implementing the Fused Location position provider. Create a class called `GPSPositionProvider` that implements the `MPPositionProvider` interface from the MapsIndoors SDK, and create a constructor that takes a `Context` as parameter and create an instance of the FusedLocationProviderClient.

<mi-tabs>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/positioning/GPSPositionProvider.kt#L8-L12">GPSPositionProvider.kt</a>

```kotlin
class GPSPositionProvider(context: Context): MPPositionProvider {
    private var fusedLocationClient: FusedLocationProviderClient = LocationServices.getFusedLocationProviderClient(context)
    private var mLatestPosition: MPPositionResultInterface? = null
}
```

</mi-tab-panel>
</mi-tabs>

We will start by implementing logic to each of the implemented methods from the `MPPositionProvider` interface.

<mi-tabs>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/positioning/GPSPositionProvider.kt#L42-L52">GPSPositionProvider.kt</a>

```kotlin
class GPSPositionProvider(context: Context): MPPositionProvider {

    private var fusedLocationClient: FusedLocationProviderClient = LocationServices.getFusedLocationProviderClient(context)
    private val positionUpdateListeners = ArrayList<OnPositionUpdateListener>()
    private var mLatestPosition: MPPositionResultInterface? = null

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

</mi-tab-panel>
</mi-tabs>

We will then start implementing the code to get Google Fused Location positioning up and running.

We start by implementing the `startPositioning` and `stopPositioning` methods:

<mi-tabs>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/positioning/GPSPositionProvider.kt#L32-L40">GPSPositionProvider.kt</a>

```kotlin
class GPSPositionProvider(context: Context): MPPositionProvider {
    fun startPositioning() {
        val locationRequest = LocationRequest.Builder(1000).build()
        fusedLocationClient.requestLocationUpdates(locationRequest, locationCallback, null)
    }

    fun stopPositioning() {
        fusedLocationClient.removeLocationUpdates(locationCallback)
    }
}
```

</mi-tab-panel>
</mi-tabs>

Implement the `LocationCallBack` to the provider to receive and handle the location updates.

<mi-tabs>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/positioning/GPSPositionProvider.kt#32-L40">GPSPositionProvider.kt</a>

```kotlin
class GPSPositionProvider(context: Context): MPPositionProvider {
...
    private val locationCallback = object : LocationCallback() {
        override fun onLocationResult(locationResult: LocationResult) {
            super.onLocationResult(locationResult)
            locationResult.lastLocation?.let {
                mLatestPosition = MPPositionResult(MPPoint(it.latitude, it.longitude), it.accuracy)
                notifyPositionUpdate()
            }
        }
    }
}
```

</mi-tab-panel>
</mi-tabs>

Our implemented positioning provider will be handled in an activity or fragment.

<mi-tabs>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/positioning/PositioningFragment.kt#L40-L54">PositioningFragment.kt</a>

```kotlin
class MyFragment: Fragment(), OnMapReadyCallback {
    private var mPositionProvider: GPSPositionProvider? = null

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?,): View {
        ...
            mPositionProvider = GPSPositionProvider(requireActivity())
            MapsIndoors.load(requireActivity().applicationContext, "myapikey") {
                // Attach the position provider to the SDK
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

</mi-tab-panel>
</mi-tabs>

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

A full example implementation of the Google Fused Location position provider can be found here: [PositionProviders](https://github.com/MapsPeople/MapsIndoors-Android-Examples/tree/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/positioning)
