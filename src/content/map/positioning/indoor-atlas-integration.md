---
title: Using Indoor Atlas
eleventyNavigation:
  title: Using Indoor Atlas
  parent: map-positioning-blue-dot
  key: map-positioning-indoor-atlas
  order: 130
---

<mi-tabs>
<mi-tab label="Android" tab-for="android"></mi-tab>
<mi-tab label="iOS" tab-for="ios"></mi-tab>
<mi-tab-panel id="android">

To get started with Indoor Atlas positioning, you need to create a positioning implementation which enables communicating the positions received from Indoor Atlas with the MapsIndoors SDK.

The Position Provider implementation exists at the customer application level, and needs to use the `PositionProvider` interface from the MapsIndoors SDK. The MapsIndoors SDK can then use the positioning results given by the given Position Provider, by setting the Position Provider with `MapControl.setPositionProvider(PositionProvider)`.

### Floor Mapping

The Position Provider should align with the MapsIndoors Floor index convention (floors are indexed as e.g 0, 10, 20, 30 corresponding to ground floor, 1st floor, 2nd floor, 3rd floor, with negative floors indices allowed as well to indicate Floors below ground, e.g. -10). It is therefore up to the Position Provider class to convert any given Floor indexing from the positioning source to that of MapsIndoors.

For a typical Position Provider, the mapping from the positioning's index needs to be mapped to the MapsIndoors Floor format. This is possible through the CMS or creating your own int:int mapping.

### Implementing Indoor Atlas

