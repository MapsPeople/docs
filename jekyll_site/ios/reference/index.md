---
layout: page
title: MapsIndoors for iOS Reference Guide
---

* TOC
{:toc}

Categories
==========

NSDictionary(MPLocationPropertiesDictionary)
--------------------------------------------

Undocumented

-   `                                                            floor                    `

    Undocumented

-   `                                                            venue                    `

    Undocumented

-   `                                                            building                    `

    Undocumented

-   `                                                            roomId                    `

    Undocumented

-   `                                                            type                    `

    Undocumented

NSString(CustomFont)
--------------------

Undocumented

-   `                                                            +customEnumForIconIdentifier:                    `

    @abstract Returns the correct enum for a font-awesome
    icon.@discussion The list of identifiers can be found here:
    <http://fortawesome.github.com/Font-Awesome/#all-icons>

    #### Declaration

    Objective-C

    ``` {.highlight}
    + (CustomFontIcon)customEnumForIconIdentifier:(NSString *)string;
    ```

    Swift

    ``` {.highlight}
    class func customEnum(forIconIdentifier string: String!) -> CustomFontIcon
    ```

-   `                                                            +customIconStringForEnum:                    `

    @abstract Returns the font-awesome character associated to the icon
    enum passed as argument

    #### Declaration

    Objective-C

    ``` {.highlight}
    + (NSString *)customIconStringForEnum:(CustomFontIcon)value;
    ```

    Swift

    ``` {.highlight}
    class func customIconString(forEnum value: CustomFontIcon) -> String!
    ```

-   `                                                            +customIconStringForIconIdentifier:                    `

    Undocumented

NSString(FontAwesome)
---------------------

Undocumented

-   `                                                            +fontAwesomeEnumForIconIdentifier:                    `

    @abstract Returns the correct enum for a font-awesome
    icon.@discussion The list of identifiers can be found here:
    <http://fortawesome.github.com/Font-Awesome/#all-icons>

    #### Declaration

    Objective-C

    ``` {.highlight}
    + (FAIcon)fontAwesomeEnumForIconIdentifier:(NSString *)string;
    ```

    Swift

    ``` {.highlight}
    class func fontAwesomeEnum(forIconIdentifier string: String!) -> FAIcon
    ```

-   `                                                            +fontAwesomeIconStringForEnum:                    `

    @abstract Returns the font-awesome character associated to the icon
    enum passed as argument

    #### Declaration

    Objective-C

    ``` {.highlight}
    + (NSString *)fontAwesomeIconStringForEnum:(FAIcon)value;
    ```

    Swift

    ``` {.highlight}
    class func fontAwesomeIconString(forEnum value: FAIcon) -> String!
    ```

-   `                                                            +fontAwesomeIconStringForIconIdentifier:                    `

    Undocumented

NSString(UrlRequest)
--------------------

Undocumented

-   `                                                            +stringWithContentsOfURL:encoding:error:                    `

    Undocumented

-   `                                                            +stringWithContentsOfURL:ifModifiedSince:encoding:error:response:                    `

    Undocumented

NSURL(QueryParser)
------------------

Undocumented

-   `                                                            -queryDictionary                    `

    Undocumented

UIColor(HexString)
------------------

Undocumented

-   `                                                            +colorFromHexString:                    `

    Undocumented

UIFont(CustomFont)
------------------

Undocumented

-   `                                                            +customFontOfSize:                    `

    @abstract Returns the FontAwesome iconic font.

    #### Declaration

    Objective-C

    ``` {.highlight}
    + (UIFont *)customFontOfSize:(CGFloat)size;
    ```

    Swift

    ``` {.highlight}
    class func customFont(ofSize size: CGFloat) -> UIFont!
    ```

UIFont(FontAwesome)
-------------------

Undocumented

-   `                                                            +fontAwesomeFontOfSize:                    `

    @abstract Returns the FontAwesome iconic font.

    #### Declaration

    Objective-C

    ``` {.highlight}
    + (UIFont *)fontAwesomeFontOfSize:(CGFloat)size;
    ```

    Swift

    ``` {.highlight}
    /*not inherited*/ init!(awesomeFontOfSize size: CGFloat)
    ```

UIFont(RegisterURL)
-------------------

Undocumented

-   `                                                            +registerFontsWithURL:                    `

    Undocumented

-   `                                                            +registerFontsFromBundle:                    `

    Undocumented

-   `                                                            +fontWithName:size:ifNeededLoadURL:                    `

    Undocumented

UIImage(MapsIndoorsBundle)
--------------------------

Undocumented

-   `                                                            +bundleImageNamed:                    `

    Undocumented

Classes
=======

MPAppData
---------

``` {.highlight}
@interface MPAppData
```

Provides the contextual information needed for setting up a map with
specific MapsPeople site data

-   `                                                            displayRuleset                    `

    Ruleset that defines how and when to show the different map markers

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (readwrite, strong, nonatomic)    MPLocationDisplayRuleset *displayRuleset;
    ```

    Swift

    ``` {.highlight}
    var displayRuleset: MPLocationDisplayRuleset! { get set }
    ```

-   `                                                            colorPrimary                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPAppData
    ```

-   `                                                            colorPrimaryDark                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPAppData
    ```

-   `                                                            colorAccent                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPAppData
    ```

-   `                                                            menuInfo                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPAppData
    ```

-   `                                                            venueImages                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPAppData
    ```

-   `                                                            appSettings                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPAppData
    ```

MPAppDataProvider
-----------------

``` {.highlight}
@interface MPAppDataProvider : NSObject
```

The app data provider acts as a service for the metadata (MPAppData) of
a MapsIndoors app solution.

-   `                                                            delegate                    `

    Delegate object. This is another way of handling data fetching.
    Using completionHandler block instead is recommended.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (readwrite, atomic) id<MPAppDataProviderDelegate> delegate;
    ```

    Swift

    ``` {.highlight}
    weak var delegate: MPAppDataProviderDelegate! { get set }
    ```

-   `                                                            -getAppDataAsync:language:completionHandler:                    `

    Get app metadata and handle the data with a callback block

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)getAppDataAsync:(NSString *)solutionId               language:(NSString *)language      completionHandler:(mpAppDataHandlerBlockType)handler;
    ```

    Swift

    ``` {.highlight}
    func getAppDataAsync(_ solutionId: String!, language: String!, completionHandler handler: mpAppDataHandlerBlockType!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The solution to get app metadata  |
    | solutionId                        | for                               |
    |          `                        |                                   |
    +-----------------------------------+-----------------------------------+
    | `                                 | Specifies which language to       |
    | language                          | fetch. Only supports the          |
    |        `                          | available languages in the        |
    |                                   | specified solution.               |
    +-----------------------------------+-----------------------------------+
    | `                                 | Data fetch and error callback     |
    | handler                           | handler block                     |
    |       `                           |                                   |
    +-----------------------------------+-----------------------------------+

-   `                                                            -getAppDataAsync:language:                    `

    Get app metadata. Assign a delegate object to this instance in order
    to handle the data fetch.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)getAppDataAsync:(NSString *)solutionId language:(NSString *)language;
    ```

    Swift

    ``` {.highlight}
    func getAppDataAsync(_ solutionId: String!, language: String!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The solution to get app metadata  |
    | solutionId                        | for                               |
    |          `                        |                                   |
    +-----------------------------------+-----------------------------------+
    | `                                 | Specifies which language to fetch |
    | language                          | content for. Uses 2 character ISO |
    |        `                          | 639-1 representation. Only        |
    |                                   | supports the available languages  |
    |                                   | in the specified solution.        |
    +-----------------------------------+-----------------------------------+

MPAppMode
---------

``` {.highlight}
@interface MPAppMode : NSObject
```

Provides a static way to access the possible app modes

-   `                                                            +INDOOR                    `

    Indoor app mode (equals 0)

    #### Declaration

    Objective-C

    ``` {.highlight}
    + (int)INDOOR;
    ```

    Swift

    ``` {.highlight}
    class func indoor() -> Int32
    ```

-   `                                                            +OUTDOOR                    `

    Outdoor app mode (equals 1)

    #### Declaration

    Objective-C

    ``` {.highlight}
    + (int)OUTDOOR;
    ```

    Swift

    ``` {.highlight}
    class func outdoor() -> Int32
    ```

-   `                                                            +INDOOR_AND_OUTDOOR                    `

    Indoor and outdoor app mode (equals 2)

    #### Declaration

    Objective-C

    ``` {.highlight}
    + (int)INDOOR_AND_OUTDOOR;
    ```

    Swift

    ``` {.highlight}
    class func indoor_AND_OUTDOOR() -> Int32
    ```

MPBeacon
--------

Undocumented

-   `                                                            beaconId                    `

    Undocumented

-   `                                                            maxTxPower                    `

    Undocumented

-   `                                                            maxTxDistance                    `

    Undocumented

-   `                                                            floor                    `

    Undocumented

-   `                                                            building                    `

    Undocumented

-   `                                                            venue                    `

    Undocumented

-   `                                                            RSSI                    `

    Undocumented

-   `                                                            latestTimeStamp                    `

    Undocumented

-   `                                                            geometry                    `

    Undocumented

MPBeaconCollection
------------------

Undocumented

-   `                                                            list                    `

    Undocumented

MPBeaconPositionProvider
------------------------

Undocumented

-   `                                                            -initWithUUID:                    `

    Undocumented

-   `                                                            locationManager                    `

    Undocumented

-   `                                                            isRunning                    `

    Undocumented

-   `                                                            enableCoreLocationFallback                    `

    Undocumented

-   `                                                            beaconRegion                    `

    Undocumented

-   `                                                            beaconPoints                    `

    Undocumented

-   `                                                            deadBeaconPoints                    `

    Undocumented

-   `                                                            beaconProvider                    `

    Undocumented

-   `                                                            heading                    `

    Undocumented

-   `                                                            lastBeaconRecievedTime                    `

    Undocumented

-   `                                                            pos                    `

    Undocumented

-   `                                                            probability                    `

    Undocumented

-   `                                                            debugPositioningState                    `

    Undocumented

-   `                                                            debugCurrentVisibleBeacons                    `

    Undocumented

-   `                                                            currentNearestBeacon                    `

    Undocumented

MPBeaconProvider
----------------

``` {.highlight}
@interface MPBeaconProvider : NSObject <MPBeaconProvider>
```

Beacons provider that defines a delegate and a method to initiate
fetching of Beacons from the provider.

-   `                                                            delegate                    `

    Beacons provider delegate.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (readwrite, atomic) id<MPBeaconProviderDelegate> delegate;
    ```

    Swift

    ``` {.highlight}
    weak var delegate: MPBeaconProviderDelegate! { get set }
    ```

-   `                                                            -getBeacons:clientId:                    `

    Method to initiate fetching of Beacons from the provider.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)getBeacons:(NSArray *)beaconIds clientId:(NSString *)clientId;
    ```

    Swift

    ``` {.highlight}
    func getBeacons(_ beaconIds: [Any]!, clientId: String!)
    ```

-   `                                                            -init                    `

    Method to query a subset of Beacons from the provider.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (id)init;
    ```

    Swift

    ``` {.highlight}
    init!()
    ```

MPBuilding
----------

``` {.highlight}
@interface MPBuilding
```

Holds relevant data for a single building, and provides a way to
interact with the buildings floor levels.

-   `                                                            currentFloor                    `

    Holds the current floor.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, nonatomic) NSNumber *currentFloor;
    ```

    Swift

    ``` {.highlight}
    var currentFloor: NSNumber! { get set }
    ```

-   `                                                            delegate                    `

    Delegate that holds the building ready event method. Relevant when
    using offline mode, as it will take a while to load the database
    upon first app start.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (readwrite, atomic) id delegate;
    ```

    Swift

    ``` {.highlight}
    weak var delegate: AnyObject! { get set }
    ```

-   `                                                            floorsReady                    `

    Simple counter that keeps track of how many floors and related tile
    layers are ready.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSNumber *floorsReady;
    ```

    Swift

    ``` {.highlight}
    var floorsReady: NSNumber! { get set }
    ```

-   `                                                            buildingId                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPBuilding
    ```

-   `                                                            administrativeId                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPBuilding
    ```

-   `                                                            floors                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPBuilding
    ```

-   `                                                            name                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPBuilding
    ```

-   `                                                            anchor                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPBuilding
    ```

-   `                                                            bounds                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPBuilding
    ```

-   `                                                            -getFloor                    `

    Get the current floor.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (MPFloor *)getFloor;
    ```

    Swift

    ``` {.highlight}
    func getFloor() -> MPFloor!
    ```

-   `                                                            -getInitFloor                    `

    Get the initial/default floor upon creation.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (NSNumber *)getInitFloor;
    ```

    Swift

    ``` {.highlight}
    func getInitFloor() -> NSNumber!
    ```

-   `                                                            -getFloors                    `

    Get the number of floors.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (NSNumber *)getFloors;
    ```

    Swift

    ``` {.highlight}
    func getFloors() -> NSNumber!
    ```

-   `                                                            -getFloorArray                    `

    Get the floors as an array of MPFloor.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (NSArray *)getFloorArray;
    ```

    Swift

    ``` {.highlight}
    func getFloorArray() -> [Any]!
    ```

-   `                                                            -setFloor:                    `

    Set the current floor property (without affecting the building
    display).- parameter: floor The floor number to replace current
    floor with.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)setFloor:(NSNumber *)floor;
    ```

    Swift

    ``` {.highlight}
    func setFloor(_ floor: NSNumber!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The floor number to replace       |
    | floor                             | current floor with.               |
    |     `                             |                                   |
    +-----------------------------------+-----------------------------------+

-   `                                                            -showBuilding:onMap:                    `

    Use this method to actually shift floor and show the building
    level.- parameter: floor The floor number that represents the
    building level.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)showBuilding:(NSNumber *)newFloor onMap:(id)map;
    ```

    Swift

    ``` {.highlight}
    func show(_ newFloor: NSNumber!, onMap map: Any!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The floor number that represents  |
    | floor                             | the building level.               |
    |     `                             |                                   |
    +-----------------------------------+-----------------------------------+

-   `                                                            -updateBuildingTiles                    `

    Updates the current floor tile layer by clearing the tile cache.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)updateBuildingTiles;
    ```

    Swift

    ``` {.highlight}
    func updateTiles()
    ```

-   `                                                            -hideBuilding                    `

    Hide the building from the map.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)hideBuilding;
    ```

    Swift

    ``` {.highlight}
    func hide()
    ```

-   `                                                            -getBuildingBounds                    `

    Get the geographic bounds for the building

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (id)getBuildingBounds;
    ```

    Swift

    ``` {.highlight}
    func getBounds() -> Any!
    ```

MPBuildingCollection
--------------------

Undocumented

-   `                                                            buildings                    `

    Undocumented

MPBuildingDataset
-----------------

``` {.highlight}
@interface MPBuildingDataset
```

Collection of buildings with some retrieval and calculation
functionality.

-   `                                                            type                    `

    The type of data (equals “FeatureCollection”).

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSString *type;
    ```

    Swift

    ``` {.highlight}
    var type: String! { get set }
    ```

-   `                                                            features                    `

    Array of buildings contained in the collection.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSArray *features;
    ```

    Swift

    ``` {.highlight}
    var features: [Any]! { get set }
    ```

-   `                                                            -getBuilding:                    `

    Retrieve a building by its unique shortname.- parameter: The
    shortname of the building

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (MPBuilding *)getBuilding:(NSString *)shortName;
    ```

    Swift

    ``` {.highlight}
    func getBuilding(_ shortName: String!) -> MPBuilding!
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | shortname of the building         |
    | The                               |                                   |
    |   `                               |                                   |
    +-----------------------------------+-----------------------------------+

-   `                                                            -setBuildingDelegate:                    `

    Assign a delegate object to all buildings in the collection, this
    object will hold the onBuildingReady:shortName event method.-
    parameter: The delegate object

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)setBuildingDelegate:(NSObject<MPBuildingDelegate> *)delegate;
    ```

    Swift

    ``` {.highlight}
    func setBuildingDelegate(_ delegate: MPBuildingDelegate!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | delegate object                   |
    | The                               |                                   |
    |   `                               |                                   |
    +-----------------------------------+-----------------------------------+

-   `                                                            -intersectionAreaBetweenBounds:andBounds:                    `

    Get the intersection area on two GMSCoordinateBounds.- parameter: b1
    Some coordinate bounds (Typically the current map viewport bounds)-
    parameter: b2 Some other coordinate bounds (Typically building
    bounds)

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (double)intersectionAreaBetweenBounds:(id)b1 andBounds:(id)b2;
    ```

    Swift

    ``` {.highlight}
    func intersectionAreaBetweenBounds(_ b1: Any!, andBounds b2: Any!) -> Double
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | Some coordinate bounds (Typically |
    | b1                                | the current map viewport bounds)  |
    |  `                                |                                   |
    +-----------------------------------+-----------------------------------+
    | `                                 | Some other coordinate bounds      |
    | b2                                | (Typically building bounds)       |
    |  `                                |                                   |
    +-----------------------------------+-----------------------------------+

MPBuildingInfo
--------------

Undocumented

-   `                                                            name                    `

    Undocumented

-   `                                                            aliases                    `

    Undocumented

MPBuildingReference
-------------------

Undocumented

-   `                                                            refId                    `

    Undocumented

MPCategories
------------

Undocumented

-   `                                                            list                    `

    Undocumented

MPCategoriesProvider
--------------------

``` {.highlight}
@interface MPCategoriesProvider : NSObject
```

A categories provider acts as a service for the location categories
belonging to a specific MapsIndoors solution/dataset.

-   `                                                            delegate                    `

    Categories provider delegate.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (readwrite, atomic) id<MPCategoriesProviderDelegate> delegate;
    ```

    Swift

    ``` {.highlight}
    weak var delegate: MPCategoriesProviderDelegate! { get set }
    ```

-   `                                                            -getCategoriesAsync:locale:                    `

    Get categories from the specified solution.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)getCategoriesAsync:(NSString *)solutionId locale:(NSString *)locale;
    ```

    Swift

    ``` {.highlight}
    func getCategoriesAsync(_ solutionId: String!, locale: String!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | MapsIndoors solution id string    |
    | solutionId                        |                                   |
    |          `                        |                                   |
    +-----------------------------------+-----------------------------------+
    | `                                 | Specifies which language to fetch |
    | locale                            | categories in. Uses 2 character   |
    |      `                            | ISO 639-1 representation          |
    +-----------------------------------+-----------------------------------+

-   `                                                            -getCategoriesAsync:locale:completionHandler:                    `

    Get Categories from this provider and provide a callback handler.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)getCategoriesAsync:(NSString *)solutionId                    locale:(NSString *)locale         completionHandler:(mpCategoriesHandlerBlockType)completionHandler;
    ```

    Swift

    ``` {.highlight}
    func getCategoriesAsync(_ solutionId: String!, locale: String!, completionHandler: mpCategoriesHandlerBlockType!)
    ```

MPCategoryUIBarButtonItem
-------------------------

``` {.highlight}
@interface MPCategoryUIBarButtonItem : UIBarButtonItem
```

Category button item. Convenient for setting up a menu bar of main
categories.

-   `                                                            category                    `

    Category for the button.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSString *category;
    ```

    Swift

    ``` {.highlight}
    var category: String! { get set }
    ```

MPContactModule
---------------

Undocumented

-   `                                                            email                    `

    Undocumented

-   `                                                            phone                    `

    Undocumented

-   `                                                            faxNumber                    `

    Undocumented

-   `                                                            website                    `

    Undocumented

MPDataField
-----------

Undocumented

-   `                                                            key                    `

    Undocumented

-   `                                                            value                    `

    Undocumented

MPDirectionsRenderer
--------------------

Undocumented

-   `                                                            delegate                    `

    Undocumented

