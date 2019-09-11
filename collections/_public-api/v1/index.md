---

title: MapsIndoors Data API

---

## Introduction and getting started

From the Mapsindoors API you can get, add, change and delete rooms and points of interest from your MapsIndoors™ solution via a REST service.

The Public API can be found here:

[https://public.mapsindoors.com](https://public.mapsindoors.com)

There is a (swagger) interface definition here

[https://public.mapsindoors.com/doc](https://public.mapsindoors.com/doc)

**Note that only https is supported.**


### Login and credentials

The first thing needed is to log in to the service and get a security token used for the data endpoints.

[HttpPost, Route("token")]

The interface supports two ways to login. Via Google or via a simple username/password pair.


    Login with username/password:


    Use the following headers


    Content-Type: application/x-www-form-urlencoded


    Use the following Key/Values


    Key: grant_type Value: password


    Key: username Value: <your username>


    Key: password Value: <your password>

The body of the request should end up containing a text like this:

grant_type=password&username=<your username>&password=<your password>



To use Google login you will need to set grant_type to google_id_token instead.

The [google accounts API ](https://developers.google.com/identity/protocols/OAuth2)is to be used to obtain a valid Google token. This is outside the scope of this document. 

**Use the following headers for login with username/password:**


    Use the following headers


    Content-Type: application/x-www-form-urlencoded


    Use the following Key/Values


    Key: grant_type Value: google_id_token


    Key: id_token Value: <your google token>


### Endpoints

The public data api consists on a number of endpoints to access the various data. The description of those can be found in [swagger](https://public.mapsindoors.com/doc).

In swagger each GET method are pre-loaded with all mandatory fields needed for you to get a live example of data just by pressing the ‘_Try it now_’ button.



## Data description


### Dataset

The main start point for your data is the dataset object. This object contains information about the entire data set such as languages and where to find more data.

The demo dataset looks like this


```
{
  "id": "550c26a864617400a40f0000",
  "name": "RTX",
  "availableLanguages": [
    "en",
    "da"
  ],
  "baseLanguage": "en",
  "rootObjects": [
    "550c286964617400a4100000"
  ]
}
```


It tells which languages are defined for this project, which language is the default one (english here) and it has a “`rootObjects`“ reference list which refers to the geospatial data that makes up the bulk of a mapsindoors solution the root objects are Geodata objects.


### Geodata

All geospasial data, geodata, is arranged in a simple tree. Each element has a parent ID (except the root) so as an example, a point of interest can have room parent. The room will typically be on a floor in a building on a venue. Venues are typical root object.

![Geodata Structure](geodata-structure.png)

The top three layers (venues, buildings and floors) are created and maintained by Mapspeople so data from these can be read but not altered via this API.



*   Rooms can be updated only
*   POIs can be created, updated and deleted

Rooms have a polygon that describes where it is on the map. POIs are noted with a single point on the map and is typically something inside a room - important things like the coffee machine.

To read, change or delete geodata use the geo data endpoints described here

[https://public.mapsindoors.com/doc/ui/index#/Geodata](https://public.mapsindoors.com/doc/ui/index#/Geodata)

Note that when you get data you only specify the datasetId hence you get the entire tree! The other Geodata endpoints works on individual Geodata objects.


## Detailed data description


### Geodata

Each Geodata element has a number of properties. Let's look at an example - a coat hanger in a room from the demo solution. 


```
 {
    "id": "573dc6f63fcacf0d88c56edd",
    "parentId": "f43b931f09314f3f9dd796f9",
    "datasetId": "550c26a864617400a40f0000",
    "baseType": "poi",
    "displayTypeId": "d7558711f7c64534972cc65f",
    "geometry": {
      "coordinates": [
        9.956830884329975,
        57.085763732415764
      ],
      "type": "Point"
    },
    "aliases": [],
    "categories": [],
    "status": 3,
    "properties": {
      "name@en": "Coat stand (RT)",
      "name@da": "Coat stand (RT)"
    }
  }

```



*   Id and ParentId

    All elements has a unique 12 byte id. For elements (other than the root) there is also a parentId which links to the element it’s connected to - in this case the ground floor. 

*   baseType

    Tells what kind of data it is - it can be poi, room, floor, building, or venue

*   displayTypeId

    Is a reference to the display type as described below. All rooms and poi geodata requires this to be set. As this is an ID, the reference is a 12 byte format as described above.  

*   Geometry

    Contains the actual geodata - where it is on the map. It’s borrowed from [GeoJSON](http://geojson.org) - and in this case it’s a point to describe the poi.

*   Aliases

    Is an optional list of aliases for this data written as a list of non-translated text. This can be used eg. if a building or room has a common nickname users could use when searching for it

*   Categories

    Is a reference to the category data as described below. Geo data is not required to be part of a group - like in this example. As this is an ID, the reference is a 12 byte format as described above.

*   Status

    Is a [bitfield](https://en.wikipedia.org/wiki/Bit_field).


    bit1: active. If an element is not active it will not be given to the apps.


    bit2: searchable. If an element is not searchable it might be shown on the map, but no show up in searches.


    As there are two bits, the final values can be: 


    0: Not active, Not searchable


    1: active, Not searchable


    2: Not active, searchable (not a very useful combo)


    3: active, searchable

*   Properties

    Contains other data about the geodata object such as names, description or even custom data like gate numbers, vendor id, exhibition id or other data needed.


    Name is mandatory - at least for the base language set for the dataset


    The key format is: <keyname>@<language>


    Eg. name in english will be ‘name@en’ - in the example with a value of “Coat stand (RT)”


    As this is a dictionary setup, the keyname needs to be unique and it’s recommended to only use ascii chars here. Use of spaces and unicode chars here is discouraged as it makes it harder to use from the application code side. The char @ is not supported in the keyname as it’s used as a seperator. As example if you want to store opening hours here you could use the key openinghours@en as a keyname.





### DisplayTypes

Common setup for geodata of different kinds (meeting room, hallway, ...)


```
 {
    "id": "bb5410b32a5240d182ba50bb",
    "name": "BreakOutArea",
    "displayRules": [
      {
        "name": "default",
        "zoomFrom": 19,
        "zoomTo": 21,
        "iconUrl": "https://app.mapsindoors.com/mapsindoors/gfx/bella/80/BreakOutArea.png",
        "iconVisible": true
      }
    ],
    "propertyTemplates": [
      {
        "text": "phone",
        "type": "text"
      }
    ]
  }

```



*   Id

    All elements has a unique 12 byte id. This is used when referencing - eg when referencing from individual geodata

*   Name

    The name of a display type is a secondary ID. This can be used as an alternative to the main ID. Note that this is NOT a 12 byte id.

*   DisplayRules

    Each type has roles that tells if and how geodata should be presented. Eg. which icon to use for meeting rooms, when it should be shown based on zoom level or if it should have a label. There are two parts to a rule: An **evaluation** part (zoom from/to) and a **style** part - the rest of the displayRule object. Zoom from and to is inclusive. In this example an icon will be shown from zoom level 19 to 21. A quick word on zoom levels: these are described in [web mercator](https://en.wikipedia.org/wiki/Web_Mercator_projection) which is the system we use to show maps. In short zoom level 1 shows a map of earth in its entirety and a higher zoom level lets you get closer. The highest supported zoom level is 21 at the moment.

*   PropertyTemplates

    The property templates is an option list of which extra properties new geodata of the given types should be made. In this case all pois of type “breakout areas” will have a field in the CMS to enter a phone number for the new poi. This will then be stored as a property on that geodata.


Note that the display type data is split in the CMS; currently it can be found in the fans “Location types”, “Location type templates” and “Type visibility”


### Categories

Categories are used to group Geodata together. As an example rooms or POIs in some department - eg “development” or “marketing” can be set in each their group. Using groups are not mandatory and thus each geodata can link to “none to many” categories.

This grouping is then used as a relevancy criteria when searching.

As a simple example: All rooms across any building/venue related to entrances can be grouped using this example:


```
 {
    "id": "5823246d07215b23a02e3cdd",
    "name": {
      "en": "Entrance",
      "da": "Indgang"
    }
  }

```



*   Id

    All elements has a unique 12 byte id. This is used when referencing - eg when referencing from individual geodata

*   Name

    A translatable name for the category
