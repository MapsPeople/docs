---
title: Use Cisco DNA with MapsIndoors
eleventyNavigation:
  parent: map-live-data-third-party-android
  title: Use Cisco DNA with MapsIndoors
  key: map-live-data-third-party-android-cisco
  order: 240
---

To get started with Cisco DNA positioning, the MapsIndoors SDK offers all the required building blocks without any external dependencies.

The Position Provider implementation exists at the customer application level, and needs to use the `PositionProvider` interface from the MapsIndoors SDK. The MapsIndoors SDK can then use the positioning results given by the Position Provider when setting the Position Provider with `MapControl.setPositionProvider(PositionProvider)`.

### Floor Mapping

The Position Provider should align with the MapsIndoors Floor index convention (floors are indexed as e.g 0, 10, 20, 30 corresponding to ground floor, 1st floor, 2nd floor, 3rd floor, with negative floors indices allowed as well to indicate Floors below ground, e.g. -10). It is therefore up to the Position Provider class to convert any given Floor indexing from the positioning source to that of MapsIndoors.

For a typical Position Provider, the mapping from the positioning's index needs to be mapped to the MapsIndoors Floor format.

The MapsIndoors backend is closely integrated with the CiscoDNA platform, so the MapsIndoors backend handles the floor mapping conversion for that integration. From an application perspective no Floor mapping implementation is required when integrating CiscoDNA positioning through the MapsIndoors platform.

### Implementing Cisco DNA

This Guide requires you to already have an activity that shows a MapsIndoors Map as well as a Cisco DNA network with positioning active.

We start by implementing a Positioning Provider service. This service is needed so you can have multiple positioning providers running in the same application, and have the code stored in one location.

To begin, create a class with a constructor that receives an `Activity` and a `MapControl` object.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/PositionProviders/PositionProviderService.java#L22-L32">PositionProviderService.java</a>

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

Now we will start implementing the CiscoDNA position provider. Create a class called `CiscoDNAPositionProvider` that implements the `PositionProvider` interface from the MapsIndoors SDK. Then create a constructor that takes a `Context`, as well as a String named `tenantId`.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/PositionProviders/CiscoDNAPositionProvider.java#L37-L84">CiscoDNAPositionProvider.java</a>

```java
public class CiscoDNAPositionProvider implements PositionProvider {
    private Context mContext;
    private String mTenantId;

    //Used for the PositionProvider Interface
    private boolean mIsRunning;
    private boolean mIsIPSEnabled;

    public CiscoDNAPositionProvider(@NonNull Context context, @NonNull String tenantId){
        mContext = context;
        mIsRunning = false;
        mTenantId = tenantId;
    }
}
```

</mi-tab-panel>
</mi-tabs>

We will start by implementing logic to each of the implemented methods from the `PositionProvider` interface. Some of these will be generic, while others will be specific to CiscoDNA.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/PositionProviders/CiscoDNAPositionProvider.java#L177-L271">CiscoDNAPositionProvider.java</a>

