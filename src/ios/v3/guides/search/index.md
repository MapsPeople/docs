---
title: Search in MapsIndoors
eleventyNavigation:
  key: ios-v3-guides-search
  parent: ios-v3-guides
  title: Create a search experience with MapsIndoors
  order: 20
---

{% include "src/shared/guides/search/overview.md" %}

See the full list of parameters:

{% include "src/ios/v3/guides/search/extras/ios-filter-content.md" %}

## Example of creating a search query

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

{% include "src/shared/guides/search/search-ranking.md" %}

## Display search results on the map

{% include "src/shared/guides/search/displaying-search-results.md" %}

## Filter the map to display searched Locations on the map

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

## Clear the map of your filter

{% include "src/shared/guides/search/clear-search-filter-on-map.md" %}

## Example of clearing your map filter to show all Locations again

```swift
myMapControl.clearMap()
```
