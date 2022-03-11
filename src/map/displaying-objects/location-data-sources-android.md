---
title: Location Data Sources for Android
eleventyNavigation:
  parent: map-displaying-objects
  key: map-displaying-objects-location-sources-android
  title: Location Data Sources for Android
  order: 40
---

In this tutorial we will show how you can build a custom Location Source, representing locations of people. The people's locations will be served from a mocked list in the source and displayed on a map.

We will start by creating our implementation of a location source.

Create the class `PeopleLocationDataSource` that implements `MPLocationSource`:

```java
public class PeopleLocationDataSource implements MPLocationSource {
```

First we need to predefine some attributes:

* `BASE_POSITION`: We need a base position as a start for the Locations
* `RANGE_MAX_LAT_OFFSET`: A max latitude offset to put a limit on how far the Locations can move on the latitude axis.
* `RANGE_MAX_LNG_OFFSET`: A max longitude offset to put a limit on how far the Locations can move on the longitude axis.
* `LOCATIONS_COUNT`: The number of Locations desired
* `LOCATION_SOURCE_ID`: a unique  location source ID
* `LOCATION_TYPE`: a type for the locations of this source
* `LOCATION_CLUSTER_ID`: A cluster ID that will let locations from this source cluster together on the map in case of overlap.
* `DISPLAY_RULE`: The display rule for the locations of this source.

```java
private static final LatLng BASE_POSITION        = new LatLng( 57.0582502, 9.9504788 );
private static final double RANGE_MAX_LAT_OFFSET = 0.000626 / 4;
private static final double RANGE_MAX_LNG_OFFSET = 0.0003384 / 2;
private static final int    LOCATIONS_COUNT      = 20;
private static final int    LOCATION_SOURCE_ID   = 2000;
private static final String LOCATION_TYPE        = "PeopleLocationType";
public static final int     LOCATION_CLUSTER_ID  = 1;
static final LocationDisplayRule DISPLAY_RULE = new LocationDisplayRule.Builder( LOCATION_TYPE ).
        setBitmapDrawableIcon( R.drawable.generic_user ).
        setVisible( true ).
        setShowLabel( false ).
        setZoomLevelOn( 18 ).
        setLocationClusterId( LOCATION_CLUSTER_ID ).
        setDisplayRank( 1 ).
        build();
// People avatar icons
@DrawableRes
private final int[] peopleAvatars = new int[]{
        R.drawable.ic_avatar_1,
        R.drawable.ic_avatar_2,
        R.drawable.ic_avatar_3,
        R.drawable.ic_avatar_4,
        R.drawable.ic_avatar_5
};
```

Then we need to add some variables:

* `observers`: We need a base position as a start for the Locations.
* `locationsList`: A max latitude offset to put a limit on how far the Locations can move on the latitude axis.
* `status`: holds the status of the location data source.
* `mDataUpdateTimer`: Timer that we will need to plan some recurrent updates.
* `dynamicLocations`: a List of DynaLocations that will carry the dynamic side of the locations.
* `random`: used to generate some random values in the data creation and editing.

```java
@NonNull
private List<MPLocationsObserver> observers;
private List<MPLocation> locationsList;
private MPLocationSourceStatus status;
private Timer mDataUpdateTimer;
private List<DynaLocation> dynamicLocations;
private Random random = new Random();
```

Create the DynaLocation class that represents the moving Locations with a position and a heading:

```java
class DynaLocation
{
    LatLng pos;
    double heading;
    DynaLocation( @NonNull LatLng pos, double heading )
    {
        this.pos = pos;
        this.heading = heading;
    }
}
PeopleLocationDataSource() {
    this.locationsList = new ArrayList<>( LOCATIONS_COUNT );
    this.observers = new ArrayList<>();
    this.status = MPLocationSourceStatus.NOT_INITIALIZED;
}
```

Create the `startUpdatingPositions` method that simply calls `updateLocations` every second:

```java
void startUpdatingPositions() {
    if (!setup()) {
        return;
    }
    if (mDataUpdateTimer != null) {
        mDataUpdateTimer.cancel();
        mDataUpdateTimer = null;
    }
    mDataUpdateTimer = new Timer();
    mDataUpdateTimer.scheduleAtFixedRate( new TimerTask() {
        @Override
        public void run() {
            updateLocations();
        }
    }, 2000, 1000 );
}
```

