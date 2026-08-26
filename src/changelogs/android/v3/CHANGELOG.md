---
title: Android SDK v3 Changelog
permalink: /changelogs/android/v3/
eleventyNavigation:
  key: Android SDK v3 Changelog
  parent: changelogs
  order: 1
---

Changelog for the MapsIndoors Android SDK. This document structure is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and the project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

<!--
### Added        for new features.
### Changed      for changes in existing functionality.
### Deprecated   for soon-to-be removed features.
### Removed      for now removed features.
### Fixed        for any bug fixes.
### Security     in case of vulnerabilities.
-->

null

## [3.13.21] 2023-01-10

### Fixed

- Fixed issue where destroying `MapControl` could result in a crash

## [3.13.20] 2023-01-02

### Fixed

- Fixed issue where tiles would not render when map is loaded

## [3.13.19] 2022-07-20

### Added

- Re-introduced old overlap strategy where the entire marker would be made invisible if it overlapped another.
  - Use `mapControl.setMarkerIndependentIconLabel(false)` to enable it.

### Fixed

- Fixed issue where older devices would be unable to connect to MapsIndoors services
- Fixed issue where reload would cause markers to ignore location specific rules
- Fixed crash that could occur when destroying mapcontrol
- Fixed issue where rendering would seem to stop, only to resume a while later

## [3.13.18] 2022-06-25

### Fixed

- Fixed rare occurrence where the camera would move to the other side of the world during routing

## [3.13.17] 2022-06-24

### Fixed

- Fixed rare issue where routing to entry points might fail
- Fixed issue where icons would not update automatically

## [3.13.16] 2022-06-23

### Fixed

- Fixed sometimes deleted `PolygonDisplayRule` would leave behind a `Polygon` on the map that could not be removed

## [3.13.15] 2022-06-14

### Fixed

- `getDisplayRule(MPLocation)` on `MapControl` would return null, even when a display rule exists for the location

## [3.13.14] 2022-06-10

### Fixed

- Fixed issue with markers sometimes not appearing, on a fresh app install
- Fixed issue with overriding `PolygonDisplayRule` not being reflected on the map

## [3.13.13] 2022-06-07

### Fixed

- Fixed issue with contextual route rendering, where a crash would occur if no available marker icon was found.
- Fixed crash where `BitmapDescriptorFactory` would cause various memory related runtime exceptions under rare circumstances

## [3.13.12] 2022-05-11

### Fixed

- Issue with MapControl.onStart() being called before initialization
- Issue with rendering locations containing polygon display rules that was not an area
- A memory leak when calling MapControl.onDestroy()

## [3.13.11] 2022-04-21

### Fixed

- Issue with tint on shared drawables
- Stability fixes

## [3.13.10] 2022-04-12

### Added

- Interface for querying distance matrix services using `getDistanceMatrix()` on `MPRoutingProvider`

### Fixed

- Various bugs and crashes

## [3.13.9] 2022-04-01

### Fixed

- Crash where the SDK would potentially execute on the wrong thread when modifying display rules

## [3.13.8] 2022-03-31

### Fixed

- Crash where large marker icons would exceed the device's OpenGL max texture size limit

## [3.13.7] 2022-03-17

### Fixed

- Fixed issue with category filter not being respected on `MPFilter`
- Minor security additions
- Fixed issue with `setTileSize()` not working

## [3.13.6] 2022-03-08

### Added

- Added `isInitialized()` to `MPDataSetCacheManager` to check whether it has been initialized

### Fixed

- Toned down rendering frequency in some cases
- Introduced a number of stability fixes

## [3.13.5] 2022-03-02

### Fixed

- Fixed SDK not syncing correctly after calling `MapsIndoors.synchronizeContent()` if App User Roles have been applied
- Fixed SDK routing not working with restricted Google API keys
- Fixed clusters sometimes showing incorrect number of clustered locations

## [3.13.4] 2022-02-21

### Added

- Added `Venue.hasGraph()` which checks whether the venue has a valid routing graph configured

### Fixed

