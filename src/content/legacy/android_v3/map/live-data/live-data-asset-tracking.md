---
title: Implementing Asset Tracking
eleventyNavigation:
  key: v3-map-live-data-asset-tracking
  parent: v3-map-live-data
  title: Implementing Asset Tracking
  order: 30
---

There are many potential use cases of the Live Data implementation provided in the SDK. In this guide, we will run through how to implement some Asset Tracking.

Scenarios where asset tracking would be useful could for example be a hospital wishing to keep track of resources such as wheelchairs, both monitoring their location, and whether or not they are currently being used. This is also going to be the example used in this tutorial.

<mi-tabs>
<mi-tab label="Android - Java" tab-for="java"></mi-tab>
<mi-tab label="Android - Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab label="iOS" tab-for="ios"></mi-tab>
<mi-tab-panel id="java">

> This tutorial also assumes that you have set up the system and integration that you wish to use to monitor your assets. This tutorial only demonstrates how to display this in MapsIndoors, as accounting for all variations of integrations would be unfeasible. All concepts described in this tutorial can be read about in more detail at [Live Data Introduction for Android]({{ site.url }}/content/map/live-data/live-data-intro-android) and [Live Data Tutorial for Android]({{ site.url }}/content/map/live-data/live-data-tutorial-android).

Enabling Live Data through `MapControl` is an easy way to get Live Data running in your app. For this use case, `LiveDataDomainTypes.POSITION_DOMAIN` and `LiveDataDomainTypes.AVAILABILITY_DOMAIN` should be enabled, as you need to know the position of the wheelchair, and whether or not it is in use - `LiveDataDomainTypes.OCCUPANCY_DOMAIN`, which monitors the number of people using, often used for meeting rooms, is not needed in this use case.

```java
mMapControl.init(error -> {
    mMapControl.enableLiveData(LiveDataDomainTypes.POSITION_DOMAIN);
    mMapControl.enableLiveData(LiveDataDomainTypes.AVAILABILITY_DOMAIN);
});
```

`MapControl` has a default way of rendering the Live Data for POIs, which is enabled by invoking `enableLiveData()`. If you wish to render the Live Data in another way, you can add handlers for this, as described in [this section]({{ site.url }}/content/map/live-data/live-data-intro-android/#rendering-live-data-locations).

Information about how to handle [listening for Live Data Updates]({{ site.url }}/content/map/live-data/live-data-intro-android/#listening-for-live-updates) could also be extremely relevant for a use-case such as the one described in this tutorial, since a user might need to receive the latest information possible on where available wheelchairs are located.

</mi-tab-panel>
<mi-tab-panel id="kotlin">

> This tutorial also assumes that you have set up the system and integration that you wish to use to monitor your assets. This tutorial only demonstrates how to display this in MapsIndoors, as accounting for all variations of integrations would be unfeasible. All concepts described in this tutorial can be read about in more detail at [Live Data Introduction for Android]({{ site.url }}/content/map/live-data/live-data-intro-android) and [Live Data Tutorial for Android]({{ site.url }}/content/map/live-data/live-data-tutorial-android).

Enabling Live Data through `MapControl` is an easy way to get Live Data running in your app. For this use case, `LiveDataDomainTypes.POSITION_DOMAIN` and `LiveDataDomainTypes.AVAILABILITY_DOMAIN` should be enabled, as you need to know the position of the wheelchair, and whether or not it is in use - `LiveDataDomainTypes.OCCUPANCY_DOMAIN`, which monitors the number of people using, often used for meeting rooms, is not needed in this use case.

```kotlin
mMapControl.init {
    mMapControl.enableLiveData(LiveDataDomainTypes.POSITION_DOMAIN)
    mMapControl.enableLiveData(LiveDataDomainTypes.AVAILABILITY_DOMAIN)
}
```

`MapControl` has a default way of rendering the Live Data for POIs, which is enabled by invoking `enableLiveData()`. If you wish to render the Live Data in another way, you can add handlers for this, as described in [this section]({{ site.url }}/content/map/live-data/live-data-intro-android/#rendering-live-data-locations).

Information about how to handle [listening for Live Data Updates]({{ site.url }}/content/map/live-data/live-data-intro-android/#listening-for-live-updates) could also be extremely relevant for a use-case such as the one described in this tutorial, since a user might need to receive the latest information possible on where available wheelchairs are located.

</mi-tab-panel>
<mi-tab-panel id="ios">

<!-- Known Issues -->
{% include "src/content/shared/known-issues-ios.md" %}

> This tutorial also assumes that you have set up the system and integration that you wish to use to monitor your assets. This tutorial only demonstrates how to display this in MapsIndoors, as accounting for all variations of integrations would be unfeasible. All concepts described in this tutorial can be read about in more detail at [Live Data Introduction for iOS]({{ site.url }}/content/map/live-data/live-data-intro-ios) and [Live Data Tutorial for iOS]({{ site.url }}/content/map/live-data/live-data-tutorial-ios).

Enabling Live Data through `mapControl` is an easy way to get Live Data running in your app. For this use case, `MPLiveDomainType.position` and `MPLiveDomainType.availability` should be enabled, as you need to know the position of the wheelchair, and whether or not it is in use - there are several other `MPLiveDomainType` variables that exist, as can be found [here](https://app.mapsindoors.com/mapsindoors/reference/ios/v3/interface_m_p_live_domain_type.html), but they are not needed for this specific use-case. However, they could be needed for yours!

```swift
self.mapControl = MPMapControl.init(map: self.map!)

self.mapControl.enableLiveData(MPLiveDomainType.position)
self.mapControl.enableLiveData(MPLiveDomainType.availability)
```

`mapControl` has a default way of rendering the Live Data Location called by this method. If you wish to render the Live Data in another way, you can add handlers for this, as described in [this section]({{ site.url }}/content/map/live-data/live-data-intro-ios/#rendering-live-data-locations).

Information about how to handle [listening for Live Data Updates]({{ site.url }}/content/map/live-data/live-data-intro-ios/#listening-for-live-updates) could also be extremely relevant for a use-case such as the one described in this tutorial, since a user might need to receive the latest information possible on where available wheelchairs are located.

</mi-tab-panel>
</mi-tabs>
