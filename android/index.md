---
title: MapsIndoors for Android - Getting Started
layout: page
---

## Minimum source code

You will find in the [link](https://github.com/namine92/mapsIndoorAndroidTut) an up and running project that contains the minimum code to start a MapsIndoors project.

## Setup MapsIndoors dependencies

Add the MapsIndoors SDK as a dependency to your project.
The AAR for the MapsIndoors SDK contains both Java classes, SDK resources and AndroidManifest.xml template which gets merged into your application’s AndroidManifest.xml during build process.
Add or merge in the following to your app’s build gradle file (usually called build.gradle).

```groovy
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
The following snippet below should go in the `onCreate` method.

```java
SupportMapFragment mapFragment = ((SupportMapFragment) getSupportFragmentManager().findFragmentById(R.id.map_fragment));
// get the google maps object
mapFragment.getMapAsync(new OnMapReadyCallback() {
           @Override
           public void onMapReady(GoogleMap googleMap) {
               this.googleMap = googleMap;
           }
       });
//creating the MapControl Object
myMapControl = new MapControl(getApplicationContext(), fragment);
//init the map with the solution id and the venue id
myMapControl.initMap("YOUR_SOLUTION_ID", "rtx");
// set the OnDataReadyListener to the current activity then we will override all the required methods
myMapControl.setOnDataReadyListener(this);
```
## Using the OnDataReadyListener
Your activity should implement the `OnDataReadyListener` class then overriding all the abstract methods below:

```java
  @Override
   public void onLocationDataReady() {
   }

   @Override
   public void onAppDataReady() {

   }

   @Override
   public void onVenueDataReady(VenueCollection venueCollection) {

   }

   @Override
   public void onSolutionDataReady(Solution solution) {

   }

   @Override
   public void onCategoryDataReady(CategoryCollection categoryCollection) {

   }

   @Override
   public void onPushMessageDataReady(PushMessageCollection pushMessageCollection) {

   }

   @Override
   public void onAppConfigDataReady(AppConfig appConfig) {

   }
```


## Using Map Icon Display Rules

To add your own icons for locations (point-of-interest, rooms, etc.), setup display rule(s) and add to the MapControl object:
Display rules are based on POI/location types. A typeset is defined/used in the MapsIndoors CMS. The current list of types can be listed by calling the MapsIndoors API via this URL:
`http://v2.mapsindoors.net/api/solutions/details/[your-client-id]/`
One of these types could be of name “Parking”, which indicates that this type is used for parking lots. Try adding the following snip of code into the `setUpMapIfNeeded()` method:

```java
displayRules = new LocationDisplayRules();
displayRules.add(new LocationDisplayRule("Parking", R.drawable.parking, 17f, false));
mMapControl.addDisplayRules(displayRules);
```

Here we made a new locationDisplay rule container, then added a single rule to it saying we want the app to show a parking icon on all locations of type “parking” when the zoom level is larger than 17.
To show locations that should not have an icon just use null instead, for example:
displayRules.add(new LocationDisplayRule("poi", null, 19f, false));

## Getting a Marker from a Location and vice versa

If a location is currently displayed on a map, the marker can be retrieved using :

```java
location.getMarker();
```

Opposite, get a location from a marker using getLocation:

```java
myMapControl.getLocation(marker);
```

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
