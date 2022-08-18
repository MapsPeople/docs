---
title: Live Data Introduction
eleventyNavigation:
  key: map-live-data-intro
  parent: map-live-data
  title: Live Data Introduction
  order: 10
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

<mi-tabs>
<mi-tab label="Android - Java" tab-for="java"></mi-tab>
<mi-tab label="Android - Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab label="iOS" tab-for="ios"></mi-tab>
<mi-tab-panel id="java">

## Enable Live Data in Your App in Java

### Enable Live Data through MapControl in Java

Enabling Live Data through the `MapControl` is an easy way to get Live Data running in your app.

```java
mMapControl.init(error -> {
    mMapControl.enableLiveData(LiveDataDomainTypes.OCCUPANCY_DOMAIN);
    mMapControl.enableLiveData(LiveDataDomainTypes.AVAILABILITY_DOMAIN);
});
```

In the example we enable Live Data for the "Availability" and "Occupancy" Domain types. Internal processes will determine which Topics are relevant for subscription based on where the map is situated. A default rendering mechanism will also alter the appearance of the relevant Locations on the map. As a consequence, the SDK will set custom Display Rules for this rendering. Adding your own, or resetting Display Rules, while Live Data is enabled with default rendering, may break the rendering for the current MapControl instance. Hence, you should not use custom Display Rules unless you are handling the rendering of Live Data on your own.

 You can disable the Live Data again by calling `disableLiveData(String domainType)`.

Note that using the `enableLiveData` methods on `MapControl` has some limitations, and is thereby not suitable for all use cases.

- Since `MapControl` will try to determine the Live Data subscriptions based on where the map is currently situated, it might not detect Live Data updates of the position Domain representing moving objects entering the visible region of the map.
- Since `MapControl` does not know which Live Updates are relevant to show, it will need to subscribe to all Live Data in the visible region, which, depending on your amount of Live Data, may or may not lead to app performance implications.

### Enable Live Data through LiveDataManager in Java

To enable Live Data in an application, a subscription to one or more Topics is needed. Once subscribed, the application can be notified about changes and decide what to do. The application is in control of what should happen upon receiving live data updates, and the MapsIndoors SDKs provide mechanisms to efficiently make updates to the map representation of Locations. The central class to carry out these tasks is the `LiveDataManager`.

The only Live Data updates that are also directly notified to the SDK internally are Live Data updates of the "Position" Domain Type. By consequence, if you have already set up your map with MapsIndoors, an additional few lines of code can enable moving locations on the map. Here is an example in Java:

```java
LiveDataManager liveDataManager = LiveDataManager.getInstance();
liveDataManager.setOnLiveDataManagerStateChangedListener(state -> Log.d(TAG,"Live Data manager state changed to: "+state.toString()));
LiveTopicCriteria liveTopicCriteria = LiveTopicCriteria.getBuilder("datasetId")
        .setMultiLevelWildcard()
        .build();
liveDataManager.subscribeTopic(liveTopicCriteria);
```

In the example, the Topic is created using the `datasetId` and a multilevel wildcard, which will return all Live Data in the Solution.

## Rendering Live Data Locations in Java

As mentioned `MapControl` has a default way of rendering Live Data Locations if you call `enableLiveData(String domainType)`. If you need to show Live Data in another way, you can add handlers for this, either through `setOnWillUpdateLocationsOnMap(OnWillUpdateLocationsOnMap listener)` or by calling `enableLiveData(String domainType, OnLiveLocationUpdateListener OnLiveLocationUpdateListener)`.

Here are examples of using the different methods to render Live Data on your map:

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

Note that since there is no guarantee of which Live Data you receive first, and Locations can have multiple Live Data updates on different domains, we recommend checking the `lastModifiedTimeStamp` of each Live Data update to select which one to render.

## Handling Live Data Events in Java

While only a few lines of code can get things moving around on a map, there are of course more handles that are relevant to create a robust and user-friendly real-time map experience.

### Listening for Live Updates in Java

There are two ways to be notified about Live Updates:

1. On a general level through `OnReceivedLiveUpdateListener`, which is suitable in scenarios where all Live Updates might potentially affect the end user's decisions, for example when searching broadly for an available meeting room.
2. On a map-specific level through `MapControl`, which is suitable in scenarios where the map is the context for the user's actions, for example when browsing the map for an available meeting room nearby

To get Live Updates on a general level the `OnReceivedLiveUpdateListener` must be set on the `LiveDataManager`:

