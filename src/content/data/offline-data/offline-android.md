---
title: Offline Content for Android
toc: true
eleventyNavigation:
  key: data-offline-data-android
  parent: data-offline-data
  title: Offline Content for Android
  order: 10
---

## Cacheable Data

MapsIndoors has three levels of caching:

1. **Basic Data**: All descriptions, geometries and metadata about POIs, rooms, areas, buildings and venues.
2. **Detailed Data**: The same as **Basic Data**, plus images referenced by the data.
3. **Full Dataset**: The same as **Detailed Data**, plus Map Tiles.

Full Dataset caching requires that Map Tiles are prepared specifically for this purpose.  Contact MapsPeople in order to arrange this.

## Automatic Caching

Out of the box, MapsIndoors automatically caches all basic data for the **active** dataset on the device, whereas images and Map Tiles are cached only as they are used.

This means all MapsIndoors-specific data is cached automatically, but images are only cached after they have been needed for map display. Likewise, Map Tiles are only cached when needed for map display, so all parts of the map that has been shown are cached.  Areas and Zoom Levels that have not been shown as part of user interaction are not cached.

## Tweaking Caching Behaviour

Applications have a few ways to change the default caching behaviour:

The synchronization process can be started manually:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
MapsIndoors.synchronizeContent((e) -> {
    ...
});
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
MapsIndoors.synchronizeContent { error ->
    ...
}
```

</mi-tab-panel>
</mi-tabs>

The level of caching can be changed:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
MPDataSetCache dataSet = MPDataSetCacheManager.getInstance().getDataSetByID("API KEY");
dataSet.setScope(mContext, MPDataSetCacheScope.DETAILED);
MPDataSetCacheManager.getInstance().synchronizeDataSets(Collections.singletonList(dataSet));
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
val dataset = MPDataSetCacheManager.getInstance().getDataSetByID("API KEY")
dataset?.setScope(mContext, MPDataSetCacheScope.DETAILED)
MPDataSetCacheManager.getInstance().synchronizeDataSets(Collections.singletonList(dataset))
```

</mi-tab-panel>
</mi-tabs>

## Caching of Multiple Datasets

The most common use of MapsIndoors involves only one dataset, but for large deployments, data may be partitioned into multiple datasets.

Offline caching of multiple simultaneous datasets is fully supported, and is mostly limited by the available storage space on device.

**NOTE**: Only one dataset is active at any point in time.

Management of multiple datasets is done via  `MPDataSetCacheManager`, which allows querying, adding, modifying and removing datasets.

### Listing Managed Datasets

All datasets currently managed are accessible via the `MPDataSetCacheManager`:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
for (MPDataSetCache dataSet : MPDataSetCacheManager.getInstance().getManagedDataSets()) {
    Log.i("dataset", dataSet.getSolutionId() + ": size " + dataSet.getCacheItem().getSyncSize());
}
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
for (dataSet in MPDataSetCacheManager.getInstance().managedDataSets) {
    Log.i("dataset", dataSet.solutionId + ": size " + dataSet.cacheItem.syncSize)
}
```

</mi-tab-panel>
</mi-tabs>

This can be used to build a management user interface, and information about individual datasets can be accessed from the `MPDataSetCache` and `MPDataSetCacheItem` classes.

### Adding Datasets for Offline Caching

Datasets are scheduled for caching using  `MPDataSetCacheManager`:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
MPDataSetCacheManager.getInstance().addDataSetWithCachingScope("API KEY", MPDataSetCacheScope.BASIC);
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
MPDataSetCacheManager.getInstance()
        .addDataSetWithCachingScope("API KEY", MPDataSetCacheScope.BASIC)
```

</mi-tab-panel>
</mi-tabs>

The current MapsIndoors API key is automatically added as a managed dataset with `MPDataSetCacheScope.BASIC`.

### Removing Datasets

Datasets are removed from caching using `MPDataSetCacheManager.getInstance().removeDataSetCache(MPDataSetCache);`:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
MPDataSetCacheManager.getInstance().removeDataSetCache(MPDataSetCache);
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
MPDataSetCacheManager.getInstance().removeDataSetCache(MPDataSetCache)
```

</mi-tab-panel>
</mi-tabs>

**NOTE:** The currently active dataset is not removed.

### Changing Caching Parameters

To change the extent of caching, for example in a management menu:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
MPDataSetCache dataSet = MPDataSetCacheManager.getInstance().getDataSetByID("API KEY");
dataSet.setScope(mContext, MPDataSetCacheScope.DETAILED);
MPDataSetCacheManager.getInstance().synchronizeDataSets(Collections.singletonList(dataSet));
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
val dataset = MPDataSetCacheManager.getInstance().getDataSetByID("API KEY")
dataset?.setScope(mContext, MPDataSetCacheScope.DETAILED)
MPDataSetCacheManager.getInstance().synchronizeDataSets(Collections.singletonList(dataset))
```

</mi-tab-panel>
</mi-tabs>

### Determining the Caching Size of a Dataset

The estimated and cached size of a dataset is available via:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
dataSet.getCacheItem().getCacheSize(mContext);
dataSet.getCacheItem().getSyncSize();
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
dataSet?.cacheItem?.getCacheSize(mContext)
dataSet?.cacheItem?.syncSize
```

</mi-tab-panel>
</mi-tabs>

To refresh or get the size of a synced dataset:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
MPDataSetCacheManager.getInstance().getSyncSizesForDataSetCaches(Collections.singletonList(dataSet), this);
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
MPDataSetCacheManager.getInstance().getSyncSizesForDataSetCaches(listOf(dataSet), this)
```

</mi-tab-panel>
</mi-tabs>

This is an asynchronous process, and a `MPDataSetCacheManagerSizeListener` is needed for getting information about progress and results.

### Synchronizing Data with MPDataSetCacheManager

The `MPDataSetCacheManager`allows for detailed control over which datasets are synchronized, and allows for cancellation:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
MPDataSetCacheManager dataSetCacheManager = MPDataSetCacheManager.getInstance();

// sync all managed datasets
dataSetCacheManager.synchronizeDataSets();

// sync specific datasets
dataSetCacheManager.synchronizeDataSets(dataSets);
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
MPDataSetCacheManager dataSetCacheManager = MPDataSetCacheManager.getInstance();

// sync all managed datasets
dataSetCacheManager.synchronizeDataSets()

// sync specific datasets
dataSetCacheManager.synchronizeDataSets(dataSets)
```

</mi-tab-panel>
</mi-tabs>
