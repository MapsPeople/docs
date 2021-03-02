---
title: Search in MapsIndoors
eleventyNavigation:
  key: ios-v3-guides-search
  parent: ios-v3-guides
  title: Search in MapsIndoors
  order: 0
---

{% include "src/shared/guides/search/overview.md" %}

See the full list of parameters:

{% include "src/ios/v3/guides/search/extras/ios-filter-content.md" %}

## Examples of creating a search query for each platform

```swift
let filter = MPFilter.init()
let query = MPQuery.init()
query.query = "Office"
query.near = MPPoint.init(lat: 57.057964, lon: 9.9504112)
query.take = 1

MPLocationService.sharedInstance().getLocationsUsing(query, filter: filter) { (locations, error) in
    if let location = locations?.first {

    }
}
```

All three return a list of Locations from your Solution matching the parameters they are given. The results are ranked upon the 3 following factors:

* If a "near" parameter is set, how close is the origin point to the result?
* How well does the search input text match the text of the result (using the "Levenshtein distance" algorithm)?
* Which kind of geodata is the result (e.g. Buildings are ranked over POIs)?

This means that the first item in the search result list will be the one matching the 3 factors best and so forth.

## Displaying your search results on the map

When displaying the search results it is helpful to filter the map to only show matching Locations. Matching Buildings and Venues will still be shown on the map, as they give context to the user, even if they aren't selectable on the map.

## Examples of filtering the map to display searched locations on the map

```swift
let filter = MPFilter.init()
let query = MPQuery.init()
query.query = "Office"
query.near = MPPoint.init(lat: 57.057964, lon: 9.9504112)
query.take = 1

MPLocationService.sharedInstance().getLocationsUsing(query, filter: filter) { (locations, error) in
    myMapControl.searchResult = locations
}
```
