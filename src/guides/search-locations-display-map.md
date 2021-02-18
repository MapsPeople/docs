---
title: Search in MapsIndoors
eleventyNavigation:
  parent: guides
  key: Search in MapsIndoors
  order: 10
---

Searching through your MapsIndoors data is an integral part of a great user experience with your maps. Users can look for places to go, or filter what is shown on the map.

Searches work on all MapsIndoors geodata. It is up to you to create a search experience that fits your use case. To aid you in this, there are a range of filters you can apply to the search queries to get the best results. E.g. you can filter by Categories, search only a specific part of the map or search near a Location.

See the full list of parameters

| Parameter  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Class    |
|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| take       | Max number of locations to get                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | MPFilter |
| Skip       | Skip the first number of entries                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | MPFilter |
| categories | A list of categories to limit the search to                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | MPFilter |
| Parents    | A list of building or venue id to limit the search to                                                                                                                                                                                                                                                                                                                                                                                                                                                        | MPFilter |
| Types      | A list of types to limit the search to (coming in android on 3.8.3)                                                                                                                                                                                                                                                                                                                                                                                                                                          | MPFilter |
| Bounds     | Limits the result of locations to a bounding area                                                                                                                                                                                                                                                                                                                                                                                                                                                            | MPFilter |
| Geometry   | Limits the result of locations to be within a given geometry                                                                                                                                                                                                                                                                                                                                                                                                                                                 | MPFilter |
| Near       | Sorts the list of locations on which location is nearest the point given                                                                                                                                                                                                                                                                                                                                                                                                                                     | MPQuery  |
| Depth      | The depth property makes it possible to get the n'th descendant of a parent location Thus, the depth property only applies to filters that have set one or more parents. The hierarchical tree of data is generally structured as Venue > Building > Floor > Room > POI. For example, this means that a Floor is the 1st descendant of a Building. So to get all locations inside a Building, set the depth to 3. The default value is 1, giving you only the immediate descendant of the specified parents. | MPFilter |

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
