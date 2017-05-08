---
title: MapsIndoors for Web - Reference Guide
layout: page
---

* TOC
{:toc}

## MapsIndoors
`mapsindoors.MapsIndoors(opts:MapsIndoorsOptions)`

### Methods
```
clear()
find(args:string|FindOptions) : Promise(Location)
fitBuilding(buildingId:string)
fitVenue(venueId?:string)
getBuilding() : Building
getDisplayRule(type:string) : DisplayRuleLiteral
getFloor() : number
getLocationsVisible() : bool
getMap() : google.maps.Map
getStyles() : VenueStyle[]
getVenue() : Venue
setDisplayRule(rule: DisplayRuleLiteral)
setLanguage(language:string)
setFloor(floor:number)
setMap(map:google.maps.Map)
setStyle(style:string) //style folder
setVenue(venue:string|Venue)
locate(options:locateOptions)
```

### Events
| ready |
| map_changed |
| floor_changed |
| building_changed |
| venue_changed |
| style_changed |
| locations_visible_changed |
| location_click |

### MapsIndoorsOptions Literal
```
MapsIndoorsOptions {
  map: google.maps.Map,
  floor: number,
  locationVisible: boolean
}
```

### DisplayRule Literal
```
DisplayRule
{
  from?: number,
  to?: number,
  icon?: { 
    url: string,
    anchor?: google.maps.Point,
    scaledSize?: google.maps.Size
  },
  title?: string,
  label?: string,
  visible?: boolean
}
```

### Venue Literal
```
Venue 
{
  anchor: GeoJson.Point,
  defaultFloor: number,
  entryPoints: GeoJson.Point[],
  geometry: GeoJson.Polygon
  graphId: string,
  id: string,
  name: string,
  styles: VenueStyle[],
  solutionId: string,
  tilesUrl: string,
  venueInfo: VenueInfo
}
```

### VenueStyle Literal
```
VenueStyle
{
  displayName: string,
  folder: string
}
```

### VenueInfo Literal
```
VenueInfo 
{
  aliases: string[],
  language: string,
  name: string
}
```

### Building Literal
```
Building 
{
  anchor: GeoJson.Point
  buildingInfo: BuildingInfo,
  floors: BuildingFloor,
  geometry: GeoJson.Polygon,
  id: string
}
```

### BuildingInfo Literal
```
BuildingInfo 
{
  aliases: string[],
  language: string,
  name: string
}
```

### BuildingFloor Literal
```
BuildingFloor 
{
  geometry: GeoJson.Polygon,
  name: string
}
```

### FindOptions Literal
```
FindOptions
{
  q:string,
  venue?: string,
  floor?: number,
  roomId?, string,
  building?: string //building name
}
```

### Location Literal
```
Location
{
  geometry: GeoJson.Point,
  id: string,
  properties: {
    aliases: string[],
    building: string,
    categories: ???,
    contact: {
      email: string,
      phone: string,
      website: string
    },
    description: string,
    displayRule: DisplayRuleLiteral,
    fields: Object,
    floor: number,
    floorName: string,
    type: string,
    venue: string,
    venueId: string,
    type: string
  },
  type: string
}
```

## DirectionsRenderer
`mapsindoors.DirectionsRenderer(opts:DirectionsRendererOptions)`

### Methods
```
setDirections(DirectionsResult)
setStyle(type:string, style:DirectionsStyle)
setLegIndex(index:number)
nextLeg()
previousLeg(),
getDirections(),
getLegIndex(),
getMap()
```

### Events
| directions_changed | 
| map_changed | 
| floor_changed | 
| legIndex_changed | 
| mapsindoors_changed | 

### DirectionsRendererOptions Literal
```
DirectionsRendererOptions
{
  map: google.maps.Map,
  mapsindoors: mapsindoors.MapsIndoors,
  suppressMarkers: boolean,
  directions: DirectionsResult,
  legIndex: number
}
```

### DirectionsStyle Literal
```
DirectionsStyle 
{
  icons: google.maps.IconSequence[],
  strokeColor: string
  strokeOpacity: number
  strokeWeight: number
  visible: booleean
}
```

## DirectionsService
`mapsindoors.DirectionsService()`

### Methods
```
route(args: RouteRequest): Promise(result:DirectionsResult)
getDetails(graphId:string): GraphDetails
```

### RouteRequest Literal
```
RouteRequest 
{
  origin: {
    lat: float,
    lng: float,
    floor: number
  },
  destination: {
    lat: float,
    lng: float,
    floor: number
  },
  travelMode: string,
  transitOptions?: {
    arrival: DateTime,
    departure: DateTime
  },
  avoidStairs?: boolean
}
```

### DirectionsResult
See [Google Maps Javascript API DirectionsResult](https://developers.google.com/maps/documentation/directions/intro#DirectionsResponses)

## Label
`mapsindoors.Label(opts:LabelOptions)`

### Methods
```
setText(text:string),
setVisible(visible:boolean),
setClickable(clickable:boolean),
setPosition(position:google.maps.LatLng),
setMap(map:google.maps.Map),
getAlign() : string,
getVisible() : boolean,
getPosition() : google.maps.LatLng,
getText() : string
getMap() : google.maps.Map
```

### LabelOptions
```
LabelOptions Literal
{
  align:string ['left', 'center', 'right],
  color:string,
  fontFamily: string,
  fontSize: string,
  fontWeight: string,
  strokeStyle: string,
  strokeWeight: number,
  pixelOffset: google.maps.Size,
  visible: boolean,
  clickable: boolean,
  shadowBlur: number,
  shadowColor: string,
  text: string
}
```

## DistanceMatrixService
`mapsindoors.DistanceMatrixService()`

### Methods
```
getDistanceMatrix(request:DistanceMatrixRequest)
```

### DistanceMatrixRequest Literal
```
DistanceMatrixRequest {
  graphId: string,
  origins: GeoJson.Point[],
  destinations: GeoJson.Point[],
  mode: string (travelMode),
}
```

### DirectionsResult
See [Google Maps Javascript API DistanceMatrixResponse](https://developers.google.com/maps/documentation/distance-matrix/intro#DistanceMatrixResponses)

## GeoCodeService
`mapsindoors.GeoCodeService()`

### Methods
```
reverseGeoCode(points: GeoJson.Point[]) : ReverseGeoCodeResponse[]
```

### ReverseGeoCodeResponse Literal
```
ReverseGeoCodeResponse
{
  building: {
    id:string,
    name: string,
  },
  venue:
  {
    id:string,
    name: string
  }
}
```

### LocationsService
`mapsindoors.LocationsService()`

### Methods
```
getLocations(args?: LocationsRequest) : Location[],
getLocation(string: id) : Location,
getTypes() : Type[],
getCategories(): Category[]
```

### LocationsRequest Literal
```
LocationsRequest
{
  q: string,      
  building?: string,     
  venue?: string,    
  floor?: 1,              
  take?: 10,                    
  skip?: number,      
  near?: {
    lat:double, 
    lng: double
  }, 
  radius?:number,           
  orderBy?: string                     
}
```

## VenuesService
`mapsindoors.VenuesService()`

### Methods
```
getVenues() : Venue[]
getVenue() : Venue
getBuildings() : Building[]
getBuilding() Bulding
getBuildingInView() : BuildingInViewResponse
```

## FloorSelector
`mapsindoors.FloorSelector(element:HtmlElement,mapsindoors: mapsindoors.MapsIndoors)`