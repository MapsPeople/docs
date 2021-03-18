---
title: Android SDK v3 Changelog
permalink: /changelogs/android/v3/
eleventyNavigation:
  key: Android SDK v3 Changlog
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

- Support for Live Data added. Information and documentation about this new feature is available at [Live Data Guide](https://docs.mapsindoors.com/android/v3/live-data/)

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

## [2.0.3] - 2018-06-

### Added

- `MapsIndoors.getAvailableLanguages()` returns a list of the Solution's available languages or just `null` if data isn't available
- `MIConnectivityUtils.isOnline()` replaces `UrlLoader.isOnline()`
- `MapControl.setOnMarkerInfoWindowLongClickListener()`

### Changed

- `MapsIndoors.getDefaultLanguage()` will return now the Solution's default language instead of the library's fallback one. If there is no data available yet, this method will now return `null`

### Deprecated

- `UrlLoader.isOnline()`. Use `MIConnectivityUtils.isOnline()` instead

## [2.0.2] - 2018-06-20

### Changed

- `Point.equals()` will return true if the distance between them is less than 1m. It also takes into account its Z value (altitude)
- Graph data is be now available by default. This will enable offline routing when indoors

### Fixed

- Fixed a crash in `MapsIndoors.setLocationsProvider` when trying to set a custom locations provider

## [2.0.1] - 2018-06-11

### Fixed

- The blue dot (current user location) didn't move after the first time it was set.

## [2.0.0] - 2018-06-07

## [2.0.0-rc9] - 2018-06-07

### Deprecated

- `MPRoutingProvider.setGoogleServerKey()`: Set the Google API Key with `MapsIndoors.setGoogleAPIKey()` and retrieve it via `MapsIndoors.getGoogleAPIKey()`

## [2.0.0-rc8] - 2018-06-04

### Fixed

- `MPLocationsAsyncLoader`: Internal cache not properly updated on multi-Solution projects

## [2.0.0-rc7] - 2018-06-04

### Added

- `LocationQuery.Builder.setDataSync()`: Sets the location provider in "data sync mode"

## [2.0.0-rc6] - 2018-05-30

### Added

- `MapsIndoors.enableOfflineTilesUpdates()`: Only used in projects with offline data enabled and set to get indoor tiles embedded in the app
- `MapControl.setDisplayRuleLabelDefaultMaxCharLength()`: This caps all display rule label string lenghts at the given value at render time

### Deprecated

- Use the new `MPDirectionsRenderer( Context context, GoogleMap map, MapControl mapControl, OnLegSelectedListener legSelectedListener )` which takes an instance of MapControl

### Fixed

- Routing: "Next" labels on the map not clickable

## [2.0.0-rc5] - 2018-05-28

### Changed

- Changed MapsPeople's logo (watermark) to the right (right side in LTR, left on RTL languages)

## [2.0.0-rc4] - 2018-05-23

### Fixed

- Fixed issue in `MapsIndoors.MIImageProvider`

### Deprecated

- In the `dbglog` class deprecated `SetLoglevel()`, `startTimer()` and `startTimer()`
- Use the Kotlin friendly `MPDirectionsRenderer( Context context, GoogleMap map, OnLegSelectedListener legSelectedListener )` constructor instead of `MPDirectionsRenderer( Context context, OnLegSelectedListener legSelectedListener, GoogleMap map )`

## [2.0.0-rc3] - 2018-05-17

### Added

- Implemented `MapsIndoors.getLocationById()`

- Added `MapsIndoors.isOnline()`
- Added `MapsIndoors.allowToDownloadData()` and `MapsIndoors.isAllowedToDownloadData()`

### Changed

- Non-sync backend location queries will now return a list of local data references

## [2.0.0-rc2] - 2018-05-15

### Fixed

- Fixed crash in `MapControl` when a devices's orientation changed (portrait <-> landscape)

### Added

- Added two new methods to the `Floor` model (`getOutline()` and `getOutlineAsLatLngList()`)

## [2.0.0-rc1] - 2018-05-14

### Added

- Floorplan tile sizes can be now set with `MapControl.setTileSize( tileSize )`. Tile sizes depend on the Solution (it is not mandatory for all MapsIndoors Solutions to support all tile sizes)

### Changed

- Changed `MPRoutingProvider` method signature from `setDateTime( Calendar date, boolean isDeparture )` to `setDateTime( int date, boolean isDeparture )`.

### Deprecated

- All `MapControl.setMapPosition`. These were just wrapper methods around `GoogleMap.animateCamera` and `MapControl.moveCamera`
