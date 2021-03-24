---
title: Search in MapsIndoors
eleventyNavigation:
  key: web-v4-guides-search
  parent: web-v4-guides
  title: Search in MapsIndoors
  order: 0
---

{% include "src/shared/guides/search/overview.md" %}

See the full list of parameters in the [reference guide](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.services.LocationsService.html#.getLocations).

## Example of creating a search query

```js
const searchParameters = {
  q: 'Office',
  near: { lat: 38.897579747054046, lng: -77.03658652944773 }, // // Blue Room, The White House
  take: 1
}

mapsindoors.services.LocationsService.getLocations(searchParameters).then(locations => {
  console.log(locations);
});
```

{% include "src/shared/guides/search/search-ranking.md" %}

## Displaying your search results on the map

{% include "src/shared/guides/search/displaying-search-results.md" %}

## Example of filtering the map to display searched locations on the map

```js/7
const searchParameters = {
  q: 'Office',
  near: { lat: 38.897579747054046, lng: -77.03658652944773 }, // // Blue Room, The White House
  take: 1
}

mapsindoors.services.LocationsService.getLocations(searchParameters).then(locations => {
  mapsIndoorsInstance.filter(locations.map(location => location.id), false);
});
```

## Clearing the map of your filter

{% include "src/shared/guides/search/clear-search-filter-on-map.md" %}

## Example of clearing you map filter to show all Locations again
