---
title: Configuring a menu with AppConfig
eleventyNavigation:
  key: map-various-appconfig
  parent: map-various
  title: Configuring a menu with AppConfig
  order: 420
---
<!-- lets divulge the general information and why this is useful -->
`AppConfig` primarily contains elements that are used by the standard apps, but it also contains some elements that are useful for any app developer using the SDK. This guide will showcase how to use `AppConfig` to create a menu of location categories.

<!-- The code can be found here -->
> This guide uses code from the "Getting Started" guide. If you have not completed it yet, it is <b>highly recommended</b> to complete it in order to achieve a better understanding of the MapsIndoors SDK. The guide can be found [here]({{ site.url }}/content/getting-started/android/). If you just want to follow this guide, the getting started code can be found here for [java](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android)/[kotlin](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin).

<!-- lets make a "new" fragment -->
First, make a new fragment for the menu, and call it `MenuFragment`, this fragment will take a list of `MenuInfo` which will become the elements of the menu.

> If you have not followed the getting started guide, the code for `fragment_search_list` can be seen [here](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/res/layout/fragment_search_list.xml).

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
public class MenuFragment extends Fragment {
    private List<MenuInfo> mMenuInfos = null;
    private MapsActivity mMapActivity = null;

    public static MenuFragment newInstance(List<MenuInfo>  menuInfos, MapsActivity mapsActivity) {
        final MenuFragment fragment = new MenuFragment();
        fragment.mMenuInfos = menuInfos;
        fragment.mMapActivity = mapsActivity;
        return fragment;
    }

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container,
                             @Nullable Bundle savedInstanceState) {
        // For the brevity of this guide, we will reuse the bottom sheet used in the searchFragment
        return inflater.inflate(R.layout.fragment_search_list, container, false);
    }

    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        final RecyclerView recyclerView = (RecyclerView) view;
        recyclerView.setLayoutManager(new LinearLayoutManager(getContext()));
        recyclerView.setAdapter(new MenuItemAdapter(mMenuInfos, mMapActivity));
    }
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
class MenuFragment : Fragment() {
    private lateinit var mMenuInfos: List<MenuInfo?>
    private lateinit var mMapActivity: MapsActivity


    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        // For the brevity of this guide, we will reuse the bottom sheet used in the searchFragment
        return inflater.inflate(R.layout.fragment_search, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        val recyclerView = view as RecyclerView
        recyclerView.layoutManager = LinearLayoutManager(context)
        recyclerView.adapter = MenuItemAdapter(mMenuInfos, mMapActivity)
    }

    companion object {
        fun newInstance(menuInfos: List<MenuInfo?>, mapsActivity: MapsActivity): MenuFragment {
            val fragment = MenuFragment()
            fragment.mMenuInfos = menuInfos
            fragment.mMapActivity = mapsActivity
            return fragment
        }
    }
}
```

</mi-tab-panel>
</mi-tabs>

<!-- also a "new" adapter -->
Next make an adapter for this list of `MenuInfo`. In this example the adapter reuses the `ViewHolder` created for the search experience in the getting started guide. For now, Just set the name of the item in `onBindViewHolder`, the icon and click listener will be set later.
> If you have not followed the getting started guide, the code can be seen here for [java](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/blob/master/app/src/main/java/com/example/mapsindoorsgettingstarted/SearchItemAdapter.java#L72-L82)/[kotlin](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/blob/main/app/src/main/java/com/example/mapsindoorsgettingstartedkotlin/SearchItemAdapter.kt#L53-L62).

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
public class MenuItemAdapter extends RecyclerView.Adapter<ViewHolder> {

    private final List<MenuInfo> mMenuInfos;
    private final MapsActivity mMapActivity;

    MenuItemAdapter(List<MenuInfo> menuInfoList, MapsActivity activity) {
        mMenuInfos = menuInfoList;
        mMapActivity = activity;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        return new ViewHolder(LayoutInflater.from(parent.getContext()), parent);
    }

    @Override
    public void onBindViewHolder(ViewHolder holder, int position) {
        //Setting the the text on the text view to the name of the location
        holder.text.setText(mMenuInfos.get(position).getName());
        ...
    }

    @Override
    public int getItemCount() {
        return mMenuInfos.size();
    }

}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
internal class MenuItemAdapter(
    private val mMenuInfos: List<MenuInfo?>,
    private val mMapActivity: MapsActivity?
) : RecyclerView.Adapter<ViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        return ViewHolder(LayoutInflater.from(parent.context), parent)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        //Setting the the text on the text view to the name of the location
        holder.text.text = mMenuInfos[position]?.name
        ...

    }

    override fun getItemCount(): Int {
        return mMenuInfos.size
    }
}
```

</mi-tab-panel>
</mi-tabs>

