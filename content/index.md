---
title: Indoor Navigation Built with Google Maps
type: index
weight: 0
---

Welcome to the developer site of MapsIndoors by MapsPeople. You can integrate MapsIndoors into apps, web solutions and/or information kiosks using the MapsIndoors SDK. Get your hands dirty by digging into our guides, code snippets and reference material for the MapsIndoors navigation platform. The documentation and SDKs for both Web, iOS and Android are all available on this site. We strive to give you everything you need to know about how to setup an indoor navigation solution. Learn how to integrate indoor routing, building display and POI searching into your application. And if you have questions or need clarification, you can always [contact our developers](https://mapspeople.com/support) to get a fast reply and an answer. [Read more about the available SDK's](#about-mapsindoors-sdk).

## Prerequisites

### Setup Google maps API

You need to setup the Google Maps API in your project by following the steps in this links below depending on which platform you are using :

* Web : You will need the [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial).
* Android : You will need the [Google Maps Android API](https://developers.google.com/maps/documentation/android-api/start).
* iOS : You will need the [Google Maps SDK for iOS](https://developers.google.com/maps/documentation/ios-sdk/start).

Some Web Service APIs are needed also for the mapsIndoors SDK so make sure to enable them when getting your key :

* [Google Places API Web Service](https://developers.google.com/places/web-service/intro).
* [Google Maps Distance Matrix API](https://developers.google.com/maps/documentation/distance-matrix/start).
* [Google Maps Directions API](https://developers.google.com/maps/documentation/directions/start).

### Get a MapsIndoors Solution ID

In order to include the mapsIndoors in your app you need a solution key that we provide to our customer so they can access their data, if you are not a customer you can use this solution id:( `550c26a864617400a40f0000`) to follow this guide.   
You can find more information about how to get a solution ID and becoming a partner by visiting this [link](https://www.mapspeople.com/become-a-partner).

## Choose your platform

Now you have to choose the platform that you are working on to continue the steps. 	

* Web
  * [Guide - getting started](/web)
  * [Guide - part 2](/web/guide-part2)
  * [Reference](/web/reference)
* Android
  * [Guide - getting started](/android)
  * [Guide - part 2](/android/guide-part2)
  * [Reference](/android/reference)
* iOS
  * [Guide - getting started](/ios)
  * [Guide - part 2](/ios/guide-part2)
  * [Reference](/ios/reference)

## About MapsIndoors SDK

MapsIndoors SDK smoothly provides you with indoor maps, search and navigation to web, mobile web and native Android and iOS. It can be interfaced with leading indoor positioning technologies such as Bluetooth beacons, WiFi positioning or sensor-based. MapsIndoors SDK serves as a rock-solid backbone that is used by thousands of simultaneous users for indoor navigation.

### MapsIndoors for Web

MapsIndoors for Web will provide your users with browser-based wayfinding using the search function. Users will be provided with wayfinding between any two points of interest within your facility, or from any location outside your facility to any point of interest inside of it. The web solution is optimised for desktop and mobile. Your users can get directions by typing in their location and their destination. They can also get from anywhere outside your facility to any point of interest inside.

* Built on top of Google Maps Javascript V3
* Simple setup using one script load
* Optimised for both desktop and mobile
* Online documentation and getting-started guide
* Cutting-edge MapsIndoors application source code

### MapsIndoors for iOS

Indoor navigation for iOS provides you with a seamless transition from outdoor to indoor navigation. Your users will be able to get navigation to anywhere – from any location outside and inside your facility. Interface your indoor map with an indoor positioning system and provide users with bluedot indoor navigation. Use their geolocation to send your users push-notifications.

* Built on top of Google Maps SDK for iOS
* Easy integration using CocoaPods
* API Documentation in headers
* Online documentation and getting-started guide
* Cutting-edge MapsIndoors application source code for both phones, phablets and tablets

### MapsIndoors for Android

Like for iOS, indoor navigation for Android provides your users with a great indoor wayfinding experience in the palm of their hand. It is easy to integrate into your app and can be interfaced with your indoor positioning system. By doing so, you get a better accuracy which you can use for location-based services while your users will get better indoor navigation.

* Built on top of Google Maps SDK for Android
* Easy integration using Gradle dependencies
* AAR-Library ready to be included into your App
* Online documentation and getting-started guide
* Cutting-edge MapsIndoors application source code for both phones, phablets and tablets