---
title: MapsIndoors CMS
toc: true
eleventyNavigation:
  key: map-cms-legacy
  parent:
  title: MapsIndoors CMS
  order: 1000
---

The MapsIndoors Content Management System (CMS) enables you to add, edit, and maintain your data within the MapsIndoors platform.

Your data is structured in a hierarchy where the top level is your Solution which can contain multiple Venues, which in turn can have multiple Buildings and so on. The data-types in hierarchical order:

* **Solution**
  * A Solution is the topmost level of your data structure. It encompasses all of the Venues, Buildings and Locations that you need for your MapsIndoors implementation. It is possible to have more than one Solution, but for the vast majority of use-cases, you will just have one.
* **Venues**
  * A Venue is the second level of data. You can have multiple Venues in one Solution. For example, a large company might have multiple offices spread over the country. Each of these could be a Venue, but under the same Solution. A Venue can consist of one or more Buildings. For example, a sports stadium might be many Buildings, but it is all considered the same Venue.
* **Buildings**
  * A Building is a collection of Floors. Inside a Venue you can have one or more Buildings and an Outside area. Outside is categorized together with Buildings, because it is a part of what comprises a Venue.
* **Floors**
  * Floors are the levels that exist within a Building. A Building has at least one Floor.
* **Locations**
  * There are three kinds of Locations: Rooms, Areas, and Points of Interest (POIs).
    * A Room is a multi-point polygon, representing the walls of the physical Room, like a meeting room, or a restroom.

    * A POI is a point on the map that can be added and moved in the CMS. POIs do not have any polygon data as it consists of only one point. Some examples of POIs are locations that are not available in floor plan drawings, such as coffee machines, food trucks, or temporary event structures.

View the tutorial video below for more information about terminology and hierarchy, or visit the [Glossary]({{site.url}}/various/glossary/).

<iframe width="480" height="300" src="https://www.youtube-nocookie.com/embed/GwyO-Vav8Rs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

There are two main pages in the CMS, "Map" and "Solution Details". The hierarchical structure is like this:

* **Map** - The main page where you manage your data on the map.
* **Solution Details** - A "behind-the-scenes" page, where you manage Categories, Types, App Settings, etc.
  * **Types** - Defines "types" of Locations. Types work as specific identifiers for a group of Locations such as "Canteen", "Bathroom", etc.
  * **Categories** - Categories are a way to group or organize Locations for easier browsing in your application. Categories can be used to group Locations in bundles regardless of their Type.
  * **Type Visibility** - Defines the Zoom Levels for which the Locations of each Type will appear on the Map.
  * **Buildings** - An overview of the Buildings present in your Venue.
  * **Venues** - An overview of the Venues present in your Solution.
  * **Export Map** - Generates a high-resolution image of your Map, suitable for printing or similar. *Note*: Not available for all customers.
  * **App Settings** - A page with various settings concerning your app.
    * **App Configuration** - Settings to configure your app.
    * **API Keys** - API Keys used by your Solution.
    * **Booking Provider** - Settings for the booking provider you use for your Solution.
    * **Position Provider** - Settings for the position provider you use for your Solution.
    * **Webex** - Settings for your Cisco Webex Integration.

In the CMS there are different levels of users, which has an effect on what you have access to. For example, an "Admin" level user has access to Solution-level settings, whereas an "Editor" primarily has access to create and edit Locations on the Map. This documentation is written with an **Admin** user level in mind.

* **Editor** - Editors can create new Locations, edit and delete existing Locations.
* **Admin** - Administrators have editor rights and have access to further settings in the CMS

## Interface Overview

### Map

The Map section is the main navigation of the MapsIndoors CMS and includes the Filter bar at the top, Toolbar at the bottom, a Floor selector on the right, and your Map in the center.

[![map-main](/assets/cms/interface-overview/Map_Main.png)]({{site.url}}/assets/cms/interface-overview/Map_Main.png)

1. Select the active Solution.
1. Enters the "Map" view (shown on the image). This is the page you see when logging into the CMS.
1. Enters the "Solution Details" menu containing the submenus mentioned earlier.
1. Open the Standard Web App using the information entered in the CMS. (Only available if you have set an Alias)
1. Enter the "Settings" menu page containing subpages.
1. Opens a drop-down menu containing options such as "Docs", "Log Out", and a link to enabling two-factor authentication.
1. Select the active Venue. The filter bar can then be used to narrow down the data you see on the Map and Lists for this Venue.
1. Select one or more Buildings.
1. Select one or more Floors. This is active when a single Building is selected.
1. Filters on whether Rooms, POIs, and Areas should be shown on the Map and in the List.
1. A filter to narrow down Locations to display of specific Location Types.
1. A filter to narrow down Locations to display of specific Categories.
1. A filter to narrow down Locations to display with specific App User Roles applied.
1. Click to search for Locations using a Location’s name, Location ID, Alias, or External ID.
1. Bulk edit button activated by selecting one or more Locations in the List view. This allows you to bulk update Location Attributes, such as Location Type, Searchability, Categories, Aliases, and more.
1. Expands a list containing all your Locations. Filters are applied to Location data shown on both the Map and in the List view.
1. A Floor selector, to select the displayed Floor on the Map.
1. The main toolbar to modify your Solution.

