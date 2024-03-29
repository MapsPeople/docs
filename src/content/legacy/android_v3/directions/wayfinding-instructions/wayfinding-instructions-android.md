---
title: Wayfinding Instructions for Android
eleventyNavigation:
  parent: v3-wayfinding-instructions
  title: Wayfinding Instructions for Android
  key: v3-wayfinding-instructions-android
  order: 10
---

This tutorial will show how to work with the route model returned from a directions service call. It will also show how you can utilize interactions between the route rendering on the map, and text-based instructions showed in another view.

This tutorial will be based off the **Getting Started** example found here: [Java](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android) or [Kotlin](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin).

You will work with changing the implementation of the `NavigationFragment` and the `RouteLegFragment`.

An example of the view XML file for the `NavigationFragment` this guide will use can be found here: [Navigation view](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/advanced_directions/app/src/main/res/layout/fragment_navigation_list_dialog.xml).

First, add the variable `mLocation` that keeps a reference to the `MPLocation` that was used as the destination for the route. Assign this variable when creating an instance of the `NavigationFragment`. There should already be a reference to the `Route` that should also be assigned.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/advanced_directions/app/src/main/java/com/example/mapsindoorsgettingstarted/NavigationFragment.java#L40-L50">NavigationFragment.java</a>

```java/0,7
private MPLocation mLocation;
private Route mRoute;

public static NavigationFragment newInstance(Route route, MapsActivity mapsActivity, MPLocation location) {
    final NavigationFragment fragment = new NavigationFragment();
    fragment.mRoute = route;
    fragment.mMapsActivity = mapsActivity;
    fragment.mLocation = location;
    return fragment;
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/advanced_directions/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/NavigationFragment.kt#L147-L155">NavigationFragment.kt</a>

```kotlin/1,7
private var mRoute: Route? = null
private var mLocation: MPLocation? = null

companion object {
    fun newInstance(route: Route?, mapsActivity: MapsActivity?, location: MPLocation?): NavigationFragment {
        val fragment = NavigationFragment()
        fragment.mRoute = route
        fragment.mLocation = location
        fragment.mMapsActivity = mapsActivity
        return fragment
    }
}
```

</mi-tab-panel>
</mi-tabs>

Next step is replacing the old view in the `RouteLegFragment`.

An example of the view XML file for the `RouteLegFragment`, that this guide will use, can be found here: [RouteLeg view](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/advanced_directions/app/src/main/res/layout/fragment_route_leg.xml).

You must start tying in the logic to create these views and show the route on the map together with the necessary UI for the user to navigate.

Start by changing the code inside `NavigationFragment`. Since the UI was changed, some of the old code needs to be changed. First, start by changing the code inside `onViewCreated`.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/advanced_directions/app/src/main/java/com/example/mapsindoorsgettingstarted/NavigationFragment.java#L64-L89">NavigationFragment.java</a>

```java
@Override
public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
    TextView locationNameTxtView = view.findViewById(R.id.location_name);
    locationNameTxtView.setText("To " + mLocation.getName());

    RouteCollectionAdapter routeCollectionAdapter = new RouteCollectionAdapter(this);
    ViewPager2 mViewPager = view.findViewById(R.id.stepViewPager);
    mViewPager.setAdapter(routeCollectionAdapter);
    mViewPager.registerOnPageChangeCallback(new ViewPager2.OnPageChangeCallback() {
        @Override
        public void onPageSelected(int position) {
            super.onPageSelected(position);
            //When a page is selected call the renderer with the index
            mMapsActivity.getMpDirectionsRenderer().setRouteLegIndex(position);
            //Update the floor on mapcontrol if the floor might have changed for the routing
            mMapsActivity.getMapControl().selectFloor(mMapsActivity.getMpDirectionsRenderer().getCurrentFloor());
        }
    });

    ImageView closeBtn = view.findViewById(R.id.close_btn);
    //Button for closing the bottom sheet. Clears the route through directionsRenderer as well, and changes map padding.
    closeBtn.setOnClickListener(v -> {
        mMapsActivity.removeFragmentFromBottomSheet(this);
        mMapsActivity.getMpDirectionsRenderer().clear();
    });
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/advanced_directions/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/NavigationFragment.kt#L35-L63">NavigationFragment.kt</a>

