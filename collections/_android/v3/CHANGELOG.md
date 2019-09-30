---
title: Changelog
published: true
nav_weight: 1000
permalink: /android/v3/changelog/
date: 2019-09-30
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
- Hability to change a Display Rule visibility at runtime. Related methods:
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

## [2.0.3] - 2018-06-??

### Added

- `MapsIndoors.getAvailableLanguages()` returns a list of the solution's available languages or just `null` if data isn't available
- `MIConnectivityUtils.isOnline()` replaces `UrlLoader.isOnline()`
- `MapControl.setOnMarkerInfoWindowLongClickListener()`

### Changed

- `MapsIndoors.getDefaultLanguage()` will return now the solution's default language instead of the library's fallback one. If there is no data available yet, this method will now return `null`

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

- `MPLocationsAsyncLoader`: Internal cache not properly updated on multi-solution projects

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

- Floorplan tile sizes can be now set with `MapControl.setTileSize( tileSize )`. Tile sizes depend on the Solution (it is not mandatory for all MapsIndoors solutions to support all tile sizes)

### Changed

- Changed `MPRoutingProvider` method signature from `setDateTime( Calendar date, boolean isDeparture )` to `setDateTime( int date, boolean isDeparture )`.

### Deprecated

- All `MapControl.setMapPosition`. These were just wrapper methods around `GoogleMap.animateCamera` and `MapControl.moveCamera`
