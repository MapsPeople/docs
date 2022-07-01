---
title: Create a New Project
toc: true
eleventyNavigation:
  title: Create a New Project
  key: getting-started-android-project
  parent: getting-started-android
  order: 120
---

<!-- Overview -->
{% include "src/content/shared/getting-started/project/overview.md" %}

<!-- Environment -->
{% include "src/content/shared/getting-started/project/environment.md" %}

This guide explains how to start using a MapsIndoors map in your Android application using the MapsIndoors Android SDK v3.

We recommend using Android Studio for using this tutorial. Read how to set it up here: [Installing Android Studio](https://developer.android.com/studio/install)

If you do not have a Android device, you can setup an emulator through Android Studio. You can see how to do that here: [Setting up Android emulator](https://developer.android.com/studio/run/emulator).

If you already have an Android device, make sure to enable developer mode and USB debugging. Read about this here: [Enable USB debugging](https://developer.android.com/studio/debug/dev-options#enable)

To benefit from the guides, you will need basic knowledge about:

* Android Development
* Mapbox SDK

You can get started in two ways, either by reviewing and modifying the [basic example](#basic-example) or do the [clean setup](#setup-mapsindoors). We recommend following the basic example.

## Basic Example

The tutorial will be based on you starting from our basic map implementation. This contains basic UI implementations together with layout files and drawables used to create the UI. You will then be guided through how to implement the MapsIndoors SDK into this app.

The basic example contains a single `activity` app with already made `fragments` to host the different logic to get a complete app interacting with a map and `MapsIndoors` data.

You can find this basic example here: [Java](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Mapbox-Android) or [Kotlin](https://github.com/MapsPeople/MapsIndoors-Getting-Started-Mapbox-Android-Kotlin)

You can open the project through Android Studio by navigating through **File -> New -> Project from Version Control -> GitHub**. Log in and clone the project.

You can also follow the steps below to start your app from scratch or to enhance the Basic Examples, more features will be explained in later guides.

## Setup MapsIndoors

Add the MapsIndoors SDK as a dependency to your project. The _AAR_ for the MapsIndoors SDK contains both Java classes, SDK resources and an `AndroidManifest.xml` template which gets merged into your application's `AndroidManifest.xml` during build process.

Add the following to your application build gradle file:

Ensure the minimum Android API is >=21 (5.0, Android Lollipop):

```java
android {
    ...
    defaultConfig {
        minSdkVersion 21
    }
    ...
}
```

MapsIndoors relies on Java 8 features, so you must add the following compile options, also in _android_ section of your _build.gradle_ file:

```java
android {
    ...
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }
    ...
}
```

Add the following dependency and the MapsIndoors maven repository:

```java
dependencies {
    ...
    implementation 'com.mapspeople.mapsindoors:mapboxsdk:4.0.0-beta.9'
    ...
}
```
And add the MapsIndoors Maven repository to your repositories:

```java
repositories{
    maven {
        url 'https://maven.mapsindoors.com/'
    }
}
```

Put those lines in your proguard-rules files:

```java
-keep interface com.mapsindoors.coresdk.** { *; }
-keep class com.mapsindoors.coresdk.errors.** { *; }
-keepclassmembers class com.mapsindoors.coresdk.models.** { <fields>; }
-keep class com.mapsindoors.coresdk.MPDebugLog
```


Sync your project with gradle.

> This "Getting Started" guide is created using a specific version of the SDK. When moving beyond the "Getting Started" guide, please be sure to use the latest version of the SDK.

<p class="next-article"><a class="mi-button mi-button--outline" href="{{ site.url }}/content/getting-started/android/map/">Next up: Show a map</a></p>
