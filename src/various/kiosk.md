---
title: Kiosk
eleventyNavigation:
  key: Kiosk
  parent: various
  order: 9
---

Please do the following before getting started:

* Disable the on-screen keyboard in the operating system of the computer the Kiosk app will run on
* Disable the browser's position

## Create Kiosk Locations in the CMS

Log in to the CMS and create a new Location Type. Give it a memorable name like e.g. "Kiosk".

Create all your physical Kiosks as Locations in the CMS, assigning them to the Location Type you just created.

## Configure the Kiosk

To set up your Kiosk, you need to set a few parameters in the URL. The `?` symbol has to be in front of the first parameter, and all other parameters are separated with an `&` symbol.

This is what the full URL for an app in Kiosk mode could look like:

<http://kiosk.mapsindoors.com/demo?originLocation=652cf26a26784b4e9a390d8b&zoom=22&timeout=20&legend=true&bearing=180&pitch=60&liveData=occupancy,availability,position&logOut=true>

Splitting the URL, this is what it contains:

* **`demo`** is the `Alias` for your Solution (you can use an API key in the same way if an Alias is not set)
* **`originLocation=652cf26a26784b4e9a390d8b`** is the Location selected as "origin Location", i.e. where your Kiosk is located in the real world
* **`zoom=22`** is the zoom level to start at
* **`&timeout=20`** is the timeout period (in seconds) before resetting
* **`&legend=true`** is whether the Legend should be displayed
* **`&bearing=180`** is how much the map should be rotated from North (in this case 180 degrees, so due South)
* **`&pitch=60`** is how much the map should tilt towards the horizon
* **`&liveData=occupancy,availability,position`** is which Live Data Domains should be enabled on the Kiosk
* **`&logOut=true`** is to control the visibility of the log-out button.*

*Only relevant if the customer has SSO is enabled.

All the parameters can be combined individually and differently for each Kiosk you set up. 

The URL parameters are saved in the browser's *local storage* to persist across an app refresh, without the need for manually entering them again. They are all prefixed with `MIKIOSK:param`. The saved parameters are overwritten when new URL parameters are set, and can only be deleted by clearing the browser's local storage.

When testing the Kiosk, it is highly recommended to use Chrome's "Incognito" or Safari's "Private Browsing" feature to ensure the local storage is empty.

## Legend Fields

To update and present custom fields in the Legend, add *Custom Properties* to the Location set as `originLocation`.

The Custom Properties are grouped together by the index (number) defined in the key. You can add as many fields as you would like.

### Example

| Key            | Value                  |
| -------------- | ---------------------- |
| 1LegendHeading | Header text goes here  |
| 1LegendContent | Content text goes here |
| 2LegendHeading | Header text goes here  |
| 2LegendContent | Content text goes here |
| ...            | ...                    |

## Google Analytics Tracking

Google Analytics is used for general analytics, page view and event tracking in the Kiosk app.

To collect statistics in Google Analytics, provide your MapsIndoors representative with a Google Analytics Property ID (tracking id).

You will receive stats and events in the Google Analytics Dashboard approximately 24 hours after the key has been set.

### Page View Tracking

A page view event is sent for the following views:

* Home
* Search
* Details

### Event tracking

The following events is sent from the kiosk when triggered:

| Category       | Action                   | Label                                                    | Internal | Description                                                           |
| -------------- | ------------------------ | -------------------------------------------------------- | -------- | --------------------------------------------------------------------- |
| Initialization | URL parameter configured | Origin Location was set                                  | True     | When the origin location parameter is set                             |
| Initialization | URL parameter configured | Timeout was set                                          | True     | When the timeout parameter is set                                     |
| Initialization | URL parameter configured | Zoom parameter was set                                   | True     | When the zoom level parameter is set                                  |
| Initialization | URL parameter configured | Bearing parameter was set                                | True     | When the bearing parameter is set                                     |
| Initialization | URL parameter configured | Pitch parameter was set                                  | True     | When the pitch parameter is set                                       |
| Initialization | URL parameter configured | Legend was set                                           | True     | When the legend params is set to true                                 |
| Initialization | URL parameter configured | LiveData parameter was set ([DOMAIN TYPES])              | True     | When live data parameter is set                                       |
| Home           | Reset                    | Kiosk was reset                                          | True     | When the kiosk is dirty and has been idle for X amount of seconds     |
| Search         | Location selected        | Location id: [LOCATION ID], Search query: [SEARCH QUERY] | False    | When a location is selected in the list and a search query is entered |
| Search         | Location selected        | Location id: [LOCATION ID]                               | False    | When a location is selected in the list                               |
| Search         | Category filter applied  | Selected "[CATEGORY NAME]" Category                      | False    | When a category is selected                                           |
| Details        | QR Code                  | QR code generated                                        | False    | When a QR code is successfully generated                              |
| Details        | Send SMS                 | SMS successfully sent                                    | False    | When a SMS is successfully sent                                       |
| Details        | Send SMS                 | SMS failed to send                                       | False    | When a SMS is unsuccessfully sent                                     |

## Configuring Chrome to Run in Kiosk Mode

