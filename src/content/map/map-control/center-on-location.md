---
title: Center on Location on Click
toc: true
eleventyNavigation:
  parent: map-map-control
  key: map-map-control-center-on-location
  title: Center on Location on Click
  order: 50
---

There are many instances in which you would want to center the map on a specific location or POI. This is generally done using `goTo(location)` for the [Android](https://app.mapsindoors.com/mapsindoors/reference/android/v4/MapsIndoorsSDK/com.mapsindoors.core/-map-control/go-to.html?query=open%20fun%20goTo(entity:%20MPEntity)) and [iOS](https://app.mapsindoors.com/mapsindoors/reference/ios/v3/interface_m_p_map_control.html#a77e0aaaaf405a018af22182155c22226) SDK's.

A specific example could be if you want to center the map on a selected LOcation, when clicking a Location in a list of search results. This would be done by creating an `onClickListener` for each result in a list of results, and using the `goTo(location)` function on each.

<mi-tabs>
<mi-tab label="Android" tab-for="android"></mi-tab>
<mi-tab label="iOS" tab-for="ios"></mi-tab>
<mi-tab label="Web" tab-for="web"></mi-tab>
<mi-tab-panel id="android">

```kotlin
onClickListener {
  MapControl.goTo(location)
}
```

</mi-tab-panel>
<mi-tab-panel id="ios">

<!-- Known Issues -->
{% include "src/content/shared/known-issues-ios.md" %}

</mi-tab-panel>
<mi-tab-panel id="web">



</mi-tab-panel>
</mi-tabs>