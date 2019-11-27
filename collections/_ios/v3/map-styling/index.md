---
layout: guide
title: Using display rules
guide_title: map-styling
nav_weight: 330
published: true
date: 2019-09-30
permalink: /ios/v3/map-styling/
---

There are various ways to style your map content in MapsIndoors.

In the [MapsIndoors CMS](https://cms.mapsindoors.com/types) you can set display settings for the different types of locations in your MapsIndoors content.

In some cases, you may also want to programmatically set display rules that defines when and how to show a location. 

To add display rules, you need to know the types in your location dataset, so look these up in the CMS. The display rule name corresponds to the location type we want the rule to apply for.

```swift
myMapControl.add(MPLocationDisplayRule(name: "info", andIcon: UIImage(named : "info"), andZoomLevelOn: 17))
myMapControl.add(MPLocationDisplayRule(name: "parking", andIcon: UIImage(named : "parking"), andZoomLevelOn: 17))
myMapControl.add(MPLocationDisplayRule(name: "staircase", andIcon: UIImage(named : "staircase"), andZoomLevelOn: 18))
```