```java
public class CiscoDNAPositionProvider implements PositionProvider {
    //Implement the necessary variables for the interface logic
    private boolean mIsIPSEnabled;
    private boolean mIsRunning;
    private String mProviderId;
    private final List<OnStateChangedListener> mOnStateChangedListenersList = new ArrayList<>();
    private final List<OnPositionUpdateListener> mOnPositionUpdateListeners = new ArrayList<>();
    private PositionResult mLatestPosition;

    @NonNull
    @Override
    public String[] getRequiredPermissions() {
        //Specific to CiscoDNA as it only uses Wifi it does not require any permissions
        return new String[0];
    }

    @Override
    public boolean isPSEnabled() {
        return mIsIPSEnabled;
    }

    @Override
    public void startPositioning(@Nullable String s) {
        //This will be implemented when we have setup the required CISCO dna logic.
    }

    @Override
    public void stopPositioning(@Nullable String s) {
        //This will be implemented when we have setup the required CISCO dna logic.
    }

    @Override
    public boolean isRunning() {
        return mIsRunning;
    }

    @Override
    public void addOnPositionUpdateListener(@Nullable OnPositionUpdateListener onPositionUpdateListener) {
        if(onPositionUpdateListener != null && !mOnPositionUpdateListeners.contains(onPositionUpdateListener)){
            mOnPositionUpdateListeners.add(onPositionUpdateListener);
        }
    }

    @Override
    public void removeOnPositionUpdateListener(@Nullable OnPositionUpdateListener onPositionUpdateListener) {
        if(onPositionUpdateListener != null){
            mOnPositionUpdateListeners.remove(onPositionUpdateListener);
        }
    }

    @Override
    public void setProviderId(@Nullable String s) {
        mProviderId = s;
    }

    @Override
    public void addOnStateChangedListener(@Nullable OnStateChangedListener onStateChangedListener) {
        if(onStateChangedListener != null && !mOnStateChangedListenersList.contains(onStateChangedListener)){
            mOnStateChangedListenersList.add(onStateChangedListener);
        }
    }

    @Override
    public void removeOnStateChangedListener(@Nullable OnStateChangedListener onStateChangedListener) {
        if(onStateChangedListener != null){
            mOnStateChangedListenersList.remove(onStateChangedListener);
        }
    }

    @Override
    public void checkPermissionsAndPSEnabled(@Nullable PermissionsAndPSListener permissionsAndPSListener) {
        // Do locations permissions check here... this is not necessary for CiscoDNA, as it is
        // a wifi based positioning system, meaning the positioning is completely external to the
        // device itself.
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
    public void startPositioningAfter(int i, @Nullable String s) { }

    @Override
    public void terminate() { }
}
```

</mi-tab-panel>
</mi-tabs>

The CiscoDNA positioning requires three parameters:

1. The device’s IPv4 address (LAN)
2. The external IP address of the network in question (WAN)
3. The Tenant ID

Start by creating a method to retrieve the LAN address:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/PositionProviders/CiscoDNAPositionProvider.java#L134-L153">CiscoDNAPositionProvider.java</a>

```java
public class CiscoDNAPositionProvider implements PositionProvider {
    ...
    @Nullable
    private String getLocalAddress(){
        try {
            for (Enumeration<NetworkInterface> en = NetworkInterface.getNetworkInterfaces(); en.hasMoreElements();) {
                NetworkInterface intf = en.nextElement();
                for (Enumeration<InetAddress> enumIpAddr = intf.getInetAddresses(); enumIpAddr.hasMoreElements();) {
                    InetAddress inetAddress = enumIpAddr.nextElement();
                    if (!inetAddress.isLoopbackAddress() && inetAddress instanceof Inet4Address) {
                        String ipv4 = inetAddress.getHostAddress().toString();
                        Log.i(TAG, "LAN: " + ipv4);
                        return ipv4;
                    }
                }
            }
        } catch (SocketException ex) {
            Log.e(this.getClass().getSimpleName(), "Failed to resolve LAN address");
        }

        return null;
    }
    ...
}
```

</mi-tab-panel>
</mi-tabs>

Then create a method to retrieve the WAN address (we recommend using a 3rd party service for this):

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/PositionProviders/CiscoDNAPositionProvider.java#L155-L175">CiscoDNAPositionProvider.java</a>

```java
public class CiscoDNAPositionProvider implements PositionProvider {
    ...
    private void fetchExternalAddress(@NonNull ReadyListener listener){
        OkHttpClient httpClient = new OkHttpClient();
        Request request = new Request.Builder().url("https://ipinfo.io/ip").build();

        httpClient.newCall(request).enqueue(new Callback() {
            @Override
            public void onFailure(@NotNull Call call, @NotNull IOException e) {
                listener.onResult();
            }

            @Override
            public void onResponse(@NotNull Call call, @NotNull Response response) throws IOException {
                if(response.isSuccessful()){
                    String str = response.body().string();
                    mWan = str;
                    Log.i(TAG, "WAN: " + mWan);
                }
                listener.onResult();
            }
        });
    }
    ...
}
```

