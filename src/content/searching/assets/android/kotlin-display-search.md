
```java
MapsIndoors.getLocationsAsync(mpQuery, mpFilter, (locations, error) -> {
    //Query with the locations from the query result. Use default camera behavior
    mMapControl.setFilter(locations, MPFilterBehavior.DEFAULT)
});
```
