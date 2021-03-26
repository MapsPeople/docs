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

## Displaying your search results on the map

{% include "src/shared/guides/search/displaying-search-results.md" %}

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

## Clearing the map of your filter

{% include "src/shared/guides/search/clear-search-filter-on-map.md" %}

## Example of clearing you map filter to show all Locations again

```swift
myMapControl.clearMap()
```
