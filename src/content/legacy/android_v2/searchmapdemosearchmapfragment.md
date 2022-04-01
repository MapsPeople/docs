---
title: Create a Search Experience with MapsIndoors - Part 2
eleventyNavigation:
  parent: legacy-androidv2
  key: android v2 Create a Search Experience with MapsIndoors - Part 2
  title: Create a Search Experience with MapsIndoors - Part 2
---

This is part 2 of the tutorial of creating a simple search experience using MapsIndoors. [In Part 1 we created the search Fragment](/android/v2/searchmapdemosearchfragment/). Now we will create the "main" controller displaying the map and eventually the selected location.

Start by creating a Fragment

```java
public class SearchMapFragment extends Fragment
```

Add a `GoogleMap` and a `MapControl` to the class

```java
MapControl mMapControl;
GoogleMap mGoogleMap;
```

Add other needed views for this example

```java
SupportMapFragment mMapFragment;
Button searchButton;
Location locationToSelect = null;
```

A listener to report the click on the search Button to the activity

```java
private OnFragmentInteractionListener mListener;
```

The lat lng of the Venue

```java
static final LatLng VENUE_LAT_LNG = new LatLng( 57.05813067, 9.95058065 );
```

Setting the API key to the desired Solution

```java
if( !MapsIndoors.getAPIKey().equalsIgnoreCase( getString( R.string.mi_api_key ) ) )
{
    MapsIndoors.setAPIKey( getString( R.string.mi_api_key ) );
}
if( getActivity() == null )
{
    return;
}
```

Instanciate the MapControl object

```java
mMapControl = new MapControl( getActivity(), mMapFragment, mGoogleMap );
```

* init the MapControl object which will sync data.
* When the init is done, if the 'locationToSelect' is not null we call the 'mMapControl.selectLocation()' to select the desired location otherwise select a floor

```java
mMapControl.init( miError -> {
    if( miError == null )
    {
        Activity context = getActivity();
        if( context != null )
        {
            context.runOnUiThread(() -> {
                mGoogleMap.animateCamera( CameraUpdateFactory.newLatLngZoom( VENUE_LAT_LNG, 20f ) );
                if( locationToSelect != null )
                {
                    mMapControl.selectLocation( locationToSelect );
                    locationToSelect = null;
                }
                else
                {
                    mMapControl.selectFloor( 1 );
                }
            });
        }
    }
});
```

A public method to select a location

```java
public void selectLocation(Location loc){
    locationToSelect = loc;
}
```

[See the sample in SearchMapFragment.java](https://github.com/mapspeople/MapsIndoorsAndroid-Demo-Samples/blob/master/app/src/main/java/com/mapsindoors/searchmapdemo/SearchMapFragment.java)
