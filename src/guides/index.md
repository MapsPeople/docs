---
title: Search in MapsIndoors
eleventyNavigation:
  parent: index
  key: Search in MapsIndoors
  order: 10
---

Searching through your MapsIndoors data is an integral part of a great user experience with your maps. Users can look for places to go, or filter what is shown on the map.

Searches work on all MapsIndoors geodata. It is up to you to create a search experience that fits your use case. To aid you in this, there are a range of filters you can apply to the search queries to get the best results. E.g. you can filter by Categories, search only a specific part of the map or search near a Location.

See the full list of parameters:

<mi-tabs>
    <mi-tab label="Android" tab-for="android"></mi-tab>
    <mi-tab label="iOS" tab-for="ios"></mi-tab>
    <mi-tab label="Web" tab-for="web"></mi-tab>
    <mi-tab-panel id="android">
    {% include "../guides/table_content/android-filter-content.md" %}
    </mi-tab-panel>
    <mi-tab-panel id="ios">
    {% include "../guides/table_content/ios-filter-content.md" %}
    </mi-tab-panel>
    <mi-tab-panel id="web">
    {% include "../guides/table_content/web-filter-content.md" %}
    </mi-tab-panel>
</mi-tabs>

## Examples of creating a search query for each platform

<mi-tabs>
    <mi-tab label="Android - Kotlin" tab-for="androidKotlin"></mi-tab>
    <mi-tab label="Android - Java" tab-for="androidJava"></mi-tab>
    <mi-tab label="iOS" tab-for="ios"></mi-tab>
    <mi-tab label="Web" tab-for="web"></mi-tab>
    <mi-tab-panel id="androidKotlin">
    {% include "../guides/code_example_content/kotlin-query-filter-example.md" %}
    </mi-tab-panel>
    <mi-tab-panel id="androidJava">
    {% include "../guides/code_example_content/java-query-filter-example.md" %}
    </mi-tab-panel>
    <mi-tab-panel id="ios">
    </mi-tab-panel>
    <mi-tab-panel id="web">
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
    <mi-tab label="Android - Kotlin" tab-for="androidKotlin"></mi-tab>
    <mi-tab label="Android - Java" tab-for="androidJava"></mi-tab>
    <mi-tab label="iOS" tab-for="ios"></mi-tab>
    <mi-tab label="Web" tab-for="web"></mi-tab>
    <mi-tab-panel id="androidKotlin">
    {% include "../guides/code_example_content/kotlin-display-search.md" %}
    </mi-tab-panel>
    <mi-tab-panel id="androidJava">
    {% include "../guides/code_example_content/java-display-search.md" %}
    </mi-tab-panel>
    <mi-tab-panel id="ios">
    </mi-tab-panel>
    <mi-tab-panel id="web">
    </mi-tab-panel>
</mi-tabs>
