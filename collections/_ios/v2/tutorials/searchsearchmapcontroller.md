Add a `GMSMapView` and a `MPMapControl` to the class
```
var map: GMSMapView? = nil
var mapControl: MPMapControl? = nil
```
Setup map so that it shows the demo venue and initialise mapControl
```
self.map = GMSMapView.init(frame: CGRect.zero)
self.map?.camera = .camera(withLatitude: 57.057964, longitude: 9.9504112, zoom: 20)
self.mapControl = MPMapControl.init(map: self.map!)
```
Setup a button that targets a method (`openSearch`) in your class
```
let button = UIButton.init()
button.setTitle("Search", for: .normal)
button.addTarget(self, action: #selector(openSearch), for: .allTouchEvents)
button.backgroundColor = UIColor.blue
```
Arrange the map view and the button in a stackview
```
let stackView = UIStackView.init(arrangedSubviews: [map!, button])
stackView.axis = .vertical
view = stackView
```
Define an objective-c method `openSearch` that will receive events from your button, and handle them:

* Initialise `MySearchController`
* Assign self as delegate
* Present the new view controller
```
@objc func openSearch() {
    let searchController = MySearchController.init()
    searchController.delegate = self
    self.present(searchController, animated: true, completion: nil)
}
```
Implement the method `didSelectLocation` required from `MySearchControllerDelegate` delegate. In this example we will just go to the selected location in the map.
```
func didSelectLocation(location: MPLocation) {
    mapControl?.go(to: location)    
}
```

[See the sample in SearchMapController.swift](https://github.com/MapsIndoors/MapsIndoorsIOS-Demo-Samples/blob/master/Search/SearchMapController.swift)
