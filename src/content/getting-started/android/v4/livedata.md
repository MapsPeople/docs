---
title: Enable Live Data
toc: true
eleventyNavigation:
  title: Enable Live Data
  key: getting-started-android-livedata
  parent: getting-started-android-v4
  order: 170
---

{% include "src/content/shared/live-data/live-data-intro.md" %}

{% include "src/content/shared/getting-started/live-data/live-position-demo-preconditions.md" %}

Enabling Live Data through `MapControl` is as simple as calling `mapControl.enableLiveData()` with a [Domain Type](https://app.mapsindoors.com/mapsindoors/reference/android/v3/index.html).

We will create a new method on our `MapsActivity` called `enableLiveData()` to enable Live Data for the Solution.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/Google_Maps/mapsindoorsgettingstartedjava/src/main/java/com/mapspeople/mapsindoorsgettingstartedjava/MapsActivity.java#L254-L262">MapsActivity.java</a>

```java
void enableLiveData() {
    //Enabling Live Data for the three known Live Data Domains enabled for this Solution.
    mMapControl.enableLiveData(LiveDataDomainTypes.AVAILABILITY_DOMAIN);
    mMapControl.enableLiveData(LiveDataDomainTypes.OCCUPANCY_DOMAIN);
    mMapControl.enableLiveData(LiveDataDomainTypes.POSITION_DOMAIN);
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/Google_Maps/mapsindoorsgettingstartedkotlin/src/main/java/com/mapspeople/mapsindoorsgettingstartedkotlin/MapsActivity.kt#L223-L228">MapsActivity.kt</a>

```kotlin
private fun enableLiveData() {
    //Enabling Live Data for the three known Live Data Domains enabled for this Solution.
    mMapControl.enableLiveData(LiveDataDomainTypes.AVAILABILITY_DOMAIN)
    mMapControl.enableLiveData(LiveDataDomainTypes.OCCUPANCY_DOMAIN)
    mMapControl.enableLiveData(LiveDataDomainTypes.POSITION_DOMAIN)
}
```

</mi-tab-panel>
</mi-tabs>

By consequence, `MapControl` will manage the Live Data subscriptions needed for the currently visible map and provide a default rendering of the Live Data updates depending on the Domain Type.

In the context of your view controller showing a map, add the call after creating your `MapControl` object used in the `Activity` in the `initMapControl()` method created earlier.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/Google_Maps/mapsindoorsgettingstartedjava/src/main/java/com/mapspeople/mapsindoorsgettingstartedjava/MapsActivity.java#L145-L167">MapsActivity.java</a>

```java
void initMapControl(View view) {
    //Creates a new instance of MapControl
    MapControl.create(mapConfig, (mapControl, miError) -> {
        mMapControl = mapControl;
        //Enable Live Data on the map
        enableLiveData();
    }
    ...
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/Google_Maps/mapsindoorsgettingstartedkotlin/src/main/java/com/mapspeople/mapsindoorsgettingstartedkotlin/MapsActivity.kt#L117-L135">MapsActivity.kt</a>

```kotlin
private fun initMapControl(view: View) {
    ...
    //Creates a new instance of MapControl
    MapControl.create(config) { mapControl, miError ->
        if (miError == null) {
            mMapControl = mapControl!!
            //Enable live data on the map
            enableLiveData()
            ...
        }
    }
    ...
}
```

</mi-tab-panel>
</mi-tabs>

{% include "src/content/shared/getting-started/live-data/live-position-demo-result.md" %}

Expected result:

![LiveData result](/assets/android/getting-started/live_data.gif)

Learn more about controlling and rendering Live Data in MapsIndoors in the [introduction to Live Data]({{ site.url }}/content/map/live-data/live-data-intro-android/).

<!-- Congrats -->
{% include "src/content/shared/getting-started/congrats.md" %}