-   `                                                            map                    `

    Assigns (or unassigns) a Google map object

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (nonatomic, strong) GMSMapView* map
    ```

-   `                                                            route                    `

    Assigns (or unassigns) a route object

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (readwrite, strong, nonatomic) MPRoute *route;
    ```

    Swift

    ``` {.highlight}
    var route: MPRoute! { get set }
    ```

-   `                                                            nextRouteLegButton                    `

    Undocumented

-   `                                                            previousRouteLegButton                    `

    Undocumented

-   `                                                            routeLegIndex                    `

    Undocumented

-   `                                                            routeStepIndex                    `

    Undocumented

-   `                                                            solidColor                    `

    Undocumented

-   `                                                            backgroundColor                    `

    Undocumented

-   `                                                            fitBounds                    `

    Undocumented

-   `                                                            fitMode                    `

    Undocumented

-   `                                                            edgeInsets                    `

    Undocumented

-   `                                                            -animate:                    `

    Undocumented

MPDirectionsService
-------------------

Undocumented

-   `                                                            delegate                    `

    Undocumented

-   `                                                            solutionId                    `

    Undocumented

-   `                                                            googleApiKey                    `

    Undocumented

-   `                                                            language                    `

    Undocumented

-   `                                                            -initWithMapsIndoorsSolutionId:googleApiKey:                    `

    Undocumented

-   `                                                            -routingFrom:to:by:avoid:depart:arrive:                    `

    Undocumented

-   `                                                            -routingFrom:to:by:                    `

    Undocumented

-   `                                                            -routingFrom:to:by:avoid:depart:arrive:completionHandler:                    `

    Undocumented

-   `                                                            -routingFrom:to:by:completionHandler:                    `

    Undocumented

MPDistanceMatrixElements
------------------------

Undocumented

-   `                                                            distance                    `

    Undocumented

-   `                                                            duration                    `

    Undocumented

-   `                                                            status                    `

    Undocumented

MPDistanceMatrixProvider
------------------------

Undocumented

-   `                                                            delegate                    `

    Undocumented

-   `                                                            solutionId                    `

    Undocumented

-   `                                                            googleApiKey                    `

    Undocumented

-   `                                                            graphId                    `

    Undocumented

-   `                                                            vehicle                    `

    Undocumented

-   `                                                            -getDistanceMatrixWithOrigins:destinations:travelMode:avoid:depart:arrive:completionHandler:                    `

    Undocumented

-   `                                                            -getDistanceMatrixWithOrigins:destinations:travelMode:                    `

    Undocumented

-   `                                                            -getGoogleDistanceMatrixWithOrigins:destinations:travelMode:avoid:depart:arrive:completionHandler:                    `

    Undocumented

-   `                                                            -getGoogleDistanceMatrixWithOrigins:destinations:travelMode:                    `

    Undocumented

MPDistanceMatrixResult
----------------------

Undocumented

-   `                                                            destination_addresses                    `

    Undocumented

-   `                                                            origin_addresses                    `

    Undocumented

-   `                                                            rows                    `

    Undocumented

-   `                                                            status                    `

    Undocumented

-   `                                                            venue                    `

    Undocumented

-   `                                                            bestOrigin                    `

    Undocumented

-   `                                                            bestDestination                    `

    Undocumented

-   `                                                            provider                    `

    Undocumented

MPDistanceMatrixRows
--------------------

Undocumented

-   `                                                            elements                    `

    Undocumented

MPDouble
--------

``` {.highlight}
@interface MPDouble : NSObject
```

Basic point geometry class.

-   `                                                            doubleValue                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPDouble : NSObject
    ```

-   `                                                            -init:                    `

    double initialization.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (MPDouble *)init:(double)value;
    ```

    Swift

    ``` {.highlight}
    init!(_ value: Double)
    ```

MPEncodedPolyline
-----------------

Undocumented

-   `                                                            points                    `

    Undocumented

MPFloor
-------

``` {.highlight}
@interface MPFloor
```

Floor data model. Holds the floor geometry, display name, z-index and id
of the building it belongs to. Furthermore it can hold a reference to a
GMSTileLayer.

-   `                                                            style                    `

    Floor layer style, if any.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSString *style;
    ```

-   `                                                            zIndex                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPFloor
    ```

-   `                                                            buildingId                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPFloor
    ```

-   `                                                            name                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPFloor
    ```

MPFloorButton
-------------

``` {.highlight}
@interface MPFloorButton : UIButton
```

Create a button with a floor index property

-   `                                                            floorIndex                    `

    Floor index property, corresponds to the index property of MPFloor

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSNumber *floorIndex;
    ```

    Swift

    ``` {.highlight}
    var floorIndex: NSNumber! { get set }
    ```

MPFloorSelectorControl
----------------------

``` {.highlight}
@interface MPFloorSelectorControl : UIView
```

Floor selection UI element. Can be added to the map, but should be
linked to an MPBuilding to make sense.

-   `                                                            +selectedColor                    `

    Get the background color for the selected floor button.

    #### Declaration

    Objective-C

    ``` {.highlight}
    + (UIColor *)selectedColor;
    ```

    Swift

    ``` {.highlight}
    class func selectedColor() -> UIColor!
    ```

-   `                                                            +setSelectedColor:                    `

    Set the background color for the selected floor button.

    #### Declaration

    Objective-C

    ``` {.highlight}
    + (void)setSelectedColor:(UIColor *)value;
    ```

    Swift

    ``` {.highlight}
    class func setSelectedColor(_ value: UIColor!)
    ```

-   `                                                            +tintColor                    `

    Get the tint color for the floor buttons.

    #### Declaration

    Objective-C

    ``` {.highlight}
    + (UIColor *)tintColor;
    ```

    Swift

    ``` {.highlight}
    class func tintColor() -> UIColor!
    ```

-   `                                                            +setTintColor:                    `

    Set the tint color for the floor buttons.

    #### Declaration

    Objective-C

    ``` {.highlight}
    + (void)setTintColor:(UIColor *)value;
    ```

    Swift

    ``` {.highlight}
    class func setTintColor(_ value: UIColor!)
    ```

-   `                                                            currentFloor                    `

    The current floor.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSNumber *currentFloor;
    ```

    Swift

    ``` {.highlight}
    var currentFloor: NSNumber! { get set }
    ```

-   `                                                            fromFloorIndex                    `

    Floor index to start from (typically 0).

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSNumber *fromFloorIndex;
    ```

    Swift

    ``` {.highlight}
    var fromFloorIndex: NSNumber! { get set }
    ```

-   `                                                            nFloors                    `

    The number of floors.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSNumber *nFloors;
    ```

    Swift

    ``` {.highlight}
    var nFloors: NSNumber! { get set }
    ```

-   `                                                            buttonSize                    `

    The size of a single floor button (buttonSize x buttonSize).

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSNumber *buttonSize;
    ```

    Swift

    ``` {.highlight}
    var buttonSize: NSNumber! { get set }
    ```

-   `                                                            buttons                    `

    Array of the floor selector buttons.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSMutableArray *buttons;
    ```

    Swift

    ``` {.highlight}
    var buttons: NSMutableArray! { get set }
    ```

-   `                                                            topIcon                    `

    The top icon image.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) UIImage *topIcon;
    ```

    Swift

    ``` {.highlight}
    var topIcon: UIImage! { get set }
    ```

-   `                                                            container                    `

    An outer container view for the buttons.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) UIView *container;
    ```

    Swift

    ``` {.highlight}
    var container: UIView! { get set }
    ```

-   `                                                            parentView                    `

    The view holding the floor selector.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) UIView *parentView;
    ```

    Swift

    ``` {.highlight}
    var parentView: UIView! { get set }
    ```

-   `                                                            delegate                    `

    Delegate object to hold the floor change event method.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (readwrite, atomic) id<MPFloorSelectorDelegate> delegate;
    ```

    Swift

    ``` {.highlight}
    weak var delegate: MPFloorSelectorDelegate! { get set }
    ```

-   `                                                            -notifyFloorSelect:                    `

    Method that fires when a floor button is pressed.- parameter: sender
    The button tapped

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)notifyFloorSelect:(id)sender;
    ```

    Swift

    ``` {.highlight}
    func notifyFloorSelect(_ sender: Any!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The button tapped                 |
    | sender                            |                                   |
    |      `                            |                                   |
    +-----------------------------------+-----------------------------------+

-   `                                                            -addToMap:                    `

    Add the floor selector to a map.- parameter: map The map that should
    hold the floor selector.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)addToMap:(id)map;
    ```

    Swift

    ``` {.highlight}
    func add(toMap map: Any!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The map that should hold the      |
    | map                               | floor selector.                   |
    |   `                               |                                   |
    +-----------------------------------+-----------------------------------+

-   `                                                            -addToView:                    `

    Add the floor selector to a view.- parameter: view The view that
    should hold the floor selector.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)addToView:(UIView *)view;
    ```

    Swift

    ``` {.highlight}
    func add(to view: UIView!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The view that should hold the     |
    | view                              | floor selector.                   |
    |    `                              |                                   |
    +-----------------------------------+-----------------------------------+

-   `                                                            -setFloor:                    `

    Set floor level.- parameter: floor The floor to switch to.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)setFloor:(NSNumber *)floor;
    ```

    Swift

    ``` {.highlight}
    func setFloor(_ floor: NSNumber!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The floor to switch to.           |
    | floor                             |                                   |
    |     `                             |                                   |
    +-----------------------------------+-----------------------------------+

-   `                                                            -updateFloors:                    `

    Update the floor selector based on a building.- parameter: building
    The building that the floor selector should reflect.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)updateFloors:(MPBuilding *)building;
    ```

    Swift

    ``` {.highlight}
    func updateFloors(_ building: MPBuilding!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The building that the floor       |
    | building                          | selector should reflect.          |
    |        `                          |                                   |
    +-----------------------------------+-----------------------------------+

-   `                                                            -updateFrame                    `

    Update the floor selector view frame. Needed upon switch to
    landscape/portrait

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)updateFrame;
    ```

    Swift

    ``` {.highlight}
    func updateFrame()
    ```

MPFloorTileLayer
----------------

Undocumented

-   `                                                            +tileSize                    `

    Get the indoor floor tile-size for rendering.

    #### Declaration

    Objective-C

    ``` {.highlight}
    + (NSInteger)tileSize;
    ```

    Swift

    ``` {.highlight}
    class func tileSize() -> Int
    ```

-   `                                                            +setTileSize:                    `

    Set the indoor floor tile-size for rendering.

    #### Declaration

    Objective-C

    ``` {.highlight}
    + (void)setTileSize:(NSInteger)value;
    ```

    Swift

    ``` {.highlight}
    class func setTileSize(_ value: Int)
    ```

-   `                                                            -initWithVenue:andFloor:                    `

    Instantiate using a venue and a floor object.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (id)initWithVenue:(MPVenue *)venue andFloor:(MPFloor *)floor;
    ```

    Swift

    ``` {.highlight}
    init!(venue: MPVenue!, andFloor floor: MPFloor!)
    ```

-   `                                                            urlTemplate                    `

    The url template string to use when fetching tiles. Must have format
    “prefix{param\_1}infix{param\_N}suffix”, e.g.:
    “http://tiles.url.com/{floor}/{x}/{y}/{zoom}.png”By default the
    implementation of this tilelayer will look for
    {venueId}/{style}/{buildingId}/{floor}/{z}/{x}/{y}, where x, y and z
    is mandatory.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, nonatomic) NSString *urlTemplate;
    ```

    Swift

    ``` {.highlight}
    var urlTemplate: String! { get set }
    ```

-   `                                                            floor                    `

    Floor property

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, nonatomic) MPFloor *floor;
    ```

    Swift

    ``` {.highlight}
    var floor: MPFloor! { get set }
    ```

-   `                                                            venueId                    `

    Venue id

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSNumber *venueId;
    ```

    Swift

    ``` {.highlight}
    var venueId: NSNumber! { get set }
    ```

-   `                                                            subdomains                    `

    Array of strings identifying subdomains. If this property is set,
    and the url template contains the parameter {subdomain}, the
    tilelayer will do round-robin over the subdomains specified.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSArray *subdomains;
    ```

    Swift

    ``` {.highlight}
    var subdomains: [Any]! { get set }
    ```

-   `                                                            -parseUrl                    `

    Parse the url template. Normally, this is done automatically

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)parseUrl;
    ```

    Swift

    ``` {.highlight}
    func parseUrl()
    ```

MPGeometry
----------

``` {.highlight}
@interface MPGeometry
```

Basic geometry class holding one or more coordinate sets

-   `                                                            coordinates                    `

    Array holding one or more coordinate sets (if so, the array will be
    an array of arrays)

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSArray *coordinates;
    ```

    Swift

    ``` {.highlight}
    var coordinates: UnsafeMutablePointer
    ```

MPImageProvider
---------------

``` {.highlight}
@interface MPImageProvider : NSObject
```

The image provider acts as a service for fetching images either online
or cached offline. Only intended for png images.

-   `                                                            +getImageFromUrlStringAsync:completionHandler:                    `

    Get an image from a web url

    #### Declaration

    Objective-C

    ``` {.highlight}
    + (void)getImageFromUrlStringAsync:(NSString *)url                 completionHandler:                     (void (^)(UIImage *, NSError *))completionHandler;
    ```

    Swift

    ``` {.highlight}
    class func getImageFromUrlStringAsync(_ url: String!, completionHandler: ((UIImage?, Error?) -> Void)!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The web url as a string           |
    | url                               |                                   |
    |   `                               |                                   |
    +-----------------------------------+-----------------------------------+
    | `                                 | Completion callback handler block |
    | completionHandler                 | that returns either an image or   |
    |                 `                 | an error (either one will be nil) |
    +-----------------------------------+-----------------------------------+

MPImageRenderer
---------------

Undocumented

-   `                                                            +imageWithView:                    `

    Undocumented

-   `                                                            +scaledIconFromImage:                    `

    Undocumented

-   `                                                            +imageResize:andResizeTo:                    `

    Undocumented

MPInfoSnippetView
-----------------

``` {.highlight}
@interface MPInfoSnippetView : UIView
```

Create an location info view, designed to contain information from a
tapped location on the map.

-   `                                                            delegate                    `

    Info snippet view delegate

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (readwrite, atomic) id<MPInfoSnippetViewDelegate> delegate;
    ```

    Swift

    ``` {.highlight}
    weak var delegate: MPInfoSnippetViewDelegate! { get set }
    ```

-   `                                                            snippetHeight                    `

    Set the height of the info snippet

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) int snippetHeight;
    ```

    Swift

    ``` {.highlight}
    var snippetHeight: Int32 { get set }
    ```

-   `                                                            location                    `

    Set the location which information will show in the view

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) MPLocation *location;
    ```

    Swift

    ``` {.highlight}
    var location: MPLocation! { get set }
    ```

-   `                                                            parentView                    `

    Parent view property

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) UIView *parentView;
    ```

    Swift

    ``` {.highlight}
    var parentView: UIView! { get set }
    ```

-   `                                                            containerView                    `

    View containing the child views

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) UIView *containerView;
    ```

    Swift

    ``` {.highlight}
    var containerView: UIView! { get set }
    ```

-   `                                                            centerView                    `

    Center view. To customize, just remove or add views inside this
    view.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) UIView *centerView;
    ```

    Swift

    ``` {.highlight}
    var centerView: UIView! { get set }
    ```

-   `                                                            leftView                    `

    Left view. To customize, just remove or add views inside this view.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) UIView *leftView;
    ```

    Swift

    ``` {.highlight}
    var leftView: UIView! { get set }
    ```

-   `                                                            rightView                    `

    Right view. To customize, just remove or add views inside this view.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) UIView *rightView;
    ```

    Swift

    ``` {.highlight}
    var rightView: UIView! { get set }
    ```

-   `                                                            centerTopTextView                    `

    Label view positioned top center (inside centerView)

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) UILabel *centerTopTextView;
    ```

    Swift

    ``` {.highlight}
    var centerTopTextView: UILabel! { get set }
    ```

-   `                                                            leftTopTextView                    `

    Label view positioned top left (inside leftView)

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) UILabel *leftTopTextView;
    ```

    Swift

    ``` {.highlight}
    var leftTopTextView: UILabel! { get set }
    ```

-   `                                                            rightTopTextView                    `

    Label view positioned top right (inside rightView)

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) UILabel *rightTopTextView;
    ```

    Swift

    ``` {.highlight}
    var rightTopTextView: UILabel! { get set }
    ```

-   `                                                            centerBottomTextView                    `

    Label view positioned bottom center (inside centerView)

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) UILabel *centerBottomTextView;
    ```

    Swift

    ``` {.highlight}
    var centerBottomTextView: UILabel! { get set }
    ```

-   `                                                            leftBottomTextView                    `

    Label view positioned bottom left (inside leftView)

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) UILabel *leftBottomTextView;
    ```

    Swift

    ``` {.highlight}
    var leftBottomTextView: UILabel! { get set }
    ```

-   `                                                            rightBottomTextView                    `

    Label view positioned bottom right (inside rightView)

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) UILabel *rightBottomTextView;
    ```

    Swift

    ``` {.highlight}
    var rightBottomTextView: UILabel! { get set }
    ```

-   `                                                            -addToView:                    `

    Add the info snippet to another view

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)addToView:(UIView *)view;
    ```

    Swift

    ``` {.highlight}
    func add(to view: UIView!)
    ```

-   `                                                            -attachLocation:                    `

    Attach a new location object to the info snippet

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)attachLocation:(MPLocation *)location;
    ```

    Swift

    ``` {.highlight}
    func attachLocation(_ location: MPLocation!)
    ```

-   `                                                            -attachLocation:currentPosition:                    `

    Attach a new location object to the info snippet and provide an
    initial user position (for displaying distances).

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)attachLocation:(MPLocation *)location       currentPosition:(MPLocation *)position;
    ```

    Swift

    ``` {.highlight}
    func attachLocation(_ location: MPLocation!, currentPosition position: MPLocation!)
    ```

-   `                                                            -enableLeftView                    `

    Enable the left view, disabled by default

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)enableLeftView;
    ```

    Swift

    ``` {.highlight}
    func enableLeftView()
    ```

-   `                                                            -hide                    `

    Hide the info snippet

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)hide;
    ```

    Swift

    ``` {.highlight}
    func hide()
    ```

-   `                                                            -show                    `

    Show the info snippet, by animating from bottom and up

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)show;
    ```

    Swift

    ``` {.highlight}
    func show()
    ```

-   `                                                            -touchesBegan:withEvent:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPInfoSnippetView : UIView
    ```

-   `                                                            -touchesMoved:withEvent:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPInfoSnippetView : UIView
    ```

-   `                                                            -touchesEnded:withEvent:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPInfoSnippetView : UIView
    ```

-   `                                                            -touchesCancelled:withEvent:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPInfoSnippetView : UIView
    ```

-   `                                                            +rightButtonColor                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPInfoSnippetView : UIView
    ```

-   `                                                            +setRightButtonColor:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPInfoSnippetView : UIView
    ```

MPLatLng
--------

Undocumented

-   `                                                            lat                    `

    Undocumented

-   `                                                            lng                    `

    Undocumented

MPLatLngBounds
--------------

Undocumented

-   `                                                            southWest                    `

    Undocumented

-   `                                                            northEast                    `

    Undocumented

MPLayerType
-----------

``` {.highlight}
@interface MPLayerType : NSObject
```

Provides a static way to access the possible layer types for general
purpose MapsPeople services

-   `                                                            +NORMAL                    `

    Normal is the base map layer

    #### Declaration

    Objective-C

    ``` {.highlight}
    + (NSString *)NORMAL;
    ```

    Swift

    ``` {.highlight}
    class func normal() -> String!
    ```

-   `                                                            +SATELLITE                    `

    Satellite map layer

    #### Declaration

    Objective-C

    ``` {.highlight}
    + (NSString *)SATELLITE;
    ```

    Swift

    ``` {.highlight}
    class func satellite() -> String!
    ```

-   `                                                            +HYBRID                    `

    Hybrid is a satellite map layer with roads and tracks on top of it.

    #### Declaration

    Objective-C

    ``` {.highlight}
    + (NSString *)HYBRID;
    ```

    Swift

    ``` {.highlight}
    class func hybrid() -> String!
    ```

MPLineGeometry
--------------

``` {.highlight}
@interface MPLineGeometry : MPGeometry
```

Line geometry class

-   `                                                            bbox                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPLineGeometry : MPGeometry
    ```

MPLoadIndicator
---------------

``` {.highlight}
@interface MPLoadIndicator : NSObject
```

A basic load indicator, with the option to set a text.

-   `                                                            indicatorView                    `

    The indicator view.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) UIActivityIndicatorView *indicatorView;
    ```

    Swift

    ``` {.highlight}
    var indicatorView: UIActivityIndicatorView! { get set }
    ```