<!-- lets download an image -->
The icon for the `MenuInfo` is saved as an URL, as such it has to be downloaded to be displayed. Open a network connection in a background thread and download the image as a stream and save it in a `Bitmap`, then update the item's view back on the Main thread.
> This is a very rudimentary example, and should not be replicated in production code, see it as an exercise to implement a better way to download and display the icons.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
// if there exists an icon for this menuItem, then we will use it
if (mMenuInfos.get(position).getIconUrl() != null) {
    // As we need to download the image, it has to be offloaded from the main thread
    new Thread(() -> {
        Bitmap image;
        try {
            // Usually we would not want to re-download the image every time, but that is not important for this guide
            URL url = new URL(mMenuInfos.get(position).getIconUrl());
            image = BitmapFactory.decodeStream(url.openConnection().getInputStream());
        } catch(IOException ignored) {
            return;
        }
        //Set the image while on the main thread
        new Handler(Looper.getMainLooper()).post(() -> {
            holder.imageView.setImageBitmap(image);
        });

    }).start();
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
// if there exists an icon for this menuItem, then we will use it
val iconUrl = mMenuInfos[position]?.iconUrl
if (iconUrl != null) {
    // As we need to download the image, it has to be offloaded from the main thread
    Thread {
        val image: Bitmap = try {
            val url = URL(iconUrl)
            BitmapFactory.decodeStream(url.openConnection().getInputStream())
        } catch (ignored: IOException) {
            return@Thread
        }
        //Set the image while on the main thread
        Handler(Looper.getMainLooper()).post {
            holder.imageView.setImageBitmap(
                image
            )
        }
    }.start()
}
```

</mi-tab-panel>
</mi-tabs>

<!-- lets filter the map -->
To show which locations belong to the category of the selected `MenuInfo`, call `MapsIndoors.getLocationsAsync(MPQuery, MPFilter, OnLocationsReadyListener)`. The `MPQuery` can just be empty as nothing specific needs to be queried. Set the category on the `MPFilter`, this has to be the category key `MenuInfo.getCategoryKey()`, as this key is shared with locations in the SDK.

Finally, in the `OnLocationsReadyListener` call `MapControl.displaySearchResults(MPLocation)` as this will filter the map to only show the selected locations.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
// When a category is selected, we want to filter the map s.t. it only shows the locations in that
// category
holder.itemView.setOnClickListener(view -> {
    // empty query, we do not need to query anything specific
    MPQuery query = new MPQuery.Builder().build();
    // filter created on the selected category key
    MPFilter filter = new MPFilter.Builder().setCategories(Collections.singletonList(mMenuInfos.get(position).getCategoryKey())).build();
    MapsIndoors.getLocationsAsync(query, filter, (locations, error) -> {
        if (error == null && locations != null) {
            mMapActivity.getMapControl().displaySearchResults(locations);
        }
    });
});
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
// When a category is selected, we want to filter the map s.t. it only shows the locations in that
// category
holder.itemView.setOnClickListener { view ->
    // empty query, we do not need to query anything specific
    val query = MPQuery.Builder().build()
    // filter created on the selected category key
    val filter = MPFilter.Builder().setCategories(
        listOf(
            mMenuInfos[position]?.categoryKey
        )
    ).build()
    MapsIndoors.getLocationsAsync(
        query, filter
    ) { locations: List<MPLocation?>?, error: MIError? ->
        if (error == null && locations != null) {
            mMapActivity?.getMapControl()?.displaySearchResults(locations)
        }
    }
}
```

</mi-tab-panel>
</mi-tabs>

<!-- lets hijack the search button -->
Then, in order to show the menu, hijack the search icon's `onClickListener` method. The `MenuInfo` can be fetched via `MapControl.getAppConfig().getMenuInfo(String)`, and will give a menu corresponding to the inputted String, in this guide `"mainmenu"` has been used as it is the default.

```java
@Override
protected void onCreate(Bundle savedInstanceState) {
    ...
    //ClickListener to start a search, when the user clicks the search button
    searchBtn.setOnClickListener(view -> {
        /*
        if (mSearchTxtField.getText().length() != 0) {
            //There is text inside the search field. So lets do the search.
            search(mSearchTxtField.getText().toString());
            //Making sure keyboard is closed.
            imm.hideSoftInputFromWindow(view.getWindowToken(), 0);
        }
        */
        // Lets hijack the searchbutton
        mMenuFragment = MenuFragment.newInstance(MapsIndoors.getAppConfig().getMenuInfo("mainmenu"), this);
        //Make a transaction to the bottomsheet
        addFragmentToBottomSheet(mMenuFragment);
    });
    ...
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
    ...
    //ClickListener to start a search, when the user clicks the search button
    var searchBtn = findViewById<ImageButton>(R.id.search_btn)
    searchBtn.setOnClickListener {
        /*
        if (mSearchTxtField.text?.length != 0) {
            //There is text inside the search field. So lets do the search.
            search(mSearchTxtField.text.toString())
        }
        //Making sure keyboard is closed.
        imm.hideSoftInputFromWindow(it.windowToken, 0)
        */

        // Lets hijack the searchbutton
        mMenuFragment = MenuFragment.newInstance(MapsIndoors.getAppConfig()?.getMenuInfo("mainmenu")!!, this)
        //Make a transaction to the bottomsheet
        addFragmentToBottomSheet(mMenuFragment)
    }
    ...
}
```

</mi-tab-panel>
</mi-tabs>

<!-- remove the filter -->

Finally to clear the category filter from the map call `MapControl.clearMap()`, in this example it is called when closing the menu sheet, it the `onDestroyView` method of `MenuFragment`.
<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
@Override
public void onDestroyView() {
    // When we close the menu fragment we want to display all locations again, not just whichever were selected last
    mMapActivity.getMapControl().clearMap();
    super.onDestroyView();
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
override fun onDestroyView() {
    // When we close the menu fragment we want to display all locations again, not just whichever were selected last
    mMapActivity.getMapControl().clearMap()
    super.onDestroyView()
}
```

</mi-tab-panel>
</mi-tabs>

The code shown in this guide can be found here for [java](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android/tree/feature/appconfig)/[kotlin](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Android-Kotlin/tree/feature/appconfig).
