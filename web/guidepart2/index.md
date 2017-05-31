---
title: MapsIndoors for Web - Part 2
layout: page
---

## Trying the Showcase Web App

A [showcase app is available on GitHub](https://github.com/MapsIndoors/Showcase-Web-App), free to use and adapt to your needs.

### To try it out right away:
Make sure nodejs, npm and gulp is installed on your system
Using a terminal/shell in the project folder, run the following commands:

* npm install -g browser-sync
* gulp build
* browser-sync start --server
* If on Windows and prompted, allow server to use your PC network
* Open your browser at http://localhost:3000/app (or whatever port browser-sync chooses per default)

## Create a Search and Suggestions box

If you need to facilitate search functionality to your MapsIndoors solution, you can use the Suggestions UI component. Add the suggestions stylesheet as a starting point for the design.

```html
<link href="https://app.mapsindoors.com/mapsindoors/js/sdk/ui/Suggestions.css" rel="stylesheet" />
```

Add the following html somewhere in your document.

```html
<div id="search-box" class="mapsindoors search-container">
    <input type="search" placeholder="Search rooms and facilites..." class="mapsindoors search">
    <ul class="mapsindoors suggestions"></ul>
</div>
```

Given the above code, here is a simple example on how to use the component.

```javascript
// Div containing an input search element
var searchDiv = document.getElementById('search-box');

// If needed, insert the div element as a map control
googleMap.controls[google.maps.ControlPosition.TOP_LEFT].push(searchDiv);

// Instantiates suggestions object
var suggestions = new mapsindoors.Suggestions(searchDiv);

// Listen for user interaction - returns the selected location
google.maps.event.addListener(suggestions, 'location_changed', function (location) {
    console.dir(location);
});
```  


### Setting the floor

Sets the current visible floor. This will make visible the corresponding floorplans and the icons on top of it. If the floor index provided does not correlate to any building floor, then the “nearest” floor will be activated. E.g. providing `setFloor(4)` on a three story building (with floor-indexes 0, 1, 2) will make the topmost floorplan visible (with floor-index 2).
Although floors may have names (“G” for 0, “M1” for 1, “M2” for 2 etc.) you need to set the floor using the index-value.

```javascript
mapsIndoors.setFloor(4)
```

### Getting the floor

Returns current floor index number (integer), e.g. 0 for ground floor, -1 for basement.

```javascript
mapsIndoors.getFloor()
```

## Using the directionsRenderer

Constructor. Takes directions render options as required parameter.

```javascript
var directionsRenderer = new mapsindoors.DirectionsRenderer(
{
   map: googleMap,               // The Google map on which to render
   mapsindoors: mapsIndoors,     // The MapsIndoors instance
   suppressMarkers: boolean,     // Optional - If true, action/step point markers will not be rendered
   directions: directionsObject, // Optional - the actual directions object containing the directions data
   legIndex: number              // Optional - the part of the route which should render (0, 1, 2, n), defaults to 0. Highest index is directionsObject.legs.length - 1.
}
);
```
### setting the style of the direction renderer

Sets the directions rendering style. For twaeking style of route polylines we use the [Google Maps v3 API PolylineOptions](https://developers.google.com/maps/documentation/javascript/reference#PolylineOptions) format. The methods first parameter refers to a style type that can be either the travel mode for outdoor routes or the type of way for indoor routes. The possible style types include:

* default – The default style, will be used for all non-specified styles.
* driving – Style for driving travel mode.
* walking – Style for walking travel mode.
* transit – Style for transit travel mode.
* bicycling – Style for transit travel mode.
* footway – Style for regular indoor ways.
* steps – Style for steps/stairs.
* elevator – Style for elevators.
* escalator – Style for elevators.
* travellator – Style for travellators.
* residential – Style for roads at a venue.

```javascript
var directionsRenderer = new mapsindoors.DirectionsRenderer();

directionsRenderer.setStyle('default',
{
   clickable:  boolean                                 // Indicates whether this Polyline handles mouse events. Defaults to true.
   icons: Array<IconSequence>                          // The icons to be rendered along the polyline.
   path: MVCArray<LatLng>|Array<LatLng|LatLngLiteral>  // The ordered sequence of coordinates of the Polyline. This path may be specified using either a simple array of LatLngs, or an MVCArray of LatLngs. Note that if you pass a simple array, it will be converted to an MVCArray Inserting or removing LatLngs in the MVCArray will automatically update the polyline on the map.
   strokeColor: string                                 // The stroke color. All CSS3 colors are supported except for extended named colors.
   strokeOpacity: number                               // The stroke opacity between 0.0 and 1.0.
   strokeWeight: number                                // The stroke width in pixels.
   visible: boolean                                    // Whether this polyline is visible on the map. Defaults to true.
   zIndex: number                                      // The rendering index in relation to other polylines
}
);
```
### Setting the direction

Renders the route result using the applied render options. Used in conjunction with a DirectionsService, this is an example of displaying a route on the map.

```javascript
var googleMap = new google.maps.Map(...);

var directionsService = new mapsindoors.DirectionsService();
var renderer = new mapsindoors.DirectionsRenderer({ map: googleMap });

directionsService.route(
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
      travelMode: "WALKING"
      avoidStairs: true
   }
).then(function (result) {
   renderer.setDirections(result);
});
```
### Getting the location using queries

Get locations from MapsIndoors using a query object (optional). With no query parameter, all published locations will be fetched.

```javascript
var locations = new mapsindoors.LocationsService();

locations.getLocations(
{
   q: "lounge",         //Search for matches in location name or aliases
   building: "34",      //Fetch from specific building, using the administrative id of the building
   venue: "VenueA",     //Fetch from specific venue, using name of venue
   floor: 1,                     //Fetch from 1st floor
   take: 10,                     //Fetch only 10 locations
   skip: 10,                     //Skip first 10 in result
   near: {lat:57.5, lng: 12.9}   //Sort by proximity to geographic point
   radius: 50,           //Fetch only nearest within meters from near
   orderBy: "name"      //Sort by name (possible values are Name, Floor,
                        //Building, Venue, Type and RoomId)
}
).then(function(data) {
   // returns an array of locations that matches the criteria
});
```
### Clearing

Clear the current route rendering.

```javascript
directionsRenderer.clear();
```
## Using the directionsService

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

## Using the LocationService

Constructor.

```javascript
LocationsService()
```
### Getting the categories

Get the unique categories and their translation used by published locations. Typically, this can be used to build a menu for list or map filtering of locations.

```javascript
var locations = new mapsindoors.LocationsService();

locations.getCategories().then(function(categories) {
   // Returns localized category list with structure { office: "Office", ... } e.g. for english.
});
```
### Getting the types

A set of location types is defined for every MapsIndoors solution. The current list of types can be retrieved like this:

```javascript
var locations = new mapsindoors.LocationService();

locations.getTypes().then(function(types) {
   // returns array of types with format { name:string, icon:string }
});
```

### Getting the location details

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
