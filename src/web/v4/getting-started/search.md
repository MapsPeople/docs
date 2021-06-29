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

<!-- JS Fiddle intro -->
{% include "src/web/v4/getting-started/js-fiddle-intro.md" %}

<mi-tabs>
<mi-tab label="Manually" tab-for="manually"></mi-tab>
<mi-tab label="MI Components" tab-for="components"></mi-tab>
  <mi-tab-panel id="manually">
    <iframe width="100%" src="//jsfiddle.net/simonlaustsen/3z9tby8q/41/embedded/js,html,result/" frameborder="0"></iframe>
  </mi-tab-panel>

  <mi-tab-panel id="components">
    <iframe width="100%" src="//jsfiddle.net/simonlaustsen/fb5rauto/23/embedded/js,html,result/" frameborder="0"></iframe>
  </mi-tab-panel>
</mi-tabs>

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

Using the `<mi-search>` component you get a `<input>`element tied tightly together with the [Location Service](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/LocationsService.html).

* Insert the `<mi-search>` custom element into `<body>`.
* Add the `mapsindoors` and `placeholder` attributes.

```html
<!-- index.html -->

<body>
  ...
  <mi-search
    style="width: 600px;"
    mapsindoors="true"
    placeholder="Search">
  </mi-search>
</body>
```

* Get a reference to the `<mi-search>` element.
* Attach an `results` event listener and log out the results to the console.

```js
// main.js

const miSearchElement = document.querySelector('mi-search');

miSearchElement.addEventListener('results', (event) => {
    console.log(event.detail);
});
```

> For more information on available events and how to configure the `<mi-search>` component, see [components.mapsindoors.com/search](https://components.mapsindoors.com/search/).

</mi-tab-panel>
</mi-tabs>

<!-- Results list -->
{% include "src/shared/getting-started/search/results-list.md" %}

To display a list of search results you can append each search result to a list element.

<mi-tabs>
<mi-tab label="Manually" tab-for="manually"></mi-tab>
<mi-tab label="MI Components" tab-for="components"></mi-tab>
<mi-tab-panel id="manually">

* Add the `<ul>` list element below the search field in `<body>` with the `id` attribute set to "search-results".

```html
<!-- index.html -->

<body>
  ...
  <ul id="search-results"></ul>
</body>
```

</mi-tab-panel>
<mi-tab-panel id="components">

* Insert the `<mi-list>` custom element below the search field in `<body>`.
* Add the `scroll-buttons-enabled` and `scroll-length` attributes.

```html
<!-- index.html -->

<body>
  ...
  <mi-list
    style="width: 600px; height: 400px;"
    scroll-buttons-enabled="true"
    scroll-length="200">
  </mi-list>
</body>
```

> For more information on how to configure the `<mi-list>` component, see [components.mapsindoors.com/list](https://components.mapsindoors.com/list/).

</mi-tab-panel>
</mi-tabs>

* Get a reference to the list element.
* Reset the list on every complete search.

<mi-tabs>
<mi-tab label="Manually" tab-for="manually"></mi-tab>
<mi-tab label="MI Components" tab-for="components"></mi-tab>
<mi-tab-panel id="manually">

```js
// main.js

function onSearch() {
  ...
  // Get list element reference
  const searchResultsElement = document.getElementById('search-results');
  ...
  mapsindoors.services.LocationsService.getLocations(searchParameters).then(locations => {
    // Reset search results list
    searchResultsElement.innerHTML = null;
    ...
  });
}
```

</mi-tab-panel>
<mi-tab-panel id="components">

```js
// main.js

// Get list element reference
const miListElement = document.querySelector('mi-list');

miSearchElement.addEventListener('results', (event) => {
  // Reset search results list
  miListElement.innerHTML = null;
  ...
});
```

</mi-tab-panel>
</mi-tabs>

* Add a _for_ loop and append every result to the search results list element.

<mi-tabs>
<mi-tab label="Manually" tab-for="manually"></mi-tab>
<mi-tab label="MI Components" tab-for="components"></mi-tab>
<mi-tab-panel id="manually">

```js
// main.js

function onSearch() {
  ...
  mapsindoors.services.LocationsService.getLocations(searchParameters).then(locations => {
    ...
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

```js
// main.js

miSearchElement.addEventListener('results', (event) => {
  ...
  // Append new search results
  event.detail.forEach(location => {
    const miListItemElement = document.createElement('mi-list-item-location');
    miListItemElement.location = location;
    miListElement.appendChild(miListItemElement);
  });
});
```

</mi-tab-panel>
</mi-tabs>

<!-- Filter map -->
{% include "src/shared/getting-started/search/filter-map.md" %}

To filter the map to only display the search results you can use the `filter` method.

<mi-tabs>
<mi-tab label="Manually" tab-for="manually"></mi-tab>
<mi-tab label="MI Components" tab-for="components"></mi-tab>
<mi-tab-panel id="manually">

* Call `mapsIndoorsInstance.filter` with an array of location IDs.

```js
// main.js

function onSearch() {
  ...
  mapsindoors.services.LocationsService.getLocations(searchParameters).then(locations => {
    ...
    // Filter map to only display search results
    mapsIndoorsInstance.filter(locations.map(location => location.id), false);
  });
}
```

</mi-tab-panel>
<mi-tab-panel id="components">

```js
// main.js

miSearchElement.addEventListener('results', (event) => {
  ...
  // Get the MapsIndoors instance
  miMapElement.getMapsIndoorsInstance().then((mapsIndoorsInstance) => {
    // Filter map to only display search results
    mapsIndoorsInstance.filter(event.detail.map(location => location.id), false);
  });
});
```

</mi-tab-panel>
</mi-tabs>

> To remove the location filter again, call `mapsIndoorsInstance.filter(null)`.

<p class="next-article"><a class="mi-button mi-button--outline" href="{{ site.url }}/web/v4/getting-started/directions/">Next up: Directions</a></p>
