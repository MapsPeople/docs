---
title: Live Data in Practice
eleventyNavigation:
  key: map-live-data-practice
  parent: map-live-data
  title: Live Data in Practice
  order: 20
---

<mi-tabs>
<mi-tab label="Android - Java" tab-for="java"></mi-tab>
<mi-tab label="Android - Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab label="iOS" tab-for="ios"></mi-tab>
<mi-tab-panel id="java">

In this tutorial you will learn to work with Live Updates / real-time data in MapsIndoors. It is recommended that you read the [Live Data Introduction]({{ site.url }}/content/map/live-data/live-data-intro-android/) before continuing.

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

If you are using the Demo Solution, you will need to align the camera with one of the Solution's Venues. You can use this example to find a Venue and position the camera on it.

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

And that's it! You now have Live Data running on your app. If you need to show Live Data in another way, you can add handlers for it. Read more about this in [Rendering Live Data Locations]({{ site.url }}/content/map/live-data/live-data-intro-android/).

## Using Live Data Without the "Convenience Interface" in Java

If you need a different way of handling Live Data subscriptions completely, because of the limitations of the "convenience interface", it is also possible to implement your own way of setting up subscriptions and dealing with the responses.

Say you only need it for a few specific Locations with positioning updates. You use those Location's IDs to create a `LiveTopicCriteria` with the builder supplied on the class that matches what you want. Once you have created the `LiveTopicCriteria`, you can subscribe to it through the `LiveDataManager`.

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

Once subscribed, the Location will update its position according to the Live Data it receives. If you want to disable the subscription later on, you can store the `LiveTopicCriteria`, and unsubscribe through `LiveDataManager.unsubscribeTopic(LiveTopicCritera liveTopicCriteria)`. The lifecycle of the subscription is already handled so there is no need to unsubscribe and resubscribe on Android lifecycles.
If you want to see the position update happening, you can set up a listener through the `LiveDataManager` like in this example.

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

This is a really simple implementation to get Live Data up and running.

Now let's say you want to get the Occupancy of your Locations and make the label update to reflect how many people are inside a room.
First we will implement a way to setup `LiveTopics` so we don't get too much data at once. Here we will create a `LiveTopicCriteria` that uses the currently viewed Building together with listening on Occupancy updates. We will assign the `LiveTopicCriteria` to a variable so that we can unsubscribe when changing to another topic.

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

Now if you already have the live update listener from the previous Position example, you can remove the Positioning part on a specific Location, and instead implement a more generic way of handling the new updates we subscribe to. Here is an example that updates the label with the amount of people in each room.

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

You should now be able to move between Buildings and see labels being updated with the Live Data you have requested.

</mi-tab-panel>
<mi-tab-panel id="kotlin">

In this tutorial you will learn to work with Live Updates / real-time data in MapsIndoors. It is recommended that you read the [Live Data Introduction]({{ site.url }}/content/map/live-data/live-data-intro-android/) before continuing.

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

If you are using the Demo Solution, you will need to align the camera with one of the Solution's Venues. You can use this example to find a Venue and position the camera on it.

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

And that's it! You now have Live Data running on your app. If you need to show Live Data in another way, you can add handlers for it. Read more about this in [Rendering Live Data Locations]({{ site.url }}/content/map/live-data/live-data-intro-android/).

## Using Live Data Without the "Convenience Interface" in Kotlin

If you need a different way of handling Live Data subscriptions completely, because of the limitations of the "convenience interface", it is also possible to implement your own way of setting up subscriptions and dealing with the responses.

Say you only need it for a few specific Locations with positioning updates. You use those Location's IDs to create a `LiveTopicCriteria` with the builder supplied on the class that matches what you want. Once you have created the `LiveTopicCriteria`, you can subscribe to it through the `LiveDataManager`.

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

Once subscribed, the Location will update its position according to the Live Data it receives. If you want to disable the subscription later on, you can store the `LiveTopicCriteria`, and unsubscribe through `LiveDataManager.unsubscribeTopic(LiveTopicCritera liveTopicCriteria)`. The lifecycle of the subscription is already handled so there is no need to unsubscribe and resubscribe on Android lifecycles.
If you want to see the position update happening, you can set up a listener through the `LiveDataManager` like in this example.

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

This is a really simple implementation to get Live Data up and running.

Now let's say you want to get the Occupancy of your Locations and make the label update to reflect how many people are inside a room.
First we will implement a way to setup `LiveTopics` so we don't get too much data at once. Here we will create a `LiveTopicCriteria` that uses the currently viewed Building together with listening on Occupancy updates. We will assign the `LiveTopicCriteria` to a variable so that we can unsubscribe when changing to another topic.

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