```java
liveDataManager.setOnReceivedLiveUpdateListener((topic, message) -> {
           if (message.getDomainType().equals(LiveDataDomainTypes.OCCUPANCY_DOMAIN)) {
               int people = message.getOccupancyProperties().getNrOfPeople();
               ...
           }
        });
```

To get Live Updates on a map-specific level, the `OnWillUpdateLocationsOnMap` must be set on `MapControl`:

```java
mapControl.setOnWillUpdateLocationsOnMap(locations -> {
    for(MPLocation location : locations){
        LiveUpdate liveUpdate = location.getLiveUpdate(LiveDataDomainTypes.OCCUPANCY_DOMAIN);
        ...
    }
}
```

### Handling State Changes and Errors in Java

In order to get notified about state changes and errors related to Live Data, a number of listeners can be set on the `LiveDataManager` using the following methods and interfaces:

- `setOnReceivedLiveUpdateListener(OnReceivedLiveUpdateListener listener);`
- `setOnTopicSubscribedListener(OnTopicSubscribedListener listener);`
- `setOnTopicSubscribeErrorListener(OnTopicSubscribeErrorListener listener);`
- `setOnTopicUnsubscribedListener(OnTopicUnsubscribedListener listener);`
- `setOnTopicUnsubscribeErrorListener(OnTopicUnsubscribeErrorListener listener);`
- `setOnLiveDataManagerStateChangedListener(OnLiveDataManagerStateChangedListener listener);`
- `setOnErrorListener(OnErrorListener listener);`

Live Updates are dependent on network connectivity, so the Live Data Manager will try to recover from common errors like e.g. a network dropout. The Live Data Manager will not try to recover from subscription errors alone, as this could be caused by a non-existing Topic for a given Dataset, thus it does not make sense retrying the failing subscription.

</mi-tab-panel>
<mi-tab-panel id="kotlin">

## Enable Live Data in Your App in Kotlin

### Enable Live Data through MapControl in Kotlin

Enabling Live Data through the `MapControl` is an easy way to get Live Data running in your app.

```kotlin
mMapControl.init {
    mMapControl.enableLiveData(LiveDataDomainTypes.OCCUPANCY_DOMAIN)
    mMapControl.enableLiveData(LiveDataDomainTypes.AVAILABILITY_DOMAIN)
}
```

In the example we enable Live Data for the "Availability" and "Occupancy" Domain types. Internal processes will determine which Topics are relevant for subscription based on where the map is situated. A default rendering mechanism will also alter the appearance of the relevant Locations on the map. As a consequence, the SDK will set custom Display Rules for this rendering. Adding your own, or resetting Display Rules, while Live Data is enabled with default rendering, may break the rendering for the current MapControl instance. Hence, you should not use custom Display Rules unless you are handling the rendering of Live Data on your own.

 You can disable the Live Data again by calling `disableLiveData(String domainType)`.

Note that using the `enableLiveData` methods on `MapControl` has some limitations, and is thereby not suitable for all use cases.

- Since `MapControl` will try to determine the Live Data subscriptions based on where the map is currently situated, it might not detect Live Data updates of the position Domain representing moving objects entering the visible region of the map.
- Since `MapControl` does not know which Live Updates are relevant to show, it will need to subscribe to all Live Data in the visible region, which, depending on your amount of Live Data, may or may not lead to app performance implications.

### Enable Live Data through LiveDataManager in Kotlin

To enable Live Data in an application, a subscription to one or more Topics is needed. Once subscribed, the application can be notified about changes and decide what to do. The application is in control of what should happen upon receiving live data updates, and the MapsIndoors SDKs provide mechanisms to efficiently make updates to the map representation of Locations. The central class to carry out these tasks is the `LiveDataManager`.

The only Live Data updates that are also directly notified to the SDK internally are Live Data updates of the "Position" Domain Type. By consequence, if you have already set up your map with MapsIndoors, an additional few lines of code can enable moving locations on the map. Here is an example in Java:

```kotlin
var liveDataManager = LiveDataManager.getInstance();
liveDataManager.setOnLiveDataManagerStateChangedListener {
    Log.d("LiveDataState", "Live Data manager state changed to: $it")
}
var liveTopicCriteria = LiveTopicCriteria.getBuilder("datasetId")
    .setMultiLevelWildcard()
    .build();
liveDataManager.subscribeTopic(liveTopicCriteria);
```

In the example, the Topic is created using the `datasetId` and a multilevel wildcard, which will return all Live Data in the Solution.

