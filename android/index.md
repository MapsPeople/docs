---
title: MapsIndoors for Android - Getting Started
layout: page
---

## Setup Steps using Android Studio

Setup Google Maps API for Android (https://developers.google.com/maps/documentation/android/start) in your Android project.

Add the MapsIndoors SDK as a dependency to your project.
The AAR for the MapsIndoors SDK contains both Java classes, SDK resources and AndroidManifest.xml template which gets merged into your application’s AndroidManifest.xml during build process.
Add or merge in the following to your app’s build gradle file (usually called build.gradle).

```json
dependencies {
   compile 'com.google.android.gms:play-services-maps:9.8.0'
   
   compile 'com.google.code.gson:gson:2.4'
   compile 'com.mapspeople.mapsindoors:mapsindoorssdk:1.8.3@aar'
}
repositories{
   maven {
      url 'http://maven.mapsindoors.com/'
   }
}
```

If you somehow downloaded an AAR file, the above does not apply.
To add the MapsIndoors Library to an existing Android Studio project add a new Module. First select Android from the project tap, then right click and select `App -> New -> Module`. See the picture below for reference.

A “create new Module” window will open. Browse to the .aar file from the SDK, select it and press ‘finish’ to add the MapsIndoors module.
Finally, your app will need a dependency on the MapsIndoors module. To do that open the module settings from the Project tab where you just added the module (default hotkey is F4).

Click the green plus and add the MapsIndoor module to your app dependency list and. Close the window and recompile your app. You are now ready to use indoor maps.
Notice that there on Android Studio is no inline-documentation support at this time. The code documentation can be found in the Android/AndroidStudio/doc folder.

## Using MapControl

Use the MapControl class for extending a Google map’s display and functionality with MapsPeople’s buildings, overlays, locations/points-of-interest, position and navigation.
To fire up a venue on a google map, first set up the google map, then create a MapControl with your MapsPeople client and site id.

```java
SupportMapFragment fragment = ((SupportMapFragment) getSupportFragmentManager().findFragmentById(R.id.map_fragment));
googleMap = fragment.getMap();
myMapControl = new MapControl(getApplicationContext(), fragment);
myMapControl.setOnDataReadyListener(this);
myMapControl.initMap("0DB13630-031A-47E8-A680-A1C197D5D367", "rtx");
```
  
## Using Map Icon Display Rules

To add your own icons for locations (point-of-interest, rooms, etc.), setup display rule(s) and add to the MapControl object:
Display rules are based on POI/location types. A typeset is defined/used in the MapsIndoors CMS. The current list of types can be listed by calling the MapsIndoors API via this URL:
`http://v2.mapsindoors.net/api/solutions/details/[your-client-id]/`
One of these types could be of name “Parking”, which which indicates that this type is used for parking lots. Try adding the following snip of code into the `setUpMapIfNeeded()` method:

```java
displayRules = new LocationDisplayRules();
displayRules.add(new LocationDisplayRule("Parking", R.drawable.parking, 17f, false));
mMapControl.addDisplayRules(displayRules);
```

Here we made a new locationDisplay rule container, then added a single rule to it saying we want the app to show a parking icon on all locations of type “parking” when the zoom level is larger than 17.
To show locations that should not have an icon just use null instead, for example:
displayRules.add(new LocationDisplayRule("poi", null, 19f, false));
  
## Setting a Current User-position

MapsIndoors can show the user position, but to do that it needs to know the user's position. This can either be set manually by the app or using a position provider.
To set it manually, simply call the map control directly with a location and floor:

```java
mMapControl.setCurrentPosition( new Point(55.687735, 12.569123), 0);
```

A position provider is normally easier to use for real time positioning. To create a position provider make a class that implements the PositionProvider interface and add it to your MapControl like this:


```java
//Add a position provider in able to track the user's position.
gpsProvider = new GPSPositionProvider(this.getApplicationContext());
//Telling map control about our provider
mMapControl.addPositionProvider(gpsProvider);
mMapControl.startPositioning();
```

The GPS provider is part of the demo app.

## Using Custom Providers

To setup with e.g. locations from your own backend, make an implementation of the LocationsProvider interface, and pass the provider as parameter to the initMap method:

```java
MyLocationsProvider myLocationsProvider = new MyLocationsProvider();
mapControl.initMap("0DB13630-031A-47E8-A680-A1C197D5D367", "rtx", myLocationsProvider, null, null, null);
```  

## Getting a Marker from a Location and vice versa

If a location is currently displayed on a map, the marker can be retrieved using `location.getMarker()`. Opposite, get a location from a marker using getLocation:
`myMapControl.getLocation(marker)`;
  
## Handling marker selections and other user events

Detecting the user tapping a marker or an infowindow is part of the Google Maps Android API. Let your fragment or activity implement OnMarkerClickedListener and OnInfoWindowClickListener overriding the methods:

```java
@Override
public boolean onMarkerClick(Marker marker) {
   return false; //return true if you don't want the marker centered (default Google Maps API behavior)
}
 
@Override
public void onInfoWindowClick(Marker marker) {
   Location l = mapControl.getLocation(marker);
}
```

NB: For the MapsIndoors SDK to function properly, MapControl will subscribe to the following Google Maps event listeners:

* OnCameraChangeListener
* OnMarkerClickListener
* OnMapClickListener
* OnMapLoadedCallback

If you need to hook up these events, please use the methods below, instead of calling the methods on the Google Maps object itself.

* myMapControl.setOnCameraChangeListener(myListener);
* myMapControl.setOnMarkerClickListener(myListener);
* myMapControl.setOnMapClickListener(myListener);
* myMapControl.setOnMapLoadedCallback(myListener);

By default, if the user taps on a marker, an infosnippet will appear in the bottom of the map. Subscribe for the events using OnSnippetTappedListener:

```java
myMapControl.addOnSnippetTappedListener(
   new OnSnippetTappedListener() {
      @Override
      public void onSnippetTapped(int tapPosition, Location location) {
      if (tapPosition == InfoSnippetView.POSITION_CENTER) {
         // User tapped in the center of the info snippet
      }
      if (tapPosition == InfoSnippetView.POSITION_RIGHT) {
         // User tapped on the right side of the info snippet
      }
   }
}
);
```
  
Using Routing

Routing is requested with at least an origin, a destination and a transit mode – transit mode corresponds directly to Google Maps transit modes: Walking, bicycling, driving and transit (public transportation).

```java
    RoutingProvider routingProvider = new MPRoutingProvider();
    routingProvider.setOnRouteResultListener(new OnRouteResultListener()
    {
        @Override
        public void onRouteResult(final Route newRoute)
        {
            // Getting route object result
        }

        @Override
        public void onRoutingInfoResult(Object info)
        {

        }
    });
    routingProvider.query(myOriginLocation.getPoint(), myDestinationLocation.getPoint());
```

When requesting only indoor routes, the travel mode is always WALKING - regardless of what you assign it to.

## Route restrictions

Add a restriction to the route by setting the avoid argument. A list of possible restrictions can be found in the com.mapspeople.routing.RouteRestriction class. Avoid stairs on the route using the following restriction parameter:

```java
routingProvider.addRouteRestriction(RouteRestriction.AVOID_STAIRS);
```

## Public transit travel mode

Using TRANSIT mode requires either a departure date or an arrival date.

```java
routingProvider.setDateTime(Calendar.getInstance(), false);
```

## Working with mapped Locations

This example will show you the possible ways of querying the POI’s on your venue(s). You need to provide your solution id as a mandatory property to the query.

```java
MPLocationsProvider locs = new MPLocationsProvider(this); //Provide context
 
locs.setOnLocationsReadyListener(new OnLocationsReadyListener() {
   @Override
   public void onLocationsReady(List<Location> locations) {
 
   }
 
   @Override
   public void onLocationDetailsReady(Location location) {
 
   }
});
 
LocationQuery lc = new LocationQuery();
 
lc.arg = "my-mapsindoors-solutionId";
lc.setQuery("lo");
 
//Sorting will override "near/radius"
lc.orderBy = LocationQuery.OrderBy.NAME;
lc.sortOrder = LocationQuery.SortOrder.DESC;
 
lc.near = new Point(55.6377969,12.5787581);
lc.radius = 200;
lc.max = 1;
 
// query multiple (not all data is fetched)
locs.getLocationsUsingQueryAsync(lc, Locale.ENGLISH);
// or single get (all data is fetched)
locs.getLocationDetailsAsync("my-mapsindoors-solutionId", "mapsindoors-location-id");
```

### Show a Location on map
To show a single POI on a map you can use this method:
myMapControl.displaySingleLocation(Location location);