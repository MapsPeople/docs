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

Next, instantiate a new `MPDirectionsService`, and apply the configuration. Use the `query()` method to search for a route between two points. Please note that the resulting route is returned in the `OnRouteResultListener` set on your `MPDirectionsConfig` object.

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

To render a given route in V3, instantiate a `MPDirectionsRenderer` with parameters. Then your IDE should be able to show you the various configurable attributes (various animation settings and styling) as well as setting the route, or refer to further documentation. Further, invoke `initMap()`, to start the renderer/animation.

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

In V4, this has been simplified somewhat. Given a route, you can instantiate a new `MPDirectionsRenderer`, and set the route using `setRoute()`. Use the `MPDirectionsRenderer` object to navigate through the route (next/previous leg) as well as configure the animation and styling of the route on the map. By default the route is animated and repeating, but this is customisable on the `MPDirectionsRenderer` instance.

```java
MPDirectionsRenderer renderer = new MPDirectionsRenderer(mMapControl);
renderer.setRoute(route);
```

## Map & Camera Behavior Configs

In V3, there were many overloaded methods for selection and filtering, where various boolean and integer/double values were set. In V4, the preferred method is configuration objects for heavily configurable use cases. Thus, filtering and selection methods are now dependent on `MP...Behavior` objects.

We have introduced `MPFilterBehavior` and `MPSelectionBehavior`. These object contains behavioral configuration to describe how and if the camera should behave. The following can be configured:

* `setZoomToFit(boolean)`
* `setMoveCamera(boolean)`
* `setShowInfoWindow(boolean)`
* `setAnimationDuration(int)`
* `setAllowFloorChange(boolean)`

There are statically defined defaults available on the classes.

## The "Go-To" Function

In V4 `MapControl.goTo(MPEntity)` is introduced. This is an easy way to quickly move the camera to almost any MapsIndoors geographical object (referred to as `MPEntity`). The method implements pre-determined defaults for camera behavior, which cannot be configured.

The following classes are of type `MPEntity`:

* `MPLocation`
* `MPFloor`
* `MPBuilding`
* `MPVenue`

## Map Filtering

### V3

In V3, filtering map content is performed with `MapControl.displaySearchResult()`. This results in a lot of undesirable overloads.

Clearing the map filter is done by invoking `MapControl.clearMap()`.

```java
boolean displaySearchResults(@NonNull List<MPLocation> locations)
boolean displaySearchResults(@NonNull List<MPLocation> locations, boolean animateCamera)
boolean displaySearchResults(@NonNull List<MPLocation> locations, @Nullable ReadyListener readyListener)
boolean displaySearchResults(@NonNull List<MPLocation> locations, boolean animateCamera, int cameraPadding)
boolean displaySearchResults(@NonNull List<MPLocation> locations, boolean animateCamera, int cameraPadding, boolean showInfoWindow)
boolean displaySearchResults(@NonNull List<MPLocation> locations, boolean animateCamera, int cameraPadding, @Nullable ReadyListener readyListener)
boolean displaySearchResults(@NonNull List<MPLocation> locations, boolean animateCamera, int cameraPadding, boolean showInfoWindow, @Nullable CameraUpdate googleMapCameraUpdate, int durationMs, GoogleMap.CancelableCallback googleMapCancelableCallback)
boolean displaySearchResults(@NonNull List<MPLocation> locations, boolean animateCamera, int cameraPadding, boolean showInfoWindow, @Nullable CameraUpdate googleMapCameraUpdate, int durationMs, GoogleMap.CancelableCallback googleMapCancelableCallback, @Nullable ReadyListener readyListener)
```

### V4

To avoid the aforementioned undesirable overloads, in V4, filtering map content is now performed with `MapControl.setFilter(List<MPLocation>, MPFilterBehavior)` or alternatively `MapControl.setFilter(MPFilter, MPFilterBehavior, MPSuccessListener)`. To clear the filter, invoke `MapControl.clearFilter()`.

