---
title: User's Location as Point of Origin for Android
toc: true
eleventyNavigation:
key: android-directions-rendering-location-as-origin
parent: android-directions-rendering
title: User's Location as Point of Origin for Android
order: 20
---

Often you may want to get directions starting from a user's actual current location, instead of from another fixed Location. The following code snippet gives an example on how to implement this.

To query for a route, create a `MPPoint` from the Latitude, longitude and the z-index of the user, and use that on the `DirectionsService.query` function, like this:

```kotlin
val directionsService = MPDirectionsService(mContext)

//Create an Origin MPPoint with the users latitude, longitude and Z-index. If no Z-index is available just use 0.0
val origin = MPPoint(userLatitude, userLongitude, userZIndex)
val destination = endLocation.getPoint()

directionsService.setRouteResultListener { route, error ->
  //Handle the route result here
}

directionsService.query(origin, destination)
```

Further details on how user positioning works, and how to display it, can be found [here]({{ site.url}}/content/map/positioning/blue-dot/).

This results in directions queries originating from the user's current location.