</mi-tab-panel>
</mi-tabs>

Lastly, we need the Tenant ID. This is an ID you might have hardcoded inside your app, or saved as a string resource. Otherwise you can use the `PositionProviderConfig` fields from MapsIndoors to get this ID like this:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/PositionProviders/PositionProviderService.java#L35-L36">PositionProviderService.java</a>

```java
Map<String, Object> ciscoDnaConfig = MapsIndoors.getSolution().getPositionProviderConfig().get("ciscodna");
String tenantId = (String) ciscoDnaConfig.get("ciscoDnaSpaceTenantId");
```

</mi-tab-panel>
</mi-tabs>

If all of the three above mentioned strings can be acquired, you can ask our endpoint for a CiscoDNA Device ID string. A device ID is only available if there has been a recorded positioning for the device, in the past 24 hours. We will implement this as a new method into our `CiscoDNAPositionProvider`.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/PositionProviders/CiscoDNAPositionProvider.java#L105-L132">CiscoDNAPositionProvider.java</a>

```java
public class CiscoDNAPositionProvider implements PositionProvider {
    ...
    private void updateAddressesAndId(ReadyListener onComplete) {
        mLan = getLocalAddress();
        fetchExternalAddress(() -> {
            if(mTenantId != null && mLan != null && mWan != null){
                String url = MAPSINDOORS_CISCO_ENDPOINT + mTenantId + "/api/ciscodna/devicelookup?clientIp=" + mLan + "&wanIp=" + mWan;
                OkHttpClient client = new OkHttpClient();
                Request request = new Request.Builder().url(url).build();
                try {
                    Response response = client.newCall(request).execute();
                    if (response.isSuccessful()) {
                        Gson gson = new Gson();
                        String json = response.body().string();
                        JsonObject jsonObject = gson.fromJson(json, JsonObject.class);
                        mCiscoDeviceId = jsonObject.get("deviceId").getAsString();
                    } else {
                        Log.i(TAG, "Could not obtain deviceId from backend deviceID request! Code: " + response.code());
                    }
                    response.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            if(onComplete != null){
                onComplete.onResult();
            }
        });
    }
    ...
}
```

</mi-tab-panel>
</mi-tabs>

Now you can make a method to start a subscription that we use when starting positioning to receive position updates. You use the SDKs `LiveDataManager` to create a subscription.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/PositionProviders/CiscoDNAPositionProvider.java#L86-L103">CiscoDNAPositionProvider.java</a>

```java
public class CiscoDNAPositionProvider implements PositionProvider {
    private CiscoDNATopic mTopic;
    private boolean mIsSubscribed;
    ...
    private void startSubscription(){
        mTopic = new CiscoDNATopic(mTenantId, mCiscoDeviceId);

        if(!mIsSubscribed){
            LiveDataManager.getInstance().setOnTopicSubscribedListener(topic -> {
                if(topic.equals(mTopic)){
                    mIsIPSEnabled = true;
                    mIsSubscribed = true;
                }
            });
            LiveDataManager.getInstance().subscribeTopic(mTopic);
        }
    }

    private void unsubscribe(){
        LiveDataManager.getInstance().unsubscribeTopic(mTopic);
        mIsSubscribed = false;
    }
    ...
}
```

</mi-tab-panel>
</mi-tabs>

To handle the subscription we just created, we need to create some callbacks in the constructor of the `PositionProvider` to handle the position results and lifecycle of the subscription:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/PositionProviders/CiscoDNAPositionProvider.java#L59-L84">CiscoDNAPositionProvider.java</a>

