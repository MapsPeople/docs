---
title: Directions Service
eleventyNavigation:
  key: web-v4-guides-directions-service
  parent: web-v4-guides-directions
  title: Directions Service
  order: 10
---

The class `DirectionsService` is used to request routes from one point to another. The minimal required input is an `origin` and a `destination`.

This example shows how to setup and execute a query for a Route:

```js
const externalDirectionsProvider = new mapsindoors.directions.GoogleMapsProvider();
const miDirectionsServiceInstance = new mapsindoors.services.DirectionsService(externalDirectionsProvider);

const routeParameters = {
  origin: { lat: 38.897389429704695, lng: -77.03740973527613, floor: 0 }, // Oval Office, The White House
  destination: { lat: 38.897579747054046, lng: -77.03658652944773, floor: 1 } // Blue Room, The White House
};

miDirectionsServiceInstance.getRoute(routeParameters).then(directionsResult => {
  console.log(directionsResult);
});
```

> For more information, see the [reference documentation](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.services.DirectionsService.html).

<!-- Travel-mode -->
{% include "src/shared/getting-started/directions/travel-mode.md" %}

Set **travel mode** on your request using the `travelMode` property on `routeParameters`:

```js/3
const routeParameters = {
  origin: { lat: 38.897389429704695, lng: -77.03740973527613, floor: 0 }, // Oval Office, The White House
  destination: { lat: 38.897579747054046, lng: -77.03658652944773, floor: 1 }, // Blue Room, The White House
  travelMode: 'WALKING'
};
```

> See all available route parameters in the [reference documentation](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.services.DirectionsService.html#getRoute).

## Route Restrictions

### Avoiding Stairs and Steps

For a wheelchair user or a user with physical disabilities it may be relevant to request a Route that avoids stairs and steps.

Set **avoid stairs** on your request using the `avoidStairs` property on `routeParameters`:

```js/3
const routeParameters = {
  origin: { lat: 38.897389429704695, lng: -77.03740973527613, floor: 0 }, // Oval Office, The White House
  destination: { lat: 38.897579747054046, lng: -77.03658652944773, floor: 1 }, // Blue Room, The White House
  avoidStairs: 'true'
};
```

### App User Role Restrictions

In the MapsIndoors CMS it is possible to restrict certain ways in the Route Network to be used by users of certain Roles.

It is possible to get the available Roles with help of the `SolutionsService`:

```js
mapsindoors.services.SolutionsService.getUserRoles().then(userRoles => {
  console.log(userRoles);
});
```

> For more information, see the [reference documentation](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.services.SolutionsService.html#getUserRoles).

User Roles can be set on a global level using `mapsindoors.MapsIndoors.setUserRoles()`.

```js
mapsindoors.MapsIndoors.setUserRoles(['myUserRoleId']);
```

> For more information, see the [reference documentation](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.MapsIndoors.html#.setUserRoles).

This will affect all following Directions requests as well as search queries with `LocationsService`.
