---
title: MapsIndoors for Web - Reference Guide

---

### Table of Contents

-   [MapsIndoors][1]
    -   [getBuilding][2]
    -   [fitBuilding][3]
    -   [filter][4]
    -   [setBuildingOutlineOptions][5]
    -   [getBuildingOutlineOptions][6]
    -   [setDisplayRule][7]
    -   [getDisplayRule][8]
    -   [setFloor][9]
    -   [getFloor][10]
    -   [setMap][11]
    -   [getMap][12]
    -   [setVenue][13]
    -   [getVenue][14]
    -   [fitVenue][15]
    -   [setLabelOptions][16]
    -   [getLabelOptions][17]
-   [DataLayer][18]
-   [DirectionsRenderer][19]
    -   [pLine][20]
-   [FloorSelector][21]
-   [AppConfig][22]
-   [MenuItem][23]
-   [Building][24]
-   [BuildingOutlineOptions][25]
-   [Category][26]
-   [DisplayRule][27]
-   [LabelOptions][28]
-   [Location][29]
-   [MapsIndoorsOptions][30]
-   [Solution][31]
-   [Type][32]
-   [Venue][33]

## MapsIndoors

Creates an instance of MapsIndoors.

**Parameters**

-   `opts` **[MapsIndoorsOptions][34]** 

### getBuilding

Gets the building that currently is in focus

Returns **[Building][35]** Building

### fitBuilding

Fits the building's geometry in the map's bounding box

**Parameters**

-   `building` **[Building][35]** 

Returns **[Promise][36]** 

### filter

Filter locations on the map by array of ids

**Parameters**

-   `filter` **[Array][37]&lt;[string][38]>** An array of location ids to filter the map by.
-   `fitView` **[boolean][39]** Change the map viewport to fit the current filter.

### setBuildingOutlineOptions

Sets the building outline options

**Parameters**

-   `options` **[BuildingOutlineOptions][40]** 

### getBuildingOutlineOptions

Gets the building outline options

Returns **[BuildingOutlineOptions][40]** 

### setDisplayRule

Set the display rule

**Parameters**

-   `target` **[string][38]** Can be a locaiton id or a type name.
-   `displayRule` **[DisplayRule][41]** 

### getDisplayRule

**Parameters**

-   `feature` **[Location][42]** 

Returns **[DisplayRule][41]** 

### setFloor

Sets the floor

**Parameters**

-   `floor` **[string][38]** 

### getFloor

Gets the floor

Returns **[string][38]** floor

### setMap

Sets the Google Maps instance

**Parameters**

-   `map` **google.maps.Map** [google.maps.Map][43]

### getMap

Gets the Google Maps instance

Returns **google.maps.Map** 

### setVenue

Sets the venue

**Parameters**

-   `venue` **[Venue][44]** 

### getVenue

Gets the venue

Returns **[Venue][44]** Venue

### fitVenue

Changes the map view to show the default venue or pass in a venue ID to go to another venue

**Parameters**

-   `venue`  
-   `venueId` **[string][38]** venue ID

### setLabelOptions

**Parameters**

-   `opts` **[LabelOptions][45]** 

### getLabelOptions

Gets label's options

Returns **[LabelOptions][45]** 

## DataLayer

**Extends google.maps.MVCObject**

Data layer

## DirectionsRenderer

**Extends google.maps.MVCObject**

Directions Renderer

### pLine

The polyline used to render the current route leg on the map

## FloorSelector

Floor selector

## AppConfig

mapsindoors.AppConfig

Type: [Object][46]

**Properties**

-   `appSettings` **[string][38]** 
-   `menuInfo` **[Object][46]** 
    -   `menuInfo.fabmenu` **[Array][37]&lt;[MenuItem][47]>** 
    -   `menuInfo.mainmenu` **[Array][37]&lt;[MenuItem][47]>** 
-   `translations` **[Object][46]** 
-   `venueImages` **[Object][46]&lt;[string][38], [string][38]>** 

