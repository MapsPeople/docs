As a key element in the MapsIndoors platform, we offer API's for effeciently calculating and displaying the most optimal routes from anywhere in the world to any Location inside a Building in MapsIndoors. In the case of travelling internally at a Venue, this calculation can be done on a local map provided by MapsIndoors. In the case of travelling between Venues or from outdoors to indoors, MapsIndoors provide a seamless journey outline from a specified *Origin* through automatically selected *Entry Points* at the edge of your Venues to the specified *destination*. See illustration below:

![Venue to Venue Directions through Entry Points](/assets/directions/directions-with-entry-points.svg)

In order to provide a route between Venues, MapsIndoors integrate with external and global map providers. Our preferred provider is Google Maps.

The central components that utilize a Directions experience is the [Directions Service](directions-service) and the [Directions Renderer](directions-renderer). But before we get to the fun part, let's examine some key concepts first.

## Entry Points

{% include "src/shared/directions/entry-points.md" %}

## The Route Model

When requesting Routes in MapsIndoors Directions Service The Route model in MapsIndoors is seperated into Legs and these Legs are again seperated into Steps.

### The Route Leg Model

{% include "src/shared/directions/route-leg.md" %}

### The Route Step Model

{% include "src/shared/directions/route-step.md" %}
