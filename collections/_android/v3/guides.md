---
title: Guides
published: true
nav_weight: 10
date: 2019-09-30
---

## Searching for Locations and Displaying the Results on a Map

Use the `MapsIndoors.getLocationsAsync()` method to search for content in your MapsIndoors solution.

This example shows how to setup a query for the nearest single best matching location and display the result on the map:

```java
// Init the query builder and build a query, in this case we will query for coffee machines ***/
MPQuery query = new MPQuery.Builder().
        setQuery("coffee machine").
        build();

// Init the filter builder and build a filter, the criteria in this case we want 1 coffee machine from the 1st floor
MPFilter filter = new MPFilter.Builder().
        setFloorIndex(1).
        build();

// Query the data
MapsIndoors.getLocationsAsync( query, filter, ( locs, err ) -> {
    if( locs != null && locs.size() != 0 ) {
        mMapControl.displaySearchResults( locs, true );
    }
} );
```

This example shows how to setup a query for a group of locations and display the result on the map:

```java
// Init the query builder and build a query, in this case we will query for all to toilets
MPQuery query = new MPQuery.Builder().
        setQuery("Toilet").
        build();

// Init the filter builder and build a filter, the criteria in this case we want maximum 50 toilets from the 1st floor
MPFilter filter = new MPFilter.Builder().
        setTake( 50 ).
        setFloorIndex( 1 ).
        build();

// Query the data
MapsIndoors.getLocationsAsync(query, filter, (locs, err) -> {
    if(locs != null && locs.size() != 0 ){
        mMapControl.displaySearchResults( locs, true, 40 );
    }
});
```

Please note that you are not guaranteed that the visible floor contains any search results, so that is why we change floor in the above example.

## Getting Directions and Displaying a Route Result on a Map

Use the `RoutingProvider` class to search for directions.

This example shows how to setup a query for a route and display the result on the map:

```java

mRoutingRenderer = new MPDirectionsRenderer( context, mGoogleMap, mMapControl, null );
mRoutingRenderer.setAnimated( true );

mRoutingProvider.setOnRouteResultListener( ( route, error ) -> {
    if( route != null )
    {
        mRoutingRenderer.setRoute( route );

        final Activity activity  = getActivity();
        if( activity != null )
        {
            activity.runOnUiThread( () -> {
                mRoutingRenderer.setRouteLegIndex( 0 );
            });
        }
    } else
    {
        // Can't get a route between the given points
    }
});

final Point origin = new Point( 57.057917, 9.950361, 1 );
final Point destination = new Point( 57.058038, 9.950509, 1 );

mRoutingProvider.setTravelMode( TravelMode.WALKING );
mRoutingProvider.query( origin, destination );
```

The route object is seperated into objects of `MPRouteLeg` and these legs are again seperated indo objects of `MPRouteStep`. A specific part of the route can be rendered by setting the `routeLegIndex` property.

```java
mRoutingRenderer.setRouteLegIndex( 0 );
```

The length of the `legs` array determines the possible values of `routeLegIndex` (`0 ..< length`).

### Avoiding Stairs

Avoid certain **way types** on the route using the `addRouteRestriction` method.

```java
mRoutingProvider.addRouteRestriction("stairs")
```

### Departure and Arrival Times

Set a **departure date** or an **arrival date** on the route using the `setDateTime` method. 

```java
isDeparture = true;
mRoutingProvider.setDateTime( Calendar.getInstance().getTime(), isDeparture );
```

Assigning `isDeparture` to `false` means that the given date/time should be considered as the desired arrival date/time.

### Specify Restricted Access for a User Role

An indoor route network can be configured so that a given user role has access to directions in a given area.

The list of available user roles can be retrieved from the `MPSolution` object:

```java

List<UserRole> userRoles = MapsIndoors.getSolution().getUserRoleCollection().getUserRoles();

```

To use the roles, assign one or more roles to the `MPDirectionsQuery` object:

```java

routingProvider.setUserRoles( userRoles ); 

```

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
