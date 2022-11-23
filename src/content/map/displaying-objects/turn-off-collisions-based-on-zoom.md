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

### Google Maps for Android

If you wish for the collision behavior to change when the maps stops moving, you should use this piece of code. This would generally be the most performance-friendly option.

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

However, if you wish for the collision behavior to change when the maps starts moving instead, you should use this.

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

### Mapbox for Android

The code for Mapbox is somewhat different - Here you must make an `onMoveListener`, and insert the implementation into the relevant section - `onMove`, `onMoveBegin` or `onMoveEnd`. Generally, `onMoveEnd` would be recommended, and will be shown below, as it is the most performance-friendly, but code may be moved into the others, if your specific functionality can be achieved through this.

```java
val maxZoomForCollisions = 20

mMapBoxMap?.addOnMoveListener(object : OnMoveListener {
    override fun onMove(detector: MoveGestureDetector): Boolean {
      // insert implementation here if desired
      return false
    }

    override fun onMoveBegin(detector: MoveGestureDetector) {
      // insert implementation here if desired
    }

    override fun onMoveEnd(detector: MoveGestureDetector) {
        // the implementation starts here
        if (mMapBoxMap?.cameraState?.zoom!! >= maxZoomForCollisions) {
            MapsIndoors.getSolution()?.config?.setCollisionHandling(MPCollisionHandling.ALLOW_OVERLAP)
        } else {
            MapsIndoors.getSolution()?.config?.setCollisionHandling(MPCollisionHandling.REMOVE_LABEL_FIRST)
        }
        // the implementation ends here
    }

})
```

</mi-tab-panel>
<mi-tab-panel id="iOS">

> Please note that on iOS it is only possible to do this when using **Google Maps** as a map provider.

First you must define your zoom range, where you wish for the behaviour to occur. Then, if not already done for other purposes in your code, you must implement `GMSMapViewDelegate` on your view controller, and then use it to listen for changes in `mapView:didChangeCameraPosition`. The last function `mapView` checks for activity on the map, and adjusts accordingly.

```swift
//Define zoom range
let minZoom : Float = 16.0
let maxZoom : Float = 22.0
let zoomRange = (minZoom...maxZoom)

//1. Implement GMSMapViewDelegate on your view controller
//class [YourClassNAme]: UIViewController, GMSMapViewDelegate

//2. Use GMSMApViewDelegate to listen to changes in one of four events mapView:didChangeCameraPosition

self.mapView?.delegate = self //this is needed since the delegate will inform of event updates on the map view; we will use it below


//the following is invoked on tap. you can place zoom checking anywhere in your code that is being updated
func mapView(_ mapView: GMSMapView, didTapAt coordinate: CLLocationCoordinate2D) {
    //3. do a check against the current projection level and make changes
    //the following is the actual to be put in method that is invoked everytime there is a zoom level change
    if ( zoomRange ~= (self.mapView?.camera.zoom)!) {
        MPMapControl.locationHideOnIconOverlapEnabled = true
    }
}
```

</mi-tab-panel>
<mi-tab-panel id="Web">

> Please note that on Web it is only possible to do this when using **Mapbox** as a map provider.

This is accomplished by checking if there is a `zoom_changed` event, and if there is, enabling or disabling the `text-allow-overlap` depending on the zoom levels.

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
