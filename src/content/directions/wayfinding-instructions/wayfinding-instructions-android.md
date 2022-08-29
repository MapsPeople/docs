---
title: Wayfinding Instructions for Android
eleventyNavigation:
  parent: wayfinding-instructions
  title: Wayfinding Instructions for Android
  key: wayfinding-instructions-android
  order: 10
---

This tutorial will show how to work with the route model returned from a directions service call. It will also show how you can utilize interactions between the route rendering on the map, and text-based instructions showed in another view.

This tutorial will be based off the **MapsIndoors Samples** example found here: [WayFinding](https://github.com/MapsPeople/MapsIndoors-Android-Examples/tree/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/wayfinding).

An example of the view XML file for the `WayfindingFragment` this guide will use can be found here: [Wayfinding view](https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/res/layout/fragment_wayfinding.xml).

First, create variables for `MPLocation` and `MPRoute` objects to use later in describing wayfinding. Also create a Variable for `MPDirectionsRenderer` so we can control rendering through changes in the `ViewPager`.

<mi-tabs>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/wayfinding/WayfindingFragment.kt#L31-L32">WayfindingFragment.kt</a>

```kotlin
private var mRoute: MPRoute? = null
private var mLocation: MPLocation? = null
```

</mi-tab-panel>
</mi-tabs>

Next step we will create the `Fragment` that will contain a short description of each Leg of the route inside the `ViewPager`

An example of the view XML file for the `RouteLegFragment`, that this guide will use, can be found here: [RouteLeg view](https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/res/layout/fragment_route_leg.xml).

We will start by adding the code inside the `WayfindingFragment`.

First, start by changing the code inside `onCreateView`.

<mi-tabs>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/wayfinding/WayfindingFragment.kt#L36-L57">WayfindingFragment.kt</a>

```kotlin
override fun onCreateView(view: View, @Nullable savedInstanceState: Bundle?) {
    _binding = FragmentWayfindingBinding.inflate(inflater, container, false)

    MapsIndoors.load(requireActivity().applicationContext, "gettingstarted", null)

    val routeLegAdapter = RouteCollectionAdapter(this)
    val viewPager = binding.stepViewPager
    viewPager.adapter = routeLegAdapter
    viewPager.registerOnPageChangeCallback(object : ViewPager2.OnPageChangeCallback() {
        override fun onPageSelected(position: Int) {
            super.onPageSelected(position)
        }
    })

    val root: View = binding.root
    val supportMapFragment = childFragmentManager.findFragmentById(R.id.map) as SupportMapFragment
    mMapView = supportMapFragment.view
    supportMapFragment.getMapAsync(this)
    return root
}
```

</mi-tab-panel>
</mi-tabs>

Next we will create `FragmentStateAdapter` that will be used on the `ViewPager` to contain `RouteLegFragments`

<mi-tabs>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/wayfinding/WayfindingFragment.kt#L169-L197">WayfindingFragment.kt</a>

```kotlin
inner class RouteCollectionAdapter(fragment: Fragment) : FragmentStateAdapter(fragment) {
    override fun getItemCount(): Int {
        mRoute?.legs?.let { legs->
            return legs.size
        }
        return 0
    }

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
}
```

</mi-tab-panel>
</mi-tabs>

Let's create a method to textually describe each Leg. This method creates a string that takes the first and last step of the next leg to create a description for the user on what to do at the end of the currently shown leg. You will also create a method to get a list of the different highway types the route can give the user. These are found as enums through the `MPHighway` class in the MapsIndoors SDK.

<mi-tabs>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/wayfinding/WayfindingFragment.kt#L120-L167">WayfindingFragment.kt</a>

```kotlin
fun getStepName(startStep: MPRouteStep, endStep: MPRouteStep): String {
    val startStepZindex: Double = startStep.startLocation!!.zIndex
    val startStepFloorName: String = startStep.startLocation.floorName!!
    var highway: String? = null
    for (actionName in getActionNames()) {
        if (startStep.highway == actionName) {
            highway = if (actionName == MPHighway.STEPS) {
                "stairs"
            } else {
                actionName
            }
        }
    }
    if (highway != null) {
        return java.lang.String.format(
            "Take %s to %s %s",
            highway,
            "level",
            if (endStep.endLocation.floorName!!.isEmpty()) endStep.endLocation.zIndex else endStep.endLocation.floorName
        )
    }
    if (startStepFloorName == endStep.endLocation.floorName) {
        return "Walk to next step"
    }
    val endStepFloorName: String = endStep.endLocation.floorName!!
    return if (endStepFloorName.isEmpty()) java.lang.String.format(
        "Level %s to %s",
        startStepFloorName.ifEmpty { startStepZindex },
        endStep.endPoint.floorIndex
    ) else String.format(
        "Level %s to %s",
        startStepFloorName.ifEmpty { startStepZindex },
        endStepFloorName
    )
}

private fun getActionNames(): ArrayList<String> {
    val actionNames: ArrayList<String> = ArrayList()
    actionNames.add(MPHighway.ELEVATOR)
    actionNames.add(MPHighway.ESCALATOR)
    actionNames.add(MPHighway.STEPS)
    actionNames.add(MPHighway.TRAVELATOR)
    actionNames.add(MPHighway.RAMP)
    actionNames.add(MPHighway.WHEELCHAIRLIFT)
    actionNames.add(MPHighway.WHEELCHAIRRAMP)
    actionNames.add(MPHighway.LADDER)
    return actionNames
}
```

</mi-tab-panel>
</mi-tabs>

Now, lets create the `RouteLegFragment` to give context for the Legs in the `WayfindingFragment`

<mi-tabs>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/wayfinding/RouteLegFragment.kt#L48-L56">RouteLegFragment.kt</a>

```kotlin/0-2,6-8
private var mStep: String? = null
private var mDuration: Int? = null
private var mDistance: Int? = null

companion object {
    @JvmStatic
    fun newInstance(step: String, distance: Int?, duration: Int?) =
        RouteLegFragment().apply {
            mStep = step
            mDistance = distance
            mDuration = duration
        }
}
```

</mi-tab-panel>
</mi-tabs>

You must also update the `onViewCreated` method to use the new views added earlier in the tutorial.

<mi-tabs>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/wayfinding/RouteLegFragment.kt#L30-L46">RouteLegFragment.kt</a>

```kotlin
override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
    super.onViewCreated(view, savedInstanceState)
    binding.stepTextView.text = mStep

    if (Locale.getDefault().country == "US") {
        binding.distanceTextView.text = (mDistance?.times(3.281))?.toInt().toString() + " feet"
    }else {
        binding.distanceTextView.text = mDistance?.toString() + " m"
    }
    mDuration?.let {
        if (it < 60) {
            binding.durationTextView.text = "$it sec"
        }else {
            binding.durationTextView.text = TimeUnit.MINUTES.convert(it.toLong(), TimeUnit.SECONDS).toString() + " min"
        }
    }
}
```

</mi-tab-panel>
</mi-tabs>

Now you have the revised UI for providing the user with a more explanatory route description when navigating. Now it needs to be rendered onto the map.

We will create a method named getRoute that queries a route between two location, we know exist on the current solution. When we receive the route we will assign the route to the fragment as well as calling `setRoute` on the `MPDirectionsRenderer` with the received Route. We will also notify the ViewPager that the route is updated with `notifyDataSetChanged`.

<mi-tabs>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/wayfinding/WayfindingFragment.kt#L98-L118">WayfindingFragment.kt</a>

```kotlin
fun getRoute() {
    val directionsService = MPDirectionsService(requireContext())
    if (mDirectionsRenderer == null) {
        mDirectionsRenderer = MPDirectionsRenderer(mMapControl!!)
    }

    directionsService.setRouteResultListener { mpRoute, miError ->
        if (miError == null && mpRoute != null) {
            mRoute = mpRoute
            mDirectionsRenderer?.setRoute(mpRoute)
            requireActivity().runOnUiThread {
                binding.stepViewPager.adapter?.notifyDataSetChanged()
            }
        }
    }
    val location = MapsIndoors.getLocationById("5a07435a4e074edc9396b2ff")
    mLocation = MapsIndoors.getLocationById("24ede0c9a5004a148bd01d96")
    if (location != null && mLocation != null) {
        directionsService.query(location.point, mLocation!!.point)
    }
}
```

</mi-tab-panel>
</mi-tabs>

To change the routing when swapping between tabs on the viewpager, use the call back that we added further up inside the `onViewCreated` of `NavigationFragment`.

<mi-tabs>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Android-Examples/blob/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/wayfinding/WayfindingFragment.kt#L41-L50">WayfindingFragment.kt</a>

```kotlin
val routeLegAdapter = RouteCollectionAdapter(this)
val viewPager = binding.stepViewPager
viewPager.adapter = routeLegAdapter
viewPager.registerOnPageChangeCallback(object : ViewPager2.OnPageChangeCallback() {
    override fun onPageSelected(position: Int) {
        super.onPageSelected(position)
        mDirectionsRenderer?.selectLegIndex(position)
        mDirectionsRenderer?.selectedLegFloorLevel
    }
})
```

</mi-tab-panel>
</mi-tabs>

You should now have a Fragment with a map that has a route rendered on it. With descriptions of each Leg of the Route inside a ViewPager that will display the Leg related to the page that is viewed.

The full working example can be found here: [WayFinding](https://github.com/MapsPeople/MapsIndoors-Android-Examples/tree/main/MapsIndoorsSamples/app/src/main/java/com/mapspeople/mapsindoorssamples/ui/wayfinding).