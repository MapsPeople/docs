---
title: Integrating MapsIndoors into your own App
toc: true
eleventyNavigation:
  parent: getting-started
  key: getting-started-simple-map
  title: Integrating MapsIndoors into your own App
  order: 9999
---

The **Simple Map App** is both a full app and plug-and-play code for you to integrate basic usage of MapsIndoors, containing search and directions functionalities, in your existing app. If you just want to get started with a simple solution with no customisation, this should fulfil your needs. Going through this guide will also teach you some principles on how MapsIndoors interacts with an app, and is a natural next step after the "Getting Started" guides.

If you need more customisation you can implementing your own solution using the documentation found [here]({{site.url}}/content/map/), or modify this code as needed.

**Simple Map App** is provided as is, and can be integrated into your existing app. If you need further features, or want to customize existing ones, you're free to modify this one to your needs. However, MapsPeople offers no support or responsibility for changes made.

## Prerequisites

Before you get started, you need to get the API keys needed. This process is the same for both platforms.

### Get Your Google Maps API key

First, you need to [setup at a new project in the Google Cloud Console](https://developers.google.com/maps/gmp-get-started) (**Please note:** You are going to need a Google Billing Account for this step, so go ahead and [create one](https://cloud.google.com/billing/docs/how-to/manage-billing-account#create_a_new_billing_account) if you haven't already). When the project is created, the following APIs and the specific SDK you plan to use must be enabled from the [Maps API Library Page](https://console.cloud.google.com/apis/library?filter=category:maps).

* Google Maps Distance Matrix API
* Google Maps Directions API
* Google Places API Web Service
* Maps SDK for Android/iOS - if you're developing an app for Android/iOS respectively **_OR_** Maps JavaScript API if you're developing a web application.

When the above 3 APIs and the relevant SDK are enabled, you can retrieve the API key from the [Credentials page](https://console.cloud.google.com/project/_/apiui/credential). On the Credentials page, click _Create credentials_ > _API key_.

### Get Your MapsIndoors API key

If you are not a customer yet, you can use this demo MapsIndoors API key `{{sdk.tutorialAPIKey}}` to follow this guide, or you can [contact MapsPeople](https://resources.mapspeople.com/contact-us) to get your building drawings processed and hosted by us to receive a unique API key. For the purpose of this guide, both methods will work.

## Android

First, download or clone the pre-made project from GitHub: [link](_INSERT ANDROID REPO LINK HERE_).

> NOTE: This Fragment was designed to be displayed in Portrait Mode. While it will work in Landscape Mode, some UI elements may look distorted or out-of-place.

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

## iOS

This app provides an example of how to use the MapsIndoors SDK in SwiftUI.

First, download or clone the pre-made project from GitHub: [link](_INSERT IOS REPO LINK HERE_)

> NOTE: This app is designed to be displayed in Portrait Mode. While it will work in Landscape Mode, some UI elements may look distorted or out-of-place.

### Getting Started

* From the terminal, in the path you cloned the repository to, run `pod install`
* Open the file `xxxxx.xcworkspace` in Xcode, or your editor of choice
* Make a copy of the `MapsIndoors-Info-Sample.plist` file and name it `MapsIndoors-Info.plist`
* Add your MapsIndoors API key and Google Maps API key to the `MapsIndoors-Info.plist` file and run the project

### Using the Functionality in your Own App

This project is specifically built so you can easily re-use this functionality in your own application, without further issue.

* To reuse the code in your app, drag and drop the `Views` and `Services` folders, and all the `Assets` except for the `AppIcon` into your project
* Create a copy of the `MapsIndoors-Info-Sample.plist` file and name it `MapsIndoors-Info.plist`
* Add your MapsIndoors API key and Google Maps API key to the `MapsIndoors-Info.plist` file
* Look at `ViewController.swift` for an example of how to initialize the MapsIndoors SDK and use the **Simple Map App** implementation in an UIKit app. The `ViewController.swift` reads the API keys retrieved as described above from the file `MapsIndoors-Info.plist`
* Update your podfile so it matches the podfile in the MapsIndoors **Simple Map App**

<!-- Known Issues -->
{% include "src/content/shared/known-issues-ios.md" %}

### The Final Result

![ios-single-page-app](/assets/single-page-app/iOS_Single_Page_App.png)


## Summary

Congratulations! You now have a functioning map in your own app, with the ability to both search for Locations and generate directions! If you want more advanced features, check out [further documentation]({{site.url}}/content/map/), or modify the existing code from this tutorial to suit your needs!