Now if you already have the live update listener from the previous Position example, you can remove the Positioning part on a specific Location, and instead implement a more generic way of handling the new updates we subscribe to. Here is an example that updates the label with the amount of people in each room.

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

You should now be able to move between Buildings and see labels being updated with the Live Data you have requested.

</mi-tab-panel>
<mi-tab-panel id="ios">

<!-- Known Issues -->
{% include "src/content/shared/known-issues-ios.md" %}

In this tutorial you will learn to work with Live Data / Real Time Data in MapsIndoors. It is recommended that you read the [Live Data Introduction]({{ site.url }}/content/map/live-data/live-data-intro-ios/) before continueing.

We will create a view controller displaying a map that shows the some dynamic changes that are initiated from Live Data sources known by MapsIndoors. The test data coming as Live Updates contains data for the Occupancy Domain Type and the Position Domain Type.

Create a class `LiveDataController` that inherits from `UIViewController`.

```swift
class LiveDataController: UIViewController {
```

Add buttons for toggling subscriptions, one button for Live Position Updates and one for Live Occupancy Updates.

```swift
let positionButton = UIButton.init()
let occupancyButton = UIButton.init()
```

Add a `GMSMapView` and a `MPMapControl` to the class

```swift
var map: GMSMapView? = nil
var mapControl: MPMapControl? = nil
```

Add a method `setupLiveDataButtons()` setting up buttons that enables/disables the subscriptions.

```swift
fileprivate func setupLiveDataButtons() {
    positionButton.setTitle("See Live Positions", for: .normal)
    positionButton.setTitle("Tracking Live Positions", for: .selected)
    positionButton.addTarget(self, action: #selector(togglePosition), for: .touchUpInside)
    positionButton.backgroundColor = UIColor.blue

    occupancyButton.setTitle("See Live Occupancy", for: .normal)
    occupancyButton.setTitle("Showing Live Occupancy", for: .selected)
    occupancyButton.addTarget(self, action: #selector(toggleOccupancy), for: .touchUpInside)
    occupancyButton.backgroundColor = UIColor.red
}
```

Add a method `toggleLiveData()` that does the actual toggling of Live Data for a button based on the buttons `isSelected` flag. Swap current selected state for button. If the flag is true and the button is selected, call the `MPMapControl.enableLiveData()` method with the given Domain Type. We will also call a `startFlash()`method that should make the button flash. More on this later. If the flag is false and the button is not selected, call the `MPMapControl.disableLiveData()` method with the given Domain Type. Similarly we will call a `stopFlash()`method that should stop the button flash. In this example, we choose to have a customized rendering of Live Data, so we provide a Handler instance that gets the updated Locations. We will get to that later.

```swift
fileprivate func toggleLiveData(_ button: UIButton, _ domainType: String) {
    button.isSelected = !button.isSelected
    if button.isSelected {
        mapControl?.enableLiveData(domainType, handler: self)
        button.startFlash()
    } else {
        mapControl?.disableLiveData(domainType)
        button.stopFlash()
    }
}
```

Define an objective-c method `togglePosition()` that will receive events from your `positionButton`. In this method create a `position` Topic Criteria and call `togglePosition` with the button and the Topic Criteria.

```swift
@objc func togglePosition(button:UIButton) {
    toggleLiveData(button, MPLiveDomainType.position)
}
```

Define an objective-c method `toggleOccupancy()` that will receive events from your `occupancyButton`. In this method create a `occupancy` Topic Criteria and call `togglePosition` with the button and the Topic Criteria.

```swift
@objc func toggleOccupancy(button:UIButton) {
    toggleLiveData(button, MPLiveDomainType.occupancy)
}
```

Inside `viewDidLoad()`, initialise your instance of `GMSMapView` and `MPMapControl`. Set the delegate to be able to get notified about Live Updates for the map.

```swift
self.map = GMSMapView.init(frame: CGRect.zero)
self.map?.accessibilityElementsHidden = false
self.mapControl = MPMapControl.init(map: self.map!)
```

Inside `viewDidLoad()`, also request a building and go to this building on the map.

```swift
let q = MPQuery.init()
let f = MPFilter.init()
q.query = "Building"

MPLocationService.sharedInstance().getLocationsUsing(q, filter: f) { (locations, error) in
    if let loc = locations?.first {
        self.mapControl?.go(to: loc)
    }
}
```

Inside `viewDidLoad()` method, call `setupLiveDataButtons()` arrange the map view and the buttons in stackviews.

