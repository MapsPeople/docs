---
title: Live Data Tutorial for Android
eleventyNavigation:
  key: map-live-data-tutorial-android
  parent: map-live-data-intro-android
  title: Live Data Tutorial for Android
  order: 20
---

In this tutorial you will learn to work with Live Updates / real-time data in MapsIndoors. It is recommended that you read the [Live Data Introduction]({{ site.url }}/android/v3/guides/live-data/) before continuing.

We will create a simple activity displaying a map showing dynamic changes initiated from Live Data sources known by MapsIndoors. If you do not have a Live Data integration in place for your MapsIndoors project, you can use API key `2ae7d137162642618b5ce555` for demo and test purposes. The test data are of the Occupancy Domain Type and the Position Domain Type.

Start by creating an activity that has a Google Maps map view and a `MapControl` initiated.

Add buttons to the view for toggling subscriptions, one button for Live Position Updates, and one for Live Occupancy Updates.

```xml
<RelativeLayout
    android:layout_height="match_parent"
    android:layout_width="match_parent">
    <Button
        android:id="@+id/enablePositionBtn"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_alignParentStart="true"
        android:layout_alignParentBottom="true"
        android:layout_marginBottom="5dp"
        android:layout_marginEnd="5dp"
        android:text="Enable Positioning"/>
    <Button
        android:id="@+id/enableOccupancyBtn"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_alignParentStart="true"
        android:layout_above="@+id/enablePositionBtn"
        android:layout_marginBottom="5dp"
        android:layout_marginEnd="5dp"
        android:text="Enable Occupancy"/>
</RelativeLayout>
```

