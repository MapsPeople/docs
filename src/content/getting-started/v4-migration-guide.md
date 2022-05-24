---
title: Android BETA - Migrating from V3 to V4
toc: true
eleventyNavigation:
  parent: getting-started
  key: getting-started-b4-migration-android
  title: Android BETA - Migrating from V3 to V4
---

The Android SDK for MapsIndoors has been upgraded from V3 to V4, which comes with a lot of improvements to stability and flexibility. SDK loading has been improved, and is less error-prone. This guide will cover specific changes to the SDK and how to use it, to provide you a guide on how to upgrade from V3 to V4.

## MapsIndoors SDK Map Engine Flavours

<!--- This part is not 100% settled, be sure to talk to Frederik to confirm before release!
As of V4 the MapsIndoors mobile SDKs support both Google Maps and Mapbox. A version of the SDK is available for each map engine.

MapsIndoorsSDKGoogleMaps 4.x.x

MapsIndoorsSDKMapbox 4.x.x
--->

Both of these are distributed through Maven, and come packaged with a number of helper classes.

## MapsIndoors Initialisation

MapsIndoors is a singleton class, which can be described as the data layer of the SDK. Below, we will show how initilisation has been simplified between V3 and V4.

### V3

In V3, SDK initialization was started with:

```java
MapsIndoors.initialize(getApplicationContext(), "mapsindoors-key", listener);
```

And subsequently setting the Google API key:

```java
MapsIndoors.setGoogleAPIKey(getString(R.string.google_maps_key));
```

If you wanted to change the MapsIndoors API key of an already initialized SDK you would invoke:

```java
MapsIndoors.setApiKey("new key")
```

And to close down the SDK, you would call:

```java
MapsIndoors.onApplicationTerminate()
```

### V4

In this new version of the SDK, initialization is started by the new function `MapsIndoors.load()`:

```java
MapsIndoors.load(getApplicationContext(), "mapsindoors-key", listener);
```

Map-engine-specific API keys are now handled by `MPMapConfig`, covered in the "MapControl Initialisation" section of this migration guide.

Switching to another MapsIndoors API key, such as for switching active Solutions, is now done by invoking `MapsIndoors.load()` again with a new key. The SDK will close down, and reload with the new API key.

To close down the SDK without reloading a new API key, invoke:

```java
MapsIndoors.destroy()
```

## MapControl Initilisation

MapControl instantiation and initialisation are separate concepts. You create a new instance of `MapControl` and configure it with a map and view - optionally you could set clustering, overlapping or other behavior on the object.

### V3

In V3, `MapControl` was a seperate asynchronous call:

```java
mMapControl = new MapControl(this);
mMapControl.setGoogleMap(mMap, view);
mMapControl.init(miError -> {
    // MapControl init complete
});
```

### V4

In V4, `MapControl` now requires a `MPMapConfig` object, which is acquired using a builder on the class `MPMapConfig`. Here you must provide an activity, a map provider (Google Maps or Mapbox), a `mapview` and a map engine API key.

```java
MPMapConfig mapConfig = new MPMapConfig.Builder(activity, googleMap, "google-api-key", view, true)
        .setClusteringEnabled(false)
        .setAllowMarkerOverlap(false)
        .build();
```

With a `MPMapConfig` instance, you may create a new `MapControl` instance. This now happens through a factory pattern. This both instantiates and initializes your `MapControl` object asynchronously. If everything succeeded, you will receive a ready-to-use `MapControl` instance - if not, you will get an error and recieve no `MapControl` instance.

```java
MapControl.create(mapConfig, (mapControl, miError) -> {
    // MapControl init complete
});
```

Please note that this factory method will wait to return until a valid MapsIndoors solution is loaded, therefore it is safe to invoke `MapControl.create()` prior to, or in parallel with `MapsIndoors.load()`.

## Display Rules

W.I.P

## DirectionsService & DirectionsRenderer

There are two basic functions here - Retrieving, or querying a route, and rendering it onto the map.

### Query Route

#### V3

In V3, the process to query a route is to instantiate a `MPRoutingProvider` and set the desired travel mode, departure/arrival time, etc. You should also instantiate an `OnRouteResultListener` to recieve the result (or error).

```java
int timeNowSeconds = (int) (System.currentTimeMillis() / 1000);
MPRoutingProvider routingProvider = new MPRoutingProvider();
routingProvider.setTravelMode(TravelMode.WALKING);
routingProvider.setDateTime(timeNowSeconds, true);
routingProvider.setOnRouteResultListener((route, error) -> {
    // You get your route (or error) here!
});

Point from = new Point(57.039395177203936, 9.939182484455051);
Point to = new Point(57.03238690202058, 9.93220061362637);

routingProvider.query(from, to);
```

#### V4

In the V4 SDK, to query a route you must first set up an `MPDirectionsConfig` object. This configuration describes travel mode (driving, walking, etc), departure/arrival time and includes a result listener.

Next, instantiate a new `MPDirectionsServic`, and apply the configuration. Use the `query()` method to search for a route between two points. Please note that the resulting route is returned in the `OnRouteResultListener` set on your `MPDirectionsConfig` object.

```java
MPDirectionsConfig config = new MPDirectionsConfig.Builder()
        .setTravelMode(MPTravelMode.WALKING)
        .setDepartureTime(new Date(System.currentTimeMillis()))
        .setOnRouteResultListener((route, error) -> {
            // You get your route (or error) here!
        })
        .build();

MPDirectionsService directionsService = new MPDirectionsService();
directionsService.setConfig(config);
MPPoint from = new MPPoint(57.039395177203936, 9.939182484455051);
MPPoint to = new MPPoint(57.03238690202058, 9.93220061362637);
directionsService.query(from, to);
```

### Render Route

#### V3

To render a given route in V3, instantiate a `MPDirectionsRenderer` with parameters. Then dot your way to configurable attributes (various animation settings and styling) as well as setting the route. Further, invoke `initMap()`, to start the renderer/animation.

```java
MPDirectionsRenderer directionsRenderer = new MPDirectionsRenderer(this, mMap, mMapControl, null);
directionsRenderer.setPolylineAnimated(true);
directionsRenderer.setAnimated(true);
directionsRenderer.setRoute(route);
runOnUiThread( ()-> {
    directionsRenderer.initMap(true);
    directionsRenderer.setRouteLegIndex(0);
});
```

#### V4

In V4, this has been simplified somewhat. Given a route, you can instantiate a new `MPDirectionsRenderer`, and set the route using `setRoute()`. Use the `MPDirectionsRenderer` object to navigate through the route (next/previous leg) as well as configure the animation and styling of the route on the map. By default the route polyline is animated and repeating, but this is customisable on the `MPDirectionsRenderer` instance.

```java
MPDirectionsRenderer renderer = new MPDirectionsRenderer(mMapControl);
renderer.setRoute(route);
```