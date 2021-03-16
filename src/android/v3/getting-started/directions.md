---
title: Getting directions
toc: true
eleventyNavigation:
  title: Directions
  key: android-v3-getting-started-directions
  parent: android-v3-getting-started
  order: 160
---

<!-- Overview -->
{% include "src/shared/getting-started/directions/overview.md" %}

<!-- Directions -->
{% include "src/shared/getting-started/directions/directions.md" %}

After having created our list of search results, we have a good starting point for creating directions between two Locations.
Since our search only supports a single search, we will hardcode a Location's coordinate into our app, and use that as the basis for our Origin. Then we'll create a route, navigate to a view of the navigation details, and show a route on the map from the Origin to the Destination.

Create a `Point` with the coordinates from the Oval Office Location on your MapsActivity.

<mi-tabs>
    <mi-tab label="Java" tab-for="java"></mi-tab>
    <mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
    <mi-tab-panel id="java">
        <h3>Java</h3>
        <pre lang="Java"><code>
private Point mUserLocation = new Point(38.897389429704695, -77.03740973527613,0);
        </code></pre>
    </mi-tab-panel>
    <mi-tab-panel id="kotlin">
        <h3>Kotlin</h3>
        <pre lang ="Kotlin"><code>
private val mUserLocation: Point = Point(38.897389429704695, -77.03740973527613, 0.0)
        </code></pre>
    </mi-tab-panel>
</mi-tabs>

Now we will make a method that can generate a route for us with just a Location (picked from the search list).
Start by implementing `OnRouteResultListener` to your MapsActivity.

<mi-tabs>
    <mi-tab label="Java" tab-for="java"></mi-tab>
    <mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
    <mi-tab-panel id="java">
        <h3>Java</h3>
        <pre lang="Java"><code>
public class MapsActivity extends FragmentActivity implements OnMapReadyCallback, OnRouteResultListener
        </code></pre>
    </mi-tab-panel>
    <mi-tab-panel id="kotlin">
        <h3>Kotlin</h3>
        <pre lang ="Kotlin"><code>
class MapsActivity : FragmentActivity(), OnMapReadyCallback, OnRouteResultListener
        </code></pre>
    </mi-tab-panel>
</mi-tabs>

implement the `onRouteResult` method and create a method called `createRoute(MPLocation mpLocation)` To generate a route you can use with `MPRoutingProvider` to query a route with our hardcoded `mUserLocation` and a point from the MPLocation we call the method with later on.

To generate a route with the `MPLocation`, we start by creating an `onClickListener` on our search `ViewHolder` inside the `SearchItemAdapter` on `onBindViewHolder`. This calls a `createRoute` on our activity and the route is generated.

<mi-tabs>
    <mi-tab label="Java" tab-for="java"></mi-tab>
    <mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
    <mi-tab-panel id="java">
        <h3>Java</h3>
        <pre lang="Java"><code>
holder.itemView.setOnClickListener(view -> {
          mMapActivity.createRoute(mLocations.get(position));
        });
        </code></pre>
    </mi-tab-panel>
    <mi-tab-panel id="kotlin">
        <h3>Kotlin</h3>
        <pre lang ="Kotlin"><code>
holder.itemView.setOnClickListener {
  mMapActivity.createRoute(mLocations.get(position))
}
        </code></pre>
    </mi-tab-panel>
</mi-tabs>

When we receive a result on our listener, we render the route through the `MPDirectionsRenderer`.

We create global variables of the `MPdirectionsRenderer` and `MPRoutingProvider` and create a getter to the `MPDirectionsRenderer` to access it from _fragments_ later on.

<mi-tabs>
    <mi-tab label="Java" tab-for="java"></mi-tab>
    <mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
    <mi-tab-panel id="java">
        <h3>Java</h3>
        <pre lang="Java"><code>
void createRoute(MPLocation mpLocation) {
    if (mpRoutingProvider == null) {
        mpRoutingProvider = new MPRoutingProvider();
      mpRoutingProvider.setOnRouteResultListener(this);
    }
    mpRoutingProvider.query(mUserLocation, mpLocation.getPoint());
}
/**
  * The result callback from the route query. Starts the rendering of the route and opens up a new instance of the navigation fragment on the bottom sheet.
  * @param route the route model used to render a navigation view.
  * @param miError an MIError if anything goes wrong when generating a route
  */
