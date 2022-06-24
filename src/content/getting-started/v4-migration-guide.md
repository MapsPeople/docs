---
title: Android BETA - Migrating from V3 to V4
toc: true
eleventyNavigation:
  key: getting-started-v4-migration-android
  title: Android BETA - Migrating from V3 to V4
---

The Android SDK for MapsIndoors has been upgraded from V3 to V4, which comes with a lot of improvements, features and flexibility. The MapsIndoors SDK now supports Mapbox as a map provider, alongside some reworked and refactored features that simplify development and SDK behavior. This guide will cover specific changes to the SDK and how to use it to provide you with a guide on how to upgrade from V3 to V4.

## MapsIndoors SDK Map Engine Flavors

With the release of V4 the MapsIndoors SDK is released as two separate libraries depending on the Map Provider. You can get them through Maven by changing your dependency to get:

```java
implementation 'com.mapspeople.mapsindoors:googlemapssdk:4.0.0-beta.9'

implementation 'com.mapspeople.mapsindoors:mapboxsdk:4.0.0-beta.9'
```

Both of these are distributed through Maven, and come packaged with a number of helper classes.

## MapsIndoors Initialization

MapsIndoors is a singleton class, which can be described as the data layer of the SDK. Below you will find an example that demonstrates how initialization has been simplified between V3 and V4.

### V3

In V3, SDK initialization is started with:

```java
MapsIndoors.initialize(getApplicationContext(), "mapsindoors-key", listener);
```

And subsequently setting the Google API key using:

```java
MapsIndoors.setGoogleAPIKey(getString(R.string.google_maps_key));
```

If you want to change the MapsIndoors API key of an already initialized SDK you invoke:

```java
MapsIndoors.setApiKey("new key")
```

And to close down the SDK, call:

```java
MapsIndoors.onApplicationTerminate()
```

### V4

In V4, initialization is started by the new function `MapsIndoors.load()`:

```java
MapsIndoors.load(getApplicationContext(), "mapsindoors-key", listener);
```

Map engine specific API keys are handled by `MPMapConfig`, covered in the "MapControl Initialization" section of this guide.

Switching to another MapsIndoors API key, such as for switching active Solutions, is now done by invoking `MapsIndoors.load()` again with a new key. The SDK will close down, and reload with the new API key.

To close down the SDK without reloading a new API key, invoke:

```java
MapsIndoors.destroy()
```

## MapControl Initialization

MapControl instantiation and initialization are separate concepts. You create a new instance of `MapControl` and configure it with a map and view - optionally you could set clustering, overlapping and other behavior on the object.

### V3

In V3, `MapControl.init()` is a separate asynchronous call:

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

With a `MPMapConfig` instance, you may create a new `MapControl` instance. This now happens through a factory pattern. This both instantiates and initializes your `MapControl` object asynchronously. If everything succeeds, you will receive a ready-to-use `MapControl` instance - if not, you will get an error and receive no `MapControl` instance.

```java
MapControl.create(mapConfig, (mapControl, miError) -> {
    // MapControl init complete
});
```

Please note that this factory method will wait to return until a valid MapsIndoors solution is loaded, therefore it is safe to invoke `MapControl.create()` prior to, or in parallel with `MapsIndoors.load()`.

## SolutionConfig & AppConfig

### Clustering & Marker Collisions

#### V3

In V3, AppConfig contained information about clustering (`POI_GROUPING`) and collisions (`POI_HIDE_ON_OVERLAP`), which could be fetched and updated like this:

```java
// get whether collisions are enabled... as a string
MapsIndoors.getAppConfig().getAppSettings().get(AppConfig.APP_SETTING_POI_HIDE_ON_OVERLAP);

// set whether clustering is enabled... with a string
MapsIndoors.getAppConfig().getAppSettings().put(AppConfig.APP_SETTING_POI_GROUPING, "true");
```

#### V4

In V4, these settings have been moved to `MPSolutionConfig`, which is located on the MPSolution. Now these settings have types (a boolean and an Enum type). This helps ensure that the settings are easier to configure and have no parsing errors. They can be fetched and updates like this:

```java
// get the config from the solution
MPSolutionConfig config = MapsIndoors.getSolution().getConfig();

// get the collisionHandling enum from the config
MPCollisionHandling collisionHandling = config.getCollisionHandling();

// modify the config, this does not have any effect on the SDK yet
config.setEnableClustering(true);

// re-apply the modified config
MapsIndoors.getSolution().setConfig(config);
```

### Main Display Rule

In V4, the solution config will ship with a Main Display Rule, which is used to define the defaults for location and type display rules, when nothing is declared on the specific display rule. Fields in this display rule must not be `null`. If a display rule with `null` in any fields is provided to the config, an `IllegalArgumentException` will be thrown.

```java
// gets the main rule, this rule will have all fields filled
MPDisplayRule mainRule = config.getMainDisplayRule();

// create a display rule with not all fields filled
MPDisplayRule displayRuleWithEmptyFields = ...

// will throw an exception
config.setMainDisplayRule(displayRuleWithEmptyFields);
```

## Display Rules

