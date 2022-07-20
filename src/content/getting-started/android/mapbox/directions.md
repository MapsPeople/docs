---
title: Getting Directions
toc: true
eleventyNavigation:
  title: Directions
  key: getting-started-android-mapbox-directions
  parent: getting-started-android-mapbox
  order: 160
---

<!-- Overview -->
{% include "src/content/shared/getting-started/directions/overview.md" %}

<!-- Directions -->
{% include "src/content/shared/getting-started/directions/directions.md" %}

After having created our list of search results, we have a good starting point for creating directions between two Locations.
Since our search only supports a single search, we will hardcode a Location's coordinate into our app, and use that as the basis for our Origin. Then we'll create a route, navigate to a view of the navigation details, and show a route on the map from the Origin to the Destination.

We have already created a point in the basic example, called `mUserLocation` to use as a starting point for directions on `MapsActivity`

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Mapbox-Android/blob/429f2ca4514648c5e43bf50c9c46246164bfb412/app/src/main/java/com/example/mapsindoorsgettingstartedmapbox/MapsActivity.java#L55">MapsActivity.java</a>

```java
private Point mUserLocation = new Point(38.897389429704695, -77.03740973527613,0);
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Mapbox-Android-Kotlin/blob/9df3583787a50e0aa5c59e0a91e0a94c2b3b6225/app/src/main/java/com/example/mapsindoorsgettingstartedmapboxkotlin/MapsActivity.kt#L40">MapsActivity.kt</a>

```kotlin
private val mUserLocation: Point = Point(38.897389429704695, -77.03740973527613, 0.0)
```

</mi-tab-panel>
</mi-tabs>

Now we will create a method that can generate a route for us with a Location (picked from the search list).
Start by implementing `OnRouteResultListener` to your MapsActivity.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Mapbox-Android/blob/429f2ca4514648c5e43bf50c9c46246164bfb412/app/src/main/java/com/example/mapsindoorsgettingstartedmapbox/MapsActivity.java#L47">MapsActivity.java</a>

```java
public class MapsActivity extends FragmentActivity implements OnMapReadyCallback, OnRouteResultListener
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Mapbox-Android-Kotlin/blob/9df3583787a50e0aa5c59e0a91e0a94c2b3b6225/app/src/main/java/com/example/mapsindoorsgettingstartedmapboxkotlin/MapsActivity.kt#L30">MapsActivity.kt</a>

```kotlin
class MapsActivity : FragmentActivity(), OnMapReadyCallback, OnRouteResultListener
```

</mi-tab-panel>
</mi-tabs>

implement the `onRouteResult` method and create a method called `createRoute(MPLocation mpLocation)` on your `MapsActivity`.

Use this method to query the `MPDirectionsService`, which generates a route between two coordinates. We will use this to query a route with our hardcoded `mUserLocation` and a point from a MPLocation.

To generate a route with the `MPLocation`, we start by creating an `onClickListener` on our search `ViewHolder` inside the `SearchItemAdapter`. In the method `onBindViewHolder` we will call our `createRoute` on the `MapsActivity` for our route to be generated.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Mapbox-Android/blob/429f2ca4514648c5e43bf50c9c46246164bfb412/app/src/main/java/com/example/mapsindoorsgettingstartedmapbox/SearchItemAdapter.java#L38-L42">SearchItemAdapter.java</a>

```java
public void onBindViewHolder(ViewHolder holder, int position) {
    ...
    holder.itemView.setOnClickListener(view -> {
            mMapActivity.createRoute(mLocations.get(position));
            //Clearing map to remove the location filter from our search result
            mMapActivity.getMapControl().clearFilter();
        });
    ...
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Mapbox-Android-Kotlin/blob/9df3583787a50e0aa5c59e0a91e0a94c2b3b6225/app/src/main/java/com/example/mapsindoorsgettingstartedmapboxkotlin/SearchItemAdapter.kt#L23-L27">MapsActivity.kt</a>

```kotlin
override fun onBindViewHolder(holder: ViewHolder, position: Int) {
    ...
    holder.itemView.setOnClickListener {
        mLocations[position]?.let { locations -> mMapActivity?.createRoute(locations) }
        //Clearing map to remove the location filter from our search result
        mMapActivity?.getMapControl()?.clearFilter()
    }
    ...
}
```

</mi-tab-panel>
</mi-tabs>

We start by implementing logic to our createRoute method to query a route through `MPDirectionsService` and assign the onRouteResultListener to the activity. When we call the `createRoute` through our `onClickListener` we will receive a result through our `onRouteResult` implementation.

When we receive a result on our listener, we render the route through the `MPDirectionsRenderer`.

We create global variables of the `MPdirectionsRenderer` and `MPDirectionsService` and create a getter to the `MPDirectionsRenderer` to access it from _fragments_ later on.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Mapbox-Android/blob/429f2ca4514648c5e43bf50c9c46246164bfb412/app/src/main/java/com/example/mapsindoorsgettingstartedmapbox/MapsActivity.java#L220-L263">MapsActivity.java</a>

```java
void createRoute(MPLocation mpLocation) {
    //If MPRoutingProvider has not been instantiated create it here and assign the results call back to the activity.
    if (mpDirectionsService == null) {
        mpDirectionsService = new MPDirectionsService();
        MPDirectionsConfig config = new MPDirectionsConfig.Builder()
                .setOnRouteResultListener(this)
                .setTravelMode(MPTravelMode.WALKING)
                .build();
        mpDirectionsService.setConfig(config);
    }
    //Queries the MPRouting provider for a route with the hardcoded user location and the point from a location.
    mpDirectionsService.query(mUserLocation, mpLocation.getPoint());
}

