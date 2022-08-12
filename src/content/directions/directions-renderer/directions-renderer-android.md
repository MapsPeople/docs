---
title: Directions Rendering for Android
toc: true
eleventyNavigation:
  key: android-directions-rendering
  parent: directions-renderer
  title: Directions Rendering for Android
  order: 10
---

When getting the resulting Route from a [Directions Service]({{ site.url }}/content/directions/directions-service/directions-service-android/), you may want to display this Route on a map. To perform this task the `MPDirectionsRenderer` can be used.

This example shows how to setup a query for a route and display the result on a Google Map using the `MPDirectionsRenderer`:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
void getRoute() {
    MPDirectionsService directionsService = new MPDirectionsService(this);
    MPDirectionsRenderer directionsRenderer = new MPDirectionsRenderer(mMapControl);

    MPPoint origin = new MPPoint(57.057917, 9.950361, 0.0);
    MPPoint destination = new MPPoint(57.058038, 9.950509, 0.0);

    directionsService.setRouteResultListener((route, error) -> {
        if (route != null) {
            directionsRenderer.setRoute(route);
        }
    });
    
    directionsService.query(origin, destination);
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
fun getRoute() {
    val directionsService = MPDirectionsService(this)
    val directionsRenderer = MPDirectionsRenderer(mMapControl)

    val origin = MPPoint(57.057917, 9.950361, 0.0)
    val destination = MPPoint(57.058038, 9.950509, 0.0)

    directionsService.setRouteResultListener { route, error ->
        route?.let { mpRoute -> 
            directionsRenderer.setRoute(mpRoute)    
        }
    }

    directionsService.query(origin, destination)
}
```

</mi-tab-panel>
</mi-tabs>

## Controlling the Visible Segments on the Directions Renderer

As previously mentioned, the route object is seperated into objects of `MPRouteLeg`. Each leg is again separated into objects of `MPRouteStep`. Unless the Route only contains one Leg, the Directions Renderer does not allow the full Route to be rendered all at once. A specific segment of the route can be rendered by setting the `legIndex` on the `MPDirectionsRenderer`

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java/1
void setLegIndex(int position) {
    mpDirectionsRenderer.selectLegIndex(position);
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin/1
fun setRouteLegIndex(position: Int) {
    mpDirectionsRenderer?.selectLegIndex(position)
}
```

</mi-tab-panel>
</mi-tabs>

The length of the `legs` array from `getLegs` on the `MPRoute` object determines the possible values of `routeLegIndex` (`0 ..< length`).

### Reacting to Label Tapping

**Directions Labels** refer to the labels shown at the end of the rendered route segment path, that may provide contextual information, or show instructions for a required user action at that point. The labels are created as simple `Marker` instances that are rendered as markers on the map. A user is able to long press these, and an event will be forwarded to the listener `OnLegSelectedListener` in `MPDirectionsRenderer`. This can be used to change the Leg to the next Leg in line on the Route.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java/3
void getRoute() {
    MPDirectionsService directionsService = new MPDirectionsService(this);
    MPDirectionsRenderer directionsRenderer = new MPDirectionsRenderer(mMapControl);

    MPPoint origin = new MPPoint(57.057917, 9.950361, 0.0);
    MPPoint destination = new MPPoint(57.058038, 9.950509, 0.0);

    directionsService.setRouteResultListener((route, error) -> {
        if (route != null) {
            directionsRenderer.setRoute(route);
        }
    });
    
    directionsRenderer.setOnLegSelectedListener(i -> {
        directionsRenderer.selectLegIndex(i);        
    });

    directionsService.query(origin, destination);
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin/3
fun getRoute() {
    val directionsService = MPDirectionsService(this)
    val directionsRenderer = MPDirectionsRenderer(mMapControl)

    val origin = MPPoint(57.057917, 9.950361, 0.0)
    val destination = MPPoint(57.058038, 9.950509, 0.0)

    directionsService.setRouteResultListener { route, error ->
        route?.let { mpRoute ->
            directionsRenderer.setRoute(mpRoute)
        }
    }

    directionsRenderer.setOnLegSelectedListener { 
        mpDirectionsRenderer?.selectLegIndex(it)
    }

    directionsService.query(origin, destination)
}
```

</mi-tab-panel>
</mi-tabs>

`MPDirectionsRenderer` also has convenience methods to change the active leg to previous and next Leg.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java/1,5
void nextLeg() {
    mpDirectionsRenderer.nextLeg();
}

void previousLeg() {
    mpDirectionsRenderer.previousLeg();
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin/1,5
fun nextLeg() {
    mpDirectionsRenderer?.nextLeg()
}

fun previousLeg() {
    mpDirectionsRenderer?.previousLeg()
}
```

</mi-tab-panel>
</mi-tabs>

## Show Content of Nearby Locations

It is possible to show contextual information on the end points of the rendered path of a route segment by configuring the directions renderer to look for nearby Locations or POIs.

This is done by creating an appropriate `MPContextualInfoSettings` object and passing that to the Directions Renderer. If it is not set or is null, no contextual information will be shown.

The `MPContextualInfoSetting` can be applied on `MPDirectionsRenderer` by calling `useContentOfNearbyLocations(MPContextualInfoSettings)`. Like this:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
//Sets the contextual info to be of locations that has the type "entries" and searches within a max distance of 30 meters from the end point of the current route segment
mpDirectionsRenderer.useContentOfNearbyLocations(new MPContextualInfoSettings.Builder()
        .setTypes(Collections.singletonList("entries"))
        .setMaxDistance(30.0)
        .build());
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
//Sets the contextual info to be of locations that has the type "entries" and searches within a max distance of 30 meters from the end point of the current route segment
mpDirectionsRenderer?.useContentOfNearbyLocations(MPContextualInfoSettings.Builder()
            .setTypes(Collections.singletonList("entries"))
            .setMaxDistance(30.0)
            .build())
```

</mi-tab-panel>
</mi-tabs>

The defaults of the `ContextualInfoSettings` builder are `maxDistance` at 5 meters and the `ContextualInfoScope` as icon and name. No Types or Categories are set as default. Not applying any Types or Categories will make it search through all Locations to use as contextual information.
