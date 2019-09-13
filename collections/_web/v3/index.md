---
layout: start
title: MapsIndoors Web SDK v3
permalink: /web/v3/
published: true
date: 2019-08-26
---

This guide explains how to start using a MapsIndoors map in your HTML application.

To benefit from the guides, you will need basic knowledge about:

* JavaScript
* HTML/CSS
* Google Maps Javascript API V3

You can get started in two ways, either by reviewing and modifying the [basic example](#basic-example) or do the [clean setup](#setting-up-a-map).

## Basic Example

You will find in the [link an up and running website sample](https://mapsindoors.github.io/js-samples) that demonstrates the common use cases like mapping, search & directions in MapsIndoors. See the [source code for the sample here](https://github.com/MapsIndoors/js-samples).

You can also follow the steps below to start your app from scratch or to enhance the Basic Example, more advanced feature will be explained in the [guides](/web/v3/guides) of this tutorial with a demo app that gives a showcase of the mapsIndoors in a complete app that you can test also.

## Setting up a map

### Setup Your HTML

Include the following scripts in your HTML document. MapsIndoors depend on jQuery and Google Maps API v3, so if it’s not present on script load, MapsIndoors will not be able to initialize.

If you need to use a floor selector (most projects do), just add a css reference as in the sample. This will provide a basic CSS-layout for the floor selector.

```html
{% raw %}<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?libraries=geometry&key=MY_GOOGLE_API_KEY"></script>
<script type="text/javascript" src="https://app.mapsindoors.com/mapsindoors/js/sdk/mapsindoors-{{%product-version%}}.js.gz?apikey=MY_MAPSINDOORS_API_KEY"></script>
// Load css for default floor selector
<link href="https://app.mapsindoors.com/mapsindoors/js/sdk/ui/FloorSelector.css" type="text/css" rel="stylesheet" />{% endraw %}
```

Replace:

* `MY_GOOGLE_API_KEY` with your own Google api key
* `MY_MAPSINDOORS_API_KEY` with your MapsIndoors api key (formerly known as a solution id)

As always when setting up Google Maps, create a div with defined width and height.

```html
<div id="map" style="width:600px;height:600px"></div>
```

### Setup JavaScript

Then add the following JavaScript code in a script tag in the top of your HTML page.

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

## Trying the Showcase Web App

A [showcase app is available on GitHub](https://github.com/MapsIndoors/MapsIndoorsWeb, free to use and adapt to your needs.

### Try the Showcase Web App right away
Before you begin, make sure your development environment includes Node.js, npm package manager and [Angular CLI globally](https://angular.io/cli#installing-angular-cli).

Using a terminal/shell in the project folder, run the following commands:

* Run `npm install` to install all dependencies.

* Run `npm start` for a dev server and then enter a Solution ID in the URL, e.g. http://localhost:4200/demo. The app will automatically reload if you change any of the source files.

### Live Demo
Check out a running version [here](https://demo.mapsindoors.com/demo).

## Work with MapsIndoors SDK behind a Firewall
If you need to work with MapsIndoors SDK behind a firewall, you might need to [white-list some IP-adresses](../../ip-whitelisting).
