---
title: Live Data
toc: true
eleventyNavigation:
  title: Live Data
  key: getting-started-ios-livedata
  parent: getting-started-ios
  order: 95
---

## Enable Live Data

As opposed to *static data*, which does not change unless data is synchronized, Live Data can change in real time, and these changes can be instantly reflected on the map and in searches.

Common use-cases are:

* Changing the appearance of meeting rooms or workspace desks on a map, or in a list, based on occupancy information. For example, change the icon in order to indicate that a room is occupied.
* Changing the position of a point of interest representing a vehicle.

Support for Live Data will require specific server-side integrations. For instance, visualizing live occupancy data requires a calendar or booking system integration is in place. An integration like that is set up in [collaboration with MapsPeople](https://www.mapspeople.com/mapsindoors-integrations/).

The following section rely on the existence of Live Position Data. If you do not have access to a MapsIndoors Dataset that have a Live Data integration, we suggest that you use can our demo API key: `{{sdk.tutorialAPIKey}}`.

For this demonstration we wish to show an employee moving across The White House.

Enabling Live Data through `MapControl` is achieved by simply calling `mapControl.enableLiveData()` with a [Domain Type](http://0.0.0.0:8080/ios/v3/guides/live-data/#domain-type), somewhere after the initialization of `MapControl`. In this case, since we wish to show the positional changes to an employee live, we will use the domain type, position.

```swift
mapControl?.enableLiveData(MPLiveDomainType.position)
```

Assuming the demo key is utilising you should now see a "Staff Person" moving from one end to the other at the ground floor of The White House main building.

## Expected Result

![Expected Result](/assets/ios/getting-started/er_live-data.gif)

Learn more about about controlling and rendering Live Data in MapsIndoors in the [introducion to Live Data](http://0.0.0.0:8080/ios/v3/guides/live-data/)

<!-- Congrats -->
{% include "src/shared/getting-started/congrats.md" %}