@Override
public void onRouteResult(@Nullable Route route, @Nullable MIError miError) {
    //Return if either error is not null or the route is null
    if (miError != null || route == null) {
        //TODO: Tell the user about the route not being able to be created etc.
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
    mNavigationFragment = NavigationFragment.newInstance(route, this);
    //Start a transaction and assign it to the BottomSheet
    getSupportFragmentManager().beginTransaction().replace(R.id.standardBottomSheet, mNavigationFragment).commit();
    if (btmnSheetBehavior.getState() == BottomSheetBehavior.STATE_HIDDEN) {
        btmnSheetBehavior.setState(BottomSheetBehavior.STATE_COLLAPSED);
    }
    //Assign the navigation fragment to current fragment. To handle ui logic
    currentFragment = mNavigationFragment;
    //As camera movement is involved run this on the UIThread
    runOnUiThread(()-> {
        //Starts drawing and adjusting the map according to the route
        mpDirectionsRenderer.initMap(true);
        mMapControl.setMapPadding(0, 0,0,btmnSheetBehavior.getPeekHeight());
    });
}
        </code></pre>
    </mi-tab-panel>
    <mi-tab-panel id="kotlin">
        <h3>Kotlin</h3>
        <pre lang ="Kotlin"><code>
class MapsActivity : FragmentActivity(), OnMapReadyCallback, OnRouteResultListener
        </code></pre>
    </mi-tab-panel>
</mi-tabs>

Now we will create a fragment we can put into our BottomSheet and show the steps for each route, as well as the time and distance it takes to travel the route.

Here we'll use a `viewpager` to allow the user to switch between each step, as well as display a "close" button so we are able to remove the route and the bottom sheet from the activity.

Route fragment view:

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content">
    <androidx.appcompat.widget.AppCompatTextView
        android:id="@+id/distanceTxt"
        android:layout_margin="5dp"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_alignParentStart="true"
        android:textColor="@color/black"/>
    <androidx.appcompat.widget.AppCompatTextView
        android:id="@+id/infoTxt"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_margin="5dp"
        android:textColor="@color/black"
        android:layout_below="@+id/distanceTxt"/>
    <ImageButton
        android:id="@+id/closeBtn"
        android:layout_width="30dp"
        android:layout_height="30dp"
        android:layout_alignParentEnd="true"
        android:background="@drawable/ic_baseline_close_24"/>
    <RelativeLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_below="@+id/infoTxt">
        <ImageButton
            android:id="@+id/arrow_back"
            android:layout_width="30dp"
            android:layout_height="30dp"
            android:background="@drawable/ic_baseline_keyboard_arrow_left_24"
            android:layout_centerVertical="true"
            android:layout_margin="5dp"/>
        <androidx.viewpager2.widget.ViewPager2
            android:id="@+id/view_pager"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_toEndOf="@id/arrow_back"
            android:layout_toStartOf="@+id/arrow_next"/>
        <ImageButton
            android:id="@+id/arrow_next"
            android:layout_width="30dp"
            android:layout_height="30dp"
            android:background="@drawable/ic_baseline_keyboard_arrow_right_24"
            android:layout_margin="5dp"
            android:layout_centerVertical="true"
            android:layout_alignParentEnd="true"/>
    </RelativeLayout>
</RelativeLayout>
```

RouteLeg fragment for the viewpager view:

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    tools:context=".RouteLegFragment">
    <androidx.appcompat.widget.AppCompatTextView
        android:id="@+id/from_text_view"
        android:layout_margin="10dp"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_centerInParent="true"
        android:textStyle="bold"/>
</RelativeLayout>
```

Create the Navigation `Fragment` with a `FragmentStateAdapter` for the `ViewPager`:

<mi-tabs>
    <mi-tab label="Java" tab-for="java"></mi-tab>
    <mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
    <mi-tab-panel id="java">
        <h3>Java</h3>
        <pre lang="Java"><code>
public class NavigationFragment extends Fragment {
    private Route mRoute;
    private MapsActivity mMapsActivity;
    public static NavigationFragment newInstance(Route route, MapsActivity mapsActivity) {
        final NavigationFragment fragment = new NavigationFragment();
        fragment.mRoute = route;
        fragment.mMapsActivity = mapsActivity;
        return fragment;
    }
    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }
    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container,
                             @Nullable Bundle savedInstanceState) {
        return inflater.inflate(R.layout.fragment_navigation_list_dialog, container, false);
    }
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
                mMapsActivity.getMpDirectionsRenderer().setRouteLegIndex(position);
                //Update the floor on mapcontrol if the floor might have changed for the routing
                mMapsActivity.getMapControl().selectFloor(mMapsActivity.getMpDirectionsRenderer().getCurrentFloor());
            }
        });
        //Assigning views
        TextView distanceTxtView = view.findViewById(R.id.distanceTxt);
        TextView infoTxtView = view.findViewById(R.id.infoTxt);
        ImageButton closeBtn = view.findViewById(R.id.closeBtn);
        ImageButton nextBtn = view.findViewById(R.id.arrow_next);
        ImageButton backBtn = view.findViewById(R.id.arrow_back);
        //Button for closing the bottom sheet. Clears the route through directionsRenderer as well, and changes map padding.
        closeBtn.setOnClickListener(v -> {
            mMapsActivity.getSupportFragmentManager().beginTransaction().remove(this).commit();
            mMapsActivity.getMpDirectionsRenderer().clear();
            mMapsActivity.getMapControl().setMapPadding(0,0,0,0);
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
        public RouteCollectionAdapter(Fragment fragment) {
            super(fragment);
        }
        @NonNull
        @Override
        public Fragment createFragment(int position) {
            return RouteLegFragment.newInstance(mRoute.getLegs().get(position));
        }
        @Override
        public int getItemCount() {
            return mRoute.getLegs().size();
        }
    }
}
        </code></pre>
    </mi-tab-panel>
    <mi-tab-panel id="kotlin">
        <h3>Kotlin</h3>
        <pre lang ="Kotlin"><code>
