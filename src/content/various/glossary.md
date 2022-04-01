---
title: Glossary
eleventyNavigation:
  key: Glossary
  parent: various
  order: 5
---

In order to get an understanding of the concepts used when working with MapsIndoors this space provides a glossary list ordered hierarchically, so that it starts with broad concepts and from there goes into details.

The image below is a simplified overview of how the system is comprised.

![MIoverview](/assets/various/Glossary_overview.png)

### Solution

A Solution is a project for a MapsIndoors Customer.

A Solution contains one or more Venues. Each Venue is made up of one or more Buildings. Each Building has one or more Floors. Each Floor has one or more Locations in the form of Rooms or stand-alone Points of Interest.

A Solution also contains the Map tiles, and the Route Graph (which is either manually or automatically drawn).

### Tiles

Tiles are the drawings made by MapsIndoors overlaid on the Google Maps map.

Tiles are served as .pngs.

### Venue

A Venue is a geographical area that (usually) contains one or more Buildings.

### Outdoor

The space inside the Venue Graph bounds that is not inside a Building.

### Building

A Building covers an area within a Venue. A Building consists of one or more Floors.

### Connector

A Connector is the point at which a person can get from one Floor to another in a Building.

The Connectors can be an Elevator, Stairs or Escalator.

### Location / Place / POI

A Location is an item with data about what is located at that geographical point. A Location can be anything; an office desk, a conference exhibitor, or a room feature (firehose, coffee machine, TV etc.).

Location, Place and POI ("Point of Interest") are used interchangeably in everyday speech. MapsIndoors relies on Locations as the word to describe a geographical point.

See also Rooms.

### Room

A Room is a Location with polygon data.

A Room might have one or more Doors connecting it with another or multiple other Rooms.

### Area

An Area is a polygon like a Room, but it doesn't have Doors. It is the third kind of Location besides Room and POI. An Area can cover as little or as much of a Room, Floor or Building as makes sense.

### Door

A Door is a connection between two Rooms, or from outside a Building and into it.

Automatically calculating the Route from an Origin to a Destination in reality means calculating how to get from Door to Door between the Origin and Destination while avoiding all Walls.

#### Elevator Door

A specific type of Door that has the same properties as a regular Door, i.e. that it can be restricted to specific App User Roles or locked completely.

#### Building Entrance

A Building Entrance is a Door at the outer edge of a Building.

### Category

Categories can be used to group Locations in bundles regardless of their type. E.g. a Location of the type Vegetarian Restaurant can be grouped with a Location of the type Barbeque Restaurant in the Category "Restaurants".

### Type

All Locations belong to a Type. Types are specific identifiers for a group of Locations, e.g. Unisex Toilet, Gold Sponsor, or Vegetarian Restaurant.

#### Type Visibility

For Types, it is possible to control at which zoom level the Locations of a specific Type will be displayed.

Generally, higher zoom levels (i.e. 1-17) are good for displaying general features of the area e.g. Parking Lots and Toilets while the lower zoom levels (i.e. 18-22) are better for gradually displaying more and more specific types, e.g. Meeting Rooms, Desks or Power Outlets.

#### Marker / Icon

All Locations have an Icon displaying its presence on the map.

Locations use the Icon from the Type they belong to, unless it is overwritten on the Location itself.

Icons can be uploaded in the CMS, or a set of standard icons from MapsIndoors can be used.

#### Label

The Label is the text string next to the Icon on the map.

### Network / Route Graph

A Network is the Graph instructing how to move around outdoors in a Venue or inside a Building.

Inside a Building, the Network Graph is either drawn manually by the MapsPeople Team, or automatically using Doors to determine how a person can move inside a Room from one Door to any other.

Outdoors, the Network Graph is drawn manually by the MapsPeople Team.

#### Node

The Network Graph consists of Edges connected by Nodes. Moving from one point to another on the Network Graph, a person is instructed to move on the Edges via the Nodes.

As Edges are always straight lines, Nodes are also used in quick succession to create the impression of a curved Edge.

#### Edge / Way / Path

An edge is a line on which a person can be instructed to transport themselves. The Network Graph consists of Edges connected by Nodes.

Edges are always straight lines, but Nodes can be used in quick succession to create the impression of a curved Edge.

#### Graph Bounds

Bounds are used to indicate the geographical area a Venue or Building occupies.

The Venue Bounds can be altered to fit points where it can conveniently connect to the Google Maps network. This is to ensure a smooth transition between the Directions given by Google Maps and MapsIndoors'.

The Building Bounds are used to accurately display the area a Building occupies in the world.

#### Speed Factor

An Edge can be manipulated so a person getting Directions that include that Edge will get a faster Duration than they would if they took another Route.

This can be helpful on large Venues where certain hallways are preferred for a simple Route over what might computationally be the faster Route.

### Directions

Directions is the set of instructions for travelling from an Origin to a Destination.

You can get Directions for a Route using the four Travel Modes: "Walking", "Driving", "Biking" and "Public Transportation".

For Directions where the Origin and Destination are both inside a Venue (as defined by the Venue Bounds), Walking is the only Travel Mode available.

For Directions where the Origin or Destination are outside a Venue, MapsIndoors will provide Directions inside the Venue and Google Maps will provide Directions outside the Venue.

The main difference between Directions and Routes are the scope of what is included in the responses. Getting Directions response includes multiple routes to choose from, information about the Travel Mode, traffic, and the like. A Route is the specific set of instructions getting from an Origin to a Destination with all of the other parameters like Travel Mode, public transit information etc. outside of the response.

### Route Leg

{% include "src/content/shared/directions/route-leg.md" %}

### Direction Step / Route Step

{% include "src/content/shared/directions/route-step.md" %}

### Turn-by-turn

"Turn-by-turn navigation" means the current Direction Step change when the physical location of the person navigating changes. The current Direction Step might instruct the person to "Make a right turn" and based on their location after they have completed that step, the current Direction Step changes automatically to "Take the elevator to Floor 4".

### Entry Point / Entryway

{% include "src/content/shared/directions/entry-points.md" %}

### Bus/Tram/Train Stop

A "Public Transportation"-only Entry Point inside the Venue is understood to be the point from which MapsIndoors starts the walking directions.

### Parking Lot

A Parking Lot is a "Driving"-specific Entry Point. It will provide a suggestion to park the car at the Parking Lot closest to the Destination. It only displays a Parking Lot when requesting "Driving" directions from outside a Venue to a Location inside a Venue.

### Landmark

Landmarks can be used as navigational identifiers when people describe a route to one another. MapsIndoors does not support Landmarks as special Locations, but they can be constructed using Location Types and Icons.

### Selection Highlight Color

To illustrate which piece of geodata is selected, we use a highlight color that is the highest possible contrast to the surroundings: Pink. You can read more about the [background for our choice on our MapsIndoors product blog](https://blog.mapspeople.com/new-selection-highlight-color).
