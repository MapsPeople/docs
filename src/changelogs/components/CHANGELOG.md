---
title: MI Components Changelog
permalink: /changelogs/mi-components/
eleventyNavigation:
    parent: changelogs
    key: MI Components Changelog
    order: 7
---

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [11.3.0] - 2021-10-05

### Added

- **mi-dropdown**: Now has an `icon` property, which accepts an image source.
- **mi-dropdown**: Now has an `icon-alt` property, which sets the alternative text for an image.

## [11.2.0] - 2021-09-16

### Added

- **mi-route-instructions**: Support for three new highways that can occur in a route: `ladder`, `wheelchairramp` and `wheelcharlift`.
- **mi-icon**: Icons for `ladder`, `wheelchair-ramp` and `wheelchair-lift`.

## [11.1.0] - 2021-09-15

### Changed

- **mi-list-item-location** and **mi-list-item-category**: Images hosted on `image.mapsindoors.com` are now requested with query parameters for getting the image in the displayed size.

## [11.0.0] - 2021-09-08

### Added

- **mi-data-table**: Now has a `sticky-header` property, which can be used to make the table header non-sticky.

## [10.12.0] - 2021-09-06

### Added

- **mi-tabs**: Now has a `bordered` property, which can be set to add a border surrounding the content view.

## [10.11.0] - 2021-09-01

### Added

- **mi-dropdown**: Now displays a message when no results can be found based on the search query.
- **mi-dropdown**: Now disables the filter select buttons when there's nothing to select.
- **mi-dropdown**: Now performs filtering based on a fuzzy search algorithm.

### Fixed

- mi-dropdown: Filtering within the component now works as expected.

## [10.10.0] - 2021-08-26

### Added

- **mi-data-table**: `emptyPageHeader` and `emptyPageSubheader` properties added which can be used to set the header and subheader that is being presented when the table is empty.

## [10.9.0] - 2021-08-25

### Added

- **mi-dropdown**: `itemsOrder` property added to control the sorting of the dropdown options.

## [10.8.0] - 2021-08-20

### Fixed

- **mi-scroll-buttons**: The state of the up and down buttons now disable or enable correctly when the scrollbar reaches the top or bottom.

## [10.7.0] - 2021-08-16

### Added

- **mi-dropdown**: Option to style icon on the right-hand side of the dropdown component.

### Fixed

- **mi-dropdown**: Dropdown content previously had no max height to prevent it from taking more space than available.

## [10.6.0] - 2021-08-11

### Fixed

- **mi-dropdown**: Collapsing button now has a pre-defined height.

### Added

- **mi-dropdown**: Disabled state for the button when no textual content is available.

## [10.5.1] - 2021-08-03

### Fixed

- **mi-dropdown**: The button will now display the name of the first `mi-dropdown-item` as its content instead of being empty.

## [10.5.0] - 2021-08-03

### Added

- **mi-dropdown**: Option to style the textual content inside the button using document-level CSS.

## [10.4.0] - 2021-07-21

### Added

- **mi-dropdown**: The button can now be styled using document-level CSS.

## [10.3.2] - 2021-07-16

### Fixed

- **mi-dropdown**: The `mi-dropdown-item`'s wasn't rendered when the `items` attribute was an empty array.

## [10.3.1] - 2021-07-15

### Fixed

- **mi-dropdown**: The `mi-dropdown` component didn't render the `mi-dropdown-item` elements when set before the first render.

## [10.3.0] - 2021-07-15

### Added

- **mi-data-table**: The `selectionChanged` event has been added. If the table is selectable this event will fire when the selection changes.

## [10.2.0] - 2021-07-15

### Added

- **mi-column**: The `fit-content` attribute has been added. When present the column width will be fitted to the content.

## [10.1.0] - 2021-07-14

### Added

- **mi-data-table**: The `selectable` attribute has been added. When present on the data-table the first column will be rendered as checkboxes.

## [10.0.0] - 2021-07-07

### Added

- **mi-dropdown**: Documentation added.

### Changed

- **mi-dropdown**: Cleanup of component including look and feel.
- **mi-dropdown**: `change` event now emits selected items instead of the component itself.

## [9.2.0] - 2021-06-17

### Added

