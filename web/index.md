---
title: MapsIndoors for Web - Getting started
layout: page
---

## Script Loading

Include the following scripts in your document. MapsIndoors depend on jQuery and Google Maps API v3, so if it’s not present on script load, MapsIndoors will not be able to initialize.
If you need to use a floor selector (most projects do), just add a css reference as in the sample. This will provide a basic CSS-layout for the floor selector.

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?libraries=geometry"></script>
<script type="text/javascript" src="https://app.mapsindoors.com/mapsindoors/js/sdk/MapsIndoors-1.1.1.js?solutionId=MY_MAPSINDOORS_SOLUTION_ID"></script>
// Load css for default floor selector
<link href="https://app.mapsindoors.com/mapsindoors/js/sdk/ui/FloorSelector.css" type="text/css" rel="stylesheet" />
```

## Setting up a map

This is an example of setting up a MapsIndoors enabled Google map. First, as always when setting up Google Maps, create a div with defined height and width.

```html
<div id="map" style="width:600px;height:600px"></div>
```

Then add the following script code somewhere on your HTML page.

```javascript
var myGoogleMap, myMapsIndoors;

var init = function () {

   // Setup google map
   myGoogleMap = new google.maps.Map(document.getElementById('map'), { center: { lat: 57.085809, lng: 9.9573899 }, zoom: 17 });

   // Setup MapsIndoors
   myMapsIndoors= new mapsindoors.MapsIndoors({ map: myGoogleMap });

   // Add a floor selector
   var div = document.createElement('div');
   var floorSelector = new mapsindoors.FloorSelector(div, myMapsIndoors);
   myGoogleMap.controls[google.maps.ControlPosition.RIGHT_TOP].push(div);

};

google.maps.event.addDomListener(window, 'load', init);
```


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

google.maps.event.addListener(myMapsIndoors, 'location_click', function () {
 console.log(this);
});

google.maps.event.addListener(directionsRenderer, 'before_action_rendered', function () {
   console.log(arguments);
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

## Create an Infobox

Most often you might want to display location content when a user clicks or taps on an icon. You can use the simple Infobox UI component for this. Add the infobox stylesheet as a starting point for the design.

```html
<link href="https://app.mapsindoors.com/mapsindoors/js/sdk/ui/Infobox.css" rel="stylesheet" />
```

Provide the following html code in your document. For templating we use [Markup.js](https://github.com/adammark/Markup.js/).

```html
<div id="infobox" class="mapsindoors infobox">
   <a data-close>x</a>
   <table>
      <tr><td><i class="fa fa-map-marker"></i></td><td><h3>{{ if properties.roomid properties.roomid }} {{ properties.name }}</h3></td></tr>
      <tr><td><i class="fa fa-building-o"></i></td><td>Building {{ properties.building }}</td></tr>
      <tr><td><i class="fa fa-arrows-v"></i></td><td>Floor {{ properties.floor }}</td></tr>
      <tr><td><i class="fa fa-info"></i></td><td>{{ if properties.description properties.description }}</td></tr>
   </table>
</div>
```

Here is an example on how to setup the component.

```javascript
// Div containing an input search element
var infoDiv = document.getElementById('infobox');

// Optionally insert the Infobox UI-component into google maps
googleMap.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(infoDiv);
// Instantiate infobox
var infobox = new mapsindoors.Infobox(infoDiv);

locationsService.getLocationDetails("SOME-MAPSINDOORS-ID").then(function (location) {
   // Show location content in infobox
   infobox.show(location);
   // if <a data-close>x</a> is present in your infobox element, user can close the infobox, or it can be closed programmatically
   setTimeout(function() {
      infobox.close();
   }, 5000);
});
```
## Using the mapsIndoors

Constructor.

```javascript
var googleMap = new google.maps.Map(...);

var mapsIndoors = new mapsindoors.MapsIndoors(
   {
      map: googleMap
   }
)
```
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

Display rules are based on POI/Location types. Every location has one type `propertylocation.properties.type`. A set of types is defined/used in the MapsIndoors CMS. The current list of types can be listed using the LocationService:

```javascript
var locations = new mapsindoors.LocationService();

locations.getTypes().then(function(types) {
   // returns array of types with format { name:string, icon:string }
});
```

Two of these types could be of name “Parking” and “Office”, which indicates that these types are used for parking lots and offices respectively. In most cases, you might want to display parking icons on zoom-levels above office icons. Based on this intention you could set these rules:

```javascript
mapsIndoors.setDisplayRule("parking", { from:16 }); // Using default type icon
mapsIndoors.setDisplayRule("office", { from:20 });  // Using default type icon
```


## Using locate

Use the locate method to find and highlight different elements of the MapsIndoors content. An example is given below. Note: The example shows all options, but only one of building, venue, locationId and location is necessary.

```javascript
var googleMap = new google.maps.Map(...);

var mapsIndoors = new mapsindoors.MapsIndoors({map:googleMap});

mapsIndoors.locate(
   {
      building: "34"          // Optional - Using the administrative id for building
      venue: "VenueA"         // Optional - Using name for venue
      locationId: "id"        // Optional - Mapsindoors location id string
      locations: {            
         q: "lounge",         // Optional - Search for matches in location name or aliases
         building: "34",      // Optional - Fetch from specific building, using the administrative id of the building
         venue: "VenueA",     // Optional - Fetch from specific venue, using name of venue
         floor: 1,                     // Optional - Fetch from 1st floor only
         take: 10,                     // Optional - Fetch only 10 locations
         skip: 10,                     // Optional - Skip first 10 in result
         near: {lat:57.5, lng: 12.9}   // Optional - Sort by proximity to geographic point
         radius: 50           // Optional - Fetch only nearest within meters from near
         orderBy: "name"      // Optional - Sort by name (possible values are Name, Floor
                              // Building, Venue, Type and RoomId)
      },
      fitBounds: true,        // Optional - Suppress display of other
                              // existing locations on the map
      fitBounds: true,        // Optional - Center map around result    
      displayRule: {          // Optional - Set a display rule for the resulting content
         from:16,
         icon: "http://myiconhost.com/searchresult.png"
      }
   }
);
```

## Setting the map

Set the Google map that needs to be MapsIndoors-enabled.

```javascript
mapsIndoors.setMap(googleMap)
```
## Getting the map

Returns the Google Maps object.

```javascript
mapsIndoors.getMap()
```

### Reset the style of the map

Resets the map to the appearance defined by the provided display rules. Displayed floor, map center and zoom-level will remain untouched.

```javascript
mapsIndoors.reset()
```
