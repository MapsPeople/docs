---
title: MapsIndoors CMS
toc: true
eleventyNavigation:
  title: MapsIndoors CMS
  key: cms
  parent: index
  order: 10
---

The MapsIndoors Content Management System (CMS) is the platform through which you edit your Maps, Locations, POI's and more.

Using the CMS is much less technical than the process of developing an app for Android, iOS or Web, and should be usable by almost anyone, no matter your background - No skills in programming are needed here.

Your data is structured in a hierarchy where the top level is your Solution which can contain multiple Venues, which in turn can have multiple Buildings and so on. The data-types in hierarchical order, and a short description:

* **Solution**
  * A Solution is the topmost level of your data structure. It encompasses all of the Venues, Building and Locations that you need for your MapsIndoors implementation. It is possible to have more than one solution, but for the mast vajority of use-cases, you will just have one.
* **Venues**
  * A Venue is the second level of data. A Venue might consist of only one Building, but it could also consist of several, for example, a university campus might be many Buildings, but it is all considered the same Venue. You can have multiple Venues in one solution, for example, a university might have multiple campuses spread over the city. Each of these could be a Venue, but under the same solution.
* **Buildings**
  * A Building is a data type that is a collection of Floors. Buildings are slightly less abstract than Solutions and Venues, as they are just that - a Building, both in real life and in the MapsIndoors terminology.
* **Floors**
  * Floors are the levels that exist within a Building. A Building might only have one Floor, but it could also have 50 or more! That entirely depends on the size of the Building in question.
