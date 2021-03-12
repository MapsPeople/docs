---
title: Directions
eleventyNavigation:
  key: guides-directions
  parent: various
  title: Directions
  order: 20
---

As a key element in the MapsIndoors platform, we offer API's for effeciently calculating and displaying the most optimal routes from anywhere in the world to any Location inside a Building in MapsIndoors. In the case of travelling internally at a Venue, this calculation can be done on a local route network provided by MapsIndoors. In the case of travelling between Venues or from outdoors to indoors, the Directions Service provide a seamless journey outline from a specified *Origin* through automatically selected *Entry Points* at the edge of your Venues to the specified *destination*. See illustration below:

![Venue to Venue Directions through Entry Points]({{ site.url }}/assets/various/directions/directions-with-entry-points.svg)

## Entry Points

Entry Points are specified points in a MapsIndoors Venue that enable a transition between a global or regional route network and the local route network in MapsIndoors. The Entry Point often specify which travel modes are suitable for entering/exiting the Venue. There are four travel modes: *Walking*, *Bicycling*, *Driving* and *Transit* (Public Transportation). As such, the Entry Point may be a bike shed for the Bicycling travel mode, a carpark for Driving and a bus stop for Transit. As a consequence, it is often at the entry point that the Travel Mode changes from Bicycling, Driving or Transit to Walking. The selection of an entry point for transitioning between route networks is based on a combination of automatic calculation and estimation.

## The Route Model

The Route model in MapsIndoors is seperated into Legs and these Legs are again seperated into Steps. A leg represents 