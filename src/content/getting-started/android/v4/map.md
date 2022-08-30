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

Place the following initialization code in the `onCreate` method in the `MapsActivity` that displays the Google map. You should also assign the `mapFragment` view to a local variable, as we will use this later to initialize `MapControl` inside the `onCreate`, after it has been created:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L60-L65">MapsActivity.java</a>

```java
protected void onCreate(Bundle savedInstanceState) {
    ...
    mMapView = mapFragment.getView();
    MapsIndoors.initialize(getApplicationContext(), "YOUR_MAPSINDOORS_API_KEY");
    MapsIndoors.setGoogleAPIKey(“YOUR_GOOGLE_API_KEY”);
    ...
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/main/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/MapsActivity.kt#L50-L55">MapsActivity.kt</a>

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
    ...
    MapsIndoors.initialize(applicationContext, "YOUR_MAPSINDOORS_API_KEY")
    MapsIndoors.setGoogleAPIKey(“YOUR_GOOGLE_API_KEY”)

    mapFragment.view?.let {
        mapView = it
    }
    ...
}
```

</mi-tab-panel>
</mi-tabs>

If you are not a customer you can use this demo MapsIndoors API key `d876ff0e60bb430b8fabb145`.

### Initialize MapsControl

We now want to add all the data we get by initializing `MapsIndoors` to our Google map. This is done by initializing `MapControl` onto the Google map. `MapControl` is used as a layer between Google Maps and MapsIndoors.

Here we use Google Maps logic to apply geodata onto the map. This also means we append logic onto many Google Maps listeners, which means that using Google Maps listeners directly might break intended behavior of the MapsIndoors experience. We recommend to check our reference docs, and see if you can add a specific `Listener` through the `MapControl` and always use those when possible.

Start by creating an `initMapControl` method which is used to initiate the `MapControl` and assign it to our Google map:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L135-L168">MapsActivity.java</a>

```java
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

In your `onMapReady` callback function, assign the `mMap` variable with the `GoogleMap` you get from the callback and call the `initMapControl` method with the `mMapView` you assigned in the `onCreate` to set up a Google map with MapsIndoors Venues, Buildings and Locations:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsIndoors/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L135-L168">MapsActivity.java</a>

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
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsIndoors/MapsIndoors-Getting-Started-Android-Kotlin/blob/main/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/MapsActivity.kt#L108-L134">MapsActivity.kt</a>

```kotlin
override fun onMapReady(googleMap: GoogleMap) {
    mMap = googleMap

    mapView?.let { view ->
        initMapControl(view)
    }
}
```

</mi-tab-panel>
</mi-tabs>

Expected result:

![Map result](/assets/android/getting-started/map_gif.gif)

See the full example of MapsActivity here [MapsActivity.java](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java) or [MapsActivity.kt](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/main/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/MapsActivity.kt)

<p class="next-article"><a class="mi-button mi-button--outline" href="{{ site.url }}/content/getting-started/android/search/">Next up: Search</a></p>
