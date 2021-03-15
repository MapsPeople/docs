---
title: Directions Service
eleventyNavigation:
  key: web-v4-guides-directions-service
  parent: web-v4-guides-directions
  title: Directions Service
  order: 10
---

The class `MPDirectionsService` is used to request routes from one point to another. The minimal required input is an `origin` and a `destination`. You need to build a query using the `MPDirectionsQuery` class.

This example shows how to setup and execute a query for a Route:

```java
//TODO
```

<!-- Travel-mode -->
{% include "src/shared/getting-started/directions/travel-mode.md" %}

Set **travel mode** on your request using the `travelMode` property on `MPDirectionsQuery`:

```java
//TODO
```

The travel modes generally applies for outdoor navigation. Indoor navigation calculations are based on **walking** travel mode.

## Route Restrictions

### Avoiding Stairs and Steps

For a wheelchair user or a user with physical disabilities it may be relevant to request a Route that avoids stairs and steps. TODO: Web explanation:

```java
//TODO
```

### App User Role Restrictions

In the MapsIndoors CMS it is possible to restrict certain ways in the Route Network to be used by users of certain Roles.

It is possible to get the available Roles with help of the `TODO:Web class that fetches app user roles`:

```java
//TODO
```

User Roles can be set on a global level using `TODO:Web: MapsIndoors.setUserRoles()`.

```java
//TODO
```

This will affect all following Directions requests as well as search queries with `TODO:Web: MPLocationService`. User Roles can also be set for a single Directions request.

```java
//TODO
```

User Role restrictions set for a specific Directions Query will take precedence over User Roles set on a global level.

## Departure and Arrival Time

Set a **departure date** or an **arrival date** on the route using the `TODO:Web: departure` or `TODO:Web: arrival` method. It will only make sense to set one of these properties at a time.

```java
//TODO
```
