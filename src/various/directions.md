---
title: Directions
eleventyNavigation:
  key: guides-directions
  parent: various
  title: Directions
  order: 20
---

As a key element in the MapsIndoors platform, we offer API's for effeciently calculating and displaying the most optimal routes from anywhere in the world to any Location inside a Building in MapsIndoors. In the case of travelling internally at a Venue, this calculation can be done on a local map provided by MapsIndoors. In the case of travelling between Venues or from outdoors to indoors, MapsIndoors provide a seamless journey outline from a specified *Origin* through automatically selected *Entry Points* at the edge of your Venues to the specified *destination*. See illustration below:

![Venue to Venue Directions through Entry Points]({{ site.url }}/assets/various/directions/directions-with-entry-points.svg)

In order to provide a route between Venues, MapsIndoors integrate with external and global map providers. Our default routing provider is Google Maps.

The central components that utilize a Directions experience is the [Directions Service](#directions-service) and the [Directions Renderer](#directions-renderer). But before we get to the fun part, let's examine some key concepts first.

## Entry Points

{% include "src/shared/directions/entry-points.md" %}

## The Route Model

When requesting Routes in MapsIndoors Directions Service The Route model in MapsIndoors is seperated into Legs and these Legs are again seperated into Steps.

### The Route Leg Model

{% include "src/shared/directions/route-leg.md" %}

### The Route Step Model

{% include "src/shared/directions/route-step.md" %}

### Directions Service

The class `MPDirectionsService` is used to request routes from one point to another. The minimal required input is an `origin` and a `destination`. You need to build a query using the `MPDirectionsQuery` class.

This example shows how to setup and execute a query for a Route:

```swift
let directions = MPDirectionsService.init()
let origin = MPPoint.init(lat: 57.057917, lon: 9.950361, zValue:0)
let destination = MPPoint.init(lat: 57.058038, lon: 9.950509, zValue:0)
let directionsQuery = MPDirectionsQuery.init(originPoint: origin!, destination: destination!)

directions.routing(with: directionsQuery) { (route, error) in

}
```

## Travel Modes

Set **travel mode** on your request using the `traveMode` property on `MPDirectionsQuery`:

```swift
let directionsQuery = MPDirectionsQuery.init(originPoint: origin!, destination: destination!)
directionsQuery.travelMode = .driving
```

The travel modes generally applies for outdoor navigation. Indoor navigation calculations are based on **walking** travel mode.

## Route Restrictions

Avoid certain **way types** on the route using the `avoidWayTypes` property:

```swift
let directionsQuery = MPDirectionsQuery.init(originPoint: origin!, destination: destination!)
directionsQuery.avoidWayTypes = ["stairs"]
```

## Departure and Arrival Time

Set a **departure date** or an **arrival date** on the route using the `departure` or `arrival` property. It will only make sense to set one of these properties at a time.

```swift
let directionsQuery = MPDirectionsQuery.init(originPoint: origin!, destination: destination!)
directionsQuery.departure = Date.init()
```

