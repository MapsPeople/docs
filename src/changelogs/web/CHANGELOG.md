---
title: JavaScript SDK Changelog
permalink: /changelogs/web/
eleventyNavigation:
    parent: changelogs
    key: Web SDK Changelog
    order: 5
---

Changelog for MapsIndoors SDK for JavaScript. This document structure is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and the project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [4.56.0] - 2026-03-25

### Features

- Added efficient hover state management for Mapbox with overlay-based rendering
- Implemented highlight badge system with customizable styling and hover scaling

### Improvements

- Hover interactions now use lightweight overlay sources instead of full ViewState updates on Mapbox
- Graphic labels automatically swap to highlight backgrounds when highlighted

## [4.55.0] - 2026-03-23

### Features

- Added Mapbox-optimized selection rendering for improved performance.

### Improvements

- Building-in-view detection now uses distance-based threshold for better floor selector UX.
- Selection/deselection uses native Mapbox rendering when available.

## [4.54.0] - 2026-03-18

### ⚠️ Breaking Changes

- **Automatic floor switching on viewport-based building changes is now disabled**
  - When the viewport moves to a different building, the floor will no longer automatically switch.
  - Applications must manually handle floor changes via `setFloor()` if needed.
  - User-initiated building changes still trigger automatic floor switching.

### Features

- Improved building detection using polygon-based point-in-polygon testing with area-based tie-breaking.

### Improvements

- Clear hover state on zoom start.
- Updated Mapbox GL JS to v3.20.0 for all test environments.
- Added `@turf/boolean-point-in-polygon` dependency for accurate building geometry calculations.

## [4.53.0] - 2026-03-13

### Added

- Improved internal Slack bot messaging when the new official release of the Web SDK is out.

### Improvements

- Added `skipPartialUpdates` option to prevent 3D element flickering during selection/highlight changes.
- Optimized mouse move debounce and hover timeout to 16.66ms (60fps) for smoother interactions.
- Simplified highlight clearing on location selection.

### Bug Fixes

- Fixed zoom-based display rule filtering for Google Maps by implementing view model-level zoom filtering.
- Changed zoom event listener from `zoom_level_changed` to `zoom_changed` for Google Maps compatibility.

### Features

- Added `getModules()` method to retrieve enabled solution modules.

## [4.52.2] - 2026-03-04

### Fixed

- Simplified layer filter logic by always applying zoom range filtering for display-rule-based visibility.

## [4.52.1] - 2026-03-03

### Fixed

- Fixed `setExtrudedBuildingsVisibility` timing issue: visibility is now applied immediately when the style is already loaded, instead of only on the next `style.load` event. Added basemap check to avoid errors when the style has no basemap import.

## [4.52.0] - 2026-02-27

### Features

- Added building-in-view synchronization for floor selector when `ignoreViewportBounds` is enabled

### Improvements

- Optimized viewport-based building detection with debounced idle event listener

## [4.51.1] - 2026-02-26

### Fixed

- Fixed duplicate source errors by ensuring idempotent source addition in MapboxV3View (prevents errors from multiple `style.load` events or failed style diffs)

## [4.51.0] - 2026-02-26

### Performance Enhancements

- Introduced zoom range filtering for Mapbox layers to manage feature visibility without triggering ViewState updates when `ignoreViewportBounds` is enabled.
- Removed unnecessary ViewState update listeners (move, center_changed, maptypeid_changed, touchstart, tilesloaded, dragstart, drag, rotateend) to reduce performance overhead.
- Reduced hover timeout from 100ms to 50ms for faster hover state updates.
- Conditional ViewState updates: ViewState now only updates on dragend and `zoom_level_changed` when `ignoreViewportBounds` is disabled.

### Features

- Added `ignoreViewportBounds` configuration option via AppConfigService to control viewport-based ViewState updates.
- Added `removeMapboxExtrudedBuildings` configuration option to control visibility of Mapbox extruded buildings.
- Implemented zoom range filter utility functions (withZoomFilter, layerFilter) for display-rule-based layer visibility.

### Improvements

- Reordered graphic labels layer to render after point layers, ensuring proper z-ordering (icons behind, graphic labels in front).
- Changed `MI_POINT_LAYER` slot from 'middle' to 'top' for better visual hierarchy.
- Updated all layer filters to use explicit `['get', 'propertyName']` syntax for better Mapbox compatibility.
- Added clarifying comments for ViewState updates in hover and selection methods to document why full updates are required.

### Bug Fixes

- Fixed bug in `ViewModel.isWithinZoomRange()` where zoomTo validation was incorrectly checking `zoomFrom` instead.
- Fixed feature state bleeding between locations by clearing highlighted locations on selection.

## [4.50.0] - 2026-02-23

### Added

