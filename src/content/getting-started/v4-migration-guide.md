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

MapsIndoors is a singleton class, which can be described as the data layer of the SDK.

### V3

SDK initialization was started with:

```java
MapsIndoors.initialize(getApplicationContext(), "mapsindoors-key", listener);
```

And subsequent setting the Google API key:

```java
MapsIndoors.setGoogleAPIKey(getString(R.string.google_maps_key));
```

If you wanted to change the MapsIndoors API key, of an already initialized SDK you would invoke:

```java
MapsIndoors.setApiKey("new key")
```

And to close down the SDK

```java
MapsIndoors.onApplicationTerminate()
```
