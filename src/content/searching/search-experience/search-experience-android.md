---
title: Create a Search Experience with Android
eleventyNavigation:
  parent: searching-search-experience
  key: searching-search-experience-android
  title: Create a Search Experience with Android
  order: 10
---

This is an example of creating a simple search experience using MapsIndoors. We will create a map with a search button that leads to another Fragment that handles the search and selection. On selection of a location, we go back to the map and shows the selected location on the map.

First create a Fragment or Activity with a map and MapsIndoors loaded.

We will create a Fragment that will contain a textInput field and a RecyclerView that will show a list of `MPLocations` received from the search.

```kotlin
class FullscreenSearchFragment : Fragment() {
```

As we will be using a `RecyclerView` we will need to create a `RecyclerView Adapter` to show our Location results. In this guide we will hijack the Adapter from the Template app:

```kotlin
class MPSearchItemRecyclerViewAdapter : RecyclerView.Adapter<MPSearchItemRecyclerViewAdapter.ViewHolder>() {
    private var mLocations: List<MPLocation> = ArrayList()
    private lateinit var context: Context
    private var mOnLocationSelectedListener: OnLocationSelectedListener? = null

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        context = parent.context
        return ViewHolder(FragmentSearchItemBinding.inflate(LayoutInflater.from(parent.context), parent, false))
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val item = mLocations[position]
        var iconUrl = getTypeIcon(item)
        iconUrl?.let {
            MapsIndoors.getImageProvider().loadImageAsync(it) { bitmap, error ->
                if (bitmap != null && error == null) {
                    holder.icon.setImageBitmap(bitmap)
                }
            }
        }

        holder.nameView.text = item.name

        if (item.floorName != null && item.buildingName != null) {
            val buildingName = MapsIndoors.getBuildings()?.getBuilding(item.point.latLng)?.name
            if (buildingName != null) {
                holder.subTextView.text = "Floor: " + item.floorName + " - " + buildingName
            }else {
                holder.subTextView.text = "Floor: " + item.floorName + " - " + item.buildingName
            }
        }else {
            holder.subTextView.visibility = View.GONE
        }

        holder.itemView.setOnClickListener {
            if (mOnLocationSelectedListener != null) {
                mOnLocationSelectedListener?.onLocationSelected(item)
            }
        }
    }

    private fun getTypeIcon(mpLocation: MPLocation): String? {
        MapsIndoors.getSolution()?.let {
            it.types?.forEach { type ->
                if (mpLocation.type?.equals(type.name, true) == true) {
                    return type.icon
                }
            }
        }
        return null
    }

    fun setOnLocationSelectedListener(onLocationSelectedListener: OnLocationSelectedListener) {
        mOnLocationSelectedListener = onLocationSelectedListener
    }

    override fun getItemCount(): Int = mLocations.size

    fun setLocations(locations: List<MPLocation>) {
        mLocations = locations;
    }

    fun clear() {
        mLocations = ArrayList()
        notifyDataSetChanged()
    }

    inner class ViewHolder(binding: FragmentSearchItemBinding) :
        RecyclerView.ViewHolder(binding.root) {
        val icon: ImageView = binding.locationIconView
        val nameView: TextView = binding.locationName
        val subTextView: TextView = binding.locationSubtext

        override fun toString(): String {
            return super.toString() + " '" + subTextView.text + "'"
        }
    }
}
```

Setup member variables for `SearchFragment`:

* The selection listener
* A List View to show the search result
* Some view components

```java
OnFragmentInteractionListener mListener;
ListView mMainMenuList;
View mMainView;
EditText mSearchEditTextView;
ImageButton mSearchClearBtn;
IconTextListAdapter mListAdapter;
ViewFlipper mViewFlipper;
ImageButton mBackButton;

```

Init and setup the listView:

```java
mListAdapter = new IconTextListAdapter( getContext(), new ArrayList<>() );
mMainMenuList.setAdapter( mListAdapter );
mMainMenuList.setClickable( true );
mMainMenuList.setOnItemClickListener( mAdapterViewOnItemClickListener );
mMainMenuList.invalidate();
```

