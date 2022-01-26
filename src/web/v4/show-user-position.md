```js
//GOOGLE MAP
// MapsIndoors MapView instantiation, which you should already have
const mapViewInstance = new mapsindoors.mapView.GoogleMapsView(/* ... */);
// MapsIndoors instantiation, which you should already have
const mapsIndoorsInstance = new mapsindoors.MapsIndoors(/* ... */);
// Obtain a reference to the Google map.
const googleMapsInstance = mapViewInstance.getMap();
// Create element to hold the position control
const positionControlElement = document.createElement("div");
// Create position control and attach it to element
const positionControl ew mapsindoors.PositionControl(myPositionControlElement, {
    mapsIndoors: mapsIndoorsInstance,
});
// Add the element now holding position control to your map
googleMapsInstance.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(positionControlElement);

```

```js
//MAPBOX
// MapsIndoors MapView instantiation, which you should already have
const mapViewInstance = new mapsindoors.mapView.GoogleMapsView(/* ... */);
// MapsIndoors instantiation, which you should already have
const mapsIndoorsInstance = new mapsindoors.MapsIndoors(/* ... */);
// Obtain a reference to the Mapbox map.
const mapboxInstance = mapViewInstance.getMap();

// Create element to hold the position control
const positionControlElement = document.createElement("div");
// Create position control and attach it to element
const positionControl = new mapsindoors.PositionControl(myPositionControlElement, {
    mapsIndoors: mapsIndoorsInstance,
});
// Add the element now holding position control to your map
mapboxInstance.addControl({ onAdd: function () { return myPositionControlElm }, onRemove: function () { } });

```
