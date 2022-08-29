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

### Starting a Solution

To initialise MapsIndoors, do the following:

<mi-tabs>
<mi-tab label="Java - Google" tab-for="android-java-google"></mi-tab>
<mi-tab label="Kotlin - Google" tab-for="android-kotlin-google"></mi-tab>
<mi-tab label="Java - Mapbox" tab-for="android-java-mapbox"></mi-tab>
<mi-tab label="Kotlin - Mapbox" tab-for="android-kotlin-mapbox"></mi-tab>
<mi-tab-panel id="android-java-google">

```java
protected void onCreate(Bundle savedInstanceState) {
    ...
    mMapView = mapFragment.getView();
    MapsIndoors.load(getApplicationContext(), "YOUR_MAPSINDOORS_API_KEY", null);
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
    MPMapConfig mapConfig = new MPMapConfig.Builder(this, mMap, getString(R.string.google_maps_key), view, true).build();
    MapControl.create(mapConfig, (mapControl, miError) -> {
        mMapControl = mapControl;
        if (miError == null) {
            //Orient your map to where you need data to be shown. This could be done by getting the default venue through MapsIndoors and panning the camera there
        }
    });
}
```

</mi-tab-panel>
<mi-tab-panel id="android-kotlin-google">

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
    ...
    MapsIndoors.load(applicationContext, "YOUR_MAPSINDOORS_API_KEY", null)

    mapFragment.view?.let {
        mapView = it
    }
    ...
}
override fun onMapReady(googleMap: GoogleMap) {
    mMap = googleMap

    mapView?.let { view ->
        initMapControl(view)
    }
}
fun initMapControl(view: View) {
    MPMapConfig mapConfig = new MPMapConfig.Builder(this, mMap, getString(R.string.google_maps_key), view, true).build();
    //Creates a new instance of MapControl
    MapControl.create(config) { mapControl, miError ->
        if (miError == null) {
            mMapControl = mapControl!!
             //Orient your map to where you need data to be shown. This could be done by getting the default venue through MapsIndoors and panning the camera there
        }
    }
}
```

</mi-tab-panel>
<mi-tab-panel id="android-java-mapbox">

```java
protected void onCreate(Bundle savedInstanceState) {
    ...
    MapsIndoors.load(getApplicationContext(), "YOUR_MAPSINDOORS_API_KEY", null);
    ...
}
void initMapControl(View view) {
    MPMapConfig mapConfig = new MPMapConfig.Builder(this, mMapboxMap, mMapView, getString(R.string.mapbox_access_token),true).build();
    //Creates a new instance of MapControl
    MapControl.create(mapConfig, (mapControl, miError) -> {
        mMapControl = mapControl;
        if (miError == null) {
            //Orient your map to where you need data to be shown. This could be done by getting the default venue through MapsIndoors and panning the camera there
        }
    });
}
```

</mi-tab-panel>
<mi-tab-panel id="android-kotlin-mapbox">

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
    ...
    MapsIndoors.load(applicationContext, "YOUR_MAPSINDOORS_API_KEY", null)
    ...
}
fun initMapControl(view: View) {
    val config = MPMapConfig.Builder(this, mMap, mapView, getString(R.string.mapbox_access_token),true).build()
    //Creates a new instance of MapControl
    MapControl.create(config) { mapControl, miError ->
        if (miError == null) {
            //Orient your map to where you need data to be shown. This could be done by getting the default venue through MapsIndoors and panning the camera there
        }
    }
}
```

</mi-tab-panel>
</mi-tabs>

### Switching Solutions

You switch Solutions by changing the active API key using `setAPIKey()`.

We recommend creating your own function to call in the future for this purpose, like the example here with `switchSolution()`:

<mi-tabs>
<mi-tab label="Java - Google" tab-for="android-java-google"></mi-tab>
<mi-tab label="Kotlin - Google" tab-for="android-kotlin-google"></mi-tab>
<mi-tab label="Java - Mapbox" tab-for="android-java-mapbox"></mi-tab>
<mi-tab label="Kotlin - Mapbox" tab-for="android-kotlin-mapbox"></mi-tab>
<mi-tab-panel id="android-java-google">

```java
protected void switchSolution() {
    mMapControl.onDestroy();
    MapsIndoors.load(getApplication(), "YOUR_SECONDARY_API_KEY", null);
    mMapView.getMapAsync(this);
}
```

</mi-tab-panel>
<mi-tab-panel id="android-kotlin-google">

```kotlin
private fun switchSolution() {
    mMapControl.onDestroy()
    MapsIndoors.load(applicationContext, "YOUR_SECONDARY_API_KEY", null)
    mMapView.getMapAsync(this)
}
```

</mi-tab-panel>
<mi-tab-panel id="android-java-mapbox">

```java
mMapControl.onDestroy();
MapsIndoors.load(getApplicationContext(), "YOUR_SECONDARY_API_KEY", null);
initMapControl(mMapBoxMap, mMapView);
```

</mi-tab-panel>
<mi-tab-panel id="android-kotlin-mapbox">

```kotlin
mMapControl.onDestroy()
MapsIndoors.load(applicationContext, "YOUR_SECONDARY_API_KEY", null)
initMapControl(mMapBoxMap, mMapView)
```

</mi-tab-panel>
</mi-tabs>

## iOS

### Starting a Solution

When you load your initial Solution, it's beneficial to initialise MapsIndoors properly, to ensure it's easy to switch Solutions later if needed.

> You don't have to initialise `positionProvider` or `enableLiveData`. This is only needed if you use third-party Positioning such as Cisco DNA Spaces or MapsIndoors' Live Data function.

```swift
func setupMapIndoors(mapsIndoorsAPIKey: String, googleMapsAPIKey: String) {
    map = GMSMapView(frame: CGRect.zero)
    view = map
    mapControl = MPMapControl(map: map!)

    MapsIndoors.provideAPIKey(mapsIndoorsAPIKey, googleAPIKey: googleMapsAPIKey)
    MapsIndoors.synchronizeContent { error in
        // Orient your map to where you need data to be shown. This can e.g. be done by pointing the camera to a specific location or getting the default venue through MapsIndoors and panning the camera there
        self.map?.camera = .camera(withLatitude: 57.057964, longitude: 9.9504112, zoom: 20)

        // Setup needed services
        MapsIndoors.positionProvider = MyPositionProvider()
        MapsIndoors.positionProvider?.startPositioning(nil)
        self.mapControl?.enableLiveData(MPLiveDomainType.occupancy, handler: self)
    }
}
```

### Switching Solutions

To switch Solutions, you first need to ensure that all your existing instances are closed down safely. Once this is done, you can use `setupMapIndoors` to restart with your new desired API key.

We recommend creating your own function to call in the future for this purpose, like the example here with `switchSolution()`:

```swift
func switchSolution() {
    // Close existing services in use as they are solution specific
    MapsIndoors.positionProvider?.stopPositioning(nil)
    MapsIndoors.positionProvider = nil
    MPLiveDataManager.sharedInstance().unsubscribeAll()

    // Setup MapsIndoors anew
    map = nil
    mapControl = nil
    setupMapIndoors(mapsIndoorsAPIKey: "YOUR_SECONDARY_API_KEY", googleMapsAPIKey: "YOUR_GOOGLE_API_KEY")
}
```