```kotlin
override fun onViewCreated(view: View, @Nullable savedInstanceState: Bundle?) {
    //Assigning views
    val locationNameTxtView = view.findViewById<TextView>(R.id.location_name)
    locationNameTxtView.text = "To " + mLocation?.name

    val routeCollectionAdapter =
        RouteCollectionAdapter(this)
    val mViewPager: ViewPager2 = view.findViewById(R.id.stepViewPager)
    mViewPager.adapter = routeCollectionAdapter
    mViewPager.registerOnPageChangeCallback(object : OnPageChangeCallback() {
        override fun onPageSelected(position: Int) {
            super.onPageSelected(position)
            //When a page is selected call the renderer with the index
            mMapsActivity?.getMpDirectionsRenderer()?.setRouteLegIndex(position)
            //Update the floor on mapcontrol if the floor might have changed for the routing
            mMapsActivity?.getMpDirectionsRenderer()?.currentFloor?.let {floorIndex ->
                mMapsActivity?.getMapControl()?.selectFloor(floorIndex)
            }
        }
    })

    val closeBtn = view.findViewById<ImageView>(R.id.close_btn)

    //Button for closing the bottom sheet. Clears the route through directionsRenderer as well, and changes map padding.
    closeBtn.setOnClickListener {
        mMapsActivity!!.removeFragmentFromBottomSheet(this)
        mMapsActivity!!.getMpDirectionsRenderer()?.clear()
    }
}
```

</mi-tab-panel>
</mi-tabs>

Next step is to change the `ViewPager` implementation to contain the revised `RouteLegFragment` for each leg of the route.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/advanced_directions/app/src/main/java/com/example/mapsindoorsgettingstarted/NavigationFragment.java#L136-L170">NavigationFragment.java</a>

