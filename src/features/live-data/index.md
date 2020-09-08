---
title: Live Data
eleventyNavigation:
  key: Live Data
  parent: Features
  order: 35
---

### The "Live Data" feature is in beta and subject to change

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

To enable Live Data in an application, a subscription to one or more Topics is needed. Once subscribed, the application can be notified about changes and decide what to do. The application is in control of what should happen upon receiving live data updates, and the MapsIndoors SDKs provide mechanisms to efficiently make updates to the map representation of Locations. The central class to carry out these tasks is the `LiveDataManager`.

The only Live Data updates that are also directly notified to the SDK internally are Live Data updates of the "Position" Domain Type. By consequence, if you have already set up your map with MapsIndoors, an additional few lines of code can enable moving locations on the map. Here is an example:

<mi-tabs>
<mi-tab label="Android" tab-for="android"></mi-tab>
<mi-tab label="iOS" tab-for="ios"></mi-tab>
<mi-tab-panel id="android">

```java
LiveDataManagerInterface liveDataManager = LiveDataManager.getInstance();
liveDataManager.setOnLiveDataManagerStateChangedListener(state -> Log.d(TAG,"Live data manager state changed to: “+state.toString()));

LiveTopicCriteria liveTopicCriteria = LiveTopicCriteria.getBuilder("datasetId")
        .setMultiLevelWildcard()
        .build();

liveDataManager.subscribeTopic(liveTopicCriteria);
```

In the example, the Topic is created using the `datasetId` and a multilevel wildcard, which will return all Live Data in the Solution.

</mi-tab-panel>
<mi-tab-panel id="ios">

```swift
    self.mapControl = MPMapControl.init(map: self.map!)

    let liveManager = MapsIndoors.liveDataManager()
    let topic = MPLiveUpdateTopic.domainType("position")
    liveManager.subscribe(topic)
```

In the example the Topic was created with only the Domain Type. This will subscribe to all coming position updates for the dataset, and if the updates are relevant for the particular view of the map, you will see moving icons on the map.

</mi-tab-panel>
</mi-tabs>

## Handling Live Data Events

While only a few lines of code can get things moving around on a map, there are of course more handles that are relevant to create a robust and user-friendly real-time map experience.

### Listening for Live Updates

There are two ways to be notified about Live Updates:

1. On a general level, which is suitable in scenarios where all Live Updates might potentially affect the end user’s decisions, for example when searching broadly for an available meeting room. For Android this is through `OnReceivedLiveUpdateListener`; for iOS through `MPLiveDataManagerDelegate`.
2. On a map-specific level, which is suitable in scenarios where the map is the context for the user’s actions, for example when browsing the map for an available meeting room nearby. For Android this is through `MapControl`; for iOS through `MPMapControlDelegate`.

<mi-tabs>
    <mi-tab label="Android" tab-for="android"></mi-tab>
    <mi-tab label="iOS" tab-for="ios"></mi-tab>
    <mi-tab label="Web" tab-for="web"></mi-tab>
    <mi-tab-panel id="android">

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

</mi-tab-panel>
<mi-tab-panel id="ios">

To get Live Updates on a general level the `MPLiveDataManagerDelegate` protocol method `didReceive(_ liveUpdate: MPLiveUpdate)` must be implemented:

```swift
extension MyClass : MPLiveDataManagerDelegate {
    func didReceive(_ liveUpdate: MPLiveUpdate) {
        let numberOfPeople = liveUpdate.getLiveValue(forKey: "nrOfPeople")
        ...
    }
}
```

To get Live Updates on a map-specific level the `MPMapControlDelegate` protocol method `willUpdateLocationsOnMap(locations: [MPLocation])` must be implemented:

```swift
extension MyClass : MPMapControlDelegate {
    func willUpdateLocationsOnMap(locations: [MPLocation]) {
        for location in locations {
            let numberOfPeople = location.getLiveValue(forKey: "nrOfPeople", domainType: "occupancy")
            ...
        }
    }
}
```

</mi-tab-panel>
<mi-tab-panel id="web">
<h3>Web</h3>
</mi-tab-panel>
</mi-tabs>

### Handling State Changes and Errors

Live Updates are dependent on network connectivity, so the Live Data Manager will try to recover from common errors like e.g. a network dropout. The Live Data Manager will not try to recover from subscription errors alone, as this could be caused by a non-existing Topic for a given Dataset, thus it does not make sense retrying the failing subscription.

<mi-tabs>
<mi-tab label="Android" tab-for="android"></mi-tab>
<mi-tab-panel id="android">

In order to get notified about state changes and errors related to Live Data, a number of listeners can be set on the `LiveDataManager` using the following methods and interfaces:

- `setOnReceivedLiveUpdateListener(OnReceivedLiveUpdateListener listener);`
- `setOnTopicSubscribedListener(OnTopicSubscribedListener listener);`
- `setOnTopicSubscribeErrorListener(OnTopicSubscribeErrorListener listener);`
- `setOnTopicUnsubscribedListener(OnTopicUnsubscribedListener listener);`
- `setOnTopicUnsubscribeErrorListener(OnTopicUnsubscribeErrorListener listener);`
- `setOnLiveDataManagerStateChangedListener(OnLiveDataManagerStateChangedListener listener);`
- `setOnErrorListener(OnErrorListener listener);`

</mi-tab-panel>
</mi-tabs>

### Useful links

- [iOS Reference Guide for Live Data](https://app.mapsindoors.com/mapsindoors/reference/ios/v3/interface_m_p_live_data_manager.html)