One way to perform map filtering, is given a list of `MPLocation`, display only these locations on the map.

```java
MapsIndoors.getLocationsAsync(new MPQuery.Builder().setQuery("stairs").build(), null, (locations, error) -> {
    if(error == null && !locations.isEmpty()) {
        mMapControl.setFilter(locations, MPFilterBehavior.DEFAULT);
    }
});
```

Another way is to configure a `MPFilter` object. This is an easy way to only show locations of a given type or category on the map.

```java
MPFilter filter = new MPFilter.Builder().setTypes(Collections.singletonList("Stairs")).build();
mMapControl.setFilter(filter, MPFilterBehavior.DEFAULT, null);
```

## Positioning Providers

### V3

In V3, the snippet below is the `PositionProvider` interface. While perfectly functional, it leaves a lot be desired in terms of readability and clarity, and avoiding bloat in the code.

```java
public interface PositionProvider {
	@NonNull String[] getRequiredPermissions();
	boolean isPSEnabled();
	void startPositioning( @Nullable String arg );
	void stopPositioning( @Nullable String arg );
	boolean isRunning();
	void addOnPositionUpdateListener( @Nullable OnPositionUpdateListener listener );
	void removeOnPositionUpdateListener( @Nullable OnPositionUpdateListener listener );
	void setProviderId( @Nullable String id );
	void addOnStateChangedListener( @Nullable OnStateChangedListener onStateChangedListener );
	void removeOnStateChangedListener( @Nullable OnStateChangedListener onStateChangedListener );
	void checkPermissionsAndPSEnabled( @Nullable PermissionsAndPSListener permissionAPSlist );
	@Nullable String getProviderId();
	@Nullable PositionResult getLatestPosition();
	void startPositioningAfter( @IntRange(from = 0, to = Integer.MAX_VALUE) int delayInMs, @Nullable String arg );
	void terminate();
}
```

### V4

To fix this in V4, `PositionProvider` has been optimised and renamed to `MPPositionProvider`, to fall in line with other naming conventions. It has been renamed with the MP-prefix and has been heavily trimmed, to only describe the necessary interface for the MapsIndoors SDK to utilize a position provider sufficiently.

```java
public interface MPPositionProvider {
    void addOnPositionUpdateListener(@NonNull OnPositionUpdateListener listener);
    void removeOnPositionUpdateListener(@NonNull OnPositionUpdateListener listener);
    @Nullable MPPositionResultInterface getLatestPosition();
}
```

## SDK Interface Changes

### Removed Classes & Interfaces

|   Removed                         |
|-----------------------------------|
| ImageSize                         |
| SphericalUtil                     |
| Convert                           |
| DirectionsRenderer (interface)    |
| DisplayRule                       |
| Feature                           |
| FloorTileOfflineManager           |
| GeometryCollectionGeometry        |
| GoogleMapsDirectionStatusCodes    |
| JavaClusteringEngine              |
| JSONUtil                          |
| LineStringGeometry                |
| LintTestClass                     |
| ListenerCallbacks                 |
| LocationsUpdatedListener          |
| MapView (interface)               |
| MathUtil                          |
| MPAuthClient                      |
| MPBadgeType                       |
| MPBookingListener                 |
| MPBookingListListener             |
| MPDataSetCacheManagerSyncListener |
| MPDistanceMatrixReceiver          |
| MPFloatRange                      |
| MPLocationCluster                 |
| MPLocationClusteringEngine        |
| MPLocationListListener            |
| MPOrdering                        |
| MultiLineStringGeometry           |
| MultiPointGeometry                |
| NodeLabel                         |
| PolyUtil                          |
| PositionIndicator                 |
| Renderer                          |
| RouteVertex                       |
| TileCacheStrategy                 |
| TileSize                          |
| UriLoaderListener                 |
| Utils                             |
| DSCUnzipFileTask                  |
| DSCUrlDownloadingTask             |