#### Toolbar

![map-toolbar](/assets/cms/interface-overview/Map_Toolbar.png)

From left to right, the functionalities in the Toolbar are as follows (you can also hover over the icons in the CMS to see their names):

* **Add POI** - Creates a Point of Interest where you click on the Map. Afterwards it opens an editor where Location details can be adjusted.
* **Add Area** - Creates an Area by clicking on the Map to create corners of a polygon. Afterwards it opens an editor where Area details can be adjusted.
* **Show Network** - A toggle button to show or hide the Route Network your Directions feature will use.
* **Add Barrier Route Element** - Creates a Route Element on your map. The Barrier Route Element can be used to apply e.g. restrictions, delay, or define one way direction to specific parts of the Network. For example, if you do not want your directions to guide your visitors down a specific hallway, but there isn't a Door present, this Route Element can be used.
* **Reload Route Network** - Reloads the Route Network. Route Element changes' effect on the Network becomes visible after reloading the Network.
* **Zoom Level** - Adjust the Zoom Level. Values range from 15 (zoom out) to 22 (zoom in).

### Solution Details

Under Solution Details you can find several subpages, which are described below:

#### Types

![solution-details-types](/assets/cms/interface-overview/Solution_Details_Types.png)

This page is for organising the "Types" you sort your locations in to.

1. Create a new Type.
1. Click to select a Type, for easy selection of multiple Types at once.
1. "Edit Type" - Gives you the option to change the name of the Type, or to modify the App User Role restrictions.
1. "Edit Display Rules" - The ability to modify the Display Rules for a given Type. Read more about [Display Rules]({{site.url}}/various/display-rules/).
1. The name of the Type.
1. The Icon assigned to the Type.
1. Displays what information the Type's Label contains when displayed on your Map.
1. The number of Locations with the given Type applied.
1. "Edit Template" - Edit the template for a given Type.

#### Categories

![solution-details-categories](/assets/cms/interface-overview/Solution_Details_Categories.png)

Categories are similar to Types, but whereas Locations can only be of one Type, they can be of multiple Categories. Categories are used for browsing important Locations, or amenities, in your application. For example, a canteen might be in a Category of both "Food" and "Leisure", but still only be of the Type "Canteen".

1. Create a new Category.
1. "Edit Category" - Edit properties of your Category.
1. The name of the Category.
1. The Key belonging to the Category.

#### Type Visibility

![solution-details-type-visibility](/assets/cms/interface-overview/Solution_Details_Type_Visibility.png)

Type Visibility is the term used to determine at which Zoom Levels both the Types' Icons and Labels are visible.

1. A save button. Click this to save your changes.
1. Visibility toggle. Click to toggle on/off the Type visibility. It controls whether the Type Icons and Labels are shown on the Map
1. Set the minimum and maximum Zoom Level at which a given Type should be visible.

#### Buildings

![solution-details-buildings](/assets/cms/interface-overview/Solution_Details_Buildings.png)

This page provides you with a list of the Buildings in the selected Venue in your Solution.

1. "Edit Building". Lets you edit the properties of the Building, such as name, ID and Floors.
1. The Name of the Building.
1. The Administrative ID of the Building.
1. The Address of the Building.

#### Venues

![solution-details-venues](/assets/cms/interface-overview/Solution_Details_Venues.png)

A page featuring a list of Venues in your Solution. These are provided by MapsIndoors, and to add more, contact your representative.

1. "Edit Venue". You can e.g. edit Venue Name and Venue External ID in the Venue details editor.
1. The Name of your Venues.
1. The Venue ID of your Venue.

#### Export Map

> PLEASE NOTE: This feature is not available in our standard Solution. Please contact your MapsPeople representative to gain access to this feature.

![solution-details-export-map](/assets/cms/interface-overview/Solution_Details_Export_Map.png)

The MapsIndoors CMS also provides the opportunity to export your Map to a higher resolution. For example, if you want to print your Map to physically hang at your location.

1. Open the Display Settings for the Map - NOTE: This is not the same as the Display Rules in the other sections.
1. Set the use-case, this helps determine the resolution the map will be exported in.
1. The Width of the exported Map.
1. The Height of the exported Map.
1. The Rotation angle of the exported Map.
1. The Building you are exporting a Map of.
1. The currently used Zoom Level.
1. Zoom in or out.
1. Floor selector, to select which floor will be exported.
1. Export your Map!

