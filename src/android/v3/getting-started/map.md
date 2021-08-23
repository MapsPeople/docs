---
title: Show a map
toc: true
eleventyNavigation:
  title: Show a map
  key: android-v3-getting-started-map
  parent: android-v3-getting-started
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
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L60-L65">MapsActivity.java</a>

```java
mMapView = mapFragment.getView();
MapsIndoors.initialize(getApplicationContext(), "YOUR_MAPSINDOORS_API_KEY");
MapsIndoors.setGoogleAPIKey(“YOUR_GOOGLE_API_KEY”);
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/main/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/MapsActivity.kt#L50-L55">MapsActivity.kt</a>

```kotlin
MapsIndoors.initialize(applicationContext, "YOUR_MAPSINDOORS_API_KEY")
MapsIndoors.setGoogleAPIKey(“YOUR_GOOGLE_API_KEY”)

mapFragment.view?.let {
    mapView = it
}
```

</mi-tab-panel>
</mi-tabs>

If you are not a customer you can use this demo MapsIndoors API key `d876ff0e60bb430b8fabb145`.

In your `onMapReady` callback function, use the `MapControl` class to set up a Google map with MapsIndoors Venues, Buildings and Locations:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L135-L168">MapsActivity.java</a>

```java
@Override
public void onMapReady(GoogleMap googleMap) {
   mMap = googleMap;

   if (view != null) {
       initMapControl(view);
   }
}

void initMapControl(View view) {
    //Creates a new instance of MapControl
    mMapControl = new MapControl(this);
    //Sets the Google map object and the map view to the MapControl
    mMapControl.setGoogleMap(mMap, view);
    //Initiates the MapControl
    mMapControl.init(miError -> {
        if (miError == null) {
            //No errors so getting the first venue (in the white house solution the only one)
            Venue venue = MapsIndoors.getVenues().getCurrentVenue();
            runOnUiThread( ()-> {
                if (venue != null) {
                    //Animates the camera to fit the new venue
                    mMap.animateCamera(CameraUpdateFactory.newLatLngBounds(venue.getLatLngBoundingBox(), 19));
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
override fun onMapReady(googleMap: GoogleMap) {
    mMap = googleMap

    mapView?.let { view ->
        initMapControl(view)
    }
}

private fun initMapControl(view: View) {
    //Creates a new instance of MapControl
    mMapControl = MapControl(this)
    //Sets the Google map object and the map view to the MapControl
    mMapControl.setGoogleMap(mMap, view)
    mMapControl.init { miError ->
        if (miError == null) {
            //No errors so getting the first venue (in the white house solution the only one)
            val venue = MapsIndoors.getVenues()?.currentVenue

            runOnUiThread {
                //Animates the camera to fit the new venue
                mMap.animateCamera(CameraUpdateFactory.newLatLngBounds(venue?.latLngBoundingBox, 19));
            }
        }
    }
}
```

</mi-tab-panel>
</mi-tabs>

Expected result:

![Map result](/assets/android/getting-started/map_gif.gif)

See the full example of MapsActivity here [MapsActivity.java](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java) or [MapsActivity.kt](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/main/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/MapsActivity.kt)

Head to the [guides]({{ site.url }}/android/v3/guides/) to learn about event handling, searching, getting directions, display settings and more.

<p class="next-article"><a class="mi-button mi-button--outline" href="{{ site.url }}/android/v3/getting-started/search/">Next up: Search</a></p>
