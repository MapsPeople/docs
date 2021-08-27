---
title: Show a map
toc: true
eleventyNavigation:
  title: Show a map
  key: android-v4-getting-started-map
  parent: android-v4-getting-started
  order: 130
---

<!-- Overview -->
{% include "src/shared/getting-started/map/overview.md" %}

<!-- Set up MapsIndoors -->
{% include "src/shared/getting-started/map/show-map.md" %}

### Initialize MapsIndoors

Place the following initialization code in the `onCreate` method in the `MapsActivity` that displays the Google map. You should also assign the `mapFragment` view to a local variable as we will use this later to initialize `MapControl`:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L64-L68">MapsActivity.java</a>

```java
        mMapView = mapFragment.getView();

        //Initialize MapsIndoors and set the google api Key, we do not need a listener in this showcase
        MapsIndoors.initialize(getApplicationContext(), "d876ff0e60bb430b8fabb145", null);
        MapsIndoors.setGoogleAPIKey(getString(R.string.google_maps_key));
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/main/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/MapsActivity.kt#L52-L57">MapsActivity.kt</a>

```kotlin
MapsIndoors.initialize(applicationContext, "d876ff0e60bb430b8fabb145", null)
MapsIndoors.setGoogleAPIKey(getString(R.string.google_maps_key))

mapFragment.view?.let {
    mapView = it
}
```

</mi-tab-panel>
</mi-tabs>

If you are not a customer you can use this demo MapsIndoors API key `d876ff0e60bb430b8fabb145`.

In your `onMapReady` callback function, use the `MapControl` class together with the `MPMapConfig` class to set up a Google map with MapsIndoors Venues, Buildings and Locations:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L141-L184">MapsActivity.java</a>

```java
@Override
public void onMapReady(GoogleMap googleMap) {
    mMap = googleMap;
    if (mMapView != null) {
        initMapControl(mMapView);
    }
}

void initMapControl(View view) {
    //Makes a basic configuration for MapControl
    MPMapConfig mapConfig = new MPMapConfig.Builder(this, mMap, view).build();

    //Creates a new instance of MapControl
    MapControl.create(mapConfig, this::onMapControlReady);

}

public void onMapControlReady(MapControl mapControl, MIError error) {
    if (error == null) {
        // Sets the local MapControl variable so that it can be used later
        mMapControl = mapControl;
        //No errors so getting the first venue (in the white house solution the only one)
        MPVenue venue = MapsIndoors.getVenues().getCurrentVenue();
        runOnUiThread(() -> {
            if (venue != null) {
                //Animates the camera to fit the new venue
                mMap.animateCamera(CameraUpdateFactory.newLatLngBounds(venue.getLatLngBoundingBox(), 19));
            }
        });
        ...
    }
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/main/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/MapsActivity.kt#L110-L144">MapsActivity.kt</a>

```kotlin
override fun onMapReady(googleMap: GoogleMap) {
    mMap = googleMap

    initMapControl(mapView)
}

private fun initMapControl(view: View) {
    //Sets the Google map object and the map view to the MapControl with a configuration
    val mapConfig = MPMapConfig.Builder(this, mMap, view).build() as MPMapConfig

    //Creates a new instance of MapControl
    MapControl.create(mapConfig, this::onMapControlReady)
}


private fun onMapControlReady(mapControl: MapControl, miError: MIError?) {
    if (miError == null) {
        // Sets the local MapControl variable so that it can be used later
        mMapControl = mapControl
        //No errors so getting the first venue (in the white house solution the only one)
        val venue = MapsIndoors.getVenues()?.currentVenue

        runOnUiThread {
            //Animates the camera to fit the new venue
            mMap.animateCamera(
                CameraUpdateFactory.newLatLngBounds(
                    venue?.latLngBoundingBox,
                    19
                )
            )
        }
        ...
    }
}
```

</mi-tab-panel>
</mi-tabs>

Expected result:

![Map result](/assets/android/getting-started/map_gif.gif)

See the full example of MapsActivity here [MapsActivity.java](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java) or [MapsActivity.kt](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/main/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/MapsActivity.kt)
<!-- TODO: Guides are dead links -->
Head to the [guides]({{ site.url }}/android/v4/guides/) to learn about event handling, searching, getting directions, display settings and more.

<p class="next-article"><a class="mi-button mi-button--outline" href="{{ site.url }}/android/v4/getting-started/search/">Next up: Search</a></p>
