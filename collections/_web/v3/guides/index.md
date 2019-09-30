---
title: How to use the MapsIndoors Web SDK v3
guide_title: guides
layout: guide
nav_weight: 100
published: true
date: 2019-09-30
permalink: /web/v3/guides/
---

## Using Events

MapsIndoors uses the Google Maps built-in event handling system, so listening for event on various object is straight-forward. Here are some examples.

```javascript
google.maps.event.addListener(myMapsIndoors, "ready", function (result) {
   console.log(result);
});

google.maps.event.addListener(myMapsIndoors, 'building_changed', function () {
   console.log(this);
});

google.maps.event.addListener(myMapsIndoors, 'floor_changed', function () {
 console.log(this);
});

google.maps.event.addListener(myMapsIndoors, 'click', function () {
 console.log(this);
});

google.maps.event.addListener(marker, 'click', function () {
   console.dir(this);
});
```

The event names and their targets are as follows:

| Event Name | Target Object of Class | Returns |
| --- | --- | --- |
| "ready" | MapsIndoors | MapsIndoors object |
| "building_changed" | MapsIndoors | Current building object |
| "floor_changed" | MapsIndoors | Current floor index |
| "location_click" | MapsIndoors | Selected location | 	 	 


## Using the Display rules

Display rules use the following structure:

```javascript
{
   from: zoom_level,             // Optional - defaults to 0
   to: zoom_level,               // Optional - defaults to 21
   icon: google.maps.icon|"url"  // Optional - defaults to current location icon url (dynamically set)
   visible: boolean              // Optional - defaults to true
};
```

To add your own custom icons for locations (point-of-interest, rooms, etc.), setup display rule(s) and make it known to your MapsIndoors object.

```javascript
var googleMap = new google.maps.Map(...);
var mapsIndoors = new mapsindoors.MapsIndoors({map: googleMap});

mapsIndoors.setDisplayRule("info", {from:16, icon:"http://myiconhost.com/info.png" });
```

Display rules are based on POI/Location types. Every location has one type property `location.properties.type`. A set of types is defined/used in the MapsIndoors CMS. The current list of types can be listed using the LocationsService:

```javascript
mapsindoors.SolutionService.getSolution().then(function(solution) {
    var types = solution.types;
});
```

Two of these types could be of name “Parking” and “Office”, which indicates that these types are used for parking lots and offices respectively. In most cases, you might want to display parking icons on zoom-levels above office icons. Based on this intention you could set these rules:

```javascript
mapsIndoors.setDisplayRule("parking", { from:16 }); // Using default type icon
mapsIndoors.setDisplayRule("office", { from:20 });  // Using default type icon
```


## Searching fo Locations and Displaying them on a Map

Use the location service in conjunction with the filter method on a MapsIndoors instance to find and highlight different elements of the MapsIndoors content. An example is given below. Note: The example shows all options, but only one of building, venue, locationId and location is necessary.

```javascript
var googleMap = new google.maps.Map(...);

var mapsIndoors = new mapsindoors.MapsIndoors({map:googleMap});

mapsindoors.LocationService.getLocations(
   {
                
         q: "lounge",         // Optional - Search for matches in location name or aliases
         building: "34",      // Optional - Fetch from specific building, using the administrative id of the building
         venue: "VenueA",     // Optional - Fetch from specific venue, using name of venue
         categories: ["MEETINGROOM,LOUNGEAREAS"]    // Optional - Fetch from specific categories, using the category keys
         floor: 1,                     // Optional - Fetch from 1st floor only
         take: 10,                     // Optional - Fetch only 10 locations
         skip: 10,                     // Optional - Skip first 10 in result
         near: {lat:57.5, lng: 12.9}   // Optional - Sort by proximity to geographic point
         radius: 50           // Optional - Fetch only nearest within meters from near
         orderBy: "name"      // Optional - Sort by name (possible values are Name, Floor
                              // Building, Venue, Type and RoomId)
    }).then(function(locations) {
        //get all the ids
        let filter = locations.map(location => location.id);
        mapsIndoors.filter(filter, true);
    });
```

### Getting a polygon from a location

Some locations in MapsIndoors can have additional polygon information. These polygons can be used to render a room or area in a special way or make geofences, calculating whether another point or location is contained within the polygon. If a `location` has polygons, these can be drawn onto the map this way:

```javascript
var polygon = new google.maps.Polygon();

function drawPolygon(location) {
    if (location.geometry && location.geometry.type === "Polygon") {
        var paths = location.geometry.coordinates.map(function (ring) {
            return ring.map(function (coordinate) {
                return { lat: coordinate[1], lng: coordinate[0] };
            });
        });

        polygon.setOptions({
            map: googleMap,
            paths: paths
        });
    }
}
```

As demonstrated above, a polygon's outer ring/path as well as holes are arranged as [longitude, latitude] pairs. As not all locations have polygons, the polygon array may be empty. On the contrary, some locations, like entire building floors, might have more than polygon.

## Map Rendering

### Setting the floor

Sets the current visible floor. This will make visible the corresponding floorplans and the icons on top of it. If the floor index provided does not correlate to any building floor, then the “nearest” floor will be activated. E.g. providing `setFloor(4)` on a three story building (with floor-indexes 0, 1, 2) will make the topmost floorplan visible (with floor-index 2). 