-   `                                                            parentView                    `

    View holding the load indicator.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) UIView *parentView;
    ```

    Swift

    ``` {.highlight}
    var parentView: UIView! { get set }
    ```

-   `                                                            textView                    `

    The text view

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) UITextView *textView;
    ```

    Swift

    ``` {.highlight}
    var textView: UITextView! { get set }
    ```

-   `                                                            -initOnView:                    `

    Instantiates the indicator and places the indicator in a view.-
    parameter: view The view to hold the indicator.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (id)initOnView:(UIView *)view;
    ```

    Swift

    ``` {.highlight}
    init!(on view: UIView!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The view to hold the indicator.   |
    | view                              |                                   |
    |    `                              |                                   |
    +-----------------------------------+-----------------------------------+

-   `                                                            -initOnView:withText:                    `

    Instantiates the indicator and places the indicator in a view with a
    given text.- parameter: view The view to hold the indicator.-
    parameter: text The text to display with the indicator.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (id)initOnView:(UIView *)view withText:(NSString *)text;
    ```

    Swift

    ``` {.highlight}
    init!(on view: UIView!, withText text: String!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The view to hold the indicator.   |
    | view                              |                                   |
    |    `                              |                                   |
    +-----------------------------------+-----------------------------------+
    | `                                 | The text to display with the      |
    | text                              | indicator.                        |
    |    `                              |                                   |
    +-----------------------------------+-----------------------------------+

-   `                                                            -start                    `

    Start and show the indicator animation

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)start;
    ```

    Swift

    ``` {.highlight}
    func start()
    ```

-   `                                                            -stop                    `

    Stop and hide the indicator animation

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)stop;
    ```

    Swift

    ``` {.highlight}
    func stop()
    ```

MPLocation
----------

``` {.highlight}
@interface MPLocation
```

This class holds the data for a single location and a marker to display
the data on a map.

-   `                                                            -initWithPoint:andName:                    `

    Location constructor.- parameter: point The geographic point.-
    parameter: name The name of the location.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (id)initWithPoint:(MPPoint *)point andName:(NSString *)name;
    ```

    Swift

    ``` {.highlight}
    init!(point: MPPoint!, andName name: String!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The geographic point.             |
    | point                             |                                   |
    |     `                             |                                   |
    +-----------------------------------+-----------------------------------+
    | `                                 | The name of the location.         |
    | name                              |                                   |
    |    `                              |                                   |
    +-----------------------------------+-----------------------------------+

-   `                                                            -initWithLocation:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPLocation
    ```

-   `                                                            locationId                    `

    Location ID string.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (readwrite, strong, nonatomic) NSString *locationId;
    ```

    Swift

    ``` {.highlight}
    var locationId: String! { get set }
    ```

-   `                                                            type                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPLocation
    ```

-   `                                                            venue                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPLocation
    ```

-   `                                                            building                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPLocation
    ```

-   `                                                            roomId                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPLocation
    ```

-   `                                                            descr                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPLocation
    ```

-   `                                                            contact                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPLocation
    ```

-   `                                                            fields                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPLocation
    ```

-   `                                                            aliases                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPLocation
    ```

-   `                                                            name                    `

    Location name.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (readwrite, strong, nonatomic) NSString *name;
    ```

    Swift

    ``` {.highlight}
    var name: String! { get set }
    ```

-   `                                                            floor                    `

    If the location resides on a specific floor level, this string
    property is set.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (readwrite, strong, nonatomic) NSNumber *floor;
    ```

    Swift

    ``` {.highlight}
    var floor: NSNumber! { get set }
    ```

-   `                                                            categories                    `

    The categories for this location, as an array of strings.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (readwrite, strong, nonatomic) NSMutableDictionary *categories;
    ```

    Swift

    ``` {.highlight}
    var categories: NSMutableDictionary! { get set }
    ```

-   `                                                            properties                    `

    Dictionary of location properties. The keys ‘image’ and
    ‘description’ will allways be present, and possibly others, such as
    ‘address’, ‘contact’, ‘openinghours’ and ‘\_tags’ or your own data
    structure.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSMutableDictionary *properties;
    ```

    Swift

    ``` {.highlight}
    var properties: NSMutableDictionary! { get set }
    ```

-   `                                                            geometry                    `

    Geometry as a Lat/Long point.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, nonatomic) MPPoint *geometry;
    ```

    Swift

    ``` {.highlight}
    var geometry: MPPoint! { get set }
    ```

-   `                                                            image                    `

    Location image.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) UIImage *image;
    ```

    Swift

    ``` {.highlight}
    var image: UIImage! { get set }
    ```

-   `                                                            displayRule                    `

    Location display rule.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) MPLocationDisplayRule *displayRule;
    ```

    Swift

    ``` {.highlight}
    var displayRule: MPLocationDisplayRule! { get set }
    ```

-   `                                                            -addToMap:                    `

    Add the location to a map- parameter: map The map that will hold the
    marker.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)addToMap:(id)map;
    ```

    Swift

    ``` {.highlight}
    func add(toMap map: Any!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The map that will hold the        |
    | map                               | marker.                           |
    |   `                               |                                   |
    +-----------------------------------+-----------------------------------+

-   `                                                            -addToMap:WithRules:                    `

    Add the location to a map with given display rules.- parameter: map
    The map that will hold the marker.- parameter: displayRuleset The
    display ruleset that defines the display of the marker.- see:
    MPLocationDisplayRuleset

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)addToMap:(id)map WithRules:(MPLocationDisplayRuleset *)displayRuleset;
    ```

    Swift

    ``` {.highlight}
    func add(toMap map: Any!, withRules displayRuleset: MPLocationDisplayRuleset!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The map that will hold the        |
    | map                               | marker.                           |
    |   `                               |                                   |
    +-----------------------------------+-----------------------------------+
    | `                                 | The display ruleset that defines  |
    | displayRuleset                    | the display of the marker.        |
    |              `                    |                                   |
    +-----------------------------------+-----------------------------------+

-   `                                                            -addToMap:floor:WithRules:                    `

    Add the location to a map with given display rules.- parameter: map
    The map that will hold the marker.- parameter: floor Floor level.-
    parameter: displayRuleset The display ruleset that defines the
    display of the marker.- see: MPLocationDisplayRuleset

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)addToMap:(id)map           floor:(int)floor       WithRules:(MPLocationDisplayRuleset *)displayRuleset;
    ```

    Swift

    ``` {.highlight}
    func add(toMap map: Any!, floor: Int32, withRules displayRuleset: MPLocationDisplayRuleset!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The map that will hold the        |
    | map                               | marker.                           |
    |   `                               |                                   |
    +-----------------------------------+-----------------------------------+
    | `                                 | Floor level.                      |
    | floor                             |                                   |
    |     `                             |                                   |
    +-----------------------------------+-----------------------------------+
    | `                                 | The display ruleset that defines  |
    | displayRuleset                    | the display of the marker.        |
    |              `                    |                                   |
    +-----------------------------------+-----------------------------------+

-   `                                                            -updateView:floor:displayRules:                    `

    Update the location on a map with given display rules.- parameter:
    map The map that triggered the update.- parameter: displayRuleset
    The display ruleset that defines the display of the marker.-
    parameter: floor Floor level.- see: MPLocationDisplayRuleset

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)updateView:(id)map             floor:(int)floor      displayRules:(MPLocationDisplayRuleset *)displayRuleset;
    ```

    Swift

    ``` {.highlight}
    func updateView(_ map: Any!, floor: Int32, displayRules displayRuleset: MPLocationDisplayRuleset!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The map that triggered the        |
    | map                               | update.                           |
    |   `                               |                                   |
    +-----------------------------------+-----------------------------------+
    | `                                 | The display ruleset that defines  |
    | displayRuleset                    | the display of the marker.        |
    |              `                    |                                   |
    +-----------------------------------+-----------------------------------+
    | `                                 | Floor level.                      |
    | floor                             |                                   |
    |     `                             |                                   |
    +-----------------------------------+-----------------------------------+

-   `                                                            -drawLabel:                    `

    Create a label image with a given text.- parameter: text The text to
    label with.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (UIImage *)drawLabel:(NSString *)text;
    ```

    Swift

    ``` {.highlight}
    func drawLabel(_ text: String!) -> UIImage!
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The text to label with.           |
    | text                              |                                   |
    |    `                              |                                   |
    +-----------------------------------+-----------------------------------+

-   `                                                            -removeFromMap                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPLocation
    ```

-   `                                                            -setImage                    `

    Set the location image based on information in:

    \[self.properties objectForKey:@“image”\];

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)setImage;
    ```

    Swift

    ``` {.highlight}
    func setImage()
    ```

-   `                                                            -getPoint                    `

    Get the point holding coordinates for the location object

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (MPPoint *)getPoint;
    ```

    Swift

    ``` {.highlight}
    func getPoint() -> MPPoint!
    ```

-   `                                                            -getProperty:                    `

    Get location property of the given type identifier

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (MPLocationProperty *)getProperty:(NSString *)propertyType;
    ```

    Swift

    ``` {.highlight}
    func getProperty(_ propertyType: String!) -> MPLocationProperty!
    ```

-   `                                                            -showTemporary:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPLocation
    ```

-   `                                                            -hideTemporary                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPLocation
    ```

-   `                                                            -showDynamically                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPLocation
    ```

MPLocationDataset
-----------------

``` {.highlight}
@interface MPLocationDataset
```

Dataset that holds locations, searched results and a filter.

-   `                                                            list                    `

    Main location array in the data set.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (readwrite, strong, nonatomic) NSArray<MPLocation> *list;
    ```

    Swift

    ``` {.highlight}
    var list: [Any]! { get set }
    ```

-   `                                                            searchResult                    `

    Array to hold filtered results in the data set.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (readwrite, strong, nonatomic) NSArray *searchResult;
    ```

    Swift

    ``` {.highlight}
    var searchResult: [Any]! { get set }
    ```

-   `                                                            categories                    `

    String used as text filter.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (readwrite, strong, nonatomic) NSArray *categories;
    ```

    Swift

    ``` {.highlight}
    var categories: [Any]! { get set }
    ```

-   `                                                            -filterByName:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPLocationDataset
    ```

-   `                                                            -filterByName:andCategories:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPLocationDataset
    ```

MPLocationDisplayRule
---------------------

``` {.highlight}
@interface MPLocationDisplayRule
```

This class serves as a display rule for locations.

-   `                                                            name                    `

    Name/identifier of the rule. Also used as the rule condition for the
    location categories.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSString *name;
    ```

    Swift

    ``` {.highlight}
    var name: String! { get set }
    ```

-   `                                                            zOn                    `

    The map zoom level above which the location marker should be
    visible.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSNumber *zOn;
    ```

    Swift

    ``` {.highlight}
    var zOn: NSNumber! { get set }
    ```

-   `                                                            zOff                    `

    The map zoom level beneath which the location marker should be
    visible.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSNumber *zOff;
    ```

    Swift

    ``` {.highlight}
    var zOff: NSNumber! { get set }
    ```

-   `                                                            iconPath                    `

    Relative path of the marker icon to use, without extension. Format
    is png.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, nonatomic) NSString *iconPath;
    ```

    Swift

    ``` {.highlight}
    var iconPath: String! { get set }
    ```

-   `                                                            label                    `

    Label template for the resulting location marker - e.g. “{{name}}”,
    “{{roomId}}”, “Room \#{{roomId}}” etc..

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, nonatomic) NSString *label;
    ```

    Swift

    ``` {.highlight}
    var label: String! { get set }
    ```

-   `                                                            icon                    `

    The marker icon to use on markers that apply to the display rule.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) UIImage *icon;
    ```

    Swift

    ``` {.highlight}
    var icon: UIImage! { get set }
    ```

-   `                                                            showLabel                    `

    Whether or not to show a text label instead of the icon.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, nonatomic) BOOL showLabel;
    ```

    Swift

    ``` {.highlight}
    var showLabel: Bool { get set }
    ```

-   `                                                            visible                    `

    Whether or not to show the icon.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, nonatomic) BOOL visible;
    ```

    Swift

    ``` {.highlight}
    var visible: Bool { get set }
    ```

-   `                                                            -show:                    `

    Processes the rule conditions at the given map zoom level.-
    parameter: zLevel The current map zoom level.- returns: Whether or
    not to show the location.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (BOOL)show:(CGFloat)zLevel;
    ```

    Swift

    ``` {.highlight}
    func show(_ zLevel: CGFloat) -> Bool
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The current map zoom level.       |
    | zLevel                            |                                   |
    |      `                            |                                   |
    +-----------------------------------+-----------------------------------+

    #### Return Value

    Whether or not to show the location.

-   `                                                            -getIcon                    `

    Get the icon from the display rule, regardless of conditions.-
    returns: An instance of UIImage.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (UIImage *)getIcon;
    ```

    Swift

    ``` {.highlight}
    func getIcon() -> UIImage!
    ```

    #### Return Value

    An instance of UIImage.

-   `                                                            -getLabelContent:                    `

    Get the label from the display rule, based on the location input.-
    returns: An string.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (NSString *)getLabelContent:(MPLocation *)location;
    ```

    Swift

    ``` {.highlight}
    func getLabelContent(_ location: MPLocation!) -> String!
    ```

    #### Return Value

    An string.

-   `                                                            -fetchIcon:                    `

    Retrieve the icon from the ressources and store in memory.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)fetchIcon:(NSString *)basePathOrBundle;
    ```

    Swift

    ``` {.highlight}
    func fetchIcon(_ basePathOrBundle: String!)
    ```

-   `                                                            -initWithName:AndZoomLevelOn:AndShowLabel:                    `

    Instantiate a display rule with parameters.- parameter: name The
    name and identifier of the rule.- parameter: zOn The map zoom level
    above which the location marker should display.- parameter:
    doShowLabel Whether or not to show a text label instead of the icon.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (id)initWithName:(NSString *)name    AndZoomLevelOn:(CGFloat)zOn      AndShowLabel:(BOOL)doShowLabel;
    ```

    Swift

    ``` {.highlight}
    init!(name: String!, andZoomLevelOn zOn: CGFloat, andShowLabel doShowLabel: Bool)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The name and identifier of the    |
    | name                              | rule.                             |
    |    `                              |                                   |
    +-----------------------------------+-----------------------------------+
    | `                                 | The map zoom level above which    |
    | zOn                               | the location marker should        |
    |   `                               | display.                          |
    +-----------------------------------+-----------------------------------+
    | `                                 | Whether or not to show a text     |
    | doShowLabel                       | label instead of the icon.        |
    |           `                       |                                   |
    +-----------------------------------+-----------------------------------+

-   `                                                            -initWithName:AndIcon:AndZoomLevelOn:                    `

    Instantiate a display rule with parameters.- parameter: name The
    name and identifier of the rule.- parameter: icon The icon used to
    display locations that qualify conditions of this rule.- parameter:
    zOn The map zoom level above which the location marker should
    display.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (id)initWithName:(NSString *)name           AndIcon:(UIImage *)icon    AndZoomLevelOn:(CGFloat)zOn;
    ```

    Swift

    ``` {.highlight}
    init!(name: String!, andIcon icon: UIImage!, andZoomLevelOn zOn: CGFloat)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The name and identifier of the    |
    | name                              | rule.                             |
    |    `                              |                                   |
    +-----------------------------------+-----------------------------------+
    | `                                 | The icon used to display          |
    | icon                              | locations that qualify conditions |
    |    `                              | of this rule.                     |
    +-----------------------------------+-----------------------------------+
    | `                                 | The map zoom level above which    |
    | zOn                               | the location marker should        |
    |   `                               | display.                          |
    +-----------------------------------+-----------------------------------+

-   `                                                            -initWithName:AndIcon:AndZoomLevelOn:AndShowLabel:                    `

    Instantiate a display rule with parameters.- parameter: name The
    name and identifier of the rule.- parameter: icon The icon used to
    display locations that qualify conditions of this rule.- parameter:
    zOn The map zoom level above which the location marker should
    display.- parameter: doShowLabel Whether or not to show a text label
    instead of the icon.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (id)initWithName:(NSString *)name           AndIcon:(UIImage *)icon    AndZoomLevelOn:(CGFloat)zOn      AndShowLabel:(BOOL)doShowLabel;
    ```

    Swift

    ``` {.highlight}
    init!(name: String!, andIcon icon: UIImage!, andZoomLevelOn zOn: CGFloat, andShowLabel doShowLabel: Bool)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The name and identifier of the    |
    | name                              | rule.                             |
    |    `                              |                                   |
    +-----------------------------------+-----------------------------------+
    | `                                 | The icon used to display          |
    | icon                              | locations that qualify conditions |
    |    `                              | of this rule.                     |
    +-----------------------------------+-----------------------------------+
    | `                                 | The map zoom level above which    |
    | zOn                               | the location marker should        |
    |   `                               | display.                          |
    +-----------------------------------+-----------------------------------+
    | `                                 | Whether or not to show a text     |
    | doShowLabel                       | label instead of the icon.        |
    |           `                       |                                   |
    +-----------------------------------+-----------------------------------+

-   `                                                            -initWithName:AndIconURL:AndZoomLevelOn:AndShowLabel:                    `

    Defered instantiate a display rule with parameters.- parameter: name
    The name and identifier of the rule.- parameter: URL The icon URL
    used to display locations that qualify conditions of this rule.-
    parameter: zOn The map zoom level above which the location marker
    should display.- parameter: doShowLabel Whether or not to show a
    text label instead of the icon.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (id)initWithName:(NSString *)name        AndIconURL:(NSString *)iconURL    AndZoomLevelOn:(CGFloat)zOn      AndShowLabel:(BOOL)doShowLabel;
    ```

    Swift

    ``` {.highlight}
    init!(name: String!, andIconURL iconURL: String!, andZoomLevelOn zOn: CGFloat, andShowLabel doShowLabel: Bool)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The name and identifier of the    |
    | name                              | rule.                             |
    |    `                              |                                   |
    +-----------------------------------+-----------------------------------+
    | `                                 | The icon URL used to display      |
    | URL                               | locations that qualify conditions |
    |   `                               | of this rule.                     |
    +-----------------------------------+-----------------------------------+
    | `                                 | The map zoom level above which    |
    | zOn                               | the location marker should        |
    |   `                               | display.                          |
    +-----------------------------------+-----------------------------------+
    | `                                 | Whether or not to show a text     |
    | doShowLabel                       | label instead of the icon.        |
    |           `                       |                                   |
    +-----------------------------------+-----------------------------------+

MPLocationDisplayRuleset
------------------------

``` {.highlight}
@interface MPLocationDisplayRuleset
```

This class holds a ruleset that defines how and when to show different
location markers.

-   `                                                            iconBaseUrl                    `

    The base url to the bundle containing the icons for this ruleset.
    Set the value to your bundle identifier.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSString *iconBaseUrl;
    ```

    Swift

    ``` {.highlight}
    var iconBaseUrl: String! { get set }
    ```

-   `                                                            displayRules                    `

    Array of display rules.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSMutableArray *displayRules;
    ```

    Swift

    ``` {.highlight}
    var displayRules: NSMutableArray! { get set }
    ```