```java
class RouteCollectionAdapter extends FragmentStateAdapter {

    public RouteCollectionAdapter(Fragment fragment) {
        super(fragment);
    }

    @NonNull
    @Override
    public Fragment createFragment(int position) {
        if (position == mRoute.getLegs().size() - 1) {
            return RouteLegFragment.newInstance("Walk to " + mLocation.getName(), (int) mRoute.getLegs().get(position).getDistance(), (int) mRoute.getLegs().get(position).getDuration());
        }else {
            RouteLeg leg = mRoute.getLegs().get(position);
            RouteStep firstStep = leg.getSteps().get(0);
            RouteStep lastFirstStep = mRoute.getLegs().get(position+1).getSteps().get(0);
            RouteStep lastStep = mRoute.getLegs().get(position+1).getSteps().get(mRoute.getLegs().get(position+1).getSteps().size()-1);

            Building firstBuilding = MapsIndoors.getBuildings().getBuilding(firstStep.getStartPoint().getLatLng());
            Building lastBuilding = MapsIndoors.getBuildings().getBuilding(lastStep.getStartPoint().getLatLng());

            if (firstBuilding != null && lastBuilding != null) {
                return RouteLegFragment.newInstance(getStepName(lastFirstStep, lastStep), (int) leg.getDistance(), (int) leg.getDuration());
            }else if (firstBuilding != null) {
                return RouteLegFragment.newInstance("Exit: " + firstBuilding.getName(), (int) leg.getDistance(), (int) leg.getDuration());
            }else {
                return RouteLegFragment.newInstance("Enter: " + lastBuilding.getName(), (int) leg.getDistance(), (int) leg.getDuration());
            }
        }
    }

    @Override
    public int getItemCount() {
        return mRoute.getLegs().size();
    }
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/advanced_directions/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/NavigationFragment.kt#L115-L145">NavigationFragment.kt</a>

```kotlin
inner class RouteCollectionAdapter(fragment: Fragment?) :
    FragmentStateAdapter(fragment!!) {

    override fun createFragment(position: Int): Fragment {
        if (position == mRoute?.legs?.size!! - 1) {
            return RouteLegFragment.newInstance("Walk to " + mLocation?.name, mRoute?.legs!![position]?.distance?.toInt(), mRoute?.legs!![position]?.duration?.toInt())
        } else {
            var leg = mRoute?.legs!![position]
            var firstStep = leg.steps.first()
            var lastFirstStep = mRoute?.legs!![position + 1].steps.first()
            var lastStep = mRoute?.legs!![position + 1].steps.last()

            var firstBuilding = MapsIndoors.getBuildings()?.getBuilding(firstStep.startPoint.latLng)
            var lastBuilding  = MapsIndoors.getBuildings()?.getBuilding(lastStep.startPoint.latLng)
            return if (firstBuilding != null && lastBuilding != null) {
                RouteLegFragment.newInstance(getStepName(lastFirstStep, lastStep), leg.distance.toInt(), leg.duration.toInt())
            }else if (firstBuilding != null) {
                RouteLegFragment.newInstance("Exit: " + firstBuilding.name,  leg.distance.toInt(), leg.duration.toInt())
            }else {
                RouteLegFragment.newInstance("Enter: " + lastBuilding?.name,  leg.distance.toInt(), leg.duration.toInt())
            }
        }
    }

    override fun getItemCount(): Int {
        mRoute?.legs?.let { legs->
            return legs.size
        }
        return 0
    }
}
```

</mi-tab-panel>
</mi-tabs>

The method `getStepName` is however missing, so you must create this. This method creates a string that takes the first and last step of the next leg to create a description for the user on what to do at the end of the currently shown leg. You will also create a method to get a list of the different highway types the route can give the user. These are found as enums through the `Highway` class in the MapsIndoors SDK.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/advanced_directions/app/src/main/java/com/example/mapsindoorsgettingstarted/NavigationFragment.java#L91-L134">NavigationFragment.java</a>

```java
String getStepName(RouteStep startStep, RouteStep endStep) {
    double startStepZindex = startStep.getStartLocation().getZIndex();
    String startStepFloorName = startStep.getStartLocation().getFloorName();
    String highway = null;

    for (String actionName : getActionNames()) {
        if (startStep.getHighway().equals(actionName)) {
            if (actionName.equals(Highway.STEPS)) {
                highway = "stairs";
            }else {
                highway = actionName;
            }
        }
    }

    if (highway != null) {
        return String.format("Take %s to %s %s", highway, "level", endStep.getEndLocation().getFloorName().isEmpty() ? endStep.getEndLocation().getZIndex(): endStep.getEndLocation().getFloorName());
    }

    if (startStepFloorName.equals(endStep.getEndLocation().getFloorName())) {
        return "Walk to next step";
    }

    String endStepFloorName = endStep.getEndLocation().getFloorName();

    if (endStepFloorName.isEmpty()) {
        return String.format("Level %s to %s", startStepFloorName.isEmpty() ? startStepZindex: startStepFloorName, endStep.getEndPoint().getZIndex());
    }else {
        return String.format("Level %s to %s", startStepFloorName.isEmpty() ? startStepZindex: startStepFloorName, endStepFloorName);
    }
}

