---
title: Create a search experience
toc: true
eleventyNavigation:
  title: Search
  key: android-v3-getting-started-search
  parent: android-v3-getting-started
  order: 140
---

<!-- Overview -->
{% include "src/shared/getting-started/search/overview.md" %}

<!-- Search -->
{% include "src/shared/getting-started/search/search.md" %}

Start by creating a new activity or fragment to facilitate searches on your application. Here we will be using a fragment to search and show search results on, and using a bottom sheet to display the results. We also create a search input field on our main map activity for the user to input the text they want to search for.

Both UI component implementations can be found in the getting started app sample.[Getting Started App sample](https://github.com/MapsIndoors/MapsIndoors-Getting-Started-Android/tree/master/app/src/main/java/com/example/mapsindoorsgettingstarted)

To perform a search you will need to have initiated `MapsIndoors`. This was shown in the previous section of the getting started tutorial how you do this. [guides]({{ site.url }}/android/v3/getting-started/map)

For advanced usage of the search functionality read the Search guide and tutorials connected to it. [guides]({{ site.url }}/android/v3/guides/search)

<!-- Results list -->
{% include "src/shared/getting-started/search/results-list.md" %}

Create a search method that takes a search string as a parameter. In this example we only use the `setTake` on the `MPFilter` to limit our result to 30 locations.

<mi-tabs>
    <mi-tab label="Java" tab-for="java"></mi-tab>
    <mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
    <mi-tab-panel id="java">
        <h3>Java</h3>
        <pre lang="Java"><code>
void search(String searchQuery) {
    //Query with a string to search on
    MPQuery mpQuery = new MPQuery.Builder().setQuery(searchQuery).build();
    //Filter for the search query, only taking 30 locations
    MPFilter mpFilter = new MPFilter.Builder().setTake(30).build();
    //Query for the locations
    MapsIndoors.getLocationsAsync(mpQuery, mpFilter, (list, miError) -> {
      //Implement UI handling of the search result here
    }
}
        </code></pre>
    </mi-tab-panel>
    <mi-tab-panel id="kotlin">
        <h3>Kotlin</h3>
        <pre lang ="Kotlin"><code>
fun search(searchQuery: String) {
    val mpQuery = MPQuery.Builder().setQuery(searchQuery).build()
    val mpFilter = MPFilter.Builder().setTake(30).build()
    MapsIndoors.getLocationsAsync(mpQuery, mpFilter) { locations, miError ->
        //Implement UI handling of the search result here
    }
}
        </code></pre>
    </mi-tab-panel>
</mi-tabs>

To be able to search we need a text input field where a user can write what they want to search for.

We'll start by adding a search bar on the top of our MapsActivity. So we add it to the root layout.

```xml
<RelativeLayout
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:elevation="1dp"
    android:background="@drawable/card_shape_top">
    <ImageButton
        android:id="@+id/search_btn"
        android:layout_margin="10dp"
        android:layout_width="40dp"
        android:layout_height="40dp"
        android:background="@drawable/ic_baseline_search_24"/>
    <com.google.android.material.textfield.TextInputLayout
        android:layout_margin="5dp"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_toEndOf="@+id/search_btn">
        <com.google.android.material.textfield.TextInputEditText
            android:id="@+id/search_edit_txt"
            android:hint="search"
            android:imeOptions="actionSearch"
            android:inputType="text"
            android:layout_width="match_parent"
            android:layout_height="wrap_content" />
    </com.google.android.material.textfield.TextInputLayout>
</RelativeLayout>
```

We then add an `EditorActionListener` and a `OnClickListener` to our text input field and our search button in our `onCreate`. That calls our search method with the text in the search input field. Find the full `onCreate` example here: [MapsActivity.java](https://github.com/MapsIndoors/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L55-L121)

<mi-tabs>
    <mi-tab label="Java" tab-for="java"></mi-tab>
    <mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
    <mi-tab-panel id="java">
        <h3>Java</h3>
        <pre lang="Java"><code>
...
//ClickListener to start a search, when the user clicks the search button
mSearchBtn.setOnClickListener(view -> {
    if (mSearchTxtField.getText().length() != 0) {
        //There is text inside the search field. So lets do the search.
        search(mSearchTxtField.getText().toString());
    }
});
//Listener for when the user searches through the keyboard
mSearchTxtField.setOnEditorActionListener((textView, i, keyEvent) -> {
    if (i == EditorInfo.IME_ACTION_DONE || i == EditorInfo.IME_ACTION_SEARCH) {
        if (textView.getText().length() != 0) {
            //There is text inside the search field. So lets do the search.
            search(textView.getText().toString());
        }
        return true;
    }
    return false;
});
...
        </code></pre>
    </mi-tab-panel>
    <mi-tab-panel id="kotlin">
        <h3>Kotlin</h3>
        <pre lang ="Kotlin"><code>
//TODO
        </code></pre>
    </mi-tab-panel>
</mi-tabs>

To accompany this we'll create a fragment and a `BottomSheet` to handle the `searchFragment`.

Start by creating a fragment with a view-only consisting of a `RecyclerView`.

```xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.recyclerview.widget.RecyclerView xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/list"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:clipToPadding="false"
    android:paddingTop="@dimen/list_item_spacing_half"
    android:paddingBottom="@dimen/list_item_spacing_half"
    tools:context=".SearchFragment"
    tools:listitem="@layout/fragment_search__list_item" />
```

<mi-tabs>
    <mi-tab label="Java" tab-for="java"></mi-tab>
    <mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
    <mi-tab-panel id="java">
        <h3>Java</h3>
        <pre lang="Java"><code>
public class SearchFragment extends Fragment {
    private List<MPLocation> mLocations = null;
    private MapsActivity mMapActivity = null;
    public static SearchFragment newInstance(List<MPLocation> locations, MapsActivity mapsActivity) {
        final SearchFragment fragment = new SearchFragment();
        fragment.mLocations = locations;
        fragment.mMapActivity = mapsActivity;
        return fragment;
    }
    ...
    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        final RecyclerView recyclerView = (RecyclerView) view;
        recyclerView.setLayoutManager(new LinearLayoutManager(getContext()));
        recyclerView.setAdapter(new SearchItemAdapter(mLocations, mMapActivity));
    }
    ...
}
        </code></pre>
    </mi-tab-panel>
    <mi-tab-panel id="kotlin">
        <h3>Kotlin</h3>
        <pre lang ="Kotlin"><code>
class SearchFragment : Fragment() {
    private lateinit var mLocations: List<MPLocation>
    private lateinit var mMapActivity: MapsActivity
    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        return inflater.inflate(R.layout.fragment_search_dialog_list_dialog, container, false)
    }
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        val recyclerView = view as RecyclerView
        recyclerView.layoutManager = LinearLayoutManager(context)
        recyclerView.adapter = SearchItemAdapter(mLocations, mMapActivity)
    }
    companion object {
        fun newInstance(locations: List<MPLocation>, mapsActivity: MapsActivity): SearchFragment {
            val fragment = SearchFragment()
            fragment.mLocations = locations
            fragment.mMapActivity = mapsActivity
            return fragment
        }
    }
}
        </code></pre>
    </mi-tab-panel>
