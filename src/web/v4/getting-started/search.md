---
title: Create a search experience
toc: true
eleventyNavigation:
  title: Search
  key: web-v4-getting-started-search
  parent: web-v4-getting-started
  order: 140
---

<!-- Overview -->
{% include "src/shared/getting-started/search/overview.md" %}

<!-- Search -->
{% include "src/shared/getting-started/search/search.md" %}

<mi-tabs>
<mi-tab label="Manually" tab-for="manually"></mi-tab>
<mi-tab label="MI Components" tab-for="components"></mi-tab>
<mi-tab-panel id="manually">

MapsIndoors Locations can be retrieved in the mapsindoors namespace using the `LocationsService.getLocations()` method but first you need to add a `<input>` and `<button>` element to the DOM.

* Create an `<input>` and `<button>` element in `<body>`.
* Attach an `onclick` event to the `<button>` element and call a `onSearch` method, which you will create next.

```html
<!-- index.html -->

<body>
  ...
  <input type="text" placeholder="Search">
  <button onclick="onSearch()">Search</button>
</body>
```

* Create the `onSearch` method.
* Get a reference to the search `<input>` element.
* Define a new object with the search parameter `q` and the value of `searchInputElement`.
* Call the `getLocations` method and log out the results to the console.

```js
// main.js

function onSearch() {
  const searchInputElement = document.querySelector('input');

  const searchParameters = { q: searchInputElement.value };
  mapsindoors.services.LocationsService.getLocations(searchParameters).then(locations => {
    console.log(locations);
  });
}
```

> See all available search parameters in the [reference documentation](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.services.LocationsService.html#.getLocations).

</mi-tab-panel>
<mi-tab-panel id="components">

</mi-tab-panel>
</mi-tabs>

<!-- Results list -->
{% include "src/shared/getting-started/search/results-list.md" %}

To display a list of search results you can append each search result as a `<li>` element to a `<ul>` element.

* Add the `<ul>` element below the search field in `<body>` and give it the `id` attribute with the value "search-results".

```html
<!-- index.html -->

<body>
  ...
  <input type="text" placeholder="Search">
  <button onclick="onSearch()">Search</button>
  <ul id="search-results"></ul>
</body>
```

<mi-tabs>
<mi-tab label="Manually" tab-for="manually"></mi-tab>
<mi-tab label="MI Components" tab-for="components"></mi-tab>
<mi-tab-panel id="manually">

* Get a reference to the `<ul>` element.
* Reset the search results list every time the `getLocations` promise resolves.
* Add an for loop and append every result to the search results list.

```js
// main.js

function onSearch() {
  const searchInputElement = document.querySelector('input');
  const searchResultsElement = document.getElementById('search-results');

  const searchParameters = { q: searchInputElement.value };
  mapsindoors.services.LocationsService.getLocations(searchParameters).then(locations => {
    // Reset search results list
    searchResultsElement.innerHTML = null;

    // Append new search results
    locations.forEach(location => {
      const listElement = document.createElement('li');
      listElement.innerHTML = location.properties.name;
      searchResultsElement.appendChild(listElement);
    });
  });
}
```

</mi-tab-panel>
<mi-tab-panel id="components">

</mi-tab-panel>
</mi-tabs>

<!-- Filter map -->
{% include "src/shared/getting-started/search/filter-map.md" %}

* **TODO: How to filter map based on search results/query**
