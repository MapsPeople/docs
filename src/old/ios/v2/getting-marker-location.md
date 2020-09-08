---
title: Getting a marker from a location and vice versa
---

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