### Renamed Classes & Interfaces

| V3                            | V4                                                                  |
|-------------------------------|---------------------------------------------------------------------|
| Object                        | MPObject                                                            |
| Point                         | MPPoint                                                             |
| TravelMode                    | MPTravelMOde                                                        |
| dbglog                        | MPDebugLog                                                          |
| MPRoutingProvider             | MPDirectionsService                                                 |
| MPApiKeyValidatorService      | MPApiKeyValidator                                                   |
| LocationDisplayRule           | MPDisplayRule                                                       |
| DistanceMatrixResponse        | MPDistanceMantrixResponse                                           |
| Route                         | MPRoute                                                             |
| RouteResult                   | MPRouteResult                                                       |
| Building                      | MPBuilding                                                          |
| FastSphericalUtils            | MPFastSphericalUtils                                                |
| DataField                     | MPDataField                                                         |
| ReadyListener                 | MPReadyListener                                                     |
| Solution                      | MPSolution                                                          |
| Venue                         | MPVenue                                                             |
| AppConfig                     | MPAppConfig                                                         |
| BadgePosition                 | MPBadgePosition                                                     |
| BuildingCollection            | MPBuildingCollection                                                |
| BuildingInfo                  | MPBuildingInfo                                                      |
| Category                      | MPCategory                                                          |
| CategoryCollection            | MPCategoryCollection                                                |
| DataSet                       | MPDataSet                                                           |
| DataSetManagerStatus          | MPDataSetManagerStatus                                              |
| Floor                         | MPFloor                                                             |
| FloorSelectorInterface        | MPFloorSelectorInterface                                            |
| GeocodedWaypoints             | MPGeocodedWaypoints                                                 |
| GeoData                       | MPGeoData                                                           |
| Geometry                      | MPGeometry                                                          |
| Highway                       | MPHighway                                                           |
| ImageProvider                 | MPImageProvider                                                     |
| LocationPropertyNames         | MPLocationPropertyNames                                             |
| Maneuver                      | MPManeuver                                                          |
| MapExtend                     | MPMapExtend                                                         |
| MapStyle                      | MPMapstyle                                                          |
| MenuInfo                      | MPMenuInfo                                                          |
| MPBaseType                    | MPLocationBaseType                                                  |
| MPLocationClusterImageAdapter | MPClusterIconAdapter                                                |
| MultiPolygonGeometry          | MPMultiPolygonGeometry                                              |
| NodeData                      | MPNodeData                                                          |
| PermissionsAndPSListener      | MPPermissionsAndPSListener                                          |
| POIType                       | MPPOIType                                                           |
| PolygonDisplayRule            | MPPolygonDisplayRule                                                |
| PolygonGeometry               | MPPolygonGeometry                                                   |
| PositionProvider              | MPPositionProvider                                                  |
| PositionResult                | MPPositionResult & MPPositionResultInterface                        |
| PropertyData                  | MPPropertyData                                                      |
| RouteCoordinate               | MPRouteCoordinate                                                   |
| RouteLeg                      | MPRouteLeg                                                          |
| RoutePolyline                 | MPRoutePolyline                                                     |
| RouteProperty                 | MPRouteProperty                                                     |
| RouteSegmentPath              | MPRouteSegmentPath                                                  |
| RouteStep                     | MPRouteStep                                                         |
| RoutingProvider               | MPDirectionsServiceInterface & MPDirectionsServiceExternalInterface |
| SolutionInfo                  | MPSolutionInfo                                                      |
| TransitDetails                | MPTransitDetails                                                    |
| URITemplate                   | MPURITemplate                                                       |
| UrlResourceGroupType          | MPUrlResourceGroupType                                              |
| UserRole                      | MPUserRole                                                          |
| VenueCollection               | MPVenueCollection                                                   |
| VenueInfo                     | MPVenueInfo                                                         |
| IFloorSelector                | MPFloorSelectorInterface                                            |