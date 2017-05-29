---
title: MapsIndoors for iOS - Getting Started
layout: page
---
## Setup CocoaPods

If you haven’t already, install CocoaPods:
[Getting Started with CocoaPods](https://guides.cocoapods.org/using/getting-started.html)

## Setup MapsIndoors

1. Add pod 'MapsIndoors' to your pod file.
2. Run pod install with your terminal at project root.
2. Add `import MapsIndoors` in your view controller displaying the Google map

## Using MapControl

Use the `MPMapControl` convenience class for setting up a Google map with MapsPeople venues, buildings, locations and routing. Place the following code in the `viewDidLoad` method in your view controller displaying the Google map.

```swift
// Place the map above the demo-building
let camera = GMSCameraPosition.camera(withLatitude: 57.08585, longitude: 9.95751, zoom: 17)
// Initialise the Google map
mapView = GMSMapView.map(withFrame: CGRect.zero, camera: camera)
view = mapView
let myMapControl = MPMapControl.init(map: mapView)!
// Use your solution id
myMapControl.setupMap(with: "YOUR_SOLUTION_ID")
```

## Using the MapControl delegate

The MapControl delegate can also inform you when the various data from the server are loaded through it's `MPMapControlDelegate` so you should set the delegate in most of the case with the current UIViewController :

```swift
myMapControl.delegate = self
```
And don't forget to make sure that the UIViewController conforms to the `MPMapControlDelegate` :

```swift
class ViewController: UIViewController, MPMapControlDelegate
```

Then implementing the methods below :

```swift
  func onLocationsReady(_ locationData: MPLocationDataset!){

  }


  func solutionDataReady(_ solution: MPSolution!){

  }

  public func venueDataReady( _ venueCollection: MPVenueCollection!) {

  }



  public func appDataReady(_ appData: MPAppData!) {

  }


  public func locationDataReady(_ locations: MPLocationDataset!){

  }
```

## Getting a marker from a location and vice versa

If a location is currently displayed on a map, the marker can be retrieved using `location.marker`. On the opposite, get a location from a marker using `getLocation(marker: GMSMarker)`:

```swift
myMapControl.getLocation(marker : GMSMarker!)
```

## Handling marker selections and other user events

Detecting the user tapping a marker or an infowindow is part of the Google Maps SDK for iOS. Assign `myGMSMapView.delegate` and implementing the methods: `mapView.didTapMarker(marker: GMSMarker)` and `mapView.didTapInfoWindowOfMarker(marker: GMSMarker)`

By default, if the user taps on a marker, an infosnippet will appear in the bottom of the map. Subscribe for the info-snippet events using `MPMapDelegate`:

```swift
func infoSnippetTapped(_ location: MPLocation!, tapPosition position: String!){

    if position == kTapPositionRIGHT {
        // Tapped on right side of info snippet
    }
    else if position == kTapPositionCENTER {
        // If tapped on the location name
    }

}
```


## Using Display Rules

When working with MapsIndoors locations, you need to set display rules that defines when, where and how to show a location.
To add display rules, you need to know the categories in your location dataset. The display rule name corresponds to the location category we want the rule to apply for.

```swift
  // Adding a rule with name nil, will apply generally to all categories
  myMapControl.add(MPLocationDisplayRule(name: nil, andIcon: UIImage(named : "info"), andZoomLevelOn: 17))
  // Adding a rule with a name, will override a more general rule
   myMapControl.add(MPLocationDisplayRule(name: "info", andIcon: UIImage(named : "info"), andZoomLevelOn: 17))
   myMapControl.add(MPLocationDisplayRule(name: "parking", andIcon: UIImage(named : "parking"), andZoomLevelOn: 17))
   myMapControl.add(MPLocationDisplayRule(name: "staircase", andIcon: UIImage(named : "staircase"), andZoomLevelOn: 18))

 ```
