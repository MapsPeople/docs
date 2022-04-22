---
title: Cisco DNA Spaces for iOS
toc: true
eleventyNavigation:
  parent: map-positioning
  title: Cisco DNA Spaces for iOS
  key: map-positioning-cisco-dna-ios
  order: 240
---

## MapsIndoors and CiscoDNA

MapsIndoors is a dynamic mapping platform from MapsPeople that can provide maps of your indoor and outdoor localities and helps you create search and navigation experiences for your local users. CiscoDNA is Cisco’s newest digital and cloud-based IT infrastructure management platform. Among many other things, CiscoDNA can pinpoint the physical and geographic position of devices connected wirelessly to the local IT network.

## How User Positioning Works in MapsIndoors

In order to show a user's position in an indoor map with MapsIndoors, a Position Provider must be implemented. MapsIndoors does not implement a Position Provider itself, but rely on 3rd party positioning software to create this experience. In an outdoor environment this Position Provider can be a wrapper of the Core Location Services in iOS.

A Position Provider in MapsIndoors must adhere to the `MPPositionProvider` protocol. Once you have an instance of an `MPPositionProvider` you can register it by assigning it to `MapsIndoors.positionProvider`. See the overview of the interface dependencies below.

![cisco-dna-ios](/assets/map/positioning/Cisco_DNA_iOS.png)

## Wrapping the CiscoDNA Positioning in a Position Provider

Just like in the mock Position Provider example, we need to implement a Position Provider that wraps the MapsIndoors CiscoDNA services to inject the CiscoDNA indoor positioning into MapsIndoors. If you only require this to work for indoor positioning, we would be good with just wrapping the CiscoDNA part. MapsIndoors however has the capability to support wayfinding both outdoors and indoors, so we have come up with a solution that implements two Position Providers, one for CoreLocation (`GPSPositionProvider`) and one for CiscoDNA (`CiscoDNAPositionProvider2`). The `CiscoDNAPositionProvider2` subclasses the `GPSPositionProvider` so it can determine whether the CiscoDNA position or the Core Location position should be used in your application. Both Position Providers are written in Objective C, but can of course be used in Swift as well.

The `CiscoDNAPositionProvider2` communicates with some MapsIndoors services to get the Cisco device id, and uses a message subscription service (MQTT) to subscribe for position updates. Each time a Cisco position is received, its age is determined. If the age of the latest Cisco position is above 120 seconds or the application is not connected to the wifi, the CoreLocation position is used instead.

## Integration Guide

1. Make sure you have [integrated MapsIndoors]({{site.url}}/content/getting-started/ios) succesfully.
1. Download and unzip [this zip file](https://drive.google.com/file/d/1rbtB872NQ81m93xsxdzxA7gn8MtW1Ksl/view?usp=sharing) containing the CiscoDNA integration source.
1. Create a group in your Xcode project, e.g. called CiscoDNA.
1. Drag and drop the files in the downloaded folder to your new group. Choose "Copy items if needed".
1. If this is the first Objective C code in your project, Xcode will suggest that you create an Objective C Bridging Header file. Select "Yes" or "Create Bridging Header".
1. Drag and drop the rest of the files into the CiscoDNA group. Choose "Copy items if needed".
1. In your Objective C Bridging Header, add `#import "CiscoDNAPositionProvider2.h"`.
1. In `AppDelegate.swift-didFinishLaunchingWithOptions`, add the following code:

    ```objc
    let pp = MPCiscoDnaPositionProvider2.init()
    pp.tenantId = "my-cisco-dna-spaces-tenant-id"
    MapsIndoors.positionProvider = pp
    MapsIndoors.positionProvider?.startPositioning(nil)
    ```

1. Replace `my-cisco-dna-spaces-tenant-id` with your own Cisco tenant ID.
1. In your view controller displaying the Google Map using `MPMapControl`, call `mapControl.showUserPosition(true)`.
1. Build and run the application. You should now be able to show a blue dot for the user's position.

If you need a working project example with MapsIndoors and CiscoDNA (excluding API keys), you can [download it here](https://drive.google.com/file/d/1nwsdaX0Hm6yaHm5S8JVgqYYb2S0Q4mnT/view?usp=sharing).
