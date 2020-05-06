---
title: Caching and offline content
guide_title: offline
layout: guide
nav_weight: 600
published: true
date: 2019-09-30
permalink: /ios/v3/offline/
---

{% include toc.md %}

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

## Bundling of data in the application

If needed, it is possible to bundle one MapsIndoors dataset to make your app work better in offline or poor network conditions.
Please note that while MapsIndoors content can be used offline, Google Maps does not provide offline features. Outdoor wayfinding and Google Places searches will be unavailable and the surrounding map may be unavailable unless it has been cached.

In your app targets build phases, add a "Run Script" build phase containing the following command:

```bash
${SRCROOT}/Pods/MapsIndoors/Scripts/derive_ressources.sh --api-key=YOUR_MAPSINDOORS_API_KEY --language=en
```

Replace:

* `YOUR_MAPSINDOORS_API_KEY` with your MapsIndoors API key.
* `en` with any one of the languages that your MapsIndoors solution supports (Two letter ISO-639-1 language code). If you only have one language deployed you may remove this input parameter entirely

Depending on the overall size of your MapsIndoors deployment, this may take some time, so during development you might want to check the "Run script only when installing" option. This means that content will only be bundled when archiving for e.g. a release.

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