- Introduced a check for Mapbox version 3 to conditionally set the 'slot' property for layers.
- Refactored layer options into separate constants for better readability and maintainability.
- Enhanced icon layout configuration to include version-specific properties, improving compatibility with Mapbox v3.

## [4.49.1] - 2026-02-13

### Fixed

- Various performance improvements.

## [4.49.0] - 2026-02-04

### Added

- Added support for hover effects on polygons and points, including darkening colors on hover (Mapbox v3).
- Introduced new properties for managing hover states and timeouts.
- Updated icon size calculations to incorporate hover scaling.

## [4.48.1] - 2026-01-20

### Fixed

- An issue when pixelOffset for Floating Labels would not work as expected.

## [4.48.0] - 2026-01-15

### Added

- Introduced `setExtrudedBuildingsVisibility` method to toggle the display of 3D objects based on the provided visibility parameter.
- Ensured the method waits for the map style to load before applying the visibility setting.

## [4.47.1] - 2026-01-12

### Fixed

- An issue when avoid stairs was not respected in some cases.
- An issue when clip layer was not applied correctly to the map.

## [4.47.0] - 2026-01-09

### Added

- Increased unit tests coverage.
- Validation for mapDiv dimensions to prevent NaN errors during viewport calculation.
- Support for dynamic positioning of MI_POINT_PRIORITY_LAYER if it exists, alongside MI_POINT_LAYER and MI_HIGHLIGHT_LAYER.

### Fixed

- An edge-case where Google Maps labels were not properly rendered on the map.

## [4.46.1] - 2025-12-16

### Fixed

- Introduced 'fill-extrusion-line-width' with a value of 0.03 to enhance the visual representation of wall extrusions in the MapboxV3View.

## [4.46.0] - 2025-12-04

### Added

- Introduced a private label text size multiplier in both views to allow dynamic adjustment of label font sizes.
- Implemented methods to set, get, and reset the label text size multiplier.
- Updated existing labels to reflect changes in the multiplier when applied.

## [4.45.0] - 2025-12-03

### Added

- Enhanced viewport bounds checking in LocationsService with the ability to disable filtering via `appSettings.ignoreViewportBounds` configuration option.

## [4.44.4] - 2025-11-25

### Fixed

- Improved 2D Models async fetching for Mapbox v3.

## [4.44.3] - 2025-11-14

### Fixed

- Fixed an issue when house numbers were visible on the basemap (Mapbox v3).

## [4.44.2] - 2025-11-13

### Fixed

- Fixed an issue when highlighted locations would not be visible on higher zoom levels.

## [4.44.1] - 2025-11-06

### Fixed

- Fixed an issue where the map would not load when only essential cookies were accepted.

## [4.44.0] - 2025-10-31

### Added

- Introduced two new functions:
  - `setNonCollidingLocation` — allows setting a specific location’s icon to ignore collision detection.
  - `isNonCollidingLocation` — checks whether a given location is configured as non-colliding.

## [4.43.0] - 2025-10-16

### Added

- Added new supported highway type for `avoidHighwayTypes` and `excludeHighwayTypes` parameters: `busway`

## [4.42.2] - 2025-09-16

### Fixed

- Fixed an edge case where certain 2D models would flicker or glitch.

## [4.42.1] - 2025-09-08

### Fixed

- An edge-case when some 3D Models were not loading, preventing the map from loading.

## [4.42.0] - 2025-09-02

### Added

- Possibility to set and get Mapbox v3 map style.

## [4.41.3] - 2025-08-07

### Fixed

- Improved detection of context switches in route legs.

### Changed

- Updated `VenuesService` to consistently return instances of `Building` and `Venue` classes from `getVenues()`, `getVenue(id)`, `getBuildings()`, and `getBuilding(id)` methods, improving type consistency and enabling object-oriented interactions.
- **Improved performance when calculating directions and routes** by updating the API endpoint for fetching entry points. This change utilizes a more efficient, dedicated endpoint, which reduces the amount of data transferred and leads to faster loading of directional information.

### Added

- Added `getFieldForKey` method to the `Venue` class, allowing case-insensitive retrieval of custom properties from `venueInfo.fields`.
- Added `getFieldForKey` method to the `Building` class, allowing case-insensitive retrieval of custom properties from `buildingInfo.fields`.

## [4.41.2] - 2025-07-21

### Added

- Added a `showMapMarkers` option to the `GoogleMapsView` constructor, allowing control over the visibility of Google Maps' Points of Interest markers.

### Fixed

- Resolved an issue where API requests would fail by ensuring the API key is correctly appended to API host URLs.
- Improved **floor plan display reliability** when the floor index isn't properly set.
- Fixed an issue where 2D models would appear to float when 3D extrusions were disabled.

## [4.41.1] - 2025-06-23

### Fixed

