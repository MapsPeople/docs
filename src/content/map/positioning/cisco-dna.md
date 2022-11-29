---
title: Using Cisco DNA Spaces
eleventyNavigation:
  parent: map-positioning-blue-dot
  title: Using Cisco DNA Spaces
  key: map-positioning-cisco-dna-android
  order: 110
---

<mi-tabs>
<mi-tab label="Android" tab-for="android"></mi-tab>
<mi-tab label="iOS" tab-for="ios"></mi-tab>
<mi-tab label="Web" tab-for="web"></mi-tab>
<mi-tab-panel id="android">

To get started with Cisco DNA positioning, the MapsIndoors SDK offers all the required building blocks without any external dependencies.

The Position Provider implementation exists at the customer application level, and needs to use the `MPPositionProvider` interface from the MapsIndoors SDK. The MapsIndoors SDK can then use the positioning results given by the Position Provider when setting the Position Provider with `MapsIndoors.setPositionProvider(MPPositionProvider)`.

### Floor Mapping for Android

The Position Provider should align with the MapsIndoors Floor index convention (floors are indexed as e.g 0, 10, 20, 30 corresponding to ground floor, 1st floor, 2nd floor, 3rd floor, with negative floors indices allowed as well to indicate Floors below ground, e.g. -10). It is therefore up to the Position Provider class to convert any given Floor indexing from the positioning source to that of MapsIndoors.

For a typical Position Provider, the mapping from the positioning's index needs to be mapped to the MapsIndoors Floor format.

The MapsIndoors backend is closely integrated with the CiscoDNA platform, so the MapsIndoors backend handles the floor mapping conversion for that integration. From an application perspective no Floor mapping implementation is required when integrating CiscoDNA positioning through the MapsIndoors platform.

<!-- Fetch data from solution -->
{% include "src/content/shared/map/positioning-fetch-android.md" %}

### Implementing Cisco DNA for Android

This Guide requires you to already have an activity that shows a MapsIndoors Map as well as a Cisco DNA network with positioning active.

Now we will start implementing the CiscoDNA position provider. Create a class called `CiscoDNAPositionProvider` that implements the `MPPositionProvider` interface from the MapsIndoors SDK. Then create a constructor that takes a `Context`.

<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/positioning/CiscoDNAPositionProvider.kt#L18-L22">CiscoDNAPositionProvider.kt</a>

```kotlin
class CiscoDNAPositionProvider (private val context: Context, private val config: MPCiscoDNAConfig): MPPositionProvider {
    private var mLatestPosition: MPPositionResultInterface? = null
    private val positionUpdateListeners = ArrayList<OnPositionUpdateListener>()
    //If you do not have CiscoDNA set up through MapsIndoors you can write your tenantId here instead of using one from the config
    private val tenantId: String? = config.tenantId
}
```

We will start by implementing logic to each of the implemented methods from the `MPPositionProvider` interface. Some of these will be generic, while others will be specific to CiscoDNA.

<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/positioning/CiscoDNAPositionProvider.kt#L191-L201">CiscoDNAPositionProvider.kt</a>

```kotlin
class CiscoDNAPositionProvider (private val context: Context, private val config: MPCiscoDNAConfig): MPPositionProvider {
    private var mLatestPosition: MPPositionResultInterface? = null
    private val positionUpdateListeners = ArrayList<OnPositionUpdateListener>()
    ...

    override fun addOnPositionUpdateListener(p0: OnPositionUpdateListener) {
        positionUpdateListeners.add(p0)
    }

    override fun removeOnPositionUpdateListener(p0: OnPositionUpdateListener) {
        positionUpdateListeners.remove(p0)
    }

    override fun getLatestPosition(): MPPositionResultInterface? {
        return mLatestPosition
    }
}
```

The CiscoDNA positioning requires three parameters:

1. The device’s IPv4 address (LAN)
2. The external IP address of the network in question (WAN)
3. The Tenant ID

Start by creating a method to retrieve the LAN address:

<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/positioning/CiscoDNAPositionProvider.kt#L136-L153">CiscoDNAPositionProvider.kt</a>

```kotlin
class CiscoDNAPositionProvider (private val context: Context, private val config: MPCiscoDNAConfig): MPPositionProvider {
    private var ciscoDeviceId: String? = null
    private var lan: String? = null
    private var wan: String? = null
    ...
    private fun getLocalAddress(): String? {
        try {
            val en = NetworkInterface.getNetworkInterfaces()
            while (en.hasMoreElements()) {
                val intf = en.nextElement()
                val enumIpAddr = intf.inetAddresses
                while (enumIpAddr.hasMoreElements()) {
                    val inetAddress = enumIpAddr.nextElement()
                    if (!inetAddress.isLoopbackAddress && inetAddress is Inet4Address) {
                        return inetAddress.getHostAddress()
                    }
                }
            }
        } catch (ex: SocketException) {
            Log.e(this.javaClass.simpleName, "Failed to resolve LAN address")
        }
        return null
    }
    ...
}
```

Then create a method to retrieve the WAN address (we recommend using a 3rd party service for this):

<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/positioning/CiscoDNAPositionProvider.kt#L155-L173">CiscoDNAPositionProvider.kt</a>

```kotlin
class CiscoDNAPositionProvider (private val context: Context, private val config: MPCiscoDNAConfig): MPPositionProvider {
    private var ciscoDeviceId: String? = null
    private var lan: String? = null
    private var wan: String? = null
    ...
    private fun fetchExternalAddress(listener: MPReadyListener) {
        val httpClient = OkHttpClient()
        val request: Request = Request.Builder().url("https://ipinfo.io/ip").build()
        httpClient.newCall(request).enqueue(object : Callback {
            override fun onFailure(call: Call, e: IOException) {
                listener.onResult()
            }

            @Throws(IOException::class)
            override fun onResponse(call: Call, response: Response) {
                if (response.isSuccessful) {
                    val str = response.body!!.string()
                    wan = str
                    response.close()
                }
                listener.onResult()
            }
        })
    }
    ...
}
```

If all of the three above mentioned strings can be acquired, you can ask our endpoint for a CiscoDNA Device ID string. A device ID is only available if there has been a recorded positioning for the device, in the past 24 hours. We will implement this as a new method into our `CiscoDNAPositionProvider`.

<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/positioning/CiscoDNAPositionProvider.kt#L101-L134">CiscoDNAPositionProvider.kt</a>

```kotlin
class CiscoDNAPositionProvider (private val context: Context, private val config: MPCiscoDNAConfig): MPPositionProvider {
    private var ciscoDeviceId: String? = null
    private var lan: String? = null
    private var wan: String? = null
    val MAPSINDOORS_CISCO_ENDPOINT = "https://ciscodna.mapsindoors.com/"
    ...
    /**
     * This method is responsible for gathering the local and external IP addresses
     * as well as acquiring a device ID from the Cisco DNA API.
     */
    private fun updateAddressesAndId(onComplete: MPReadyListener?) {
        lan = getLocalAddress()
        //mCiscoDeviceId = null;
        fetchExternalAddress {
            if (tenantId != null && lan != null && wan != null) {
                val url: String = "$MAPSINDOORS_CISCO_ENDPOINT$tenantId/api/ciscodna/devicelookup?clientIp=$lan&wanIp=$wan"
                val client = OkHttpClient()
                val request: Request = Request.Builder().url(url).build()
                try {
                    val response = client.newCall(request).execute()
                    if (response.isSuccessful) {
                        val gson = Gson()
                        val json = response.body!!.string()
                        val jsonObject =
                            gson.fromJson(json, JsonObject::class.java)
                        ciscoDeviceId = jsonObject["deviceId"].asString
                    } else {
                        Log.d(
                            "ciscodnaprovider",
                            "Could not obtain deviceId from backend deviceID request! Code: " + response.code
                        )
                    }
                    response.close()
                } catch (e: IOException) {
                    e.printStackTrace()
                }
            }
            onComplete?.onResult()
        }
    }
    ...
}
```

