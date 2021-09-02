---
title: Use Cisco DNA with MapsIndoors
eleventyNavigation:
  parent: android-v3-guides-use-third-party-positioning-with-MapsIndoors
  title: Use Cisco DNA with MapsIndoors
  key: android-v3-use-Cisco-DNA-positioning-with-MapsIndoors
  order: 240
---

For Cisco DNA positoning the MapsIndoors SDK offers all the required building blocks to get it up and running - so no external dependencies are needed.

The Position Provider implementation exists at the customer application level, and needs to implement the PositionProvider interface from the MapsIndoors SDK. The MapsIndoors SDK can then utilize the positioning results yielded from the given Position Provider, by setting the Position Provider with MapControl.setPositionProvider(PositionProvider).

### Floor Mapping

The Position Provider should align with the MapsIndoors floor index convention (floors are indexed as 0, 10, 20, 30, etc. corresponding to ground floor, 1st floor, 2nd floor, 3rd floor, etc., where negative floors indices are allowed, as e.g. -10). It is therefore up to the position provider class to convert any given floor indexing from the positioning source to that of MapsIndoors.
For a typical Position Provider this mapping from whatever indexing is derived from the positioning, needs to be mapped to the Mapsindoors floor format. However, as the MapsIndoors backend is closely integrated with the CiscoDNA platform, the MapsIndoors backend handles this floor mapping conversion. From an application perspective no floor mapping implementation is required when integrating CiscoDNA positioning through the MapsIndoors platform.

### Implementing Cisco DNA

This Guide requires you to already have an activity that shows a MapsIndoors map and a Cisco DNA network with positioning active.

We start by implementing a Positioning Provider service. This service is so that in the future you can have mulitple positioning solutions running in the same application and have the code stored in one location. For now just create a simple class with a constructor that receives an activity and a MapControl object.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L270-L278">MapsActivity.java</a>

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

Now we will start implementing the CiscoDNA position provider. Create a class called CiscoDNAPositionProvider that implements the PositionProvider interface from the MapsIndoorsSDK, also create a constructor that takes a context as well as a String as a tenantId.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L270-L278">MapsActivity.java</a>

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

We will start by implementing logic to each of the implemented methods from the PositionProvider interface. Some of theese will be generic others will be specific to CiscoDNA.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L270-L278">MapsActivity.java</a>

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

The CiscoDNA positioning requires three parameters, the device’s IPv4 address (LAN) and the external IP address of the network in question (WAN), as well as the Tenant ID.

Start by creating a method to retrieve the LAN adress:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L270-L278">MapsActivity.java</a>

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

Then the WAN adress, as of now we suggest using a 3rd party service to acquire the WAN adress:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L270-L278">MapsActivity.java</a>

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

Lastly we need the Tenant Id. This is an id you can have hardcoded inside your app or saved as a string resource otherwise you can use the PositionProviderConfig fields from MapsIndoors to get this id like this:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L270-L278">MapsActivity.java</a>

```java
Map<String, Object> ciscoDnaConfig = MapsIndoors.getSolution().getPositionProviderConfig().get("ciscodna");
String tenantId = (String) ciscoDnaConfig.get("ciscoDnaSpaceTenantId");
```

</mi-tab-panel>
</mi-tabs>

If all of the three above mentioned strings can be acquired, you can ask our endpoint for a CiscoDNA Device ID string. A device id is only available if there has been a recorded positioning for the device, in the past 24 hours. We will implement this as a new method into our CiscoDNAPositionProvider.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L270-L278">MapsActivity.java</a>

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

Now you can make a method to start a subscription that we will use when starting positioning to receive position updates. You use the SDKs `LiveDataManager` to create a subscription.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L270-L278">MapsActivity.java</a>

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
    ...
}
```

</mi-tab-panel>
</mi-tabs>

To handle the subscription we have just created we need to create some callbacks in the constructor of the PositionProvider to handle the position results and lifecycle of the subscription:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L270-L278">MapsActivity.java</a>

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

Implement the startPositoning and stopPositioning method:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L270-L278">MapsActivity.java</a>

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

    private void unsubscribe(){
        LiveDataManager.getInstance().unsubscribeTopic(mTopic);
        mIsSubscribed = false;
    }
}
```

</mi-tab-panel>
</mi-tabs>

Now we need to start up our PositionProvider to get positioning onto our map. This we will do through our PositionProviderService. We start with creating a method to setup the CiscoDNA positionProvider from the PositionProviderService.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L270-L278">MapsActivity.java</a>

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

All that is left to do now is to start this up after initialising our mapControl.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L270-L278">MapsActivity.java</a>

```java
mMapControl.init(miError -> {
    mPositionProviderService = new PositionProviderService(yourActivity, mMapControl);
    mPositionProviderService.setupCiscoPositioning();
}
```

</mi-tab-panel>
</mi-tabs>

***TODO: Create link for the full sample of the working implementation of IndoorAtlas and update code sample links to show it in that sample***