- Resolved an issue where active location filtering was inconsistent due to mixed date formats (milliseconds vs. seconds). All date calculations for active location filtering are now consistently handled in seconds.
- Fixed an issue where changing the Mapbox map style at runtime could cause errors because the Blue Dot and accuracy circle layers were not re-initialized for the new style.

### Changed

- Improved the type definition for the `maneuver` property within the `DirectionsResult` interface to provide a more precise and accurate representation of its possible values.
- Updated documentation and type annotations for various interfaces, classes, and methods, including `Location`, `DistanceMatrixService`, `LocationsService`, `BookingService`, `AppConfigService`, `MapboxV3View`, `GoogleMapsView`, `Building`, `AppConfig`, and `MapsIndoors` to enhance clarity and consistency.

## [4.41.0] - 2025-05-27

### Added

- Added `setLocationSettings` method to the `MapsIndoors` class for setting LocationSettings on individual locations or location types.

### Changed

- Improved feature prioritization on hover for Google Maps and Mapbox views, ensuring hovered features are rendered above others, and isn't hidden due to collisions.

### Fixed

- Corrected clipping mask initialization logic to properly wait for a map view to be set before attempting to apply the mask, resolving an issue where the mask might not be applied if called too early.
- Elevated 2D models are now correctly placed on the ground when 3D extrusions are disabled.

## [4.40.2] - 2025-05-14

### Fixed

- Fixed an issue where the clipping mask might not be applied correctly if set before the map view or necessary modules were fully ready.
- Improved map rendering performance by optimizing feature processing and caching.
- Implemented caching for badge rendering results to improve performance.
- Improved performance of internal data lookups within the SDK.

## [4.40.1] - 2025-05-01

### Fixed

- Fixed a timing issue that could prevent the clipping mask from being applied correctly during initialization or venue changes, potentially causing errors.

## [4.40.0] - 2025-04-29

### Added

- Introduced support for icons to dynamically scale down to avoid overlapping each other, improving map readability in dense areas. This feature is active when the `Dynamic Icon Scaling` module is enabled for the solution. Selected, highlighted, or hovered icons are exempt from this scaling.
- Introduced support for labels to dynamically adjust their position relative to their associated icon (choosing from top, bottom, left, or right) to minimize collisions and improve visibility when the `Dynamic Label Positioning` module is enabled for the solution.
- Introduced support for displaying 2D models at elevations corresponding to associated extruded geometry in the Mapbox view.
- Introduced support for clipping mask functionality that removes Mapbox 3D models, e.g., trees, within a venue's geometry on Mapbox v3. This is controlled by the "Clip layer (Mapbox v3)" module in the CMS.

### Fixed

- Improved the handling of Mapbox map style changes to guarantee the consistent rendering of all map features, including 2D overlays, 3D models, and displayed directions. This ensures a seamless visual experience when switching between map styles.

## [4.39.4] - 2025-04-07

### Fixed

- Fixed an issue where setting the `clickable` property of a `DisplayRule` to `false` would have no effect.
- Building outlines are now always displayed above other outlines. Routes are still displayed above the building outlines.
- Fixed an issue preventing 3D models from being clickable in `MapboxV3View`.

## [4.39.3] - 2025-04-03

### Changed

- Improving the performance of the MapsIndoors SDK by optimizing the map rendering process.
- Updated reference documentation for `LocationSettings`, `AdditionalDetails`, and `RouteAnimationOptions`.

## [4.39.2] - 2025-03-25

### Fixed

- Refactored `AppConfigService` to use an internal cache instead of `SessionStorage` to ensure `AppConfig` reloads on window refresh.

## [4.39.1] - 2025-03-12

### Fixed

- Fixed a bug that prevented the `synchronizeContent` function from updating the MapsIndoors data.

## [4.39.0] - 2025-03-05

### Added

- `fitVenue` method now accepts an optional `options` object with `padding` and `maxZoom` parameters.
- `fitBuilding` method now accepts an optional `options` object with `padding` and `maxZoom` parameters.

### Fixed

- Fixed an issue where calling `fitBuilding` on a MapsIndoors instance would throw an `Uncaught (in promise) Error: Invalid GeoJSON object!` error.
- Fixed an issue where 2D models in some cases weren't clickable.

## [4.38.7] - 2025-02-27

### Fixed

- Fixed an edge case in which locations placed far from the venue could cause performance issues or crash the SDK.
- Fixed URL encoding for the `getLocations` function in `LocationsService` and other API request functions, resolving potential issues with special characters in query parameters.

## [4.38.6] - 2025-01-27

### Fixed

- Fixed an issue where inactive `Locations` would show up on the map.
- Fixed an issue where the `DirectionsService` could crash when no route could be found between two points.
- Fixed the click handling for `Flat Labels` on `MapboxView` and `MapboxV3View`.
- Fixed an issue where `GoogleMapsView` would throw an `Uncaught TypeError: a.url.substr is not a function` error in the console, related to `Graphic Labels`.

