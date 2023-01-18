---
title: Introduction to Display Rules
toc: true
eleventyNavigation:
    key: map-map-styling-display-rules-intro
    parent: map-map-styling
    title: Introduction to Display Rules
    order: 10
---

## What Are Display Rules?

In this guide you will be introduced to the concept of Display Rules and how you can use Display Rules to change how Locations (POIs, Rooms and Areas) are displayed on the map.

The MapsIndoors CMS is used to control the initial appearance of Locations. However, the Display Rules—and thereby the appearance of Locations—can be changed from the application at _runtime_. This gives the application the power to change Locations based on events in the app. You can also use the Integration API to control Display Rules.

## How Can I Use Display Rules?

Display Rules offer many options on how to use them. We will provide you with a few examples, but there are a lot of other use cases besides these too.

1. You can use Display Rules to match the colors of, for example, the Polygons in your Solution to your brand guidelines, to ensure a coherent visual expression throughout your company's applications.
1. It is possible to connect your MapsIndoors Solution to an occupancy monitoring system, so the information about whether or not a room is occupied, and by how many people, is relayed to the MapsIndoors system. This information could then, for example, be used to color a Room red when it is occupied, or green if it is available.
1. A similar concept could be applied to Icons. Instead of the color of the Polygon changing depending on occupancy status, the Icon used for the Location could change, based on whether or not the room is available.

## Display Rule Hierarchy

In each MapsIndoors SDK, a "Main Display Rule" outlines a list of sensible defaults for all geodata. Each Location Type inherits its values from this Main Display Rule, unless the value is specifically overridden.

Each Location (Room, Area or POI) uses the Display Rule from the Type, except for values that are specifically set for the individual Location.

Here's a visualization of the inheritance principle (click to view larger version):

[![Display Rules inheritance principle]({{ "/assets/various/display-rule-inheritance.png" | url }})]({{ "/assets/various/display-rule-inheritance.png" | url }})

As an example, you might want all polygons to be `red`. However, the Location Type for "Meeting Room" specifies that their polygons should be `blue`, while the "Executive Meeting Room" Location specifically has an `orange` polygon.

No matter what is specified in this hierarchy, you can override it at _runtime_ in your app. That means, as an example, that all matches for a specific search query can be specified to have a polygon color that is `pink`, regardless of what exists in the defaults, on their Types, and for those Locations specifically.

To remove a value from the Display Rule (to make it inherit from further up the hierarchy) set the property to `null`.

> ⚠️ For Android SDK v3, you can not change Display Rules at runtime on the Location Types level to inherit for all Locations of that Type. To apply styling to all Locations of a Type, you need to filter all Locations of that Type, and update their Display Rules individually.

## Display Rule Properties

You can currently only edit Display Rules per Type. Editing Display Rules on single Locations will be added in an upcoming release.

> NOTE: If you edit Display Rules in the CMS, but none (or only some) changes take place in your app, make sure you don't set any conflicting Display Rules in-app. Display Rules applied at runtime takes precedent over all others.

In the CMS, you can edit your Display Rules in `Solution Details > Types > Edit [Location Type name] Display Rules`. This will open an overview of all Display Rules properties.

### General

![display-rules-general](/assets/map/display-rules/Display_Rules_General.png)

The "General" visibility switch determines whether Locations of this Type are visible on the map. Moreover, the Location data is not available to the SDKs when the general visibility is turned off. The system will accept a Boolean here, so either `true` or `false`.

The "Lock" icon present in all sections determines whether or not the Display Rule is inheriting from the Main Display Rule. Click the lock to enable overriding the value.

An example of in-app Display Rules using only the General Visibility option could look like this:

```json
{
    "displaySetting": {
    "visible": true,
    }
}
```

### Icon

![display-rules-icon](/assets/map/display-rules/Display_Rules_Icon.png)

The "Icon" section contains options related to the appearance of the Icon.

1. **Visibility** - Controls whether the Icon is visible on the map.
    * The system will accept a Boolean here, so either `true` or `false`.
1. **Zoom from** - Sets the minimum Zoom Level at which the Icon is visible.
    * The value should be a number between 1 and 22, with 1 being very far away, and 22 being very close (22 not available for all Solutions). In a general use case, most users will only need values between 15 and 22.
    * If you are developing using the JavaScript SDK for Google Maps, the value must be an integer. If you are developing for Android or iOS, or using a different map provider, the value may be fractional.
1. **Zoom to** - Sets the maximum Zoom Level at which the Icon is visible.
    * The value should be a number between 1 and 22, with 1 being very far away, and 22 being very close (22 not available for all Solutions). In a general use case, most users will only need values between 15 and 22.
    * If you are developing using the JavaScript SDK for Google Maps, the value must be an integer. If you are developing for Android or iOS, or using a different map provider, the value may be fractional.
1. **Icon** - Use the Media Library in the CMS to control which Icon is shown on the map.
    * The Media Library is a tool to select the displayed Icon from either a pre-loaded selection of Icons, or for you to upload your own.
    * In-app, you can provide a URL to a desired Icon.
        * In-app, you can also define `iconSize`, by giving the desired size in pixels.

An example of in-app Display Rules using only "Icon" Display Rules could look like this:

```json
{
    "displaySetting": {
        "iconVisible": true,
        "zoomFrom": 16.0,
        "zoomTo": 22.0,
        "icon": "https://app.mapsindoors.com/mapsindoors/cms/assets/icons/misc/default-marker.png?71488",
        "iconSize": {
            "width": 20.0,
            "height": 20.0
        },
    }
}
```

