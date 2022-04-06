---
title: Show User's Location for Android
eleventyNavigation:
  key: map-live-data-blue-dot-android
  parent: map-live-data
  title: Show User's Location for Android
  order: 100
---

In this tutorial we will show how you can show a blue dot on the map, representing the user's location. The position will be served from a mocked positioning provider and displayed on a map in a view controller.

We will start by creating our implementation of a positioning provider.

Create the class `DemoPositionProvider` that implements `PositionProvider`:

```java
public class DemoPositionProvider implements PositionProvider
```

Add some member variables to `DemoPositionProvider`:

* `mPositionUpdateListener`: The listener object
* `isRunning`: A running state boolean flag
* `mLatestPosition`: The latest positioning result
* `mPositionUpdateTimer`: A timer so we can update the position of the user within an time interval

```java
OnPositionUpdateListener mPositionUpdateListener;
boolean isRunning = false;
MPPositionResult mLatestPosition;
MPPositionResult fixedPosition =  new MPPositionResult(
        new Point( 57.05813067, 9.95058065  ),
        0,
        0
);
Timer mPositionUpdateTimer = new Timer();
```

Implement the `addOnPositionUpdateListener`. Assign the `mPositionUpdateListener` inside the method with the `PositionUpdateListener` from the method:

```java
@Override
public void addOnPositionUpdateListener( @Nullable OnPositionUpdateListener listener ) {
    mPositionUpdateListener = listener;
}
```

Create a method called `updatePosition`. This will be our "loop" constantly posting a new position to the delegate:

* Check if the provider has a running state
* Assign the `fixedPosition` value to `mLatestPosition`
* Notify the listener by calling `onPositionUpdate` passing the new position as argument

```java
void updatePosition(){
    if(isRunning){
        mLatestPosition = fixedPosition;
        mLatestPosition.setProvider( this );
        if (mPositionUpdateListener != null) {
            mPositionUpdateListener.onPositionUpdate(mLatestPosition);
        }
    }
}
```

Implement the `isPSEnabled` method to check is the Positioning system is working or not, in this case the PS is always working since it's a mocked positioning provider.

```java
@Override
public boolean isPSEnabled() {
    return true ;
}
```

Implement the `startPositioning` method. We set the `running` boolean to true and schedule the repeating task of updating the user position by calling the updatePosition every 3 seconds:

```java
@Override
public void startPositioning(@Nullable String arg) {
    isRunning = true;
    // Set the schedule function and rate
    mPositionUpdateTimer.scheduleAtFixedRate( new TimerTask() {
        @Override
        public void run() {
            updatePosition();
        }
    }, 0, 3000 );
}
```

Implement the `stopPositioning` method. We set the `running` boolean to false and stop the timer:

```java
@Override
public void stopPositioning(@Nullable String arg) {
    isRunning = false;
    mPositionUpdateTimer.cancel();
}
```

Implement the `isRunning` method. Return the value of `isRunning`:

```java
@Override
public boolean isRunning() {
    return isRunning ;
}
```

[See the sample in DemoPositionProvider.java](https://github.com/mapspeople/MapsIndoorsAndroid-Demo-Samples/blob/master/app/src/main/java/com/mapsindoors/showuserLocation/DemoPositionProvider.java)

Now we will create a Fragment displaying a map that shows the users (mock) location.

Create the class `ShowUserLocationFragment` that inherits from `Fragment`:

```java
public class ShowUserLocationFragment extends Fragment {
```

Add a `GoogleMap` and a `MapControl` to the class:

```java
GoogleMap mGoogleMap;
MapControl mMapControl;
```

Add a map fragment:

```java
SupportMapFragment mMapFragment;
```

The Venue's coordinates:

```java
static final LatLng VENUE_LAT_LNG = new LatLng( 57.05813067, 9.95058065 );
```

In the `onDestroyView` method, we need to free the MapsIndoors PositionProvider:

```java
MapsIndoors.setPositionProvider( null );
```

Set the API key to the MapsIndoors Solution:

```java
if( !MapsIndoors.getAPIKey().equalsIgnoreCase( getString( R.string.mi_api_key ) ) )
{
    MapsIndoors.setAPIKey( getString( R.string.mi_api_key ) );
}
```

Instantiate the mapControl object:

```java
mMapControl = new MapControl( context );
mMapControl.setGoogleMap( mGoogleMap, mMapFragment.getView() );
```

Create an instance of the 'DemoPositionProvider' that we defined previously:

```java
DemoPositionProvider demoPositionProvider = new DemoPositionProvider();
```

Assign the `DemoPositionProvider` instance to the `MapsIndoors.positionProvider` by calling the 'MapsIndoors.setPositionProvider':

```java
MapsIndoors.setPositionProvider( demoPositionProvider );
```

Tell the mapControl to show the users location:

```java
mMapControl.showUserPosition( true );
```

Init the mapControl object:

```java
mMapControl.init( miError -> {
    if( miError == null )
    {
        final Activity _context = getActivity();
        if( _context != null )
        {
            mMapControl.selectFloor( 1 );
            mGoogleMap.animateCamera( CameraUpdateFactory.newLatLngZoom( VENUE_LAT_LNG, 20f ) );
```

Start positioning:

```java
demoPositionProvider.startPositioning(null);
```

[See the sample in ShowUserLocationFragment.java](https://github.com/mapspeople/MapsIndoorsAndroid-Demo-Samples/blob/master/app/src/main/java/com/mapsindoors/showuserLocation/ShowUserLocationFragment.java)
