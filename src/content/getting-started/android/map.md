---
title: Show a Map
toc: true
eleventyNavigation:
  title: Show a Map
  key: getting-started-android-map
  parent: getting-started-android
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

Place the following initialization code in the `onCreate` method in the `MapsActivity` that displays the Google map. You should also assign the `mapFragment` view to a local variable, as we will use this later to initialize `MapControl` inside the `onCreate`, after it has been created:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Mapbox-Android/blob/429f2ca4514648c5e43bf50c9c46246164bfb412/app/src/main/java/com/example/mapsindoorsgettingstartedmapbox/MapsActivity.java#L69-L72">MapsActivity.java</a>

```java
protected void onCreate(Bundle savedInstanceState) {
    ...
    MapsIndoors.load(getApplicationContext(), "d876ff0e60bb430b8fabb145", miError ->
        runOnUiThread(() -> initMapControl(mMap, mMapView, getString(R.string.mapbox_access_token)))
    );
    ...
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Mapbox-Android-Kotlin/blob/9df3583787a50e0aa5c59e0a91e0a94c2b3b6225/app/src/main/java/com/example/mapsindoorsgettingstartedmapboxkotlin/MapsActivity.kt#L54-L59">MapsActivity.kt</a>

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
    ...
    MapsIndoors.load(applicationContext, "d876ff0e60bb430b8fabb145") {
        runOnUiThread {
            initMapControl(mMap, mMapView, getString(R.string.mapbox_access_token))
        }
    }
    ...
}
```

</mi-tab-panel>
</mi-tabs>

If you are not a customer you can use this demo MapsIndoors API key `d876ff0e60bb430b8fabb145`.

### Initialize MapsControl

We now want to add all the data we get by initializing `MapsIndoors` to our Mapbox map. This is done by initializing `MapControl` onto the Mapbox map. `MapControl` is used as a layer between Google Maps and MapsIndoors.

Here we use Google Maps logic to apply geodata onto the map. This also means we append logic onto many Google Maps listeners, which means that using Google Maps listeners directly might break intended behavior of the MapsIndoors experience. We recommend to check our reference docs, and see if you can add a specific `Listener` through the `MapControl` and always use those when possible.

Start by creating an `initMapControl` method which is used to initiate the `MapControl` and assign it to our Google map:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Mapbox-Android/blob/429f2ca4514648c5e43bf50c9c46246164bfb412/app/src/main/java/com/example/mapsindoorsgettingstartedmapbox/MapsActivity.java#L147-L170">MapsActivity.java</a>

```java
void initMapControl(MapboxMap map, MapView view, String mapboxApiKey) {
    // Creates a map config, with the map, view and mapbox api key
    MPMapConfig mapConfig = new MPMapConfig.Builder(this, map, view, mapboxApiKey, true).build();
    // Create a new instance of MapControl
    MapControl.create(mapConfig, (mapControl, miError) -> {
        mMapControl = mapControl;
        if (miError == null) {
            //No errors so getting the first venue (in the white house solution the only one)
            MPVenue venue = MapsIndoors.getVenues().getDefaultVenue();
            runOnUiThread(() -> {
                // Animate the camera to the default venue
                if (venue != null && venue.getBounds() != null) {
                    mMapControl.selectFloor(venue.getDefaultFloor());
                    CameraOptions cameraPosition = map.cameraForCoordinateBounds(
                            CoordinateBoundsConverter.toCoordinateBounds(venue.getBounds()),
                            new EdgeInsets(0, 0, 0, 0), 0.0, 0.0);
                    CameraAnimationsUtils.easeTo(map, cameraPosition, new MapAnimationOptions.Builder().duration(3000).build());
                }
            });
        }
    });
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/main/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/MapsActivity.kt#L108-L134">MapsActivity.kt</a>

```kotlin
private fun initMapControl(map : MapboxMap, view: MapView, mapboxKey : String) {
    // Creates a map config, with the map, view and mapbox api key
    val mapConfig = MPMapConfig.Builder(this, map, view, mapboxKey).build() as MPMapConfig
    //Creates a new instance of MapControl
    MapControl.create(mapConfig) { mapControl, miError -> 
    if (mapControl != null && miError == null) {
        // Sets the local MapControl var so that it can be used later
        mMapControl = mapControl
        // No errors so getting the first venue (in the white house solution the only one)
        val venue = MapsIndoors.getVenues()?.currentVenue
        // Animate camera to venue bounds
        runOnUiThread {
            val cameraPosition = map.cameraForCoordinateBounds(
                toCoordinateBounds(venue!!.bounds!!),
                EdgeInsets(0.0, 0.0, 0.0, 0.0), 0.0, 0.0
            )
            mMap.flyTo(cameraPosition, MapAnimationOptions.Builder().duration(3000).build())
        }
    }
}
```

</mi-tab-panel>
</mi-tabs>

Expected result:

![Map result](/assets/android/getting-started/map_gif.gif)

See the full example of MapsActivity here [MapsActivity.java](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Mapbox-Android/blob/429f2ca4514648c5e43bf50c9c46246164bfb412/app/src/main/java/com/example/mapsindoorsgettingstartedmapbox/MapsActivity.java) or [MapsActivity.kt](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Mapbox-Android-Kotlin/blob/9df3583787a50e0aa5c59e0a91e0a94c2b3b6225/app/src/main/java/com/example/mapsindoorsgettingstartedmapboxkotlin/MapsActivity.kt)

<p class="next-article"><a class="mi-button mi-button--outline" href="{{ site.url }}/content/getting-started/android/search/">Next up: Search</a></p>
