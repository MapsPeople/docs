---
title: Create a search experience
toc: true
eleventyNavigation:
  title: Search
  key: ios-v3-getting-started-search
  parent: ios-v3-getting-started
  order: 140
---

<!-- Overview -->
{% include "src/shared/getting-started/search/overview.md" %}

<!-- Search -->
{% include "src/shared/getting-started/search/search.md" %}

To create a simple search in your application, you can add this logic:

```swift
let query = MPQuery.init()
let filter = MPFilter.init()
query.query = "Office"
MPLocationService.sharedInstance().getLocationsUsing(query, filter: filter) { (locations, error) in
    self.mapControl.searchResult = locations
}
```

Replace "Office" with the name of some known locations in your MapsIndoors dataset.

<!-- Results list -->
{% include "src/shared/getting-started/search/results-list.md" %}

* **TODO: How to display search results in a list**

<!-- Filter map -->
{% include "src/shared/getting-started/search/filter-map.md" %}

To create a simple map search experience in your application, add a search field to your view controller in your preffered manner. Here, we are using the `UISearchBar` and its delegate protocol.

```swift
class MapViewController: UIViewController, UISearchBarDelegate {
    ...
    override func viewDidLoad() {
        self.searchBar.delegate = self
    }
}
```

Implement the delegate method `searchBar(searchBar:textDidChange:)`, executing a search query and putting the result on the map:

```swift
func searchBar(_ searchBar: UISearchBar, textDidChange searchText: String) {
    let query = MPQuery.init()
    let filter = MPFilter.init()
    query.query = searchText
    filter.take = 100
    MPLocationService.sharedInstance().getLocationsUsing(query, filter: filter) { (locations, error) in
        self.mapControl.searchResult = locations
    }
}
```

You should now be able to type text in your search bar and see the map showing the results of your searches.
