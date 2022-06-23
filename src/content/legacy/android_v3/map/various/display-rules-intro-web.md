---
title: Introduction to Display Rules
toc: true
eleventyNavigation:
  title: Introduction to Display Rules
  parent: legacy-android-v3-map-various
  key: legacy-android-v3-map-various-display-rules
  order: 210
---

## Overview

In this guide you will be introduced to the concept of Display Rules and learn how you can use Display Rules to change how Locations (POIs, Rooms and Areas) are displayed on the map.

It is possible to apply Display Rules to a single Location using its ID, or to all Locations of a specific Location Type such as `MEETING_ROOMS`.

The MapsIndoors CMS is used to control the default appearance of Types and Locations. To change the default appearance at _runtime_ you can use Display Rules.

It is possible to control different aspects of the appearance. For example at what zoom levels Labels and Icons should be visible.

## Display Rule Hierarchy

Display Rules are applied to a POI in a hierarchy:

- A DisplayRule defined for a **type** in the CMS is overridden by
- a DisplayRule defined for a **type** at runtime is overridden by
- a DisplayRule defined for a **Location** in the CMS is overridden by
- a DisplayRule defined for a **Location** at runtime

It is only properties with a value that will override the previous value. If the value is undefined the previous value will be used.

To remove a value from the Display Rule set the proptery to `null`.

## Display Rule Properties

A Display Rule could look like this:

```javascript
{
  displayRule = {
    icon: "https://app.mapsindoors.com/mapsindoors/cms/assets/icons/building-icons/cafe.png",
    iconVisible: true,
    iconSize: { width: 24, height: 24 },
    label: "{{ "{{ name " }}}}",
    labelVisible: true,
    labelZoomFrom: 15 ,
    labelZoomTo: 21,
    visible: true,
    zoomFrom: 17,
    zoomTo: 21,
}
```

All properties are optional.

| Properties    | Type    | Description                                                                                                                                                                                                                                           |
| ------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| icon          | string  | A URL to an image to represent the Location on the map.                                                                                                                                                                                               |
| iconVisible   | boolean | Controls the visibility of the icon.                                                                                                                                                                                                                  |
| iconSize      | Size    | Specifies the size that the image will appear on the map. `{{ "{width: number, height: number" }}}`                                                                                                                                                   |
| label         | string  | Descriptive text for the Location. This can either be a static text or a dynamic text, retrieved from a property on the Location, using double curly braces as delimiters. E.g. `"{{ "{{ name " }}}}"` or a combination `"Room: {{ "{{ name " }}}}"`. |
| labelVisible  | boolean | Controls the visibility of the label.                                                                                                                                                                                                                 |
| labelZoomFrom | number  | The minimum zoom level the label will be visible on the map.                                                                                                                                                                                          |
| labelZoomTo   | number  | The maximum zoom level the label will be visible on the map.                                                                                                                                                                                          |
| visible       | boolean | Controls the overall visibility of the Location on the map. If false both the Label and Icon will not be displayed.                                                                                                                                   |
| zoomFrom      | number  | The minimum zoom level the image/icon will be visible on the map.                                                                                                                                                                                     |
| zoomTo        | number  | The maximum zoom level the image/icon will be visible on the map.                                                                                                                                                                                     |

This enables you to do things like changing an icon at a specific zoom level.

## How to Use Display Rules in Practice

### Changing the Appearance When the User Clicks a Location

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

### Change the Label for All Locations for the Type `PRINTER`

```javascript
mapsIndoors.setDisplayRule('PRINTER',  {
    label: "{{ "Printer: {{ name " }}}}"
});
```

### Change the Label for a Single Location

```javascript
mapsIndoors.setDisplayRule('c66dccd480624c428ea5b78d',  {
    label: "{{ "Printer: {{ name " }}}}"
});
```

### Apply the Same Display Rule to Multiple Locations

```javascript
mapsIndoors.setDisplayRule(['c66dccd480624c428ea5b780', 'c66dccd480624c428ea5b79c','c66dccd480624c428ea5b76a', ...], {
    icon: "https://app.mapsindoors.com/mapsindoors/cms/assets/icons/building-icons/printer.png"
});
```

### Reset the Display Rule Back to Default

```javascript
mapsIndoors.setDisplayRule('PRINTER', null);
```

```javascript
mapsIndoors.setDisplayRule('c66dccd480624c428ea5b78d', null);
```

```javascript
mapsIndoors.setDisplayRule(['c66dccd480624c428ea5b780', 'c66dccd480624c428ea5b79c','c66dccd480624c428ea5b76a', ...], null);
```
