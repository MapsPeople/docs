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

Place the following initialization code in the `onCreate` method in the activity that should display the Google map. You should also assign the `mapFragment` view to a variable as we will use this later to initialize `MapControl`:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
MapView = mapFragment.getView();
MapsIndoors.initialize(getApplicationContext(), "YOUR_MAPSINDOORS_API_KEY");
MapsIndoors.setGoogleAPIKey(“YOUR_GOOGLE_API_KEY”);
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
MapsIndoors.initialize(applicationContext, "YOUR_MAPSINDOORS_API_KEY")
MapsIndoors.setGoogleAPIKey("YOUR_GOOGLE_API_KEY")

mapView?.let { view ->
  initMapControl(view)
}
```

</mi-tab-panel>
</mi-tabs>

If you are not a customer you can use this demo MapsIndoors API key `79f8e7daff76489dace4f9f9`.

In your `onMapReady` callback function, use the `MapControl` class to set up a Google map with MapsIndoors Venues, Buildings and Locations:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

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

```kotlin
override fun onMapReady(googleMap: GoogleMap) {
    mMap = googleMap
    MapsIndoors.initialize(applicationContext, "79f8e7daff76489dace4f9f9")
    MapsIndoors.setGoogleAPIKey(getString(R.string.google_maps_key))

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

See the full example of MapsActivity here [MapsActivity.java](https://github.com/MapsIndoors/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java)

Head to the [guides]({{ site.url }}/android/v3/guides/) to learn about event handling, searching, getting directions, display settings and more.
