---
title: Filter Locations on Map by Search Query
eleventyNavigation:
  key: Filter Locations on Map by Search Query
  parent: ios-v3-guides-search
  order: 520
---

Use the `MPLocationService` class to search for content in your MapsIndoors Solution.

This example shows how to setup a query for the nearest single best matching Location and display the result on the map:

```swift
let filter = MPFilter.init()
let query = MPQuery.init()
query.query = "Office"
query.near = MPPoint.init(lat: 57.057964, lon: 9.9504112)
query.take = 1

MPLocationService.sharedInstance().getLocationsUsing(query, filter: filter) { (locations, error) in
    if error == nil {
        let location = locations?.first
        self.mapControl?.go(to: location)
    }
}
```

This example shows how to setup a query for a group of Locations and display the result on the map:

```swift
let filter = MPFilter.init()
let query = MPQuery.init()

query.categories = ["Office"]
query.max = 50

MPLocationService.sharedInstance().getLocationsUsing(query, filter: filter) { (locations, error) in
    if error == nil {
        self.mapControl?.searchResult = locations
        let firstLocation = locations?.first
        self.mapControl?.currentFloor = firstLocation.floor
    }
}
```

Please note that you are not guaranteed that the visible floor contains any search results, so that is why we change floor in the above example.
