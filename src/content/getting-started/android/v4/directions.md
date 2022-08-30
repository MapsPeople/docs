---
title: Getting Directions
toc: true
eleventyNavigation:
  title: Directions
  key: getting-started-android-directions
  parent: getting-started-android-v4
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
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/Google_Maps/mapsindoorsgettingstartedjava/src/main/java/com/mapspeople/mapsindoorsgettingstartedjava/MapsActivity.java#L50">MapsActivity.java</a>

```java
private MPPoint mUserLocation = new MPPoint(38.897389429704695, -77.03740973527613,0);
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/Google_Maps/mapsindoorsgettingstartedkotlin/src/main/java/com/mapspeople/mapsindoorsgettingstartedkotlin/MapsActivity.kt#L38">MapsActivity.kt</a>

```kotlin
private val mUserLocation: MPPoint = MPPoint(38.897389429704695, -77.03740973527613, 0.0)
```

</mi-tab-panel>
</mi-tabs>

Now we will create a method that can generate a route for us with a Location (picked from the search list).
Start by implementing `OnRouteResultListener` to your MapsActivity.

<mi-tabs>
<mi-tab label="Java-Google" tab-for="java-google"></mi-tab>
<mi-tab label="Kotlin-Google" tab-for="kotlin-google"></mi-tab>
<mi-tab label="Java-Mapbox" tab-for="java-Mapbox"></mi-tab>
<mi-tab label="Kotlin-Mapbox" tab-for="kotlin-Mapbox"></mi-tab>
<mi-tab-panel id="java-google">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/Google_Maps/mapsindoorsgettingstartedjava/src/main/java/com/mapspeople/mapsindoorsgettingstartedjava/MapsActivity.java#L42">MapsActivity.java</a>

```java
public class MapsActivity extends FragmentActivity implements OnMapReadyCallback, OnRouteResultListener
```

</mi-tab-panel>
<mi-tab-panel id="kotlin-google">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/Google_Maps/mapsindoorsgettingstartedkotlin/src/main/java/com/mapspeople/mapsindoorsgettingstartedkotlin/MapsActivity.kt#L28">MapsActivity.kt</a>

```kotlin
class MapsActivity : FragmentActivity(), OnMapReadyCallback, OnRouteResultListener
```

</mi-tab-panel>
<mi-tab-panel id="java-mapbox">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapBox/mapsindoorsgettingstartedjava/src/main/java/com/mapspeople/mapsindoorsgettingstartedjava/MapsActivity.java#L42">MapsActivity.java</a>

```java
public class MapsActivity extends FragmentActivity implements OnRouteResultListener
```

</mi-tab-panel>
<mi-tab-panel id="kotlin-mapbox">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapBox/mapsindoorsgettingstartedkotlin/src/main/java/com/mapspeople/mapsindoorsgettingstartedkotlin/MapsActivity.kt#L27">MapsActivity.kt</a>

```kotlin
class MapsActivity : FragmentActivity(), OnRouteResultListener
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
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/Google_Maps/mapsindoorsgettingstartedjava/src/main/java/com/mapspeople/mapsindoorsgettingstartedjava/SearchItemAdapter.java#L38-L42">SearchItemAdapter.java</a>

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
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/Google_Maps/mapsindoorsgettingstartedkotlin/src/main/java/com/mapspeople/mapsindoorsgettingstartedkotlin/SearchItemAdapter.kt#L20-L24">MapsActivity.kt</a>

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
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/Google_Maps/mapsindoorsgettingstartedjava/src/main/java/com/mapspeople/mapsindoorsgettingstartedjava/MapsActivity.java#L222-L253">MapsActivity.java</a>

```java
void createRoute(MPLocation mpLocation) {
    if (mpDirectionsService == null) {
        mpDirectionsService = new MPDirectionsService(this);
        mpDirectionsService.setRouteResultListener(this);
    }
    mpRoutingProvider.query(mUserLocation, mpLocation.getPoint());
}

@Override
public void onRouteResult(@Nullable Route route, @Nullable MIError miError) {
    ...
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
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/Google_Maps/mapsindoorsgettingstartedkotlin/src/main/java/com/mapspeople/mapsindoorsgettingstartedkotlin/MapsActivity.kt#L186-L218">MapsActivity.kt</a>

```kotlin
fun createRoute(mpLocation: MPLocation) {
    //If MPRoutingProvider has not been instantiated create it here and assign the results call back to the activity.
    if (mpRoutingProvider == null) {
        mpRoutingProvider = MPDirectionsService(this)
        mpRoutingProvider?.setRouteResultListener(this)
    }
    //Queries the MPRouting provider for a route with the hardcoded user location and the point from a location.
    mpRoutingProvider?.query(mUserLocation, mpLocation.point)
}

