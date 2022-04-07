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

1. **Basic data**: all descriptions, geometries and in general all metadata about POIs, rooms, areas, buildings and venues.
2. **Detailed data**: Images referenced by the data + basic data.
3. **Full dataset**: Maptiles in addition to images and basic data.

Full dataset caching requires that maptiles are prepared specifically for this purpose.  Contact MapsPeople for arranging this.

## Automatic Caching

Out of the box, MapsIndoors automatically cache all basic data for the **active** dataset on device, whereas images and maptiles are cached as they are used.

This means all MapsIndoors specific data is cached automatically, but images are only cached after they have been needed for map display.  Likewise maptiles (the base map) are only cached when needed for map display, so all parts of the map that has been shown is cached.  Areas and zoomlevels that has not been shown as part of user interaction is not cached.

## Tweaking Caching Behaviour

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

## Caching of Multiple Datasets

The most common use of MapsIndoors involve only one dataset, but for large deployments data may be partitioned into multiple datasets.

Offline caching of multiple simultaneous datasets is fully supported, and is mostly limited by the available storage space on device.<br>Note: only one dataset is active at any point in time.

Management of multiple datasets is done via  `MPDataSetCacheManager`, which allows querying, adding, modifying and removing datasets.

### Listing Managed Datasets

All datasets currently manager is accessible via `MPDataSetCacheManager.getInstance().getManagedDataSets()`:

```java
for (MPDataSetCache dataSet : MPDataSetCacheManager.getInstance().getManagedDataSets()) {
    Log.i("dataset", dataSet.getSolutionId() + ": size " + dataSet.getCacheItem().getSyncSize());
}
```

This can be used to build a management user interface, and information about individual datasets can be access from the `MPDataSetCache` and `MPDataSetCacheItem` classes.

### Adding Datasets for Offline Caching

Datasets are scheduled for caching using  `MPDataSetCacheManager`:

```java
MPDataSetCacheManager.getInstance().addDataSetWithCachingScope("API KEY", MPDataSetCacheScope.BASIC);
```

The current MapsIndoors API key is automatically added as a managed dataset with `MPDataSetCacheScope.BASIC`.

### Removing Datasets

Datasets are removed from caching using `MPDataSetCacheManager.getInstance().removeDataSetCache(MPDataSetCache);`:

```java
MPDataSetCacheManager.getInstance().removeDataSetCache(MPDataSetCache);
```

Note: the currently active dataset is not removed.

### Changing Caching Parameters

To change the extent of caching, for example in a management menu:

```java
MPDataSetCache dataset = MPDataSetCacheManager.getInstance().getDataSetByID("API KEY");
MPDataSetCacheManager.getInstance().synchronizeDataSetsWithScope(Collections.singletonList(dataset), MPDataSetCacheScope.DETAILED);
```

### Determining the Caching Size of a Dataset

The estimated and cached size of a dataset is available via the datasets cache item:

```java
dataSet.getCacheItem().getCacheSize();
dataSet.getCacheItem().getSyncSize();
```

To refresh or get the size of a synced dataset:

```java
MPDataSetCacheManager.getInstance().getSyncSizesForDataSetCaches(Collections.singletonList(dataSet), this);
```

This is an asynchronous process, and a `MPDataSetCacheManagerSizeDelegate` is needed for getting information about progress and results.

### Synchronizing Data with MPDataSetCacheManager

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