@Override
public void onRouteResult(@Nullable MPRoute mpRoute, @Nullable MIError miError) {
    //Return if either error is not null or the route is null
    if (miError != null || mpRoute == null) {
        new AlertDialog.Builder(this)
                .setTitle("Something went wrong")
                .setMessage("Something went wrong when generating the route. Try again or change your destination/origin")
                .show();
        return;
    }
    //Create the MPDirectionsRenderer if it has not been instantiated.
    if (mpDirectionsRenderer == null) {
        mpDirectionsRenderer = new MPDirectionsRenderer(mMapControl);
    }
    //Set the route on the Directions renderer
    mpDirectionsRenderer.setRoute(mpRoute);
    //Create a new instance of the navigation fragment
    mNavigationFragment = NavigationFragment.newInstance(mpRoute, this);
    //Add the fragment to the BottomSheet
    addFragmentToBottomSheet(mNavigationFragment);
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Mapbox-Android-Kotlin/blob/9df3583787a50e0aa5c59e0a91e0a94c2b3b6225/app/src/main/java/com/example/mapsindoorsgettingstartedmapboxkotlin/MapsActivity.kt#L201-L245">MapsActivity.kt</a>

```kotlin
fun createRoute(mpLocation: MPLocation) {
    //If MPRoutingProvider has not been instantiated create it here and assign the results call back to the activity.
    if (mpDirectionsService == null) {
        //Creating a configuration for the MPDirectionsService allows us to set a resultListener and a travelMode.
        val directionsConfig = MPDirectionsConfig.Builder()
            .setOnRouteResultListener(this::onRouteResult)
            .setTravelMode(MPTravelMode.WALKING).build()

        mpDirectionsService = MPDirectionsService()
        mpDirectionsService!!.setConfig(directionsConfig)
    }
    //Queries the MPRouting provider for a route with the hardcoded user location and the point from a location.
    mpDirectionsService?.query(mUserLocation, mpLocation.point)
}

override fun onRouteResult(@Nullable route: MPRoute?, @Nullable miError: MIError?) {
    //Return if either error is not null or the route is null
    if (miError != null || route == null) {
        android.app.AlertDialog.Builder(this)
            .setTitle("Something went wrong")
            .setMessage("Something went wrong when generating the route. Try again or change your destination/origin")
            .show()
        return
    }
    //Create the MPDirectionsRenderer if it has not been instantiated.
    if (mpDirectionsRenderer == null) {
        mpDirectionsRenderer = MPDirectionsRenderer(mMapControl)
    }
    //Set the route on the Directions renderer
    mpDirectionsRenderer?.setRoute(route)
    //Create a new instance of the navigation fragment
    mNavigationFragment = NavigationFragment.newInstance(route, this)
    //Start a transaction and assign it to the BottomSheet
    addFragmentToBottomSheet(mNavigationFragment)
}
```

</mi-tab-panel>
</mi-tabs>

Now we will implement logic to our `NavigationFragment` that we can put into our BottomSheet and show the steps for each route, as well as the time and distance it takes to travel the route.

Here we'll use a `viewpager` to allow the user to switch between each step, as well as display a "close" button so we are able to remove the route and the bottom sheet from the activity.

We will start by making a getter for our `MPDirectionsRenderer` that we store on `MapsActivity`:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Mapbox-Android/blob/429f2ca4514648c5e43bf50c9c46246164bfb412/app/src/main/java/com/example/mapsindoorsgettingstartedmapbox/MapsActivity.java#L135-L241">MapsActivity.java</a>

```java
public MPDirectionsRenderer getMpDirectionsRenderer() {
    return mpDirectionsRenderer;
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Mapbox-Android-Kotlin/blob/9df3583787a50e0aa5c59e0a91e0a94c2b3b6225/app/src/main/java/com/example/mapsindoorsgettingstartedmapboxkotlin/MapsActivity.kt#L192-L199">MapsActivity.kt</a>

```kotlin
fun getMpDirectionsRenderer(): MPDirectionsRenderer? {
    return mpDirectionsRenderer
}
```

</mi-tab-panel>
</mi-tabs>

Inside the `NavigationFragment` we will implement logic to navigate through Legs of our Route.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Mapbox-Android/blob/429f2ca4514648c5e43bf50c9c46246164bfb412/app/src/main/java/com/example/mapsindoorsgettingstartedmapbox/NavigationFragment.java">NavigationFragment.java</a>

```java
public class NavigationFragment extends Fragment {
    private MPRoute mRoute;
    private MapsActivity mMapsActivity;
    ...
    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        RouteCollectionAdapter routeCollectionAdapter = new RouteCollectionAdapter(this);
        ViewPager2 mViewPager = view.findViewById(R.id.view_pager);
        mViewPager.setAdapter(routeCollectionAdapter);
        mViewPager.registerOnPageChangeCallback(new ViewPager2.OnPageChangeCallback() {
            @Override
            public void onPageSelected(int position) {
                super.onPageSelected(position);
                //When a page is selected call the renderer with the index
                mMapsActivity.getMpDirectionsRenderer().selectLegIndex(position);
                //Update the floor on mapcontrol if the floor might have changed for the routing
                mMapsActivity.getMapControl().selectFloor(mMapsActivity.getMpDirectionsRenderer().getSelectedLegFloorLevel());
            }
        });

        ...
        //Button for closing the bottom sheet. Clears the route through directionsRenderer as well, and changes map padding.
        closeBtn.setOnClickListener(v -> {
            mMapsActivity.removeFragmentFromBottomSheet(this);
            mMapsActivity.getMpDirectionsRenderer().clear();
        });

        //Next button for going through the legs of the route.
        nextBtn.setOnClickListener(v -> {
            mViewPager.setCurrentItem(mViewPager.getCurrentItem() + 1, true);
        });

        //Back button for going through the legs of the route.
        backBtn.setOnClickListener(v -> {
            mViewPager.setCurrentItem(mViewPager.getCurrentItem() - 1, true);
        });

        //Describing the distance in meters
        distanceTxtView.setText("Distance: " + mRoute.getDistance() + " m");
        //Describing the time it takes for the route in minutes
        infoTxtView.setText("Time for route: " + TimeUnit.MINUTES.convert(mRoute.getDuration(), TimeUnit.SECONDS) + " minutes");
    }
    public class RouteCollectionAdapter extends FragmentStateAdapter {
        ...
    }
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Mapbox-Android-Kotlin/blob/9df3583787a50e0aa5c59e0a91e0a94c2b3b6225/app/src/main/java/com/example/mapsindoorsgettingstartedmapboxkotlin/NavigationFragment.kt">NavigationFragment.kt</a>

```kotlin
class NavigationFragment : Fragment() {
    private var mRoute: MPRoute? = null
    private var mMapsActivity: MapsActivity? = null

    ...
    override fun onViewCreated(view: View, @Nullable savedInstanceState: Bundle?) {
        val routeCollectionAdapter = RouteCollectionAdapter(this)
        val mViewPager: ViewPager2 = view.findViewById(R.id.view_pager)
        mViewPager.adapter = routeCollectionAdapter
        mViewPager.registerOnPageChangeCallback(object : OnPageChangeCallback() {
            override fun onPageSelected(position: Int) {
                super.onPageSelected(position)
                //When a page is selected call the renderer with the index
                mMapsActivity?.getMpDirectionsRenderer()?.selectLegIndex(position)
                //Update the floor on mapcontrol if the floor might have changed for the routing
                mMapsActivity?.getMpDirectionsRenderer()?.selectedLegFloorLevel?.let { floorIndex ->
                    mMapsActivity?.getMapControl()?.selectFloor(floorIndex)
                }
            }
        })

        ...

        //Button for closing the bottom sheet. Clears the route through directionsRenderer as well, and changes map padding.
        closeBtn.setOnClickListener {
            mMapsActivity!!.removeFragmentFromBottomSheet(this)
            mMapsActivity!!.getMpDirectionsRenderer()?.clear()
        }

        //Next button for going through the legs of the route.
        nextBtn.setOnClickListener {
            mViewPager.setCurrentItem(
                mViewPager.currentItem + 1,
                true
            )
        }

        //Back button for going through the legs of the route.
        backBtn.setOnClickListener {
            mViewPager.setCurrentItem(
                mViewPager.currentItem - 1,
                true
            )
        }

        //Describing the distance in meters
        distanceTxtView.text = "Distance: " + mRoute?.getDistance().toString() + " m"
        //Describing the time it takes for the route in minutes
        infoTxtView.text = "Time for route: " + mRoute?.duration?.toLong()?.let {duration ->
            TimeUnit.MINUTES.convert(duration, TimeUnit.SECONDS).toString()
        } + " minutes"
    }

    inner class RouteCollectionAdapter(fragment: Fragment?) :
        ...
    }

    companion object {
        fun newInstance(route: MPRoute?, mapsActivity: MapsActivity?): NavigationFragment {
            val fragment = NavigationFragment()
            fragment.mRoute = route
            fragment.mMapsActivity = mapsActivity
            return fragment
        }
    }
}
```

</mi-tab-panel>
</mi-tabs>

We will then create a simple textview to describe each step of the Route Leg in the `RouteLegFragment` for the `ViewPager`:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Mapbox-Android/blob/429f2ca4514648c5e43bf50c9c46246164bfb412/app/src/main/java/com/example/mapsindoorsgettingstartedmapbox/RouteLegFragment.java">RouteLegFragment.java</a>

```java
public class RouteLegFragment extends Fragment {
    private MPRouteLeg mRouteLeg;
    ...
    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        //Assigning views
        TextView stepTxtView = view.findViewById(R.id.steps_text_view);
        String stepsString = "";
        //A loop to write what to do for each step of the leg.
        for (int i = 0; i < mRouteLeg.getSteps().size(); i++) {
            MPRouteStep routeStep = mRouteLeg.getSteps().get(i);
            stepsString += "Step " + (i + 1) + " " + routeStep.getManeuver() + "\n";
        }
        stepTxtView.setText(stepsString);
    }
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Mapbox-Android-Kotlin/blob/9df3583787a50e0aa5c59e0a91e0a94c2b3b6225/app/src/main/java/com/example/mapsindoorsgettingstartedmapboxkotlin/RouteLegFragment.kt">RouteLegFragment.kt</a>

```kotlin
class RouteLegFragment : Fragment() {
    private var mRouteLeg: MPRouteLeg? = null

    ...

    override fun onViewCreated(view: View, @Nullable savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        //Assigning views
        val stepsTxtView = view.findViewById<TextView>(R.id.steps_text_view)
        var stepsString = ""
        //A loop to write what to do for each step of the leg.
        for (i in mRouteLeg!!.steps.indices) {
            val routeStep = mRouteLeg!!.steps[i]
            stepsString += """
                Step ${i + 1}${routeStep.maneuver}
                """.trimIndent()
        }

        stepsTxtView.text = stepsString
    }

    companion object {
        fun newInstance(routeLeg: MPRouteLeg?): RouteLegFragment {
            val fragment = RouteLegFragment()
            fragment.mRouteLeg = routeLeg
            return fragment
        }
    }
}
```

</mi-tab-panel>
</mi-tabs>

<!-- Travel-mode -->
{% include "src/content/shared/getting-started/directions/travel-mode.md" %}

To swap Travel Modes you set the Travel Mode before making a query for the route:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
void createRoute(MPLocation mpLocation) {
    //If MPRoutingProvider has not been instantiated create it here and assign the results call back to the activity.
    if (mpDirectionsService == null) {
        mpDirectionsService = new MPDirectionsService();
        MPDirectionsConfig config = new MPDirectionsConfig.Builder()
                .setOnRouteResultListener(this)
                .setTravelMode(MPTravelMode.WALKING)
                .build();
        mpDirectionsService.setConfig(config);
    }
    //Queries the MPRouting provider for a route with the hardcoded user location and the point from a location.
    mpDirectionsService.query(mUserLocation, mpLocation.getPoint());
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
fun createRoute(mpLocation: MPLocation) {
    //If MPRoutingProvider has not been instantiated create it here and assign the results call back to the activity.
    if (mpDirectionsService == null) {
        //Creating a configuration for the MPDirectionsService allows us to set a resultListener and a travelMode.
        val directionsConfig = MPDirectionsConfig.Builder()
            .setOnRouteResultListener(this::onRouteResult)
            .setTravelMode(MPTravelMode.WALKING).build()

        mpDirectionsService = MPDirectionsService()
        mpDirectionsService!!.setConfig(directionsConfig)
    }
    //Queries the MPRouting provider for a route with the hardcoded user location and the point from a location.
    mpDirectionsService?.query(mUserLocation, mpLocation.point)
}
```

</mi-tab-panel>
</mi-tabs>

Expected result:

![Directions result](/assets/android/getting-started/directions_gif.gif)

<p class="next-article"><a class="mi-button mi-button--outline" href="{{ site.url }}/content/getting-started/android/mapbox/livedata/">Next up: Enable Live Data</a></p>
