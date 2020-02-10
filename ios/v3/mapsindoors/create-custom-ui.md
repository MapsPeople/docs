---
title: Create custom UI
date: 2019-09-30
eleventyNavigation:
  key: ios-v3-custom-ui
  title: Create custom UI
  parent: ios-v3-mapsindoors
  order: 5
---

You can create your own UI based on the MapsIndoors data models given from `MPDirectionsService` or `MPLocationsProvider`. E.g. build a list of instructions based on the `MPRouteLeg` and `MPRouteStep` models given from a `MPRoute` object. Or build a content page based on the properties on an `MPLocation` object. You can see an example of this in the `DetailsViewController` and `DirectionsController` classes in the app code that is [distributed along with the MapsIndoors SDK](https://github.com/MapsIndoors/MapsIndoorsIOS/tree/master/Example).
