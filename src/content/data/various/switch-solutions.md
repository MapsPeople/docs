---
title: Switching Solutions
toc: true
eleventyNavigation:
  parent: data-various
  key: data-various-switching-solutions
  title: Switching Solutions
  order: 10
---

Some larger organisations may have not just multiple Venues, but also multiple Solutions in the MapsIndoors system. Therefore, it is naturally important to be able to switch between them.

At it's core, this is done simply by switching out the API key and reloading the system. However, there are a few more steps that can be done to ensure smooth transition between Solutions.

## Android

The method of handling this in Android and iOS differ somewhat, with Android being slightly more complicated.

### Starting a Solution

When you load your initial Solution, it's important to do it the "correct" way, to ensure it's easy to switch Solution's later if needed.

<mi-tabs>
<mi-tab label="Java" tab-for="android-java"></mi-tab>
<mi-tab label="Kotlin" tab-for="android-kotlin"></mi-tab>
<mi-tab-panel id="android-java">

```java
protected void onCreate(Bundle savedInstanceState) {
    ...
    mMapView = mapFragment.getView();
    MapsIndoors.initialize(getApplicationContext(), "YOUR_MAPSINDOORS_API_KEY");
    MapsIndoors.setGoogleAPIKey(“YOUR_GOOGLE_API_KEY”);
    mapFragment.getMapAsync(this);
    ...
}
@Override
public void onMapReady(GoogleMap googleMap) {
    mMap = googleMap;
    if (mMapView != null) {
        initMapControl(mMapView);
    }
}
void initMapControl(View view) {
    //Creates a new instance of MapControl
    mMapControl = new MapControl(this);
    //Sets the Google map object and the map view to the MapControl
    mMapControl.setGoogleMap(mMap, view);
    //Initiates the MapControl
    mMapControl.init(miError -> {
        //Orient your map to where you need data to be shown. This could be done by getting the default venue through MapsIndoors and panning the camera there
    });
}
```

</mi-tab-panel>
<mi-tab-panel id="android-kotlin">

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
    ...
    MapsIndoors.initialize(applicationContext, "YOUR_MAPSINDOORS_API_KEY")
    MapsIndoors.setGoogleAPIKey(“YOUR_GOOGLE_API_KEY”)
    mapFragment.view?.let {
        mapView = it
    }
    mapFragment.getMapAsync(this)
    ...
}
override fun onMapReady(googleMap: GoogleMap) {
    mMap = googleMap
    initMapControl(mMapView)
}
fun initMapControl(view: View) {
    //Creates a new instance of MapControl
    mMapControl = MapControl(this)
    //Sets the Google map object and the map view to the MapControl
    mMapControl.setGoogleMap(mMap, view)
    //Initiates the MapControl
    mMapControl.init { miError: MIError? ->
        //Orient your map to where you need data to be shown. This could be done by getting the default venue through MapsIndoors and panning the camera there
    }
}
```

</mi-tabs>

### Switching Solutions

Since you took the time to set up your Solution "properly" previously, switching Solutions to a different one is as simple as changing the active API key using `setAPIKey()`, along with ensuring that `mMapControl` doesn't retain any uneccesary information from the previously active Solution, which could cause conflicts.

We recommend initialising your own function to call in the future for this purpose, like the example here with `switchSolution()`:

<mi-tabs>
<mi-tab label="Java" tab-for="android-java"></mi-tab>
<mi-tab label="Kotlin" tab-for="android-kotlin"></mi-tab>
<mi-tab-panel id="android-java">

```java
protected void switchSolution() {
    //setApiKey returns a boolean, if MapsIndoors is in a state where it is possible to call setApiKey. This does not validate your api key.
    if(MapsIndoors.setAPIKey("YOUR_SECONDARY_API_KEY")) {
        MapsIndoors.setGoogleAPIKey(“YOUR_GOOGLE_API_KEY”);
        //If you already have a mapControl running this needs to be destroyed
        mMapControl.onDestroy();
        mapFragment.getMapAsync(this);  
    }
}
```

</mi-tab-panel>
<mi-tab-panel id="android-kotlin">

```kotlin
private fun switchSolution() {
    //setApiKey returns a boolean, if MapsIndoors is in a state where it is possible to call setApiKey. This does not validate your api key.
    if (MapsIndoors.setAPIKey("YOUR_SECONDARY_API_KEY")) {
        MapsIndoors.setGoogleAPIKey(“YOUR_GOOGLE_API_KEY”)
        //If you already have a mapControl running this needs to be destroyed
        mMapControl.onDestroy()
        mMapFragment.getMapAsync(this)
    }
}
```

</mi-tab-panel>
</mi-tabs>

## iOS

jdkcjdcdc
