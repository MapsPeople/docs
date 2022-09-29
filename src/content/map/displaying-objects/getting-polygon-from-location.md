---
title: Getting a Polygon from a Location
eleventyNavigation:
  key: map-displaying-objects-polygon-from-location
  parent: map-displaying-objects
  title: Getting a Polygon from a Location
  order: 221
---

<mi-tabs>
<mi-tab label="Android" tab-for="android"></mi-tab>
<mi-tab label="iOS" tab-for="ios"></mi-tab>
<mi-tab-panel id="android">

Some locations in MapsIndoors can have additional polygon information. These polygons can be used to render a room or area in a special way or make geofences, calculating whether another point or location is contained within the polygon. If a `MPLocation` has polygons, these can be retrieved using:

```kotlin
val geometry: MPGeometry = location.geometry
when (geometry.iType) {
    MPGeometry.TYPE_POINT -> {
        val point = geometry
    }
    MPGeometry.TYPE_POLYGON -> {
        val polygon: MPPolygonGeometry = geometry as MPPolygonGeometry
        // Using GMS helper classes
        // Get all the paths in the polygon
        val paths: List<List<MPLatLng>> = polygon.gmsPath
        val pathCount = paths.size
        // Outer ring (first)
        val path = paths[0]
        for (coordinate in path) {
            val lat = coordinate.lat
            val lng = coordinate.lng
        }
        // Optional: Inner rings (holes)
        var i = 1
        while (i < pathCount) {
            val hole = paths[i]
            for (coordinate in hole) {
                val lat = coordinate.lat
                val lng = coordinate.lng
            }
            i++
        }
    }
}
```

As demonstrated above, a polygon's outer ring/path as well as holes are arranged as [longitude, latitude] pairs. As not all locations has polygons, the polygon array may be empty. On the contrary, some locations, like entire building floors, might have more than polygon.

</mi-tab-panel>
<mi-tab-panel id="ios">

<!-- Known Issues -->
{% include "src/content/shared/known-issues-ios.md" %}

Some locations in MapsIndoors can have additional polygon information. These polygons can be used to render a room or area in a special way or make geofences, calculating whether another point or location is contained within the polygon. If a `MPLocation` has polygons, these can be retrieved using the `MPGeometryHelper` class.

```swift
let polygons = MPGeometryHelper.polygonsForLocation(location : MPLocation)
let polygon = polygons.first
let path = polygon.path
let holes = polygon.holes
for coordinate in path {
    let lat = coordinate[1]
    let lng = coordinate[0]
}
```

As demonstrated above, a polygon's outer ring/path as well as holes are arranged as [longitude, latitude] pairs. As not all locations has polygons, the polygon array may be empty. On the contrary, some locations, like entire building floors, might have more than polygon.

</mi-tab-panel>
</mi-tabs>
