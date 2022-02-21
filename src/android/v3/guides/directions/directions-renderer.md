---
title: Directions Rendering
eleventyNavigation:
  key: android-v3-guides-directions-renderer
  parent: android-v3-guides-directions
  title: Directions Rendering
  order: 20
---

When getting the resulting Route from a [Directions Service](../directions/directions-service), you may want to display this Route on a map. To perform this task the `MPDirectionsRenderer` can be used.

This example shows how to setup a query for a route and display the result on a Google Map using the `MPDirectionsRenderer`:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
void getRoute() {
    MPRoutingProvider directionsService = new MPRoutingProvider();
    MPDirectionsRenderer directionsRenderer = new MPDirectionsRenderer(mContext, mGoogleMap, mMapControl, null);

    Point origin = new Point(57.057917, 9.950361, 0.0);
    Point destination = new Point(57.058038, 9.950509, 0.0);

    directionsService.setOnRouteResultListener((route, error) -> {
        if (route != null) {
            directionsRenderer.setRoute(route);
            runOnUiThread( ()-> {
                directionsRenderer.initMap(true);
            }
        }
    });

    directionsService.query(origin, destination);
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
fun getRoute() {
    val directionsService = MPRoutingProvider()
    val renderer = MPDirectionsRenderer(this, mMap, mMapControl, null)

    val origin = Point(57.057917, 9.950361, 0.0)
    val destination = Point(57.058038, 9.950509, 0.0)

    directionsService.setOnRouteResultListener { route, miError ->
        route?.let { mpRoute ->
            renderer.setRoute(mpRoute)
            runOnUiThread {
                renderer.initMap(true)
            }
        }
    }
    directionsService.query(origin, destination)
}
```

</mi-tab-panel>
</mi-tabs>

## Controlling the Visible Segments on the Directions Renderer

As previously mentioned, the route object is seperated into objects of `RouteLeg`. Each leg is again separated into objects of `RouteStep`. Unless the Route only contains one Leg, the Directions Renderer does not allow the full Route to be rendered all at once. A specific segment of the route can be rendered by setting the `routeLegIndex` on the `MPDirectionsRenderer`

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java/1
void setLegIndex(int position) {
    mpDirectionsRenderer.setRouteLegIndex(position);
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin/1
fun setRouteLegIndex(position: Int) {
    mpDirectionsRenderer?.setRouteLegIndex(position)
}
```

</mi-tab-panel>
</mi-tabs>

The length of the `legs` array from `getLegs` on the `Route` object determines the possible values of `routeLegIndex` (`0 ..< length`).

### Reacting to Label Tapping

**Directions Labels** refer to the labels shown at the end of the rendered route segment path, that may provide contextual information, or show instructions for a required user action at that point. The labels are created as simple `Marker` instances that are rendered as markers on the map. A user is able to long press these, and an event will be forwarded to the listener you can supply when creating `MPDirectionsRenderer`. This can be used to change the Leg to the next Leg in line on the Route.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java/3
void getRoute() {
    MPRoutingProvider directionsService = new MPRoutingProvider();
    mpDirectionsRenderer = new MPDirectionsRenderer(mContext, mGoogleMap, mMapControl, legIndex -> {
        mpDirectionsRenderer.nextLeg();
    });

    Point origin = new Point(57.057917, 9.950361, 0.0);
    Point destination = new Point(57.058038, 9.950509, 0.0);

    directionsService.setOnRouteResultListener((route, error) -> {
        if (route != null) {
            mpDirectionsRenderer.setRoute(route);
            runOnUiThread( ()-> {
                mpDirectionsRenderer.initMap(true);
            }
        }
    });

    directionsService.query(origin, destination);
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin/3
fun getRoute() {
    val directionsService = MPRoutingProvider()
    mpDirectionsRenderer = MPDirectionsRenderer(this, mMap, mMapControl, OnLegSelectedListener {
        mpDirectionsRenderer?.nextLeg()
    })

    val origin = Point(57.057917, 9.950361, 0.0)
    val destination = Point(57.058038, 9.950509, 0.0)

    directionsService.setOnRouteResultListener { route, miError ->
        route?.let { mpRoute ->
            mpDirectionsRenderer?.setRoute(mpRoute)
            runOnUiThread {
                mpDirectionsRenderer?.initMap(true)
            }
        }
    }
    directionsService.query(origin, destination)
}
```

</mi-tab-panel>
</mi-tabs>

On the `MPDirectionsRenderer` there is convenience methods to change the legs to previous and next Leg. This means you do not have to take care of the size of legs.

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

The MPContextualInfoSetting can be applied on `MPDirectionsRenderer` by calling `useContentOfNearbyLocations(MPContextualInfoSettings)`. Like this:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
//Sets the contextual info to be of locations that has the type "entries" and searches within a max distance of 30 meters from the end point of the current route segment
mDirectionsRenderer.useContentOfNearbyLocations(new MPContextualInfoSettings.Builder()
            .setMaxDistance(30.0)
            .setTypes(Collections.singletonList("entries"))
            .build());
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
//Sets the contextual info to be of locations that has the type "entries" and searches within a max distance of 30 meters from the end point of the current route segment
mDirectionsRenderer?.useContentOfNearbyLocations(MPContextualInfoSettings.Builder()
            .setMaxDistance(30.0)
            .setTypes(Collections.singletonList("entries"))
            .build())
```

</mi-tab-panel>
</mi-tabs>

The defaults of the `ContextualInfoSettings` builder is `maxDistance` at 5 meters and the `ContextualInfoScope` as icon and name. No Types or Categories is set as default. Not applying any will make it search through all Locations to use as contextual information.
