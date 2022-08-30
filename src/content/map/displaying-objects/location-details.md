---
title: Location Details
eleventyNavigation:
  parent: map-displaying-objects
  key: map-displaying-objects-location-details
  title: Location Details
  order: 100
---
<mi-tabs>
<mi-tab label="Android" tab-for="android"></mi-tab>
<mi-tab label="iOS" tab-for="ios"></mi-tab>
<mi-tab-panel id="android">

This is an example of displaying some details of a MapsIndoors location

Requirements for this tutorial will be to have a running fragment or activity with a MapsIndoors Map loaded and ready to use.

We need a view that shows the details of the location. Here we will use a TextView to display the name and description of a location:

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

We will then create a listener for when a user clicks on a marker to show the details of the selected location. This is done by setting a `onLocationSelectedListener` on your `MapControl` object. We will also listen to when the info window closes, to remove the DetailsTextView from the view. This is done by setting the `onMarkerInfoWindowCloseListener` on `MapControl`.

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

</mi-tab-panel>
<mi-tab-panel id="ios">

<!-- Known Issues -->
{% include "src/content/shared/known-issues-ios.md" %}

This is an example of displaying some details of a MapsIndoors location

Start by creating a `UIViewController` class that conforms to the `GMSMapViewDelegate` protocol

```swift
class LocationDetailsController: UIViewController, GMSMapViewDelegate {
```

Add a `GMSMapView` and a `MPMapControl` to the class

```swift
var map: GMSMapView? = nil
var mapControl: MPMapControl? = nil
```

Add other views needed for this example

```swift
var detailsView:UIStackView = UIStackView.init()
var mainView:UIStackView = UIStackView.init()
var nameLabel = UILabel.init()
var descrLabel = UILabel.init()
```

Inside `viewDidLoad`, setup the map and the mapControl instance:

```swift
self.map = GMSMapView.init(frame: CGRect.zero)
self.map?.delegate = self
self.map?.camera = .camera(withLatitude: 57.057964, longitude: 9.9504112, zoom: 20)
self.mapControl = MPMapControl.init(map: self.map!)
```

Setup the label views

```swift
nameLabel = UILabel.init()
descrLabel = UILabel.init()
nameLabel.backgroundColor = UIColor.white
descrLabel.backgroundColor = UIColor.white
```

Arrange the labels inside a stackview

```swift
detailsView = UIStackView.init(arrangedSubviews: [nameLabel, descrLabel])
detailsView.axis = .vertical
```

Arrange the map and the stackview inside another stackview

```swift
mainView = UIStackView.init(arrangedSubviews: [map!, detailsView])
mainView.axis = .vertical
```

When marker is tapped, get related MapsIndoors location object and set label text, based on the name and description of the location

```swift
func mapView(_ mapView: GMSMapView, didTap marker: GMSMarker) -> Bool {
    let location = mapControl?.getLocation(marker)
    if location != nil {
        self.nameLabel.text = location?.name
        self.descrLabel.text = location?.descr
    }
    return false
}
```

When map is tapped, reset label text

```swift
func mapView(_ mapView: GMSMapView, didTapAt coordinate: CLLocationCoordinate2D) {
    self.nameLabel.text = nil
    self.descrLabel.text = nil
}
```

[See the sample in LocationDetailsController.swift](https://github.com/MapsIndoors/MapsIndoorsIOS/blob/master/Example/DemoSamples/Location%20Details/LocationDetailsController.swift)

</mi-tab-panel>
</mi-tabs>
