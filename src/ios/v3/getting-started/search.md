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

Replace "Office" with the name of some known Locations in your MapsIndoors dataset.

<!-- Results list -->
{% include "src/shared/getting-started/search/results-list.md" %}

To create a simple list search experience in your application, you should add a search field to your view controller in your preffered manner. Here, we are using the `UISearchBar` and its delegate protocol. You also need a container for your search result. In this example, your view controller inherits from the `UITableViewController`, to minimize the needed boilerplate code:

```swift
class ListViewController: UITableViewController, UISearchBarDelegate {
    var searchResult:[MPLocation]?
    ...
    override func viewDidLoad() {
        self.searchBar.delegate = self
    }
}
```

Implement the `tableView(numberOfRowsInSection:)` and `numberOfSections(in tableView:)` to dynamically reflect the number of locations in our search result:

```swift
override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
    return self.searchResult?.count ?? 0
}

override func numberOfSections(in tableView: UITableView) -> Int {
    return 0
}
```

Implement the method `tableView(cellForRowAt indexPath:)`, populating the rows of your table view with names of the locations in the search result:

```swift
override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
    let cell = UITableViewCell.init()
    let location = self.searchResult[indexPath.row]
    cell.textLabel?.text = location.name ?? ""
    return cell
}
```

Implement the delegate method `searchBar(searchBar:textDidChange:)`, executing a search query and updating the table view:

```swift
func searchBar(_ searchBar: UISearchBar, textDidChange searchText: String) {
    let query = MPQuery.init()
    let filter = MPFilter.init()
    query.query = searchText
    filter.take = 100
    MPLocationService.sharedInstance().getLocationsUsing(query, filter: filter) { (locations, error) in
        self.tableView.reloadData()
    }
}
```

You should now be able to type text in your search bar and see the list updating the results of your searches.

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