Create a method that can stop the positions updates at any time:

```java
void stopUpdatingPositions() {
    if (mDataUpdateTimer != null) {
        mDataUpdateTimer.cancel();
        mDataUpdateTimer.purge();
    }
}
```

Create a method called `setup` that will:

* Make sure that the data source was not already initialized and data is loaded.
* Create the locations.
* Make the first notification.
* Change the status to available

```java
private boolean setup()
{
    if( this.status != MPLocationSourceStatus.NOT_INITIALIZED ) {
        return true;
    }
    final BuildingCollection buildingCollection = MapsIndoors.getBuildings();
    final boolean gotBuildings = buildingCollection != null;
    if (!gotBuildings) {
        return false;
    }
    locationsList.clear();
    locationsList.addAll( generateLocations( false ) );
    notifyUpdateLocations( locationsList );
    setStatus( MPLocationSourceStatus.AVAILABLE );
    return true;
}
```

Create a method called `updateLocations` that will update the position of the Locations:

```java
void updateLocations() {
    // make sure that that the MapsIndoors is ready and that everything is well set
    if (!MapsIndoors.isReady()) {
        return;
    }
    // Create a list where we are gonna put the updated locations
    final List<MPLocation> updatedList = new ArrayList<>();
    // First time, generate info
    final int locationListSize = locationsList.size();
    if ((dynamicLocations == null) && (locationListSize > 0)) {
        dynamicLocations = new ArrayList<>(locationListSize);
        for (int i = 0; i < locationListSize; i++) {
            final MPLocation Location = locationsList.get(i);
            double ang = (i * 10.0) % 360.0;
            dynamicLocations.add(i, new DynaLocation(Location.getLatLng(), ang));
        }
    }
    for (int i = 0, LocationCount = locationsList.size(); i < LocationCount; i++) {
        final MPLocation p = locationsList.get(i);
        // "Update" a Location MPLocation by using the copy/edit builder
        final MPLocation.Builder updatedLoc = new MPLocation.Builder(p);
        final DynaLocation dp = dynamicLocations.get(i);
        final LatLng dpOldPos = dp.pos;
        double newHeading = dp.heading;
        LatLng newPos = SphericalUtil.computeOffset(dpOldPos, 2, dp.heading);
        // Check limits, if the new position is outside the limit, then we will generate a new heading and calculate a new offset
        if ((Math.abs(BASE_POSITION.latitude - newPos.latitude) > RANGE_MAX_LAT_OFFSET) ||
                (Math.abs(BASE_POSITION.longitude - newPos.longitude) > RANGE_MAX_LNG_OFFSET)) {
            newHeading += (180.0 + (random.nextInt() * 15));
            newHeading = newHeading % 360;
            newPos = SphericalUtil.computeOffset(newPos, 1, newHeading);
        }
        dp.pos = newPos;
        dp.heading = newHeading;
        // set the new position with an animation time
        updatedLoc.setPosition(dp.pos, 1000);
        // Add the updated Location to the updatedLoc list
        updatedList.add(updatedLoc.build());
    }
    // Update the current locations list
    locationsList.clear();
    locationsList.addAll(updatedList);
    // Give a notification
    notifyUpdateLocations(updatedList);
}
```

Create a method called `generateLocations`. Iterate numberOfPeople and for each iteration create:

* An MPLocation Builder with an id
* A random position according to the 'randomizeStartingPosition' parameter
* A name
* A type - later used to style the location
* A floor Index
* A building

