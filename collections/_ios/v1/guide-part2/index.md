---
title: MapsIndoors for iOS - Part 2

---

## Trying the demo App

Open your Terminal and run

```swift
pod try MapsIndoors
```

This will install and fire up the full-featured SDK Demo Project. Remember to add your own key Google Maps iOS API key in AppDelegate:

```swift
GMSServices.provideAPIKey("YOUR_GOOGLE_KEY")
```

## Using Routing

Routing is requested with at least an origin, a destination and a transit mode – transit mode corresponds directly to Google Maps transit modes: Walking, bicycling, driving and transit (public transportation).
The `MPDirectionsService` class will handle routing and its delegate will receive the resulting `MPRoute` object. First set up the service:

```swift
// the origin of the route that we wont to draw
let origin = MPLocation.init(point: MPPoint.init(lat: 57.08585, lon: 9.95751), andName: "My location")
// the destination of the route that we wont to draw
let destination = MPLocation.init(point: MPPoint.init(lat: 57.0853743, lon: 9.957698), andName: "Destination")
// Instantiate the direction service
let directionsService = MPDirectionsService.init(mapsIndoorsSolutionId: clientId, googleApiKey: "YOUR_SOLUTION_ID")!
directionsService.delegate = self as MPRoutingProviderDelegate ;
directionsService.routing(from: origin, to: destination, by: "WALKING")

```
Then make sure the delegate object, typically one of `UIViewController`, conforms to `MPRoutingProviderDelegate`:

```swift
ViewController: UIViewController, MPRoutingProviderDelegate
```

Hence, by implementing the following method:

```swift

func onRouteResultReady(_ route: MPRoute!) {
      // show the route on the mapView already instantiated with the floor
     route.add(toMap: mapView, highlightFloor: 0)


 }

 ```

## Querying POI's / Locations

  This example will show you the possible ways of querying the POI’s on your venue(s). You need to provide your solution id as a mandatory property to the query.

  ```swift
  var locationsProvider = MPLocationsProvider()
  locationsProvider?.delegate = self
  var q = MPLocationQuery()
  q.solutionId = "YOUR_SOLUTION_ID" // MapsIndoors solution ID / client ID
  q.query = "lo" //Searches in room ID, name and aliases
  q.max = 10
  q.orderBy = "name" // Possible values are
                       // name, relevance, roomId, floor, building, venue
  q.sortOrder = "desc" // Sorting will override "near/radius"
  q.near = MPPoint(lat: 55.6377969, lon: 12.5787581)
  q.radius = 60 //get nearest locations within 60 metres
  q.max = 1 //get the nearest (a list of one location). Note: To be sure to get at least 1 result, don't set radius
  locationsProvider?.getLocationsUsingQueryAsync(q, language: "en")
  // or single query
  locationsProvider?.getLocationDetailsAsync("YOUR_SOLUTION_ID", withId: "locationID", language: "en")
  ```

  To show a single POI on a map you can use this method:

  ```swift
  mapControl.selectedLocation = (MPLocation) location
  ```

  Implement `MPLocationsProviderDelegate` and its `onLocationsReady` method in order to receive the locations result:

  ```swift
  func onLocationsReady( locationData: MPLocationDataset!){

    }
  ```

## Using Custom Providers

It is possible to setup MapsIndoors with locations, venues or routing from your own backend. E.g. to use your own locations backend, let your custom provider conform to the MPLocationsProvider protocol (or make a subclass of the interface of same name):

```swift

 class MyCustomLocationsProvider : MPLocationsProvider {

     public override func getLocationsAsync(_ solutionId: String!, language: String!){

     }

     public override func getLocationDetailsAsync(_ solutionId: String!, withId locationId: String!, language: String!){


     }

     public override func getLocationsUsingQueryAsync(_ locationQuery: MPLocationQuery!, language: String!) {


     }

 }

```

In cunjunction with your setup code, make `MPMapControl` use your provider.

 ```swift
 let myProvider = MyCustomLocationsProvider()
 // Place the map above the demo-building
 let camera = GMSCameraPosition.camera(withLatitude: 57.08585, longitude: 9.95751, zoom: 17)
 // Initialise the Google map
 mapView = GMSMapView.map(withFrame: CGRect.zero, camera: camera)
 view = mapView
 let myMapControl = MPMapControl.init(map: mapView)!
 // Use your solution id, site id and the location provider that you instantiated
  myMapControl.setupMap(with: "YOUR_SOLUTION_ID", site: "YOUR_SITE_ID", locations: myProvider, venues: nil, routing: nil)
  ```
## Route restrictions
 Add a restriction to the route by setting the avoid argument. Avoid stairs on the route using the following restriction parameter:

 ```swift
 // restrictions table
 let restrictions = ["stairs"]
 directionsService.routing(from: origin, to: destination, by: "WALKING", avoid: restrictions, depart: nil, arrive: nil)

 ```


