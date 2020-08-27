---
title: Display User's current position (Blue Dot)
eleventyNavigation:
  key: User Position (Blue Dot)
  parent: Map
  order: 80
---

The user's position is displayed on the map as a blue circular icon, most often refered to as "Blue Dot".

The positioning data can come from a variety of sources. The one that is most typically available is the device's GPS. It is, however, not always reliable when moving indoors, so you can augment the positioning information with an "Indoor Position Provider" (IPS) solution.

IPS can also come in different forms, including:

- BlueTooth beacons
- WiFi sensors
- Light sensors
- Sound sensors

MapsIndoors does not provide the hardware needed for setting up IPS on your venue, but we can consult you on which one might be right for you. Get in touch with us right here: <https://mapspeople.atlassian.net/servicedesk/customer/portals>

## Implementation

<mi-tabs>
    <mi-tab label="Android" tab-for="android"></mi-tab>
    <mi-tab label="iOS" tab-for="ios"></mi-tab>
    <mi-tab label="Web" tab-for="web"></mi-tab>
    <mi-tab-panel id="android">
        <h3>Android</h3>
    </mi-tab-panel>
    <mi-tab-panel id="ios">
        <h3>iOS</h3>
    </mi-tab-panel>
    <mi-tab-panel id="web">
        <h3>Web</h3>
    </mi-tab-panel>
</mi-tabs>
