---
title: Indoor Positioning with MapsIndoors
toc: true
eleventyNavigation:
  key: Indoor Positioning with MapsIndoors
  parent: various
  order: 8
---

To get an introduction to the field of indoor positioning, we recommend [this blog post](https://www.mapspeople.com/blog/mapsindoors/indoor-positioning-101/) for a start.

MapsIndoors SDK is not an IPS (Indoor Positioning Service). MapsIndoors provides indoor maps and indoor directions, and since it is based on Google Maps, we also provide seamless indoor/outdoor integration.

With this in mind you need to find an IPS and then use the location from that IPS in MapsIndoors. To some extend iOS CoreLocation and Android Location Services can fulfill the role of an IPS, depending on the building infrastructure. So you might try this in your first iteration. You will need some basic knowledge of the LocationManager on Android and the CLLocationManager on iOS.

We have made implementations for the platform LocationManagers in demo apps shipped with the MapsIndoors SDK:

[GPSPositionProvider for Android](https://github.com/mapspeople/MapsIndoorsAndroid/blob/master/app/src/main/java/com/mapsindoors/stdapp/positionprovider/gps/GoogleAPIPositionProvider.java)

[GPSPositionProvider for iOS](https://github.com/MapsIndoors/MapsIndoorsIOS/tree/master/Example/MIAIOS-SRC/GenericBase/Services/PositionProvider/CoreLocationAkaGPS)

This provider is then passed to the MapsIndoors' MapControl instance using a method set/addPositionProvider on a MapControl instance.