- Fixed App User Roles not syncing correctly, leading to unexpected behavior

## [3.13.3] 2022-02-16

### Changed

- Optimized inital rendering of new Markers
- User roles set on MapsIndoors are now implicitly applied to directions, unless explicitly set on MPRoutingProvider

### Deprecated

- Deprecated `MapControl.unbindFromMap()`

### Fixed

- Fixed issue where `MapControl.init()`'s listener was invoked too soon

## [3.13.2] 2022-02-10

### Fixed

- Fixed an issue where markers may not show on the map on subsequent loading of the same API key
- Fixed an issue with `MapControl.setApiKey()` where the onLoadingReadyListener would never be invoked

## [3.13.1] 2022-02-09

### Fixed

- Fixed crash that occurs when calling `MapControl.onDestroy()` multiple times
- Fixed crash due to markers being removed before changes could be applied to them

## [3.13.0] 2022-02-09

### Changed

- Tweaked how bitmaps are stored in the SDK to lower retained memory size
  - Reduced heap size by up to 90% depending on solution configuration
- Tweaked area rendering to improve rendering performance
- `MapsIndoors.setGoogleAPIKey()` can now be called before `MapsIndoors.Initialize()`
- Improved SDK stability when receiving unknown HTTP responses

### Deprecated

- Deprecated `MPRoutingProvider.queryMultipleDestinations()`
- Deprecated `RouteStep.addSteps()`
  - Use `RouteStep.setSteps()` instead

### Fixed

- Fixed memory leak
- Fixed issue that caused SDK to crash when launched in offline mode
- Fixed issue where receiving a HTTP 500 response crashed the SDK
- Fixed crash that could occur when selecting specific locations
- Fixed issue that caused the SDK to not show proper tiles in some cases
- Various fixes and improvements

## [3.12.6] 2022-01-19

### Fixed

- Fixed issue where map padding was not always applied when changed on runtime
- Fixed issue with a internal library conflicting with newer versions of firebase libraries
- Fixed issue with custom images on locations not being applied on load
- Fixed crash appearing when frequently reloading solutions

## [3.12.5] 2022-01-07

### Fixed

- Fixed behavior where no tiles are shown
- Fixed issue with external routes choosing the wrong entry point
- Various crashes

## [3.12.4] 2021-12-21

### Fixed

- Fixed a potential crash when changing API keys rapidly
- Fixed tiles not being rendered
- Fixed caching issue with images

## [3.12.3] 2021-12-15

### Added

- Added `MPConstants`, which in this first iteration exposes a number of constants related to Z-index levels on the google map

### Changed

- Upped target SDK version to 31 (Android 12)
- Made changes to rendering such that the contents of the map are updated more often

### Deprecated

- Deprecated `MPDatasetCacheManager.getConcurrentTaskLimit()`
- Deprecated `MPDatasetCacheManager.setConcurrentTaskLimits()`

### Fixed

- Fixed issues with linebreaks
- Fixed issue where the floor selector was unremoveable
- Fixed manifest issue that was blocking use of the SDK in Android 12 apps
- Fixed issue where the SDK continued to be 'ready' for a short period after setting user roles
- Fixed an issue where `MPQuery.setNear()` ignored the Z-index of the parameter
- Fixed an issue where initializing the SDK with an invalid API key would lock it
- Various minor fixes

## [3.12.2] 2021-12-07

### Added

- Added `getTranslatedName()` to POIType, which can get the name of a type in plaintext in the correct language
- Added `getLatLngBounds()` to Route

### Deprecated

- `Route.getWaypoint_order()`

### Fixed

- Fixed crash from adding a listener to the LiveDataManager
- Fixed crash where icons did not have a valid resource
- Fixed FloorSelector sometimes not being visible
- Fixed bug that showed wrong directions when changing floors
- Fixed bug where searching for a specific location could include all available locations
- Fixed issue where cache was deleted from SDK before sync was initiated
- Fixed rare NPE that could occur when switching solutions
- Fixed Various other bugs and crashes

## [3.12.1] 2021-11-24

### Fixed

