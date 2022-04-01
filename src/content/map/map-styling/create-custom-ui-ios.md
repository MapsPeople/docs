---
title: Custom UI for iOS
eleventyNavigation:
  key: map-map-styling-custom-ui-ios
  parent: map-map-styling-ios
  title: Custom UI for iOS
  order: 30
---

<!-- Known Issues -->
{% include "src/shared/known-issues-ios.md" %}

You can create your own UI based on the MapsIndoors data models given from `MPDirectionsService` or `MPLocationsProvider`. E.g. build a list of instructions based on the `MPRouteLeg` and `MPRouteStep` models given from a `MPRoute` object. Or build a content page based on the properties on an `MPLocation` object. You can see an example of this in the `DetailsViewController` and `DirectionsController` classes in the app code that is [distributed along with the MapsIndoors SDK](https://github.com/MapsIndoors/MapsIndoorsIOS/tree/master/Example).
