---
title: Use Google Fused Location Provider with MapsIndoors
eleventyNavigation:
  parent: android-v3-guides-use-third-party-positioning-with-MapsIndoors
  title: Use Google Fused Location Provider with MapsIndoors
  key: android-v3-use-Google-Fused-Location-Provider-with-MapsIndoors
  order: 230
---

For Google Fused Location Provider, you need to create a positioning implementation which enables communicating the positions received from the API with the MapsIndoors SDK.

The Position Provider implementation exists at the customer application level, and needs to implement the PositionProvider interface from the MapsIndoors SDK. The MapsIndoors SDK can then utilize the positioning results yielded from the given Position Provider, by setting the Position Provider with MapControl.setPositionProvider(PositionProvider).

### Implementing Google Fused Location Provider API

This Guide requires you to already have an activity that shows a MapsIndoors Map and to have the google play services location library dependency added to your project.

```java
dependencies {
    implementation 'com.google.android.gms:play-services-location:18.0.0'
}
```

We start by implementing a Positioning Provider service. This service is so that in the future you can have mulitple positioning solutions running in the same application and have the code stored in one location. For now just create a simple class with a constructor that receives an activity and a MapControl object.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/PositionProviders/PositionProviderService.java#L29-L32">PositionProviderService.java</a>

```java
public class PositionProviderService {
    private MapControl mMapControl;
    private Activity mActivity;

    public PositionProviderService(Activity activity, MapControl mapControl) {
        mMapControl = mapControl;
        mActivity = activity;
    }
}
```

</mi-tab-panel>
</mi-tabs>

Now we will start implementing the Fused Location position provider. Create a class called GPSPositionProvider that implements the PositionProvider interface from the MapsIndoorsSDK, also create a constructor that takes a context as parameter.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/PositionProviders/GPSPositionProvider.java#L50-L52">GPSPositionProvider.java</a>

```java
public class GPSPositionProvider implements PositionProvider {
    private Context mContext;

    public GPSPositionProvider(@NonNull Context context) {
        mContext = context;
    }
}
```

</mi-tab-panel>
</mi-tabs>

We will start by implementing logic to each of the implemented methods from the PositionProvider interface.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/PositionProviders/GPSPositionProvider.java#L54-L151">GPSPositionProvider.java</a>

```java
public class GPSPositionProvider implements PositionProvider {

    private final String[] REQUIRED_PERMISSIONS = new String[]{
            "android.permission.ACCESS_FINE_LOCATION",
            "android.permission.ACCESS_COARSE_LOCATION"
    };

    private boolean mIsRunning;
    private boolean mIsEnabled;

    private String mProviderId;

    private final List<OnStateChangedListener> mOnStateChangedListenersList = new ArrayList<>();
    private final List<OnPositionUpdateListener> mOnPositionUpdateListeners = new ArrayList<>();

    private PositionResult mLatestPosition;

    private FusedLocationProviderClient fusedLocationClient;

    @NonNull
    @Override
    public String[] getRequiredPermissions() {
        return REQUIRED_PERMISSIONS;
    }

    @Override
    public boolean isPSEnabled() {
        return mIsEnabled;
    }

    @SuppressLint("MissingPermission")
    @Override
    public void startPositioning(@Nullable String args) {
        //Implemented later in guide.
    }

    @Override
    public void stopPositioning(@Nullable String args) {
        //Implemented later in guide.
    }

    @Override
    public boolean isRunning() {
        return mIsRunning;
    }

    @Override
    public void addOnPositionUpdateListener(@Nullable OnPositionUpdateListener onPositionUpdateListener) {
        if( onPositionUpdateListener != null ) {
            onPositionUpdateListeners.remove( onPositionUpdateListener );
            onPositionUpdateListeners.add( onPositionUpdateListener );
        }
    }

    @Override
    public void removeOnPositionUpdateListener(@Nullable OnPositionUpdateListener onPositionUpdateListener) {
        if( onPositionUpdateListener != null ) {
            onPositionUpdateListeners.remove( onPositionUpdateListener );
        }
    }

    @Override
    public void setProviderId(@Nullable String id) {
        mProviderId = id;
    }

    @Override
    public void addOnStateChangedListener(@Nullable OnStateChangedListener onStateChangedListener) {
        if( onStateChangedListener != null ) {
            onStateChangedListenersList.remove( onStateChangedListener );
            onStateChangedListenersList.add( onStateChangedListener );
        }
    }

    @Override
    public void removeOnStateChangedListener(@Nullable OnStateChangedListener onStateChangedListener) {
        if( onStateChangedListener != null ) {
            onStateChangedListenersList.remove( onStateChangedListener );
        }
    }

    @Override
    public void checkPermissionsAndPSEnabled(@Nullable PermissionsAndPSListener permissionsAndPSListener) {
        //The implementation of PSUtils and this permission check can be foud on the finished sample. Linked at the bottom of the guide.
        PSUtils.checkLocationPermissionAndServicesEnabled( getRequiredPermissions(), mContext, permissionsAndPSListener );
    }

    @Nullable
    @Override
    public String getProviderId() {
        return mProviderId;
    }

    @Nullable
    @Override
    public PositionResult getLatestPosition() {
        return mLatestPosition;
    }

    @Override
    public void startPositioningAfter(int i, @Nullable String s) {

    }

    @Override
    public void terminate() {

    }
}
```