## Rendering Live Data Locations in Kotlin

As mentioned `MapControl` has a default way of rendering Live Data Locations if you call `enableLiveData(String domainType)`. If you need to show Live Data in another way, you can add handlers for this, either through `setOnWillUpdateLocationsOnMap(OnWillUpdateLocationsOnMap listener)` or by calling `enableLiveData(String domainType, OnLiveLocationUpdateListener OnLiveLocationUpdateListener)`.

Here are examples of using the different methods to render Live Data on your map:

```kotlin
mMapControl.setOnWillUpdateLocationsOnMap { locations: List&lt;MPLocation&gt; ->
    for (location in locations) {
        val occupancy = location.getLiveUpdate("occupancy")
        val currentDisplayRule = mMapControl.getDisplayRule(location)
        val displayRuleName = location.id + "_live"
        if (occupancy != null) {
            val occupancyProperty = occupancy.occupancyProperties
            val occupancyDisplayRule =
                LocationDisplayRule.Builder(displayRuleName, currentDisplayRule!!)
                    .setLabel("people = " + occupancyProperty.nrOfPeople)
                    .build()
            mMapControl.setDisplayRule(occupancyDisplayRule, location)
        }
    }
}
```

```kotlin
mMapControl.enableLiveData(LiveDataDomainTypes.OCCUPANCY_DOMAIN) { location: MPLocation ->
    val occupancy = location.getLiveUpdate("occupancy")
    val currentDisplayRule = mMapControl.getDisplayRule(location)
    val displayRuleName = location.id + "_live"
    if (occupancy != null) {
        val occupancyProperty = occupancy.occupancyProperties
        val occupancyDisplayRule =
            LocationDisplayRule.Builder(displayRuleName, currentDisplayRule!!)
                .setLabel("people = " + occupancyProperty.nrOfPeople)
                .build()
        mMapControl.setDisplayRule(occupancyDisplayRule, location)
    }
}
```

Note that since there is no guarantee of which Live Data you receive first, and Locations can have multiple Live Data updates on different domains, we recommend checking the `lastModifiedTimeStamp` of each Live Data update to select which one to render.

## Handling Live Data Events in Kotlin

While only a few lines of code can get things moving around on a map, there are of course more handles that are relevant to create a robust and user-friendly real-time map experience.

### Listening for Live Updates in Kotlin

There are two ways to be notified about Live Updates:

1. On a general level through `OnReceivedLiveUpdateListener`, which is suitable in scenarios where all Live Updates might potentially affect the end user's decisions, for example when searching broadly for an available meeting room.
2. On a map-specific level through `MapControl`, which is suitable in scenarios where the map is the context for the user's actions, for example when browsing the map for an available meeting room nearby

To get Live Updates on a general level the `OnReceivedLiveUpdateListener` must be set on the `LiveDataManager`:

```kotlin
liveDataManager.setOnReceivedLiveUpdateListener { liveTopic, liveUpdate ->
            if (liveUpdate.domainType == LiveDataDomainTypes.OCCUPANCY_DOMAIN) {
                var people = liveUpdate.occupancyProperties.nrOfPeople
                ...
            }
        }
```

To get Live Updates on a map-specific level, the `OnWillUpdateLocationsOnMap` must be set on `MapControl`:

```kotlin
mMapControl.setOnWillUpdateLocationsOnMap { locations ->
            for (location in locations) {
                val properties = location.getLiveUpdate(LiveDataDomainTypes.OCCUPANCY_DOMAIN)?.occupancyProperties
                ...
            }
        }
```

### Handling State Changes and Errors in Kotlin

In order to get notified about state changes and errors related to Live Data, a number of listeners can be set on the `LiveDataManager` using the following methods and interfaces:

- `setOnReceivedLiveUpdateListener(OnReceivedLiveUpdateListener listener);`
- `setOnTopicSubscribedListener(OnTopicSubscribedListener listener);`
- `setOnTopicSubscribeErrorListener(OnTopicSubscribeErrorListener listener);`
- `setOnTopicUnsubscribedListener(OnTopicUnsubscribedListener listener);`
- `setOnTopicUnsubscribeErrorListener(OnTopicUnsubscribeErrorListener listener);`
- `setOnLiveDataManagerStateChangedListener(OnLiveDataManagerStateChangedListener listener);`
- `setOnErrorListener(OnErrorListener listener);`