### Label

![display-rules-label](/assets/map/display-rules/Display_Rules_Label.png)

The "Label" section contains options related to the appearance of the Label. The Label is the text associated with the Location on the map, often positioned next to the Icon.

1. **Visibility** - Controls whether the Label is visible on the map.
    * The system will accept a Boolean here, so either `true` or `false`.
1. **Zoom from** - Sets the minimum Zoom Level at which the Label is visible.
    * The value should be a number between 1 and 22, with 1 being very far away, and 22 being very close (22 not available for all Solutions). In a general use case, most users will only need values between 15 and 22.
    * If you are developing using the JavaScript SDK for Google Maps, the value must be an integer. If you are developing for Android or iOS, or using a different map provider, the value may be fractional.
1. **Zoom to** - Sets the maximum Zoom Level at which the Label is visible.
    * The value should be a number between 1 and 22, with 1 being very far away, and 22 being very close (22 not available for all Solutions). In a general use case, most users will only need values between 15 and 22.
    * If you are developing using the JavaScript SDK for Google Maps, the value must be an integer. If you are developing for Android or iOS, or using a different map provider, the value may be fractional.
1. **Template** - Controls the information the Label should contain. Only applies to the CMS, any change at runtime will overwrite the information set up by the Template.
    * Location Name - Only displays the name of the Location.
    * External ID - Only displays the External ID of the Location.
    * External ID & Location Name - Displays both the External ID and the Location Name, with the External ID first.
    * Location Name & External ID - Displays both the Location Name and the External ID, with the Location Name first.
1. **Max width** - Specify how wide (in pixels) a Label can be before forcing a line-break.
    * A value of `0` will ensure no line-breaks for this label.

An example of in-app Display Rules using only "Label" Display Rules could look like this:

```json
{
    "displaySetting": {
        "labelVisible": true,
        "label": "{{name}}",
        "labelZoomFrom": 16.0,
        "labelZoomTo": 22.0,
        "labelMaxWidth": 0,
    }
}
```

### Polygon

![display-rules-polygon](/assets/map/display-rules/Display_Rules_Polygon.png)

Polygons are independent from tiles. Tiles are drawn by MapsPeople and overlaid onto the mapping provider. Polygons are an overlay with customisable attributes that are then overlaid on top of the Tiles. Therefore, while you can edit the "Polygon" attributes of a Location connected to a Tile, be that an Area or a Room, you need to account for attributes such as the opacity of the Polygon in the resulting appearance. It is not currently possible to override the appearance of Tiles.

The "Polygon" section contains options related to the appearance of the Polygon.

1. **Visibility** - Controls whether the Polygon is visible on the map.
    * The system will accept a Boolean here, so either `true` or `false`.
1. **Zoom from** - Sets the minimum Zoom Level at which the Polygon is visible.
    * The value should be a number between 1 and 22, with 1 being very far away, and 22 being very close (22 not available for all Solutions). In a general use case, most users will only need values between 15 and 22.
    * If you are developing using the JavaScript SDK for Google Maps, the value must be an integer. If you are developing for Android or iOS, or using a different map provider, the value may be fractional.
1. **Zoom to** - Sets the maximum Zoom Level at which the Polygon is visible.
    * The value should be a number between 1 and 22, with 1 being very far away, and 22 being very close (22 not available for all Solutions). In a general use case, most users will only need values between 15 and 22.
    * If you are developing using the JavaScript SDK for Google Maps, the value must be an integer. If you are developing for Android or iOS, or using a different map provider, the value may be fractional.
1. **Stroke color** - Controls the stroke color of the Polygon.
    * In the CMS, you can select a color using the color picker displayed when clicking the color input field.
    * If setting the color in-app, the value provided must be in 6-digit HEX code (eg. #3071D9).
1. **Stroke width** - Controls the stroke width (in pixels) of the Polygon.
1. **Stroke opacity** - Controls the stroke opacity of the Polygon.
    * The value here should be between 0 and 1, for example a value of 1 gives 100% opacity, 0.2 gives 20% opacity, etc.
1. **Fill color** - Controls the fill color of the Polygon.
    * In the CMS, you can select a color using the color picker displayed when clicking the color input field.
    * If setting the color in-app, the value provided must be in 6-digit HEX code (eg. #3071D9).
1. **Fill opacity** - Controls the fill opacity of the Polygon.
    * The value here should be between 0 and 1, for example a value of 1 gives 100% opacity, 0.2 gives 20% opacity, etc.

An example of in-app Display Rules using only "Polygon" Display Rules could look like this:

```json
{
    "displaySetting": {
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
}
```

Putting all this together, a sample set of Display Rules for a given Type could look like this:

```json
{
    "displaySetting": {
        "visible": true,
        "iconVisible": true,
        "zoomFrom": 16.0,
        "zoomTo": 22.0,
        "icon": "https://app.mapsindoors.com/mapsindoors/cms/assets/icons/misc/default-marker.png?71488",
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
| labelMaxWidth | double | `>= 0` | In pixels. `0` represents an unlimited max length. |
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

See the [iOS guide to Map Styling]({{ site.url }}/content/map/map-styling/map-styling-ios).

## How to Use Display Rules in Practice in JS SDK

See the [JS SDK guide to Using Display Rules in Practice]({{ site.url }}/content/map/map-styling/display-rules-practice).