## [4.38.5] - 2025-01-21

### Fixed

- Fixed an issue that sometimes caused the 3D buildings on `MapboxV3View` to block the MapsIndoors data.

## [4.38.4] - 2025-01-13

### Fixed

- Fixed an issue that caused the `DirectionsRenderer` to throw an unexpected error.
- Fixed an issue where setting a different Mapbox style on the `MapboxV3View` would cause the SDK to throw an error.
- Fixed an issue where 2D models on Google Maps wouldn't get removed from the map when changing floors.

## [4.38.3] - 2025-01-07

### Fixed

- Fixed missing labels for Google Maps. A misconfiguration in the label rendering logic caused this issue.
- Fixed an issue where calling `fitVenue()` on a MapsIndoors instance would throw an `Uncaught (in promise) Error: Invalid GeoJSON object!` error.
- Fixed the `getFloor` method to ensure it returns a string value.

## [4.38.2] - 2024-12-18

### Fixed

- Fixed an issue where the `floorNames` property on `Venue` objects could be null. This ensures venue objects always have valid floor names, preventing potential errors when accessing floor information.
- Fixed an issue where the `DirectionsRenderer` would throw an `Uncaught (in promise) Error: Invalid GeoJSON object!` error.
- Fixed an issue where setting the `venue` parameter for `LocationsService.getLocations()` would return an empty result.

## [4.38.1] - 2024-12-12

### Fixed

- Fixed an issue where calling `goTo` would reset the map's pitch/tilt. The map now retains the same pitch/tilt as it had before calling `goTo`. This was fixed in the `fitBounds` method on both `MapboxView` and `MapboxV3View`.

## [4.38.0] - 2024-12-10

### Added

- Added optional `automatedZoomLimit` property to `SolutionConfig`. The `automatedZoomLimit` controls how far the SDK automatically zooms in, e.g., when fitting to a venue, building, or location.
- Added the `goTo` method in the MapsIndoors class to improve the map navigation. This method fits the map view to a given feature with optional padding and a maximum zoom level. If the maximum zoom is not set when calling `goTo`, it will fall back to the `automatedZoomLimit` in the `SolutionConfig`. If neither is set, it will use the map's maximum supported zoom level.

### Changed

- To improve performance, the strategy for loading data is changed from eager to lazy. This means the initial data load is much faster because the SDK only loads the data needed to render the initial map view. Then, when the map changes, more data is loaded as needed, e.g., if the floor is changed. This is an internal change and has been implemented without any changes to the SDK's public interface.

## [4.37.1] - 2024-11-26

### Fixed

- Fixed a potential `TypeError: Cannot read properties of undefined`.
- Fixed typo in internal variable name that could cause unexpected behavior.

## [4.37.0] - 2024-11-25

### Added

- Support for Label Positioning for Floating Labels. (Mapbox only)
- New section to Label Style Display Rules:
  - `labelStylePosition`: sets the position of the label, relative to the Locations' anchor point. It can be set to: 'top', 'right', 'bottom', or 'left'.

## [4.36.3] - 2024-10-10

### Fixed

- The SDK will no longer throw an error if the `venue.styles` property is undefined. This fixes a potential issue where the application might crash if the venue data was missing the styles property.

## [4.36.2] - 2024-08-29

### Fixed

- `showMapMarkers` boolean also shows/hides Mapbox’s transit icons.
- Fix issue with 2D geometry not always being shown.

## [4.36.1] - 2024-07-22

### Fixed

- `getVenue()` and `getBuilding()` on the MapsIndoors instance wouldn't return the correct translation after calling `setLanguage()`.

## [4.36.0] - 2024-06-27

### Added

- **Multi-Stop Navigation:**
  - The `mapsindoors.services.DirectionsService.getRoute` now supports multi-stop routes with:
    - **`stops` parameter** (array of `LatLngLiteral`): Defines stop locations, including optional floor.
    - **`optimize` parameter** (boolean, defaults to `false`): Optimizes the route for the shortest travel time.
  - The `mapsindoors.directions.DirectionsRenderer` has a new constructor parameter:
    - **`defaultRouteStopIconProvider`**: Sets the default route stop icon provider. Setting this parameter to `null` disables the rendering of default stop icons.
  - The `mapsindoors.directions.DirectionsRenderer.setRoute` now takes an extra parameter:
    - **`stopConfigs`**: A map of `RouteStopConfig` objects. The key is the stop index, and the value is the `RouteStopConfig` object.
  - **`RouteStopConfig`**: An interface describing two properties, `label` and `iconProvider`. `{ label: string, iconProvider: RouteStopIconProvider }`.
  - **`RouteStopIconProvider`**: An interface containing the `getImage(stop_number: number)` method. Implemented by the `mapsindoors.directions.DefaultRouteStopIconProvider` class.

### Fixed

