---
title: Searching for Locations and Displaying the Results on a Map
eleventyNavigation:
  parent: legacy-androidv2
  title: Searching for Locations and Displaying the Results on a Map
  key: android v2 Searching for Locations and Displaying the Results on a Map
---

Use the `MPLocationsProvider` class to search for content in your MapsIndoors Solution.

This example shows how to setup a query for the nearest single best matching location and display the result on the map:

```java
mLocationsProvider = new MPLocationsProvider();

mLocationQueryBuilder =     new LocationQuery.Builder();

// init the query builder, in this case we will query the coffee machine in our office
mLocationQueryBuilder.
        setQuery("coffee machine").
        setOrderBy( LocationQuery.NO_ORDER ).
        setFloor(1).
        setMaxResults(1);
// Build the query
mLocationQuery = mLocationQueryBuilder.build();
// Query the data
mLocationsProvider.getLocationsAsync( mLocationQuery, new OnLocationsReadyListener()
{
    @Override
    public void onLocationsReady( @Nullable List< Location > locations, @Nullable MIError error )
    {
        if( locations != null && locations.size() != 0 )
        {
            mMapControl.displaySearchResults( Collections.singletonList( locations.get( 0 ) ), true );
        }
    }
});
```

This example shows how to setup a query for a group of locations and display the result on the map:

```java
mLocationsProvider = new MPLocationsProvider();

mLocationQueryBuilder =     new LocationQuery.Builder();

// init the query builder, in this case we will query the coffee machine in our office
mLocationQueryBuilder.
        setQuery("Toilet").
        setOrderBy( LocationQuery.NO_ORDER ).
        setFloor(1).
        setMaxResults(50);
// Build the query
mLocationQuery = mLocationQueryBuilder.build();
// Query the data
mLocationsProvider.getLocationsAsync( mLocationQuery, new OnLocationsReadyListener()
{
    @Override
    public void onLocationsReady( @Nullable List< Location > locations, @Nullable MIError error )
    {
        if( locations != null && locations.size() != 0 )
        {
            mMapControl.displaySearchResults( locations, true );
        }
    }
});
```

Please note that you are not guaranteed that the visible floor contains any search results, so that is why we change floor in the above example.

## Getting a Polygon from a Location

Some locations in MapsIndoors can have additional polygon information. These polygons can be used to render a room or area in a special way or make geofences, calculating whether another point or location is contained within the polygon. If a `MPLocation` has polygons, these can be retrieved using:

```java
Geometry geometry = location.getGeometry();
switch( geometry.getIType() ) {
    case Geometry.TYPE_POINT: {
        Point point = (Point) geometry;
        break;
    }
    case Geometry.TYPE_POLYGON: {
        PolygonGeometry polygon = (PolygonGeometry) geometry;

        // Using GMS helper classes
        // Get all the paths in the polygon
        final List<List<LatLng>> paths = polygon.getGMSPath();

        final int pathCount = paths.size();

        // Outer ring (first)
        List<LatLng> path = paths.get( 0 );
        for( final LatLng coordinate : path ) {
            double lat = coordinate.latitude;
            double lng = coordinate.longitude;
        }

        // Optional: Inner rings (holes)
        for( int i = 1; i < pathCount; i++ ) {
            List<LatLng> hole = paths.get( i );
            for( final LatLng coordinate : hole ) {
                double lat = coordinate.latitude;
                double lng = coordinate.longitude;
            }
        }
        break;
    }
}
```

As demonstrated above, a polygon's outer ring/path as well as holes are arranged as [longitude, latitude] pairs. As not all locations has polygons, the polygon array may be empty. On the contrary, some locations, like entire building floors, might have more than polygon.
