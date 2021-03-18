---
title: Show a map
toc: true
eleventyNavigation:
  title: Show a map
  key: android-v3-getting-started-map
  parent: android-v3-getting-started
  order: 130
---

<!-- Overview -->
{% include "src/shared/getting-started/map/overview.md" %}

<!-- Set up MapsIndoors -->
{% include "src/shared/getting-started/map/show-map.md" %}

## Setup Google Maps

Learn how to setup Google Maps on Android in this [Getting Started Guide](https://developers.google.com/maps/documentation/android-api/start).

Firstly you need to [setup at a new project in the Google Cloud Console](https://developers.google.com/maps/gmp-get-started). When the project is created the following following APIs and the specific SDK you plan to use must be enabled from the [Maps API Library Page](https://console.cloud.google.com/apis/library?filter=category:maps).

* Google Maps Distance Matrix API
* Google Maps Directions API
* Google Places API Web Service
* Maps SDK for Android/iOS or Maps JavaScript API

When the 3 APIs and SDK is enabled you can retrieve the API key from the [Credentials page](https://console.cloud.google.com/project/_/apiui/credential). On the Credentials page, click Create credentials > API key.

## Setup a Google Map with MapsIndoors

### Set the MapsIndoors API Key

If you are not a customer you can use this demo MapsIndoors API key `79f8e7daff76489dace4f9f9` to follow this guide or you can [contact MapsPeople](https://resources.mapspeople.com/contact-us) to get your building drawings processed and hosted by us to receive a unique API key.

### Initialize MapsIndoors

Place the following initialization code in the `onCreate` method in the activity that should display the Google map. You should also assign the `mapFragment` view to a variable as we will use this later to initialize `MapControl`:

**Refresh kotlin example to allign on a venue**
<mi-tabs>
    <mi-tab label="Java" tab-for="java"></mi-tab>
    <mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
    <mi-tab-panel id="java">
        <h3>Java</h3>
        <pre lang="Java"><code>
MapView = mapFragment.getView();
MapsIndoors.initialize(getApplicationContext(), "YOUR_MAPSINDOORS_API_KEY");
MapsIndoors.setGoogleAPIKey(“YOUR_GOOGLE_API_KEY”);
        </code></pre>
    </mi-tab-panel>
    <mi-tab-panel id="kotlin">
        <h3>Kotlin</h3>
        <pre lang ="Kotlin"><code>
MapsIndoors.initialize(applicationContext, "YOUR_MAPSINDOORS_API_KEY")
MapsIndoors.setGoogleAPIKey(“YOUR_GOOGLE_API_KEY”)
        </code></pre>
    </mi-tab-panel>
</mi-tabs>

In your `onMapReady` callback function, use the `MapControl` class to set up a Google map with MapsIndoors Venues, Buildings and Locations:

<mi-tabs>
    <mi-tab label="Java" tab-for="java"></mi-tab>
    <mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
    <mi-tab-panel id="java">
        <h3>Java</h3>
        <pre lang="Java"><code>
@Override
public void onMapReady(GoogleMap googleMap) {
   mMap = googleMap;
   if (view != null) {
       initMapControl(view);
   }
}
void initMapControl(View view) {
    //Creates a new instance of MapControl
    mMapControl = new MapControl(this);
    //Sets the Google map object and the map view to the MapControl
    mMapControl.setGoogleMap(mMap, view);
    //Initiates the MapControl
    mMapControl.init(miError -> {
        if (miError == null) {
            //No errors so getting the first venue (in the white house solution the only one)
            Venue venue = MapsIndoors.getVenues().getCurrentVenue();
            runOnUiThread( ()-> {
                if (venue != null) {
                    //Animates the camera to fit the new venue
                    mMap.animateCamera(CameraUpdateFactory.newLatLngBounds(venue.getLatLngBoundingBox(), 19));
                }
            });
        }
    });
}
        </code></pre>
    </mi-tab-panel>
    <mi-tab-panel id="kotlin">
        <h3>Kotlin</h3>
        <pre lang ="Kotlin"><code>
override fun onMapReady(googleMap: GoogleMap) {
   mMap = googleMap
   map.view?.let {
       initMapControl(it)
   }
}
fun initMapControl(view: View) {
   //Creates a new instance of MapControl
   mMapControl = MapControl(applicationContext)
   //Sets the Google map object and the map view to the MapControl
   mMapControl.setGoogleMap(mMap, view)
   //Initiates the MapControl
   mMapControl.init { error ->
       if (error == null) {
           runOnUiThread {
               mMap.animateCamera(
                       CameraUpdateFactory.newLatLngZoom(LatLng(38.8975552046, -77.036568326), 19f))
           }
       }
   }
}
        </code></pre>
    </mi-tab-panel>
</mi-tabs>

See the full example of MapsActivity here [MapsActivity.java](https://github.com/MapsIndoors/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java)

Head to the [guides]({{ site.url }}/android/v3/guides/) to learn about event handling, searching, getting directions, display settings and more.
