---
title: Introduction to Display Rules.
parent: guides
nav_weight: 300
published: true
date: 2019-11-04
---

## Overview

In this, you will be introduced to the concept of Display Rules and learn how you can use Display Rules to change how POIs look on the map.
It's possible to apply Display Rules to all POIs of a specific type like `Meeting Rooms` or a single POI using its id.

You control the default appearance of types and POIs through the MapsIndoors CMS. The Display Rules enable you to change the default appearance dynamically at runtime.

It's possible to control different aspects of the appearances like at what zoom levels labels and icons should be visible.

A Display Rule could looks like this:

```javascript
{
  "displayRule": {
    "icon": "https://app.mapsindoors.com/mapsindoors/cms/assets/icons/building-icons/cafe.png",
    "iconVisible": true,
    "imageScale": 1,
    "imageSize": { width: 24, height: 24},
    "label": "{{ "{{ name " }}}}",
    "labelVisible": true,
    "labelZoomFrom": 15 ,
    "labelZoomTo": 21,
    "visible": true,
    "zoomFrom": 17,
    "zoomTo": 21,
}
```

-   `icon` - A URL to an image to represent the POI on the map.
-   `iconVisible` - Controls the visibility of the icon.
-   `imageScale` - ????
-   `imageSize` - Specifies the size that the image will appear on the map.
-   `label` - Descriptive text for the POI. This can either be a static text or a dynamic text, retrieved from a property on the POI. E.g. `"{{ "{{ name " }}}}"` or a combination `"Room: {{ "{{ name " }}}}"`.
-   `labelVisible` - Controls the visibility of the label.
-   `labelZoomFrom` - The minimum zoom level the label will be visible on the map.
-   `labelZoomTo` - The maximum zoom level the label will be visible on the map.
-   `visible` - Controls the overall visibility of the POI on the map. If false both the label and icon will not be displayed.
-   `zoomFrom` - The minimum zoom level the image/icon will be visible on the map.
-   `zoomTo` - The maximum zoom level the image/icon will be visible on the map.

This enables you to do things like changing an icon at a specific zoom level.
It is also possible to highlight POIs when a user clicks on it.

<script async src="//jsfiddle.net/mapspeople/m62t9zyc/embed/html,result/"></script>

---

## Guides

-   [Create a simple map with MapsIndoors](/guides/simple_map/)
-   [Introduction to DispayRules](guides/display_rules_intro/)
-   [Search and filtering](/guides/search_and_filtering/)
-   [Show user location on the map (Blue dot)](/guides/show_users_position/)
