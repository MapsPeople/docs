---
title: Getting Locations by External ID
eleventyNavigation:
    key: various-external-id-search
    parent: various-external-id
    title: Getting Locations by External ID
    order: 1
---



A method on MapsIndoors is available to retrieve locations by their externalId. This is only for exact matches and is not a part of the general search implementations, so must be specifically implemented.

The function on all 3 platforms functions similarly, returning the Locations that match the supplied List of External ID's.

<mi-tabs>
<mi-tab label="Android" tab-for="android"></mi-tab>
<mi-tab label="iOS" tab-for="ios"></mi-tab>
<mi-tab label="Web" tab-for="web"></mi-tab>
<mi-tab-panel id="android">

```java
List<MPLocation> MapsIndoors.getLocationsByExternalIds(@NonNull List<String> externalIds)
```

</mi-tab-panel>
<mi-tab-panel id="ios">

<!-- Known Issues -->
{% include "src/content/shared/known-issues-ios.md" %}

```swift
MPLocationService.sharedInstance().getLocationsByExternalIds(externalIds: [String]) -> [MPLocation]
```

</mi-tab-panel>
<mi-tab-panel id="web">

```js
locationsService.getLocationsByExternalId(externalIds: string[]): Location[]
```

</mi-tab-panel>
</mi-tabs>
