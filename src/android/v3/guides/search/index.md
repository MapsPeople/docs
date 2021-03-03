---
title: Search in MapsIndoors
eleventyNavigation:
  key: android-v3-guides-search
  parent: android-v3-guides
  title: Search in MapsIndoors
  order: 0
---

{% include "src/shared/guides/search/overview.md" %}

See the full list of parameters:

{% include "src/android/v3/guides/search/extras/android-filter-content.md" %}

## Example of creating a search query

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

## Displaying your search results on the map

{% include "src/shared/guides/search/displaying-search-results.md" %}

## Examples of filtering the map to display searched locations on the map

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
