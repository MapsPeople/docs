---
title: User's Location as Point of Origin for iOS
toc: true
eleventyNavigation:
  key: ios-directions-rendering-location-as-origin
  parent: ios-directions-rendering
  title: User's Location as Point of Origin for iOS
  order: 20
---

Often you may want to get directions starting from a user's actual current location, instead of from another fixed Location. The following code snippet gives an example on how to implement this.

First, initialize a `PositionProvider`, which can be used with `MPDirectionsQuery` to achieve the desired result.

In order to use the `PositionProvider` to extract a `MPPoint`, you need to use `MapsIndoors.latestPositionResult.geometry`. This returns an `MPPoint`. which will serve as the origin point for the directions query. This `MPPoint` is then given to the method `MPDirectionsQuery initWithOriginPoint:destination:`.

This result's in directions queries originating from the user's current location.