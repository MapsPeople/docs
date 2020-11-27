---
title: Searching for Locations and Displaying the Results on a Map
eleventyNavigation:
  parent: android-v3
  key: Searching for Locations and Displaying the Results on a Map
  order: 20
---

Use the `MapsIndoors.getLocationsAsync()` method to search for content in your MapsIndoors Solution.

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
