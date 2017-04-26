# Getting started - indoor navigation for Web

## Trying the Showcase Web App

A [showcase app is available on GitHub](https://github.com/MapsIndoors/Showcase-Web-App), free to use and adapt to your needs.

### To try it out right away:
Make sure nodejs, npm and gulp is installed on your system
Using a terminal/shell in the project folder, run the following commands:
*npm install -g browser-sync
*gulp build
*browser-sync start --server
*If on Windows and prompted, allow server to use your PC network
*Open your browser at http://localhost:3000/app (or whatever port browser-sync chooses per default)

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

In the sample code above, replace `MY_MAPSINDOORS_SOLUTION_ID` with your MapsIndoors solution id. Your solution id is 24 character hex-string that gives access to your solution data. If you are not a customer or you have not received a solution id yet, you can use this demo solution id: `5583d36c2a91e00f1cc4ecb2`. 
Using Display Rules

Icons will by default show for all types of locations on the map. In order to control whether or not to display icons, labels and choose on which zoom levels to display locations, you need to setup display rules for your locations on the map.

```javascript
mapsIndoors.displayRules.set("info", {from:16, icon:"http://myiconhost.com/info.png" });
```

Please refer to our documentation on display rules for a thorough introduction.
Using Events

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
| --- | ––– | --- |
| "ready" | MapsIndoors | MapsIndoors object |
| "building_changed" | MapsIndoors | Current building object |
| "floor_changed" | MapsIndoors | Current floor index |
| "location_click" | MapsIndoors | Selected location | 	 	 
 
## Create an Infobox

Most often you might want to display location content when a user clicks or taps on an icon. You can use the simple Infobox UI component for this. Add the infobox stylesheet as a starting point for the design.

```html
<link href="https://app.mapsindoors.com/mapsindoors/js/sdk/ui/Infobox.css" rel="stylesheet" />
```

Provide the following html code in your document. For templating we use Markup.js.

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