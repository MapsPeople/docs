---
title: Getting started on directions
eleventyNavigation:
  parent: android-v3
  key: Getting started on directions
  order: 150
---

In this tutorial we will create a route from a users location to a location on the map. We will also create a route between two locations.
Mapsindoors supports both indoor and outdoors navigation. To start creating routes on your map.

Start by creating an activity that has a Google Maps map view and a `MapControl` initiated. You can read how to do this on [Setup a Google Map with MapsIndoors](/android/v3/#setup-a-google-map-with-mapsindoors)

Once that is created we can start making routes between coordinates and locations on the map.
To create the routes you start by querying `MPRoutingProvider` with two locations/coordinates. Here we will start with a user location and a `MPLocation`object. In this example we are using the MapsIndoors office solution. The api key for it is `57e4e4992e74800ef8b69718`.

First create an instance of `MPRoutingProvider`. After that assign a listener to the routing provider with `setOnRouteResultListener`. Right now we will just send the route on to a rendering method. This will be covered later.

<mi-tabs>
    <mi-tab label="Java" tab-for="java"></mi-tab>
    <mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
    <mi-tab-panel id="java">
        <h3>Java</h3>
        <pre lang="Java"><code>
mRoutingProvider = new MPRoutingProvider();
mRoutingProvider.setOnRouteResultListener((route, error) -> {
    if( route != null ) {
        renderRoute(route);
    }
});
        </code></pre>
    </mi-tab-panel>
    <mi-tab-panel id="kotlin">
        <h3>Kotlin</h3>
        <pre lang ="Kotlin"><code>
mRoutingProvider = MPRoutingProvider()
routeProvider.setOnRouteResultListener { route, miError ->
    if (route != null) {
        renderRoute(route)
    }
}
        </code></pre>
    </mi-tab-panel>
</mi-tabs>

To get a route result we must query the `MPRoutingProvider` with two `Point` objects.
First lets assume the We have the lattitude and longitude of a user. We create a `Point`object from the lattitude and longitude and set the zIndex to 0 as the user is outside. We also need to find a location the user should navigate to. This can be done by using what marker the user has selected and creating a ui function to generate a route for the selected location. In this example we will just query for a Location through an id. We will also set the `TravelMode` to walking.

<mi-tabs>
    <mi-tab label="Java" tab-for="java"></mi-tab>
    <mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
    <mi-tab-panel id="java">
        <h3>Java</h3>
        <pre lang="Java"><code>
Point origin = new Point(57.05849507390196, 9.948093630373478, 0);
MPLocation destination = MapsIndoors.getLocationById("c6e9cd0cb6224c9fb0ad6178");
if (destination != null) {
    mRoutingProvider.setTravelMode( TravelMode.WALKING );
    mRoutingProvider.query( origin, destination.getPoint() );
}
        </code></pre>
    </mi-tab-panel>
    <mi-tab-panel id="kotlin">
        <h3>Kotlin</h3>
        <pre lang ="Kotlin"><code>
val origin = Point(57.05849507390196, 9.948093630373478, 0.0)
val destination = MapsIndoors.getLocationById("c6e9cd0cb6224c9fb0ad6178")
if (destination != null) {
    mRoutingProvider.setTravelMode(TravelMode.WALKING)
    mRoutingProvider.query(origin, destination.point)
}
        </code></pre>
    </mi-tab-panel>
</mi-tabs>

When the route is generated the `onResultListener`in the first example will be called and if the Route could be generated it will call the `renderRoute` method that we will implement the rendering logic inside now.
First we'll create a method to create and setup a `MPDirectionsRenderer` and keep a global reference to the created object. When that is created inside the `renderRoute` method, we will set the route on the `MPDirectionsRenderer`object with the method `setRoute(route)`. After that we will set the Route leg index to 0. Which will start animating the route.
We will also create an action on the onLegSelectedListener for `MPDirectionsRenderer`. This listener is called when a user clicks on the marker at the end of a rendered leg.

<mi-tabs>
    <mi-tab label="Java" tab-for="java"></mi-tab>
    <mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
    <mi-tab-panel id="java">
        <h3>Java</h3>
        <pre lang="Java"><code>
MPDirectionsRenderer mDirectionsRenderer = null;

MPDirectionsRenderer createDirectionsRenderer(Context context) {
        mRoutingRenderer = new MPDirectionsRenderer(context, mGoogleMap, mMapControl, i -> {
            //Marker is clicked on lets go to the next step.
            mRoutingRenderer.nextLeg();
            mMapControl.selectFloor(mRoutingRenderer.getLegFloor());
        });

        //Color of the route drawn onto the map
        mRoutingRenderer.setPrimaryColor( ContextCompat.getColor( context, R.color.blue ) );

        //Color of the directions marker at the end of each route leg
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
            //Call init map to start the route animation and rendering.
            mRoutingRenderer.initMap(true);
            //Set the floor index of the current floor for the given leg of the route.
            mMapControl.selectFloor(mRoutingRenderer.getCurrentFloor());
        });
    }
}
        </code></pre>
    </mi-tab-panel>
    <mi-tab-panel id="kotlin">
        <h3>Kotlin</h3>
        <pre lang ="Kotlin"><code>
