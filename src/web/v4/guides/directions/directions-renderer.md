---
title: Directions Rendering
eleventyNavigation:
  key: web-v4-guides-directions-renderer
  parent: web-v4-guides-directions
  title: Directions Rendering
  order: 20
---

When getting the result Route from a [Directions Service](../directions/directions-service), we may want to display this Route on a map. To perform this task the `TODO:Web: MPDirectionsRenderer` can be used.

This example shows how to setup a query for a route and display the result on a Google Map using the `TODO:Web: MPDirectionsRenderer`:

```java
//TODO
```

As previously mentioned, the route object is seperated into objects of `TODO:Web: MPRouteLeg` and these legs are again seperated indo objects of `MPRouteStep`. Unless the Route only contains one Leg, the Directions Renderer does not allow the full Route to be rendered all at once. A specific part of the route can be rendered by setting the `TODO:Web: routeLegIndex` and/or `TODO:Web: routeStepIndex` properties on the `TODO:Web: MPDirectionsRenderer`.

```java
//TODO
```

The length of the `TODO:Web: legs` and `TODO:Web: steps` arrays determines the possible values of `TODO:Web: routeLegIndex` and `TODO:Web: routeStepIndex` (`0 ..< length`).

## TODO:Web:If Applicable: Subscribe to Floor Changes with the Renderer

Assigning a `TODO:Web: MPDirectionsRenderer` listener will make it possible to know which floor the currently rendered part of the route belongs to:

```java
//TODO
```
