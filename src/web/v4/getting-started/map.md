---
title: Show a Map
toc: true
eleventyNavigation:
    title: Show a Map
    key: web-v4-getting-started-map
    parent: web-v4-getting-started
    order: 130
---

<!-- Overview -->

{% include "src/shared/getting-started/map/overview.md" %}

<!-- Set up MapsIndoors -->

{% include "src/shared/getting-started/map/show-map.md" %}

<mi-tabs>
<mi-tab label="Manually" tab-for="manually"></mi-tab>
<mi-tab label="MI Components" tab-for="components"></mi-tab>

<mi-tab-panel id="manually">
The MapsIndoors SDK is hosted on a Content Delivery Network (CDN) and should be loaded using a script tag.

Insert the MapsIndoors SDK script tag into `<head>`, followed by the Mapbox script and style tag:

```html/9-11
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MapsIndoors</title>
  <script src="https://app.mapsindoors.com/mapsindoors/js/sdk/4.17.0/mapsindoors-4.17.0.js.gz?apikey=YOUR_MAPSINDOORS_API_KEY"></script>
  <script src='https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.js'></script>
  <link href='https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css' rel='stylesheet' />
</head>
<body>
  <script src="main.js"></script>
</body>
</html>
```

> Remember to add your API keys to the links in your code. You can use the demo MapsIndoors API key showing "The White House": {{sdk.tutorialAPIKey}}

Add an empty `<div>` element to `<body>` with the `id` attribute set to "map":

```html/14
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MapsIndoors</title>
  <script src="https://app.mapsindoors.com/mapsindoors/js/sdk/4.17.0/mapsindoors-4.17.0.js.gz?apikey=YOUR_MAPSINDOORS_API_KEY"></script>
  <script src='https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.js'></script>
  <link href='https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css' rel='stylesheet' />
</head>
<body>
  <div id="map" style="width: 600px; height: 600px;"></div>
  <script src="main.js"></script>
</body>
</html>
```

