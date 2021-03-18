---
title: JavaScript SDK Changelog
permalink: /changelogs/web/
eleventyNavigation:
    parent: changelogs
    key: Web SDK Changelog
    order: 5
---

Changelog for MapsIndoors SDK for JavaScript. This document structure is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and the project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [4.6.0] - 2021-03-01

### Added

- Areas - It's now possible to render Areas on the map using Display Rules.

## [4.5.2] - 2021-02-23

### Fixed

- MICommon updated to 2.1.0 with improved distance/text ranking correlation.

## [4.5.1] - 2021-02-16

### Fixed

- A bug in the directions renderer where directions going from a POI not on the ground floor to an external address would not render correctly on the map.

## [4.5.0] - 2021-02-01

### Added

- Booking service - Adds support for booking of Locations. It requires integration to a calendar provider e.g. Google Calendar for this to work. For more information about our Booking service and how to get started, please contact our sales team.

### Fixed

- Prevent crash in case of nonexisting venue on location
- Prevent crash in case of rendering badge on nonexisting icon
- Improved distance/text ranking correlation (micommon)
- In some cases the route step would have a wrong travel mode when routing from one venue to another.

## [4.4.0] - 2021-01-11

### Added

- `fitBoundsPadding` has been added as an optional parameter to the `DirectionsRenderer` constructor. It can be used to add a padding around the route when the map is fitted to a route leg or route step.
- Step switching has been added to the `DirectionsRenderer`. It is now possible to call `nextStep()` or `previousStep()` to navigate between each step of the route. `setStepIndex(stepIndex, legIndex)` can be used to set the renderer to a specific step on a specific leg. If the `legIndex` is not specified then the current `legIndex` is used.

### Fixed

- External IDs are now searchable.
- Updated the documentation for the `BuildingOutlineOptions`.
- `getBuildingOutlineOptions()` no longer returns undefined.
- The optional parameters for `DirectionsRenderer` will now have an effect when set in the constructor.
- Updated the documentation for `LabelOptions`. Added missing `fontWeight` property. Do note that `fontWeight` is not supported by MapBox.

## [4.3.1] - 2021-01-06

### Fixed

- Fixed wrong icon scale calculation.

## [4.3.0] - 2021-01-04

### Added

- LiveDataInfo class for checking if live data domain type is available on the loaded solution.

### Changed

- LiveDataManager `enableLiveData()` and `subscribe()` will no longer attempt to make subscription if the live data domain type is not available on the solution.

### Fixed

- Prevent faulty travel modes when getting directions inside MapsIndoors venues.

## [4.2.1] - 2020-12-17

### Fixed

- The Directions Service would in some cases not return the most optimal route.

## [4.2.0] - 2020-12-16

### Added

- Support for Live Data via a new `mapsindoors.LiveDataManager` class. For more information about Live Data and how to get started, please contact our sales team.
- `mapsindoors.BadgeRenderer` helper class to apply a badge onto an image.
- Support for overriding a display rule and removing the override again (`overrideDisplayRule()`, `revertDisplayRule()`).
- Optional `ignoreOverrides` parameter on `getDisplayRule` (defaults to `false`).

## [4.1.5] - 2020-12-17

### Fixed

- The Directions Service would in some cases not return the most optimal route.

## [4.1.4] - 2020-12-16

### Fixed

- Google Maps will enable zoom level 22 by default if the `maxZoom` is not specified. The SDK will now set  `maxZoom`  to 21 if  `maxZoom` hasn't been specified when creating the MapView.

## [4.1.3] - 2020-12-15

### Fixed

- An issue where the default styling of labels would render almost unreadable labels.
- An issue where the My Position icon didn't follow the users' movement.
- Improved internal caching of the services to reduce network traffic.
- Improved performance of the ViewState.

### Changed

- The SDK will now check if the 'z22' module is enabled and set the max zoom on the MapView to 22 unless the MapView is initialized with max zoom specified. (Contact our sales team to hear more about this feature).
- The default color of the building outlines to `#EF6CCE`.
- The default color for the Directions Renderer to `#3071D9`.
- MICommon has been updated to the latest version.

## [4.1.2] - 2020-12-03

### Fixed

- An issue where directions between two venues would cause an error.

### Changed

- Minor updates of the documentation.

## [4.1.1] - 2020-11-20

### Fixed

- An issue where the Directions polyline would visible on all floors.

## [4.1.0] - 2020-11-12

### Added

- Added static functions setUserRoles and getUserRoles to the MapsIndoors object. `mapsindoors.MapsIndoors.setUserRoles()` and `mapsindoors.MapsIndoors.getUserRoles()`.
- Added start_context and end_context properties to MapsIndoors directions steps. The properties contain references to the venue, building, and floor for a given start or end location for a given step.

### Changed

- The MapsIndoors Directions Provider now uses the globaly set userRoles. The userRoles parameter on the Directions service if set will override this.
- MICommon have been updated to the latest version.

### Fixed