Add a method `setupSubscriptionButtons()` setting up buttons that enable/disable the subscriptions. This example uses the convenience interface to setup Live Data for the app.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
private void setupSubscriptionButtons() {
    enablePositionBtn.setOnClickListener(btnView -> {
        if (!enablePositionBtn.isSelected()) {
            enablePositionBtn.setSelected(true);
            mMapControl.enableLiveData(LiveDataDomainTypes.POSITION_DOMAIN);
        }else {
            enablePositionBtn.setSelected(false);
            mMapControl.disableLiveData(LiveDataDomainTypes.POSITION_DOMAIN);
        }
    });
    enableOccupancyBtn.setOnClickListener(btnView -> {
        if (!enableOccupancyBtn.isSelected()) {
            enableOccupancyBtn.setSelected(true);
            mMapControl.enableLiveData(LiveDataDomainTypes.OCCUPANCY_DOMAIN);
        }else {
            enableOccupancyBtn.setSelected(false);
            mMapControl.disableLiveData(LiveDataDomainTypes.OCCUPANCY_DOMAIN);
        }
    });
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
private fun setupSubscriptionButtons() {
    enablePositionBtn.setOnClickListener {
        if (!enablePositionBtn.isSelected) {
            enablePositionBtn.isSelected = true
            mMapControl.enableLiveData(LiveDataDomainTypes.POSITION_DOMAIN)
        }else {
            enablePositionBtn.isSelected = false
            mMapControl.disableLiveData(LiveDataDomainTypes.POSITION_DOMAIN)
        }
    }
    enableOccupancyBtn.setOnClickListener {
        if (!enableOccupancyBtn.isSelected) {
            enableOccupancyBtn.isSelected = true
            mMapControl.enableLiveData(LiveDataDomainTypes.OCCUPANCY_DOMAIN)
        }else {
            enableOccupancyBtn.isSelected = false
            mMapControl.disableLiveData(LiveDataDomainTypes.OCCUPANCY_DOMAIN)
        }
    }
}
```

</mi-tab-panel>
</mi-tabs>

If you are using the Demo Solution, you will need to align the camera with one of the Solution's Venues. You can use this example to find a Venue and position the camera on it.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
mMapControl.init(error -> {
    if (error == null) {
        if (MapsIndoors.getVenues() != null) {
            Venue venue = MapsIndoors.getVenues().getVenueById("130036b0b6954e479e8a9116");
            runOnUiThread(()-> {
                mGoogleMap.animateCamera(CameraUpdateFactory.newLatLngZoom(venue.getAnchor().getLatLng(), 16f));
            });
        }
    }
});
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
mMapControl.init { error ->
    if (error == null) {
        val venue = MapsIndoors.getVenues()?.getVenueById("130036b0b6954e479e8a9116")
        if (venue != null) {
            runOnUiThread {
                mMap.animateCamera(CameraUpdateFactory.newLatLngZoom(venue.anchor.latLng, 16f))
            }
        }
    }
}
```

</mi-tab-panel>
</mi-tabs>

And that's it! You now have Live Data running on your app. If you need to show Live Data in another way, you can add handlers for it. Read more about this in [Rendering Live Data Locations](/android/v3/live-data/).

## Using Live Data Without the "Convenience Interface"

If you need a different way of handling Live Data subscriptions completely, because of the limitations of the "convenience interface", it is also possible to implement your own way of setting up subscriptions and dealing with the responses.

Say you only need it for a few specific Locations with positioning updates. You use those Location's IDs to create a `LiveTopicCriteria` with the builder supplied on the class that matches what you want. Once you have created the `LiveTopicCriteria`, you can subscribe to it through the `LiveDataManager`.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
LiveDataManager liveDataManager = LiveDataManager.getInstance();
if (MapsIndoors.getDataSet() != null && MapsIndoors.getDataSet().getId() != null) {
    LiveTopicCriteria liveTopicCriteria = LiveTopicCriteria.getBuilder(MapsIndoors.getDataSet().getId())
            .anyVenue()
            .anyBuilding()
            .anyFloor()
            .anyRoom()
            .setLocationId("5bbab6734efd40598e11cbcf")
            .setDomainType(LiveDataDomainTypes.POSITION_DOMAIN)
            .build();
    liveDataManager.subscribeTopic(liveTopicCriteria);
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
MapsIndoors.getDataSet()?.id?.let { datasetId ->
    val liveTopic = LiveTopicCriteria.getBuilder(datasetId)
        .anyVenue()
        .anyBuilding()
        .anyFloor()
        .anyRoom()
        .setLocationId("5bbab6734efd40598e11cbcf")
        .setDomainType(LiveDataDomainTypes.POSITION_DOMAIN)
        .build()
    LiveDataManager.getInstance().subscribeTopic(liveTopic)
}
```

</mi-tab-panel>
</mi-tabs>

Once subscribed, the Location will update its position according to the Live Data it receives. If you want to disable the subscription later on, you can store the `LiveTopicCriteria`, and unsubscribe through `LiveDataManager.unsubscribeTopic(LiveTopicCritera liveTopicCriteria)`. The lifecycle of the subscription is already handled so there is no need to unsubscribe and resubscribe on Android lifecycles.
If you want to see the position update happening, you can set up a listener through the `LiveDataManager` like in this example.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
liveDataManager.setOnReceivedLiveUpdateListener((topic, message) -> {
    if (topic.getLocation().equals("5bbab6734efd40598e11cbcf")) {
        Point point = MapsIndoors.getLocationById("5bbab6734efd40598e11cbcf").getPoint();
        runOnUiThread(()-> {
            mGoogleMap.animateCamera(CameraUpdateFactory.newLatLngZoom(point.getLatLng(), 19f));
        });
    }
});
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
liveDataManager.setOnReceivedLiveUpdateListener { liveTopic, liveUpdate ->
    if (liveTopic.location == "5bbab6734efd40598e11cbcf") {
        val point = MapsIndoors.getLocationById("5bbab6734efd40598e11cbcf")?.point;
        point?.let {
            runOnUiThread {
                mGoogleMap.animateCamera(CameraUpdateFactory.newLatLngZoom(it.latLng, 19f))
            }
        }
    }
}
```

</mi-tab-panel>
</mi-tabs>

This is a really simple implementation to get Live Data up and running.

Now let's say you want to get the Occupancy of your Locations and make the label update to reflect how many people are inside a room.
First we will implement a way to setup `LiveTopics` so we don't get too much data at once. Here we will create a `LiveTopicCriteria` that uses the currently viewed Building together with listening on Occupancy updates. We will assign the `LiveTopicCriteria` to a variable so that we can unsubscribe when changing to another topic.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
if (MapsIndoors.getDataSet() != null && MapsIndoors.getDataSet().getId() != null) {
    mMapControl.setOnCurrentBuildingChangedListener(building -> {
        if (building != null) {
            if (mBuildingLiveTopicCritera != null) {
                liveDataManager.unsubscribeTopic(mBuildingLiveTopicCritera);
            }
            mBuildingLiveTopicCritera = LiveTopicCriteria.getBuilder(MapsIndoors.getDataSet().getId())
                .anyVenue()
                .setBuildingId(building.getId())
                .anyFloor()
                .anyRoom()
                .anyLocation()
                .setDomainType(LiveDataDomainTypes.OCCUPANCY_DOMAIN)
                .build();
            liveDataManager.subscribeTopic(mBuildingLiveTopicCritera);
        }
    });
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
MapsIndoors.getDataSet()?.id?.let { datasetId ->
    mMapControl.setOnCurrentBuildingChangedListener { building: Building? ->
        if (building != null) {
            if (mBuildingLiveTopicCritera != null) {
                liveDataManager.unsubscribeTopic(mBuildingLiveTopicCritera)
            }
            mBuildingLiveTopicCritera = LiveTopicCriteria.getBuilder(datasetId)
                .anyVenue()
                .setBuildingId(building.id)
                .anyFloor()
                .anyRoom()
                .anyLocation()
                .setDomainType(LiveDataDomainTypes.OCCUPANCY_DOMAIN)
                .build()
            liveDataManager.subscribeTopic(mBuildingLiveTopicCritera)
        }
    }
}
```

</mi-tab-panel>
</mi-tabs>

Now if you already have the live update listener from the previous Position example, you can remove the Positioning part on a specific Location, and instead implement a more generic way of handling the new updates we subscribe to. Here is an example that updates the label with the amount of people in each room.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
liveDataManager.setOnReceivedLiveUpdateListener((topic, message) -> {
    if (message.getDomainType().equals(LiveDataDomainTypes.OCCUPANCY_DOMAIN)) {
        MPLocation location = MapsIndoors.getLocationById(message.getId());
        if (location != null) {
            String nrOfPeople = "people = " + message.getOccupancyProperties().getNrOfPeople();
            LocationDisplayRule locationDisplayRule = new LocationDisplayRule.Builder(location.getId() + "_occupancy", mMapControl.getDisplayRule(location)).setLabel(nrOfPeople).build();
            mMapControl.setDisplayRule(locationDisplayRule, location);
        }
    }
});
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
liveDataManager.setOnReceivedLiveUpdateListener { topic: LiveTopic?, message: LiveUpdate ->
    if (message.domainType == LiveDataDomainTypes.OCCUPANCY_DOMAIN) {
        val location = MapsIndoors.getLocationById(message.id)
        if (location != null) {
            val nrOfPeople = "people = " + message.getOccupancyProperties().getNrOfPeople()
            val locationDisplayRule = LocationDisplayRule.Builder(location.id + "_occupancy", mMapControl.getDisplayRule(location)!!).setLabel(nrOfPeople).build()
            mMapControl.setDisplayRule(locationDisplayRule, location)
        }
    }
}
```

</mi-tab-panel>
</mi-tabs>

You should now be able to move between Buildings and see labels being updated with the Live Data you have requested.
