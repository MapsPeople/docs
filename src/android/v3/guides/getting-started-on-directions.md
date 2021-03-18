---
title: Getting started on directions
eleventyNavigation:
  parent: android-v3-guides
  key: Getting started on directions
  order: 150
---

In this tutorial we will create a Route from a user's location to a Location on the map.

Mapsindoors supports both indoor and outdoors Navigation.

Start by creating an activity that has a Google Maps map view and a `MapControl` initiated. You can read how to do this on [Setup a Google Map with MapsIndoors]({{ site.url }}/android/v3/#setup-a-google-map-with-mapsindoors)

Once that is created we can start making Routes between coordinates and Locations on the map.
To create the Routes you start by querying `MPRoutingProvider` with two Locations/coordinates. Here we will start with a user location and an `MPLocation` object. In this example we are using the MapsIndoors office Solution. The API key for it is `57e4e4992e74800ef8b69718`.

First create an instance of `MPRoutingProvider`. After that, assign a listener to the routing provider with `setOnRouteResultListener`. Right now, we will just send the Route on to a rendering method. This will be covered later.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
mRoutingProvider = new MPRoutingProvider();
mRoutingProvider.setOnRouteResultListener((route, error) -> {
    if( route != null ) {
        renderRoute(route);
    }
});
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
mRoutingProvider = MPRoutingProvider()
routeProvider.setOnRouteResultListener { route, miError ->
    if (route != null) {
        renderRoute(route)
    }
}
```

</mi-tab-panel>
</mi-tabs>

To get a Route result we must query the `MPRoutingProvider` with two `Point` objects. First, let's assume we have the latitude and longitude of a user. We create a `Point` object from the latitude and longitude, and set the `zIndex` to `0` as the user is outside. We also need to find a Location the user should navigate to. This can be done by using the Marker the user has selected and creating a UI function to generate a Route for the selected Location. In this example, we will just query for a Location through an ID. We will also set the `TravelMode` to "Walking".

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
Point origin = new Point(57.05849507390196, 9.948093630373478, 0);
MPLocation destination = MapsIndoors.getLocationById("c6e9cd0cb6224c9fb0ad6178");
if (destination != null) {
    mRoutingProvider.setTravelMode( TravelMode.WALKING );
    mRoutingProvider.query( origin, destination.getPoint() );
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
val origin = Point(57.05849507390196, 9.948093630373478, 0.0)
val destination = MapsIndoors.getLocationById("c6e9cd0cb6224c9fb0ad6178")
if (destination != null) {
    mRoutingProvider.setTravelMode(TravelMode.WALKING)
    mRoutingProvider.query(origin, destination.point)
}
```

</mi-tab-panel>
</mi-tabs>

When the Route is generated, the `onResultListener` in the first example will be called, and if the Route could be generated, it will call the `renderRoute` method for which we'll now implement the rendering logic inside.

First, we'll create a method to create and setup a `MPDirectionsRenderer` and keep a global reference to the created object. When that is created inside the `renderRoute` method, we will set the Route on the `MPDirectionsRenderer` object with the method `setRoute(route)`. After that, we will set the Route Leg index to `0` which will start animating the Route.

We will also create an action on the `onLegSelectedListener` for `MPDirectionsRenderer`. This listener is called when a user clicks on the marker at the end of a rendered Leg.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
MPDirectionsRenderer mDirectionsRenderer = null;

MPDirectionsRenderer createDirectionsRenderer(Context context) {
        mRoutingRenderer = new MPDirectionsRenderer(context, mGoogleMap, mMapControl, i -> {
            //When Marker is clicked on, go to the next Step.
            mRoutingRenderer.nextLeg();
            mMapControl.selectFloor(mRoutingRenderer.getLegFloor());
        });

        //Color of the Route drawn onto the map
        mRoutingRenderer.setPrimaryColor( ContextCompat.getColor( context, R.color.blue ) );

        //Color of the Directions Marker at the end of each Route Leg
        mRoutingRenderer.setAccentColor( ContextCompat.getColor( context, R.color.pink ) );
        
        //Text color
        mRoutingRenderer.setTextColor( ContextCompat.getColor( context, R.color.white ) );

        mRoutingRenderer.setAnimated( true );
}

void renderRoute(Route route) {
    if (mDirectionsRenderer == null && getContext() != null) {
        mDirectionsRenderer = createDirectionsRenderer(getContext());
    }

    mDirectionsRenderer.setRoute( route );
    final Activity activity  = getActivity();
    if( activity != null ) {
        activity.runOnUiThread( () -> {
            //Call initMap to start the Route animation and rendering.
            mRoutingRenderer.initMap(true);
            //Set the Floor Index of the current Floor for the given Leg of the Route.
            mMapControl.selectFloor(mRoutingRenderer.getCurrentFloor());
        });
    }
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
var mDirectionsRenderer: MPDirectionsRenderer? = null

fun createDirectionsRenderer(context: Context?): MPDirectionsRenderer? {
    mRoutingRenderer = MPDirectionsRenderer(context, mGoogleMap, mMapControl) {
            //When Marker is clicked on, go to the next Step.
            mRoutingRenderer.nextLeg()
            mMapControl.selectFloor(mRoutingRenderer.legFloor)
    }
    //Color of the Route drawn onto the map
    mRoutingRenderer.setPrimaryColor(ContextCompat.getColor(context, R.color.blue))

    //Color of the Directions Marker at the end of each Route Leg
    mRoutingRenderer.setAccentColor(ContextCompat.getColor(context, R.color.pink))

    //Text color
    mRoutingRenderer.setTextColor(ContextCompat.getColor(context, R.color.white))
    mRoutingRenderer.setAnimated(true)
}

fun renderRoute(route: Route?) {
    if (mDirectionsRenderer == null && getContext() != null) {
        mDirectionsRenderer = createDirectionsRenderer(getContext())
    }
    mDirectionsRenderer!!.setRoute(route!!)
    val activity: Activity = getActivity()
    activity?.runOnUiThread{
        //Call initMap to start the Route animation and rendering.
        mRoutingRenderer.initMap(true)
        //Set the Floor Index of the current Floor for the given Leg of the Route.
        mMapControl.selectFloor(mRoutingRenderer.getCurrentFloor())
    }
}
```

</mi-tab-panel>
</mi-tabs>

When the first Leg has been set, all there is left is to create a *previous* and *next* functionality to go through the whole Route. Here we will just create 4 simple buttons; one for going to the next Leg of the Route, one for going back to the previous Leg of the Route, one to clear the generated Route, and one to reload the generated Route.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
nextBtn.setOnClickListener(view -> activity.runOnUiThread(() ->  {
    mRoutingRenderer.nextLeg();

    //After the next Leg is rendered, we select the current Floor. Which will be the Floor of the Leg.
    mMapControl.selectFloor(mRoutingRenderer.getCurrentFloor());
}));

previousBtn.setOnClickListener(view -> activity.runOnUiThread(() -> {
    mRoutingRenderer.previousLeg();

    //After the previous Leg is rendered, we select the current Floor. Which will be the Floor of the Leg.
    mMapControl.selectFloor(mRoutingRenderer.getCurrentFloor());
}));

clearBtn.setOnClickListener(v -> {
    //Here we clear the generated Route.
    mRoutingRenderer.clear();
});

reloadBtn.setOnClickListener(v -> {
    mRoutingRenderer.initMap(false)
});
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
nextBtn.setOnClickListener {
    mRoutingRenderer.nextLeg()

    //After the next Leg is rendered, we select the current Floor. Which will be the Floor of the Leg.
    mMapControl.selectFloor(mRoutingRenderer.currentFloor)
}

previousBtn.setOnClickListener {
    mRoutingRenderer.previousLeg()

    //After the previous Leg is rendered we select the current Floor. Which will be the Floor of the Leg.
    mMapControl.selectFloor(mRoutingRenderer.currentFloor)
}

clearBtn.setOnClickListener {
    //Here we clear the generated Route.
    mRoutingRenderer.clear()
}

reloadBtn.setOnClickListener {
    mRoutingRenderer.initMap(false)
}
```

</mi-tab-panel>
</mi-tabs>
