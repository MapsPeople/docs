---
title: Directions Service for Android
eleventyNavigation:
  key: directions-service-android
  parent: directions-service
  title: Directions Service for Android
  order: 10
---

The class `MPRoutingProvider` is used to request routes from one point to another. The minimum required input to receive a route is an `origin` and a `destination`.
This example shows how to setup and execute a query for a Route:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
MPRoutingProvider directionsService = new MPRoutingProvider();
MPDirectionsRenderer directionsRenderer = new MPDirectionsRenderer(mContext, mGoogleMap, mMapControl, null);

Point origin = new Point(57.057917, 9.950361, 0.0);
Point destination = new Point(57.058038, 9.950509, 0.0);

directionsService.setOnRouteResultListener((route, error) -> {

});

directionsService.query(origin, destination);
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
val directionsService = MPRoutingProvider()
val directionsRenderer = MPDirectionsRenderer(this, mMap, mMapControl, null)

val origin = Point(57.057917, 9.950361, 0.0)
val destination = Point(57.058038, 9.950509, 0.0)

directionsService.setOnRouteResultListener { route, miError ->
}

directionsService.query(origin, destination)
```

</mi-tab-panel>
</mi-tabs>

<!-- Travel-mode -->
{% include "src/content/shared/getting-started/directions/travel-mode.md" %}

Set the **travel mode** on your request using the `setTravelMode` method on `MPRoutingProvider`:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java/6
void createRoute(MPLocation mpLocation) {
    //If MPRoutingProvider has not been instantiated create it here and assign the results call back to the activity.
    if (mpRoutingProvider == null) {
        mpRoutingProvider = new MPRoutingProvider();
        mpRoutingProvider.setOnRouteResultListener(this);
    }
    mpRoutingProvider.setTravelMode(TravelMode.WALKING);
    //Queries the MPRouting provider for a route with the hardcoded user location and the point from a location.
    mpRoutingProvider.query(mUserLocation, mpLocation.getPoint());
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin/6
fun createRoute(mpLocation: MPLocation) {
    //If MPRoutingProvider has not been instantiated create it here and assign the results call back to the activity.
    if (mpRoutingProvider == null) {
        mpRoutingProvider = MPRoutingProvider()
        mpRoutingProvider?.setOnRouteResultListener(this)
    }
    mpRoutingProvider?.setTravelMode(TravelMode.WALKING)
    //Queries the MPRouting provider for a route with the hardcoded user location and the point from a location.
    mpRoutingProvider?.query(mUserLocation, mpLocation.point)
}
```

</mi-tab-panel>
</mi-tabs>

The travel modes generally only apply for outdoor navigation. Indoor navigation calculations are based on the **walking** travel mode.

## Route Restrictions

### Avoiding Stairs and Steps