```swift
setupLiveDataButtons()
let buttonStackView = UIStackView.init(arrangedSubviews: [positionButton, occupancyButton])
buttonStackView.axis = .horizontal
buttonStackView.distribution = .fillEqually
let stackView = UIStackView.init(arrangedSubviews: [map!, buttonStackView])
stackView.axis = .vertical
view = stackView

```

Optionally, when you leave this controller, unsubscribe all Live Update Topics.

```swift
override func viewDidDisappear(_ animated: Bool) {
    mapControl?.disableLiveData(MPLiveDomainType.position)
    mapControl?.disableLiveData(MPLiveDomainType.occupancy)
}
```

Create an extension for `LiveDataController` to make it adopt the `MPMappedLocationUpdateHandler` protocol. Note that if you are happy with the default rendering of Live Data, this part is not needed.

```swift
extension LiveDataController : MPMappedLocationUpdateHandler {
```

In the `LiveDataController` extension, add the method `handleLiveUpdate()` that handles a Live Update for a `MPLocation`. This method should only handle the `occupancy` Domain Type, so the first thing is to check for a `MPLiveUpdate` object for the `occupancy` Domain Type. After this verification, do the following:

1. If `occupancy.numberOfPeople > 0` create the "closed" image, else create the "open" image.
1. Preferrably in a separate background thread, setup a Location Display Rule with that image.
1. If `occupancy.numberOfPeople > 0` create a icon badge showing the number of people as text in the badge. How you do this is up to you. In this example we use [this code](https://github.com/MapsIndoors/MapsIndoorsUtils).
1. Apply the newly created display rule on the main thread.

```swift
private func handleLiveUpdate(_ location: MPLocation) {
    let domainType = MPLiveDomainType.occupancy
    if let occupancy = location.getLiveUpdate(forDomainType: domainType) as? MPOccupancyLiveUpdate {
        var img:UIImage?
        var label:String
        if occupancy.numberOfPeople > 0 {
            img = UIImage.init(named: "closed.png")
            label = "\(location.name ?? "") - Occupied"
        } else {
            img = UIImage.init(named: "open.png")
            label = "\(location.name ?? "") - Free"
        }
        guard let icon = img else {
            return
        }
        DispatchQueue.global(qos: .background).async {
            let dr = MPLocationDisplayRule.init(name: domainType, andIcon: icon, andZoomLevelOn: 15)!
            dr.iconSize = CGSize.init(width: 42, height: 42)
            dr.label = label
            dr.showLabel = true
            if occupancy.numberOfPeople > 0 {
                let badgeConfig = BagdedIconConfiguration(originalIcon:icon, badgeText:"\(occupancy.numberOfPeople)")
                let badged = BagdedIcon.bagdedIcon(config: badgeConfig)
                dr.icon = badged
            }
            DispatchQueue.main.async {
                self.mapControl?.setDisplayRule(dr, for: location)
            }
        }
    }
}
```

In the `LiveDataController` extension, add the method `willUpdateLocations()`. This is the actual delegate method that recieves all `MPLocation` objects that was updated on the map. Iterate through these locations and skip the ones that have the `position` Domain Type. Call the `handleLiveUpdate()` method for all others.

```swift
func willUpdateLocationsOnMap(locations: [MPLocation]) {
    for loc in locations {
        let positionUpdate = loc.getLiveUpdate(forDomainType: MPLiveDomainType.position)
        if positionUpdate == nil {
            handleLiveUpdate(loc)
        }
    }
}

```

Earlier we called some non-existing methods, `startFlash()` and `stopFlash()` on a `UIButton`. We will create these methods now. Create an extension for `UIButton`.

```swift
extension UIButton {
```

In the `UIButton` extension, add the method `startFlash()` that creates and adds an animation layer that manipulates with the opacity of the button over time.

```swift
func startFlash() {
    let flash = CABasicAnimation(keyPath: "opacity")
    flash.duration = 0.5
    flash.fromValue = 1
    flash.toValue = 0.5
    flash.timingFunction = CAMediaTimingFunction(name: kCAMediaTimingFunctionEaseInEaseOut)
    flash.autoreverses = true
    flash.repeatCount = .greatestFiniteMagnitude
    layer.add(flash, forKey: "flash")
}
```

In the `UIButton` extension, add the method `stopFlash()` that removes the above layer again.

```swift
func stopFlash() {
    layer.removeAnimation(forKey: "flash")
}
```

[See the sample in LiveDataController.swift](https://github.com/MapsIndoors/MapsIndoorsIOS/blob/master/Example/DemoSamples/Live Data/LiveDataController.swift)

</mi-tab-panel>
</mi-tabs>
