---
title: MapsIndoors for Android - Part 2
layout: page
---

## Trying the demo App

You can download the demo app from our github repository: [Demo App](https://github.com/MapsIndoors/MapsIndoorsAndroid)
Then run it and don't forget to do a Gradle sync before and download all the required dependencies.

## Using Routing

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

## Querying POI's / Locations

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

lc.arg = "YOUR_SOLUTION_ID";
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
locs.getLocationDetailsAsync("YOUR_SOLUTION_ID", "locationId");
```

The GPS provider is part of the demo app: [GPSPositionProvider]( https://github.com/MapsIndoors/MapsIndoorsAndroid/blob/master/app/src/main/java/com/mapsindoors/positionprovider/GPSPositionProvider.java).

## Using Custom Providers

To setup with e.g. locations from your own backend, make an implementation of the LocationsProvider interface, and pass the provider as parameter to the initMap method:

```java
MyLocationsProvider myLocationsProvider = new MyLocationsProvider();
mapControl.initMap("YOUR_SOLUTION_KEY", "rtx", myLocationsProvider, null, null, null);
```  
## Show a Location on map
To show a single POI on a map you can use this method:
```java
myMapControl.displaySingleLocation(Location location);
```

## Setting a Current User-position

MapsIndoors can show the user position, but to do that it needs to know the user's position. This can either be set manually by the app or using a position provider.
To set it manually, simply call the map control directly with a location and floor, for this case we are going to set it as the venue position:

```java
//the point on the map and the floor
mMapControl.setCurrentPosition( new Point(57.08585, 9.95751), 0);
```

A position provider is normally easier to use for real time positioning. To create a position provider make a class that implements the PositionProvider interface and add it to your MapControl like this:


```java
//Add a position provider in able to track the user's position.
gpsProvider = new GPSPositionProvider(this.getApplicationContext());
//Telling map control about our provider
mMapControl.addPositionProvider(gpsProvider);
mMapControl.startPositioning();
```
