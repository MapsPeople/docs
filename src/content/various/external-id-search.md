---
title: Getting Locations by External ID
eleventyNavigation:
    key: various-external-id-search
    parent: various-external-id
    title: Getting Locations by External ID
    order: 1
---

A method on MapsIndoors is available to retrieve locations by their externalId. This is only for exact matches and is not a part of the general search implementations, so must be specifically implemented.

The function on all 3 platforms functions similarly, returning an Array or List of Locations that match the supplied External ID strings.

<mi-tabs>
<mi-tab label="Android" tab-for="android"></mi-tab>
<mi-tab label="iOS" tab-for="ios"></mi-tab>
<mi-tab label="Web" tab-for="web"></mi-tab>
<mi-tab-panel id="android">

Running the below snippet will return a List of `MPLocations`.

```java
val locations = MapsIndoors.getLocationsByExternalIds(externalIds)
```

</mi-tab-panel>
<mi-tab-panel id="ios">

<!-- Known Issues -->
{% include "src/content/shared/known-issues-ios.md" %}

Running the below snippet will return an Array of `MPLocations`.

```swift
MPLocationService.sharedInstance().getLocationsByExternalIds(externalIds)
```

</mi-tab-panel>
<mi-tab-panel id="web">

Running the below snippet will return an Array of `MPLocations`.

```js
locationsService.getLocationsByExternalId(externalIds: string[])
```

</mi-tab-panel>
</mi-tabs>