This Guide requires you to already have an activity that shows a MapsIndoors Map as well as a Indoor Atlas beacon network for positioning. We use Indoor Atlas v3 for this guide. Here is how to set it up in your project: [Indoor Atlas setup](https://indooratlas.freshdesk.com/support/solutions/articles/36000050564-setup-positioning-sdk-with-android)

We start by implementing a Positioning Provider service. This service is needed so you can have multiple positioning providers running in the same application, and have the code stored in one location.

To begin, create a simple class with a constructor that receives an `Activity` and a `MapControl` object.

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

Now we will start implementing the Indoor Atlas position provider. Create a class called `IndoorAtlasPositionProvider` that implements the `PositionProvider` interface from the MapsIndoors SDK, also create a constructor that takes a `Context` as parameter.

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

We will start by implementing logic to each of the implemented methods from the `PositionProvider` interface.

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

We will then start implementing the code to get Indoor Atlas positioning up and running.

For Indoor Atlas to work you will need to supply Indoor Atlas with a API key and a secret key. This can be handled in two ways, if the Indoor Atlas account is setup through MapsPeople CMS on the Position Provider tab, we will have the data for this stored on the MapsIndoors SDK. If not you will have to handle the two keys yourself, this can be done through String resources as an example.

We start by creating a method to initiate the Indoor Atlas client. Here the method is called `initClient`.

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

Create the `IAOrientationListener` we register in the `init` method and a `positionUpdate` method.

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

Implement the `startPositoning` and `stopPositioning` method:

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

Create the `locationListener` referenced in the `startPositioning` and `stopPositioning`:

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

Now we need to start up our `PositionProvider` to get positioning onto our Map. This we will do through our `PositionProviderService`. We start with creating a method to setup the IndoorAtlas `positionProvider` from the `PositionProviderService`.

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

Lastly, we need to start this up after initializing our `MapControl`.

<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L186-L189">MapsActivity.java</a>

```java
mMapControl.init(miError -> {
    mPositionProviderService = new PositionProviderService(yourActivity, mMapControl);
    mPositionProviderService.setupIndoorAtlasPositioning();
}
```

A full example implementation of the Indoor Atlas position provider together with `PositionProviderService` can be found here: [PositionProviders](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/tree/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/PositionProviders)

</mi-tab-panel>
<mi-tab-panel id="ios">

## MapsIndoors and IndoorAtlas

MapsIndoors is a dynamic mapping platform from MapsPeople that can provide maps of your indoor and outdoor localities and helps you create search and navigation experiences for your local users. IndoorAtlas is a MapsPeople partner that works with indoor location based services. Among other things, IndoorAtlas can precisely provide an indoor position with the help of various technologies utilizing various mobile device sensors.

## How User Positioning Works in MapsIndoors

In order to show a user's position in an indoor map with MapsIndoors, a Position Provider must be implemented. MapsIndoors does not implement a Position Provider itself, but rely on 3rd party positioning software to create this experience. In an outdoor environment this Position Provider can be a wrapper of the Core Location Services in iOS.

A Position Provider in MapsIndoors must adhere to the `MPPositionProvider` protocol. Once you have an instance of an `MPPositionProvider` you can register it by assigning it to `MapsIndoors.positionProvider`. See the overview of the interface dependencies below.

![cisco-dna-ios](/assets/map/positioning/Cisco_DNA_iOS.png)

## Wrapping IndoorAtlas in a Position Provider

As previously explained we need to implement a Position Provider that wraps the Indoor Atlas services to inject the indoor positioning into MapsIndoors. We have created an example of such a Position Provider, `IAPositionProvider`, which we will utilize in the following setup instructions. The `IAPositionProvider` is written in Objective C, but can of course be used in Swift as well.

### Floor Mapping

The Position Provider that you supply to MapsIndoors must know about the floor indexes that exist in MapsIndoors. These floor indexes may not exist in the 3rd party system that provides the indoor position. In order to account for this, we have created a floor mapping in the provider, which is basically a lookup table that can give you the MapsIndoors floor index based on another index or id. The mapping is illustrated below:

```json
// { IndoorAtlas floor index : MapsIndoors floor index }
{
  0:0,
  1:10,
  2:20,
  3:30,
  4:40
}
```

As illustrated, the floor mapping is a dictionary, where the IndoorAtlas floor index operates as the key and the MapsIndoors floor index is the value.

## Integration Setup Steps

1. Make sure you have [integrated MapsIndoors]({{site.url}}/content/getting-started/ios) succesfully.
1. Download and unzip [this zip file](https://drive.google.com/file/d/1F50FRWBmtHnO9HxASY-T2rkgjRJt7TNm/view?usp=sharing) containing the IndoorAtlas integration source.
1. Create a group in your Xcode project, e.g. called IndoorAtlas.
1. Drag and drop the files in the downloaded folder to your new group. Choose "Copy items if needed".
1. If this is the first Objective C code in your project, Xcode will suggest that you create an Objective C Bridging Header file. Select "Yes" or "Create Bridging Header".
1. In your Objective C Bridging Header, add `#import "IAPositionProvider.h"`.
1. At the time of writing this guide, IndoorAtlas does not support BitCode, so this must be disabled. In the settings, under your XCode project > "Targets" > "Your App Target" > "Build Settings" > "Build Options", set "Enable BitCode" to "No".
1. In your Apps `Info.plist` file add the following descriptions (preferably right click `Info.plist` and choose "Open as" > "Source Code"):

    ```json
    <key>NSLocationWhenInUseUsageDescription</key>
    <string>This application uses your location in order to provide wayfinding to indoor facilities.</string>
    <key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
    <string>This application uses your location in order to provide wayfinding to indoor facilities.</string>
    <key>NSLocationAlwaysUsageDescription</key>
    <string>This application uses your location in order to provide wayfinding to indoor facilities.</string>
    <key>NSMotionUsageDescription</key>
    <string>This application uses motion data in order to determine your indoor position.</string>
    <key>NSBluetoothAlwaysUsageDescription</key>
    <string>This application uses BlueTooth in order to determine your indoor position.</string>
    <key>NSBluetoothPeripheralUsageDescription</key>
    <string>This application uses BlueTooth in order to determine your indoor position.</string>
    ```

1. In `AppDelegate.swift` - `didFinishLaunchingWithOptions`, add the following code:

    ```swift
    let pp = IAPositionProvider.init(apiKey: "my-indoor-atlas-key", apiSecret: "my-indoor-atlas-secret", floorMapping: [NSNumber(0):NSNumber(0)])
        MapsIndoors.positionProvider = pp
        MapsIndoors.positionProvider?.startPositioning(nil)
    ```

1. In the added code, replace:
    * `my-indoor-atlas-key` with your own IndoorAtlas application key.
    * `my-indoor-atlas-secret` with your own IndoorAtlas application key.
    * `[NSNumber(0):NSNumber(0)]` with the correct floor mapping.

1. In your view controller displaying the Google Map using `MPMapControl`, call `mapControl.showUserPosition(true)`.
1. Build and run the application. You should now be able to show a blue dot for the user's position.

If you need a working project example with MapsIndoors and IndoorAtlas (excluding API keys), you can [download it here](https://drive.google.com/file/d/1CS13NPYjvLl_Q4zbuinevannsKyuiuBM/view?usp=sharing).

</mi-tab-panel>
</mi-tabs>