> The details of Display Rules in V4 are still being worked on. Watch this space, we will update it as soon as they're ready!

## DirectionsService & DirectionsRenderer

There are two basic functions here - Retrieving, or querying a route, and rendering it onto the map.

### Query Route

#### V3

In V3, the process to query a route is to instantiate a `MPRoutingProvider` and set the desired travel mode, departure/arrival time, etc. You should also instantiate an `OnRouteResultListener` to receive the result (or error in case of failure).

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

To render a given route in V3, instantiate a `MPDirectionsRenderer` with parameters. Then your IDE should be able to show you the various configurable attributes (various animation settings and styling) as well as setting the route. Alternatively, refer to further documentation. To start the renderer/animation, invoke `initMap()`.

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

In V4, this has been simplified. Given a route, you can instantiate a new `MPDirectionsRenderer`, and set the route using `setRoute()`. Use the `MPDirectionsRenderer` object to navigate through the route (next/previous leg) as well as configure the animation and styling of the route on the map. By default the route is animated and repeating, but this is customizable on the `MPDirectionsRenderer` instance.

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

To fix this in V4, `PositionProvider` has been optimized and renamed to `MPPositionProvider`, to fall in line with other naming conventions. It has been renamed with the MP-prefix and has been heavily trimmed, to only describe the necessary interface for the MapsIndoors SDK to utilize a position provider sufficiently.

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
| AppConfig                     | MPAppConfig                                                         |
| BadgePosition                 | MPBadgePosition                                                     |
| Building                      | MPBuilding                                                          |
| BuildingCollection            | MPBuildingCollection                                                |
| BuildingInfo                  | MPBuildingInfo                                                      |
| Category                      | MPCategory                                                          |
| CategoryCollection            | MPCategoryCollection                                                |
| DataField                     | MPDataField                                                         |
| DataSet                       | MPDataSet                                                           |
| DataSetManagerStatus          | MPDataSetManagerStatus                                              |
| dbglog                        | MPDebugLog                                                          |
| DistanceMatrixResponse        | MPDistanceMatrixResponse                                           |
| FastSphericalUtils            | MPFastSphericalUtils                                                |
| Floor                         | MPFloor                                                             |
| FloorSelectorInterface        | MPFloorSelectorInterface                                            |
| GeocodedWaypoints             | MPGeocodedWaypoints                                                 |
| GeoData                       | MPGeoData                                                           |
| Geometry                      | MPGeometry                                                          |
| Highway                       | MPHighway                                                           |
| IFloorSelector                | MPFloorSelectorInterface                                            |
| ImageProvider                 | MPImageProvider                                                     |
| LocationDisplayRule           | MPDisplayRule                                                       |
| LocationPropertyNames         | MPLocationPropertyNames                                             |
| Maneuver                      | MPManeuver                                                          |
| MapExtend                     | MPMapExtend                                                         |
| MapStyle                      | MPMapStyle                                                          |
| MenuInfo                      | MPMenuInfo                                                          |
| MPApiKeyValidatorService      | MPApiKeyValidator                                                   |
| MPBaseType                    | MPLocationBaseType                                                  |
| MPLocationClusterImageAdapter | MPClusterIconAdapter                                                |
| MPRoutingProvider             | MPDirectionsService                                                 |
| MultiPolygonGeometry          | MPMultiPolygonGeometry                                              |
| NodeData                      | MPNodeData                                                          |
| Object                        | MPObject                                                            |
| PermissionsAndPSListener      | MPPermissionsAndPSListener                                          |
| Point                         | MPPoint                                                             |
| POIType                       | MPPOIType                                                           |
| PolygonDisplayRule            | MPPolygonDisplayRule                                                |
| PolygonGeometry               | MPPolygonGeometry                                                   |
| PositionProvider              | MPPositionProvider                                                  |
| PositionResult                | MPPositionResult & MPPositionResultInterface                        |
| PropertyData                  | MPPropertyData                                                      |
| ReadyListener                 | MPReadyListener                                                     |
| Route                         | MPRoute                                                             |
| RouteCoordinate               | MPRouteCoordinate                                                   |
| RouteLeg                      | MPRouteLeg                                                          |
| RoutePolyline                 | MPRoutePolyline                                                     |
| RouteProperty                 | MPRouteProperty                                                     |
| RouteResult                   | MPRouteResult                                                       |
| RouteSegmentPath              | MPRouteSegmentPath                                                  |
| RouteStep                     | MPRouteStep                                                         |
| RoutingProvider               | MPDirectionsServiceInterface & MPDirectionsServiceExternalInterface |
| Solution                      | MPSolution                                                          |
| SolutionInfo                  | MPSolutionInfo                                                      |
| TransitDetails                | MPTransitDetails                                                    |
| TravelMode                    | MPTravelMOde                                                        |
| URITemplate                   | MPURITemplate                                                       |
| UrlResourceGroupType          | MPUrlResourceGroupType                                              |
| UserRole                      | MPUserRole                                                          |
| Venue                         | MPVenue                                                             |
| VenueCollection               | MPVenueCollection                                                   |
| VenueInfo                     | MPVenueInfo                                                         |