Starting Chrome in "kiosk mode" enforces fullscreen mode, removes the address bar, the close and minimise buttons as well as bookmarks. Starting the browser in "kiosk mode" requires the `--kiosk` parameter along with a target URL.

Here's how you would do it on a computer running Windows:

1. Create a shortcut to chrome.exe located in the application folder

    ```bash
    C:\Program Files (x86)\Google\Chrome\Application
    ```

2. Right-click on the shortcut and select "Properties"
3. In the "Target" field add the `--kiosk` parameter to the path
4. Now add the target URL, e.g.:

    ```bash
    "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --kiosk "http://kiosk.mapsindoors.com/demo"
    ```

Now close all instances of Chrome, and start Chrome in kiosk mode using the shortcut.

## Send SMS with Link to Route

For the SMS feature to work, MapsPeople needs to activate it.

The limit for sending an SMS to the same phone number is 3 messages per 10 minutes.

## URL Parameters

### `originLocation`

The `originLocation` URL parameter is set with a Location's ID. This can be found in the CMS on the Location's details page.

The Kiosk will center the viewport on the `originLocation` when initialized and every time it resets, and all routes start originate at this Location.

The `originLocation` URL parameter is saved in the browser's local storage as  `MIKIOSK:{miApiKey}-paramOriginLocation`.

#### Example

```bash
http://kiosk.mapsindoors.com/demo?originLocation=f952e8bcf8f0423b96f23611
```

### `liveData`

The `liveData` URL parameter is used for enabling Live Data. The URL parameter accepts a comma-separated list of Live Data Domain types.

Available Domain types can be found here: <https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/mapsindoors.LiveDataManager.html#.LiveDataManager.LiveDataDomainTypes>

The `liveData` URL parameter is saved in the browser's local storage as  `MIKIOSK:{miApiKey}-paramLiveData`.

[Get in touch](https://resources.mapspeople.com/contact-us) to hear more about how to set up Live Data integrations for your Solution.

#### Example

```bash
http://kiosk.mapsindoors.com/demo?liveData=occupancy,availability,position
```

### `zoom`

The `zoom` level URL parameter is used for setting a default zoom level. It defaults to 21 if the parameter is not set. The configured zoom level is used when the kiosk is initialized and every time it resets to the initial view. The zoom range will have to be between 0 - 22.

The `zoom` level URL parameter is saved in the browser's local storage as  `MIKIOSK:{miApiKey}-paramZoom`.

#### Example

```bash
http://kiosk.mapsindoors.com/demo?zoom=22
```

### `timeout`

The `timeout` URL parameter is used to set a period after which the Kiosk will reset to its initial state if it has not been touched. The entered value is in seconds.

The `timeout` URL parameter is saved in the browser's local storage as  `MIKIOSK:{miApiKey}-paramTimeout`.

#### Example

```bash
http://kiosk.mapsindoors.com/demo?timeout=20
```

### `legend`

By adding the `legend` URL parameter, the Legend card is displayed on top of the map. The Legend provides a list of Categories for which there are Locations in the Venue associated with the `originLocation`.

The `legend` URL parameter is saved in the browser's local storage as  `MIKIOSK:{miApiKey}-paramLegend`.

#### Example

```bash
http://kiosk.mapsindoors.com/demo?legend=true
```

### `bearing`

By adding the `bearing` URL parameter, the angle (heading) of the map is controlled. With a range between 0 and 360 degrees, where 0° is north, the map is rotated around its center.

The `bearing` URL parameter is saved in the browser's local storage as  “`MIKIOSK:{miApiKey}-paramBearing`”.

#### Example

```bash
http://kiosk.mapsindoors.com/demo?bearing=180
```

### `pitch`

By adding the `pitch` URL parameter, the angle towards the horizon measured in degrees of the map is controlled, with a range between 0 and 60 degrees. Zero degrees results in a two-dimensional map, as if you're looking straight down on the ground.

The `pitch` URL parameter is saved in the browser's local storage as  `MIKIOSK:{miApiKey}-paramPitch`.

#### Example

```bash
http://kiosk.mapsindoors.com/demo?pitch=60
```

### `logOut`

By adding the `logOut` URL parameter, a log-out button will be visible in the upper right corner of the viewport. The button is only visible when a user is logged in, and the URL parameter is present.
This parameter is only relevant for customers with SSO enabled for their solution.

The `logOut` URL parameter is saved in the browser's local storage as  `MIKIOSK:{miApiKey}-paramLogOut`.

#### Example

```bash
http://kiosk.mapsindoors.com/demo?logOut=true
```

## Live Data Badges

When subscribing to Live Data (see *URL parameters*), badges will be applied to the icons for Locations that have Live Data.

* **Availability:** Will add a green badge with a checkmark, or a red badge with a cross, depending on the _availability_ of the Location.

* **Occupancy**: Will add a black badge with a number depicting the _occupancy_ of the location (`nrOfPeople`).
It is also possible to show a _utilization percentage_ badge instead of occupancy number. To do that, a custom property must be set on the Location with the key `livedataRenderOccupancyAs` and value `% utilization`.
