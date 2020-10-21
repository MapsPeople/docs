---
title: Introduction to Display Rules.
parent: guides
nav_weight: 300
published: true
date: 2019-11-04
---

## Overview

In this guide you will be introduced to the concept of Display Rules and learn how you can use Display Rules to change how POIs are displayed on the map.

It is possible to apply Display Rules to a single POI using its ID, or to all POIs of a specific Location Type such as `MEETING_ROOMS`.

The MapsIndoors CMS is used to control the default appearance of types and POIs. To change the default appearance at runtime you can use Display Rules.

It is possible to control different aspects of the appearance. For example at what zoom levels Labels and Icons should be visible.

## Display Rule hierarchy

Display Rules are applied to a POI in a hierarchy  
A DisplayRule defined for a **type** in the CMS is overridden by:  
A DisplayRule defined for a **type** at runtime is overridden by:  
A DisplayRule defined for a **POI** in the CMS is overridden by:  
A DisplayRule defined for a **POI** at runtime.

It is only properties with a value that will override the previous value. If the value is undefined the previous value will be used.  
To remove a value from the DisplayRule set the proptery to `null`. 

## Display Rule properties

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

| Properties    | Type    | Description                                                                                                                                                                                                                                 |
| ------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| icon          | string  | A URL to an image to represent the POI on the map.                                                                                                                                                                                          |
| iconVisible   | boolean | Controls the visibility of the icon.                                                                                                                                                                                                        |
| iconSize      | Size    | Specifies the size that the image will appear on the map. `{{ "{width: number, height: number" }}}`                                                                                                                                         |
| label         | string  | Descriptive text for the POI. This can either be a static text or a dynamic text, retrieved from a property on the POI, using double curly braces as delimiters. E.g. `"{{ "{{ name " }}}}"` or a combination `"Room: {{ "{{ name " }}}}"`. |
| labelVisible  | boolean | Controls the visibility of the label.                                                                                                                                                                                                       |
| labelZoomFrom | number  | The minimum zoom level the label will be visible on the map.                                                                                                                                                                                |
| labelZoomTo   | number  | The maximum zoom level the label will be visible on the map.                                                                                                                                                                                |
| visible       | boolean | Controls the overall visibility of the POI on the map. If false both the label and icon will not be displayed.                                                                                                                              |
| zoomFrom      | number  | The minimum zoom level the image/icon will be visible on the map.                                                                                                                                                                           |
| zoomTo        | number  | The maximum zoom level the image/icon will be visible on the map.                                                                                                                                                                           |

This enables you to do things like changing an icon at a specific zoom level.

## How to use Display Rules in practice

### Changing the appearance when the user clicks a POI

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

### Changing change the label for all POIs for the type `PRINTER`

```javascript
mapsIndoors.setDisplayRule('PRINTER',  {
    label: "{{ "Printer: {{ name " }}}}"
});
```

### Changing change the label for a single POI

```javascript
mapsIndoors.setDisplayRule('c66dccd480624c428ea5b78d',  {
    label: "{{ "Printer: {{ name " }}}}"
});
```

### Apply the same Display Rule to multiple POIs

```javascript
mapsIndoors.setDisplayRule(['c66dccd480624c428ea5b780', 'c66dccd480624c428ea5b79c','c66dccd480624c428ea5b76a', ...], {
    icon: "https://app.mapsindoors.com/mapsindoors/cms/assets/icons/building-icons/printer.png"
});
```

### Reset the Display Rule back to default.

```javascript
mapsIndoors.setDisplayRule('PRINTER', null);
```
```javascript
mapsIndoors.setDisplayRule('c66dccd480624c428ea5b78d', null);
```
```javascript
mapsIndoors.setDisplayRule(['c66dccd480624c428ea5b780', 'c66dccd480624c428ea5b79c','c66dccd480624c428ea5b76a', ...], null);
```

---

## Guides

-   [Create a simple map with MapsIndoors](/guides/simple_map/)
-   [Introduction to DispayRules](guides/display_rules_intro/)
-   [Search and filtering](/guides/search_and_filtering/)
-   [Show user location on the map (Blue dot)](/guides/show_users_position/)
