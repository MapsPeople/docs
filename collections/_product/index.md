---
title: MapsIndoors Product Overview
published: true
date: 2019-09-30
permalink: /product/
---

MapsIndoors is an Indoor Wayfinding Platform, which you can build your map experience on top of.

MapsIndoors consists of:

* A Content Management System (CMS)
* Three SDKs:
  * Android
  * iOS
  * JavaScript
* Standard apps built on top of each SDK 
* A kiosk web app
* An Integration API

All of these will be presented below.

## Prerequisites for a Custom MapsIndoors Solution

When you buy MapsIndoors your organisation needs to provide MapsPeople with floor plans for each of the buildings you want to have indoor navigation for.

When we receive these they will be digitised and positioned correctly in “the world”. This is what we define as a Solution, for which you will get a MapsIndoors API key. Use this API key when working with the SDKs to access your data.

## Content Management System

When you have a custom MapsIndoors Solution you also get access to the MapsIndoors CMS. Within the CMS you can manage locations within your solution; create, remove, update locations such as rooms, coffee machines etc. The content created within the CMS is the content that can be accessed and controlled via the SDKs (see the next section).

The CMS is used for day-to-day management if a Location needs to be moved (could be a printer or a coffee machine), if Rooms get new names (meeting rooms for example), if access needs to be restricted to some Locations etc.

![MapsIndoors CMS](/assets/product/CMS.png)

## SDKs

The SDKs enable you to build your own custom app on top of, or as an integral part of, your existing app. The MapsIndoors SDKs are available for:

![Platforms](/assets/product/Platforms.png)

The MapsIndoors SDKs are the engines that makes sure you can create a route from a location in the world to one of your indoor locations, search your indoor locations, show the relevant information for a specific location etc. An exhaustive list of features within the SDKs can be found in the reference documentation for each platform.

## Standard Apps & Kiosk

MapsIndoors Standard Apps are built on top of the SDKs and visualises some of the SDK capabilities. They are more or less plug-and-play and provide a good basic indoor navigation app with a map, Category overview of Locations, search, directions and routing.

![WebApp](/assets/product/webApp.png)

The MapsIndoors Standard App suite also includes a plug-and-play Kiosk web app. The app can be run on an information stand and help one-time users of a facility find their way without having an app - for example at a hospital.

![Kiosk](/assets/product/Kiosk1.png)

## Integration API

The MapsIndoors Integration API is used to connect 3rd party systems with MapsIndoors in order to feed data into the MapsIndoors solution. It could be live data from a bus service driving around an airport, a meeting room booking service, parking lot vacancy information etc. The Integration API offers updates of rooms, buildings, floors, areas, categories etc. Currently there are two types of integration supported; Real-time and Booking integrations.

Real-time integrations are characterised by displaying data “live” on the map (< 1 min delay). The data is read-only and gathered and distributed on the specific solution, but is never saved/cached for more than 30 minutes. This could be a bus moving around an airport, which could be shown live on the map.

Booking integrations are characterised by data flowing in and out of MapsIndoors (read/write). Room bookings can happen directly from MapsIndoors and/or be displayed on the MapsIndoors map. For example is it possible to call a room ID and change the color of the corresponding room’s polygon to e.g. visualise whether it is vacant or not based on a calendar integration.

## Indoor Positioning System

MapsIndoors is primarily an Indoor Navigation Provider that can provide directions and guide users as well as present relevant information on the map.
In order to get precise user position indoors, dynamic turn-by-turn routing, location based advertising etc. an IPS should be put in place in the relevant building(s).
MapsPeople do not sell Indoor Positioning Systems, but MapsIndoors integrate with them. If your organisation wants to have precise positioning there is a range of different technologies to consider such as Beacons, WiFi, ultra-sound etc. You can [read more here](https://blog.mapspeople.com/mapsindoors/indoor-positioning-101).

If you want to know more about how to get your own Mapsindoors Solution [contact us here](https://resources.mapspeople.com/contact-us)