-   `                                                            -getRule:                    `

    Method for retrieving the first occurence of a rule based on a set
    of rule names.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (MPLocationDisplayRule *)getRule:(NSArray *)ruleNames;
    ```

    Swift

    ``` {.highlight}
    func getRule(_ ruleNames: [Any]!) -> MPLocationDisplayRule!
    ```

-   `                                                            -firstOccur:                    `

    Get the first occurence of a rule based on a rule name.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (MPLocationDisplayRule *)firstOccur:(NSString *)ruleName;
    ```

    Swift

    ``` {.highlight}
    func firstOccur(_ ruleName: String!) -> MPLocationDisplayRule!
    ```

-   `                                                            -getListOfNamesOnZoomLevel:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPLocationDisplayRuleset
    ```

-   `                                                            -getIcon:                    `

    Method for retrieving the first occurence of a rules icon based on a
    set of rule names.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (UIImage *)getIcon:(NSArray *)ruleNames;
    ```

    Swift

    ``` {.highlight}
    func getIcon(_ ruleNames: [Any]!) -> UIImage!
    ```

-   `                                                            -fetchIcons                    `

    Fetch all the ruleset icons and store them into memory.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)fetchIcons;
    ```

    Swift

    ``` {.highlight}
    func fetchIcons()
    ```

MPLocationField
---------------

Undocumented

-   `                                                            type                    `

    Undocumented

-   `                                                            text                    `

    Undocumented

-   `                                                            value                    `

    Undocumented

MPLocationProperty
------------------

``` {.highlight}
@interface MPLocationProperty : NSObject
```

Creates a location property, holding a type identifier and a value

-   `                                                            propertyType                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPLocationProperty : NSObject
    ```

-   `                                                            propertyValue                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPLocationProperty : NSObject
    ```

-   `                                                            -initWithValue:andType:                    `

    Initialization that takes a type identifier and a value

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (id)initWithValue:(NSObject *)value andType:(NSString *)type;
    ```

    Swift

    ``` {.highlight}
    init!(value: NSObject!, andType type: String!)
    ```

MPLocationPropertyView
----------------------

``` {.highlight}
@interface MPLocationPropertyView : UIView
```

Creates a view designed to contain an icon and some content (default is
text) side by side.

-   `                                                            delegate                    `

    Delegate object

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (readwrite, atomic) id<MPLocationPropertyViewDelegate> delegate;
    ```

    Swift

    ``` {.highlight}
    weak var delegate: MPLocationPropertyViewDelegate! { get set }
    ```

-   `                                                            parentView                    `

    Parent view reference.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) UIView *parentView;
    ```

    Swift

    ``` {.highlight}
    var parentView: UIView! { get set }
    ```

-   `                                                            containerView                    `

    Container view, holding the icon and content view.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) UIView *containerView;
    ```

    Swift

    ``` {.highlight}
    var containerView: UIView! { get set }
    ```

-   `                                                            iconView                    `

    The icon view, which normally will be placed to the left.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) UIView *iconView;
    ```

    Swift

    ``` {.highlight}
    var iconView: UIView! { get set }
    ```

-   `                                                            contentView                    `

    The content view, which normally will be placed to the right.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) UIView *contentView;
    ```

    Swift

    ``` {.highlight}
    var contentView: UIView! { get set }
    ```

-   `                                                            locationProperty                    `

    The location property, that should be displayed in the view

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) MPLocationProperty *locationProperty;
    ```

    Swift

    ``` {.highlight}
    var locationProperty: MPLocationProperty! { get set }
    ```

-   `                                                            -initWithProperty:andIcon:useFontIcon:                    `

    Initialization with location property, icon and whether to interpret
    the icon value as a reference or a font icon value.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (id)initWithProperty:(MPLocationProperty *)property               andIcon:(NSString *)icon           useFontIcon:(BOOL)useFont;
    ```

    Swift

    ``` {.highlight}
    init!(property: MPLocationProperty!, andIcon icon: String!, useFontIcon useFont: Bool)
    ```

-   `                                                            -addToView:                    `

    Add the view to it’s parent, setting the width to its parents width.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)addToView:(UIView *)view;
    ```

    Swift

    ``` {.highlight}
    func add(to view: UIView!)
    ```

-   `                                                            -attachProperty:andIcon:                    `

    Attach a new location property to this view

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)attachProperty:(MPLocationProperty *)property andIcon:(NSString *)icon;
    ```

    Swift

    ``` {.highlight}
    func attach(_ property: MPLocationProperty!, andIcon icon: String!)
    ```

-   `                                                            -touchesBegan:withEvent:                    `

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)touchesBegan:(NSSet *)touches withEvent:(UIEvent *)event;
    ```

    Swift

    ``` {.highlight}
    func touchesBegan(_ touches: Set
    ```

-   `                                                            -touchesMoved:withEvent:                    `

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)touchesMoved:(NSSet *)touches withEvent:(UIEvent *)event;
    ```

    Swift

    ``` {.highlight}
    func touchesMoved(_ touches: Set
    ```

-   `                                                            -touchesEnded:withEvent:                    `

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)touchesEnded:(NSSet *)touches withEvent:(UIEvent *)event;
    ```

    Swift

    ``` {.highlight}
    func touchesEnded(_ touches: Set
    ```

-   `                                                            -touchesCancelled:withEvent:                    `

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)touchesCancelled:(NSSet *)touches withEvent:(UIEvent *)event;
    ```

    Swift

    ``` {.highlight}
    func touchesCancelled(_ touches: Set
    ```

MPLocationQuery
---------------

``` {.highlight}
@interface MPLocationQuery : NSObject
```

Locations query object used in conjunction with the MPLocationsProvider

-   `                                                            query                    `

    Free text search string

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (readwrite, strong, nonatomic) NSString *query;
    ```

    Swift

    ``` {.highlight}
    var query: String! { get set }
    ```

-   `                                                            venue                    `

    Venue filter. Supports the venue key provided in MPVenue.venueKey
    and MPLocation.venue

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSString *venue;
    ```

    Swift

    ``` {.highlight}
    var venue: String! { get set }
    ```

-   `                                                            building                    `

    Building filter. Supports the building key provided in
    MPLocation.building

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSString *building;
    ```

    Swift

    ``` {.highlight}
    var building: String! { get set }
    ```

-   `                                                            orderBy                    `

    Order by “relevance”, “name”, “roomId”, “venue”, “building”,
    “floor”. Default is “relevance”.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSString *orderBy;
    ```

    Swift

    ``` {.highlight}
    var orderBy: String! { get set }
    ```

-   `                                                            sortOrder                    `

    Apply a sort order. Can either be “asc” or “desc”. Default is “asc”

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSString *sortOrder;
    ```

    Swift

    ``` {.highlight}
    var sortOrder: String! { get set }
    ```

-   `                                                            near                    `

    Set a reference position coordinate. Distances to this position will
    affect the relevance of the search results. Only applies when
    ordering by relevance (default sort order).

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) MPPoint *near;
    ```

    Swift

    ``` {.highlight}
    var near: MPPoint! { get set }
    ```

-   `                                                            radius                    `

    Sets a radius limit in meters. Only to be used in conjunction with
    near property. This will cap the search results to the locations
    which distance to the near-position is less than specified as radius

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSNumber *radius;
    ```

    Swift

    ``` {.highlight}
    var radius: NSNumber! { get set }
    ```

-   `                                                            zoomLevel                    `

    Sets the zoom level. Currently has no effect on the search results.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSNumber *zoomLevel;
    ```

    Swift

    ``` {.highlight}
    var zoomLevel: NSNumber! { get set }
    ```

-   `                                                            floor                    `

    Floor filter. Supports the floor index provided in
    MPMapControl.currentFloor and MPLocation.floor

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSNumber *floor;
    ```

    Swift

    ``` {.highlight}
    var floor: NSNumber! { get set }
    ```

-   `                                                            mapExtend                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPLocationQuery : NSObject
    ```

-   `                                                            categories                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPLocationQuery : NSObject
    ```

-   `                                                            types                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPLocationQuery : NSObject
    ```

-   `                                                            solutionId                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPLocationQuery : NSObject
    ```

-   `                                                            arg                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPLocationQuery : NSObject
    ```

-   `                                                            max                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPLocationQuery : NSObject
    ```

-   `                                                            +queryWithUrl:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPLocationQuery : NSObject
    ```

MPLocationTableViewController
-----------------------------

``` {.highlight}
@interface MPLocationTableViewController    : UITableViewController <MPLocationPropertyViewDelegate>
```

Creates a specialized table view controller, designed to display a
locations details.

-   `                                                            location                    `

    The location that is to be displayed by the controller.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) MPLocation *location;
    ```

    Swift

    ``` {.highlight}
    var location: MPLocation! { get set }
    ```

-   `                                                            dataArray                    `

    The data array that will be fed by detail properties from the
    provided location.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSMutableArray *dataArray;
    ```

    Swift

    ``` {.highlight}
    var dataArray: NSMutableArray! { get set }
    ```

-   `                                                            headerView                    `

    The top header view.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) UIView *headerView;
    ```

    Swift

    ``` {.highlight}
    var headerView: UIView! { get set }
    ```

-   `                                                            footerView                    `

    The footer view.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) UIView *footerView;
    ```

    Swift

    ``` {.highlight}
    var footerView: UIView! { get set }
    ```

-   `                                                            -initWithLocation:                    `

    Initializes the table view using the provided location.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (id)initWithLocation:(MPLocation *)location;
    ```

    Swift

    ``` {.highlight}
    init!(location: MPLocation!)
    ```

-   `                                                            -locationPropertySelected:                    `

    Method that fires whenever a location property is selected.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)locationPropertySelected:(MPLocationProperty *)locationProperty;
    ```

    Swift

    ``` {.highlight}
    func locationPropertySelected(_ locationProperty: MPLocationProperty!)
    ```

MPLocationView
--------------

``` {.highlight}
@interface MPLocationView : UIScrollView <MPLocationPropertyViewDelegate>
```

Creates a specialized scroll view, designed to hold a locations details

-   `                                                            mpdelegate                    `

    Delegate protocol specification, to keep track of the tapping on a
    locations details.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (readwrite, atomic) id<MPLocationViewDelegate> mpdelegate;
    ```

    Swift

    ``` {.highlight}
    weak var mpdelegate: MPLocationViewDelegate! { get set }
    ```

-   `                                                            locationPropertyViews                    `

    The array of the locations properties views.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSMutableArray *locationPropertyViews;
    ```

    Swift

    ``` {.highlight}
    var locationPropertyViews: NSMutableArray! { get set }
    ```

-   `                                                            location                    `

    The location that will be displayed in the view as layouted
    properties.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) MPLocation *location;
    ```

    Swift

    ``` {.highlight}
    var location: MPLocation! { get set }
    ```

-   `                                                            -initWithLocation:                    `

    Initialization of the view using a location.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (id)initWithLocation:(MPLocation *)location;
    ```

    Swift

    ``` {.highlight}
    init!(location: MPLocation!)
    ```

-   `                                                            -addDetail:withType:andIcon:useFontIcon:                    `

    Add a simple text detail. This will add a location property view to
    this view.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)addDetail:(NSString *)value         withType:(NSString *)type          andIcon:(NSString *)icon      useFontIcon:(BOOL)useFont;
    ```

    Swift

    ``` {.highlight}
    func addDetail(_ value: String!, withType type: String!, andIcon icon: String!, useFontIcon useFont: Bool)
    ```

MPLocationsCache
----------------

Undocumented

-   `                                                            +setupForSolution:floor:language:readyHandler:                    `

    Undocumented

-   `                                                            +getCachedLocations:mapExtend:floor:language:completionHandler:                    `

    Undocumented

-   `                                                            +getCachedLocationsUsingQuery:language:completionHandler:                    `

    Undocumented

MPLocationsProvider
-------------------

``` {.highlight}
@interface MPLocationsProvider : NSObject <MPLocationsProvider>
```

Locations provider that defines a delegate and a method to initiate
fetching of locations from the provider.

-   `                                                            delegate                    `

    Locations provider delegate.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (readwrite, atomic) id<MPLocationsProviderDelegate> delegate;
    ```

    Swift

    ``` {.highlight}
    weak var delegate: MPLocationsProviderDelegate! { get set }
    ```

-   `                                                            -init                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPLocationsProvider : NSObject <MPLocationsProvider>
    ```

-   `                                                            -getLocationsAsync:language:                    `

    Method to initiate fetching of all locations from the provider in a
    specific translation.- parameter: solutionId The MapsIndoors
    solution ID.- parameter: language The language code. Must be one of
    the MapsIndoors solutions supported content languages.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)getLocationsAsync:(NSString *)solutionId language:(NSString *)language;
    ```

    Swift

    ``` {.highlight}
    func getLocationsAsync(_ solutionId: String!, language: String!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The MapsIndoors solution ID.      |
    | solutionId                        |                                   |
    |          `                        |                                   |
    +-----------------------------------+-----------------------------------+
    | `                                 | The language code. Must be one of |
    | language                          | the MapsIndoors solutions         |
    |        `                          | supported content languages.      |
    +-----------------------------------+-----------------------------------+

-   `                                                            -getLocationsAsync:language:completionHandler:                    `

    Method to initiate fetching of all locations from the provider in a
    specific translation.- parameter: solutionId The MapsIndoors
    solution ID.- parameter: language The language code. Must be one of
    the MapsIndoors solutions supported content languages.- parameter:
    handler The handler callback block. Contains the MPLocation object
    (can be nil) and an NSError object (can be nil).

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)getLocationsAsync:(NSString *)solutionId                 language:(NSString *)language        completionHandler:(mpLocationListHandlerBlockType)handler;
    ```

    Swift

    ``` {.highlight}
    func getLocationsAsync(_ solutionId: String!, language: String!, completionHandler handler: mpLocationListHandlerBlockType!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The MapsIndoors solution ID.      |
    | solutionId                        |                                   |
    |          `                        |                                   |
    +-----------------------------------+-----------------------------------+
    | `                                 | The language code. Must be one of |
    | language                          | the MapsIndoors solutions         |
    |        `                          | supported content languages.      |
    +-----------------------------------+-----------------------------------+
    | `                                 | The handler callback block.       |
    | handler                           | Contains the MPLocation object    |
    |       `                           | (can be nil) and an NSError       |
    |                                   | object (can be nil).              |
    +-----------------------------------+-----------------------------------+

-   `                                                            -getLocationDetailsAsync:withId:language:                    `

    Method to query a unique location from the provider based on an id.-
    parameter: solutionId The MapsIndoors solution ID.- parameter:
    locationId The MapsIndoors location ID.- parameter: language The
    language code. Must be one of the MapsIndoors solutions supported
    content languages.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)getLocationDetailsAsync:(NSString *)solutionId                         withId:(NSString *)locationId                       language:(NSString *)language;
    ```

    Swift

    ``` {.highlight}
    func getLocationDetailsAsync(_ solutionId: String!, withId locationId: String!, language: String!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The MapsIndoors solution ID.      |
    | solutionId                        |                                   |
    |          `                        |                                   |
    +-----------------------------------+-----------------------------------+
    | `                                 | The MapsIndoors location ID.      |
    | locationId                        |                                   |
    |          `                        |                                   |
    +-----------------------------------+-----------------------------------+
    | `                                 | The language code. Must be one of |
    | language                          | the MapsIndoors solutions         |
    |        `                          | supported content languages.      |
    +-----------------------------------+-----------------------------------+

-   `                                                            -getLocationDetailsAsync:withId:language:completionHandler:                    `

    Method to query a unique location from the provider based on an id.-
    parameter: solutionId The MapsIndoors solution ID.- parameter:
    locationId The MapsIndoors location ID.- parameter: language The
    language code. Must be one of the MapsIndoors solutions supported
    content languages.- parameter: handler The handler callback block.
    Contains the MPLocation object (can be nil) and an NSError object
    (can be nil).

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)getLocationDetailsAsync:(NSString *)solutionId                         withId:(NSString *)locationId                       language:(NSString *)language              completionHandler:(mpLocationDetailsHandlerBlockType)handler;
    ```

    Swift

    ``` {.highlight}
    func getLocationDetailsAsync(_ solutionId: String!, withId locationId: String!, language: String!, completionHandler handler: mpLocationDetailsHandlerBlockType!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The MapsIndoors solution ID.      |
    | solutionId                        |                                   |
    |          `                        |                                   |
    +-----------------------------------+-----------------------------------+
    | `                                 | The MapsIndoors location ID.      |
    | locationId                        |                                   |
    |          `                        |                                   |
    +-----------------------------------+-----------------------------------+
    | `                                 | The language code. Must be one of |
    | language                          | the MapsIndoors solutions         |
    |        `                          | supported content languages.      |
    +-----------------------------------+-----------------------------------+
    | `                                 | The handler callback block.       |
    | handler                           | Contains the MPLocation object    |
    |       `                           | (can be nil) and an NSError       |
    |                                   | object (can be nil).              |
    +-----------------------------------+-----------------------------------+

-   `                                                            -getLocationsUsingQueryAsync:language:                    `

    Method to query a subset of locations from the provider.- parameter:
    locationQuery Locations query object. Must at least define your
    MapsIndoors solution ID (MPLocationQuery.solutionId)- parameter:
    language The language code. Must be one of the MapsIndoors solutions
    supported content languages.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)getLocationsUsingQueryAsync:(MPLocationQuery *)locationQuery                           language:(NSString *)language;
    ```

    Swift

    ``` {.highlight}
    func getLocationsUsingQueryAsync(_ locationQuery: MPLocationQuery!, language: String!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | Locations query object. Must at   |
    | locationQuery                     | least define your MapsIndoors     |
    |             `                     | solution ID                       |
    |                                   | (MPLocationQuery.solutionId)      |
    +-----------------------------------+-----------------------------------+
    | `                                 | The language code. Must be one of |
    | language                          | the MapsIndoors solutions         |
    |        `                          | supported content languages.      |
    +-----------------------------------+-----------------------------------+

-   `                                                            -getLocationsUsingQueryAsync:language:completionHandler:                    `

    Method to query a subset of locations from the provider.- parameter:
    locationQuery Locations query object. Must at least define your
    MapsIndoors solution ID (MPLocationQuery.solutionId)- parameter:
    language The language code. Must be one of the MapsIndoors solutions
    supported content languages.- parameter: handler The handler
    callback block. Contains the MPLocationDataset object (can be nil)
    and an NSError object (can be nil).

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)getLocationsUsingQueryAsync:(MPLocationQuery *)locationQuery                           language:(NSString *)language                  completionHandler:(mpLocationListHandlerBlockType)handler;
    ```

    Swift

    ``` {.highlight}
    func getLocationsUsingQueryAsync(_ locationQuery: MPLocationQuery!, language: String!, completionHandler handler: mpLocationListHandlerBlockType!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | Locations query object. Must at   |
    | locationQuery                     | least define your MapsIndoors     |
    |             `                     | solution ID                       |
    |                                   | (MPLocationQuery.solutionId)      |
    +-----------------------------------+-----------------------------------+
    | `                                 | The language code. Must be one of |
    | language                          | the MapsIndoors solutions         |
    |        `                          | supported content languages.      |
    +-----------------------------------+-----------------------------------+
    | `                                 | The handler callback block.       |
    | handler                           | Contains the MPLocationDataset    |
    |       `                           | object (can be nil) and an        |
    |                                   | NSError object (can be nil).      |
    +-----------------------------------+-----------------------------------+

MPMIAPI
-------

Undocumented

-   `                                                            +baseUrl                    `

    Undocumented

MPMapControl
------------

``` {.highlight}
@interface MPMapControl : NSObject
```

Convenience class for setting up a Google map with MapsPeople venues,
buildings, locations and other map content.

-   `                                                            delegate                    `

    Delegate object containing data events

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (readwrite, nonatomic) id<MPMapControlDelegate> delegate;
    ```

    Swift

    ``` {.highlight}
    weak var delegate: MPMapControlDelegate! { get set }
    ```

-   `                                                            appData                    `

    Provides the contextual information needed for setting up a map with
    specific MapsPeople site data

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) MPAppData *appData;
    ```

    Swift

    ``` {.highlight}
    var appData: MPAppData! { get set }
    ```

-   `                                                            floorSelector                    `

    Floor selector UI element.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) MPFloorSelectorControl *floorSelector;
    ```

    Swift

    ``` {.highlight}
    var floorSelector: MPFloorSelectorControl! { get set }
    ```

