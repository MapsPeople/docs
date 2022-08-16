---
title: Directions Service for Android
toc: true
eleventyNavigation:
  key: directions-service-android
  parent: directions-service
  title: Directions Service for Android
  order: 10
---

The class `MPDirectionsService` is used to request routes from one point to another. The minimum required input to receive a route is an `origin` and a `destination`.
This example shows how to setup and execute a query for a Route:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
MPDirectionsService directionsService = new MPDirectionsService(mContext);
MPDirectionsRenderer directionsRenderer = new MPDirectionsRenderer(mMapControl);

MPPoint origin = new MPPoint(57.057917, 9.950361, 0.0);
MPPoint destination = new MPPoint(57.058038, 9.950509, 0.0);

directionsService.setRouteResultListener((route, error) -> {

});

directionsService.query(origin, destination);
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
val directionsService = MPDirectionsService(this)
val directionsRenderer = MPDirectionsRenderer(mMapControl)

val origin = MPPoint(57.057917, 9.950361, 0.0)
val destination = MPPoint(57.058038, 9.950509, 0.0)

directionsService.setRouteResultListener { route, error -> }

directionsService.query(origin, destination)
```

</mi-tab-panel>
</mi-tabs>

<!-- Travel-mode -->
{% include "src/content/shared/getting-started/directions/travel-mode.md" %}

Set the **travel mode** on your request using the `setTravelMode` method on `MPDirectionsService`:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java/6
void createRoute(MPLocation mpLocation) {
    //If MPDirectionsService has not been instantiated create it here and assign the results call back to the activity.
    if (mpDirectionsService == null) {
        mpDirectionsService = new MPDirectionsService(mContext);
        mpDirectionsService.setRouteResultListener(this);
    }
    mpDirectionsService.setTravelMode(MPTravelMode.WALKING);
      //Queries the MPDirectionsService for a route with the hardcoded user location and the point from a location.
    mpDirectionsService.query(mUserLocation, mpLocation.getPoint());
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin/6
fun createRoute(mpLocation: MPLocation) {
    //If MPDirectionsService has not been instantiated create it here and assign the results call back to the activity.
    if (mpDirectionsService == null) {
        mpDirectionsService = MPDirectionsService(mContext)
        mpDirectionsService?.setRouteResultListener(this)
    }
    mpDirectionsService?.setTravelMode(MPTravelMode.WALKING)
    //Queries the MPDirectionsService for a route with the hardcoded user location and the point from a location.
    mpDirectionsService?.query(mUserLocation, mpLocation.point)
}
```

</mi-tab-panel>
</mi-tabs>

The travel modes generally only apply for outdoor navigation. Indoor navigation calculations are based on the **walking** travel mode.

## Route Restrictions

### Avoiding Stairs and Steps

For wheelchair users or other users with limited mobility, it may be relevant to request a Route that avoids stairs and steps. Avoid certain **way types** on the route using the `addRouteRestriction` method on `MPDirectionsService`.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java/7-8
void getRoute() {
  MPDirectionsService directionsService = new MPDirectionsService(this);
  MPDirectionsRenderer directionsRenderer = new MPDirectionsRenderer(mMapControl);

  MPPoint origin = new MPPoint(57.057917, 9.950361, 0.0);
  MPPoint destination = new MPPoint(57.058038, 9.950509, 0.0);

  directionsService.addAvoidWayType(MPHighway.STEPS);
  directionsService.addAvoidWayType(MPHighway.ELEVATOR);

  directionsService.setRouteResultListener((route, error) -> {

  });
  directionsService.query(origin, destination);
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin/7-8
fun getRoute() {
  val directionsService = MPDirectionsService(this)
  val directionsRenderer = MPDirectionsRenderer(mMapControl)

  val origin = MPPoint(57.057917, 9.950361, 0.0)
  val destination = MPPoint(57.058038, 9.950509, 0.0)

  directionsService.addAvoidWayType(MPHighway.STEPS)
  directionsService.addAvoidWayType(MPHighway.ELEVATOR)

  directionsService.setRouteResultListener { route, error -> }

  directionsService.query(origin, destination)
}
```

</mi-tab-panel>
</mi-tabs>

When Route restrictions are set on the `MPDirectionsService` they will be applied to any subsequent queries as well. You can remove them again by calling `clearRouteRestrictions`.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java/1
void clearRouteRestrictions() {
  mpDirectionsService.clearRouteRestrictions();
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin/1
fun clearRouteRestrictions() {
    mpDirectionsService?.clearRouteRestrictions()
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
List<MPUserRole> getUserRoles() {
  return MapsIndoors.getAppliedUserRoles();
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin/1
fun getUserRoles(): List<MPUserRole>? {
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
void setUserRoles(List<MPUserRole> userRoles) {
    MapsIndoors.applyUserRoles(userRoles);
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin/1
fun setUserRoles(userRoles: List<MPUserRole>) {
    MapsIndoors.applyUserRoles(userRoles)
}
```

</mi-tab-panel>
</mi-tabs>

This will affect all following Directions requests as well as search queries with `MapsIndoors`.

For more information about App User Roles, see [this documentation]({{ site.url }}/content/map/displaying-objects/app-user-roles/).

## Transit Departure and Arrival Time

When using the Transit travel mode, you must set a **departure date** or an **arrival date** on the route using the `setDateTime` method on `MPRoutingProvider`. The `date` parameter is the epoch time, in seconds, as an integer, and it is only possible to use one of these properties at a time.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java/1-2,6-7
void setDepartureTime(Date date) {
    mpDirectionsService.setIsDeparture(true);
    mpDirectionsService.setTime(date);
}

void setArrivalTime(Date date) {
    mpDirectionsService.setIsDeparture(false);
    mpDirectionsService.setTime(date);
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin/1-2,6-7
fun setDepartureTime(date: Date?) {
    mpDirectionsService.setIsDeparture(true)
    mpDirectionsService.setTime(date)
}

fun setArrivalTime(date: Date?) {
    mpDirectionsService.setIsDeparture(false)
    mpDirectionsService.setTime(date)
}
```

</mi-tab-panel>
</mi-tabs>
