---
title: Terminology
eleventyNavigation:
  key: Terminology
  parent: index
  order: 60
---

## MapsIndoors CMS

The MapsIndoors CMS lets you manage all content related to your MapsPeople indoor navigation Solution.

## Solutions

A Solution consists of Map tiles, a Route Network, and Locations in one or more Venues, made up of one or more Buildings that has one or more Floors.

## Venues

A Venue is geographical area that usually contain one or more Buildings.

## Buildings

A Building occupies an area within a Venue. A Building can consist of one or more Floors.

## Locations

A Location is a geographical point containing data. A Location can be anything you like; an office desk, conference exhibitor, room feature (firehose, coffee machine, TV) etc.

Rooms on a Floor in a Building are Locations, and can be defined in two different ways:

1. As a stand-alone Location that does not contain any spatial information besides the one point the Location is set on.
2. As a Room which contains information about the shape and size of the polygon.

### Manage Locations

In the menu point "Locations", you manage Locations for the selected Solution and Venue.

#### Locations List

In the Locations list, you see all Locations for the selected Venue.

The list displays a maximum of 200 Locations. To narrow down the list, filter by Type, Category, Building and Floor, and/or searching the Locations' names.

To sort the Locations list, click on the header title for the row you want to sort the table by. By default, the Locations list is sorted by Name in ascending order, but you can sort by Type, Floor and Building in ascending or descending order.

#### Locations Map

With the Locations lap, you can see the geographical placements of the Locations on the selected Floor within the Buildings in the selected Venue.

The Locations displayed in the Map view on the Locations page in the CMS disregards the display rules set in the Type Visibility tab. The Type Visibility settings only affect how the data in the Solution are displayed in the apps.

#### Create a new Location

You can create a new Location by clicking on the Map in the place where you want the Location placed. After adding the Location, you can add data about the Location in the Location editor.

#### Edit a Location

In the Map view, click on the Location you want to edit. In the Locations list, click on the pen icon on the left side in the row of the Location you want to edit.

##### Location Editor

In the Location editor, you can edit the following:

* Type
* Name
* Translated Name
* Description
* Translated Description
* Categories
* Icon
* Image

Moreover, you can edit the following advanced data:

* Search aliases
* Building
* Floor
* Room identifier
* Active from/to dates

Be careful when editing the advanced data, as it might have unintended consequences.

In the advanced data section, you can also see the Latitude, Longitude and MapsIndoors location ID. The Latitude and Longitude will change if you move the Location on the map, but the ID will never change.

Lastly, you can delete the Location.

##### Setting "active from/to" on a Location

If you do not set a timestamp for either, the Location is always visible.

If you set an "active from" in the future, the Location will be hidden until that date and time.

If you set an "active to", the Location will be hidden after that date and time.

##### Adding translations for a Location

Contact us to add a new language to your Solution.

### Location Types

All Locations are of a Type. A Type can be anything that fits a collection of Locations you have in your Solution, e.g. "Conference Room", "Wardrobe", "Kitchen" etc.

#### Managing Location Types

At [cms.mapsindoors.com/types](https://cms.mapsindoors.com) there is a list of Location Types. You can sort the list in ascending or descending alphabetical order.

Click on the pen icon in the left side of the row for the Location Type you want to change.

In the Location Type editor, you can edit the following:

* Translated Type Name
* Icon
* Label format

Changing the Icon on a Location Type changes the standard icon used for all Locations of that Type, except the Locations you have set a different icon for. We recommend you choose an icon from the icon library we provide, but you can set a url to your own icon if necessary.

The Label Format will change how the label next to the icon on the map for the end user is displayed. Choose between no label, Location Name, Room Id & Location Name, or Location Name & Room Id.

##### Adding translations of a Location Type

Contact us to add a new language to your Solution.

#### Create a new Type

You can create a new Type on the Types list page. You are required to fill out a name for the type in all languages on your Solution. Change the icon and label format if necessary.

### Location Type Template

A Location Type Template sets extra text properties on all Locations of a specific Type. Adding an "Email" text property to the "Employee" Type gives you a text field you can add an email address to for all Locations of the "Employee" Type.

The Location Type Template fields can be named anything that fits the Locations in the Solution you are working with.

Once a name has been set for a text property on a Location Type, it can not be renamed.

### Type Visibility

With Type Visibility, you can control which zoom levels a Type is displayed at for the end user interacting with your apps. You might want to only display "Parking" at the upper zoom levels, then "Toilets", "Stairs" and "Cafeteria" at the next zoom level, and finally all Types of Locations as the user zooms further in.

## Network

The Network is the collection of walkable lines within the Buildings, and the outdoor areas within the Venue.

As an end user, you get directions from your starting point to a specific Location using the Network. The starting point can be anywhere in the world, but the directions always end at a Location.

The directions end on the Network at the point closest to the specified Location. The Network route lines often extend into Rooms on the Map to ensure the user is directed to the closest possible point near the Location.

### Doors and Entry Points

When the user requests directions from a starting point outside the Venue, the directions are provided by Google Maps up to the Entry Point. After the Entry Point, directions are provided by MapsIndoors using the Network.

Doors are points in the Network that add a time delay to the route. That way, it is possible to avert foot traffic through an office with doors in either end to the hallway next to it, or divert from one building entrance to a more preferable one.

Contact us to add data about Doors and Entry Points to the Network in your Solution.

## Category

A Category is a collection of Locations regardless of their Types.

You can have Types for "Unisex Toilet", "Male Toilet" and "Female Toilet" and add all Locations that are part of these Types to the Category "Toilets".

Categories are most often used in the end user apps to display a curated collection of Locations in the navigation drawer or sidebar. The user does not have to see all Types in your Solution, of which there can be many, but instead see Categories for the most used and relevant Locations.

## App Configuration

The App Configuration lets you configure settings for the presentation of the Solution in your web and mobile applications.

For Categories, you can choose the order in which Categories are displayed, and if they should be displayed at all. The web and mobile applications also have the option of displaying an icon for each Category, so you can provide a url to an image file.

## User management

As an Admin, you can view the list of users with access to the Solution at [cms.mapsindoors.com/users](https://cms.mapsindoors.com/users). Search for an email address to filter the list.

To edit a user, click the pen icon to the left of the user's email address. You can change the user's role to be Editor or Admin, or delete the user completely.

Click "New user" to invite a team member to the Solution.

### Log out

To log out, click on your avatar and email in the lower left corner of the screen and click "Log out".

### Change password

Click on your avatar and email in the lower left corner of the screen and choose "Change password". Fill in and confirm your new password.
