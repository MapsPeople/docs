
```java
MapsIndoors.getLocationsAsync(mpQuery, mpFilter, (locations, error) -> {
    if (locations != null && !locations.isEmpty()) {
        //Query with the locations from the query result. Use default camera behavior
        mMapControl.setFilter(locations, MPFilterBehavior.DEFAULT);
    }
});
```
