---
layout: guide
title: Live Data
guide_title: live-data
nav_weight: 330
published: true
date: 2020-07-29
permalink: /ios/v3/live-data/
---

This guide gives an overview of how to work with live data in the MapsIndoors iOS SDK. As opposed to static data that does not change unless data is synchronized, Live Data can change in real time and can be instantly reflected on the map and in searches.

Common use-cases are:
* Changing the appearance of meeting rooms or workspace desks on a map or in a list, based on occupancy information.
* Changing the position of a POI representing a vehicle.

Support for live data requires that server-side integrations are in place. For example, visualizing occupancy requires that a calendar or booking system integration is in place. An integration like that is setup in [collaboration with MapsPeople](https://www.mapspeople.com/mapsindoors-integrations/).

## Live Topics
All live data is ordered in so called _topics_. A MapsIndoors topic is hierarchical in the way it is defined, and its relation to MapsIndoors data is derivable by its 7 components:

1. Dataset
1. Venue
1. Building
1. Floor
1. Room
1. Location
1. Domain Type

As a minimum, all topics relate to a dataset, also known as a solution in MapsIndoors, a domain type and one or more of the other components.

## Live Updates

A live update is the model for a message carrying one piece of live data, for example that a particular room is now occupied. It contains the topic for the live update and the actual live properties as a dictionary of strings.

## Enable Live Data in an App

To enable live data in an application, a subscription to one or more topics is needed. Once subscribed, the application can be notified about changes and can decide what to do. The application is in control of what should happen on live data updates, and the MapsIndoors SDKs provide mechanisms to efficiently make updates to the map representation of locations. The central class to carry out these tasks is the LiveDataManager.

```
let liveManager = MapsIndoors.liveDataManager()
let topic = MPLiveUpdateTopic.init()
liveManager.subscribe(topic)             // Register the topic at the manager
mapControl.delegate = LiveDataController    // Register “callback” for updates

// Function handling the live data by changing the icon based on the occupancy state
Class LiveDataController {
  function willUpdateLocations(Array of locations) {
    for location in locations {        // Run through each location with new data
  if  = location.getLiveProperty("occupied")
    img = Image.init("closed.png")    // Set marker icon and label according to data
    var dr = MPLocationDisplayRule.init("Closed", img)
        mapControl.setDisplayRule(dr, location)
  else
    img = Image.init("open.png")
    var dr = MPLocationDisplayRule.init("Open", img)
        mapControl.setDisplayRule(dr, location)
    } // end for
  } // end function
}// end LiveDataController

// Later removing the topic from the subscription list:
liveManager.unsubscribe(topic)
```

In the example the Topic was created without specifying data. This will subscribe to all data for the dataset.

Filtering of the topic can be done on all levels of the data model except DatasetID which must be specified. When setting up a topic subscription the following IDs can be specified or left as a “wildcard”.