var mDirectionsRenderer: MPDirectionsRenderer? = null

fun createDirectionsRenderer(context: Context?): MPDirectionsRenderer? {
    mRoutingRenderer = MPDirectionsRenderer(context, mGoogleMap, mMapControl) {
            //Marker is clicked on lets go to the next step.
            mRoutingRenderer.nextLeg()
            mMapControl.selectFloor(mRoutingRenderer.legFloor)
    }
    //Color of the route drawn onto the map
    mRoutingRenderer.setPrimaryColor(ContextCompat.getColor(context, R.color.blue))

    //Color of the directions marker at the end of each route leg
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
        //Call init map to start the route animation and rendering.
        mRoutingRenderer.initMap(true)
        //Set the floor index of the current floor for the given leg of the route.
        mMapControl.selectFloor(mRoutingRenderer.getCurrentFloor())
    }
}
        </code></pre>
    </mi-tab-panel>
</mi-tabs>

When the first leg has been set, all there is left to be done is create a forward and back functionality to go through the whole route. Here we will just create 4 simple buttons; one for going to the next leg of the route, one for going back to the previous leg of the route, one to clear the generated route and one to reload the generated route.

<mi-tabs>
    <mi-tab label="Java" tab-for="java"></mi-tab>
    <mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
    <mi-tab-panel id="java">
        <h3>Java</h3>
        <pre lang="Java"><code>
nextBtn.setOnClickListener(view -> activity.runOnUiThread(() ->  {
    mRoutingRenderer.nextLeg();

    //After the next leg is rendered we select the current floor. Which will be the floor of the leg.
    mMapControl.selectFloor(mRoutingRenderer.getCurrentFloor());
}));

previousBtn.setOnClickListener(view -> activity.runOnUiThread(() -> {
    mRoutingRenderer.previousLeg();

    //After the previous leg is rendered we select the current floor. Which will be the floor of the leg.
    mMapControl.selectFloor(mRoutingRenderer.getCurrentFloor());
}));

clearBtn.setOnClickListener(v -> {
    //Here we clear the generated route.
    mRoutingRenderer.clear();
});

reloadBtn.setOnClickListener(v -> {
    mRoutingRenderer.initMap(false)
});
        </code></pre>
    </mi-tab-panel>
    <mi-tab-panel id="kotlin">
        <h3>Kotlin</h3>
        <pre lang ="Kotlin"><code>
nextBtn.setOnClickListener {
    mRoutingRenderer.nextLeg()

    //After the next leg is rendered we select the current floor. Which will be the floor of the leg.
    mMapControl.selectFloor(mRoutingRenderer.currentFloor)
}

previousBtn.setOnClickListener {
    mRoutingRenderer.previousLeg()

    //After the previous leg is rendered we select the current floor. Which will be the floor of the leg.
    mMapControl.selectFloor(mRoutingRenderer.currentFloor)
}

clearBtn.setOnClickListener {
    //Here we clear the generated route.
    mRoutingRenderer.clear()
}

reloadBtn.setOnClickListener {
    mRoutingRenderer.initMap(false)
}
        </code></pre>
    </mi-tab-panel>
</mi-tabs>
