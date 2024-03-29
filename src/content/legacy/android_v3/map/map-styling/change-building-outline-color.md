---
title: Change Building Outline Color
toc: true
eleventyNavigation:
  key: v3-map-map-styling-building-outline-color
  parent: v3-map-map-styling
  title: Change Building Outline Color
  order: 30
---

One way you can alter the look and feel of your map is by changing the color of the outline surrounding your buildings.

The method to do this is different for each platform.

<mi-tabs>
<mi-tab label="Android" tab-for="Android"></mi-tab>
<mi-tab label="iOS" tab-for="iOS"></mi-tab>
<mi-tab label="Web" tab-for="Web"></mi-tab>
<mi-tab-panel id="Android">

To change the building outline color, use `setBuildingOutlineStrokeColor()` from the `MapControl` class.

```java
setBuildingOutlineStrokeColor(strokeColor: Int)
```

The parameter `strokeColor` takes the color in RGB format (with an alpha-channel value), the the syntax being `AARRGGBB`.

</mi-tab-panel>
<mi-tab-panel id="iOS">

To change the building outline, use the properties of `MapControl.locationHighlightDisplayRule`.

```swift
myMapControl.locationHighlightDisplayRule?.highlightOutlineColor = UIColor.red
```

The sample uses the example `UIColor.red`, but this can be any standard color such as `UIColor.green` or `UIColor.lightGray`. You can also define RGB values as follows: `UIColor(red: 123, blue: 36, green: 273, alpha: 100)`.

</mi-tab-panel>
<mi-tab-panel id="Web">

To change the building outline color, use the `strokeColor` property of the `BuildingOutlineOptions` interface. This property accepts any color as defined by conventional CSS color values. See [https://developer.mozilla.org/en-US/docs/Web/CSS/color_value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) for more information on CSS color values.

To do this in practice, on the MapsIndoors instance, call `setBuildingOutlineOptions` to change the appearance of the building outline.

```javascript
mapsIndoors.setBuildingOutlineOptions({strokeColor: '#3071d9'});
```

</mi-tab-panel>
</mi-tabs>
