---
title: Prerequisites
toc: true
eleventyNavigation:
  title: Prerequisites
  key: legacy-android-v3-getting-started-web-prerequisites
  parent: legacy-android-v3-getting-started-web
  order: 110
---

<!-- Overview -->
{% include "src/content/shared/getting-started/prerequisites/overview.md" %}

## Get your Google Maps API Keys

You need to setup the Google Maps API in your project by following the steps in the link below:

* [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/get-api-key)

Some Web Service APIs are also needed for the MapsIndoors SDK, so make sure to enable them when getting your key:

* [Google Maps Distance Matrix API](https://developers.google.com/maps/documentation/distance-matrix/start)
* [Google Maps Directions API](https://developers.google.com/maps/documentation/directions/start)
* [Google Places API Web Service](https://developers.google.com/places/web-service/intro)

Remember to enable relevant Maps products (i.e. Maps JavaScript API) in your Google project and include these on your API key if you apply restrictions.

## Get your MapsIndoors API Key

In order to include MapsIndoors in your app, you need an API key. If you are not a customer you can use this API key `{{sdk.tutorialAPIKey}}` to follow the guide.

In order to include MapsIndoors in your own app with your own content, you need to [contact MapsPeople](https://resources.mapspeople.com/contact-us) to get your building drawings processed and hosted by us.

You will receive a unique API key to use when access has been granted. If you are exploring how this service can become part of your own product, you can read about [partnering with MapsPeople here](https://www.mapspeople.com/become-a-partner).

<p class="next-article"><a class="mi-button mi-button--outline" href="{{ site.url }}/content/getting-started/web/new-project/">Next up: Create a new project</a>
