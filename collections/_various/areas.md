---
title: Areas feature
permalink: /areas/
published: true
date: 2020-06-22
---

Areas are of the Location kind, the same way a POI and a Room is. A POI is a *single-point Location*, while a Room is a *multi-point Location* (i.e. a "polygon"). Think of an Area as a *multi-point POI*, as it does not affect the routing (same as POIs), but there is a polygon (like Rooms).

Areas can be used to indicate a portion of a Floor that is not defined by walls, but is distinct in another way. It could be used to show where the Sales department is placed, where Gold-level exhibitors are located in your exhibition hall, where the social distance markers around a reception desk are etc.

## Displaying Areas in Tiles

If you have the feature enabled for your Solution, when you choose a color for an Area, it will be baked into the tiles. Technically, you provide a color in the Display Rule for that Area, and you can do this via both the CMS and the Integration API.

## Routing

Areas do not have any influence on the routing network for your Solution. Since Areas are not like Rooms, they do not have obstructing walls, and your app's user will get directions across the Areas.

## Support for Areas

### Creating Areas

You can create Areas via the Integration API and the MapsIndoors CMS. You can also set the color in the Display Rule for the Area in both places.

### Presenting Areas

<small style="color: #707a89;">Last updated June 22, 2020.</small>

All Area geometry data is currently sent to the applications from the SDKs, so it is possible to render Areas on the map in your custom-developed app.

However, the corresponding Display Rule information is not sent to the app, so the color set for an Area is not available yet for the app to display.

Today, the SDKs can not render the Areas, but this work is coming at a later point. At that time, it will need to be enabled for your Solution if the SDK should render the Area or not, so there is no conflict when possibly also displaying the Areas in the Tiles.