Init and setup the view components for a better search experience.

Note: Creating a TextWatcher as it's needed for software keyboard support:

```java
mSearchEditTextView.addTextChangedListener( mEditTextViewTextWatcher );
mSearchEditTextView.setOnFocusChangeListener( mEditTextViewOnFocusChangeListener );
```

Close keyboard and search when user presses search on the keyboard:

```java
mSearchEditTextView.setOnEditorActionListener( mEditTextViewOnEditorActionListener );
```

Close keyboard and search when user presses enter:

```java
mSearchEditTextView.setOnKeyListener( mEditTextOnKeyListener );
```

Clear search button:

```java
mSearchClearBtn.setOnClickListener( mClearSearchButtonClickListener );
mSearchClearBtn.setOnFocusChangeListener( mClearSearchButtonFocusChangeListener );
```

Whenever a user clicks a search result the 'onUserSelectedLocation' of the FragmentInteractionListener is called:

```java
AdapterView.OnItemClickListener mAdapterViewOnItemClickListener = new AdapterView.OnItemClickListener()
{
    @Override
    public void onItemClick( AdapterView<?> parent, View view, int position, long id )
    {
        closeKeyboard();
        if( mListener != null ) {
            mListener.onUserSelectedLocation( (MPLocation) mListAdapter.getItem( position ) );
        }
    }
};

```

Declare an interface that will handle the communication between the fragment and the activity:

```java
public interface OnFragmentInteractionListener
{
    void onUserSelectedLocation( @Nullable MPLocation loc );
}
@NonNull
public static SearchFragment newInstance()
{
    return new SearchFragment();
}
```

[See the sample in SearchFragment.java](https://github.com/mapspeople/MapsIndoorsAndroid-Demo-Samples/blob/master/app/src/main/java/com/mapsindoors/searchmapdemo/SearchFragment.java)

Now we will create the "main" controller displaying the map and eventually the selected location.

Start by creating a Fragment:

```java
public class SearchMapFragment extends Fragment
//
{
```

Add a `GoogleMap` and a `MapControl` to the class:

```java
MapControl mMapControl;
GoogleMap mGoogleMap;
```

Add other needed views for this example:

```java
SupportMapFragment mMapFragment;
Button searchButton;
MPLocation locationToSelect = null;
```

A listener to report the click on the search Button to the activity:

```java
private OnFragmentInteractionListener mListener;
```

The Venue's coordinates:

```java
static final LatLng VENUE_LAT_LNG = new LatLng( 57.05813067, 9.95058065 );
```

Setting the API key to the desired Solution:

```java
if( !MapsIndoors.getAPIKey().equalsIgnoreCase( getString( R.string.mi_api_key ) ) )
{
    MapsIndoors.setAPIKey( getString( R.string.mi_api_key ) );
}
```

Instantiate the MapControl object:

```java
mMapControl = new MapControl( context );
mMapControl.setGoogleMap( mGoogleMap, mMapFragment.getView() );
// Enable the search button only once location data becomes available
MapsIndoors.addLocationSourceOnStatusChangedListener( locationSourceOnStatusChangedListener );
```

* Initialize the MapControl object which will sync data.
* When the init is done, if the 'locationToSelect' is not null we call the 'mMapControl.selectLocation()' to select the desired location, otherwise select a floor

```java
mMapControl.init( miError -> {
    if( miError == null )
    {
        final Activity _context = getActivity();
        if( _context != null )
        {
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
        }
    }
});
```

A public method to select a location:

```java
public void selectLocation( MPLocation loc )
{
    locationToSelect = loc;
}
```

[See the sample in SearchMapFragment.java](https://github.com/mapspeople/MapsIndoorsAndroid-Demo-Samples/blob/master/app/src/main/java/com/mapsindoors/searchmapdemo/SearchMapFragment.java)