Although floors may have names (“G” for 0, “M1” for 1, “M2” for 2 etc.) you need to set the floor using the index-value.

```javascript
myMapsIndoors.setFloor(4)
```

### Getting the floor

Returns current floor index number (integer), e.g. 0 for ground floor, -1 for basement.

```javascript
myMapsIndoors.getFloor()
```

### Resetting the map

Resets the map to the appearance defined by the provided display rules. Displayed floor, map center and zoom-level will remain untouched.

```javascript
myMapsIndoors.reset()
```

## Using the Directions Renderer

Constructor. Takes directions render options as required parameter.

```javascript
var directionsRenderer = new mapsindoors.DirectionsRenderer(
{
   mapsindoors: mapsIndoors,     // The MapsIndoors instance
}
);
```
### Setting the Options of the Directions Renderer

Customizing style of route polylines is done using the `setOptions` method.  

```javascript
var directionsRenderer = new mapsindoors.DirectionsRenderer();

directionsRenderer.setOptions(
{
   strokeColor: string                                 // The stroke color. All CSS3 colors are supported except for extended named colors.
   strokeOpacity: number                               // The stroke opacity between 0.0 and 1.0.
   strokeWeight: number                                // The stroke width in pixels.
   visible: boolean                                    // Whether this polyline is visible on the map. Defaults to true.
   zIndex: number                                      // The rendering index in relation to other polylines
}
);
```

### Getting a Route and Rendering it on a Map

Renders the route result using the applied render options. Used in conjunction with a DirectionsService, this is an example of displaying a route on the map.

```javascript

var directionsService = new mapsindoors.DirectionsService();
var renderer = new mapsindoors.DirectionsRenderer({ mapsIndoors: myMapsIndoors });

directionsService.getRoute(
   {
      origin: {
         lat: 55.687791059149376,
         lng: 12.571580452361996,
         floor: 0
      },
      destination: {
         lat: 55.687476568798,
         lng: 12.568619293609554,
         floor: 0
      },
      mode: "WALKING"
      avoidStairs: true
   }
).then(function (result) {
   renderer.setRoute(result.routes[0]);
});
```

### Clearing a Route Rendering

Clear the current route rendering.

```javascript
directionsRenderer.setRoute(null);
```
## Using the Directions Service

Constructor. Instantiates a service that can be used for making route requests.

```javascript
route( request:DirectionsRequest )
```

Request routing from a point to another. The request object aligns to the [Google Maps V3 API DirectionsRequest object specification](https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRequest), but with floor properties on origin and destination. Furthermore, avoidStairs boolean can be set to request routes for both disabled users and users without disabilities.

```javascript
var directionsService = new mapsindoors.DirectionsService();

directionsService.route(
{
   origin: {lat:57.5, lng: 12.9, floor: 0},
   destination: {lat:57.5, lng: 12.9, floor: 0},
   // MapsIndoors options
   avoidStairs: true,
   // Google Directions options
   travelMode: google.maps.TravelMode,
   transitOptions: {...},
   avoidFerries: true,
   ...
}
).then(function(routeResult) {
   // Result will contain possible routes or none if routing failed.
});
```

## Using the Location Service

Constructor.

```javascript
LocationsService()
```
### Getting the Categories

Get the unique categories and their translation used by published locations. Typically, this can be used to build a menu for list or map filtering of locations.

```javascript
var locations = new mapsindoors.LocationsService();

locations.getCategories().then(function(categories) {
   // Returns localized category list with structure { office: "Office", ... } e.g. for english.
});
```
### Getting Icons from Location Types

A set of location types is defined for every MapsIndoors solution. The current list of types can be retrieved like this:

```javascript
var solutionData = new mapsindoors.SolutionService();

solutionData.getTypes().then(function(types) {
   // returns array of types with format { name:string, displayRule: { icon:'https://icon.url' } }
   console.log(types[0].displayRule.icon);
});
```

### Getting the Location Details

Get the full details object of a single location. Pass the MapsIndoors id string present in any location object at `location.id`.

```javascript
var locations = new mapsindoors.LocationsService();
// Get all locations
locations.getLocations().then(function(data) {
   locations.getLocationDetails(data[0].id).then(function(detailedData) {
      // Returns a full-detail location object
   });
});
```

## Map Styles

A MapsIndoors map may have multiple styles/layouts. This is how a mapStyle object is structured. 

```javascript
let mapStyle = {
    folder: 'styleFolder', 
    displayName: 'styleDisplayName' // Optional when created
}
```

When a new instance of MapsIndoors is created, it is created with the google map as an argument. It is also possible to set the map style in the constructor.

```javascript
let mapsIndoors = new mapsindoors.MapsIndoors({
    map: googleMap,
    mapStyle: MapStyle
});
```

It is also possible to set or get the map style at a later time, after MapsIndoors has been instantiated.

```javascript
google.maps.event.addListener(mapsIndoors, 'ready', function () {
    /* Get all avalible styles. */
    let styles = mapsIndoors.getMapStyles();
    /* Set the first style in the list as the one to be shown on the map. */
    mapsIndoors.setMapStyle(styles[0]);
    /* Get the current map style. */
    let style = mapsIndoors.getMapStyle();
});
```
