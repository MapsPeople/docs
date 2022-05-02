---
title: Display Rules in Practice for Android
eleventyNavigation:
  key: map-map-styling-display-rules-android
  parent: map-map-styling
  title: Display Rules in Practice for Android
  order: 20
---

## Style the map using display rules

Creating a display rule object:

<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<h3>Java</h3>
```java
private LocationDisplayRule airLocationDisplayRule = new LocationDisplayRule.Builder("air rule").setVectorDrawableIcon(R.drawable.ic_baseline_air_24).setLabel("air rule").build();
```
</mi-tab-panel>
<mi-tab-panel id="kotlin">
<h3>Kotlin</h3>
```kotlin
private var airLocationDisplayRule = LocationDisplayRule.Builder("air rule").setVectorDrawableIcon(R.drawable.ic_baseline_air_24).setLabel("air rule").build()
```
</mi-tab-panel>
</mi-tabs>

Modify displayRule for selected location:

<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<h3>Java</h3>
```java
mMapControl.setClickedPOIHighlightOutlineStrokeColor(Color.BLUE);
mMapControl.setClickedPOIHighlightFillColor(Color.GREEN);
mMapControl.setClickedPOIHighlightOutlineStrokeWidth(3f);
mMapControl.setClickedPOIHighlightShowingZoomLevel(16);
```
</mi-tab-panel>
<mi-tab-panel id="kotlin">
<h3>Kotlin</h3>
```kotlin
mMapControl.clickedPOIHighlightOutlineStrokeColor = Color.BLUE
mMapControl.clickedPOIHighlightFillColor = Color.GREEN
mMapControl.clickedPOIHighlightOutlineStrokeWidth = 3f
mMapControl.clickedPOIHighlightShowingZoomLevel = 16f
```
</mi-tab-panel>
</mi-tabs>

Setting display rule for type:

<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<h3>Java</h3>
```java
typeDisplayRule = new LocationDisplayRule.Builder("Office", mMapControl.getDisplayRule("Office")).setVectorDrawableIcon(R.drawable.ic_baseline_bolt_24).build();
MapsIndoors.getLocationsAsync(null, new MPFilter.Builder().setTypes(Collections.singletonList("Office")).build(), (locations, miError) -> {
    if (locations != null) {
        mMapControl.setDisplayRule(typeDisplayRule, locations);
    }
});
```
</mi-tab-panel>
<mi-tab-panel id="kotlin">
<h3>Kotlin</h3>
```kotlin
typeDisplayRule = LocationDisplayRule.Builder("Office", mMapControl.getDisplayRule("Office")!!).setPolygonDisplayRule(polygonDisplayRule).setVectorDrawableIcon(R.drawable.ic_baseline_bolt_24).build()
MapsIndoors.getLocationsAsync(null, MPFilter.Builder().setTypes(listOf("Office")).build()) { locations, miError ->
    if (locations != null) {
        mMapControl.setDisplayRule(typeDisplayRule, locations)
    }
}
```
</mi-tab-panel>
</mi-tabs>

Setting display rule for a single and multiple locations:

single:

<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<h3>Java</h3>
```java
singleLocationDisplayRule = new LocationDisplayRule.Builder("singleRule").setVectorDrawableIcon(R.drawable.ic_baseline_air_24).setLabel("single display rule").build();
MPLocation mpLocation = MapsIndoors.getLocationById("MyLocationId");
mMapControl.setDisplayRule(singleLocationDisplayRule, mpLocation);
```
</mi-tab-panel>
<mi-tab-panel id="kotlin">
<h3>Kotlin</h3>
```kotlin
singleLocationDisplayRule = LocationDisplayRule.Builder("singleRule").setVectorDrawableIcon(R.drawable.ic_baseline_air_24).setLabel("single display rule").build()
val mpLocation = MapsIndoors.getLocationById("MyLocationId")
mMapControl.setDisplayRule(singleLocationDisplayRule, mpLocation)
```
</mi-tab-panel>
</mi-tabs>