-   `                                                            floorSelectorHidden                    `

    Hide floor selector UI element.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, nonatomic) BOOL floorSelectorHidden;
    ```

    Swift

    ``` {.highlight}
    var floorSelectorHidden: Bool { get set }
    ```

-   `                                                            infoSnippet                    `

    Location info-snippet UI element.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) MPInfoSnippetView *infoSnippet;
    ```

    Swift

    ``` {.highlight}
    var infoSnippet: MPInfoSnippetView! { get set }
    ```

-   `                                                            routingControl                    `

    Routing UI element.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) MPRoutingControl *routingControl;
    ```

    Swift

    ``` {.highlight}
    var routingControl: MPRoutingControl! { get set }
    ```

-   `                                                            layers                    `

    Online tile layers.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSMutableDictionary *layers;
    ```

    Swift

    ``` {.highlight}
    var layers: NSMutableDictionary! { get set }
    ```

-   `                                                            offlineLayers                    `

    Offline tile layers.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSMutableDictionary *offlineLayers;
    ```

    Swift

    ``` {.highlight}
    var offlineLayers: NSMutableDictionary! { get set }
    ```

-   `                                                            currentRoute                    `

    Latest routing query result.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) MPRoute *currentRoute;
    ```

    Swift

    ``` {.highlight}
    var currentRoute: MPRoute! { get set }
    ```

-   `                                                            loader                    `

    Load indicator that will show up on the map when setting up offline
    maps.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) MPLoadIndicator *loader;
    ```

    Swift

    ``` {.highlight}
    var loader: MPLoadIndicator! { get set }
    ```

-   `                                                            buildings                    `

    The buildings that belong to this map control.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) MPBuildingDataset *buildings;
    ```

    Swift

    ``` {.highlight}
    var buildings: MPBuildingDataset! { get set }
    ```

-   `                                                            solution                    `

    The solution that belong to this map control.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, nonatomic) MPSolution *solution;
    ```

    Swift

    ``` {.highlight}
    var solution: MPSolution! { get set }
    ```

-   `                                                            venueCollection                    `

    The venues that belong to this map control.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, nonatomic) MPVenueCollection *venueCollection;
    ```

    Swift

    ``` {.highlight}
    var venueCollection: MPVenueCollection! { get set }
    ```

-   `                                                            currentBuilding                    `

    The current building in focus.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) MPBuilding *currentBuilding;
    ```

    Swift

    ``` {.highlight}
    var currentBuilding: MPBuilding! { get set }
    ```

-   `                                                            locationData                    `

    The dataset containing current locations.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, nonatomic) MPLocationDataset *locationData;
    ```

    Swift

    ``` {.highlight}
    var locationData: MPLocationDataset! { get set }
    ```

-   `                                                            map                    `

    The Google map reference.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (nonatomic, strong) GMSMapView* map
    ```

-   `                                                            venue                    `

    The venue name, at which the map should target its view.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, nonatomic) NSString *venue;
    ```

    Swift

    ``` {.highlight}
    var venue: String! { get set }
    ```

-   `                                                            solutionId                    `

    The solution id, used for fetching venue/routing data.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (readonly, nonatomic) NSString *solutionId;
    ```

    Swift

    ``` {.highlight}
    var solutionId: String! { get }
    ```

-   `                                                            GMSMapViewDelegate                    `

    A reference to the google map delegate.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (readwrite, atomic) id GMSMapViewDelegate;
    ```

    Swift

    ``` {.highlight}
    weak var gmsMapViewDelegate: AnyObject! { get set }
    ```

-   `                                                            currentFloor                    `

    The current floor.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, nonatomic) NSNumber *currentFloor;
    ```

    Swift

    ``` {.highlight}
    var currentFloor: NSNumber! { get set }
    ```

-   `                                                            offline                    `

    The offline flag (default is false/online).

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) BOOL offline;
    ```

    Swift

    ``` {.highlight}
    var offline: Bool { get set }
    ```

-   `                                                            mapLocationsHidden                    `

    Whether or not to hide all map locations. Default is NO

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, nonatomic) BOOL mapLocationsHidden;
    ```

    Swift

    ``` {.highlight}
    var mapLocationsHidden: Bool { get set }
    ```

-   `                                                            currentCameraPosition                    `

    The current camera position.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) int *currentCameraPosition;
    ```

    Swift

    ``` {.highlight}
    var currentCameraPosition: UnsafeMutablePointer
    ```

-   `                                                            locationsProvider                    `

    Locations provider.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) id<MPLocationsProvider> locationsProvider;
    ```

    Swift

    ``` {.highlight}
    var locationsProvider: MPLocationsProviderProtocol! { get set }
    ```

-   `                                                            routingProvider                    `

    Routing provider.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) MPRoutingProvider *routingProvider;
    ```

    Swift

    ``` {.highlight}
    var routingProvider: MPRoutingProvider! { get set }
    ```

-   `                                                            solutionProvider                    `

    Solution provider.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) MPSolutionProvider *solutionProvider;
    ```

    Swift

    ``` {.highlight}
    var solutionProvider: MPSolutionProvider! { get set }
    ```

-   `                                                            venueProvider                    `

    Venue provider.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) MPVenueProvider *venueProvider;
    ```

    Swift

    ``` {.highlight}
    var venueProvider: MPVenueProvider! { get set }
    ```

-   `                                                            positionProviders                    `

    Position provider.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSArray *positionProviders;
    ```

    Swift

    ``` {.highlight}
    var positionProviders: [Any]! { get set }
    ```

-   `                                                            currentPosition                    `

    Current user location.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, nonatomic) MPPositionIndicator *currentPosition;
    ```

    Swift

    ``` {.highlight}
    var currentPosition: MPPositionIndicator! { get set }
    ```

-   `                                                            currentRouteOrigin                    `

    Current route origin location.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) MPLocation *currentRouteOrigin;
    ```

    Swift

    ``` {.highlight}
    var currentRouteOrigin: MPLocation! { get set }
    ```

-   `                                                            currentRouteDestination                    `

    Current route destination location.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) MPLocation *currentRouteDestination;
    ```

    Swift

    ``` {.highlight}
    var currentRouteDestination: MPLocation! { get set }
    ```

-   `                                                            selectedLocation                    `

    Current single location selection.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, nonatomic) MPLocation *selectedLocation;
    ```

    Swift

    ``` {.highlight}
    var selectedLocation: MPLocation! { get set }
    ```

-   `                                                            searchResult                    `

    Current location search result.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, nonatomic) NSArray *searchResult;
    ```

    Swift

    ``` {.highlight}
    var searchResult: [Any]! { get set }
    ```

-   `                                                            language                    `

    Current language.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, nonatomic) NSString *language;
    ```

    Swift

    ``` {.highlight}
    var language: String! { get set }
    ```

-   `                                                            buildingLocations                    `

    Building locations.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSArray *buildingLocations;
    ```

    Swift

    ``` {.highlight}
    var buildingLocations: [Any]! { get set }
    ```

-   `                                                            -initWithMap:                    `

    Initialize a MPMapControl object with given map.- parameter: map The
    map to build the map control on.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (id)initWithMap:(id)map;
    ```

    Swift

    ``` {.highlight}
    init!(map: Any!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The map to build the map control  |
    | map                               | on.                               |
    |   `                               |                                   |
    +-----------------------------------+-----------------------------------+

-   `                                                            -setupMapWith:venues:routing:                    `

    Setup the venue map with given providers.- parameter:
    locationsProvider The locations provider from which the MapControl
    is fetching its location data.- parameter: venueProvider The venue
    provider from which the MapControl is fetching its venue data.-
    parameter: routingProvider The routing provider to which the
    MapControl is performing its route requests.- parameter:
    appDataProvider The app data provider from which the MapControl is
    fetching app data, such as location display rules and location
    labelling.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)setupMapWith:(MPLocationsProvider *)locationsProvider              venues:(MPVenueProvider *)venueProvider             routing:(MPRoutingProvider *)routingProvider;
    ```

    Swift

    ``` {.highlight}
    func setupMap(with locationsProvider: MPLocationsProvider!, venues venueProvider: MPVenueProvider!, routing routingProvider: MPRoutingProvider!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The locations provider from which |
    | locationsProvider                 | the MapControl is fetching its    |
    |                 `                 | location data.                    |
    +-----------------------------------+-----------------------------------+
    | `                                 | The venue provider from which the |
    | venueProvider                     | MapControl is fetching its venue  |
    |             `                     | data.                             |
    +-----------------------------------+-----------------------------------+
    | `                                 | The routing provider to which the |
    | routingProvider                   | MapControl is performing its      |
    |               `                   | route requests.                   |
    +-----------------------------------+-----------------------------------+
    | `                                 | The app data provider from which  |
    | appDataProvider                   | the MapControl is fetching app    |
    |               `                   | data, such as location display    |
    |                                   | rules and location labelling.     |
    +-----------------------------------+-----------------------------------+

-   `                                                            -setupMapWith:                    `

    Setup the venue map with default providers based on given solution
    id (only venues).- parameter: solutionId The MapsPeople solution id.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)setupMapWith:(NSString *)solutionId;
    ```

    Swift

    ``` {.highlight}
    func setupMap(with solutionId: String!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The MapsPeople solution id.       |
    | solutionId                        |                                   |
    |          `                        |                                   |
    +-----------------------------------+-----------------------------------+

-   `                                                            -setupMapWith:site:                    `

    Setup the venue map with default providers based on given solution
    id (venues, locations and routing if accessible).- parameter:
    solutionId The MapsPeople solution id.- parameter: venueName The
    MapsPeople site id, used for locations and routing.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)setupMapWith:(NSString *)solutionId site:(NSString *)venueName;
    ```

    Swift

    ``` {.highlight}
    func setupMap(with solutionId: String!, site venueName: String!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The MapsPeople solution id.       |
    | solutionId                        |                                   |
    |          `                        |                                   |
    +-----------------------------------+-----------------------------------+
    | `                                 | The MapsPeople site id, used for  |
    | venueName                         | locations and routing.            |
    |         `                         |                                   |
    +-----------------------------------+-----------------------------------+

-   `                                                            -setupMapWith:site:locations:venues:routing:                    `

    Setup the venue map with default providers based on given solution
    id (venues, locations and routing if accessible).- parameter:
    solutionId The MapsPeople solution id.- parameter: venueName The
    MapsPeople site id, used for locations and routing.- parameter:
    locationsProvider The locations provider from which the MapControl
    is fetching its location data.- parameter: venueProvider The venue
    provider from which the MapControl is fetching its venue data.-
    parameter: routingProvider The routing provider to which the
    MapControl is performing its route requests.- parameter:
    appDataProvider The app data provider from which the MapControl is
    fetching app data, such as location display rules and location
    labelling.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)setupMapWith:(NSString *)solutionId                site:(NSString *)venueName           locations:(MPLocationsProvider *)locationsProvider              venues:(MPVenueProvider *)venueProvider             routing:(MPRoutingProvider *)routingProvider;
    ```

    Swift

    ``` {.highlight}
    func setupMap(with solutionId: String!, site venueName: String!, locations locationsProvider: MPLocationsProvider!, venues venueProvider: MPVenueProvider!, routing routingProvider: MPRoutingProvider!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The MapsPeople solution id.       |
    | solutionId                        |                                   |
    |          `                        |                                   |
    +-----------------------------------+-----------------------------------+
    | `                                 | The MapsPeople site id, used for  |
    | venueName                         | locations and routing.            |
    |         `                         |                                   |
    +-----------------------------------+-----------------------------------+
    | `                                 | The locations provider from which |
    | locationsProvider                 | the MapControl is fetching its    |
    |                 `                 | location data.                    |
    +-----------------------------------+-----------------------------------+
    | `                                 | The venue provider from which the |
    | venueProvider                     | MapControl is fetching its venue  |
    |             `                     | data.                             |
    +-----------------------------------+-----------------------------------+
    | `                                 | The routing provider to which the |
    | routingProvider                   | MapControl is performing its      |
    |               `                   | route requests.                   |
    +-----------------------------------+-----------------------------------+
    | `                                 | The app data provider from which  |
    | appDataProvider                   | the MapControl is fetching app    |
    |               `                   | data, such as location display    |
    |                                   | rules and location labelling.     |
    +-----------------------------------+-----------------------------------+

-   `                                                            -getLocation:                    `

    Get the location that wraps the given marker.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (MPLocation *)getLocation:(id)marker;
    ```

    Swift

    ``` {.highlight}
    func getLocation(_ marker: Any!) -> MPLocation!
    ```

-   `                                                            -getLocationById:                    `

    Get location by string id reference.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (MPLocation *)getLocationById:(NSString *)idString;
    ```

    Swift

    ``` {.highlight}
    func getLocationById(_ idString: String!) -> MPLocation!
    ```

-   `                                                            -routingFrom:to:by:avoid:depart:arrive:                    `

    Execute routing from one given to another given location

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)routingFrom:(MPLocation *)from                 to:(MPLocation *)to                 by:(NSString *)travelMode              avoid:(NSArray *)restrictions             depart:(NSDate *)departureTime             arrive:(NSDate *)arrivalTime;
    ```

    Swift

    ``` {.highlight}
    func routing(from: MPLocation!, to: MPLocation!, by travelMode: String!, avoid restrictions: [Any]!, depart departureTime: Date!, arrive arrivalTime: Date!)
    ```

-   `                                                            -showSearchResult:                    `

    Show a given array of locations. The display will override any zoom
    level condition made from display rules. Clear the locations by
    calling again with \[showLocations:nil fitBounds:NO\]

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)showSearchResult:(BOOL)fitBounds;
    ```

    Swift

    ``` {.highlight}
    func showSearchResult(_ fitBounds: Bool)
    ```

-   `                                                            -addDisplayRule:                    `

    Add a location display rule - you need to know the categories
    applied to the map locationsThe display rule name corresponds to the
    location category we want the rule to apply forAdding a rule with
    name nil, will apply generally to all categoriesAdding a rule with a
    name, will override a more general ruleDisplay rules are usually set
    in the MapsIndoors CMS, so in most cases you should not worry about
    overriding the display rule settings programatically- parameter:
    rule Display rule object

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)addDisplayRule:(MPLocationDisplayRule *)rule;
    ```

    Swift

    ``` {.highlight}
    func add(_ rule: MPLocationDisplayRule!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | Display rule object               |
    | rule                              |                                   |
    |    `                              |                                   |
    +-----------------------------------+-----------------------------------+

-   `                                                            -addDisplayRules:                    `

    Add multiple display rules. Display rules are usually set by admin,
    so in most cases you should not worry about overriding the display
    rule settings programatically

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)addDisplayRules:(NSArray<MPLocationDisplayRule> *)rules;
    ```

    Swift

    ``` {.highlight}
    func addDisplayRules(_ rules: [Any]!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | Array of display rule object      |
    | rules                             |                                   |
    |     `                             |                                   |
    +-----------------------------------+-----------------------------------+

-   `                                                            -addPositionProvider:                    `

    Adds/sets a position provider allowing user location updates to the
    map

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)addPositionProvider:(id<MPPositionProvider>)provider;
    ```

    Swift

    ``` {.highlight}
    func addPositionProvider(_ provider: MPPositionProvider!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | &lt;                              |
    | provider                          |                                   |
    |        `                          | [[]{.header-anchor}](#provider-de |
    |                                   | scription-gt){.anchor}            |
    |                                   | provider description\#&gt;        |
    +-----------------------------------+-----------------------------------+

-   `                                                            -clearUnusedTileCache                    `

    Convenience method to clear the tile cache used by Google Maps in
    order to render MapsIndoors layers

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)clearUnusedTileCache;
    ```

    Swift

    ``` {.highlight}
    func clearUnusedTileCache()
    ```

-   `                                                            -clearMap                    `

    Clears the map, removes search results and selected location

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)clearMap;
    ```

    Swift

    ``` {.highlight}
    func clearMap()
    ```

-   `                                                            -showUserPosition:                    `

    Enables or disables the default visualization of the users location

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)showUserPosition:(BOOL)show;
    ```

    Swift

    ``` {.highlight}
    func showUserPosition(_ show: Bool)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | Boolean flag                      |
    | show                              |                                   |
    |    `                              |                                   |
    +-----------------------------------+-----------------------------------+

-   `                                                            -showInfoSnippetWithLocation:                    `

    Show info snippet from the bottom of the map view.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)showInfoSnippetWithLocation:(MPLocation *)location;
    ```

    Swift

    ``` {.highlight}
    func showInfoSnippet(with location: MPLocation!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | MapsIndoors Location object       |
    | location                          |                                   |
    |        `                          |                                   |
    +-----------------------------------+-----------------------------------+

-   `                                                            +solutionId                    `

    Static solution id getter

    #### Declaration

    Objective-C

    ``` {.highlight}
    + (NSString *)solutionId;
    ```

    Swift

    ``` {.highlight}
    class func solutionId() -> String!
    ```

    #### Return Value

    Solution id string

