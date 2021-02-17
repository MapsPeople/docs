---
title: Getting Started
eleventyNavigation:
  key: getting-started
  parent: index
  order: 32
---

Welcome to the Getting Started Guide. This guide takes you from zero to and simple application with MapsIndoors data shown.

MapsIndoors is built on top of Google Maps and in the following 3 steps we will run through the necessary steps of setting up a clean project with Google Maps and Mapsindoors.

## Get a Google Maps API key

Firstly we need to [setup at a new project in the Google Cloud Console](https://developers.google.com/maps/gmp-get-started). When the project is created the following following APIs and the specific SDK you plan to use must be enabled from the [Maps API Library Page](https://console.cloud.google.com/apis/library?filter=category:maps).

* Google Maps Distance Matrix API
* Google Maps Directions API
* Google Places API Web Service
* Maps SDK for Android/iOS or Maps JavaScript API

When the 3 APIs and SDK is enabled you can retrieve the API key from the [Credentials page](https://console.cloud.google.com/project/_/apiui/credential). On the Credentials page, click Create credentials > API key.

Now we have a Google Maps API key with the necessary APIs and SDK enabled.

## Get your MapsIndoors API key

If you are not a customer you can use this demo MapsIndoors API key `79f8e7daff76489dace4f9f9` to follow this guide or you can [contact MapsPeople](https://resources.mapspeople.com/contact-us) to get your building drawings processed and hosted by us to receive a unique API key.

## Set up your environment

To set up your environment each platform has some specific tools which is needed. Please select an appropriate tab and continue.

<mi-tabs>
<mi-tab label="Android - Java" tab-for="a-java"></mi-tab>
<mi-tab label="Android - Kotlin" tab-for="a-kotlin"></mi-tab>
<mi-tab label="iOS" tab-for="ios"></mi-tab>
<mi-tab label="Web" tab-for="web"></mi-tab>
<mi-tab label="Web Components" tab-for="web-components"></mi-tab>
<mi-tab-panel id="a-java">

{% include "./environment/java.md" %}

</mi-tab-panel>
<mi-tab-panel id="a-kotlin">

{% include "./environment/kotlin.md" %}

</mi-tab-panel>
<mi-tab-panel id="ios">

{% include "./environment/ios.md" %}

</mi-tab-panel>
<mi-tab-panel id="web">

{% include "./environment/web.md" %}

</mi-tab-panel>
<mi-tab-panel id="web-components">

{% include "./environment/web-components.md" %}

</mi-tab-panel>
</mi-tabs>

## Setup a Google Map with MapsIndoors

<mi-tabs>
<mi-tab label="Android - Java" tab-for="a-java"></mi-tab>
<mi-tab label="Android - Kotlin" tab-for="a-kotlin"></mi-tab>
<mi-tab label="iOS" tab-for="ios"></mi-tab>
<mi-tab label="Web" tab-for="web"></mi-tab>
<mi-tab label="Web Components" tab-for="web-components"></mi-tab>
<mi-tab-panel id="a-java">
</mi-tab-panel>
<mi-tab-panel id="a-kotlin">
</mi-tab-panel>
<mi-tab-panel id="ios">
</mi-tab-panel>
<mi-tab-panel id="web">
</mi-tab-panel>
<mi-tab-panel id="web-components">
</mi-tab-panel>
</mi-tabs>
