---
title: Live Data
eleventyNavigation:
  parent: android-v3
  key: Live Data
  order: 100
---

This guide gives an overview of how to work with _Live Data_ in the MapsIndoors Android SDK. As opposed to _static data_, which does not change unless data is synchronized, Live Data can change in real time, and these changes can be instantly reflected on the map and in searches.

Common use-cases are:

- Changing the appearance of meeting rooms or workspace desks on a map, or in a list, based on occupancy information. For example, change the icon in order to indicate that a room is occupied.
- Changing the position of a POI representing a vehicle.

Support for Live Data requires that server-side integrations are in place. For example, visualizing live occupancy data requires that a calendar or booking system integration is in place. An integration like that is set up in [collaboration with MapsPeople](https://www.mapspeople.com/mapsindoors-integrations/).

## Live Topics

All Live Data is ordered in so-called _Topics_. A MapsIndoors Topic is _hierarchical_ in the way it is defined, and its relation to MapsIndoors data is derivable by its 7 components:

1. Dataset
1. Venue
1. Building
1. Floor
1. Room
1. Location
1. Domain Type

As a minimum, all Topics relate to a Data Set (also known as a "Solution" in MapsIndoors), a Domain Type and one (or more) of the other components.

### Domain Type

The Domain Type describes what kind of conceptual Domain the Live Data belongs to. Here are some examples of Domain Types:

- Availability - The current availability state of a particular bookable room or workspace
- Occupancy - The current known occupancy of a given capacity, for example in a meeting room
- Position - The current geo-spatial position and related floor

The Domain Type is not bound to be one of the above, but could be very specific to a particular use-case, source of data and technical integration.

### Topic Criterias

Knowing that updates are ordered in Topics, it is possible to subscribe to updates using a Topic Criteria. Filtering out live updates can be done on all levels of the Topic Criteria. For example, you might want to subscribe to all position updates but only for a particular Floor in a particular Building. This can be done by setting the correct IDs on the Floor and Building component. Leaving out a component means that we will get all updates, regardless of what relation the updates have at that level. Continuing the example, leaving out the Floor component means that we get all position updates on all Floors, but still only for a particular Building.

## Live Updates

A live update is the model for a message carrying one piece of Live Data, for example that a particular room is now occupied. It contains the Topic for the live update and the actual live properties as a _dictionary_ of _strings_.

## Enable Live Data in Your App

### Enable Live Data through MapControl

Enabling Live Data through the MapControl is an easy way to get live data running in your app.

<mi-tabs>
    <mi-tab label="Java" tab-for="java"></mi-tab>
    <mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
    <mi-tab-panel id="java">
        <h3>java</h3>

        ```java
        mMapControl.init(error -> {
            mMapControl.enableLiveData(LiveDataDomainTypes.OCCUPANCY_DOMAIN);
            mMapControl.enableLiveData(LiveDataDomainTypes.AVAILABILITY_DOMAIN);
        });
        ```

    </mi-tab-panel>
    <mi-tab-panel id="kotlin">
        <h3>kotlin</h3>

        ```java
        mMapControl.init(error -> {
            mMapControl.enableLiveData(LiveDataDomainTypes.OCCUPANCY_DOMAIN);
            mMapControl.enableLiveData(LiveDataDomainTypes.AVAILABILITY_DOMAIN);
        });
        ```

    </mi-tab-panel>
</mi-tabs>

In the example we enable Live Data for the availability and occupancy domain type. Internal processes will determine which topics are relevant for subscription based on where the map is situated. A default rendering mechanism will also alter the appearance of the relevant locations on the map. As a consequence, the SDK will set custom display rules for this rendering. Adding your own or resetting display rules while Live Data is enabled with default rendering may break the rendering for the current MapControl instance. Hence, you should not use custom display rules unless you are handling the rendering of live data by your own.

 You can disable the Live Data again by calling `disableLiveData(String domainType)`.

Note that using the enableLiveData methods on MapControl has some limitations and is thereby not suitable for all use cases.

- Since `MapControl` will try to determine the Live Data subscriptions based on where the map is currently situated, it might not detect Live Data updates of the position Domain representing moving objects entering the visible region of the map.
- Since `MapControl` does not know which Live Updates that are relevant to show it will need to subscribe to all live data in the visible region, which, depending on your amount of Live Data, may or may not lead to app performance implications.

### Enable Live Data through LiveDataManager

To enable Live Data in an application, a subscription to one or more Topics is needed. Once subscribed, the application can be notified about changes and decide what to do. The application is in control of what should happen upon receiving live data updates, and the MapsIndoors SDKs provide mechanisms to efficiently make updates to the map representation of Locations. The central class to carry out these tasks is the `LiveDataManager`.

The only Live Data updates that are also directly notified to the SDK internally are Live Data updates of the "Position" Domain Type. By consequence, if you have already set up your map with MapsIndoors, an additional few lines of code can enable moving locations on the map. Here is an example in Java:

```java
LiveDataManagerInterface liveDataManager = LiveDataManager.getInstance();
liveDataManager.setOnLiveDataManagerStateChangedListener(state -> Log.d(TAG,"Live data manager state changed to: “+state.toString()));

LiveTopicCriteria liveTopicCriteria = LiveTopicCriteria.getBuilder("datasetId")
        .setMultiLevelWildcard()
        .build();

liveDataManager.subscribeTopic(liveTopicCriteria);
```

In the example, the Topic is created using the `datasetId` and a multilevel wildcard, which will return all Live Data in the Solution.

## Rendering Live Data Locations

As mentioned `MapControl` has a default way of rendering Live Data Locations if you call `enableLiveData(String domainType)`. If you need to show live data in another way, you can add handlers for this either through `setOnWillUpdateLocationsOnMap(OnWillUpdateLocationsOnMap listener)` or calling `enableLiveData(String domainType, OnLiveLocationUpdateListener OnLiveLocationUpdateListener)`.

Here are examples of using the different methods to render live data on your map:

```java
mMapControl.setOnWillUpdateLocationsOnMap(locations -> {
   for (MPLocation location : locations) {
       LiveUpdate occupancy = location.getLiveUpdate("occupancy");

       LocationDisplayRule currentDisplayRule = mMapControl.getDisplayRule(location);
       String displayRuleName = location.getId() + "_live";
       if (occupancy != null) {
           OccupancyProperty occupancyProperty = occupancy.getOccupancyProperties();

           LocationDisplayRule occupancyDisplayRule = new LocationDisplayRule
                   .Builder(displayRuleName, currentDisplayRule)
                   .setLabel("people = " + occupancyProperty.getNrOfPeople())
                   .build();

           mMapControl.setDisplayRule(occupancyDisplayRule, location);
       }
   }
});
```

```java
mMapControl.enableLiveData(LiveDataDomainTypes.OCCUPANCY_DOMAIN, location -> {
   LiveUpdate occupancy = location.getLiveUpdate("occupancy");

   LocationDisplayRule currentDisplayRule = mMapControl.getDisplayRule(location);
   String displayRuleName = location.getId() + "_live";
   if (occupancy != null) {
       OccupancyProperty occupancyProperty = occupancy.getOccupancyProperties();

       LocationDisplayRule occupancyDisplayRule = new LocationDisplayRule
               .Builder(displayRuleName, currentDisplayRule)
               .setLabel("people = " + occupancyProperty.getNrOfPeople())
               .build();

       mMapControl.setDisplayRule(occupancyDisplayRule, location);
   }
});
```

Note that since there is no guarantee of what Live Data you receive first and Locations can have multiple Live Data updates on different domains. It can be advised to check the lastModifiedTimeStamp of each live data update to choose what you want to render.

## Handling Live Data Events

While only a few lines of code can get things moving around on a map, there are of course more handles that are relevant to create a robust and user-friendly real-time map experience.

### Listening for Live Updates

There are two ways to be notified about Live Updates:

1. On a general level through `OnReceivedLiveUpdateListener`, which is suitable in scenarios where all Live Updates might potentially affect the end user’s decisions, for example when searching broadly for an available meeting room.
2. On a map-specific level through `MapControl`, which is suitable in scenarios where the map is the context for the user’s actions, for example when browsing the map for an available meeting room nearby

To get Live Updates on a general level the `OnReceivedLiveUpdateListener` must be set on the `LiveDataManager`:

```java
liveDataManager.setOnReceivedLiveUpdateListener((topic, message) -> {
    String people = message.getProperties().get("nrOfPeople");
    ...
});
```

To get Live Updates on a map-specific level, the `OnWillUpdateLocationsOnMap` must be set on `MapControl`:

```java
mapControl.setOnWillUpdateLocationsOnMap(locations -> {
    for(MPLocation location : locations){
        LiveUpdate liveUpdate = location.getLiveUpdate("occupancy");
        ...
    }
}
```

### Handling State Changes and Errors

In order to get notified about state changes and errors related to Live Data, a number of listeners can be set on the `LiveDataManager` using the following methods and interfaces:

- `setOnReceivedLiveUpdateListener(OnReceivedLiveUpdateListener listener);`
- `setOnTopicSubscribedListener(OnTopicSubscribedListener listener);`
- `setOnTopicSubscribeErrorListener(OnTopicSubscribeErrorListener listener);`
- `setOnTopicUnsubscribedListener(OnTopicUnsubscribedListener listener);`
- `setOnTopicUnsubscribeErrorListener(OnTopicUnsubscribeErrorListener listener);`
- `setOnLiveDataManagerStateChangedListener(OnLiveDataManagerStateChangedListener listener);`
- `setOnErrorListener(OnErrorListener listener);`

Live Updates are dependent on network connectivity, so the Live Data Manager will try to recover from common errors like e.g. a network dropout. The Live Data Manager will not try to recover from subscription errors alone, as this could be caused by a non-existing Topic for a given Dataset, thus it does not make sense retrying the failing subscription.
