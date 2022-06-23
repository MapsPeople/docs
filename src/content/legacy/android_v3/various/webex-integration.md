---
title: Webex Integration
eleventyNavigation:
  key: legacy-android-v3-various-webex-integration
  parent: legacy-android-v3-various
  title: Webex Integration
  order: 12
---

The Webex integration is one of our supported server-side Live Data integrations.

This integration was developed to integrate against [Webex Room Kits](https://hardware.webex.com/products/room-series-and-kits) through the [xAPI](https://developer.webex.com/docs/api/v1/xapi).

We currently support the following Live Data Domain Types based on the information retrieved from the Webex Room Kits, do note however that not all Room Kits support all of these.

* Occupancy, what the occupancy is around the Webex Room Kit, either as a boolean value to indicate if the area is occupied or not, or as a number of occupants depending on the state of the Webex Room Kit.
* Temperature, what the temperature is around the Webex Room Kit.
* Humidity, what the humidity is around the Webex Room Kit.

In order to use the Webex integration it is required that the Webex Devices are linked to MapsIndoors Rooms, e.g. linking the Room Kit of a meeting room to that meeting room in MapsIndoors.

* Webex Devices are linked using the provided Device ID of the devices in question, and will require the assistance of our [Support Help Desk](https://mapspeople.atlassian.net/servicedesk/customer/portals) to set up.

<!-- Uncomment this when restructure is live, and fix links to Live Data stuff.

More information about working with Live Data in MapsIndoors can be found here for our different SDKs:

* Android SDK, Live Data - MapsIndoors Documentation 
* iOS SDK, Live Data - MapsIndoors Documentation 
* Web SDK, Live Data - MapsIndoors Documentation 
-->