override fun onRouteResult(@Nullable route: Route?, @Nullable miError: MIError?) {
    ...
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

See the full implementation of these methods here: [MapsActivity.java](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L218-L267) or [MapsActivity.kt](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/main/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/MapsActivity.kt#L185-L225)

Now we will implement logic to our `NavigationFragment` that we can put into our BottomSheet and show the steps for each route, as well as the time and distance it takes to travel the route.

Here we'll use a `viewpager` to allow the user to switch between each step, as well as display a "close" button so we are able to remove the route and the bottom sheet from the activity.

We will start by making a getter for our `MPDirectionsRenderer` that we store on `MapsActivity`:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/Google_Maps/mapsindoorsgettingstartedjava/src/main/java/com/mapspeople/mapsindoorsgettingstartedjava/MapsActivity.java#L129-L135">MapsActivity.java</a>

```java
public MPDirectionsRenderer getMpDirectionsRenderer() {
    return mpDirectionsRenderer;
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/Google_Maps/mapsindoorsgettingstartedkotlin/src/main/java/com/mapspeople/mapsindoorsgettingstartedkotlin/MapsActivity.kt#L182-L184">MapsActivity.kt</a>

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
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/Google_Maps/mapsindoorsgettingstartedjava/src/main/java/com/mapspeople/mapsindoorsgettingstartedjava/NavigationFragment.java">NavigationFragment.java</a>

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
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/Google_Maps/mapsindoorsgettingstartedkotlin/src/main/java/com/mapspeople/mapsindoorsgettingstartedkotlin/NavigationFragment.kt">NavigationFragment.kt</a>

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
                mMapsActivity?.getMpDirectionsRenderer()?.selectedLegFloorLevel?.let {floorIndex ->
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
        fun newInstance(route: Route?, mapsActivity: MapsActivity?): NavigationFragment {
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

See the full implementation of `NavigationFragment` and the accompanying adapter here: [NavigationFragment.java](https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/Google_Maps/mapsindoorsgettingstartedjava/src/main/java/com/mapspeople/mapsindoorsgettingstartedjava/NavigationFragment.java) or [NavigationFragment.kt](https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/Google_Maps/mapsindoorsgettingstartedkotlin/src/main/java/com/mapspeople/mapsindoorsgettingstartedkotlin/NavigationFragment.kt)

We will then create a simple textview to describe each step of the Route Leg in the `RouteLegFragment` for the `ViewPager`:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/Google_Maps/mapsindoorsgettingstartedjava/src/main/java/com/mapspeople/mapsindoorsgettingstartedjava/RouteLegFragment.java">RouteLegFragment.java</a>

```java
public class RouteLegFragment extends Fragment {
    private MPRouteLeg mRouteLeg;
    ...
    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        //Assigning views
        TextView fromTxtView = view.findViewById(R.id.from_text_view);
        String stepsString = "";
        //A loop to write what to do for each step of the leg.
        for (int i = 0; i < mRouteLeg.getSteps().size(); i++) {
            RouteStep routeStep = mRouteLeg.getSteps().get(i);
            stepsString += "Step " + (i + 1) + routeStep.getManeuver() + "\n";
        }
        fromTxtView.setText(stepsString);
    }
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/Google_Maps/mapsindoorsgettingstartedkotlin/src/main/java/com/mapspeople/mapsindoorsgettingstartedkotlin/RouteLegFragment.kt">RouteLegFragment.kt</a>

```kotlin
class RouteLegFragment : Fragment() {
    private var mRouteLeg: MPRouteLeg? = null

    ...

    override fun onViewCreated(view: View, @Nullable savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        //Assigning views
        val fromTxtView = view.findViewById<TextView>(R.id.from_text_view)
        var stepsString = ""
        //A loop to write what to do for each step of the leg.
        for (i in mRouteLeg!!.steps.indices) {
            val routeStep = mRouteLeg!!.steps[i]
            stepsString += """
                Step ${i + 1}${routeStep.maneuver}
                """.trimIndent()
        }

        fromTxtView.text = stepsString
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

See the full implementation of the fragment here: [RouteLegFragment.java](https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/Google_Maps/mapsindoorsgettingstartedjava/src/main/java/com/mapspeople/mapsindoorsgettingstartedjava/RouteLegFragment.java) or [RouteLegFragment.kt](https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/Google_Maps/mapsindoorsgettingstartedkotlin/src/main/java/com/mapspeople/mapsindoorsgettingstartedkotlin/RouteLegFragment.kt)

<!-- Travel-mode -->
{% include "src/content/shared/getting-started/directions/travel-mode.md" %}

To swap Travel Modes you set the Travel Mode before making a query for the route:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java/6
void createRoute(MPLocation mpLocation) {
    //If MPDirectionsService has not been instantiated create it here and assign the results call back to the activity.
    if (mpDirectionsService == null) {
        mpDirectionsService = new MPDirectionsService(this);
        mpDirectionsService.setRouteResultListener(this);
    }
    mpDirectionsService.setTravelMode(MPTravelMode.WALKING);
    mpDirectionsService.query(mUserLocation, mpLocation.getPoint());
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin/6
fun createRoute(mpLocation: MPLocation) {
    //If MPDirectionsService has not been instantiated create it here and assign the results call back to the activity.
    if (mpDirectionsService == null) {
        mpDirectionsService = MPDirectionsService(this)
        mpDirectionsService?.setRouteResultListener(this)
    }
    mpDirectionsService?.setTravelMode(MPTravelMode.WALKING)
    //Queries the MPRouting provider for a route with the hardcoded user location and the point from a location.
    mpDirectionsService?.query(mUserLocation, mpLocation.point)
}
```

</mi-tab-panel>
</mi-tabs>

Expected result:

![Directions result](/assets/android/getting-started/directions_gif.gif)

<p class="next-article"><a class="mi-button mi-button--outline" href="{{ site.url }}/content/getting-started/android/v4/livedata/">Next up: Enable Live Data</a></p>