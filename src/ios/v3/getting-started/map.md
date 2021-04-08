---
title: Show a map
toc: true
eleventyNavigation:
  title: Show a map
  key: ios-v3-getting-started-map
  parent: ios-v3-getting-started
  order: 130
---

<!-- Overview -->
{% include "src/shared/getting-started/map/overview.md" %}

<!-- Set up MapsIndoors -->
{% include "src/shared/getting-started/map/show-map.md" %}

Use the `MPMapControl` class to set up a Google map with MapsPeople venues, buildings & locations.

Create a view controller for your map and add a stored property of type `MPMapControl`:

```swift
class MapViewController: UIViewController {
    private var mapControl:MPMapControl?
    override func viewDidLoad() {

    }
}
```

Place the following code in the `viewDidLoad` method in your view controller displaying the Google map.

```swift
let mapView = GMSMapView.map(withFrame: CGRect.zero)
self.view = mapView
self.mapControl = MPMapControl.init(map: mapView)
```

This will show a Google Map with a default map region displayed. Append the following search code to the already added code in `viewDidLoad`:

```swift
let query = MPQuery.init()
let filter = MPFilter.init()
query.query = "White House"
filter.take = 1
MPLocationService.sharedInstance().getLocationsUsing(query, filter: filter) { (locations, error) in
    if let location = locations?.first {
        self.mapControl.go(to:location)
    }
}
```

Replace "White House" with the name of a known building in your MapsIndoors dataset. Run your iOS project. You should now see a map of a building.

<p class="next-article"><a class="mi-button mi-button--outline" href="{{ site.url }}/ios/v3/getting-started/search/">Next up: Search</a></p>
