---
title: Show the Blue Dot with MapsIndoors - Part 2
---

This is part 2 of the tutorial of managing a blue dot on the map. [In Part 1 we created the position provider](../showuserlocationdemopositionprovider). Now we will create a Fragment displaying a map that shows the users (mock) location.

Create a class `ShowUserLocationFragment` that inherits from `Fragment`.
```
public class ShowUserLocationFragment extends Fragment {
```
Add a `GoogleMap` and a `MapControl` to the class
```
GoogleMap mGoogleMap;
MapControl mMapControl;
```
Add a map fragment
```
SupportMapFragment mMapFragment;
```
The lat lng of the Venue
```
static final LatLng VENUE_LAT_LNG = new LatLng( 57.05813067, 9.95058065 );
```
Set the API key to the MI solution
```
if( !MapsIndoors.getAPIKey().equalsIgnoreCase( getString( R.string.mi_api_key ) ) )
{
    MapsIndoors.setAPIKey( getString( R.string.mi_api_key ) );
}
if( getActivity() == null )
{
    return;
}
```
Instanciate and init the mapControl object
```
mMapControl = new MapControl( getActivity(), mMapFragment, mGoogleMap );
mMapControl.init( miError -> {
    if( miError == null )
    {
        Activity context = getActivity();
        if( context != null )
        {
            context.runOnUiThread( () -> {
                mMapControl.selectFloor( 1 );
                mGoogleMap.animateCamera( CameraUpdateFactory.newLatLngZoom( VENUE_LAT_LNG, 20f ) );
            });
        }
    }
});
```
* Create an instance of the 'DemoPositionProvider' that we defined previously
```
DemoPositionProvider demoPositionProvider = new DemoPositionProvider();
```
* Assign the `DemoPositionProvider` instance to the `MapsIndoors.positionProvider` by calling the 'MapsIndoors.setPositionProvider'
```
MapsIndoors.setPositionProvider(demoPositionProvider);
```
* Start positioning
```
demoPositionProvider.startPositioning(null);
```
* Tell the mapControl to show the users location
```
mMapControl.showUserPosition(true);
```
In the 'onDestroyView' method, we need to free the MapsIndoors PositionProvider
```
MapsIndoors.setPositionProvider(null);
```

[See the sample in ShowUserLocationFragment.java](https://github.com/MapsIndoors/MapsIndoorsAndroid-Demo-Samples/blob/master/app/src/main/java/com/mapsindoors/showuserLocation/ShowUserLocationFragment.java)