- Fixed issue where LocationSource was Available before it was completely updated
- Various minor fixes

## [3.12.0] 2021-11-23

### Added

- Icon and labels are now handled independently
  - Icons and labels are now separate entities when computing overlaps/collisions
  - Icons and labels can now be shown/hidden at different zoom levels, according to the display rule
- Contextual routing information
  - Now able to allow for context taken from nearby POI's of a given type, using the MPDirectionsRenderer
- Support for authentication
  - Added interface to support single side sign-on from OpenIDConnect providers by setting tokens, which will allow access to otherwise restricted MapsIndoors API keys
- User authenticated booking
  - Revised booking interface to set a token, in order to allow for booking on user calenders

### Fixed

- Significant improvements to loading performance
- Fixed issue where on marker click event was not forwarded properly to Google Maps
- Fixed rare issue where MapControl may never invoke the set listener, upon initialization (OnLoadingDataReadyListener)
- Fixed issue where markers may be retained on the map, when changing floors
- Various minor fixes

## [3.11.2] 2021-11-5

### Added

- `setLocationHideOnIconOverlapEnabled` can now be toggled dynamically

### Changed

- `setLabelMaxWidth` now takes DP (Device-independent Pixels) instead of actual pixels in its parameter

### Fixed

- Files being deleted outside of scope

## [3.11.1] 2021-10-29

### Fixed

- Potential crash when initializing large solutions
- Tiles are now rendering with improved resolution
- Memory leaks

## [3.11.0] 2021-10-27

### Added

- Support for obstacle avoidance zones in routing
- Static method on MapsIndoors to disable internal SDK event logging
- Support for 'ladder' highways
- Icons for ramps, wheelchair ramps and wheelchair lifts
- 'Go to previous leg' behavior added on start marker of a routing line
- Line breaking ability for marker labels. Line breaks can now be enforced manually with '\n' in location names or automated to wrap based on a set labelWidth. (Currently only accessible though overriding LocationDisplayRules)

### Fixed

- Wait times reflected correctly when using offline routing
- Search results are now naturally ordered
- Various loading & SDK initialization issues
- Various route directions rendering glitches
- Various crashes and issues

## [3.10.3] 2021-09-21

### Fixed

- Crash on file reads with external library.
- Fixed bug with Areas sometimes not being rendered correctly.

## [3.10.2] 2021-09-13

### Added

- MapsIndoors now triggers as ready when Locations are loaded.

### Fixed

- Issue with `setApiKey` loading new Solutions. You can now switch between Solutions again by calling `setAPIKey`, and initializing a new `MapControl` object.
- Applying `PolygonDisplayRules` on Locations that does not have Polygon geometry no longer causes a crash
- Issue with Tiles not loading, if a custom Floor Selector is implemented
- Using `near` on `MPQuery` now gives a better ordering in the list in terms of what is near the set location
- Various bug fixes and stability issues

## [3.10.1] 2021-09-08

### Fixed

- Fixed a rare null pointer exception crash related to area polygon display rules rendering

## [3.10.0] 2021-08-19

### Added

- The MapsIndoors SDK records anonymous usage statistics and diagnostic events per default (if enabled in the CMS) and sends the logged data to a server at MapsPeople. Logging may be disabled entirely by calling `MapsIndoors.disableEventLogging(true)` on the SDK.

### Deprecated

- Deprecated `MapsIndoors.setOnMapsIndoorsReadyListener(onReadyListener)`. Use `MapsIndoors.addOnMapsIndoorsReadyListener(onReadyListener)` instead.

### Fixed

- Polygon DisplayRules can now be applied to all Locations with a polygon, not just Areas
- Live Data badges now correctly scale according to the device's pixel density
- Various bug fixes and stability issues

## [3.9.2] 2021-06-21

### Fixed

- Fixed rare null pointer crash on MPImageProvider
- Fixed issue with down-scoping datasets to basic scope, upon synchronizing

## [3.9.1] 2021-06-10

### Fixed

