---
title: Creating your own Location Data Source - Part 3
eleventyNavigation:
  parent: android-v3-guides
  key: Creating your own Location Data Source - Part 3
  order: 130
---

This is part 3 of the tutorial for building a custom Location Source. [In Part 1 we created the People Location Source](/android/v3/locationdatasourcespeoplelocationdatasource/) and [In Part 2 we created the Batteries Location Source](/android/v3/locationdatasourcesbatterieslocationdatasource/). Now we will create a Fragment displaying a map that shows the mocked people locations and the batteries on top of a MapsIndoors map.

Create the class `LocationDataSourcesFragment` that extends `Fragment`:

```java
public class LocationDataSourcesFragment extends Fragment {
```

Add a `GoogleMap` and a `MapControl` to the class:

```java
MapControl mMapControl;
GoogleMap mGoogleMap;
```

Add other needed views for this example:

```java
SupportMapFragment mMapFragment;
```

The Venue's coordinates:

```java
static final LatLng VENUE_LAT_LNG = new LatLng(57.05813067, 9.95058065);
```

Location Data Sources objects:

```java
PeopleLocationDataSource peopleLocationDataSource;
BatteriesLocationDataSource batteriesLocationDataSource;
```

Once the map is ready, move the camera to the venue's location and call setupMapsIndoors:

```java
OnMapReadyCallback mOnMapReadyCallback = new OnMapReadyCallback() {
    @Override
    public void onMapReady( GoogleMap googleMap )
    {
        mGoogleMap = googleMap;
        mGoogleMap.moveCamera( CameraUpdateFactory.newLatLngZoom( VENUE_LAT_LNG, 13.0f ) );
        setupMapsIndoors();
    }
};
```

Create a method `setupMapsIndoors` and:

* Initialize MapsIndoors.
* Set the Google API Key (used by the routing provider).
* Set a listener on the internal location data source service. Location data is not available at the same time other data (building info, etc.) is
* Invoke the location sources and call `setupMapControl` when ready

```java
void setupMapsIndoors() {
    final Activity context = getActivity();
    if ((context == null) || (mMapFragment == null) || (mMapFragment.getView() == null)) {
        return;
    }
    // Sets the SDK to a "clean" state. In most cases, this is not needed
    MapsIndoors.onApplicationTerminate();
    MapsIndoors.initialize( DemoApplication.getInstance(), getString( R.string.mi_api_key ) );
    MapsIndoors.setGoogleAPIKey( getString( R.string.google_maps_key ) );
    // Set a listener to observe for location source status changes. In this example, we need to know when locations are
    // ready (MPLocationSourceStatus.AVAILABLE) so we can start updating/animating them
    MapsIndoors.addLocationSourceOnStatusChangedListener( locationSourceOnStatusChangedListener );
    setupLocationDataSources( error -> setupMapControl() );
}
```

Create a method `setupLocationDataSources`:

* Instantiate `PeopleLocationDataSource` and `BatteriesLocationDataSource`
* Set/register the location sources

```java
void setupLocationDataSources( @NonNull OnResultReadyListener listener ) {
    Set<MPLocationSource> locationDataSources = new HashSet<>( 2 );
    peopleLocationDataSource = new PeopleLocationDataSource();
    locationDataSources.add( peopleLocationDataSource );
    batteriesLocationDataSource = new BatteriesLocationDataSource();
    locationDataSources.add( batteriesLocationDataSource );
    MapsIndoors.setLocationSources( locationDataSources.toArray( new MPLocationSource[0] ), error -> {
        final FragmentActivity context = getActivity();
        if (context != null) {
            context.runOnUiThread(() -> {
                if (error != null) {
                    Toast.makeText(context, "Error occurred when setting the Datasources", Toast.LENGTH_SHORT).show();
                }
                listener.onResultReady(error);
            });
        }
    });
}
```

Create a method `setupMapControl`:

* Instantiate MapControl.
* Add the custom display rules used by the location sources.
* Initialize the `MapControl.init()` object which will synchronize the data.

```java
void setupMapControl() {
    final Activity activityContext = getActivity();
    if ((activityContext == null) || (mMapFragment == null)) {
        return;
    }
    mMapControl = new MapControl( activityContext );
    mMapControl.setGoogleMap( mGoogleMap, mMapFragment.getView() );
    mMapControl.addDisplayRule( PeopleLocationDataSource.DISPLAY_RULE );
    mMapControl.addDisplayRule( BatteriesLocationDataSource.DISPLAY_RULE );
    mMapControl.init( null );
}
```

Add `locationSourceOnStatusChangedListener`:

* Once location data from our custom sources becomes available, start updating them
* Select the first floor and move the camera to the Venue's position

```java
final MPLocationSourceOnStatusChangedListener locationSourceOnStatusChangedListener = new MPLocationSourceOnStatusChangedListener() {
    @Override
    public void onStatusChanged( @NonNull MPLocationSourceStatus status, int sourceId ) {
        if ( status == MPLocationSourceStatus.AVAILABLE ) {
            final Activity context = getActivity();
            if (context != null) {
                context.runOnUiThread(() -> {
                    peopleLocationDataSource.startUpdatingPositions();
                    batteriesLocationDataSource.startUpdatingIcons();
                    // Select a floor and animate the camera to the venue's position
                    mMapControl.selectFloor( 1 );
                    mGoogleMap.animateCamera( CameraUpdateFactory.newLatLngZoom( VENUE_LAT_LNG, 20f ) );
                });
            }
        }
    }
};
```

Implement the `onDestroyView` method to stop updating the location sources:

```java
@Override
public void onDestroyView() {
    if (mMapControl != null) {
        peopleLocationDataSource.stopUpdatingPositions();
        batteriesLocationDataSource.stopUpdatingIcons();
        MapsIndoors.removeLocationSourceOnStatusChangedListener( locationSourceOnStatusChangedListener );
        mMapControl.onDestroy();
        MapsIndoors.onApplicationTerminate();
        MapsIndoors.initialize( DemoApplication.getInstance(), getString( R.string.mi_api_key ) );
    }
    super.onDestroyView();
}
```

[See the sample in LocationDataSourcesFragment.java](https://github.com/MapsIndoors/MapsIndoorsAndroid-Demo-Samples/blob/master/app/src/main/java/com/mapsindoors/locationdatasources/LocationDataSourcesFragment.java)
