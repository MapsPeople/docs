---
title: Working with Live Updates / Real Time Data in MapsIndoors for android
eleventyNavigation:
  parent: android-v3-live-data
  key: Working with Live Updates / Real Time Data in MapsIndoors for android
  order: 340
---

In this tutorial you will learn to work with Live Updates / real-time data in MapsIndoors. It is recommended that you read the [Live Data Introduction](/android/v3/live-data) before continuing.

We will create a simple activity displaying a map that shows some dynamic changes that are initiated from Live Data sources known by MapsIndoors. If you do not have a Live Data integration in place for your MapsIndoors project, you can use API key `2ae7d137162642618b5ce555` for demo and test purposes. The test data are of the Occupancy Domain Type and the Position Domain Type.

Start by creating an activity that has a google map view and a mapcontrol initiated.

Add buttons to the view for toggling subscriptions, one button for Live Position Updates and one for Live Occupancy Updates.

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

Add a method `setupSubscriptionButtons()` setting up buttons that enables/disables the subscriptions. This example uses the convenience interface to setup live data for the app.

<mi-tabs>
    <mi-tab label="Java" tab-for="java"></mi-tab>
    <mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
    <mi-tab-panel id="java">
        <h3>java</h3>
        <pre lang="Java"><code>
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
        </code></pre>
    </mi-tab-panel>
    <mi-tab-panel id="kotlin">
        <h3>kotlin</h3>
        <pre lang ="Kotlin"><code>
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
        </code></pre>
    </mi-tab-panel>
</mi-tabs>

If you are using the demo solution. You will need to allign the camera with one of the solutions venues. You can use this example to find a venue and position the camera on it.

<mi-tabs>
    <mi-tab label="Java" tab-for="java"></mi-tab>
    <mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
    <mi-tab-panel id="java">
        <h3>java</h3>
        <pre lang="Java"><code>
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
        </code></pre>
    </mi-tab-panel>
    <mi-tab-panel id="kotlin">
        <h3>kotlin</h3>
        <pre lang ="Kotlin"><code>
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
        </code></pre>
    </mi-tab-panel>
</mi-tabs>

Thats it you now have live data running on your app. If you need to show live data in another way, you can add handlers for this. Read more about this here [Rendering Live Data Locations](/android/v3/live-data).

## Using livedata without the convenience interface

If you need a different way of handling live data subscriptions completely, because of the limitations of the convenience interface. It is also possible to implement your own way of setting up subscriptions and dealing with the responses.

Say you only need it for a few specific locations with positioning updates. You use thoose locations id to create a `LiveTopicCriteria` with the builder supplied on the class that matches what you want. Once you have created the `LiveTopicCriteria` you can subscribe to it through the `LiveDataManager`.

<mi-tabs>
    <mi-tab label="Java" tab-for="java"></mi-tab>
    <mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
    <mi-tab-panel id="java">
        <h3>java</h3>
        <pre lang="Java"><code>
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
        </code></pre>
    </mi-tab-panel>
    <mi-tab-panel id="kotlin">
        <h3>kotlin</h3>
        <pre lang ="Kotlin"><code>
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
        </code></pre>
    </mi-tab-panel>
</mi-tabs>

Once subscribed the location will update its position according to the live data it receives. If you want to disable the subscription later on you can store the `LiveTopicCriteria` and unsubscribe through `LiveDataManager.unsubscribeTopic(LiveTopicCritera liveTopicCriteria)`. The lifecycle of the subscription is already handled so there is no need to unsubscribe and resubscribe on Android lifecycles.
If you want to see the position update happening you can set up a listener through the `LiveDataManager` like in this example.

<mi-tabs>
    <mi-tab label="Java" tab-for="java"></mi-tab>
    <mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
    <mi-tab-panel id="java">
        <h3>java</h3>
        <pre lang="Java"><code>
liveDataManager.setOnReceivedLiveUpdateListener((topic, message) -> {
    if (topic.getLocation().equals("5bbab6734efd40598e11cbcf")) {
        Point point = MapsIndoors.getLocationById("5bbab6734efd40598e11cbcf").getPoint();
        runOnUiThread(()-> {
            mGoogleMap.animateCamera(CameraUpdateFactory.newLatLngZoom(point.getLatLng(), 19f));
        });
    }
});
        </code></pre>
    </mi-tab-panel>
    <mi-tab-panel id="kotlin">
        <h3>kotlin</h3>
        <pre lang ="Kotlin"><code>
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
        </code></pre>
    </mi-tab-panel>
</mi-tabs>

This is quite a simple implementation to get live data up and running and see it working. Say you want to get the occupancy of your locations and have the label update to reflect how many people are inside a room.
First we will implement a way to setup `LiveTopics` so we dont get too much data at once. Here we will create a `LiveTopicCriteria` that uses the currently viewed building together with listening on occupancy updates. We will assign the `LiveTopicCriteria` to a variable so that we can unsubscribe when changing to another topic.

<mi-tabs>
    <mi-tab label="Java" tab-for="java"></mi-tab>
    <mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
    <mi-tab-panel id="java">
        <h3>java</h3>
        <pre lang="Java"><code>
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
            if (mBuildingLiveTopicCritera != null) {
                liveDataManager.subscribeTopic(mBuildingLiveTopicCritera);
            }
        }
    });
}
        </code></pre>
    </mi-tab-panel>
    <mi-tab-panel id="kotlin">
        <h3>kotlin</h3>
        <pre lang ="Kotlin"><code>
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
            if (mBuildingLiveTopicCritera != null) {
                liveDataManager.subscribeTopic(mBuildingLiveTopicCritera)
            }
        }
    }
}
        </code></pre>
    </mi-tab-panel>
</mi-tabs>

Now if you already have the live update listener from the previous position example, you can remove the positioning part on a specific location and instead implement a more generic way of handling the new updates we subscribe to. Here is an example that updates the label with the ammount of people in each room.

<mi-tabs>
    <mi-tab label="Java" tab-for="java"></mi-tab>
    <mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
    <mi-tab-panel id="java">
        <h3>java</h3>
        <pre lang="Java"><code>
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
        </code></pre>
    </mi-tab-panel>
    <mi-tab-panel id="kotlin">
        <h3>kotlin</h3>
        <pre lang ="Kotlin"><code>
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
        </code></pre>
    </mi-tab-panel>
</mi-tabs>

You should now be able to hover between buildings and see labels being updated with the live data you have requested.
