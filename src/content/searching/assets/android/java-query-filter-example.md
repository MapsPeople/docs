```java
void findRestroom() {
    //Here we will create an empty query because we are only interrested in getting locations that match a category. If you want to be more specific here where you can add a query text like "Unisex Restroom"
    MPQuery mpQuery = new MPQuery
            .Builder()
            .build();

    List<String> categories = new ArrayList<>();
    categories.add("RESTROOMS");

    // Init the filter builder and build a filter, the criteria in this case we want maximum 50 restrooms
    MPFilter mpFilter = new MPFilter
            .Builder()
            .setCategories(categories)
            .setTake(50)
            .build();

    MapsIndoors.getLocationsAsync(mpQuery, mpFilter, (locations, error) -> {
        //Check if there is an error and iterate through the list to do what you need with the search
    });
}
```