- Fixed an issue with the `mapsindoors.BadgeRenderer` and the `scale` parameter.

## [4.35.0] - 2024-06-12

### Changed

- Only selectable locations can be hoverable.

### Added

- Missing live data domain types to JSDocs.

## [4.34.0] - 2024-06-05

### Added

- Extended Mapbox v3 functionalities:
  - The fade effect for extruded buildings now uses numeric values between 0 and 1.
  - New constructor parameter on the MapboxV3View:
    - `showRoadNameLabels`: A boolean parameter that dictates whether Mapbox road names should be shown. By default, Mapbox road names are hidden when MapsIndoors data is shown.
  - The `MapboxFeatures` getter is deprecated. Use the similar `FeatureType` getter instead to show or hide specific Mapbox features.

### Fixed

- Fixed an issue where an empty tileUrl on a Venue would break directions functionality.

## [4.33.0] - 2024-04-29

### Fixed

- Fixed an issue with polygons that were clickable even though they were not visible.

### Added

- Extended Mapbox v3 handles:
  - Added two new functions: `setSlot()` and `getSlot()`. It is now possible to set a different value for `slot` property on a specific layer.

## [4.32.0] - 2024-04-16

### Fixed

- Fixed an issue where labels were not visible in the Safari browser for Google Maps.
- Fixed an issue where the direction polyline was rendered in the wrong order for Mapbox v3.

### Added

- Extended Label Style:
  - Added new `labelType` called Graphic Label.
  - `Graphic Label`: Only visible when Graphic Label type is selected. Opens Media Library with prefiltered MapsIndoors Labels. Controls what image is used as background image of a Graphic Label.

## [4.31.0] - 2024-03-25

### Fixed

- Fixed selection issue when selection pin was not elevated on top of extrusions for Mapbox v3.
- Fixed an issue with `labelStyle.haloWidth`, `labelStyle.haloBlur` and `labelStyle.textOpacity` not respecting value 0.
- Fixed an issue when Mapbox v3 map markers were visible even when they were disabled.
- Fixed an issue with setting solution API Key not working after the map was initialized.

### Added

- Exposed three new methods for Mapbox v3 map view:
  - `hideFeatures()`: sets visibility of passed array of MapboxFeatures to none.
  - `MapboxFeatures`: gets MapboxFeatures that visibility can be set to none.
  - `getHiddenFeatures()`: gets currently hidden features.

## [4.30.0] - 2024-02-15

### Changed

- Upgraded MICommon to v3.6.1 to accommodate more strict CSP headers.

### Fixed

- Fixed the `TypeError: this.getMapView(...).setFloorPlan is not a function` error.
- Fixed an issue where using fractional zoom levels in DisplayRules caused rendering issues.

### Added

- Support for setting Locations as selectable or non-selectable.

## [4.29.3] - 2024-02-06

### Fixed

- Fixed an issue with the `setDisplayRule()` method that prevented the set DisplayRule from being applied.

## [4.29.2] - 2024-02-05

### Fixed

- Fix Flat Label interpolation on zoom levels above 22.

## [4.29.1] - 2024-01-30

### Fixed

- Issue when Mapbox' extruded buildings were visible after the page reload.

## [4.29.0] - 2024-01-24

### Added

- Support for two new types of labels: Text and Flat.
- New section to Display Rules called Label Style where you can style:
  - `labelType`: Label type displayed on the map, either Text or Flat.
  - `textSize`: Controls the size of the label.
  - `textColor`: Controls the color of the label.
  - `textOpacity`: Controls the opacity of the label.
  - `haloColor`: Controls the color of the halo effect around the label.
  - `haloWidth`: Width of the halo effect around the label.
  - `haloBlur`: Controls the blur effect of the halo effect.
  - `bearing`: Only visible when Flat Label type is selected. Controls bearing of the Flat Label.

## [4.28.0] - 2024-01-23

## Added

- Support for 2D Walls (floor plans).
- Constructor parameter: `buildingSelectionMode` for specifying the building selection mode (`manual` or `automatic`). Defaults to `automatic`.
- Constructor parameter: `floorSelectionMode` for specifying the floor selection mode (`manual` or `automatic`). Defaults to `automatic`.
- `setBuildingSelectionMode(mode)`: Sets the building selection mode to either `manual` or `automatic`.
- `getBuildingSelectionMode()`: Returns the current building selection mode.
- `setFloorSelectionMode(mode)`: Sets the floor selection mode to either `manual` or `automatic`.
- `getFloorSelectionMode()`: Returns the current floor selection mode.
- `avoidHighwayTypes` and `excludeHighwayTypes` parameters to `DistanceMatrixService.getDistanceMatrix()`:
  - Both parameters are optional string arrays of highway types to avoid or exclude when calculating a distance matrix.
  - Both parameters take precedence over the `avoidStairs` parameter.
