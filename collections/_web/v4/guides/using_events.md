---
title: Event handling
parent: guides
nav_weight: 400
published: true
date: 2019-11-20
---
## Overview

In this, we will take a look at the events that MapsIndoors offers and how to utilize them.

>Events are actions or occurrences that happen in the system you are programming,
>which the system tells you about so you can respond to them in some way if desired.
>-- <cite>[MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)</cite>

For example, if the user clicks on a POI on the map, then you can react to that action by presenting the user with additional info about the POI.

A code example is shown in the JSFiddle below, but will be run through bit by bit in this guide.

 <script async src="//jsfiddle.net/mapspeople/gex62wzn/embed/html,result/"></script>

### Ready event

The ready event will be fired when MapsIndoors is done initializing and is ready to interact.

```javascript
mapsIndoors.addListener('ready', (e) => {
 log(`MapsIndoors: Ready`);
});
```

### Building changed event

The building changed event will be fired when the map is moved around and a new building comes in focus.
This is also related to the floor selector, which will update its view to show the floors of the current building.

The event handler is called with a [building](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/global.html#Building) object representing the building in focus.

```javascript
mapsIndoors.addListener('building_changed', (e) => {
 log(`Building changed: ${e.buildingInfo.name}`);
});
```

### Floor changed event

The floor changed event will be fired when the floor is changed; either by clicking the floor selector or by calling `setFloor()` on the MapsIndoors instance.

The event handler is called with the floor index of the current floor.

```javascript
mapsIndoors.addListener('floor_changed', (e) => {
 log(`Floor changed: ${e}`);
});
```

### Click event

The click event will fire when the user clicks on a POI or an area on the map.

The event handler is called with a [location](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/global.html#Location) object representing the POI or area clicked.

```javascript
mapsIndoors.addListener('click', (location) => {
 log(`Clicked: ${location.properties.name}`);
});
```

---

## Guides

* [Create a simple map with MapsIndoors](/guides/simple_map/)
* [Introduction to DispayRules](guides/display_rules_intro/)
* [Search and filtering](/guides/search_and_filtering/)
* [Show user location on the map (Blue dot)](/guides/show_users_position/)
