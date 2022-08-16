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

Setup member variables for `FullscreenSearchFragment`:

* A RecyclerView to contain the locations
* The Adapter and LayoutManager for the RecyclerView
* Some view components

```kotlin
private lateinit var mRecyclerView: RecyclerView
private lateinit var mLinearLayoutManager: LinearLayoutManager
private val mAdapter: MPSearchItemRecyclerViewAdapter = MPSearchItemRecyclerViewAdapter()

private lateinit var searchInputTextView: TextInputEditText

private var searchHandler: Handler? = null

```

Init and setup the `RecyclerView`:

```kotlin
mRecyclerView = binding.searchList
mLinearLayoutManager = LinearLayoutManager(requireContext())
mRecyclerView.apply {
    layoutManager = mLinearLayoutManager
    adapter = mAdapter
}
```

Init and setup the view components to handle searching inside the `onViewCreated`

```kotlin
searchInputTextView = binding.searchInputEditText

val imm = requireActivity().getSystemService(Activity.INPUT_METHOD_SERVICE) as InputMethodManager
searchInputTextView.addTextChangedListener {
    searchHandler = Handler(Looper.myLooper()!!)
    searchHandler!!.postDelayed(searchRunner, 1000)
}
searchInputTextView.setOnEditorActionListener { textView, i, keyEvent ->
    if (i == EditorInfo.IME_ACTION_DONE || i == EditorInfo.IME_ACTION_SEARCH) {
        if (textView.text.isNotEmpty()) {
            search(textView.text.toString())
        }
        //Making sure keyboard is closed.
        imm.hideSoftInputFromWindow(textView.windowToken, 0)

        return@setOnEditorActionListener true
    }
    return@setOnEditorActionListener false
}
```

create a Runnable to execute a search

```kotlin
private val searchRunner: Runnable = Runnable {
    val text = searchInputTextView.text
    if (text?.length!! >= 2) {
        search(text.toString())
    }
}
```

Add a listener to the Adapter for when a user selects a location, to navigate back to the map and show the selected location. Here we use navigation together with a bundle to tell the other fragment of the selected location

```kotlin
mAdapter.setOnLocationSelectedListener { location ->
    if (location != null) {
        val bundle = Bundle()
        bundle.putString("locationId", location.locationId)
        findNavController().navigate(R.id.action_nav_search_fullscreen_to_nav_search, bundle)
        return@setOnLocationSelectedListener true
    }
    return@setOnLocationSelectedListener false
}
```

[See the sample in SearchFragment.java](https://github.com/mapspeople/MapsIndoorsAndroid-Demo-Samples/blob/master/app/src/main/java/com/mapsindoors/searchmapdemo/SearchFragment.java)

Now we will implement the `FullscreenSearchFragment` together with our Fragment or Activity containing a MapsIndoors Map.

Add a Button to open the `FullscreenSearchFragment` inside your Activity or Fragment view and a assign a Click listener to it.

```kotlin
binding.searchButton.setOnClickListener {
    openSearchFragment()
}
```

Create the `openSearchFragment` method to navigate to the `FullScreenSearchFragment`

```kotlin
private fun openSearchFragment() {
    val navController = findNavController()
    navController.navigate(R.id.action_nav_search_to_nav_search_fullscreen)
}
```

Finally create a way to handle the selected location when a user is navigated to your fragment again. How this example is set up the Map will be reloaded when navigated to it. Therefor we will handle the selection after `MapControl` is created.

```kotlin
MapControl.create(mapConfig) { mapControl: MapControl?, miError: MIError? ->
    mMapControl = mapControl
    //Enable Live Data on the map
    if (miError == null) {
        var locationId = arguments?.get("locationId") as String?
        if (locationId != null) {
            mMapControl?.selectLocation(locationId, MPSelectionBehavior.DEFAULT)
        }else {
            //No errors so getting the first venue (in the white house solution the only one)
            val venue = MapsIndoors.getVenues()?.defaultVenue
            activity?.runOnUiThread {
                if (venue != null) {
                    //Animates the camera to fit the new venue
                    mMap!!.animateCamera(
                        CameraUpdateFactory.newLatLngBounds(
                            LatLngBoundsConverter.toLatLngBounds(venue.bounds!!),
                            19
                        )
                    )
                }
            }
        }
    }
}
```

[See the sample in SearchMapFragment.java](https://github.com/mapspeople/MapsIndoorsAndroid-Demo-Samples/blob/master/app/src/main/java/com/mapsindoors/searchmapdemo/SearchMapFragment.java)