Live Updates are dependent on network connectivity, so the Live Data Manager will try to recover from common errors like e.g. a network dropout. The Live Data Manager will not try to recover from subscription errors alone, as this could be caused by a non-existing Topic for a given Dataset, thus it does not make sense retrying the failing subscription.

</mi-tab-panel>
<mi-tab-panel id="ios">

<!-- Known Issues -->
{% include "src/content/shared/known-issues-ios.md" %}

## Enable Live Data in Your App in iOS

To enable Live Data in an application, a subscription to one or more Topics is needed. Once subscribed, the application can be notified about changes and decide what to do. The application is in control of what should happen upon receiving live data updates, and the MapsIndoors SDKs provide mechanisms to efficiently make updates to the map representation of locations.

The central class to carry out the subscription tasks is the `LiveDataManager`, but the `MPMapControl` class also has some convenience methods that abstract the subscription layer, trading off some granular control.

### Enable Live Data through MPMapControl in iOS

Enabling of Live Data through `MPMapControl` can be done as simple as calling `MPMapControl.enableLiveData()` with a Domain Type.

```swift
  self.mapControl = MPMapControl.init(map: self.map!)

  self.mapControl.enableLiveData(MPLiveDomainType.position)
```

In the example we are enabling Live Data for the Domain Type "Occupancy". Internal processes will determine which topics are relevant for subscription based on where the map is situated. A default rendering mechanism will also alter the appearance of the relevant locations on the map. As a consequence, the SDK will set [custom display rules]({{ site.url }}/content/map/map-styling/map-styling-ios/) for this rendering. Adding your own or resetting display rules while Live Data is enabled with default rendering may break the rendering for the current `MPMapControl` instance. Hence, you should not use custom display rules unless you are [handling the rendering of Live Data](#rendering-live-data-locations) on your own.

Note that using the `enableLiveData()` methods on `MPMapControl` has some limitations and is therefore not suitable for all use cases.

- Since `MPMapControl` will try to determine relevant Live Data subscriptions based on where the map is currently situated, it might not detect Live Data updates of the Position domain representing moving objects entering the visible region of the map.
- Since `MPMapControl` does not know which Live Updates are relevant to show, it will need to subscribe to all Live Data in the visible region, which, depending on your amount of Live Data, may or may not impact app performance.

### Enable Live Data through MPLiveDataManager in iOS

Enabling of Live Data through `MPLiveDataManager` is done by creating one or more Topic Criterias and calling `MPLiveDataManager.subscribe()` with the topic.

Live Data updates with the "Position" Domain Type directly affects the behavior of `MPMapControl` by moving the icons belonging to the related locations. By consequense, if you have already set up your map with MapsIndoors, an additional few lines of code can enable moving locations on the map. Here is an example in Swift:

```swift
  self.mapControl = MPMapControl.init(map: self.map!)

  let liveManager = MapsIndoors.liveDataManager()

  let topic = MPLiveTopicCriteria.domainType(MPLiveDomainType.position)

  liveManager.subscribe(topic)
```

In the example the Topic was created with only the Domain Type. This will subscribe to all coming position updates for the dataset, and if the updates are relevant for the particular view of the map, you will see moving icons on the map.

## Rendering Live Data Locations iOS

As mentioned, `MPMapControl` has a default way of rendering Live Data Locations if you call `MPMapControl.enableLiveData()`. If you need to show Live Data in another way, you can add handlers for this, either through `MPMapControlDelegate` or `MPMappedLocationUpdateHandler`. Here is an example of getting a `MPMapControlDelegate` callback and creating a Display Rule for a Location that has a Live Update.

```swift
extension MyClass : MPMapControlDelegate {
    func willUpdateLocationsOnMap(locations: [MPLocation]) {
        for location in locations {
            let liveUpdate = location.getLiveUpdate(forDomainType: MPLiveDomainType.occupancy)

            if let occupancy = liveUpdate as? MPOccupancyLiveUpdate {
                var img:UIImage

                if occupancy.numberOfPeople > 0 {
                    img = UIImage.init(named: "closed.png")
                } else {
                    img = UIImage.init(named: "open.png")
                }

                let dr = MPLocationDisplayRule.init(name: domainType, andIcon: icon, andZoomLevelOn: 15)!
                self.mapControl?.setDisplayRule(dr, for: location)
            }
        }
    }
}
```

Likewise this can be done through the `MPMappedLocationUpdateHandler` when enabling Live Data through `MPMapControl.enableLiveData()`:

```swift
class MyClass : UIViewController {
    ...
    override func viewDidLoad() {
        self.mapControl.enableLiveData(MPLiveDomainType.occupancy, handler: self)
    }
    ...
}

extension MyClass : MPMappedLocationUpdateHandler {
    func willUpdateLocationsOnMap(locations: [MPLocation]) {
        ...
    }
}
```

As you can see, both `MPMapControlDelegate` and `MPMappedLocationUpdateHandler` has a method definition called `willUpdateLocationsOnMap` which gets all the updated locations as an input parameter.

## Handling Live Data Events in iOS

While only a few lines of code can get things moving around on a map, there are of course more handles that are relevant to create a robust and user-friendly real-time map experience.

### Listening for Live Updates in iOS

There are two ways to be notified about Live Updates.

1. On a general level through `MPLiveDataManagerDelegate`, which is suitable in scenarios where all Live Updates might potentially affect the end user's decisions, for example when searching broadly for an available meeting room.
2. On a map-specific level through `MPMapControlDelegate` or `MPMappedLocationUpdateHandler`, which is suitable in scenarios where the map is the context for the user's actions, for example when browsing the map for an available meeting room nearby.

To get Live Updates on a general level the `MPLiveDataManagerDelegate` protocol method `didReceive(_ liveUpdate: MPLiveUpdate)` must be implemented:

```swift
extension MyClass : MPLiveDataManagerDelegate {
    func didReceive(_ liveUpdate: MPLiveUpdate) {
        let liveUpdate = location.getLiveUpdate(forDomainType: MPLiveDomainType.occupancy)
        ...
    }
}
```

To get Live Updates on a map-specific level the `MPMapControlDelegate` protocol method `willUpdateLocationsOnMap(locations: [MPLocation])` must be implemented:

```swift
extension MyClass : MPMapControlDelegate {
    func willUpdateLocationsOnMap(locations: [MPLocation]) {
        for location in locations {
            let liveUpdate = location.getLiveUpdate(forDomainType: MPLiveDomainType.occupancy)
            ...
        }
    }
}
```

### Handling State Changes and Errors in iOS

In order to get notified about state changes and errors happening in the Live Data Manager, `MPLiveDataManagerDelegate` provides methods as shown in the example below:

```swift
extension MyClass : MPLiveDataManagerDelegate {

    func didUpdate(_ state: MPLiveDataManagerState) {
        print("Manager state changed to \(state)")
    }

    func didSubscribe(_ topic: MPLiveTopicCriteria) {
        print("Started Live Updates for \(topic.topicString)")
    }

    func didUnsubscribe(_ topic: MPLiveTopicCriteria) {
        print("Stopped Live Updates for \(topic.topicString)")
    }

    func onSubscriptionError(_ error: Error, topic: MPLiveTopicCriteria) {
        print("Could not subscribe Live Updates for \(topic.topicString)")
    }

    func onError(_ error: Error) {
        print("We got an error")
    }

}
```

Live Updates are of course dependent on network connectivity, so the Live Data Manager will try to recover from common errors like network dropout. However, the Live Data Manager will not try to recover from subscription errors alone as this could be caused by a non-existing topic for a given Dataset, thus it does not make sense retrying the failing subscription.

To learn more, visit the [Live Data tutorial for iOS]({{ site.url }}/content/map/live-data/live-data-intro-ios/) and the [reference guide](https://app.mapsindoors.com/mapsindoors/reference/ios/v3/interface_m_p_live_data_manager.html).

</mi-tab-panel>
<mi-tab-panel id="web">

## Enable Live Data in Your App with the LiveDataManager for Web

### With the `enableLiveData()` and `disableLiveData()` Methods

Enabling Live Data through the `LiveDataManager` is an easy way to get Live Data running in your web app.

```javascript
const liveDataManagerInstance = new mapsindoors.LiveDataManager(mapsIndoorsInstance);
liveDataManagerInstance.enableLiveData(mapsindoors.LiveDataManager.LiveDataDomainTypes.AVAILABILITY);
liveDataManagerInstance.enableLiveData(mapsindoors.LiveDataManager.LiveDataDomainTypes.OCCUPANCY);
```

In the example we enable Live Data for the "Availability" and "Occupancy" Domain types. Internal processes will determine which Topics are relevant for subscription based on where the map is situated. A default rendering mechanism will also alter the appearance of the relevant Locations on the map.

You can disable the Live Data again by calling the `disableLiveData` method:

```javascript
liveDataManagerInstance.disableLiveData(mapsindoors.LiveDataManager.LiveDataDomainTypes.AVAILABILITY);
```

Note that using the `enableLiveData` method has some limitations, and is thereby not suitable for all use cases.

- Since the LiveDataManager will try to determine the Live Data subscriptions based on where the map is currently situated, it might not detect Live Data updates of the "Position" Domain representing moving objects entering the visible region of the map.
- Since the LiveDataManager does not know which Live Updates are relevant to show, it will need to subscribe to all Live Data in the visible region, which, depending on your amount of Live Data, may or may not lead to performance implications.

### With the `subscribe()` and `unsubscribe()` Methods

To enable Live Data in an web application, a subscription to one or more Topics is needed. Once subscribed, the web application can be notified about changes and decide what to do. The web application is in control of what should happen upon receiving live data updates, and the MapsIndoors SDKs provide mechanisms to efficiently make updates to the map representation of Locations. The central class to carry out these tasks is the `LiveDataManager`.

The only Live Data updates that are also directly notified to the SDK internally are Live Data updates of the "Position" Domain Type. By consequence, if you have already set up your map with MapsIndoors, an additional few lines of code can enable moving locations on the map. Here is an example:

```javascript
const liveDataManagerInstance = new mapsindoors.LiveDataManager(mapsIndoorsInstance);
liveDataManagerInstance.subcribe(mySolutionId + '/#');
```

In the example, the Topic is created using the Solution ID and a multilevel wildcard, which will return all Live Data in the Solution.

You can unsubscribe to the Topic by calling the `unsubscribe` method:

```javascript
liveDataManagerInstance.unsubcribe(positionTopic);
```

### Rendering Live Data Locations for Web

As mentioned, the LiveDataManager has a default way of rendering Live Data Locations if you use `enableLiveData()`. If you need to show Live Data in another way, you can override the default rendering by providing a function as second parameter, which will act as a callback when receiving Live Updates bundled in a LiveUpdateEvent:

```javascript
liveDataManagerInstance.enableLiveData(mapsindoors.LiveDataManager.LiveDataDomainTypes.AVAILABILITY, (liveUpdateEvent) => {
    for (const [liveUpdateDomainType, locations] of liveUpdateEvent.data) {
        for (const location of locations) {
            // Manipulate the Location and/or Display Rule here as you see fit. Live Updates are contained within the LiveUpdates Map on the Location.
            // As an example, we change the icon of the Location if there is an Occupancy update:

            const occupancyUpdate = location.liveUpdates.get(mapsindoors.LiveDataManager.LiveDataDomainTypes.OCCUPANCY);
            if (occupancyUpdate) {
                const displayRule = mi.getDisplayRule(location, true);
                const displayRuleOverrides = { iconSize: { width: 100, height: 100 } };
                mapsIndoorsInstance.setDisplayRule(location.id, displayRuleOverrides);
            }
        }
    }
});
```

To avoid performance implications, the display rule updates may benefit from being throttled.

Note that since there is no guarantee of which Live Data you receive first, and Locations can have multiple Live Data updates on different Domains, we recommend checking the `lastModifiedTimeStamp` of each Live Data update to select which one to render.

## Handling Live Data Events for Web

While only a few lines of code can get things moving around on a map, there are of course more handles that are relevant to create a robust and user-friendly real-time map experience.

### Listening for Live Updates for Web

To listen for Live Updates on a general level, add an event listener for `live_update_received` on the Live Data Manager. The event payload is a [Live Update](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/LiveUpdate.html)

```javascript
liveDataManagerInstance.addEventListener('live_update_received', (liveUpdate) => {
    if (liveUpdate.domainType === mapsindoors.LiveDataManager.LiveDataDomainTypes.OCCUPANCY) {
        const people = liveUpdate.properties.nrOfPeople;
        ...
    }
});
```

### Handling State Changes and Errors for Web

In order to get notified about state changes and errors related to Live Data, a number of listeners can be set on the LiveDataManager:

- `live_update_received` event. The event payload is a [Live Update](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/LiveUpdate.html).
- `live_data_status_changed` event. The event payload is a [Subscription Client State](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.LiveDataManager.html#.SubscriptionClientStates).
- `live_data_error` event. The event payload contains information about the error.

Live Updates are dependent on network connectivity, so the Live Data Manager will try to recover from common errors like e.g. a network dropout. The Live Data Manager will not try to recover from subscription errors alone, as this could be caused by a non-existing Topic for a given Dataset, thus it does not make sense retrying the failing subscription.
</mi-tab-panel>
</mi-tabs>
