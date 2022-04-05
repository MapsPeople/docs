---
title: Getting Started with Xamarin
eleventyNavigation:
  parent: getting-started
  key: getting-started-xamarin
  title: Getting Started with Xamarin
  order: 9999
---

## Introduction

This will explain how to get started with getting MapsIndoors inside of your Xamarin application.

## Getting Started

You should start by creating a new Solution containing an iOS and an Android project.

Find the Nuget Package Manager, and add the [MapsIndoors package from Nuget.org](https://www.nuget.org/packages/MapsIndoors/). This will contain the MapsIndoors SDK for both iOS and the Android, and requires some dependencies on each platform (like Google Maps).

This is the only Xamarin specific setup you need to get started with MapsIndoors for Xamarin.

The rest of the setup will follow what each platform requires. This means that the initialization of MapsIndoors will look very similar to what you know from iOS and Android:

### iOS

```csharp
using MapsIndoorsIos;
using Google.Maps;

Google.Maps.MapServices.ProvideApiKey("YOUR_GOOGLE_API_KEY");
MapsIndoors.ProvideAPIKey("YOUR_MAPSINDOORS_API_KEY", "YOUR_GOOGLE_API_KEY");
```

Continue reading the [Getting Started with iOS]({{site.url}}/content/getting-started/ios/prerequisites).

### Android

```csharp
using MapsIndoorsAndroid;
using Android.Gms.Maps;

MapsIndoors.Initialize(ApplicationContext, "YOUR_MAPSINDOORS_API_KEY");
MapsIndoors.GoogleAPIKey = "YOUR_GOOGLE_API_KEY";
```

_You will also need to setup your `AndroidManifest.xml` file in Xamarin, like you would for a normal Android project._

Continue reading the [Getting Started with Android](({{site.url}}/content/getting-started/android/prerequisites)).

## Further Reading

Most of what you want to do can be done by looking at examples from iOS and Android [elsewhere in the documentation]({{site.url}}/content/map/), and put them into the C# language syntax.
