---
title: Product Overview
eleventyNavigation:
  parent: index
  key: Product Overview
  order: 40
---

MapsIndoors is an Indoor Navigation Platform and can be integrated into existing applications for mobile, desktop, and kiosk or as a standalone service. 

MapsIndoors consists of:

* A Content Management System (CMS)
* Three Software Development Kits (SDKs):
  * Android
  * iOS 
  * Web (JavaScript)
* Standard Apps built on top of each SDK
* An Integration API

## Getting Started with MapsIndoors

New MapsIndoors clients are assigned a Project Manager from our team to ensure a quick and accurate delivery. This Project Manager will work with your organization to deliver a MapsIndoors Solution for your venue(s). Your Project Manager will ask for floor plans, branding guidelines, and any additional information needed to begin the digitization process.

Your floor plans will then be georeferenced and digitized. After digitzation, you will receive access to your Solution via the Content Management System (CMS) where you can manage your map. You will also receive a MapsIndoors API key, which you will use when working with the SDKs to access your data.

## Content Management System

The Content Management System (CMS) is a web-based portal used for day-to-day management of your map(s). Within the CMS you can manage Venue, Building, Room, Point of Interest (POI), and Route attributes. The content updated within the CMS is immediately accessible to the SDKs.

![MapsIndoors CMS](/assets/product/CMS.png)

## SDKs

The SDKs enable you to build your own custom app on top of, or as an integral part of, your existing app. The MapsIndoors SDKs are available for:

![Platforms](/assets/product/Platforms.png)

The MapsIndoors SDKs are the engines that ensure your users can view, navigate, and receive important information about the space around them. Common use cases include getting directions from an outdoor location to your indoor locations, searching your indoor locations, showing the relevant information for a specific location, exposing dynamic data for a location, and more. An exhaustive list of features within the SDKs can be found in the reference documentation for each platform.

## Standard Apps

MapsIndoors Standard Apps are built on top of the SDKs and visualize some of the SDK capabilities. The Standard Apps are plug-and-play and provide a good basic indoor navigation app. Many clients choose to only use the Standard Apps for testing or demo purposes and use the SDKs to create a completely customized experience for their users.

![WebApp](/assets/product/webApp.png)

The MapsIndoors Standard App suite also includes a plug-and-play Kiosk web app. This browser-based app can run on an information stand and help one-time users of a facility find their way without needing to install an app.

![Kiosk](/assets/product/Kiosk1.png)

## Integration API

The MapsIndoors Integration API is used to connect third party systems with MapsIndoors to feed data programmatically into your MapsIndoors Solution. The API provides an interface to update data in MapsIndoors from an external source. An external source could be a Facilities Management System that already contains relevant data for your MapsIndoors Solution.

## Integration Modules

Currently there are two types of integration modules supported: Real-time and Booking integrations.

Real-time integrations are characterized by displaying data “live” on the map (< 1 min delay). Examples include showing the live position of a shuttle bus, current availability of a conference room, live occupancy data, and more. This data is not saved for long-term storage and only briefly cached to ensure delivery to the apps.

Booking integrations are characterized by data flowing in and out of MapsIndoors (read/write). MapsIndoors can interface with room booking providers to retrieve booking availability, show future availability for a room, and allow users to book a room from MapsIndoors for a specified time slot.

## Indoor Positioning Systems

MapsIndoors is an Indoor Navigation Platform that uses known-point navigation to route a user from A to B.

In order to get a precise user position indoors (the "blue dot" experience), dynamic turn-by-turn routing, location-based advertising etc. an Indoor Positioning System (IPS) should be implemented in the relevant building(s).

MapsPeople is IPS agnostic and seamlessly integrates with many providers. There are a range of different technologies to consider such as Beacons, WiFi, ultra-sound etc. You can [read more here](https://blog.mapspeople.com/mapsindoors/indoor-positioning-101).

To learn more about MapsIndoors you can [contact us](https://resources.mapspeople.com/contact-us).