#### App Settings

This page contains various subpages with more advanced settings about your app.

##### App Configuration

This page contains various settings, such as names for your API keys, App User Roles and App Categories.

![solution-details-app-title](/assets/cms/interface-overview/Solution_Details_App_Title.png)

Here you can change the title of your app.

1. Save the changes you've made.
1. Enter the name you wish to use.

![solution-details-alias](/assets/cms/interface-overview/Solution_Details_Alias.png)

The API Keys used to make your MapsIndoors Solution consist of random combinations of letters and numbers. Here, you can assign them an Alias to make it easier to remember.

> NOTE: Do not set an Alias if you want to make it more difficult to find and load your MapsIndoors data in a standard app. In that case, you can only load the data with an API key.

![solution-details-app-user-roles](/assets/cms/interface-overview/Solution_Details_App_User_Roles_V2.png)

You can also modify your App User Roles from within these pages.

1. "Edit Role". Edit settings pertaining to one specific App User Role.
1. The names of your App User Roles.
1. "Add App User Role" - Create a new App User Role.

![solution-details-app-categories](/assets/cms/interface-overview/Solution_Details_App_Categories.png)

Here you can select which Categories can be used for browsing the app.

1. Move your app Categories up and down in order.
1. The name of the Category.
1. Toggle whether or not the Category in question is visible in the app.
1. The Icon selected for the Category.
1. Select an Icon to be used for the Category.

##### API Keys

Here you manage the active API keys generated for your Solution. To load your MapsIndoors data in your apps, you need an API key.

You can create as many API keys as you want, and it is good practise to use one for each place you need to load data from MapsIndoors (each mobile platform, web app etc.).

You can easily delete an API key if it is unused, or has been compromised in some way.

![solution-details-api-keys](/assets/cms/interface-overview/Solution_Details_API_Keys_V2.png)

1. The name that you want to use to identify the new API key.
1. Generate API key.
1. The name of an active API key.
1. Save any changes you make.
1. Toggle between active and inactive API keys.
1. Your API key is located here in text form.
1. Delete the API key.

##### Booking Provider

This submenu presents you the option of integrating a Booking system to your Solution. The exact menus presented here depend on which provider you opt for.

##### Position Provider

MapsIndoors also provides you the option of integrating a Positioning system to your Solution. The exact menus presented here, like the Booking system, depend on which provider you opt for.

##### Webex

As the options above, the options presented for WebEx integration depends on the exact manner of integration.

## Editing Data

### Location

Each Location also has a number of settings associated with it. If you select a Location on the Map or in the List view in the CMS, you will be presented with a modal with the following settings:

* **Type** - Locations must have a Type applied, which can be set in the Location details editor. When creating a new Location some settings are inherited from the selected Type e.g. Name and Icon. You can always change the inherited settings to something else if necessary.
* **Name & Description** - Type in the name of your Location, and a Description. Entering it in the default language is mandatory, but you also have options to enter it in alternative languages.
* **Area** - Choose the colour of the Area the Location covers. You can also set whether the Area is visible or not.
* **Status** - Toggle whether or not this Location appears in searches.
* **Restrictions** - Determine which, if any, App User Role Restrictions this Location should be subject to.
* **Categories** - Add which, if any, Categories this Location belongs to.
* **Location Icon** - You can set an Icon to be used on the Map for this Location.
* **Image Options** - Here you have the option to connect an image to a Location. See below for further details.
* **Search Aliases** - Other search terms that can be searched, and still return this Location, even if it is not a match to the Name, Type or Category.
* **Venue Details** - Select which Building and Floor this Location should belong to.
* **External ID** - You can define an External ID that a Location should use alongside its internal ID.
* **Coordinates** - The coordinates of your Location.
* **MapsIndoors Location ID** - The internal ID of your Location.
* **Active** - If your Location is only displayed and searchable for a given time period, you can define that here.
* **Custom Properties** - MapsIndoors supports Custom Properties, defined by key-value pairs.
* **Location History** - See the editing history of this Location.

#### Image Options with IndoorView

> IndoorView is only supported for web