</mi-tab-panel>
</mi-tabs>

We will then start implementing the code to get Google Fused Location positioning up and running.

We start by implementing the `startPositioning` and `stopPositioning` methods:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/PositionProviders/GPSPositionProvider.java#L65-L84">GPSPositionProvider.java</a>

```java
public class GPSPositionProvider implements PositionProvider {
    private FusedLocationProviderClient fusedLocationClient;
    @SuppressLint("MissingPermission")
    @Override
    public void startPositioning(@Nullable String args) {
        mIsRunning = true;
        fusedLocationClient = LocationServices.getFusedLocationProviderClient(mContext);
        LocationRequest locationRequest = LocationRequest.create();
        locationRequest.setInterval(1000);
        locationRequest.setFastestInterval(100);
        locationRequest.setPriority(LocationRequest.PRIORITY_HIGH_ACCURACY);

        fusedLocationClient.requestLocationUpdates(locationRequest,
                locationCallback,
                Looper.getMainLooper());
    }

    @Override
    public void stopPositioning(@Nullable String args) {
        fusedLocationClient.removeLocationUpdates(locationCallback);
        mIsRunning = false;
    }
}
```

</mi-tab-panel>
</mi-tabs>

Implement the locationCallBack to the provider to receive and handle the location updates.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/PositionProviders/GPSPositionProvider.java#L153-L164">GPSPositionProvider.java</a>

```java
public class GPSPositionProvider implements PositionProvider {
...
    private LocationCallback locationCallback = new LocationCallback() {
        @Override
        public void onLocationResult(@NonNull LocationResult locationResult) {
            super.onLocationResult(locationResult);
            onLocationChanged(locationResult.getLastLocation());
        }

        @Override
        public void onLocationAvailability(@NonNull LocationAvailability locationAvailability) {
            super.onLocationAvailability(locationAvailability);
        }
    };
}
```

</mi-tab-panel>
</mi-tabs>

Create the onLocationChanged method to handle the google location and make it into a PositionResult:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/PositionProviders/GPSPositionProvider.java#L166-L233">GPSPositionProvider.java</a>

