---
title: Display Rules in Practice
eleventyNavigation:
  key: map-map-styling-display-rules-practice
  parent: map-map-styling
  title: Display Rules in Practice
  order: 20
---

There are two ways to change the appearance of the map content in MapsIndoors and Google Maps.

* Using Display Rules
* Using Google Maps styling (or Mapbox for Android and Web)

Each has its own purpose which will be explained below.

<mi-tabs>
<mi-tab label="Android - Java" tab-for="android-java"></mi-tab>
<mi-tab label="Android - Kotlin" tab-for="android-kotlin"></mi-tab>
<mi-tab label="iOS" tab-for="ios"></mi-tab>
<mi-tab label="Web" tab-for="web"></mi-tab>
<mi-tab-panel id="android-java">

## Style the Map using Display Rules

In the [MapsIndoors CMS](https://cms.mapsindoors.com/types) you can set display rules for the different types of locations in your MapsIndoors content. The changes you make in the CMS will take effect whenever your app reboots or when you call `MapsIndoors.synchroniseContent()` within the app session.

A Display Rule encapsulates both what, how and when a Location should be displayed on the map. A Location is presented on the map using a combination of icon, text and polygon. Each of these can appear at different, independent ranges of zoom-levels. For example a venue can appear as a marker-icon on low zoom-levels, when zooming in the venue name can appear, and zooming even more in the venue polygon can appear.

In some cases, you may also want to programmatically set display rules that define when and how to show a location. Display rules are defined in a Display Rule object. These Display Rule objects are tied to a solution, and can be modified at runtime.

You can modify display rules programatically in multiple ways depending on your use case:

You can set display rules programatically in multiple ways depending on your use case:

* Modify the Display Rule for the Selected Location
* Modify the Display Rule for the Building outline
* Modify a Display Rule for a type of Location
* Modify a Display Rule for a specific Location

### Modify the Display Rule for the Selected Location

When a Location is selected, this Location is highlighted using the Display Rule name found through `MPSolutionDisplayRule.SELECTION`. You can change the values of the Display Rule like any other DisplayRule.

```java
MapsIndoors.getDisplayRule(MPSolutionDisplayRule.SELECTION).setPolygonStrokeColor(blue);
MapsIndoors.getDisplayRule(MPSolutionDisplayRule.SELECTION).setPolygonFillColor(green);
MapsIndoors.getDisplayRule(MPSolutionDisplayRule.SELECTION).setPolygonStrokeWidth(8f);
```

### Setting Display Rule for a Type

To set new display rules for a type of Location, you need to know the types of Locations in your Location dataset, so you may look these up in the CMS. The types can also be retrieved in code with `getSolution()`. The type objects can be read from `getTypes()`. You can then retrieve the Display Rule and modify it through `MapsIndoors.getDisplayRule(String name)`.

```java
MPDisplayRule displayRule = MapsIndoors.getDisplayRule("Office");
if (displayRule != null) {
    displayRule.setIcon(R.drawable.ic_baseline_close_24, Color.BLUE);
}
```

Setting a display rule for a type will only apply to the single instance of `MapControl`.

### Setting Display Rule for a Single and Multiple Locations

To set new display rules for a single Location, you need to have the Location at hand. Locations can be fetched using `getLocationById` or searched for through `getLocationsAsync`. Once you have a location, you can modify the display rule for it.

```java
MPLocation mpLocation = MapsIndoors.getLocationById("MyLocationId");
MPDisplayRule mpDisplayRule = MapsIndoors.getDisplayRule(mpLocation);
if (mpDisplayRule != null) {
    mpDisplayRule.setIcon(R.drawable.ic_baseline_air_24, Color.GRAY);
}
```

For multiple Locations, you fetch a list of Locations using `getLocationsAsync` instead:

```java
MapsIndoors.getLocationsAsync(null, new MPFilter.Builder().setTypes(Collections.singletonList("Meetingroom")).build(), (locations, miError) -> {
    if (locations != null) {
        for (MPLocation mpLocation : locations) {
            MPDisplayRule mpDisplayRule = MapsIndoors.getDisplayRule(mpLocation);
            if (mpDisplayRule != null) {
                mpDisplayRule.setIcon(R.drawable.ic_baseline_air_24, Color.GRAY);
            }
        }
    }
});
```

### Presenting Locations Using Polygons

To present a polygon, either configure the Display Rule using the CMS, or configure a Display Rule programatically:

```java
MPDisplayRule mpDisplayRule = MapsIndoors.getDisplayRule("Office");
if (mpDisplayRule != null) {
    mpDisplayRule.setIcon(R.drawable.ic_baseline_close_24, Color.GRAY);
    mpDisplayRule.setPolygonVisible(true);
    mpDisplayRule.setPolygonZoomFrom(12f);
    mpDisplayRule.setPolygonZoomTo(21f);
    mpDisplayRule.setPolygonFillColor("#0000FF");
    mpDisplayRule.setPolygonStrokeColor("#0000FF");
}
```

## Style the Map using Google Maps Styling

> Further documentation on the Google Maps styling can be found here: [https://developers.google.com/maps/documentation/android-sdk/styling](https://developers.google.com/maps/documentation/android-sdk/styling)

MapsIndoors is built on top of Google Maps or Mapbox which has its own way of styling the map. Google Maps styling will only affect the MapsIndoors map if Google Maps has Points of Interest placed inside or near the buildings that you build a MapsIndoors solution for. The MapsIndoors styling applies a Google Maps styling that hides most POI icons that may collide with MapsIndoors content. This can be turned on and off through the `MPMapConfig`.

You can apply your own styling to Google Maps using `googleMap.setMapStyle`.

```java
googleMap.setMapStyle(MapStyleOptions.loadRawResourceStyle(this, R.raw.style_json));
```

The JSON string that you apply in this case can be built using the [Google Maps Styling Wizard](https://mapstyle.withgoogle.com/). Read more about styling the Google Map in the [Google Maps Android SDK Docs](https://developers.google.com/maps/documentation/android-sdk/styling).

## Style the Map using Mapbox Styling

> Further documentation on the Mapbox styling can be found here: [https://docs.mapbox.com/android/maps/guides/styles/set-a-style/](https://docs.mapbox.com/android/maps/guides/styles/set-a-style/)

When styling the map in Mapbox make sure to add the style on the map before creating MapControl. The style needs to be applied first, to ensure you can add layers onto it to show MapsIndoors data on the map.

```java
mapboxMap.loadStyleUri(Style.MAPBOX_STREETS);
```

</mi-tab-panel>
<mi-tab-panel id="android-kotlin">

## Style the Map using Display Rules with Kotlin

In the [MapsIndoors CMS](https://cms.mapsindoors.com/types) you can set display rules for the different types of locations in your MapsIndoors content. The changes you make in the CMS will take effect whenever your app reboots or when you call `MapsIndoors.synchroniseContent()` within the app session.

A Display Rule encapsulates both what, how and when a Location should be displayed on the map. A Location is presented on the map using a combination of icon, text and polygon. Each of these can appear at different, independent ranges of zoom-levels. For example a venue can appear as a marker-icon on low zoom-levels, when zooming in the venue name can appear, and zooming even more in the venue polygon can appear.

In some cases, you may also want to programmatically set display rules that define when and how to show a location. Display rules are defined in a Display Rule object. These Display Rule objects are tied to a solution, and can be modified at runtime.

You can modify display rules programatically in multiple ways depending on your use case:

You can set display rules programatically in multiple ways depending on your use case:

* Modify the Display Rule for the Selected Location
* Modify the Display Rule for the Building outline
* Modify a Display Rule for a type of Location
* Modify a Display Rule for a specific Location

### Modify the Display Rule for the Selected Location

When a Location is selected, this Location is highlighted using the Display Rule name found through `MPSolutionDisplayRule.SELECTION`. You can change the values of the Display Rule like any other DisplayRule.

```kotlin
MapsIndoors.getDisplayRule(MPSolutionDisplayRule.SELECTION)?.polygonStrokeColor = blue
MapsIndoors.getDisplayRule(MPSolutionDisplayRule.SELECTION)?.polygonFillColor = green
MapsIndoors.getDisplayRule(MPSolutionDisplayRule.SELECTION)?.polygonStrokeWidth = 8f
```

### Setting Display Rule for a Type

To set new display rules for a single Location, you need to have the Location at hand. Locations can be fetched using `getLocationById` or searched for through `getLocationsAsync`. Once you have a location, you can modify the display rule for it.

```kotlin
MapsIndoors.getDisplayRule("Office")?.let {
    it.setIcon(R.drawable.ic_baseline_close_24, Color.BLUE)
}
```

Setting a display rule for a type will only apply to the single instance of `MapControl`.

### Setting Display Rule for a Single and Multiple Locations

To set new display rules for a single Location, you need to have the Location at hand. Locations can be fetched using `getLocationById`. Once you have a location, you can set a custom display rule for it.

```kotlin
val mpLocation = MapsIndoors.getLocationById("MyLocationId")
MapsIndoors.getDisplayRule(mpLocation)?.setIcon(R.drawable.ic_baseline_air_24, Color.GRAY);
```

For multiple Locations, you fetch a list of Locations using `getLocationsAsync` instead:

```kotlin
MapsIndoors.getLocationsAsync(null, MPFilter.Builder().setTypes(listOf("Meetingroom")).build()) { locations, _ ->
    for (location in locations) {
        location?.let {
            MapsIndoors.getDisplayRule(it)?.setIcon(R.drawable.ic_baseline_air_24, Color.GRAY)
        }
    }
}
```

### Presenting Locations Using Polygons

To present a polygon, either configure the Display Rule using the CMS, or configure a Display Rule programatically:

```kotlin
val mpDisplayRule = MapsIndoors.getDisplayRule("Office")
mpDisplayRule?.let {
    it.setIcon(R.drawable.ic_baseline_bolt_24, Color.GRAY)
    it.isPolygonVisible = true
    it.polygonZoomFrom = 12f
    it.polygonZoomTo = 21f
    it.polygonFillColor = "0000FF"
    it.polygonStrokeColor = "0000FF"
}
```

## Style the Map using Google Maps Styling with Kotlin

> Further documentation on the Google Maps styling can be found here: [https://developers.google.com/maps/documentation/android-sdk/styling](https://developers.google.com/maps/documentation/android-sdk/styling)

MapsIndoors is built on top of Google Maps or Mapbox which has its own way of styling the map. Google Maps styling will only affect the MapsIndoors map if Google Maps has Points of Interest placed inside or near the buildings that you build a MapsIndoors solution for. The MapsIndoors styling applies a Google Maps styling that hides most POI icons that may collide with MapsIndoors content. This can be turned on and off through the `MPMapConfig`.

You can apply your own styling to Google Maps using `googleMap.setMapStyle`.

```kotlin
googleMap.setMapStyle(MapStyleOptions.loadRawResourceStyle(this, R.raw.style_json))
```

The JSON string that you apply in this case can be built using the [Google Maps Styling Wizard](https://mapstyle.withgoogle.com/). Read more about styling the Google Map in the [Google Maps Android SDK Docs](https://developers.google.com/maps/documentation/android-sdk/styling).

## Style the Map using Mapbox Styling with Kotlin

> Further documentation on the Mapbox styling can be found here: [https://docs.mapbox.com/android/maps/guides/styles/set-a-style/](https://docs.mapbox.com/android/maps/guides/styles/set-a-style/)

When styling the map in Mapbox make sure to add the style on the map before creating MapControl. The style needs to be applied first, so that we can add layers onto it to show MapsIndoors data on the map.

```kotlin
mapboxMap.loadStyleUri(Style.MAPBOX_STREETS)
```

</mi-tab-panel>
<mi-tab-panel id="ios">

<!-- Known Issues -->
{% include "src/content/shared/known-issues-ios.md" %}

## Style the Map using Display Rules on iOS

In the [MapsIndoors CMS](https://cms.mapsindoors.com/types) you can set display rules for the different types of locations in your MapsIndoors content. The changes you make in the CMS will take effect whenever your app reboots or when you call `MapsIndoors.synchroniseContent()` within the app session.

A Display Rule encapsulates both what, how and when a Location should be displayed on the map. A Location is presented on the map using a combination of icon, text and polygon. Each of these can appear at different, independent ranges of zoom-levels. For example a venue can appear as a marker-icon on low zoom-levels, when zooming in the venue name can appear, and zooming even more in the venue polygon can appear.

In some cases, you may also want to programmatically set display rules that define when and how to show a location. Display rules are defined in a Display Rule object.

```swift
let myDisplayRule = MPLocationDisplayRule(name: "info", andIcon: UIImage(named : "info"), andZoomLevelOn: 17)
```

You can set display rules programatically in multiple ways depending on your use case:

* Modify the Display Rule for the Selected Location
* Set a Display Rule for a type of Location
* Set a Display Rule for a single specific Location
* Set a Display Rule for multiple Locations

### Modify the Display Rule for the Selected Location on iOS

When a Location is selected through assignment of the `selectedLocation` property of `MPMapControl`, this Location is highlighted using the settings specified in the `locationHighlightDisplayRule` property. This property has some defaults which can be overridden. Here is an example of overriding the fill and outline color:  

```swift
myMapControl.locationHighlightDisplayRule?.highlightFillColor = UIColor.blue
myMapControl.locationHighlightDisplayRule?.highlightOutlineColor = UIColor.red
```

### Setting Display Rule for a Type on iOS

To set new display rules for a type of Location, you need to know the types of Locations in your Location dataset, so you may look these up in the CMS. The types can also be retrieved in code with `MPSolutionsProvider().getSolution()`. The type objects can be read from `mySolution.types`. The display rule name corresponds to the Location Type we want the rule to apply for. So in order to style a specific type of Location differently, just put in the type name as the Display Rule name.

```swift
myMapControl.setDisplayRule(MPLocationDisplayRule(name: "info", andIcon: UIImage(named : "info"), andZoomLevelOn: 17))
myMapControl.setDisplayRule(MPLocationDisplayRule(name: "parking", andIcon: UIImage(named : "parking"), andZoomLevelOn: 17))
myMapControl.setDisplayRule(MPLocationDisplayRule(name: "staircase", andIcon: UIImage(named : "staircase"), andZoomLevelOn: 18))
```

Setting a display rule for a type will persist the new display rule for that type throughout the whole app session and across instances of `MPMapControl`.

### Setting Display Rule for a Single and Multiple Locations on iOS

To set new display rules for a Location, you need to have the Location at hand. Locations can be queried for using the  `MPLocationService`.

```swift
MPLocationService.sharedInstance().getLocationsUsing(myQuery, filter: myFilter) { (locations, error) in
    let myLocation = locations?.first()
}
```

Once you have a location, you can set a custom display rule for it.

```swift
let myDisplayRule = MPLocationDisplayRule.init(name: nil, andIcon: myImage, andZoomLevelOn: 15)!
myMapControl.setDisplayRule(myDisplayRule, for: myLocation)
```

And for multiple locations, this is as simple as providing an array instead:

```swift
let myDisplayRule = MPLocationDisplayRule.init(name: nil, andIcon: myImage, andZoomLevelOn: 15)!
myMapControl.setDisplayRule(myDisplayRule, for: myLocations)
```

Setting a display rule for specific locations will *not* persist the new display rule for that type throughout the whole app session and across instances of `MPMapControl`. In other words, as soon as your instance of `MPMapControl` is deallocated, the overridden display rules for specific locations will reset to their original display rule.

### Presenting Locations Using Polygons on iOS

To present a polygon, either configure the Display Rule using the CMS, or configure a Display Rule programatically:

```swift
let polygonDisplayRule = MPLocationDisplayRule.init(name: nil, andIcon: myImage, andZoomLevelOn: 15)!
polygonDisplayRule.showPolygon = true
polygonDisplayRule.zOnPolygon = 17
polygonDisplayRule.zOffPolygon = 21
polygonDisplayRule.polygonStrokeWidth = 2
polygonDisplayRule.polygonStrokeColor = UIColor.yellow
polygonDisplayRule.polygonFillColor = UIColor.yellow.withAlphaComponent(0.45)
myMapControl.setDisplayRule(polygonDisplayRule, for: myLocations)
```

## Style the Map using Google Maps Styling on iOS

MapsIndoors is built on top of Google Maps which has its own way of styling the map. Google Maps styling will only affect the MapsIndoors map if Google Maps has Points of Interest placed inside or near the buildings that you build a MapsIndoors solution for. By default, MapsIndoors applies a Google Maps styling that hides most POI icons that may collide with MapsIndoors content.

You can apply your own styling to Google Maps using `mapStyle` on `GMSMapView`.

```swift
myMapView.mapStyle = GMSMapStyle.init(jsonString: myStyleJSON)
```

The JSON string that you apply in this case can be built using the [Google Maps Styling Wizard](https://mapstyle.withgoogle.com/). Read more about styling the Google Map in the [Google Maps iOS SDK Docs](https://developers.google.com/maps/documentation/ios-sdk/styling).

## Additional Map Styling for iOS

In this tutorial we will create a view controller that can enable and disable different custom location display rules on a MapsIndoors map. At the end you should be able to see a map of a building with some colored buttons below the map enabling custom display rules for specified locations.

Start by creating a `UIImage` extension that can generate a mock icon for a color. Alternatively you can refer to your own images instead.

```swift
public extension UIImage {
    convenience init?(color: UIColor, size: CGSize = CGSize(width: 18, height: 18)) {
    let rect = CGRect(origin: .zero, size: size)
    UIGraphicsBeginImageContextWithOptions(rect.size, false, 0.0)
    color.setFill()
    UIRectFill(rect)
    let image = UIGraphicsGetImageFromCurrentImageContext()
    UIGraphicsEndImageContext()

    guard let cgImage = image?.cgImage else { return nil }
    self.init(cgImage: cgImage)
  }
}
```

Create a `UIViewController` class that will contain all our code.

```swift
class ChangeDisplaySettingController: UIViewController {
```

Add a `GMSMapView` and a `MPMapControl` as properties to the class.

```swift
var map: GMSMapView? = nil
var mapControl: MPMapControl? = nil
```

Add buttons for toggling display rules for a type, a single location and multiple locations.

```swift
let typeDisplayButton = UIButton.init()
let singleLocationDisplayButton = UIButton.init()
let multipleLocationDisplayButton = UIButton.init()
```

Add properties to hold the locations we are going to alter the appearance for.

```swift
var multipleLocations = [MPLocation]()
var singleLocation:MPLocation? = nil
```

Add display setting properties of type `MPLocationDisplayRule` used for overriding display rules for a type, a single location and multiple locations. Also add a property `originalTypeDisplaySetting` to hold on to the original type display setting.

```swift
let typeDisplaySetting = MPLocationDisplayRule.init(name: "MeetingRoom", andIcon: UIImage.init(color: UIColor.red), andZoomLevelOn: 15)!
let singleLocationDisplaySetting = MPLocationDisplayRule.init(name: nil, andIcon: UIImage.init(color: UIColor.blue), andZoomLevelOn: 15)!
let multipleLocationDisplaySetting = MPLocationDisplayRule.init(name: nil, andIcon: UIImage.init(color: UIColor.green), andZoomLevelOn: 15)!
var originalTypeDisplaySetting:MPLocationDisplayRule?
```

Add a method `setupDisplaySettingButtons()` setting up buttons that enables/disables the location display rules.

```swift
fileprivate func setupDisplaySettingButtons() {
    typeDisplayButton.setTitle("Type Normal", for: .normal)
    typeDisplayButton.setTitle("Type Custom", for: .selected)
    typeDisplayButton.addTarget(self, action: #selector(toggleDisplaySettingsForType), for: .touchUpInside)
    typeDisplayButton.backgroundColor = UIColor.red

    singleLocationDisplayButton.setTitle("Single Normal", for: .normal)
    singleLocationDisplayButton.setTitle("Single Custom", for: .selected)
    singleLocationDisplayButton.addTarget(self, action: #selector(toggleDisplaySettingsForSingle), for: .touchUpInside)
    singleLocationDisplayButton.backgroundColor = UIColor.blue

    multipleLocationDisplayButton.setTitle("Multiple Normal", for: .normal)
    multipleLocationDisplayButton.setTitle("Multiple Custom", for: .selected)
    multipleLocationDisplayButton.addTarget(self, action: #selector(toggleDisplaySettingsForMultiple), for: .touchUpInside)
    multipleLocationDisplayButton.backgroundColor = UIColor.green
}
```

Add a method `prepareData()` that fetches some random meeting rooms and stores one of them in `singleLocation`and the full result in `multipleLocations`. Get the default display rule for the location type `MeetingRoom` and store a copy in `originalTypeDisplaySetting`.

```swift
func prepareData() {
    let q = MPQuery()
    q.query = "meeting room"
    let f = MPFilter()
    f.take = UInt.max
    MPLocationService.sharedInstance().getLocationsUsing(q, filter: f) { (locations, error) in
        self.multipleLocations = locations!
        self.singleLocation = locations!.last
        self.originalTypeDisplaySetting = self.mapControl?.getDisplayRule(forTypeNamed: "MeetingRoom")?.copy() as? MPLocationDisplayRule
    }
}
```

Define an objective-c method `toggleDisplaySettingsForMultiple()` that will receive events from your `multipleLocationDisplayButton`, swap current selected state for button and toggle the display rules for `multipleLocations`.

```swift
@objc func toggleDisplaySettingsForMultiple(sender:UIButton) {
    sender.isSelected = !sender.isSelected

    if sender.isSelected {
        self.mapControl?.setDisplayRule(multipleLocationDisplaySetting, for: multipleLocations)
    } else {
        self.mapControl?.removeDisplayRules(for: multipleLocations)
    }
}
```

Define an objective-c method `toggleDisplaySettingsForSingle()` that will receive events from your `singleLocationDisplayButton`, swap current selected state for button and toggle the display rules for the `singleLocation`.

```swift
@objc func toggleDisplaySettingsForSingle(sender:UIButton) {
    sender.isSelected = !sender.isSelected

    if sender.isSelected {
        self.mapControl?.setDisplayRule(singleLocationDisplaySetting, for: singleLocation!)
        self.mapControl?.go(to: singleLocation!)
    } else {
        self.mapControl?.removeDisplayRule(for: singleLocation!)
    }
}
```

Define an objective-c method `toggleDisplaySettingsForType()` that will receive events from your `typeDisplayButton`, swap current selected state for button and toggle the display rules for the type.

```swift
@objc func toggleDisplaySettingsForType(sender:UIButton) {
    sender.isSelected = !sender.isSelected

    if sender.isSelected {
        self.mapControl?.setDisplayRule(typeDisplaySetting)
    } else {
        self.mapControl?.setDisplayRule(originalTypeDisplaySetting!)
    }
}


override func viewDidLoad() {

    super.viewDidLoad()
```

In your `viewDidLoad()` method, setup map so that it shows a random building and initialise mapControl

```swift
self.map = GMSMapView.init(frame: CGRect.zero)
self.mapControl = MPMapControl.init(map: self.map!)

let q = MPQuery()
q.query = "building"
let f = MPFilter()
f.take = 1
MPLocationService.sharedInstance().getLocationsUsing(q, filter: f) { (locations, error) in
    self.mapControl?.go(to: locations!.first!)
}
```

In your `viewDidLoad()` method, call `setupDisplaySettingButtons()` and `prepareData()` in order to setup the buttons and prepare the room data.

```swift
setupDisplaySettingButtons()
prepareData()
```

In your `viewDidLoad()` method, arrange the map view and the buttons in stackviews

```swift
let buttonStackView = UIStackView.init(arrangedSubviews: [typeDisplayButton, singleLocationDisplayButton, multipleLocationDisplayButton])
buttonStackView.axis = .horizontal
buttonStackView.distribution = .fillEqually
let stackView = UIStackView.init(arrangedSubviews: [map!, buttonStackView])
stackView.axis = .vertical
view = stackView
```

At this point you should be able to run this view controller in your own application. You should see a map with some colored buttons below the map. Tapping each button should enable/disable the custom display rules for either a single locations, multiple locations or all locations belonging to a specific type.

[See the sample in ChangeDisplaySettingController.swift](https://github.com/MapsIndoors/MapsIndoorsIOS/blob/master/Example/DemoSamples/Change%20Display%20Setting/ChangeDisplaySettingController.swift)

</mi-tab-panel>
<mi-tab-panel id="web">

To get an overview of what Display Rules are and can be used for, read the [Display Rules Introduction]({{ "/various/display-rules" | url }}) first.

## Changing the Appearance When the User Clicks a Location

```javascript
let selectedPOI;
mapsIndoors.addListener("click", function (poi) {
    if (selectedPOI) {
        mapsIndoors.setDisplayRule(selectedPOI.id, null);
    }

    mapsIndoors.setDisplayRule(poi.id, {
        iconSize: { width: 30, height: 30 },
    });

    selectedPOI = poi;
});
```

## Change the Label for All Locations for the Type `PRINTER`

```javascript
mapsIndoors.setDisplayRule('PRINTER',  {
    label: "{{ "Printer: {{ name " }}}}"
});
```

## Change the Label for a Single Location

```javascript
mapsIndoors.setDisplayRule('c66dccd480624c428ea5b78d',  {
    label: "{{ "Printer: {{ name " }}}}"
});
```

## Apply the Same Display Rule to Multiple Locations

```javascript
mapsIndoors.setDisplayRule(['c66dccd480624c428ea5b780', 'c66dccd480624c428ea5b79c','c66dccd480624c428ea5b76a', ...], {
    icon: "https://app.mapsindoors.com/mapsindoors/cms/assets/icons/building-icons/printer.png"
});
```

## Reset the Display Rule Back to Default

```javascript
mapsIndoors.setDisplayRule('PRINTER', null);
```

```javascript
mapsIndoors.setDisplayRule('c66dccd480624c428ea5b78d', null);
```

```javascript
mapsIndoors.setDisplayRule(['c66dccd480624c428ea5b780', 'c66dccd480624c428ea5b79c','c66dccd480624c428ea5b76a', ...], null);
```

</mi-tab-panel>
</mi-tabs>
