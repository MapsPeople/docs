---
title: SDK Platform Support and Requirements
eleventyNavigation:
  parent: Product Overview
  order: 12
---

The MapsIndoors SDK is a collection of software libraries, guides and documentation that enables developers to create applications with the indoor wayfinding capabilities facilitated by MapsIndoors from MapsPeople. MapsIndoors SDK is available on iOS, Android and Web platforms.

## Platform Requirements

### Android

- Supports all newer Android phones and tablets
- Minimum supported Android Platform is Android 4.4 KitKat (API level 19) as of version 2.0 of MapsIndoors Android SDK
- Minimum supported Android Platform is Android 5.0 Lollipop (API level 21) as of version 3.0 of MapsIndoors Android SDK
- Rely on Java 8 features
- Available through a remote Maven repository, integrated with Gradle
- Depends on Google Maps Android API

### iOS

- Supports all newer Apple phones and tablets
- Minimum supported iOS Platform SDK version is 9 as of version 2.0 of MapsIndoors iOS SDK
- Minimum supported iOS Platform SDK version is 10 as of version 3.0 of MapsIndoors iOS SDK
- Available as a remote framework library
  - Through the CocoaPods package dependency manager
  - Through manual download and installation as of version 3.30 of MapsIndoors iOS SDK
- Depends on Google Maps iOS SDK

### Web

- Supports all modern phones, tablets and desktop PCs
- Available as one or more remote script references
- Depends on Google Maps API for JavaScript v3
- Supports the following desktop browsers:
  - Current version of Microsoft Edge (Windows)
  - Current and previous version of Firefox (Windows, macOS, Linux)
  - Current and previous version of Chrome (Windows, macOS, Linux)
  - Current and previous version of Safari (macOS)
- Supports the following mobile browsers:
  - Current version of Chrome on Android 4.1+
  - Chrome WebView on Android 4.4+
  - Safari on the current and previous major version of iOS
  - UIWebView and WKWebView on the current and previous major version of iOS
  - Current version of Chrome for iOS
