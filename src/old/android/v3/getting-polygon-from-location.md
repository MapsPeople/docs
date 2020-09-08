---
title: Getting a Polygon from a Location
published: true
nav_weight: 10
date: 2019-09-30
---

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
