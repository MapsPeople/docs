---
title: Search in MapsIndoors
eleventyNavigation:
  key: android-v3-guides-search
  parent: android-v3-guides
  title: Search in MapsIndoors
  order: 10
---

{% include "src/shared/guides/search/overview.md" %}

See the full list of parameters:

{% include "src/android/v3/guides/search/extras/android-filter-content.md" %}

## Example of creating a Search Query

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

{% include "src/android/v3/guides/search/extras/java-query-filter-example.md" %}

</mi-tab-panel>
<mi-tab-panel id="kotlin">

{% include "src/android/v3/guides/search/extras/kotlin-query-filter-example.md" %}

</mi-tab-panel>
</mi-tabs>

{% include "src/shared/guides/search/search-ranking.md" %}

## Display Search Results on the Map

{% include "src/shared/guides/search/displaying-search-results.md" %}

## Example of filtering the map to display searched Locations on the map

<mi-tabs>
<mi-tab label="Java" tab-for="androidJava"></mi-tab>
<mi-tab label="Kotlin" tab-for="androidKotlin"></mi-tab>
<mi-tab-panel id="androidJava">

{% include "src/android/v3/guides/search/extras/java-display-search.md" %}

</mi-tab-panel>
<mi-tab-panel id="androidKotlin">

{% include "src/android/v3/guides/search/extras/kotlin-display-search.md" %}

</mi-tab-panel>
</mi-tabs>

## Clearing the map of your filter

{% include "src/shared/guides/search/clear-search-filter-on-map.md" %}

## Example of clearing your map filter to show all Locations again

<mi-tabs>
<mi-tab label="Java" tab-for="androidJava"></mi-tab>
<mi-tab label="Kotlin" tab-for="androidKotlin"></mi-tab>
<mi-tab-panel id="androidJava">

{% include "src/android/v3/guides/search/extras/java-clear-search.md" %}

</mi-tab-panel>
<mi-tab-panel id="androidKotlin">

{% include "src/android/v3/guides/search/extras/kotlin-clear-search.md" %}

</mi-tab-panel>
</mi-tabs>