- **mi-data-table**: Emit `clicked` event when clickin on elements within table cells.
- **mi-column**: Make it possible to use bindings for boolean HTML attributes within table cells.
- **mi-column**: Make it possible to style elements within table cells with [MIDT helper classes](https://github.com/MapsIndoors/midt) and [MapsIndoors CSS classes](https://github.com/MapsIndoors/css).
- **mi-map-mapbox**: New attribute for setting max pitch (defaults to 60).

### Changed

- **mi-map-mapbox**: Upgrade to use Mapbox GL JS v2.3.0.

## [9.1.0] - 2021-06-10

### Changed

- From previously inserting a script tag manually to now using the [Google Maps JS API Loader](https://www.npmjs.com/package/@googlemaps/js-api-loader) npm package.

## [9.0.2] - 2021-05-06

### Fixed

- Fixed a bug where moving across buildings would show incorrect step heading.

## [9.0.1] - 2021-04-29

### Changed

- Updated the version used of @mapsindoors/typescript-interfaces.

## [9.0.0] - 2021-04-29

### Changed

- Deprecate the following interfaces: Anchor, Building, BuildingInfo, LatLng, DisplayRule, Field, Location, Venue in favor of using the TypeScript interface library @mapsindoors/typescript-interfaces.

## [8.2.3] - 2021-04-29

### Fixed

- **mi-map-googlemaps**: Reduce memory leaks when removing component.
- **mi-map-mapbox**: Reduce memory leaks when removing component.

## [8.2.2] - 2021-04-23

### Added

- **mi-scroll-buttons**: Documentation added.

## [8.2.1] - 2021-04-20

### Fixed

- **mi-route-instructions-step** Replaced the empty circle with the steps action icon. Now showing the steps instruction when available (defaults to action for travel mode).
- **mi-map-mapbox** Removed default maxZoom value of 21. This is handled in the SDK.
- Upgrade to use the latest MapsIndoors JavaScript SDK (v4.7.0) with various bugfixes.
- **mi-share-sms**: Property name changed from `inputPlaceholder` to `input-placeholder`.

## [8.2.0] - 2021-02-23

### Added

- **mi-list-item-location**: Added properties `iconBadge` and `iconBadgeValue` which can be used to add a badge to the icon.

### Changed

- **mi-share-sms**: Documentation updated.
- **mi-location-info**: Documentation updated.
- **mi-step-switcher**: Documentation updated.

## [8.1.0] - 2021-02-15

### Added

- mi-map-googlemaps: `language` property added to set the language of the component. This property is not reactive.
- mi-map-mapbox: `language` property added to set the language of the component. This property is not reactive.

### Fixed

- mi-map-googlemaps: Now checks if an instance of Google Maps API is initialized or not.
- mi-map-googlemaps: Now checks if an instance of the Mapbox API is initialized or not.

## [8.0.0] - 2021-02-08

### Added

- **mi-search**: New custom `shortInput` event.
- **mi-map-googlemaps**: `getDirectionsServiceInstance` method added to expose `DirectionsService` instance.
- **mi-map-googlemaps**: `getDirectionsRendererInstance` method added to expose `DirectionsRenderer` instance.
- **mi-map-mapbox**: `getDirectionsServiceInstance` method added to expose `DirectionsService` instance.
- **mi-map-mapbox**: `getDirectionsRendererInstance` method added to expose `DirectionsRenderer` instance.

### Changed

- **mi-map-googlemaps**: `showRoute`, `setRoute`, `clearRoute`, `nextRouteLeg`, `previousRouteLeg`, `setRouteLegIndex`, and `getRoute` methods is deprecated in favor for new `getDirectionsRendererInstance` and `getDirectionsRendererInstance` methods.
- **mi-map-googlemaps**: Component updated to latests SDK release (V. 4.5.0).
- **mi-map-mapbox**: `showRoute`, `setRoute`, `clearRoute`, `nextRouteLeg`, `previousRouteLeg`, `setRouteLegIndex`, and `getRoute` methods is deprecated  in favor for new `getDirectionsRendererInstance` and `getDirectionsRendererInstance` methods.
- **mi-map-mapbox**: Component updated to latests SDK release (V. 4.5.0).
- **RouteParams interface**: Deprecation of `RouteParams` interface.

## [7.3.2] - 2021-02-03

### Changed

- **mi-map-googlemaps**: Default value for `strokeWeight` at the `polygonHighlightOptions` property is changed from 1 to 2.
- **mi-map-mapbox**: Default value for `strokeWeight` at the `polygonHighlightOptions` property is changed from 1 to 2.

## [7.3.1] - 2021-02-02

### Fixed

- **mi-location-booking**: Remove hardcoded participant list for the bookings.

## [7.3.0] - 2021-01-29

### Added

- **mi-location-booking**: New component that can show and perform location bookings.

## [7.2.3] - 2021-01-28

### Changed

- **mi-route-instructions**: Documentation updated.
- **mi-route-instructions-maneuver**: Documentation updated.
- **mi-map-googlemaps**: Component updated to latests SDK release (V. 4.4.0).
- **mi-map-mapbox**: Component updated to latests SDK release (V. 4.4.0).

## [7.2.2] - 2021-01-20

### Added

- **Field Interface**: Export `Field` interface used for `fields` property at `Location` objects.

## [7.2.1] - 2021-01-14

### Fixed

- **mi-route-instructions**: The step toggle didn't show the pointer cursor on hover if the step was active.

## [7.2.0] - 2021-01-14

### Added

- **mi-route-instructions**: Add `activeStep` attribute for visually highlighting of current step.
- **mi-route-instructions**: Add `step` and `active` part attributes for external styling of step element.

## [7.1.3] - 2021-01-13

### Changed

- **mi-map-googlemaps**: Documentation updated.
- **mi-map-mapbox**: Documentation updated.
- **mi-route-instructions-step**: Documentation updated.
- **mi-distance**:  Documentation updated.
- **mi-icon**:  Documentation updated. Note added regards component not being compatible with IE11.

### Fixed

- **mi-route-instructions**: The translations for "venue" and "building" was missing and can now be added to the `translations` attribute.
- **mi-route-instructions-step**: The translations for "venue" and "building" was missing and can now be added to the `translations` attribute.

## [7.1.2] - 2021-01-06

### Fixed

- **mi-map-googlemaps**: Add missing protocol to URL used for googleMaps API script tag.

## [7.1.1] - 2020-12-15

### Fixed

- **mi-route-instructions-maneuver**: Set `instructions` property as default maneuver and fallback to the `maneuver` property.

## [7.1.0] - 2020-12-14

### Added

- **mi-route-instructions**: `originLocation` and `originName` attributes added.

### Fixed

- **mi-route-instructions-step**: Header saying "Leave" was presented for outdoor to outdoor steps.

## [7.0.0] - 2020-12-11

### Changed

- **mi-route-instructions**: Add a `hideIndoorSubsteps` attribute which can be used to control the visibility of the indoor substeps at the `<mi-route-instructions-step>` element.
- **mi-route-instructions-step**: Add a `hideIndoorSubsteps` attribute which can be used to control the visibility of the indoor substeps.
- **mi-route-instructions-maneuver**: Fallback to `instructions` property value if the `maneuver` property is empty.

### Fixed

- **mi-route-instructions-step**: A solid box was rendered instead of a maneuver icon when the `maneuver` property was empty.

## [6.0.4] - 2020-12-07

### Added

- **mi-route-instructions**: Handles for styleable elements in shadow tree.
- **mi-route-instructions-step**: Handles for styleable elements in shadow tree.
- **mi-route-instructions-maneuver**: Handles for styleable elements in shadow tree.

### Changed

- **mi-step-switcher**: Documentation simplified for styling handles.

## [6.0.3] - 2020-12-03

### Fixed

- **mi-route-instructions-step**: Transit destination wasn't presented.

## [6.0.2] - 2020-12-03

### Changed

- **mi-route-instructions-heading**: Documentation updated.
- **mi-route-instructions**: 'arrive' and 'take' translation strings is deprecated and not longer needed.

### Fixed

- **mi-route-instructions-step**: Transit destination wasn't presented.

## [6.0.1] - 2020-12-02

### Added

- **mi-step-switcher**: Handles for styleable elements in shadow tree.
- **mi-route-instructions**: IE11 support.
- **mi-route-instructions-step**: IE11 support.

## [6.0.0] - 2020-11-30

### Added

- **mi-map-googlemaps**: New map component using Google Maps as map provider and SDK V. 4.1.1.
- **mi-map-mapbox**: Position Control support added.
- **mi-route-instructions-step**: Added missing rendering of transit step.
- **mi-spinner**: Documentation updated.
- **mi-notification**: Documentation updated.
- **mi-map-mapbox**: Documentation added.

### Changed

- **mi-map**: Component deprecated in favor for new `<mi-map-googlemaps>` component.
- **mi-map-mapbox**: The `mapsIndoors` instance is removed from the payload of the `mapsIndoorsReady` event in favor for new `getMapsIndoorsInstance` method.
- **mi-map-mapbox**: Deprecated the following methods: `panTo`, `getBounds`, `fitBounds`, `setDisplayRule`, `setVenue`, `fitVenue`, `filterLocations`, and `clearLocationFilter` in favor for the `getMapInstance` and `getMapsIndoorsInstance` methods.

## [5.0.8] - 2020-11-24

### Fixed

- **mi-route-instructions**: The action name reflects now the proper Enter/Exit step.

### Added

- **mi-route-instructions**: Adds Building or Venue name to step heading.

## [5.0.7] - 2020-11-20

### Added

- **mi-search**: Reflect namespace changes introduced in SDK 4.
- **mi-share-sms**: Reflect namespace changes introduced in SDK 4.

## [5.0.6] - 2020-11-20

### Added

- **mi-route-instructions**: Add default translations for `mi-time` component.
- **mi-time**: Clean up handling of `translations` attribute.

## [5.0.5] - 2020-11-20

### Changed

- **mi-map-mapbox**: Component updated to latests SDK release (V. 4.1.1).

## [5.0.4] - 2020-11-19

### Added

- **mi-time**: `translations` attributes is added.
- **mi-keyboard**: Support added for `da-DK` browser language.

### Changed

- **mi-keyboard**: Documentation update.
- **mi-search**: The fixed height of the component is removed.
- **mi-search**: Documentation update.

## [5.0.3] - 2020-11-18

### Added

- **mi-keyboard**: Documentation update with sample usage and working example.
- **mi-route-instructions**: Documentation update to describe the clicked event.

### Fixed

- **mi-map-mapbox**: Component updated to latests SDK release (V. 4.1.0).
- **mi-route-instructions**: Unit property wasn't reflected in child components.

## [5.0.2] - 2020-11-03

### Added

- **mi-icon**: Printer icon added.

## [5.0.1] - 2020-10-30

### Added

- **mi-route-instructions**: New component displaying MapsIndoors route instructions.

## [5.0.0] - 2020-10-28

### Changed

- **mi-map-mapbox**: `highlightLocation` method is made public.
- **mi-map-mapbox**: `clearPolygonHighlight` method is renamed to `clearHighlightLocation`.

## [3.2.2] - 2020-09-30

### Added

- **mi-map-mapbox**: New map component using Mapbox as map provider and the SDK v.4 alpha 7.

### Changed

- Initial load url for dev server is changed to components.html.

## [3.2.1] - 2020-09-03

### Fixed

- **mi-search**: Fixed bug where clearing search field could cause similar subsequent search to fail.

## [3.2.0] - 2020-09-02

### Fixed

- **mi-scroll-buttons**: Changed the styling of the button container.

### Added

- **mi-search**: Expose a `mi-venue` prop to restrict MapsIndoors search results to a specific venue.

## [3.1.0] - 2020-08-31

### Fixed

- **mi-search**: The clear button is now always visible in the right side on the input field no matter what browser is used.

### Added

- **mi-map**: Location polygon is highlighted when clicked. The highlight can be cleared using the `clearPolygonHighlight` method, and styling of the highlight can be controlled with the `polygonHighlightOptions` prop.

## [3.0.1] - 2020-08-14

### Fixed

- **mi-location-info**: details string wasn't returned when the venue and building was named the same.
- **mi-keyboard**: eventListener was attached multiple times.

### Added

- **mi-keyboard**: custom `inputCleared` event listener.

## [3.0.0] - 2020-08-13

### Fixed

- **mi-location-info**: details for outdoor locations wasn't shown.

### Changed

- **mi-keyboard**: some breaking changes was introduced for better control of when the keyboard should be visible. A layout and inputElement property is added.
- **mi-share-sms**: necessary changes to reflect changes made in mi-keyboard component.

## [2.4.0] - 2020-08-07

### Added

- **New**: mi-share-sms component.

### Fixed

- **mi-map**: didn't show any locations until the map had been idle.
- **mi-card**: had a unnecessary div tag which in some cases did cause trouble.

### Changed

- Upgrade to MapsIndoors JS SDK version 3.11.0.

## [2.3.1] - 2020-07-29

### Fixed

- **mi-search**: fixed `mi-near` to provide correctly formatted data to the SDK.

## [2.3.0]

### Added

- **mi-search**: added a componentRendered event.

## [2.2.0]

### Added

- **mi-search**: added a idAttribute and dataAttributes attribute.

## [2.1.2]

### Fixed

- **mi-keyboard**: added a "same element" check to handleFocusin method.

## [2.1.1]

### Fixed

- **mi-step-switcher**: adjusted the vertical padding.

## [2.1.0]

### Added

- **New**: mi-step-switcher component.

## [2.0.0]

### Added

- Changelog.

### Changed

- Switched to semantic versioning.
- **mi-search**: disabled browser autocomplete.
- **mi-search**: style changes for a larger appearance.
- **mi-keyboard**: removed the enter key from the keyboard layouts.
- **mi-list-item-location**: vertically centering.

### Fixed

- **mi-location-info**: removed alike building names.
- **mi-keyboard**: when clicking outside the keyboard to dismiss it now exposes the correct click target.
- **mi-list**: fixed reference bug.