```java
@NonNull
private List<MPLocation> generateLocations( boolean randomizeStartingPosition )
{
    final List<MPLocation> peopleLocations = new ArrayList<>( LOCATIONS_COUNT );
    final BuildingCollection buildingCollection = MapsIndoors.getBuildings();
    final boolean gotBuildingData = buildingCollection != null;
    final int avatarIconsCount = peopleAvatars.length;
    int avatarCurrentIndex = 0;
    for ( int i = 0; i < LOCATIONS_COUNT; i++) {
        final String personName = getPersonName();
        final LatLng personPosition;
        if (randomizeStartingPosition) {
            personPosition = getRandomPosition();
        } else {
            personPosition = BASE_POSITION;
        }
        final MPLocation.Builder locBuilder = new MPLocation.Builder(""+ LOCATION_SOURCE_ID + i);
        locBuilder.setPosition(personPosition).
                setName(personName).
                setType( LOCATION_TYPE );
        // give an icon to the Location
        final @DrawableRes int currentAvatarIcon = peopleAvatars[avatarCurrentIndex];
        avatarCurrentIndex = (avatarCurrentIndex + 1) % avatarIconsCount;
        locBuilder.setVectorDrawableIcon(currentAvatarIcon, 32, 32);
        if (gotBuildingData) {
            // Find a building at this location (personPosition)
            final Building building = buildingCollection.getBuilding(personPosition);
            if (building != null) {
                // Building found at this location, get the list of floors in it
                final List<Floor> floors = building.getFloors();
                // Choose a random floor
                final Floor floor = floors.get((int) (Math.random() * (floors.size())));
                // Set the Location floor
                locBuilder.setFloor((floor != null) ? floor.getZIndex() : Floor.DEFAULT_GROUND_FLOOR_INDEX);
                // Set the building name where this Location is in
                locBuilder.setBuilding(building.getName());
            } else {
                // If this location was outside a building, set its floor/z index to zero (ground floor)
                locBuilder.setFloor(Floor.DEFAULT_GROUND_FLOOR_INDEX);
            }
        } else {
            // If this location was outside a building, set its floor/z index to zero (ground floor)
            locBuilder.setFloor(Floor.DEFAULT_GROUND_FLOOR_INDEX);
        }
        peopleLocations.add(locBuilder.build());
    }
    return peopleLocations;
}
```

Create a method called `getPersonName` that simply just returns a random name selected from the arrays below:

```java
// lists of names and last names
private final String[] FIRST_NAMES = {"John", "Joe", "Javier", "Mike", "Janet", "Susan", "Cristina", "Michelle"};
private final String[] LAST_NAMES = {"Smith", "Jones", "Andersson", "Perry", "Brown", "Hill", "Moore", "Baker"};
private String getPersonName() {
    final int firstNameIndex = random.nextInt(FIRST_NAMES.length);
    final int lastNameIndex = random.nextInt(LAST_NAMES.length);
    return String.format("%1s %2s", FIRST_NAMES[firstNameIndex], LAST_NAMES[lastNameIndex]);
}
```

Create a method called `getRandomPosition` that simply just returns a random LatLng (here within proximity of the demo venue):

```java
private LatLng getRandomPosition() {
    final double lat = BASE_POSITION.latitude + (-4 + random.nextInt(20)) * 0.000005;
    final double lng = BASE_POSITION.longitude + (-4 + random.nextInt(20)) * 0.000010;
    return new LatLng(lat, lng);
}
```

Create a method called `notifyUpdateLocations` to loop all the observers and notify them with an update:

```java
private void notifyUpdateLocations(List<MPLocation> updatedLocations) {
    for (int i = observers.size(); --i >= 0; ) {
        observers.get(i).onLocationsUpdated(updatedLocations, this);
    }
}
```

The same thing for notifying observers with new status. Create a method called `notifyLocationStatusChanged` to loop all the observers and notify them with a status change:

```java
private void notifyLocationStatusChanged(@NonNull MPLocationSourceStatus prevStatus, @NonNull MPLocationSourceStatus newStatus) {
    for (int i = observers.size(); --i >= 0; ) {
        observers.get(i).onStatusChanged(newStatus, this);
    }
}
```

Sets the internal state and notifies a status changed message if applies:

```java
private void setStatus(@NonNull MPLocationSourceStatus newStatus) {
    MPLocationSourceStatus cStatus = status;
    if (cStatus != newStatus) {
        status = newStatus;
        notifyLocationStatusChanged(cStatus, newStatus);
    }
}
```

Implement the MPLocationSource method `getLocations`:

```java
@NonNull
@Override
public List<MPLocation> getLocations() {
    return locationsList;
}
```

Implement the MPLocationSource method `addLocationObserver`:

```java
@Override
public void addLocationsObserver(@Nullable MPLocationsObserver observer) {
    if (observer != null) {
        observers.remove(observer);
        observers.add(observer);
    }
}
```

Implement the MPLocationSource method `removeLocationObserver`:

```java
@Override
public void removeLocationsObserver(@Nullable MPLocationsObserver observer) {
    if (observer != null) {
        observers.remove(observer);
    }
}
```