-   `                                                            -goTo:                    `

    Moves the map camera to the location specified

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)goTo:(MPLocation *)location;
    ```

    Swift

    ``` {.highlight}
    func go(to location: MPLocation!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | MapsIndoors Location object       |
    | location                          |                                   |
    |        `                          |                                   |
    +-----------------------------------+-----------------------------------+

-   `                                                            +getSolution                    `

    Static solution getter

    #### Declaration

    Objective-C

    ``` {.highlight}
    + (MPSolution *)getSolution;
    ```

    Swift

    ``` {.highlight}
    class func getSolution() -> MPSolution!
    ```

    #### Return Value

    Solution object

MPMapExtend
-----------

Undocumented

-   `                                                            -initWithGMSBounds:                    `

    Undocumented

-   `                                                            south                    `

    Undocumented

-   `                                                            west                    `

    Undocumented

-   `                                                            north                    `

    Undocumented

-   `                                                            east                    `

    Undocumented

MPMapStyle
----------

``` {.highlight}
@interface MPMapStyle
```

Map style (used by MapsPeoples services)

-   `                                                            folder                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPMapStyle
    ```

-   `                                                            displayName                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPMapStyle
    ```

MPMenuItem
----------

Undocumented

-   `                                                            categoryKey                    `

    Undocumented

-   `                                                            menuImageUrl                    `

    Undocumented

-   `                                                            iconUrl                    `

    Undocumented

MPMessage
---------

Undocumented

-   `                                                            messageId                    `

    Undocumented

-   `                                                            beaconId                    `

    Undocumented

-   `                                                            locationId                    `

    Undocumented

-   `                                                            title                    `

    Undocumented

-   `                                                            content                    `

    Undocumented

-   `                                                            imagePath                    `

    Undocumented

-   `                                                            image                    `

    Undocumented

-   `                                                            geometry                    `

    Undocumented

-   `                                                            deliveredDate                    `

    Undocumented

MPMessageDataset
----------------

``` {.highlight}
@interface MPMessageDataset
```

Dataset that holds Messages, searched results and a filter.

-   `                                                            list                    `

    Main Message array in the data set.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (readwrite, strong, nonatomic) NSArray<MPMessage> *list;
    ```

    Swift

    ``` {.highlight}
    var list: [Any]! { get set }
    ```

MPMessagesProvider
------------------

``` {.highlight}
@interface MPMessagesProvider : NSObject <MPMessagesProvider>
```

Messages provider that defines a delegate and a method to initiate
fetching of Messages from the provider.

-   `                                                            delegate                    `

    Messages provider delegate.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (readwrite, atomic) id<MPMessageProviderDelegate> delegate;
    ```

    Swift

    ``` {.highlight}
    weak var delegate: MPMessageProviderDelegate! { get set }
    ```

-   `                                                            -init                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPMessagesProvider : NSObject <MPMessagesProvider>
    ```

-   `                                                            -getMessagesAsync:language:completionHandler:                    `

    Method to initiate fetching of all Messages from the provider in a
    specific translation.- parameter: solutionId The MapsIndoors
    solution ID.- parameter: language The language code. Must be one of
    the MapsIndoors solutions supported content languages.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)getMessagesAsync:(NSString *)solutionId                language:(NSString *)language       completionHandler:(mpMessageListHandlerBlockType)handler;
    ```

    Swift

    ``` {.highlight}
    func getMessagesAsync(_ solutionId: String!, language: String!, completionHandler handler: mpMessageListHandlerBlockType!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The MapsIndoors solution ID.      |
    | solutionId                        |                                   |
    |          `                        |                                   |
    +-----------------------------------+-----------------------------------+
    | `                                 | The language code. Must be one of |
    | language                          | the MapsIndoors solutions         |
    |        `                          | supported content languages.      |
    +-----------------------------------+-----------------------------------+

-   `                                                            -getMessageDetailsAsync:withId:language:completionHandler:                    `

    Method to query a unique Message from the provider based on an id.-
    parameter: solutionId The MapsIndoors solution ID.- parameter:
    MessageId The MapsIndoors Message ID.- parameter: language The
    language code. Must be one of the MapsIndoors solutions supported
    content languages.- parameter: handler The handler callback block.
    Contains the MPMessage object (can be nil) and an NSError object
    (can be nil).

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)getMessageDetailsAsync:(NSString *)solutionId                        withId:(NSString *)messageId                      language:(NSString *)language             completionHandler:(mpMessageDetailsHandlerBlockType)handler;
    ```

    Swift

    ``` {.highlight}
    func getMessageDetailsAsync(_ solutionId: String!, withId messageId: String!, language: String!, completionHandler handler: mpMessageDetailsHandlerBlockType!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The MapsIndoors solution ID.      |
    | solutionId                        |                                   |
    |          `                        |                                   |
    +-----------------------------------+-----------------------------------+
    | `                                 | The MapsIndoors Message ID.       |
    | MessageId                         |                                   |
    |         `                         |                                   |
    +-----------------------------------+-----------------------------------+
    | `                                 | The language code. Must be one of |
    | language                          | the MapsIndoors solutions         |
    |        `                          | supported content languages.      |
    +-----------------------------------+-----------------------------------+
    | `                                 | The handler callback block.       |
    | handler                           | Contains the MPMessage object     |
    |       `                           | (can be nil) and an NSError       |
    |                                   | object (can be nil).              |
    +-----------------------------------+-----------------------------------+

MPNotificationsHelper
---------------------

Undocumented

-   `                                                            +setupNotificationsForApp:withLocationManager:                    `

    Undocumented

-   `                                                            +fetchMessagesForSolution:completionHandler:messageHandler:                    `

    Undocumented

-   `                                                            +locationManager:didEnterRegion:                    `

    Undocumented

-   `                                                            +monitorRegionForMessage:withLocationManager:                    `

    Undocumented

MPOfflineDataHelper
-------------------

Undocumented

-   `                                                            offlineDataTimestamp                    `

    Undocumented

MPOnlineTileLayer
-----------------

``` {.highlight}
@interface MPOnlineTileLayer : NSObject {  int _balancingIndex;}
```

Online tile layer. Used to serve a google map with a MapsPeople online
tileservice.

-   `                                                            _balancingIndex                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPOnlineTileLayer : NSObject {  int _balancingIndex;}
    ```

-   `                                                            layer                    `

    The google GMSTileLayer object.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) int *layer;
    ```

    Swift

    ``` {.highlight}
    var layer: UnsafeMutablePointer
    ```

-   `                                                            layerType                    `

    Layer type / identifier.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, nonatomic) NSString *layerType;
    ```

    Swift

    ``` {.highlight}
    var layerType: String! { get set }
    ```

-   `                                                            -initWithLayer:                    `

    Instantiate using a layer type.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (id)initWithLayer:(NSString *)layerType;
    ```

    Swift

    ``` {.highlight}
    init!(layer layerType: String!)
    ```

-   `                                                            -init                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPOnlineTileLayer : NSObject {  int _balancingIndex;}
    ```

-   `                                                            -getTileUrl:x:y:                    `

    Helper method to generate the correct url, based on level and layer
    type.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (NSString *)getTileUrl:(NSUInteger)zoom x:(NSUInteger)x y:(NSUInteger)y;
    ```

    Swift

    ``` {.highlight}
    func getTileUrl(_ zoom: UInt, x: UInt, y: UInt) -> String!
    ```

-   `                                                            -addToMap:                    `

    Add the layer to a map.- parameter: map The Google map view.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)addToMap:(id)map;
    ```

    Swift

    ``` {.highlight}
    func add(toMap map: Any!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The Google map view.              |
    | map                               |                                   |
    |   `                               |                                   |
    +-----------------------------------+-----------------------------------+

MPOpeningHours
--------------

``` {.highlight}
@interface MPOpeningHours
```

Opening hours item data model.

-   `                                                            dayOfWeek                    `

    Day of week integer. 0-6 compares to Monday-Sunday

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) int dayOfWeek;
    ```

    Swift

    ``` {.highlight}
    var dayOfWeek: Int32 { get set }
    ```

-   `                                                            opens                    `

    Opening time of day - as free string representation.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSString *opens;
    ```

    Swift

    ``` {.highlight}
    var opens: String! { get set }
    ```

-   `                                                            close                    `

    Closing time of day - as free string representation.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSString *close;
    ```

    Swift

    ``` {.highlight}
    var close: String! { get set }
    ```

-   `                                                            validFrom                    `

    Start date for this opening hours item.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSDate *validFrom;
    ```

    Swift

    ``` {.highlight}
    var validFrom: Date! { get set }
    ```

-   `                                                            validThrough                    `

    End date for this opening hours item.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSDate *validThrough;
    ```

    Swift

    ``` {.highlight}
    var validThrough: Date! { get set }
    ```

MPPersistentCacheGMSTileLayer
-----------------------------

Undocumented

-   `                                                            -initWithVenue:andFloor:                    `

    Instantiate using a venue and a floor object.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (id)initWithVenue:(MPVenue *)venue andFloor:(MPFloor *)floor;
    ```

    Swift

    ``` {.highlight}
    init!(venue: MPVenue!, andFloor floor: MPFloor!)
    ```

-   `                                                            urlTemplate                    `

    The url template string to use when fetching tiles. Must have format
    “prefix{param\_1}infix{param\_N}suffix”, e.g.:
    “http://tiles.url.com/{floor}/{x}/{y}/{zoom}.png”By default the
    implementation of this tilelayer will look for
    {venueId}/{style}/{buildingId}/{floor}/{z}/{x}/{y}, where x, y and z
    is mandatory.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, nonatomic) NSString *urlTemplate;
    ```

    Swift

    ``` {.highlight}
    var urlTemplate: String! { get set }
    ```

-   `                                                            floor                    `

    Floor property

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, nonatomic) MPFloor *floor;
    ```

    Swift

    ``` {.highlight}
    var floor: MPFloor! { get set }
    ```

-   `                                                            venueId                    `

    Venue id

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSNumber *venueId;
    ```

    Swift

    ``` {.highlight}
    var venueId: NSNumber! { get set }
    ```

-   `                                                            subdomains                    `

    Array of strings identifying subdomains. If this property is set,
    and the url template contains the parameter {subdomain}, the
    tilelayer will do round-robin over the subdomains specified.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSArray *subdomains;
    ```

    Swift

    ``` {.highlight}
    var subdomains: [Any]! { get set }
    ```

-   `                                                            -parseUrl                    `

    Parse the url template. Normally, this is done automatically

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)parseUrl;
    ```

    Swift

    ``` {.highlight}
    func parseUrl()
    ```

MPPoint
-------

``` {.highlight}
@interface MPPoint : MPGeometry
```

Basic point geometry class.

-   `                                                            -initWithLat:lon:                    `

    2d point geometry initialization.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (id)initWithLat:(double)latitude lon:(double)longitude;
    ```

    Swift

    ``` {.highlight}
    init!(lat latitude: Double, lon longitude: Double)
    ```

-   `                                                            -initWithLat:lon:zValue:                    `

    3d point geometry initialization.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (id)initWithLat:(double)latitude lon:(double)longitude zValue:(double)z;
    ```

    Swift

    ``` {.highlight}
    init!(lat latitude: Double, lon longitude: Double, zValue z: Double)
    ```

-   `                                                            -lat                    `

    Get the latitude component.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (double)lat;
    ```

    Swift

    ``` {.highlight}
    func lat() -> Double
    ```

-   `                                                            -lng                    `

    Get the longitude component.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (double)lng;
    ```

    Swift

    ``` {.highlight}
    func lng() -> Double
    ```

-   `                                                            -z                    `

    Get the z / altitude component.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (double)z;
    ```

    Swift

    ``` {.highlight}
    func z() -> Double
    ```

-   `                                                            -zIndex                    `

    Get the z component as a rounded index.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (int)zIndex;
    ```

    Swift

    ``` {.highlight}
    func zIndex() -> Int32
    ```

-   `                                                            -setZValue:                    `

    Set the z / altitude component.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)setZValue:(double)z;
    ```

    Swift

    ``` {.highlight}
    func setZValue(_ z: Double)
    ```

-   `                                                            -distanceTo:                    `

    Calculate the 2d geo distance to another point.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (double)distanceTo:(MPPoint *)point;
    ```

    Swift

    ``` {.highlight}
    func distance(to point: MPPoint!) -> Double
    ```

-   `                                                            -latLngString                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPPoint : MPGeometry
    ```

-   `                                                            +parse:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPPoint : MPGeometry
    ```

-   `                                                            -getCoordinate                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPPoint : MPGeometry
    ```

MPPositionIndicator
-------------------

Undocumented

-   `                                                            probability                    `

    Undocumented

-   `                                                            bearing                    `

    Undocumented

-   `                                                            position                    `

    Undocumented

-   `                                                            map                    `

    Undocumented

-   `                                                            showProbability                    `

    Undocumented

-   `                                                            -initWithPoint:andName:                    `

    Undocumented

-   `                                                            -updateView:floor:displayRules:                    `

    Undocumented

MPPositionResult
----------------

Undocumented

-   `                                                            geometry                    `

    Undocumented

-   `                                                            properties                    `

    Undocumented

-   `                                                            type                    `

    Undocumented

-   `                                                            provider                    `

    Undocumented

-   `                                                            -getProbability                    `

    Undocumented

-   `                                                            -getRoundtrip                    `

    Undocumented

-   `                                                            -getHeadingDegrees                    `

    Undocumented

-   `                                                            -getAge                    `

    Undocumented

-   `                                                            -getFloor                    `

    Undocumented

-   `                                                            -setProbability:                    `

    Undocumented

-   `                                                            -setHeadingDegrees:                    `

    Undocumented

MPRoute
-------

``` {.highlight}
@interface MPRoute
```

Routing is under development. The route model contains the route
components: The start and end point, the overall route distance, the
duration using the chosen vehicle(s), the actual route components
(routeLegs) containing the route geometry and actions (shifts, turns,
climbs etc.) performed to get to the destination point. Typically this
object is not manually instantiated, but returns as a result from a
routing provider (MPRoutingProvider).

-   `                                                            copyrights                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPRoute
    ```

-   `                                                            legs                    `

    The route legs: the different route components. Typically a route
    from 1st floor to 2nd floor will consist of two route legs.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSMutableArray *legs;
    ```

-   `                                                            overview_polyline                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPRoute
    ```

-   `                                                            summary                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPRoute
    ```

-   `                                                            warnings                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPRoute
    ```

-   `                                                            bounds                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPRoute
    ```

-   `                                                            distance                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPRoute
    ```

-   `                                                            duration                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPRoute
    ```

-   `                                                            restrictions                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPRoute
    ```

-   `                                                            venue                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPRoute
    ```

-   `                                                            polylines                    `

    The route geometry as Google Maps polylines.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSMutableArray *polylines;
    ```

-   `                                                            polylineStrokes                    `

    The route geometry as Google Maps polylines (line stroke imitation).

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSMutableArray *polylineStrokes;
    ```

-   `                                                            -addToMap:highlightFloor:                    `

    Draw the route on the map.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)addToMap:(id)map highlightFloor:(int)floorIndex;
    ```

    Swift

    ``` {.highlight}
    func add(toMap map: Any!, highlightFloor floorIndex: Int32)
    ```

-   `                                                            -clearRouteDraw                    `

    Clear the route on the map.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)clearRouteDraw;
    ```

    Swift

    ``` {.highlight}
    func clearDraw()
    ```

-   `                                                            -showAll                    `

    Make the route fully visible on the map.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)showAll;
    ```

    Swift

    ``` {.highlight}
    func showAll()
    ```

MPRouteBounds
-------------

Undocumented

-   `                                                            northeast                    `

    Undocumented

-   `                                                            southwest                    `

    Undocumented

MPRouteCoordinate
-----------------

Undocumented

-   `                                                            zLevel                    `

    Undocumented

-   `                                                            lat                    `

    Undocumented

-   `                                                            lng                    `

    Undocumented

-   `                                                            floor_name                    `

    Undocumented

MPRouteInfo
-----------

``` {.highlight}
@interface MPRouteInfo
```

Rounting is under development.

-   `                                                            took                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPRouteInfo
    ```

-   `                                                            tookGeocoding                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPRouteInfo
    ```

MPRouteInstructions
-------------------

Undocumented

-   `                                                            indications                    `

    Undocumented

-   `                                                            descriptions                    `

    Undocumented

-   `                                                            distances                    `

    Undocumented

-   `                                                            -getDirectionChanges                    `

    Undocumented

MPRouteLeg
----------

``` {.highlight}
@interface MPRouteLeg
```

Route leg model. A route model will consist of one ore more route legs.
Typically a route from 1st floor to 2nd floor will consist of two route
legs. Thus, a route leg defines a continueus route part within the same
floor and/or building and/or vehicle.

-   `                                                            distance                    `

    The routeleg distance

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSNumber *distance;
    ```

    Swift

    ``` {.highlight}
    var distance: NSNumber! { get set }
    ```

-   `                                                            duration                    `

    The routeleg duration

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSNumber *duration;
    ```

    Swift

    ``` {.highlight}
    var duration: NSNumber! { get set }
    ```

-   `                                                            start_location                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPRouteLeg
    ```

-   `                                                            end_location                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPRouteLeg
    ```

-   `                                                            start_address                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPRouteLeg
    ```

-   `                                                            end_address                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPRouteLeg
    ```

-   `                                                            steps                    `

    The array of route actions in this route leg.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSMutableArray *steps;
    ```

    Swift

    ``` {.highlight}
    var steps: NSMutableArray! { get set }
    ```

MPRouteProperty
---------------

Undocumented

-   `                                                            text                    `

    Undocumented

-   `                                                            value                    `

    Undocumented

MPRouteResult
-------------

Undocumented

-   `                                                            routes                    `

    Undocumented

-   `                                                            status                    `

    Undocumented

MPRouteStep
-----------

Undocumented

-   `                                                            travel_mode                    `

    Undocumented

-   `                                                            end_location                    `

    Undocumented

-   `                                                            start_location                    `

    Undocumented

-   `                                                            distance                    `

    Undocumented

-   `                                                            duration                    `

    Undocumented

-   `                                                            maneuver                    `

    Undocumented

-   `                                                            polyline                    `

    Undocumented

-   `                                                            geometry                    `

    Undocumented

-   `                                                            html_instructions                    `

    Undocumented

-   `                                                            highway                    `

    Undocumented

-   `                                                            routeContext                    `

    Undocumented

-   `                                                            steps                    `

    Undocumented

-   `                                                            transit_details                    `

    Undocumented

-   `                                                            -getActionPoint                    `

    Undocumented

-   `                                                            -getStartFloorName                    `

    Undocumented

MPRoutingControl
----------------

Undocumented

-   `                                                            delegate                    `

    Undocumented

-   `                                                            currentActionIndex                    `

    Undocumented

-   `                                                            currentRouteLegIndex                    `

    Undocumented

-   `                                                            route                    `

    Undocumented

-   `                                                            parent                    `

    Undocumented

-   `                                                            nextButton                    `

    Undocumented

-   `                                                            cancelButton                    `

    Undocumented

-   `                                                            infoView                    `

    Undocumented

-   `                                                            destination                    `

    Undocumented

-   `                                                            currentTotalDistance                    `

    Undocumented

-   `                                                            actionLocations                    `

    Undocumented

-   `                                                            actions                    `

    Undocumented

-   `                                                            currentActionLocation                    `

    Undocumented

-   `                                                            map                    `

    Undocumented

-   `                                                            +actionIcon                    `

    Undocumented

-   `                                                            +setActionIcon:                    `

    Undocumented

-   `                                                            -initOnMap:                    `

    Undocumented

-   `                                                            -initOnView:                    `

    Undocumented

-   `                                                            -addToView:                    `

    Undocumented

-   `                                                            -turnByTurn:                    `

    Undocumented

-   `                                                            -routeOverview:                    `

    Undocumented

-   `                                                            -routeOverview:floor:                    `

    Undocumented

-   `                                                            -notifyNewTurn:                    `

    Undocumented

-   `                                                            -doTurn                    `

    Undocumented

-   `                                                            -doTurn:                    `

    Undocumented

-   `                                                            -showAction:                    `

    Undocumented

-   `                                                            -showActionByMarker:                    `

    Undocumented

-   `                                                            -close                    `

    Undocumented

-   `                                                            -getAction:routeLegIndex:                    `

    Undocumented

MPRoutingProvider
-----------------

Undocumented

-   `                                                            delegate                    `

    Undocumented

-   `                                                            solutionId                    `

    Undocumented

-   `                                                            googleApiKey                    `

    Undocumented

-   `                                                            venue                    `

    Undocumented

-   `                                                            vehicle                    `

    Undocumented

-   `                                                            language                    `

    Undocumented

-   `                                                            -initWithArea:                    `

    Undocumented

-   `                                                            -initWithMapsIndoorsSolutionId:googleApiKey:                    `

    Undocumented

-   `                                                            -getRoutingFrom:to:by:avoid:                    `

    Undocumented

-   `                                                            -getRoutingFrom:to:by:avoid:depart:arrive:                    `

    Undocumented

-   `                                                            -getGoogleRoutingFrom:to:by:avoid:                    `

    Undocumented

-   `                                                            -getGoogleRoutingFrom:to:by:avoid:depart:arrive:                    `

    Undocumented

-   `                                                            -getRoutingFrom:to:by:avoid:completionHandler:                    `

    Undocumented

-   `                                                            -getRoutingFrom:to:by:avoid:depart:arrive:completionHandler:                    `

    Undocumented

-   `                                                            -getGoogleRoutingFrom:to:by:avoid:completionHandler:                    `

    Undocumented

-   `                                                            -getGoogleRoutingFrom:to:by:avoid:depart:arrive:completionHandler:                    `

    Undocumented

MPSDKVersion
------------

Undocumented

-   `                                                            +versionString                    `

    Undocumented

MPSite
------

``` {.highlight}
@interface MPSite
```

Site / app class. Holds a basic identifier.

-   `                                                            name                    `

    Site name / identifier.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSString *name;
    ```

    Swift

    ``` {.highlight}
    var name: UnsafeMutablePointer
    ```

MPSolution
----------

``` {.highlight}
@interface MPSolution
```

The solution model holds data about the buildings and floors in a
solution, plus additional meta-data.

-   `                                                            name                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPSolution
    ```

-   `                                                            defaultLanguage                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPSolution
    ```

-   `                                                            availableLanguages                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPSolution
    ```

-   `                                                            types                    `

    Array of types in this solution.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSArray<MPType> *types;
    ```

    Swift

    ``` {.highlight}
    var types: [Any]! { get set }
    ```