- `avoidHighwayTypes` and `excludeHighwayTypes` parameters to `DirectionsService.getRoute()`:
  - Both parameters are optional string arrays of highway types to avoid or exclude when calculating a route.
  - Both parameters take precedence over the `avoidStairs` parameter.
- Supported highway types for `avoidHighwayTypes` and `excludeHighwayTypes` parameters:
  - `'ramp'`, `'stairs'`, `'ladder'`, `'escalator'`, `'travelator'`, `'elevator'`, `'unclassified'`, `'residential'`, `'footway'`, `'wheelchairramp'`, `'wheelchairlift'`

### Fixed

- Live data badges is now also visible when the POI is highlighted or selected.

## [4.27.0] - 2024-01-16

### Added

- New MapView: `MapboxV3View`.
  - Support for Mapbox GL JS v3.
  - Exposed map view constructor parameters:
    - `mapsIndoorsTransitionLevel`: controls transition between Mapbox and MapsIndoors data.
    - `showMapMarkers`: boolean parameter that dictates if Mapbox map markers should be shown or not. By default Mapbox markers will be hidden  when MapsIndoors data is shown.
    - `lightPreset`: sets global light. Can be set to: 'day', 'dawn', 'dusk' or 'night'.

## [4.26.5] - 2023-12-11

### Fixed

- A Mapbox-related issue where highlighted `Locations` were hidden due to collisions with other `Locations`.

## [4.26.4] - 2023-12-07

### Fixed

- To avoid rendering issues, the ViewState is not updated before a floor has been set.
- Google Maps DirectionsService now uses the set language.

## [4.26.3] - 2023-11-29

### Fixed

- Resolved issue where Mapbox DistanceMatrix calls failed if only one origin and one destination were specified.

## [4.26.2] - 2023-11-28

### Fixed

- Fixed default `badgePosition` for the `hoverHighlight` state.

## [4.26.1] - 2023-11-24

### Fixed

- Fixed an issue with DisplayRules where the `iconPlacement` property would not be respected.
- Fixed an issue with DisplayRules where the `badgePosition` property would not be respected.

## [4.26.0] - 2023-11-23

### Added

- Highlight locations: Introduced a new `highlight()` method to visually emphasize specific locations on the map. This method takes an array of location IDs as its argument. It shares the same functionality and arguments as the `filter()` method, providing an alternative way to filter locations based on their IDs. The `getHighlight()` method returns an array containing the IDs of all currently highlighted locations.
- Select a location: Added new methods `selectLocation()` and `deselectLocation()` to control the selection of specific locations on the map. Use `selectLocation()` to select a location and `deselectLocation()` to clear the current selection. The `getSelectedLocation()` method returns the currently selected location object.
- Hover a location: Introduced methods `hoverLocation()` and `unhoverLocation()` to manage the hovered location. Use `hoverLocation()` to set a location as hovered and `unhoverLocation()` to remove the hovered state. The `getHoveredLocation()` method returns the currently hovered location object.
- State DisplayRules: Added `stateDisplayRules` to the Solution Config, allowing users to specify which states should be displayed for locations on the map. Available states include `hover`, `highlight`, `selection`, `hoverHighlight`, and `hoverSelection`.

## [4.25.0] - 2023-10-30

### Added

- Added new `tilt(pitch: number)` and `rotate(bearing: number)` methods to the MapboxView class to align the interface between the `GoogleMapsView` and `MapboxView` classes.
- Added a common set of `getBearing()` and `getPitch()` methods to both `GoogleMapsView` and `MapboxView` classes.

## [4.24.9] - 2023-10-10

### Changed

- Direction polyline is placed below wall/room extrusion and 3D Model.

## [4.24.8] - 2023-09-19

### Added

- Support for Building Outline

## [4.24.7] - 2023-08-28

### Added

- Added support for zoom levels 23, 24, 25 and 999 (acting as "max zoom"). These are only rendered when using Mapbox map.

## [4.24.6] - 2023-08-22

### Fixed

