---
title: Android SDK v4 Changelog
permalink: /changelogs/android/v4/
eleventyNavigation:
  key: Android SDK v4 Changelog
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

## [4.0.0] 2022-09-29

### Added

- Support for new map providers
  - Mapbox
    - MapsIndoors can now be packaged with the Mapbox v10 SDK
- 2D Model support
  - The Android SDK is now capable of displaying 2D Models (also known as Ground Overlays)
- `goTo()`
  - A new method for moving the camera to MapsIndoors locations, this new method `goTo()` can be used with any class that implements `MPEntity`, which includes but is not limited to `MPLocation`, `MPFloor`, and `MPBuilding`
- Solution Config
  - The Android SDK now supports the Solution Config
  - This also introduces the new Main Display Rule, which is bundled into the solution config, along with collision handling, clustering and 3D (walls and extrusions) opacity

### Changed

- Maven package changes
  - With the move to supporting multiple map platforms, we had to move some stuff around in the package, the SDK can now be downloaded via these maven dependencies
    - `'com.mapspeople.mapsindoors:googlemaps:4.0.0'`
    - `'com.mapspeople.mapsindoors:mapbox:4.0.0'`
- Naming convention
  - All public classes now has a MP prefix, with the exemption of MapControl, MapsIndoors and some listeners
  - New interfaces will use the MPI prefix
  - Some public classes will have a `[INTERNAL]` at the top of their javadoc, these classes are used for communication between the core SDK and map platform specific code. Refrain from using these classes unless you know what you are doing
- Display Rules
  - Display rules have been reworked completely
  - It has been reduced to a single class MPDisplayRule
  - It is now reference based, thus any changes to the rule are instantaneous
  - `MPDisplayRuleOptions` has been added and is used to bulk edit display rules
  - Display rules can be reset with `reset()` this will return the display rule to the state it has in the CMS
- Display search results
  - Has been renamed to `setFilter()`, and have been reworked completely
  - Now takes a `MPFilterBehavior`, which is used to dictate the behavior of the filter on the map
- Selection
  - Selection, like filtering, has improved, it now uses a `MPSelectionBehavior` which is used to dictate the behavior of the selection on the map
- Initialization (MapsIndoors and MapControl)
  - Now `MapsIndoors` is initialized with the `load(appContext, APIKey, listener)` method. This applies to both initial initialization, and when updating the context or API key
  - `MapControl` no longer has a public constructor and initializer method, it now uses a factory method `create(MPMapConfig, onMapControlReady)`
    - The `onMapControlReady`  listener will wait for MapControl to finish initializing, this guarantees that `MapControl` cannot be aquired in a broken state
    - The `MPMapConfig` is a collection of settings that previously had to be set on MapControl at various stages of initialization to take effect. These are now bundled into a single package that take effect when `MapControl` finishes initializing
      - These settings can still be updated individually at runtime
- Routing
  - `MPRoutingProvider` has been renamed to `MPDirectionsService` to align with other platforms
  - `MPDirectionsRenderer` has been simplified in use, after creation `MPDirectionsRenderer(MapControl)`, `setRoute(MPRoute)` can be called and it will display the route on the map
- Clustering and Collision handling has been moved from `MPAppConfig` to `MPSolutionConfig`, and have recieved proper typing, Collision handling is now defined by an enum `MPCollisionHandling`
  - Collision handling now has multiple states that allow for better control of how markers are shown on the map

### Removed

- The MPPositionProvider interface has been reduced to 3 methods thare are essential for interfacing a position provider with the SDK
- A large amount of unused/unwanted/unusable classes have been removed from the SDK

### Fixed

- Optimized memory management of icons
- Display rules are now applied much more consistently