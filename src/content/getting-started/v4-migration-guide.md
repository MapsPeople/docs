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
