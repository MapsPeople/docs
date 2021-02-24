---
title: Search in MapsIndoors
eleventyNavigation:
  key: android-v3-guides-search
  parent: android-v3-guides
  title: Search in MapsIndoors
  order: 0
---

{% include "src/shared/guides/search/overview.md" %}

{% include "src/android/v3/guides/search/extras/android-filter-content.md" %}

## Examples of creating a search query for each platform

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

All three return a list of Locations from your Solution matching the parameters they are given. The results are ranked upon the 3 following factors:

* If a "near" parameter is set, how close is the origin point to the result?
* How well does the search input text match the text of the result (using the "Levenshtein distance" algorithm)?
* Which kind of geodata is the result (e.g. Buildings are ranked over POIs)?

This means that the first item in the search result list will be the one matching the 3 factors best and so forth.

## Displaying your search results on the map

When displaying the search results it is helpful to filter the map to only show matching Locations. Matching Buildings and Venues will still be shown on the map, as they give context to the user, even if they aren't selectable on the map.

## Examples of filtering the map to display searched locations on the map

<mi-tabs>
<mi-tab label="Kotlin" tab-for="androidKotlin"></mi-tab>
<mi-tab label="Java" tab-for="androidJava"></mi-tab>
<mi-tab-panel id="androidKotlin">

{% include "src/android/v3/guides/search/extras/kotlin-display-search.md" %}

</mi-tab-panel>
<mi-tab-panel id="androidJava">

{% include "src/android/v3/guides/search/extras/java-display-search.md" %}

</mi-tab-panel>
</mi-tabs>