private val mUserLocation: Point = Point(38.897389429704695, -77.03740973527613, 0.0)
        </code></pre>
    </mi-tab-panel>
</mi-tabs>

Create the `RouteLegFragment` for the `ViewPager`:

<mi-tabs>
    <mi-tab label="Java" tab-for="java"></mi-tab>
    <mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
    <mi-tab-panel id="java">
        <h3>Java</h3>
        <pre lang="Java"><code>
public class RouteLegFragment extends Fragment {
    private RouteLeg mRouteLeg;
    public static RouteLegFragment newInstance(RouteLeg routeLeg) {
        RouteLegFragment fragment = new RouteLegFragment();
        fragment.mRouteLeg = routeLeg;
        return fragment;
    }
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_route_leg, container, false);
    }
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
        </code></pre>
    </mi-tab-panel>
    <mi-tab-panel id="kotlin">
        <h3>Kotlin</h3>
        <pre lang ="Kotlin"><code>
private val mUserLocation: Point = Point(38.897389429704695, -77.03740973527613, 0.0)
        </code></pre>
    </mi-tab-panel>
</mi-tabs>

<!-- Travel-mode -->
{% include "src/shared/getting-started/directions/travel-mode.md" %}

To swap Travel Modes you set the Travel Mode before making a query for the route:

<mi-tabs>
    <mi-tab label="Java" tab-for="java"></mi-tab>
    <mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
    <mi-tab-panel id="java">
        <h3>Java</h3>
        <pre lang="Java"><code>
mpRoutingProvider.setTravelMode(TravelMode.WALKING);
        </code></pre>
    </mi-tab-panel>
    <mi-tab-panel id="kotlin">
        <h3>Kotlin</h3>
        <pre lang ="Kotlin"><code>
private val mUserLocation: Point = Point(38.897389429704695, -77.03740973527613, 0.0)
        </code></pre>
    </mi-tab-panel>
</mi-tabs>
