---
title: MapsIndoors Android SDK v2
eleventyNavigation:
  parent: index
  key: android-v2
  title: Android v2
---

This guide explains how to start using a MapsIndoors map in your Android application using the MapsIndoors Android SDK v2.

To benefit from the guides, you will need basic knowledge about:

* Android Development
* Google Maps Android API

You can get started in two ways, either by reviewing and modifying the [basic example](#basic-example) or do the [clean setup](#setup-mapsindoors).

## Basic Example

You will find in the [link](https://github.com/MapsIndoors/MapsIndoorsAndroid-Demo-Samples) a repo that contains the minimum code to start a MapsIndoors project.

You can also follow the steps below to start your app from scratch or to enhance the Basic Examples, more features will be explained in the [guides](/android/v2/guides).

## Setup MapsIndoors

Add the MapsIndoors SDK as a dependency to your project. The AAR for the MapsIndoors SDK contains both Java classes, SDK resources and AndroidManifest.xml template which gets merged into your application's AndroidManifest.xml during build process. Add or merge in the following to your app's build gradle file (usually called build.gradle).

Make sure that the minimum Android SDK version is 21 or above:

```java
android {
    defaultConfig {
        minSdkVersion 21
    }
    ...
}
```

MapsIndoors rely on Java 8 features, so you must add the following compile options, also in *android* section of your *build.gradle* file:

```java
android {
    ...
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }
}
```

Add the following dependencies and the MapsIndoors maven repository:

```java
dependencies {
    ...
    implementation 'com.android.support:support-v4:27.1.0'
    implementation 'com.google.android.gms:play-services-maps:11.8.0'
    implementation 'com.google.code.gson:gson:2.8.2'
    implementation 'com.mapspeople.mapsindoors:mapsindoorssdk:{% raw %}{{%product-version%}}{% endraw %}@aar'
}
repositories{
    maven {
        url 'http://maven.mapsindoors.com/'
    }
}
```

Put those lines in your proguard-rules files :

```java
-keep interface com.mapsindoors.mapssdk.** { *; }
-keep class com.mapsindoors.mapssdk.errors.** { *; }
-keepclassmembers class com.mapsindoors.mapssdk.models.** { <fields>; }
-keep class com.mapsindoors.mapssdk.dbglog
```

Sync your project with gradle files.

## Setup Google Maps

Learn how to setup Google Maps on Android in this [Getting Started Guide](https://developers.google.com/maps/documentation/android-api/start).

## Setup a Google Map with MapsIndoors

Place the following inititalisation code in the `onCreate` method in the activity that should display the Google map:

```java
MapsIndoors.initialize(
  getApplicationContext(),
  "YOUR_MAPSINDOORS_API_KEY",
  "YOUR_GOOGLE_MAPS_API_KEY"
);
```

In your `onMapReady` callback function, use the `MapControl` class to set up a Google map with MapsIndoors venues, buildings & locations:

```java
// Create a new MapControl instance
myMapControl = new MapControl( getApplicationContext(), mapFragment, mGoogleMap );

// Initialize MapControl to get the locations on the map, etc.
myMapControl.init( errorCode -> {
  if( errorCode == null ) {
    runOnUiThread( () -> {
      // Animate the camera to show the venue
      mGoogleMap.animateCamera( CameraUpdateFactory.newLatLngZoom( new LatLng( 57.05813067, 9.95058065 ), 19f ) );
    });
  }
});
```

Head to the [guides](/android/v2/guides) to learn about event handling, searching, getting directions, display settings and more.

## Download and Bundle Offline Content

If needed, it is possible to bundle MapsIndoors content to make your app work better in offline or poor network conditions. (Please note that while MapsIndoors content can be used offline, Google Maps does not provide offline features. Outdoor wayfinding, Google Places searches will be unavailable and the surrounding map may be unavailable unless it has been cached.)

In your */res/values* folder, create a file named `mapsindoors_api.xml` with the following content:

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
 <string name="mapsindoors_api_key" translatable="false">YOUR_MAPSINDOORS_API_KEY</string>
</resources>
```

Replace:

* `YOUR_MAPSINDOORS_API_KEY` with your MapsIndoors API key.

In your apps build gradle file, add these two lines:

```java
apply from: 'https://raw.githubusercontent.com/MapsIndoors/MapsIndoorsAndroid/SDK_V2/scripts/gradle/MapsIndoorsOfflineDataSync.gradle'
preBuild.dependsOn fetchData
```

Depending on the overall size of your MapsIndoors deployment, this may take some time, so during development you might want to comment out the script dependency.

## Work with MapsIndoors SDK behind a Firewall

If you need to work with MapsIndoors SDK behind a firewall, you might need to [allowlist some IP-addresses]({{ site.url }}/various/mapsindoors-sdk-firewall/).