multiple:

<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<h3>Java</h3>
```java
multipleLocationDisplayRule = new LocationDisplayRule.Builder("multipleRule").setVectorDrawableIcon(R.drawable.ic_baseline_air_24).setLabel("multiple display rule").build();
MapsIndoors.getLocationsAsync(null, new MPFilter.Builder().setTypes(Collections.singletonList("Meetingroom")).build(), (locations, miError) -> {
    if (locations != null) {
        mMapControl.setDisplayRule(multipleLocationDisplayRule, locations);
    }
});
```
</mi-tab-panel>
<mi-tab-panel id="kotlin">
<h3>Kotlin</h3>
```kotlin
multipleLocationDisplayRule = LocationDisplayRule.Builder("multipleRule").setVectorDrawableIcon(R.drawable.ic_baseline_air_24).setLabel("multiple display rule").build()
MapsIndoors.getLocationsAsync(null, MPFilter.Builder().setTypes(listOf("Meetingroom")).build()) { locations, _ ->
    if (locations != null) {
        mMapControl.setDisplayRule(multipleLocationDisplayRule, locations)
    }
}
```
</mi-tab-panel>
</mi-tabs>

presenting locations using polygons:

<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<h3>Java</h3>
```java
PolygonDisplayRule polygonDisplayRule = new PolygonDisplayRule();
polygonDisplayRule.setIsVisible(true);
polygonDisplayRule.setZoomFrom(12f);
polygonDisplayRule.setZoomTo(21f);
polygonDisplayRule.setFillColor("#0000FF");
polygonDisplayRule.setStrokeColor("#0000FF");
typeDisplayRule = new LocationDisplayRule.Builder("Office", mMapControl.getDisplayRule("Office")).setPolygonDisplayRule(polygonDisplayRule).setVectorDrawableIcon(R.drawable.ic_baseline_bolt_24).build();
MapsIndoors.getLocationsAsync(null, new MPFilter.Builder().setTypes(Collections.singletonList("Office")).build(), (locations, miError) -> {
    if (locations != null) {
        mMapControl.setDisplayRule(typeDisplayRule, locations);
    }
});
```
</mi-tab-panel>
<mi-tab-panel id="kotlin">
<h3>Kotlin</h3>
```kotlin
val polygonDisplayRule = PolygonDisplayRule()
polygonDisplayRule.setIsVisible(true)
polygonDisplayRule.setZoomFrom(12f)
polygonDisplayRule.setZoomTo(21f)
polygonDisplayRule.setFillColor("#0000FF")
polygonDisplayRule.setStrokeColor("#0000FF")
typeDisplayRule = LocationDisplayRule.Builder("Office", mMapControl.getDisplayRule("Office")!!).setPolygonDisplayRule(polygonDisplayRule).setVectorDrawableIcon(R.drawable.ic_baseline_bolt_24).build()
MapsIndoors.getLocationsAsync(null, MPFilter.Builder().setTypes(listOf("Office")).build()) { locations, miError ->
    if (locations != null) {
        mMapControl.setDisplayRule(typeDisplayRule, locations)
    }
}
```
</mi-tab-panel>
</mi-tabs>

Style the map using Google Maps Styling:
Note here: This needs to be applied after mapcontrol is initialised. Further documentation on the google maps styling can be found here: https://developers.google.com/maps/documentation/android-sdk/styling

<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<h3>Java</h3>
```java
mMapControl.init(miError -> {
    googleMap.setMapStyle(MapStyleOptions.loadRawResourceStyle(this, R.raw.style_json));
});
```
</mi-tab-panel>
<mi-tab-panel id="kotlin">
<h3>Kotlin</h3>
```kotlin
mMapControl.init { miError ->
    if (miError == null) {
        mMap.setMapStyle(MapStyleOptions.loadRawResourceStyle(this, R.raw.style_json))
    }
}
```
</mi-tab-panel>
</mi-tabs>