- Routing animation no longer flashes when being animated
- The MapsPeople logo now shows when using a FragmentActivity
- Fixed a certificate issue with lower Android APIs making Live Data and Tiles unavailable
- Selected Locations are now shown, even if another Location was overlapping it with `setLocationHideOnIconOverlapEnabled`
- Various bug fixes and stability issues

### Added

- Added two new Domain Types with default renderings (CO2 and Humidity)
- Made default rendered Live Data badge text more readable
- Added a method to change the text size of marker labels with `setMapLabelTextSize(int textSize)`

## [3.9.0] 2021-05-17

### Fixed

- The POI's label text is now centered on the locaiton, when no icon is shown
- Search has been improved & the "near" parameter works as intended
- Various bugfixes & stability issues

### Added

- LiveData domains for temerapture & count added
- LiveData topic for CiscoDNA positioning integration added
- Fade-in effect on MapsIndoors tiles (enabled by default)
- Set font styling of labels using setMapLabelFont() and setMapLabelTextSize() on the MapControl instance

## [3.8.4] 2021-04-12

### Fixed

- Fixed issue with location source being stuck
- Fixed HTML routing instructions to align with iOS

## [3.8.3] 2021-02-26

### Fixed

- Fixed time zone related issue causing crashes on Android <7

### Added

- Added method to acquire Live Data-style badged icons on MapsIndoors object (getBadgedAvailabilityIcon())
- Added option to set a list of types or locations to search for, when using MPFilter

## [3.8.2] 2021-02-4

### Fixed

- Fixed a crash happening when targeting API level 30 and running on an Android 11 device.

## [3.8.1] 2021-01-29

### Added

- Address fields to Building
- Added pink as the new standard selection highlighting color (to help visually impaired users)

### Fixed

- Various bugfixes

## [3.8.0] 2021-01-07

### Added

- Support for booking

### Changed

- Made LiveData interfaces more intuitive and simpler.

### Fixed

- Minor bugfixes and improvements

## [3.7.0] 2020-10-22

### Added

- Support for offline datasets via the DataSetManager
- Rewrite of the internal networking layer, resulting in faster and more reliable networking
- Rewrite of the internal file handling, improving file system usage and speed
- Minor improvements

## [3.6.1] 2020-10-15

### Added

- Support for rendering polygons (i.e. Areas) through DisplayRules

### Fixed

- Various bugfixes

## [3.6.0] 2020-10-01

### Added

