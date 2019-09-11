Add a `GoogleMap` and a `MapControl` to the class
```
MapControl mMapControl;
GoogleMap mGoogleMap;
```
The lat lng of the Venue
```
static final LatLng VENUE_LAT_LNG = new LatLng( 57.05813067, 9.95058065 );
```
The query object and the querry builder
```
LocationQuery mLocationQuery;
LocationQuery.Builder mLocationQueryBuilder;
SupportMapFragment mMapFragment;
public ShowMultipleLocationsFragment()
{
```
 init the query builder, in this case we will query for all to toilets 
```
mLocationQueryBuilder.
        setQuery("Toilet").
        setOrderBy( LocationQuery.NO_ORDER ).
        setFloor(1).
        setMaxResults(50);
```
 Build the query 
```
mLocationQuery = mLocationQueryBuilder.build();
```
 Query the data 
```
mLocationsProvider.getLocationsAsync( mLocationQuery, mSearchLocationsReadyListener );
```
 Show search on map When the 'OnLocationsReadyListener' is called 
```
OnLocationsReadyListener mSearchLocationsReadyListener = new OnLocationsReadyListener()
{
    @Override
    public void onLocationsReady( @Nullable List<Location> locations, @Nullable MIError error )
    {
        if( locations != null && locations.size() != 0 )
        {
            /* Display the locations on the map */
            mMapControl.displaySearchResults( locations, true, 40 );
        }
    }
};
```

[See the sample in ShowMultipleLocationsFragment.java](https://github.com/MapsIndoors/MapsIndoorsAndroid-Demo-Samples/blob/master/app/src/main/java/com/mapsindoors/showmultiplelocations/ShowMultipleLocationsFragment.java)
