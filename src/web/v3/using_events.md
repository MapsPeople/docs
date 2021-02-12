---
title: Event handling
eleventyNavigation:
  parent: web-v3
  title: Event handling
  key: web-v3-event-handling
---

## Overview

In this, we will take a look at the events that MapsIndoors offers and how to utilize them.

>Events are actions or occurrences that happen in the system you are programming,
>which the system tells you about so you can respond to them in some way if desired.
>-- <cite>[MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)</cite>

For example, if the user clicks on a POI on the map, then you can react to that action by presenting the user with additional info about the POI.

A code example is shown in the JSFiddle below, but will be run through bit by bit in this guide.

 <script async src="//jsfiddle.net/mapspeople/s39hk8o7/embed/html,result/"></script>

### Ready event

The ready event will be fired when MapsIndoors is done initializing and is ready to interact.

```javascript
google.maps.event.addListener(mapsIndoors, 'ready', (e) => {
 log(`MapsIndoors: Ready`);
});
```

### Building changed event

The building changed event will be fired when the map is moved around and a new building comes in focus.
This is also related to the floor selector, which will update its view to show the current building floors.

The event handler is called with a [building](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/global.html#Building) object representing the building in focus.

```javascript
google.maps.event.addListener(mapsIndoors, 'building_changed', (e) => {
 log(`Building changed: ${e.buildingInfo.name}`);
});
```

### Floor changed event

The floor changed will be fired when the floor is changed either by clicking the floor selector or by calling setFloor() on the MapsIndoors instance.

The event handler is called with the floor index of the current floor.

```javascript
google.maps.event.addListener(mapsIndoors, 'floor_changed', (e) => {
 log(`Floor changed: ${e}`);
});
```

### Click event

The click event will fire when the user clicks on a POI or area on the map.

The event handler is called with a [location](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/global.html#Location) object representing the POI or area clicked.

```javascript
google.maps.event.addListener(mapsIndoors, 'click', (location) => {
 log(`Clicked: ${location.properties.name}`);
});
```

---

## Guides

* [Create a simple map with MapsIndoors](/../web/v3/guides/simple_map/)
* [Update display rules dynamically](/../web/v3/guides/dynamic-updates/)
* [Search and filtering](/../web/v3/guides/search_and_filtering/)
* [Show user location on the map (Blue dot)](/../web/v3/guides/show_users_position/)