For wheelchair users or other users with limited mobility, it may be relevant to request a Route that avoids stairs and steps. Avoid certain **way types** on the route using the `addRouteRestriction` method on `MPRoutingProvider`.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java/7-8
void getRoute() {
  MPRoutingProvider directionsService = new MPRoutingProvider();
  MPDirectionsRenderer directionsRenderer = new MPDirectionsRenderer(mContext, mGoogleMap, mMapControl, null);

  Point origin = new Point(57.057917, 9.950361, 0.0);
  Point destination = new Point(57.058038, 9.950509, 0.0);

  directionsService.addRouteRestriction(Highway.STEPS);
  directionsService.addRouteRestriction(Highway.ESCALATOR);
  
  directionsService.setOnRouteResultListener((route, error) -> {

  });

  directionsService.query(origin, destination);
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin/7-8
fun getRoute() {
    val directionsService = MPRoutingProvider()
    val directionsRenderer = MPDirectionsRenderer(this, mMap, mMapControl, null)

    val origin = Point(57.057917, 9.950361, 0.0)
    val destination = Point(57.058038, 9.950509, 0.0)

    directionsService.addRouteRestriction(Highway.STEPS)
    directionsService.addRouteRestriction(Highway.ESCALATOR)

    directionsService.setOnRouteResultListener { route, miError ->
    }

    directionsService.query(origin, destination)
}
```

</mi-tab-panel>
</mi-tabs>

When Route restrictions are set on the `MPRoutingProvider` they will be applied to any subsequent queries as well. You can remove them again by calling `clearRouteRestrictions`.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java/1
void clearRouteRestrictions() {
  mpRoutingProvider.clearRouteRestrictions();
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin/1
fun clearRouteRestrictions() {
    mpRoutingProvider?.clearRouteRestrictions()
}
```

</mi-tab-panel>
</mi-tabs>

### App User Role Restrictions

In the MapsIndoors CMS it is possible to restrict certain **ways** in the Route Network to only be accessible by users belonging to certain Roles.

You can get the available Roles with help of the `MapsIndoors.getAppliedUserRoles`:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java/1
List<UserRole> getUserRoles() {
  return MapsIndoors.getAppliedUserRoles();
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin/1
fun getUserRoles(): List<UserRole>? {
    return MapsIndoors.getAppliedUserRoles()
}
```

</mi-tab-panel>
</mi-tabs>

User Roles can be set on a global level using `MapsIndoors.applyUserRoles`.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java/1
void setUserRoles(List<UserRole> userRoles) {
    MapsIndoors.applyUserRoles(userRoles);
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin/1
fun setUserRoles(userRoles: List<UserRole>) {
    MapsIndoors.applyUserRoles(userRoles)
}
```

</mi-tab-panel>
</mi-tabs>

This will affect all following Directions requests as well as search queries with `MPLocationService`. User Roles can also be overwritten on the `MPRoutingProvider` by using `setUserRoles`.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java/7
void getRoute() {
  MPRoutingProvider directionsService = new MPRoutingProvider();
  MPDirectionsRenderer directionsRenderer = new MPDirectionsRenderer(mContext, mGoogleMap, mMapControl, null);

  Point origin = new Point(57.057917, 9.950361, 0.0);
  Point destination = new Point(57.058038, 9.950509, 0.0);

  directionsService.setUserRoles(MapsIndoors.getAppliedUserRoles());

  directionsService.setOnRouteResultListener((route, error) -> {

  });

  directionsService.query(origin, destination);
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin/7
fun getRoute() {
    val directionsService = MPRoutingProvider()
    val directionsRenderer = MPDirectionsRenderer(this, mMap, mMapControl, null)

    val origin = Point(57.057917, 9.950361, 0.0)
    val destination = Point(57.058038, 9.950509, 0.0)

    directionsService.setUserRoles(MapsIndoors.getUserRoles())

    directionsService.setOnRouteResultListener { route, miError ->
    }
    directionsService.query(origin, destination)
}
```

</mi-tab-panel>
</mi-tabs>

User Role restrictions set for a specific Directions Query will take precedence over User Roles set on a global level.

For more information about App User Roles, see [this documentation]({{ site.url }}/map/displaying-objects/app-user-roles/).

## Transit Departure and Arrival Time

When using the Transit travel mode, you must set a **departure date** or an **arrival date** on the route using the `setDateTime` method on `MPRoutingProvider`. The `date` parameter is the epoch time, in seconds, as an integer, and it is only possible to use one of these properties at a time.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java/1,5
void setDepartureTime(int date) {
  mpRoutingProvider.setDateTime(date, true);
}

void setArrivalTime(int date) {
  mpRoutingProvider.setDateTime(date, false);
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin/1,5
fun setDepartureTime(date: Int) {
    mpRoutingProvider?.setDateTime(date, true)
}

fun setArrivalTime(date: Int) {
    mpRoutingProvider?.setDateTime(date, false)
}
```

</mi-tab-panel>
</mi-tabs>