ArrayList<String> getActionNames() {
    ArrayList<String> actionNames = new ArrayList<>();
    actionNames.add(Highway.ELEVATOR);
    actionNames.add(Highway.ESCALATOR);
    actionNames.add(Highway.STEPS);
    actionNames.add(Highway.TRAVELATOR);
    actionNames.add(Highway.RAMP);
    actionNames.add(Highway.WHEELCHAIRLIFT);
    actionNames.add(Highway.WHEELCHAIRRAMP);
    actionNames.add(Highway.LADDER);
    return actionNames;
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/advanced_directions/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/NavigationFragment.kt#L65-L113">NavigationFragment.kt</a>

```kotlin
fun getStepName(startStep: RouteStep, endStep: RouteStep): String {
    val startStepStartPointZIndex = startStep.startLocation?.zIndex
    val startStepStartFloorName = startStep.startLocation?.floorName
    var highway: String? = null
    getActionNames().forEach {
        it?.let {
            if (startStep.highway == it) {
                highway = if (it == Highway.STEPS) {
                    "stairs"
                }else {
                    it
                }
            }
        }
    }
    if (highway != null) {
        return String.format("Take %s to %s %s", highway, "Level", if (endStep.endLocation?.floorName.isNullOrEmpty()) endStep.endLocation?.zIndex else endStep.endLocation?.floorName)
    }
    var result = "Walk to next step"

    if (startStepStartFloorName == endStep.endLocation?.floorName) {
        return result
    }

    val endStepEndFloorName = endStep.endLocation?.floorName

    result = if (TextUtils.isEmpty(endStepEndFloorName)) {
        String.format("Level %s to %s", if (TextUtils.isEmpty(startStepStartFloorName)) startStepStartPointZIndex else startStepStartFloorName, endStep.endPoint.zIndex)
    } else {
        String.format("Level %s to %s", if (TextUtils.isEmpty(startStepStartFloorName)) startStepStartPointZIndex else startStepStartFloorName, endStepEndFloorName)
    }
    return result
}

fun getActionNames(): Array<String?> {
    if (actionNames == null) {
        actionNames = arrayOf(
            Highway.ELEVATOR,
            Highway.ESCALATOR,
            Highway.STEPS,
            Highway.TRAVELATOR,
            Highway.RAMP,
            Highway.WHEELCHAIRRAMP,
            Highway.WHEELCHAIRLIFT,
            Highway.LADDER
        )
    }
    return actionNames!!
}
```

</mi-tab-panel>
</mi-tabs>

Now, expand the `RouteLegFragment` with some string variables to create the UI to explain to the user what to do on the respective Legs. Start by creating 3 new variables and update the `newInstance` method to assign these variables received from the `createFragment` method inside `RouteCollectionAdapter` from the `NavigationFragment`.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/advanced_directions/app/src/main/java/com/example/mapsindoorsgettingstarted/RouteLegFragment.java#L26-L36">RouteLegFragment.java</a>

```java/0-2,6-8
private String mStep = null;
private int mDuration = 0;
private int mDistance = 0;

public static RouteLegFragment newInstance(String step, int distance, int duration) {
    RouteLegFragment fragment = new RouteLegFragment();
    fragment.mStep = step;
    fragment.mDistance = distance;
    fragment.mDuration = duration;
    return fragment;
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/advanced_directions/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/RouteLegFragment.kt#L46-L53">RouteLegFragment.kt</a>

```kotlin/0-2,6-8
private String mStep = null;
private int mDuration = 0;
private int mDistance = 0;

public static RouteLegFragment newInstance(String step, int distance, int duration) {
    RouteLegFragment fragment = new RouteLegFragment();
    fragment.mStep = step;
    fragment.mDistance = distance;
    fragment.mDuration = duration;
    return fragment;
}
```

</mi-tab-panel>
</mi-tabs>

You must also update the `onViewCreated` method to use the new views added earlier in the tutorial.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/advanced_directions/app/src/main/java/com/example/mapsindoorsgettingstarted/RouteLegFragment.java#L51-L70">RouteLegFragment.java</a>

```java
@Override
public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
    super.onViewCreated(view, savedInstanceState);
    TextView stepTextView = view.findViewById(R.id.stepTextView);
    TextView distanceTextView = view.findViewById(R.id.distanceTextView);
    TextView durationTextView = view.findViewById(R.id.durationTextView);

    stepTextView.setText(mStep);

    if (Locale.getDefault().getCountry().equals("US")) {
        distanceTextView.setText((int) Math.round(mDistance * 3.281) + " feet");
    }else {
        distanceTextView.setText(mDistance + " m");
    }

    if (mDuration < 60) {
        durationTextView.setText(mDuration + " sec");
    }else {
        durationTextView.setText(TimeUnit.MINUTES.convert(new Long(mDuration), TimeUnit.SECONDS) + " min");
    }
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/advanced_directions/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/RouteLegFragment.kt#L24-L44">RouteLegFragment.kt</a>

```kotlin
override fun onViewCreated(
    view: View, @Nullable savedInstanceState: Bundle?) {
    super.onViewCreated(view, savedInstanceState)
    val stepTextView = view.findViewById<TextView>(R.id.stepTextView)
    val distanceTextView = view.findViewById<TextView>(R.id.distanceTextView)
    val durationTextView = view.findViewById<TextView>(R.id.durationTextView)

    stepTextView.text = mStep
    if (Locale.getDefault().country == "US") {
        distanceTextView.text = (mDistance?.times(3.281))?.toInt().toString() + " feet"
    }else {
        distanceTextView.text = mDistance?.toString() + " m"
    }
    mDuration?.let {
        if (it < 60) {
            durationTextView.text = it.toString() + " sec"
        }else {
            durationTextView.text = TimeUnit.MINUTES.convert(it.toLong(), TimeUnit.SECONDS).toString() + " min"
        }
    }
}
```

</mi-tab-panel>
</mi-tabs>

Now you have the revised UI for providing the user with a more explanatory route description when navigating. Now it needs to be rendered onto the map. Since you started from an existing example, this is already implemented. But run through what is done to achieve this behaviour and add some final touches to get the project to build and run.

The `MapsActivity` class handles all route rendering and route generation. This is done with `MPRoutingProvider` and `MPDirectionsRenderer`. The Activity also implements the `OnRouteResultListener`. You need to have a reference to your selected location when you get the result from the route query.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/advanced_directions/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L223-L233">MapsActivity.java</a>

```java
//Create a variable of MPLocation.
private MPLocation mSelectedLocation = null;

//Assign the selected location inisde createRoute
void createRoute(MPLocation mpLocation) {
    //If MPRoutingProvider has not been instantiated create it here and assign the results call back to the activity.
    if (mpRoutingProvider == null) {
        mpRoutingProvider = new MPRoutingProvider();
        mpRoutingProvider.setOnRouteResultListener(this);
    }
    mpRoutingProvider.setTravelMode(TravelMode.WALKING);
    //Queries the MPRouting provider for a route with the hardcoded user location and the point from a location.
    mSelectedLocation = mpLocation;
    mpRoutingProvider.query(mUserLocation, mpLocation.getPoint());
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/advanced_directions/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/MapsActivity.kt#L186-L195">MapsActivity.kt</a>

```kotlin
//Create a variable of MPLocation. It will be initiated later so we set it as a lateinit
private lateinit var mSelectedLocation: MPLocation


//Assign the selected location inisde createRoute
fun createRoute(mpLocation: MPLocation) {
    //If MPRoutingProvider has not been instantiated create it here and assign the results call back to the activity.
    if (mpRoutingProvider == null) {
        mpRoutingProvider = MPRoutingProvider()
        mpRoutingProvider?.setOnRouteResultListener(this)
    }
    //Queries the MPRouting provider for a route with the hardcoded user location and the point from a location.
    mSelectedLocation = mpLocation
    mpRoutingProvider?.query(mUserLocation, mpLocation.point)
}
```

</mi-tab-panel>
</mi-tabs>

First, you have the overwritten `onRouteResult` method that recieves the route when you query the `MPRoutingProvider`. The actions and logic in the method are explained inside the code example. This is where the `mSelectedLocation` is added to the `NavigationFragment.newInstance` method like in the example below.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/advanced_directions/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L241-L269">MapsActivity.java</a>

```java
/**
* The result callback from the route query. Starts the rendering of the route and opens up a new instance of the navigation fragment on the bottom sheet.
* @param route the route model used to render a navigation view.
* @param miError an MIError if anything goes wrong when generating a route
*/
@Override
public void onRouteResult(@Nullable Route route, @Nullable MIError miError) {
    //Return if either error is not null or the route is null
    if (miError != null || route == null) {
        new AlertDialog.Builder(this)
                .setTitle("Something went wrong")
                .setMessage("Something went wrong when generating the route. Try again or change your destination/origin")
                .show();
        return;
    }
    //Create the MPDirectionsRenderer if it has not been instantiated.
    if (mpDirectionsRenderer == null) {
        mpDirectionsRenderer = new MPDirectionsRenderer(this, mMap, mMapControl, i -> {
            //Listener call back for when the user changes route leg. (By default is only called when a user presses the RouteLegs end marker)
            mpDirectionsRenderer.setRouteLegIndex(i);
            mMapControl.selectFloor(mpDirectionsRenderer.getCurrentFloor());
        });
    }
    //Set the route on the Directions renderer
    mpDirectionsRenderer.setRoute(route);
    //Create a new instance of the navigation fragment
    mNavigationFragment = NavigationFragment.newInstance(route, this, mSelectedLocation);
    //Add the fragment to the BottomSheet
    addFragmentToBottomSheet(mNavigationFragment);
    //As camera movement is involved run this on the UIThread
    runOnUiThread(()-> {
        //Starts drawing and adjusting the map according to the route
        mpDirectionsRenderer.initMap(true);
    });
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/advanced_directions/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/MapsActivity.kt#L202-L227">MapsActivity.kt</a>

```kotlin
/**
* The result callback from the route query. Starts the rendering of the route and opens up a new instance of the navigation fragment on the bottom sheet.
* @param route the route model used to render a navigation view.
* @param miError an MIError if anything goes wrong when generating a route
*/
override fun onRouteResult(@Nullable route: Route?, @Nullable miError: MIError?) {
    //Return if either error is not null or the route is null
    if (miError != null || route == null) {
        //TODO: Tell the user about the route not being able to be created etc.
        return
    }
    //Create the MPDirectionsRenderer if it has not been instantiated.
    if (mpDirectionsRenderer == null) {
        mpDirectionsRenderer = MPDirectionsRenderer(this, mMap, mMapControl, OnLegSelectedListener { i: Int ->
            //Listener call back for when the user changes route leg. (By default is only called when a user presses the RouteLegs end marker)
            mpDirectionsRenderer?.setRouteLegIndex(i)
            mMapControl.selectFloor(mpDirectionsRenderer!!.currentFloor)
        })
    }
    //Set the route on the Directions renderer
    mpDirectionsRenderer?.setRoute(route)
    //Create a new instance of the navigation fragment
    mNavigationFragment = NavigationFragment.newInstance(route, this, mSelectedLocation)
    //Start a transaction and assign it to the BottomSheet
    addFragmentToBottomSheet(mNavigationFragment)
    //As camera movement is involved run this on the UIThread
    runOnUiThread {
        //Starts drawing and adjusting the map according to the route
        mpDirectionsRenderer?.initMap(true)
    }
}
```

</mi-tab-panel>
</mi-tabs>

A route is fetched when a user clicks on a location they have searched for. Then `createRoute` is called which will be used to create the Fragments mentioned above. When the route is ready, it is received by the listener. The user is now able to navigate the route. Changing legs when a user swipes between the steps is done by having a reference to the `MapsActivity` and a getter for the `MPDirectionRenderer` created inside the `onRouteResult` method.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/advanced_directions/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L132-L134">MapsActivity.java</a>

```java/1
public MPDirectionsRenderer getMpDirectionsRenderer() {
    return mpDirectionsRenderer;
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/advanced_directions/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/MapsActivity.kt#L182-L184">MapsActivity.kt</a>

```kotlin/1
fun getMpDirectionsRenderer(): MPDirectionsRenderer? {
    return mpDirectionsRenderer
}
```

</mi-tab-panel>
</mi-tabs>

To change the routing when swapping between tabs on the viewpager, use the call back that we added further up inside the `onViewCreated` of `NavigationFragment`.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/advanced_directions/app/src/main/java/com/example/mapsindoorsgettingstarted/NavigationFragment.java#L69-L81">NavigationFragment.java</a>

```java
RouteCollectionAdapter routeCollectionAdapter = new RouteCollectionAdapter(this);
ViewPager2 mViewPager = view.findViewById(R.id.stepViewPager);
mViewPager.setAdapter(routeCollectionAdapter);
mViewPager.registerOnPageChangeCallback(new ViewPager2.OnPageChangeCallback() {
    @Override
    public void onPageSelected(int position) {
        super.onPageSelected(position);
        //When a page is selected call the renderer with the index
        mMapsActivity.getMpDirectionsRenderer().setRouteLegIndex(position);
        //Update the floor on mapcontrol if the floor might have changed for the routing
        mMapsActivity.getMapControl().selectFloor(mMapsActivity.getMpDirectionsRenderer().getCurrentFloor());
    }
});
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/advanced_directions/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/NavigationFragment.kt#L40-L54">NavigationFragment.kt</a>

```kotlin
val mViewPager: ViewPager2 = view.findViewById(R.id.stepViewPager)
mViewPager.adapter = routeCollectionAdapter
mViewPager.registerOnPageChangeCallback(object : OnPageChangeCallback() {
    override fun onPageSelected(position: Int) {
        super.onPageSelected(position)
        //When a page is selected call the renderer with the index
        mMapsActivity?.getMpDirectionsRenderer()?.setRouteLegIndex(position)
        //Update the floor on mapcontrol if the floor might have changed for the routing
        mMapsActivity?.getMpDirectionsRenderer()?.currentFloor?.let {floorIndex ->
            mMapsActivity?.getMapControl()?.selectFloor(floorIndex)
        }
    }
})
```

</mi-tab-panel>
</mi-tabs>

The full working example can be found here: [Java](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/tree/advanced_directions) and [Kotlin](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-kotlin/tree/advanced_directions).
