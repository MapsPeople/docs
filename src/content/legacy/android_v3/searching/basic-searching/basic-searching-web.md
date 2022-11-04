---
title: Basic Searching for Web
toc: true
eleventyNavigation:
  key: v3-searching-basic-search-web
  parent: v3-searching-basic-searching
  title: Basic Searching for Web
  order: 30
---

{% include "src/content/shared/guides/search/overview.md" %}

See the full list of parameters in the [reference guide](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.services.LocationsService.html#.getLocations).

## Example of Creating a Search Query

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

{% include "src/content/shared/guides/search/search-ranking.md" %}

## Display Search Results on the Map

{% include "src/content/shared/guides/search/displaying-search-results.md" %}

## Filter the Map to Display Searched Locations on the Map

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

## Clearing the Map of your filter

{% include "src/content/shared/guides/search/clear-search-filter-on-map.md" %}

## Example of Clearing Your Map Filter to Show All Locations Again

```js
mapsIndoorsInstance.filter(null);
```

### Display Locations as List

You can also search for Locations, and have them presented to you as a list, instead of just displaying them on the map.

The full code example is shown in the JSFiddle below, which will be examined below.

<script async src="https://jsfiddle.net/mapspeople/91xhwd65/embed/html,result/"></script>

### Search

The `mapsindoors.services.LocationsService` class exposes the `getLocations` function that enables you to search for Locations.

It will return a Promise that gets resolved when the query has executed.

See [mapsindoors.services.LocationsService](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.services.LocationsService.html) for more information.

```javascript
searchElement.addEventListener('input', debounce((e) => {
    const value = e.target.value;
    if (value > '') {
        mapsindoors.services.LocationsService.getLocations({ q: value, includeOutsidePOI: true })
            .then(displayResults)
            .then(filterMap);
    } else {
        clearResults();
        clearFilter();
    }
}, 500));
```

The `debounce` method is there to ensure that the service is not being called in rapid succession.
This method delays the execution of the function by 500ms, unless `debounce` is called again within 500ms, in which case the timer is reset.

See this article ["What is debouncing" by Jamis Charles](https://medium.com/@jamischarles/what-is-debouncing-2505c0648ff1) for a more detailed description of the `debounce` concept.

When the function executes, we check whether the input is empty or not. A request object is created if the input is not empty.

The `getLocations` function expects either no input, in which case it returns all Locations, or an Object (please refer to the official documentation for an exhaustive list of properties).
In this case, the constant `value` is passed to the `q` property and the `includeOutsidePOI` property is set to `true`. When the Promise resolves, the response is passed to the `displayResults` helper function.

If the input is empty, we clear the result list and reset the map filter by calling the helper functions `clearResults` and `clearFilter`.

### Checking for Results

We need to clear the previous results, and check if any Locations were returned. If so, we loop through them and add them to the result list.

```javascript
function displayResults(locations) {
    clearResults();

    if (locations.length > 0) {
        for (const location of locations) {
            searchResults.innerHTML += `<li>${location.properties.name}</li>`;
        }
    } else {
        searchResults.innerHTML = '<li class="no-results">No results matched the query.</li>';
    }

    return locations;
}
```

If no Locations are returned, a message is shown to the user stating "No results matched the query.". Otherwise, we pass the Locations on to the next helper function called `filterMap`.

```javascript
function filterMap(locations) {
    mapsIndoors.filter(locations.map(location => location.id), false);
    return locations;
}
```

The purpose of the `filterMap` function is to create a list of `location id`s used to filter the Locations on the map.

The second parameter tells MapsIndoors not to change the viewport of the map.

For more information, see `MapsIndoors.filter` in the [reference documentation](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/MapsIndoors.html#filter).
