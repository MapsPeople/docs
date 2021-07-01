---
title: Caching and offline content
eleventyNavigation:
  key: ios-v3-offline
  parent: ios-v3-guides
  title: Caching and offline content
  order: 600
---

## Cacheable data

MapsIndoors has three levels of caching:

1. **Basic data**: all descriptions, geometries and in general all metadata about POIs, rooms, areas, buildings and venues.
2. **Detailed data**: Images referenced by the data + basic data.
3. **Full dataset**: Maptiles in addition to images and basic data.

Full dataset caching requires that maptiles are prepared specifically for this purpose.  Contact MapsPeople for arranging this.

## Automatic caching

Out of the box, MapsIndoors automatically cache all basic data for the **active** dataset on device, whereas images and maptiles are cached as they are used.

This means all MapsIndoors specific data is cached automatically, but images are only cached after they have been needed for map display.  Likewise maptiles (the base map) are only cached when needed for map display, so all parts of the map that has been shown is cached.  Areas and zoomlevels that has not been shown as part of user interaction is not cached.

## Tweaking caching behaviour

Applications have a few ways to change the default caching behaviour:

The synchronization process can be started manually:

```swift
MapsIndoors.synchronizeContent { (error) in
    ...
}
```

The level of caching can be changed:

```swift
let dataSetManager = MapsIndoors.dataSetCacheManager
let dataSet = dataSetManager.dataSetForCurrentMapsIndoorsAPIKey()
dataSetManager.setCachingScope(.cachingScope_Full, cacheItem: dataSet!.cacheItem)
```

## Caching of multiple datasets

`Available in SDK version 3.9 and later`

The most common use of MapsIndoors involve only one dataset, but for large deployments data may be partitioned into multiple datasets.

Offline caching of multiple simultaneous datasets is fully supported, and is mostly limited by the available storage space on device.<br>Note: only one dataset is active at any point in time.

Management of multiple dataset is done via  `MapsIndoors.dataSetCacheManager`, which allows querying, adding, modifying and removing datasets.

### Listing managed datasets

All datasets currently manager is accessible via the `MapsIndoors.dataSetCacheManager.managedDataSets` collection:

```swift
for ds in MapsIndoors.dataSetCacheManager.managedDataSets {
    print( "\(ds.name): size \(ds.cacheItem.syncSize)" )
}
```

This can be used to build a management user interface, and information about individual datasets can be access from the `MPDataSetCache` and `MPDataSetCacheItem` classes.

### Adding datasets for offline caching

Datasets are scheduled for caching using one of the  `MapsIndoors.dataSetCacheManager.addDataSet()` variants:

```swift
MapsIndoors.dataSetCacheManager.addDataSet("API Key")
MapsIndoors.dataSetCacheManager.addDataSet("API Key", cachingScope: .cachingScope_Basic)
```

The current MapsIndoors API key is automatically added as a managed dataset with `cachingScope_Basic`.

### Removing datasets

Datasets are removed from caching using `MapsIndoors.dataSetCacheManager.removeDataSet()`:

```swift
MapsIndoors.dataSetCacheManager.removeDataSet(MPDataSetCache)
```

Note: the currently active dataset is not removed.

### Changing caching parameters

To change the extent of caching, for example in a management menu:

```swift
let dataSetManager = MapsIndoors.dataSetCacheManager
let dataSet = dataSetManager.dataSetForCurrentMapsIndoorsAPIKey()
dataSetManager.setCachingScope( .cachingScope_Detailed, cacheItem: dataSet?.cacheItem )
```

### Determining the caching size of a dataset

The estimated and cached size of a dataset is available via the datasets cacheitem:

```swift
dataSet?.cacheItem.cachedSize
dataSet?.cacheItem.syncSize
```

To refesh or get the size of a synced dataset:

```swift
dataSetManager.fetchSyncSizes(for: [dataSet], delegate: self)
```

This is an asynchronous process, and a `MPDataSetCacheManagerSizeDelegate` is needed for getting information about progress and results.

### Synchronizing data with MPDataSetCacheManager

The `MPDataSetCacheManager`allows for finegrained control which datasets are synchronized, and allows for cancellation:

```swift
// Sync allmanaged datasets:
dataSetManager.synchronizeContent()

// Synchronize specific datasets:
dataSetManager.synchronizeCacheItems([dataSet.cacheItem, ...])

// Cancellation:
dataSetManager.cancelSynchronization()
```