-   `                                                            -getTypeUrl:                    `

    Get a URL for a given type.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (NSString *)getTypeUrl:(NSString *)arg;
    ```

    Swift

    ``` {.highlight}
    func getTypeUrl(_ arg: String!) -> String!
    ```

MPSolutionProvider
------------------

``` {.highlight}
@interface MPSolutionProvider : NSObject
```

Solution provider interface, that defines a delegate and a method for
solution queries.

-   `                                                            delegate                    `

    Solution provider delegate.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) id<MPSolutionProviderDelegate> delegate;
    ```

    Swift

    ``` {.highlight}
    var delegate: MPSolutionProviderDelegate! { get set }
    ```

-   `                                                            -getSolutionAsync:                    `

    Get solution from this provider.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)getSolutionAsync:(NSString *)solutionId;
    ```

    Swift

    ``` {.highlight}
    func getSolutionAsync(_ solutionId: String!)
    ```

-   `                                                            -getSolutionAsync:completionHandler:                    `

    Get solution from this provider and supply a callback handler
    function.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)getSolutionAsync:(NSString *)solutionId       completionHandler:(mpSolutionHandlerBlockType)completionHandler;
    ```

    Swift

    ``` {.highlight}
    func getSolutionAsync(_ solutionId: String!, completionHandler: mpSolutionHandlerBlockType!)
    ```

MPStringCache
-------------

Undocumented

-   `                                                            +saveDataFor:value:solutionId:                    `

    Undocumented

-   `                                                            +getDataFor:solutionId:                    `

    Undocumented

MPTokenSet
----------

Undocumented

-   `                                                            key                    `

    Undocumented

-   `                                                            secret                    `

    Undocumented

MPTransitAgency
---------------

Undocumented

-   `                                                            name                    `

    Undocumented

-   `                                                            url                    `

    Undocumented

-   `                                                            phone                    `

    Undocumented

MPTransitDetails
----------------

Undocumented

-   `                                                            line                    `

    Undocumented

-   `                                                            arrival_stop                    `

    Undocumented

-   `                                                            departure_stop                    `

    Undocumented

-   `                                                            arrival_time                    `

    Undocumented

-   `                                                            departure_time                    `

    Undocumented

-   `                                                            headsign                    `

    Undocumented

-   `                                                            headway                    `

    Undocumented

-   `                                                            num_stops                    `

    Undocumented

MPTransitLine
-------------

Undocumented

-   `                                                            name                    `

    Undocumented

-   `                                                            short_name                    `

    Undocumented

-   `                                                            color                    `

    Undocumented

-   `                                                            agencies                    `

    Undocumented

-   `                                                            url                    `

    Undocumented

-   `                                                            icon                    `

    Undocumented

-   `                                                            text_color                    `

    Undocumented

-   `                                                            vehicle                    `

    Undocumented

MPTransitStop
-------------

Undocumented

-   `                                                            name                    `

    Undocumented

-   `                                                            location                    `

    Undocumented

MPTransitTime
-------------

Undocumented

-   `                                                            text                    `

    Undocumented

-   `                                                            value                    `

    Undocumented

-   `                                                            time_zone                    `

    Undocumented

MPTransitVehicle
----------------

Undocumented

-   `                                                            name                    `

    Undocumented

-   `                                                            type                    `

    Undocumented

-   `                                                            icon                    `

    Undocumented

-   `                                                            local_icon                    `

    Undocumented

MPType
------

``` {.highlight}
@interface MPType
```

POI types (used by MapsPeoples services)

-   `                                                            name                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPType
    ```

-   `                                                            icon                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPType
    ```

-   `                                                            displayRule                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPType
    ```

MPUIViewController
------------------

``` {.highlight}
@interface MPUIViewController : UIViewController
```

Simple view controller interface with current location and location data
models for convenient interoperation

-   `                                                            locationData                    `

    Location dataset model

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) MPLocationDataset *locationData;
    ```

    Swift

    ``` {.highlight}
    var locationData: MPLocationDataset! { get set }
    ```

-   `                                                            currentLocation                    `

    Current location property, useful for location detail views.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) MPLocation *currentLocation;
    ```

    Swift

    ``` {.highlight}
    var currentLocation: MPLocation! { get set }
    ```

MPURITemplate
-------------

``` {.highlight}
@interface MPURITemplate : NSObject
```

Generates an url based on an URI template. Template string must have
format “prefix{param\_1}infix{param\_N}suffix”, e.g.:
“http://tiles.url.com/{floor}/{x}/{y}/{zoom}.png”

-   `                                                            -initWithTemplateString:                    `

    Initialization with template string. Must have format
    “prefix{param\_1}infix{param\_N}suffix”, e.g.:
    “http://tiles.url.com/{floor}/{x}/{y}/{zoom}.png”

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (id)initWithTemplateString:(NSString *)url;
    ```

    Swift

    ``` {.highlight}
    init!(templateString url: String!)
    ```

-   `                                                            templateURI                    `

    Template string property. Must have format
    “prefix{param\_1}infix{param\_N}suffix”, e.g.:
    “http://tiles.url.com/{floor}/{x}/{y}/{zoom}.png”

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSString *templateURI;
    ```

    Swift

    ``` {.highlight}
    var templateURI: String! { get set }
    ```

-   `                                                            resultURI                    `

    Get the resulting url string

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (readonly, atomic) NSString *resultURI;
    ```

    Swift

    ``` {.highlight}
    var resultURI: String! { get }
    ```

-   `                                                            -addParam:value:                    `

    Find the parameter placeholder {name} with given name and replace
    with given string value

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)addParam:(NSString *)name value:(NSString *)value;
    ```

    Swift

    ``` {.highlight}
    func addParam(_ name: String!, value: String!)
    ```

-   `                                                            -addIntParam:value:                    `

    Find the parameter placeholder {name} with given name and replace
    with given int value

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)addIntParam:(NSString *)name value:(int)value;
    ```

    Swift

    ``` {.highlight}
    func addIntParam(_ name: String!, value: Int32)
    ```

-   `                                                            -resetParams                    `

    Reset the url parameters.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)resetParams;
    ```

    Swift

    ``` {.highlight}
    func resetParams()
    ```

MPVenue
-------

``` {.highlight}
@interface MPVenue
```

The venue model holds data about the buildings and floors in a venue,
plus additional meta-data.

-   `                                                            solutionId                    `

    Solution id

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSString *solutionId;
    ```

    Swift

    ``` {.highlight}
    var solutionId: String! { get set }
    ```

-   `                                                            venueId                    `

    Venue id

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSString *venueId;
    ```

    Swift

    ``` {.highlight}
    var venueId: String! { get set }
    ```

-   `                                                            defaultFloor                    `

    Venue default floor

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSNumber *defaultFloor;
    ```

    Swift

    ``` {.highlight}
    var defaultFloor: NSNumber! { get set }
    ```

-   `                                                            tilesUrl                    `

    The general url template to be used when creating floor layers for
    this venue. If used by this framework, the url string must have
    format “prefix{param\_1}infix{param\_N}suffix”, e.g.:
    “http://tiles.url.com/{floor}/{x}/{y}/{zoom}.png”. See also
    MPURITemplate.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSString *tilesUrl;
    ```

    Swift

    ``` {.highlight}
    var tilesUrl: String! { get set }
    ```

-   `                                                            buildings                    `

    Array of buildings in this venue.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSArray *buildings;
    ```

    Swift

    ``` {.highlight}
    var buildings: [Any]! { get set }
    ```

-   `                                                            anchor                    `

    Venue anchor point.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) MPPoint *anchor;
    ```

    Swift

    ``` {.highlight}
    var anchor: MPPoint! { get set }
    ```

-   `                                                            bbox                    `

    Geographic BBox array \[w,s,e,n\] for this venue.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSArray *bbox;
    ```

    Swift

    ``` {.highlight}
    var bbox: [Any]! { get set }
    ```

-   `                                                            bounds                    `

    Geographic bounds array \[\[lng,lat\],\[lng,lat\],…\] for this
    venue.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSArray<NSArray *> *bounds;
    ```

    Swift

    ``` {.highlight}
    var bounds: [[Any]]! { get set }
    ```

-   `                                                            entryPoints                    `

    Array of entry points in this venue.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSArray *entryPoints;
    ```

    Swift

    ``` {.highlight}
    var entryPoints: [Any]! { get set }
    ```

-   `                                                            graphId                    `

    Route network/graph identifier for the given venue.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSString *graphId;
    ```

    Swift

    ``` {.highlight}
    var graphId: String! { get set }
    ```

-   `                                                            venueKey                    `

    Venue key.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (readwrite, strong, nonatomic) NSString *venueKey;
    ```

    Swift

    ``` {.highlight}
    var venueKey: String! { get set }
    ```

-   `                                                            name                    `

    Venue name.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSString *name;
    ```

    Swift

    ``` {.highlight}
    var name: String! { get set }
    ```

-   `                                                            styles                    `

    Array of possible map styles.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSArray<MPMapStyle> *styles;
    ```

    Swift

    ``` {.highlight}
    var styles: [Any]! { get set }
    ```

-   `                                                            -getDefaultStyle                    `

    Get a default style. If none is set, it will be the first string
    value in the list of map styles

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (NSString *)getDefaultStyle;
    ```

    Swift

    ``` {.highlight}
    func getDefaultStyle() -> String!
    ```

-   `                                                            -getBoundingBox                    `

    Get the geographic bounding box for the venue

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (id)getBoundingBox;
    ```

    Swift

    ``` {.highlight}
    func getBoundingBox() -> Any!
    ```

-   `                                                            -getVenueBounds                    `

    Get the geographic bounds for the venue

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (id)getVenueBounds;
    ```

    Swift

    ``` {.highlight}
    func getBounds() -> Any!
    ```

MPVenueCollection
-----------------

``` {.highlight}
@interface MPVenueCollection
```

Venue collection model, just holds an array.

-   `                                                            venues                    `

    The array of venues in this collection.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (assign, readwrite, atomic) NSArray<MPVenue> *venues;
    ```

    Swift

    ``` {.highlight}
    var venues: [Any]! { get set }
    ```

-   `                                                            -getBuilding:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPVenueCollection
    ```

-   `                                                            -getNearestVenue:withinRadius:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPVenueCollection
    ```

MPVenueProvider
---------------

``` {.highlight}
@interface MPVenueProvider : NSObject
```

Venue provider interface, that defines a delegate and a method for venue
queries.

-   `                                                            delegate                    `

    Venue provider delegate.

    #### Declaration

    Objective-C

    ``` {.highlight}
    @property (readwrite, atomic) id<MPVenueProviderDelegate> delegate;
    ```

    Swift

    ``` {.highlight}
    weak var delegate: MPVenueProviderDelegate! { get set }
    ```

-   `                                                            -getVenuesAsync:language:                    `

    Get venues from this provider.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)getVenuesAsync:(NSString *)arg language:(NSString *)language;
    ```

    Swift

    ``` {.highlight}
    func getVenuesAsync(_ arg: String!, language: String!)
    ```

-   `                                                            -getBuildingWithinBoundsAsync:arg:language:                    `

    Get building within bounds from this provider.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)getBuildingWithinBoundsAsync:(MPMapExtend *)mapExtend                                 arg:(NSString *)solutionId                            language:(NSString *)language;
    ```

    Swift

    ``` {.highlight}
    func getBuildingWithinBoundsAsync(_ mapExtend: MPMapExtend!, arg solutionId: String!, language: String!)
    ```

-   `                                                            -getBuildingsAsync:arg:language:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPVenueProvider : NSObject
    ```

-   `                                                            -getBuildingDetailsAsync:arg:language:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPVenueProvider : NSObject
    ```

-   `                                                            -getVenueDetailsAsync:arg:language:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @interface MPVenueProvider : NSObject
    ```

-   `                                                            -getVenuesAsync:language:completionHandler:                    `

    Get venues from this provider.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)getVenuesAsync:(NSString *)arg              language:(NSString *)language     completionHandler:(mpVenueListHandlerBlockType)handler;
    ```

    Swift

    ``` {.highlight}
    func getVenuesAsync(_ arg: String!, language: String!, completionHandler handler: mpVenueListHandlerBlockType!)
    ```

-   `                                                            -getBuildingWithinBoundsAsync:arg:language:completionHandler:                    `

    Get building within bounds from this provider.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)getBuildingWithinBoundsAsync:(MPMapExtend *)mapExtend                                 arg:(NSString *)solutionId                            language:(NSString *)language                   completionHandler:(mpBuildingDetailsHandlerBlockType)handler;
    ```

    Swift

    ``` {.highlight}
    func getBuildingWithinBoundsAsync(_ mapExtend: MPMapExtend!, arg solutionId: String!, language: String!, completionHandler handler: mpBuildingDetailsHandlerBlockType!)
    ```

-   `                                                            -getBuildingsAsync:arg:language:completionHandler:                    `

    Get buildings from this provider.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)getBuildingsAsync:(NSString *)venue                      arg:(NSString *)solutionId                 language:(NSString *)language        completionHandler:(mpBuildingListHandlerBlockType)handler;
    ```

    Swift

    ``` {.highlight}
    func getBuildingsAsync(_ venue: String!, arg solutionId: String!, language: String!, completionHandler handler: mpBuildingListHandlerBlockType!)
    ```

-   `                                                            -getBuildingDetailsAsync:arg:language:completionHandler:                    `

    Get a single building.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)getBuildingDetailsAsync:(NSString *)buildingId                            arg:(NSString *)solutionId                       language:(NSString *)language              completionHandler:(mpBuildingDetailsHandlerBlockType)handler;
    ```

    Swift

    ``` {.highlight}
    func getBuildingDetailsAsync(_ buildingId: String!, arg solutionId: String!, language: String!, completionHandler handler: mpBuildingDetailsHandlerBlockType!)
    ```

-   `                                                            -getVenueDetailsAsync:arg:language:completionHandler:                    `

    Get a single venue.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)getVenueDetailsAsync:(NSString *)venueId                         arg:(NSString *)solutionId                    language:(NSString *)language           completionHandler:(mpVenueDetailsHandlerBlockType)handler;
    ```

    Swift

    ``` {.highlight}
    func getVenueDetailsAsync(_ venueId: String!, arg solutionId: String!, language: String!, completionHandler handler: mpVenueDetailsHandlerBlockType!)
    ```

