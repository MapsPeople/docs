---
title: Event handling
parent: guides
layout: tutorial
nav_weight: 1000
published: true
date: 2019-11-20
---

## Overview
In this we will take a look at the events that MapsIndoors offers and how to utilize them.

 <script async src="//jsfiddle.net/mapspeople/s39hk8o7/embed/html,result/"></script>

### Ready
The ready event will be fired when MapsIndoors is done initializing and is ready to interact.
```javascript
google.maps.event.addListener(mapsIndoors, 'ready', (e) => {
    log(`MapsIndoors: Ready`);
});
```

### Building changed
The building changed will be fired when the map is moved around and a new building comes in focus.
This is also relates to the floor selector which will update it's view to show the current buildings floors.

The event handler is called with a [building](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/global.html#Building) object representing the building in focus.
```javascript
google.maps.event.addListener(mapsIndoors, 'building_changed', (e) => {
    log(`Building changed: ${e.buildingInfo.name}`);
});
```

### Floor changed
The floor changed will be fired when the floor is changed either by clicking the floor selector or by calling setFloor() on the MapsIndoors instance.

The event handler is called with the floor index of the current floor.
```javascript
google.maps.event.addListener(mapsIndoors, 'floor_changed', (e) => {
    log(`Floor changed: ${e}`);
});
```

### Click
The click event will fire when the user clickes on a POI or area on the map.

The event handler is called with a [location](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/global.html#Location) object representing the POI or area clicked.
```javascript
google.maps.event.addListener(mapsIndoors, 'click', (location) => {
    log(`Clicked: ${location.properties.name}`);
});
```

