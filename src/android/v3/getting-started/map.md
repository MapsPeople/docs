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

Some Web Service APIs are needed also for the MapsIndoors SDK, so make sure to enable them when getting your key:

* [Google Maps Distance Matrix API](https://developers.google.com/maps/documentation/distance-matrix/start)
* [Google Maps Directions API](https://developers.google.com/maps/documentation/directions/start)
* [Google Places API Web Service](https://developers.google.com/places/web-service/intro)

When getting your Google Maps API keys, remember to enable relevant Maps products (i.e. SDK for Android) in your Google project and include these on your API key if you apply restrictions.

If you are using a newer version of android studio, it is possible to create a new project with the google maps infrastructure already setup for you. This is an easy way to get started.

## Setup a Google Map with MapsIndoors

### Set the MapsIndoors API Key

In order to include MapsIndoors in your app, you need an API key. If you are not a customer you can use this API key `79f8e7daff76489dace4f9f9` to follow the guide.

In order to include MapsIndoors in your own app with your own content, you need to [contact MapsPeople](https://resources.mapspeople.com/contact-us) to get your building drawings processed and hosted by us.

You will receive a unique API key to use when access has been granted. If you are exploring how this service can become part of your own product, you can read about [partnering with MapsPeople here](https://www.mapspeople.com/become-a-partner).

### Initialize MapsIndoors

Place the following initialization code in the `onCreate` method in the activity that should display the Google map also assign the mapFragment view to a variable as we will use this later to initialize `MapControl`:

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

In your `onMapReady` callback function, use the `MapControl` class to set up a Google map with MapsIndoors venues, buildings & locations:

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
   mMapControl = new MapControl(getApplicationContext());
   mMapControl.setGoogleMap(mMap, view);
   mMapControl.init(miError -> {
       if (miError == null) {
           runOnUiThread( ()-> {
               mMap.animateCamera(CameraUpdateFactory.newLatLngZoom(new   LatLng(38.8975552046, -77.036568326), 19f));
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
   mMapControl = MapControl(applicationContext)
   mMapControl.setGoogleMap(mMap, view)
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

Head to the [guides]({{ site.url }}/android/v3/guides/) to learn about event handling, searching, getting directions, display settings and more.