</mi-tabs>

See the full example of SearchFragment here: [SearchFragment.java](https://github.com/MapsIndoors/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/SearchFragment.java)

Create a `RecyclerView` adapter and the accompanying `Viewholder`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_height="wrap_content"
    android:layout_width="match_parent">
    <ImageView
        android:layout_width="40dp"
        android:layout_height="40dp"
        android:id="@+id/location_image"/>
    <TextView
        android:id="@+id/text"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_toEndOf="@id/location_image"
        android:background="?attr/selectableItemBackground"
        android:paddingLeft="@dimen/list_item_spacing"
        android:paddingTop="@dimen/list_item_spacing_half"
        android:paddingRight="@dimen/list_item_spacing"
        android:paddingBottom="@dimen/list_item_spacing_half"
        android:textAppearance="@style/TextAppearance.AppCompat.Large"/>
</RelativeLayout>
```

<mi-tabs>
    <mi-tab label="Java" tab-for="java"></mi-tab>
    <mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
    <mi-tab-panel id="java">
        <h3>Java</h3>
        <pre lang="Java"><code>
class SearchItemAdapter extends RecyclerView.Adapter<ViewHolder> {
    private final List<MPLocation> mLocations;
    private final MapsActivity mMapActivity;
    ...
    @Override
    public void onBindViewHolder(ViewHolder holder, int position) {
        holder.text.setText(mLocations.get(position).getName());
        if (mMapActivity != null) {
            LocationDisplayRule locationDisplayRule = mMapActivity.getMapControl().getDisplayRule(mLocations.get(position));
            if (locationDisplayRule != null && locationDisplayRule.getIcon() != null) {
                mMapActivity.runOnUiThread(()-> {
                    holder.imageView.setImageBitmap(locationDisplayRule.getIcon());
                });
            }else {
                //Location does not have a special displayRule using type Display rule
                LocationDisplayRule typeDisplayRule = mMapActivity.getMapControl().getDisplayRule(mLocations.get(position).getType());
                if (typeDisplayRule != null) {
                    mMapActivity.runOnUiThread(()-> {
                        holder.imageView.setImageBitmap(typeDisplayRule.getIcon());
                    });
                }
            }
        }
    }
    ...
}
class ViewHolder extends RecyclerView.ViewHolder {
    ...
}
        </code></pre>
    </mi-tab-panel>
    <mi-tab-panel id="kotlin">
        <h3>Kotlin</h3>
        <pre lang ="Kotlin"><code>
internal class SearchItemAdapter(private val mLocations: List<MPLocation>, activity: MapsActivity?) : RecyclerView.Adapter<ViewHolder>() {
    private val mMapActivity: MapsActivity? = activity
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        return ViewHolder(LayoutInflater.from(parent.context), parent)
    }
    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        holder.text.text = mLocations[position].name
        holder.itemView.setOnClickListener { view: View? ->
            mMapActivity.createRoute(
                mLocations[position]
            )
        }
        if (mMapActivity != null) {
            val locationDisplayRule: LocationDisplayRule = mMapActivity.getMapControl().getDisplayRule(mLocations[position])
            if (locationDisplayRule != null && locationDisplayRule.icon != null) {
                mMapActivity.runOnUiThread({ holder.imageView.setImageBitmap(locationDisplayRule.icon) })
            }else {
                //Location does not have a special displayRule using type Display rule
                val typeDisplayRule: LocationDisplayRule = mMapActivity.getMapControl().getDisplayRule(mLocations[position].type)
                if (typeDisplayRule != null) {
                    mMapActivity.runOnUiThread({ holder.imageView.setImageBitmap(typeDisplayRule.icon) })
                }
            }
        }
    }
    override fun getItemCount(): Int {
        return mLocations.size
    }
}
internal class ViewHolder(inflater: LayoutInflater, parent: ViewGroup?) :
    RecyclerView.ViewHolder(inflater.inflate(R.layout.fragment_search__list_item, parent, false)) {
    val text: TextView
    val imageView: ImageView
    init {
        text = itemView.findViewById(R.id.text)
        imageView = itemView.findViewById(R.id.location_image)
    }
}
        </code></pre>
    </mi-tab-panel>
</mi-tabs>

See the full example of `SearchItemAdapter` and accompanying `ViewHolder` here: [SearchItemAdapter.java](https://github.com/MapsIndoors/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/SearchItemAdapter.java#L16-L75)

Implement a `BottomSheet` to the bottom of your `MapsActivity` Layout. The root of the view should be a `CoordinatorLayout`. You can find the full xml layout on [MapsActivity Layout](https://github.com/MapsIndoors/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/res/layout/activity_maps.xml)

```xml
    <FrameLayout
        android:id="@+id/standardBottomSheet"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:clickable="true"
        style="?attr/bottomSheetStyle"
        android:background="@drawable/card_shape_bottom"
        app:layout_behavior="com.google.android.material.bottomsheet.BottomSheetBehavior"
        app:behavior_hideable="true"
        android:focusable="true">
    </FrameLayout>
```

Now add the search fragment to the `BottomSheet` in the search query method on your `MapsActivity`.

<mi-tabs>
    <mi-tab label="Java" tab-for="java"></mi-tab>
    <mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
    <mi-tab-panel id="java">
        <h3>Java</h3>
        <pre lang="Java"><code>
void search(String searchQuery) {
    //Query with a string to search on
    MPQuery mpQuery = new MPQuery.Builder().setQuery(searchQuery).build();
    //Filter for the search query, only taking 30 locations
    MPFilter mpFilter = new MPFilter.Builder().setTake(30).build();
    //Query for the locations
    MapsIndoors.getLocationsAsync(mpQuery, mpFilter, (list, miError) -> {
        //Check if there is no error and the list is not empty
        if (miError == null && !list.isEmpty()) {
            //Create a new instance of the search fragment
            mSearchFragment = SearchFragment.newInstance(list, this);
            //Make a transaction to the bottomsheet
            getSupportFragmentManager().beginTransaction().replace(R.id.standardBottomSheet, mSearchFragment).commit();
            ...
        }
    }
}
        </code></pre>
    </mi-tab-panel>
    <mi-tab-panel id="kotlin">
        <h3>Kotlin</h3>
        <pre lang ="Kotlin"><code>
fun search(searchQuery: String) {
    val mpQuery = MPQuery.Builder().setQuery(searchQuery).build()
    val mpFilter = MPFilter.Builder().setTake(30).build()
    MapsIndoors.getLocationsAsync(mpQuery, mpFilter) { locations, miError ->
        locations?.let { locationList ->
                supportFragmentManager.beginTransaction().replace(R.id.standardBottomSheet, SearchFragment.newInstance(locationList, this)).commit()
                //Check if the bottom sheet is hidden.
                if (btmnSheetBehavior.getState() == BottomSheetBehavior.STATE_HIDDEN) {
                    btmnSheetBehavior.setState(BottomSheetBehavior.STATE_COLLAPSED);
                }
            }
    }
}
        </code></pre>
    </mi-tab-panel>
</mi-tabs>

See the full example of the search method here: [MapsActivity.java](https://github.com/MapsIndoors/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L185-L234)

<!-- Filter map -->
{% include "src/shared/getting-started/search/filter-map.md" %}

When getting a search result, you might want to only show those search results on the map. You can do this through calling `displaySearchResults(List<MPLocation> locations)` on `MapControl`. This method has different parameters to make it easier for you as a developer to fit your exact need in terms of animation and more. This can be read in the [JavaDoc of `MapControl`](https://app.mapsindoors.com/mapsindoors/reference/android/v3/com/mapsindoors/mapssdk/MapControl.html).

The standard implementation animates the camera to fit all Locations on the map and show the info window of a Location, if it's a list of only one Location.

When you are done showing the search results you can call `clearMap()` on `MapControl`.

<mi-tabs>
    <mi-tab label="Java" tab-for="java"></mi-tab>
    <mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
    <mi-tab-panel id="java">
        <h3>Java</h3>
        <pre lang="Java"><code>
mMapControl.displaySearchResults(locationList);
        </code></pre>
    </mi-tab-panel>
    <mi-tab-panel id="kotlin">
        <h3>Kotlin</h3>
        <pre lang ="Kotlin"><code>
mMapControl.displaySearchResults(locationList)
        </code></pre>
    </mi-tab-panel>
</mi-tabs>

The accompanying UI and implementation of this search experience can be found in the getting started app sample. [Getting Started App sample](https://github.com/MapsIndoors/MapsIndoors-Getting-Started-Android/tree/master/app/src/main/java/com/example/mapsindoorsgettingstarted).