* **Locations**
  * Locations can be split into two seperate types - Rooms and Points of Interest (POI's).
    * A Room is just that, a data point with a defined boundary, often corresponding to the walls of the physical Room. This could be a meeting room, or a bathroom.

    * A POI is a more non-specifc Location, that doesn't necesarily havce a physcially constraining factor such as walls. An example of this could be a water cooler in an office - It's a physical location, but it's not really a Room either. Therefore, it would be created as a POI. Further examples of POI's could be a food truck visiting once a month, or just to designate a general office area.

View the tutorial video below for more information about terminology and hierarchy.

<iframe width="480" height="300" src="https://www.youtube-nocookie.com/embed/GwyO-Vav8Rs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

There are several main pages in the CMS, those being "Map", "Solution Details" and "Deployment". "Solution Details" and "Deployment have further subpages. The heirachial structure is like this:

* **Map** - The main page, this is where you manage your map.
* **Solution Details** - A "behind-the-scenes" page, where you administrate things such as categories, types, visibility, etc.
  * **Types** - Define "types" of location, such as "Canteen", "Bathroom", etc.
  * **Categories** - Similar to types, but in a broader sense - The types "Male Bathroom" and "Female Bathroom" might both belong to the category "Toilets".
  * **Type Visibility** - Define the zoom levels for which each type will appear on the map.
  * **Buildings** - A list of the buildings present in your venue.
  * **Venues** - A list of venues present in your solution.
  * **Export Map** - Generates a high-resolution image of your map, suitable for, for example, printing.
  * **App Settings** - A page of various settings concerning your app.
    * **App Configuration** - Settings to configure your app.
    * **API Keys** - API Keys used by your solution.
    * **Booking Provider** - Settings for the booking provider you use (if used) for your solution.
    * **Position Provider** - Settings for the position provider you use (if used) for your solution.
    * **Webex** - Settings for your Cisco Webex Integration (if used).

Keep in mind, that there are 2 different roles in the system, that may impact which options you have access to. This documentation will be written from the perspective of an **Admin** level user.

* **Editor** - Editors can create new Locations, make changes to and remove existing Locations
* **Admin** - Administrators have editor rights and have access to further settings in the CMS

## Interface Overview

### Map

This is the main navigation of the MapsIndoors CMS. The map present will depend on the map you have uploaded in your Solution, but the overlay will remain the same.

![map-main](/assets/cms/map/Map_Main.png)

1. A button to return you to the main menu.
1. Select the active Solution.
1. Enter the "Map" view (the currently active one in the screenshot).
1. Enter the "Solution Details" menu.
1. View a sample Web App using the information entered in the CMS.
1. Enter the "Settings Menu".
1. Open a drop-down menu containing options such as "Docs" and "Log Out".
1. Select the active Venue.
1. Select the active Building.
1. Select the active Floor.
1. A filter to narrow down what to display, such as only displaying POI's, or only displaying Rooms.
1. A filter to narrow down what to display, based on predefined or custom types.
1. A filter to narrow down what to display, based on predefined or custom categories.
1. A filter to narrow down what to display, based on App User Role restrictions.
1. Click to search based on your defined parameters.
1. Open the editing menu for the Location you have selected.
1. Open a list containing all your Locations.
1. A floor selecter, to select your active Floor.
1. The main toolbar to modify your Solution.

#### Toolbar

![map-toolbar](/assets/cms/map/Map_Toolbar.png)

Working left to right, the functionality in this main toolbar is as follows - You can also hover over the icons in the CMS to see their names.

* **Add POI** - Creates a Point of Interest where you click, and opens the configuration menu to add information to it.
* **Add Area** - Creates an Area by clicking to create corners of a polygon.
* **Show Network** - A toggle button to show or hide the route network your Directions feature will use.
* **Add Normal Route Element** - Creates a Route Element on your map - These would usually be used to create "invisible" barriers, by customising the Restrictions for the Route Element, for example, if you do not want your Directions to guide your visitors down a specific hallway, but there isn't a physical door present.
* **Reload Route Network** - Reload the Route Network.
* **Zoom Level** - Adjust the zoom level. Values range from 15 (zoom out) to 22 (zoom in).

### Solution Details

Solution details is the page to handle some of the less-obvious facets of managing your solution, such as organising your locations into "Types" and "Categories", or exporting your map in a resolution suitable for printing.

#### Types

![solution-details-types](/assets/cms/solution-details/Solution_Details_Types.png)

This page is for organising the "Types" you sort your locations in to.

1. Create a new Type.
1. Click to select a Type, for easy selection of multiple Types at once.
1. "Edit Type" - Gives you the option to change the name of the type, or to modify the App User Role restrictions.
1. "Edit Display Rules" - The ability to modify the Display Rules for a given type - See more detailed information on Display Rules here.
1. The name of the Type.
1. The icon assigned to the Type.
1. Displays how the Label is displayed on your map - Usually either Location name, or not displayed at all.
1. The number of Locations in the given Type.
1. "Edit Template" - Edit the template for a given Type.

#### Categories

![solution-details-categories](/assets/cms/solution-details/Solution_Details_Categories.png)

Categories are similar to Types, but whereas Locations can only be of one Type, they can be of multiple Categories, and would usually be used as a form of "tags" when searching - For example, a canteen might be in a Category of both "Food" and "Leisure", but still only be of the Type "Canteen".

1. Create a new Category.
1. "Edit Category" - Edit properties of your Category.
1. The name of the Category.
1. The Key belonging to the Category.

#### Type Visibility

![solution-details-type-visibility](/assets/cms/solution-details/Solution_Details_Type_Visibility.png)

Type Visibility is the term used to determine at which zoom levels both Names and Labels are visible, determined per Type.

1. A save button, click this to save your changes.
1. Hide/Unhide - Click or unclick this if you don't want a specific Type to show up on the map at all.
1. Set the minimum and maximum zoom level at which a given Type should be visible.

#### Buildings

![solution-details-buildings](/assets/cms/solution-details/Solution_Details_Buildings.png)

This page provides you with a list of Buildings in your Solution.

1. "Edit Building" - Let's you edit the properties of the Building, such as name, ID and Floors.
1. The Name of the Building.
1. The Administrative ID of the Building.
1. The Address of the Building.
1. Add a new Building.

#### Venues

![solution-details-venues](/assets/cms/solution-details/Solution_Details_Venues.png)

A page featuring a list of Venues in your Solution. These are provided by MapsIndoors, too add more, contact your representative.

1. "Edit Venue" - You do still have limited editing options, despite Venues being controlled by MapsIndoors.
1. The Name of your Venues.
1. The Venue ID of your Venue.

#### Export Map

![solution-details-export-map](/assets/cms/solution-details/Solution_Details_Export_Map.png)

The MapsIndoors CMS also provides the opportunity to export your Map to a higher resolution, for example, if you want to print your map to physically hang at your location.

1. Open the Display Settings for the Map.
1. Set the use-case, this helps determine the resolution the map will be exported in.
1. The Width of the exported map.
1. The Height of the exported map.
1. The Rotation angle of the exported map.
1. The Building you are exporting a map of.
1. The currently used Zoom Level.
1. Zoom in or out.
1. Floor selector, to select which floor will be exported.

#### App Settings

This page contains various subpages with more advanced settings about your app.

##### App Configuration

This page contains various settings, such as more memorable names for your API keys, App User Roles and App Categories.

![solution-details-app-title](/assets/cms/solution-details/Solution_Details_App_Title.png)

Here you can change the title of your app.

1. Save the changes you've made.
1. Enter the name you wish to use.

![solution-details-alias](/assets/cms/solution-details/Solution_Details_Alias.PNG)

The API Keys used to make your MapsIndoors solution consist of random combinations of letters and numbers. Here, you can assign them an alias to make it easier to remember for a person.

NOTE: Do not set an Alias if you want to make it more difficult to find and load your MapsIndoors data in a standard app. In that case, you can only load the data with an API key.

![solution-details-app-user-roles](/assets/cms/solution-details/Solution_Details_App_User_Roles.PNG)

You can also modify your App User Roles from within these pages.

1. "Edit Role" - Edit settings pertaining to one specific App User Role.
1. The names of your App User Roles.
1. "Add App User Role" - Create a new App User Role.

![solution-details-app-categories](/assets/cms/solution-details/Solution_Details_App_Categories.png)

Here you can select which categories can be used for browsing the app.

1. Move your app categories up and down in order.
1. The name of the Category.
1. Toggle whether or not the Category in question is visible in the app.
1. The icon selected for the Category.
1. Select an icon to be used for the Category.

##### API Keys

![solution-details-api-keys](/assets/cms/solution-details/Solution_Details_API_Keys.png)

Here you manage the active API Keys generated for your Solution.

1. The name that you want to use to identify the new API key.
1. Generate API key.
1. The name of an active API key.
1. Save any changes you make.
1. Toggle between active and inactive API keys.
1. Your API key is located here in text form.
1. Delete the API key.

##### Booking Provider

This submenu presents you the option of integrating a Booking system to your solution. The exact menus presented here depend on which provider you opt for.

##### Position Provider

MapsIndoors also provides you the option of integrating a Positioning system to your solution. The exact menus presented here, like the Booking system, depend on which provider you opt for.

##### Webex

As the options above, the options presented for WebEx integration depends on the exact manner of integration.

## Editing Data

### Location

Each Location also has a certain number of settings associated with it. If you select a Location on the CMS, you will be presented with a sidebar-menu with the following options:

* **Type** - If your Location belongs to and already defined Type, you can set that here. This ensures that you only have to fill out a minimum of data, as much of the following data will be fillin in automatically based on the Type.
* **Name & Description** - Type in the name of your Location, and a Description. Entering it in the default language is mandatory, but you also have options to enter it in alternative languages.
* **Area** - Choose the colour of the Area the Location covers. You can also set whether the Area is visible or not.
* **Status** - Toggle whether or not this Location appears in searches.
* **Restrictions** - Determine which, if any, App User Role Restrictions this Location should be subject to.
* **Categories** - Add which, if any, Categories this Location belongs to.
* **Location Icon** - If not part of a Type, you can set an Icon to be used on the map for this Location.
* **Image Options** - Here you have the option to connect an image to a location.
* **Search Aliases** - Other search terms that can be searched, and still return this location, even if it is not a match to the Name, Type or Category.
* **Venue Details** - Select which Building and Floor this Location should belong to.
* **External ID** - You can define an External ID that a Location should use alongside its internal ID.
* **Coordinates** - The coordinates of your Location.
* **MapsIndoors Location ID** - The internal ID of your location.
* **Active** - If your Location is only displayed and searchable for a given time period, you can define that here.
* **Custom Properties** - MapsIndoors supports Custom Properties, defined by key-value pairs.
* **Location History** - See the editing history of this Location.
