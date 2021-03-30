
```java
MapsIndoors.getLocationsAsync(mpQuery, mpFilter, (locations, error) -> {
    if (locations != null && !locations.isEmpty()) {
        //Query with the locations from the query result. Set animateCamera:true for animation. Give a 40dp padding, so that markers are not on the border of the view
        mMapControl.displaySearchResults(locations, true, 40);
    }
});
```