## Using Custom Providers

 It is possible to setup MapsIndoors with locations, venues or routing from your own backend. E.g. to use your own locations backend, let your custom provider conform to the MPLocationsProvider protocol (or make a subclass of the interface of same name):

 ```swift

 class MyCustomLocationsProvider : MPLocationsProvider {

     public override func getLocationsAsync(_ solutionId: String!, language: String!){

     }

     public override func getLocationDetailsAsync(_ solutionId: String!, withId locationId: String!, language: String!){


     }

     public override func getLocationsUsingQueryAsync(_ locationQuery: MPLocationQuery!, language: String!) {


     }

 }

 ```

In cunjunction with your setup code, make `MPMapControl` use your provider.

 ```swift
 let myProvider = MyCustomLocationsProvider()
 // Place the map above the demo-building
 let camera = GMSCameraPosition.camera(withLatitude: 57.08585, longitude: 9.95751, zoom: 17)
 // Initialise the Google map
 mapView = GMSMapView.map(withFrame: CGRect.zero, camera: camera)
 view = mapView
 let myMapControl = MPMapControl.init(map: mapView)!
 // Use your solution id, site id and the location provider that you instantiated
  myMapControl.setupMap(with: "YOUR_SOLUTION_ID", site: "YOUR_SITE_ID", locations: myProvider, venues: nil, routing: nil)
  ```
 ## Route restrictions
 Add a restriction to the route by setting the avoid argument. Avoid stairs on the route using the following restriction parameter:

 ```swift
 // restrictions table
 let restrictions = ["stairs"]
 directionsService.routing(from: origin, to: destination, by: "WALKING", avoid: restrictions, depart: nil, arrive: nil)

 ```

## Route rendering

Once a route result is received, you might want to render the route on a map. The `MPDirectionsRenderer` will handle this for you. This example will setup a renderer and do some initial but optional settings.

 ```swift

 var directionRenderer = MPDirectionsRenderer()
 let blueColor = UIColor.blue
 directionRenderer.delegate = self
 directionRenderer.map = mapView
 directionRenderer.fitBounds = false
 directionRenderer.solidColor = blueColor
 directionRenderer.backgroundColor = blueColor.withAlphaComponent(0.5)
 ```

 So in your onRouteResultReady delegate method, set the route property to trigger the renderer:


 ```swift
 func onRouteResultReady(_ route: MPRoute!) {
   directionsRenderer.route = route;
  }
  ```

 Clear the rendering by setting either map or route to nil:

 ```swift
 directionsRenderer.route = nil; // or
 directionsRenderer.map = nil;
  ```

  The renderer will split the route in logical parts, called route legs, based on information on context such as indoor/outdoor, access levels etc., but also floor level and transportation type. By default, the first route leg will be shown. Here are examples of rendering other parts of the route.

  ```swift
 directionsRenderer.routeLegIndex = 1 // Render second route leg, if exists
 directionsRenderer.routeLegIndex += 1 // Render next route leg, if exists
 directionsRenderer.routeLegIndex -= 1 // Render previous route leg, if exists
 ```

 Given an instance of `MPRoute`, you can get the number of legs by reading the length of its legs property:

 ```swift
 int numberOfLegs = route.legs.count;
 ```

 The rendering can be animated using the animate method just after invoking a rendering.

 ```swift
 directionsRenderer.routeLegIndex = 1;
 directionsRenderer.animate(4) // Animate drawing of route line with 4 seconds duration
 ```

 If the rendering of a route leg happens on a new floor level, you might want to get notified, so you can update the current visible floor plan (`mapControl.currentFloor`). For this purpose you can implement the `MPDirectionsRendererDelegate` method:

 ```swift
 func floorDidChange(floor: NSNumber!) {
   mapControl.currentFloor = floor
 }
 ```
 The route renderer will render a route line and two buttons. In fact they become markers on the `GMSMapWiew`, but for your convenience we treat them as buttons. In this way you can add target selectors for them:

 ```swift
 directionRenderer.nextRouteLegButton.addTarget(self, action: #selector(showNextRouteLeg), for: UIControlEventTouchUpInside)
 directionRenderer.previousRouteLegButton.addTarget(self, action: #selector(showPreviousRouteLeg), for: UIControlEventTouchUpInside)
 ```

## Determining and setting a user location
MapsIndoors can show the user position, but to do that it needs to know the user’s position. This can either be set manually by the app or using a position provider. To set it manually, simply call the map control directly with a location and floor, for this case we are going to set it as the venue position:

 ```swift
let position = MPPositionIndicator.init(point: MPPoint.init(lat: 57.0, lon: 10.0, zValue: 1), andName: "My location");
myMapControl.currentPosition = position
```
A position provider is normally easier to use for real time positioning. To create a position provider make a class that implements the PositionProvider interface and add it to your MapControl like this:

### Using a positioning provider
The GPS provider is part of the demo app: GPSPositionProvider.

 ```swift
//Add a position provider in able to track the user's position.
gpsProvider = GPSPositionProvider(MapsIndoors.getSolutionId())
//Telling map control about our provider
myMapControl.addPositionProvider(gpsProvider)
gpsProvider.startPositioning()
```

To know more about this subject, please read this [Introduction to the field of Indoor Positioning](/introductions/indoor-positioning).
