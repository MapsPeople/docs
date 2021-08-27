---
title: Create a search experience
toc: true
eleventyNavigation:
  title: Search
  key: android-v4-getting-started-search
  parent: android-v4-getting-started
  order: 140
---

<!-- Overview -->
{% include "src/shared/getting-started/search/overview.md" %}

<!-- Search -->
{% include "src/shared/getting-started/search/search.md" %}

Start by creating a new activity or _fragment_ to facilitate searches on your application. Here we will be using a _fragment_ for search and show to search results on, while using a bottom sheet to display the results. We also create a search input field on our main map _activity_ for the user to input the text they want to search for.
This is already setup in the basic example app.

To perform a search you will need to have initiated `MapsIndoors`. This was shown in the previous section of the getting started tutorial how you do this. [Show a map]({{ site.url }}/android/v4/getting-started/map)

For advanced usage of the search functionality read the Search guide and tutorials connected to it: [Search Guide]({{ site.url }}/android/v4/guides/search)

<!-- Results list -->
{% include "src/shared/getting-started/search/results-list.md" %}

Create a search method that takes a search string as a parameter on your `MapsActivity` class. In this example we only use the `setTake` on the `MPFilter` to limit our result to 30 locations. We will expand on this method later.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L191-L239">MapsActivity.java</a>

```java
void search(String searchQuery) {
    //Query with a string to search on
    MPQuery mpQuery = new MPQuery.Builder().setQuery(searchQuery).build();
    //Filter for the search query, only taking 30 locations
    MPFilter mpFilter = new MPFilter.Builder().setTake(30).build();
    //Gets locations
    MapsIndoors.getLocationsAsync(mpQuery, mpFilter, (list, miError) -> {
    //Implement UI handling of the search result here
    }
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/main/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/MapsActivity.kt#L146-L190">MapsActivity.kt</a>

```kotlin
private fun search(searchQuery: String) {
    //Query with a string to search on
    val mpQuery = MPQuery.Builder().setQuery(searchQuery).build()
    //Filter for the search query, only taking 30 locations
    val mpFilter = MPFilter.Builder().setTake(30).build()

    //Gets locations
    MapsIndoors.getLocationsAsync(mpQuery, mpFilter) {
            list: List<MPLocation?>?, miError: MIError? ->
      //Implement UI handling of the search result here
    }
}
```

</mi-tab-panel>
</mi-tabs>

To be able to search we will use a text input field where a user can write what they want to search for. This is placed at the top of the MapsActivity

To call our search method with the text in the search input field, we then add an `EditorActionListener` and a `OnClickListener` to the text input field and the search button in the `onCreate` of `MapsActivity`. Find the full `onCreate` example here: [MapsActivity.java](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L57-L120) or [MapsActivity.kt](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/main/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/MapsActivity.kt#L43-L108)

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L73-L94">MapsActivity.java</a>

```java
...
//ClickListener to start a search, when the user clicks the search button
searchBtn.setOnClickListener(view -> {
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
        //Making sure keyboard is closed.
        return true;
    }
    return false;
});
...
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/main/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/MapsActivity.kt#L62-L85">MapsActivity.kt</a>

```kotlin
...
//Listener for when the user searches through the keyboard
mSearchTxtField.setOnEditorActionListener { textView, i, _ ->
    if (i == EditorInfo.IME_ACTION_DONE || i == EditorInfo.IME_ACTION_SEARCH) {
        if (textView.text.isNotEmpty()) {
            search(textView.text.toString())
        }
        return@setOnEditorActionListener true
    }
    return@setOnEditorActionListener false
}

//ClickListener to start a search, when the user clicks the search button
searchBtn.setOnClickListener {
    if (mSearchTxtField.text?.length != 0) {
        //There is text inside the search field. So lets do the search.
        search(mSearchTxtField.text.toString())
    }
}
...
```

</mi-tab-panel>
</mi-tabs>

To accompany this we use a _fragment_ and a `BottomSheet` to handle the `SearchFragment`.

Observe that the `SearchFragment`is just a simple _fragment_ with a `RecyclerView` and a `SearchItemAdapter` added to it

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/SearchFragment.java">SearchFragment.java</a>

```java
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
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/main/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/SearchFragment.kt">SearchFragment.kt</a>

```kotlin
class SearchFragment : Fragment() {
    private var mLocations: List<MPLocation?>? = null
    private var mMapActivity: MapsActivity? = null