- Support for Live Data added. Information and documentation about this new feature is available at [Live Data Guide](https://docs.mapsindoors.com/map/live-data/)

### Fixed

- Various bugfixes

## [3.5.2] - 2020-07-15

### Fixed

- Fixed an issue that could cause an IndexOutOfBoundsException if data got corrupted.
- Issue causing MPApiKeyValidatorService to always return true, no matter the validity.
- Fixed an issue that caused the FloorSelector to occasionally show outside the selected venue.
- Fixed an issue that caused selections to be shown across floors.
- An issue that occationally caused a crash when switching between travel modes in offline routing

## [3.5.1] - 2020-07-07

### Fixed

- Changed the getField() method in MPLocation to be case insensitive

## [3.5.0] - 2020-06-16

### Added

- Selection of default Floor when panning between Buildings

### Fixed

- Locations disappear after applying Category Filter
- Fixed an issue in the Floor Selector that prevented it from hiding in some cases

## [3.4.0] - 2020-03-18

### Added

- Feature: Ability to override a Location's display rule at runtime (in v2 this was achieved by using `Location.setType( type )`):
  - `MapControl.setDisplayRule( displayRule, location | locations )`: Sets a display rule on the given Location(s) that overrides the current ones being used.
  - `MapControl.setDisplayRule( displayRuleName, location | locations )`: Sets display rule (by its type - name) on the given Location(s) that overrides the current ones being used.
  - `MapControl.getDisplayRule( location )`: Retrieves the current display rule being used by the given Location.
  - `MapControl.resetDisplayRule( location | locations )`: Removes the override display rule on the given Location(s).

- `MPFilter.Builder.setIgnoreLocationActiveStatus( ignoreActiveToFromStatus )`: Makes queries return Location that are marked as inactive using the "active from"/"active to" mechanism.
- `MPApiKeyValidatorService`: added a couple of new methods:
  - `checkAPIKeyValidity( apiKey, listener )`: Checks the validity of the given MapsIndoors API key. The SDK doesn't need to be initialized in order to call this method.
  - `validateAPIKeyStringFormat( apiKey )`: Checks that the given API key string format is a valid one. This method only checks the string format.
- Feature: `RoomId` has been replaced by `ExternalId`. The following methods have been added:
  - `MPLocation.getExternalId()`: Retrieves the `externalId` property, if available. Should be used instead of the now deprecated `MPLocation.getRoomId()`.
  - `MPLocation.Builder.setExternalId( externalId )`: Sets a custom `externalId` (a db item id, etc.). This replaces `MPLocation.Builder.setRoomId( roomId )`.
  - `Building.getExternalId()` and `Venue.getExternalId()`

### Deprecated

- `MPFilter.Builder.setIgnoreSearchableStatus( ignoreSearchableStatus )`: Use `MPFilter.Builder.setIgnoreLocationSearchableStatus( ignoreSearchableStatus )` instead.
- `MPLocation.getRoomId()`: Use `MPLocation.getExternalId()` instead.
- `MPLocation.Builder.setRoomId( roomId )`: Use `MPLocation.Builder.setExternalId( externalId )` instead

### Fixed

## [3.3.3] - 2020-02-25

### Fixed

- Populate the right floor index for venues, buildings, floors search results locations.

## [3.3.2] - 2020-01-29

### Fixed

- Fix "Software rendering doesn't support hardware bitmaps" crash.

## [3.3.1] - 2020-01-13

### Fixed

- Fix default floor selector crash
- Fix icons loading failure for icons hosted in firebase storage.

## [3.3.0] - 2019-12-20

### Added

- Support of searchable and activity bits for locations.
- Default floor on buildings:
  - `Building.getDefaultFloor()`: Returns a building's default `Floor`, if any has been set from the CMS.
  - `Building.getDefaultFloorIndex()`: Returns a building's default **floor index**, if any has been set from the CMS. It will return `Floor.NO_FLOOR_INDEX` if the default floor is not available (`Building.getDefaultFloor() == null`).
  - `Building.getFloorMap()`: Returns a list of floor indices and localized names for the given building.

- Custom fields, exposed in the following classes: `Venue`, `Building`, `MPLocation`, `Category`, `POIType`. If available, they can be retrieved by using `getField( fieldName )`.

- Status data. For detailed info, please refer to the [status bitfield description](https://docs.mapsindoors.com/api/v1/#detailed-data-description) in our Integration API documentation.
  - The following methods are available in `MPLocation`:
    - `getStatus()`: Returns a status bitfield. For more info, please check the above link.
    - `isActive()`: If an element **is not** active, it will **not** be given to the apps.
    - `isSearchable()`: If an element **is not** searchable it might be shown on the map, but **is not** show up **in** searches.

- Better Display Rule icon and label visibility control by using:
  - `DisplayRule.getIconVisible()`
  - `DisplayRule.getLabelVisible()`
  - `LocationDisplayRule.Builder.setShowIcon( show )`
  - `LocationDisplayRule.Builder.setShowLabel( show )`

- New Floor selector:
  - Use the new interface (`FloorSelectorInterface`) to create a custom floor selector.
  - Turn on/off the floor selector (default or custom) using `MapControl.enableFloorSelector( enable )`.
  - Query the its current status with `MapControl.isFloorSelectorEnabled()`.

- New `displaySearchResults` overloads in `MapControl` :
  - `displaySearchResults( inputLocations, animateCamera, cameraPadding, readyListener )`.
  - `displaySearchResults( inputLocations, animateCamera, cameraPadding, showInfoWindow, googleMapCameraUpdate, durationMs, googleMapCancelableCallback, readyListener )`.

- `SolutionInfo.hasLanguage( language )` (usage: `MapsIndoors.getSolutionInfo().hasLanguage( language )`): Check if the given language is available in the current dataset.

- `MPMapsIndoorsLocationSource.updateLocations( updatedLocations )`: Used to signal an update on the given `MPLocation` objects if the case the default Location Data Source is extended.

- New methods in the `Building` class:
  - `getFloorCount()`: Current building total floor count.
  - `getFloorMap()`:  A HashMap containing floor index (key), floor name (value) pairs. Note that the floor name is localized.

- New shortcut methods in `MPLocation` to query for its geometry type: `isLocationOfTypePOI()`, `isLocationOfTypeRoom()`, etc.

### Changed

- `MapControl.setFloorSelector( floorSelector )`: It takes now a `FloorSelectorInterface` instead of a `IFloorSelector`.

### Deprecated

- `dbglog.useDebug()`: Use `dbglog.enableDeveloperMode( enable )` or `dbglog.enableDeveloperMode( enable, customTagPrefix )`.

- `dbglog.isDebugMode()`: Use `dbglog.isDeveloperMode()`.

### Removed

- `MapControl.setFloorSelectorType( FloorSelectorType )`: The new interface only provides Building data for the current visible in the Map View (or the closest to the camera target).

### Fixed

- General bug fixing.
- Stabilizing many behaviours of the SDK.

## [3.1.1] - 2019-05-27

### Fixed

- Fixed some issues related to the deinitialization of MapControl and MapsIndoors (class)

## [3.1.0] - 2019-05-21

### Added

- Support for runtime (indoor tiles) map-style switching. Related methods added:
  - `Venue.getMapStyles()`: Gets a list of available map styles. Note that all venues share the map styles
  - `Venue.getDefaultMapStyle()`: Gets the default map style used by the SDK.
  - `Venue.isMapStyleValid( MapStyle )`: Checks the validity of the given map style
  - `MapControl.getMapStyles()`: Gets a list of available map styles. Note that all venues share the map styles
  - `MapControl.getMapStyle()`:  Gets the current map style set with `MapControl.setMapStyle( MapStyle )`
  - `MapControl.setMapStyle( MapStyle )`: Sets the given map style as the current one. It can be invoked before or after `MapControl.init()`
- Ability to change a Display Rule visibility at runtime. Related methods:
  - `MapControl.getDisplayRules()`: Returns the aggregated display rules
  - `MapControl.getDisplayRule( type )`: Returns the display rule with the given name, if any found
  - `LocationDisplayRule.setVisible( show )`: Sets this Location Display Rule to be visible (based on the zoom on/off values) or not (marker icon not shown)
- MPLocation now exposes its Geometry by using:
  - `MPLocation.getGeometry()`: Retrieves the Geometry of an MPLocation (Point, PolygonGeometry, etc.)
  - `MPLocation.getGeometryType()`: Returns the Geometry type as a in integer value (Geometry.TYPE_POINT, (Geometry.TYPE_POLYGON, etc.)
  - `MPLocation.setGeometry( polygonGeometry )`: Sets the given PolygonGeometry as a location's Geometry
  - `MPLocation.setLocationType( locationType )`: Sets the location's type (poi, area, or room)
- Location data status listener:
  - In version 3, POI data (Locations) loading is not in sync with other data such as buildings, venues, etc. Both `MapsIndoors.synchronizeContent()` and `MapControl.init()` callbacks will be invoked once all but Location data is ready to consume. We've added an separate method that sets a listener for Location data only (`MapsIndoors.addLocationSourceOnStatusChangedListener()`).

### Changed

- Clustering:
  - `MapControl.setLocationClusteringEnabled( enable )` can be only invoked **BEFORE** `MapControl.init()`; doing so afterwards will throw an exception (if `dbglog.useDebug()` is set to `true`)
- Updated the network layer so in case of network errors, will serve cached data when/where possible

### Deprecated

- `Venue.getStyles()`: Use `Venue.getMapStyles()` instead
- `Venue.getDefaultStyle()`: Use `Venue.getDefaultMapStyle()` instead

### Fixed

- Better handling of broken custom/advanced icon links.
