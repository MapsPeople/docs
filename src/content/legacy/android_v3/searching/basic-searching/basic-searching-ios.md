---
title: Basic Searching for iOS
toc: true
eleventyNavigation:
  key: searching-basic-search-ios
  parent: searching-basic-searching
  title: Basic Searching for iOS
  order: 20
---

<!-- Known Issues -->
{% include "src/content/shared/known-issues-ios.md" %}

{% include "src/content/shared/guides/search/overview.md" %}

See the full list of parameters:

{% include "src/content/searching/assets/ios/ios-filter-content.md" %}

## Example of Creating a Search Query

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

{% include "src/content/shared/guides/search/search-ranking.md" %}

## Display Search Results on the Map

{% include "src/content/shared/guides/search/displaying-search-results.md" %}

## Filter the Map to Display Searched Locations on the Map

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

## Clear the Map of Your Filter

{% include "src/content/shared/guides/search/clear-search-filter-on-map.md" %}

## Example of Clearing Your Map Filter to Show All Locations Again

```swift
myMapControl.clearMap()
```
