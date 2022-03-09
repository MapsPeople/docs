---
title: Display Rules
eleventyNavigation:
    key: display-rules
    parent: various
    title: Display Rules
    order: 500
---

## What are Display Rules

In this guide you will be introduced to the concept of Display Rules and learn how you can use Display Rules to change how Locations (POIs, Rooms and Areas) are displayed on the map.

It is possible to apply Display Rules to a single Location using its ID, or to all Locations of a specific Location Type such as `MEETING_ROOMS`.

The MapsIndoors CMS is used to control the default appearance of Types and Locations. To change the default appearance at _runtime_ you can use Display Rules.

It is possible to control different aspects of the appearance. For example at what zoom levels Labels and Icons should be visible.

## Display Rule Hierarchy

In each MapsIndoors SDK, a "Main Display Rule" outlines a list of sensible defaults for all geodata. Each Location Type inherits its values from this Main Display Rule, unless specifically overriden for that Type. Each Location (Room, Area or POI) in turn inherits the combined values from the Main Display Rule and its Location Type, unless for those properties where it's been specifically overriden on that Location.

As an example, you might want all polygons to be red. However, the Location Type for "Meeting Room" specifies that their polygons should be blue, while the "Executive Meeting Room" Location specifically has an orange polygon.

No matter what is specified in this hierarchy, you can override it _runtime_ in your app. That means all matches for a specific search query can be specified to have a polygon color that is red, regardless of what exisits in the defaults, on their Types and for those Locations specifically.

To remove a value from the Display Rule (to make it inherit from further up the hierarchy) set the proptery to `null`.

## Display Rule Properties

A Display Rule could look like this:

```json
{
  "displaySetting": {
    "visible": true,
    "iconVisible": true,
    "zoomFrom": 16.0,
    "zoomTo": 22.0,
    "icon": "https://app.mapsindoors.com/mapsindoors/cms/assets/icons/misc/default-marker.png?71488",
    "iconScale": 1.0,
    "iconSize": {
        "width": 20.0,
        "height": 20.0
    },
    "labelVisible": true,
    "label": "{{name}}",
    "labelZoomFrom": 16.0,
    "labelZoomTo": 22.0,
    "labelMaxWidth": 0,
    "polygon": {
        "visible": false,
        "zoomFrom": 18,
        "zoomTo": 22,
        "strokeWidth": 2.0,
        "strokeColor": "#3071D9",
        "strokeOpacity": 1.0,
        "fillColor": "#3071D9",
        "fillOpacity": 0.2
    },
}
```

All properties are optional.

| Properties | Type | Validation | Description |
| --- | --- | --- | --- |
| visible | boolean | | Must be true for the location to be shown in the map. If not true all other parameters are ignored. |
| iconVisible | boolean | | Must be `true` for the icon to be visible in the map. If this is not `true` the `zoomFrom`, `zoomTo`, `iconUrl`, `iconScale` and `iconSize` parameters are ignored. |
| zoomFrom | number | `1`-`21` (`22` if applicable) | The minimum zoom level the image/icon will be visible on the map. |
| zoomTo | number | `1`-`21` (`22` if applicable) | The maximum zoom level the image/icon will be visible on the map. |
| icon | string  | | A URL to an image to represent the Location on the map. |
| iconScale | double | `> 0` | ⚠️ Deprecated |
| iconSize | object | | Specifies the size that the image will appear on the map. `{{ "{width: number, height: number" }}}`. |
| iconSize.width | double | `> 0` | |
| iconSize.height | double | `> 0` | |
| labelVisible  | boolean | | Controls the visibility of the label. |
| label | string  | | Descriptive text for the Location. This can either be a static text or a dynamic text, retrieved from a property on the Location, using double curly braces as delimiters. E.g. `"{{ "{{ name " }}}}"` or a combination `"Room: {{ "{{ name " }}}}"`. |
| labelZoomFrom | number  | `1`-`21` (`22` if applicable) | The maximum zoom level the image/icon will be visible on the map. | The minimum zoom level the label will be visible on the map. |
| labelZoomTo   | number  | `1`-`21` (`22` if applicable) | The maximum zoom level the image/icon will be visible on the map. | The maximum zoom level the label will be visible on the map. |
| labelMaxWidth | double | `> 0` | `0` means infinite, e.g. lines will not be broken based on `width` |
| polygon | object | | Everything under this parameter apply only to locations that have polygon data defined such as Rooms and Areas, but not POIs. |
| polygon.visible | boolean | | Must be `true` for the polygon to be visible on the map. If this is not `true` all parameters under polygon are ignored. |
| polygon.zoomFrom | | `1`-`21` (`22` if applicable) | The lowest zoom level where the polygon will be shown. |
| polygon.zoomTo | | `1`-`21` (`22` if applicable) | The highest zoom level where the polygon will be shown. This number must be higher than `polygon.zoomFrom` unless `polygon.zoomFrom` is equal to the highest available zoom level for the Solution (this is `22` in some cases). |
| polygon.strokeWidth | | `>= 0` | The width of the outline of the polygon. |
| polygon.strokeColor | | Valid hex color | The color of the outline of the polygon. |
| polygon.strokeOpacity | | `0`-`1` | The opacity of the outline of the polygon. Set this to `0` if only the interior is to be shown. |
| polygon.fillColor | | Valid hex color | The color of the interior of the polygon. |
| polygon.fillOpacity | | `0`-`1` | The color of the interior of the polygon. Set this to 0 if only the outline is to be shown. |

## How to Use Display Rules in Practice in iOS SDK

See the [iOS guide to Map Styling]({{ "/ios/v3/guides/map-styling" | url }}).

## How to Use Display Rules in Practice in JS SDK

See the JS SDK guide to [Using Display Rules in Practice]({{ "/web/v4/guides/display-rules-practice" | url }}).
