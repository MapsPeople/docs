---
title: Location Clustering
eleventyNavigation:
  title: Location Clustering
  parent: v3-map-displaying-objects
  key: v3-map-displaying-objects-location-clustering
  order: 140
---

<mi-tabs>
<mi-tab label="Android" tab-for="android"></mi-tab>
<mi-tab label="iOS" tab-for="ios"></mi-tab>
<mi-tab-panel id="android">

This is an example of enabling and disabling location clustering on the map as well as providing custom cluster tapping behaviour and custom cluster images.

Create the class `LocationClusteringFragment` that extends `Fragment`:

```java
public class LocationClusteringFragment extends Fragment {
```

Add a `GoogleMap` and a `MapControl` to the class:

```java
MapControl mMapControl;
GoogleMap mGoogleMap;
```

Add other needed views for this example:

```java
SupportMapFragment mMapFragment;
```

The Venue's coordinates:

```java
static final LatLng VENUE_LAT_LNG = new LatLng( 57.05813067, 9.95058065 );
```

Once the map is ready, move the camera to the venue location and call setupMapsIndoors

```java
OnMapReadyCallback mOnMapReadyCallback = new OnMapReadyCallback() {
    @Override
    public void onMapReady( GoogleMap googleMap )
    {
        mGoogleMap = googleMap;
        mGoogleMap.moveCamera( CameraUpdateFactory.newLatLngZoom( VENUE_LAT_LNG, 13.0f ) );
        setupMapsIndoors();
    }
};
```

Add a `locationClusterImageAdapter` to customize the cluster marker icons and provide their sizes:

```java
MPLocationClusterImageAdapter locationClusterImageAdapter = new MPLocationClusterImageAdapter() {
    @Nullable
    @Override
    public Bitmap getImage( @NonNull String clusterId, @NonNull List<MPLocation> locations, @NonNull ImageSize imageSize )
    {
        final int textSize = Convert.getPixels( 15 );
        return getCircularImageWithText(
                "" + locations.size(),
                textSize,
                imageSize.width,
                imageSize.height
        );
    }
    @NonNull
    @Override
    public ImageSize getImageSize( @NonNull String clusterId, int count )
    {
        final int imageSizeInPixels = Convert.getPixels( 25 );
        return new ImageSize( imageSizeInPixels, imageSizeInPixels );
    }
};
```

Create a method `getCircularImageWithText` that creates the custom bitmaps for our cluster icons:

```java
@NonNull
public static Bitmap getCircularImageWithText( @NonNull String text, int textSize, int width, int height )
{
    final Paint background = new Paint();
    background.setColor( Color.WHITE );
    // Now add the icon on the left side of the background rect
    final Bitmap result = Bitmap.createBitmap( width, height, Bitmap.Config.ARGB_8888 );
    final Canvas canvas = new Canvas( result );
    final int radius = width >> 1;
    canvas.drawCircle( radius, radius, radius, background );
    background.setColor( Color.BLACK );
    background.setStyle( Paint.Style.STROKE );
    background.setStrokeWidth( 3 );
    canvas.drawCircle( radius, radius, radius - 2, background );
    final TextPaint tp = new TextPaint();
    tp.setTextSize( textSize );
    tp.setColor( Color.BLACK );
    final Rect bounds = new Rect();
    tp.getTextBounds( text, 0, text.length(), bounds );
    final int text_height = bounds.height();
    final int text_width = bounds.width();
    final int textpos_x = (width - text_width) >> 1;
    final int textpos_y = (height + text_height) >> 1;
    canvas.drawText( text, textpos_x, textpos_y, tp );
    return result;
}
```

Create a method `setupMapsIndoors` that:

* Sets the API key to the desired Solution.
* Sets the Google API key (required by our routing provider).
* Instantiates MapControl.
* Enables clustering.
* Sets an OnLocationClusterListener so we can handle the cluster markers click events.
* Sets the LocationClusterImageAdapter.
* Initializes the MapControl object which will synchronize the data.
* When the MapControl's initialization is done, it selects a floor and animates the camera to the venue position.

```java
void setupMapsIndoors()
{
    final Activity context = getActivity();
    if( (context == null) || (mMapFragment == null) || (mMapFragment.getView() == null) )
    {
        return;
    }
    if( !MapsIndoors.getAPIKey().equalsIgnoreCase( getString( R.string.mi_api_key ) ) )
    {
        MapsIndoors.setAPIKey( getString( R.string.mi_api_key ) );
    }
    MapsIndoors.setGoogleAPIKey( getString( R.string.google_maps_key ) );
    mMapControl = new MapControl( context );
    mMapControl.setGoogleMap( mGoogleMap, mMapFragment.getView() );
    // Currently, on Android, we can enable/disable clustering
    // - via our CMS
    // - by calling MapControl.setLocationClusteringEnabled( true/false ) BEFORE invoking MapControl.init()
    // Runtime clustering enable/disable is not currently supported
    mMapControl.setLocationClusteringEnabled( true );
    // Set the custom cluster image adapter
    mMapControl.setLocationClusterImageAdapter( locationClusterImageAdapter );
    // When clicking on a cluster marker zoom in to the maximum trying to break the cluster
    mMapControl.setOnLocationClusterClickListener( ( marker, locations ) -> {
        mGoogleMap.animateCamera( CameraUpdateFactory.newLatLngZoom( marker.getPosition(), 22f  ) );
        return true;
    } );
    mMapControl.init( miError -> {
        if( miError == null ) {
            final Activity _context = getActivity();
            if( _context != null ) {
                mMapControl.selectFloor( 1 );
                mGoogleMap.animateCamera( CameraUpdateFactory.newLatLngZoom( VENUE_LAT_LNG, 20f ) );
            }
        }
    } );
}
```

