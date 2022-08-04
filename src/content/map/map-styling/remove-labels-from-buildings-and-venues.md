---
title: Remove Labels from Buildings and Venues for Web
eleventyNavigation:
  key: map-map-styling-remove-labels
  parent: map-map-styling
  title: Remove Labels from Buildings and Venues for Web
  order: 100
---

Due to some slight differences in how the Web SDK handles Buildings and Venues compared to the Mobile SDKs, Buildings and Venues are treated as Locations, and as such, will be displayed with Labels. This is not always desirable behavior, and thus we also provide this small guide on how to remove them again.

```js
mapsIndoorsInstance.setDisplayRule(['MI_BUILDING', 'MI_VENUE'], { visible: false });
```

`MI_BUILDING` and `MI_VENUE` are special Location Types used specifically for this purpose, to set Display Rules for Buildings and Venues.