To load data and display it on the map, we need to create a new _instance_ of the [`MapsIndoors` class](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.MapsIndoors.html#MapsIndoors) with a [`mapView` instance](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.mapView.MapboxView.html) with a few _properties_ set. This is all done by placing the following code in the `main.js` file you created earlier:

```js
// main.js

const mapViewOptions = {
    accessToken: "YOUR_MAPBOX_ACCESS_TOKEN",
    element: document.getElementById("map"),
    center: { lat: 38.8974905, lng: -77.0362723 }, // The White House
    zoom: 17,
    maxZoom: 22,
};
const mapViewInstance = new mapsindoors.mapView.MapboxView(mapViewOptions);
const mapsIndoorsInstance = new mapsindoors.MapsIndoors({
    mapView: mapViewInstance,
});
```

What happens in this snippet is we create a `mapViewInstance` that pulls up a `MapboxView` with some `mapViewOptions`. The options define which element in the html-file to display the map in (in this case `<div id="map">`), where the map should center, what zoom level to display, and what the max zoom level is.

> Go here https://docs.mapbox.com/help/glossary/access-token/ for information about how to obtain a Mapbox access token.

<!-- Add screenshot -->

</mi-tab-panel>
<mi-tab-panel id="components">

Using the `<mi-map-mapbox>` component, the MapsIndoors JS SDK is automatically inserted into the DOM when initialized.

The MapsIndoors Web Components library can be loaded using [unpkg](https://unpkg.com/), a widely used CDN for everything on [npm](https://npmjs.com).

Insert script tag into `<head>`:

```html/9
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MapsIndoors</title>
  <script src="https://unpkg.com/@mapsindoors/components@8.2.0/dist/mi-components/mi-components.js"></script>
</head>
<body>
  <script src="main.js"></script>
</body>
</html>
```

> Check [@mapsindoors/components](https://www.npmjs.com/package/@mapsindoors/components) for latest version.

After you added the script tag into `<head>`, add the `<mi-map-mapbox>` custom element into `<body>`. We need to add and populate the `accessToken` and `mi-api-key` attributes with your access token and API key as well:

```html/12
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MapsIndoors</title>
  <script src="https://unpkg.com/@mapsindoors/components@8.2.0/dist/mi-components/mi-components.js"></script>
</head>
<body>
  <mi-map-mapbox style="width: 600px; height: 600px;" accessToken="YOUR_MAPBOX_ACCESS_TOKEN" mi-api-key="YOUR_MAPSINDOORS_API_KEY">
  </mi-map-mapbox>
  <script src="main.js"></script>
</body>
</html>
```

> Remember to add your API keys where indicated. You can use the demo MapsIndoors API key showing "The White House": {{sdk.tutorialAPIKey}}

To center the map correctly, you need need the Mapbox _instance_ in your JavaScript-file.

First we get a reference to the `<mi-map-mapbox>` element. Then we attach the [`mapsIndoorsReady`](https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.MapsIndoors.html#event:ready) event listener so we'll know when MapsIndoors is ready after loading. Lastly, on the `mapsIndoorsReady` event, get the Mapbox _instance_ and call its [`setCenter` method](https://docs.mapbox.com/mapbox-gl-js/api/map/#map#setcenter) to center the map on the loaded data:

```js
// main.js

const miMapElement = document.querySelector("mi-map-mapbox");

miMapElement.addEventListener("mapsIndoorsReady", () => {
    miMapElement.getMapInstance().then((mapInstance) => {
        mapInstance.setCenter([-77.0362723, 38.8974905]); // The White House
    });
});
```

> For more information on how to configure the `<mi-map-mapbox>` component, see [components.mapsindoors.com/map-mapbox](https://components.mapsindoors.com/map-mapbox/).

</mi-tab-panel>
</mi-tabs>

You should now see a Mapbox map with MapsIndoors data loaded on top.

## Show a Floor Selector

Next, we'll add a Floor Selector for changing between Floors.

<mi-tabs>
<mi-tab label="Manually" tab-for="manually"></mi-tab>
<mi-tab label="MI Components" tab-for="components"></mi-tab>
<mi-tab-panel id="manually">

First, we add an empty `<div>` element programmatically. Then we create a new `FloorSelector` _instance_ and push the `floorSelectorElement` to the `mapboxInstance` to position it as a map controller:

```js/11,14-16
// main.js

const mapViewOptions = {
  accessToken: "YOUR_MAPBOX_ACCESS_TOKEN",
  element: document.getElementById('map'),
  center: { lat: 38.8974905, lng: -77.0362723 }, // The White House
  zoom: 17,
  maxZoom: 22,
};
const mapViewInstance = new mapsindoors.mapView.MapboxView(mapViewOptions);
const mapsIndoorsInstance = new mapsindoors.MapsIndoors({ mapView: mapViewInstance });
const mapboxInstance = mapViewInstance.getMap();

// Floor Selector
const floorSelectorElement = document.createElement('div');
new mapsindoors.FloorSelector(floorSelectorElement, mapsIndoorsInstance);
mapboxInstance.addControl({ onAdd: function () { return floorSelectorElement }, onRemove: function () { } });
```

https://docs.mapbox.com/mapbox-gl-js/api/map/#map#addcontrol

</mi-tab-panel>
<mi-tab-panel id="components">

Using the `<mi-map-mapbox>` element, you can add the [floorSelectorControlPosition attribute](https://components.mapsindoors.com/map-mapbox/) to your existing element. In this case with the value `"TOP_RIGHT"`:

```html/12
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MapsIndoors</title>
  <script src="https://unpkg.com/@mapsindoors/components@8.2.0/dist/mi-components/mi-components.js"></script>
</head>
<body>
  <mi-map-mapbox style="width: 600px; height: 600px;" accessToken="YOUR_MAPBOX_ACCESS_TOKEN" mi-api-key="YOUR_MAPSINDOORS_API_KEY" floor-selector-control-position="TOP_RIGHT">
  </mi-map-mapbox>
  <script src="main.js"></script>
</body>
</html>
```

> See all available control positions in the [Mapbox Documentation](https://docs.mapbox.com/mapbox-gl-js/api/map/#map#addcontrol).

</mi-tab-panel>

You should now be able to switch between the first and second Floors of The White House.

</mi-tabs>

<!-- JS Fiddle intro -->

{% include "src/web/v4/getting-started/js-fiddle-intro.md" %}

<mi-tabs>
<mi-tab label="Manually" tab-for="manually"></mi-tab>
<mi-tab label="MI Components" tab-for="components"></mi-tab>
  <mi-tab-panel id="manually">
    <iframe width="100%" src="//jsfiddle.net/simonlaustsen/3z9tby8q/42/embedded/js,html,result/" frameborder="0"></iframe>
  </mi-tab-panel>

  <mi-tab-panel id="components">
    <iframe width="100%" src="//jsfiddle.net/simonlaustsen/fb5rauto/24/embedded/js,html,result/" frameborder="0"></iframe>
  </mi-tab-panel>
</mi-tabs>

<!-- Add screenshot -->

<p class="next-article"><a class="mi-button mi-button--outline" href="{{ site.url }}/web/v4/getting-started/search/">Next up: Search</a></p>
