---
title: Prerequisites
toc: true
eleventyNavigation:
  title: Prerequisites
  key: legacy-android-v3-getting-started-ios-prerequisites
  parent: legacy-android-v3-getting-started-ios
  order: 90
---

MapsIndoors collaborates with Google Maps to provide you with an interactive map of the outside and inside world. In this section, you will learn the prerequisites needed to be met before you can start building your app.

## Google Maps API Key

Firstly, you need to [setup a new project in the Google Cloud Console.](https://developers.google.com/maps/gmp-get-started). Afterwards, you should navigate to the [Maps API Library Page](https://console.cloud.google.com/apis/library?filter=category:maps), and ensure the following APIs and SDK are enabled,

* Google Maps Distance Matrix API
* Google Maps Directions API
* Google Places API Web Service  
* Maps SDK for Android/iOS or Maps JavaScript API

Finally, retrieve your API key from the [Credentials Page](https://console.cloud.google.com/project/_/apiui/credential) at, create credentials -> API key

## MapsIndoors API Key

For the purposes of this guide you can use the MapsIndoors API demo key `d876ff0e60bb430b8fabb145`. Alternatively, feel free to [contact MapsPeople](https://resources.mapspeople.com/contact-us) with your building drawings so you can receive a unique API key.

<p class="next-article"><a class="mi-button mi-button--outline" href="{{ site.url }}/content/getting-started/ios/set-up-your-environment/">Next up: Set Up Your Environment</a></p>
