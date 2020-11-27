---
title: Filter Locations on map by search query
eleventyNavigation:
  key: Filter Locations on map by search query
  parent: ios-v3-search
  order: 520
---

Use the `MPLocationsProvider` class to search for content in your MapsIndoors solution.

This example shows how to setup a query for the nearest single best matching location and display the result on the map:

```swift
let locations = MPLocationsProvider.init()
let queryObj = MPLocationQuery.init()

queryObj.query = "Toilet"
queryObj.near = MPPoint.init(lat: 57.057964, lon: 9.9504112)
queryObj.max = 1

locations.getLocationsUsing(queryObj) { (locationData, error) in
    if error == nil {
        let location = locationData?.list.first
        self.mapControl?.go(to: location)
    }
}
```

This example shows how to setup a query for a group of locations and display the result on the map:

```swift
let locations = MPLocationsProvider.init()
let queryObj = MPLocationQuery.init()

queryObj.categories = ["Toilet"]
queryObj.max = 50

locations.getLocationsUsing(queryObj) { (locationData, error) in
    if error == nil {
        self.mapControl?.searchResult = locationData!.list
        let firstLocation = locationData?.list.first
        self.mapControl?.currentFloor = firstLocation.floor
    }
}
```

Please note that you are not guaranteed that the visible floor contains any search results, so that is why we change floor in the above example.