## MenuItem

mapsindoors.MenuItem

Type: [Object][46]

**Properties**

-   `categoryKey` **[string][38]** 
-   `iconUrl` **[string][38]** 
-   `menuImageUrl` **[string][38]** 
-   `name` **[string][38]** 

## Building

mapsindoors.Building

Type: [Object][46]

**Properties**

-   `administrativeId` **[string][38]** 
-   `anchor` **geojson.Point** [GeoJSON Points][48]
-   `buildingInfo` **[Object][46]&lt;{string: language, string: [name][49]}>** 
-   `createdAt` **dateTime** Only pressent in the detailed format
-   `floors` **[Object][46]&lt;[number][50], [Object][46]>** 
-   `geometry` **geojson.Geometry** [GeoJSON Geometry][51]
-   `graphId` **[string][38]** 
-   `id` **[string][38]** 
-   `lastModified` **dateTime** Only pressent in the detailed format

## BuildingOutlineOptions

mapsindoors.BuildingOutlineOptions

**Properties**

-   `strokeColor` **[string][38]?** 
-   `strokeWeight` **[number][50]?** 
-   `strokeOpacity` **[number][50]?** 

## Category

mapsindoors.Category

Type: [Object][46]

**Properties**

-   `key` **[string][38]** 
-   `value` **[string][38]** 

## DisplayRule

mapsindoors.DisplayRule

Type: [Object][46]

**Properties**

-   `icon` **[string][38]** 
-   `label` **[string][38]** 
-   `labelZoomFrom` **[number][50]** 
-   `labelZoomTo` **[number][50]** 
-   `visible` **[boolean][39]** 
-   `zoomFrom` **[number][50]** 
-   `zoomTo` **[number][50]** 

## LabelOptions

mapsindoors.LabelOptions

**Properties**

-   `maxLength` **[number][50]** Maximum numbers of charectors to display. If exceeded the label will be truncated and "..." will be added to the end.
-   `pixelOffset` **google.maps.Size** For offsetting the label.
-   `style` **[object][46]** 
    -   `style.align` **[string][38]** left, center, right
    -   `style.color` **[string][38]** hex or rgba color
    -   `style.fontFamily` **[string][38]** 
    -   `style.fontSize` **[string][38]** size in px
    -   `style.fontWeight` **[string][38]** 
    -   `style.strokeStyle` **[string][38]** 
    -   `style.strokeWeight` **[number][50]** 
    -   `style.shadowBlur` **[number][50]** 
    -   `style.shadowColor` **[string][38]** hex or rgba color

## Location

-   **See: [GeoJSON Feature][52]**

mapsindoors.Location [GeoJSON Feature][52]

Type: geojson.Feature

**Properties**

-   `id` **[string][38]** 
-   `type` **[string][38]** 
-   `geometry` **geojson.Geometry** [GeoJSON Geometry][51]
-   `properties` **[Object][46]** 
    -   `properties.aliases` **[Array][37]&lt;[string][38]>** 
    -   `properties.anchor` **[string][38]** 
    -   `properties.building` **[string][38]** 
    -   `properties.categories` **[Object][46]&lt;[string][38], [string][38]>** 
    -   `properties.displayRule` **[Object][46]** 
    -   `properties.floor` **[string][38]** 
    -   `properties.floorName` **[string][38]** 
    -   `properties.imageURL` **[string][38]** 
    -   `properties.locationType` **[string][38]** 
    -   `properties.mapElement` **[string][38]** 
    -   `properties.name` **[string][38]** 
    -   `properties.roomId` **[string][38]** 
    -   `properties.type` **[string][38]** 
    -   `properties.venue` **[string][38]** 

## MapsIndoorsOptions

mapsindoors.MapsIndoorsOptions

**Properties**

