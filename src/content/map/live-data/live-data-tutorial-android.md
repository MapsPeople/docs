---
title: Live Data Tutorial for Android
toc: true
eleventyNavigation:
  key: map-live-data-tutorial-android
  parent: map-live-data-intro-android
  title: Live Data Tutorial for Android
  order: 20
---

In this tutorial you will learn to work with Live Updates / real-time data in MapsIndoors. It is recommended that you read the [Live Data Introduction]({{ site.url }}/content/map/live-data/live-data-intro-android/) before continuing.

We will create a simple map showing dynamic changes initiated from Live Data sources known by MapsIndoors. If you do not have a Live Data integration in place for your MapsIndoors project, you can use API key `d876ff0e60bb430b8fabb145` for demo and test purposes. The test data are of the Occupancy Domain Type and the Position Domain Type.

Start by creating an activity that has a map view and a `MapControl` initiated.

Add buttons to the view for toggling subscriptions create one for enabling positioning and one for enabling occupancy.

```xml
<Button
    android:id="@+id/positioning_button"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Enable positioning"
    app:layout_constraintTop_toTopOf="parent"
    app:layout_constraintStart_toStartOf="parent" />
<Button
    android:id="@+id/occupancy_button"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Enable occupancy"
    app:layout_constraintTop_toBottomOf="@+id/positioning_button"
    app:layout_constraintStart_toStartOf="parent"/>
```

Set a click listener. This example uses the convenience interface to setup Live Data for the app.

```kotlin
binding.positioningButton.setOnClickListener {
    if (!binding.positioningButton.isSelected) {
        binding.positioningButton.isSelected = true
        mMapControl?.enableLiveData(LiveDataDomainTypes.POSITION_DOMAIN)
    }else {
        binding.positioningButton.isSelected = false
        mMapControl?.disableLiveData(LiveDataDomainTypes.POSITION_DOMAIN)
    }
}

binding.occupancyButton.setOnClickListener {
    if (!binding.occupancyButton.isSelected) {
        binding.occupancyButton.isSelected = true
        mMapControl?.enableLiveData(LiveDataDomainTypes.OCCUPANCY_DOMAIN)
    }else {
        binding.occupancyButton.isSelected = false
        mMapControl?.disableLiveData(LiveDataDomainTypes.OCCUPANCY_DOMAIN)
    }
}
```

If you are using the Demo Solution, you will need to align the camera with one of the Solution's Venues. You can use this example to find a Venue and position the camera on it.

```kotlin
val venue = MapsIndoors.getVenues()!!.currentVenue
activity?.runOnUiThread {
    if (venue != null) {
        //Animates the camera to fit the new venue
        mMap!!.animateCamera(
            CameraUpdateFactory.newLatLngBounds(
                LatLngBoundsConverter.toLatLngBounds(venue.bounds!!),
                19
            )
        )
    }
}
```

And that's it! You now have Live Data running on your app. If you need to show Live Data in another way, you can add handlers for it. Read more about this in [Rendering Live Data Locations]({{ site.url }}/content/map/live-data/live-data-intro-android/).

## Using Live Data Without the "Convenience Interface"

If you need a different way of handling Live Data subscriptions completely, because of the limitations of the "convenience interface", it is also possible to implement your own way of setting up subscriptions and dealing with the responses.

Say you only need it for a few specific Locations with positioning updates. You use those Location's IDs to create a `LiveTopicCriteria` with the builder supplied on the class that matches what you want. Once you have created the `LiveTopicCriteria`, you can subscribe to it through the `LiveDataManager`.

```kotlin
val liveDataManager = LiveDataManager.getInstance()
var id = MapsIndoors.getDataSet()?.id
id?.let {
    val liveTopicCriteria = LiveTopicCriteria.BuilderImpl(it)
        .setLocationId("1e43c533c5c0403ba99cecae")
        .setDomainType(LiveDataDomainTypes.POSITION_DOMAIN)
        .build()
    liveDataManager.subscribeTopic(liveTopicCriteria)
}
```

Once subscribed, the Location will update its position according to the Live Data it receives. If you want to disable the subscription later on, you can store the `LiveTopicCriteria`, and unsubscribe through `LiveDataManager.unsubscribeTopic(LiveTopicCritera liveTopicCriteria)`. The lifecycle of the subscription is already handled so there is no need to unsubscribe and resubscribe on Android lifecycles.
If you want to see the position update happening, you can set up a listener through the `LiveDataManager` like in this example.

```kotlin
liveDataManager.setOnReceivedLiveUpdateListener { mpLiveTopic, liveUpdate ->
    val point = MapsIndoors.getLocationById("1e43c533c5c0403ba99cecae")?.point
    point?.let {
        activity?.runOnUiThread {
            mMap?.animateCamera(CameraUpdateFactory.newLatLngZoom(LatLng(it.lat, it.lng), 19f))
        }
    }
}
```

This is a really simple implementation to get Live Data up and running.

Now let's say you want to get the Occupancy of your Locations and make the label update to reflect how many people are inside a room.
First we will implement a way to setup `LiveTopics` so we don't get too much data at once. Here we will create a `LiveTopicCriteria` that uses the currently viewed Building together with listening on Occupancy updates. We will assign the `LiveTopicCriteria` to a variable so that we can unsubscribe when changing to another topic.

```kotlin
val liveDataManager = LiveDataManager.getInstance()
var id = MapsIndoors.getDataSet()?.id
id?.let { datasetId ->
    mMapControl?.setOnCurrentBuildingChangedListener {
        if (it != null) {
            if (mBuildingLiveTopicCriteria != null) {
                liveDataManager.unsubscribeTopic(mBuildingLiveTopicCriteria)
            }

            mBuildingLiveTopicCriteria = LiveTopicCriteria.BuilderImpl(datasetId)
                .setBuildingId(it.id)
                .setDomainType(LiveDataDomainTypes.OCCUPANCY_DOMAIN)
                .build()
            liveDataManager.subscribeTopic(mBuildingLiveTopicCriteria)
        }
    }
    if (mBuildingLiveTopicCriteria == null) {
        MapsIndoors.getBuildings()?.buildings?.get(1)?.let {
            mBuildingLiveTopicCriteria = LiveTopicCriteria.BuilderImpl(datasetId)
                .setBuildingId(it.id)
                .setDomainType(LiveDataDomainTypes.OCCUPANCY_DOMAIN)
                .build()
            liveDataManager.subscribeTopic(mBuildingLiveTopicCriteria)
        }
    }
}
```

Now if you already have the live update listener from the previous Position example, you can remove the Positioning part on a specific Location, and instead implement a more generic way of handling the new updates we subscribe to. Here is an example that updates the label with the amount of people in each room.

```kotlin
liveDataManager.setOnReceivedLiveUpdateListener { mpLiveTopic, liveUpdate ->
    if (liveUpdate.domainType.equals(LiveDataDomainTypes.OCCUPANCY_DOMAIN)) {
        var location = MapsIndoors.getLocationById(liveUpdate.id)
        if (location != null) {
            val nrOfPeople = liveUpdate.occupancyProperties.noOfPeople
            MapsIndoors.getDisplayRule(location)?.isLabelVisible = true
            MapsIndoors.getDisplayRule(location)?.label = "People: $nrOfPeople"
        }
    }
}
```

You should now be able to move between Buildings and see labels being updated with the Live Data you have requested.

[See the samples in the LiveDataFragment.kt](https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/livedata/LivedataFragment.kt)
