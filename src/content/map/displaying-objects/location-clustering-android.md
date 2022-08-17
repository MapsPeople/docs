---
title: Location Clustering for Android
eleventyNavigation:
  title: Location Clustering for Android
  parent: map-displaying-objects
  key: map-displaying-objects-location-clustering
  order: 140
---

This is an example of enabling and disabling location clustering on the map as well as providing custom cluster tapping behaviour and custom cluster images.

Enablind and disabling clustering is done through the `SolutionConfig` here is how this can be done:

```kotlin
//Enabling clustering
MapsIndoors.getSolution()?.config?.setEnableClustering(true)
//Disabling clustering
MapsIndoors.getSolution()?.config?.setEnableClustering(false)
```

To create custom icons for clusters you can set a `MPClusterIconAdapter` either on the `MPMapConfig` when you are creating a new instance of `MapControl` or you can do it on runtime by setting a `MPClusterIconAdapter` directly on a `MapControl` object.
Here is an example of doing it when creating a new MapControl:

```kotlin
private fun initMapControl(view: View) {
    val mapConfig: MPMapConfig = MPMapConfig.Builder(requireActivity(), mMap!!, getString(R.string.google_maps_key), view, true).setClusterIconAdapter { return@setClusterIconAdapter getCircularImageWithText(it.size.toString(), 15, 30, 30) }.build()
    MapControl.create(mapConfig) { mapControl: MapControl?, miError: MIError? -> }
}

private fun getCircularImageWithText(text: String, textSize: Int, width: Int, height: Int): Bitmap {
    val background = Paint()
    background.color = Color.WHITE
    // Now add the icon on the left side of the background rect
    val result = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888)
    val canvas = Canvas(result)
    val radius = width shr 1
    canvas.drawCircle(radius.toFloat(), radius.toFloat(), radius.toFloat(), background)
    background.color = Color.BLACK
    background.style = Paint.Style.STROKE
    background.strokeWidth = 3f
    canvas.drawCircle(radius.toFloat(), radius.toFloat(), (radius - 2).toFloat(), background)
    val tp = TextPaint()
    tp.textSize = textSize.toFloat()
    tp.color = Color.BLACK
    val bounds = Rect()
    tp.getTextBounds(text, 0, text.length, bounds)
    val textHeight: Int = bounds.height()
    val textWidth: Int = bounds.width()
    val textPosX = width - textWidth shr 1
    val textPosY = height + textHeight shr 1
    canvas.drawText(text, textPosX.toFloat(), textPosY.toFloat(), tp)
    return result
}
```

Applying a ClusterIconAdapter on runtime can be done like this:

```kotlin
mMapControl.setClusterIconAdapter {
    return@setClusterIconAdapter getCircularImageWithText(it.size.toString(), 15, 30, 30)
}
```

[See the sample in LocationClusteringFragment.java](https://github.com/mapspeople/MapsIndoorsAndroid-Demo-Samples/blob/master/app/src/main/java/com/mapsindoors/locationclustering/LocationClusteringFragment.java)
