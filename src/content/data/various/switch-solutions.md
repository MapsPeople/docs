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

You switch Solutions by changing the active API key using `setAPIKey()`.

We recommend creating your own function to call in the future for this purpose, like the example here with `switchSolution()`:

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

### Starting a Solution

Just like Android, when you load your initial Solution, it's important to do it the "correct" way, to ensure it's easy to switch Solutions later if needed.

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
