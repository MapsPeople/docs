 Setup a query with the string "coffee machine" 
```
MPQuery query = new MPQuery.Builder().
        setQuery( "coffee machine" ).
        build();
```
 Get only coffee machines from the first floor, from any building and venue 
```
MPFilter filter = new MPFilter.Builder().
        setFloorIndex( 1 ).
        build();
```
 Query the data 
```
MapsIndoors.getLocationsAsync( query, filter, ( locs, err ) -> {
    if( locs != null && locs.size() != 0 ) {
        mMapControl.displaySearchResults( locs, true );
    }
} );
l MPLocationSourceOnStatusChangedListener locationSourceOnStatusChangedListener = new MPLocationSourceOnStatusChangedListener()
@Override
public void onStatusChanged( @NonNull MPLocationSourceStatus status, int sourceId )
{
    if( status == MPLocationSourceStatus.AVAILABLE ) {
        final Activity context = getActivity();
        if( context != null ) {
            context.runOnUiThread( () -> {
                  final List<MPLocation> locations = MapsIndoors.getLocations();
                  if( locations.size() == 0 ) {
                      if(BuildConfig.DEBUG){}
                  }
                //
                mMapControl.selectFloor( 1 );
                //
                queryLocation();
                //mGoogleMap.animateCamera( CameraUpdateFactory.newLatLngZoom( VENUE_LAT_LNG, 21f ) );
            } );
        }
    }
}
```

[See the sample in ShowLocationFragment.java](https://github.com/MapsIndoors/MapsIndoorsAndroid-Demo-Samples/blob/master/app/src/main/java/com/mapsindoors/showlocationdemo/ShowLocationFragment.java)
