---
title: Use Indoor Atlas with MapsIndoors
eleventyNavigation:
  parent: android-v3-guides-use-third-party-positioning-with-MapsIndoors
  title: Use Indoor Atlas with MapsIndoors
  key: android-v3-use-Indoor-Atlas-positioning-with-MapsIndoors
  order: 220
---

For Indoor Atlas positioning you will need to create a positioning implementation to have the positions received from Indoor Atlas communicate with the MapsIndoors SDK.

The Position Provider implementation exists at the customer application level, and needs to implement the PositionProvider interface from the MapsIndoors SDK. The MapsIndoors SDK can then utilize the positioning results yielded from the given Position Provider, by setting the Position Provider with `MapControl.setPositionProvider(PositionProvider)`.

### Floor Mapping

The Position Provider should align with the MapsIndoors Floor index convention (floors are indexed as 0, 10, 20, 30, etc. corresponding to ground floor, 1st floor, 2nd floor, 3rd floor, etc., where negative floors indices are allowed, as e.g. -10). It is therefore up to the position provider class to convert any given Floor indexing from the positioning source to that of MapsIndoors.

### Implementing Indoor Atlas

This Guide requires you to already have an activity that shows a MapsIndoors Map and a Indoor Atlas beacon network for positioning. We use Indoor Atlas v3 for this guide. Here is how to set it up in your project: [Indoor Atlas setup](https://indooratlas.freshdesk.com/support/solutions/articles/36000050564-setup-positioning-sdk-with-android)

We start by implementing a Positioning Provider service. This service is so that in the future you can have mulitple positioning solutions running in the same application and have the code stored in one location. For now just create a simple class with a constructor that receives an activity and a MapControl object.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/PositionProviders/PositionProviderService.java#L21-L32">PositionProviderService.java</a>

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

Now we will start implementing the Indoor Atlas position provider. Create a class called IndoorAtlasPositionProvider that implements the PositionProvider interface from the MapsIndoorsSDK, also create a constructor that takes a context as parameter.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L270-L278">IndoorAtlasPositionProvider.java</a>

```java
public class IndoorAtlasPositionProvider implements PositionProvider {
    private Context mContext;

    //Used for the PositionProvider Interface
    private boolean mIsRunning;
    private boolean mIsIPSEnabled;

    public IndoorAtlasPositionProvider(@NonNull Context context) {
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
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/PositionProviders/IndoorAtlasPositionProvider.java#L117-L210">IndoorAtlasPositionProvider.java</a>

```java
public class IndoorAtlasPositionProvider implements PositionProvider {
    ...
    private final String[] REQUIRED_PERMISSIONS = new String[]{
            "android.permission.ACCESS_FINE_LOCATION",
            "android.permission.ACCESS_COARSE_LOCATION",
            "android.permission.BLUETOOTH_ADMIN",
            "android.permission.BLUETOOTH"
    };

    private boolean mIsIPSEnabled;
    private boolean mIsRunning;
    private String mProviderId;
    private final List<OnStateChangedListener> mOnStateChangedListenersList = new ArrayList<>();
    private final List<OnPositionUpdateListener> mOnPositionUpdateListeners = new ArrayList<>();
    private PositionResult mLatestPosition;

    private IALocationManager mIndoorAtlasClient;

    ...
    @NonNull
    @Override
    public String[] getRequiredPermissions() {
        return REQUIRED_PERMISSIONS;
    }

    @Override
    public boolean isPSEnabled() {
        return mIsIPSEnabled;
    }

    @Override
    public void startPositioning(@Nullable String s) {
        //Implemented later in guide.
    }

    @Override
    public void stopPositioning(@Nullable String s) {
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
        //Not used
    }

    @Override
    public void terminate() {
    }
}
```

</mi-tab-panel>
</mi-tabs>

We will then start implementing the code to get Indoor Atlas positioning up and running.

For Indoor Atlas to work you will need to supply Indoor Atlas with a API key and a secret key. This can be handled in two ways, if the Indoor Atlas account is setup through MapsPeople CMS on the Position Provider tab, we will have the data for this stored on the MapsIndoors SDK. If not you will have to handle the two keys yourself, this can be done through String resources as an example.

We start by creating a method to initiate the Indoor Atlas client. Here the method is called initClient.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/PositionProviders/IndoorAtlasPositionProvider.java#L70-L115">IndoorAtlasPositionProvider.java</a>

```java
public class IndoorAtlasPositionProvider implements PositionProvider {
    ...
    private Map<Integer, Integer> mFloorMapping;

    private void initClient(){
        //Here we use the MapsIndoorsSDK Config for IndoorAtlas to provide the API key and the Secret key. Alternatively you can store the strings as a String resouce and get that here instead.
        Map<String, Object> config = MapsIndoors.getSolution().getPositionProviderConfig().get("indooratlas3");
        String apiKey = (String) config.get("key");
        String secret = (String) config.get("secret");
        //Again here we use the config object to retrieve a stored Floor mapping on the MapsIndoors config.
        //Here you can alternatively rewrite the constructFloorMapping to make an int:int mapping between IndoorAtlas floor indexes and the MapsIndoors indexes. This is further explained in the floor mapping section
        mFloorMapping = constructFloorMapping(config);

        if(apiKey == null || TextUtils.isEmpty(apiKey)|| secret == null || TextUtils.isEmpty(secret) || mFloorMapping.isEmpty()){
            Log.e(this.getClass().getSimpleName(), "IndoorAtlas API key/secret is either null or empty string, or floor mapping is missing!");
            mCanDeliver = false;
        } else {
            mCanDeliver = true;
        }

        Bundle extras = new Bundle(2);
        extras.putString(IALocationManager.EXTRA_API_KEY, apiKey);
        extras.putString(IALocationManager.EXTRA_API_SECRET, secret);

        mIndoorAtlasClient = IALocationManager.create(mContext, extras);
        mIndoorAtlasClient.registerOrientationListener(new IAOrientationRequest( 1, 0 ), mOrientationListener);

        // Enable switching to GPS when outside, in the IndoorAtlas SDK
        mIndoorAtlasClient.lockIndoors(false);
    }

    private Map<Integer, Integer> constructFloorMapping(Map<String, Object> config){
        Map<Integer, Integer> floorMapping = new HashMap<>();

        Object mappingObject = config.get("floorMapping");
        if(mappingObject != null){
            LinkedTreeMap<String, Double> map = (LinkedTreeMap<String, Double>) mappingObject;

            // Convert to int:int map
            for(Map.Entry<String, Double> entry : map.entrySet()){
                int key = Integer.parseInt(entry.getKey());
                double val = entry.getValue();
                floorMapping.put(key, (int)val);
            }
        }

        return floorMapping;
    }
}
```

</mi-tab-panel>
</mi-tabs>

Create the `IAOrientationListener` we register in the `init` method and a `positionUpdate` method.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/PositionProviders/IndoorAtlasPositionProvider.java#L212-L258">IndoorAtlasPositionProvider.java</a>

```java
public class IndoorAtlasPositionProvider implements PositionProvider {
    private float mLatestBearing;
    private long mLastHeadingUpdateTime;
    private static final long MIN_TIME_BETWEEN_UPDATES_IN_MS = 100;
    ...
    private IAOrientationListener mOrientationListener = new IAOrientationListener() {
        @Override
        public void onHeadingChanged( long timestamp, double heading ) {
            if( mLatestPosition != null ) {
                final long dt = timestamp - mLastHeadingUpdateTime;

                if( dt < MIN_TIME_BETWEEN_UPDATES_IN_MS ) {
                    return;
                }

                mLastHeadingUpdateTime = timestamp;

                final float bearing = (float) heading;

                mLatestPosition.setBearing( bearing );
                mLatestBearing = bearing;

                reportPositionUpdate();
            }
        }

        @Override
        public void onOrientationChange( long timestamp, @Nullable double[] quaternion ) {
            if( mLatestPosition != null ) {
                final long dt = timestamp - mLastOrientationUpdateTime;

                if( dt < MIN_TIME_BETWEEN_UPDATES_IN_MS ) {
                    return;
                }

                mLastOrientationUpdateTime = timestamp;
            }
        }
    };


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

Implement the `startPositoning` and `stopPositioning` method:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/PositionProviders/IndoorAtlasPositionProvider.java#L128-L143">IndoorAtlasPositionProvider.java</a>

```java
public class IndoorAtlasPositionProvider implements PositionProvider {
    ...
    @Override
    public void startPositioning(@Nullable String s) {
        if(!mIsRunning){
            initClient();
            mIndoorAtlasClient.requestLocationUpdates( IALocationRequest.create(), locationListener );
            mIsRunning = true;
        }
    }

    @Override
    public void stopPositioning(@Nullable String s) {
        if(mIsRunning && mIndoorAtlasClient != null) {
            mIndoorAtlasClient.removeLocationUpdates(locationListener);
            mIsRunning = false;
        }
    }
    ...
}
```

</mi-tab-panel>
</mi-tabs>

Create the locationListener referenced in the `startPositioning` and `stopPositioning`:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/PositionProviders/IndoorAtlasPositionProvider.java#L260-L300">IndoorAtlasPositionProvider.java</a>

```java
public class IndoorAtlasPositionProvider implements PositionProvider {
    ...
    private final IALocationListener locationListener = new IALocationListener() {
        @Override
        public void onLocationChanged( @Nullable final IALocation location ) {
            final double latitude = location.getLatitude();
            final double longitude = location.getLongitude();
            final int floorLevel = location.getFloorLevel();
            final float accuracy = location.getAccuracy();

            final boolean hasFloorLevel = location.hasFloorLevel();

            if( isRunning() ) {
                mIsIPSEnabled = true;

                final MPPositionResult newLocation = new MPPositionResult( new Point( latitude, longitude ), accuracy, mLatestBearing);
                newLocation.setAndroidLocation( location.toLocation() );
                mLatestPosition = newLocation;

                if( hasFloorLevel ) {
                    final int miFloorIndex;

                    if( mFloorMapping.containsKey(floorLevel) ) {
                        miFloorIndex = mFloorMapping.get(floorLevel);
                    } else {
                        miFloorIndex = Floor.DEFAULT_GROUND_FLOOR_INDEX;
                    }

                    mLatestPosition.setFloor( miFloorIndex );
                } else {
                    mLatestPosition.setFloor( Floor.DEFAULT_GROUND_FLOOR_INDEX );
                }

                mLatestPosition.setProvider( IndoorAtlasPositionProvider.this );
                reportPositionUpdate();
            }
        }

        @Override
        public void onStatusChanged(@Nullable final String provider, final int status, @Nullable final Bundle extras ) {

        }
    };
}
```

</mi-tab-panel>
</mi-tabs>

Now we need to start up our PositionProvider to get positioning onto our Map. This we will do through our PositionProviderService. We start with creating a method to setup the IndoorAtlas positionProvider from the PositionProviderService.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/PositionProviders/PositionProviderService.java#L70-L117">PositionProviderService.java</a>

```java
public class PositionProviderService implements PositionProvider {
    PositionProvider indoorAtlasPositionProvider;

    public void setupIndoorAtlasPositioning() {
        mActivity.runOnUiThread(()-> {
            Map<String, Object> indoorAtlasConfig = MapsIndoors.getSolution().getPositionProviderConfig().get("indooratlas3");
            mIndoorAtlasPositionProvider = new IndoorAtlasPositionProvider(mActivity, indoorAtlasConfig);
            //We start by making sure we have the permissions to enable Indoor Atlas positioning.
            mIndoorAtlasPositionProvider.checkPermissionsAndPSEnabled(new PermissionsAndPSListener() {
                @Override
                public void onPermissionDenied() { }

                @Override
                public void onPermissionGranted() {
                    onIndoorAtlasPermissionsGiven();
                }

                @Override
                public void onGPSPermissionAndServiceEnabled() { }

                @Override
                public void onPermissionRequestError() { }
            });
        });
    }

    void onIndoorAtlasPermissionsGiven() {
        MapsIndoors.setPositionProvider(mIndoorAtlasPositionProvider);
        MapsIndoors.startPositioning();
        mMapControl.showUserPosition(true);

        mIndoorAtlasPositionProvider.addOnPositionUpdateListener(new OnPositionUpdateListener() {
            @Override
            public void onPositioningStarted(@NonNull @NotNull PositionProvider positionProvider) { }

            @Override
            public void onPositionFailed(@NonNull @NotNull PositionProvider positionProvider) { }

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
}
```

</mi-tab-panel>
</mi-tabs>

All that is left to do now is to start this up after initializing our mapControl.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L186-L189">MapsActivity.java</a>

```java
mMapControl.init(miError -> {
    mPositionProviderService = new PositionProviderService(yourActivity, mMapControl);
    mPositionProviderService.setupIndoorAtlasPositioning();
}
```

</mi-tab-panel>
</mi-tabs>

A full example of the CiscoDNA position provider together with PositionProviderService can be found here: [PositionProviders](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/tree/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/PositionProviders)