[See the sample in LocationClusteringFragment.java](https://github.com/mapspeople/MapsIndoorsAndroid-Demo-Samples/blob/master/app/src/main/java/com/mapsindoors/locationclustering/LocationClusteringFragment.java)

</mi-tab-panel>
<mi-tab-panel id="ios">

<!-- Known Issues -->
{% include "src/content/shared/known-issues-ios.md" %}

This is an example of enabling and disabling location grouping on the map as well as providing custom cluster tapping behavior and custom cluster images.

Start by creating a `UIViewController` class that conforms to the `MPMapControlDelegate` protocol

```swift
class ClusteringController: UIViewController, MPMapControlDelegate {
```

Add a `GMSMapView` and a `MPMapControl` to the class
Also define a clustering enabling/disabling button and a dictionary to store the clustering images for reuse

```swift
var map: GMSMapView? = nil
var mapControl: MPMapControl? = nil
let clusteringButton = UIButton.init()
var clusteringImageDictionary = Dictionary<String, UIImage>()
```

Setup map so that it shows the demo venue and initialise mapControl

```swift
self.map = GMSMapView.init(frame: CGRect.zero)
self.map?.camera = .camera(withLatitude: 57.057964, longitude: 9.9504112, zoom: 20)
self.mapControl = MPMapControl.init(map: self.map!)
self.mapControl?.delegate = self
```

Setup a button that enables/disables the location grouping / clustering mechanism

```swift
clusteringButton.setTitle("Clustering disabled", for: .normal)
clusteringButton.setTitle("Clustering enabled", for: .selected)
clusteringButton.addTarget(self, action: #selector(toggleClustering), for: .touchUpInside)
clusteringButton.backgroundColor = UIColor.blue
```

Arrange the map view and the button in a stackview

```swift
let stackView = UIStackView.init(arrangedSubviews: [map!, clusteringButton])
stackView.axis = .vertical
view = stackView
```

Define an objective-c method `toggleClustering` that will receive events from your button, and toggle the clustering flag:

* Check current state
* Swap state
* Make button reflect the state

```swift
@objc func toggleClustering() {
    if MPMapControl.locationClusteringEnabled {
        MPMapControl.locationClusteringEnabled = false
    } else {
        MPMapControl.locationClusteringEnabled = true
    }
    clusteringButton.isSelected = MPMapControl.locationClusteringEnabled
}
```

Define the delegate method `didTap` that will receive tap events from a cluster marker

* Check if zoom is possible and increment map zoom
* Return true to indicate that you handle the event and do not want default behavior to happen

```swift
func didTap(_ marker: GMSMarker, forPoiGroup locations: [MPLocation]?, moreZoomPossible: Bool) -> Bool {
    if moreZoomPossible {
        self.map?.animate(toZoom: self.map!.camera.zoom + 1)
    }
    return true
}
```

Define the delegate method `getImageSizeForPoiGroup` that provides the size of the potential cluster

* Check if zoom is possible and increment map zoom
* Return true to indicate that you handle the event and do not want default behavior to happen

```swift
func getImageSizeForPoiGroup(withCount count: UInt, clusterId: String) -> CGSize {
    let width = 48 * (Int(log10(Double(count))) + 1)
    let height = 48
    return CGSize.init(width: width, height: height)
}
```

Define the delegate method `getImageForPoiGroup` that asynchronously provides the image of the potential cluster

```swift
func getImageForPoiGroup(_ poiGroup: [MPLocation], imageSize: CGSize, clusterId: String, completion: @escaping (UIImage?) -> Void) -> Bool {
```

In `getImageForPoiGroup` create a string hash for the image

```swift
let imgHash = "img\(poiGroup.count)\(clusterId)"
```

In `getImageForPoiGroup` check if image already exists. If image does not exist, go in a background thread to get a dummy image and call the completion handler. Return true to indicate that you handle the clustering image.

```swift
var img = clusteringImageDictionary[imgHash]
if img == nil {
    DispatchQueue.global().async {
        let imgUrlString = "https://placem.at/people?txt=\(poiGroup.count)&random=\(Int.random(in: 0 ..< 10))&w=\(imageSize.width*2)&h=\(imageSize.height*2)"
        let imgUrl = URL(string: imgUrlString)
        do {
            let imgData = try Data.init(contentsOf: imgUrl!)
            img = UIImage(data: imgData, scale: 2)
            completion(img)
            self.clusteringImageDictionary[imgHash] = img
        } catch {
            completion(nil)
        }
    }
} else {
    completion(img)
}
return true
```

[See the sample in ClusteringController.swift](https://github.com/MapsIndoors/MapsIndoorsIOS/blob/master/Example/DemoSamples/Clustering/ClusteringController.swift)

</mi-tab-panel>
</mi-tabs>