- For 3D models, the Z and Y axis have been swapped to align with the glTF specification (See https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#coordinate-system-and-units)

## [4.24.4] - 2023-08-03

### Fixed

- Labels for Venues and Building were set not to be visible by default.

## [4.24.3] - 2023-07-26

### Fixed

- Clicking on a 3D model would under some circumstances emit the wrong Location in the click event.
- `mouseenter` and `mouseleave` events now also trigger for polygons with an opacity of 0.
- `mouseenter` and `mouseleave` events now also trigger when Locations appear or disappear when zooming in or out (due to Display Rule zoom levels).

## [4.24.2] - 2023-07-12

### Fixed

- Only sync derived geometries, if the 3D module is enabled.

## [4.24.1] - 2023-07-11

### Fixed

- The rendering of 2D models on iOS devices.

## [4.24.0] - 2023-07-06

### Added

- Support for an upcoming position control Web Component.

## [4.23.1] - 2023-06-29

### Fixed

- Directions on Google Maps rendering below polygons with a fill color.
- Polygon styling from the main display rule would show on venue, building, and floor polygons.
- Setting the polygon stroke width to 0 would render a 2px width stroke around it.
- The PositionControl button would under some circumstances not be visible.
- In some cases, Mapbox wouldn’t show tiles when zoomed to the max zoom level.

## [4.23.0] - 2023-06-23

### Added

- `mapsindoors.MapsIndoors.addVenuesToSync(venueIds: string[])` - Adds one or more venue IDs to the list of venues to synchronize data for.
- `mapsindoors.MapsIndoors.removeVenuesToSync(venueIds: string[])` - Removes one or more venue IDs from the list of venues to synchronize data for.

### Fixed

- The SDK usage logging is now correctly sent before the page unloads.

### Changed

- The rendering of 2D models on Mapbox now uses WebGL and three.js to improve performance.

## [4.22.0] - 2023-06-14

### Added

- The MapsIndoors class will now emit a `mouseenter` event when the cursor of a pointing device is moved so it is within the bounds of a Location.
- The MapsIndoors class will now emit a `mouseleave` event when the cursor of a pointing device is moved so it leaves the bounds of a Location.

## [4.21.6] - 2023-05-31

### Fixed

- Rare timing issue causing the Mapbox map to crash.

## [4.21.5] - 2023-04-25

### Fixed

- A leftover console message was removed.

## [4.21.4] - 2023-04-18

### Changed

- The light setup for 3D models for a more accurate color representation.

### Fixed

- The issue that caused the 3D models to blink when panning the map.

## [4.21.3] - 2023-04-13

### Added

- Support for Solution Config
- Support for Settings 3D

### Changed

- Updated the MapsPeople logo

### Fixed

- Fixed a bug occuring when using deallocate with the map
- Aligned 3D rotation across platforms
- Fixed timing issue for 2D and 3D layers on Mapbox.

## [4.21.2] - 2023-02-22

### Fixed

- Fix slow animation in Mapbox when fitting to new map bounds.

## [4.21.1] - 2022-12-13

### Fixed

- Fix a bug where wrong or flickering MapsIndoors tiles were sometimes shown on a Google Maps map.
- MapsIndoors tiles will now be correctly changed when changing the MapsIndoors API key.

## [4.21.0] - 2022-10-27

### Added

- Support for getting locations by external ID.

## [4.20.2] - 2022-10-25

### Fixed

- Fix bug where a runtime 3D model URL change would not render the new model.

## [4.20.1] - 2022-10-11

### Fixed

- Fix a bug where the wrong floor was sometimes shown.

## [4.20.0] - 2022-10-06

### Added

- Support for 2D models on Mapbox maps.

## [4.19.0] - 2022-09-29

### Added

- Support for 2D models on Google maps.

### Changed

- MICommon has been updated to the latest version.

## [4.18.1] - 2022-09-07

### Fixed

- Labels are now centered when the icon is not visible.

## [4.18.0] - 2022-08-31

### Added

- Support for wall extrusions, room extrusions, and 3D models on Mapbox maps.

## [4.17.7] - 2022-07-12

### Fixed

- Device position dot and circle are now always shown no matter how `PositionControl.watchPosition` is invoked.

## [4.17.6] - 2022-04-22

### Fixed

- Fix bug where Live Data badges on locations were not always removed when disabling a Live Data Domain.

## [4.17.5] - 2022-04-13

### Fixed

- Creating MPBooking objects now works again.

## [4.17.4] - 2022-04-11

### Fixed

- Animated directions will now always start when rendering a route, and will also render on a per-leg level.

## [4.17.3] - 2022-04-05

### Fixed

- Renamed the `labelTemplate` property on the `DefaultDisplayRule` to `label` to match with the `DisplayRule` interface.
- Fix bug where directions line on a Mapbox map in some instances would not be rendered.
- Add missing documentation of required parameter in the `mapsindoors.directions.MapboxProvider`.
- Fix bug where the set language was not used when requesting Mapbox directions.

## [4.17.2] - 2022-02-03

### Fixed

- Locations receiving Live Data `position` updates will no longer disappear when panning the map.
- Live Data is now correctly resumed with the most recent updates when changing user role.
- Floor Selector styles are no longer missing.

## [4.17.1] - 2022-01-13

### Fixed

- In some cases, the MapsPeople logo would not be visible.
- All icons are now added to MapBox, to prevent the "Image ... could not be loaded." warning in the console.
- `strokeFill`, `strokeColor`, and `strokeWeight` is now correctly applied when using `setBuildingOutlineOptions()`.

## [4.17.0] - 2021-12-21

### Added

- User authenticated booking.

### Fixed

- Label and icon can now be visible at different zoom level ranges.

## [4.16.0] - 2021-12-07

### Added

- Disabling Live Data will now remove badges from icons when using the default callback.

### Fixed

- In some cases, when adding the MapsPeople logo to the map, the SDK would throw an error.
- Live Data now sends correct Http headers.
- `LiveDataInfo.activeDomainTypes()` now always returns a promise.

## [4.15.0] - 2021-11-18

### Added

- Labels on Google Maps now support line breaks. A label containing `\n` will now be broken into two lines.
- `labelMaxWidth` on `DisplayRule` sets the max-width in px for a label. Longer labels will be wrapped over multiple lines.

## [4.14.1] - 2021-11-03

### Fixed

- `AppUserRoles` set via `MapsIndoors.setUserRoles` is now applied when calling `DirectionsService.getRoute`

## [4.14.0] - 2021-09-13

### Changed

- Updated the JSDOC template used for the reference guide.

### Added

- The `LocationsService` now supports filtering by `Location` type. (`mapsindoors.services.LocationsService.getLocations({types: ['Stairs']})`).
- `synchronizeContent()` has been added to MapsIndoors as a static member. It will synchronize the MapsIndoors data from the backend to the client when called.

## [4.13.0] - 2021-08-17

### Added

- Animated directions for MapBox

### Fixed

- The "Uncaught (in promise) TypeError: Cannot read property 'flush' of undefined" error.

## [4.12.1] - 2021-06-24

### Fixed

- Location icons are now internally requested with size parameters instead of scale.

## [4.12.0] - 2021-06-17

### Added

- Support for (and default rendering of) Live Data Domain Types `co2` and `humidity`.
- The Location id is now added to the request when deleting a booking.

### Fixed

- Reduce icon flicker when applying Live Data badges.
- Default badge rendering of unknown Live Data Occupancy can now handle unknown number of people.
- In some cases setting the stroke- and fill-opacity for a Location Type would fail.

## [4.11.2] - 2021-06-03

### Fixed

- Calling `mapsindoors.MapsIndoors.setLanguage()` will now trigger a refresh of the cached Locations.
- Reduces the amount of HTTP requests when using Live Data.

## [4.11.1] - 2021-05-27

### Fixed

- The `radius` combined with the `near` parameter will now reduce the number of Locations returned by `LocationsService.getLocations()` to those within that radius from the location (MapsIndoors Location or latitude/longitude) specified by `near`.
- The `LocationsService` will now log usage statistics.

## [4.11.0] - 2021-05-20

### Added

- Support for (and default rendering of) Live Data Domain Types `temperature` and `count`.

### Fixed

- The default Live Data badge rendering is now based on Domain Type hierarchy: `availability+occupancy` > `availability` > `occupancy` > `temperature` > `count`.
- The default label styling has been refreshed and is now aligned with out showcase web app.

## [4.10.0] - 2021-05-18

### Added

- Animated directions for Google Maps.

### Fixed

- A bug that caused the outdoor parts of the directions polyline to not be shown if the current Floor Index wasn't 0.

## [4.9.1] - 2021-05-05

### Fixed

- A bug that caused icons with Live Data badges to look unsharp/fuzzy.
- A timing issue that could cause a `TypeError: Cannot read property 'toString' of undefined` error in the console.

## [4.9.0] - 2021-04-28

### Added

- `deallocate` method on MapsIndoors class that will clean up and release resources associated with the MapsIndoors instance.

## [4.8.1] - 2021-04-28

### Fixed

- A bug in the DirectionsService that would cause routes between Venues to fail.
- A bug in the styling of labels that prevented the ShadowBlur from being changed.
- A bug in the styling of labels where strokeStyle would not be applied for labels on Google Maps.

## [4.8.0] - 2021-04-19

### Added

- SDK Event logging.

### Fixed

- Labels are now clickable on Google Maps.
- The directions steps are now aligned across the different directions providers.

## [4.7.0] - 2021-04-12

### Added

- Live Data icon badges can now show badges that combine info from both the Occupancy and Availability Domains.
- The LocationsService will now emit a `update_completed` event when data has been synchronized with the backend.

### Fixed

- Fixed a bug in DirectionsRenderer, that could cause a route polyline not to be shown on the map.
- Fixed label placement for Mapbox, so they are placed in the same location as labels on Google Maps.
- Fixed a bug in the processing of display rules, that caused room polygons not to be clickable.
- Fixed maxZoom offset for MapBoxView.

## [4.6.2] - 2021-03-15

### Fixed

- A bug in the processing of display rules caused some locations to be missing from the map.

## [4.6.1] - 2021-03-11

### Fixed

- Fixing an issue where the Location Service in some circumstances wouldn't return Locations
- Fixed bug where Live Data was not shown

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
- `zIndex` is removed on `DirectionsRendererOptions`
