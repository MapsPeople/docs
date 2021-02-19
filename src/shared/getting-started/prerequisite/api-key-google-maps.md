## Google Maps API key

Firstly we need to [setup at a new project in the Google Cloud Console](https://developers.google.com/maps/gmp-get-started). When the project is created the following following APIs and the specific SDK you plan to use must be enabled from the [Maps API Library Page](https://console.cloud.google.com/apis/library?filter=category:maps).

* Google Maps Distance Matrix API
* Google Maps Directions API
* Google Places API Web Service
* Maps SDK for Android/iOS or Maps JavaScript API

When the 3 APIs and SDK is enabled you can retrieve the API key from the [Credentials page](https://console.cloud.google.com/project/_/apiui/credential). On the Credentials page, click Create credentials > API key.