To get started using the IndoorView feature for your Locations, please make sure that the *Google Street View panorama images* are publicly available for your building by looking at [Google Maps](https://www.google.com/maps). If no imagery is available, please [contact a certified Street View Photographer](https://www.google.com/streetview/contacts-tools/).

1. Click "Set Street View image”

   * This will open a Google Street View window showing the image closest to this Location. Please note that the MapsIndoors CMS looks for panorama images within a certain radius from the Location's position, so make sure to have panorama images published in that area.

1. Navigate Street View and find an image and viewing angle that is suitable
1. Click "Set image”

##### Mapsindoors Support Matrix

| MapsIndoors | Support for IndoorView                                             | Private hosted panorama images |
| ----------- | ------------------------------------------------------------------ | ------------------------------ |
| CMS         | Yes                                                                | No                             |
| Web App     | Yes                                                                | No                             |
| Android App | No                                                                 | No                             |
| iOS App     | No                                                                 | No                             |
| Web SDK     | Yes, through Google Maps Street View API or Static Street View API | No                             |
| Android SDK | No                                                                 | No                             |
| iOS SDK     | No                                                                 | No                             |

IndoorView only supports **publicly** available Google Street View imagery. If you would like to know more about **privately** hosted panorama images, please see [Googles Custom Street View documentation](https://developers.google.com/maps/documentation/javascript/streetview#CustomStreetView).

##### Developing Your Own App

When developing your own app, you can still use the MapsIndoors CMS to save the Google Street View image information to a Location. When the Panorama image is set, the Location gets populated with a `streetViewConfig` property. Please see below for an example.

Location Object:

```javascript
{
  "id": "586ce41ebc1f571794b9e924",
   ...
  "properties": {
    "name": "Copenhagen",
     ...
    "streetViewConfig": {
      "panoramaId": "CAoSLEFGMVFpcE41dTZnVzNpVnU1WmliRjk0T2tpMENhZ3Fya3ljVFh3TjVzN2lY",
      "povHeading": 203.1294893976259,
      "povPitch": -13.068754012666432
    }
  }
}
```

The parameters above can be used to show a static Street View image through the Street View Static API. Please see [the Street View documentation](https://developers.google.com/maps/documentation/streetview/intro) for more information.

A Street View panorama image can be initialized in a `<div>` the following way:

```javascript
function initStreetView(streetViewConfig) {
       const panorama = new google.maps.StreetViewPanorama(
            document.getElementById('panorama'),
            {
                pano: streetViewConfig.panoramaId,
                pov: {
                    heading: streetViewConfig.povHeading,
                    pitch: streetViewConfig.povPitch
                },
                zoom: 0,
                visible: true
            });
}
```

Please see the official [Google Street View Service documentation](https://developers.google.com/maps/documentation/javascript/streetview) for more information.

### Icon Manager

* **Alias:** Add alternative search phrases, for example a restaurant might have aliases of café, dinner, food, lunch etc. Insert a comma between each phrase.

* **Venue Details:** Change Building and or floor.

* **External ID:** This can be edited. See "[ExternalID](https://docs.mapsindoors.com/external-id/)" for more information.

* **"Active to and from":** If required, select a time period during which the Location will be active. "Active" in this case means it is visible on the map, and shows up in search results. Leave the date fields empty if the Location should always be displayed

* **Location History:** Contains a list of all changes made to a Location. Data comes from the MapsIndoors Audit Log functionality.

* **Save changes**

Remember to save before clicking on another Location or changing the page, otherwise your changes will be lost. To save the changes, press "Save”-button in the top of the Location edit form.

![Locations]({{ site.url }}/assets/cms/locations/locations-listview.png)

To view a list of all Locations in a certain Venue, select ‘List View”.

* To sort the data, click on the column title
* To edit a Location, click the pencil
* To edit multiple Locations, tick each one
* To filter, click on the top right options: Type, Category, or Floor. You can also use the search box for a specific Location

When selecting one a more Locations using the checkboxes, 2 options will appear: Edit Locations or Delete Locations.

* **Change type:** Opens a drop down menu to choose new Location Type

* **Location:** Allows you to change the floor of the Locations

* **"Active to and from":** If required, select a time period during which the Location will be active. "Active" in this case means it is visible on the map, and shows up in search results. Leave the date fields empty if the Location should always be displayed

Remember to save before clicking on another Location or changing the page, otherwise your changes will be lost. To save the changes, click "Save”.

## Export Map

Export Map is an add-on feature that can be enabled for a Solution. Once enabled, it allows for PNG export of the MapsIndoors imagery for printing purposes. The export will not include the underlying Google Maps due to terms of use.

The Export Map service has a limit of 8000 x 8000 pixels. Clicking the Download icon button on the bottom right opens a new tab with the PNG.

### Usage (Scale)

Sets the scale of the export imagery.

* Web (1) will export the same pixel size as selected on-screen.
* Retina (2) will export two times the pixels.
* Print (4) will export four times the pixels.

### Display Settings

Allows toggling visible features on the exported map, such as Icons, Location Types, and Labels.

You can also rotate the map and set the size of the screen selection. The max is 2000 x 2000.

### Preview

Preview is especially helpful when using rotation or larger-than-monitor exports.

## Venue

* Edit the Venue name in the available languages
* Choose a default floor

*A note about Venue images:* You can request MapsPeople to add an image of the Venue. It should be in a 600w x 300h size to make it look its best in our Standard Apps.

## Buildings

### Adding a Building

* Click on the "Add building" button at the top-right of the page and a popup window should appear.
* Type a building name, search for the building address by typing in the search field or panning the map.
* Place the red cross on the map at the center of the building's location.
* Click "Add" and the popup window should close.
* The building should now appear in the list.

### Editing a Building

* Click on the pencil icon to the left of the Building name. A new menu will appear
* Edit Building name in the available languages
* Edit floor names
* Select a default floor under "Show advanced"

The Building's default Floor is used to manage panning across Buildings in the apps. In order to improve the user experience in the apps, the default Floor is used when the Building panned to doesn't have the floor index of the floor selector.

## Routes Access

![Routes]({{ site.url }}/assets/cms/route-access/route-access.png)

The Route Access tab allows you to manipulate the network that powers the indoor navigation. It is useful for redirecting traffic by locking paths or isolating entire areas where navigation should be turned off entirely.

To create a parking lot:

* Click on "+ P" in the top right corner. If it is not enabled, zoom in higher than 17.
* The mouse cursor will change to a "+". Click on the map where you want to add the parking lot and a popup window will appear.
* Select a type: Car or Bike.
* Enter a name and click "Save"

To restrict access to a path:

* Click on the path and a popup window will appear.
* Choose between "Open for all", "Open for specific app user roles", "Closed for all".
* When Open for specific app user roles is chosen, a list of app user roles will appear and you can select which roles will be given access.
* Set a delay and click "Save".

## Location Types

![Location Types]({{ site.url }}/assets/cms/location-types/location-types.png)

This is a list of all the Location Types in the Solution. From this list you can edit each Location by clicking on the pencil.

### Syncing Types to Other Solutions

If you have multiple Solutions, you can update Location Types across multiple Solutions to keep them up to date with the latest changes.

Click the "Sync to other Solutions"-button to select which of your other Solutions you want to sync this Location Type to.

When you sync a Location Type, if the Location Type exists in the target Solution, you override the Location Type in the target Solution. If the Location Type does not exist in the target Solution, it is added.

### View Settings

The *View settings* can be set for each Location Type. Use the settings to define how and when the icon and/or label is displayed on the map, and what is shown in the label.

![View Settings]({{ site.url }}/assets/cms/location-types/view-settings.png)

#### Location Type Templates

You can add custom data fields to Locations by adding templates to a Location Type defining the data fields. All Locations of a Type will inherit the templates defined for the Type. Add a template to a Location Type by clicking the template button to the right in the table.

To display or otherwise use the custom data, your app needs to be customized. The properties are not available in the Standard app, only when building one using the SDK.

View the tutorial video below for more information about Location Types.

<iframe width="480" height="300" src="https://www.youtube-nocookie.com/embed/WJIZUBsObU4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Categories

![Categories]({{ site.url }}/assets/cms/categories/categories.png)

Ability to add new categories to the list. Click on New Category, add name, click save. Once created, this Category can be added to a specific Location. The categories can be chosen to be displayed in the app, as well as put in a specific order (this can be done under App Configuration in App Settings).

View the tutorial video below for more information about Categories.

<iframe width="480" height="300" src="https://www.youtube-nocookie.com/embed/DskwwAE4lLE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Syncing Categories to Other Solutions

If you have multiple Solutions, you can update Categories across multiple Solutions to keep them up to date with the latest changes.

Click the "Sync to other Solutions"-button to select which of your other Solutions you want to sync this Category to.

When you sync a Category, if the Category exists in the target Solution, you override the Category in the target Solution. If the Category does not exist in the target Solution, it is added.

Categories have icons, and the icon for the Category is synced to the target Solution as well, creating it if it does not exist already.

## App Settings

### API Keys

To load your MapsIndoors data in your apps, you need an API key.

You can create as many API keys as you want, and it's good practise to use one for each place you need to load data from MapsIndoors (each mobile platform, web app etc.).

You can easily delete an API key if it is unused, or has been compromised in some way.

Previously, you could use a `SolutionID` to load your data, but this is no longer supported. Only API keys is supported for loading data from your Solution.

### App User Roles

* Click on "+ Add App User Roles" and a popup window will appear.
* Enter the role name in all the languages. It's mandatory.
* Click "Save" and the entered name should appear in the table.

### App Categories

Clicking on the arrows to the left of the Category name allows you to change the order. This Category order will be reflected in the apps. You can also choose an icon to be displayed next to the category name.

## Type Visibility

Use these settings to control how Icons are shown on the map.

**Zoom Level:** This can be edited by moving the dot on the line. The icon will appear in the chosen zoom level. The ability to click/select a Location on the map is also based on the Location's Type visibility.

**Visible:** By clicking the eye, this will remove the icon from appearing in the Solution

## Users

Allows Admins, to control who has access and what roles they have, or create new users.

A list appears with all users for the Solution. You can also search for an email via the search box in the upper right.

**Editing a user:** Click on the pencil to the left of the email. The user can be deleted, changed role or added to a Solution. Click Save.

**New user:** Click on new user bottom at top. Enter email, choose Editor or Administrator, and assign the appropriate Solution. Click Create.

## Logs

The Audit Log functionality is a configurable feature in MapsIndoors and if not enabled on your Solution it can be on request.

The Audit Log feature can be used to access the Audit log on MapsIndoor data objects, i.e. you can find or inspect the change history.

The Log functionality is found in the Logs tab under Administration in the CMS.

![Audit log]({{ site.url }}/assets/cms/administration/logs.png)

The Log can be filtered on date, ID, User and Data object types. When pressing download a comma separated file (csv) will be stored on your computer's hard drive.

The log will be in CSV format, which can be opened by a spreadsheet program eg. Excel. Each log entry represents a modification in the data. In short, each entry tells at what time who did what to which object.

The headers represented are:
Time, User, Action, ObjectType, ObjectId and ObjectData

* **Time:** Tells which user did the change (The email representing the user logged in to the system)
* **Action:** Tells what happened:
  * If data was added, the 'Action' will be set to 'Created'
  * If data was changed, the 'Action' will be set to 'Changed'
  * If data was deleted, the 'Action' will be set to 'Deleted'
* **ObjectType:** Tells what type of data was modified (eg. ‘building', ‘location', ‘user', ‘graphdata' ... )
* **ObjectId:** Is a unique ID that represents the given data - Building, Location or whatever it is.
If you want to see a history of that specific Location this ID can be used to filter by
* **ObjectData:** Is a JSON formatted representation of the actual data stored in the MapsIndoors system. To see what changed you can compare this data to the previous change.

Examples of use cases could be:

* **How to do I get Network history?** Filter the ObjectType to ‘graphdata' to see these entries. To find a particular user history, filter ‘User' to their email as well.
* **How to do I get Categories history?** Filter the ObjectType to ‘category' to see these entries. To find a particular data history, filter ‘User' to their email as well.
* **How to do I get Location Type/type template/visibility history?** Filter the ObjectType to ‘locationtype' to see these entries. To find a particular data history, filter ‘User' to their email as well. The type template is covered in the "LocationTypeField” section of the data. The visibility is covered in the "displayrule” section of the data
* **How to find user login activity?** When a user logs in, the corresponding user object will be changed too (the ‘last login field will be updated'). Filter the ObjectType to ‘user' to see login entries. To find a particular user login history, filter ‘User' to their email as well.

If you use Excel you can find a video on how to open a CSV file here: [https://www.youtube.com/watch?v=z5Pxil4jVO4](https://www.youtube.com/watch?v=z5Pxil4jVO4)

* **Icons:** Icons are used for various Locations on the map, e.g. POIs, Rooms. Having a unified representation for specific types of Locations makes the system easier for users to engage with.
* **Location**: A term used for all Rooms and points of interest (POI).
* **POI**: "Point of interest” - is usually an object that isn't tied to a room. E.g. Vending Machine, Locker, A Statue, ATM etc.
* **Type**: All Locations are of a type. Types serve as templates for Locations to provide a basic setup. Many of the properties can later be overridden for specific Locations.
* **Venue**: Typically a collection of Buildings that are close geographically.
* **Search alias**: An alternative name for a Location allowing users to search for the Location by that name.

## Managing Icons

Anywhere in the CMS you can change icons for one or more markers on the map, you use the Icon Manager to do so. Click the "Change"-button to invoke it

In the Icon Manager, you can choose between a predefined set of MapsIndoors icons, and a list of your uploaded icons. Click on an icon in either place, and set it to close the icon manager and preview the icon on the map. Click "Save" in the details editor to update the Location with your selected icon.

We highly recommend using icons in the SVG format.

Remember to keep your icons at a reasonable size. The Icon Manager will prompt you if an icon is larger than 128x64px, as that would take up a large amount of space on the map. There is a hard limit on the size of 900x600px or 150kb. The icon files should also be optimized and compressed to be as small as possible.

We support bulk uploading of image files to the Icon Manager.

To delete an Icon, click the "trash bin" on the Icons you want to delete. It is strongly advised to change Icons on the Locations, Location Types or Categories before deleting their associated Icon file. However, if you delete an Icon that is already used by a Location, the Location will revert back to using the Icon for its Location Type. If you delete an Icon that is used by a Category or Location Type, it will revert to using a generic marker on the Map.

### Uploading SVGs

SVG is a vector file format, which lets MapsIndoors convert your Icon in a range of sizes to get the best looking Icon in every situation.

SVGs should be uploaded with a `width` and `height` that you want the SVG to be displayed on the Map in. Make sure you define it in `px`, not `cm` or `%`. E.g., if you want to display a 32x24px Icon on the Map, upload an SVG with the attributes `width='32px'` and `height='24px'`. For consistency, it's good form to make the `viewport` the same size as the `width` and `height`.

### Supported SVG Elements

We only accept SVGs that conform to a very strict ruleset. If an uploaded SVG contains anything other than the elements and attributes listed below, it will be rejected. All child elements can be nested as supported by the SVG format.

* `<svg>` element
* `viewbox` attribute
* `<path>` child element
* `<rect>` child element
* `<title>` child element
* `<desc>` child element
* `<circle>` child element
* `<defs>` child element
* `<ellipse>` child element
* `<line>` child element
* `<pattern>` child element
* `<polygon>` child element
* `<polyline>` child element
* `<text>` child element
* `<stop>` child element
* `<use>` child element
* `<linearGradient>` child element
* `<radialGradient>` child element
* `<symbol>` child element
* `<style>` child element
* `<tspan>` child element

When you try to upload an SVG containing one or more of these elements and/or attributes, the upload is cancelled and you will see which files contain the unsupported elements.

If your SVGs contain unsupported elements, you must remove them before they can be uploaded. One typical issue is embedded `base64` data in the SVG, which usually indicates the SVG will display raster image data (PNGs and the like) somewhere in it. That can lead to unintended consequences on the map.

#### SVG Help

Michelle Barker has written [a terrific guide to optimizing SVGs for the web](https://css-irl.info/optimising-svgs-for-the-web/) on her site.

A great tool to strip unnecesary elements from your SVG-file is [SVGOMG by Jake Archibald](https://jakearchibald.github.io/svgomg/).

#### Syncing Icons to Other Solutions

If you have multiple Solutions, you can sync Icons across multiple Solutions to make sure you can use the same Icons in all of your Solutions.

Open the Icon Manager (you can find it on a Location Detail screen when you set the Icon for that Location). Find the Icon you want to sync to one or more Solutions, and click the "Sync"-icon next to the filename of the Icon. Then you can select which other Solutions you want to sync this Icon to.

When you sync an Icon, if the Icon exists in the target Solution (i.e. an Icon with the exact same filename), you override the Icon in the target Solution. If the Icon does not exist in the target Solution, it is added.

#### PNG Image File Support

We highly recommend using SVGs for Icons across MapsIndoors, but support PNG files as well.

When uploading an Icon in the PNG format, make sure you upload it in a 3x size to accommodate for it being scaled down on the map. For example, to display a 20x20px Icon on the Map, upload it in 60x60px.

### Export Map

Export Map is an add-on feature that can be enabled for a Solution. Once enabled, it allows for PNG export of the MapsIndoors imagery for printing purposes. The export will not include the underlying Google Maps due to terms of use.

The Export Map service has a limit of 8000 x 8000 pixels. Clicking the Download Icon button on the bottom right opens a new tab with the PNG.

#### Usage (Scale)

Sets the scale of the export imagery.

* Web (1) will export the same pixel size as selected on-screen.
* Retina (2) will export two times the pixels.
* Print (4) will export four times the pixels.

#### Display Rules

Allows toggling visible features on the exported map, such as Icons, Location Types, and Labels.

You can also rotate the map and set the size of the screen selection. The max is 2000 x 2000.

#### Preview

Preview is especially helpful when using rotation or larger-than-monitor exports.

### Split and Combine

Split and Combine are features that enable you to edit a Room's geometry. A Room can either be split in two, or combined with another Room.

The Split and Combine features are useful if you want to make quick changes to your Rooms. If you want to make groundbreaking changes to a Floor or Building layout, reach out to your contact at MapsPeople with your updated CAD drawings.

One use case for Split and Combine is to manage the layout of an exhibition for a temporary event in a convention center. Combine booths or split them into smaller ones based on the event demands.

Another use case is if you make changes to your office layout without making any structural changes to the building. E.g. you might knock down a plaster wall to combine two meeting rooms or the like, which doesn’t necessarily require a full redrawing of your floor layout by our team of specialists.

### How to split

Select a Room on the map. In the Location Details editor, click on the “Split”-button. Place two points on the borders of the Rooms where you'd like to split it. Then choose which Room is the new Room on the map. The new Room will get a new ID, but otherwise copy all other data from the original Room. The old Room will retain all of the original data.

You can get a helping hand after placing the first splitting point by holding down the "Shift" key on your keyboard. The line will be drawn perpendicular (at a 90° angle) to the Room's wall.

If you exit the Split mode before completing the split, your changes will be discarded.

#### Detailed constraints for Split

1. The split must contain two points touching the edge/Walls of the Room.
1. The split can not extend outside of the Room.
1. The split must not intersect with any holes in the Room.
1. The split must be at least 1 meter from any Walls or holes.
1. The outcome of the split must be at least 1 square meters in size.
1. A split must not overlap itself.

### How to combine

Select a Room on the map. In the Location Details editor, click on the “Combine”-button.

The selected Room is now highlighted on the map, with the compatible Rooms highlighted in a different color. Click on the other Room you'd like to combine with your selected Room.

The combined Room’s Location Details are based on the first selected Room’s Location Details. If you have any external integrations that rely on a Room's ID, make sure the Rooms are selected in the right order.

If you exit the Combine mode before completing the combination, your changes will be discarded.

#### Detailed constraints for Combine

1. All Locations must be of the same Type.
1. The Rooms must share at least 1 meter of unbroken Wall.

## Settings

### Logs

The Audit Log functionality is a configurable feature in MapsIndoors and if not enabled on your Solution it can be on request.

The Audit Log feature can be used to access the Audit log on MapsIndoor data objects, i.e. you can find or inspect the change history.

The Log functionality is found in the Logs tab under Settings in the CMS.

The Log can be filtered on date, ID, User and Data object types. When pressing download a comma separated file (csv) will be stored on your computer's hard drive.

The log will be in CSV format, which can be opened by a spreadsheet program eg. Excel. Each log entry represents a modification in the data. In short, each entry tells at what time who did what to which object.

The headers represented are:
Time, User, Action, ObjectType, ObjectId and ObjectData

* **Time:** Tells which user did the change (The email representing the user logged in to the system)
* **Action:** Tells what happened:
  * If data was added, the 'Action' will be set to 'Created'
  * If data was changed, the 'Action' will be set to 'Changed'
  * If data was deleted, the 'Action' will be set to 'Deleted'
* **ObjectType:** Tells what type of data was modified (eg. ‘building', ‘location', ‘user', ‘graphdata' ... )
* **ObjectId:** Is a unique ID that represents the given data - Building, Location or whatever it is.
* **ObjectData:** Is a JSON formatted representation of the actual data stored in the MapsIndoors system. To see what changed you can compare this data to the previous change.

Examples of use cases could be:

* **How to do I get Network history?** Filter the ObjectType to ‘graphdata' to see these entries. To find a particular user history, filter ‘User' to their email as well.
* **How to do I get Categories history?** Filter the ObjectType to ‘category' to see these entries. To find a particular data history, filter ‘User' to their email as well.
* **How to do I get Location Type/type template/visibility history?** Filter the ObjectType to ‘locationtype' to see these entries. To find a particular data history, filter ‘User' to their email as well. The type template is covered in the "LocationTypeField” section of the data. The visibility is covered in the "displayrule” section of the data
* **How to find user login activity?** When a user logs in, the corresponding user object will be changed too (the ‘last login field will be updated'). Filter the ObjectType to ‘user' to see login entries. To find a particular user login history, filter ‘User' to their email as well.

If you use Excel you can find a video on how to open a CSV file here: [https://www.youtube.com/watch?v=z5Pxil4jVO4](https://www.youtube.com/watch?v=z5Pxil4jVO4)

* **Icons:** Icons are used for various Locations on the map, e.g. POIs, Rooms. Having a unified representation for specific types of Locations makes the system easier for users to engage with.
* **Location**: A term used for all Rooms and Points of Interest (POI).
* **POI**: "Point of interest” - is usually an object that isn't tied to a Room. E.g. Vending Machine, Locker, A Statue, ATM etc.
* **Type**: All Locations are of a Type. Types serve as templates for Locations to provide a basic setup. Many of the properties can later be overridden for specific Locations.
* **Venue**: Typically a collection of Buildings that are close geographically.
* **Search alias**: An alternative name for a Location allowing users to search for the Location by that name.

### Users

Allows Admins to control who has access, and what roles they have, as well as create new users.

A list appears with all users for the Solution. You can also search for an email via the search box in the upper right.

**Editing a user:** Click on the pencil to the left of the email. The user can be deleted, changed role or added to a Solution. Click Save.

**New user:** Click on new user bottom at top. Enter email, choose Editor or Administrator, and assign the appropriate Solution. Click Create.

## Support

**Something not working?**

If you have found a bug or encountered an issue you can not resolve, please reach out through our [support portal](https://www.mapspeople.com/support/).

### Feedback

**Do you have feedback for us?**

Send us an email at [cms-feedback@mapspeople.com](mailto:cms-feedback@mapspeople.com)
