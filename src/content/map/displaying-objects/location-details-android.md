---
title: Location Details for Android
eleventyNavigation:
  parent: map-displaying-objects
  key: map-displaying-objects-location-details-android
  title: Location Details for Android
  order: 100
---

This is an example of displaying some details of a MapsIndoors location

Requirements for this tutorial will be to have a running fragment or activity with a MapsIndoors map loaded and ready to use.

We need a view that shows the details of the location. Here we will just use a simple TextView to display the name and description of a location:

```xml
<TextView
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:id="@+id/details_text_view"
    android:background="@color/cardview_light_background"
    android:visibility="gone"
    app:layout_constraintBottom_toBottomOf="parent"
    app:layout_constraintStart_toStartOf="parent"
    app:layout_constraintEnd_toEndOf="parent"
    android:text="This is the text view for details of the location"/>
```

Once the map is ready move the camera to a Venue:

```kotlin
val venue = MapsIndoors.getVenues()!!.currentVenue
activity?.runOnUiThread {
    if (venue != null) {
        //Animates the camera to fit the new venue
        mMap!!.animateCamera(
            CameraUpdateFactory.newLatLngBounds(
                toLatLngBounds(venue.bounds!!),
                19
            )
        )
    }
}
```

We will then create a listener for when a user clicks on a marker to show the details of the selected location. This is done by setting a `onLocationSelectedListener` on your `MapControl` object. We will also listen to when the info window closes, to remove the DetailsTextView from the view. This is done by setting the `onMarkerInfoWindowCloseListener` on `MapControl`
When a marker is clicked, get the related MapsIndoors location object and propagate that to a method that fills the text in the `detailsTextView`.

```kotlin
mMapControl?.let { mapControl ->
    mapControl.setOnLocationSelectedListener {
        if (it != null) {
            showLocationDetails(it)
        }
        return@setOnLocationSelectedListener false
    }

    mapControl.setOnMarkerInfoWindowCloseListener {
        binding.detailsTextView.visibility = View.GONE
        mMapControl?.setMapPadding(0, 0, 0, 0)
    }
}
```

Create the `showLocationDetails(location: MPLocation)` method in your project.

```kotlin
private fun showLocationDetails(location: MPLocation) {
    binding.detailsTextView.text =  "Name: " + location.name + "\nDescription: " + location.description
    binding.detailsTextView.visibility = View.VISIBLE
    mMapControl?.setMapPadding(0, 0, 0, binding.detailsTextView.height)
}
```

A `TextView` will now appear when a user selects a location and it will disapear again when the user clicks away from the location.

[See the sample in LocationDetailsFragment.kt](https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/locationdetails/LocationDetailsFragment.kt)