-   `map` **google.maps.Map** [google.maps.Map][43]
-   `venue` **[string][38]?** 
-   `buildingOutlineOptions` **[BuildingOutlineOptions][40]?** 
-   `labelOptions` **[LabelOptions][45]?** 

## Solution

mapsindoors.Solution

Type: [Object][46]

**Properties**

-   `availableLanguages` **[Array][37]&lt;[string][38]>** 
-   `createdAt` **[string][38]** 
-   `createdBy` **[string][38]** 
-   `customerId` **[string][38]** 
-   `defaultLanguage` **[string][38]** 
-   `expirationDate` **[string][38]** 
-   `id` **[string][38]** 
-   `implementationType` **[string][38]** 
-   `lastModified` **[string][38]** 
-   `lastModifiedBy` **[string][38]** 
-   `locationTemplate` **[string][38]** 
-   `mapClientUrl` **[string][38]** 
-   `minimumVersion` **[string][38]** 
-   `modules` **[Array][37]&lt;[string][38]>** 
-   `name` **[string][38]** 
-   `types` **[Array][37]&lt;type>** 
-   `whitelabel` **[boolean][39]** 

## Type

mapsindoors.Type

Type: [Object][46]

**Properties**

-   `displayRule` **[DisplayRule][41]** 
-   `icon` **[string][38]** 
-   `name` **[string][38]** 
-   `searchkeys` **[Array][37]&lt;[string][38]>** 

## Venue

Type: [Object][46]

**Properties**

-   `anchor` **geojson.Point** [GeoJSON Points][48]
-   `createdAt` **dateTime** Only pressent in the detailed format
-   `defaultFloor` **[string][38]** 
-   `entryPoints` **[Array][37]&lt;geojson.Point>** Only pressent in the detailed format
-   `floorNames` **[Object][46]&lt;[string][38], [string][38]>** 
-   `geometry` **geojson.Geometry** [GeoJSON Geometry][51]
-   `graphId` **[string][38]** 
-   `id` **[string][38]** 
-   `lastModified` **dateTime** Only pressent in the detailed format
-   `name` **[string][38]** 
-   `solutionId` **[string][38]** 
-   `styles` **[Array][37]&lt;{string: displayName, string: folder}>** 
-   `tilesUrl` **[string][38]** 
-   `venueInfo` **[Object][46]** 
    -   `venueInfo.aliases` **[string][38]** 
    -   `venueInfo.language` **[string][38]** 
    -   `venueInfo.name` **[string][38]** 

[1]: #mapsindoors

[2]: #getbuilding

[3]: #fitbuilding

[4]: #filter

[5]: #setbuildingoutlineoptions

[6]: #getbuildingoutlineoptions

[7]: #setdisplayrule

[8]: #getdisplayrule

[9]: #setfloor

[10]: #getfloor

[11]: #setmap

[12]: #getmap

[13]: #setvenue

[14]: #getvenue

[15]: #fitvenue

[16]: #setlabeloptions

[17]: #getlabeloptions

[18]: #datalayer

[19]: #directionsrenderer

[20]: #pline

[21]: #floorselector

[22]: #appconfig

[23]: #menuitem

[24]: #building

[25]: #buildingoutlineoptions

[26]: #category

[27]: #displayrule

[28]: #labeloptions

[29]: #location

[30]: #mapsindoorsoptions

[31]: #solution

[32]: #type

[33]: #venue

[34]: #mapsindoorsoptions

[35]: #building

[36]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise

[37]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[38]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[39]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[40]: #buildingoutlineoptions

[41]: #displayrule

[42]: #location

[43]: https://developers.google.com/maps/documentation/javascript/reference/map#Map

[44]: #venue

[45]: #labeloptions

[46]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[47]: #menuitem

[48]: https://tools.ietf.org/html/rfc7946#appendix-A.1

[49]: https://developer.mozilla.org/

[50]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[51]: https://tools.ietf.org/html/rfc7946#appendix-A

[52]: https://tools.ietf.org/html/rfc7946#section-3.2