```java
public class GPSPositionProvider implements PositionProvider {
    ...
    final void onLocationChanged( @Nullable final Location location ){
        if( location == null ) {
            mLatestPosition = null;
            mIsEnabled = false;
            return;
        }

        if( mIsRunning ) {
            mIsEnabled = true;

            final android.location.Location recLocation = new Location( location );

            final MPPositionResult newLocation = new MPPositionResult( new Point( recLocation ), recLocation.getAccuracy() );

            newLocation.setAndroidLocation( recLocation );

            // From Google's Santa tracker:
            // "Update our current location only if we've moved at least a metre, to avoid
            // jitter due to lack of accuracy in FusedLocationApi"
            if( mLatestPosition != null ) {

                final Point prevPoint = mLatestPosition.getPoint();
                final Point newPoint = newLocation.getPoint();

                if( (prevPoint != null) && (newPoint != null) )
                {
                    // Check the distance between the prev and new position in 2D (lat/lng)
                    final double dist = prevPoint.distanceTo( newPoint );
                    if( dist <= 1.0 ) {

                        // Get the altitude too. Just imagine the lady/guy is using a lift/elevator/"spiral staircase"...
                        // Use the prev position "android location object" altitude value to run the check
                        final android.location.Location prevLocation = mLatestPosition.getAndroidLocation();
                        if( prevLocation != null ) {
                            final double altDiff = Math.abs( recLocation.getAltitude() - prevLocation.getAltitude() );
                            if( altDiff <= 2.0 ) {
                                return;
                            }
                        }
                    }
                }
            }

            // GPS always gives the ground level
            newLocation.setFloor( Floor.DEFAULT_GROUND_FLOOR_INDEX );

            mLatestPosition = newLocation;
            mLatestPosition.setProvider( this );
            mLatestPosition.setAndroidLocation( recLocation );

            //setLatestPosition(mLatestPosition);
            reportPositionUpdate();
        }
    }

    public void reportPositionUpdate() {
        if(mIsRunning){
            for(OnPositionUpdateListener listener : onPositionUpdateListeners){
                if(listener != null && mLatestPosition != null){
                    listener.onPositionUpdate(mLatestPosition);
                }
            }
        }
    }
}
```

</mi-tab-panel>
</mi-tabs>

Now we need to start up our PositionProvider to get positioning onto our Map. This we will do through our PositionProviderService. We start with creating a method to setup the Google positionProvider from the PositionProviderService.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/PositionProviders/PositionProviderService.java#L119-L167">PositionProviderService.java</a>

```java
public class PositionProviderService {
    public void setupGooglePositioning() {
        mGooglePositioningProvider = new GPSPositionProvider(mActivity);
        mGooglePositioningProvider.checkPermissionsAndPSEnabled(new PermissionsAndPSListener() {
            @Override
            public void onPermissionDenied() { }

            @Override
            public void onPermissionGranted() {
                onGooglePositioningPermissionsGiven();
            }

            @Override
            public void onGPSPermissionAndServiceEnabled() { }

            @Override
            public void onPermissionRequestError() { }
        });
    }
}

void onGooglePositioningPermissionsGiven() {
    MapsIndoors.setPositionProvider(mGooglePositioningProvider);
    MapsIndoors.startPositioning();
    mMapControl.showUserPosition(true);

    mGooglePositioningProvider.addOnPositionUpdateListener(new OnPositionUpdateListener() {
        @Override
        public void onPositioningStarted(@NonNull @NotNull PositionProvider positionProvider) {

        }

        @Override
        public void onPositionFailed(@NonNull @NotNull PositionProvider positionProvider) {

        }

        @Override
        public void onPositionUpdate(@NonNull @NotNull PositionResult positionResult) {
            mActivity.runOnUiThread(() -> {
                mMapControl.getPositionIndicator().setIconFromDisplayRule( new LocationDisplayRule.Builder( "BlueDotRule" )
                        .setVectorDrawableIcon(android.R.drawable.presence_invisible, 23, 23 )
                        .setTint(Color.BLUE)
                        .setShowLabel(true)
                        .setLabel("You")
                        .setLabel(null)
                        .build());
            });
        }
    });
}
```

</mi-tab-panel>
</mi-tabs>

All that is left to do now is to start this up after initializing our mapControl.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L186-L190">MapsActivity.java</a>

```java
mMapControl.init(miError -> {
    mPositionProviderService = new PositionProviderService(yourActivity, mMapControl);
    mPositionProviderService.setupGooglePositioning();
}
```

</mi-tab-panel>
</mi-tabs>

A full example of the CiscoDNA position provider together with PositionProviderService can be found here: [PositionProviders](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/tree/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/PositionProviders)
