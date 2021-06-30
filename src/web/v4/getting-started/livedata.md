---
title: Enable Live Data
toc: false
eleventyNavigation:
  title: Enable Live Data
  key: web-v4-getting-started-enable-live-data
  parent: web-v4-getting-started
  order: 170
---

{% include "src/shared/live-data/live-data-intro.md" %}

<!-- JS Fiddle intro -->
{% include "src/web/v4/getting-started/js-fiddle-intro.md" %}

<mi-tabs>
<mi-tab label="Manually" tab-for="manually"></mi-tab>
<mi-tab label="MI Components" tab-for="components"></mi-tab>
  <mi-tab-panel id="manually">
  <iframe width="100%" src="//jsfiddle.net/simonlaustsen/3z9tby8q/37/embedded/js,html,result/" frameborder="0"></iframe>
  </mi-tab-panel>

  <mi-tab-panel id="components">
    <iframe width="100%" src="//jsfiddle.net/simonlaustsen/fb5rauto/19/embedded/js,html,result/" frameborder="0"></iframe>
  </mi-tab-panel>
</mi-tabs>

{% include "src/shared/getting-started/live-data/live-position-demo-preconditions.md" %}

To enable Live Data in your web app, create an instance of `LiveDataManager`. Call the method `enableLiveData()` on it with a [Domain Type]({{ site.url }}/web/v4/live-data/#domain-type).

This should be done after you have initialized your MapsIndoors instance, since the instance must be given as argument in the `LiveDataManager` constructor:

```js
// main.js
...
const mapsIndoorsInstance = new mapsindoors.MapsIndoors({
    mapView: mapViewInstance
});
...
const liveDataManagerInstance = new mapsindoors.LiveDataManager(mapsIndoorsInstance);
liveDataManagerInstance.enableLiveData(mapsindoors.LiveDataManager.LiveDataDomainTypes.POSITION);
```

In the example above we create an instance of `LiveDataManager` and enable Live Data for the "Position" Domain type.

{% include "src/shared/getting-started/live-data/live-position-demo-result.md" %}

Learn more about controlling and rendering Live Data in MapsIndoors in the [introduction to Live Data]({{ site.url }}/web/v4/live-data/).

<!-- Congrats -->
{% include "src/shared/getting-started/congrats.md" %}