Now you can make a method to start a subscription that we use when starting positioning to receive position updates. You use the SDKs `LiveDataManager` to create a subscription.

<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/positioning/CiscoDNAPositionProvider.kt#L52-L64">CiscoDNAPositionProvider.kt</a>

```kotlin
class CiscoDNAPositionProvider (private val context: Context, private val config: MPCiscoDNAConfig): MPPositionProvider {
    private var ciscoDNATopic: CiscoDNATopic? = null;
    ...
    private fun startSubscription() {
        ciscoDNATopic = CiscoDNATopic(tenantId!!, ciscoDeviceId!!)
        LiveDataManager.getInstance().setOnTopicSubscribedListener { topic: MPLiveTopic ->
            if (topic == ciscoDNATopic) {
                Log.i("CiscoDNA", "topic subscribed to succesfully")
            }
        }
        LiveDataManager.getInstance().subscribeTopic(ciscoDNATopic)
    }

    private fun unsubscribe() {
        LiveDataManager.getInstance().unsubscribeTopic(ciscoDNATopic)
    }
    ...
}
```

To handle the subscription we just created, we need to create some callbacks in the constructor of the `MPPositionProvider` to handle the position results and lifecycle of the subscription:

<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/positioning/CiscoDNAPositionProvider.kt#L44-L49">CiscoDNAPositionProvider.kt</a>

```kotlin
class CiscoDNAPositionProvider (private val context: Context, private val config: MPCiscoDNAConfig): MPPositionProvider {
    init {
        LiveDataManager.getInstance().setOnReceivedLiveUpdateListener { mpLiveTopic, liveUpdate ->
            if (liveUpdate.id == ciscoDeviceId) {
                mLatestPosition = liveUpdate.positionResult
                notifyPositionUpdate()
            }
        }
    }
    ...
}
```

Implement the `startPositoning` and `stopPositioning` method as well as a `update` and `obtainInitialPosition` to get the initial position from CiscoDNA

<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/positioning/CiscoDNAPositionProvider.kt#L66-L103">CiscoDNAPositionProvider.kt</a>

```kotlin
class CiscoDNAPositionProvider (private val context: Context, private val config: MPCiscoDNAConfig): MPPositionProvider {
    val MAPSINDOORS_CISCO_ENDPOINT = "https://ciscodna.mapsindoors.com/"
    private val tenantId: String? = config.tenantId
    private var ciscoDeviceId: String? = null
    ...

    fun startPositioning() {
        update { startSubscription() }
    }

    fun stopPositioning() {
        LiveDataManager.getInstance().unsubscribeTopic(ciscoDNATopic)
    }

    fun update(onreadyListener: MPReadyListener) {
        updateAddressesAndId {
            if (!ciscoDeviceId.isNullOrEmpty()) {
                if (mLatestPosition == null) {
                    obtainInitialPosition(onreadyListener)
                }else {
                    onreadyListener.onResult()
                }
            }
        }
    }

    private fun obtainInitialPosition(listener: MPReadyListener) {
        val url = "$MAPSINDOORS_CISCO_ENDPOINT$tenantId/api/ciscodna/$ciscoDeviceId"
        val request: Request = Request.Builder().url(url).build()
        if (ciscoDeviceId != null && tenantId != null) {
            val httpClient = OkHttpClient()
            httpClient.newCall(request).enqueue(object : Callback {
                override fun onFailure(call: Call, e: IOException) {
                    listener.onResult()
                }

                @Throws(IOException::class)
                override fun onResponse(call: Call, response: Response) {
                    if (response.code == HttpURLConnection.HTTP_NOT_FOUND) {
                        listener.onResult()
                        return
                    }
                    val json = response.body!!.string()
                    val positionResult: CiscoDNAEntry = Gson().fromJson(json, CiscoDNAEntry::class.java)
                    mLatestPosition = positionResult
                    notifyPositionUpdate()
                    listener.onResult()
                    response.close()
                }
            })
        }
    }
    ...
}
```