Implement the MPLocationSource method `getStatus`:

```java
@NonNull
@Override
public MPLocationSourceStatus getStatus() {
    return status;
}
```

Implement the MPLocationSource method `getSourceId`:

```java
@Override
public int getSourceId() {
    return LOCATION_SOURCE_ID;
}
```

[See the sample in PeopleLocationDataSource.java](https://github.com/mapspeople/MapsIndoorsAndroid-Demo-Samples/blob/master/app/src/main/java/com/mapsindoors/locationdatasources/PeopleLocationDataSource.java)

Now we will create another location source that represents batteries. The power level of the batteries will be changing over time and it needs to be visible on the map realtime.

We will start by creating our implementation of a location source.

Create the class `BatteriesLocationDataSource` that implements `MPLocationSource`:

```java
public class BatteriesLocationDataSource implements MPLocationSource {
```

First we need to predefine some attributes:

* `BASE_POSITION`: We need a base position as a start for the Locations.
* `LOCATIONS_COUNT`: The number of locations desired.
* `LOCATION_SOURCE_ID`: a unique  location source ID.
* `LOCATION_TYPE`: a type for the locations of this source.
* `LOCATION_CLUSTER_ID`: A cluster ID that will let locations from this source cluster together on the map in case of overlap.
* `DISPLAY_RULE`: The display rule for the locations of this source.

```java
private static final LatLng BASE_POSITION       = new LatLng( 57.0579814, 9.9504668 );
private static final int    LOCATIONS_COUNT     = 20;
private static final int    LOCATION_SOURCE_ID  = 10000;
private static final String LOCATION_TYPE       = "BatteryLocationType";
private static final int    LOCATION_CLUSTER_ID = 2;
static final LocationDisplayRule DISPLAY_RULE = new LocationDisplayRule.Builder( LOCATION_TYPE ).
        setVectorDrawableIcon( R.drawable.ic_battery_60_black_24dp ).
        setVisible( true ).
        setShowLabel( false ).
        setZoomLevelOn( 16 ).
        setLocationClusterId( LOCATION_CLUSTER_ID ).
        setDisplayRank( 1 ).
        build();
```

Then we need to add some variables:

* `observers`: The observer objects that we will notify about changes.
* `locationsList`: A list of MPLocation - Will have the list of the MPLocations up to date.
* `status`: holds the status of the location data source.
* `random`: Used to generate some random values in the data creation and editing.
* `mDataUpdateTimer`: Timer that we will need to plan some recurrent updates.
* `iconCurrentIndex`: An index for icons so we can update the locations with
the same icon each time.

```java
@NonNull
private List<MPLocationsObserver> observers;
private List<MPLocation> locationsList;
private MPLocationSourceStatus status;
private Random random = new Random();
private Timer mDataUpdateTimer;
private int iconCurrentIndex = 0;
BatteriesLocationDataSource() {
    this.locationsList = new ArrayList<>( LOCATIONS_COUNT );
    this.observers = new ArrayList<>();
    this.status = MPLocationSourceStatus.NOT_INITIALIZED;
}
```

Create the `startUpdatingIcons` method that simply calls `updateLocations` every half a second.

```java
void startUpdatingIcons() {
    if (!setup()) {
        return;
    }
    if (mDataUpdateTimer != null) {
        mDataUpdateTimer.cancel();
        mDataUpdateTimer = null;
    }
    mDataUpdateTimer = new Timer();
    mDataUpdateTimer.scheduleAtFixedRate(new TimerTask() {
        @Override
        public void run() {
            updateLocations();
        }
    }, 2000, 500 );
}
```

Create a method that can stop the icons update at any time.

```java
void stopUpdatingIcons() {
    if (mDataUpdateTimer != null) {
        mDataUpdateTimer.cancel();
        mDataUpdateTimer.purge();
    }
}
```

Create a method called `setup` that will:

* Make sure that data source was not already initialized and data is loaded.
* Create the locations.
* Make the first notification.
* Change the status to available.

```java
private boolean setup()
{
    if( this.status != MPLocationSourceStatus.NOT_INITIALIZED ) {
        return true;
    }
    final BuildingCollection buildingCollection = MapsIndoors.getBuildings();
    final boolean gotBuildings = buildingCollection != null;
    if( !gotBuildings ) {
        return false;
    }
    locationsList.clear();
    locationsList.addAll( generateLocations( true ) );
    notifyUpdateLocations( locationsList );
    setStatus( MPLocationSourceStatus.AVAILABLE );
    return true;
}
// Icons
@DrawableRes
final int[] icons = new int[]{
        R.drawable.ic_battery_20_black_24dp,
        R.drawable.ic_battery_30_black_24dp,
        R.drawable.ic_battery_50_black_24dp,
        R.drawable.ic_battery_60_black_24dp,
        R.drawable.ic_battery_80_black_24dp,
        R.drawable.ic_battery_90_black_24dp,
        R.drawable.ic_battery_full_black_24dp
};
```

Create a method called `updateLocations`. Iterate number again and for each iteration:

* Get the corresponding MPLocation Builder
* Set a new position
* Generate an MPLocation from a MPLocation.Builder
* Call the notifyUpdateLocations with the updated list.

```java
void updateLocations() {
    if (!MapsIndoors.isReady()) {
        return;
    }
    final int locCount = locationsList.size();
    final List<MPLocation> updatedList = new ArrayList<>(locCount);
    int iColor = 0;
    @DrawableRes int currentIcon = 0;
    // Icon and tint color (animated)
    final int availableIconsCount = icons.length;
    // the color tint will vary
    iColor = ColorUtils.blendARGB(0xff2DD855, 0xffFF3700, ((1f * iconCurrentIndex) / availableIconsCount));
    currentIcon = icons[iconCurrentIndex];
    iconCurrentIndex = (iconCurrentIndex + 1) % availableIconsCount;
    for (int i = 0, LocationCount = locationsList.size(); i < LocationCount; i++) {
        final MPLocation p = locationsList.get( i );
        // "Update" an MPLocation by using the copy/edit builder
        final MPLocation.Builder updatedLocation = new MPLocation.Builder( p );
        // Change the icon & tint color
        updatedLocation.
                // Specify a size
                setVectorDrawableIcon( currentIcon, 32, 32 ).
                // Specify the tint color
                setTint( iColor );
        updatedList.add( updatedLocation.build() );
    }
    locationsList.clear();
    locationsList.addAll( updatedList );
    notifyUpdateLocations( updatedList );
}
```

Create a method called `generateLocations`:

* An MPLocation.Builder with an id
* A random position
* A name
* A type - later used to style the location
* A floor Index
* A building

```java
@NonNull
private List<MPLocation> generateLocations( boolean randomizeStartingPosition )
{
    final List<MPLocation> peopleLocations = new ArrayList<>( LOCATIONS_COUNT );
    final BuildingCollection buildingCollection = MapsIndoors.getBuildings();
    final boolean gotBuildingData = buildingCollection != null;
    for ( int i = 0; i < LOCATIONS_COUNT; i++) {
        final LatLng personPosition;
        if (randomizeStartingPosition) {
            personPosition = getRandomPosition();
        } else {
            personPosition = BASE_POSITION;
        }
        final MPLocation.Builder locBuilder = new MPLocation.Builder( "" + LOCATION_SOURCE_ID + i );
        locBuilder.setPosition( personPosition ).
                setName( "Battery" + i ).
                setType( LOCATION_TYPE );
        if (gotBuildingData) {
            // Find a building at this location (personPosition)
            final Building building = buildingCollection.getBuilding(personPosition);
            if (building != null) {
                // Building found at this location, get the list of floors in it
                final List<Floor> floors = building.getFloors();
                // Choose a random floor
                final Floor floor = floors.get((int) (Math.random() * (floors.size())));
                // Set the Location floor
                locBuilder.setFloor((floor != null) ? floor.getZIndex() : Floor.DEFAULT_GROUND_FLOOR_INDEX);
                // Set the building name where this Location is in
                locBuilder.setBuilding( building.getName() );
            } else {
                // If this location was outside a building, set its floor/z index to zero (ground floor)
                locBuilder.setFloor( Floor.DEFAULT_GROUND_FLOOR_INDEX );
            }
        } else {
            // If this location was outside a building, set its floor/z index to zero (ground floor)
            locBuilder.setFloor( Floor.DEFAULT_GROUND_FLOOR_INDEX );
        }
        peopleLocations.add( locBuilder.build() );
    }
    return peopleLocations;
}
```

Create a method called `getRandomPosition` that simply returns a random LatLng (here within proximity of the demo venue):

```java
private LatLng getRandomPosition() {
    final double lat = BASE_POSITION.latitude + (-4 + random.nextInt(20)) * 0.000005;
    final double lng = BASE_POSITION.longitude + (-4 + random.nextInt(20)) * 0.000010;
    return new LatLng(lat, lng);
}
```

Create a method called `notifyUpdateLocations` to loop all the observers and notify them with an update:

```java
private void notifyUpdateLocations( List<MPLocation> updatedLocations ) {
    for( int i = observers.size(); --i >= 0; ) {
        observers.get( i ).onLocationsUpdated( updatedLocations, this );
    }
}
```

The same thing for notifying observers with new status

```java
private void notifyLocationStatusChanged( @NonNull MPLocationSourceStatus prevStatus, @NonNull MPLocationSourceStatus newStatus ) {
    for( int i = observers.size(); --i >= 0; ) {
        observers.get( i ).onStatusChanged( newStatus, this );
    }
}
```

Sets the internal state and notifies a status changed message if applies:

```java
private void setStatus( @NonNull MPLocationSourceStatus newStatus ) {
    MPLocationSourceStatus cStatus = status;
    if (cStatus != newStatus) {
        status = newStatus;
        notifyLocationStatusChanged( cStatus, newStatus );
    }
}
```

Implement the MPLocationSource method `getLocations`. This List will always contain the up to date MPLocations:

```java
@NonNull
@Override
public List<MPLocation> getLocations() {
    return locationsList;
}
```

Implement the MPLocationSource method `addLocationObserver`:

```java
@Override
public void addLocationsObserver(@Nullable MPLocationsObserver observer) {
    if (observer != null) {
        observers.remove(observer);
        observers.add(observer);
    }
}
```

Implement the MPLocationSource method `removeLocationObserver`:

```java
@Override
public void removeLocationsObserver(@Nullable MPLocationsObserver observer) {
    if (observer != null) {
        observers.remove(observer);
    }
}
```

Implement the MPLocationSource method `getStatus`:

```java
@NonNull
@Override
public MPLocationSourceStatus getStatus() {
    return status;
}
```

Implement the MPLocationSource method `getSourceId`:

```java
@Override
public int getSourceId() {
    return LOCATION_SOURCE_ID;
}
```

[See the sample in BatteriesLocationDataSource.java](https://github.com/mapspeople/MapsIndoorsAndroid-Demo-Samples/blob/master/app/src/main/java/com/mapsindoors/locationdatasources/BatteriesLocationDataSource.java)

Now we will create a Fragment displaying a map that shows the mocked people locations and the batteries on top of a MapsIndoors map.

Create the class `LocationDataSourcesFragment` that extends `Fragment`:

```java
public class LocationDataSourcesFragment extends Fragment {
```

Add a `GoogleMap` and a `MapControl` to the class:

```java
MapControl mMapControl;
GoogleMap mGoogleMap;
```

Add other needed views for this example:

```java
SupportMapFragment mMapFragment;
```

The Venue's coordinates:

```java
static final LatLng VENUE_LAT_LNG = new LatLng(57.05813067, 9.95058065);
```

Location Data Sources objects:

```java
PeopleLocationDataSource peopleLocationDataSource;
BatteriesLocationDataSource batteriesLocationDataSource;
```

Once the map is ready, move the camera to the venue's location and call setupMapsIndoors:

```java
OnMapReadyCallback mOnMapReadyCallback = new OnMapReadyCallback() {
    @Override
    public void onMapReady( GoogleMap googleMap )
    {
        mGoogleMap = googleMap;
        mGoogleMap.moveCamera( CameraUpdateFactory.newLatLngZoom( VENUE_LAT_LNG, 13.0f ) );
        setupMapsIndoors();
    }
};
```

Create a method `setupMapsIndoors` and:

* Initialize MapsIndoors.
* Set the Google API Key (used by the routing provider).
* Set a listener on the internal location data source service. Location data is not available at the same time other data (building info, etc.) is
* Invoke the location sources and call `setupMapControl` when ready

```java
void setupMapsIndoors() {
    final Activity context = getActivity();
    if ((context == null) || (mMapFragment == null) || (mMapFragment.getView() == null)) {
        return;
    }
    // Sets the SDK to a "clean" state. In most cases, this is not needed
    MapsIndoors.onApplicationTerminate();
    MapsIndoors.initialize( DemoApplication.getInstance(), getString( R.string.mi_api_key ) );
    MapsIndoors.setGoogleAPIKey( getString( R.string.google_maps_key ) );
    // Set a listener to observe for location source status changes. In this example, we need to know when locations are
    // ready (MPLocationSourceStatus.AVAILABLE) so we can start updating/animating them
    MapsIndoors.addLocationSourceOnStatusChangedListener( locationSourceOnStatusChangedListener );
    setupLocationDataSources( error -> setupMapControl() );
}
```

Create a method `setupLocationDataSources`:

* Instantiate `PeopleLocationDataSource` and `BatteriesLocationDataSource`
* Set/register the location sources

```java
void setupLocationDataSources( @NonNull OnResultReadyListener listener ) {
    Set<MPLocationSource> locationDataSources = new HashSet<>( 2 );
    peopleLocationDataSource = new PeopleLocationDataSource();
    locationDataSources.add( peopleLocationDataSource );
    batteriesLocationDataSource = new BatteriesLocationDataSource();
    locationDataSources.add( batteriesLocationDataSource );
    MapsIndoors.setLocationSources( locationDataSources.toArray( new MPLocationSource[0] ), error -> {
        final FragmentActivity context = getActivity();
        if (context != null) {
            context.runOnUiThread(() -> {
                if (error != null) {
                    Toast.makeText(context, "Error occurred when setting the Datasources", Toast.LENGTH_SHORT).show();
                }
                listener.onResultReady(error);
            });
        }
    });
}
```

Create a method `setupMapControl`:

* Instantiate MapControl.
* Add the custom display rules used by the location sources.
* Initialize the `MapControl.init()` object which will synchronize the data.

```java
void setupMapControl() {
    final Activity activityContext = getActivity();
    if ((activityContext == null) || (mMapFragment == null)) {
        return;
    }
    mMapControl = new MapControl( activityContext );
    mMapControl.setGoogleMap( mGoogleMap, mMapFragment.getView() );
    mMapControl.addDisplayRule( PeopleLocationDataSource.DISPLAY_RULE );
    mMapControl.addDisplayRule( BatteriesLocationDataSource.DISPLAY_RULE );
    mMapControl.init( null );
}
```

Add `locationSourceOnStatusChangedListener`:

* Once location data from our custom sources becomes available, start updating them
* Select the first floor and move the camera to the Venue's position

```java
final MPLocationSourceOnStatusChangedListener locationSourceOnStatusChangedListener = new MPLocationSourceOnStatusChangedListener() {
    @Override
    public void onStatusChanged( @NonNull MPLocationSourceStatus status, int sourceId ) {
        if ( status == MPLocationSourceStatus.AVAILABLE ) {
            final Activity context = getActivity();
            if (context != null) {
                context.runOnUiThread(() -> {
                    peopleLocationDataSource.startUpdatingPositions();
                    batteriesLocationDataSource.startUpdatingIcons();
                    // Select a floor and animate the camera to the venue's position
                    mMapControl.selectFloor( 1 );
                    mGoogleMap.animateCamera( CameraUpdateFactory.newLatLngZoom( VENUE_LAT_LNG, 20f ) );
                });
            }
        }
    }
};
```

Implement the `onDestroyView` method to stop updating the location sources:

```java
@Override
public void onDestroyView() {
    if (mMapControl != null) {
        peopleLocationDataSource.stopUpdatingPositions();
        batteriesLocationDataSource.stopUpdatingIcons();
        MapsIndoors.removeLocationSourceOnStatusChangedListener( locationSourceOnStatusChangedListener );
        mMapControl.onDestroy();
        MapsIndoors.onApplicationTerminate();
        MapsIndoors.initialize( DemoApplication.getInstance(), getString( R.string.mi_api_key ) );
    }
    super.onDestroyView();
}
```

[See the sample in LocationDataSourcesFragment.java](https://github.com/mapspeople/MapsIndoorsAndroid-Demo-Samples/blob/master/app/src/main/java/com/mapsindoors/locationdatasources/LocationDataSourcesFragment.java)
