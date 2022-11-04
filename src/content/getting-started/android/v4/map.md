---
title: Show a Map
toc: true
eleventyNavigation:
  title: Show a Map
  key: getting-started-android-map
  parent: getting-started-android-v4
  order: 130
---

<!-- Overview -->
{% include "src/content/shared/getting-started/map/overview.md" %}

<!-- Set up MapsIndoors -->
{% include "src/content/shared/getting-started/map/show-map.md" %}

<!-- Overview -->
{% include "src/content/shared/async-notice.md" %}

### Initialize MapsIndoors

We start by initializing `MapsIndoors`. `MapsIndoors` is used to get and store all references to MapsIndoors-specific data. This includes access to all MapsIndoors-specific geodata.

Place the following initialization code in the `onCreate` method in the `MapsActivity` that displays the Google map. You should also assign the `mapFragment` view to a local variable, as we will use this later to initialize [`MapControl`](https://app.mapsindoors.com/mapsindoors/reference/android/v4/MapsIndoorsSDK/com.mapsindoors.core/-map-control/index.html?query=class%20MapControl) inside the `onCreate`, after it has been created:

<mi-tabs>
<mi-tab label="Java-Google" tab-for="java-google"></mi-tab>
<mi-tab label="Kotlin-Google" tab-for="kotlin-google"></mi-tab>
<mi-tab label="Java-Mapbox" tab-for="java-Mapbox"></mi-tab>
<mi-tab label="Kotlin-Mapbox" tab-for="kotlin-Mapbox"></mi-tab>
<mi-tab-panel id="java-google">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/Google_Maps/mapsindoorsgettingstartedjava/src/main/java/com/mapspeople/mapsindoorsgettingstartedjava/MapsActivity.java#L63-L66">MapsActivity.java</a>

```java
protected void onCreate(Bundle savedInstanceState) {
    ...
    mMapView = mapFragment.getView();
    MapsIndoors.load(getApplicationContext(), "YOUR_MAPSINDOORS_API_KEY", null);
    ...
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin-google">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/Google_Maps/mapsindoorsgettingstartedkotlin/src/main/java/com/mapspeople/mapsindoorsgettingstartedkotlin/MapsActivity.kt#L52-L56">MapsActivity.kt</a>

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
    ...
    MapsIndoors.load(applicationContext, "YOUR_MAPSINDOORS_API_KEY", null)

    mapFragment.view?.let {
        mapView = it
    }
    ...
}
```

</mi-tab-panel>
<mi-tab-panel id="java-Mapbox">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapBox/mapsindoorsgettingstartedjava/src/main/java/com/mapspeople/mapsindoorsgettingstartedjava/MapsActivity.java#L66">MapsActivity.java</a>

```java
protected void onCreate(Bundle savedInstanceState) {
    ...
    MapsIndoors.load(getApplicationContext(), "YOUR_MAPSINDOORS_API_KEY", null);
    ...
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin-Mapbox">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapBox/mapsindoorsgettingstartedkotlin/src/main/java/com/mapspeople/mapsindoorsgettingstartedkotlin/MapsActivity.kt#L48">MapsActivity.kt</a>

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
    ...
    MapsIndoors.load(applicationContext, "YOUR_MAPSINDOORS_API_KEY", null)
    ...
}
```

</mi-tab-panel>
</mi-tabs>

If you are not a customer you can use this demo MapsIndoors API key `d876ff0e60bb430b8fabb145`.

### Initialize MapsControl

We now want to add all the data we get by initializing `MapsIndoors` to our Google map. This is done by initializing [`MapControl`](https://app.mapsindoors.com/mapsindoors/reference/android/v4/MapsIndoorsSDK/com.mapsindoors.core/-map-control/index.html?query=class%20MapControl) onto the Google map. [`MapControl`](https://app.mapsindoors.com/mapsindoors/reference/android/v4/MapsIndoorsSDK/com.mapsindoors.core/-map-control/index.html?query=class%20MapControl) is used as a layer between Google Maps and MapsIndoors.

Here we use Google Maps logic to apply geodata onto the map. This also means we append logic onto many Google Maps listeners, which means that using Google Maps listeners directly might break intended behavior of the MapsIndoors experience. We recommend to check our reference docs, and see if you can add a specific `Listener` through the [`MapControl`](https://app.mapsindoors.com/mapsindoors/reference/android/v4/MapsIndoorsSDK/com.mapsindoors.core/-map-control/index.html?query=class%20MapControl) and always use those when possible.

Start by creating an `initMapControl` method which is used to initiate the [`MapControl`](https://app.mapsindoors.com/mapsindoors/reference/android/v4/MapsIndoorsSDK/com.mapsindoors.core/-map-control/index.html?query=class%20MapControl) and assign it to our Google map:

<mi-tabs>
<mi-tab label="Java-Google" tab-for="java-google"></mi-tab>
<mi-tab label="Kotlin-Google" tab-for="kotlin-google"></mi-tab>
<mi-tab label="Java-Mapbox" tab-for="java-mapbox"></mi-tab>
<mi-tab label="Kotlin-Mapbox" tab-for="kotlin-mapbox"></mi-tab>
<mi-tab-panel id="java-google">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/Google_Maps/mapsindoorsgettingstartedjava/src/main/java/com/mapspeople/mapsindoorsgettingstartedjava/MapsActivity.java#L145-L167">MapsActivity.java</a>

```java
void initMapControl(View view) {
    MPMapConfig mapConfig = new MPMapConfig.Builder(this, mMap, getString(R.string.google_maps_key), view, true).build();
    MapControl.create(mapConfig, (mapControl, miError) -> {
        mMapControl = mapControl;
        //Enable Live Data on the map
        enableLiveData();
        if (miError == null) {
            //No errors so getting the first venue (in the white house solution the only one)
            MPVenue venue = MapsIndoors.getVenues().getCurrentVenue();
            runOnUiThread( ()-> {
                if (venue != null) {
                    //Animates the camera to fit the new venue
                        mMap.animateCamera(CameraUpdateFactory.newLatLngBounds(LatLngBoundsConverter.toLatLngBounds(venue.getBounds()), 19));
                }
            });
        }
    });
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin-google">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/Google_Maps/mapsindoorsgettingstartedkotlin/src/main/java/com/mapspeople/mapsindoorsgettingstartedkotlin/MapsActivity.kt#L117-L135">MapsActivity.kt</a>

```kotlin
private fun initMapControl(view: View) {
    MPMapConfig mapConfig = new MPMapConfig.Builder(this, mMap, getString(R.string.google_maps_key), view, true).build();
    //Creates a new instance of MapControl
    MapControl.create(config) { mapControl, miError ->
        if (miError == null) {
            mMapControl = mapControl!!
            //Enable live data on the map
            enableLiveData()
            //No errors so getting the first venue (in the white house solution the only one)
            val venue = MapsIndoors.getVenues()?.currentVenue
            venue?.bounds?.let {
                runOnUiThread {
                    //Animates the camera to fit the new venue
                    mMap.animateCamera(CameraUpdateFactory.newLatLngBounds(LatLngBoundsConverter.toLatLngBounds(it), 19))
                }
            }
        }
    }
}
```

</mi-tab-panel>
<mi-tab-panel id="java-mapbox">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapBox/mapsindoorsgettingstartedjava/src/main/java/com/mapspeople/mapsindoorsgettingstartedjava/MapsActivity.java#L138-L159">MapsActivity.java</a>

```java
void initMapControl() {
    MPMapConfig mapConfig = new MPMapConfig.Builder(this, mMapboxMap, mMapView, getString(R.string.mapbox_access_token),true).build();
    //Creates a new instance of MapControl
    MapControl.create(mapConfig, (mapControl, miError) -> {
        mMapControl = mapControl;
        //Enable Live Data on the map
        enableLiveData();
        if (miError == null) {
            //No errors so getting the first venue (in the white house solution the only one)
            MPVenue venue = MapsIndoors.getVenues().getCurrentVenue();
            runOnUiThread( ()-> {
                if (venue != null) {
                    //Animates the camera to fit the new venue
                    CameraAnimationsUtils.flyTo(mMapboxMap, mMapboxMap.cameraForCoordinateBounds(CoordinateBoundsConverter.toCoordinateBounds(venue.getBounds()), new EdgeInsets(0,0,0,0), null, null));
                }
            });
        }
    });
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin-mapbox">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapBox/mapsindoorsgettingstartedkotlin/src/main/java/com/mapspeople/mapsindoorsgettingstartedkotlin/MapsActivity.kt#L101-L119">MapsActivity.kt</a>

```kotlin
private fun initMapControl() {
    //Creates a new instance of MapControl
    val config = MPMapConfig.Builder(this, mMap, mapView, getString(R.string.mapbox_access_token),true).build()
    MapControl.create(config) { mapControl, miError ->
        if (miError == null) {
            mMapControl = mapControl!!
            //Enable live data on the map
            enableLiveData()
            //No errors so getting the first venue (in the white house solution the only one)
            val venue = MapsIndoors.getVenues()?.currentVenue
            venue?.bounds?.let {
                runOnUiThread {
                    //Animates the camera to fit the new venue
                    mMap.flyTo(mMap.cameraForCoordinateBounds(CoordinateBoundsConverter.toCoordinateBounds(it)))
                }
            }
        }
    }
}
```

</mi-tab-panel>
</mi-tabs>

In your `onMapReady` callback function, assign the `mMap` variable with the `GoogleMap` you get from the callback and call the `initMapControl` method with the `mMapView` you assigned in the `onCreate` to set up a Google map with MapsIndoors Venues, Buildings and Locations:

<mi-tabs>
<mi-tab label="Java-Google" tab-for="java-google"></mi-tab>
<mi-tab label="Kotlin-Google" tab-for="kotlin-google"></mi-tab>
<mi-tab label="Java-Mapbox" tab-for="java-mapbox"></mi-tab>
<mi-tab label="Kotlin-Mapbox" tab-for="kotlin-mapbox"></mi-tab>
<mi-tab-panel id="java-google">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/Google_Maps/mapsindoorsgettingstartedjava/src/main/java/com/mapspeople/mapsindoorsgettingstartedjava/MapsActivity.java#L137-L143">MapsActivity.java</a>

```java
@Override
public void onMapReady(GoogleMap googleMap) {
   mMap = googleMap;

   if (mMapView != null) {
       initMapControl(mMapView);
   }
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin-google">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/Google_Maps/mapsindoorsgettingstartedkotlin/src/main/java/com/mapspeople/mapsindoorsgettingstartedkotlin/MapsActivity.kt#L109-L115">MapsActivity.kt</a>

```kotlin
override fun onMapReady(googleMap: GoogleMap) {
    mMap = googleMap

    mapView?.let { view ->
        initMapControl(view)
    }
}
```

</mi-tab-panel>
<mi-tab-panel id="java-mapbox">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapBox/mapsindoorsgettingstartedjava/src/main/java/com/mapspeople/mapsindoorsgettingstartedjava/MapsActivity.java#L119">MapsActivity.java</a>

```java
protected void onCreate(Bundle savedInstanceState) {
    ...
    initMapControl();
    ...
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin-mapbox">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapBox/mapsindoorsgettingstartedkotlin/src/main/java/com/mapspeople/mapsindoorsgettingstartedkotlin/MapsActivity.kt#L98">MapsActivity.kt</a>

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
    ...
    initMapControl();
    ...
}
```

</mi-tab-panel>
</mi-tabs>

Expected result:

![Map result](/assets/android/getting-started/map_gif.gif)

See the full example of MapsActivity here: [MapsActivity.java](https://github.com/MapsPeople/MapsIndoors-Android-Examples/tree/main/Google_Maps/mapsindoorsgettingstartedjava) or [MapsActivity.kt](https://github.com/MapsPeople/MapsIndoors-Android-Examples/tree/main/Google_Maps/mapsindoorsgettingstartedkotlin)

The Mapbox examples can be found here: [MapsActivity.java](https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapBox/mapsindoorsgettingstartedjava/src/main/java/com/mapspeople/mapsindoorsgettingstartedjava/MapsActivity.java) or [MapsActivity.kt](https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapBox/mapsindoorsgettingstartedkotlin/src/main/java/com/mapspeople/mapsindoorsgettingstartedkotlin/MapsActivity.kt)

<p class="next-article"><a class="mi-button mi-button--outline" href="{{ site.url }}/content/getting-started/android/v4/search/">Next up: Search</a></p>