Now to use our implemented position provider. We will handle that in our activity or fragment.

<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/positioning/PositioningFragment.kt#L40-L54">PositioningFragment.kt</a>

```kotlin
class myFragment: Fragment(), OnMapReadyCallback {
    private var mPositionProvider: CiscoDNAPositionProvider? = null

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?,): View {
        ...
        MapsIndoors.load(requireActivity().applicationContext, "myapikey") {
            mPositionProvider = IndoorAtlasPositionProvider(requireActivity(), MapsIndoors.getSolution()!!.indoorAtlasConfig!!)
            // Attach the position provider to the SDK
            MapsIndoors.setPositionProvider(mPositionProvider)
        }

        //Have a buttton or other logic to start positioning:
        binding.startPositioningButton.setOnClickListener {
            //Remember to handle permissions specific to the Position provider you are using
            mPositionProvider?.startPositioning()
        }
        ...
    }
}
```

Lastly, we need to tell `MapControl` that we want to show the position on the map.

<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/positioning/PositioningFragment.kt#L93-L97">PositioningFragment.kt</a>

```kotlin
MapControl.create(mapConfig) { mapControl: MapControl?, miError: MIError? ->
    mMapControl = mapControl

    // Enable showing the position indicator (aka. the blue dot)
    mMapControl?.showUserPosition(true)
}
```

