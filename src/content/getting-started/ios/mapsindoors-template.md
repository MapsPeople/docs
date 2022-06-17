---
title: Integrating MapsIndoors into your own App
toc: true
eleventyNavigation:
  parent: getting-started-ios
  key: getting-started-ios-mapsindoors-template
  title: Integrating MapsIndoors into your own App
  order: 9999
---

The **MapsIndoors Template** is a downloadable starting point for you to integrate basic usage of MapsIndoors, containing search and directions functionalities, into your existing app. If you just want to get started with a simple solution with no customisation, this should fulfil your needs. Going through this guide will also teach you some principles on how MapsIndoors interacts with an app, and is a natural next step after the "Getting Started" guides.

If you need more customisation you can implementing your own solution using the documentation found [here]({{site.url}}/content/map/), or modify this code as needed.

**MapsIndoors Template** is provided as is, and can be integrated into your existing app. If you need further features, or want to customize existing ones, you're free to modify this one to your needs. However, MapsPeople offers no support or responsibility for changes made.

## Prerequisites

Before you get started, you need to get the API keys needed. This process is the same for both platforms.

### Get Your Google Maps API key

First, you need to [setup at a new project in the Google Cloud Console](https://developers.google.com/maps/gmp-get-started), just like you did in the ["Getting Started"]({{site.url}}/content/getting-started/ios) guide (**Please note:** You are going to need a Google Billing Account for this step, so go ahead and [create one](https://cloud.google.com/billing/docs/how-to/manage-billing-account#create_a_new_billing_account) if you haven't already). When the project is created, the following APIs and the specific SDK you plan to use must be enabled from the [Maps API Library Page](https://console.cloud.google.com/apis/library?filter=category:maps).

* Google Maps Distance Matrix API
* Google Maps Directions API
* Google Places API Web Service
* Maps SDK for Android/iOS

When the above 3 APIs and the relevant SDK are enabled, you can retrieve the API key from the [Credentials page](https://console.cloud.google.com/project/_/apiui/credential). On the Credentials page, click _Create credentials_ > _API key_.

### Get Your MapsIndoors API key

If you are not a customer yet, you can use this demo MapsIndoors API key `{{sdk.tutorialAPIKey}}` to follow this guide, or you can [contact MapsPeople](https://resources.mapspeople.com/contact-us) to get your building drawings processed and hosted by us to receive a unique API key. For the purpose of this guide, both methods will work.

### Getting Started

> NOTE: This app is designed to be displayed in Portrait Mode. While it will work in Landscape Mode, some UI elements may look distorted or out-of-place.

This app provides an example of how to use the MapsIndoors SDK in SwiftUI.

* Download or clone the pre-made project from GitHub: [https://github.com/MapsPeople/MapsIndoorsTemplate-iOS](https://github.com/MapsPeople/MapsIndoorsTemplate-iOS)
* From the terminal, in the path you cloned the repository to, run `pod install`
* Open the file `xxxxx.xcworkspace` in Xcode, or your editor of choice
* Make a copy of the `MapsIndoors-Info-Sample.plist` file and name it `MapsIndoors-Info.plist`
* Add your MapsIndoors API key and Google Maps API key to the `MapsIndoors-Info.plist` file and run the project

### Using the Functionality in your Own App

This project is specifically built so you can easily re-use this functionality in your own application, without further issue.

* To reuse the code in your app, drag and drop the `Views` and `Services` folders, and all the `Assets` except for the `AppIcon` into your project
* Create a copy of the `MapsIndoors-Info-Sample.plist` file and name it `MapsIndoors-Info.plist`
* Add your MapsIndoors API key and Google Maps API key to the `MapsIndoors-Info.plist` file
* Look at `ViewController.swift` for an example of how to initialize the MapsIndoors SDK and use the **MapsIndoors Template** implementation in an UIKit app. The `ViewController.swift` reads the API keys retrieved as described above from the file `MapsIndoors-Info.plist`
* Update your podfile so it matches the podfile in the MapsIndoors **MapsIndoors Template**

<!-- Known Issues -->
{% include "src/content/shared/known-issues-ios.md" %}

### The Final Result

![ios-single-page-app](/assets/single-page-app/iOS_Single_Page_App.png)

## Summary

Congratulations! You now have a functioning map in your own app, with the ability to both search for Locations and generate directions! If you want more advanced features, check out [further documentation]({{site.url}}/content/map/), or modify the existing code from this tutorial to suit your needs!
