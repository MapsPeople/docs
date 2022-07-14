---
title: Integrating MapsIndoors into your own App
toc: true
eleventyNavigation:
  parent: getting-started-android
  key: getting-started-android-mapsindoors-template
  title: Integrating MapsIndoors into your own App
  order: 9999
---

The **MapsIndoors Template** is a downloadable starting point for you to integrate basic usage of MapsIndoors, containing search and directions functionalities, into your existing app. If you just want to get started with a simple solution with no customisation, this should fulfil your needs. Going through this guide will also teach you some principles on how MapsIndoors interacts with an app, and is a natural next step after the "Getting Started" guides.

If you need more customisation you can implementing your own solution using the documentation found [here]({{site.url}}/content/map/), or modify this code as needed.

**MapsIndoors Template** is provided as is, and can be integrated into your existing app. If you need further features, or want to customize existing ones, you're free to modify this one to your needs. However, MapsPeople offers no support or responsibility for changes made.

## Prerequisites

Before you get started, you need to get the API keys needed. This process is the same for both platforms.

### Get Your Google Maps API key

First, you need to [setup at a new project in the Google Cloud Console](https://developers.google.com/maps/gmp-get-started), just like you did in the ["Getting Started"]({{site.url}}/content/getting-started/android) guide (**Please note:** You are going to need a Google Billing Account for this step, so go ahead and [create one](https://cloud.google.com/billing/docs/how-to/manage-billing-account#create_a_new_billing_account) if you haven't already). When the project is created, the following APIs and the specific SDK you plan to use must be enabled from the [Maps API Library Page](https://console.cloud.google.com/apis/library?filter=category:maps).

* Google Maps Distance Matrix API
* Google Maps Directions API
* Google Places API Web Service
* Maps SDK for Android/iOS

When the above 3 APIs and the relevant SDK are enabled, you can retrieve the API key from the [Credentials page](https://console.cloud.google.com/project/_/apiui/credential). On the Credentials page, click _Create credentials_ > _API key_.

### Get Your MapsIndoors API key

If you are not a customer yet, you can use this demo MapsIndoors API key `{{sdk.tutorialAPIKey}}` to follow this guide, or you can [contact MapsPeople](https://resources.mapspeople.com/contact-us) to get your building drawings processed and hosted by us to receive a unique API key. For the purpose of this guide, both methods will work.

## Integrating the App

> NOTE: This app was designed to be displayed in Portrait Mode. While it will work in Landscape Mode, some UI elements may look distorted or out-of-place.

First, download or clone the pre-made project from GitHub: [https://github.com/MapsPeople/MapsIndoorsTemplate-Android](https://github.com/MapsPeople/MapsIndoorsTemplate-Android).

* Open the project you just downloaded, and copy the classes located in `java/com/mapspeople/sportseventactivity` into your own App
* Add the Maven repository ([http://maven.mapsindoors.com/](http://maven.mapsindoors.com/)) to your project's `build.gradle` file
* Add the following dependencies from `build.gradle`:

```json
implementation 'com.google.code.gson:gson:2.8.6'
implementation 'com.mapspeople.mapsindoors:mapsindoorssdk:3.12.1'
implementation 'com.squareup.okhttp3:okhttp:4.9.0'
implementation "com.google.android.gms:play-services-maps:16.1.0"
```

* For the next step, this project uses [Glide](https://bumptech.github.io/glide/) for image handling in your application. If you are not using Glide, either import it, or if you use a different image library, you need to change some lines of code in the app. What you need to change them to, depends on the library you use. The lines are:

```json
DirectionStepFragment.kt: 50
DirectionStepFragment.kt: 53
DirectionStepFragment.kt: 56
DirectionStepFragment.kt: 61
MPSearchItemRecyclerViewAdapter.kt: 31
```

> NOTE: Material 1.5 is used for this app. If another version is used some UI elements might differ from the initial application. If you do not want to use the Material library you will need to find alternatives for some view elements inside the fragments.

* Copy the layout and drawables from the `res` folder into your app
* Copy the `String` values from `res/values` into your app
* Copy the `google_maps_api.xml` file to your project and insert a valid Google Maps API key - [See more info on how to do that here.]({{site.url}}/content/getting-started/android/prerequisites/)
* Add the API key to the manifest file under the `Application` tag like so:

```json
<meta-data
        android:name="com.google.android.geo.API_KEY"
        android:value="@string/google_maps_key" />
```

* Change the places where the navigation graph is used, if you are not using navigation. Alternatively, create a navigation action for MapsFragment. If so, change the navigation controller call on `line: 74` inside `MapsFragment.kt` under the TODO
* Check the `FirstFragment.kt` class on how to apply User Roles to the map fragment

### The Final Result

![android-single-page-app](/assets/single-page-app/Android_Single_Page_App.png)

## Summary

Congratulations! You now have a functioning map in your own app, with the ability to both search for Locations and generate directions! If you want more advanced features, check out [further documentation]({{site.url}}/content/map/), or modify the existing code from this tutorial to suit your needs!
