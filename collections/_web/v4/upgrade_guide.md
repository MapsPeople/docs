---
title: MapsIndoors Web SDK v4
permalink: /web/v4/upgrade
published: true
date: 2019-09-30
---

With the introduction of MapsIndoors JavaScript SDK v4, there are some changes to the structure of the APIs. With the added support for Mapbox, we have introduced a new concept called a Map View. A Map View is an adapter layer between the SDK and the Map itself. When initializing the SDK, a reference to a map view is passed instead of a reference to a map.

The Directions service now takes a reference to an external Directions provider when initialized. The external provider can either be a Google Maps or a Mapbox provider.

All services have been moved to the `mapsindoors.services` namespace, for example, mapsindoors.service.LocationsService. See [mapsindoors.services](https://app.mapsindoors.com/mapsindoors/js/sdk/4.0.0/docs/mapsindoors.services.html).

## Initialization

### V3

```javascript
const element = document.getElementById("map");

const googleMap = new google.maps.Map(element, {
    center: { lat: 38.8976067, lng: -77.0365872 },
    zoom: 19,
    maxZoom: 21,
});

const mapsIndoors = new mapsindoors.MapsIndoors({
    map: googleMap,
});
```

### V4

#### Google Maps

```javascript
const element = document.getElementById("map");

const mapView = new mapsindoors.mapView.GoogleMapView({
    element: element,
    center: { lat: 38.8976067, lng: -77.0365872 },
    zoom: 19,
    maxZoom: 21,
});

const mapsIndoors = new mapsindoors.MapsIndoors({ mapView: mapView });
```

See [mapsindoors.mapView.GoogleMapView](https://app.mapsindoors.com/mapsindoors/js/sdk/4.0.0/docs/mapsindoors.mapView.GoogleMapView.html) and [mapsindoors.MapsIndoors](https://app.mapsindoors.com/mapsindoors/js/sdk/4.0.0/docs/mapsindoors.MapsIndoors.html)

#### Mapbox

```javascript
const element = document.getElementById("map");

const mapView = new mapsindoors.mapView.MapboxView({
    element: element,
    center: { lat: 38.8976067, lng: -77.0365872 },
    zoom: 19,
    maxZoom: 21,
});

const mapsIndoors = new mapsindoors.MapsIndoors({ mapView: mapView });
```

See [mapsindoors.mapView.MapboxView](https://app.mapsindoors.com/mapsindoors/js/sdk/4.0.0/docs/mapsindoors.mapView.MapboxView.html) and [mapsindoors.MapsIndoors](https://app.mapsindoors.com/mapsindoors/js/sdk/4.0.0/docs/mapsindoors.MapsIndoors.html)

## Events

### V3

```javascript
google.maps.event.addListener(mapsIndoors, 'event_name', function() {...});
```

### V4

```javascript
mapsIndoors.addListener('event_name', function() {...});
```

See [MapsIndoors#events](https://app.mapsindoors.com/mapsindoors/js/sdk/4.0.0/docs/mapsindoors.MapsIndoors.html#event:building_changed)

## Zoom levels

In v4 of the SDK, we have introduced a MapsIndoors zoom level. The reason for this is Mapbox uses 512x512 as the base tile size, where Google Maps uses 256x256. Because of this difference, a Mapbox at zoom level 1 displays the same geographical areas as a Google Map at zoom level 2.
The MapsIndoors instance now has a setZoom function to set a new zoom level for the map and a getZoom to get the current zoom level. It also emits a `zoom_changed` event when the zoom level has changed. We recommend using the getZoom, setZoom, and the `zoom_changed` event on the MapsIndoors instance because we use thous internally when evaluating display rules.

### V3

```javascript
google.maps.events.addListener(googleMap, 'zoom_changed', function() {...});

googleMap.setZoom(18);

googleMap.getZoom();
```

### V4

```javascript
mapsIndoors.addListener('zoom_changed', function() {...});

mapsIndoors.setZoom(18);

mapsIndoors.getZoom();
```

## Adding Floor Selector to the Map

### V3

```javascript
const floorSelector = document.createElement("div");
new mapsindoors.FloorSelector(floorSelector, mapsIndoors);
googleMap.controls[google.maps.ControlPosition.RIGHT_TOP].push(floorSelector);
```

### V4

#### Google Maps

```javascript
const map = mapsIndoors.getMap();
const floorSelectorDiv = document.createElement("div");
new mapsindoors.FloorSelector(floorSelectorDiv, mapsIndoors);
googleMap.controls[google.maps.ControlPosition.RIGHT_TOP].push(
    floorSelectorDiv
);
```

#### Mapbox

```javascript
const map = mapsIndoors.getMap();
const floorSelectorDiv = document.createElement("div");
new mapsindoors.FloorSelector(floorSelectorDiv, mapsIndoors);
map.addControl({
    onAdd: function () {
        return floorSelectorDiv;
    },
    onRemove: function () {},
});
```

## Directions

### V3

```javascript
const directionsRenderer = new mapsindoors.DirectionsRenderer({
    mapsindoors: mapsIndoors,
});

mapsindoors.DirectionsService.getRoute({
    origin: origin,
    destination: destination,
    travelMode: "DRIVING",
}).then(function (response) {
    directionsRenderer.setRoute(response.routes[0]);
});
```

### V4

#### Google Maps

```javascript
const externalDirections = new mapsindoors.directions.GoogleMapsProvider();
const directionsService = new mapsindoors.services.DirectionsService(
    externalDirections
);
const directionsRenderer = new mapsindoors.directions.DirectionsRenderer({
    mapsIndoors: mapsIndoors,
});

directionsService
    .getRoute({
        origin: origin,
        destination: destination,
        travelMode: "DRIVING",
    })
    .then(function (route) {
        directionsRenderer.setRoute(route);
    });
```

#### Mapbox

```javascript
const externalDirections = new mapsindoors.directions.MapboxProvider();
const directionsService = new mapsindoors.services.DirectionsService(
    externalDirections
);
const directionsRenderer = new mapsindoors.directions.DirectionsRenderer({
    mapsIndoors: mapsIndoors,
});

directionsService
    .getRoute({
        origin: origin,
        destination: destination,
        travelMode: "DRIVING",
    })
    .then(function (route) {
        directionsRenderer.setRoute(route);
    });
```