-   `                                                            -getDataFromPointAsync:solutionId:language:completionHandler:                    `

    Get all possible data related to the provided geographical point.
    Callback arguments are venue, building and floor objects.

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)getDataFromPointAsync:(MPPoint *)point                   solutionId:(NSString *)solutionId                     language:(NSString *)language            completionHandler:(mpGeocodeHandlerBlockType)completionHandler;
    ```

    Swift

    ``` {.highlight}
    func getDataFromPointAsync(_ point: MPPoint!, solutionId: String!, language: String!, completionHandler: mpGeocodeHandlerBlockType!)
    ```

-   `                                                            +getDataFromPoint:solutionId:language:                    `

    Syncronously get all possible data related to the provided
    geographical point. Retrieves the data from a static cache, returns
    nil if cache is not ready.

    #### Declaration

    Objective-C

    ``` {.highlight}
    + (NSDictionary *)getDataFromPoint:(MPPoint *)point                        solutionId:(NSString *)solutionId                          language:(NSString *)language;
    ```

    Swift

    ``` {.highlight}
    class func getDataFrom(_ point: MPPoint!, solutionId: String!, language: String!) -> [AnyHashable : Any]!
    ```

MapsIndoors
-----------

Undocumented

-   `                                                            +provideSolutionId:                    `

    Provides your Solution Id to the MapsIndoors SDK for iOS. This key
    is generated for your solution.

    #### Declaration

    Objective-C

    ``` {.highlight}
    + (BOOL)provideSolutionId:(NSString *)solutionId;
    ```

    Swift

    ``` {.highlight}
    class func provideSolutionId(_ solutionId: String!) -> Bool
    ```

    #### Return Value

    YES if the Solution Id was successfully provided

-   `                                                            +getSolutionId                    `

    Gets the current MapsIndoors solution id.- parameter: The solution
    id as a string value.

    #### Declaration

    Objective-C

    ``` {.highlight}
    + (NSString *)getSolutionId;
    ```

    Swift

    ``` {.highlight}
    class func getSolutionId() -> String!
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | solution id as a string value.    |
    | The                               |                                   |
    |   `                               |                                   |
    +-----------------------------------+-----------------------------------+

-   `                                                            +setLanguage:                    `

    Sets the language for the content provided by MapsIndoors.-
    parameter: language The language for which the content should be
    fetched. Uses the two-letter language code ISO 639-1.

    #### Declaration

    Objective-C

    ``` {.highlight}
    + (void)setLanguage:(NSString *)languageCode;
    ```

    Swift

    ``` {.highlight}
    class func setLanguage(_ languageCode: String!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The language for which the        |
    | language                          | content should be fetched. Uses   |
    |        `                          | the two-letter language code ISO  |
    |                                   | 639-1.                            |
    +-----------------------------------+-----------------------------------+

-   `                                                            +getLanguage                    `

    Gets the current language for the content provided by
    MapsIndoors.@returns The language for which the content should be
    fetched. Uses the two-letter language code ISO 639-1.

    #### Declaration

    Objective-C

    ``` {.highlight}
    + (NSString *)getLanguage;
    ```

    Swift

    ``` {.highlight}
    class func getLanguage() -> String!
    ```

-   `                                                            +fetchDataForOfflineUse:                    `

    Fetch all neccesary content to be able to run MapsIndoors in offline
    environments- parameter: completionHandler Callback function that
    fires when content has been fetched or if this process resolves in
    an error. Note: Does not automtically retry fetch.

    #### Declaration

    Objective-C

    ``` {.highlight}
    + (void)fetchDataForOfflineUse:(mpOfflineDataHandlerBlockType)completionHandler;
    ```

    Swift

    ``` {.highlight}
    class func fetchData(forOfflineUse completionHandler: mpOfflineDataHandlerBlockType!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | Callback function that fires when |
    | completionHandler                 | content has been fetched or if    |
    |                 `                 | this process resolves in an       |
    |                                   | error. Note: Does not             |
    |                                   | automtically retry fetch.         |
    +-----------------------------------+-----------------------------------+

-   `                                                            +setOfflineMode:                    `

    Sets the offline mode for the content provided by MapsIndoors. NB:
    This forces the implementation to be offline, even if there is no
    data available offline.- parameter: offlineMode The offline mode.
    Can be true/offline false/offline.

    #### Declaration

    Objective-C

    ``` {.highlight}
    + (void)setOfflineMode:(BOOL)offline;
    ```

    Swift

    ``` {.highlight}
    class func setOfflineMode(_ offline: Bool)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The offline mode. Can be          |
    | offlineMode                       | true/offline false/offline.       |
    |           `                       |                                   |
    +-----------------------------------+-----------------------------------+

-   `                                                            +getOfflineMode                    `

    Gets the current offline mode.

    #### Declaration

    Objective-C

    ``` {.highlight}
    + (BOOL)getOfflineMode;
    ```

    Swift

    ``` {.highlight}
    class func getOfflineMode() -> Bool
    ```

PointXY
-------

Undocumented

-   `                                                            X                    `

    Undocumented

-   `                                                            Y                    `

    Undocumented

-   `                                                            distance                    `

    Undocumented

-   `                                                            latlng                    `

    Undocumented

-   `                                                            +getRefPoint                    `

    Undocumented

PositionCalculator
------------------

Undocumented

-   `                                                            +convertRSSItoMeter:A:                    `

    Undocumented

-   `                                                            -calcLatLngPos:                    `

    Undocumented

Enums
=====

CustomFontIcon
--------------

``` {.highlight}
enum CustomFontIcon : NSInteger {}
```

@abstract CustomIcon Icons.

-   `                                                            bicycle                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum CustomFontIcon : NSInteger {}
    ```

-   `                                                            car                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum CustomFontIcon : NSInteger {}
    ```

-   `                                                            hospital                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum CustomFontIcon : NSInteger {}
    ```

-   `                                                            mansilhouette                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum CustomFontIcon : NSInteger {}
    ```

-   `                                                            vehicle                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum CustomFontIcon : NSInteger {}
    ```

-   `                                                            wheelchair                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum CustomFontIcon : NSInteger {}
    ```

-   `                                                            home                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum CustomFontIcon : NSInteger {}
    ```

-   `                                                            _clock                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum CustomFontIcon : NSInteger {}
    ```

-   `                                                            playO2                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum CustomFontIcon : NSInteger {}
    ```

-   `                                                            tag                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum CustomFontIcon : NSInteger {}
    ```

-   `                                                            tags                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum CustomFontIcon : NSInteger {}
    ```

-   `                                                            bookmark                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum CustomFontIcon : NSInteger {}
    ```

-   `                                                            image                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum CustomFontIcon : NSInteger {}
    ```

-   `                                                            airplane                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum CustomFontIcon : NSInteger {}
    ```

-   `                                                            levels                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum CustomFontIcon : NSInteger {}
    ```

-   `                                                            truck                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum CustomFontIcon : NSInteger {}
    ```

-   `                                                            mail                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum CustomFontIcon : NSInteger {}
    ```

-   `                                                            building                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum CustomFontIcon : NSInteger {}
    ```

-   `                                                            navigation                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum CustomFontIcon : NSInteger {}
    ```

-   `                                                            university                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum CustomFontIcon : NSInteger {}
    ```

-   `                                                            bus                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum CustomFontIcon : NSInteger {}
    ```

-   `                                                            motorbike                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum CustomFontIcon : NSInteger {}
    ```

-   `                                                            train                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum CustomFontIcon : NSInteger {}
    ```

-   `                                                            play                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum CustomFontIcon : NSInteger {}
    ```

-   `                                                            film                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum CustomFontIcon : NSInteger {}
    ```

-   `                                                            playO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum CustomFontIcon : NSInteger {}
    ```

-   `                                                            compass                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum CustomFontIcon : NSInteger {}
    ```

FAIcon
------

``` {.highlight}
enum FAIcon : NSInteger {}
```

@abstract FontAwesome Icons.

-   `                                                            FAGlass                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAMusic                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FASearch                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAEnvelopeO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAHeart                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAStar                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAStarO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAUser                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAFilm                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAThLarge                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FATh                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAThList                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACheck                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FATimes                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FASearchPlus                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FASearchMinus                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAPowerOff                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FASignal                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACog                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FATrashO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAHome                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAFileO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAClockO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FARoad                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FADownload                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAArrowCircleODown                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAArrowCircleOUp                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAInbox                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAPlayCircleO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FARepeat                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FARefresh                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAListAlt                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FALock                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAFlag                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAHeadphones                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAVolumeOff                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAVolumeDown                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAVolumeUp                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAQrcode                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FABarcode                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FATag                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FATags                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FABook                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FABookmark                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAPrint                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACamera                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAFont                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FABold                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAItalic                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FATextHeight                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FATextWidth                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAAlignLeft                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAAlignCenter                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAAlignRight                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAAlignJustify                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAList                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAOutdent                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAIndent                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAVideoCamera                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAPictureO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAPencil                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAMapMarker                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAAdjust                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FATint                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAPencilSquareO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAShareSquareO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACheckSquareO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAArrows                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAStepBackward                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAFastBackward                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FABackward                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAPlay                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAPause                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAStop                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAForward                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAFastForward                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAStepForward                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAEject                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAChevronLeft                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAChevronRight                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAPlusCircle                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAMinusCircle                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FATimesCircle                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACheckCircle                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAQuestionCircle                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAInfoCircle                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACrosshairs                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FATimesCircleO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACheckCircleO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FABan                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAArrowLeft                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAArrowRight                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAArrowUp                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAArrowDown                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAShare                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAExpand                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACompress                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAPlus                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAMinus                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAAsterisk                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAExclamationCircle                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAGift                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FALeaf                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAFire                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAEye                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAEyeSlash                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAExclamationTriangle                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAPlane                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACalendar                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FARandom                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAComment                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAMagnet                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAChevronUp                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAChevronDown                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FARetweet                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAShoppingCart                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAFolder                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAFolderOpen                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAArrowsV                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAArrowsH                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FABarChartO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FATwitterSquare                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAFacebookSquare                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACameraRetro                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAKey                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACogs                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAComments                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAThumbsOUp                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAThumbsODown                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAStarHalf                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAHeartO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FASignOut                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FALinkedinSquare                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAThumbTack                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAExternalLink                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FASignIn                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FATrophy                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAGithubSquare                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAUpload                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FALemonO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAPhone                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FASquareO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FABookmarkO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAPhoneSquare                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FATwitter                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAFacebook                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAGithub                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAUnlock                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACreditCard                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FARss                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAHddO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FABullhorn                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FABell                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACertificate                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAHandORight                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAHandOLeft                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAHandOUp                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAHandODown                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAArrowCircleLeft                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAArrowCircleRight                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAArrowCircleUp                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAArrowCircleDown                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAGlobe                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAWrench                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FATasks                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAFilter                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FABriefcase                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAArrowsAlt                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAUsers                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FALink                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACloud                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAFlask                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAScissors                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAFilesO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAPaperclip                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAFloppyO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FASquare                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FABars                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAListUl                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAListOl                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAStrikethrough                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAUnderline                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FATable                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAMagic                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FATruck                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAPinterest                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAPinterestSquare                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAGooglePlusSquare                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAGooglePlus                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAMoney                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACaretDown                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACaretUp                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACaretLeft                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACaretRight                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAColumns                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FASort                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FASortAsc                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FASortDesc                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAEnvelope                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FALinkedin                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAUndo                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAGavel                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FATachometer                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACommentO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACommentsO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FABolt                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FASitemap                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAUmbrella                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAClipboard                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FALightbulbO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAExchange                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACloudDownload                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACloudUpload                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAUserMd                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAStethoscope                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FASuitcase                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FABellO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACoffee                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACutlery                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAFileTextO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FABuildingO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAHospitalO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAAmbulance                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAMedkit                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAFighterJet                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FABeer                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAHSquare                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAPlusSquare                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAAngleDoubleLeft                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAAngleDoubleRight                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAAngleDoubleUp                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAAngleDoubleDown                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAAngleLeft                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAAngleRight                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAAngleUp                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAAngleDown                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FADesktop                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FALaptop                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FATablet                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAMobile                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACircleO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAQuoteLeft                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAQuoteRight                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FASpinner                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACircle                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAReply                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAGithubAlt                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAFolderO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAFolderOpenO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FASmileO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAFrownO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAMehO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAGamepad                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAKeyboardO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAFlagO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAFlagCheckered                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FATerminal                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACode                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAReplyAll                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAMailReplyAll                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAStarHalfO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FALocationArrow                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACrop                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACodeFork                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAChainBroken                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAQuestion                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAInfo                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAExclamation                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FASuperscript                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FASubscript                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAEraser                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAPuzzlePiece                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAMicrophone                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAMicrophoneSlash                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAShield                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACalendarO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAFireExtinguisher                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FARocket                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAMaxcdn                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAChevronCircleLeft                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAChevronCircleRight                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAChevronCircleUp                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAChevronCircleDown                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAHtml5                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACss3                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAAnchor                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAUnlockAlt                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FABullseye                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAEllipsisH                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAEllipsisV                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FARssSquare                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAPlayCircle                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FATicket                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAMinusSquare                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAMinusSquareO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FALevelUp                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FALevelDown                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACheckSquare                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAPencilSquare                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAExternalLinkSquare                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAShareSquare                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACompass                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACaretSquareODown                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACaretSquareOUp                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACaretSquareORight                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAEur                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAGbp                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAUsd                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAInr                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAJpy                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FARub                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAKrw                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FABtc                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAFile                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAFileText                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FASortAlphaAsc                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FASortAlphaDesc                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FASortAmountAsc                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FASortAmountDesc                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FASortNumericAsc                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FASortNumericDesc                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAThumbsUp                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAThumbsDown                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAYoutubeSquare                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAYoutube                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAXing                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAXingSquare                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAYoutubePlay                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FADropbox                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAStackOverflow                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAInstagram                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAFlickr                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAAdn                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FABitbucket                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FABitbucketSquare                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FATumblr                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FATumblrSquare                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FALongArrowDown                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FALongArrowUp                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FALongArrowLeft                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FALongArrowRight                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAApple                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAWindows                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAAndroid                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FALinux                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FADribbble                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FASkype                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAFoursquare                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FATrello                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAFemale                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAMale                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAGittip                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FASunO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAMoonO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAArchive                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FABug                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAVk                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAWeibo                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FARenren                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAPagelines                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAStackExchange                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAArrowCircleORight                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAArrowCircleOLeft                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FACaretSquareOLeft                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FADotCircleO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAWheelchair                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAVimeoSquare                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FATry                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

-   `                                                            FAPlusSquareO                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    enum FAIcon : NSInteger {}
    ```

MPDirectionsRenderFit
---------------------

Undocumented

-   `                                                            MPDirectionsRenderFitIndoorPathFirstLineUpwards                    `

    Undocumented

-   `                                                            MPDirectionsRenderFitIndoorPathUpwards                    `

    Undocumented

-   `                                                            MPDirectionsRenderFitNorthBound                    `

    Undocumented

MPPositionProviderType
----------------------

Undocumented

-   `                                                            GPS_POSITION_PROVIDER                    `

    Undocumented

-   `                                                            MOBILE_NETWORK_POSITION_PROVIDER                    `

    Undocumented

-   `                                                            COMBINED_POSITION_PROVIDER                    `

    Undocumented

-   `                                                            WIFI_POSITION_PROVIDER                    `

    Undocumented

-   `                                                            SENSOR_BASED_POSITION_PROVIDER                    `

    Undocumented

MPRouteActionDirection
----------------------

Undocumented

-   `                                                            LEFT_DIRECTION                    `

    Undocumented

-   `                                                            RIGHT_DIRECTION                    `

    Undocumented

-   `                                                            LEFT_SHARP_DIRECTION                    `

    Undocumented

-   `                                                            RIGHT_SHARP_DIRECTION                    `

    Undocumented

-   `                                                            LEFT_OBTUSE_DIRECTION                    `

    Undocumented

-   `                                                            RIGHT_OBTUSE_DIRECTION                    `

    Undocumented

-   `                                                            U_TURN_DIRECTION                    `

    Undocumented

-   `                                                            UP_DIRECTION                    `

    Undocumented

-   `                                                            DOWN_DIRECTION                    `

    Undocumented

MPRouteActionType
-----------------

Undocumented

-   `                                                            STRAIGHT_COMPASS_HEADING_ACTION                    `

    Undocumented

-   `                                                            TURN_ACTION                    `

    Undocumented

-   `                                                            Z_LEVEL_ACTION                    `

    Undocumented

-   `                                                            DESTINATION_ACTION                    `

    Undocumented

-   `                                                            START_ACTION                    `

    Undocumented

MPRouteLegType
--------------

Undocumented

-   `                                                            MPRouteLegTypeMapsIndoors                    `

    Undocumented

-   `                                                            MPRouteLegTypeGoogle                    `

    Undocumented

Protocols
=========

MPAppDataProviderDelegate
-------------------------

``` {.highlight}
@protocol MPAppDataProviderDelegate <NSObject>
```

App data provider delegate.

-   `                                                            -onAppDataReady:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPAppDataProviderDelegate <NSObject>
    ```

MPBeaconProvider
----------------

``` {.highlight}
@protocol MPBeaconProvider <NSObject>
```

Beacons provider protocol.

-   `                                                            delegate                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPBeaconProvider <NSObject>
    ```

-   `                                                            -getBeacons:clientId:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPBeaconProvider <NSObject>
    ```

MPBeaconProviderDelegate
------------------------

``` {.highlight}
@protocol MPBeaconProviderDelegate <NSObject>
```

Beacons provider delegate.

-   `                                                            -onBeaconsReady:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPBeaconProviderDelegate <NSObject>
    ```

MPBuildingDelegate
------------------

``` {.highlight}
@protocol MPBuildingDelegate <NSObject>
```

Delegate protocol that holds the building ready event method. Relevant
when using offline mode, as it will take a while to load the database
upon first app start.

-   `                                                            -onBuildingReady:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPBuildingDelegate <NSObject>
    ```

MPCategoriesProviderDelegate
----------------------------

``` {.highlight}
@protocol MPCategoriesProviderDelegate <NSObject>
```

Categories provider delegate.

-   `                                                            -onCategoriesReady:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPCategoriesProviderDelegate <NSObject>
    ```

MPDirectionsRendererDelegate
----------------------------

Undocumented

-   `                                                            -floorDidChange:                    `

    Undocumented

MPDistanceMatrixProviderDelegate
--------------------------------

Undocumented

-   `                                                            -onDistanceMatrixResultReady:                    `

    Undocumented

MPFloorSelectorDelegate
-----------------------

``` {.highlight}
@protocol MPFloorSelectorDelegate <NSObject>
```

Delegate protocol specification to hold the floor change event.

-   `                                                            -floorHasChanged:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPFloorSelectorDelegate <NSObject>
    ```

MPInfoSnippetViewDelegate
-------------------------

``` {.highlight}
@protocol MPInfoSnippetViewDelegate <NSObject>
```

Info snippet view delegate

-   `                                                            -onInfoSnippetTapped:tapPosition:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPInfoSnippetViewDelegate <NSObject>
    ```

MPLocationField
---------------

Undocumented

-   `                                                            type                    `

    Undocumented

-   `                                                            text                    `

    Undocumented

-   `                                                            value                    `

    Undocumented

MPLocationPropertyViewDelegate
------------------------------

``` {.highlight}
@protocol MPLocationPropertyViewDelegate <NSObject>
```

Delegate protocol specification

-   `                                                            -onLocationPropertyTapped:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPLocationPropertyViewDelegate <NSObject>
    ```

MPLocationViewDelegate
----------------------

``` {.highlight}
@protocol MPLocationViewDelegate <NSObject>
```

Delegate protocol specification, to keep track of the tapping on a
locations details.

-   `                                                            -onLocationPropertyTapped:withProperty:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPLocationViewDelegate <NSObject>
    ```

MPLocationsProvider
-------------------

``` {.highlight}
@protocol MPLocationsProvider <NSObject>
```

Locations provider protocol.

-   `                                                            delegate                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPLocationsProvider <NSObject>
    ```

-   `                                                            -getLocationsAsync:language:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPLocationsProvider <NSObject>
    ```

-   `                                                            -getLocationsAsync:language:completionHandler:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPLocationsProvider <NSObject>
    ```

-   `                                                            -getLocationDetailsAsync:withId:language:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPLocationsProvider <NSObject>
    ```

-   `                                                            -getLocationDetailsAsync:withId:language:completionHandler:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPLocationsProvider <NSObject>
    ```

-   `                                                            -getLocationsUsingQueryAsync:language:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPLocationsProvider <NSObject>
    ```

-   `                                                            -getLocationsUsingQueryAsync:language:completionHandler:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPLocationsProvider <NSObject>
    ```

MPLocationsProviderDelegate
---------------------------

``` {.highlight}
@protocol MPLocationsProviderDelegate <NSObject>
```

Locations provider delegate.

-   `                                                            -onLocationsReady:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPLocationsProviderDelegate <NSObject>
    ```

-   `                                                            -onLocationDetailsReady:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPLocationsProviderDelegate <NSObject>
    ```

MPMapControlDelegate
--------------------

``` {.highlight}
@protocol MPMapControlDelegate <NSObject>
```

Delegate protocol specification to hold the floor change event.

-   `                                                            -appDataReady:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPMapControlDelegate <NSObject>
    ```

-   `                                                            -locationDataReady:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPMapControlDelegate <NSObject>
    ```

-   `                                                            -solutionDataReady:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPMapControlDelegate <NSObject>
    ```

-   `                                                            -venueDataReady:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPMapControlDelegate <NSObject>
    ```

-   `                                                            -onPositionUpdate:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPMapControlDelegate <NSObject>
    ```

-   `                                                            -infoSnippetTapped:tapPosition:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPMapControlDelegate <NSObject>
    ```

-   `                                                            -floorDidChange:                    `

    Floor update callback method

    #### Declaration

    Objective-C

    ``` {.highlight}
    - (void)floorDidChange:(NSNumber *)floor;
    ```

    Swift

    ``` {.highlight}
    optional func floorDidChange(_ floor: NSNumber!)
    ```

    #### Parameters

    +-----------------------------------+-----------------------------------+
    | `                                 | The index of the floor            |
    | floor                             |                                   |
    |     `                             |                                   |
    +-----------------------------------+-----------------------------------+

MPMessageProviderDelegate
-------------------------

``` {.highlight}
@protocol MPMessageProviderDelegate <NSObject>
```

Messages provider delegate.

-   `                                                            -onMessagesReady:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPMessageProviderDelegate <NSObject>
    ```

-   `                                                            -onMessageDetailsReady:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPMessageProviderDelegate <NSObject>
    ```

MPMessagesProvider
------------------

``` {.highlight}
@protocol MPMessagesProvider <NSObject>
```

Messages provider protocol.

-   `                                                            delegate                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPMessagesProvider <NSObject>
    ```

-   `                                                            -getMessagesAsync:language:completionHandler:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPMessagesProvider <NSObject>
    ```

-   `                                                            -getMessageDetailsAsync:withId:language:completionHandler:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPMessagesProvider <NSObject>
    ```

MPPositionProvider
------------------

Undocumented

-   `                                                            -startPositioning:                    `

    Undocumented

-   `                                                            -stopPositioning:                    `

    Undocumented

-   `                                                            -startPositioningAfter:arg:                    `

    Undocumented

-   `                                                            -isRunning                    `

    Undocumented

-   `                                                            delegate                    `

    Undocumented

-   `                                                            latestPositionResult                    `

    Undocumented

-   `                                                            providerType                    `

    Undocumented

MPPositionProviderDelegate
--------------------------

Undocumented

-   `                                                            -onPositionUpdate:                    `

    Undocumented

-   `                                                            -onPositionFailed:                    `

    Undocumented

MPRouteActionDelegate
---------------------

``` {.highlight}
@protocol MPRouteActionDelegate <NSObject>
```

Delegate protocol specification that specify an event method that fires
when offline tile database is ready.

-   `                                                            -onRouteActionPerform:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPRouteActionDelegate <NSObject>
    ```

-   `                                                            -onRouteActionDisplay:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPRouteActionDelegate <NSObject>
    ```

-   `                                                            -onRouteEnd                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPRouteActionDelegate <NSObject>
    ```

MPRoutingProviderDelegate
-------------------------

Undocumented

-   `                                                            -onRouteResultReady:                    `

    Undocumented

MPSolutionProviderDelegate
--------------------------

``` {.highlight}
@protocol MPSolutionProviderDelegate <NSObject>
```

Solution provider delegate.

-   `                                                            -onSolutionsReady:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPSolutionProviderDelegate <NSObject>
    ```

MPVenueProviderDelegate
-----------------------

``` {.highlight}
@protocol MPVenueProviderDelegate <NSObject>
```

Venue provider delegate.

-   `                                                            -onVenuesReady:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPVenueProviderDelegate <NSObject>
    ```

-   `                                                            -onBuildingWithinBoundsReady:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPVenueProviderDelegate <NSObject>
    ```

-   `                                                            -onBuildingDetailsReady:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPVenueProviderDelegate <NSObject>
    ```

-   `                                                            -onVenueDetailsReady:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPVenueProviderDelegate <NSObject>
    ```

-   `                                                            -onBuildingsReady:                    `

    Undocumented

    #### Declaration

    Objective-C

    ``` {.highlight}
    @protocol MPVenueProviderDelegate <NSObject>
    ```