- The Google Map is now properly shown even though map center is not set.
- An issue when the user clicked a room on a Google Map the click event would return `null` as the location property.
- An issue where settting floor early would cause wrong map tiles to be shown.

## [4.0.0] - 2020-10-29

The MapsIndoors JavaScript SDK V4 can now be used with [Google Maps](https://developers.google.com/maps/documentation/javascript/overview) and [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/). It introduces several **breaking changes**, so read this carefully.

### Added

#### Classes

mapView classes that acts as map library adapters (map creation and common interface) to MapsIndoors:

- `mapsindoors.mapView.GoogleMapsView`: mapView for Google Maps.
- `mapsindoors.mapView.MapboxView`: mapView for Mapbox GL JS.

#### Methods

- `mapsIndoors.getFilter()` returns the array of locations ids that the locations on the map are currently filtered by.

#### Events

- `venue_changed` event on MapsIndoors that fires if the venue changes after calling `mapsIndoors.setVenue()`.

### Changed

#### MapsIndoors class

Instantiation:

- Create an instance of a mapView, either `mapsindoors.mapView.GoogleMapsView` or `mapsindoors.mapView.MapboxView`.
- Then create an instance of MapsIndoors like this: `const mapsIndoors = new mapsindoors.MapsIndoors({mapView: mapViewInstance});`.

Methods:

- `setApiKey()` is renamed to `setMapsIndoorsApiKey()`.
- `getMapStyle()` is renamed to `getMapIndoorsStyle()`.
- `getMapStyles()` is renamed to `getMapIndoorsStyles()`.

#### Services

- All services (DistanceMatrixService, GeoCodeService, LocationsService, AppConfigService, DirectionsService, ShareService, SolutionsService, VenuesService) must now be accessed by the `mapsindoors.services` namespace, eg. `mapsindoors.services.AppConfigService`.

#### DirectionsService

- The class must now be instantiated and given an instance of en external directions provider, either `mapsindoors.directions.GoogleMapsProvider` or `mapsindoors.directions.MapboxProvider`.
- A route `Leg` now encompasses a part of a route until a change in floor level, no matter the travel mode.
- `Step.abutters` is changed to `Step.route_context`, and the value `OutsideOnVenue` is now always `Outside`.
- All steps from an external directions provider will have `routeContext` set to `Outside`.
- The route results (and the legs) now includes a `geometry` object that contains a GeoJSON LineString for the route or leg.

#### Directions renderer

- DirectionsRenderer class must now be accessed under the directions namespace, i.e. `mapsindoors.directions.DirectionsRenderer`.
- DirectionsRenderer no longer requires the map as a constructor parameter.

### Removed

- `MapsIndoors.setMap()` is removed.
- `DirectionsRenderer.getMap()` is removed.
- `zIndex` is removed on `DirectionsRendererOptions`.

## [3.12.1] - 2020-10-06

### Fixed

- The search algorithm in MICommon has been updated so a partial match on the start of a word would be ranked higher.

## [3.12.0] - 2020-08-18

### Added

- Locations for Venues, Buildings, and Floors is now included in the results from LocationsService.getLocations().
- getFieldForKey on Locations objects for getting data for custom property with key, disregarding casing of key.

### Fixed

- Filtering locations using categories in LocationsService.getLocations().
- Filtering locations using venue or building had no effect in LocationsService.getLocations().
- Sometimes querying using the take parameter would return fewer results than expected.

## [3.11.0] - 2020-07-27

### Added

- Added support for [OpenID Connect](https://openid.net/connect/) authentication flow.

### Fixed

- Fixed issue where the SDK would throw an error if locations were requested before data had been loaded.

## [3.10.0] - 2020-06-11

### Added

- Added option to DirectionsRenderer to control if the map's viewport will be fitted to the bounds of the rendered route.

## [3.9.0] - 2020-05-02

### Added

- This release is build on MICommon

## [3.8.1] - 2020-04-01

### Fixed

- Inaccessible localStorage in the browser will no longer crash the SDK.

## [3.8.0] - 2020-03-02

### Changed

- Added externalId property on location properties object. roomId is now deprecated.

## [3.7.1] - 2020-02-06

### Fixed

- PositionControl no longer regards saved position permission as invoked by clicking on the position control.

## [3.7.0] - 2020-01-31

### Added

- PositionControl to show device position on the map.

### Fixed

- Error response body is now relayed correctly.

## [3.6.0] - 2020-01-02

### Changed

- ShareService.directionsToPhone now requires country code to be provided seperately.

## [3.5.1] - 2019-12-19

### Changed

- Changed the locations service to utilize the new backend apis new url structure.

### Fixed

- Fixed a bug where VenuesService.getBuildings calls for solutions/venues with no buildings caused rejection.

## [3.5.0] - 2019-12-17

### Added

- Share service with function to send route directions via text message to phone.

### Fixed

- Fixed a bug where user roles were not passed along to distance matrix call.
- Fixed bug where getBuilding returned undefined until the map had been moved.

## [3.4.1] - 2019-10-30

### Added

- Client side caching. Most request are now beeing cached in the browser.
- Added support for separate visibility control of label and icon

### Fixed

- The DirectionsService will now return a route object with the status "ZERO_RESULTS" if no route could be calculated.
  Before it unintentional threw an error.
- Fixed a bug where the imageURL property on locations sometimes would be named imageurl.

## [3.4.0] - 2019-08-28

### Changed

- Floor calculation when building comes into focus according to agreed upon strategy, including respecting default floor of a building.
- The filter method now respects the fitView boolean also when clearing filter.

### Fixed

- Make sure selected/highlighted floor is always visible (no need to scroll) when focusing building.

## [3.3.2] - 2019-08-15

### Fixed

- App config cache is now based on solution to avoid misconfiguration when switching solution.

## [3.3.1] - 2019-07-31

### Fixed

- No longer assume that location `imageURL` always is received in lowercase from the backend.

## [3.3.0] - 2019-07-15

### Added

- `SolutionsService.getUserRoles()` gets a list of user roles that can be used for filtering the directions result. This prevents routes from going through restriced areas.

### Changed

- userRoles parameter added to DirectionsService.getRoute() for filtering the directions result. The userRoles paramter takes a array of user role ids.
- Directions to a venue can now make directions via a parking lot when driving or bicycling.

## [3.2.3] - 2019-06-27

### Fixed

- Fixed a bug in `mapsindoors.DirectionsRenderer`.
  When `setRoute(null)` was called to remove the route from map it would throw an error.
- Fixed the "Cannot read property 'toJSON()' of null" error caused by looking for buildings in view before the map has a bounding box.

## [3.2.2] - 2019-06-24

### Changed

- Fixed build toolchain to prevent IE11 crash.

## [3.2.1] - 2019-05-24

### Added

- Added the ability to change the api key at runtime via `mapsindoors.MapsIndoors.setApiKey(key);`
- Added the functions to get and set the language at runtime:
  - `mapsindoors.MapsIndoors.setLanguage(language);`
  - `mapsindoors.MapsIndoors.getLanguage();`

### Changed

- The SDK now selects the fastest backend server based on a latency test.
- A list of known backends is stored in localStorage for the SDK to choose from.
  The list of known backends are updated automatically as part of the latency test.

## [3.1.1] - 2019-03-14

### Fixed

- Fixed a crash caused by setting mapStyle via the MapsIndoors constructor.

## [3.1.0] - 2019-03-13

### Changed

- It's now posible to set a displayRule for a list of location ids or types. `myMapsIndoors.setDisplayRule(["abc", "cde", "fgh"], { visible: false });`

### Added

- Added the functions setMapStyle, getMapStyle and getMapStyles to MapsIndoors.
  - setMapStyle() set a new indoor map style.
  - getMapStyle() get the current style of the indoors map.
  - getMapStyles() get a list of availeble indoor map styles.

## [3.0.5] - 2019-02-27

### Fixed

- Optimized map performance by reducing the amount POIs

## [3.0.2] - 2019-02-19

### Fixed

- Support for IE 11

## [3.0.0] - 2018-10-23

### Changed

- Script must now be loaded with apikey parameter instead of solutionId, e.g. `https://app.mapsindoors.com/mapsindoors/js/sdk/mapsindoors-3.0.0-rc0.js?apikey=57e4e4992e74800ef8b69718`
- All services are now shared instances, so they cannot be newed. E.g. you must rewrite `let directionsService = new mapsindoors.DirectionsService();` to `let miDirectionsService =  mapsindoors.DirectionsService;`
- Location click events for a MapsIndoors instance are now subscribable with the event name `click` instead of `location_click`, e.g.         `google.maps.event.addListener(myMapsIndoors, 'click', (poi) => { console.log(poi.id); });`
- `DirectionService.route()` has been renamed to `DirectionService.getRoute()`.
- `DirectionRenderer.setDirections()` has been renamed to `DirectionRenderer.setRoute()`.
- `DirectionService.getRoute()` request parameter `travelMode` has been renamed to `mode`.
- `DirectionRenderer.setDirections()` now only accepts a single route instead of a route result, e.g. `DirectionRenderer.setRoute(myRouteResult.routes[0])`.
- To highlight locations on a map through a `MapsIndoors` instance, instead of providing a query object to `MapsIndoors.find()`, you must now pass a list of `locationId`'s to `MapsIndoors.filter()`.

### Removed

- Removed `MapsIndoors.find()`, use `MapsIndoors.filter()` instead
- Removed `MapsIndoors.locate()`, use `MapsIndoors.filter()` instead

### Added

- Icons for single Locations can now be updated independantly, by referencing the location id. E.g. `myMapsIndoors.setDisplayRule('some-location-id', { icon: { url: 'https://icon.url' } });`

### Fixed

- Fixed a rendering bug that was causing MapsIndoors' map markers to occasionally disappear
