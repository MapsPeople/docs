---
title: Implementing a Simple Map App
toc: true
eleventyNavigation:
  parent: map
  key: map-simple-map
  title: Implementing a Simple Map App
  order: 70
---

The **Simple Map App** is a plug-and-play solution for you to have a simple integration of a map in your existing app. While you can work on implementing your own solution using the documentation found [here]({{site.url}}/content/map/), if you just need a simple solution with no further customisation required, this should fulfil your needs.

The solution is pre-made, and simply needs integration into your existing app.

## Android

First, you need to download or clone the pre-made feature from GitHub, found [here](*INSERT ANDROID REPO LINK HERE*).

> NOTE: This Fragment was designed to be displayed in Portrait Mode. While it will work in Landscape Mode, some UI elements may look distorted or out-of-place.

* Open the project you just downloaded, and copy the classes located in `java/com/mapspeople/sportseventactivity` into your own App.

* Add the Maven repository ([http://maven.mapsindoors.com/](http://maven.mapsindoors.com/)) to your project's `build.gradle` file.

* Add the following dependencies from `build.gradle`:

```json
implementation 'com.google.code.gson:gson:2.8.6'
implementation 'com.mapspeople.mapsindoors:mapsindoorssdk:3.12.1'
implementation 'com.squareup.okhttp3:okhttp:4.9.0'
implementation "com.google.android.gms:play-services-maps:16.1.0"
```

* For the next step, this tutorial assumed that you use [Glide](https://bumptech.github.io/glide/) for image handling in your application. If you are not using Glide, either import it, or if you use a different image library, you need to change some lines of code in the app. What you need to change them to, depends on the library you use. The lines are:

```json
DirectionStepFragment.kt: 50
DirectionStepFragment.kt: 53
DirectionStepFragment.kt: 56
DirectionStepFragment.kt: 61
MPSearchItemRecyclerViewAdapter.kt: 31
```

> NOTE: Other view and image dependancies may be needed, depending on how your current app is implemented.

* Copy the layout and drawables from the `res` folder into your app.

* Copy the `String` values from `res/values` into your app.

* Copy the `google_maps_api.xml` file to your project and insert a valid Google Maps API key - [See more info on how to do that here.]({{site.url}}/content/getting-started/android/prerequisites/)

* Add the API key to the manifest file under the `Application` tag like so:

```json
<meta-data
        android:name="com.google.android.geo.API_KEY"
        android:value="@string/google_maps_key" />
```

* Change the places where the navigation graph is used, if you are not using navigation. Alternatively, create a navigation action for MapsFragment. If so, change the navigation controller call on `line: 74` inside `MapsFragment.kt` under the TODO.

* Check the `FirstFragment.kt` class on how to apply User Roles to the map fragment. The Accessibility User Role, which you can use to designate accesible routes might avoid stairs, for example, is handled through the routing page with the toggle.

## iOS

This app will provide an example of how to use the MapsPeople SDK in SwiftUI.

First, you need to download or clone the pre-made feature from GitHub, found [here](*INSERT IOS REPO LINK HERE*).

> NOTE: This Fragment was designed to be displayed in Portrait Mode. While it will work in Landscape Mode, some UI elements may look distorted or out-of-place.

### Getting Started

* Follow the description in the [MapsIndoors Getting Started guide](https://docs.mapsindoors.com/ios/v3/getting-started/prerequisites/) to get an API key for MapsIndoors and Google.

* From the terminal, in the path you cloned the repository to, run `pod install`.

* Open the file `xxxxx.xcworkspace` in Xcode, or your editor of choice.

* Make a copy of the `MapsIndoors-Info-Sample.plist` file and name it `MapsIndoors-Info.plist`.

* Add your MapsIndoors API key and Google Maps API key to the `MapsIndoors-Info.plist` file. Then run the project.

### Using the Functionality in your Own App

This project is specifically built so you can easily re-use this functionality in your own application, without further issue.

* To reuse the code in your app, drag and drop the `Views` and `Services` folders, and all the `Assets` except for the `AppIcon` into your project.

* Create a copy of the `MapsIndoors-Info-Sample.plist` file and name it `MapsIndoors-Info.plist`.

* Add your MapsIndoors API key and Google Maps API key to the `MapsIndoors-Info.plist` file.

* Look at `ViewController.swift` for an example of how to initialize the MapsIndoors SDK and use the MapsIndoors SwiftUI implementation in an UIKit app. The `ViewController.swift` reads the API keys retrieved as described above from the file `MapsIndoors-Info.plist`.

* Update your podfile so it matches the podfile in the MapsIndoors SwiftUI App Example.

<!-- Known Issues -->
{% include "src/content/shared/known-issues-ios.md" %}
