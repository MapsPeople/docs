---
layout: guide
title: Live Data
guide_title: live-data
nav_weight: 330
published: true
date: 2020-07-29
permalink: /ios/v3/live-data/
---

This guide gives an overview of how to work with live data in the MapsIndoors iOS SDK. As opposed to static data that does not change unless data is synchronized, Live Data can change in real time and these changes can be instantly reflected on the map and in searches.

Common use-cases are:

* Changing the appearance of meeting rooms or workspace desks on a map or in a list, based on occupancy information.
* Changing the position of a POI representing a vehicle.

Support for live data requires that server-side integrations are in place. For example, visualizing live occupancy data requires that a calendar or booking system integration is in place. An integration like that is set up in [collaboration with MapsPeople](https://www.mapspeople.com/mapsindoors-integrations/).

## Live Topics

All live data is ordered in so called _topics_. A MapsIndoors topic is hierarchical in the way it is defined, and its relation to MapsIndoors data is derivable by its 7 components:

1. Dataset
1. Venue
1. Building
1. Floor
1. Room
1. Location
1. Domain Type

As a minimum, all topics relate to a dataset, also known as a solution in MapsIndoors, a Domain Type and one or more of the other components.

### Domain Type

The Domain Type describes what kind of conceptual domain the Live Data belongs to. Here are some examples of Domain Types:

* Availability - The current availability state of a particular bookable room or workspace
* Occupancy - The current known occupancy of a given capacity for example in a meeting room
* Position - The current geo-spatial position and related floor

The Domain Type is not bound to be one of the above, but could be very specific to a particular use-case, source of data and technical integration.

### Topic Criterias

Knowing that updates is ordered in Topics, it is possible to subscribe to updates using a Topic Criteria. Filtering out Live Updates can be done on all levels of the Topic Criteria. For example, you might want to subscribe to all position updates but only for a particular floor in a particular building. This can be done by setting the correct ids on the floor and building component. Leaving out a component means that we will get all updates, regardless of what relation the updates have at that level. Continueing the example, leaving out the Floor component means that we get all position updates on all floors but still only for a particular building.

## Live Updates

A live update is the model for a message carrying one piece of live data, for example that a particular room is now occupied. It contains the topic for the live update and the actual live properties as a dictionary of strings.

## Enable Live Data in an App

To enable live data in an application, a subscription to one or more topics is needed. Once subscribed, the application can be notified about changes and can decide what to do. The application is in control of what should happen on live data updates, and the MapsIndoors SDKs provide mechanisms to efficiently make updates to the map representation of locations. The central class to carry out these tasks is the ```LiveDataManager```.

The only Live Updates that is also directly notified to the SDK internally are Live Updates with the Position Domain Type. By consequense, if you have already set up your map with MapsIndoors, an additional few lines of code can enable moving locations on the map. Here is an example in Swift:

```swift
  self.mapControl = MPMapControl.init(map: self.map!)

  let liveManager = MapsIndoors.liveDataManager()
  let topic = MPLiveUpdateTopic.domainType("position")
  liveManager.subscribe(topic)
```

In the example the Topic was created with only the Domain Type. This will subscribe to all coming position updates for the dataset and if the updates are relevant for the particular view of the map, you will see moving icons on the map.

This is of course a very simplistic example, and there are a lot more handles that are relevant to create a robust and user-friendly real-time map experience. This will be covered in the guides for iOS, Android and Web.
