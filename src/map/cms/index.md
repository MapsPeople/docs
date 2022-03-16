---
title: MapsIndoors CMS
eleventyNavigation:
  title: MapsIndoors CMS
  key: map-cms
  parent: map
  order: 10
---

The MapsIndoors Content Management System (CMS) is the platform through which you edit your Maps, Locations, POI's and more.

Using the CMS is much less technical than the process of developing an app for Android, iOS or Web, and should be usable by almost anyone, no matter your background - No skills in programming are needed here.

Your data is structured in a hierarchy where the top level is your Solution which can contain multiple Venues, which in turn can have multiple Buildings and so on. The data-types in hierarchical order:

* Solution
* Venues
* Buildings
* Floors
* Locations (Rooms and Points of Interest)

Although a point of interest can be placed within a room, it is not required. Points of interest can also be placed "outside” on the ground level which is also the layer where the Google map exists. In this case the POI belongs to the Venue directly.
