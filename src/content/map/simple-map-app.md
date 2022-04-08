---
title: Implementing a Simple Map App
eleventyNavigation:
  parent: map
  key: map-simple-map
  title: Implementing a Simple Map App
  order: 70
---

The **Simple Map App** is a plug-and-play solution for you to have a simple integration of a map in your existing app. While you can work on implementing your own solution using the documentation found [here]({{site.url}}/content/map/), if you just need a simple solution with no further customisation required, this should fulfil your needs.

The solution is pre-made, and simply needs integration into your existing app.

## Android

First, you need to download the pre-made feature from GitHub, found [here](*INSERT LINK HERE*).

### Setting Up The MapsFragment

> NOTE: This Fragment was designed to be displayed in Portrait Mode. While it will work in Landscape Mode, some UI elements may look distroted or out-of-place.

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

vjvhfvhfv