A full example implementation of the Cisco DNA position provider can be found here: [PositionProviders](https://github.com/MapsPeople/MapsIndoors-Android-Examples/tree/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/positioning)

</mi-tab-panel>
<mi-tab-panel id="ios">

## MapsIndoors and CiscoDNA for iOS

MapsIndoors is a dynamic mapping platform from MapsPeople that can provide maps of your indoor and outdoor localities and helps you create search and navigation experiences for your local users. CiscoDNA is Cisco’s newest digital and cloud-based IT infrastructure management platform. Among many other things, CiscoDNA can pinpoint the physical and geographic position of devices connected wirelessly to the local IT network.

## How User Positioning Works in MapsIndoors for iOS

In order to show a user's position in an indoor map with MapsIndoors, a Position Provider must be implemented. MapsIndoors does not implement a Position Provider itself, but rely on 3rd party positioning software to create this experience. In an outdoor environment this Position Provider can be a wrapper of the Core Location Services in iOS.

A Position Provider in MapsIndoors must adhere to the `MPPositionProvider` protocol. Once you have an instance of an `MPPositionProvider` you can register it by assigning it to `MapsIndoors.positionProvider`. See the overview of the interface dependencies below.

![cisco-dna-ios](/assets/map/positioning/positioning-diagram.png)

## Wrapping the CiscoDNA Positioning in a Position Provider for iOS

Just like in the mock Position Provider example, we need to implement a Position Provider that wraps the MapsIndoors CiscoDNA services to inject the CiscoDNA indoor positioning into MapsIndoors. If you only require this to work for indoor positioning, we would be good with just wrapping the CiscoDNA part. MapsIndoors however has the capability to support wayfinding both outdoors and indoors, so the shown solution implements two Position Providers, one for CoreLocation (`GPSPositionProvider`) and one for CiscoDNA (`CiscoDNAPositionProvider2`). The `CiscoDNAPositionProvider2` subclasses the `GPSPositionProvider` so it can determine whether the CiscoDNA position or the Core Location position should be used in your application. Both Position Providers are written in Objective C, but can of course be used in Swift as well.

The `CiscoDNAPositionProvider2` communicates with some MapsIndoors services to get the Cisco device id, and uses a message subscription service (MQTT) to subscribe for position updates. Each time a Cisco position is received, its age is determined. If the age of the latest Cisco position is above 120 seconds or the application is not connected to the wifi, the CoreLocation position is used instead.

## Integration Guide for iOS

1. Make sure you have [integrated MapsIndoors]({{site.url}}/content/getting-started/ios) succesfully.
1. Download and unzip [this zip file](https://drive.google.com/file/d/1rbtB872NQ81m93xsxdzxA7gn8MtW1Ksl/view?usp=sharing) containing the CiscoDNA integration source.
1. Create a group in your Xcode project, e.g. called CiscoDNA.
1. Drag and drop the files in the downloaded folder to your new group. Choose "Copy items if needed".
1. If this is the first Objective C code in your project, Xcode will suggest that you create an Objective C Bridging Header file. Select "Yes" or "Create Bridging Header".
1. Drag and drop the rest of the files into the CiscoDNA group. Choose "Copy items if needed".
1. In your Objective C Bridging Header, add `#import "CiscoDNAPositionProvider2.h"`.
1. In `AppDelegate.swift-didFinishLaunchingWithOptions`, add the following code:

    ```swift
    let pp = MPCiscoDnaPositionProvider2.init()
    pp.tenantId = "my-cisco-dna-spaces-tenant-id"
    MapsIndoors.positionProvider = pp
    MapsIndoors.positionProvider?.startPositioning(nil)
    ```

1. Replace `my-cisco-dna-spaces-tenant-id` with your own Cisco tenant ID.
1. In your view controller displaying the Google Map using `MPMapControl`, call `mapControl.showUserPosition(true)`.
1. Build and run the application. You should now be able to show a blue dot for the user's position.

If you need a working project example with MapsIndoors and CiscoDNA (excluding API keys), you can [download it here](https://drive.google.com/file/d/1nwsdaX0Hm6yaHm5S8JVgqYYb2S0Q4mnT/view?usp=sharing).

<!-- Fetch data from solution -->
{% include "src/content/shared/map/positioning-fetch-ios.md" %}

</mi-tab-panel>
<mi-tab-panel id="web">

## MapsIndoors & CiscoDNA for Web

MapsIndoors is a dynamic mapping platform from MapsPeople that can provide maps of your indoor and outdoor localities and helps you create search and navigation experiences for your local users. CiscoDNA is Cisco’s newest digital and cloud-based IT infrastructure management platform. Among many other things, CiscoDNA can pinpoint the physical and geographic position of devices connected wirelessly to the local IT network.

## User Positioning in MapsIndoors for Web

In order to show a user's position on an indoor map with MapsIndoors, a Position Provider must be implemented. The MapsIndoors JavaScript SDK does not provide a default Position Provider but relies on 3rd party positioning software to create this experience. In an outdoor environment, this Position Provider can be a wrapper of the browser's native Geolocation API.

## Code Sample

> Please note that the following code sample assumes that you have already succesfully implemented MapsIndoors into your application.

The JavaScript SDK doesn't have a built-in interface like the Android and iOS SDKs. However, by following these steps, you should be able to achieve the same functionality.

The first step is to create the class `CiscoPositioningService`, and the constructor for it.

```javascript
class CiscoPositioningService {
    /**
     * @param {string} args.clientIp - The local IP address of the device
     * @param {string} args.tenantId - The Cisco tenant id.
     * @param {number} [args.pollingInterval=1000] - The interval that the position will be polled from the backend.
     * @param {string} [args.region="eu"] - The Cisco app region.
     */
    constructor(args = {}) {
        if (!args.clientIp)
            throw new TypeError('Invalid argument: "clientIp"');

        if (!args.tenantId)
            throw new TypeError('Invalid argument: "tenantId"');

        this._pollingInterval = 1000;
        this._tenantId = args.tenantId;
        this._successCallbacks = new Map();
        this._errorCallbacks = new Map();
        this._deviceId = '';

        args.region = args.region || 'eu';

        this.pollingInterval = args.pollInterval;

        fetch(`https://ciscodna.mapsindoors.com/${this._tenantId}/api/ciscodna/devicelookup?clientIp=${args.clientIp}&region=${args.region}`)
            .then(this._errorHandler)
            .then(res => res.json())
            .then(({ deviceId }) => {
                this._deviceId = deviceId;
                this._startPolling();
            }).catch(err => {
                console.error(err.message);
            });
    }
```

Next step is to create `watchPosition` and `clearWatch`, to watch for the positioning updates the system recieves.

```javascript
    watchPosition(successCallback, errorCallback) {
        const watchId = Symbol();
        if (!(successCallback instanceof Function))
            throw new TypeError('Invalid argument: "successCallback"');

        if (errorCallback instanceof Function) {
            this._errorCallbacks.set(watchId, errorCallback);
        }

        this._successCallbacks.set(watchId, successCallback);

        if (!this._interval) {
            this._startPolling();
        }

        return watchId;
    }

    clearWatch(watchId) {
        this._successCallbacks.delete(watchId);
        this._errorCallbacks.delete(watchId);

        if (this._successCallbacks.size === 0) {
            this._stopPolling();
        }
    }

    getCurrentPosition(successCallback, errorCallback) {
        fetch(`https://ciscodna.mapsindoors.com/${this._tenantId}/api/ciscodna/${this._deviceId}`)
            .then(this._errorHandler)
            .then(res => res.json())
            .then(data => {
                this._successCallbacks.forEach(cb => cb.call(null, data));
            }).catch(err => {
                this._errorCallbacks.forEach(cb => cb.call(null, err));
            });
    }
```

The next step is to create some functions that manage how often the system retrieves an update, or polls, from the Cisco DNA setup.

```javascript
    set pollingInterval(value) {
        if (!isNaN(value) && this._pollingInterval !== value) {
            this._pollingInterval = value;
            this._stopPolling();
            this._startPolling();
        }
    }

    get pollingInterval() {
        return this._pollingInterval;
    }


    /**
     * @private
     */
    _startPolling() {
        if (!this._interval && this._deviceId > '' && this._successCallbacks.size > 0) {
            this._interval = window.setInterval(() => {
                this.getCurrentPosition(response => {
                    this._successCallbacks.forEach(callback => callback(response));
                },
                    error => {
                        this._errorCallbacks.forEach(callback => callback(err));
                    });

            }, this._pollingInterval);
        }
    }

    /**
     * @private
     */
    _stopPolling() {
        if (this._interval) {
            window.clearInterval(this._interval);
            this._interval = null;
        }
    }
```

Lastly, an error handler is implemented.

```javascript
    /**
     * @private
     */

    _errorHandler(response) {
        if (!response.ok) {
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.indexOf('application/json') !== -1) {
                return response.json().then(({ message }) => {
                    throw new Error(message);
                });
            } else {
                let statusText;
                switch (response.status) {
                    case 400:
                        statusText = 'The client IP is invalid.';
                        break;
                    case 404:
                        statusText = 'Device not found.';
                        break;
                    case 403:
                        statusText = 'The TenantId supplied is not authorized to access the device at the location.'
                        break;
                    default:
                        statusText = 'Unknown error.';
                }

                throw new Error(statusText);
            }
        }

        return response;
    }
} // end class
```

Once the class is created, it can then be used, for example, in the following way - Keep in mind that you cannot fetch the client/device IP address from the browser, an option to get around this could be a seperate service that returns the IP address:

```javascript
const map = mapView.getMap();
let watchId;

mapsindoors.services.SolutionsService.getSolution('57e4e4992e74800ef8b69718').then(solution => {
    if (solution.positionProviderConfigs && solution.positionProviderConfigs.ciscodna) {
        const tenantId = solution.positionProviderConfigs.ciscodna.ciscoDnaSpaceTenantId;
        const region = solution.positionProviderConfigs.ciscodna.ciscoDnaSpaceTenantRegion || 'usa';
        const clientIp = '10.0.0.134';
        const cps = new CiscoPositioningService({ clientIp, tenantId, region });

        watchId = cps.watchPosition(function (data) {
            console.log(data);
            map.setCenter({ lat: data.latitude, lng: data.longitude });
        }, function (err) {
            console.log(err);
        })
    }
});

const floorSelector = document.createElement('div');
new mapsindoors.FloorSelector(floorSelector, mi);
map.controls[google.maps.ControlPosition.RIGHT_TOP].push(floorSelector);
```

</mi-tab-panel>
</mi-tabs>