    override fun onViewCreated(view: View, @Nullable savedInstanceState: Bundle?) {
        val recyclerView = view as RecyclerView
        recyclerView.layoutManager = LinearLayoutManager(context)
        recyclerView.adapter = mLocations?.let { locations -> SearchItemAdapter(locations, mMapActivity) }
    }

    ...

    companion object {
        fun newInstance(locations: List<MPLocation?>?, mapsActivity: MapsActivity?): SearchFragment {
            val fragment = SearchFragment()
            fragment.mLocations = locations
            fragment.mMapActivity = mapsActivity
            return fragment
        }
    }
}
```

</mi-tab-panel>
</mi-tabs>

See the full example of `SearchFragment` here: [SearchFragment.java](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/SearchFragment.java) or [SearchFragment.kt](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/main/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/SearchFragment.kt)

Create a getter for your `MapControl` object on the `MapsActivity` so that it can be used in the `SearchAdapter`.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L127-L129">MapsActivity.java</a>

```java
public MapControl getMapControl() {
    return mMapControl;
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/main/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/MapsActivity.kt#L197-L199">MapsActivity.kt</a>

```kotlin
fun getMapControl(): MapControl {
    return mMapControl
}
```

</mi-tab-panel>
</mi-tabs>

Inside the `SearchItemAdapter` implement logic to display the locations you get from a search result. Here we show an image of the location marker and show the name of the locations.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/SearchItemAdapter.java">SearchItemAdapter.java</a>

```java
class SearchItemAdapter extends RecyclerView.Adapter<ViewHolder> {
    private final List<MPLocation> mLocations;
    private final MapsActivity mMapActivity;

    ...

    @Override
    public void onBindViewHolder(ViewHolder holder, int position) {
        //Setting the the text on the text view to the name of the location
        holder.text.setText(mLocations.get(position).getName());

        if (mMapActivity != null) {
            //We start by checking if there is a specific Location icon assigned to the location
            MPLocationDisplayRule locationDisplayRule = mMapActivity.getMapControl().getDisplayRule(mLocations.get(position));

            if (locationDisplayRule != null && locationDisplayRule.getIcon() != null) {
                //There is a specific icon on this location so we use that
                mMapActivity.runOnUiThread(()-> {
                    holder.imageView.setImageBitmap(locationDisplayRule.getIcon());
                });
            }else {
                //Location does not have a specific displayRule, we instead use type Display rule
                MPLocationDisplayRule typeDisplayRule = mMapActivity.getMapControl().getDisplayRule(mLocations.get(position).getType());

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
    final TextView text;
    final ImageView imageView;

    ViewHolder(LayoutInflater inflater, ViewGroup parent) {
        super(inflater.inflate(R.layout.fragment_search_list_item, parent, false));
        text = itemView.findViewById(R.id.text);
        imageView = itemView.findViewById(R.id.location_image);
    }
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/main/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/SearchItemAdapter.kt">SearchItemAdapter.kt</a>

```kotlin
internal class SearchItemAdapter(private val mLocations: List<MPLocation?>, private val mMapActivity: MapsActivity?) : RecyclerView.Adapter<ViewHolder>() {

    ...

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        holder.text.text = mLocations[position]?.name

        if (mMapActivity != null) {
            val locationDisplayRule: MPLocationDisplayRule? = mMapActivity.getMapControl().getDisplayRule(mLocations[position])

            if (locationDisplayRule != null && locationDisplayRule.icon != null) {
                mMapActivity.runOnUiThread(Runnable {
                    holder.imageView.setImageBitmap(
                        locationDisplayRule.icon
                    )
                })
            } else {
                //Location does not have a special displayRule using type Display rule
                val typeDisplayRule: MPLocationDisplayRule? = mMapActivity.getMapControl().getDisplayRule(mLocations[position]?.type)

                if (typeDisplayRule != null) {
                    mMapActivity.runOnUiThread(Runnable {
                        holder.imageView.setImageBitmap(
                            typeDisplayRule.icon
                        )
                    })
                }
            }
        }
    }

    ...

}

internal class ViewHolder(inflater: LayoutInflater, parent: ViewGroup?) : RecyclerView.ViewHolder(inflater.inflate(R.layout.fragment_search_list_item, parent, false)) {
    val text: TextView
    val imageView: ImageView

