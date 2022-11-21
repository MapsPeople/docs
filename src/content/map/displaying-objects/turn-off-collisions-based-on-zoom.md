---
title: Turn Off Collisions Based on Zoom Level
toc: true
eleventyNavigation:
    key: map-displaying-objects-turn-off-collision-based-on-zoom
    parent: map-displaying-objects
    title: Turn Off Collisions Based on Zoom Level
    order: 1100
---

When using the MapsIndoors SDK, the system for detecting collisions will sometimes, at high zoom levels, result in the Labels of POI's that are close together being hidden, no matter what you do. Here we present a small workaround, so you can disable collisions for specific zoom levels.

<mi-tabs>
<mi-tab label="Android" tab-for="Android"></mi-tab>
<mi-tab label="iOS" tab-for="iOS"></mi-tab>
<mi-tab label="Web" tab-for="Web"></mi-tab>
<mi-tab-panel id="Android">

For Android, there are two ways of implementing this, and which you should use depends on your desired map behavior.

If you wish for the collision behavior to change when the maps stops moving, you should use this piece of code.

```java
val maxZoomForCollisions = 20 //set your desired zoom level upon which the collision behaviour changes

mGoogleMap.setOnCameraIdleListener {
    if (mGoogleMap.cameraPosition.zoom >= maxZoomForCollisions) {
        MapsIndoors.getSolution()?.config?.setCollisionHandling(MPCollisionHandling.ALLOW_OVERLAP)
    } else {
        MapsIndoors.getSolution()?.config?.setCollisionHandling(MPCollisionHandling.REMOVE_LABEL_FIRST)
    }
}
```

However, if you wish for the collision behavior to change when the maps starts moving, you should use this.

```java
val maxZoomForCollisions = 20 //set your desired zoom level upon which the collision behaviour changes

mGoogleMap.setOnCameraMoveListener {
    if (mGoogleMap.cameraPosition.zoom >= maxZoomForCollisions) {
        MapsIndoors.getSolution()?.config?.setCollisionHandling(MPCollisionHandling.ALLOW_OVERLAP)
    } else {
        MapsIndoors.getSolution()?.config?.setCollisionHandling(MPCollisionHandling.REMOVE_LABEL_FIRST)
    }
}
```


</mi-tab-panel>
<mi-tab-panel id="iOS">

To fetch User Roles from the SDK, you call `MapsIndoors.getUserRoles()` to retrieve a collection of `MPUserRoles` tied to a loaded solution:

```java
final List<MPUserRole> cmsUserRoles = MapsIndoors.getUserRoles().getUserRoles();
```

To set User Roles, `applyUserRoles` is used:

```java
MapsIndoors.applyUserRoles(savedUserRoles);
```

> For more information, see the [reference documentation](https://app.mapsindoors.com/mapsindoors/reference/android/v3/index.html).

</mi-tab-panel>
<mi-tab-panel id="Web">

```js
mapView.on('zoom_changed', () => {
    if (mi.getZoom() < mi.getMaxZoom() - 1) {
        mi.getMap().setLayoutProperty('MI_POINT_LAYER', 'text-allow-overlap', true);
    } else {
        mi.getMap().setLayoutProperty('MI_POINT_LAYER', 'text-allow-overlap', false);
    }
});
```


</mi-tab-panel>
</mi-tabs>