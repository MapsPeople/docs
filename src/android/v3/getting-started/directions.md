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

```java
private Point mUserLocation = new Point(38.897389429704695, -77.03740973527613,0);
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
private val mUserLocation: Point = Point(38.897389429704695, -77.03740973527613, 0.0)
```

</mi-tab-panel>
</mi-tabs>

Now we will make a method that can generate a route for us with just a Location (picked from the search list).
Start by implementing `OnRouteResultListener` to your MapsActivity.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
public class MapsActivity extends FragmentActivity implements OnMapReadyCallback, OnRouteResultListener
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
class MapsActivity : FragmentActivity(), OnMapReadyCallback, OnRouteResultListener
```

</mi-tab-panel>
</mi-tabs>

implement the `onRouteResult` method and create a method called `createRoute(MPLocation mpLocation)` To generate a route you can use with `MPRoutingProvider` to query a route with our hardcoded `mUserLocation` and a point from the MPLocation we call the method with later on.

To generate a route with the `MPLocation`, we start by creating an `onClickListener` on our search `ViewHolder` inside the `SearchItemAdapter` on `onBindViewHolder`. This calls a `createRoute` on our activity and the route is generated.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
holder.itemView.setOnClickListener(view -> {
          mMapActivity.createRoute(mLocations.get(position));
        });
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
holder.itemView.setOnClickListener {
  mMapActivity.createRoute(mLocations.get(position))
}
```

</mi-tab-panel>
</mi-tabs>

When we receive a result on our listener, we render the route through the `MPDirectionsRenderer`.

We create global variables of the `MPdirectionsRenderer` and `MPRoutingProvider` and create a getter to the `MPDirectionsRenderer` to access it from _fragments_ later on.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
void createRoute(MPLocation mpLocation) {
    if (mpRoutingProvider == null) {
        mpRoutingProvider = new MPRoutingProvider();
      mpRoutingProvider.setOnRouteResultListener(this);
    }
    mpRoutingProvider.query(mUserLocation, mpLocation.getPoint());
}
@Override
public void onRouteResult(@Nullable Route route, @Nullable MIError miError) {
    ...
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
    ...
    //As camera movement is involved run this on the UIThread
    runOnUiThread(()-> {
        //Starts drawing and adjusting the map according to the route
        mpDirectionsRenderer.initMap(true);
        ...
    });
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
class MapsActivity : FragmentActivity(), OnMapReadyCallback, OnRouteResultListener
```

</mi-tab-panel>
</mi-tabs>

See the full implementation of theese methods here: [MapsActivity.java](https://github.com/MapsIndoors/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L240-L288)

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

```java
public class NavigationFragment extends Fragment {
    private Route mRoute;
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
                mMapsActivity.getMpDirectionsRenderer().setRouteLegIndex(position);
                //Update the floor on mapcontrol if the floor might have changed for the routing
                mMapsActivity.getMapControl().selectFloor(mMapsActivity.getMpDirectionsRenderer().getCurrentFloor());
            }
        });
        ...
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
        ...
    }
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
private val mUserLocation: Point = Point(38.897389429704695, -77.03740973527613, 0.0)
```

</mi-tab-panel>
</mi-tabs>

See the full implementation of `NavigationFragment` and the accompanying adapter here: [NavigationFragment.java](https://github.com/MapsIndoors/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/NavigationFragment.java#L31-L117)

Create the `RouteLegFragment` for the `ViewPager`:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
public class RouteLegFragment extends Fragment {
    private RouteLeg mRouteLeg;
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

```kotlin
private val mUserLocation: Point = Point(38.897389429704695, -77.03740973527613, 0.0)
```

</mi-tab-panel>
</mi-tabs>

See the full implementation of the fragment here: [RouteLegFragment.java](https://github.com/MapsIndoors/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/RouteLegFragment.java#L23-L57)

<!-- Travel-mode -->
{% include "src/shared/getting-started/directions/travel-mode.md" %}

To swap Travel Modes you set the Travel Mode before making a query for the route:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
mpRoutingProvider.setTravelMode(TravelMode.WALKING);
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
private val mUserLocation: Point = Point(38.897389429704695, -77.03740973527613, 0.0)
```

</mi-tab-panel>
</mi-tabs>