```java
public class CiscoDNAPositionProvider implements PositionProvider {
    public CiscoDNAPositionProvider(@NonNull Context context, @NonNull String tenantId){
        mContext = context;
        mIsRunning = false;
        mTenantId = tenantId;

        LiveDataManager.getInstance().setOnTopicUnsubscribedListener(topic -> {
            if(topic.matchesCriteria(mTopic)){
                mIsSubscribed = false;
                mCiscoDeviceId = null;
                mIsIPSEnabled = false;
            }
        });

        LiveDataManager.getInstance().setOnReceivedLiveUpdateListener((topic, message) -> {
            if(message.getId().equals(mCiscoDeviceId)){
                mLatestPosition = message.getPositionResult();

                // Report to listeners
                for(OnPositionUpdateListener listener : mOnPositionUpdateListeners){
                    listener.onPositionUpdate(mLatestPosition);
                }
            }
        });
    }
    ...
}
```

</mi-tab-panel>
</mi-tabs>

Implement the `startPositoning` and `stopPositioning` method:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/PositionProviders/CiscoDNAPositionProvider.java#L188-L208">CiscoDNAPositionProvider.java</a>

```java
public class CiscoDNAPositionProvider implements PositionProvider {
    @Override
    public void startPositioning(@Nullable String s) {
        if(!mIsRunning){
            mIsRunning = true;
            updateAddressesAndId(() -> {
                if(mCiscoDeviceId != null && !mCiscoDeviceId.isEmpty()){
                    startSubscription();
                }
            });
        }
    }

    @Override
    public void stopPositioning(@Nullable String s) {
        if(mIsRunning){
            mIsRunning = false;
            if(mIsSubscribed){
                unsubscribe();
            }
        }
    }  
}
```

</mi-tab-panel>
</mi-tabs>

Now we need to start up our `PositionProvider` to get positioning onto our map. This we will do through our `PositionProviderService`. We start by creating a method to setup the Cisco DNA `positionProvider` from the `PositionProviderService`.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/PositionProviders/PositionProviderService.java#L34-L68">PositionProviderService.java</a>

```java
public class PositionProviderService {
    private PositionProvider mCiscoDNAPositionProvider;
    ...
    public void setupCiscoPositioning(){
        Map<String, Object> ciscoDnaConfig = MapsIndoors.getSolution().getPositionProviderConfig().get("ciscodna");
        String tenantId = (String) ciscoDnaConfig.get("ciscoDnaSpaceTenantId");

        if(tenantId == null || tenantId.isEmpty()){
            // Cannot setup CiscoDNA positioning in this case
            return;
        }

        mCiscoDNAPositionProvider = new CiscoDNAPositionProvider(mActivity, tenantId);
        MapsIndoors.setPositionProvider(mCiscoDNAPositionProvider);
        MapsIndoors.startPositioning();
        mMapControl.showUserPosition(true);

        mCiscoDNAPositionProvider.addOnPositionUpdateListener(new OnPositionUpdateListener() {
            @Override
            public void onPositioningStarted(@NonNull PositionProvider positionProvider) { }

            @Override
            public void onPositionFailed(@NonNull PositionProvider positionProvider) { }

            @Override
            public void onPositionUpdate(@NonNull PositionResult positionResult) {
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
    ...
}
```

</mi-tab-panel>
</mi-tabs>

Lastly, we need to start this up after initializing our `MapControl`.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L186-L188">MapsActivity.java</a>

```java
mMapControl.init(miError -> {
    mPositionProviderService = new PositionProviderService(yourActivity, mMapControl);
    mPositionProviderService.setupCiscoPositioning();
}
```

</mi-tab-panel>
</mi-tabs>

A full example of the Cisco DNA position provider together with `PositionProviderService` can be found here: [PositionProviders](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/tree/feature/third_pary_position_providers/app/src/main/java/com/example/mapsindoorsgettingstarted/PositionProviders)