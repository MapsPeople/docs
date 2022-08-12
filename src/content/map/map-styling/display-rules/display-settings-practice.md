---
title: Display Rules in Practice
toc: true
eleventyNavigation:
  key: map-map-styling-display-rules
  parent: map-map-styling-display-rules
  title: Display Rules in Practice
  order: 20
---

There are two ways to change the appearance of the map content in MapsIndoors and Google Maps.

* Using Display Rules
* Using Google Maps styling

Each has its own purpose which will be explained below.

<mi-tabs>
<mi-tab label="Android - Java" tab-for="android-java"></mi-tab>
<mi-tab label="Android - Kotlin" tab-for="android-kotlin"></mi-tab>
<mi-tab label="iOS" tab-for="ios"></mi-tab>
<mi-tab label="Web" tab-for="web"></mi-tab>
<mi-tab-panel id="android-java">

## Style the Map using Display Rules

In the [MapsIndoors CMS](https://cms.mapsindoors.com/types) you can set display rules for the different types of locations in your MapsIndoors content. The changes you make in the CMS will take effect whenever your app reboots or when you call `MapsIndoors.synchroniseContent()` within the app session.

A Display Rule encapsulates both what, how and when a Location should be displayed on the map. A Location is presented on the map using a combination of icon, text and polygon. Each of these can appear at different, independent ranges of zoom-levels. For example a venue can appear as a marker-icon on low zoom-levels, when zooming in the venue name can appear, and zooming even more in the venue polygon can appear.

In some cases, you may also want to programmatically set display rules that define when and how to show a location. Display rules are defined in a Display Rule object.

```java
private LocationDisplayRule airLocationDisplayRule = new LocationDisplayRule.Builder("air rule").setVectorDrawableIcon(R.drawable.ic_baseline_air_24).setLabel("air rule").build();
```

You can set display rules programatically in multiple ways depending on your use case:

* Modify the Display Rule for the Selected Location
* Set a Display Rule for a type of Location
* Set a Display Rule for a single specific Location
* Set a Display Rule for multiple Locations

### Modify the Display Rule for the Selected Location

When a Location is selected, this Location is highlighted using the settings specified in the `setClickedPOIHighlight` properties. You can change the highlighting of selected Locations through various setters on `MapControl` as shown below:

```java
mMapControl.setClickedPOIHighlightOutlineStrokeColor(Color.BLUE);
mMapControl.setClickedPOIHighlightFillColor(Color.GREEN);
mMapControl.setClickedPOIHighlightOutlineStrokeWidth(3f);
mMapControl.setClickedPOIHighlightShowingZoomLevel(16);
```

### Setting Display Rule for a Type

To set new display rules for a type of Location, you need to know the types of Locations in your Location dataset, so you may look these up in the CMS. The types can also be retrieved in code with `getSolution()`. The type objects can be read from `getTypes()`. In `LocationDisplayRule.Builder`, there are instances where you insert the name of your chosen Type. In the example below, the chosen Type name is `"Office"`.

```java
typeDisplayRule = new LocationDisplayRule.Builder("Office", mMapControl.getDisplayRule("Office")).setVectorDrawableIcon(R.drawable.ic_baseline_bolt_24).build();
MapsIndoors.getLocationsAsync(null, new MPFilter.Builder().setTypes(Collections.singletonList("Office")).build(), (locations, miError) -> {
    if (locations != null) {
        mMapControl.setDisplayRule(typeDisplayRule, locations);
    }
});
```

Setting a display rule for a type will only apply to the single instance of `MapControl`.

### Setting Display Rule for a Single and Multiple Locations

To set new display rules for a single Location, you need to have the Location at hand. Locations can be fetched using `getLocationById`. Once you have a location, you can set a custom display rule for it.

```java
singleLocationDisplayRule = new LocationDisplayRule.Builder("singleRule").setVectorDrawableIcon(R.drawable.ic_baseline_air_24).setLabel("single display rule").build();
MPLocation mpLocation = MapsIndoors.getLocationById("MyLocationId");
mMapControl.setDisplayRule(singleLocationDisplayRule, mpLocation);
```

For multiple Locations, you fetch an array of Locations using `getLocationsAsync` instead:

```java
multipleLocationDisplayRule = new LocationDisplayRule.Builder("multipleRule").setVectorDrawableIcon(R.drawable.ic_baseline_air_24).setLabel("multiple display rule").build();
MapsIndoors.getLocationsAsync(null, new MPFilter.Builder().setTypes(Collections.singletonList("Meetingroom")).build(), (locations, miError) -> {
    if (locations != null) {
        mMapControl.setDisplayRule(multipleLocationDisplayRule, locations);
    }
});
```

### Presenting Locations Using Polygons

To present a polygon, either configure the Display Rule using the CMS, or configure a Display Rule programatically:

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

## Style the Map using Google Maps Styling

> This needs to be applied after `mMapControl` is initialised. Further documentation on the Google Maps styling can be found here: [https://developers.google.com/maps/documentation/android-sdk/styling](https://developers.google.com/maps/documentation/android-sdk/styling)

MapsIndoors is built on top of Google Maps which has its own way of styling the map. Google Maps styling will only affect the MapsIndoors map if Google Maps has Points of Interest placed inside or near the buildings that you build a MapsIndoors solution for. By default, MapsIndoors applies a Google Maps styling that hides most POI icons that may collide with MapsIndoors content.

You can apply your own styling to Google Maps using `googleMap.setMapStyle`.

```java
mMapControl.init(miError -> {
    googleMap.setMapStyle(MapStyleOptions.loadRawResourceStyle(this, R.raw.style_json));
});
```

The JSON string that you apply in this case can be built using the [Google Maps Styling Wizard](https://mapstyle.withgoogle.com/). Read more about styling the Google Map in the [Google Maps iOS SDK Docs](https://developers.google.com/maps/documentation/ios-sdk/styling).

</mi-tab-panel>
<mi-tab-panel id="android-kotlin">

## Style the Map using Display Rules

In the [MapsIndoors CMS](https://cms.mapsindoors.com/types) you can set display rules for the different types of locations in your MapsIndoors content. The changes you make in the CMS will take effect whenever your app reboots or when you call `MapsIndoors.synchroniseContent()` within the app session.

A Display Rule encapsulates both what, how and when a Location should be displayed on the map. A Location is presented on the map using a combination of icon, text and polygon. Each of these can appear at different, independent ranges of zoom-levels. For example a venue can appear as a marker-icon on low zoom-levels, when zooming in the venue name can appear, and zooming even more in the venue polygon can appear.

In some cases, you may also want to programmatically set display rules that define when and how to show a location. Display rules are defined in a Display Rule object.

```kotlin
private var airLocationDisplayRule = LocationDisplayRule.Builder("air rule").setVectorDrawableIcon(R.drawable.ic_baseline_air_24).setLabel("air rule").build()
```

You can set display rules programatically in multiple ways depending on your use case:

* Modify the Display Rule for the Selected Location
* Set a Display Rule for a type of Location
* Set a Display Rule for a single specific Location
* Set a Display Rule for multiple Locations

### Modify the Display Rule for the Selected Location

When a Location is selected, this Location is highlighted using the settings specified in the `setClickedPOIHighlight` properties. You can change the highlighting of selected Locations through various setters on `MapControl` as shown below:

```kotlin
mMapControl.clickedPOIHighlightOutlineStrokeColor = Color.BLUE
mMapControl.clickedPOIHighlightFillColor = Color.GREEN
mMapControl.clickedPOIHighlightOutlineStrokeWidth = 3f
mMapControl.clickedPOIHighlightShowingZoomLevel = 16f
```

### Setting Display Rule for a Type

To set new display rules for a type of Location, you need to know the types of Locations in your Location dataset, so you may look these up in the CMS. The types can also be retrieved in code with `getSolution()`. The type objects can be read from `getTypes()`. In `LocationDisplayRule.Builder`, there are instances where you insert the name of your chosen Type. In the example below, the chosen Type name is `"Office"`.

```kotlin
typeDisplayRule = LocationDisplayRule.Builder("Office", mMapControl.getDisplayRule("Office")!!).setPolygonDisplayRule(polygonDisplayRule).setVectorDrawableIcon(R.drawable.ic_baseline_bolt_24).build()
MapsIndoors.getLocationsAsync(null, MPFilter.Builder().setTypes(listOf("Office")).build()) { locations, miError ->
    if (locations != null) {
        mMapControl.setDisplayRule(typeDisplayRule, locations)
    }
}
```

Setting a display rule for a type will only apply to the single instance of `MapControl`.

### Setting Display Rule for a Single and Multiple Locations

To set new display rules for a single Location, you need to have the Location at hand. Locations can be fetched using `getLocationById`. Once you have a location, you can set a custom display rule for it.

```kotlin
singleLocationDisplayRule = LocationDisplayRule.Builder("singleRule").setVectorDrawableIcon(R.drawable.ic_baseline_air_24).setLabel("single display rule").build()
val mpLocation = MapsIndoors.getLocationById("MyLocationId")
mMapControl.setDisplayRule(singleLocationDisplayRule, mpLocation)
```

For multiple Locations, you fetch an array of Locations using `getLocationsAsync` instead:

```kotlin
multipleLocationDisplayRule = LocationDisplayRule.Builder("multipleRule").setVectorDrawableIcon(R.drawable.ic_baseline_air_24).setLabel("multiple display rule").build()
MapsIndoors.getLocationsAsync(null, MPFilter.Builder().setTypes(listOf("Meetingroom")).build()) { locations, _ ->
    if (locations != null) {
        mMapControl.setDisplayRule(multipleLocationDisplayRule, locations)
    }
}
```

### Presenting Locations Using Polygons

To present a polygon, either configure the Display Rule using the CMS, or configure a Display Rule programatically:

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

## Style the Map using Google Maps Styling

> This needs to be applied after `mMapControl` is initialised. Further documentation on the Google Maps styling can be found here: [https://developers.google.com/maps/documentation/android-sdk/styling](https://developers.google.com/maps/documentation/android-sdk/styling)

MapsIndoors is built on top of Google Maps which has its own way of styling the map. Google Maps styling will only affect the MapsIndoors map if Google Maps has Points of Interest placed inside or near the buildings that you build a MapsIndoors solution for. By default, MapsIndoors applies a Google Maps styling that hides most POI icons that may collide with MapsIndoors content.

You can apply your own styling to Google Maps using `googleMap.setMapStyle`.

```kotlin
mMapControl.init { miError ->
    if (miError == null) {
        m
        googleMap.setMapStyle(MapStyleOptions.loadRawResourceStyle(this, R.raw.style_json))
    }
}
```

The JSON string that you apply in this case can be built using the [Google Maps Styling Wizard](https://mapstyle.withgoogle.com/). Read more about styling the Google Map in the [Google Maps iOS SDK Docs](https://developers.google.com/maps/documentation/ios-sdk/styling).

</mi-tab-panel>
<mi-tab-panel id="ios">

## Style the Map using Display Rules

In the [MapsIndoors CMS](https://cms.mapsindoors.com/types) you can set display rules for the different types of locations in your MapsIndoors content. The changes you make in the CMS will take effect whenever your app reboots or when you call `MapsIndoors.synchroniseContent()` within the app session.

A Display Rule encapsulates both what, how and when a Location should be displayed on the map. A Location is presented on the map using a combination of icon, text and polygon. Each of these can appear at different, independent ranges of zoom-levels. For example a venue can appear as a marker-icon on low zoom-levels, when zooming in the venue name can appear, and zooming even more in the venue polygon can appear.

In some cases, you may also want to programmatically set display rules that define when and how to show a location. Display rules are defined in a Display Rule object.

```swift
let myDisplayRule = MPLocationDisplayRule(name: "info", andIcon: UIImage(named : "info"), andZoomLevelOn: 17)
```

</mi-tab-panel>
<mi-tab-panel id="web">

To get an overview of what Display Rules are and can be used for, read the [Display Rules Introduction]({{ "/various/display-rules" | url }}) first.

## Changing the Appearance When the User Clicks a Location

```javascript
let selectedPOI;
mapsIndoors.addListener("click", function (poi) {
    if (selectedPOI) {
        mapsIndoors.setDisplayRule(selectedPOI.id, null);
    }

    mapsIndoors.setDisplayRule(poi.id, {
        iconSize: { width: 30, height: 30 },
    });

    selectedPOI = poi;
});
```

## Change the Label for All Locations for the Type `PRINTER`

```javascript
mapsIndoors.setDisplayRule('PRINTER',  {
    label: "{{ "Printer: {{ name " }}}}"
});
```

## Change the Label for a Single Location

```javascript
mapsIndoors.setDisplayRule('c66dccd480624c428ea5b78d',  {
    label: "{{ "Printer: {{ name " }}}}"
});
```

## Apply the Same Display Rule to Multiple Locations

```javascript
mapsIndoors.setDisplayRule(['c66dccd480624c428ea5b780', 'c66dccd480624c428ea5b79c','c66dccd480624c428ea5b76a', ...], {
    icon: "https://app.mapsindoors.com/mapsindoors/cms/assets/icons/building-icons/printer.png"
});
```

## Reset the Display Rule Back to Default

```javascript
mapsIndoors.setDisplayRule('PRINTER', null);
```

```javascript
mapsIndoors.setDisplayRule('c66dccd480624c428ea5b78d', null);
```

```javascript
mapsIndoors.setDisplayRule(['c66dccd480624c428ea5b780', 'c66dccd480624c428ea5b79c','c66dccd480624c428ea5b76a', ...], null);
```

</mi-tab-panel>
</mi-tabs>
