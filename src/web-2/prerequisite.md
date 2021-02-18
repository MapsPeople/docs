---
title: Prerequisite
eleventyNavigation:
  key: web-v4-prerequisite
  parent: web-v4-getting-started
  order: 31
---

<!-- Intro -->
{% include "../shared/prerequisite/intro.md" %}

<!-- Google Maps API key -->
{% include "../shared/prerequisite/api-key-google-maps.md" %}

<!-- MapsIndoors API key -->
{% include "../shared/prerequisite/api-key-mapsindoors.md" %}

<!-- Set up your environment -->
{% include "../shared/prerequisite/set-up-environment.md" %}

When building your own app you can choose between two paths either doing it all yourself or by implementing our configurable [MapsIndoors Web Components](http://components.mapsindoors.com/). Each of the following steps will present an option for both paths.

<mi-tabs>
<mi-tab label="Vanilla JS" tab-for="vanilla"></mi-tab>
<mi-tab label="Web Components" tab-for="components"></mi-tab>

<mi-tab-panel id="vanilla">

### Loading the MapsIndoors SDK

The MapsIndoors SDK is loaded by using a script tag like the one below:

```html
<script src="https://app.mapsindoors.com/mapsindoors/js/sdk/4.5.0/mapsindoors-4.5.0.js.gz?apikey=YOUR_MAPSINDOORS_API_KEY"></script>
```

The `apikey` parameter contains your application's MapsIndoors API key.

### Loading the Google Maps JavaScript API

The Google Maps API is loaded by using a script tag like the one below:

```html
<script src="https://maps.googleapis.com/maps/api/js?libraries=geometry&key=YOUR_GOOGLE_API_KEY"></script>
```

The `libraries` parameter is for loading additional libraries for the Google Maps API. The MapsIndoors SDK is dependent on the Geometry Library from Google.

</mi-tab-panel>

<mi-tab-panel id="components">

### Install dependencies

From the terminal you should now install the MapsIndoors components dependency

```js
npm install @mapsindoors/components
```

Followed by the TypeScript definitions for Google Maps JavaScript API

```js
npm install @types/googlemaps
```

</mi-tab-panel>
</mi-tabs>

{% include "../shared/prerequisite/post-state.md" %}
