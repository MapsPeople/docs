---
title: Create a new project
toc: true
eleventyNavigation:
  title: Create a project
  key: android-v3-getting-started-project
  parent: android-v3-getting-started
  order: 120
---

<!-- Overview -->
{% include "src/shared/getting-started/project/overview.md" %}

<!-- Environment -->
{% include "src/shared/getting-started/project/environment.md" %}

This guide explains how to start using a MapsIndoors map in your Android application using the MapsIndoors Android SDK v3.

To benefit from the guides, you will need basic knowledge about:

* Android Development
* Google Maps Android API

You can get started in two ways, either by reviewing and modifying the [basic example](#basic-example) or do the [clean setup](#setup-mapsindoors).

## Basic Example

The tutorial will be based on you starting from our basic map implementation. This contains basic UI implementations together with layout files and drawables used to create the UI. You will then be guided through how to implement the MapsIndoors SDK into this app.

You can find this basic example here: [Java](https://github.com/MapsIndoors/MapsIndoors-Getting-Started-Android-Basic) or [Kotlin](https://github.com/MapsIndoors/MapsIndoors-Getting-Started-Android-Kotlin-Basic)

You can also follow the steps below to start your app from scratch or to enhance the Basic Examples, more features will be explained in the [guides]({{ site.url }}/android/v3/guides/).

## Setup MapsIndoors

If you don't already have a project, we recommend using the Google Maps Activity preset from Android Studio to getting started on developing your MapsIndoors project.

Add the MapsIndoors SDK as a dependency to your project. The _AAR_ for the MapsIndoors SDK contains both Java classes, SDK resources and an `AndroidManifest.xml` template which gets merged into your application's `AndroidManifest.xml` during build process.

Add or merge in the following to your app's build gradle file (usually called `build.gradle`).

Make sure that the minimum Android SDK version is 21 (aka. "Android Lollipop", version 5.0) or above:

```java
android {
    defaultConfig {
        minSdkVersion 21
    }
    ...
}
```

MapsIndoors relies on Java 8 features, so you must add the following compile options, also in *android* section of your *build.gradle* file:

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
    implementation 'com.google.android.gms:play-services-maps:17.0.0'
    implementation 'com.google.code.gson:gson:2.8.6'
    implementation 'com.mapspeople.mapsindoors:mapsindoorssdk:3.8.2'
    implementation 'com.squareup.okhttp3:okhttp:4.9.0'
}
repositories{
    maven {
        url 'http://maven.mapsindoors.com/'
    }
}
```

Put those lines in your proguard-rules files:

```java
-keep interface com.mapsindoors.mapssdk.** { *; }
-keep class com.mapsindoors.mapssdk.errors.** { *; }
-keepclassmembers class com.mapsindoors.mapssdk.models.** { <fields>; }
-keep class com.mapsindoors.mapssdk.dbglog
```

Sync your project with gradle.

<p class="next-article"><a class="mi-button mi-button--outline" href="{{ site.url }}/android/v3/getting-started/map/">Next up: Show a map</a></p>
