---
layout: tutorial
title: Setting up a kiosk
nav_weight: 1300
date: 2020-01-31
published: false
---

### Before getting started

Please do the following before getting started:

* Disabled the kiosk on-screen keyboard.

* Disabled the browsers position.

## Create all kiosk in the CMS

Login to the CMS and create a Location Type named eg. "Kiosk".
Create all kiosks as locations with the type just created.

## Configure a kiosk

To enable kiosk mode you need to set a few parameters in the URL first time loading the app on a kiosk. The "?" symbol have to be in front of the first parameter and all the parameters are separated with a “&” symbol.

### Fixed origin

The fixed origin is being configured with the `origin` URL parameter followed by the `location id` of the kiosk. The `location id` can be found in the CMS under the advanced panel. When moving a kiosk in real life the position of the `POI` will have to be updated in the CMS as well.

### Reset kiosk

The timeout time is being configured with the `timeout` URL parameter followed by a value in seconds. Timeout is only activated when the app runs on a device with touch.

### Send route link via SMS

The SMS feature needs to be activated from the Deployment CMS under modules. In the solutions `appConfig` the `phoneCountryCode` parameter needs to be set without the “+“ symbol like seen below.

```javascript
{
    ...
    "appSettings": {
        "phoneCountryCode": "45"
    }
}
```

The "Send as SMS" button only shows when getting a route between two MapsIndoors Locations, but it is not a problem when the browser's position is disabled and a fixed origin is set.

The limit for sending an SMS to the same phone number is 3 messages per 10 minutes from the first message send.

## URL structure

The URL should be structured like seen below.
Remember to set a venue before setting any URL parameters.

*<https://clients.mapsindoors.com/>`solutionId`/`venueId`/search?origin=`locationId`&timeout=20*

The White House URL example with a fixed origin and timeout set to 20 seconds:
[https://clients.mapsindoors.com/demo/899cf628675f4b0695669529/search?origin=5a0d66192e33469c8909203d&timeout=20](https://clients.mapsindoors.com/demo/899cf628675f4b0695669529/search?origin=5a0d66192e33469c8909203d&timeout=20 "Showcase app")