    init {
        text = itemView.findViewById(R.id.text)
        imageView = itemView.findViewById(R.id.location_image)
    }
}
```

</mi-tab-panel>
</mi-tabs>

See the full example of `SearchItemAdapter` and accompanying `ViewHolder` here: [SearchItemAdapter.java](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/SearchItemAdapter.java) or [SearchItemAdapter.kt](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/main/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/SearchItemAdapter.kt)

We have already implemented the BottomSheet in the UI. Now we add the search _fragment_ to the `BottomSheet` in our search query method on our `MapsActivity`.
You can use the `addFragmentToBottomSheet` too add the created _fragment_ to the `BottomSheet`. When we have received the search results

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L191-L239">MapsActivity.java</a>

```java
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
            addFragmentToBottomSheet(mSearchFragment);
            //Clear the search text, since we got a result
            mSearchTxtField.getText().clear();
            ...
        }
    }
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/main/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/MapsActivity.kt#L146-L190">MapsActivity.kt</a>

```kotlin
private fun search(searchQuery: String) {
    //Query with a string to search on
    val mpQuery = MPQuery.Builder().setQuery(searchQuery).build()
    //Filter for the search query, only taking 30 locations
    val mpFilter = MPFilter.Builder().setTake(30).build()

    //Query for the locations
    MapsIndoors.getLocationsAsync(mpQuery, mpFilter) { list: List<MPLocation?>?, miError: MIError? ->
        //Check if there is no error and the list is not empty
        if (miError == null && !list.isNullOrEmpty()) {
            //Create a new instance of the search fragment
            mSearchFragment = SearchFragment.newInstance(list, this)
            //Make a transaction to the bottom sheet
            addFragmentToBottomSheet(mSearchFragment)
            //Clear the search text, since we got a result
            mSearchTxtField.text?.clear()
            ...
        }
    }
}
```

</mi-tab-panel>
</mi-tabs>

See the full example of the search method here: [MapsActivity.java](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L191-L239) or [MapsActivity.kt](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/main/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/MapsActivity.kt#L146-L190)

<!-- Filter map -->
{% include "src/shared/getting-started/search/filter-map.md" %}

When getting a search result, you might want to only show those search results on the map. You can do this through calling `setFilter(List<MPLocation> locations, MPFilterBehavior behavior)` on `MapControl`. This method uses a behavior object to make it easier for you as a developer to fit your exact need in terms of animation and more. This can be read in the [JavaDoc of `MPFilterBehavoir`](https://app.mapsindoors.com/mapsindoors/reference/android/v4/com/mapsindoors/mapssdk/MPFilterBehavior.html).

The standard implementation does not animate the camera, but if it is enabled it will fit all Locations on the map.

When you are done showing the search results you can call `clearFilter()` on `MapControl`.

Since our `setFilter(List<MPLocation> locations, MPFilterBehavior behavior)` will use camera animations we will call it from the UI Thread and implement it in our search method inside the getLocationsAsync result with the list from the method.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/MapsActivity.java#L209-L215">MapsActivity.java</a>

```java
MapsIndoors.getLocationsAsync(mpQuery, mpFilter, (list, miError) -> {
    ...
    //Create a behavior for the map when filtering,
    // we want the map to move so that the filtered locations are in shot
    MPFilterBehavior behavior = new MPFilterBehavior.Builder()
            .setMoveCamera(true)
            .setAnimationDuration(500)
            .build();
    //Calling setFilter results on the ui thread as camera movement is involved
    runOnUiThread(() -> {
        mMapControl.setFilter(list, behavior);
    });
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">
<a href="https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/main/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/MapsActivity.kt#L164-L167">MapsActivity.kt</a>

```kotlin
MapsIndoors.getLocationsAsync(mpQuery, mpFilter) { list: List<MPLocation?>?, miError: MIError? ->
    ...
    val filterBehavior =
        MPFilterBehavior.Builder().setMoveCamera(true).setAnimationDuration(500).build()
    //Calling displaySearch results on the ui thread as camera movement is involved
    runOnUiThread { mMapControl.setFilter(list, filterBehavior) }
}
```

</mi-tab-panel>
</mi-tabs>

Expected result:

![Search result](/assets/android/getting-started/search_gif.gif)

The accompanying UI and implementation of this search experience can be found in the getting started app sample. [Getting Started App sample](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/tree/master/app/src/main/java/com/example/mapsindoorsgettingstarted) or [Getting Started App sample kotlin](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/main/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin).

<p class="next-article"><a class="mi-button mi-button--outline" href="{{ site.url }}/android/v4/getting-started/directions/">Next up: Directions</a></p>
