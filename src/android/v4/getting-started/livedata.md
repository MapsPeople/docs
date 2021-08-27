---
title: Enable Live Data
eleventyNavigation:
  title: Enable Live Data
  key: android-v4-getting-started-enable-live-data
  parent: android-v4-getting-started
  order: 170
---

{% include "src/shared/live-data/live-data-intro.md" %}

{% include "src/shared/getting-started/live-data/live-position-demo-preconditions.md" %}

Enabling Live Data through `MapControl` is as simple as calling `mapControl.enableLiveData()` with a [Domain Type](https://app.mapsindoors.com/mapsindoors/reference/android/v4/index.html).

We will create a new method on our `MapsActivity` called `enableLiveData()` to enable Live Data for the Solution.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L300-L305">MapsActivity.java</a>

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
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/main/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/MapsActivity.kt#L269-L274">MapsActivity.kt</a>

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

In the context of your view controller showing a map, add the call after creating your `MapControl` object used in the `Activity` in the `onMapControlReady()` method created earlier.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L169-L184">MapsActivity.java</a>

```java
public void onMapControlReady(MapControl mapControl, MIError error) {
    if (error == null) {
        // Sets the local MapControl variable so that it can be used later
        mMapControl = mapControl;
        ...
        //Enable live data on the map
        enableLiveData();
    }
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/main/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/MapsActivity.kt#L125-L144">MapsActivity.kt</a>

```kotlin
    private fun onMapControlReady(mapControl: MapControl, miError: MIError?) {
        if (miError == null) {
            // Sets the local MapControl var so that it can be used later
            mMapControl = mapControl
            ...
            //Enable live data on the map
            enableLiveData()
        }
    }
```

</mi-tab-panel>
</mi-tabs>

{% include "src/shared/getting-started/live-data/live-position-demo-result.md" %}

Expected result:

![LiveData result](/assets/android/getting-started/live_data.gif)

Learn more about controlling and rendering Live Data in MapsIndoors in the [introduction to Live Data]({{ site.url }}/android/v4/guides/live-data/).

<!-- Congrats -->
{% include "src/shared/getting-started/congrats.md" %}
