---
title: Location Clustering for Android
eleventyNavigation:
  title: Location Clustering for Android
  parent: legacy-android-v3-map-displaying-objects
  key: legacy-android-v3-map-displaying-objects-location-clustering
  order: 140
---

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
