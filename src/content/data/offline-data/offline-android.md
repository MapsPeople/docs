---
title: Offline Content for Android
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

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

Applications have a few ways to change the default caching behaviour:

The synchronization process can be started manually:

```java
MapsIndoors.synchronizeContent((e) -> {
    ...
});
```

The level of caching can be changed:

```java
MPDataSetCache dataset = MPDataSetCacheManager.getInstance().getDataSetByID("API KEY");
MPDataSetCacheManager.getInstance().synchronizeDataSetsWithScope(Collections.singletonList(dataset), MPDataSetCacheScope.DETAILED);
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

Applications have a few ways to change the default caching behaviour:

The synchronization process can be started manually:

```kotlin
MapsIndoors.synchronizeContent { error ->
    ...
}
```

The level of caching can be changed:

```kotlin
val dataset = MPDataSetCacheManager.getInstance().getDataSetByID("API KEY")
MPDataSetCacheManager.getInstance()
.synchronizeDataSetsWithScope(listOf(dataset), MPDataSetCacheScope.FULL)
```

</mi-tab-panel>
</mi-tabs>

## Caching of Multiple Datasets

The most common use of MapsIndoors involves only one dataset, but for large deployments, data may be partitioned into multiple datasets.

Offline caching of multiple simultaneous datasets is fully supported, and is mostly limited by the available storage space on device.

**NOTE**: Only one dataset is active at any point in time.

Management of multiple datasets is done via  `MPDataSetCacheManager`, which allows querying, adding, modifying and removing datasets.

### Listing Managed Datasets

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

All datasets currently managed are accessible via `MPDataSetCacheManager.getInstance().getManagedDataSets()`:

```java
for (MPDataSetCache dataSet : MPDataSetCacheManager.getInstance().getManagedDataSets()) {
    Log.i("dataset", dataSet.getSolutionId() + ": size " + dataSet.getCacheItem().getSyncSize());
}
```

This can be used to build a management user interface, and information about individual datasets can be accessed from the `MPDataSetCache` and `MPDataSetCacheItem` classes.

</mi-tab-panel>
<mi-tab-panel id="kotlin">

All datasets currently managed are accessible via `MPDataSetCacheManager.getInstance().managedDataSets`:

```kotlin
for (dataSet in MPDataSetCacheManager.getInstance().managedDataSets) {
    Log.i("dataset", dataSet.solutionId + ": size " + dataSet.cacheItem.syncSize)
}
```

This can be used to build a management user interface, and information about individual datasets can be accessed from the `MPDataSetCache` and `MPDataSetCacheItem` classes.

</mi-tab-panel>
</mi-tabs>

### Adding Datasets for Offline Caching

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

Datasets are scheduled for caching using  `MPDataSetCacheManager`:

```java
MPDataSetCacheManager.getInstance().addDataSetWithCachingScope("API KEY", MPDataSetCacheScope.BASIC);
```

The current MapsIndoors API key is automatically added as a managed dataset with `MPDataSetCacheScope.BASIC`.

</mi-tab-panel>
<mi-tab-panel id="kotlin">

Datasets are scheduled for caching using  `MPDataSetCacheManager`:

```kotlin
MPDataSetCacheManager.getInstance()
        .addDataSetWithCachingScope("API KEY", MPDataSetCacheScope.BASIC)
```

The current MapsIndoors API key is automatically added as a managed dataset with `MPDataSetCacheScope.BASIC`.

</mi-tab-panel>
</mi-tabs>

### Removing Datasets

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

Datasets are removed from caching using `MPDataSetCacheManager.getInstance().removeDataSetCache(MPDataSetCache);`:

```java
MPDataSetCacheManager.getInstance().removeDataSetCache(MPDataSetCache);
```

**NOTE:** The currently active dataset is not removed.

</mi-tab-panel>
<mi-tab-panel id="kotlin">

Datasets are removed from caching using `MPDataSetCacheManager.getInstance().removeDataSetCache(MPDataSetCache);`:

```kotlin
MPDataSetCacheManager.getInstance().removeDataSetCache(MPDataSetCache)
```

**NOTE:** The currently active dataset is not removed.

</mi-tab-panel>
</mi-tabs>

### Changing Caching Parameters

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

To change the extent of caching, for example in a management menu:

```java
MPDataSetCache dataset = MPDataSetCacheManager.getInstance().getDataSetByID("API KEY");
MPDataSetCacheManager.getInstance().synchronizeDataSetsWithScope(Collections.singletonList(dataset), MPDataSetCacheScope.DETAILED);
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

To change the extent of caching, for example in a management menu:

```kotlin
val dataset = MPDataSetCacheManager.getInstance().getDataSetByID("API KEY")
MPDataSetCacheManager.getInstance()
.synchronizeDataSetsWithScope(listOf(dataset), MPDataSetCacheScope.DETAILED)
```

</mi-tab-panel>
</mi-tabs>

### Determining the Caching Size of a Dataset

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

The estimated and cached size of a dataset is available via:

```java
dataSet.getCacheItem().getCacheSize();
dataSet.getCacheItem().getSyncSize();
```

To refresh or get the size of a synced dataset:

```java
MPDataSetCacheManager.getInstance().getSyncSizesForDataSetCaches(Collections.singletonList(dataSet), this);
```

This is an asynchronous process, and a `MPDataSetCacheManagerSizeListener` is needed for getting information about progress and results.

</mi-tab-panel>
<mi-tab-panel id="kotlin">

The estimated and cached size of a dataset is available via:

```kotlin
dataSet?.cacheItem?.cacheSize
dataSet?.cacheItem?.syncSize
```

To refresh or get the size of a synced dataset:

```kotlin
MPDataSetCacheManager.getInstance().getSyncSizesForDataSetCaches(listOf(dataSet), this)
```

This is an asynchronous process, and a `MPDataSetCacheManagerSizeListener` is needed for getting information about progress and results.

</mi-tab-panel>
</mi-tabs>

### Synchronizing Data with MPDataSetCacheManager

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

The `MPDataSetCacheManager`allows for detailed control over which datasets are synchronized, and allows for cancellation:

```java
MPDataSetCacheManager dataSetCacheManager = MPDataSetCacheManager.getInstance();

// sync all managed datasets
dataSetCacheManager.synchronizeDataSets();

// sync specific datasets
dataSetCacheManager.synchronizeDataSets(dataSets);

// sync specific datasets with a specific scope
dataSetCacheManager.synchronizeDataSetsWithScope(dataSets, MPDataSetCacheScope.FULL);
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

The `MPDataSetCacheManager`allows for detailed control over which datasets are synchronized, and allows for cancellation:

```kotlin
MPDataSetCacheManager dataSetCacheManager = MPDataSetCacheManager.getInstance();

// sync all managed datasets
dataSetCacheManager.synchronizeDataSets()

// sync specific datasets
dataSetCacheManager.synchronizeDataSets(dataSets)

// sync specific datasets with a specific scope
dataSetCacheManager.synchronizeDataSetsWithScope(dataSets, MPDataSetCacheScope.FULL)
```

</mi-tab-panel>
</mi-tabs>
