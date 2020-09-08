---
title: Subscribing to Floor Changes in the Rendering
---

Assigning a `MPDirectionsRenderer` delegate will make it possible to know which floor the currently rendered part of the route belongs to:

```swift
func floorDidChange(_ floor: NSNumber!) {
    mapControl?.currentFloor = floor
}
```

### Working with Directions Settings

Avoid certain **way types** on the route using the `avoidWayTypes` property.

```swift
let directionsQuery = MPDirectionsQuery.init(originPoint: origin!, destination: destination!)
directionsQuery.avoidWayTypes = ["stairs"]
```

Set a **departure date** or an **arrival date** on the route using the `departure` or `arrival` property. It will only make sense to set one of these properties at a time.

```swift
let directionsQuery = MPDirectionsQuery.init(originPoint: origin!, destination: destination!)
directionsQuery.departure = Date.init()
```

## Working with Events

The MapControl delegate can inform you when the various data from the MapsIndoors services are loaded through it's `MPMapControlDelegate` so you should set the delegate, in most of the cases with the current UIViewController:

```swift
myMapControl.delegate = self
```

Implement the `onMapDataReady` method :

```swift
class ViewController: UIViewController, MPMapControlDelegate
```

Then implementing the methods below :

```swift
func onMapDataReady(){

}
```

### Handling marker selections and other user events

Detecting the user tapping a marker or an infowindow is part of the Google Maps SDK for iOS. Assign `myGMSMapView.delegate` and implementing the methods: `mapView.didTapMarker(marker: GMSMarker)` and `mapView.didTapInfoWindowOfMarker(marker: GMSMarker)`

```swift
func mapView(_ mapView: GMSMapView, didTap marker: GMSMarker) -> Bool {
    let location = mapControl?.getLocation(marker)
    if location != nil {
        myTextLabel.text = location!.name
    }
    return false
}

func mapView(_ mapView: GMSMapView, didTapInfoWindowOf marker: GMSMarker) -> Bool {
    let location = mapControl?.getLocation(marker)
    if location != nil {
        myTextLabel.text = location!.name
    }
    return false
}
```

### Getting a marker from a location and vice versa

If a `MPLocation` has been displayed on a map, the marker can be retrieved using `location.marker`. On the opposite, get a `MPLocation` from a `GMSMarker` using `getLocation(marker: GMSMarker)` on `MPMapControl`:

```swift
myMapControl.getLocation(marker : GMSMarker!)
```

## Using Display Rules

In the [MapsIndoors CMS](https://cms.mapsindoors.com/types) you can set display settings for the different types of locations in your MapsIndoors content.

In some cases, you may also want to programmatically set display rules that defines when and how to show a location.

To add display rules, you need to know the types in your location dataset, so look these up in the CMS. The display rule name corresponds to the location type we want the rule to apply for.

```swift
// Adding a rule with name nil, will apply generally to all type of locations
myMapControl.add(MPLocationDisplayRule(name: nil, andIcon: UIImage(named : "info"), andZoomLevelOn: 17))

// Adding a rule with a name, will override a more general rule
myMapControl.add(MPLocationDisplayRule(name: "info", andIcon: UIImage(named : "info"), andZoomLevelOn: 17))
myMapControl.add(MPLocationDisplayRule(name: "parking", andIcon: UIImage(named : "parking"), andZoomLevelOn: 17))
myMapControl.add(MPLocationDisplayRule(name: "staircase", andIcon: UIImage(named : "staircase"), andZoomLevelOn: 18))
```

## Create Custom UI

You can create your own UI based on the MapsIndoors data models given from `MPDirectionsService` or `MPLocationsProvider`. E.g. build a list of instructions based on the `MPRouteLeg` and `MPRouteStep` models given from a `MPRoute` object. Or build a content page based on the properties on an `MPLocation` object. You can see an example of this in the `DetailsViewController` and `DirectionsController` classes in the app code that is [distributed along with the MapsIndoors SDK](https://github.com/MapsIndoors/MapsIndoorsIOS/tree/master/Example).
