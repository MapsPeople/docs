---

title: MapsIndoors for Android Reference Guide
---

* TOC
{:toc}

data
====

com.mapspeople.data

Interface AppConfigProvider {#interface-appconfigprovider .title title="Interface AppConfigProvider"}
---------------------------

-   

    All Known Implementing Classes:
    :   MPAppConfigAsyncLoader

    ------------------------------------------------------------------------

    \

        public interface AppConfigProvider

    The interface App config provider.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `getAppConfigAsync(java.lang.Stri |
        |                                   | ng arg,                 java.util |
        |                                   | .Locale locale)`                  |
        |                                   | Gets app config async.            |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOnAppConfigReadyListener(OnAp |
        |                                   | pConfigReadyListener listener)`   |
        |                                   | Sets on app config ready          |
        |                                   | listener.                         |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### getAppConfigAsync

                void getAppConfigAsync(java.lang.String arg,                       java.util.Locale locale)

            Gets app config async.

            [Parameters:]{.paramLabel}
            :   `arg` - the arg
            :   `locale` - the locale

        &nbsp;
        -   #### setOnAppConfigReadyListener

                void setOnAppConfigReadyListener(OnAppConfigReadyListener listener)

            Sets on app config ready listener.

            [Parameters:]{.paramLabel}
            :   `listener` - the listener

com.mapspeople.data

Interface AppDataProvider {#interface-appdataprovider .title title="Interface AppDataProvider"}
-------------------------

-   

    All Known Implementing Classes:
    :   MPAppDataProvider

    ------------------------------------------------------------------------

    \

        public interface AppDataProvider

    App data provider interface

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `getAppDataAsync(java.lang.String |
        |                                   |  venueId)`                        |
        |                                   | Initiate the fetching of app data |
        |                                   | with given string parameter       |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOnAppDataReadyListener(OnAppD |
        |                                   | ataReadyListener listener)`       |
        |                                   | Set a listener to catch the app   |
        |                                   | data                              |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### setOnAppDataReadyListener

                void setOnAppDataReadyListener(OnAppDataReadyListener listener)

            Set a listener to catch the app data

            [Parameters:]{.paramLabel}
            :   `listener` - The listener object

        &nbsp;
        -   #### getAppDataAsync

                void getAppDataAsync(java.lang.String venueId)

            Initiate the fetching of app data with given string
            parameter

            [Parameters:]{.paramLabel}
            :   `venueId` - The string parameter

com.mapspeople.data

Interface CategoryProvider {#interface-categoryprovider .title title="Interface CategoryProvider"}
--------------------------

-   

    All Known Implementing Classes:
    :   MPCategoryAsyncLoader, MPCategoryProvider

    ------------------------------------------------------------------------

    \

        public interface CategoryProvider

    The interface Category provider.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `getCategoryAsync(java.lang.Strin |
        |                                   | g arg,                java.util.L |
        |                                   | ocale locale)`                    |
        |                                   | Gets category async.              |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOnCategoryReadyListener(OnCat |
        |                                   | egoryReadyListener listener)`     |
        |                                   | Sets on category ready listener.  |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### getCategoryAsync

                void getCategoryAsync(java.lang.String arg,                      java.util.Locale locale)

            Gets category async.

            [Parameters:]{.paramLabel}
            :   `arg` - the arg
            :   `locale` - the locale

        &nbsp;
        -   #### setOnCategoryReadyListener

                void setOnCategoryReadyListener(OnCategoryReadyListener listener)

            Sets on category ready listener.

            [Parameters:]{.paramLabel}
            :   `listener` - the listener

com.mapspeople.data

Interface GatewayProvider {#interface-gatewayprovider .title title="Interface GatewayProvider"}
-------------------------

-   

    All Known Implementing Classes:
    :   MPGatewayAsyncLoader, MPGatewayProvider

    ------------------------------------------------------------------------

    \

        public interface GatewayProvider

    GatewayProvider Created by mh on 03-10-2016.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `getGatewayAsync(java.lang.String |
        |                                   |  solutionId)`                     |
        |                                   | Gets gateway async.               |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOnGatewayReadyListener(OnGate |
        |                                   | wayReadyListener listener)`       |
        |                                   | Sets on gateway ready listener.   |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### getGatewayAsync

                void getGatewayAsync(java.lang.String solutionId)

            Gets gateway async.

            [Parameters:]{.paramLabel}
            :   `solutionId` - the solution id

        &nbsp;
        -   #### setOnGatewayReadyListener

                void setOnGatewayReadyListener(OnGatewayReadyListener listener)

            Sets on gateway ready listener.

            [Parameters:]{.paramLabel}
            :   `listener` - the listener

com.mapspeople.data

Class LocationCache {#class-locationcache .title title="Class LocationCache"}
-------------------

-   java.lang.Object
-   -   com.mapspeople.data.LocationCache

-   

    All Implemented Interfaces:
    :   OnLocationsReadyListener

    ------------------------------------------------------------------------

    \

        public abstract class LocationCacheextends java.lang.Objectimplements OnLocationsReadyListener

    LocationCache created by mh on 10-02-2016.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `getLocationListAsync(java.util.L |
        |                                   | ocale language,                   |
        |                                   |   int floorIndex,                 |
        |                                   |     MapExtend mapExtend)`         |
        |                                   | Gets location list async.         |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `onLocationDetailsReady(Location  |
        |                                   | location)`                        |
        |                                   | On location details ready.        |
        +-----------------------------------+-----------------------------------+
        | `abstract void`                   | `onLocationsReady(java.util.List< |
        |                                   | Location> locations)`             |
        |                                   | On locations ready.               |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### LocationCache

                public LocationCache(Solution solution,                     LocationsProvider locationsProvider)

            Instantiates a new Location cache.

            [Parameters:]{.paramLabel}
            :   `solution` - the solution
            :   `locationsProvider` - the locations provider

    &nbsp;
    -   ### Method Detail

        -   #### getLocationListAsync

                public void getLocationListAsync(java.util.Locale language,                                 int floorIndex,                                 MapExtend mapExtend)

            Gets location list async.

            [Parameters:]{.paramLabel}
            :   `language` - the language
            :   `floorIndex` - the floor index
            :   `mapExtend` - the map extend

        &nbsp;
        -   #### onLocationsReady

                public abstract void onLocationsReady(java.util.List<Location> locations)

            On locations ready.

            [Specified by:]{.overrideSpecifyLabel}
            :   `onLocationsReady` in
                interface `OnLocationsReadyListener`

            [Parameters:]{.paramLabel}
            :   `locations` - the locations

        &nbsp;
        -   #### onLocationDetailsReady

                public void onLocationDetailsReady(Location location)

            On location details ready.

            [Specified by:]{.overrideSpecifyLabel}
            :   `onLocationDetailsReady` in
                interface `OnLocationsReadyListener`

            [Parameters:]{.paramLabel}
            :   `location` - the location

com.mapspeople.data

Class LocationQuery.OrderBy {#class-locationquery.orderby .title title="Class LocationQuery.OrderBy"}
---------------------------

-   java.lang.Object
-   -   com.mapspeople.data.LocationQuery.OrderBy

-   

    Enclosing class:
    :   LocationQuery

    ------------------------------------------------------------------------

    \

        public static final class LocationQuery.OrderByextends java.lang.Object

    The type Order by.

-   -   ### Field Summary

          Constructor and Description
          -----------------------------
          `OrderBy()` 

    &nbsp;
    -   ### Method Summary

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Field Detail

        -   #### NAME

                public static final java.lang.String NAME

            The constant NAME.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### TYPE

                public static final java.lang.String TYPE

            The constant TYPE.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### FLOOR

                public static final java.lang.String FLOOR

            The constant FLOOR.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### BUILDING

                public static final java.lang.String BUILDING

            The constant BUILDING.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### VENUE

                public static final java.lang.String VENUE

            The constant VENUE.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### ROOMID

                public static final java.lang.String ROOMID

            The constant ROOMID.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### RELEVANCE

                public static final java.lang.String RELEVANCE

            The constant RELEVANCE.

            [See Also:]{.seeLabel}
            :   Constant Field Values

    &nbsp;
    -   ### Constructor Detail

        -   #### OrderBy

                public OrderBy()

com.mapspeople.data

Class LocationQuery.SortOrder {#class-locationquery.sortorder .title title="Class LocationQuery.SortOrder"}
-----------------------------

-   java.lang.Object
-   -   com.mapspeople.data.LocationQuery.SortOrder

-   

    Enclosing class:
    :   LocationQuery

    ------------------------------------------------------------------------

    \

        public static final class LocationQuery.SortOrderextends java.lang.Object

    The type Sort order.

-   -   ### Field Summary

          Constructor and Description
          -----------------------------
          `SortOrder()` 

    &nbsp;
    -   ### Method Summary

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Field Detail

        -   #### ASC

                public static final java.lang.String ASC

            The constant ASC.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### DESC

                public static final java.lang.String DESC

            The constant DESC.

            [See Also:]{.seeLabel}
            :   Constant Field Values

    &nbsp;
    -   ### Constructor Detail

        -   #### SortOrder

                public SortOrder()

com.mapspeople.data

Class LocationQuery {#class-locationquery .title title="Class LocationQuery"}
-------------------

-   java.lang.Object
-   -   com.mapspeople.data.LocationQuery

-   

    ------------------------------------------------------------------------

    \

        public class LocationQueryextends java.lang.Object

    The type Location query.

-   -   ### Nested Class Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `java.lang.String`                | `getQuery()`                      |
        |                                   | Gets query.                       |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setQuery(java.lang.String inputQ |
        |                                   | uery)`                            |
        |                                   | Sets query.                       |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setTokens(java.lang.String[] bui |
        |                                   | ldingTokens,         java.lang.St |
        |                                   | ring[] floorTokens)`              |
        |                                   | Sets tokens.                      |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Field Detail

        -   #### arg

                public java.lang.String arg

            The Arg.

        &nbsp;
        -   #### categories

                public java.util.List<java.lang.String> categories

            The Categories.

        &nbsp;
        -   #### types

                public java.util.List<java.lang.String> types

            The Types.

        &nbsp;
        -   #### mapExtend

                public MapExtend mapExtend

            The Map extend.

        &nbsp;
        -   #### near

                public Point near

            The Near.

        &nbsp;
        -   #### max

                public int max

            The Max.

        &nbsp;
        -   #### radius

                public int radius

            The Radius.

        &nbsp;
        -   #### floor

                public int floor

            The Floor.

        &nbsp;
        -   #### venue

                public final java.lang.String venue

            The Venue.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### orderBy

                public java.lang.String orderBy

            The Order by.

        &nbsp;
        -   #### sortOrder

                public final java.lang.String sortOrder

            The Sort order.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### building

                public java.lang.String building

            The Building.

    &nbsp;
    -   ### Constructor Detail

        -   #### LocationQuery

                public LocationQuery()

            Instantiates a new Location query.

        &nbsp;
        -   #### LocationQuery

                public LocationQuery(java.lang.String solutionId)

            Instantiates a new Location query.

            [Parameters:]{.paramLabel}
            :   `solutionId` - the solution id

    &nbsp;
    -   ### Method Detail

        -   #### setTokens

                public void setTokens(java.lang.String[] buildingTokens,                      java.lang.String[] floorTokens)

            Sets tokens.

            [Parameters:]{.paramLabel}
            :   `buildingTokens` - the building tokens
            :   `floorTokens` - the floor tokens

        &nbsp;
        -   #### getQuery

                public java.lang.String getQuery()

            Gets query.

            [Returns:]{.returnLabel}
            :   the query

        &nbsp;
        -   #### setQuery

                public void setQuery(java.lang.String inputQuery)

            Sets query.

            [Parameters:]{.paramLabel}
            :   `inputQuery` - the input query

com.mapspeople.data

Interface LocationsProvider {#interface-locationsprovider .title title="Interface LocationsProvider"}
---------------------------

-   

    All Known Implementing Classes:
    :   MPLocationsAsyncLoader, MPLocationsProvider

    ------------------------------------------------------------------------

    \

        public interface LocationsProvider

    Location provider interface

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `cancelRequest()`                 |
        |                                   | Cancel request.                   |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `getLocationsAsync(java.lang.Stri |
        |                                   | ng solutionId,                 ja |
        |                                   | va.util.Locale locale)`           |
        |                                   | Gets locations async.             |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `getLocationsDetailsAsync(java.la |
        |                                   | ng.String solutionId,             |
        |                                   |             java.lang.String loca |
        |                                   | tionId)`                          |
        |                                   | Initiate the fetching of          |
        |                                   | locations from the providers,     |
        |                                   | with given string parameter       |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<Location>`        | `getLocationsUsingQuery(LocationQ |
        |                                   | uery locationQuery,               |
        |                                   |         java.util.Locale locale)` |
        |                                   | Gets locations using query.       |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `getLocationsUsingQueryAsync(Loca |
        |                                   | tionQuery locationQuery,          |
        |                                   |                   java.util.Local |
        |                                   | e locale)`                        |
        |                                   | Gets locations using query async. |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `getLocationsWithinMapExtendAsync |
        |                                   | (int floorIndex,                  |
        |                                   |                float zoomLevel,   |
        |                                   |                               Map |
        |                                   | Extend mapExtend,                 |
        |                                   |                 java.lang.String  |
        |                                   | solutionId,                       |
        |                                   |           java.util.Locale locale |
        |                                   | )`                                |
        |                                   | Gets locations within map extend  |
        |                                   | async.                            |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `getLocationsWithinMapExtendAsync |
        |                                   | (MapExtend mapExtend,             |
        |                                   |                     java.lang.Str |
        |                                   | ing solutionId,                   |
        |                                   |               java.util.Locale lo |
        |                                   | cale)`                            |
        |                                   | Gets locations within map extend  |
        |                                   | async.                            |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOnLocationsReadyListener(OnLo |
        |                                   | cationsReadyListener listener)`   |
        |                                   | Set a listener object to catch    |
        |                                   | the locations.                    |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### getLocationsDetailsAsync

                void getLocationsDetailsAsync(java.lang.String solutionId,                              java.lang.String locationId)

            Initiate the fetching of locations from the providers, with
            given string parameter

            [Parameters:]{.paramLabel}
            :   `solutionId` - The string parameter
            :   `locationId` - The string parameter

        &nbsp;
        -   #### getLocationsAsync

                void getLocationsAsync(java.lang.String solutionId,                       java.util.Locale locale)

            Gets locations async.

            [Parameters:]{.paramLabel}
            :   `solutionId` - the solution id
            :   `locale` - the locale

        &nbsp;
        -   #### getLocationsWithinMapExtendAsync

                void getLocationsWithinMapExtendAsync(MapExtend mapExtend,                                      java.lang.String solutionId,                                      java.util.Locale locale)

            Gets locations within map extend async.

            [Parameters:]{.paramLabel}
            :   `mapExtend` - the map extend
            :   `solutionId` - the solution id
            :   `locale` - the locale

        &nbsp;
        -   #### getLocationsWithinMapExtendAsync

                void getLocationsWithinMapExtendAsync(int floorIndex,                                      float zoomLevel,                                      MapExtend mapExtend,                                      java.lang.String solutionId,                                      java.util.Locale locale)

            Gets locations within map extend async.

            [Parameters:]{.paramLabel}
            :   `floorIndex` - the floor index
            :   `zoomLevel` - the zoom level
            :   `mapExtend` - the map extend
            :   `solutionId` - the solution id
            :   `locale` - the locale

        &nbsp;
        -   #### getLocationsUsingQueryAsync

                void getLocationsUsingQueryAsync(LocationQuery locationQuery,                                 java.util.Locale locale)

            Gets locations using query async.

            [Parameters:]{.paramLabel}
            :   `locationQuery` - the location query
            :   `locale` - the locale

        &nbsp;
        -   #### getLocationsUsingQuery

                java.util.List<Location> getLocationsUsingQuery(LocationQuery locationQuery,                                                java.util.Locale locale)

            Gets locations using query.

            [Parameters:]{.paramLabel}
            :   `locationQuery` - the location query
            :   `locale` - the locale

            [Returns:]{.returnLabel}
            :   the locations using query

        &nbsp;
        -   #### cancelRequest

                void cancelRequest()

            Cancel request.

        &nbsp;
        -   #### setOnLocationsReadyListener

                void setOnLocationsReadyListener(OnLocationsReadyListener listener)

            Set a listener object to catch the locations.

            [Parameters:]{.paramLabel}
            :   `listener` - The listener object.

com.mapspeople.data

Class MPAppDataProvider {#class-mpappdataprovider .title title="Class MPAppDataProvider"}
-----------------------

-   java.lang.Object
-   -   com.mapspeople.data.MPAppDataProvider

-   

    All Implemented Interfaces:
    :   AppDataProvider

    ------------------------------------------------------------------------

    \

        public class MPAppDataProviderextends java.lang.Objectimplements AppDataProvider

    Context class for fetching app data from service hosted by
    MapsPeople (or another service that implements the same data
    structure)

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `getAppDataAsync(java.lang.String |
        |                                   |  siteName)`                       |
        |                                   | Gets app data async.              |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOnAppDataReadyListener(OnAppD |
        |                                   | ataReadyListener listener)`       |
        |                                   | Sets on app data ready listener.  |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### MPAppDataProvider

                public MPAppDataProvider(android.content.Context context)

            Instantiates a new Mp app data provider.

            [Parameters:]{.paramLabel}
            :   `context` - the context

    &nbsp;
    -   ### Method Detail

        -   #### setOnAppDataReadyListener

                public void setOnAppDataReadyListener(OnAppDataReadyListener listener)

            Sets on app data ready listener.

            [Specified by:]{.overrideSpecifyLabel}
            :   `setOnAppDataReadyListener` in
                interface `AppDataProvider`

            [Parameters:]{.paramLabel}
            :   `listener` - the listener

        &nbsp;
        -   #### getAppDataAsync

                public void getAppDataAsync(java.lang.String siteName)

            Gets app data async.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getAppDataAsync` in interface `AppDataProvider`

            [Parameters:]{.paramLabel}
            :   `siteName` - the site name

com.mapspeople.data

Class MPCategoryProvider {#class-mpcategoryprovider .title title="Class MPCategoryProvider"}
------------------------

-   java.lang.Object
-   -   com.mapspeople.data.MPCategoryProvider

-   

    All Implemented Interfaces:
    :   CategoryProvider

    ------------------------------------------------------------------------

    \

        public class MPCategoryProviderextends java.lang.Objectimplements CategoryProvider

    Use this provider to fetch solution from MapsPeoples services, the
    provider is default in {com.mapspeople.mapcontrol.MapControl}

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `getCategoryAsync(java.lang.Strin |
        |                                   | g arg,                java.util.L |
        |                                   | ocale locale)`                    |
        |                                   | Gets category async.              |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOnCategoryReadyListener(OnCat |
        |                                   | egoryReadyListener listener)`     |
        |                                   | Sets on category ready listener.  |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### MPCategoryProvider

                public MPCategoryProvider()

    &nbsp;
    -   ### Method Detail

        -   #### getCategoryAsync

                public void getCategoryAsync(java.lang.String arg,                             java.util.Locale locale)

            Gets category async.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getCategoryAsync` in interface `CategoryProvider`

            [Parameters:]{.paramLabel}
            :   `arg` - the arg
            :   `locale` - the locale

        &nbsp;
        -   #### setOnCategoryReadyListener

                public void setOnCategoryReadyListener(OnCategoryReadyListener listener)

            Sets on category ready listener.

            [Specified by:]{.overrideSpecifyLabel}
            :   `setOnCategoryReadyListener` in
                interface `CategoryProvider`

            [Parameters:]{.paramLabel}
            :   `listener` - the listener

com.mapspeople.data

Class MPGatewayProvider {#class-mpgatewayprovider .title title="Class MPGatewayProvider"}
-----------------------

-   java.lang.Object
-   -   com.mapspeople.data.MPGatewayProvider

-   

    All Implemented Interfaces:
    :   GatewayProvider

    ------------------------------------------------------------------------

    \

        public class MPGatewayProviderextends java.lang.Objectimplements GatewayProvider

    Use this provider to fetch gateways from MapsPeoples services, the
    provider is default in {com.mapspeople.mapcontrol.MapControl}

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `getGatewayAsync(java.lang.String |
        |                                   |  solutionId)`                     |
        |                                   | Gets gateway async.               |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOnGatewayReadyListener(OnGate |
        |                                   | wayReadyListener listener)`       |
        |                                   | Sets on gateway ready listener.   |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### MPGatewayProvider

                public MPGatewayProvider()

    &nbsp;
    -   ### Method Detail

        -   #### getGatewayAsync

                public void getGatewayAsync(java.lang.String solutionId)

            Gets gateway async.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getGatewayAsync` in interface `GatewayProvider`

            [Parameters:]{.paramLabel}
            :   `solutionId` - the solution id

        &nbsp;
        -   #### setOnGatewayReadyListener

                public void setOnGatewayReadyListener(OnGatewayReadyListener listener)

            Sets on gateway ready listener.

            [Specified by:]{.overrideSpecifyLabel}
            :   `setOnGatewayReadyListener` in
                interface `GatewayProvider`

            [Parameters:]{.paramLabel}
            :   `listener` - the listener

com.mapspeople.data

Class MPLocationsProvider {#class-mplocationsprovider .title title="Class MPLocationsProvider"}
-------------------------

-   java.lang.Object
-   -   com.mapspeople.data.MPLocationsProvider

-   

    All Implemented Interfaces:
    :   LocationsProvider

    ------------------------------------------------------------------------

    \

        public class MPLocationsProviderextends java.lang.Objectimplements LocationsProvider

    Use this provider to fetch locations from MapsPeoples services

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `cancelRequest()`                 |
        |                                   | Cancel request.                   |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `getLocationsAsync(java.lang.Stri |
        |                                   | ng solutionId,                 ja |
        |                                   | va.util.Locale locale)`           |
        |                                   | Gets locations async.             |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `getLocationsDetailsAsync(java.la |
        |                                   | ng.String solutionId,             |
        |                                   |             java.lang.String loca |
        |                                   | tionId)`                          |
        |                                   | Gets locations details async.     |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<Location>`        | `getLocationsUsingQuery(LocationQ |
        |                                   | uery locationQuery,               |
        |                                   |         java.util.Locale locale)` |
        |                                   | Gets locations using query.       |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `getLocationsUsingQueryAsync(Loca |
        |                                   | tionQuery locationQuery,          |
        |                                   |                   java.util.Local |
        |                                   | e locale)`                        |
        |                                   | Gets locations using query async. |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `getLocationsWithinMapExtendAsync |
        |                                   | (int floorIndex,                  |
        |                                   |                float zoomLevel,   |
        |                                   |                               Map |
        |                                   | Extend mapExtend,                 |
        |                                   |                 java.lang.String  |
        |                                   | solutionId,                       |
        |                                   |           java.util.Locale locale |
        |                                   | )`                                |
        |                                   | Gets locations within map extend  |
        |                                   | async.                            |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `getLocationsWithinMapExtendAsync |
        |                                   | (MapExtend mapExtend,             |
        |                                   |                     java.lang.Str |
        |                                   | ing solutionId,                   |
        |                                   |               java.util.Locale lo |
        |                                   | cale)`                            |
        |                                   | Gets locations within map extend  |
        |                                   | async.                            |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOnLocationsReadyListener(OnLo |
        |                                   | cationsReadyListener listener)`   |
        |                                   | Sets on locations ready listener. |
        +-----------------------------------+-----------------------------------+
        | `static void`                     | `setSolution(Solution _solution)` |
        |                                   | Sets solution.                    |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### MPLocationsProvider

                public MPLocationsProvider(android.content.Context context)

            Instantiates a new Mp locations provider.

            [Parameters:]{.paramLabel}
            :   `context` - the context

    &nbsp;
    -   ### Method Detail

        -   #### setSolution

                public static void setSolution(Solution _solution)

            Sets solution.

            [Parameters:]{.paramLabel}
            :   `_solution` - the solution

        &nbsp;
        -   #### getLocationsAsync

                public void getLocationsAsync(java.lang.String solutionId,                              java.util.Locale locale)

            Gets locations async.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getLocationsAsync` in interface `LocationsProvider`

            [Parameters:]{.paramLabel}
            :   `solutionId` - the solution id
            :   `locale` - the locale

        &nbsp;
        -   #### getLocationsWithinMapExtendAsync

                public void getLocationsWithinMapExtendAsync(MapExtend mapExtend,                                             java.lang.String solutionId,                                             java.util.Locale locale)

            Gets locations within map extend async.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getLocationsWithinMapExtendAsync` in
                interface `LocationsProvider`

            [Parameters:]{.paramLabel}
            :   `mapExtend` - the map extend
            :   `solutionId` - the solution id
            :   `locale` - the locale

        &nbsp;
        -   #### getLocationsWithinMapExtendAsync

                public void getLocationsWithinMapExtendAsync(int floorIndex,                                             float zoomLevel,                                             MapExtend mapExtend,                                             java.lang.String solutionId,                                             java.util.Locale locale)

            Gets locations within map extend async.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getLocationsWithinMapExtendAsync` in
                interface `LocationsProvider`

            [Parameters:]{.paramLabel}
            :   `floorIndex` - the floor index
            :   `zoomLevel` - the zoom level
            :   `mapExtend` - the map extend
            :   `solutionId` - the solution id
            :   `locale` - the locale

        &nbsp;
        -   #### getLocationsUsingQueryAsync

                public void getLocationsUsingQueryAsync(LocationQuery locationQuery,                                        java.util.Locale locale)

            Gets locations using query async.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getLocationsUsingQueryAsync` in
                interface `LocationsProvider`

            [Parameters:]{.paramLabel}
            :   `locationQuery` - the location query
            :   `locale` - the locale

        &nbsp;
        -   #### setOnLocationsReadyListener

                public void setOnLocationsReadyListener(OnLocationsReadyListener listener)

            Sets on locations ready listener.

            [Specified by:]{.overrideSpecifyLabel}
            :   `setOnLocationsReadyListener` in
                interface `LocationsProvider`

            [Parameters:]{.paramLabel}
            :   `listener` - the listener

        &nbsp;
        -   #### getLocationsDetailsAsync

                public void getLocationsDetailsAsync(java.lang.String solutionId,                                     java.lang.String locationId)

            Gets locations details async.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getLocationsDetailsAsync` in
                interface `LocationsProvider`

            [Parameters:]{.paramLabel}
            :   `solutionId` - the solution id
            :   `locationId` - the location id

        &nbsp;
        -   #### cancelRequest

                public void cancelRequest()

            Cancel request.

            [Specified by:]{.overrideSpecifyLabel}
            :   `cancelRequest` in interface `LocationsProvider`

        &nbsp;
        -   #### getLocationsUsingQuery

                public java.util.List<Location> getLocationsUsingQuery(LocationQuery locationQuery,                                                       java.util.Locale locale)

            Gets locations using query.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getLocationsUsingQuery` in
                interface `LocationsProvider`

            [Parameters:]{.paramLabel}
            :   `locationQuery` - the location query
            :   `locale` - the locale

            [Returns:]{.returnLabel}
            :   the locations using query

com.mapspeople.data

Class MPSolutionProvider {#class-mpsolutionprovider .title title="Class MPSolutionProvider"}
------------------------

-   java.lang.Object
-   -   com.mapspeople.data.MPSolutionProvider

-   

    All Implemented Interfaces:
    :   SolutionProvider

    ------------------------------------------------------------------------

    \

        public class MPSolutionProviderextends java.lang.Objectimplements SolutionProvider

    Use this provider to fetch solution from MapsPeoples services, the
    provider is default in {com.mapspeople.mapcontrol.MapControl}

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `getSolutionAsync(java.lang.Strin |
        |                                   | g arg,                java.util.L |
        |                                   | ocale locale)`                    |
        |                                   | Gets solution async.              |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOnSolutionReadyListener(OnSol |
        |                                   | utionReadyListener listener)`     |
        |                                   | Sets on solution ready listener.  |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### MPSolutionProvider

                public MPSolutionProvider()

    &nbsp;
    -   ### Method Detail

        -   #### getSolutionAsync

                public void getSolutionAsync(java.lang.String arg,                             java.util.Locale locale)

            Gets solution async.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getSolutionAsync` in interface `SolutionProvider`

            [Parameters:]{.paramLabel}
            :   `arg` - the arg
            :   `locale` - the locale

        &nbsp;
        -   #### setOnSolutionReadyListener

                public void setOnSolutionReadyListener(OnSolutionReadyListener listener)

            Sets on solution ready listener.

            [Specified by:]{.overrideSpecifyLabel}
            :   `setOnSolutionReadyListener` in
                interface `SolutionProvider`

            [Parameters:]{.paramLabel}
            :   `listener` - the listener

com.mapspeople.data

Interface OnAppConfigReadyListener {#interface-onappconfigreadylistener .title title="Interface OnAppConfigReadyListener"}
----------------------------------

-   

    ------------------------------------------------------------------------

    \

        public interface OnAppConfigReadyListener

    The interface On app config ready listener.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `onAppConfigReady(AppConfig appCo |
        |                                   | nfig)`                            |
        |                                   | On app config ready.              |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### onAppConfigReady

                void onAppConfigReady(AppConfig appConfig)

            On app config ready.

            [Parameters:]{.paramLabel}
            :   `appConfig` - the app config

com.mapspeople.data

Interface OnAppDataReadyListener {#interface-onappdatareadylistener .title title="Interface OnAppDataReadyListener"}
--------------------------------

-   

    ------------------------------------------------------------------------

    \

        public interface OnAppDataReadyListener

    App data ready listener

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `onAppDataReady(AppData appData)` |
        |                                   | App data ready event method.      |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### onAppDataReady

                void onAppDataReady(AppData appData)

            App data ready event method.

            [Parameters:]{.paramLabel}
            :   `appData` - The app data.

com.mapspeople.data

Interface OnBuildingReadyListener {#interface-onbuildingreadylistener .title title="Interface OnBuildingReadyListener"}
---------------------------------

-   

    ------------------------------------------------------------------------

    \

        public interface OnBuildingReadyListener

    The interface On building ready listener.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `onBuildingReady(BuildingCollecti |
        |                                   | on buildings)`                    |
        |                                   | On building ready.                |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### onBuildingReady

                void onBuildingReady(BuildingCollection buildings)

            On building ready.

            [Parameters:]{.paramLabel}
            :   `buildings` - the buildings

com.mapspeople.data

Interface OnCategoryReadyListener {#interface-oncategoryreadylistener .title title="Interface OnCategoryReadyListener"}
---------------------------------

-   

    ------------------------------------------------------------------------

    \

        public interface OnCategoryReadyListener

    The interface On category ready listener.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `onCategoryReady(CategoryCollecti |
        |                                   | on categories)`                   |
        |                                   | On category ready.                |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### onCategoryReady

                void onCategoryReady(CategoryCollection categories)

            On category ready.

            [Parameters:]{.paramLabel}
            :   `categories` - the categories

com.mapspeople.data

Interface OnDataReadyListener {#interface-ondatareadylistener .title title="Interface OnDataReadyListener"}
-----------------------------

-   

    ------------------------------------------------------------------------

    \

        public interface OnDataReadyListener

    Listener interface to catch data context fetching events.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `onAppConfigDataReady(AppConfig s |
        |                                   | ettings)`                         |
        |                                   | Listener method to recieve app    |
        |                                   | settings.                         |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `onAppDataReady()`                |
        |                                   | Listener method to catch app data |
        |                                   | fetch.                            |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `onCategoryDataReady(CategoryColl |
        |                                   | ection categories)`               |
        |                                   | Listener method to catch category |
        |                                   | fetch.                            |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `onLocationDataReady()`           |
        |                                   | Listener method to catch          |
        |                                   | locations fetch.                  |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `onPushMessageDataReady(PushMessa |
        |                                   | geCollection pushMessages)`       |
        |                                   | Listener method to catch push     |
        |                                   | messages fetch.                   |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `onSolutionDataReady(Solution sol |
        |                                   | ution)`                           |
        |                                   | Listener method to catch solution |
        |                                   | fetch.                            |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `onVenueDataReady(VenueCollection |
        |                                   |  venueCollection)`                |
        |                                   | Listener method to catch venues   |
        |                                   | fetch.                            |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### onLocationDataReady

                void onLocationDataReady()

            Listener method to catch locations fetch.

        &nbsp;
        -   #### onAppDataReady

                void onAppDataReady()

            Listener method to catch app data fetch.

        &nbsp;
        -   #### onVenueDataReady

                void onVenueDataReady(VenueCollection venueCollection)

            Listener method to catch venues fetch.

            [Parameters:]{.paramLabel}
            :   `venueCollection` - the venue collection

        &nbsp;
        -   #### onSolutionDataReady

                void onSolutionDataReady(Solution solution)

            Listener method to catch solution fetch.

            [Parameters:]{.paramLabel}
            :   `solution` - the solution

        &nbsp;
        -   #### onCategoryDataReady

                void onCategoryDataReady(CategoryCollection categories)

            Listener method to catch category fetch.

            [Parameters:]{.paramLabel}
            :   `categories` - the categories

        &nbsp;
        -   #### onPushMessageDataReady

                void onPushMessageDataReady(PushMessageCollection pushMessages)

            Listener method to catch push messages fetch.

            [Parameters:]{.paramLabel}
            :   `pushMessages` - the push messages

        &nbsp;
        -   #### onAppConfigDataReady

                void onAppConfigDataReady(AppConfig settings)

            Listener method to recieve app settings.

            [Parameters:]{.paramLabel}
            :   `settings` - the settings

com.mapspeople.data

Interface OnGatewayReadyListener {#interface-ongatewayreadylistener .title title="Interface OnGatewayReadyListener"}
--------------------------------

-   

    ------------------------------------------------------------------------

    \

        public interface OnGatewayReadyListener

    The interface On gateway ready listener.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `onGatewayDataReady(Gateway gatew |
        |                                   | ay)`                              |
        |                                   | On gateway data ready.            |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### onGatewayDataReady

                void onGatewayDataReady(Gateway gateway)

            On gateway data ready.

            [Parameters:]{.paramLabel}
            :   `gateway` - the gateway

com.mapspeople.data

Interface OnGeocodeReadyListener {#interface-ongeocodereadylistener .title title="Interface OnGeocodeReadyListener"}
--------------------------------

-   

    ------------------------------------------------------------------------

    \

        public interface OnGeocodeReadyListener

    The interface On geocode ready listener.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `onGeocodeReady(ReverseGeoCodeRes |
        |                                   | ult[] geocode)`                   |
        |                                   | On geocode ready.                 |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### onGeocodeReady

                void onGeocodeReady(ReverseGeoCodeResult[] geocode)

            On geocode ready.

            [Parameters:]{.paramLabel}
            :   `geocode` - the geocode

com.mapspeople.data

Interface OnLocationsReadyListener {#interface-onlocationsreadylistener .title title="Interface OnLocationsReadyListener"}
----------------------------------

-   

    All Known Implementing Classes:
    :   LocationCache

    ------------------------------------------------------------------------

    \

        public interface OnLocationsReadyListener

    Locations ready event listener

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `onLocationDetailsReady(Location  |
        |                                   | location)`                        |
        |                                   | On location details ready.        |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `onLocationsReady(java.util.List< |
        |                                   | Location> locations)`             |
        |                                   | On locations ready event method   |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### onLocationsReady

                void onLocationsReady(java.util.List<Location> locations)

            On locations ready event method

            [Parameters:]{.paramLabel}
            :   `locations` - The locations.

        &nbsp;
        -   #### onLocationDetailsReady

                void onLocationDetailsReady(Location location)

            On location details ready.

            [Parameters:]{.paramLabel}
            :   `location` - the location

com.mapspeople.data

Interface OnPushMessageReadyListener {#interface-onpushmessagereadylistener .title title="Interface OnPushMessageReadyListener"}
------------------------------------

-   

    ------------------------------------------------------------------------

    \

        public interface OnPushMessageReadyListener

    The interface On push message ready listener.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `onPushMessageReady(PushMessageCo |
        |                                   | llection pushMessageCollection)`  |
        |                                   | On push message ready.            |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### onPushMessageReady

                void onPushMessageReady(PushMessageCollection pushMessageCollection)

            On push message ready.

            [Parameters:]{.paramLabel}
            :   `pushMessageCollection` - the push message collection

com.mapspeople.data

Interface OnSolutionReadyListener {#interface-onsolutionreadylistener .title title="Interface OnSolutionReadyListener"}
---------------------------------

-   

    ------------------------------------------------------------------------

    \

        public interface OnSolutionReadyListener

    The interface On solution ready listener.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `onSolutionReady(Solution solutio |
        |                                   | n)`                               |
        |                                   | On solution ready.                |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### onSolutionReady

                void onSolutionReady(Solution solution)

            On solution ready.

            [Parameters:]{.paramLabel}
            :   `solution` - the solution

com.mapspeople.data

Interface OnVenuesReadyListener {#interface-onvenuesreadylistener .title title="Interface OnVenuesReadyListener"}
-------------------------------

-   

    ------------------------------------------------------------------------

    \

        public interface OnVenuesReadyListener

    The interface On venues ready listener.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `onBuildingsReady(BuildingCollect |
        |                                   | ion buildings)`                   |
        |                                   | On buildings ready.               |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `onVenuesReady(VenueCollection ve |
        |                                   | nues)`                            |
        |                                   | On venues ready.                  |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### onVenuesReady

                void onVenuesReady(VenueCollection venues)

            On venues ready.

            [Parameters:]{.paramLabel}
            :   `venues` - the venues

        &nbsp;
        -   #### onBuildingsReady

                void onBuildingsReady(BuildingCollection buildings)

            On buildings ready.

            [Parameters:]{.paramLabel}
            :   `buildings` - the buildings

com.mapspeople.data

Interface PushMessageProvider {#interface-pushmessageprovider .title title="Interface PushMessageProvider"}
-----------------------------

-   

    All Known Implementing Classes:
    :   MPPushMessageAsyncLoader

    ------------------------------------------------------------------------

    \

        public interface PushMessageProvider

    The interface Push message provider.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `getPushMessageAsync(java.lang.St |
        |                                   | ring arg,                   java. |
        |                                   | util.Locale locale)`              |
        |                                   | Gets push message async.          |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOnPushMessageReadyListener(On |
        |                                   | PushMessageReadyListener listener |
        |                                   | )`                                |
        |                                   | Sets on push message ready        |
        |                                   | listener.                         |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### getPushMessageAsync

                void getPushMessageAsync(java.lang.String arg,                         java.util.Locale locale)

            Gets push message async.

            [Parameters:]{.paramLabel}
            :   `arg` - the arg
            :   `locale` - the locale

        &nbsp;
        -   #### setOnPushMessageReadyListener

                void setOnPushMessageReadyListener(OnPushMessageReadyListener listener)

            Sets on push message ready listener.

            [Parameters:]{.paramLabel}
            :   `listener` - the listener

com.mapspeople.data

Interface SolutionProvider {#interface-solutionprovider .title title="Interface SolutionProvider"}
--------------------------

-   

    All Known Implementing Classes:
    :   MPSolutionAsyncLoader, MPSolutionProvider

    ------------------------------------------------------------------------

    \

        public interface SolutionProvider

    The interface Solution provider.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `getSolutionAsync(java.lang.Strin |
        |                                   | g arg,                java.util.L |
        |                                   | ocale locale)`                    |
        |                                   | Gets solution async.              |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOnSolutionReadyListener(OnSol |
        |                                   | utionReadyListener listener)`     |
        |                                   | Sets on solution ready listener.  |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### getSolutionAsync

                void getSolutionAsync(java.lang.String arg,                      java.util.Locale locale)

            Gets solution async.

            [Parameters:]{.paramLabel}
            :   `arg` - the arg
            :   `locale` - the locale

        &nbsp;
        -   #### setOnSolutionReadyListener

                void setOnSolutionReadyListener(OnSolutionReadyListener listener)

            Sets on solution ready listener.

            [Parameters:]{.paramLabel}
            :   `listener` - the listener

com.mapspeople.data

Interface VenueProvider {#interface-venueprovider .title title="Interface VenueProvider"}
-----------------------

-   

    All Known Implementing Classes:
    :   MPVenueAsyncLoader

    ------------------------------------------------------------------------

    \

        public interface VenueProvider

    The interface Venue provider.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `getBuildingsAsync(java.lang.Stri |
        |                                   | ng arg,                 java.lang |
        |                                   | .String venueName,                |
        |                                   |   java.util.Locale locale)`       |
        |                                   | Gets buildings async.             |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `getVenuesAsync(java.lang.String  |
        |                                   | arg,              java.util.Local |
        |                                   | e locale)`                        |
        |                                   | Gets venues async.                |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOnVenuesReadyListener(OnVenue |
        |                                   | sReadyListener listener)`         |
        |                                   | Sets on venues ready listener.    |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### getVenuesAsync

                void getVenuesAsync(java.lang.String arg,                    java.util.Locale locale)

            Gets venues async.

            [Parameters:]{.paramLabel}
            :   `arg` - the arg
            :   `locale` - the locale

        &nbsp;
        -   #### getBuildingsAsync

                void getBuildingsAsync(java.lang.String arg,                       java.lang.String venueName,                       java.util.Locale locale)

            Gets buildings async.

            [Parameters:]{.paramLabel}
            :   `arg` - the arg
            :   `venueName` - the venue name
            :   `locale` - the locale

        &nbsp;
        -   #### setOnVenuesReadyListener

                void setOnVenuesReadyListener(OnVenuesReadyListener listener)

            Sets on venues ready listener.

            [Parameters:]{.paramLabel}
            :   `listener` - the listener

debug
=====

com.mapspeople.debug

Class dbglog {#class-dbglog .title title="Class dbglog"}
------------

-   java.lang.Object
-   -   com.mapspeople.debug.dbglog

-   

    ------------------------------------------------------------------------

    \

        public class dbglogextends java.lang.Object

    The type Dbglog.

-   -   ### Field Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `static void`                     | `Assert(boolean condition)`       |
        |                                   | Throws an assert if the given     |
        |                                   | condition is not met.             |
        +-----------------------------------+-----------------------------------+
        | `static void`                     | `Assert(boolean condition,      j |
        |                                   | ava.lang.String message)`         |
        |                                   | Throws an assert if the given     |
        |                                   | condition is not met.             |
        +-----------------------------------+-----------------------------------+
        | `static boolean`                  | `isDebugMode()`                   |
        |                                   | Is debug mode boolean.            |
        +-----------------------------------+-----------------------------------+
        | `static void`                     | `Log(java.lang.String message)`   |
        |                                   | Sets the logging level            |
        +-----------------------------------+-----------------------------------+
        | `static void`                     | `Log(java.lang.String message,    |
        |                                   | int level)`                       |
        |                                   | Sets the logging level            |
        +-----------------------------------+-----------------------------------+
        | `static void`                     | `SetLoglevel(int level)`          |
        |                                   | Sets the logging level            |
        +-----------------------------------+-----------------------------------+
        | `static void`                     | `startTimer()`                    |
        |                                   | Starts a timer for instrumenting  |
        |                                   | code Note: This method is not     |
        |                                   | thread safe.                      |
        +-----------------------------------+-----------------------------------+
        | `static void`                     | `stopTimer(java.lang.String messa |
        |                                   | ge)`                              |
        |                                   | Stops a timer and shows the delta |
        |                                   | since the timer was started along |
        |                                   | with a message Note: This method  |
        |                                   | is not thread safe.               |
        +-----------------------------------+-----------------------------------+
        | `static void`                     | `useDebug(boolean debugInfo)`     |
        |                                   | Use debug.                        |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Field Detail

        -   #### DEBUG

                public static final int DEBUG

            The constant DEBUG.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### INFO

                public static final int INFO

            The constant INFO.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### WARN

                public static final int WARN

            The constant WARN.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### ERROR

                public static final int ERROR

            The constant ERROR.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### ASSERT

                public static final int ASSERT

            The constant ASSERT.

            [See Also:]{.seeLabel}
            :   Constant Field Values

    &nbsp;
    -   ### Constructor Detail

        -   #### dbglog

                public dbglog()

    &nbsp;
    -   ### Method Detail

        -   #### Assert

                public static void Assert(boolean condition)

            Throws an assert if the given condition is not met.

            [Parameters:]{.paramLabel}
            :   `condition` - If this condition is NOT true the
                assertion will throw an assert exception

        &nbsp;
        -   #### Assert

                public static void Assert(boolean condition,                          java.lang.String message)

            Throws an assert if the given condition is not met.

            [Parameters:]{.paramLabel}
            :   `condition` - If this condition is NOT true the
                assertion will throw an assert exception
            :   `message` - The message to show if this assertion is
                executed

        &nbsp;
        -   #### SetLoglevel

                public static void SetLoglevel(int level)

            Sets the logging level

            [Parameters:]{.paramLabel}
            :   `level` - If Log is called only messages with a log type
                equal to or higher than this level will be shown.

        &nbsp;
        -   #### Log

                public static void Log(java.lang.String message)

            Sets the logging level

            [Parameters:]{.paramLabel}
            :   `message` - The message to be shown. The log level will
                be set to DEBUG

        &nbsp;
        -   #### Log

                public static void Log(java.lang.String message,                       int level)

            Sets the logging level

            [Parameters:]{.paramLabel}
            :   `message` - The message to be shown. The log level will
                be set to DEBUG
            :   `level` - The log level used for this message. The
                message will only be shown if logging level is set to
                this level or above.

        &nbsp;
        -   #### startTimer

                public static void startTimer()

            Starts a timer for instrumenting code Note: This method is
            not thread safe.

        &nbsp;
        -   #### stopTimer

                public static void stopTimer(java.lang.String message)

            Stops a timer and shows the delta since the timer was
            started along with a message Note: This method is not thread
            safe.

            [Parameters:]{.paramLabel}
            :   `message` - The message to be shown. The log level will
                be set to DEBUG

        &nbsp;
        -   #### useDebug

                public static void useDebug(boolean debugInfo)

            Use debug.

            [Parameters:]{.paramLabel}
            :   `debugInfo` - the debug info

        &nbsp;
        -   #### isDebugMode

                public static boolean isDebugMode()

            Is debug mode boolean.

            [Returns:]{.returnLabel}
            :   the boolean

info
====

com.mapspeople.info

Class Info {#class-info .title title="Class Info"}
----------

-   java.lang.Object
-   -   com.mapspeople.info.Info

-   

    ------------------------------------------------------------------------

    \

        public class Infoextends java.lang.Object

    The type Info.

-   -   ### Constructor Summary

        +-----------------------------------------------------------------------+
        | Constructor and Description                                           |
        +=======================================================================+
        | `Info()`                                                              |
        | Instantiates a new Info.                                              |
        +-----------------------------------------------------------------------+

    &nbsp;
    -   ### Method Summary

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### Info

                public Info()

            Instantiates a new Info.

mapcontrol
==========

com.mapspeople.mapcontrol

Class MapControl {#class-mapcontrol .title title="Class MapControl"}
----------------

-   java.lang.Object
-   -   com.mapspeople.mapcontrol.MapControl

-   

    ------------------------------------------------------------------------

    \

        public class MapControlextends java.lang.Object

    Convenience class for extending a Google map's display and
    functionality with Mapspeople's buildings, overlays,
    locations/points-of-interest, position and navigation

    To fire up a venueId on a google map, first set up the google map,
    then create a `MapControl` with your MapsPeople client and venueId
    id:

    ``
         SupportMapFragment fragment = ((SupportMapFragment) getSupportFragmentManager().findFragmentById(R.id.map_fragment)); googleMap = fragment.getMap(); mapControl = new MapControl(getApplicationContext(), fragment); mapControl.setOnDataReadyListener(mapControlListener); mapControl.initMap("0DB13630-031A-47E8-A680-A1C197D5D367", "rtx"); 

    To setup with e.g. locations from your own service or database, make
    an implementation of the `LocationsProvider` interface, and do

    ``
         MyLocationsProvider myLocationsProvider = new MyLocationsProvider(); mapControl.initMap("0DB13630-031A-47E8-A680-A1C197D5D367", "rtx", myLocationsProvider, null, null, null); 

    To add your own icons for locations, setup display rule(s) and add
    to the MapControl object:

    ``
         Bitmap icon1 = BitmapFactory.decodeResource(getApplicationContext().getRessources(), R.drawable.marker_icon1); Bitmap icon2 = BitmapFactory.decodeResource(getApplicationContext().getRessources(), R.drawable.marker_icon2);  // Rule applies to category "room" and will display at zoom level 19 and higher LocationDisplayRule myRule1 = new LocationDisplayRule("room", icon1, 19); // Rule applies to category "poi" and will display at zoom level 15 and higher LocationDisplayRule myRule2 = new LocationDisplayRule("poi", icon2, 15);  mapControl.addLocationDisplayRule(myRule1); mapControl.addLocationDisplayRule(myRule2);  MyLocationsProvider myLocationsProvider = new MyLocationsProvider(); mapControl.initMap("0DB13630-031A-47E8-A680-A1C197D5D367", "rtx", myLocationsProvider, null, null, null); 

-   -   ### Field Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `addDisplayRules(LocationDisplayR |
        |                                   | ules displayRules)`               |
        |                                   | Add rules needed to display       |
        |                                   | locations correctly.              |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `addLocationDisplayRule(LocationD |
        |                                   | isplayRule rule)`                 |
        |                                   | Add a display rule to the map     |
        |                                   | display of the locations.         |
        +-----------------------------------+-----------------------------------+
        | `static void`                     | `addMarkerCallback(Marker marker, |
        |                                   |                  android.view.Vie |
        |                                   | w.OnClickListener listener)`      |
        |                                   | Method used to add a callback to  |
        |                                   | markers.                          |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `addOnSnippetTappedListener(OnSni |
        |                                   | ppetTappedListener listener)`     |
        |                                   | Assign a listener object to catch |
        |                                   | the user interaction with the     |
        |                                   | location info snippet appearing   |
        |                                   | in the bottom of the map view.    |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `addPositionProvider(PositionProv |
        |                                   | ider positionProvider)`           |
        |                                   | Add position provider.            |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `build(android.content.Context co |
        |                                   | ntext,     SupportMapFragment fra |
        |                                   | gment)`                           |
        |                                   | Build.                            |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `clearMap()`                      |
        |                                   | Clear map.                        |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `closeRouting()`                  |
        |                                   | Close the current routing         |
        |                                   | control.                          |
        +-----------------------------------+-----------------------------------+
        | `static void`                     | `deleteMarkerCallback(Marker mark |
        |                                   | er)`                              |
        |                                   | Deletes a given marker from the   |
        |                                   | watchlist.                        |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `displaySearchResults(java.util.L |
        |                                   | ist<Location> inputLocations,     |
        |                                   |                 boolean fitBounds |
        |                                   | )`                                |
        |                                   | Use this method to display        |
        |                                   | temporary locations, not points   |
        |                                   | of interests location.            |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `displaySingleLocation(Location l |
        |                                   | ocation)`                         |
        |                                   | Display single location.          |
        +-----------------------------------+-----------------------------------+
        | `static AppConfig`                | `getAppConfig()`                  |
        |                                   | Gets app config.                  |
        +-----------------------------------+-----------------------------------+
        | `AppDataProvider`                 | `getAppDataProvider()`            |
        |                                   | Gets app data provider.           |
        +-----------------------------------+-----------------------------------+
        | `static java.lang.String`         | `getClientId()`                   |
        |                                   | Gets client id.                   |
        +-----------------------------------+-----------------------------------+
        | `Building`                        | `getCurrentBuilding()`            |
        |                                   | Gets current building.            |
        +-----------------------------------+-----------------------------------+
        | `Floor`                           | `getCurrentBuildingFloor()`       |
        |                                   | Returns the current floor of the  |
        |                                   | current building in focus.        |
        +-----------------------------------+-----------------------------------+
        | `int`                             | `getCurrentFloorIndex()`          |
        |                                   | Returns the current selected      |
        |                                   | floor index                       |
        +-----------------------------------+-----------------------------------+
        | `PositionIndicator`               | `getCurrentPosition()`            |
        |                                   | Get the current user position as  |
        |                                   | a 2d/3d-coordinate (and an        |
        |                                   | approximation circle - coming     |
        |                                   | soon)                             |
        +-----------------------------------+-----------------------------------+
        | `int`                             | `getCurrentState()`               |
        |                                   | Get the current locator state.    |
        +-----------------------------------+-----------------------------------+
        | `LocationDisplayRules`            | `getDisplayRules()`               |
        |                                   | Get the location display rules    |
        |                                   | that is currently set.            |
        +-----------------------------------+-----------------------------------+
        | `FloorSelector`                   | `getFloorSelector()`              |
        |                                   | Get the floor selector control    |
        |                                   | object.                           |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getLangugage()`                  |
        |                                   | Gets the current language.        |
        +-----------------------------------+-----------------------------------+
        | `Location`                        | `getLocation(Marker marker)`      |
        |                                   | Get a location by marker          |
        |                                   | reference.                        |
        +-----------------------------------+-----------------------------------+
        | `Location`                        | `getLocation(java.lang.String id) |
        |                                   | `                                 |
        |                                   | Get a location by string id       |
        |                                   | reference.                        |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<Location>`        | `getLocations()`                  |
        |                                   | Get the current locations that is |
        |                                   | to be displayed on the Google     |
        |                                   | map.                              |
        +-----------------------------------+-----------------------------------+
        | `LocationsProvider`               | `getLocationsProvider()`          |
        |                                   | Gets locations provider.          |
        +-----------------------------------+-----------------------------------+
        | `GoogleMap`                       | `getMap()`                        |
        |                                   | Gets map.                         |
        +-----------------------------------+-----------------------------------+
        | `int`                             | `getNavigationMode()`             |
        |                                   | Get the mode of navigation,       |
        |                                   | either RoutingMode.NONE,          |
        |                                   | RoutingMode.REALTIME or           |
        |                                   | RoutingMode.TURN\_BY\_TURN        |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<PositionProvider> | `getPositionProviders()`          |
        | `                                 | Gets position providers.          |
        +-----------------------------------+-----------------------------------+
        | `Route`                           | `getRoute()`                      |
        |                                   | Gets route.                       |
        +-----------------------------------+-----------------------------------+
        | `RoutingProvider`                 | `getRoutingProvider()`            |
        |                                   | Get the routing provider          |
        +-----------------------------------+-----------------------------------+
        | `static Solution`                 | `getSolution()`                   |
        |                                   | Gets solution.                    |
        +-----------------------------------+-----------------------------------+
        | `static java.lang.String`         | `getTypeUrl(java.lang.String type |
        |                                   | Name)`                            |
        |                                   | Gets type url.                    |
        +-----------------------------------+-----------------------------------+
        | `VenueCollection`                 | `getVenueCollection()`            |
        |                                   | Get the current collection of     |
        |                                   | venues                            |
        +-----------------------------------+-----------------------------------+
        | `VenueProvider`                   | `getVenueProvider()`              |
        |                                   | Gets venue provider.              |
        +-----------------------------------+-----------------------------------+
        | `static VenueCollection`          | `getVenues()`                     |
        |                                   | Gets venues.                      |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `initMap(LocationsProvider locati |
        |                                   | onsProvider,       VenueProvider  |
        |                                   | venueProvider,       RoutingProvi |
        |                                   | der routingProvider)`             |
        |                                   | Initializes the map with custom   |
        |                                   | data providers.                   |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `initMap(java.lang.String clientI |
        |                                   | d)`                               |
        |                                   | Initializes the map with default  |
        |                                   | data provider for the given       |
        |                                   | client ID.                        |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `initMap(java.lang.String clientI |
        |                                   | d,       java.lang.String venueId |
        |                                   | )`                                |
        |                                   | Initializes the map control with  |
        |                                   | default providers for the given   |
        |                                   | client ID and venueId ID.         |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `initMap(java.lang.String clientI |
        |                                   | d,       java.lang.String venueId |
        |                                   | ,       LocationsProvider locatio |
        |                                   | nsProvider,       VenueProvider v |
        |                                   | enueProvider,       RoutingProvid |
        |                                   | er routingProvider)`              |
        |                                   | Initializes the map with custom   |
        |                                   | data providers.                   |
        +-----------------------------------+-----------------------------------+
        | `static boolean`                  | `isOnMainThread()`                |
        |                                   | Is on main thread boolean.        |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `loadPushMessagesData()`          |
        |                                   | Load push messages data.          |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `mapLocations(java.util.List<Loca |
        |                                   | tion> newLocations)`              |
        |                                   | Feed the map with a list of       |
        |                                   | locations.                        |
        +-----------------------------------+-----------------------------------+
        | `boolean`                         | `onBackPressed()`                 |
        |                                   | On back pressed boolean.          |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `route(Location origin,     Locat |
        |                                   | ion destination,     java.lang.St |
        |                                   | ring travelMode,     java.lang.St |
        |                                   | ring[] avoids,     java.util.Cale |
        |                                   | ndar departure,     java.util.Cal |
        |                                   | endar arrival)`                   |
        |                                   | Setup routing from a given origin |
        |                                   | to a given destination.           |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `routeTo(Location destination,    |
        |                                   |     java.lang.String travelMode,  |
        |                                   |       java.lang.String[] avoids,  |
        |                                   |       java.util.Calendar departur |
        |                                   | e,       java.util.Calendar arriv |
        |                                   | al)`                              |
        |                                   | Setup routing to the given        |
        |                                   | destination.                      |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `selectFloor(int floor)`          |
        |                                   | Select floor.                     |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `selectVenue(java.lang.String ven |
        |                                   | ueId)`                            |
        |                                   | Select venue.                     |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setAppDataProvider(AppDataProvid |
        |                                   | er appDataProvider)`              |
        |                                   | Set a custom app data provider    |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setCacheScheme(int scheme)`      |
        |                                   | Sets a caching scheme for tiles:  |
        |                                   | TILE\_CACHESCHEME\_NONE ( No      |
        |                                   | caching.                          |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setCurrentPosition(Point positio |
        |                                   | n,                  double probab |
        |                                   | ility)`                           |
        |                                   | Sets the current user position    |
        |                                   | manually.                         |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setCurrentState(int currentState |
        |                                   | )`                                |
        |                                   | Set the current locator state.    |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setDisplayRules(LocationDisplayR |
        |                                   | ules displayRules)`               |
        |                                   | Set the rules needed to display   |
        |                                   | locations correctly.              |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setInfoSnippet(InfoSnippetView i |
        |                                   | nfoSnippetView)`                  |
        |                                   | Define a location info view to    |
        |                                   | appear in the bottom of the map   |
        |                                   | view on marker click.             |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setLangugage(java.lang.String la |
        |                                   | ngugage)`                         |
        |                                   | Sets the language.                |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setLocationsProvider(LocationsPr |
        |                                   | ovider locationsProvider)`        |
        |                                   | Set a custom location data        |
        |                                   | provider                          |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setMapPosition(Point position,   |
        |                                   |             boolean animate)`     |
        |                                   | Set the center target position of |
        |                                   | the Google map.                   |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setMapPosition(Point position,   |
        |                                   |             float zoom,           |
        |                                   |     boolean animate)`             |
        |                                   | \* Set the center target position |
        |                                   | and zoom level of the Google map. |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setMapZoom(float zoom,           |
        |                                   | boolean animate)`                 |
        |                                   | Set the Google map zoom level.    |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setNavigationMode(int navigation |
        |                                   | Mode)`                            |
        |                                   | Set the mode of navigation,       |
        |                                   | either RoutingMode.NONE,          |
        |                                   | RoutingMode.REALTIME or           |
        |                                   | RoutingMode.TURN\_BY\_TURN        |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOnCameraChangeListener(OnCame |
        |                                   | raChangeListener listener)`       |
        |                                   | Set the map click listener.       |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOnDataReadyListener(OnDataRea |
        |                                   | dyListener listener)`             |
        |                                   | Set up a listener object to catch |
        |                                   | data returns                      |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOnFloorUpdateListener(OnFloor |
        |                                   | UpdateListener listener)`         |
        |                                   | Set up a listener object to catch |
        |                                   | floor changes made by either the  |
        |                                   | user or the positioning service   |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOnMapClickListener(OnMapClick |
        |                                   | Listener listener)`               |
        |                                   | Set the map click listener.       |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOnMarkerClickListener(OnMarke |
        |                                   | rClickListener listener)`         |
        |                                   | Set the marker click listener.    |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setRotation(float rotation)`     |
        |                                   | Set the map rotation / camera     |
        |                                   | bearing in degrees.               |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setRouteRenderer(RouteRenderer r |
        |                                   | enderer)`                         |
        |                                   | Sets route renderer.              |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setRouteStyle(RouteDisplayStyle  |
        |                                   | style)`                           |
        |                                   | Sets the render style of the      |
        |                                   | default route rendering           |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setRoutingProvider(RoutingProvid |
        |                                   | er routingProvider)`              |
        |                                   | Set a routing provider            |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setTileSize(int tileSize)`       |
        |                                   | Sets tile size.                   |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setupVenues(VenueCollection venu |
        |                                   | eCollection)`                     |
        |                                   | Add a collection of venues to the |
        |                                   | locator                           |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setVenueProvider(VenueProvider v |
        |                                   | enueProvider)`                    |
        |                                   | Set a custom venueId data         |
        |                                   | provider                          |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `showBuildingNames(boolean showBu |
        |                                   | ildingNames)`                     |
        |                                   | This method controls if building  |
        |                                   | names are written on the map.     |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `showInfoSnippet(Location locatio |
        |                                   | n)`                               |
        |                                   | Show info snippet.                |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `showUserPosition(boolean show)`  |
        |                                   | Show user position.               |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `startPositioning()`              |
        |                                   | Start the positioning service.    |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `startTrackPosition()`            |
        |                                   | Start track position.             |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `stopPositioning()`               |
        |                                   | Stop the positioning service.     |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `stopTrackPosition()`             |
        |                                   | Stop track position.              |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `updatePosition(PositionResult re |
        |                                   | s)`                               |
        |                                   | Update position.                  |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `useDownloadNotification(android. |
        |                                   | app.Activity activity)`           |
        |                                   | To make your app notify about     |
        |                                   | large map downloads assign an     |
        |                                   | activity using this method.       |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Field Detail

        -   #### NAVIGATION\_STATE

                public static final int NAVIGATION_STATE

            The constant NAVIGATION\_STATE.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### MAP\_STATE

                public static final int MAP_STATE

            The constant MAP\_STATE.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### SEARCH\_STATE

                public static final int SEARCH_STATE

            The constant SEARCH\_STATE.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### TILE\_CACHESCHEME\_NONE

                public static final int TILE_CACHESCHEME_NONE

            The constant TILE\_CACHESCHEME\_NONE.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### TILE\_CACHESCHEME\_TEMPORARY

                public static final int TILE_CACHESCHEME_TEMPORARY

            The constant TILE\_CACHESCHEME\_TEMPORARY.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### TILE\_CACHESCHEME\_PERSISTENT

                public static final int TILE_CACHESCHEME_PERSISTENT

            The constant TILE\_CACHESCHEME\_PERSISTENT.

            [See Also:]{.seeLabel}
            :   Constant Field Values

    &nbsp;
    -   ### Constructor Detail

        -   #### MapControl

                public MapControl(android.content.Context context)

            Instantiates a new Map control.

            [Parameters:]{.paramLabel}
            :   `context` - the context

        &nbsp;
        -   #### MapControl

                public MapControl(android.content.Context context,                  SupportMapFragment fragment)

            [Deprecated.]{.deprecatedLabel} [If used in combination with
            play-services-maps version 9.0 or above this method cannot
            be used. Constructor that initializes with a map fragment.
            To use the Locator object afterwards, assign some data
            providers to it using initMap]{.deprecationComment}

            Instantiates a new Map control.

            [Parameters:]{.paramLabel}
            :   `context` - The app context.
            :   `fragment` - The fragment

        &nbsp;
        -   #### MapControl

                public MapControl(android.content.Context context,                  SupportMapFragment fragment,                  GoogleMap googleMap)

            Instantiates a new Map control.

            [Parameters:]{.paramLabel}
            :   `context` - the context
            :   `fragment` - the fragment
            :   `googleMap` - the google map

        &nbsp;
        -   #### MapControl

                public MapControl(android.content.Context context,                  MapFragment fragment)

            Constructor that initializes with a map fragment. To use the
            Locator object afterwards, assign some data providers to it
            using initMap

            [Parameters:]{.paramLabel}
            :   `context` - The app context.
            :   `fragment` - The fragment

        &nbsp;
        -   #### MapControl

                public MapControl(android.content.Context context,                  MapView view)

            Constructor that initializes with a map view. To use
            afterwards, assign some data providers to it using initMap

            [Parameters:]{.paramLabel}
            :   `context` - The app context.
            :   `view` - The view

    &nbsp;
    -   ### Method Detail

        -   #### getRoute

                public Route getRoute()

            Gets route.

            [Returns:]{.returnLabel}
            :   the route

        &nbsp;
        -   #### build

                public void build(android.content.Context context,                  SupportMapFragment fragment)

            Build.

            [Parameters:]{.paramLabel}
            :   `context` - the context
            :   `fragment` - the fragment

        &nbsp;
        -   #### initMap

                public void initMap(java.lang.String clientId,                    java.lang.String venueId)

            Initializes the map control with default providers for the
            given client ID and venueId ID.

            [Parameters:]{.paramLabel}
            :   `clientId` - Some MapsPeople client id.
            :   `venueId` - Some MapsPeople venueId id.

        &nbsp;
        -   #### initMap

                public void initMap(java.lang.String clientId)

            Initializes the map with default data provider for the given
            client ID.

            [Parameters:]{.paramLabel}
            :   `clientId` - Some MapsPeople client id.

        &nbsp;
        -   #### initMap

                public void initMap(java.lang.String clientId,                    java.lang.String venueId,                    LocationsProvider locationsProvider,                    VenueProvider venueProvider,                    RoutingProvider routingProvider)

            Initializes the map with custom data providers.

            [Parameters:]{.paramLabel}
            :   `clientId` - the client id
            :   `venueId` - the venue id
            :   `locationsProvider` - The locations data provider
            :   `venueProvider` - The venueId data provider
            :   `routingProvider` - the routing provider

        &nbsp;
        -   #### initMap

                public void initMap(LocationsProvider locationsProvider,                    VenueProvider venueProvider,                    RoutingProvider routingProvider)

            Initializes the map with custom data providers.

            [Parameters:]{.paramLabel}
            :   `locationsProvider` - The locations data provider
            :   `venueProvider` - The venueId data provider
            :   `routingProvider` - the routing provider

        &nbsp;
        -   #### useDownloadNotification

                public void useDownloadNotification(android.app.Activity activity)

            To make your app notify about large map downloads assign an
            activity using this method.

            [Parameters:]{.paramLabel}
            :   `activity` - The activity that will show the
                notification.

        &nbsp;
        -   #### loadPushMessagesData

                public void loadPushMessagesData()

            Load push messages data.

        &nbsp;
        -   #### selectVenue

                public void selectVenue(java.lang.String venueId)

            Select venue.

            [Parameters:]{.paramLabel}
            :   `venueId` - the venue id

        &nbsp;
        -   #### getMap

                public GoogleMap getMap()

            Gets map.

            [Returns:]{.returnLabel}
            :   the map

        &nbsp;
        -   #### setCurrentPosition

                public void setCurrentPosition(Point position,                               double probability)

            Sets the current user position manually.

            [Parameters:]{.paramLabel}
            :   `position` - 3- or 2-dimensional point position. 3rd
                dimension will be floor/z-level in most cases.
            :   `probability` - Set a probability circle, alternatively
                hide it by setting value to 0.0.

        &nbsp;
        -   #### mapLocations

                public void mapLocations(java.util.List<Location> newLocations)

            Feed the map with a list of locations.

            [Parameters:]{.paramLabel}
            :   `newLocations` - The list of locations.

        &nbsp;
        -   #### setInfoSnippet

                public void setInfoSnippet(InfoSnippetView infoSnippetView)

            Define a location info view to appear in the bottom of the
            map view on marker click.

            [Parameters:]{.paramLabel}
            :   `infoSnippetView` - The view

        &nbsp;
        -   #### setRotation

                public void setRotation(float rotation)

            Set the map rotation / camera bearing in degrees. 0 is
            north.

            [Parameters:]{.paramLabel}
            :   `rotation` - the map rotation / camera bearing in
                degrees. 0 is north.

        &nbsp;
        -   #### setMapZoom

                public void setMapZoom(float zoom,                       boolean animate)

            Set the Google map zoom level.

            [Parameters:]{.paramLabel}
            :   `zoom` - The zoom level.
            :   `animate` - Whether to animate the change in zoom.

        &nbsp;
        -   #### setMapPosition

                public void setMapPosition(Point position,                           boolean animate)

            Set the center target position of the Google map.

            [Parameters:]{.paramLabel}
            :   `position` - The position.
            :   `animate` - Whether to animate the position change.

        &nbsp;
        -   #### setMapPosition

                public void setMapPosition(Point position,                           float zoom,                           boolean animate)

            \* Set the center target position and zoom level of the
            Google map.

            [Parameters:]{.paramLabel}
            :   `position` - The position.
            :   `zoom` - The zoom level.
            :   `animate` - Whether to animate the position and zoom
                change.

        &nbsp;
        -   #### getDisplayRules

                public LocationDisplayRules getDisplayRules()

            Get the location display rules that is currently set.

            [Returns:]{.returnLabel}
            :   A list object containing the display rules.

        &nbsp;
        -   #### setDisplayRules

                public void setDisplayRules(LocationDisplayRules displayRules)

            Set the rules needed to display locations correctly.

            [Parameters:]{.paramLabel}
            :   `displayRules` - the rules needed to display locations
                correctly.

        &nbsp;
        -   #### addDisplayRules

                public void addDisplayRules(LocationDisplayRules displayRules)

            Add rules needed to display locations correctly.

            [Parameters:]{.paramLabel}
            :   `displayRules` - The new display rule to add

        &nbsp;
        -   #### getCurrentBuildingFloor

                public Floor getCurrentBuildingFloor()

            Returns the current floor of the current building in focus.
            If no building is in focus, method will return null.

            [Returns:]{.returnLabel}
            :   The current floor object or null.

        &nbsp;
        -   #### getCurrentBuilding

                public Building getCurrentBuilding()

            Gets current building.

            [Returns:]{.returnLabel}
            :   the current building

        &nbsp;
        -   #### getCurrentFloorIndex

                public int getCurrentFloorIndex()

            Returns the current selected floor index

            [Returns:]{.returnLabel}
            :   The current floor index

        &nbsp;
        -   #### getLocations

                public java.util.List<Location> getLocations()

            Get the current locations that is to be displayed on the
            Google map.

            [Returns:]{.returnLabel}
            :   List of locations.

        &nbsp;
        -   #### getLocation

                public Location getLocation(java.lang.String id)

            Get a location by string id reference.

            [Parameters:]{.paramLabel}
            :   `id` - the id

            [Returns:]{.returnLabel}
            :   The qualifying location or null

        &nbsp;
        -   #### getLocation

                public Location getLocation(Marker marker)

            Get a location by marker reference.

            [Parameters:]{.paramLabel}
            :   `marker` - the marker

            [Returns:]{.returnLabel}
            :   The qualifying location or null

        &nbsp;
        -   #### displaySingleLocation

                public void displaySingleLocation(Location location)

            Display single location.

            [Parameters:]{.paramLabel}
            :   `location` - the location

        &nbsp;
        -   #### displaySearchResults

                public void displaySearchResults(java.util.List<Location> inputLocations,                                 boolean fitBounds)

            Use this method to display temporary locations, not points
            of interests location.

            [Parameters:]{.paramLabel}
            :   `inputLocations` - The temporary locations.
            :   `fitBounds` - the fit bounds

        &nbsp;
        -   #### stopPositioning

                public void stopPositioning()

            Stop the positioning service.

        &nbsp;
        -   #### startPositioning

                public void startPositioning()

            Start the positioning service.

        &nbsp;
        -   #### addOnSnippetTappedListener

                public void addOnSnippetTappedListener(OnSnippetTappedListener listener)

            Assign a listener object to catch the user interaction with
            the location info snippet appearing in the bottom of the map
            view.

            [Parameters:]{.paramLabel}
            :   `listener` - The listener object.

        &nbsp;
        -   #### getFloorSelector

                public FloorSelector getFloorSelector()

            Get the floor selector control object.

            [Returns:]{.returnLabel}
            :   floor selector control object.

        &nbsp;
        -   #### showInfoSnippet

                public void showInfoSnippet(Location location)

            Show info snippet.

            [Parameters:]{.paramLabel}
            :   `location` - the location

        &nbsp;
        -   #### routeTo

                public void routeTo(Location destination,                    java.lang.String travelMode,                    java.lang.String[] avoids,                    java.util.Calendar departure,                    java.util.Calendar arrival)

            Setup routing to the given destination.

            [Parameters:]{.paramLabel}
            :   `destination` - The destination location.
            :   `travelMode` - the travel mode
            :   `avoids` - the avoids
            :   `departure` - the departure
            :   `arrival` - the arrival

        &nbsp;
        -   #### route

                public void route(Location origin,                  Location destination,                  java.lang.String travelMode,                  java.lang.String[] avoids,                  java.util.Calendar departure,                  java.util.Calendar arrival)

            Setup routing from a given origin to a given destination. If
            route is found, navigation mode will be initiated.

            [Parameters:]{.paramLabel}
            :   `origin` - The origin location.
            :   `destination` - The destination location.
            :   `travelMode` - the travel mode
            :   `avoids` - the avoids
            :   `departure` - the departure
            :   `arrival` - the arrival

        &nbsp;
        -   #### closeRouting

                public void closeRouting()

            Close the current routing control.

        &nbsp;
        -   #### getCurrentState

                public int getCurrentState()

            Get the current locator state. Locator.MAP\_STATE,
            Locator.NAVIGATION\_STATE or Locator.SEARCH\_STATE

            [Returns:]{.returnLabel}
            :   The map state

        &nbsp;
        -   #### setCurrentState

                public void setCurrentState(int currentState)

            Set the current locator state. use Locator.MAP\_STATE,
            Locator.NAVIGATION\_STATE or Locator.SEARCH\_STATE

            [Parameters:]{.paramLabel}
            :   `currentState` - the current state

        &nbsp;
        -   #### setOnFloorUpdateListener

                public void setOnFloorUpdateListener(OnFloorUpdateListener listener)

            Set up a listener object to catch floor changes made by
            either the user or the positioning service

            [Parameters:]{.paramLabel}
            :   `listener` - listener object to catch floor changes

        &nbsp;
        -   #### setOnDataReadyListener

                public void setOnDataReadyListener(OnDataReadyListener listener)

            Set up a listener object to catch data returns

            [Parameters:]{.paramLabel}
            :   `listener` - listener object to catch data returns

        &nbsp;
        -   #### getNavigationMode

                public int getNavigationMode()

            Get the mode of navigation, either RoutingMode.NONE,
            RoutingMode.REALTIME or RoutingMode.TURN\_BY\_TURN

            [Returns:]{.returnLabel}
            :   the navigation mode

        &nbsp;
        -   #### setNavigationMode

                public void setNavigationMode(int navigationMode)

            Set the mode of navigation, either RoutingMode.NONE,
            RoutingMode.REALTIME or RoutingMode.TURN\_BY\_TURN

            [Parameters:]{.paramLabel}
            :   `navigationMode` - the navigation mode

        &nbsp;
        -   #### getVenueCollection

                public VenueCollection getVenueCollection()

            Get the current collection of venues

            [Returns:]{.returnLabel}
            :   the venue collection

        &nbsp;
        -   #### setupVenues

                public void setupVenues(VenueCollection venueCollection)

            Add a collection of venues to the locator

            [Parameters:]{.paramLabel}
            :   `venueCollection` - The collection of venues

        &nbsp;
        -   #### setTileSize

                public void setTileSize(int tileSize)

            Sets tile size.

            [Parameters:]{.paramLabel}
            :   `tileSize` - the tile size

        &nbsp;
        -   #### selectFloor

                public void selectFloor(int floor)

            Select floor.

            [Parameters:]{.paramLabel}
            :   `floor` - the floor

        &nbsp;
        -   #### updatePosition

                public void updatePosition(PositionResult res)

            Update position.

            [Parameters:]{.paramLabel}
            :   `res` - the res

        &nbsp;
        -   #### getAppDataProvider

                public AppDataProvider getAppDataProvider()

            Gets app data provider.

            [Returns:]{.returnLabel}
            :   the app data provider

        &nbsp;
        -   #### setAppDataProvider

                public void setAppDataProvider(AppDataProvider appDataProvider)

            Set a custom app data provider

            [Parameters:]{.paramLabel}
            :   `appDataProvider` - The custom provider

        &nbsp;
        -   #### getLocationsProvider

                public LocationsProvider getLocationsProvider()

            Gets locations provider.

            [Returns:]{.returnLabel}
            :   the locations provider

        &nbsp;
        -   #### setLocationsProvider

                public void setLocationsProvider(LocationsProvider locationsProvider)

            Set a custom location data provider

            [Parameters:]{.paramLabel}
            :   `locationsProvider` - The custom provider

        &nbsp;
        -   #### getVenueProvider

                public VenueProvider getVenueProvider()

            Gets venue provider.

            [Returns:]{.returnLabel}
            :   the venue provider

        &nbsp;
        -   #### setVenueProvider

                public void setVenueProvider(VenueProvider venueProvider)

            Set a custom venueId data provider

            [Parameters:]{.paramLabel}
            :   `venueProvider` - The custom provider

        &nbsp;
        -   #### getCurrentPosition

                public PositionIndicator getCurrentPosition()

            Get the current user position as a 2d/3d-coordinate (and an
            approximation circle - coming soon)

            [Returns:]{.returnLabel}
            :   The current user position indication

        &nbsp;
        -   #### getRoutingProvider

                public RoutingProvider getRoutingProvider()

            Get the routing provider

            [Returns:]{.returnLabel}
            :   The routing provider

        &nbsp;
        -   #### setRoutingProvider

                public void setRoutingProvider(RoutingProvider routingProvider)

            Set a routing provider

            [Parameters:]{.paramLabel}
            :   `routingProvider` - the routing provider

        &nbsp;
        -   #### addLocationDisplayRule

                public void addLocationDisplayRule(LocationDisplayRule rule)

            Add a display rule to the map display of the locations.

            [Parameters:]{.paramLabel}
            :   `rule` - The display rule.

        &nbsp;
        -   #### clearMap

                public void clearMap()

            Clear map.

        &nbsp;
        -   #### setOnMapClickListener

                public void setOnMapClickListener(OnMapClickListener listener)

            Set the map click listener. Should be added here instead of
            googleMap.setOnMapClickListener, because MapControl needs
            this event.

            [Parameters:]{.paramLabel}
            :   `listener` - the map click listener

        &nbsp;
        -   #### setOnMarkerClickListener

                public void setOnMarkerClickListener(OnMarkerClickListener listener)

            Set the marker click listener. Should be added here instead
            of googleMap.setOnMarkerClickListener, because MapControl
            needs this event.

            [Parameters:]{.paramLabel}
            :   `listener` - the map click listener

        &nbsp;
        -   #### setOnCameraChangeListener

                public void setOnCameraChangeListener(OnCameraChangeListener listener)

            Set the map click listener. Should be added here instead of
            googleMap.setOnCameraChangeListener, because MapControl
            needs this event.

            [Parameters:]{.paramLabel}
            :   `listener` - the map click listener

        &nbsp;
        -   #### getPositionProviders

                public java.util.List<PositionProvider> getPositionProviders()

            Gets position providers.

            [Returns:]{.returnLabel}
            :   the position providers

        &nbsp;
        -   #### addPositionProvider

                public void addPositionProvider(PositionProvider positionProvider)

            Add position provider.

            [Parameters:]{.paramLabel}
            :   `positionProvider` - the position provider

        &nbsp;
        -   #### stopTrackPosition

                public void stopTrackPosition()

            Stop track position.

        &nbsp;
        -   #### startTrackPosition

                public void startTrackPosition()

            Start track position.

        &nbsp;
        -   #### showUserPosition

                public void showUserPosition(boolean show)

            Show user position.

            [Parameters:]{.paramLabel}
            :   `show` - the show

        &nbsp;
        -   #### onBackPressed

                public boolean onBackPressed()

            On back pressed boolean.

            [Returns:]{.returnLabel}
            :   the boolean

        &nbsp;
        -   #### setRouteRenderer

                public void setRouteRenderer(RouteRenderer renderer)

            Sets route renderer.

            [Parameters:]{.paramLabel}
            :   `renderer` - the renderer

        &nbsp;
        -   #### getClientId

                public static java.lang.String getClientId()

            Gets client id.

            [Returns:]{.returnLabel}
            :   the client id

        &nbsp;
        -   #### getSolution

                public static Solution getSolution()

            Gets solution.

            [Returns:]{.returnLabel}
            :   the solution

        &nbsp;
        -   #### getVenues

                public static VenueCollection getVenues()

            Gets venues.

            [Returns:]{.returnLabel}
            :   the venues

        &nbsp;
        -   #### getAppConfig

                public static AppConfig getAppConfig()

            Gets app config.

            [Returns:]{.returnLabel}
            :   the app config

        &nbsp;
        -   #### getTypeUrl

                public static java.lang.String getTypeUrl(java.lang.String typeName)

            Gets type url.

            [Parameters:]{.paramLabel}
            :   `typeName` - the type name

            [Returns:]{.returnLabel}
            :   the type url

        &nbsp;
        -   #### addMarkerCallback

                public static void addMarkerCallback(Marker marker,                                     android.view.View.OnClickListener listener)

            Method used to add a callback to markers. If set the an
            'OnClick' on the given marker will cause OnClick to be
            called on the given listener. Be sure to call delete after
            use to prevent memory leaks.

            [Parameters:]{.paramLabel}
            :   `marker` - The marker to listen to
            :   `listener` - The listener to forward the call to

        &nbsp;
        -   #### deleteMarkerCallback

                public static void deleteMarkerCallback(Marker marker)

            Deletes a given marker from the watchlist. If deleted from
            the callback list it will no longer listen for it.

            [Parameters:]{.paramLabel}
            :   `marker` - The marker to stop listening to.

        &nbsp;
        -   #### setCacheScheme

                public void setCacheScheme(int scheme)

            Sets a caching scheme for tiles: TILE\_CACHESCHEME\_NONE (
            No caching. this is the default setting )
            TILE\_CACHESCHEME\_TEMPORARY ( Keeps tiles in a memory
            cache. Keeps tiles while the app is running )
            TILE\_CACHESCHEME\_PERSISTENT ( Write tiles to files and
            keeps them while the app is installed )

            [Parameters:]{.paramLabel}
            :   `scheme` - The caching scheme to use. Default:
                TILE\_CACHESCHEME\_NONE

        &nbsp;
        -   #### setRouteStyle

                public void setRouteStyle(RouteDisplayStyle style)

            Sets the render style of the default route rendering

            [Parameters:]{.paramLabel}
            :   `style` - The style object to set

        &nbsp;
        -   #### setLangugage

                public void setLangugage(java.lang.String langugage)

            Sets the language. The list of available language strings
            can be found in the solution object given with
            onSolutionDataReady.

            [Parameters:]{.paramLabel}
            :   `langugage` - The language wanted.

        &nbsp;
        -   #### getLangugage

                public java.lang.String getLangugage()

            Gets the current language. The list of available language
            strings can be found in the solution object given with
            onSolutionDataReady.

            [Returns:]{.returnLabel}
            :   the langugage

        &nbsp;
        -   #### showBuildingNames

                public void showBuildingNames(boolean showBuildingNames)

            This method controls if building names are written on the
            map. Set this right after instantiating your mapControl
            object

            [Parameters:]{.paramLabel}
            :   `showBuildingNames` - the show building names

        &nbsp;
        -   #### isOnMainThread

                public static boolean isOnMainThread()

            Is on main thread boolean.

            [Returns:]{.returnLabel}
            :   the boolean

com.mapspeople.mapcontrol

Interface OnFloorUpdateListener {#interface-onfloorupdatelistener .title title="Interface OnFloorUpdateListener"}
-------------------------------

-   

    ------------------------------------------------------------------------

    \

        public interface OnFloorUpdateListener

    Floor update event listener interface

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `onFloorUpdate(Building building, |
        |                                   |              int floor)`          |
        |                                   | Floor update event listener       |
        |                                   | method                            |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### onFloorUpdate

                void onFloorUpdate(Building building,                   int floor)

            Floor update event listener method

            [Parameters:]{.paramLabel}
            :   `building` - The building that shifted floor level
            :   `floor` - The floor level index

com.mapspeople.mapcontrol

Interface ReadyListener {#interface-readylistener .title title="Interface ReadyListener"}
-----------------------

-   

    ------------------------------------------------------------------------

    \

        public interface ReadyListener

    HTTP GET update event listener interface

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `onResult()`                      |
        |                                   | called when ready                 |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### onResult

                void onResult()

            called when ready

maps
====

com.mapspeople.maps

Class FloorTileProvider {#class-floortileprovider .title title="Class FloorTileProvider"}
-----------------------

-   java.lang.Object
-   -   com.mapspeople.maps.FloorTileProvider

-   

    ------------------------------------------------------------------------

    \

        public class FloorTileProviderextends java.lang.Object

    The type Floor tile provider.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `Floor`                           | `getFloor()`                      |
        |                                   | Get the floor object for this     |
        |                                   | tileprovider.                     |
        +-----------------------------------+-----------------------------------+
        | `Tile`                            | `getTile(int x,       int y,      |
        |                                   |   int zoom)`                      |
        |                                   | Gets tile.                        |
        +-----------------------------------+-----------------------------------+
        | `java.net.URL`                    | `getTileUrl(int x,          int y |
        |                                   | ,          int zoom)`             |
        |                                   | Get the tileurl generated based   |
        |                                   | on the floor and venue this       |
        |                                   | provider is to be used for.       |
        +-----------------------------------+-----------------------------------+
        | `static void`                     | `setCacheScheme(int scheme)`      |
        |                                   | Sets cache scheme.                |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setFloor(Floor _floor)`          |
        |                                   | Set the floor object for this     |
        |                                   | tileprovider.                     |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setUrlTemplate(java.lang.String  |
        |                                   | tilesUrl)`                        |
        |                                   | Set a new url template.           |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### FloorTileProvider

                public FloorTileProvider(int width,                         int height)

            Instantiates a new Floor tile provider.

            [Parameters:]{.paramLabel}
            :   `width` - the width
            :   `height` - the height

        &nbsp;
        -   #### FloorTileProvider

                public FloorTileProvider(Venue venue,                         Floor floor)

            Constructor using venue and current floor data.

            [Parameters:]{.paramLabel}
            :   `venue` - the venue
            :   `floor` - the floor

        &nbsp;
        -   #### FloorTileProvider

                public FloorTileProvider(Venue venue,                         Floor floor,                         int size)

            Constructor using venue and current floor data.

            [Parameters:]{.paramLabel}
            :   `venue` - the venue
            :   `floor` - the floor
            :   `size` - the size

    &nbsp;
    -   ### Method Detail

        -   #### setCacheScheme

                public static void setCacheScheme(int scheme)

            Sets cache scheme.

            [Parameters:]{.paramLabel}
            :   `scheme` - the scheme

        &nbsp;
        -   #### getFloor

                public Floor getFloor()

            Get the floor object for this tileprovider.

            [Returns:]{.returnLabel}
            :   The floor object.

        &nbsp;
        -   #### setFloor

                public void setFloor(Floor _floor)

            Set the floor object for this tileprovider.

            [Parameters:]{.paramLabel}
            :   `_floor` - The new floor object.

        &nbsp;
        -   #### getTileUrl

                public java.net.URL getTileUrl(int x,                               int y,                               int zoom)

            Get the tileurl generated based on the floor and venue this
            provider is to be used for.

            [Parameters:]{.paramLabel}
            :   `x` - the x
            :   `y` - the y
            :   `zoom` - the zoom

            [Returns:]{.returnLabel}
            :   the tile url

        &nbsp;
        -   #### setUrlTemplate

                public void setUrlTemplate(java.lang.String tilesUrl)

            Set a new url template. The url template string to use when
            fetching tiles. Must have format
            "prefix{param\_1}infix{param\_N}suffix", e.g.:
            "http://tiles.url.com/{floor}/{x}/{y}/{zoom}.png" By default
            the `getTileUrl(int, int, int)` method will look for
            {venueId}/{style}/{buildingId}/{floor}/{z}/{x}/{y}, where x,
            y and z is mandatory.

            [Parameters:]{.paramLabel}
            :   `tilesUrl` - The new url template

        &nbsp;
        -   #### getTile

                public final Tile getTile(int x,                          int y,                          int zoom)

            Gets tile.

            [Parameters:]{.paramLabel}
            :   `x` - the x
            :   `y` - the y
            :   `zoom` - the zoom

            [Returns:]{.returnLabel}
            :   the tile

models
======

com.mapspeople.models

Class AppConfig {#class-appconfig .title title="Class AppConfig"}
---------------

-   java.lang.Object
-   -   com.mapspeople.models.AppConfig

-   

    ------------------------------------------------------------------------

    \

        public class AppConfigextends java.lang.Object

    The type App config.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `java.util.HashMap<java.lang.Stri | `getAppSettings()`                |
        | ng,java.lang.String>`             | Gets app settings.                |
        +-----------------------------------+-----------------------------------+
        | `java.util.ArrayList<MenuInfo>`   | `getMenuInfo(java.lang.String men |
        |                                   | uName)`                           |
        |                                   | Gets menu info.                   |
        +-----------------------------------+-----------------------------------+
        | `java.util.HashMap<java.lang.Stri | `getTranslations()`               |
        | ng,java.lang.String>`             | Gets translations.                |
        +-----------------------------------+-----------------------------------+
        | `android.graphics.Bitmap`         | `getVenueImage(java.lang.String v |
        |                                   | enueName)`                        |
        |                                   | Gets venue image.                 |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `init(ReadyListener callback)`    |
        |                                   | Init.                             |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### AppConfig

                public AppConfig()

    &nbsp;
    -   ### Method Detail

        -   #### init

                public void init(ReadyListener callback)

            Init.

            [Parameters:]{.paramLabel}
            :   `callback` - the callback

        &nbsp;
        -   #### getMenuInfo

                public java.util.ArrayList<MenuInfo> getMenuInfo(java.lang.String menuName)

            Gets menu info.

            [Parameters:]{.paramLabel}
            :   `menuName` - the menu name

            [Returns:]{.returnLabel}
            :   the menu info

        &nbsp;
        -   #### getVenueImage

                public android.graphics.Bitmap getVenueImage(java.lang.String venueName)

            Gets venue image.

            [Parameters:]{.paramLabel}
            :   `venueName` - the venue name

            [Returns:]{.returnLabel}
            :   the venue image

        &nbsp;
        -   #### getTranslations

                public java.util.HashMap<java.lang.String,java.lang.String> getTranslations()

            Gets translations.

            [Returns:]{.returnLabel}
            :   the translations

        &nbsp;
        -   #### getAppSettings

                public java.util.HashMap<java.lang.String,java.lang.String> getAppSettings()

            Gets app settings.

            [Returns:]{.returnLabel}
            :   the app settings

com.mapspeople.models

Class AppData {#class-appdata .title title="Class AppData"}
-------------

-   java.lang.Object
-   -   com.mapspeople.models.AppData

-   

    ------------------------------------------------------------------------

    \

        public class AppDataextends java.lang.Object

    App data model. Contains meta data on how a `MapControl` will
    execute and behave.

-   -   ### Field Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `int`                             | `getAppMode()`                    |
        |                                   | Gets app mode.                    |
        +-----------------------------------+-----------------------------------+
        | `LocationDisplayRuleset`          | `getDisplayRuleset()`             |
        |                                   | Gets display ruleset.             |
        +-----------------------------------+-----------------------------------+
        | `Site`                            | `getSite()`                       |
        |                                   | Gets site.                        |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getSiteName()`                   |
        |                                   | Gets site name.                   |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<java.lang.String> | `getTileDatabases()`              |
        | `                                 | Gets tile databases.              |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<java.lang.String> | `getTileServices()`               |
        | `                                 | Gets tile services.               |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<Token>`           | `getTokens()`                     |
        |                                   | Gets tokens.                      |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Field Detail

        -   #### INDOOR\_MODE

                public static int INDOOR_MODE

            The constant INDOOR\_MODE.

        &nbsp;
        -   #### OUTDOOR\_MODE

                public static int OUTDOOR_MODE

            The constant OUTDOOR\_MODE.

        &nbsp;
        -   #### INDOOR\_AND\_OUTDOOR\_MODE

                public static int INDOOR_AND_OUTDOOR_MODE

            The constant INDOOR\_AND\_OUTDOOR\_MODE.

    &nbsp;
    -   ### Constructor Detail

        -   #### AppData

                public AppData()

    &nbsp;
    -   ### Method Detail

        -   #### getTileServices

                public java.util.List<java.lang.String> getTileServices()

            Gets tile services.

            [Returns:]{.returnLabel}
            :   the tile services

        &nbsp;
        -   #### getTileDatabases

                public java.util.List<java.lang.String> getTileDatabases()

            Gets tile databases.

            [Returns:]{.returnLabel}
            :   the tile databases

        &nbsp;
        -   #### getDisplayRuleset

                public LocationDisplayRuleset getDisplayRuleset()

            Gets display ruleset.

            [Returns:]{.returnLabel}
            :   the display ruleset

        &nbsp;
        -   #### getSite

                public Site getSite()

            Gets site.

            [Returns:]{.returnLabel}
            :   the site

        &nbsp;
        -   #### getSiteName

                public java.lang.String getSiteName()

            Gets site name.

            [Returns:]{.returnLabel}
            :   the site name

        &nbsp;
        -   #### getAppMode

                public int getAppMode()

            Gets app mode.

            [Returns:]{.returnLabel}
            :   the app mode

        &nbsp;
        -   #### getTokens

                public java.util.List<Token> getTokens()

            Gets tokens.

            [Returns:]{.returnLabel}
            :   the tokens

com.mapspeople.models

Class BooleanSerializer {#class-booleanserializer .title title="Class BooleanSerializer"}
-----------------------

-   java.lang.Object
-   -   com.mapspeople.models.BooleanSerializer

-   

    All Implemented Interfaces:
    :   com.google.gson.JsonDeserializer&lt;java.lang.Boolean&gt;,
        com.google.gson.JsonSerializer&lt;java.lang.Boolean&gt;

    ------------------------------------------------------------------------

    \

        public class BooleanSerializerextends java.lang.Objectimplements com.google.gson.JsonSerializer<java.lang.Boolean>, com.google.gson.JsonDeserializer<java.lang.Boolean>

    The type Boolean serializer.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `java.lang.Boolean`               | `deserialize(com.google.gson.Json |
        |                                   | Element arg0,           java.lang |
        |                                   | .reflect.Type arg1,           com |
        |                                   | .google.gson.JsonDeserializationC |
        |                                   | ontext arg2)`                     |
        |                                   | Deserialize boolean.              |
        +-----------------------------------+-----------------------------------+
        | `com.google.gson.JsonElement`     | `serialize(java.lang.Boolean arg0 |
        |                                   | ,         java.lang.reflect.Type  |
        |                                   | arg1,         com.google.gson.Jso |
        |                                   | nSerializationContext arg2)`      |
        |                                   | Serialize json element.           |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### BooleanSerializer

                public BooleanSerializer()

    &nbsp;
    -   ### Method Detail

        -   #### serialize

                public com.google.gson.JsonElement serialize(java.lang.Boolean arg0,                                             java.lang.reflect.Type arg1,                                             com.google.gson.JsonSerializationContext arg2)

            Serialize json element.

            [Specified by:]{.overrideSpecifyLabel}
            :   `serialize` in
                interface `com.google.gson.JsonSerializer<java.lang.Boolean>`

            [Parameters:]{.paramLabel}
            :   `arg0` - the arg 0
            :   `arg1` - the arg 1
            :   `arg2` - the arg 2

            [Returns:]{.returnLabel}
            :   the json element

        &nbsp;
        -   #### deserialize

                public java.lang.Boolean deserialize(com.google.gson.JsonElement arg0,                                     java.lang.reflect.Type arg1,                                     com.google.gson.JsonDeserializationContext arg2)                              throws com.google.gson.JsonParseException

            Deserialize boolean.

            [Specified by:]{.overrideSpecifyLabel}
            :   `deserialize` in
                interface `com.google.gson.JsonDeserializer<java.lang.Boolean>`

            [Parameters:]{.paramLabel}
            :   `arg0` - the arg 0
            :   `arg1` - the arg 1
            :   `arg2` - the arg 2

            [Returns:]{.returnLabel}
            :   the boolean

            [Throws:]{.throwsLabel}
            :   `com.google.gson.JsonParseException` - the json parse
                exception

com.mapspeople.models

Class Building {#class-building .title title="Class Building"}
--------------

-   java.lang.Object
-   -   com.mapspeople.models.Building

-   

    ------------------------------------------------------------------------

    \

        public class Buildingextends java.lang.Object

    Building model that holds building metadata and its floors.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `addFloor(Floor floor)`           |
        |                                   | Add a floor object to the         |
        |                                   | building.                         |
        +-----------------------------------+-----------------------------------+
        | `Point`                           | `getAnchor()`                     |
        |                                   | Gets anchor.                      |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<java.lang.Double> | `getBoundingBox()`                |
        | `                                 | Gets bounding box.                |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getBuildingId()`                 |
        |                                   | Get the building id.              |
        +-----------------------------------+-----------------------------------+
        | `Floor`                           | `getCurrentFloor()`               |
        |                                   | Get the current floor object.     |
        +-----------------------------------+-----------------------------------+
        | `int`                             | `getCurrentFloorIndex()`          |
        |                                   | Gets current floor index.         |
        +-----------------------------------+-----------------------------------+
        | `int`                             | `getCurrentFloorZIndex()`         |
        |                                   | Get the current floor level       |
        |                                   | index.                            |
        +-----------------------------------+-----------------------------------+
        | `Floor`                           | `getFloorByZIndex(int index)`     |
        |                                   | Gets floor by z index.            |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<Floor>`           | `getFloors()`                     |
        |                                   | Get the collection of floors in   |
        |                                   | this building.                    |
        +-----------------------------------+-----------------------------------+
        | `Floor`                           | `getInitFloor()`                  |
        |                                   | Get the initial floor.            |
        +-----------------------------------+-----------------------------------+
        | `int`                             | `getInitFloorZIndex()`            |
        |                                   | Get the initial floor level       |
        |                                   | index.                            |
        +-----------------------------------+-----------------------------------+
        | `Marker`                          | `getMarker()`                     |
        |                                   | Gets marker.                      |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getName()`                       |
        |                                   | Get the name of the building.     |
        +-----------------------------------+-----------------------------------+
        | `LineString`                      | `getPerimeter()`                  |
        |                                   | Gets perimeter.                   |
        +-----------------------------------+-----------------------------------+
        | `boolean`                         | `hasFloorIndex(int floorIndex)`   |
        |                                   | Has floor index boolean.          |
        +-----------------------------------+-----------------------------------+
        | `boolean`                         | `isInside(Point inPoint)`         |
        |                                   | Is inside boolean.                |
        +-----------------------------------+-----------------------------------+
        | `boolean`                         | `isOfflineMode()`                 |
        |                                   | Get offline flag, true:offline /  |
        |                                   | false:online.                     |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setAnchor(Point anchor)`         |
        |                                   | Sets anchor.                      |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setFloors(FloorCollection floors |
        |                                   | )`                                |
        |                                   | Set the collection of floors in   |
        |                                   | this building.                    |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setMarker(Marker marker)`        |
        |                                   | Sets marker.                      |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOfflineMode(boolean offlineMo |
        |                                   | de)`                              |
        |                                   | Set offline flag, false/offline   |
        |                                   | is default.                       |
        +-----------------------------------+-----------------------------------+
        | `Floor`                           | `switchFloor(int index)`          |
        |                                   | Switch the current floor.         |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### Building

                public Building()

            Instantiates a new Building.

    &nbsp;
    -   ### Method Detail

        -   #### isOfflineMode

                public boolean isOfflineMode()

            Get offline flag, true:offline / false:online.

            [Returns:]{.returnLabel}
            :   True or false.

        &nbsp;
        -   #### setOfflineMode

                public void setOfflineMode(boolean offlineMode)

            Set offline flag, false/offline is default.

            [Parameters:]{.paramLabel}
            :   `offlineMode` - True or false.

        &nbsp;
        -   #### getInitFloorZIndex

                public int getInitFloorZIndex()

            Get the initial floor level index.

            [Returns:]{.returnLabel}
            :   An index value.

        &nbsp;
        -   #### getInitFloor

                public Floor getInitFloor()

            Get the initial floor.

            [Returns:]{.returnLabel}
            :   An index value.

        &nbsp;
        -   #### getCurrentFloorZIndex

                public int getCurrentFloorZIndex()

            Get the current floor level index.

            [Returns:]{.returnLabel}
            :   An index value.

        &nbsp;
        -   #### getCurrentFloor

                public Floor getCurrentFloor()

            Get the current floor object.

            [Returns:]{.returnLabel}
            :   A floor object, null if no floors exist.

        &nbsp;
        -   #### switchFloor

                public Floor switchFloor(int index)

            Switch the current floor. This makes the relevant map layers
            switch visibility.

            [Parameters:]{.paramLabel}
            :   `index` - The new floor level index.

            [Returns:]{.returnLabel}
            :   The visible floor object after switch.

        &nbsp;
        -   #### getBuildingId

                public java.lang.String getBuildingId()

            Get the building id.

            [Returns:]{.returnLabel}
            :   building id

        &nbsp;
        -   #### getName

                public java.lang.String getName()

            Get the name of the building.

            [Returns:]{.returnLabel}
            :   name

        &nbsp;
        -   #### getFloors

                public java.util.List<Floor> getFloors()

            Get the collection of floors in this building.

            [Returns:]{.returnLabel}
            :   floors

        &nbsp;
        -   #### setFloors

                public void setFloors(FloorCollection floors)

            Set the collection of floors in this building.

            [Parameters:]{.paramLabel}
            :   `floors` - the floors

        &nbsp;
        -   #### addFloor

                public void addFloor(Floor floor)

            Add a floor object to the building.

            [Parameters:]{.paramLabel}
            :   `floor` - the floor

        &nbsp;
        -   #### hasFloorIndex

                public boolean hasFloorIndex(int floorIndex)

            Has floor index boolean.

            [Parameters:]{.paramLabel}
            :   `floorIndex` - the floor index

            [Returns:]{.returnLabel}
            :   the boolean

        &nbsp;
        -   #### getFloorByZIndex

                public Floor getFloorByZIndex(int index)

            Gets floor by z index.

            [Parameters:]{.paramLabel}
            :   `index` - the index

            [Returns:]{.returnLabel}
            :   the floor by z index

        &nbsp;
        -   #### getBoundingBox

                public java.util.List<java.lang.Double> getBoundingBox()

            Gets bounding box.

            [Returns:]{.returnLabel}
            :   the bounding box

        &nbsp;
        -   #### getPerimeter

                public LineString getPerimeter()

            Gets perimeter.

            [Returns:]{.returnLabel}
            :   the perimeter

        &nbsp;
        -   #### getMarker

                public Marker getMarker()

            Gets marker.

            [Returns:]{.returnLabel}
            :   the marker

        &nbsp;
        -   #### setMarker

                public void setMarker(Marker marker)

            Sets marker.

            [Parameters:]{.paramLabel}
            :   `marker` - the marker

        &nbsp;
        -   #### getCurrentFloorIndex

                public int getCurrentFloorIndex()

            Gets current floor index.

            [Returns:]{.returnLabel}
            :   the current floor index

        &nbsp;
        -   #### getAnchor

                public Point getAnchor()

            Gets anchor.

            [Returns:]{.returnLabel}
            :   the anchor

        &nbsp;
        -   #### setAnchor

                public void setAnchor(Point anchor)

            Sets anchor.

            [Parameters:]{.paramLabel}
            :   `anchor` - the anchor

        &nbsp;
        -   #### isInside

                public boolean isInside(Point inPoint)

            Is inside boolean.

            [Parameters:]{.paramLabel}
            :   `inPoint` - the in point

            [Returns:]{.returnLabel}
            :   the boolean

com.mapspeople.models

Class BuildingCollection {#class-buildingcollection .title title="Class BuildingCollection"}
------------------------

-   java.lang.Object
-   -   com.mapspeople.models.BuildingCollection

-   

    ------------------------------------------------------------------------

    \

        public class BuildingCollectionextends java.lang.Object

    The type Building collection.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `Building`                        | `getBuilding(LatLng point)`       |
        |                                   | Gets building.                    |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<Building>`        | `getCollection()`                 |
        |                                   | Gets collection.                  |
        +-----------------------------------+-----------------------------------+
        | `Building`                        | `getCurrentBuilding(LatLngBounds  |
        |                                   | bounds)`                          |
        |                                   | Gets current building.            |
        +-----------------------------------+-----------------------------------+
        | `double`                          | `intersectionArea(LatLngBounds b1 |
        |                                   | ,                LatLngBounds b2) |
        |                                   | `                                 |
        |                                   | Intersection area double.         |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### BuildingCollection

                public BuildingCollection(java.util.List<Building> buildings)

            Instantiates a new Building collection.

            [Parameters:]{.paramLabel}
            :   `buildings` - the buildings

    &nbsp;
    -   ### Method Detail

        -   #### getCollection

                public java.util.List<Building> getCollection()

            Gets collection.

            [Returns:]{.returnLabel}
            :   the collection

        &nbsp;
        -   #### intersectionArea

                public double intersectionArea(LatLngBounds b1,                               LatLngBounds b2)

            Intersection area double.

            [Parameters:]{.paramLabel}
            :   `b1` - the b 1
            :   `b2` - the b 2

            [Returns:]{.returnLabel}
            :   the double

        &nbsp;
        -   #### getCurrentBuilding

                public Building getCurrentBuilding(LatLngBounds bounds)

            Gets current building.

            [Parameters:]{.paramLabel}
            :   `bounds` - the bounds

            [Returns:]{.returnLabel}
            :   the current building

        &nbsp;
        -   #### getBuilding

                public Building getBuilding(LatLng point)

            Gets building.

            [Parameters:]{.paramLabel}
            :   `point` - the point

            [Returns:]{.returnLabel}
            :   the building

com.mapspeople.models

Class BuildingInfo {#class-buildinginfo .title title="Class BuildingInfo"}
------------------

-   java.lang.Object
-   -   com.mapspeople.models.BuildingInfo

-   

    ------------------------------------------------------------------------

    \

        public class BuildingInfoextends java.lang.Object

    The type Building info.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `java.lang.String[]`              | `getAliases()`                    |
        |                                   | Get aliases string \[ \].         |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getName()`                       |
        |                                   | Gets name.                        |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### BuildingInfo

                public BuildingInfo()

    &nbsp;
    -   ### Method Detail

        -   #### getName

                public java.lang.String getName()

            Gets name.

            [Returns:]{.returnLabel}
            :   the name

        &nbsp;
        -   #### getAliases

                public java.lang.String[] getAliases()

            Get aliases string \[ \].

            [Returns:]{.returnLabel}
            :   the string \[ \]

com.mapspeople.models

Class Category {#class-category .title title="Class Category"}
--------------

-   java.lang.Object
-   -   com.mapspeople.models.Category

-   

    ------------------------------------------------------------------------

    \

        public class Categoryextends java.lang.Object

    The type Category.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `java.lang.String`                | `getKey()`                        |
        |                                   | Gets key.                         |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getValue()`                      |
        |                                   | Gets value.                       |
        +-----------------------------------+-----------------------------------+
        | `boolean`                         | `isEqualTo(Category category)`    |
        |                                   | Is equal to boolean.              |
        +-----------------------------------+-----------------------------------+
        | `boolean`                         | `isEqualTo(java.lang.String name) |
        |                                   | `                                 |
        |                                   | Is equal to boolean.              |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### Category

                public Category(java.lang.String key,                java.lang.String name)

            Instantiates a new Category.

            [Parameters:]{.paramLabel}
            :   `key` - the key
            :   `name` - the name

    &nbsp;
    -   ### Method Detail

        -   #### getKey

                public java.lang.String getKey()

            Gets key.

            [Returns:]{.returnLabel}
            :   the key

        &nbsp;
        -   #### getValue

                public java.lang.String getValue()

            Gets value.

            [Returns:]{.returnLabel}
            :   the value

        &nbsp;
        -   #### isEqualTo

                public boolean isEqualTo(Category category)

            Is equal to boolean.

            [Parameters:]{.paramLabel}
            :   `category` - the category

            [Returns:]{.returnLabel}
            :   the boolean

        &nbsp;
        -   #### isEqualTo

                public boolean isEqualTo(java.lang.String name)

            Is equal to boolean.

            [Parameters:]{.paramLabel}
            :   `name` - the name

            [Returns:]{.returnLabel}
            :   the boolean

com.mapspeople.models

Class CategoryCollection {#class-categorycollection .title title="Class CategoryCollection"}
------------------------

-   java.lang.Object
-   -   com.mapspeople.models.CategoryCollection

-   

    ------------------------------------------------------------------------

    \

        public class CategoryCollectionextends java.lang.Object

    The type Category collection.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `java.util.List<Category>`        | `getCategories()`                 |
        |                                   | Gets categories.                  |
        +-----------------------------------+-----------------------------------+
        | `int`                             | `getCategoryIndex(java.lang.Strin |
        |                                   | g key)`                           |
        |                                   | Gets category index.              |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getValue(java.lang.String key)`  |
        |                                   | Gets value.                       |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### CategoryCollection

                public CategoryCollection(java.util.List<Category> categories)

            Instantiates a new Category collection.

            [Parameters:]{.paramLabel}
            :   `categories` - the categories

    &nbsp;
    -   ### Method Detail

        -   #### getCategories

                public java.util.List<Category> getCategories()

            Gets categories.

            [Returns:]{.returnLabel}
            :   the categories

        &nbsp;
        -   #### getValue

                public java.lang.String getValue(java.lang.String key)

            Gets value.

            [Parameters:]{.paramLabel}
            :   `key` - the key

            [Returns:]{.returnLabel}
            :   the value

        &nbsp;
        -   #### getCategoryIndex

                public int getCategoryIndex(java.lang.String key)

            Gets category index.

            [Parameters:]{.paramLabel}
            :   `key` - the key

            [Returns:]{.returnLabel}
            :   the category index

com.mapspeople.models

Class ContactModule {#class-contactmodule .title title="Class ContactModule"}
-------------------

-   java.lang.Object
-   -   com.mapspeople.models.ContactModule

-   

    ------------------------------------------------------------------------

    \

        public class ContactModuleextends java.lang.Object

    The type Contact module.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `java.lang.String`                | `getEmail()`                      |
        |                                   | Gets email.                       |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getFaxNumber()`                  |
        |                                   | Gets fax number.                  |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getTelephone()`                  |
        |                                   | Gets telephone.                   |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getWebsite()`                    |
        |                                   | Gets website.                     |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### ContactModule

                public ContactModule()

    &nbsp;
    -   ### Method Detail

        -   #### getEmail

                public java.lang.String getEmail()

            Gets email.

            [Returns:]{.returnLabel}
            :   the email

        &nbsp;
        -   #### getTelephone

                public java.lang.String getTelephone()

            Gets telephone.

            [Returns:]{.returnLabel}
            :   the telephone

        &nbsp;
        -   #### getWebsite

                public java.lang.String getWebsite()

            Gets website.

            [Returns:]{.returnLabel}
            :   the website

        &nbsp;
        -   #### getFaxNumber

                public java.lang.String getFaxNumber()

            Gets fax number.

            [Returns:]{.returnLabel}
            :   the fax number

com.mapspeople.models

Class DataField {#class-datafield .title title="Class DataField"}
---------------

-   java.lang.Object
-   -   com.mapspeople.models.DataField

-   

    ------------------------------------------------------------------------

    \

        public class DataFieldextends java.lang.Object

    The type Data field.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `java.lang.String`                | `getName()`                       |
        |                                   | Gets name.                        |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getType()`                       |
        |                                   | Gets type.                        |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getValue()`                      |
        |                                   | Gets value.                       |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### DataField

                public DataField(java.lang.String name,                 java.lang.String value,                 java.lang.String type)

            Instantiates a new Data field.

            [Parameters:]{.paramLabel}
            :   `name` - the name
            :   `value` - the value
            :   `type` - the type

        &nbsp;
        -   #### DataField

                public DataField(java.lang.String name,                 java.lang.String value)

            Instantiates a new Data field.

            [Parameters:]{.paramLabel}
            :   `name` - the name
            :   `value` - the value

    &nbsp;
    -   ### Method Detail

        -   #### getValue

                public java.lang.String getValue()

            Gets value.

            [Returns:]{.returnLabel}
            :   the value

        &nbsp;
        -   #### getName

                public java.lang.String getName()

            Gets name.

            [Returns:]{.returnLabel}
            :   the name

        &nbsp;
        -   #### getType

                public java.lang.String getType()

            Gets type.

            [Returns:]{.returnLabel}
            :   the type

com.mapspeople.models

Class DisplayRule {#class-displayrule .title title="Class DisplayRule"}
-----------------

-   java.lang.Object
-   -   com.mapspeople.models.DisplayRule

-   

    ------------------------------------------------------------------------

    \

        public class DisplayRuleextends java.lang.Object

    DisplayRule created by mh on 09-02-2016.
    Used as the JSON model for server communication. Not to be confused
    with 'LocationDisplayRule' objects used locally for locations.
    Refered to from POIType, thus DisplayRules is used in the set of
    types defined in solution.

    Location based rules are recived in DisplayRule format and stored in
    a LocationDisplayRule object locally. This happens in
    MPLocationsAsyncLoader.deSerialize.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `java.lang.String`                | `getIconUrl()`                    |
        |                                   | Gets icon url.                    |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getLabel()`                      |
        |                                   | Gets label.                       |
        +-----------------------------------+-----------------------------------+
        | `float`                           | `getZoomFrom()`                   |
        |                                   | Gets zoom from.                   |
        +-----------------------------------+-----------------------------------+
        | `float`                           | `getZoomTo()`                     |
        |                                   | Gets zoom to.                     |
        +-----------------------------------+-----------------------------------+
        | `boolean`                         | `isVisible()`                     |
        |                                   | Is visible boolean.               |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### DisplayRule

                public DisplayRule(java.lang.String icon,                   java.lang.String label,                   boolean visible,                   float zoomFrom,                   float zoomTo)

            Instantiates a new Display rule.

            [Parameters:]{.paramLabel}
            :   `icon` - the icon
            :   `label` - the label
            :   `visible` - the visible
            :   `zoomFrom` - the zoom from
            :   `zoomTo` - the zoom to

    &nbsp;
    -   ### Method Detail

        -   #### getIconUrl

                public java.lang.String getIconUrl()

            Gets icon url.

            [Returns:]{.returnLabel}
            :   the icon url

        &nbsp;
        -   #### getLabel

                public java.lang.String getLabel()

            Gets label.

            [Returns:]{.returnLabel}
            :   the label

        &nbsp;
        -   #### isVisible

                public boolean isVisible()

            Is visible boolean.

            [Returns:]{.returnLabel}
            :   the boolean

        &nbsp;
        -   #### getZoomFrom

                public float getZoomFrom()

            Gets zoom from.

            [Returns:]{.returnLabel}
            :   the zoom from

        &nbsp;
        -   #### getZoomTo

                public float getZoomTo()

            Gets zoom to.

            [Returns:]{.returnLabel}
            :   the zoom to

com.mapspeople.models

Interface Feature {#interface-feature .title title="Interface Feature"}
-----------------

-   

    All Known Subinterfaces:
    :   Location

    &nbsp;

    All Known Implementing Classes:
    :   MPLocation, MPPositionResult, PositionIndicator, PositionUpdate

    ------------------------------------------------------------------------

    \

        public interface Feature

    The interface Feature.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `Geometry`                        | `getGeometry()`                   |
        |                                   | Gets geometry.                    |
        +-----------------------------------+-----------------------------------+
        | `java.util.Map<java.lang.String,j | `getProperties()`                 |
        | ava.lang.Object>`                 | Gets properties.                  |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getType()`                       |
        |                                   | Gets type.                        |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### getType

                java.lang.String getType()

            Gets type.

            [Returns:]{.returnLabel}
            :   the type

        &nbsp;
        -   #### getProperties

                java.util.Map<java.lang.String,java.lang.Object> getProperties()

            Gets properties.

            [Returns:]{.returnLabel}
            :   the properties

        &nbsp;
        -   #### getGeometry

                Geometry getGeometry()

            Gets geometry.

            [Returns:]{.returnLabel}
            :   the geometry

com.mapspeople.models

Class Floor {#class-floor .title title="Class Floor"}
-----------

-   java.lang.Object
-   -   com.mapspeople.models.Floor

-   

    ------------------------------------------------------------------------

    \

        public class Floorextends java.lang.Object

    The type Floor.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `java.lang.String`                | `getBuildingId()`                 |
        |                                   | Gets building id.                 |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getCurrentStyle()`               |
        |                                   | Gets current style.               |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getDisplayName()`                |
        |                                   | Gets display name.                |
        +-----------------------------------+-----------------------------------+
        | `PolygonGeometry`                 | `getGeometry()`                   |
        |                                   | Gets geometry.                    |
        +-----------------------------------+-----------------------------------+
        | `TileOverlay`                     | `getTileOverlay()`                |
        |                                   | Gets tile overlay.                |
        +-----------------------------------+-----------------------------------+
        | `int`                             | `getZIndex()`                     |
        |                                   | Gets z index.                     |
        +-----------------------------------+-----------------------------------+
        | `boolean`                         | `isVisible()`                     |
        |                                   | Is visible boolean.               |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setBuildingId(java.lang.String b |
        |                                   | uildingId)`                       |
        |                                   | Sets building id.                 |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setCurrentStyle(java.lang.String |
        |                                   |  currentStyle)`                   |
        |                                   | Sets current style.               |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOverlay(java.lang.String styl |
        |                                   | e,          TileOverlay overlay)` |
        |                                   | Sets overlay.                     |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setVisible(boolean visible)`     |
        |                                   | Sets visible.                     |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setZIndex(int value)`            |
        |                                   | Sets z index.                     |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### Floor

                public Floor()

            Instantiates a new Floor.

        &nbsp;
        -   #### Floor

                public Floor(int zLevelIndex,             java.lang.String name,             int buildingId)

            Instantiates a new Floor.

            [Parameters:]{.paramLabel}
            :   `zLevelIndex` - the z level index
            :   `name` - the name
            :   `buildingId` - the building id

    &nbsp;
    -   ### Method Detail

        -   #### getGeometry

                public PolygonGeometry getGeometry()

            Gets geometry.

            [Returns:]{.returnLabel}
            :   the geometry

        &nbsp;
        -   #### getZIndex

                public int getZIndex()

            Gets z index.

            [Returns:]{.returnLabel}
            :   the z index

        &nbsp;
        -   #### getDisplayName

                public java.lang.String getDisplayName()

            Gets display name.

            [Returns:]{.returnLabel}
            :   the display name

        &nbsp;
        -   #### setZIndex

                public void setZIndex(int value)

            Sets z index.

            [Parameters:]{.paramLabel}
            :   `value` - the value

        &nbsp;
        -   #### setVisible

                public void setVisible(boolean visible)

            Sets visible.

            [Parameters:]{.paramLabel}
            :   `visible` - the visible

        &nbsp;
        -   #### setOverlay

                public void setOverlay(java.lang.String style,                       TileOverlay overlay)

            Sets overlay.

            [Parameters:]{.paramLabel}
            :   `style` - the style
            :   `overlay` - the overlay

        &nbsp;
        -   #### getTileOverlay

                public TileOverlay getTileOverlay()

            Gets tile overlay.

            [Returns:]{.returnLabel}
            :   the tile overlay

        &nbsp;
        -   #### getCurrentStyle

                public java.lang.String getCurrentStyle()

            Gets current style.

            [Returns:]{.returnLabel}
            :   the current style

        &nbsp;
        -   #### setCurrentStyle

                public void setCurrentStyle(java.lang.String currentStyle)

            Sets current style.

            [Parameters:]{.paramLabel}
            :   `currentStyle` - the current style

        &nbsp;
        -   #### isVisible

                public boolean isVisible()

            Is visible boolean.

            [Returns:]{.returnLabel}
            :   the boolean

        &nbsp;
        -   #### getBuildingId

                public java.lang.String getBuildingId()

            Gets building id.

            [Returns:]{.returnLabel}
            :   the building id

        &nbsp;
        -   #### setBuildingId

                public void setBuildingId(java.lang.String buildingId)

            Sets building id.

            [Parameters:]{.paramLabel}
            :   `buildingId` - the building id

com.mapspeople.models

Class FloorCollection {#class-floorcollection .title title="Class FloorCollection"}
---------------------

-   java.lang.Object
-   -   java.util.AbstractMap&lt;K,V&gt;
    -   -   java.util.HashMap&lt;java.lang.String,Floor&gt;
        -   -   com.mapspeople.models.FloorCollection

-   

    All Implemented Interfaces:
    :   java.io.Serializable, java.lang.Cloneable,
        java.util.Map&lt;java.lang.String,Floor&gt;

    ------------------------------------------------------------------------

    \

        public class FloorCollectionextends java.util.HashMap<java.lang.String,Floor>

    The type Floor collection.

    [See Also:]{.seeLabel}
    :   Serialized Form

-   -   ### Nested Class Summary

        -   ### Nested classes/interfaces inherited from class java.util.AbstractMap

            `java.util.AbstractMap.SimpleEntry<K,V>, java.util.AbstractMap.SimpleImmutableEntry<K,V>`

        &nbsp;
        -   ### Nested classes/interfaces inherited from interface java.util.Map

            `java.util.Map.Entry<K,V>`

    &nbsp;
    -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `addFloor(Floor floor)`           |
        |                                   | Add floor.                        |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<Floor>`           | `getFloors()`                     |
        |                                   | Gets floors.                      |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setFloors(java.util.List<Floor>  |
        |                                   | floors)`                          |
        |                                   | Sets floors.                      |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.util.HashMap

            `clear, clone, containsKey, containsValue, entrySet, forEach, get, isEmpty, keySet, put, putAll, remove, replace, replaceAll, size, values`

        &nbsp;
        -   ### Methods inherited from class java.util.AbstractMap

            `equals, hashCode, toString`

        &nbsp;
        -   ### Methods inherited from class java.lang.Object

            `getClass, notify, notifyAll, wait, wait, wait`

        &nbsp;
        -   ### Methods inherited from interface java.util.Map

            `compute, computeIfAbsent, computeIfPresent, equals, getOrDefault, hashCode, merge, putIfAbsent, remove, replace`

-   -   ### Constructor Detail

        -   #### FloorCollection

                public FloorCollection()

    &nbsp;
    -   ### Method Detail

        -   #### getFloors

                public java.util.List<Floor> getFloors()

            Gets floors.

            [Returns:]{.returnLabel}
            :   the floors

        &nbsp;
        -   #### setFloors

                public void setFloors(java.util.List<Floor> floors)

            Sets floors.

            [Parameters:]{.paramLabel}
            :   `floors` - the floors

        &nbsp;
        -   #### addFloor

                public void addFloor(Floor floor)

            Add floor.

            [Parameters:]{.paramLabel}
            :   `floor` - the floor

com.mapspeople.models

Class Gateway {#class-gateway .title title="Class Gateway"}
-------------

-   java.lang.Object
-   -   com.mapspeople.models.Gateway

-   

    ------------------------------------------------------------------------

    \

        public class Gatewayextends java.lang.Object

    Created by mh on 03-10-2016.

-   -   ### Field Summary

          Constructor and Description
          -----------------------------
          `Gateway()` 

    &nbsp;
    -   ### Method Summary

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Field Detail

        -   #### backendUrls

                public java.lang.String[] backendUrls

            The Backend urls.

        &nbsp;
        -   #### sessionToken

                public java.lang.String sessionToken

            The Session token.

    &nbsp;
    -   ### Constructor Detail

        -   #### Gateway

                public Gateway()

com.mapspeople.models

Class GeoJSONGeometry {#class-geojsongeometry .title title="Class GeoJSONGeometry"}
---------------------

-   java.lang.Object
-   -   com.mapspeople.models.GeoJSONGeometry

-   

    ------------------------------------------------------------------------

    \

        public class GeoJSONGeometryextends java.lang.Object

    The type Geo json geometry.

-   -   ### Field Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `java.util.List<java.util.List<do | `getCoordinates()`                |
        | uble[]>>`                         | Gets coordinates.                 |
        +-----------------------------------+-----------------------------------+
        | `Point`                           | `getPosition()`                   |
        |                                   | method to get the (average) point |
        |                                   | of the geometry                   |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getType()`                       |
        |                                   | Gets type.                        |
        +-----------------------------------+-----------------------------------+
        | `boolean`                         | `isInside(Point point)`           |
        |                                   | method to check if a given point  |
        |                                   | is inside or outside this         |
        |                                   | geometry                          |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setCoordinates(java.util.List<ja |
        |                                   | va.util.List<double[]>> coordinat |
        |                                   | es)`                              |
        |                                   | Sets coordinates.                 |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Field Detail

        -   #### coordinates

                public java.util.List<java.util.List<double[]>> coordinates

            The Coordinates.

    &nbsp;
    -   ### Constructor Detail

        -   #### GeoJSONGeometry

                public GeoJSONGeometry()

    &nbsp;
    -   ### Method Detail

        -   #### getType

                public java.lang.String getType()

            Gets type.

            [Returns:]{.returnLabel}
            :   the type

        &nbsp;
        -   #### getCoordinates

                public java.util.List<java.util.List<double[]>> getCoordinates()

            Gets coordinates.

            [Returns:]{.returnLabel}
            :   the coordinates

        &nbsp;
        -   #### setCoordinates

                public void setCoordinates(java.util.List<java.util.List<double[]>> coordinates)

            Sets coordinates.

            [Parameters:]{.paramLabel}
            :   `coordinates` - the coordinates

        &nbsp;
        -   #### isInside

                public boolean isInside(Point point)

            method to check if a given point is inside or outside this
            geometry

            [Parameters:]{.paramLabel}
            :   `point` - The point to check for

            [Returns:]{.returnLabel}
            :   true if the given point is inside

        &nbsp;
        -   #### getPosition

                public Point getPosition()

            method to get the (average) point of the geometry

            [Returns:]{.returnLabel}
            :   A point describing the geometry (defined here as the
                average lat/lng)

com.mapspeople.models

Class Geometry {#class-geometry .title title="Class Geometry"}
--------------

-   java.lang.Object
-   -   com.mapspeople.models.Geometry

-   

    Direct Known Subclasses:
    :   Point

    ------------------------------------------------------------------------

    \

        public class Geometryextends java.lang.Object

    The type Geometry.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `double[]`                        | `getCoordinates()`                |
        |                                   | Get coordinates double \[ \].     |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getType()`                       |
        |                                   | Gets type.                        |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setCoordinates(double[] coordina |
        |                                   | tes)`                             |
        |                                   | Sets coordinates.                 |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### Geometry

                public Geometry()

    &nbsp;
    -   ### Method Detail

        -   #### getType

                public java.lang.String getType()

            Gets type.

            [Returns:]{.returnLabel}
            :   the type

        &nbsp;
        -   #### getCoordinates

                public double[] getCoordinates()

            Get coordinates double \[ \].

            [Returns:]{.returnLabel}
            :   the double \[ \]

        &nbsp;
        -   #### setCoordinates

                public void setCoordinates(double[] coordinates)

            Sets coordinates.

            [Parameters:]{.paramLabel}
            :   `coordinates` - the coordinates

com.mapspeople.models

Class IconType {#class-icontype .title title="Class IconType"}
--------------

-   java.lang.Object
-   -   com.mapspeople.models.IconType

-   

    ------------------------------------------------------------------------

    \

        public class IconTypeextends java.lang.Object

    The type Icon type.

-   -   ### Field Summary

          Constructor and Description
          -----------------------------
          `IconType()` 

    &nbsp;
    -   ### Method Summary

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Field Detail

        -   #### glass

                public static java.lang.String glass

            The constant glass.

        &nbsp;
        -   #### music

                public static java.lang.String music

            The constant music.

        &nbsp;
        -   #### search

                public static java.lang.String search

            The constant search.

        &nbsp;
        -   #### envelope

                public static java.lang.String envelope

            The constant envelope.

        &nbsp;
        -   #### heart

                public static java.lang.String heart

            The constant heart.

        &nbsp;
        -   #### star

                public static java.lang.String star

            The constant star.

        &nbsp;
        -   #### star\_empty

                public static java.lang.String star_empty

            The constant star\_empty.

        &nbsp;
        -   #### user

                public static java.lang.String user

            The constant user.

        &nbsp;
        -   #### th\_large

                public static java.lang.String th_large

            The constant th\_large.

        &nbsp;
        -   #### th

                public static java.lang.String th

            The constant th.

        &nbsp;
        -   #### th\_list

                public static java.lang.String th_list

            The constant th\_list.

        &nbsp;
        -   #### ok

                public static java.lang.String ok

            The constant ok.

        &nbsp;
        -   #### remove

                public static java.lang.String remove

            The constant remove.

        &nbsp;
        -   #### zoom\_in

                public static java.lang.String zoom_in

            The constant zoom\_in.

        &nbsp;
        -   #### zoom\_out

                public static java.lang.String zoom_out

            The constant zoom\_out.

        &nbsp;
        -   #### off

                public static java.lang.String off

            The constant off.

        &nbsp;
        -   #### signal

                public static java.lang.String signal

            The constant signal.

        &nbsp;
        -   #### cog

                public static java.lang.String cog

            The constant cog.

        &nbsp;
        -   #### trash

                public static java.lang.String trash

            The constant trash.

        &nbsp;
        -   #### file

                public static java.lang.String file

            The constant file.

        &nbsp;
        -   #### time

                public static java.lang.String time

            The constant time.

        &nbsp;
        -   #### road

                public static java.lang.String road

            The constant road.

        &nbsp;
        -   #### download\_alt

                public static java.lang.String download_alt

            The constant download\_alt.

        &nbsp;
        -   #### download

                public static java.lang.String download

            The constant download.

        &nbsp;
        -   #### upload

                public static java.lang.String upload

            The constant upload.

        &nbsp;
        -   #### inbox

                public static java.lang.String inbox

            The constant inbox.

        &nbsp;
        -   #### play\_circle

                public static java.lang.String play_circle

            The constant play\_circle.

        &nbsp;
        -   #### repeat

                public static java.lang.String repeat

            The constant repeat.

        &nbsp;
        -   #### refresh

                public static java.lang.String refresh

            The constant refresh.

        &nbsp;
        -   #### list\_alt

                public static java.lang.String list_alt

            The constant list\_alt.

        &nbsp;
        -   #### lock

                public static java.lang.String lock

            The constant lock.

        &nbsp;
        -   #### flag

                public static java.lang.String flag

            The constant flag.

        &nbsp;
        -   #### headphones

                public static java.lang.String headphones

            The constant headphones.

        &nbsp;
        -   #### volume\_off

                public static java.lang.String volume_off

            The constant volume\_off.

        &nbsp;
        -   #### volume\_down

                public static java.lang.String volume_down

            The constant volume\_down.

        &nbsp;
        -   #### volume\_up

                public static java.lang.String volume_up

            The constant volume\_up.

        &nbsp;
        -   #### qrcode

                public static java.lang.String qrcode

            The constant qrcode.

        &nbsp;
        -   #### barcode

                public static java.lang.String barcode

            The constant barcode.

        &nbsp;
        -   #### book

                public static java.lang.String book

            The constant book.

        &nbsp;
        -   #### print

                public static java.lang.String print

            The constant print.

        &nbsp;
        -   #### camera

                public static java.lang.String camera

            The constant camera.

        &nbsp;
        -   #### font

                public static java.lang.String font

            The constant font.

        &nbsp;
        -   #### bold

                public static java.lang.String bold

            The constant bold.

        &nbsp;
        -   #### italic

                public static java.lang.String italic

            The constant italic.

        &nbsp;
        -   #### text\_height

                public static java.lang.String text_height

            The constant text\_height.

        &nbsp;
        -   #### text\_width

                public static java.lang.String text_width

            The constant text\_width.

        &nbsp;
        -   #### align\_left

                public static java.lang.String align_left

            The constant align\_left.

        &nbsp;
        -   #### align\_center

                public static java.lang.String align_center

            The constant align\_center.

        &nbsp;
        -   #### align\_right

                public static java.lang.String align_right

            The constant align\_right.

        &nbsp;
        -   #### align\_justify

                public static java.lang.String align_justify

            The constant align\_justify.

        &nbsp;
        -   #### list

                public static java.lang.String list

            The constant list.

        &nbsp;
        -   #### indent\_left

                public static java.lang.String indent_left

            The constant indent\_left.

        &nbsp;
        -   #### indent\_right

                public static java.lang.String indent_right

            The constant indent\_right.

        &nbsp;
        -   #### facetime\_video

                public static java.lang.String facetime_video

            The constant facetime\_video.

        &nbsp;
        -   #### picture

                public static java.lang.String picture

            The constant picture.

        &nbsp;
        -   #### pencil

                public static java.lang.String pencil

            The constant pencil.

        &nbsp;
        -   #### map\_marker

                public static java.lang.String map_marker

            The constant map\_marker.

        &nbsp;
        -   #### adjust

                public static java.lang.String adjust

            The constant adjust.

        &nbsp;
        -   #### tint

                public static java.lang.String tint

            The constant tint.

        &nbsp;
        -   #### edit

                public static java.lang.String edit

            The constant edit.

        &nbsp;
        -   #### share

                public static java.lang.String share

            The constant share.

        &nbsp;
        -   #### check

                public static java.lang.String check

            The constant check.

        &nbsp;
        -   #### move

                public static java.lang.String move

            The constant move.

        &nbsp;
        -   #### step\_backward

                public static java.lang.String step_backward

            The constant step\_backward.

        &nbsp;
        -   #### fast\_backward

                public static java.lang.String fast_backward

            The constant fast\_backward.

        &nbsp;
        -   #### backward

                public static final java.lang.String backward

            The constant backward.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### pause

                public static java.lang.String pause

            The constant pause.

        &nbsp;
        -   #### stop

                public static java.lang.String stop

            The constant stop.

        &nbsp;
        -   #### forward

                public static java.lang.String forward

            The constant forward.

        &nbsp;
        -   #### fast\_forward

                public static java.lang.String fast_forward

            The constant fast\_forward.

        &nbsp;
        -   #### step\_forward

                public static java.lang.String step_forward

            The constant step\_forward.

        &nbsp;
        -   #### eject

                public static java.lang.String eject

            The constant eject.

        &nbsp;
        -   #### chevron\_left

                public static java.lang.String chevron_left

            The constant chevron\_left.

        &nbsp;
        -   #### chevron\_right

                public static java.lang.String chevron_right

            The constant chevron\_right.

        &nbsp;
        -   #### plus\_sign

                public static java.lang.String plus_sign

            The constant plus\_sign.

        &nbsp;
        -   #### minus\_sign

                public static java.lang.String minus_sign

            The constant minus\_sign.

        &nbsp;
        -   #### remove\_sign

                public static java.lang.String remove_sign

            The constant remove\_sign.

        &nbsp;
        -   #### ok\_sign

                public static java.lang.String ok_sign

            The constant ok\_sign.

        &nbsp;
        -   #### question\_sign

                public static java.lang.String question_sign

            The constant question\_sign.

        &nbsp;
        -   #### info\_sign

                public static java.lang.String info_sign

            The constant info\_sign.

        &nbsp;
        -   #### screenshot

                public static java.lang.String screenshot

            The constant screenshot.

        &nbsp;
        -   #### remove\_circle

                public static java.lang.String remove_circle

            The constant remove\_circle.

        &nbsp;
        -   #### ok\_circle

                public static java.lang.String ok_circle

            The constant ok\_circle.

        &nbsp;
        -   #### ban\_circle

                public static java.lang.String ban_circle

            The constant ban\_circle.

        &nbsp;
        -   #### arrow\_left

                public static final java.lang.String arrow_left

            The constant arrow\_left.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### arrow\_right

                public static final java.lang.String arrow_right

            The constant arrow\_right.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### arrow\_up

                public static final java.lang.String arrow_up

            The constant arrow\_up.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### arrow\_down

                public static java.lang.String arrow_down

            The constant arrow\_down.

        &nbsp;
        -   #### share\_alt

                public static java.lang.String share_alt

            The constant share\_alt.

        &nbsp;
        -   #### resize\_full

                public static java.lang.String resize_full

            The constant resize\_full.

        &nbsp;
        -   #### resize\_small

                public static java.lang.String resize_small

            The constant resize\_small.

        &nbsp;
        -   #### plus

                public static java.lang.String plus

            The constant plus.

        &nbsp;
        -   #### minus

                public static java.lang.String minus

            The constant minus.

        &nbsp;
        -   #### asterisk

                public static java.lang.String asterisk

            The constant asterisk.

        &nbsp;
        -   #### exclamation\_sign

                public static java.lang.String exclamation_sign

            The constant exclamation\_sign.

        &nbsp;
        -   #### gift

                public static java.lang.String gift

            The constant gift.

        &nbsp;
        -   #### leaf

                public static java.lang.String leaf

            The constant leaf.

        &nbsp;
        -   #### fire

                public static java.lang.String fire

            The constant fire.

        &nbsp;
        -   #### eye\_open

                public static java.lang.String eye_open

            The constant eye\_open.

        &nbsp;
        -   #### eye\_close

                public static java.lang.String eye_close

            The constant eye\_close.

        &nbsp;
        -   #### warning\_sign

                public static java.lang.String warning_sign

            The constant warning\_sign.

        &nbsp;
        -   #### plane

                public static java.lang.String plane

            The constant plane.

        &nbsp;
        -   #### calendar

                public static java.lang.String calendar

            The constant calendar.

        &nbsp;
        -   #### random

                public static java.lang.String random

            The constant random.

        &nbsp;
        -   #### comment

                public static java.lang.String comment

            The constant comment.

        &nbsp;
        -   #### magnet

                public static java.lang.String magnet

            The constant magnet.

        &nbsp;
        -   #### chevron\_up

                public static java.lang.String chevron_up

            The constant chevron\_up.

        &nbsp;
        -   #### chevron\_down

                public static java.lang.String chevron_down

            The constant chevron\_down.

        &nbsp;
        -   #### retweet

                public static java.lang.String retweet

            The constant retweet.

        &nbsp;
        -   #### shopping\_cart

                public static java.lang.String shopping_cart

            The constant shopping\_cart.

        &nbsp;
        -   #### folder\_close

                public static java.lang.String folder_close

            The constant folder\_close.

        &nbsp;
        -   #### folder\_open

                public static java.lang.String folder_open

            The constant folder\_open.

        &nbsp;
        -   #### resize\_vertical

                public static java.lang.String resize_vertical

            The constant resize\_vertical.

        &nbsp;
        -   #### resize\_horizontal

                public static java.lang.String resize_horizontal

            The constant resize\_horizontal.

        &nbsp;
        -   #### bar\_chart

                public static java.lang.String bar_chart

            The constant bar\_chart.

        &nbsp;
        -   #### twitter\_sign

                public static java.lang.String twitter_sign

            The constant twitter\_sign.

        &nbsp;
        -   #### facebook\_sign

                public static java.lang.String facebook_sign

            The constant facebook\_sign.

        &nbsp;
        -   #### camera\_retro

                public static java.lang.String camera_retro

            The constant camera\_retro.

        &nbsp;
        -   #### key

                public static java.lang.String key

            The constant key.

        &nbsp;
        -   #### cogs

                public static java.lang.String cogs

            The constant cogs.

        &nbsp;
        -   #### comments

                public static java.lang.String comments

            The constant comments.

        &nbsp;
        -   #### thumbs\_up

                public static java.lang.String thumbs_up

            The constant thumbs\_up.

        &nbsp;
        -   #### thumbs\_down

                public static java.lang.String thumbs_down

            The constant thumbs\_down.

        &nbsp;
        -   #### star\_half

                public static java.lang.String star_half

            The constant star\_half.

        &nbsp;
        -   #### heart\_empty

                public static java.lang.String heart_empty

            The constant heart\_empty.

        &nbsp;
        -   #### signout

                public static java.lang.String signout

            The constant signout.

        &nbsp;
        -   #### linkedin\_sign

                public static java.lang.String linkedin_sign

            The constant linkedin\_sign.

        &nbsp;
        -   #### pushpin

                public static java.lang.String pushpin

            The constant pushpin.

        &nbsp;
        -   #### external\_link

                public static java.lang.String external_link

            The constant external\_link.

        &nbsp;
        -   #### signin

                public static java.lang.String signin

            The constant signin.

        &nbsp;
        -   #### trophy

                public static java.lang.String trophy

            The constant trophy.

        &nbsp;
        -   #### github\_sign

                public static java.lang.String github_sign

            The constant github\_sign.

        &nbsp;
        -   #### upload\_alt

                public static java.lang.String upload_alt

            The constant upload\_alt.

        &nbsp;
        -   #### lemon

                public static java.lang.String lemon

            The constant lemon.

        &nbsp;
        -   #### phone

                public static java.lang.String phone

            The constant phone.

        &nbsp;
        -   #### check\_empty

                public static java.lang.String check_empty

            The constant check\_empty.

        &nbsp;
        -   #### bookmark\_empty

                public static java.lang.String bookmark_empty

            The constant bookmark\_empty.

        &nbsp;
        -   #### phone\_sign

                public static java.lang.String phone_sign

            The constant phone\_sign.

        &nbsp;
        -   #### twitter

                public static java.lang.String twitter

            The constant twitter.

        &nbsp;
        -   #### facebook

                public static java.lang.String facebook

            The constant facebook.

        &nbsp;
        -   #### github

                public static java.lang.String github

            The constant github.

        &nbsp;
        -   #### unlock

                public static java.lang.String unlock

            The constant unlock.

        &nbsp;
        -   #### credit\_card

                public static java.lang.String credit_card

            The constant credit\_card.

        &nbsp;
        -   #### rss

                public static java.lang.String rss

            The constant rss.

        &nbsp;
        -   #### hdd

                public static java.lang.String hdd

            The constant hdd.

        &nbsp;
        -   #### bullhorn

                public static java.lang.String bullhorn

            The constant bullhorn.

        &nbsp;
        -   #### bell

                public static java.lang.String bell

            The constant bell.

        &nbsp;
        -   #### certificate

                public static java.lang.String certificate

            The constant certificate.

        &nbsp;
        -   #### hand\_right

                public static java.lang.String hand_right

            The constant hand\_right.

        &nbsp;
        -   #### hand\_left

                public static java.lang.String hand_left

            The constant hand\_left.

        &nbsp;
        -   #### hand\_up

                public static java.lang.String hand_up

            The constant hand\_up.

        &nbsp;
        -   #### hand\_down

                public static java.lang.String hand_down

            The constant hand\_down.

        &nbsp;
        -   #### circle\_arrow\_left

                public static java.lang.String circle_arrow_left

            The constant circle\_arrow\_left.

        &nbsp;
        -   #### circle\_arrow\_right

                public static java.lang.String circle_arrow_right

            The constant circle\_arrow\_right.

        &nbsp;
        -   #### circle\_arrow\_up

                public static java.lang.String circle_arrow_up

            The constant circle\_arrow\_up.

        &nbsp;
        -   #### circle\_arrow\_down

                public static java.lang.String circle_arrow_down

            The constant circle\_arrow\_down.

        &nbsp;
        -   #### globe

                public static java.lang.String globe

            The constant globe.

        &nbsp;
        -   #### wrench

                public static java.lang.String wrench

            The constant wrench.

        &nbsp;
        -   #### tasks

                public static java.lang.String tasks

            The constant tasks.

        &nbsp;
        -   #### filter

                public static java.lang.String filter

            The constant filter.

        &nbsp;
        -   #### briefcase

                public static java.lang.String briefcase

            The constant briefcase.

        &nbsp;
        -   #### fullscreen

                public static java.lang.String fullscreen

            The constant fullscreen.

        &nbsp;
        -   #### group

                public static java.lang.String group

            The constant group.

        &nbsp;
        -   #### link

                public static java.lang.String link

            The constant link.

        &nbsp;
        -   #### cloud

                public static java.lang.String cloud

            The constant cloud.

        &nbsp;
        -   #### beaker

                public static java.lang.String beaker

            The constant beaker.

        &nbsp;
        -   #### cut

                public static java.lang.String cut

            The constant cut.

        &nbsp;
        -   #### copy

                public static java.lang.String copy

            The constant copy.

        &nbsp;
        -   #### paper\_clip

                public static java.lang.String paper_clip

            The constant paper\_clip.

        &nbsp;
        -   #### save

                public static java.lang.String save

            The constant save.

        &nbsp;
        -   #### sign\_blank

                public static java.lang.String sign_blank

            The constant sign\_blank.

        &nbsp;
        -   #### reorder

                public static java.lang.String reorder

            The constant reorder.

        &nbsp;
        -   #### list\_ul

                public static java.lang.String list_ul

            The constant list\_ul.

        &nbsp;
        -   #### list\_ol

                public static java.lang.String list_ol

            The constant list\_ol.

        &nbsp;
        -   #### strikethrough

                public static java.lang.String strikethrough

            The constant strikethrough.

        &nbsp;
        -   #### underline

                public static java.lang.String underline

            The constant underline.

        &nbsp;
        -   #### table

                public static java.lang.String table

            The constant table.

        &nbsp;
        -   #### magic

                public static java.lang.String magic

            The constant magic.

        &nbsp;
        -   #### pinterest

                public static java.lang.String pinterest

            The constant pinterest.

        &nbsp;
        -   #### pinterest\_sign

                public static java.lang.String pinterest_sign

            The constant pinterest\_sign.

        &nbsp;
        -   #### google\_plus\_sign

                public static java.lang.String google_plus_sign

            The constant google\_plus\_sign.

        &nbsp;
        -   #### google\_plus

                public static java.lang.String google_plus

            The constant google\_plus.

        &nbsp;
        -   #### money

                public static java.lang.String money

            The constant money.

        &nbsp;
        -   #### caret\_down

                public static java.lang.String caret_down

            The constant caret\_down.

        &nbsp;
        -   #### caret\_up

                public static java.lang.String caret_up

            The constant caret\_up.

        &nbsp;
        -   #### caret\_left

                public static java.lang.String caret_left

            The constant caret\_left.

        &nbsp;
        -   #### caret\_right

                public static java.lang.String caret_right

            The constant caret\_right.

        &nbsp;
        -   #### columns

                public static java.lang.String columns

            The constant columns.

        &nbsp;
        -   #### sort

                public static java.lang.String sort

            The constant sort.

        &nbsp;
        -   #### sort\_down

                public static java.lang.String sort_down

            The constant sort\_down.

        &nbsp;
        -   #### sort\_up

                public static java.lang.String sort_up

            The constant sort\_up.

        &nbsp;
        -   #### envelope\_alt

                public static java.lang.String envelope_alt

            The constant envelope\_alt.

        &nbsp;
        -   #### linkedin

                public static java.lang.String linkedin

            The constant linkedin.

        &nbsp;
        -   #### undo

                public static java.lang.String undo

            The constant undo.

        &nbsp;
        -   #### legal

                public static java.lang.String legal

            The constant legal.

        &nbsp;
        -   #### dashboard

                public static java.lang.String dashboard

            The constant dashboard.

        &nbsp;
        -   #### comment\_alt

                public static java.lang.String comment_alt

            The constant comment\_alt.

        &nbsp;
        -   #### comments\_alt

                public static java.lang.String comments_alt

            The constant comments\_alt.

        &nbsp;
        -   #### bolt

                public static java.lang.String bolt

            The constant bolt.

        &nbsp;
        -   #### sitemap

                public static java.lang.String sitemap

            The constant sitemap.

        &nbsp;
        -   #### umbrella

                public static java.lang.String umbrella

            The constant umbrella.

        &nbsp;
        -   #### paste

                public static java.lang.String paste

            The constant paste.

        &nbsp;
        -   #### lightbulb

                public static java.lang.String lightbulb

            The constant lightbulb.

        &nbsp;
        -   #### exchange

                public static java.lang.String exchange

            The constant exchange.

        &nbsp;
        -   #### cloud\_download

                public static java.lang.String cloud_download

            The constant cloud\_download.

        &nbsp;
        -   #### cloud\_upload

                public static java.lang.String cloud_upload

            The constant cloud\_upload.

        &nbsp;
        -   #### user\_md

                public static java.lang.String user_md

            The constant user\_md.

        &nbsp;
        -   #### stethoscope

                public static java.lang.String stethoscope

            The constant stethoscope.

        &nbsp;
        -   #### suitcase

                public static java.lang.String suitcase

            The constant suitcase.

        &nbsp;
        -   #### bell\_alt

                public static java.lang.String bell_alt

            The constant bell\_alt.

        &nbsp;
        -   #### coffee

                public static java.lang.String coffee

            The constant coffee.

        &nbsp;
        -   #### food

                public static java.lang.String food

            The constant food.

        &nbsp;
        -   #### file\_alt

                public static java.lang.String file_alt

            The constant file\_alt.

        &nbsp;
        -   #### ambulance

                public static java.lang.String ambulance

            The constant ambulance.

        &nbsp;
        -   #### medkit

                public static java.lang.String medkit

            The constant medkit.

        &nbsp;
        -   #### fighter\_jet

                public static java.lang.String fighter_jet

            The constant fighter\_jet.

        &nbsp;
        -   #### beer

                public static java.lang.String beer

            The constant beer.

        &nbsp;
        -   #### h\_sign

                public static java.lang.String h_sign

            The constant h\_sign.

        &nbsp;
        -   #### plus\_sign\_alt

                public static java.lang.String plus_sign_alt

            The constant plus\_sign\_alt.

        &nbsp;
        -   #### double\_angle\_left

                public static java.lang.String double_angle_left

            The constant double\_angle\_left.

        &nbsp;
        -   #### double\_angle\_right

                public static java.lang.String double_angle_right

            The constant double\_angle\_right.

        &nbsp;
        -   #### double\_angle\_up

                public static java.lang.String double_angle_up

            The constant double\_angle\_up.

        &nbsp;
        -   #### double\_angle\_down

                public static java.lang.String double_angle_down

            The constant double\_angle\_down.

        &nbsp;
        -   #### angle\_left

                public static java.lang.String angle_left

            The constant angle\_left.

        &nbsp;
        -   #### angle\_right

                public static java.lang.String angle_right

            The constant angle\_right.

        &nbsp;
        -   #### angle\_up

                public static java.lang.String angle_up

            The constant angle\_up.

        &nbsp;
        -   #### angle\_down

                public static java.lang.String angle_down

            The constant angle\_down.

        &nbsp;
        -   #### desktop

                public static java.lang.String desktop

            The constant desktop.

        &nbsp;
        -   #### laptop

                public static java.lang.String laptop

            The constant laptop.

        &nbsp;
        -   #### tablet

                public static java.lang.String tablet

            The constant tablet.

        &nbsp;
        -   #### mobile\_phone

                public static java.lang.String mobile_phone

            The constant mobile\_phone.

        &nbsp;
        -   #### circle\_blank

                public static java.lang.String circle_blank

            The constant circle\_blank.

        &nbsp;
        -   #### quote\_left

                public static java.lang.String quote_left

            The constant quote\_left.

        &nbsp;
        -   #### quote\_right

                public static java.lang.String quote_right

            The constant quote\_right.

        &nbsp;
        -   #### spinner

                public static java.lang.String spinner

            The constant spinner.

        &nbsp;
        -   #### circle

                public static java.lang.String circle

            The constant circle.

        &nbsp;
        -   #### reply

                public static java.lang.String reply

            The constant reply.

        &nbsp;
        -   #### folder\_close\_alt

                public static java.lang.String folder_close_alt

            The constant folder\_close\_alt.

        &nbsp;
        -   #### folder\_open\_alt

                public static java.lang.String folder_open_alt

            The constant folder\_open\_alt.

        &nbsp;
        -   #### expand\_alt

                public static java.lang.String expand_alt

            The constant expand\_alt.

        &nbsp;
        -   #### collapse\_alt

                public static java.lang.String collapse_alt

            The constant collapse\_alt.

        &nbsp;
        -   #### smile

                public static java.lang.String smile

            The constant smile.

        &nbsp;
        -   #### frown

                public static java.lang.String frown

            The constant frown.

        &nbsp;
        -   #### meh

                public static java.lang.String meh

            The constant meh.

        &nbsp;
        -   #### gamepad

                public static java.lang.String gamepad

            The constant gamepad.

        &nbsp;
        -   #### keyboard

                public static java.lang.String keyboard

            The constant keyboard.

        &nbsp;
        -   #### flag\_alt

                public static java.lang.String flag_alt

            The constant flag\_alt.

        &nbsp;
        -   #### flag\_checkered

                public static final java.lang.String flag_checkered

            The constant flag\_checkered.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### terminal

                public static java.lang.String terminal

            The constant terminal.

        &nbsp;
        -   #### code

                public static java.lang.String code

            The constant code.

        &nbsp;
        -   #### reply\_all

                public static java.lang.String reply_all

            The constant reply\_all.

        &nbsp;
        -   #### mail\_reply\_all

                public static java.lang.String mail_reply_all

            The constant mail\_reply\_all.

        &nbsp;
        -   #### star\_half\_full

                public static java.lang.String star_half_full

            The constant star\_half\_full.

        &nbsp;
        -   #### star\_half\_empty

                public static java.lang.String star_half_empty

            The constant star\_half\_empty.

        &nbsp;
        -   #### location\_arrow

                public static java.lang.String location_arrow

            The constant location\_arrow.

        &nbsp;
        -   #### crop

                public static java.lang.String crop

            The constant crop.

        &nbsp;
        -   #### code\_fork

                public static java.lang.String code_fork

            The constant code\_fork.

        &nbsp;
        -   #### unlink

                public static java.lang.String unlink

            The constant unlink.

        &nbsp;
        -   #### question

                public static java.lang.String question

            The constant question.

        &nbsp;
        -   #### info

                public static java.lang.String info

            The constant info.

        &nbsp;
        -   #### exclamation

                public static java.lang.String exclamation

            The constant exclamation.

        &nbsp;
        -   #### superscript

                public static java.lang.String superscript

            The constant superscript.

        &nbsp;
        -   #### subscript

                public static java.lang.String subscript

            The constant subscript.

        &nbsp;
        -   #### eraser

                public static java.lang.String eraser

            The constant eraser.

        &nbsp;
        -   #### puzzle\_piece

                public static java.lang.String puzzle_piece

            The constant puzzle\_piece.

        &nbsp;
        -   #### microphone

                public static java.lang.String microphone

            The constant microphone.

        &nbsp;
        -   #### microphone\_off

                public static java.lang.String microphone_off

            The constant microphone\_off.

        &nbsp;
        -   #### shield

                public static java.lang.String shield

            The constant shield.

        &nbsp;
        -   #### calendar\_empty

                public static java.lang.String calendar_empty

            The constant calendar\_empty.

        &nbsp;
        -   #### fire\_extinguisher

                public static java.lang.String fire_extinguisher

            The constant fire\_extinguisher.

        &nbsp;
        -   #### rocket

                public static java.lang.String rocket

            The constant rocket.

        &nbsp;
        -   #### maxcdn

                public static java.lang.String maxcdn

            The constant maxcdn.

        &nbsp;
        -   #### chevron\_sign\_left

                public static java.lang.String chevron_sign_left

            The constant chevron\_sign\_left.

        &nbsp;
        -   #### chevron\_sign\_right

                public static java.lang.String chevron_sign_right

            The constant chevron\_sign\_right.

        &nbsp;
        -   #### chevron\_sign\_up

                public static java.lang.String chevron_sign_up

            The constant chevron\_sign\_up.

        &nbsp;
        -   #### chevron\_sign\_down

                public static java.lang.String chevron_sign_down

            The constant chevron\_sign\_down.

        &nbsp;
        -   #### html5

                public static java.lang.String html5

            The constant html5.

        &nbsp;
        -   #### css3

                public static java.lang.String css3

            The constant css3.

        &nbsp;
        -   #### anchor

                public static java.lang.String anchor

            The constant anchor.

        &nbsp;
        -   #### unlock\_alt

                public static java.lang.String unlock_alt

            The constant unlock\_alt.

        &nbsp;
        -   #### bullseye

                public static java.lang.String bullseye

            The constant bullseye.

        &nbsp;
        -   #### ellipsis\_horizontal

                public static java.lang.String ellipsis_horizontal

            The constant ellipsis\_horizontal.

        &nbsp;
        -   #### ellipsis\_vertical

                public static java.lang.String ellipsis_vertical

            The constant ellipsis\_vertical.

        &nbsp;
        -   #### rss\_sign

                public static java.lang.String rss_sign

            The constant rss\_sign.

        &nbsp;
        -   #### play\_sign

                public static java.lang.String play_sign

            The constant play\_sign.

        &nbsp;
        -   #### ticket

                public static java.lang.String ticket

            The constant ticket.

        &nbsp;
        -   #### minus\_sign\_alt

                public static java.lang.String minus_sign_alt

            The constant minus\_sign\_alt.

        &nbsp;
        -   #### check\_minus

                public static java.lang.String check_minus

            The constant check\_minus.

        &nbsp;
        -   #### level\_up

                public static final java.lang.String level_up

            The constant level\_up.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### level\_down

                public static final java.lang.String level_down

            The constant level\_down.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### check\_sign

                public static java.lang.String check_sign

            The constant check\_sign.

        &nbsp;
        -   #### edit\_sign

                public static java.lang.String edit_sign

            The constant edit\_sign.

        &nbsp;
        -   #### external\_link\_sign

                public static java.lang.String external_link_sign

            The constant external\_link\_sign.

        &nbsp;
        -   #### share\_sign

                public static java.lang.String share_sign

            The constant share\_sign.

        &nbsp;
        -   #### bicycle

                public static final java.lang.String bicycle

            The constant bicycle.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### car

                public static final java.lang.String car

            The constant car.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### hospital

                public static final java.lang.String hospital

            The constant hospital.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### mansilhouette

                public static final java.lang.String mansilhouette

            The constant mansilhouette.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### vehicle

                public static final java.lang.String vehicle

            The constant vehicle.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### wheelchair

                public static final java.lang.String wheelchair

            The constant wheelchair.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### home

                public static final java.lang.String home

            The constant home.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### clock

                public static final java.lang.String clock

            The constant clock.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### playO2

                public static final java.lang.String playO2

            The constant playO2.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### tag

                public static final java.lang.String tag

            The constant tag.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### tags

                public static final java.lang.String tags

            The constant tags.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### bookmark

                public static final java.lang.String bookmark

            The constant bookmark.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### image

                public static final java.lang.String image

            The constant image.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### airplane

                public static final java.lang.String airplane

            The constant airplane.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### levels

                public static final java.lang.String levels

            The constant levels.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### truck

                public static final java.lang.String truck

            The constant truck.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### mail

                public static final java.lang.String mail

            The constant mail.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### building

                public static final java.lang.String building

            The constant building.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### navigation

                public static final java.lang.String navigation

            The constant navigation.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### university

                public static final java.lang.String university

            The constant university.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### bus

                public static final java.lang.String bus

            The constant bus.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### motorbike

                public static final java.lang.String motorbike

            The constant motorbike.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### train

                public static final java.lang.String train

            The constant train.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### play

                public static final java.lang.String play

            The constant play.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### film

                public static final java.lang.String film

            The constant film.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### playO

                public static final java.lang.String playO

            The constant playO.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### compass

                public static final java.lang.String compass

            The constant compass.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### customTypes

                public static final java.lang.String[] customTypes

            The constant customTypes.

    &nbsp;
    -   ### Constructor Detail

        -   #### IconType

                public IconType()

com.mapspeople.models

Class LineGeometry {#class-linegeometry .title title="Class LineGeometry"}
------------------

-   java.lang.Object
-   -   com.mapspeople.models.LineGeometry

-   

    Direct Known Subclasses:
    :   LineString

    ------------------------------------------------------------------------

    \

        public class LineGeometryextends java.lang.Object

    The type Line geometry.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `double[]`                        | `getBBox()`                       |
        |                                   | Get b box double \[ \].           |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<java.lang.Double[ | `getCoordinates()`                |
        | ]>`                               | Gets coordinates.                 |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getType()`                       |
        |                                   | Gets type.                        |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setBBox(double[] bbox)`          |
        |                                   | Sets b box.                       |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setCoordinates(java.util.List<ja |
        |                                   | va.lang.Double[]> coordinates)`   |
        |                                   | Sets coordinates.                 |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### LineGeometry

                public LineGeometry()

            Instantiates a new Line geometry.

    &nbsp;
    -   ### Method Detail

        -   #### getType

                public java.lang.String getType()

            Gets type.

            [Returns:]{.returnLabel}
            :   the type

        &nbsp;
        -   #### getCoordinates

                public java.util.List<java.lang.Double[]> getCoordinates()

            Gets coordinates.

            [Returns:]{.returnLabel}
            :   the coordinates

        &nbsp;
        -   #### setCoordinates

                public void setCoordinates(java.util.List<java.lang.Double[]> coordinates)

            Sets coordinates.

            [Parameters:]{.paramLabel}
            :   `coordinates` - the coordinates

        &nbsp;
        -   #### setBBox

                public void setBBox(double[] bbox)

            Sets b box.

            [Parameters:]{.paramLabel}
            :   `bbox` - the bbox

        &nbsp;
        -   #### getBBox

                public double[] getBBox()

            Get b box double \[ \].

            [Returns:]{.returnLabel}
            :   the double \[ \]

com.mapspeople.models

Class LineString {#class-linestring .title title="Class LineString"}
----------------

-   java.lang.Object
-   -   com.mapspeople.models.LineGeometry
    -   -   com.mapspeople.models.LineString

-   

    ------------------------------------------------------------------------

    \

        public class LineStringextends LineGeometry

    The type Line string.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `java.util.List<Point>`           | `getPoints()`                     |
        |                                   | Gets points.                      |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class com.mapspeople.models.LineGeometry

            `getBBox, getCoordinates, getType, setBBox, setCoordinates`

        &nbsp;
        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### LineString

                public LineString()

            Instantiates a new Line string.

    &nbsp;
    -   ### Method Detail

        -   #### getPoints

                public java.util.List<Point> getPoints()

            Gets points.

            [Returns:]{.returnLabel}
            :   the points

com.mapspeople.models

Interface Location {#interface-location .title title="Interface Location"}
------------------

-   

    All Superinterfaces:
    :   Feature

    &nbsp;

    All Known Implementing Classes:
    :   MPLocation, PositionIndicator

    ------------------------------------------------------------------------

    \

        public interface Locationextends Feature

    Location model. Implement this interface to create and use your own
    locations. Use in conjunction with a provider interface
    implementation/extension.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `java.lang.String[]`              | `getCategories()`                 |
        |                                   | The categories that this location |
        |                                   | belongs to                        |
        +-----------------------------------+-----------------------------------+
        | `LocationDisplayRule`             | `getDisplayRule()`                |
        |                                   | Gets display rule.                |
        +-----------------------------------+-----------------------------------+
        | `DataField`                       | `getField(java.lang.String key)`  |
        |                                   | Gets field.                       |
        +-----------------------------------+-----------------------------------+
        | `int`                             | `getFloorIndex()`                 |
        |                                   | Get the integer representation of |
        |                                   | the floor index                   |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getFloorName()`                  |
        |                                   | Get the name representation of    |
        |                                   | the floor                         |
        +-----------------------------------+-----------------------------------+
        | `Geometry`                        | `getGeometry()`                   |
        |                                   | Gets geometry.                    |
        +-----------------------------------+-----------------------------------+
        | `LatLng`                          | `getGLatLng()`                    |
        |                                   | Get the Google latitude/longitude |
        |                                   | object                            |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getId()`                         |
        |                                   | Gets id.                          |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<LocationProperty> | `getLocationProperyList()`        |
        | `                                 | Gets location propery list.       |
        +-----------------------------------+-----------------------------------+
        | `Marker`                          | `getMarker()`                     |
        |                                   | Get the google maps marker for    |
        |                                   | this location, if the location    |
        |                                   | has been added to a map           |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getName()`                       |
        |                                   | Get the name of the location      |
        +-----------------------------------+-----------------------------------+
        | `Point`                           | `getPoint()`                      |
        |                                   | Gets point.                       |
        +-----------------------------------+-----------------------------------+
        | `java.util.Map<java.lang.String,j | `getProperties()`                 |
        | ava.lang.Object>`                 | Gets properties.                  |
        +-----------------------------------+-----------------------------------+
        | `java.lang.Object`                | `getProperty(java.lang.String key |
        |                                   | )`                                |
        |                                   | Gets property.                    |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getRoomId()`                     |
        |                                   | Get the integer representation of |
        |                                   | the floor index                   |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getStringProperty(java.lang.Stri |
        |                                   | ng key)`                          |
        |                                   | Gets string property.             |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getType()`                       |
        |                                   | Gets type.                        |
        +-----------------------------------+-----------------------------------+
        | `boolean`                         | `has(java.lang.String key)`       |
        |                                   | Has boolean.                      |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `hide()`                          |
        |                                   | Hide.                             |
        +-----------------------------------+-----------------------------------+
        | `boolean`                         | `isVisible()`                     |
        |                                   | Is visible boolean.               |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setCategories(java.lang.String[] |
        |                                   |  categories)`                     |
        |                                   | Setter for the categories that    |
        |                                   | this location belongs to          |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setDisplayRule(LocationDisplayRu |
        |                                   | le rule)`                         |
        |                                   | Sets display rule.                |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setLatLng(LatLng position)`      |
        |                                   | Sets lat lng.                     |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setMarker(Marker marker)`        |
        |                                   | Sets marker.                      |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setName(java.lang.String name)`  |
        |                                   | Sets name.                        |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setPoint(Point point)`           |
        |                                   | Sets point.                       |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setProperty(java.lang.String key |
        |                                   | ,           java.lang.Object valu |
        |                                   | e)`                               |
        |                                   | Sets property.                    |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setType(java.lang.String type)`  |
        |                                   | Sets type.                        |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setVisible(boolean visible)`     |
        |                                   | Sets visible.                     |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `show()`                          |
        |                                   | Show.                             |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `updateView(GoogleMap map)`       |
        |                                   | Update the view of this location, |
        |                                   | based on the given google map     |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `updateView(GoogleMap map,        |
        |                                   |    int floor)`                    |
        |                                   | Update the view of this location, |
        |                                   | based on the given google map and |
        |                                   | the floor index                   |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### updateView

                void updateView(GoogleMap map)

            Update the view of this location, based on the given google
            map

            [Parameters:]{.paramLabel}
            :   `map` - google map

        &nbsp;
        -   #### updateView

                void updateView(GoogleMap map,                int floor)

            Update the view of this location, based on the given google
            map and the floor index

            [Parameters:]{.paramLabel}
            :   `map` - google map
            :   `floor` - floor index

        &nbsp;
        -   #### getGLatLng

                LatLng getGLatLng()

            Get the Google latitude/longitude object

            [Returns:]{.returnLabel}
            :   LatLng the Google latitude/longitude object

        &nbsp;
        -   #### getName

                java.lang.String getName()

            Get the name of the location

            [Returns:]{.returnLabel}
            :   String the name of the location

        &nbsp;
        -   #### getRoomId

                java.lang.String getRoomId()

            Get the integer representation of the floor index

            [Returns:]{.returnLabel}
            :   String the integer representation of the floor index

        &nbsp;
        -   #### getFloorIndex

                int getFloorIndex()

            Get the integer representation of the floor index

            [Returns:]{.returnLabel}
            :   String the integer representation of the floor index

        &nbsp;
        -   #### getFloorName

                java.lang.String getFloorName()

            Get the name representation of the floor

            [Returns:]{.returnLabel}
            :   String The name of the floor

        &nbsp;
        -   #### getId

                java.lang.String getId()

            Gets id.

            [Returns:]{.returnLabel}
            :   The string identifier of the location

        &nbsp;
        -   #### getCategories

                java.lang.String[] getCategories()

            The categories that this location belongs to

            [Returns:]{.returnLabel}
            :   String array of category names

        &nbsp;
        -   #### setCategories

                void setCategories(java.lang.String[] categories)

            Setter for the categories that this location belongs to

            [Parameters:]{.paramLabel}
            :   `categories` - the categories

        &nbsp;
        -   #### getMarker

                Marker getMarker()

            Get the google maps marker for this location, if the
            location has been added to a map

            [Returns:]{.returnLabel}
            :   A google maps marker, otherwise null

        &nbsp;
        -   #### setMarker

                void setMarker(Marker marker)

            Sets marker.

            [Parameters:]{.paramLabel}
            :   `marker` - the marker

        &nbsp;
        -   #### show

                void show()

            Show.

        &nbsp;
        -   #### hide

                void hide()

            Hide.

        &nbsp;
        -   #### setLatLng

                void setLatLng(LatLng position)

            Sets lat lng.

            [Parameters:]{.paramLabel}
            :   `position` - the position

        &nbsp;
        -   #### isVisible

                boolean isVisible()

            Is visible boolean.

            [Returns:]{.returnLabel}
            :   the boolean

        &nbsp;
        -   #### setVisible

                void setVisible(boolean visible)

            Sets visible.

            [Parameters:]{.paramLabel}
            :   `visible` - the visible

        &nbsp;
        -   #### has

                boolean has(java.lang.String key)

            Has boolean.

            [Parameters:]{.paramLabel}
            :   `key` - the key

            [Returns:]{.returnLabel}
            :   the boolean

        &nbsp;
        -   #### getStringProperty

                java.lang.String getStringProperty(java.lang.String key)

            Gets string property.

            [Parameters:]{.paramLabel}
            :   `key` - the key

            [Returns:]{.returnLabel}
            :   the string property

        &nbsp;
        -   #### getType

                java.lang.String getType()

            Gets type.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getType` in interface `Feature`

            [Returns:]{.returnLabel}
            :   the type

        &nbsp;
        -   #### setType

                void setType(java.lang.String type)

            Sets type.

            [Parameters:]{.paramLabel}
            :   `type` - the type

        &nbsp;
        -   #### getProperties

                java.util.Map<java.lang.String,java.lang.Object> getProperties()

            Gets properties.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getProperties` in interface `Feature`

            [Returns:]{.returnLabel}
            :   the properties

        &nbsp;
        -   #### getGeometry

                Geometry getGeometry()

            Gets geometry.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getGeometry` in interface `Feature`

            [Returns:]{.returnLabel}
            :   the geometry

        &nbsp;
        -   #### getPoint

                Point getPoint()

            Gets point.

            [Returns:]{.returnLabel}
            :   the point

        &nbsp;
        -   #### setPoint

                void setPoint(Point point)

            Sets point.

            [Parameters:]{.paramLabel}
            :   `point` - the point

        &nbsp;
        -   #### setName

                void setName(java.lang.String name)

            Sets name.

            [Parameters:]{.paramLabel}
            :   `name` - the name

        &nbsp;
        -   #### getProperty

                java.lang.Object getProperty(java.lang.String key)

            Gets property.

            [Parameters:]{.paramLabel}
            :   `key` - the key

            [Returns:]{.returnLabel}
            :   the property

        &nbsp;
        -   #### setProperty

                void setProperty(java.lang.String key,                 java.lang.Object value)

            Sets property.

            [Parameters:]{.paramLabel}
            :   `key` - the key
            :   `value` - the value

        &nbsp;
        -   #### setDisplayRule

                void setDisplayRule(LocationDisplayRule rule)

            Sets display rule.

            [Parameters:]{.paramLabel}
            :   `rule` - the rule

        &nbsp;
        -   #### getDisplayRule

                LocationDisplayRule getDisplayRule()

            Gets display rule.

            [Returns:]{.returnLabel}
            :   the display rule

        &nbsp;
        -   #### getLocationProperyList

                java.util.List<LocationProperty> getLocationProperyList()

            Gets location propery list.

            [Returns:]{.returnLabel}
            :   the location propery list

        &nbsp;
        -   #### getField

                DataField getField(java.lang.String key)

            Gets field.

            [Parameters:]{.paramLabel}
            :   `key` - the key

            [Returns:]{.returnLabel}
            :   the field

com.mapspeople.models

Class LocationDisplayRule {#class-locationdisplayrule .title title="Class LocationDisplayRule"}
-------------------------

-   java.lang.Object
-   -   com.mapspeople.models.LocationDisplayRule

-   

    ------------------------------------------------------------------------

    \

        public class LocationDisplayRuleextends java.lang.Object

    The type Location display rule.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `android.graphics.Bitmap`         | `getIcon()`                       |
        |                                   | Get the icon bitmap for this      |
        |                                   | rule.                             |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getIconPath()`                   |
        |                                   | Get the icon path for this rule.  |
        +-----------------------------------+-----------------------------------+
        | `int`                             | `getIconResourceId()`             |
        |                                   | Gets icon resource id.            |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getLabelContent(Location locatio |
        |                                   | n)`                               |
        |                                   | Get the label content for a given |
        |                                   | location.                         |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getRuleName()`                   |
        |                                   | Get the rule identifier.          |
        +-----------------------------------+-----------------------------------+
        | `boolean`                         | `getShowLabel()`                  |
        |                                   | Get whether or not to show the    |
        |                                   | marker as a label.                |
        +-----------------------------------+-----------------------------------+
        | `float`                           | `getZoomLevelOff()`               |
        |                                   | Gets zoom level off.              |
        +-----------------------------------+-----------------------------------+
        | `float`                           | `getZoomLevelOn()`                |
        |                                   | Gets zoom level on.               |
        +-----------------------------------+-----------------------------------+
        | `boolean`                         | `isShowLabel()`                   |
        |                                   | Get the show label flag.          |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `loadIcon(java.lang.String iconUR |
        |                                   | L)`                               |
        |                                   | Load icon.                        |
        +-----------------------------------+-----------------------------------+
        | `static void`                     | `setDPI(float newDPI)`            |
        |                                   | Depricated                        |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setIcon(android.graphics.Bitmap  |
        |                                   | icon)`                            |
        |                                   | Set the icon for this rule.       |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setIconPath(java.lang.String ico |
        |                                   | nPath)`                           |
        |                                   | Set the path of the icon for this |
        |                                   | rule.                             |
        +-----------------------------------+-----------------------------------+
        | `static void`                     | `setPOISize(int dpSize)`          |
        |                                   | Sets poi size.                    |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setRuleName(java.lang.String rul |
        |                                   | eName)`                           |
        |                                   | Set the identifier for this rule. |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setShowLabel(boolean showLabel)` |
        |                                   | Set whether or not to show the    |
        |                                   | marker as a label.                |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setZoomLevelOff(float zOff)`     |
        |                                   | Sets zoom level off.              |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setZoomLevelOn(float zOn)`       |
        |                                   | Sets zoom level on.               |
        +-----------------------------------+-----------------------------------+
        | `boolean`                         | `show(float zLevel)`              |
        |                                   | Whether or not to show a location |
        |                                   | at given zoom level.              |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `solutionLoaded()`                |
        |                                   | Solution loaded.                  |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### LocationDisplayRule

                public LocationDisplayRule()

            Instantiates a new Location display rule.

        &nbsp;
        -   #### LocationDisplayRule

                public LocationDisplayRule(DisplayRule displayRule)

            Create a display rule with the properties from a (server
            based) display rule

            [Parameters:]{.paramLabel}
            :   `displayRule` - The serverside object

        &nbsp;
        -   #### LocationDisplayRule

                public LocationDisplayRule(java.lang.String name,                           android.graphics.Bitmap icon,                           float zOn)

            Create a display rule with a given name/identifier, icon and
            a zoom level at (and above) which the rule should allow
            display.

            [Parameters:]{.paramLabel}
            :   `name` - The identifier of the rule. By default, the
                name will be compared to a Locations categories, to find
                the right display rule candidate.
            :   `icon` - The icon to use for display.
            :   `zOn` - The zoom level at (and above) which the icon
                should display.

        &nbsp;
        -   #### LocationDisplayRule

                public LocationDisplayRule(java.lang.String name,                           float zOn,                           boolean showLabel)

            Create a display rule with a given name/identifier, icon and
            a zoom level at (and above) which the rule should allow
            display.

            [Parameters:]{.paramLabel}
            :   `name` - The identifier of the rule. By default, the
                name will be compared to a Locations categories, to find
                the right display rule candidate.
            :   `zOn` - The zoom level at (and above) which the icon
                should display.
            :   `showLabel` - Whether or not to show the marker as a
                label.

        &nbsp;
        -   #### LocationDisplayRule

                public LocationDisplayRule(java.lang.String name,                           android.graphics.Bitmap icon,                           float zOn,                           boolean showLabel)

            Create a display rule with a given name/identifier, icon and
            a zoom level at (and above) which the rule should allow
            display.

            [Parameters:]{.paramLabel}
            :   `name` - The identifier of the rule. By default, the
                name will be compared to a Locations categories, to find
                the right display rule candidate.
            :   `icon` - The icon to use for display.
            :   `zOn` - The zoom level at (and above) which the icon
                should display.
            :   `showLabel` - Whether or not to show the marker as a
                label.

        &nbsp;
        -   #### LocationDisplayRule

                public LocationDisplayRule(java.lang.String name,                           int iconResource,                           float zOn,                           boolean showLabel)

            Create a display rule with a given name/identifier, icon and
            a zoom level at (and above) which the rule should allow
            display.

            [Parameters:]{.paramLabel}
            :   `name` - The identifier of the rule. By default, the
                name will be compared to a Locations categories, to find
                the right display rule candidate.
            :   `iconResource` - The icon to use for display.
            :   `zOn` - The zoom level at (and above) which the icon
                should display.
            :   `showLabel` - Whether or not to show the marker as a
                label.

        &nbsp;
        -   #### LocationDisplayRule

                public LocationDisplayRule(java.lang.String name,                           java.lang.String iconURL,                           float zOn,                           boolean showLabel)

            Create a display rule with a given name/identifier, icon and
            a zoom level at (and above) which the rule should allow
            display.

            [Parameters:]{.paramLabel}
            :   `name` - The identifier of the rule. By default, the
                name will be compared to a Locations categories, to find
                the right display rule candidate.
            :   `iconURL` - The URL that contains an icon to use for
                display.
            :   `zOn` - The zoom level at (and above) which the icon
                should display.
            :   `showLabel` - the show label

    &nbsp;
    -   ### Method Detail

        -   #### solutionLoaded

                public void solutionLoaded()

            Solution loaded.

        &nbsp;
        -   #### show

                public boolean show(float zLevel)

            Whether or not to show a location at given zoom level.

            [Parameters:]{.paramLabel}
            :   `zLevel` - the z level

            [Returns:]{.returnLabel}
            :   True or false.

        &nbsp;
        -   #### getIcon

                public android.graphics.Bitmap getIcon()

            Get the icon bitmap for this rule.

            [Returns:]{.returnLabel}
            :   The icon bitmap or null.

        &nbsp;
        -   #### setIcon

                public void setIcon(android.graphics.Bitmap icon)

            Set the icon for this rule.

            [Parameters:]{.paramLabel}
            :   `icon` - The bitmap icon.

        &nbsp;
        -   #### isShowLabel

                public boolean isShowLabel()

            Get the show label flag.

            [Returns:]{.returnLabel}
            :   True or false.

        &nbsp;
        -   #### setShowLabel

                public void setShowLabel(boolean showLabel)

            Set whether or not to show the marker as a label.

            [Parameters:]{.paramLabel}
            :   `showLabel` - the show label

        &nbsp;
        -   #### getShowLabel

                public boolean getShowLabel()

            Get whether or not to show the marker as a label.

            [Returns:]{.returnLabel}
            :   the show label

        &nbsp;
        -   #### getRuleName

                public java.lang.String getRuleName()

            Get the rule identifier.

            [Returns:]{.returnLabel}
            :   A string value or null.

        &nbsp;
        -   #### setRuleName

                public void setRuleName(java.lang.String ruleName)

            Set the identifier for this rule.

            [Parameters:]{.paramLabel}
            :   `ruleName` - The rule identifier.

        &nbsp;
        -   #### getIconPath

                public java.lang.String getIconPath()

            Get the icon path for this rule.

            [Returns:]{.returnLabel}
            :   icon path

        &nbsp;
        -   #### setIconPath

                public void setIconPath(java.lang.String iconPath)

            Set the path of the icon for this rule.

            [Parameters:]{.paramLabel}
            :   `iconPath` - the icon path

        &nbsp;
        -   #### getLabelContent

                public java.lang.String getLabelContent(Location location)

            Get the label content for a given location. Override this
            method to change the default content, which is the location
            name.

            [Parameters:]{.paramLabel}
            :   `location` - The current location to display.

            [Returns:]{.returnLabel}
            :   The label content string.

        &nbsp;
        -   #### getIconResourceId

                public int getIconResourceId()

            Gets icon resource id.

            [Returns:]{.returnLabel}
            :   the icon resource id

        &nbsp;
        -   #### getZoomLevelOn

                public float getZoomLevelOn()

            Gets zoom level on.

            [Returns:]{.returnLabel}
            :   the zoom level on

        &nbsp;
        -   #### getZoomLevelOff

                public float getZoomLevelOff()

            Gets zoom level off.

            [Returns:]{.returnLabel}
            :   the zoom level off

        &nbsp;
        -   #### setZoomLevelOn

                public void setZoomLevelOn(float zOn)

            Sets zoom level on.

            [Parameters:]{.paramLabel}
            :   `zOn` - the z on

        &nbsp;
        -   #### setZoomLevelOff

                public void setZoomLevelOff(float zOff)

            Sets zoom level off.

            [Parameters:]{.paramLabel}
            :   `zOff` - the z off

        &nbsp;
        -   #### setDPI

                public static void setDPI(float newDPI)

            Depricated

            [Parameters:]{.paramLabel}
            :   `newDPI` - Not in use

        &nbsp;
        -   #### setPOISize

                public static void setPOISize(int dpSize)

            Sets poi size.

            [Parameters:]{.paramLabel}
            :   `dpSize` - the dp size

        &nbsp;
        -   #### loadIcon

                public void loadIcon(java.lang.String iconURL)

            Load icon.

            [Parameters:]{.paramLabel}
            :   `iconURL` - the icon url

com.mapspeople.models

Class LocationDisplayRules {#class-locationdisplayrules .title title="Class LocationDisplayRules"}
--------------------------

-   java.lang.Object
-   -   java.util.AbstractCollection&lt;E&gt;
    -   -   java.util.AbstractList&lt;E&gt;
        -   -   java.util.ArrayList&lt;LocationDisplayRule&gt;
            -   -   com.mapspeople.models.LocationDisplayRules

-   

    All Implemented Interfaces:
    :   java.io.Serializable, java.lang.Cloneable,
        java.lang.Iterable&lt;LocationDisplayRule&gt;,
        java.util.Collection&lt;LocationDisplayRule&gt;,
        java.util.List&lt;LocationDisplayRule&gt;,
        java.util.RandomAccess

    ------------------------------------------------------------------------

    \

        public class LocationDisplayRulesextends java.util.ArrayList<LocationDisplayRule>

    The type Location display rules.

    [See Also:]{.seeLabel}
    :   Serialized Form

-   -   ### Field Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `LocationDisplayRule`             | `firstOccur(java.lang.String rule |
        |                                   | Name)`                            |
        |                                   | First occur location display      |
        |                                   | rule.                             |
        +-----------------------------------+-----------------------------------+
        | `LocationDisplayRule`             | `getRule(java.lang.String ruleNam |
        |                                   | e)`                               |
        |                                   | Gets rule.                        |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<java.lang.String> | `getTypesAtZoomLevel(float zoom)` |
        | `                                 | Gets types at zoom level.         |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.util.ArrayList

            `add, add, addAll, addAll, clear, clone, contains, ensureCapacity, forEach, get, indexOf, isEmpty, iterator, lastIndexOf, listIterator, listIterator, remove, remove, removeAll, removeIf, replaceAll, retainAll, set, size, sort, spliterator, subList, toArray, toArray, trimToSize`

        &nbsp;
        -   ### Methods inherited from class java.util.AbstractList

            `equals, hashCode`

        &nbsp;
        -   ### Methods inherited from class java.util.AbstractCollection

            `containsAll, toString`

        &nbsp;
        -   ### Methods inherited from class java.lang.Object

            `getClass, notify, notifyAll, wait, wait, wait`

        &nbsp;
        -   ### Methods inherited from interface java.util.List

            `containsAll, equals, hashCode`

        &nbsp;
        -   ### Methods inherited from interface java.util.Collection

            `parallelStream, stream`

-   -   ### Field Detail

        -   #### DEFAULT\_DISPLAY\_RULE

                public static final LocationDisplayRule DEFAULT_DISPLAY_RULE

            The constant DEFAULT\_DISPLAY\_RULE.

        &nbsp;
        -   #### POS\_DISPLAY\_RULE

                public static LocationDisplayRule POS_DISPLAY_RULE

            The constant POS\_DISPLAY\_RULE.

    &nbsp;
    -   ### Constructor Detail

        -   #### LocationDisplayRules

                public LocationDisplayRules()

            Instantiates a new Location display rules.

    &nbsp;
    -   ### Method Detail

        -   #### firstOccur

                public LocationDisplayRule firstOccur(java.lang.String ruleName)

            First occur location display rule.

            [Parameters:]{.paramLabel}
            :   `ruleName` - the rule name

            [Returns:]{.returnLabel}
            :   the location display rule

        &nbsp;
        -   #### getRule

                public LocationDisplayRule getRule(java.lang.String ruleName)

            Gets rule.

            [Parameters:]{.paramLabel}
            :   `ruleName` - the rule name

            [Returns:]{.returnLabel}
            :   the rule

        &nbsp;
        -   #### getTypesAtZoomLevel

                public java.util.List<java.lang.String> getTypesAtZoomLevel(float zoom)

            Gets types at zoom level.

            [Parameters:]{.paramLabel}
            :   `zoom` - the zoom

            [Returns:]{.returnLabel}
            :   the types at zoom level

com.mapspeople.models

Class LocationDisplayRuleset {#class-locationdisplayruleset .title title="Class LocationDisplayRuleset"}
----------------------------

-   java.lang.Object
-   -   com.mapspeople.models.LocationDisplayRuleset

-   

    ------------------------------------------------------------------------

    \

        public class LocationDisplayRulesetextends java.lang.Object

    The type Location display ruleset.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `android.graphics.Bitmap`         | `getAssetBitmap(java.lang.String  |
        |                                   | path,              android.conten |
        |                                   | t.Context appContext)`            |
        |                                   | Gets asset bitmap.                |
        +-----------------------------------+-----------------------------------+
        | `LocationDisplayRules`            | `getDisplayRules()`               |
        |                                   | Gets display rules.               |
        +-----------------------------------+-----------------------------------+
        | `android.graphics.Bitmap`         | `getLocalBitmap(java.lang.String  |
        |                                   | bitmapPath)`                      |
        |                                   | Gets local bitmap.                |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setDisplayRules(LocationDisplayR |
        |                                   | ules displayRules)`               |
        |                                   | Sets display rules.               |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### LocationDisplayRuleset

                public LocationDisplayRuleset()

            Instantiates a new Location display ruleset.

    &nbsp;
    -   ### Method Detail

        -   #### getDisplayRules

                public LocationDisplayRules getDisplayRules()

            Gets display rules.

            [Returns:]{.returnLabel}
            :   the display rules

        &nbsp;
        -   #### setDisplayRules

                public void setDisplayRules(LocationDisplayRules displayRules)

            Sets display rules.

            [Parameters:]{.paramLabel}
            :   `displayRules` - the display rules

        &nbsp;
        -   #### getLocalBitmap

                public android.graphics.Bitmap getLocalBitmap(java.lang.String bitmapPath)

            Gets local bitmap.

            [Parameters:]{.paramLabel}
            :   `bitmapPath` - the bitmap path

            [Returns:]{.returnLabel}
            :   the local bitmap

        &nbsp;
        -   #### getAssetBitmap

                public android.graphics.Bitmap getAssetBitmap(java.lang.String path,                                              android.content.Context appContext)

            Gets asset bitmap.

            [Parameters:]{.paramLabel}
            :   `path` - the path
            :   `appContext` - the app context

            [Returns:]{.returnLabel}
            :   the asset bitmap

com.mapspeople.models

Class LocationProperty {#class-locationproperty .title title="Class LocationProperty"}
----------------------

-   java.lang.Object
-   -   com.mapspeople.models.LocationProperty

-   

    ------------------------------------------------------------------------

    \

        public class LocationPropertyextends java.lang.Object

    The type Location property.

-   -   ### Field Summary

          Constructor and Description
          -----------------------------
          `LocationProperty()` 

    &nbsp;
    -   ### Method Summary

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Field Detail

        -   #### contentType

                public java.lang.String contentType

            The Content type.

        &nbsp;
        -   #### content

                public java.lang.Object content

            The Content.

    &nbsp;
    -   ### Constructor Detail

        -   #### LocationProperty

                public LocationProperty()

com.mapspeople.models

Class LocationSearchCondition {#class-locationsearchcondition .title title="Class LocationSearchCondition"}
-----------------------------

-   java.lang.Object
-   -   com.mapspeople.models.LocationSearchCondition

-   

    ------------------------------------------------------------------------

    \

        public class LocationSearchConditionextends java.lang.Object

    The type Location search condition.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `boolean`                         | `qualify(java.lang.String filter, |
        |                                   |        Location location)`        |
        |                                   | Qualify boolean.                  |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### LocationSearchCondition

                public LocationSearchCondition()

            Instantiates a new Location search condition.

    &nbsp;
    -   ### Method Detail

        -   #### qualify

                public boolean qualify(java.lang.String filter,                       Location location)

            Qualify boolean.

            [Parameters:]{.paramLabel}
            :   `filter` - the filter
            :   `location` - the location

            [Returns:]{.returnLabel}
            :   the boolean

com.mapspeople.models

Class MPLocation {#class-mplocation .title title="Class MPLocation"}
----------------

-   java.lang.Object
-   -   com.mapspeople.models.MPLocation

-   

    All Implemented Interfaces:
    :   Feature, Location

    &nbsp;

    Direct Known Subclasses:
    :   PositionIndicator

    ------------------------------------------------------------------------

    \

        public class MPLocationextends java.lang.Objectimplements Location

    The type Mp location.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `boolean`                         | `equals(java.lang.Object o)`      |
        |                                   | Equals boolean.                   |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String[]`              | `getCategories()`                 |
        |                                   | Get categories string \[ \].      |
        +-----------------------------------+-----------------------------------+
        | `LocationDisplayRule`             | `getDisplayRule()`                |
        |                                   | Gets display rule.                |
        +-----------------------------------+-----------------------------------+
        | `DataField`                       | `getField(java.lang.String key)`  |
        |                                   | Gets field.                       |
        +-----------------------------------+-----------------------------------+
        | `int`                             | `getFloorIndex()`                 |
        |                                   | Gets floor index.                 |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getFloorName()`                  |
        |                                   | Gets floor name.                  |
        +-----------------------------------+-----------------------------------+
        | `Geometry`                        | `getGeometry()`                   |
        |                                   | Gets geometry.                    |
        +-----------------------------------+-----------------------------------+
        | `LatLng`                          | `getGLatLng()`                    |
        |                                   | Gets g lat lng.                   |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getId()`                         |
        |                                   | Gets id.                          |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<LocationProperty> | `getLocationProperyList()`        |
        | `                                 | Gets location propery list.       |
        +-----------------------------------+-----------------------------------+
        | `Marker`                          | `getMarker()`                     |
        |                                   | Gets marker.                      |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getName()`                       |
        |                                   | Gets name.                        |
        +-----------------------------------+-----------------------------------+
        | `Point`                           | `getPoint()`                      |
        |                                   | Gets point.                       |
        +-----------------------------------+-----------------------------------+
        | `java.util.Map<java.lang.String,j | `getProperties()`                 |
        | ava.lang.Object>`                 | Gets properties.                  |
        +-----------------------------------+-----------------------------------+
        | `java.lang.Object`                | `getProperty(java.lang.String key |
        |                                   | )`                                |
        |                                   | Gets property.                    |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getRoomId()`                     |
        |                                   | Gets room id.                     |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getStringProperty(java.lang.Stri |
        |                                   | ng key)`                          |
        |                                   | Gets string property.             |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getType()`                       |
        |                                   | Gets type.                        |
        +-----------------------------------+-----------------------------------+
        | `boolean`                         | `has(java.lang.String key)`       |
        |                                   | Has boolean.                      |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `hide()`                          |
        |                                   | Hide.                             |
        +-----------------------------------+-----------------------------------+
        | `boolean`                         | `isOfCategory(java.lang.String ca |
        |                                   | tegory)`                          |
        |                                   | Is of category boolean.           |
        +-----------------------------------+-----------------------------------+
        | `boolean`                         | `isVisible()`                     |
        |                                   | Is visible boolean.               |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setCategories(java.lang.String[] |
        |                                   |  categories)`                     |
        |                                   | Sets categories.                  |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setCategory(java.lang.String cat |
        |                                   | egory)`                           |
        |                                   | Sets category.                    |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setDisplayRule(LocationDisplayRu |
        |                                   | le displayRule)`                  |
        |                                   | Sets display rule.                |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setLatLng(LatLng position)`      |
        |                                   | Sets lat lng.                     |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setMarker(Marker marker)`        |
        |                                   | Sets marker.                      |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setName(java.lang.String name)`  |
        |                                   | Sets name.                        |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setPoint(Point point)`           |
        |                                   | Sets point.                       |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setProperty(java.lang.String key |
        |                                   | ,           java.lang.Object valu |
        |                                   | e)`                               |
        |                                   | Sets property.                    |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setType(java.lang.String type)`  |
        |                                   | Sets type.                        |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setVisible(boolean visible)`     |
        |                                   | Sets visible.                     |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `show()`                          |
        |                                   | Show.                             |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `updateView(GoogleMap map)`       |
        |                                   | Update view.                      |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `updateView(GoogleMap map,        |
        |                                   |    int floor)`                    |
        |                                   | Update view.                      |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### MPLocation

                public MPLocation()

            Instantiates a new Mp location.

        &nbsp;
        -   #### MPLocation

                public MPLocation(Point point,                  java.lang.String title)

            Instantiates a new Mp location.

            [Parameters:]{.paramLabel}
            :   `point` - the point
            :   `title` - the title

        &nbsp;
        -   #### MPLocation

                public MPLocation(java.lang.String id)

            Instantiates a new Mp location.

            [Parameters:]{.paramLabel}
            :   `id` - the id

        &nbsp;
        -   #### MPLocation

                public MPLocation(Location location)

            Instantiates a new Mp location.

            [Parameters:]{.paramLabel}
            :   `location` - the location

    &nbsp;
    -   ### Method Detail

        -   #### updateView

                public void updateView(GoogleMap map)

            Update view.

            [Specified by:]{.overrideSpecifyLabel}
            :   `updateView` in interface `Location`

            [Parameters:]{.paramLabel}
            :   `map` - the map

        &nbsp;
        -   #### updateView

                public void updateView(GoogleMap map,                       int floor)

            Update view.

            [Specified by:]{.overrideSpecifyLabel}
            :   `updateView` in interface `Location`

            [Parameters:]{.paramLabel}
            :   `map` - the map
            :   `floor` - the floor

        &nbsp;
        -   #### getFloorIndex

                public int getFloorIndex()

            Gets floor index.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getFloorIndex` in interface `Location`

            [Returns:]{.returnLabel}
            :   the floor index

        &nbsp;
        -   #### getFloorName

                public java.lang.String getFloorName()

            Gets floor name.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getFloorName` in interface `Location`

            [Returns:]{.returnLabel}
            :   the floor name

        &nbsp;
        -   #### setDisplayRule

                public void setDisplayRule(LocationDisplayRule displayRule)

            Sets display rule.

            [Specified by:]{.overrideSpecifyLabel}
            :   `setDisplayRule` in interface `Location`

            [Parameters:]{.paramLabel}
            :   `displayRule` - the display rule

        &nbsp;
        -   #### getGLatLng

                public LatLng getGLatLng()

            Gets g lat lng.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getGLatLng` in interface `Location`

            [Returns:]{.returnLabel}
            :   the g lat lng

        &nbsp;
        -   #### getName

                public java.lang.String getName()

            Gets name.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getName` in interface `Location`

            [Returns:]{.returnLabel}
            :   the name

        &nbsp;
        -   #### getRoomId

                public java.lang.String getRoomId()

            Gets room id.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getRoomId` in interface `Location`

            [Returns:]{.returnLabel}
            :   the room id

        &nbsp;
        -   #### getId

                public java.lang.String getId()

            Gets id.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getId` in interface `Location`

            [Returns:]{.returnLabel}
            :   the id

        &nbsp;
        -   #### getCategories

                public java.lang.String[] getCategories()

            Get categories string \[ \].

            [Specified by:]{.overrideSpecifyLabel}
            :   `getCategories` in interface `Location`

            [Returns:]{.returnLabel}
            :   the string \[ \]

        &nbsp;
        -   #### setCategories

                public void setCategories(java.lang.String[] categories)

            Sets categories.

            [Specified by:]{.overrideSpecifyLabel}
            :   `setCategories` in interface `Location`

            [Parameters:]{.paramLabel}
            :   `categories` - the categories

        &nbsp;
        -   #### getMarker

                public Marker getMarker()

            Gets marker.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getMarker` in interface `Location`

            [Returns:]{.returnLabel}
            :   the marker

        &nbsp;
        -   #### setMarker

                public void setMarker(Marker marker)

            Sets marker.

            [Specified by:]{.overrideSpecifyLabel}
            :   `setMarker` in interface `Location`

            [Parameters:]{.paramLabel}
            :   `marker` - the marker

        &nbsp;
        -   #### show

                public void show()

            Show.

            [Specified by:]{.overrideSpecifyLabel}
            :   `show` in interface `Location`

        &nbsp;
        -   #### hide

                public void hide()

            Hide.

            [Specified by:]{.overrideSpecifyLabel}
            :   `hide` in interface `Location`

        &nbsp;
        -   #### setLatLng

                public void setLatLng(LatLng position)

            Sets lat lng.

            [Specified by:]{.overrideSpecifyLabel}
            :   `setLatLng` in interface `Location`

            [Parameters:]{.paramLabel}
            :   `position` - the position

        &nbsp;
        -   #### isVisible

                public boolean isVisible()

            Is visible boolean.

            [Specified by:]{.overrideSpecifyLabel}
            :   `isVisible` in interface `Location`

            [Returns:]{.returnLabel}
            :   the boolean

        &nbsp;
        -   #### setVisible

                public void setVisible(boolean visible)

            Sets visible.

            [Specified by:]{.overrideSpecifyLabel}
            :   `setVisible` in interface `Location`

            [Parameters:]{.paramLabel}
            :   `visible` - the visible

        &nbsp;
        -   #### has

                public boolean has(java.lang.String key)

            Has boolean.

            [Specified by:]{.overrideSpecifyLabel}
            :   `has` in interface `Location`

            [Parameters:]{.paramLabel}
            :   `key` - the key

            [Returns:]{.returnLabel}
            :   the boolean

        &nbsp;
        -   #### getStringProperty

                public java.lang.String getStringProperty(java.lang.String key)

            Gets string property.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getStringProperty` in interface `Location`

            [Parameters:]{.paramLabel}
            :   `key` - the key

            [Returns:]{.returnLabel}
            :   the string property

        &nbsp;
        -   #### getType

                public java.lang.String getType()

            Gets type.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getType` in interface `Feature`

            [Specified by:]{.overrideSpecifyLabel}
            :   `getType` in interface `Location`

            [Returns:]{.returnLabel}
            :   the type

        &nbsp;
        -   #### setType

                public void setType(java.lang.String type)

            Sets type.

            [Specified by:]{.overrideSpecifyLabel}
            :   `setType` in interface `Location`

            [Parameters:]{.paramLabel}
            :   `type` - the type

        &nbsp;
        -   #### getProperties

                public java.util.Map<java.lang.String,java.lang.Object> getProperties()

            Gets properties.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getProperties` in interface `Feature`

            [Specified by:]{.overrideSpecifyLabel}
            :   `getProperties` in interface `Location`

            [Returns:]{.returnLabel}
            :   the properties

        &nbsp;
        -   #### getGeometry

                public Geometry getGeometry()

            Gets geometry.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getGeometry` in interface `Feature`

            [Specified by:]{.overrideSpecifyLabel}
            :   `getGeometry` in interface `Location`

            [Returns:]{.returnLabel}
            :   the geometry

        &nbsp;
        -   #### getPoint

                public Point getPoint()

            Gets point.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getPoint` in interface `Location`

            [Returns:]{.returnLabel}
            :   the point

        &nbsp;
        -   #### setPoint

                public void setPoint(Point point)

            Sets point.

            [Specified by:]{.overrideSpecifyLabel}
            :   `setPoint` in interface `Location`

            [Parameters:]{.paramLabel}
            :   `point` - the point

        &nbsp;
        -   #### setName

                public void setName(java.lang.String name)

            Sets name.

            [Specified by:]{.overrideSpecifyLabel}
            :   `setName` in interface `Location`

            [Parameters:]{.paramLabel}
            :   `name` - the name

        &nbsp;
        -   #### getProperty

                public java.lang.Object getProperty(java.lang.String key)

            Gets property.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getProperty` in interface `Location`

            [Parameters:]{.paramLabel}
            :   `key` - the key

            [Returns:]{.returnLabel}
            :   the property

        &nbsp;
        -   #### setProperty

                public void setProperty(java.lang.String key,                        java.lang.Object value)

            Sets property.

            [Specified by:]{.overrideSpecifyLabel}
            :   `setProperty` in interface `Location`

            [Parameters:]{.paramLabel}
            :   `key` - the key
            :   `value` - the value

        &nbsp;
        -   #### setCategory

                public void setCategory(java.lang.String category)

            Sets category.

            [Parameters:]{.paramLabel}
            :   `category` - the category

        &nbsp;
        -   #### getDisplayRule

                public LocationDisplayRule getDisplayRule()

            Gets display rule.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getDisplayRule` in interface `Location`

            [Returns:]{.returnLabel}
            :   the display rule

        &nbsp;
        -   #### equals

                public boolean equals(java.lang.Object o)

            Equals boolean.

            [Overrides:]{.overrideSpecifyLabel}
            :   `equals` in class `java.lang.Object`

            [Parameters:]{.paramLabel}
            :   `o` - the o

            [Returns:]{.returnLabel}
            :   the boolean

        &nbsp;
        -   #### isOfCategory

                public boolean isOfCategory(java.lang.String category)

            Is of category boolean.

            [Parameters:]{.paramLabel}
            :   `category` - the category

            [Returns:]{.returnLabel}
            :   the boolean

        &nbsp;
        -   #### getLocationProperyList

                public java.util.List<LocationProperty> getLocationProperyList()

            Gets location propery list.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getLocationProperyList` in interface `Location`

            [Returns:]{.returnLabel}
            :   the location propery list

        &nbsp;
        -   #### getField

                public DataField getField(java.lang.String key)

            Gets field.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getField` in interface `Location`

            [Parameters:]{.paramLabel}
            :   `key` - the key

            [Returns:]{.returnLabel}
            :   the field

com.mapspeople.models

Class MapExtend {#class-mapextend .title title="Class MapExtend"}
---------------

-   java.lang.Object
-   -   com.mapspeople.models.MapExtend

-   

    ------------------------------------------------------------------------

    \

        public class MapExtendextends java.lang.Object

    The type Map extend.

-   -   ### Field Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `java.lang.String`                | `toUrlValue()`                    |
        |                                   | To url value string.              |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Field Detail

        -   #### south

                public final double south

            The South.

        &nbsp;
        -   #### west

                public final double west

            The West.

        &nbsp;
        -   #### north

                public final double north

            The North.

        &nbsp;
        -   #### east

                public final double east

            The East.

    &nbsp;
    -   ### Constructor Detail

        -   #### MapExtend

                public MapExtend(LatLngBounds latLngBounds)

            Instantiates a new Map extend.

            [Parameters:]{.paramLabel}
            :   `latLngBounds` - the lat lng bounds

    &nbsp;
    -   ### Method Detail

        -   #### toUrlValue

                public java.lang.String toUrlValue()

            To url value string.

            [Returns:]{.returnLabel}
            :   the string

com.mapspeople.models

Class MapStyle {#class-mapstyle .title title="Class MapStyle"}
--------------

-   java.lang.Object
-   -   com.mapspeople.models.MapStyle

-   

    ------------------------------------------------------------------------

    \

        public class MapStyleextends java.lang.Object

    The type Map style.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `java.lang.String`                | `getDisplayName()`                |
        |                                   | Gets display name.                |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getFolder()`                     |
        |                                   | Gets folder.                      |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setDisplayName(java.lang.String  |
        |                                   | displayName)`                     |
        |                                   | Sets display name.                |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setFolder(java.lang.String folde |
        |                                   | r)`                               |
        |                                   | Sets folder.                      |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### MapStyle

                public MapStyle()

    &nbsp;
    -   ### Method Detail

        -   #### getFolder

                public java.lang.String getFolder()

            Gets folder.

            [Returns:]{.returnLabel}
            :   the folder

        &nbsp;
        -   #### setFolder

                public void setFolder(java.lang.String folder)

            Sets folder.

            [Parameters:]{.paramLabel}
            :   `folder` - the folder

        &nbsp;
        -   #### getDisplayName

                public java.lang.String getDisplayName()

            Gets display name.

            [Returns:]{.returnLabel}
            :   the display name

        &nbsp;
        -   #### setDisplayName

                public void setDisplayName(java.lang.String displayName)

            Sets display name.

            [Parameters:]{.paramLabel}
            :   `displayName` - the display name

com.mapspeople.models

Class MenuInfo {#class-menuinfo .title title="Class MenuInfo"}
--------------

-   java.lang.Object
-   -   com.mapspeople.models.MenuInfo

-   

    ------------------------------------------------------------------------

    \

        public class MenuInfoextends java.lang.Object

    The type Menu info.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `java.lang.String`                | `getCategoryKey()`                |
        |                                   | Gets category key.                |
        +-----------------------------------+-----------------------------------+
        | `android.graphics.Bitmap`         | `getIcon()`                       |
        |                                   | Gets icon.                        |
        +-----------------------------------+-----------------------------------+
        | `android.graphics.Bitmap`         | `getMenuImage()`                  |
        |                                   | Gets menu image.                  |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getName()`                       |
        |                                   | Gets name.                        |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `init(ReadyListener callback)`    |
        |                                   | Init.                             |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### MenuInfo

                public MenuInfo()

    &nbsp;
    -   ### Method Detail

        -   #### getCategoryKey

                public java.lang.String getCategoryKey()

            Gets category key.

            [Returns:]{.returnLabel}
            :   the category key

        &nbsp;
        -   #### getName

                public java.lang.String getName()

            Gets name.

            [Returns:]{.returnLabel}
            :   the name

        &nbsp;
        -   #### getMenuImage

                public android.graphics.Bitmap getMenuImage()

            Gets menu image.

            [Returns:]{.returnLabel}
            :   the menu image

        &nbsp;
        -   #### getIcon

                public android.graphics.Bitmap getIcon()

            Gets icon.

            [Returns:]{.returnLabel}
            :   the icon

        &nbsp;
        -   #### init

                public void init(ReadyListener callback)

            Init.

            [Parameters:]{.paramLabel}
            :   `callback` - the callback

com.mapspeople.models

Class ObjectMapSerializer {#class-objectmapserializer .title title="Class ObjectMapSerializer"}
-------------------------

-   java.lang.Object
-   -   com.mapspeople.models.ObjectMapSerializer

-   

    All Implemented Interfaces:
    :   com.google.gson.JsonDeserializer&lt;java.util.Map&lt;java.lang.String,java.lang.Object&gt;&gt;,
        com.google.gson.JsonSerializer&lt;java.util.Map&lt;java.lang.String,java.lang.Object&gt;&gt;

    ------------------------------------------------------------------------

    \

        public class ObjectMapSerializerextends java.lang.Objectimplements com.google.gson.JsonSerializer<java.util.Map<java.lang.String,java.lang.Object>>, com.google.gson.JsonDeserializer<java.util.Map<java.lang.String,java.lang.Object>>

    The type Object map serializer.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `java.util.Map<java.lang.String,j | `deserialize(com.google.gson.Json |
        | ava.lang.Object>`                 | Element json,           java.lang |
        |                                   | .reflect.Type type,           com |
        |                                   | .google.gson.JsonDeserializationC |
        |                                   | ontext context)`                  |
        |                                   | Deserialize map.                  |
        +-----------------------------------+-----------------------------------+
        | `com.google.gson.JsonElement`     | `serialize(java.util.Map<java.lan |
        |                                   | g.String,java.lang.Object> map,   |
        |                                   |        java.lang.reflect.Type typ |
        |                                   | e,         com.google.gson.JsonSe |
        |                                   | rializationContext context)`      |
        |                                   | Serialize json element.           |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### ObjectMapSerializer

                public ObjectMapSerializer()

    &nbsp;
    -   ### Method Detail

        -   #### serialize

                public com.google.gson.JsonElement serialize(java.util.Map<java.lang.String,java.lang.Object> map,                                             java.lang.reflect.Type type,                                             com.google.gson.JsonSerializationContext context)

            Serialize json element.

            [Specified by:]{.overrideSpecifyLabel}
            :   `serialize` in
                interface `com.google.gson.JsonSerializer<java.util.Map<java.lang.String,java.lang.Object>>`

            [Parameters:]{.paramLabel}
            :   `map` - the map
            :   `type` - the type
            :   `context` - the context

            [Returns:]{.returnLabel}
            :   the json element

        &nbsp;
        -   #### deserialize

                public java.util.Map<java.lang.String,java.lang.Object> deserialize(com.google.gson.JsonElement json,                                                                    java.lang.reflect.Type type,                                                                    com.google.gson.JsonDeserializationContext context)                                                             throws com.google.gson.JsonParseException

            Deserialize map.

            [Specified by:]{.overrideSpecifyLabel}
            :   `deserialize` in
                interface `com.google.gson.JsonDeserializer<java.util.Map<java.lang.String,java.lang.Object>>`

            [Parameters:]{.paramLabel}
            :   `json` - the json
            :   `type` - the type
            :   `context` - the context

            [Returns:]{.returnLabel}
            :   the map

            [Throws:]{.throwsLabel}
            :   `com.google.gson.JsonParseException` - the json parse
                exception

com.mapspeople.models

Class OpeningHours {#class-openinghours .title title="Class OpeningHours"}
------------------

-   java.lang.Object
-   -   com.mapspeople.models.OpeningHours

-   

    ------------------------------------------------------------------------

    \

        public class OpeningHoursextends java.lang.Object

    The type Opening hours.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `java.lang.String`                | `getClose()`                      |
        |                                   | Gets close.                       |
        +-----------------------------------+-----------------------------------+
        | `int`                             | `getDayOfWeek()`                  |
        |                                   | Gets day of week.                 |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getOpens()`                      |
        |                                   | Gets opens.                       |
        +-----------------------------------+-----------------------------------+
        | `java.util.Date`                  | `getValidFrom()`                  |
        |                                   | Gets valid from.                  |
        +-----------------------------------+-----------------------------------+
        | `java.util.Date`                  | `getValidThrough()`               |
        |                                   | Gets valid through.               |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setClose(java.lang.String close) |
        |                                   | `                                 |
        |                                   | Sets close.                       |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setDayOfWeek(int dayOfWeek)`     |
        |                                   | Sets day of week.                 |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOpens(java.lang.String opens) |
        |                                   | `                                 |
        |                                   | Sets opens.                       |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setValidFrom(java.util.Date vali |
        |                                   | dFrom)`                           |
        |                                   | Sets valid from.                  |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setValidThrough(java.util.Date v |
        |                                   | alidThrough)`                     |
        |                                   | Sets valid through.               |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### OpeningHours

                public OpeningHours()

    &nbsp;
    -   ### Method Detail

        -   #### getDayOfWeek

                public int getDayOfWeek()

            Gets day of week.

            [Returns:]{.returnLabel}
            :   the day of week

        &nbsp;
        -   #### setDayOfWeek

                public void setDayOfWeek(int dayOfWeek)

            Sets day of week.

            [Parameters:]{.paramLabel}
            :   `dayOfWeek` - the day of week

        &nbsp;
        -   #### getOpens

                public java.lang.String getOpens()

            Gets opens.

            [Returns:]{.returnLabel}
            :   the opens

        &nbsp;
        -   #### setOpens

                public void setOpens(java.lang.String opens)

            Sets opens.

            [Parameters:]{.paramLabel}
            :   `opens` - the opens

        &nbsp;
        -   #### getClose

                public java.lang.String getClose()

            Gets close.

            [Returns:]{.returnLabel}
            :   the close

        &nbsp;
        -   #### setClose

                public void setClose(java.lang.String close)

            Sets close.

            [Parameters:]{.paramLabel}
            :   `close` - the close

        &nbsp;
        -   #### getValidFrom

                public java.util.Date getValidFrom()

            Gets valid from.

            [Returns:]{.returnLabel}
            :   the valid from

        &nbsp;
        -   #### setValidFrom

                public void setValidFrom(java.util.Date validFrom)

            Sets valid from.

            [Parameters:]{.paramLabel}
            :   `validFrom` - the valid from

        &nbsp;
        -   #### getValidThrough

                public java.util.Date getValidThrough()

            Gets valid through.

            [Returns:]{.returnLabel}
            :   the valid through

        &nbsp;
        -   #### setValidThrough

                public void setValidThrough(java.util.Date validThrough)

            Sets valid through.

            [Parameters:]{.paramLabel}
            :   `validThrough` - the valid through

com.mapspeople.models

Class OpeningHoursModule {#class-openinghoursmodule .title title="Class OpeningHoursModule"}
------------------------

-   java.lang.Object
-   -   java.util.AbstractCollection&lt;E&gt;
    -   -   java.util.AbstractList&lt;E&gt;
        -   -   java.util.ArrayList&lt;OpeningHours&gt;
            -   -   com.mapspeople.models.OpeningHoursModule

-   

    All Implemented Interfaces:
    :   java.io.Serializable, java.lang.Cloneable,
        java.lang.Iterable&lt;OpeningHours&gt;,
        java.util.Collection&lt;OpeningHours&gt;,
        java.util.List&lt;OpeningHours&gt;, java.util.RandomAccess

    ------------------------------------------------------------------------

    \

        public class OpeningHoursModuleextends java.util.ArrayList<OpeningHours>

    The type Opening hours module.

    [See Also:]{.seeLabel}
    :   Serialized Form

-   -   ### Constructor Summary

          Constructor and Description
          -----------------------------
          `OpeningHoursModule()` 

    &nbsp;
    -   ### Method Summary

        -   ### Methods inherited from class java.util.ArrayList

            `add, add, addAll, addAll, clear, clone, contains, ensureCapacity, forEach, get, indexOf, isEmpty, iterator, lastIndexOf, listIterator, listIterator, remove, remove, removeAll, removeIf, replaceAll, retainAll, set, size, sort, spliterator, subList, toArray, toArray, trimToSize`

        &nbsp;
        -   ### Methods inherited from class java.util.AbstractList

            `equals, hashCode`

        &nbsp;
        -   ### Methods inherited from class java.util.AbstractCollection

            `containsAll, toString`

        &nbsp;
        -   ### Methods inherited from class java.lang.Object

            `getClass, notify, notifyAll, wait, wait, wait`

        &nbsp;
        -   ### Methods inherited from interface java.util.List

            `containsAll, equals, hashCode`

        &nbsp;
        -   ### Methods inherited from interface java.util.Collection

            `parallelStream, stream`

-   -   ### Constructor Detail

        -   #### OpeningHoursModule

                public OpeningHoursModule()

com.mapspeople.models

Class POIType {#class-poitype .title title="Class POIType"}
-------------

-   java.lang.Object
-   -   com.mapspeople.models.POIType

-   

    ------------------------------------------------------------------------

    \

        public class POITypeextends java.lang.Object

    The type Poi type.

-   -   ### Field Summary

          Constructor and Description
          -----------------------------
          `POIType()` 

    &nbsp;
    -   ### Method Summary

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Field Detail

        -   #### name

                public java.lang.String name

            The Name.

        &nbsp;
        -   #### icon

                public java.lang.String icon

            The Icon.

        &nbsp;
        -   #### displayRule

                public DisplayRule displayRule

            The Display rule.

    &nbsp;
    -   ### Constructor Detail

        -   #### POIType

                public POIType()

com.mapspeople.models

Class Point {#class-point .title title="Class Point"}
-----------

-   java.lang.Object
-   -   com.mapspeople.models.Geometry
    -   -   com.mapspeople.models.Point

-   

    ------------------------------------------------------------------------

    \

        public class Pointextends Geometry

    The type Point.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `double`                          | `angleBetween(Point dest)`        |
        |                                   | Angle between double.             |
        +-----------------------------------+-----------------------------------+
        | `double`                          | `distanceTo(Point dest)`          |
        |                                   | Distance to double.               |
        +-----------------------------------+-----------------------------------+
        | `boolean`                         | `equals(Point otherPoint)`        |
        |                                   | Equals boolean.                   |
        +-----------------------------------+-----------------------------------+
        | `LatLng`                          | `getGLatLng()`                    |
        |                                   | Gets g lat lng.                   |
        +-----------------------------------+-----------------------------------+
        | `static double`                   | `getRad(double angle)`            |
        |                                   | Gets rad.                         |
        +-----------------------------------+-----------------------------------+
        | `RouteVertex`                     | `getRouteVertex()`                |
        |                                   | Gets route vertex.                |
        +-----------------------------------+-----------------------------------+
        | `int`                             | `getZIndex()`                     |
        |                                   | Gets z index.                     |
        +-----------------------------------+-----------------------------------+
        | `double`                          | `lat()`                           |
        |                                   | Lat double.                       |
        +-----------------------------------+-----------------------------------+
        | `double`                          | `lng()`                           |
        |                                   | Lng double.                       |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setGLatLng(LatLng position)`     |
        |                                   | Sets g lat lng.                   |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setLat(double latitude)`         |
        |                                   | Sets lat.                         |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setLng(double longitude)`        |
        |                                   | Sets lng.                         |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setZ(double z)`                  |
        |                                   | Sets z.                           |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `toString()`                      |
        |                                   | To string string.                 |
        +-----------------------------------+-----------------------------------+
        | `double`                          | `z()`                             |
        |                                   | Z double.                         |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class com.mapspeople.models.Geometry

            `getCoordinates, getType, setCoordinates`

        &nbsp;
        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### Point

                public Point()

            Instantiates a new Point.

        &nbsp;
        -   #### Point

                public Point(double latitude,             double longitude)

            Instantiates a new Point.

            [Parameters:]{.paramLabel}
            :   `latitude` - the latitude
            :   `longitude` - the longitude

        &nbsp;
        -   #### Point

                public Point(double latitude,             double longitude,             double z)

            Instantiates a new Point.

            [Parameters:]{.paramLabel}
            :   `latitude` - the latitude
            :   `longitude` - the longitude
            :   `z` - the z

        &nbsp;
        -   #### Point

                public Point(double[] coordinates)

            Instantiates a new Point.

            [Parameters:]{.paramLabel}
            :   `coordinates` - the coordinates

        &nbsp;
        -   #### Point

                public Point(Point point)

            Instantiates a new Point.

            [Parameters:]{.paramLabel}
            :   `point` - the point

        &nbsp;
        -   #### Point

                public Point(java.lang.String latitude,             java.lang.String longitude,             java.lang.String z)

            Instantiates a new Point.

            [Parameters:]{.paramLabel}
            :   `latitude` - the latitude
            :   `longitude` - the longitude
            :   `z` - the z

        &nbsp;
        -   #### Point

                public Point(java.lang.String position)

            Instantiates a new Point.

            [Parameters:]{.paramLabel}
            :   `position` - the position

    &nbsp;
    -   ### Method Detail

        -   #### getGLatLng

                public LatLng getGLatLng()

            Gets g lat lng.

            [Returns:]{.returnLabel}
            :   the g lat lng

        &nbsp;
        -   #### setGLatLng

                public void setGLatLng(LatLng position)

            Sets g lat lng.

            [Parameters:]{.paramLabel}
            :   `position` - the position

        &nbsp;
        -   #### lat

                public double lat()

            Lat double.

            [Returns:]{.returnLabel}
            :   the double

        &nbsp;
        -   #### lng

                public double lng()

            Lng double.

            [Returns:]{.returnLabel}
            :   the double

        &nbsp;
        -   #### z

                public double z()

            Z double.

            [Returns:]{.returnLabel}
            :   the double

        &nbsp;
        -   #### getRad

                public static double getRad(double angle)

            Gets rad.

            [Parameters:]{.paramLabel}
            :   `angle` - the angle

            [Returns:]{.returnLabel}
            :   the rad

        &nbsp;
        -   #### distanceTo

                public double distanceTo(Point dest)

            Distance to double.

            [Parameters:]{.paramLabel}
            :   `dest` - the dest

            [Returns:]{.returnLabel}
            :   the double

        &nbsp;
        -   #### angleBetween

                public double angleBetween(Point dest)

            Angle between double.

            [Parameters:]{.paramLabel}
            :   `dest` - the dest

            [Returns:]{.returnLabel}
            :   the double

        &nbsp;
        -   #### setLat

                public void setLat(double latitude)

            Sets lat.

            [Parameters:]{.paramLabel}
            :   `latitude` - the latitude

        &nbsp;
        -   #### setLng

                public void setLng(double longitude)

            Sets lng.

            [Parameters:]{.paramLabel}
            :   `longitude` - the longitude

        &nbsp;
        -   #### setZ

                public void setZ(double z)

            Sets z.

            [Parameters:]{.paramLabel}
            :   `z` - the z

        &nbsp;
        -   #### getRouteVertex

                public RouteVertex getRouteVertex()

            Gets route vertex.

            [Returns:]{.returnLabel}
            :   the route vertex

        &nbsp;
        -   #### equals

                public boolean equals(Point otherPoint)

            Equals boolean.

            [Parameters:]{.paramLabel}
            :   `otherPoint` - the other point

            [Returns:]{.returnLabel}
            :   the boolean

        &nbsp;
        -   #### toString

                public java.lang.String toString()

            To string string.

            [Overrides:]{.overrideSpecifyLabel}
            :   `toString` in class `java.lang.Object`

            [Returns:]{.returnLabel}
            :   the string

        &nbsp;
        -   #### getZIndex

                public int getZIndex()

            Gets z index.

            [Returns:]{.returnLabel}
            :   the z index

com.mapspeople.models

Class PolygonGeometry {#class-polygongeometry .title title="Class PolygonGeometry"}
---------------------

-   java.lang.Object
-   -   com.mapspeople.models.PolygonGeometry

-   

    ------------------------------------------------------------------------

    \

        public class PolygonGeometryextends java.lang.Object

    The type Polygon geometry.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `double[]`                        | `getBBox()`                       |
        |                                   | Get b box double \[ \].           |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<java.util.List<ja | `getCoordinates()`                |
        | va.lang.Double[]>>`               | Gets coordinates.                 |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<java.util.List<Po | `getPoints()`                     |
        | int>>`                            | Gets points.                      |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getType()`                       |
        |                                   | Gets type.                        |
        +-----------------------------------+-----------------------------------+
        | `boolean`                         | `isInside(Point inPoint)`         |
        |                                   | Is inside boolean.                |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setBBox(double[] bbox)`          |
        |                                   | Sets b box.                       |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setCoordinates(java.util.List<ja |
        |                                   | va.util.List<java.lang.Double[]>> |
        |                                   |  coordinates)`                    |
        |                                   | Sets coordinates.                 |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### PolygonGeometry

                public PolygonGeometry()

            Instantiates a new Polygon geometry.

    &nbsp;
    -   ### Method Detail

        -   #### getType

                public java.lang.String getType()

            Gets type.

            [Returns:]{.returnLabel}
            :   the type

        &nbsp;
        -   #### getCoordinates

                public java.util.List<java.util.List<java.lang.Double[]>> getCoordinates()

            Gets coordinates.

            [Returns:]{.returnLabel}
            :   the coordinates

        &nbsp;
        -   #### getPoints

                public java.util.List<java.util.List<Point>> getPoints()

            Gets points.

            [Returns:]{.returnLabel}
            :   the points

        &nbsp;
        -   #### isInside

                public boolean isInside(Point inPoint)

            Is inside boolean.

            [Parameters:]{.paramLabel}
            :   `inPoint` - the in point

            [Returns:]{.returnLabel}
            :   the boolean

        &nbsp;
        -   #### setCoordinates

                public void setCoordinates(java.util.List<java.util.List<java.lang.Double[]>> coordinates)

            Sets coordinates.

            [Parameters:]{.paramLabel}
            :   `coordinates` - the coordinates

        &nbsp;
        -   #### setBBox

                public void setBBox(double[] bbox)

            Sets b box.

            [Parameters:]{.paramLabel}
            :   `bbox` - the bbox

        &nbsp;
        -   #### getBBox

                public double[] getBBox()

            Get b box double \[ \].

            [Returns:]{.returnLabel}
            :   the double \[ \]

com.mapspeople.models

Class PositionIndicator {#class-positionindicator .title title="Class PositionIndicator"}
-----------------------

-   java.lang.Object
-   -   com.mapspeople.models.MPLocation
    -   -   com.mapspeople.models.PositionIndicator

-   

    All Implemented Interfaces:
    :   Feature, Location

    ------------------------------------------------------------------------

    \

        public class PositionIndicatorextends MPLocation

    The type Position indicator.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `addToMap(GoogleMap map,        L |
        |                                   | ocationDisplayRules displayRules) |
        |                                   | `                                 |
        |                                   | Add to map.                       |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `animatePosition(Point position)` |
        |                                   | Animate position.                 |
        +-----------------------------------+-----------------------------------+
        | `Point`                           | `getPoint()`                      |
        |                                   | Gets point.                       |
        +-----------------------------------+-----------------------------------+
        | `double`                          | `getProbability()`                |
        |                                   | Gets probability.                 |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `hide()`                          |
        |                                   | Hide.                             |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setPosition(Point position)`     |
        |                                   | Sets position.                    |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setProbability(double probabilit |
        |                                   | y)`                               |
        |                                   | Sets probability.                 |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `show()`                          |
        |                                   | Show.                             |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class com.mapspeople.models.MPLocation

            `equals, getCategories, getDisplayRule, getField, getFloorIndex, getFloorName, getGeometry, getGLatLng, getId, getLocationProperyList, getMarker, getName, getProperties, getProperty, getRoomId, getStringProperty, getType, has, isOfCategory, isVisible, setCategories, setCategory, setDisplayRule, setLatLng, setMarker, setName, setPoint, setProperty, setType, setVisible, updateView, updateView`

        &nbsp;
        -   ### Methods inherited from class java.lang.Object

            `getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### PositionIndicator

                public PositionIndicator()

            Instantiates a new Position indicator.

    &nbsp;
    -   ### Method Detail

        -   #### getProbability

                public double getProbability()

            Gets probability.

            [Returns:]{.returnLabel}
            :   the probability

        &nbsp;
        -   #### setProbability

                public void setProbability(double probability)

            Sets probability.

            [Parameters:]{.paramLabel}
            :   `probability` - the probability

        &nbsp;
        -   #### setPosition

                public void setPosition(Point position)

            Sets position.

            [Parameters:]{.paramLabel}
            :   `position` - the position

        &nbsp;
        -   #### animatePosition

                public void animatePosition(Point position)

            Animate position.

            [Parameters:]{.paramLabel}
            :   `position` - the position

        &nbsp;
        -   #### addToMap

                public void addToMap(GoogleMap map,                     LocationDisplayRules displayRules)

            Add to map.

            [Parameters:]{.paramLabel}
            :   `map` - the map
            :   `displayRules` - the display rules

        &nbsp;
        -   #### getPoint

                public Point getPoint()

            Gets point.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getPoint` in interface `Location`

            [Overrides:]{.overrideSpecifyLabel}
            :   `getPoint` in class `MPLocation`

            [Returns:]{.returnLabel}
            :   the point

        &nbsp;
        -   #### hide

                public void hide()

            Hide.

            [Specified by:]{.overrideSpecifyLabel}
            :   `hide` in interface `Location`

            [Overrides:]{.overrideSpecifyLabel}
            :   `hide` in class `MPLocation`

        &nbsp;
        -   #### show

                public void show()

            Show.

            [Specified by:]{.overrideSpecifyLabel}
            :   `show` in interface `Location`

            [Overrides:]{.overrideSpecifyLabel}
            :   `show` in class `MPLocation`

com.mapspeople.models

Class PositionUpdate {#class-positionupdate .title title="Class PositionUpdate"}
--------------------

-   java.lang.Object
-   -   com.mapspeople.models.PositionUpdate

-   

    All Implemented Interfaces:
    :   Feature

    ------------------------------------------------------------------------

    \

        public class PositionUpdateextends java.lang.Objectimplements Feature

    The type Position update.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `Geometry`                        | `getGeometry()`                   |
        |                                   | Gets geometry.                    |
        +-----------------------------------+-----------------------------------+
        | `double`                          | `getHeading()`                    |
        |                                   | Gets heading.                     |
        +-----------------------------------+-----------------------------------+
        | `Point`                           | `getPoint()`                      |
        |                                   | Gets point.                       |
        +-----------------------------------+-----------------------------------+
        | `double`                          | `getProbability()`                |
        |                                   | Gets probability.                 |
        +-----------------------------------+-----------------------------------+
        | `java.util.Map<java.lang.String,j | `getProperties()`                 |
        | ava.lang.Object>`                 | Gets properties.                  |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getType()`                       |
        |                                   | Gets type.                        |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### PositionUpdate

                public PositionUpdate(Point point,                      double probability,                      double heading)

            Instantiates a new Position update.

            [Parameters:]{.paramLabel}
            :   `point` - the point
            :   `probability` - the probability
            :   `heading` - the heading

    &nbsp;
    -   ### Method Detail

        -   #### getType

                public java.lang.String getType()

            Gets type.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getType` in interface `Feature`

            [Returns:]{.returnLabel}
            :   the type

        &nbsp;
        -   #### getProperties

                public java.util.Map<java.lang.String,java.lang.Object> getProperties()

            Gets properties.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getProperties` in interface `Feature`

            [Returns:]{.returnLabel}
            :   the properties

        &nbsp;
        -   #### getGeometry

                public Geometry getGeometry()

            Gets geometry.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getGeometry` in interface `Feature`

            [Returns:]{.returnLabel}
            :   the geometry

        &nbsp;
        -   #### getPoint

                public Point getPoint()

            Gets point.

            [Returns:]{.returnLabel}
            :   the point

        &nbsp;
        -   #### getHeading

                public double getHeading()

            Gets heading.

            [Returns:]{.returnLabel}
            :   the heading

        &nbsp;
        -   #### getProbability

                public double getProbability()

            Gets probability.

            [Returns:]{.returnLabel}
            :   the probability

com.mapspeople.models

Class PushMessage {#class-pushmessage .title title="Class PushMessage"}
-----------------

-   java.lang.Object
-   -   com.mapspeople.models.PushMessage

-   

    ------------------------------------------------------------------------

    \

        public class PushMessageextends java.lang.Object

    The type Push message.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `java.lang.String`                | `getBeaconId()`                   |
        |                                   | Gets beacon id.                   |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getContent()`                    |
        |                                   | Gets content.                     |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getGeometry()`                   |
        |                                   | Gets geometry.                    |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getIcon()`                       |
        |                                   | Gets icon.                        |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getId()`                         |
        |                                   | Gets id.                          |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getLocationId()`                 |
        |                                   | Gets location id.                 |
        +-----------------------------------+-----------------------------------+
        | `int`                             | `getMaxPushTimes()`               |
        |                                   | Gets max push times.              |
        +-----------------------------------+-----------------------------------+
        | `int`                             | `getPushInterval()`               |
        |                                   | Gets push interval.               |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getTitle()`                      |
        |                                   | Gets title.                       |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### PushMessage

                public PushMessage()

    &nbsp;
    -   ### Method Detail

        -   #### getId

                public java.lang.String getId()

            Gets id.

            [Returns:]{.returnLabel}
            :   the id

        &nbsp;
        -   #### getBeaconId

                public java.lang.String getBeaconId()

            Gets beacon id.

            [Returns:]{.returnLabel}
            :   the beacon id

        &nbsp;
        -   #### getGeometry

                public java.lang.String getGeometry()

            Gets geometry.

            [Returns:]{.returnLabel}
            :   the geometry

        &nbsp;
        -   #### getLocationId

                public java.lang.String getLocationId()

            Gets location id.

            [Returns:]{.returnLabel}
            :   the location id

        &nbsp;
        -   #### getTitle

                public java.lang.String getTitle()

            Gets title.

            [Returns:]{.returnLabel}
            :   the title

        &nbsp;
        -   #### getContent

                public java.lang.String getContent()

            Gets content.

            [Returns:]{.returnLabel}
            :   the content

        &nbsp;
        -   #### getIcon

                public java.lang.String getIcon()

            Gets icon.

            [Returns:]{.returnLabel}
            :   the icon

        &nbsp;
        -   #### getMaxPushTimes

                public int getMaxPushTimes()

            Gets max push times.

            [Returns:]{.returnLabel}
            :   the max push times

        &nbsp;
        -   #### getPushInterval

                public int getPushInterval()

            Gets push interval.

            [Returns:]{.returnLabel}
            :   the push interval

com.mapspeople.models

Class PushMessageCollection {#class-pushmessagecollection .title title="Class PushMessageCollection"}
---------------------------

-   java.lang.Object
-   -   com.mapspeople.models.PushMessageCollection

-   

    ------------------------------------------------------------------------

    \

        public class PushMessageCollectionextends java.lang.Object

    The type Push message collection.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `java.util.List<PushMessage>`     | `getPushMessages()`               |
        |                                   | Gets push messages.               |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### PushMessageCollection

                public PushMessageCollection(java.util.List<PushMessage> pushMessages)

            Instantiates a new Push message collection.

            [Parameters:]{.paramLabel}
            :   `pushMessages` - the push messages

    &nbsp;
    -   ### Method Detail

        -   #### getPushMessages

                public java.util.List<PushMessage> getPushMessages()

            Gets push messages.

            [Returns:]{.returnLabel}
            :   the push messages

com.mapspeople.models

Class ReverseGeoCodeResult.BuildingInfo {#class-reversegeocoderesult.buildinginfo .title title="Class ReverseGeoCodeResult.BuildingInfo"}
---------------------------------------

-   java.lang.Object
-   -   com.mapspeople.models.ReverseGeoCodeResult.BuildingInfo

-   

    Enclosing class:
    :   ReverseGeoCodeResult

    ------------------------------------------------------------------------

    \

        public class ReverseGeoCodeResult.BuildingInfoextends java.lang.Object

    The type Building info.

-   -   ### Field Summary

          Constructor and Description
          -----------------------------
          `BuildingInfo()` 

    &nbsp;
    -   ### Method Summary

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Field Detail

        -   #### id

                public java.lang.String id

            The Id.

        &nbsp;
        -   #### name

                public java.lang.String name

            The Name.

        &nbsp;
        -   #### floors

                public java.util.HashMap<java.lang.Integer,java.lang.String> floors

            The Floors.

    &nbsp;
    -   ### Constructor Detail

        -   #### BuildingInfo

                public BuildingInfo()

com.mapspeople.models

Class ReverseGeoCodeResult.VenueInfo {#class-reversegeocoderesult.venueinfo .title title="Class ReverseGeoCodeResult.VenueInfo"}
------------------------------------

-   java.lang.Object
-   -   com.mapspeople.models.ReverseGeoCodeResult.VenueInfo

-   

    Enclosing class:
    :   ReverseGeoCodeResult

    ------------------------------------------------------------------------

    \

        public class ReverseGeoCodeResult.VenueInfoextends java.lang.Object

    The type Venue info.

-   -   ### Field Summary

          Constructor and Description
          -----------------------------
          `VenueInfo()` 

    &nbsp;
    -   ### Method Summary

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Field Detail

        -   #### id

                public java.lang.String id

            The Id.

        &nbsp;
        -   #### name

                public java.lang.String name

            The Name.

    &nbsp;
    -   ### Constructor Detail

        -   #### VenueInfo

                public VenueInfo()

com.mapspeople.models

Class ReverseGeoCodeResult {#class-reversegeocoderesult .title title="Class ReverseGeoCodeResult"}
--------------------------

-   java.lang.Object
-   -   com.mapspeople.models.ReverseGeoCodeResult

-   

    ------------------------------------------------------------------------

    \

        public class ReverseGeoCodeResultextends java.lang.Object

    The type Reverse geo code result.

-   -   ### Nested Class Summary

        +-----------------------------------------------------------------------+
        | Constructor and Description                                           |
        +=======================================================================+
        | `ReverseGeoCodeResult()`                                              |
        | Instantiates a new Reverse geo code result.                           |
        +-----------------------------------------------------------------------+

    &nbsp;
    -   ### Method Summary

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Field Detail

        -   #### building

                public ReverseGeoCodeResult.BuildingInfo building

            The Building.

        &nbsp;
        -   #### venue

                public ReverseGeoCodeResult.VenueInfo venue

            The Venue.

    &nbsp;
    -   ### Constructor Detail

        -   #### ReverseGeoCodeResult

                public ReverseGeoCodeResult()

            Instantiates a new Reverse geo code result.

com.mapspeople.models

Class Site {#class-site .title title="Class Site"}
----------

-   java.lang.Object
-   -   com.mapspeople.models.Site

-   

    ------------------------------------------------------------------------

    \

        public class Siteextends java.lang.Object

    The type Site.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `java.lang.String`                | `getName()`                       |
        |                                   | Gets name.                        |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### Site

                public Site(java.lang.String name)

            Instantiates a new Site.

            [Parameters:]{.paramLabel}
            :   `name` - the name

    &nbsp;
    -   ### Method Detail

        -   #### getName

                public java.lang.String getName()

            Gets name.

            [Returns:]{.returnLabel}
            :   the name

com.mapspeople.models

Class Solution {#class-solution .title title="Class Solution"}
--------------

-   java.lang.Object
-   -   com.mapspeople.models.Solution

-   

    ------------------------------------------------------------------------

    \

        public class Solutionextends java.lang.Object

    The type Solution.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `java.util.List<java.lang.String> | `getAvailableLanguages()`         |
        | `                                 | Gets available languages.         |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getCustomerId()`                 |
        |                                   | Gets customer id.                 |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getDefaultLanguage()`            |
        |                                   | Gets default language.            |
        +-----------------------------------+-----------------------------------+
        | `DisplayRule`                     | `getDisplayRule(java.lang.String  |
        |                                   | typeName)`                        |
        |                                   | Gets display rule.                |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getId()`                         |
        |                                   | Gets id.                          |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getName()`                       |
        |                                   | Gets name.                        |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<POIType>`         | `getTypes()`                      |
        |                                   | Gets types.                       |
        +-----------------------------------+-----------------------------------+
        | `java.lang.Boolean`               | `isWhitelabel()`                  |
        |                                   | Is whitelabel boolean.            |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setId(java.lang.String solutionI |
        |                                   | d)`                               |
        |                                   | Sets id.                          |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### Solution

                public Solution()

    &nbsp;
    -   ### Method Detail

        -   #### setId

                public void setId(java.lang.String solutionId)

            Sets id.

            [Parameters:]{.paramLabel}
            :   `solutionId` - the solution id

        &nbsp;
        -   #### getId

                public java.lang.String getId()

            Gets id.

            [Returns:]{.returnLabel}
            :   the id

        &nbsp;
        -   #### getCustomerId

                public java.lang.String getCustomerId()

            Gets customer id.

            [Returns:]{.returnLabel}
            :   the customer id

        &nbsp;
        -   #### getName

                public java.lang.String getName()

            Gets name.

            [Returns:]{.returnLabel}
            :   the name

        &nbsp;
        -   #### getDefaultLanguage

                public java.lang.String getDefaultLanguage()

            Gets default language.

            [Returns:]{.returnLabel}
            :   the default language

        &nbsp;
        -   #### getAvailableLanguages

                public java.util.List<java.lang.String> getAvailableLanguages()

            Gets available languages.

            [Returns:]{.returnLabel}
            :   the available languages

        &nbsp;
        -   #### getTypes

                public java.util.List<POIType> getTypes()

            Gets types.

            [Returns:]{.returnLabel}
            :   the types

        &nbsp;
        -   #### isWhitelabel

                public java.lang.Boolean isWhitelabel()

            Is whitelabel boolean.

            [Returns:]{.returnLabel}
            :   the boolean

        &nbsp;
        -   #### getDisplayRule

                public DisplayRule getDisplayRule(java.lang.String typeName)

            Gets display rule.

            [Parameters:]{.paramLabel}
            :   `typeName` - the type name

            [Returns:]{.returnLabel}
            :   the display rule

com.mapspeople.models

Class Token {#class-token .title title="Class Token"}
-----------

-   java.lang.Object
-   -   com.mapspeople.models.Token

-   

    ------------------------------------------------------------------------

    \

        public class Tokenextends java.lang.Object

    The type Token.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `java.lang.String`                | `getKey()`                        |
        |                                   | Gets key.                         |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getSecret()`                     |
        |                                   | Gets secret.                      |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### Token

                public Token()

    &nbsp;
    -   ### Method Detail

        -   #### getSecret

                public java.lang.String getSecret()

            Gets secret.

            [Returns:]{.returnLabel}
            :   the secret

        &nbsp;
        -   #### getKey

                public java.lang.String getKey()

            Gets key.

            [Returns:]{.returnLabel}
            :   the key

com.mapspeople.models

Class Venue {#class-venue .title title="Class Venue"}
-----------

-   java.lang.Object
-   -   com.mapspeople.models.Venue

-   

    ------------------------------------------------------------------------

    \

        public class Venueextends java.lang.Object

    The type Venue.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `addToMap(GoogleMap map,        a |
        |                                   | ndroid.content.Context appContext |
        |                                   | )`                                |
        |                                   | Add to map.                       |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<TileOverlay>`     | `getBaseTileOverlays(java.lang.St |
        |                                   | ring style)`                      |
        |                                   | Gets base tile overlays.          |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getCustomerId()`                 |
        |                                   | Gets customer id.                 |
        +-----------------------------------+-----------------------------------+
        | `int`                             | `getDefaultFloor()`               |
        |                                   | Gets default floor.               |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getDefaultStyle()`               |
        |                                   | Gets default style.               |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<Point>`           | `getEntryPoints()`                |
        |                                   | Gets entry points.                |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getGraphId()`                    |
        |                                   | Gets graph id.                    |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getName()`                       |
        |                                   | Gets name.                        |
        +-----------------------------------+-----------------------------------+
        | `Point`                           | `getPosition()`                   |
        |                                   | method to get the (average) point |
        |                                   | of the geometry Returns null if   |
        |                                   | geometry is not set               |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<java.lang.String> | `getStyles()`                     |
        | `                                 | Gets styles.                      |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<TileOverlay>`     | `getTileOverlays(Building buildin |
        |                                   | g)`                               |
        |                                   | Gets tile overlays.               |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getTilesUrl()`                   |
        |                                   | Gets tiles url.                   |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getVenueId()`                    |
        |                                   | Gets venue id.                    |
        +-----------------------------------+-----------------------------------+
        | `VenueInfo`                       | `getVenueInfo()`                  |
        |                                   | Gets venue info.                  |
        +-----------------------------------+-----------------------------------+
        | `boolean`                         | `isInside(Point point)`           |
        |                                   | method to check if a given point  |
        |                                   | is inside or outside this         |
        |                                   | geometry                          |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setCustomerId(java.lang.String c |
        |                                   | ustomerId)`                       |
        |                                   | Sets customer id.                 |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setName(java.lang.String name)`  |
        |                                   | Sets name.                        |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setTilesUrl(java.lang.String til |
        |                                   | esUrl)`                           |
        |                                   | Sets tiles url.                   |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setVenueId(java.lang.String venu |
        |                                   | eId)`                             |
        |                                   | Sets venue id.                    |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### Venue

                public Venue()

    &nbsp;
    -   ### Method Detail

        -   #### isInside

                public boolean isInside(Point point)

            method to check if a given point is inside or outside this
            geometry

            [Parameters:]{.paramLabel}
            :   `point` - The point to check for

            [Returns:]{.returnLabel}
            :   true if the given point is inside

        &nbsp;
        -   #### getPosition

                public Point getPosition()

            method to get the (average) point of the geometry Returns
            null if geometry is not set

            [Returns:]{.returnLabel}
            :   A point describing the geometry (defined here as the
                average lat/lng)

        &nbsp;
        -   #### getVenueId

                public java.lang.String getVenueId()

            Gets venue id.

            [Returns:]{.returnLabel}
            :   the venue id

        &nbsp;
        -   #### setVenueId

                public void setVenueId(java.lang.String venueId)

            Sets venue id.

            [Parameters:]{.paramLabel}
            :   `venueId` - the venue id

        &nbsp;
        -   #### getGraphId

                public java.lang.String getGraphId()

            Gets graph id.

            [Returns:]{.returnLabel}
            :   the graph id

        &nbsp;
        -   #### getTilesUrl

                public java.lang.String getTilesUrl()

            Gets tiles url.

            [Returns:]{.returnLabel}
            :   the tiles url

        &nbsp;
        -   #### setTilesUrl

                public void setTilesUrl(java.lang.String tilesUrl)

            Sets tiles url.

            [Parameters:]{.paramLabel}
            :   `tilesUrl` - the tiles url

        &nbsp;
        -   #### getName

                public java.lang.String getName()

            Gets name.

            [Returns:]{.returnLabel}
            :   the name

        &nbsp;
        -   #### setName

                public void setName(java.lang.String name)

            Sets name.

            [Parameters:]{.paramLabel}
            :   `name` - the name

        &nbsp;
        -   #### getVenueInfo

                public VenueInfo getVenueInfo()

            Gets venue info.

            [Returns:]{.returnLabel}
            :   the venue info

        &nbsp;
        -   #### getStyles

                public java.util.List<java.lang.String> getStyles()

            Gets styles.

            [Returns:]{.returnLabel}
            :   the styles

        &nbsp;
        -   #### getCustomerId

                public java.lang.String getCustomerId()

            Gets customer id.

            [Returns:]{.returnLabel}
            :   the customer id

        &nbsp;
        -   #### setCustomerId

                public void setCustomerId(java.lang.String customerId)

            Sets customer id.

            [Parameters:]{.paramLabel}
            :   `customerId` - the customer id

        &nbsp;
        -   #### addToMap

                public void addToMap(GoogleMap map,                     android.content.Context appContext)

            Add to map.

            [Parameters:]{.paramLabel}
            :   `map` - the map
            :   `appContext` - the app context

        &nbsp;
        -   #### getDefaultFloor

                public int getDefaultFloor()

            Gets default floor.

            [Returns:]{.returnLabel}
            :   the default floor

        &nbsp;
        -   #### getDefaultStyle

                public java.lang.String getDefaultStyle()

            Gets default style.

            [Returns:]{.returnLabel}
            :   the default style

        &nbsp;
        -   #### getBaseTileOverlays

                public java.util.List<TileOverlay> getBaseTileOverlays(java.lang.String style)

            Gets base tile overlays.

            [Parameters:]{.paramLabel}
            :   `style` - the style

            [Returns:]{.returnLabel}
            :   the base tile overlays

        &nbsp;
        -   #### getTileOverlays

                public java.util.List<TileOverlay> getTileOverlays(Building building)

            Gets tile overlays.

            [Parameters:]{.paramLabel}
            :   `building` - the building

            [Returns:]{.returnLabel}
            :   the tile overlays

        &nbsp;
        -   #### getEntryPoints

                public java.util.List<Point> getEntryPoints()

            Gets entry points.

            [Returns:]{.returnLabel}
            :   the entry points

com.mapspeople.models

Class VenueCollection {#class-venuecollection .title title="Class VenueCollection"}
---------------------

-   java.lang.Object
-   -   com.mapspeople.models.VenueCollection

-   

    ------------------------------------------------------------------------

    \

        public class VenueCollectionextends java.lang.Object

    The type Venue collection.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `Venue`                           | `getCurrentVenue()`               |
        |                                   | Gets current venue.               |
        +-----------------------------------+-----------------------------------+
        | `Venue`                           | `getDefaultVenue()`               |
        |                                   | Gets default venue.               |
        +-----------------------------------+-----------------------------------+
        | `Venue`                           | `getVenue(java.lang.String venueN |
        |                                   | ame)`                             |
        |                                   | Gets venue.                       |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<Venue>`           | `getVenues()`                     |
        |                                   | Gets venues.                      |
        +-----------------------------------+-----------------------------------+
        | `boolean`                         | `selectVenue(java.lang.String ven |
        |                                   | ueId)`                            |
        |                                   | Select venue boolean.             |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setVenues(java.util.List<Venue>  |
        |                                   | venues)`                          |
        |                                   | Sets venues.                      |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### VenueCollection

                public VenueCollection()

    &nbsp;
    -   ### Method Detail

        -   #### getVenues

                public java.util.List<Venue> getVenues()

            Gets venues.

            [Returns:]{.returnLabel}
            :   the venues

        &nbsp;
        -   #### selectVenue

                public boolean selectVenue(java.lang.String venueId)

            Select venue boolean.

            [Parameters:]{.paramLabel}
            :   `venueId` - the venue id

            [Returns:]{.returnLabel}
            :   the boolean

        &nbsp;
        -   #### getVenue

                public Venue getVenue(java.lang.String venueName)

            Gets venue.

            [Parameters:]{.paramLabel}
            :   `venueName` - the venue name

            [Returns:]{.returnLabel}
            :   the venue

        &nbsp;
        -   #### getCurrentVenue

                public Venue getCurrentVenue()

            Gets current venue.

            [Returns:]{.returnLabel}
            :   the current venue

        &nbsp;
        -   #### setVenues

                public void setVenues(java.util.List<Venue> venues)

            Sets venues.

            [Parameters:]{.paramLabel}
            :   `venues` - the venues

        &nbsp;
        -   #### getDefaultVenue

                public Venue getDefaultVenue()

            Gets default venue.

            [Returns:]{.returnLabel}
            :   the default venue

com.mapspeople.models

Class VenueInfo {#class-venueinfo .title title="Class VenueInfo"}
---------------

-   java.lang.Object
-   -   com.mapspeople.models.VenueInfo

-   

    ------------------------------------------------------------------------

    \

        public class VenueInfoextends java.lang.Object

    The type Venue info.

-   -   ### Field Summary

          Constructor and Description
          -----------------------------
          `VenueInfo()` 

    &nbsp;
    -   ### Method Summary

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Field Detail

        -   #### name

                public java.lang.String name

            The Name.

        &nbsp;
        -   #### aliases

                public java.util.List<java.lang.String> aliases

            The Aliases.

        &nbsp;
        -   #### language

                public java.lang.String language

            The Language.

    &nbsp;
    -   ### Constructor Detail

        -   #### VenueInfo

                public VenueInfo()

position
========

com.mapspeople.position

Interface BeaconProvider {#interface-beaconprovider .title title="Interface BeaconProvider"}
------------------------

-   

    All Known Implementing Classes:
    :   MPBeaconProvider

    ------------------------------------------------------------------------

    \

        public interface BeaconProvider

    Location provider interface

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `cancelRequest()`                 |
        |                                   | Cancel request.                   |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `queryBeacons(java.lang.String cl |
        |                                   | ientId,            java.lang.Stri |
        |                                   | ng[] beaconIds)`                  |
        |                                   | Initiate the fetching of beacons  |
        |                                   | from the providers, with given    |
        |                                   | ids.                              |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOnBeaconsReadyListener(OnBeac |
        |                                   | onsReadyListener listener)`       |
        |                                   | Set a listener object to catch    |
        |                                   | the beacons data callback.        |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### queryBeacons

                void queryBeacons(java.lang.String clientId,                  java.lang.String[] beaconIds)

            Initiate the fetching of beacons from the providers, with
            given ids. Usually, if beacons has been registered with a
            concatenated id "UUID-major-minor"

            [Parameters:]{.paramLabel}
            :   `clientId` - the client id
            :   `beaconIds` - The beacon id list

        &nbsp;
        -   #### cancelRequest

                void cancelRequest()

            Cancel request.

        &nbsp;
        -   #### setOnBeaconsReadyListener

                void setOnBeaconsReadyListener(OnBeaconsReadyListener listener)

            Set a listener object to catch the beacons data callback.

            [Parameters:]{.paramLabel}
            :   `listener` - The listener object.

com.mapspeople.position

Class BeaconRSSICache {#class-beaconrssicache .title title="Class BeaconRSSICache"}
---------------------

-   java.lang.Object
-   -   com.mapspeople.position.BeaconRSSICache

-   

    ------------------------------------------------------------------------

    \

        public class BeaconRSSICacheextends java.lang.Object

    BeaconRSSICache Created by mh on 07-05-2015.

-   -   ### Field Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `add(double val)`                 |
        |                                   | Add.                              |
        +-----------------------------------+-----------------------------------+
        | `double`                          | `getAvgVal()`                     |
        |                                   | Gets avg val.                     |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Field Detail

        -   #### beacon

                public final MPBeacon beacon

            The Beacon.

        &nbsp;
        -   #### time

                public long time

            The Time.

    &nbsp;
    -   ### Constructor Detail

        -   #### BeaconRSSICache

                public BeaconRSSICache(MPBeacon beacon,                       double RSSI)

            Instantiates a new Beacon rssi cache.

            [Parameters:]{.paramLabel}
            :   `beacon` - the beacon
            :   `RSSI` - the rssi

    &nbsp;
    -   ### Method Detail

        -   #### getAvgVal

                public double getAvgVal()

            Gets avg val.

            [Returns:]{.returnLabel}
            :   the avg val

        &nbsp;
        -   #### add

                public void add(double val)

            Add.

            [Parameters:]{.paramLabel}
            :   `val` - the val

com.mapspeople.position

Class BeaconRSSICacheMgr {#class-beaconrssicachemgr .title title="Class BeaconRSSICacheMgr"}
------------------------

-   java.lang.Object
-   -   com.mapspeople.position.BeaconRSSICacheMgr

-   

    ------------------------------------------------------------------------

    \

        public class BeaconRSSICacheMgrextends java.lang.Object

    BeaconRSSICacheMgr Created by mh on 07-05-2015.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `add(MPBeacon beacon,   double RS |
        |                                   | SI)`                              |
        |                                   | Add.                              |
        +-----------------------------------+-----------------------------------+
        | `java.util.ArrayList<BeaconRSSICa | `getBeaconList(int sinceMillis)`  |
        | che>`                             | Gets beacon list.                 |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### BeaconRSSICacheMgr

                public BeaconRSSICacheMgr()

            Instantiates a new Beacon rssi cache mgr.

    &nbsp;
    -   ### Method Detail

        -   #### add

                public void add(MPBeacon beacon,                double RSSI)

            Add.

            [Parameters:]{.paramLabel}
            :   `beacon` - the beacon
            :   `RSSI` - the rssi

        &nbsp;
        -   #### getBeaconList

                public java.util.ArrayList<BeaconRSSICache> getBeaconList(int sinceMillis)

            Gets beacon list.

            [Parameters:]{.paramLabel}
            :   `sinceMillis` - the since millis

            [Returns:]{.returnLabel}
            :   the beacon list

com.mapspeople.position

Class BeaconRSSIValue {#class-beaconrssivalue .title title="Class BeaconRSSIValue"}
---------------------

-   java.lang.Object
-   -   com.mapspeople.position.BeaconRSSIValue

-   

    ------------------------------------------------------------------------

    \

        public class BeaconRSSIValueextends java.lang.Object

    BeaconRSSIValue Created by mh on 07-05-2015.

-   -   ### Field Summary

        +-----------------------------------------------------------------------+
        | Constructor and Description                                           |
        +=======================================================================+
        | `BeaconRSSIValue(double val)`                                         |
        | Instantiates a new Beacon rssi value.                                 |
        +-----------------------------------------------------------------------+

    &nbsp;
    -   ### Method Summary

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Field Detail

        -   #### val

                public final double val

            The Val.

    &nbsp;
    -   ### Constructor Detail

        -   #### BeaconRSSIValue

                public BeaconRSSIValue(double val)

            Instantiates a new Beacon rssi value.

            [Parameters:]{.paramLabel}
            :   `val` - the val

com.mapspeople.position

Class BeaconValues {#class-beaconvalues .title title="Class BeaconValues"}
------------------

-   java.lang.Object
-   -   com.mapspeople.position.BeaconValues

-   

    ------------------------------------------------------------------------

    \

        public class BeaconValuesextends java.lang.Object

    Created by Daniel Nielsen on 13/02/15.

-   -   ### Field Summary

        +-----------------------------------------------------------------------+
        | Constructor and Description                                           |
        +=======================================================================+
        | `BeaconValues(java.lang.String id)`                                   |
        | Instantiates a new Beacon values.                                     |
        +-----------------------------------------------------------------------+

    &nbsp;
    -   ### Method Summary

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Field Detail

        -   #### id

                public final java.lang.String id

            The Id.

    &nbsp;
    -   ### Constructor Detail

        -   #### BeaconValues

                public BeaconValues(java.lang.String id)

            Instantiates a new Beacon values.

            [Parameters:]{.paramLabel}
            :   `id` - the id

com.mapspeople.position

Class IndoorCredentialLevel {#class-indoorcredentiallevel .title title="Class IndoorCredentialLevel"}
---------------------------

-   java.lang.Object
-   -   com.mapspeople.position.IndoorCredentialLevel

-   

    ------------------------------------------------------------------------

    \

        public class IndoorCredentialLevelextends java.lang.Object

    The type Indoor credential level.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `java.util.List<java.lang.String> | `getFloorplans()`                 |
        | `                                 | Gets floorplans.                  |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getLevelId()`                    |
        |                                   | Gets level id.                    |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setFloorplans(java.util.List<jav |
        |                                   | a.lang.String> floorplans)`       |
        |                                   | Sets floorplans.                  |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setLevelId(java.lang.String leve |
        |                                   | lId)`                             |
        |                                   | Sets level id.                    |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### IndoorCredentialLevel

                public IndoorCredentialLevel()

            Instantiates a new Indoor credential level.

        &nbsp;
        -   #### IndoorCredentialLevel

                public IndoorCredentialLevel(java.lang.String level,                             java.lang.String floorplan)

            Instantiates a new Indoor credential level.

            [Parameters:]{.paramLabel}
            :   `level` - the level
            :   `floorplan` - the floorplan

    &nbsp;
    -   ### Method Detail

        -   #### getFloorplans

                public java.util.List<java.lang.String> getFloorplans()

            Gets floorplans.

            [Returns:]{.returnLabel}
            :   the floorplans

        &nbsp;
        -   #### setFloorplans

                public void setFloorplans(java.util.List<java.lang.String> floorplans)

            Sets floorplans.

            [Parameters:]{.paramLabel}
            :   `floorplans` - the floorplans

        &nbsp;
        -   #### getLevelId

                public java.lang.String getLevelId()

            Gets level id.

            [Returns:]{.returnLabel}
            :   the level id

        &nbsp;
        -   #### setLevelId

                public void setLevelId(java.lang.String levelId)

            Sets level id.

            [Parameters:]{.paramLabel}
            :   `levelId` - the level id

com.mapspeople.position

Class IndoorCredentials {#class-indoorcredentials .title title="Class IndoorCredentials"}
-----------------------

-   java.lang.Object
-   -   com.mapspeople.position.IndoorCredentials

-   

    ------------------------------------------------------------------------

    \

        public class IndoorCredentialsextends java.lang.Object

    The type Indoor credentials.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `addIndoorCredentialLevel(IndoorC |
        |                                   | redentialLevel level)`            |
        |                                   | Add indoor credential level.      |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getBuildingId()`                 |
        |                                   | Gets building id.                 |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getCurrentFloorplanId()`         |
        |                                   | Gets current floorplan id.        |
        +-----------------------------------+-----------------------------------+
        | `int`                             | `getCurrentLevel()`               |
        |                                   | Gets current level.               |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getCurrentLevelId()`             |
        |                                   | Gets current level id.            |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setBuildingId(java.lang.String b |
        |                                   | uildingId)`                       |
        |                                   | Sets building id.                 |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setCurrentLevel(int currentLevel |
        |                                   | )`                                |
        |                                   | Sets current level.               |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### IndoorCredentials

                public IndoorCredentials(java.lang.String building)

            Instantiates a new Indoor credentials.

            [Parameters:]{.paramLabel}
            :   `building` - the building

        &nbsp;
        -   #### IndoorCredentials

                public IndoorCredentials(java.lang.String building,                         java.lang.String level,                         java.lang.String floorplan)

            Instantiates a new Indoor credentials.

            [Parameters:]{.paramLabel}
            :   `building` - the building
            :   `level` - the level
            :   `floorplan` - the floorplan

    &nbsp;
    -   ### Method Detail

        -   #### addIndoorCredentialLevel

                public void addIndoorCredentialLevel(IndoorCredentialLevel level)

            Add indoor credential level.

            [Parameters:]{.paramLabel}
            :   `level` - the level

        &nbsp;
        -   #### getBuildingId

                public java.lang.String getBuildingId()

            Gets building id.

            [Returns:]{.returnLabel}
            :   the building id

        &nbsp;
        -   #### setBuildingId

                public void setBuildingId(java.lang.String buildingId)

            Sets building id.

            [Parameters:]{.paramLabel}
            :   `buildingId` - the building id

        &nbsp;
        -   #### getCurrentLevel

                public int getCurrentLevel()

            Gets current level.

            [Returns:]{.returnLabel}
            :   the current level

        &nbsp;
        -   #### setCurrentLevel

                public void setCurrentLevel(int currentLevel)

            Sets current level.

            [Parameters:]{.paramLabel}
            :   `currentLevel` - the current level

        &nbsp;
        -   #### getCurrentLevelId

                public java.lang.String getCurrentLevelId()

            Gets current level id.

            [Returns:]{.returnLabel}
            :   the current level id

        &nbsp;
        -   #### getCurrentFloorplanId

                public java.lang.String getCurrentFloorplanId()

            Gets current floorplan id.

            [Returns:]{.returnLabel}
            :   the current floorplan id

com.mapspeople.position

Interface IndoorPositionProvider {#interface-indoorpositionprovider .title title="Interface IndoorPositionProvider"}
--------------------------------

-   

    All Superinterfaces:
    :   PositionProvider

    ------------------------------------------------------------------------

    \

        public interface IndoorPositionProviderextends PositionProvider

    The interface Indoor position provider.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `setBuilding(Building building)`  |
        |                                   | Sets building.                    |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setFloor(Floor floor)`           |
        |                                   | Sets floor.                       |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from interface com.mapspeople.position.PositionProvider

            `addOnPositionUpdateListener, getLatestPosition, getProviderId, isRunning, setProviderId, startPositioning, startPositioningAfter, stopPositioning`

-   -   ### Method Detail

        -   #### setFloor

                void setFloor(Floor floor)

            Sets floor.

            [Parameters:]{.paramLabel}
            :   `floor` - the floor

        &nbsp;
        -   #### setBuilding

                void setBuilding(Building building)

            Sets building.

            [Parameters:]{.paramLabel}
            :   `building` - the building

com.mapspeople.position

Class MPBeacon {#class-mpbeacon .title title="Class MPBeacon"}
--------------

-   java.lang.Object
-   -   com.mapspeople.position.MPBeacon

-   

    ------------------------------------------------------------------------

    \

        public class MPBeaconextends java.lang.Object

    Created by Daniel Nielsen on 13/02/15.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `java.lang.String`                | `getId()`                         |
        |                                   | Gets id.                          |
        +-----------------------------------+-----------------------------------+
        | `double`                          | `getMaxTxPower()`                 |
        |                                   | Gets max tx power.                |
        +-----------------------------------+-----------------------------------+
        | `Point`                           | `getPoint()`                      |
        |                                   | Gets point.                       |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### MPBeacon

                public MPBeacon()

    &nbsp;
    -   ### Method Detail

        -   #### getPoint

                public Point getPoint()

            Gets point.

            [Returns:]{.returnLabel}
            :   the point

        &nbsp;
        -   #### getMaxTxPower

                public double getMaxTxPower()

            Gets max tx power.

            [Returns:]{.returnLabel}
            :   the max tx power

        &nbsp;
        -   #### getId

                public java.lang.String getId()

            Gets id.

            [Returns:]{.returnLabel}
            :   the id

com.mapspeople.position

Class MPBeaconProvider {#class-mpbeaconprovider .title title="Class MPBeaconProvider"}
----------------------

-   java.lang.Object
-   -   com.mapspeople.position.MPBeaconProvider

-   

    All Implemented Interfaces:
    :   BeaconProvider

    ------------------------------------------------------------------------

    \

        public class MPBeaconProviderextends java.lang.Objectimplements BeaconProvider

    MPBeaconProvider Created by MH on 13/02/15.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `cancelRequest()`                 |
        |                                   | Cancel request.                   |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `queryBeacons(java.lang.String cl |
        |                                   | ientId,            java.lang.Stri |
        |                                   | ng[] beaconIds)`                  |
        |                                   | Query beacons.                    |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOnBeaconsReadyListener(OnBeac |
        |                                   | onsReadyListener listener)`       |
        |                                   | Sets on beacons ready listener.   |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### MPBeaconProvider

                public MPBeaconProvider()

            Instantiates a new Mp beacon provider.

    &nbsp;
    -   ### Method Detail

        -   #### queryBeacons

                public void queryBeacons(java.lang.String clientId,                         java.lang.String[] beaconIds)

            Query beacons.

            [Specified by:]{.overrideSpecifyLabel}
            :   `queryBeacons` in interface `BeaconProvider`

            [Parameters:]{.paramLabel}
            :   `clientId` - the client id
            :   `beaconIds` - the beacon ids

        &nbsp;
        -   #### cancelRequest

                public void cancelRequest()

            Cancel request.

            [Specified by:]{.overrideSpecifyLabel}
            :   `cancelRequest` in interface `BeaconProvider`

        &nbsp;
        -   #### setOnBeaconsReadyListener

                public void setOnBeaconsReadyListener(OnBeaconsReadyListener listener)

            Sets on beacons ready listener.

            [Specified by:]{.overrideSpecifyLabel}
            :   `setOnBeaconsReadyListener` in
                interface `BeaconProvider`

            [Parameters:]{.paramLabel}
            :   `listener` - the listener

com.mapspeople.position

Class MPPositionResult {#class-mppositionresult .title title="Class MPPositionResult"}
----------------------

-   java.lang.Object
-   -   com.mapspeople.position.MPPositionResult

-   

    All Implemented Interfaces:
    :   Feature, PositionResult

    ------------------------------------------------------------------------

    \

        public class MPPositionResultextends java.lang.Objectimplements PositionResult, Feature

    The type Mp position result.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `float`                           | `getAge()`                        |
        |                                   | Gets age.                         |
        +-----------------------------------+-----------------------------------+
        | `int`                             | `getFloor()`                      |
        |                                   | Gets floor.                       |
        +-----------------------------------+-----------------------------------+
        | `Geometry`                        | `getGeometry()`                   |
        |                                   | Gets geometry.                    |
        +-----------------------------------+-----------------------------------+
        | `double`                          | `getHeadingDegrees()`             |
        |                                   | Gets heading degrees.             |
        +-----------------------------------+-----------------------------------+
        | `Point`                           | `getPoint()`                      |
        |                                   | Gets point.                       |
        +-----------------------------------+-----------------------------------+
        | `double`                          | `getProbability()`                |
        |                                   | Gets probability.                 |
        +-----------------------------------+-----------------------------------+
        | `java.util.Map<java.lang.String,j | `getProperties()`                 |
        | ava.lang.Object>`                 | Gets properties.                  |
        +-----------------------------------+-----------------------------------+
        | `java.lang.Object`                | `getProperty(java.lang.String key |
        |                                   | )`                                |
        |                                   | Gets property.                    |
        +-----------------------------------+-----------------------------------+
        | `PositionProvider`                | `getProvider()`                   |
        |                                   | Gets provider.                    |
        +-----------------------------------+-----------------------------------+
        | `double`                          | `getRoundtrip()`                  |
        |                                   | Gets roundtrip.                   |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getStatus()`                     |
        |                                   | Gets status.                      |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getStringProperty(java.lang.Stri |
        |                                   | ng key)`                          |
        |                                   | Gets string property.             |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getType()`                       |
        |                                   | Gets type.                        |
        +-----------------------------------+-----------------------------------+
        | `boolean`                         | `has(java.lang.String key)`       |
        |                                   | Has boolean.                      |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setProvider(PositionProvider pro |
        |                                   | vider)`                           |
        |                                   | Sets provider.                    |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### MPPositionResult

                public MPPositionResult(Point point,                        double probability,                        double headingDegrees,                        double roundtrip)

            Instantiates a new Mp position result.

            [Parameters:]{.paramLabel}
            :   `point` - the point
            :   `probability` - the probability
            :   `headingDegrees` - the heading degrees
            :   `roundtrip` - the roundtrip

    &nbsp;
    -   ### Method Detail

        -   #### has

                public boolean has(java.lang.String key)

            Has boolean.

            [Parameters:]{.paramLabel}
            :   `key` - the key

            [Returns:]{.returnLabel}
            :   the boolean

        &nbsp;
        -   #### getStringProperty

                public java.lang.String getStringProperty(java.lang.String key)

            Gets string property.

            [Parameters:]{.paramLabel}
            :   `key` - the key

            [Returns:]{.returnLabel}
            :   the string property

        &nbsp;
        -   #### getProperty

                public java.lang.Object getProperty(java.lang.String key)

            Gets property.

            [Parameters:]{.paramLabel}
            :   `key` - the key

            [Returns:]{.returnLabel}
            :   the property

        &nbsp;
        -   #### getRoundtrip

                public double getRoundtrip()

            Gets roundtrip.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getRoundtrip` in interface `PositionResult`

            [Returns:]{.returnLabel}
            :   the roundtrip

        &nbsp;
        -   #### getPoint

                public Point getPoint()

            Gets point.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getPoint` in interface `PositionResult`

            [Returns:]{.returnLabel}
            :   the point

        &nbsp;
        -   #### getHeadingDegrees

                public double getHeadingDegrees()

            Gets heading degrees.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getHeadingDegrees` in interface `PositionResult`

            [Returns:]{.returnLabel}
            :   the heading degrees

        &nbsp;
        -   #### getProbability

                public double getProbability()

            Gets probability.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getProbability` in interface `PositionResult`

            [Returns:]{.returnLabel}
            :   the probability

        &nbsp;
        -   #### getType

                public java.lang.String getType()

            Gets type.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getType` in interface `Feature`

            [Returns:]{.returnLabel}
            :   the type

        &nbsp;
        -   #### getProperties

                public java.util.Map<java.lang.String,java.lang.Object> getProperties()

            Gets properties.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getProperties` in interface `Feature`

            [Returns:]{.returnLabel}
            :   the properties

        &nbsp;
        -   #### getGeometry

                public Geometry getGeometry()

            Gets geometry.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getGeometry` in interface `Feature`

            [Returns:]{.returnLabel}
            :   the geometry

        &nbsp;
        -   #### getStatus

                public java.lang.String getStatus()

            Gets status.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getStatus` in interface `PositionResult`

            [Returns:]{.returnLabel}
            :   the status

        &nbsp;
        -   #### getProvider

                public PositionProvider getProvider()

            Gets provider.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getProvider` in interface `PositionResult`

            [Returns:]{.returnLabel}
            :   the provider

        &nbsp;
        -   #### setProvider

                public void setProvider(PositionProvider provider)

            Sets provider.

            [Specified by:]{.overrideSpecifyLabel}
            :   `setProvider` in interface `PositionResult`

            [Parameters:]{.paramLabel}
            :   `provider` - the provider

        &nbsp;
        -   #### getAge

                public float getAge()

            Gets age.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getAge` in interface `PositionResult`

            [Returns:]{.returnLabel}
            :   the age

        &nbsp;
        -   #### getFloor

                public int getFloor()

            Gets floor.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getFloor` in interface `PositionResult`

            [Returns:]{.returnLabel}
            :   the floor

com.mapspeople.position

Interface OnBeaconServiceConnectListener {#interface-onbeaconserviceconnectlistener .title title="Interface OnBeaconServiceConnectListener"}
----------------------------------------

-   

    ------------------------------------------------------------------------

    \

        public interface OnBeaconServiceConnectListener

    Created by JSM on 27/02/15.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `onBeaconServiceConnect()`        |
        |                                   | On beacon service connect.        |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### onBeaconServiceConnect

                void onBeaconServiceConnect()

            On beacon service connect.

com.mapspeople.position

Interface OnBeaconsReadyListener {#interface-onbeaconsreadylistener .title title="Interface OnBeaconsReadyListener"}
--------------------------------

-   

    ------------------------------------------------------------------------

    \

        public interface OnBeaconsReadyListener

    Created by JSM on 13/02/15.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `onBeaconsReady(java.util.List<MP |
        |                                   | Beacon> beacons)`                 |
        |                                   | On beacons ready.                 |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### onBeaconsReady

                void onBeaconsReady(java.util.List<MPBeacon> beacons)

            On beacons ready.

            [Parameters:]{.paramLabel}
            :   `beacons` - the beacons

com.mapspeople.position

Interface OnPositionUpdateListener {#interface-onpositionupdatelistener .title title="Interface OnPositionUpdateListener"}
----------------------------------

-   

    All Known Implementing Classes:
    :   RoutingControl

    ------------------------------------------------------------------------

    \

        public interface OnPositionUpdateListener

    The interface On position update listener.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `onPositionFailed(PositionProvide |
        |                                   | r provider)`                      |
        |                                   | On position failed.               |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `onPositioningStarted(PositionPro |
        |                                   | vider provider)`                  |
        |                                   | On positioning started.           |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `onPositionUpdate(PositionResult  |
        |                                   | pos)`                             |
        |                                   | On position update.               |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### onPositionUpdate

                void onPositionUpdate(PositionResult pos)

            On position update.

            [Parameters:]{.paramLabel}
            :   `pos` - the pos

        &nbsp;
        -   #### onPositionFailed

                void onPositionFailed(PositionProvider provider)

            On position failed.

            [Parameters:]{.paramLabel}
            :   `provider` - the provider

        &nbsp;
        -   #### onPositioningStarted

                void onPositioningStarted(PositionProvider provider)

            On positioning started.

            [Parameters:]{.paramLabel}
            :   `provider` - the provider

com.mapspeople.position

Class PointXY {#class-pointxy .title title="Class PointXY"}
-------------

-   java.lang.Object
-   -   com.mapspeople.position.PointXY

-   

    ------------------------------------------------------------------------

    \

        public class PointXYextends java.lang.Object

    Created by mh on 06-05-2015.

-   -   ### Field Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `static Point`                    | `getRefPoint()`                   |
        |                                   | Gets ref point.                   |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Field Detail

        -   #### X

                public double X

            The X.

        &nbsp;
        -   #### Y

                public double Y

            The Y.

        &nbsp;
        -   #### distance

                public double distance

            The Distance.

        &nbsp;
        -   #### latlng

                public Point latlng

            The Latlng.

    &nbsp;
    -   ### Constructor Detail

        -   #### PointXY

                public PointXY()

            Instantiates a new Point xy.

        &nbsp;
        -   #### PointXY

                public PointXY(Point coord,               double dist)

            Instantiates a new Point xy.

            [Parameters:]{.paramLabel}
            :   `coord` - the coord
            :   `dist` - the dist

    &nbsp;
    -   ### Method Detail

        -   #### getRefPoint

                public static Point getRefPoint()

            Gets ref point.

            [Returns:]{.returnLabel}
            :   the ref point

com.mapspeople.position

Class PositionCalculator {#class-positioncalculator .title title="Class PositionCalculator"}
------------------------

-   java.lang.Object
-   -   com.mapspeople.position.PositionCalculator

-   

    ------------------------------------------------------------------------

    \

        public class PositionCalculatorextends java.lang.Object

    Created by JSM on 03/03/15.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `Point`                           | `calcLatLngPos(java.util.List<Poi |
        |                                   | ntXY> measurements,             b |
        |                                   | oolean trilateration)`            |
        |                                   | Calc lat lng pos point.           |
        +-----------------------------------+-----------------------------------+
        | `double`                          | `convertRSSItoMeter(double RSSI,  |
        |                                   |                  double A)`       |
        |                                   | Convert rss ito meter double.     |
        +-----------------------------------+-----------------------------------+
        | `double`                          | `distanceBetween(PointXY p1,      |
        |                                   |           PointXY p2)`            |
        |                                   | Distance between double.          |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### PositionCalculator

                public PositionCalculator()

    &nbsp;
    -   ### Method Detail

        -   #### convertRSSItoMeter

                public double convertRSSItoMeter(double RSSI,                                 double A)

            Convert rss ito meter double.

            [Parameters:]{.paramLabel}
            :   `RSSI` - the rssi
            :   `A` - the a

            [Returns:]{.returnLabel}
            :   the double

        &nbsp;
        -   #### calcLatLngPos

                public Point calcLatLngPos(java.util.List<PointXY> measurements,                           boolean trilateration)

            Calc lat lng pos point.

            [Parameters:]{.paramLabel}
            :   `measurements` - the measurements
            :   `trilateration` - the trilateration

            [Returns:]{.returnLabel}
            :   the point

        &nbsp;
        -   #### distanceBetween

                public double distanceBetween(PointXY p1,                              PointXY p2)

            Distance between double.

            [Parameters:]{.paramLabel}
            :   `p1` - the p 1
            :   `p2` - the p 2

            [Returns:]{.returnLabel}
            :   the double

com.mapspeople.position

Interface PositionProvider {#interface-positionprovider .title title="Interface PositionProvider"}
--------------------------

-   

    All Known Subinterfaces:
    :   IndoorPositionProvider

    ------------------------------------------------------------------------

    \

        public interface PositionProvider

    The interface Position provider.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `addOnPositionUpdateListener(OnPo |
        |                                   | sitionUpdateListener listener)`   |
        |                                   | Add on position update listener.  |
        +-----------------------------------+-----------------------------------+
        | `PositionResult`                  | `getLatestPosition()`             |
        |                                   | Gets latest position.             |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getProviderId()`                 |
        |                                   | Gets provider id.                 |
        +-----------------------------------+-----------------------------------+
        | `boolean`                         | `isRunning()`                     |
        |                                   | Is running boolean.               |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setProviderId(java.lang.String i |
        |                                   | d)`                               |
        |                                   | Sets provider id.                 |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `startPositioning(java.lang.Strin |
        |                                   | g arg)`                           |
        |                                   | Start positioning.                |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `startPositioningAfter(int millis |
        |                                   | ,                     java.lang.S |
        |                                   | tring arg)`                       |
        |                                   | Start positioning after.          |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `stopPositioning(java.lang.String |
        |                                   |  arg)`                            |
        |                                   | Stop positioning.                 |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### startPositioning

                void startPositioning(java.lang.String arg)

            Start positioning.

            [Parameters:]{.paramLabel}
            :   `arg` - the arg

        &nbsp;
        -   #### stopPositioning

                void stopPositioning(java.lang.String arg)

            Stop positioning.

            [Parameters:]{.paramLabel}
            :   `arg` - the arg

        &nbsp;
        -   #### isRunning

                boolean isRunning()

            Is running boolean.

            [Returns:]{.returnLabel}
            :   the boolean

        &nbsp;
        -   #### addOnPositionUpdateListener

                void addOnPositionUpdateListener(OnPositionUpdateListener listener)

            Add on position update listener.

            [Parameters:]{.paramLabel}
            :   `listener` - the listener

        &nbsp;
        -   #### setProviderId

                void setProviderId(java.lang.String id)

            Sets provider id.

            [Parameters:]{.paramLabel}
            :   `id` - the id

        &nbsp;
        -   #### getProviderId

                java.lang.String getProviderId()

            Gets provider id.

            [Returns:]{.returnLabel}
            :   the provider id

        &nbsp;
        -   #### getLatestPosition

                PositionResult getLatestPosition()

            Gets latest position.

            [Returns:]{.returnLabel}
            :   the latest position

        &nbsp;
        -   #### startPositioningAfter

                void startPositioningAfter(int millis,                           java.lang.String arg)

            Start positioning after.

            [Parameters:]{.paramLabel}
            :   `millis` - the millis
            :   `arg` - the arg

com.mapspeople.position

Interface PositionResult {#interface-positionresult .title title="Interface PositionResult"}
------------------------

-   

    All Known Implementing Classes:
    :   MPPositionResult

    ------------------------------------------------------------------------

    \

        public interface PositionResult

    The interface Position result.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `float`                           | `getAge()`                        |
        |                                   | Gets age.                         |
        +-----------------------------------+-----------------------------------+
        | `int`                             | `getFloor()`                      |
        |                                   | Gets floor.                       |
        +-----------------------------------+-----------------------------------+
        | `double`                          | `getHeadingDegrees()`             |
        |                                   | Gets heading degrees.             |
        +-----------------------------------+-----------------------------------+
        | `Point`                           | `getPoint()`                      |
        |                                   | Gets point.                       |
        +-----------------------------------+-----------------------------------+
        | `double`                          | `getProbability()`                |
        |                                   | Gets probability.                 |
        +-----------------------------------+-----------------------------------+
        | `PositionProvider`                | `getProvider()`                   |
        |                                   | Gets provider.                    |
        +-----------------------------------+-----------------------------------+
        | `double`                          | `getRoundtrip()`                  |
        |                                   | Gets roundtrip.                   |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getStatus()`                     |
        |                                   | Gets status.                      |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setProvider(PositionProvider pro |
        |                                   | vider)`                           |
        |                                   | Sets provider.                    |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### getRoundtrip

                double getRoundtrip()

            Gets roundtrip.

            [Returns:]{.returnLabel}
            :   the roundtrip

        &nbsp;
        -   #### getPoint

                Point getPoint()

            Gets point.

            [Returns:]{.returnLabel}
            :   the point

        &nbsp;
        -   #### getHeadingDegrees

                double getHeadingDegrees()

            Gets heading degrees.

            [Returns:]{.returnLabel}
            :   the heading degrees

        &nbsp;
        -   #### getProbability

                double getProbability()

            Gets probability.

            [Returns:]{.returnLabel}
            :   the probability

        &nbsp;
        -   #### getStatus

                java.lang.String getStatus()

            Gets status.

            [Returns:]{.returnLabel}
            :   the status

        &nbsp;
        -   #### getProvider

                PositionProvider getProvider()

            Gets provider.

            [Returns:]{.returnLabel}
            :   the provider

        &nbsp;
        -   #### getAge

                float getAge()

            Gets age.

            [Returns:]{.returnLabel}
            :   the age

        &nbsp;
        -   #### getFloor

                int getFloor()

            Gets floor.

            [Returns:]{.returnLabel}
            :   the floor

        &nbsp;
        -   #### setProvider

                void setProvider(PositionProvider provider)

            Sets provider.

            [Parameters:]{.paramLabel}
            :   `provider` - the provider

com.mapspeople.position

Class PositionTechnologies {#class-positiontechnologies .title title="Class PositionTechnologies"}
--------------------------

-   java.lang.Object
-   -   java.util.AbstractCollection&lt;E&gt;
    -   -   java.util.AbstractList&lt;E&gt;
        -   -   java.util.ArrayList&lt;java.lang.Integer&gt;
            -   -   com.mapspeople.position.PositionTechnologies

-   

    All Implemented Interfaces:
    :   java.io.Serializable, java.lang.Cloneable,
        java.lang.Iterable&lt;java.lang.Integer&gt;,
        java.util.Collection&lt;java.lang.Integer&gt;,
        java.util.List&lt;java.lang.Integer&gt;, java.util.RandomAccess

    ------------------------------------------------------------------------

    \

        public class PositionTechnologiesextends java.util.ArrayList<java.lang.Integer>

    The type Position technologies.

    [See Also:]{.seeLabel}
    :   Serialized Form

-   -   ### Field Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `boolean`                         | `useTechology(int technology)`    |
        |                                   | Use techology boolean.            |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.util.ArrayList

            `add, add, addAll, addAll, clear, clone, contains, ensureCapacity, forEach, get, indexOf, isEmpty, iterator, lastIndexOf, listIterator, listIterator, remove, remove, removeAll, removeIf, replaceAll, retainAll, set, size, sort, spliterator, subList, toArray, toArray, trimToSize`

        &nbsp;
        -   ### Methods inherited from class java.util.AbstractList

            `equals, hashCode`

        &nbsp;
        -   ### Methods inherited from class java.util.AbstractCollection

            `containsAll, toString`

        &nbsp;
        -   ### Methods inherited from class java.lang.Object

            `getClass, notify, notifyAll, wait, wait, wait`

        &nbsp;
        -   ### Methods inherited from interface java.util.List

            `containsAll, equals, hashCode`

        &nbsp;
        -   ### Methods inherited from interface java.util.Collection

            `parallelStream, stream`

-   -   ### Field Detail

        -   #### WIFI

                public static final int WIFI

            The constant WIFI.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### MAGNETIC

                public static final int MAGNETIC

            The constant MAGNETIC.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### GPS

                public static final int GPS

            The constant GPS.

            [See Also:]{.seeLabel}
            :   Constant Field Values

    &nbsp;
    -   ### Constructor Detail

        -   #### PositionTechnologies

                public PositionTechnologies()

    &nbsp;
    -   ### Method Detail

        -   #### useTechology

                public boolean useTechology(int technology)

            Use techology boolean.

            [Parameters:]{.paramLabel}
            :   `technology` - the technology

            [Returns:]{.returnLabel}
            :   the boolean

routing
=======

com.mapspeople.routing

Interface DirectionsRenderer {#interface-directionsrenderer .title title="Interface DirectionsRenderer"}
----------------------------

-   

    All Known Implementing Classes:
    :   MPDirectionsRenderer

    ------------------------------------------------------------------------

    \

        public interface DirectionsRenderer

    Created on 07/04/15.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `animate(int millis)`             |
        |                                   | Animate.                          |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `clear()`                         |
        |                                   | Clear.                            |
        +-----------------------------------+-----------------------------------+
        | `int`                             | `getLegFloor()`                   |
        |                                   | Gets leg floor.                   |
        +-----------------------------------+-----------------------------------+
        | `boolean`                         | `nextLeg()`                       |
        |                                   | Next leg boolean.                 |
        +-----------------------------------+-----------------------------------+
        | `boolean`                         | `previousLeg()`                   |
        |                                   | Previous leg boolean.             |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setAccentColor(int color)`       |
        |                                   | Sets accent color.                |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setAlpha(int alpha)`             |
        |                                   | Sets alpha.                       |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setMap(GoogleMap map)`           |
        |                                   | Sets map.                         |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setPrimaryColor(int color)`      |
        |                                   | Sets primary color.               |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setRoute(Route route)`           |
        |                                   | Sets route.                       |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setRouteLegIndex(int index)`     |
        |                                   | Sets route leg index.             |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setTextColor(int color)`         |
        |                                   | Sets text color.                  |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### setMap

                void setMap(GoogleMap map)

            Sets map.

            [Parameters:]{.paramLabel}
            :   `map` - the map

        &nbsp;
        -   #### animate

                void animate(int millis)

            Animate.

            [Parameters:]{.paramLabel}
            :   `millis` - the millis

        &nbsp;
        -   #### setRoute

                void setRoute(Route route)

            Sets route.

            [Parameters:]{.paramLabel}
            :   `route` - the route

        &nbsp;
        -   #### setRouteLegIndex

                void setRouteLegIndex(int index)

            Sets route leg index.

            [Parameters:]{.paramLabel}
            :   `index` - the index

        &nbsp;
        -   #### clear

                void clear()

            Clear.

        &nbsp;
        -   #### setPrimaryColor

                void setPrimaryColor(int color)

            Sets primary color.

            [Parameters:]{.paramLabel}
            :   `color` - the color

        &nbsp;
        -   #### setAccentColor

                void setAccentColor(int color)

            Sets accent color.

            [Parameters:]{.paramLabel}
            :   `color` - the color

        &nbsp;
        -   #### setTextColor

                void setTextColor(int color)

            Sets text color.

            [Parameters:]{.paramLabel}
            :   `color` - the color

        &nbsp;
        -   #### setAlpha

                void setAlpha(int alpha)

            Sets alpha.

            [Parameters:]{.paramLabel}
            :   `alpha` - the alpha

        &nbsp;
        -   #### nextLeg

                boolean nextLeg()

            Next leg boolean.

            [Returns:]{.returnLabel}
            :   the boolean

        &nbsp;
        -   #### previousLeg

                boolean previousLeg()

            Previous leg boolean.

            [Returns:]{.returnLabel}
            :   the boolean

        &nbsp;
        -   #### getLegFloor

                int getLegFloor()

            Gets leg floor.

            [Returns:]{.returnLabel}
            :   the leg floor

com.mapspeople.routing

Class DistanceMatrixResponse.Element {#class-distancematrixresponse.element .title title="Class DistanceMatrixResponse.Element"}
------------------------------------

-   java.lang.Object
-   -   com.mapspeople.routing.DistanceMatrixResponse.Element

-   

    Enclosing class:
    :   DistanceMatrixResponse

    ------------------------------------------------------------------------

    \

        public class DistanceMatrixResponse.Elementextends java.lang.Object

    The type Element.

-   -   ### Field Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `java.lang.Double`                | `getDistance()`                   |
        |                                   | Gets distance.                    |
        +-----------------------------------+-----------------------------------+
        | `java.lang.Double`                | `getDuration()`                   |
        |                                   | Gets duration.                    |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getStatus()`                     |
        |                                   | Gets status.                      |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Field Detail

        -   #### distance

                public DistanceMatrixResponse.TextPair distance

            The Distance.

        &nbsp;
        -   #### duration

                public DistanceMatrixResponse.TextPair duration

            The Duration.

        &nbsp;
        -   #### status

                public java.lang.String status

            The Status.

    &nbsp;
    -   ### Constructor Detail

        -   #### Element

                public Element()

    &nbsp;
    -   ### Method Detail

        -   #### getDistance

                public java.lang.Double getDistance()

            Gets distance.

            [Returns:]{.returnLabel}
            :   the distance

        &nbsp;
        -   #### getDuration

                public java.lang.Double getDuration()

            Gets duration.

            [Returns:]{.returnLabel}
            :   the duration

        &nbsp;
        -   #### getStatus

                public java.lang.String getStatus()

            Gets status.

            [Returns:]{.returnLabel}
            :   the status

com.mapspeople.routing

Class DistanceMatrixResponse.Row {#class-distancematrixresponse.row .title title="Class DistanceMatrixResponse.Row"}
--------------------------------

-   java.lang.Object
-   -   com.mapspeople.routing.DistanceMatrixResponse.Row

-   

    Enclosing class:
    :   DistanceMatrixResponse

    ------------------------------------------------------------------------

    \

        public class DistanceMatrixResponse.Rowextends java.lang.Object

    The type Row.

-   -   ### Field Summary

          Constructor and Description
          -----------------------------
          `Row()` 

    &nbsp;
    -   ### Method Summary

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Field Detail

        -   #### elements

                public java.util.List<DistanceMatrixResponse.Element> elements

            The Elements.

    &nbsp;
    -   ### Constructor Detail

        -   #### Row

                public Row()

com.mapspeople.routing

Class DistanceMatrixResponse.TextPair {#class-distancematrixresponse.textpair .title title="Class DistanceMatrixResponse.TextPair"}
-------------------------------------

-   java.lang.Object
-   -   com.mapspeople.routing.DistanceMatrixResponse.TextPair

-   

    Enclosing class:
    :   DistanceMatrixResponse

    ------------------------------------------------------------------------

    \

        public class DistanceMatrixResponse.TextPairextends java.lang.Object

    The type Text pair.

-   -   ### Field Summary

          Constructor and Description
          -----------------------------
          `TextPair()` 

    &nbsp;
    -   ### Method Summary

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Field Detail

        -   #### text

                public java.lang.String text

            The Text.

        &nbsp;
        -   #### value

                public java.lang.String value

            The Value.

    &nbsp;
    -   ### Constructor Detail

        -   #### TextPair

                public TextPair()

com.mapspeople.routing

Class DistanceMatrixResponse {#class-distancematrixresponse .title title="Class DistanceMatrixResponse"}
----------------------------

-   java.lang.Object
-   -   com.mapspeople.routing.DistanceMatrixResponse

-   

    ------------------------------------------------------------------------

    \

        public class DistanceMatrixResponseextends java.lang.Object

    The type Distance matrix response.

-   -   ### Nested Class Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `java.util.List<java.lang.String> | `getDestinations()`               |
        | `                                 | Gets destinations.                |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<java.lang.String> | `getOrigins()`                    |
        | `                                 | Gets origins.                     |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getStatus()`                     |
        |                                   | Gets status.                      |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Field Detail

        -   #### destination\_addresses

                public java.util.List<java.lang.String> destination_addresses

            The Destination addresses.

        &nbsp;
        -   #### origin\_addresses

                public java.util.List<java.lang.String> origin_addresses

            The Origin addresses.

        &nbsp;
        -   #### rows

                public java.util.List<DistanceMatrixResponse.Row> rows

            The Rows.

        &nbsp;
        -   #### status

                public java.lang.String status

            The Status.

    &nbsp;
    -   ### Constructor Detail

        -   #### DistanceMatrixResponse

                public DistanceMatrixResponse()

    &nbsp;
    -   ### Method Detail

        -   #### getDestinations

                public java.util.List<java.lang.String> getDestinations()

            Gets destinations.

            [Returns:]{.returnLabel}
            :   the destinations

        &nbsp;
        -   #### getOrigins

                public java.util.List<java.lang.String> getOrigins()

            Gets origins.

            [Returns:]{.returnLabel}
            :   the origins

        &nbsp;
        -   #### getStatus

                public java.lang.String getStatus()

            Gets status.

            [Returns:]{.returnLabel}
            :   the status

com.mapspeople.routing

Class GeocodedWaypoints {#class-geocodedwaypoints .title title="Class GeocodedWaypoints"}
-----------------------

-   java.lang.Object
-   -   com.mapspeople.routing.GeocodedWaypoints

-   

    ------------------------------------------------------------------------

    \

        public class GeocodedWaypointsextends java.lang.Object

    The type Geocoded waypoints.

-   -   ### Constructor Summary

          Constructor and Description
          -----------------------------
          `GeocodedWaypoints()` 

    &nbsp;
    -   ### Method Summary

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### GeocodedWaypoints

                public GeocodedWaypoints()

com.mapspeople.routing

Class MPDirectionsRenderer {#class-mpdirectionsrenderer .title title="Class MPDirectionsRenderer"}
--------------------------

-   java.lang.Object
-   -   com.mapspeople.routing.MPDirectionsRenderer

-   

    All Implemented Interfaces:
    :   android.animation.ValueAnimator.AnimatorUpdateListener,
        DirectionsRenderer

    ------------------------------------------------------------------------

    \

        public class MPDirectionsRendererextends java.lang.Objectimplements DirectionsRenderer, android.animation.ValueAnimator.AnimatorUpdateListener

    Created by mh on 05-10-2015. Based on Google's direction renderer:
    https://developers.google.com/maps/documentation/javascript/reference\#DirectionsRenderer

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `animate(int millis)`             |
        |                                   | Animate.                          |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `clear()`                         |
        |                                   | Clear.                            |
        +-----------------------------------+-----------------------------------+
        | `int`                             | `getCurrentFloor()`               |
        |                                   | Gets current floor.               |
        +-----------------------------------+-----------------------------------+
        | `int`                             | `getLegFloor()`                   |
        |                                   | Gets leg floor.                   |
        +-----------------------------------+-----------------------------------+
        | `boolean`                         | `nextLeg()`                       |
        |                                   | Next leg boolean.                 |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `onAnimationUpdate(android.animat |
        |                                   | ion.ValueAnimator animation)`     |
        |                                   | On animation update.              |
        +-----------------------------------+-----------------------------------+
        | `boolean`                         | `previousLeg()`                   |
        |                                   | Previous leg boolean.             |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setAccentColor(int accentColor)` |
        |                                   | Sets accent color.                |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setAlpha(int alpha)`             |
        |                                   | Sets alpha.                       |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setMap(GoogleMap map)`           |
        |                                   | Sets map.                         |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setPrimaryColor(int primaryColor |
        |                                   | )`                                |
        |                                   | Sets primary color.               |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setRoute(Route route)`           |
        |                                   | Sets route.                       |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setRouteLegIndex(int index)`     |
        |                                   | Sets route leg index.             |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setTextColor(int textColor)`     |
        |                                   | Sets text color.                  |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### MPDirectionsRenderer

                public MPDirectionsRenderer(android.content.Context context,                            OnLegSelectedListener legSelectedListener)

            Instantiates a new Mp directions renderer.

            [Parameters:]{.paramLabel}
            :   `context` - the context
            :   `legSelectedListener` - the leg selected listener

    &nbsp;
    -   ### Method Detail

        -   #### setPrimaryColor

                public void setPrimaryColor(int primaryColor)

            Sets primary color.

            [Specified by:]{.overrideSpecifyLabel}
            :   `setPrimaryColor` in interface `DirectionsRenderer`

            [Parameters:]{.paramLabel}
            :   `primaryColor` - the primary color

        &nbsp;
        -   #### setAccentColor

                public void setAccentColor(int accentColor)

            Sets accent color.

            [Specified by:]{.overrideSpecifyLabel}
            :   `setAccentColor` in interface `DirectionsRenderer`

            [Parameters:]{.paramLabel}
            :   `accentColor` - the accent color

        &nbsp;
        -   #### setTextColor

                public void setTextColor(int textColor)

            Sets text color.

            [Specified by:]{.overrideSpecifyLabel}
            :   `setTextColor` in interface `DirectionsRenderer`

            [Parameters:]{.paramLabel}
            :   `textColor` - the text color

        &nbsp;
        -   #### setMap

                public void setMap(GoogleMap map)

            Sets map.

            [Specified by:]{.overrideSpecifyLabel}
            :   `setMap` in interface `DirectionsRenderer`

            [Parameters:]{.paramLabel}
            :   `map` - the map

        &nbsp;
        -   #### animate

                public void animate(int millis)

            Animate.

            [Specified by:]{.overrideSpecifyLabel}
            :   `animate` in interface `DirectionsRenderer`

            [Parameters:]{.paramLabel}
            :   `millis` - the millis

        &nbsp;
        -   #### onAnimationUpdate

                public void onAnimationUpdate(android.animation.ValueAnimator animation)

            On animation update.

            [Specified by:]{.overrideSpecifyLabel}
            :   `onAnimationUpdate` in
                interface `android.animation.ValueAnimator.AnimatorUpdateListener`

            [Parameters:]{.paramLabel}
            :   `animation` - the animation

        &nbsp;
        -   #### setRoute

                public void setRoute(Route route)

            Sets route.

            [Specified by:]{.overrideSpecifyLabel}
            :   `setRoute` in interface `DirectionsRenderer`

            [Parameters:]{.paramLabel}
            :   `route` - the route

        &nbsp;
        -   #### setRouteLegIndex

                public void setRouteLegIndex(int index)

            Sets route leg index.

            [Specified by:]{.overrideSpecifyLabel}
            :   `setRouteLegIndex` in interface `DirectionsRenderer`

            [Parameters:]{.paramLabel}
            :   `index` - the index

        &nbsp;
        -   #### clear

                public void clear()

            Clear.

            [Specified by:]{.overrideSpecifyLabel}
            :   `clear` in interface `DirectionsRenderer`

        &nbsp;
        -   #### setAlpha

                public void setAlpha(int alpha)

            Sets alpha.

            [Specified by:]{.overrideSpecifyLabel}
            :   `setAlpha` in interface `DirectionsRenderer`

            [Parameters:]{.paramLabel}
            :   `alpha` - the alpha

        &nbsp;
        -   #### getCurrentFloor

                public int getCurrentFloor()

            Gets current floor.

            [Returns:]{.returnLabel}
            :   the current floor

        &nbsp;
        -   #### nextLeg

                public boolean nextLeg()

            Next leg boolean.

            [Specified by:]{.overrideSpecifyLabel}
            :   `nextLeg` in interface `DirectionsRenderer`

            [Returns:]{.returnLabel}
            :   the boolean

        &nbsp;
        -   #### previousLeg

                public boolean previousLeg()

            Previous leg boolean.

            [Specified by:]{.overrideSpecifyLabel}
            :   `previousLeg` in interface `DirectionsRenderer`

            [Returns:]{.returnLabel}
            :   the boolean

        &nbsp;
        -   #### getLegFloor

                public int getLegFloor()

            Gets leg floor.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getLegFloor` in interface `DirectionsRenderer`

            [Returns:]{.returnLabel}
            :   the leg floor

com.mapspeople.routing

Class MPRoutingProvider.MPRoutingQuery {#class-mproutingprovider.mproutingquery .title title="Class MPRoutingProvider.MPRoutingQuery"}
--------------------------------------

-   java.lang.Object
-   -   com.mapspeople.routing.MPRoutingProvider.MPRoutingQuery

-   

    Enclosing class:
    :   MPRoutingProvider

    ------------------------------------------------------------------------

    \

        public class MPRoutingProvider.MPRoutingQueryextends java.lang.Object

    The type Mp routing query.

-   -   ### Field Summary

        +-----------------------------------------------------------------------+
        | Constructor and Description                                           |
        +=======================================================================+
        | `MPRoutingQuery(Route result,              Point from,              P |
        | oint to)`                                                             |
        | Instantiates a new Mp routing query.                                  |
        +-----------------------------------------------------------------------+

    &nbsp;
    -   ### Method Summary

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Field Detail

        -   #### routeResult

                public final Route routeResult

            The Route result.

        &nbsp;
        -   #### from

                public final Point from

            The From.

        &nbsp;
        -   #### to

                public final Point to

            The To.

    &nbsp;
    -   ### Constructor Detail

        -   #### MPRoutingQuery

                public MPRoutingQuery(Route result,                      Point from,                      Point to)

            Instantiates a new Mp routing query.

            [Parameters:]{.paramLabel}
            :   `result` - the result
            :   `from` - the from
            :   `to` - the to

com.mapspeople.routing

Class MPRoutingProvider {#class-mproutingprovider .title title="Class MPRoutingProvider"}
-----------------------

-   java.lang.Object
-   -   com.mapspeople.routing.MPRoutingProvider

-   

    All Implemented Interfaces:
    :   RoutingProvider

    ------------------------------------------------------------------------

    \

        public class MPRoutingProviderextends java.lang.Objectimplements RoutingProvider

    The type Mp routing provider.

-   -   ### Nested Class Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `addRouteRestriction(java.lang.St |
        |                                   | ring restriction)`                |
        |                                   | Add route restriction.            |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `clearRouteRestrictions()`        |
        |                                   | Clear route restrictions.         |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `query(Point from,     Point to)` |
        |                                   | Query.                            |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `queryMultipleDestinations(Point  |
        |                                   | from,                         jav |
        |                                   | a.util.List<Point> destinations)` |
        |                                   | Query multiple destinations.      |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setDateTime(java.util.Calendar d |
        |                                   | ate,           boolean isDepartur |
        |                                   | e)`                               |
        |                                   | Sets date time.                   |
        +-----------------------------------+-----------------------------------+
        | `static void`                     | `setGoogleForWorkKey(java.lang.St |
        |                                   | ring clientId,                    |
        |                                   | java.lang.String key)`            |
        |                                   | Add your own Google Maps server   |
        |                                   | clientId and Key here.            |
        +-----------------------------------+-----------------------------------+
        | `static void`                     | `setGoogleServerKey(java.lang.Str |
        |                                   | ing key)`                         |
        |                                   | Add your own Google Maps server   |
        |                                   | API key here.                     |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOnRouteResultListener(OnRoute |
        |                                   | ResultListener listener)`         |
        |                                   | Sets on route result listener.    |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setTravelMode(java.lang.String m |
        |                                   | ode)`                             |
        |                                   | Sets travel mode.                 |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `storeRoute(MPRoutingProvider.MPR |
        |                                   | outingQuery route)`               |
        |                                   | Store route.                      |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### MPRoutingProvider

                public MPRoutingProvider()

            Instantiates a new Mp routing provider.

    &nbsp;
    -   ### Method Detail

        -   #### setOnRouteResultListener

                public void setOnRouteResultListener(OnRouteResultListener listener)

            Sets on route result listener.

            [Specified by:]{.overrideSpecifyLabel}
            :   `setOnRouteResultListener` in
                interface `RoutingProvider`

            [Parameters:]{.paramLabel}
            :   `listener` - the listener

        &nbsp;
        -   #### query

                public void query(Point from,                  Point to)

            Query.

            [Specified by:]{.overrideSpecifyLabel}
            :   `query` in interface `RoutingProvider`

            [Parameters:]{.paramLabel}
            :   `from` - the from
            :   `to` - the to

        &nbsp;
        -   #### setGoogleServerKey

                public static void setGoogleServerKey(java.lang.String key)

            Add your own Google Maps server API key here. Fast recap: Go
            to console.developers.google.com, log in and select 'APIs &
            auth', 'Credentials'. Press 'Add credentals', select 'API
            key' and then 'Server key'. Now you will get a new API key.
            Finally copy that key here. For more info see:
            https://developers.google.com/maps/documentation/directions/get-api-key

            [Parameters:]{.paramLabel}
            :   `key` - Your Google Maps server API key

        &nbsp;
        -   #### setGoogleForWorkKey

                public static void setGoogleForWorkKey(java.lang.String clientId,                                       java.lang.String key)

            Add your own Google Maps server clientId and Key here. This
            only applies for customers with a Google licence.

            [Parameters:]{.paramLabel}
            :   `clientId` - Your Google client id.
            :   `key` - Your private cryptographic key from Google.

        &nbsp;
        -   #### queryMultipleDestinations

                public void queryMultipleDestinations(Point from,                                      java.util.List<Point> destinations)

            Query multiple destinations.

            [Specified by:]{.overrideSpecifyLabel}
            :   `queryMultipleDestinations` in
                interface `RoutingProvider`

            [Parameters:]{.paramLabel}
            :   `from` - the from
            :   `destinations` - the destinations

        &nbsp;
        -   #### setTravelMode

                public void setTravelMode(java.lang.String mode)

            Sets travel mode.

            [Specified by:]{.overrideSpecifyLabel}
            :   `setTravelMode` in interface `RoutingProvider`

            [Parameters:]{.paramLabel}
            :   `mode` - the mode

        &nbsp;
        -   #### addRouteRestriction

                public void addRouteRestriction(java.lang.String restriction)

            Add route restriction.

            [Specified by:]{.overrideSpecifyLabel}
            :   `addRouteRestriction` in interface `RoutingProvider`

            [Parameters:]{.paramLabel}
            :   `restriction` - the restriction

        &nbsp;
        -   #### clearRouteRestrictions

                public void clearRouteRestrictions()

            Clear route restrictions.

            [Specified by:]{.overrideSpecifyLabel}
            :   `clearRouteRestrictions` in interface `RoutingProvider`

        &nbsp;
        -   #### setDateTime

                public void setDateTime(java.util.Calendar date,                        boolean isDeparture)

            Sets date time.

            [Specified by:]{.overrideSpecifyLabel}
            :   `setDateTime` in interface `RoutingProvider`

            [Parameters:]{.paramLabel}
            :   `date` - the date
            :   `isDeparture` - the is departure

        &nbsp;
        -   #### storeRoute

                public void storeRoute(MPRoutingProvider.MPRoutingQuery route)

            Store route.

            [Parameters:]{.paramLabel}
            :   `route` - the route

com.mapspeople.routing

Class MPRoutingProviderInternal.MPRoutingQuery {#class-mproutingproviderinternal.mproutingquery .title title="Class MPRoutingProviderInternal.MPRoutingQuery"}
----------------------------------------------

-   java.lang.Object
-   -   com.mapspeople.routing.MPRoutingProviderInternal.MPRoutingQuery

-   

    Enclosing class:
    :   MPRoutingProviderInternal

    ------------------------------------------------------------------------

    \

        public class MPRoutingProviderInternal.MPRoutingQueryextends java.lang.Object

    The type Mp routing query.

-   -   ### Field Summary

        +-----------------------------------------------------------------------+
        | Constructor and Description                                           |
        +=======================================================================+
        | `MPRoutingQuery(RouteResult result,              Point from,          |
        |      Point to)`                                                       |
        | Instantiates a new Mp routing query.                                  |
        +-----------------------------------------------------------------------+

    &nbsp;
    -   ### Method Summary

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Field Detail

        -   #### routeResult

                public final RouteResult routeResult

            The Route result.

        &nbsp;
        -   #### from

                public final Point from

            The From.

        &nbsp;
        -   #### to

                public final Point to

            The To.

    &nbsp;
    -   ### Constructor Detail

        -   #### MPRoutingQuery

                public MPRoutingQuery(RouteResult result,                      Point from,                      Point to)

            Instantiates a new Mp routing query.

            [Parameters:]{.paramLabel}
            :   `result` - the result
            :   `from` - the from
            :   `to` - the to

com.mapspeople.routing

Class MPRoutingProviderInternal {#class-mproutingproviderinternal .title title="Class MPRoutingProviderInternal"}
-------------------------------

-   java.lang.Object
-   -   com.mapspeople.routing.MPRoutingProviderInternal

-   

    All Implemented Interfaces:
    :   RoutingProviderInternal

    ------------------------------------------------------------------------

    \

        public class MPRoutingProviderInternalextends java.lang.Objectimplements RoutingProviderInternal

    The type Mp routing provider internal.

-   -   ### Nested Class Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `addRouteRestriction(java.lang.St |
        |                                   | ring restriction)`                |
        |                                   | Add route restriction.            |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `clearRouteRestrictions()`        |
        |                                   | Clear route restrictions.         |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `contains(java.util.List<Point> p |
        |                                   | oints)`                           |
        |                                   | Contains.                         |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `getMatrix(java.lang.String venue |
        |                                   | ,         java.util.List<Point> o |
        |                                   | rigins,         java.util.List<Po |
        |                                   | int> destinations,         java.l |
        |                                   | ang.String graphId)`              |
        |                                   | Gets matrix.                      |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `getMatrixExternal(java.util.List |
        |                                   | <Point> origins,                  |
        |                                   | java.util.List<Point> destination |
        |                                   | s)`                               |
        |                                   | Gets matrix external.             |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `query(Point from,     Point to,  |
        |                                   |     java.lang.String graphId)`    |
        |                                   | Query.                            |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `queryMultipleDestinations(Point  |
        |                                   | from,                         jav |
        |                                   | a.util.List<Point> destinations)` |
        |                                   | Query multiple destinations.      |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setDateTime(java.util.Calendar d |
        |                                   | ate,           boolean isDepartur |
        |                                   | e)`                               |
        |                                   | Sets date time.                   |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOnContainsResultListener(OnDi |
        |                                   | rectionContainsResultListener lis |
        |                                   | tener)`                           |
        |                                   | Sets on contains result listener. |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOnDirectionMatrixResultListen |
        |                                   | er(OnDirectionMatrixResultListene |
        |                                   | r listener)`                      |
        |                                   | Sets on direction matrix result   |
        |                                   | listener.                         |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOnRouteResultListener(OnRoute |
        |                                   | ResultListener listener)`         |
        |                                   | Sets on route result listener.    |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setTravelMode(java.lang.String m |
        |                                   | ode)`                             |
        |                                   | Sets travel mode.                 |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `storeRoute(MPRoutingProviderInte |
        |                                   | rnal.MPRoutingQuery route)`       |
        |                                   | Store route.                      |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### MPRoutingProviderInternal

                public MPRoutingProviderInternal(java.lang.String clientId,                                 java.lang.String key)

            Instantiates a new Mp routing provider internal.

            [Parameters:]{.paramLabel}
            :   `clientId` - the client id
            :   `key` - the key

    &nbsp;
    -   ### Method Detail

        -   #### setOnRouteResultListener

                public void setOnRouteResultListener(OnRouteResultListener listener)

            Sets on route result listener.

            [Specified by:]{.overrideSpecifyLabel}
            :   `setOnRouteResultListener` in
                interface `RoutingProviderInternal`

            [Parameters:]{.paramLabel}
            :   `listener` - the listener

        &nbsp;
        -   #### setOnContainsResultListener

                public void setOnContainsResultListener(OnDirectionContainsResultListener listener)

            Sets on contains result listener.

            [Specified by:]{.overrideSpecifyLabel}
            :   `setOnContainsResultListener` in
                interface `RoutingProviderInternal`

            [Parameters:]{.paramLabel}
            :   `listener` - the listener

        &nbsp;
        -   #### setOnDirectionMatrixResultListener

                public void setOnDirectionMatrixResultListener(OnDirectionMatrixResultListener listener)

            Sets on direction matrix result listener.

            [Specified by:]{.overrideSpecifyLabel}
            :   `setOnDirectionMatrixResultListener` in
                interface `RoutingProviderInternal`

            [Parameters:]{.paramLabel}
            :   `listener` - the listener

        &nbsp;
        -   #### getMatrix

                public void getMatrix(java.lang.String venue,                      java.util.List<Point> origins,                      java.util.List<Point> destinations,                      java.lang.String graphId)

            Gets matrix.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getMatrix` in interface `RoutingProviderInternal`

            [Parameters:]{.paramLabel}
            :   `venue` - the venue
            :   `origins` - the origins
            :   `destinations` - the destinations
            :   `graphId` - the graph id

        &nbsp;
        -   #### getMatrixExternal

                public void getMatrixExternal(java.util.List<Point> origins,                              java.util.List<Point> destinations)

            Gets matrix external.

            [Specified by:]{.overrideSpecifyLabel}
            :   `getMatrixExternal` in
                interface `RoutingProviderInternal`

            [Parameters:]{.paramLabel}
            :   `origins` - the origins
            :   `destinations` - the destinations

        &nbsp;
        -   #### contains

                public void contains(java.util.List<Point> points)

            Contains.

            [Specified by:]{.overrideSpecifyLabel}
            :   `contains` in interface `RoutingProviderInternal`

            [Parameters:]{.paramLabel}
            :   `points` - the points

        &nbsp;
        -   #### query

                public void query(Point from,                  Point to,                  java.lang.String graphId)

            Query.

            [Specified by:]{.overrideSpecifyLabel}
            :   `query` in interface `RoutingProviderInternal`

            [Parameters:]{.paramLabel}
            :   `from` - the from
            :   `to` - the to
            :   `graphId` - the graph id

        &nbsp;
        -   #### queryMultipleDestinations

                public void queryMultipleDestinations(Point from,                                      java.util.List<Point> destinations)

            Query multiple destinations.

            [Specified by:]{.overrideSpecifyLabel}
            :   `queryMultipleDestinations` in
                interface `RoutingProviderInternal`

            [Parameters:]{.paramLabel}
            :   `from` - the from
            :   `destinations` - the destinations

        &nbsp;
        -   #### setTravelMode

                public void setTravelMode(java.lang.String mode)

            Sets travel mode.

            [Specified by:]{.overrideSpecifyLabel}
            :   `setTravelMode` in interface `RoutingProviderInternal`

            [Parameters:]{.paramLabel}
            :   `mode` - the mode

        &nbsp;
        -   #### addRouteRestriction

                public void addRouteRestriction(java.lang.String restriction)

            Add route restriction.

            [Specified by:]{.overrideSpecifyLabel}
            :   `addRouteRestriction` in
                interface `RoutingProviderInternal`

            [Parameters:]{.paramLabel}
            :   `restriction` - the restriction

        &nbsp;
        -   #### clearRouteRestrictions

                public void clearRouteRestrictions()

            Clear route restrictions.

            [Specified by:]{.overrideSpecifyLabel}
            :   `clearRouteRestrictions` in
                interface `RoutingProviderInternal`

        &nbsp;
        -   #### setDateTime

                public void setDateTime(java.util.Calendar date,                        boolean isDeparture)

            Sets date time.

            [Specified by:]{.overrideSpecifyLabel}
            :   `setDateTime` in interface `RoutingProviderInternal`

            [Parameters:]{.paramLabel}
            :   `date` - the date
            :   `isDeparture` - the is departure

        &nbsp;
        -   #### storeRoute

                public void storeRoute(MPRoutingProviderInternal.MPRoutingQuery route)

            Store route.

            [Parameters:]{.paramLabel}
            :   `route` - the route

com.mapspeople.routing

Class Maneuver {#class-maneuver .title title="Class Maneuver"}
--------------

-   java.lang.Object
-   -   com.mapspeople.routing.Maneuver

-   

    ------------------------------------------------------------------------

    \

        public class Maneuverextends java.lang.Object

    The type Maneuver.

-   -   ### Field Summary

          Constructor and Description
          -----------------------------
          `Maneuver()` 

    &nbsp;
    -   ### Method Summary

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Field Detail

        -   #### STRAIGHT\_AHEAD

                public static final java.lang.String STRAIGHT_AHEAD

            The constant STRAIGHT\_AHEAD.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### LEFT

                public static final java.lang.String LEFT

            The constant LEFT.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### RIGHT

                public static final java.lang.String RIGHT

            The constant RIGHT.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### LEFT\_UP

                public static final java.lang.String LEFT_UP

            The constant LEFT\_UP.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### RIGHT\_UP

                public static final java.lang.String RIGHT_UP

            The constant RIGHT\_UP.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### U\_TURN

                public static final java.lang.String U_TURN

            The constant U\_TURN.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### LEFT\_DOWN

                public static final java.lang.String LEFT_DOWN

            The constant LEFT\_DOWN.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### RIGHT\_DOWN

                public static final java.lang.String RIGHT_DOWN

            The constant RIGHT\_DOWN.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### UP

                public static final java.lang.String UP

            The constant UP.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### DOWN

                public static final java.lang.String DOWN

            The constant DOWN.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### START

                public static final java.lang.String START

            The constant START.

            [See Also:]{.seeLabel}
            :   Constant Field Values

    &nbsp;
    -   ### Constructor Detail

        -   #### Maneuver

                public Maneuver()

com.mapspeople.routing

Interface OnDirectionContainsResultListener {#interface-ondirectioncontainsresultlistener .title title="Interface OnDirectionContainsResultListener"}
-------------------------------------------

-   

    ------------------------------------------------------------------------

    \

        public interface OnDirectionContainsResultListener

    The interface On direction contains result listener.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `onContainsResult(java.lang.Strin |
        |                                   | g[] graphIds)`                    |
        |                                   | On contains result.               |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### onContainsResult

                void onContainsResult(java.lang.String[] graphIds)

            On contains result.

            [Parameters:]{.paramLabel}
            :   `graphIds` - the graph ids

com.mapspeople.routing

Interface OnDirectionMatrixResultListener {#interface-ondirectionmatrixresultlistener .title title="Interface OnDirectionMatrixResultListener"}
-----------------------------------------

-   

    ------------------------------------------------------------------------

    \

        public interface OnDirectionMatrixResultListener

    The interface On direction matrix result listener.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `onOnDirectionMatrixResult(Distan |
        |                                   | ceMatrixResponse matrixResponse)` |
        |                                   | On on direction matrix result.    |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### onOnDirectionMatrixResult

                void onOnDirectionMatrixResult(DistanceMatrixResponse matrixResponse)

            On on direction matrix result.

            [Parameters:]{.paramLabel}
            :   `matrixResponse` - the matrix response

com.mapspeople.routing

Interface OnLegSelectedListener {#interface-onlegselectedlistener .title title="Interface OnLegSelectedListener"}
-------------------------------

-   

    ------------------------------------------------------------------------

    \

        public interface OnLegSelectedListener

    The interface On leg selected listener.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `onLegSelected(int legIndex)`     |
        |                                   | On leg selected.                  |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### onLegSelected

                void onLegSelected(int legIndex)

            On leg selected.

            [Parameters:]{.paramLabel}
            :   `legIndex` - the leg index

com.mapspeople.routing

Interface OnRouteResultListener {#interface-onrouteresultlistener .title title="Interface OnRouteResultListener"}
-------------------------------

-   

    ------------------------------------------------------------------------

    \

        public interface OnRouteResultListener

    The interface On route result listener.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `onRouteResult(Route route)`      |
        |                                   | On route result.                  |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `onRoutingInfoResult(java.lang.Ob |
        |                                   | ject info)`                       |
        |                                   | On routing info result.           |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### onRouteResult

                void onRouteResult(Route route)

            On route result.

            [Parameters:]{.paramLabel}
            :   `route` - the route

        &nbsp;
        -   #### onRoutingInfoResult

                void onRoutingInfoResult(java.lang.Object info)

            On routing info result.

            [Parameters:]{.paramLabel}
            :   `info` - the info

com.mapspeople.routing

Class Route {#class-route .title title="Class Route"}
-----------

-   java.lang.Object
-   -   com.mapspeople.routing.Route

-   

    ------------------------------------------------------------------------

    \

        public class Routeextends java.lang.Object

    The type Route.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `java.util.List<Polyline>`        | `addToMap(GoogleMap map)`         |
        |                                   | Add to map list.                  |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<Polyline>`        | `addToMap(GoogleMap map,        i |
        |                                   | nt floorIndex)`                   |
        |                                   | Add to map list.                  |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<RouteVertex>`     | `getAsRouteVertexList()`          |
        |                                   | Gets as route vertex list.        |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<RouteStep>`       | `getCollapsedSteps()`             |
        |                                   | Gets collapsed steps.             |
        +-----------------------------------+-----------------------------------+
        | `int`                             | `getDistance()`                   |
        |                                   | Gets distance.                    |
        +-----------------------------------+-----------------------------------+
        | `int`                             | `getDuration()`                   |
        |                                   | Gets duration.                    |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<LatLng>`          | `getFullPath()`                   |
        |                                   | Gets full path.                   |
        +-----------------------------------+-----------------------------------+
        | `RoutePolyline`                   | `getOverviewPolyline()`           |
        |                                   | Gets overview polyline.           |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<Polyline>`        | `getPolylines()`                  |
        |                                   | Gets polylines.                   |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<Polyline>`        | `getPolylineStrokes()`            |
        |                                   | Gets polyline strokes.            |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String[]`              | `getRestrictions()`               |
        |                                   | Get restrictions string \[ \].    |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<RouteLeg>`        | `getRouteLegs()`                  |
        |                                   | Gets route legs.                  |
        +-----------------------------------+-----------------------------------+
        | `RouteDisplayStyle`               | `getStyle()`                      |
        |                                   | Gets style.                       |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `removeFromMap()`                 |
        |                                   | Remove from map.                  |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setRestrictions(java.lang.String |
        |                                   | [] restrictions)`                 |
        |                                   | Sets restrictions.                |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setStyle(RouteDisplayStyle style |
        |                                   | )`                                |
        |                                   | Sets style.                       |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `showFullRoute()`                 |
        |                                   | Show full route.                  |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### Route

                public Route(java.util.List<RouteLeg> legs)

            Instantiates a new Route.

            [Parameters:]{.paramLabel}
            :   `legs` - the legs

    &nbsp;
    -   ### Method Detail

        -   #### getStyle

                public RouteDisplayStyle getStyle()

            Gets style.

            [Returns:]{.returnLabel}
            :   the style

        &nbsp;
        -   #### setStyle

                public void setStyle(RouteDisplayStyle style)

            Sets style.

            [Parameters:]{.paramLabel}
            :   `style` - the style

        &nbsp;
        -   #### getDuration

                public int getDuration()

            Gets duration.

            [Returns:]{.returnLabel}
            :   the duration

        &nbsp;
        -   #### getDistance

                public int getDistance()

            Gets distance.

            [Returns:]{.returnLabel}
            :   the distance

        &nbsp;
        -   #### addToMap

                public java.util.List<Polyline> addToMap(GoogleMap map,                                         int floorIndex)

            Add to map list.

            [Parameters:]{.paramLabel}
            :   `map` - the map
            :   `floorIndex` - the floor index

            [Returns:]{.returnLabel}
            :   the list

        &nbsp;
        -   #### addToMap

                public java.util.List<Polyline> addToMap(GoogleMap map)

            Add to map list.

            [Parameters:]{.paramLabel}
            :   `map` - the map

            [Returns:]{.returnLabel}
            :   the list

        &nbsp;
        -   #### showFullRoute

                public void showFullRoute()

            Show full route.

        &nbsp;
        -   #### removeFromMap

                public void removeFromMap()

            Remove from map.

        &nbsp;
        -   #### getAsRouteVertexList

                public java.util.List<RouteVertex> getAsRouteVertexList()

            Gets as route vertex list.

            [Returns:]{.returnLabel}
            :   the as route vertex list

        &nbsp;
        -   #### getCollapsedSteps

                public java.util.List<RouteStep> getCollapsedSteps()

            Gets collapsed steps.

            [Returns:]{.returnLabel}
            :   the collapsed steps

        &nbsp;
        -   #### getFullPath

                public java.util.List<LatLng> getFullPath()

            Gets full path.

            [Returns:]{.returnLabel}
            :   the full path

        &nbsp;
        -   #### getRouteLegs

                public java.util.List<RouteLeg> getRouteLegs()

            Gets route legs.

            [Returns:]{.returnLabel}
            :   the route legs

        &nbsp;
        -   #### getOverviewPolyline

                public RoutePolyline getOverviewPolyline()

            Gets overview polyline.

            [Returns:]{.returnLabel}
            :   the overview polyline

        &nbsp;
        -   #### getPolylines

                public java.util.List<Polyline> getPolylines()

            Gets polylines.

            [Returns:]{.returnLabel}
            :   the polylines

        &nbsp;
        -   #### getPolylineStrokes

                public java.util.List<Polyline> getPolylineStrokes()

            Gets polyline strokes.

            [Returns:]{.returnLabel}
            :   the polyline strokes

        &nbsp;
        -   #### getRestrictions

                public java.lang.String[] getRestrictions()

            Get restrictions string \[ \].

            [Returns:]{.returnLabel}
            :   the string \[ \]

        &nbsp;
        -   #### setRestrictions

                public void setRestrictions(java.lang.String[] restrictions)

            Sets restrictions.

            [Parameters:]{.paramLabel}
            :   `restrictions` - the restrictions

com.mapspeople.routing

Class RouteCoordinate {#class-routecoordinate .title title="Class RouteCoordinate"}
---------------------

-   java.lang.Object
-   -   com.mapspeople.routing.RouteCoordinate

-   

    ------------------------------------------------------------------------

    \

        public class RouteCoordinateextends java.lang.Object

    The type Route coordinate.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `java.lang.String`                | `getFloorName()`                  |
        |                                   | Gets floor name.                  |
        +-----------------------------------+-----------------------------------+
        | `double`                          | `getLat()`                        |
        |                                   | Gets lat.                         |
        +-----------------------------------+-----------------------------------+
        | `double`                          | `getLng()`                        |
        |                                   | Gets lng.                         |
        +-----------------------------------+-----------------------------------+
        | `double`                          | `getzIndex()`                     |
        |                                   | Gets index.                       |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setFloorName(java.lang.String fl |
        |                                   | oorName)`                         |
        |                                   | Sets floor name.                  |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setLat(double lat)`              |
        |                                   | Sets lat.                         |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setLng(double lng)`              |
        |                                   | Sets lng.                         |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setzIndex(double zIndex)`        |
        |                                   | Sets index.                       |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### RouteCoordinate

                public RouteCoordinate(double lat,                       double lng,                       double zLevel)

            Instantiates a new Route coordinate.

            [Parameters:]{.paramLabel}
            :   `lat` - the lat
            :   `lng` - the lng
            :   `zLevel` - the z level

        &nbsp;
        -   #### RouteCoordinate

                public RouteCoordinate(Point pos)

            Instantiates a new Route coordinate.

            [Parameters:]{.paramLabel}
            :   `pos` - the pos

    &nbsp;
    -   ### Method Detail

        -   #### getLat

                public double getLat()

            Gets lat.

            [Returns:]{.returnLabel}
            :   the lat

        &nbsp;
        -   #### setLat

                public void setLat(double lat)

            Sets lat.

            [Parameters:]{.paramLabel}
            :   `lat` - the lat

        &nbsp;
        -   #### getLng

                public double getLng()

            Gets lng.

            [Returns:]{.returnLabel}
            :   the lng

        &nbsp;
        -   #### setLng

                public void setLng(double lng)

            Sets lng.

            [Parameters:]{.paramLabel}
            :   `lng` - the lng

        &nbsp;
        -   #### getzIndex

                public double getzIndex()

            Gets index.

            [Returns:]{.returnLabel}
            :   the index

        &nbsp;
        -   #### setzIndex

                public void setzIndex(double zIndex)

            Sets index.

            [Parameters:]{.paramLabel}
            :   `zIndex` - the z index

        &nbsp;
        -   #### setFloorName

                public void setFloorName(java.lang.String floorName)

            Sets floor name.

            [Parameters:]{.paramLabel}
            :   `floorName` - the floor name

        &nbsp;
        -   #### getFloorName

                public java.lang.String getFloorName()

            Gets floor name.

            [Returns:]{.returnLabel}
            :   the floor name

com.mapspeople.routing

Class RouteDisplayStyle {#class-routedisplaystyle .title title="Class RouteDisplayStyle"}
-----------------------

-   java.lang.Object
-   -   com.mapspeople.routing.RouteDisplayStyle

-   

    ------------------------------------------------------------------------

    \

        public class RouteDisplayStyleextends java.lang.Object

    The type Route display style.

-   -   ### Field Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `int`                             | `getLineColor(int colorIndex)`    |
        |                                   | Gets line color.                  |
        +-----------------------------------+-----------------------------------+
        | `float`                           | `getLineSize()`                   |
        |                                   | Gets line size.                   |
        +-----------------------------------+-----------------------------------+
        | `float`                           | `getLineStrokeSize()`             |
        |                                   | Gets line stroke size.            |
        +-----------------------------------+-----------------------------------+
        | `android.graphics.Bitmap`         | `getStepIcon(boolean selected)`   |
        |                                   | Gets step icon.                   |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setLineColor(int colorIndex,     |
        |                                   |         int value)`               |
        |                                   | Sets line color.                  |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setLineSize(float value)`        |
        |                                   | Sets line size.                   |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setLineStrokeSize(float value)`  |
        |                                   | Sets line stroke size.            |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setStepIcon(boolean selected,    |
        |                                   |         android.graphics.Bitmap i |
        |                                   | con)`                             |
        |                                   | Sets step icon.                   |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Field Detail

        -   #### POLYLINE\_COLOR\_ACTIVE

                public static final int POLYLINE_COLOR_ACTIVE

            The constant POLYLINE\_COLOR\_ACTIVE.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### POLYLINE\_COLOR\_INACTIVE

                public static final int POLYLINE_COLOR_INACTIVE

            The constant POLYLINE\_COLOR\_INACTIVE.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### POLYLINE\_STROKE\_ACTIVE

                public static final int POLYLINE_STROKE_ACTIVE

            The constant POLYLINE\_STROKE\_ACTIVE.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### POLYLINE\_STROKE\_INACTIVE

                public static final int POLYLINE_STROKE_INACTIVE

            The constant POLYLINE\_STROKE\_INACTIVE.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### POLYLINE\_WALKING\_ACTIVE

                public static final int POLYLINE_WALKING_ACTIVE

            The constant POLYLINE\_WALKING\_ACTIVE.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### POLYLINE\_WALKING\_INACTIVE

                public static final int POLYLINE_WALKING_INACTIVE

            The constant POLYLINE\_WALKING\_INACTIVE.

            [See Also:]{.seeLabel}
            :   Constant Field Values

    &nbsp;
    -   ### Constructor Detail

        -   #### RouteDisplayStyle

                public RouteDisplayStyle()

            Instantiates a new Route display style.

    &nbsp;
    -   ### Method Detail

        -   #### getLineColor

                public int getLineColor(int colorIndex)

            Gets line color.

            [Parameters:]{.paramLabel}
            :   `colorIndex` - the color index

            [Returns:]{.returnLabel}
            :   the line color

        &nbsp;
        -   #### setLineColor

                public void setLineColor(int colorIndex,                         int value)

            Sets line color.

            [Parameters:]{.paramLabel}
            :   `colorIndex` - the color index
            :   `value` - the value

        &nbsp;
        -   #### getLineSize

                public float getLineSize()

            Gets line size.

            [Returns:]{.returnLabel}
            :   the line size

        &nbsp;
        -   #### setLineSize

                public void setLineSize(float value)

            Sets line size.

            [Parameters:]{.paramLabel}
            :   `value` - the value

        &nbsp;
        -   #### getLineStrokeSize

                public float getLineStrokeSize()

            Gets line stroke size.

            [Returns:]{.returnLabel}
            :   the line stroke size

        &nbsp;
        -   #### setLineStrokeSize

                public void setLineStrokeSize(float value)

            Sets line stroke size.

            [Parameters:]{.paramLabel}
            :   `value` - the value

        &nbsp;
        -   #### getStepIcon

                public android.graphics.Bitmap getStepIcon(boolean selected)

            Gets step icon.

            [Parameters:]{.paramLabel}
            :   `selected` - the selected

            [Returns:]{.returnLabel}
            :   the step icon

        &nbsp;
        -   #### setStepIcon

                public void setStepIcon(boolean selected,                        android.graphics.Bitmap icon)

            Sets step icon.

            [Parameters:]{.paramLabel}
            :   `selected` - the selected
            :   `icon` - the icon

com.mapspeople.routing

Class RouteLeg {#class-routeleg .title title="Class RouteLeg"}
--------------

-   java.lang.Object
-   -   com.mapspeople.routing.RouteLeg

-   

    ------------------------------------------------------------------------

    \

        public class RouteLegextends java.lang.Object

    Route legs indoors are actions for each floor.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `float`                           | `getDistance()`                   |
        |                                   | Gets distance.                    |
        +-----------------------------------+-----------------------------------+
        | `float`                           | `getDuration()`                   |
        |                                   | Gets duration.                    |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getEndAddress()`                 |
        |                                   | Gets end address.                 |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getEndFloorname()`               |
        |                                   | Gets end floorname.               |
        +-----------------------------------+-----------------------------------+
        | `Point`                           | `getEndPoint()`                   |
        |                                   | Gets end point.                   |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<Point>`           | `getPoints()`                     |
        |                                   | Gets points.                      |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getStartAddress()`               |
        |                                   | Gets start address.               |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getStartFloorname()`             |
        |                                   | Gets start floorname.             |
        +-----------------------------------+-----------------------------------+
        | `Point`                           | `getStartPoint()`                 |
        |                                   | Gets start point.                 |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<RouteStep>`       | `getSteps()`                      |
        |                                   | Gets steps.                       |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### RouteLeg

                public RouteLeg(float distance,                float duration,                Point start_location,                Point end_location,                java.util.List<RouteStep> steps)

            Instantiates a new Route leg.

            [Parameters:]{.paramLabel}
            :   `distance` - the distance
            :   `duration` - the duration
            :   `start_location` - the start location
            :   `end_location` - the end location
            :   `steps` - the steps

    &nbsp;
    -   ### Method Detail

        -   #### getDuration

                public float getDuration()

            Gets duration.

            [Returns:]{.returnLabel}
            :   the duration

        &nbsp;
        -   #### getDistance

                public float getDistance()

            Gets distance.

            [Returns:]{.returnLabel}
            :   the distance

        &nbsp;
        -   #### getSteps

                public java.util.List<RouteStep> getSteps()

            Gets steps.

            [Returns:]{.returnLabel}
            :   the steps

        &nbsp;
        -   #### getPoints

                public java.util.List<Point> getPoints()

            Gets points.

            [Returns:]{.returnLabel}
            :   the points

        &nbsp;
        -   #### getStartPoint

                public Point getStartPoint()

            Gets start point.

            [Returns:]{.returnLabel}
            :   the start point

        &nbsp;
        -   #### getEndPoint

                public Point getEndPoint()

            Gets end point.

            [Returns:]{.returnLabel}
            :   the end point

        &nbsp;
        -   #### getStartAddress

                public java.lang.String getStartAddress()

            Gets start address.

            [Returns:]{.returnLabel}
            :   the start address

        &nbsp;
        -   #### getEndAddress

                public java.lang.String getEndAddress()

            Gets end address.

            [Returns:]{.returnLabel}
            :   the end address

        &nbsp;
        -   #### getStartFloorname

                public java.lang.String getStartFloorname()

            Gets start floorname.

            [Returns:]{.returnLabel}
            :   the start floorname

        &nbsp;
        -   #### getEndFloorname

                public java.lang.String getEndFloorname()

            Gets end floorname.

            [Returns:]{.returnLabel}
            :   the end floorname

com.mapspeople.routing

Class RoutePolyline {#class-routepolyline .title title="Class RoutePolyline"}
-------------------

-   java.lang.Object
-   -   com.mapspeople.routing.RoutePolyline

-   

    ------------------------------------------------------------------------

    \

        public class RoutePolylineextends java.lang.Object

    The type Route polyline.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `java.util.List<Point>`           | `getPoints()`                     |
        |                                   | Gets points.                      |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getPointsEncoded()`              |
        |                                   | Gets points encoded.              |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### RoutePolyline

                public RoutePolyline()

    &nbsp;
    -   ### Method Detail

        -   #### getPointsEncoded

                public java.lang.String getPointsEncoded()

            Gets points encoded.

            [Returns:]{.returnLabel}
            :   the points encoded

        &nbsp;
        -   #### getPoints

                public java.util.List<Point> getPoints()

            Gets points.

            [Returns:]{.returnLabel}
            :   the points

com.mapspeople.routing

Class RouteProperty {#class-routeproperty .title title="Class RouteProperty"}
-------------------

-   java.lang.Object
-   -   com.mapspeople.routing.RouteProperty

-   

    ------------------------------------------------------------------------

    \

        public class RoutePropertyextends java.lang.Object

    The type Route property.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `float`                           | `getValue()`                      |
        |                                   | Gets value.                       |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### RouteProperty

                public RouteProperty(float value)

            Instantiates a new Route property.

            [Parameters:]{.paramLabel}
            :   `value` - the value

    &nbsp;
    -   ### Method Detail

        -   #### getValue

                public float getValue()

            Gets value.

            [Returns:]{.returnLabel}
            :   the value

com.mapspeople.routing

Interface RouteRenderer {#interface-routerenderer .title title="Interface RouteRenderer"}
-----------------------

-   

    ------------------------------------------------------------------------

    \

        public interface RouteRenderer

    RouteRenderer Created by JSM on 07/04/15.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `remove()`                        |
        |                                   | Remove.                           |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<Polyline>`        | `render(Route route,      GoogleM |
        |                                   | ap map)`                          |
        |                                   | Render list.                      |
        +-----------------------------------+-----------------------------------+
        | `java.util.List<Polyline>`        | `render(Route route,      GoogleM |
        |                                   | ap map,      int floorIndex)`     |
        |                                   | Render list.                      |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### render

                java.util.List<Polyline> render(Route route,                                GoogleMap map,                                int floorIndex)

            Render list.

            [Parameters:]{.paramLabel}
            :   `route` - the route
            :   `map` - the map
            :   `floorIndex` - the floor index

            [Returns:]{.returnLabel}
            :   the list

        &nbsp;
        -   #### render

                java.util.List<Polyline> render(Route route,                                GoogleMap map)

            Render list.

            [Parameters:]{.paramLabel}
            :   `route` - the route
            :   `map` - the map

            [Returns:]{.returnLabel}
            :   the list

        &nbsp;
        -   #### remove

                void remove()

            Remove.

com.mapspeople.routing

Class RouteResult {#class-routeresult .title title="Class RouteResult"}
-----------------

-   java.lang.Object
-   -   com.mapspeople.routing.RouteResult

-   

    ------------------------------------------------------------------------

    \

        public class RouteResultextends java.lang.Object

    The type Route result.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `java.util.List<Route>`           | `getRoutes()`                     |
        |                                   | Gets routes.                      |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getStatus()`                     |
        |                                   | Gets status.                      |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setRoutes(java.util.List<Route>  |
        |                                   | routes)`                          |
        |                                   | Sets routes.                      |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### RouteResult

                public RouteResult()

    &nbsp;
    -   ### Method Detail

        -   #### getRoutes

                public java.util.List<Route> getRoutes()

            Gets routes.

            [Returns:]{.returnLabel}
            :   the routes

        &nbsp;
        -   #### setRoutes

                public void setRoutes(java.util.List<Route> routes)

            Sets routes.

            [Parameters:]{.paramLabel}
            :   `routes` - the routes

        &nbsp;
        -   #### getStatus

                public java.lang.String getStatus()

            Gets status.

            [Returns:]{.returnLabel}
            :   the status

com.mapspeople.routing

Class RouteStep {#class-routestep .title title="Class RouteStep"}
---------------

-   java.lang.Object
-   -   com.mapspeople.routing.RouteStep

-   

    ------------------------------------------------------------------------

    \

        public class RouteStepextends java.lang.Object

    The type Route step.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `java.lang.String`                | `getAbutters()`                   |
        |                                   | Gets abutters.                    |
        +-----------------------------------+-----------------------------------+
        | `float`                           | `getDistance()`                   |
        |                                   | Gets distance.                    |
        +-----------------------------------+-----------------------------------+
        | `float`                           | `getDuration()`                   |
        |                                   | Gets duration.                    |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getEndFloorname()`               |
        |                                   | Gets end floorname.               |
        +-----------------------------------+-----------------------------------+
        | `Point`                           | `getEndPoint()`                   |
        |                                   | Gets end point.                   |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getHighway()`                    |
        |                                   | Gets highway.                     |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getHtmlInstructions()`           |
        |                                   | Gets html instructions.           |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getManeuver()`                   |
        |                                   | Gets maneuver.                    |
        +-----------------------------------+-----------------------------------+
        | `java.util.Collection<? extends P | `getPoints()`                     |
        | oint>`                            | Gets points.                      |
        +-----------------------------------+-----------------------------------+
        | `RoutePolyline`                   | `getPolyline()`                   |
        |                                   | Gets polyline.                    |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getStartFloorname()`             |
        |                                   | Gets start floorname.             |
        +-----------------------------------+-----------------------------------+
        | `Point`                           | `getStartPoint()`                 |
        |                                   | Gets start point.                 |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `getTravelMode()`                 |
        |                                   | Gets travel mode.                 |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `replaceGeometryWithPolyline()`   |
        |                                   | Replace geometry with polyline.   |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setManeuver(java.lang.String man |
        |                                   | euver)`                           |
        |                                   | Sets maneuver.                    |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### RouteStep

                public RouteStep()

    &nbsp;
    -   ### Method Detail

        -   #### getAbutters

                public java.lang.String getAbutters()

            Gets abutters.

            [Returns:]{.returnLabel}
            :   the abutters

        &nbsp;
        -   #### getHighway

                public java.lang.String getHighway()

            Gets highway.

            [Returns:]{.returnLabel}
            :   the highway

        &nbsp;
        -   #### getManeuver

                public java.lang.String getManeuver()

            Gets maneuver.

            [Returns:]{.returnLabel}
            :   the maneuver

        &nbsp;
        -   #### setManeuver

                public void setManeuver(java.lang.String maneuver)

            Sets maneuver.

            [Parameters:]{.paramLabel}
            :   `maneuver` - the maneuver

        &nbsp;
        -   #### getStartPoint

                public Point getStartPoint()

            Gets start point.

            [Returns:]{.returnLabel}
            :   the start point

        &nbsp;
        -   #### getEndPoint

                public Point getEndPoint()

            Gets end point.

            [Returns:]{.returnLabel}
            :   the end point

        &nbsp;
        -   #### getDuration

                public float getDuration()

            Gets duration.

            [Returns:]{.returnLabel}
            :   the duration

        &nbsp;
        -   #### getDistance

                public float getDistance()

            Gets distance.

            [Returns:]{.returnLabel}
            :   the distance

        &nbsp;
        -   #### getPoints

                public java.util.Collection<? extends Point> getPoints()

            Gets points.

            [Returns:]{.returnLabel}
            :   the points

        &nbsp;
        -   #### getHtmlInstructions

                public java.lang.String getHtmlInstructions()

            Gets html instructions.

            [Returns:]{.returnLabel}
            :   the html instructions

        &nbsp;
        -   #### getTravelMode

                public java.lang.String getTravelMode()

            Gets travel mode.

            [Returns:]{.returnLabel}
            :   the travel mode

        &nbsp;
        -   #### getPolyline

                public RoutePolyline getPolyline()

            Gets polyline.

            [Returns:]{.returnLabel}
            :   the polyline

        &nbsp;
        -   #### replaceGeometryWithPolyline

                public void replaceGeometryWithPolyline()

            Replace geometry with polyline.

        &nbsp;
        -   #### getStartFloorname

                public java.lang.String getStartFloorname()

            Gets start floorname.

            [Returns:]{.returnLabel}
            :   the start floorname

        &nbsp;
        -   #### getEndFloorname

                public java.lang.String getEndFloorname()

            Gets end floorname.

            [Returns:]{.returnLabel}
            :   the end floorname

com.mapspeople.routing

Class RouteVertex {#class-routevertex .title title="Class RouteVertex"}
-----------------

-   java.lang.Object
-   -   com.mapspeople.routing.RouteVertex

-   

    ------------------------------------------------------------------------

    \

        public class RouteVertexextends java.lang.Object

    The type Route vertex.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `double`                          | `getLatitude()`                   |
        |                                   | Gets latitude.                    |
        +-----------------------------------+-----------------------------------+
        | `double`                          | `getLongitude()`                  |
        |                                   | Gets longitude.                   |
        +-----------------------------------+-----------------------------------+
        | `int`                             | `getZLevel()`                     |
        |                                   | Gets z level.                     |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setLatitude(double value)`       |
        |                                   | Sets latitude.                    |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setLongitude(double value)`      |
        |                                   | Sets longitude.                   |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setZLevel(int value)`            |
        |                                   | Sets z level.                     |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### RouteVertex

                public RouteVertex(double latitude,                   double longitude,                   int zLevel)

            Instantiates a new Route vertex.

            [Parameters:]{.paramLabel}
            :   `latitude` - the latitude
            :   `longitude` - the longitude
            :   `zLevel` - the z level

        &nbsp;
        -   #### RouteVertex

                public RouteVertex(double latitude,                   double longitude,                   double zLevel)

            Instantiates a new Route vertex.

            [Parameters:]{.paramLabel}
            :   `latitude` - the latitude
            :   `longitude` - the longitude
            :   `zLevel` - the z level

    &nbsp;
    -   ### Method Detail

        -   #### getLatitude

                public double getLatitude()

            Gets latitude.

            [Returns:]{.returnLabel}
            :   the latitude

        &nbsp;
        -   #### setLatitude

                public void setLatitude(double value)

            Sets latitude.

            [Parameters:]{.paramLabel}
            :   `value` - the value

        &nbsp;
        -   #### getLongitude

                public double getLongitude()

            Gets longitude.

            [Returns:]{.returnLabel}
            :   the longitude

        &nbsp;
        -   #### setLongitude

                public void setLongitude(double value)

            Sets longitude.

            [Parameters:]{.paramLabel}
            :   `value` - the value

        &nbsp;
        -   #### getZLevel

                public int getZLevel()

            Gets z level.

            [Returns:]{.returnLabel}
            :   the z level

        &nbsp;
        -   #### setZLevel

                public void setZLevel(int value)

            Sets z level.

            [Parameters:]{.paramLabel}
            :   `value` - the value

com.mapspeople.routing

Class RoutingMode {#class-routingmode .title title="Class RoutingMode"}
-----------------

-   java.lang.Object
-   -   com.mapspeople.routing.RoutingMode

-   

    ------------------------------------------------------------------------

    \

        public class RoutingModeextends java.lang.Object

    The type Routing mode.

-   -   ### Field Summary

          Constructor and Description
          -----------------------------
          `RoutingMode()` 

    &nbsp;
    -   ### Method Summary

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Field Detail

        -   #### TURN\_BY\_TURN

                public static final int TURN_BY_TURN

            The constant TURN\_BY\_TURN.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### REALTIME

                public static final int REALTIME

            The constant REALTIME.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### OVERVIEW\_ONLY

                public static final int OVERVIEW_ONLY

            The constant OVERVIEW\_ONLY.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### NONE

                public static final int NONE

            The constant NONE.

            [See Also:]{.seeLabel}
            :   Constant Field Values

    &nbsp;
    -   ### Constructor Detail

        -   #### RoutingMode

                public RoutingMode()

com.mapspeople.routing

Interface RoutingProvider {#interface-routingprovider .title title="Interface RoutingProvider"}
-------------------------

-   

    All Known Implementing Classes:
    :   MPRoutingProvider

    ------------------------------------------------------------------------

    \

        public interface RoutingProvider

    Routing provider interface. Specifies the query and setup methods
    that must be implemented when creating a subtype.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `addRouteRestriction(java.lang.St |
        |                                   | ring restriction)`                |
        |                                   | Add route restriction.            |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `clearRouteRestrictions()`        |
        |                                   | Clear route restrictions.         |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `query(Point from,     Point to)` |
        |                                   | Query.                            |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `queryMultipleDestinations(Point  |
        |                                   | from,                         jav |
        |                                   | a.util.List<Point> destinations)` |
        |                                   | Query multiple destinations.      |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setDateTime(java.util.Calendar d |
        |                                   | ate,           boolean isDepartur |
        |                                   | e)`                               |
        |                                   | Sets date time.                   |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOnRouteResultListener(OnRoute |
        |                                   | ResultListener listener)`         |
        |                                   | Get the available vehicles        |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setTravelMode(java.lang.String m |
        |                                   | ode)`                             |
        |                                   | Sets travel mode.                 |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### setOnRouteResultListener

                void setOnRouteResultListener(OnRouteResultListener listener)

            Get the available vehicles

            [Parameters:]{.paramLabel}
            :   `listener` - the listener

        &nbsp;
        -   #### setTravelMode

                void setTravelMode(java.lang.String mode)

            Sets travel mode.

            [Parameters:]{.paramLabel}
            :   `mode` - the mode

        &nbsp;
        -   #### setDateTime

                void setDateTime(java.util.Calendar date,                 boolean isDeparture)

            Sets date time.

            [Parameters:]{.paramLabel}
            :   `date` - the date
            :   `isDeparture` - the is departure

        &nbsp;
        -   #### query

                void query(Point from,           Point to)

            Query.

            [Parameters:]{.paramLabel}
            :   `from` - the from
            :   `to` - the to

        &nbsp;
        -   #### queryMultipleDestinations

                void queryMultipleDestinations(Point from,                               java.util.List<Point> destinations)

            Query multiple destinations.

            [Parameters:]{.paramLabel}
            :   `from` - the from
            :   `destinations` - the destinations

        &nbsp;
        -   #### addRouteRestriction

                void addRouteRestriction(java.lang.String restriction)

            Add route restriction.

            [Parameters:]{.paramLabel}
            :   `restriction` - the restriction

        &nbsp;
        -   #### clearRouteRestrictions

                void clearRouteRestrictions()

            Clear route restrictions.

com.mapspeople.routing

Interface RoutingProviderInternal {#interface-routingproviderinternal .title title="Interface RoutingProviderInternal"}
---------------------------------

-   

    All Known Implementing Classes:
    :   MPRoutingProviderInternal

    ------------------------------------------------------------------------

    \

        public interface RoutingProviderInternal

    Routing provider interface. Specifies the query and setup methods
    that must be implemented when creating a subtype.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `addRouteRestriction(java.lang.St |
        |                                   | ring restriction)`                |
        |                                   | Add route restriction.            |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `clearRouteRestrictions()`        |
        |                                   | Clear route restrictions.         |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `contains(java.util.List<Point> p |
        |                                   | oints)`                           |
        |                                   | Contains.                         |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `getMatrix(java.lang.String venue |
        |                                   | ,         java.util.List<Point> o |
        |                                   | rigins,         java.util.List<Po |
        |                                   | int> destinations,         java.l |
        |                                   | ang.String graphId)`              |
        |                                   | Gets matrix.                      |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `getMatrixExternal(java.util.List |
        |                                   | <Point> origins,                  |
        |                                   | java.util.List<Point> destination |
        |                                   | s)`                               |
        |                                   | Gets matrix external.             |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `query(Point from,     Point to,  |
        |                                   |     java.lang.String graphId)`    |
        |                                   | Query.                            |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `queryMultipleDestinations(Point  |
        |                                   | from,                         jav |
        |                                   | a.util.List<Point> destinations)` |
        |                                   | Query multiple destinations.      |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setDateTime(java.util.Calendar d |
        |                                   | ate,           boolean isDepartur |
        |                                   | e)`                               |
        |                                   | Sets date time.                   |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOnContainsResultListener(OnDi |
        |                                   | rectionContainsResultListener lis |
        |                                   | tener)`                           |
        |                                   | Sets on contains result listener. |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOnDirectionMatrixResultListen |
        |                                   | er(OnDirectionMatrixResultListene |
        |                                   | r listener)`                      |
        |                                   | Sets on direction matrix result   |
        |                                   | listener.                         |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOnRouteResultListener(OnRoute |
        |                                   | ResultListener listener)`         |
        |                                   | Get the available vehicles        |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setTravelMode(java.lang.String m |
        |                                   | ode)`                             |
        |                                   | Sets travel mode.                 |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### setOnRouteResultListener

                void setOnRouteResultListener(OnRouteResultListener listener)

            Get the available vehicles

            [Parameters:]{.paramLabel}
            :   `listener` - the listener

        &nbsp;
        -   #### setOnContainsResultListener

                void setOnContainsResultListener(OnDirectionContainsResultListener listener)

            Sets on contains result listener.

            [Parameters:]{.paramLabel}
            :   `listener` - the listener

        &nbsp;
        -   #### setOnDirectionMatrixResultListener

                void setOnDirectionMatrixResultListener(OnDirectionMatrixResultListener listener)

            Sets on direction matrix result listener.

            [Parameters:]{.paramLabel}
            :   `listener` - the listener

        &nbsp;
        -   #### setTravelMode

                void setTravelMode(java.lang.String mode)

            Sets travel mode.

            [Parameters:]{.paramLabel}
            :   `mode` - the mode

        &nbsp;
        -   #### setDateTime

                void setDateTime(java.util.Calendar date,                 boolean isDeparture)

            Sets date time.

            [Parameters:]{.paramLabel}
            :   `date` - the date
            :   `isDeparture` - the is departure

        &nbsp;
        -   #### getMatrix

                void getMatrix(java.lang.String venue,               java.util.List<Point> origins,               java.util.List<Point> destinations,               java.lang.String graphId)

            Gets matrix.

            [Parameters:]{.paramLabel}
            :   `venue` - the venue
            :   `origins` - the origins
            :   `destinations` - the destinations
            :   `graphId` - the graph id

        &nbsp;
        -   #### getMatrixExternal

                void getMatrixExternal(java.util.List<Point> origins,                       java.util.List<Point> destinations)

            Gets matrix external.

            [Parameters:]{.paramLabel}
            :   `origins` - the origins
            :   `destinations` - the destinations

        &nbsp;
        -   #### contains

                void contains(java.util.List<Point> points)

            Contains.

            [Parameters:]{.paramLabel}
            :   `points` - the points

        &nbsp;
        -   #### query

                void query(Point from,           Point to,           java.lang.String graphId)

            Query.

            [Parameters:]{.paramLabel}
            :   `from` - the from
            :   `to` - the to
            :   `graphId` - the graph id

        &nbsp;
        -   #### queryMultipleDestinations

                void queryMultipleDestinations(Point from,                               java.util.List<Point> destinations)

            Query multiple destinations.

            [Parameters:]{.paramLabel}
            :   `from` - the from
            :   `destinations` - the destinations

        &nbsp;
        -   #### addRouteRestriction

                void addRouteRestriction(java.lang.String restriction)

            Add route restriction.

            [Parameters:]{.paramLabel}
            :   `restriction` - the restriction

        &nbsp;
        -   #### clearRouteRestrictions

                void clearRouteRestrictions()

            Clear route restrictions.

com.mapspeople.routing

Class TravelMode {#class-travelmode .title title="Class TravelMode"}
----------------

-   java.lang.Object
-   -   com.mapspeople.routing.TravelMode

-   

    ------------------------------------------------------------------------

    \

        public class TravelModeextends java.lang.Object

    The type Travel mode.

-   -   ### Field Summary

          Constructor and Description
          -----------------------------
          `TravelMode()` 

    &nbsp;
    -   ### Method Summary

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Field Detail

        -   #### TRAVEL\_MODE\_WALKING

                public static final java.lang.String TRAVEL_MODE_WALKING

            The constant TRAVEL\_MODE\_WALKING.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### TRAVEL\_MODE\_BICYCLING

                public static final java.lang.String TRAVEL_MODE_BICYCLING

            The constant TRAVEL\_MODE\_BICYCLING.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### TRAVEL\_MODE\_DRIVING

                public static final java.lang.String TRAVEL_MODE_DRIVING

            The constant TRAVEL\_MODE\_DRIVING.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### TRAVEL\_MODE\_TRANSIT

                public static final java.lang.String TRAVEL_MODE_TRANSIT

            The constant TRAVEL\_MODE\_TRANSIT.

            [See Also:]{.seeLabel}
            :   Constant Field Values

    &nbsp;
    -   ### Constructor Detail

        -   #### TravelMode

                public TravelMode()

ui
==

com.mapspeople.ui

Class DownloadNotificationHelper {#class-downloadnotificationhelper .title title="Class DownloadNotificationHelper"}
--------------------------------

-   java.lang.Object
-   -   com.mapspeople.ui.DownloadNotificationHelper

-   

    ------------------------------------------------------------------------

    \

        public class DownloadNotificationHelperextends java.lang.Object

    Helper class to manage the progress bar notifation of map downloads
    made using the SDK.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `addToMax(int value)`             |
        |                                   | Add a value to the current        |
        |                                   | highest progress bar value        |
        +-----------------------------------+-----------------------------------+
        | `int`                             | `getMax()`                        |
        |                                   | Get the current highest progress  |
        |                                   | bar value, equal to 100%          |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setupDownloadNotification(androi |
        |                                   | d.app.Activity activity)`         |
        |                                   | Setup the download notification   |
        |                                   | using provided activity           |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `updateDownloadNotification(int i |
        |                                   | ncr)`                             |
        |                                   | Update the notification bar item  |
        |                                   | with an increment value           |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### DownloadNotificationHelper

                public DownloadNotificationHelper()

            Instantiates a new Download notification helper.

    &nbsp;
    -   ### Method Detail

        -   #### setupDownloadNotification

                public void setupDownloadNotification(android.app.Activity activity)

            Setup the download notification using provided activity

            [Parameters:]{.paramLabel}
            :   `activity` - the activity

        &nbsp;
        -   #### updateDownloadNotification

                public void updateDownloadNotification(int incr)

            Update the notification bar item with an increment value

            [Parameters:]{.paramLabel}
            :   `incr` - the incr

        &nbsp;
        -   #### getMax

                public int getMax()

            Get the current highest progress bar value, equal to 100%

            [Returns:]{.returnLabel}
            :   The max integer value

        &nbsp;
        -   #### addToMax

                public void addToMax(int value)

            Add a value to the current highest progress bar value

            [Parameters:]{.paramLabel}
            :   `value` - The value to increment

com.mapspeople.ui

Class FloorSelector {#class-floorselector .title title="Class FloorSelector"}
-------------------

-   java.lang.Object
-   -   android.view.View
    -   -   android.view.ViewGroup
        -   -   android.widget.LinearLayout
            -   -   com.mapspeople.ui.FloorSelector

-   

    All Implemented Interfaces:
    :   android.graphics.drawable.Drawable.Callback,
        android.view.accessibility.AccessibilityEventSource,
        android.view.KeyEvent.Callback, android.view.ViewManager,
        android.view.ViewParent

    ------------------------------------------------------------------------

    \

        public class FloorSelectorextends android.widget.LinearLayout

    View that holds the floor level buttons

-   -   ### Nested Class Summary

        -   ### Nested classes/interfaces inherited from class android.widget.LinearLayout

            `android.widget.LinearLayout.LayoutParams`

        &nbsp;
        -   ### Nested classes/interfaces inherited from class android.view.ViewGroup

            `android.view.ViewGroup.MarginLayoutParams, android.view.ViewGroup.OnHierarchyChangeListener`

        &nbsp;
        -   ### Nested classes/interfaces inherited from class android.view.View

            `android.view.View.AccessibilityDelegate, android.view.View.BaseSavedState, android.view.View.DragShadowBuilder, android.view.View.MeasureSpec, android.view.View.OnApplyWindowInsetsListener, android.view.View.OnAttachStateChangeListener, android.view.View.OnClickListener, android.view.View.OnContextClickListener, android.view.View.OnCreateContextMenuListener, android.view.View.OnDragListener, android.view.View.OnFocusChangeListener, android.view.View.OnGenericMotionListener, android.view.View.OnHoverListener, android.view.View.OnKeyListener, android.view.View.OnLayoutChangeListener, android.view.View.OnLongClickListener, android.view.View.OnScrollChangeListener, android.view.View.OnSystemUiVisibilityChangeListener, android.view.View.OnTouchListener`

    &nbsp;
    -   ### Field Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `addToView(android.view.ViewGroup |
        |                                   |  view)`                           |
        |                                   | Add the floor selector view to a  |
        |                                   | parent view, e.g.                 |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `clearUI()`                       |
        |                                   | Remove all floor buttons          |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `createFloors(Building currentBui |
        |                                   | lding)`                           |
        |                                   | Create the floor selector buttons |
        |                                   | based on a building.              |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `createFloors(java.util.List<Floo |
        |                                   | r> floors)`                       |
        |                                   | Create the buttons based on a     |
        |                                   | list of floors                    |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setFloor(int floor)`             |
        |                                   | Set the current floor level       |
        |                                   | index, and make the corresponding |
        |                                   | button active.                    |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOnFloorSelectedListener(OnFlo |
        |                                   | orSelectedListener callback)`     |
        |                                   | Register a floor select event     |
        |                                   | listener                          |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `updateUI(android.view.View butto |
        |                                   | n)`                               |
        |                                   | Update ui.                        |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class android.widget.LinearLayout

            `generateLayoutParams, getAccessibilityClassName, getBaseline, getBaselineAlignedChildIndex, getDividerDrawable, getDividerPadding, getGravity, getOrientation, getShowDividers, getWeightSum, isBaselineAligned, isMeasureWithLargestChildEnabled, onRtlPropertiesChanged, setBaselineAligned, setBaselineAlignedChildIndex, setDividerDrawable, setDividerPadding, setGravity, setHorizontalGravity, setMeasureWithLargestChildEnabled, setOrientation, setShowDividers, setVerticalGravity, setWeightSum, shouldDelayChildPressedState`

        &nbsp;
        -   ### Methods inherited from class android.view.ViewGroup

            `addChildrenForAccessibility, addFocusables, addStatesFromChildren, addTouchables, addView, addView, addView, addView, addView, bringChildToFront, childDrawableStateChanged, childHasTransientStateChanged, clearChildFocus, clearDisappearingChildren, clearFocus, dispatchApplyWindowInsets, dispatchConfigurationChanged, dispatchDisplayHint, dispatchDragEvent, dispatchDrawableHotspotChanged, dispatchKeyEvent, dispatchKeyEventPreIme, dispatchKeyShortcutEvent, dispatchProvideStructure, dispatchSetActivated, dispatchSetSelected, dispatchSystemUiVisibilityChanged, dispatchTouchEvent, dispatchTrackballEvent, dispatchUnhandledMove, dispatchWindowFocusChanged, dispatchWindowSystemUiVisiblityChanged, dispatchWindowVisibilityChanged, endViewTransition, findFocus, findViewsWithText, focusableViewAvailable, focusSearch, gatherTransparentRegion, getChildAt, getChildCount, getChildMeasureSpec, getChildVisibleRect, getClipChildren, getClipToPadding, getDescendantFocusability, getFocusedChild, getLayoutAnimation, getLayoutAnimationListener, getLayoutMode, getLayoutTransition, getNestedScrollAxes, getOverlay, getPersistentDrawingCache, getTouchscreenBlocksFocus, hasFocus, hasFocusable, hasTransientState, indexOfChild, invalidateChild, invalidateChildInParent, isAlwaysDrawnWithCacheEnabled, isAnimationCacheEnabled, isMotionEventSplittingEnabled, isTransitionGroup, jumpDrawablesToCurrentState, layout, notifySubtreeAccessibilityStateChanged, offsetDescendantRectToMyCoords, offsetRectIntoDescendantCoords, onInterceptHoverEvent, onInterceptTouchEvent, onNestedFling, onNestedPreFling, onNestedPrePerformAccessibilityAction, onNestedPreScroll, onNestedScroll, onNestedScrollAccepted, onRequestSendAccessibilityEvent, onResolvePointerIcon, onStartNestedScroll, onStopNestedScroll, onViewAdded, onViewRemoved, recomputeViewAttributes, removeAllViews, removeAllViewsInLayout, removeView, removeViewAt, removeViewInLayout, removeViews, removeViewsInLayout, requestChildFocus, requestChildRectangleOnScreen, requestDisallowInterceptTouchEvent, requestFocus, requestSendAccessibilityEvent, requestTransparentRegion, scheduleLayoutAnimation, setAddStatesFromChildren, setAlwaysDrawnWithCacheEnabled, setAnimationCacheEnabled, setClipChildren, setClipToPadding, setDescendantFocusability, setLayoutAnimation, setLayoutAnimationListener, setLayoutMode, setLayoutTransition, setMotionEventSplittingEnabled, setOnHierarchyChangeListener, setPersistentDrawingCache, setTouchscreenBlocksFocus, setTransitionGroup, showContextMenuForChild, showContextMenuForChild, startActionModeForChild, startActionModeForChild, startLayoutAnimation, startViewTransition, updateViewLayout`

        &nbsp;
        -   ### Methods inherited from class android.view.View

            `addFocusables, addOnAttachStateChangeListener, addOnLayoutChangeListener, animate, announceForAccessibility, bringToFront, buildDrawingCache, buildDrawingCache, buildLayer, callOnClick, cancelDragAndDrop, cancelLongPress, cancelPendingInputEvents, canResolveLayoutDirection, canResolveTextAlignment, canResolveTextDirection, canScrollHorizontally, canScrollVertically, checkInputConnectionProxy, clearAnimation, combineMeasuredStates, computeScroll, computeSystemWindowInsets, createAccessibilityNodeInfo, createContextMenu, destroyDrawingCache, dispatchFinishTemporaryDetach, dispatchGenericMotionEvent, dispatchNestedFling, dispatchNestedPreFling, dispatchNestedPrePerformAccessibilityAction, dispatchNestedPreScroll, dispatchNestedScroll, dispatchPopulateAccessibilityEvent, dispatchStartTemporaryDetach, draw, drawableHotspotChanged, findViewById, findViewWithTag, focusSearch, forceHasOverlappingRendering, forceLayout, generateViewId, getAccessibilityLiveRegion, getAccessibilityNodeProvider, getAccessibilityTraversalAfter, getAccessibilityTraversalBefore, getAlpha, getAnimation, getApplicationWindowToken, getBackground, getBackgroundTintList, getBackgroundTintMode, getBottom, getCameraDistance, getClipBounds, getClipBounds, getClipToOutline, getContentDescription, getContext, getDefaultSize, getDisplay, getDrawableState, getDrawingCache, getDrawingCache, getDrawingCacheBackgroundColor, getDrawingCacheQuality, getDrawingRect, getDrawingTime, getElevation, getFilterTouchesWhenObscured, getFitsSystemWindows, getFocusables, getFocusedRect, getForeground, getForegroundGravity, getForegroundTintList, getForegroundTintMode, getGlobalVisibleRect, getGlobalVisibleRect, getHandler, getHasOverlappingRendering, getHeight, getHitRect, getHorizontalFadingEdgeLength, getId, getImportantForAccessibility, getKeepScreenOn, getKeyDispatcherState, getLabelFor, getLayerType, getLayoutDirection, getLayoutParams, getLeft, getLocalVisibleRect, getLocationInWindow, getLocationOnScreen, getMatrix, getMeasuredHeight, getMeasuredHeightAndState, getMeasuredState, getMeasuredWidth, getMeasuredWidthAndState, getMinimumHeight, getMinimumWidth, getNextFocusDownId, getNextFocusForwardId, getNextFocusLeftId, getNextFocusRightId, getNextFocusUpId, getOnFocusChangeListener, getOutlineProvider, getOverScrollMode, getPaddingBottom, getPaddingEnd, getPaddingLeft, getPaddingRight, getPaddingStart, getPaddingTop, getParent, getParentForAccessibility, getPivotX, getPivotY, getPointerIcon, getResources, getRevealOnFocusHint, getRight, getRootView, getRootWindowInsets, getRotation, getRotationX, getRotationY, getScaleX, getScaleY, getScrollBarDefaultDelayBeforeFade, getScrollBarFadeDuration, getScrollBarSize, getScrollBarStyle, getScrollIndicators, getScrollX, getScrollY, getSolidColor, getStateListAnimator, getSystemUiVisibility, getTag, getTag, getTextAlignment, getTextDirection, getTop, getTouchables, getTouchDelegate, getTransitionName, getTranslationX, getTranslationY, getTranslationZ, getVerticalFadingEdgeLength, getVerticalScrollbarPosition, getVerticalScrollbarWidth, getViewTreeObserver, getVisibility, getWidth, getWindowId, getWindowSystemUiVisibility, getWindowToken, getWindowVisibility, getWindowVisibleDisplayFrame, getX, getY, getZ, hasNestedScrollingParent, hasOnClickListeners, hasOverlappingRendering, hasWindowFocus, inflate, invalidate, invalidate, invalidate, invalidateDrawable, invalidateOutline, isAccessibilityFocused, isActivated, isAttachedToWindow, isClickable, isContextClickable, isDirty, isDrawingCacheEnabled, isDuplicateParentStateEnabled, isEnabled, isFocusable, isFocusableInTouchMode, isFocused, isHapticFeedbackEnabled, isHardwareAccelerated, isHorizontalFadingEdgeEnabled, isHorizontalScrollBarEnabled, isHovered, isImportantForAccessibility, isInEditMode, isInLayout, isInTouchMode, isLaidOut, isLayoutDirectionResolved, isLayoutRequested, isLongClickable, isNestedScrollingEnabled, isOpaque, isPaddingRelative, isPressed, isSaveEnabled, isSaveFromParentEnabled, isScrollbarFadingEnabled, isScrollContainer, isSelected, isShown, isSoundEffectsEnabled, isTemporarilyDetached, isTextAlignmentResolved, isTextDirectionResolved, isVerticalFadingEdgeEnabled, isVerticalScrollBarEnabled, measure, offsetLeftAndRight, offsetTopAndBottom, onApplyWindowInsets, onCancelPendingInputEvents, onCheckIsTextEditor, onCreateInputConnection, onDragEvent, onDrawForeground, onFilterTouchEventForSecurity, onFinishTemporaryDetach, onGenericMotionEvent, onHoverChanged, onHoverEvent, onInitializeAccessibilityEvent, onInitializeAccessibilityNodeInfo, onKeyDown, onKeyLongPress, onKeyMultiple, onKeyPreIme, onKeyShortcut, onKeyUp, onPopulateAccessibilityEvent, onProvideStructure, onProvideVirtualStructure, onScreenStateChanged, onStartTemporaryDetach, onTouchEvent, onTrackballEvent, onVisibilityAggregated, onWindowFocusChanged, onWindowSystemUiVisibilityChanged, performAccessibilityAction, performClick, performContextClick, performContextClick, performHapticFeedback, performHapticFeedback, performLongClick, performLongClick, playSoundEffect, post, postDelayed, postInvalidate, postInvalidate, postInvalidateDelayed, postInvalidateDelayed, postInvalidateOnAnimation, postInvalidateOnAnimation, postOnAnimation, postOnAnimationDelayed, refreshDrawableState, removeCallbacks, removeOnAttachStateChangeListener, removeOnLayoutChangeListener, requestApplyInsets, requestFitSystemWindows, requestFocus, requestFocus, requestFocusFromTouch, requestLayout, requestRectangleOnScreen, requestRectangleOnScreen, requestUnbufferedDispatch, resolveSize, resolveSizeAndState, restoreHierarchyState, saveHierarchyState, scheduleDrawable, scrollBy, scrollTo, sendAccessibilityEvent, sendAccessibilityEventUnchecked, setAccessibilityDelegate, setAccessibilityLiveRegion, setAccessibilityTraversalAfter, setAccessibilityTraversalBefore, setActivated, setAlpha, setAnimation, setBackground, setBackgroundColor, setBackgroundDrawable, setBackgroundResource, setBackgroundTintList, setBackgroundTintMode, setBottom, setCameraDistance, setClickable, setClipBounds, setClipToOutline, setContentDescription, setContextClickable, setDrawingCacheBackgroundColor, setDrawingCacheEnabled, setDrawingCacheQuality, setDuplicateParentStateEnabled, setElevation, setEnabled, setFadingEdgeLength, setFilterTouchesWhenObscured, setFitsSystemWindows, setFocusable, setFocusableInTouchMode, setForeground, setForegroundGravity, setForegroundTintList, setForegroundTintMode, setHapticFeedbackEnabled, setHasTransientState, setHorizontalFadingEdgeEnabled, setHorizontalScrollBarEnabled, setHovered, setId, setImportantForAccessibility, setKeepScreenOn, setLabelFor, setLayerPaint, setLayerType, setLayoutDirection, setLayoutParams, setLeft, setLongClickable, setMinimumHeight, setMinimumWidth, setNestedScrollingEnabled, setNextFocusDownId, setNextFocusForwardId, setNextFocusLeftId, setNextFocusRightId, setNextFocusUpId, setOnApplyWindowInsetsListener, setOnClickListener, setOnContextClickListener, setOnCreateContextMenuListener, setOnDragListener, setOnFocusChangeListener, setOnGenericMotionListener, setOnHoverListener, setOnKeyListener, setOnLongClickListener, setOnScrollChangeListener, setOnSystemUiVisibilityChangeListener, setOnTouchListener, setOutlineProvider, setOverScrollMode, setPadding, setPaddingRelative, setPivotX, setPivotY, setPointerIcon, setPressed, setRevealOnFocusHint, setRight, setRotation, setRotationX, setRotationY, setSaveEnabled, setSaveFromParentEnabled, setScaleX, setScaleY, setScrollBarDefaultDelayBeforeFade, setScrollBarFadeDuration, setScrollbarFadingEnabled, setScrollBarSize, setScrollBarStyle, setScrollContainer, setScrollIndicators, setScrollIndicators, setScrollX, setScrollY, setSelected, setSoundEffectsEnabled, setStateListAnimator, setSystemUiVisibility, setTag, setTag, setTextAlignment, setTextDirection, setTop, setTouchDelegate, setTransitionName, setTranslationX, setTranslationY, setTranslationZ, setVerticalFadingEdgeEnabled, setVerticalScrollBarEnabled, setVerticalScrollbarPosition, setVisibility, setWillNotCacheDrawing, setWillNotDraw, setX, setY, setZ, showContextMenu, showContextMenu, startActionMode, startActionMode, startAnimation, startDrag, startDragAndDrop, startNestedScroll, stopNestedScroll, toString, unscheduleDrawable, unscheduleDrawable, updateDragShadow, willNotCacheDrawing, willNotDraw`

        &nbsp;
        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, wait, wait, wait`

        &nbsp;
        -   ### Methods inherited from interface android.view.ViewParent

            `canResolveLayoutDirection, canResolveTextAlignment, canResolveTextDirection, createContextMenu, getLayoutDirection, getParent, getParentForAccessibility, getTextAlignment, getTextDirection, isLayoutDirectionResolved, isLayoutRequested, isTextAlignmentResolved, isTextDirectionResolved, requestFitSystemWindows, requestLayout`

-   -   ### Field Detail

        -   #### POSITION\_MARGIN

                public static final int POSITION_MARGIN

            The constant POSITION\_MARGIN.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### POSITION\_MARGIN\_TOP

                public static final int POSITION_MARGIN_TOP

            The constant POSITION\_MARGIN\_TOP.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### DEFAULT\_WIDTH

                public static final int DEFAULT_WIDTH

            The constant DEFAULT\_WIDTH.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### DEFAULT\_COLOR

                public static int DEFAULT_COLOR

            The constant DEFAULT\_COLOR.

        &nbsp;
        -   #### DEFAULT\_COLOR\_ACTIVE

                public static int DEFAULT_COLOR_ACTIVE

            The constant DEFAULT\_COLOR\_ACTIVE.

        &nbsp;
        -   #### DEFAULT\_TEXT\_COLOR

                public static final int DEFAULT_TEXT_COLOR

            The constant DEFAULT\_TEXT\_COLOR.

        &nbsp;
        -   #### DEFAULT\_TEXT\_COLOR\_ACTIVE

                public static final int DEFAULT_TEXT_COLOR_ACTIVE

            The constant DEFAULT\_TEXT\_COLOR\_ACTIVE.

    &nbsp;
    -   ### Constructor Detail

        -   #### FloorSelector

                public FloorSelector(android.content.Context context)

            Initialize with basic UI

            [Parameters:]{.paramLabel}
            :   `context` - the context

    &nbsp;
    -   ### Method Detail

        -   #### setOnFloorSelectedListener

                public void setOnFloorSelectedListener(OnFloorSelectedListener callback)

            Register a floor select event listener

            [Parameters:]{.paramLabel}
            :   `callback` - The floor select listener object

        &nbsp;
        -   #### createFloors

                public void createFloors(java.util.List<Floor> floors)

            Create the buttons based on a list of floors

            [Parameters:]{.paramLabel}
            :   `floors` - The list of floors

        &nbsp;
        -   #### addToView

                public void addToView(android.view.ViewGroup view)

            Add the floor selector view to a parent view, e.g. a Google
            map view. Floor selector will be placed upper right.

            [Parameters:]{.paramLabel}
            :   `view` - The parent view

        &nbsp;
        -   #### setFloor

                public void setFloor(int floor)

            Set the current floor level index, and make the
            corresponding button active.

            [Parameters:]{.paramLabel}
            :   `floor` - The new floor to select

        &nbsp;
        -   #### updateUI

                public void updateUI(android.view.View button)

            Update ui.

            [Parameters:]{.paramLabel}
            :   `button` - the button

        &nbsp;
        -   #### createFloors

                public void createFloors(Building currentBuilding)

            Create the floor selector buttons based on a building. If a
            building has less than or equal to one floor, the floor
            selector will not display.

            [Parameters:]{.paramLabel}
            :   `currentBuilding` - The building to create floor
                selector from.

        &nbsp;
        -   #### clearUI

                public void clearUI()

            Remove all floor buttons

com.mapspeople.ui

Class IconView {#class-iconview .title title="Class IconView"}
--------------

-   java.lang.Object
-   -   android.view.View
    -   -   android.widget.TextView
        -   -   com.mapspeople.ui.IconView

-   

    All Implemented Interfaces:
    :   android.graphics.drawable.Drawable.Callback,
        android.view.accessibility.AccessibilityEventSource,
        android.view.KeyEvent.Callback,
        android.view.ViewTreeObserver.OnPreDrawListener

    ------------------------------------------------------------------------

    \

        public class IconViewextends android.widget.TextView

    Creates a transparent quadrant text view using font awesome icons -
    see the available graphics at
    http://fortawesome.github.io/Font-Awesome/cheatsheet/

-   -   ### Nested Class Summary

        -   ### Nested classes/interfaces inherited from class android.widget.TextView

            `android.widget.TextView.BufferType, android.widget.TextView.OnEditorActionListener, android.widget.TextView.SavedState`

        &nbsp;
        -   ### Nested classes/interfaces inherited from class android.view.View

            `android.view.View.AccessibilityDelegate, android.view.View.BaseSavedState, android.view.View.DragShadowBuilder, android.view.View.MeasureSpec, android.view.View.OnApplyWindowInsetsListener, android.view.View.OnAttachStateChangeListener, android.view.View.OnClickListener, android.view.View.OnContextClickListener, android.view.View.OnCreateContextMenuListener, android.view.View.OnDragListener, android.view.View.OnFocusChangeListener, android.view.View.OnGenericMotionListener, android.view.View.OnHoverListener, android.view.View.OnKeyListener, android.view.View.OnLayoutChangeListener, android.view.View.OnLongClickListener, android.view.View.OnScrollChangeListener, android.view.View.OnSystemUiVisibilityChangeListener, android.view.View.OnTouchListener`

    &nbsp;
    -   ### Field Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `setType(java.lang.String type)`  |
        |                                   | Set the type of the icon view     |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class android.widget.TextView

            `addTextChangedListener, append, append, beginBatchEdit, bringPointIntoView, cancelLongPress, clearComposingText, computeScroll, debug, didTouchFocusSelect, drawableHotspotChanged, endBatchEdit, extractText, findViewsWithText, getAccessibilityClassName, getAutoLinkMask, getBaseline, getBreakStrategy, getCompoundDrawablePadding, getCompoundDrawables, getCompoundDrawablesRelative, getCompoundDrawableTintList, getCompoundDrawableTintMode, getCompoundPaddingBottom, getCompoundPaddingEnd, getCompoundPaddingLeft, getCompoundPaddingRight, getCompoundPaddingStart, getCompoundPaddingTop, getCurrentHintTextColor, getCurrentTextColor, getCustomInsertionActionModeCallback, getCustomSelectionActionModeCallback, getEditableText, getEllipsize, getError, getExtendedPaddingBottom, getExtendedPaddingTop, getFilters, getFocusedRect, getFontFeatureSettings, getFreezesText, getGravity, getHighlightColor, getHint, getHintTextColors, getHyphenationFrequency, getImeActionId, getImeActionLabel, getImeHintLocales, getImeOptions, getIncludeFontPadding, getInputExtras, getInputType, getKeyListener, getLayout, getLetterSpacing, getLineBounds, getLineCount, getLineHeight, getLineSpacingExtra, getLineSpacingMultiplier, getLinksClickable, getLinkTextColors, getMarqueeRepeatLimit, getMaxEms, getMaxHeight, getMaxLines, getMaxWidth, getMinEms, getMinHeight, getMinLines, getMinWidth, getMovementMethod, getOffsetForPosition, getPaint, getPaintFlags, getPrivateImeOptions, getSelectionEnd, getSelectionStart, getShadowColor, getShadowDx, getShadowDy, getShadowRadius, getShowSoftInputOnFocus, getText, getTextColors, getTextLocale, getTextLocales, getTextScaleX, getTextSize, getTotalPaddingBottom, getTotalPaddingEnd, getTotalPaddingLeft, getTotalPaddingRight, getTotalPaddingStart, getTotalPaddingTop, getTransformationMethod, getTypeface, getUrls, hasOverlappingRendering, hasSelection, invalidateDrawable, isCursorVisible, isInputMethodTarget, isSuggestionsEnabled, isTextSelectable, jumpDrawablesToCurrentState, length, moveCursorToVisibleOffset, onBeginBatchEdit, onCheckIsTextEditor, onCommitCompletion, onCommitCorrection, onCreateInputConnection, onDragEvent, onEditorAction, onEndBatchEdit, onGenericMotionEvent, onKeyDown, onKeyMultiple, onKeyPreIme, onKeyShortcut, onKeyUp, onPreDraw, onPrivateIMECommand, onProvideStructure, onResolvePointerIcon, onRestoreInstanceState, onRtlPropertiesChanged, onSaveInstanceState, onScreenStateChanged, onTextContextMenuItem, onTouchEvent, onTrackballEvent, onWindowFocusChanged, performLongClick, removeTextChangedListener, setAllCaps, setAutoLinkMask, setBreakStrategy, setCompoundDrawablePadding, setCompoundDrawables, setCompoundDrawablesRelative, setCompoundDrawablesRelativeWithIntrinsicBounds, setCompoundDrawablesRelativeWithIntrinsicBounds, setCompoundDrawablesWithIntrinsicBounds, setCompoundDrawablesWithIntrinsicBounds, setCompoundDrawableTintList, setCompoundDrawableTintMode, setCursorVisible, setCustomInsertionActionModeCallback, setCustomSelectionActionModeCallback, setEditableFactory, setElegantTextHeight, setEllipsize, setEms, setEnabled, setError, setError, setExtractedText, setFilters, setFontFeatureSettings, setFreezesText, setGravity, setHeight, setHighlightColor, setHint, setHint, setHintTextColor, setHintTextColor, setHorizontallyScrolling, setHyphenationFrequency, setImeActionLabel, setImeHintLocales, setImeOptions, setIncludeFontPadding, setInputExtras, setInputType, setKeyListener, setLetterSpacing, setLines, setLineSpacing, setLinksClickable, setLinkTextColor, setLinkTextColor, setMarqueeRepeatLimit, setMaxEms, setMaxHeight, setMaxLines, setMaxWidth, setMinEms, setMinHeight, setMinLines, setMinWidth, setMovementMethod, setOnEditorActionListener, setPadding, setPaddingRelative, setPaintFlags, setPrivateImeOptions, setRawInputType, setScroller, setSelectAllOnFocus, setSelected, setShadowLayer, setShowSoftInputOnFocus, setSingleLine, setSingleLine, setSpannableFactory, setText, setText, setText, setText, setText, setTextAppearance, setTextAppearance, setTextColor, setTextColor, setTextIsSelectable, setTextKeepState, setTextKeepState, setTextLocale, setTextLocales, setTextScaleX, setTextSize, setTextSize, setTransformationMethod, setTypeface, setTypeface, setWidth, showContextMenu, showContextMenu`

        &nbsp;
        -   ### Methods inherited from class android.view.View

            `addChildrenForAccessibility, addFocusables, addFocusables, addOnAttachStateChangeListener, addOnLayoutChangeListener, addTouchables, animate, announceForAccessibility, bringToFront, buildDrawingCache, buildDrawingCache, buildLayer, callOnClick, cancelDragAndDrop, cancelPendingInputEvents, canResolveLayoutDirection, canResolveTextAlignment, canResolveTextDirection, canScrollHorizontally, canScrollVertically, checkInputConnectionProxy, clearAnimation, clearFocus, combineMeasuredStates, computeSystemWindowInsets, createAccessibilityNodeInfo, createContextMenu, destroyDrawingCache, dispatchApplyWindowInsets, dispatchConfigurationChanged, dispatchDisplayHint, dispatchDragEvent, dispatchDrawableHotspotChanged, dispatchFinishTemporaryDetach, dispatchGenericMotionEvent, dispatchKeyEvent, dispatchKeyEventPreIme, dispatchKeyShortcutEvent, dispatchNestedFling, dispatchNestedPreFling, dispatchNestedPrePerformAccessibilityAction, dispatchNestedPreScroll, dispatchNestedScroll, dispatchPopulateAccessibilityEvent, dispatchProvideStructure, dispatchStartTemporaryDetach, dispatchSystemUiVisibilityChanged, dispatchTouchEvent, dispatchTrackballEvent, dispatchUnhandledMove, dispatchWindowFocusChanged, dispatchWindowSystemUiVisiblityChanged, dispatchWindowVisibilityChanged, draw, findFocus, findViewById, findViewWithTag, focusSearch, forceHasOverlappingRendering, forceLayout, generateViewId, getAccessibilityLiveRegion, getAccessibilityNodeProvider, getAccessibilityTraversalAfter, getAccessibilityTraversalBefore, getAlpha, getAnimation, getApplicationWindowToken, getBackground, getBackgroundTintList, getBackgroundTintMode, getBottom, getCameraDistance, getClipBounds, getClipBounds, getClipToOutline, getContentDescription, getContext, getDefaultSize, getDisplay, getDrawableState, getDrawingCache, getDrawingCache, getDrawingCacheBackgroundColor, getDrawingCacheQuality, getDrawingRect, getDrawingTime, getElevation, getFilterTouchesWhenObscured, getFitsSystemWindows, getFocusables, getForeground, getForegroundGravity, getForegroundTintList, getForegroundTintMode, getGlobalVisibleRect, getGlobalVisibleRect, getHandler, getHasOverlappingRendering, getHeight, getHitRect, getHorizontalFadingEdgeLength, getId, getImportantForAccessibility, getKeepScreenOn, getKeyDispatcherState, getLabelFor, getLayerType, getLayoutDirection, getLayoutParams, getLeft, getLocalVisibleRect, getLocationInWindow, getLocationOnScreen, getMatrix, getMeasuredHeight, getMeasuredHeightAndState, getMeasuredState, getMeasuredWidth, getMeasuredWidthAndState, getMinimumHeight, getMinimumWidth, getNextFocusDownId, getNextFocusForwardId, getNextFocusLeftId, getNextFocusRightId, getNextFocusUpId, getOnFocusChangeListener, getOutlineProvider, getOverlay, getOverScrollMode, getPaddingBottom, getPaddingEnd, getPaddingLeft, getPaddingRight, getPaddingStart, getPaddingTop, getParent, getParentForAccessibility, getPivotX, getPivotY, getPointerIcon, getResources, getRevealOnFocusHint, getRight, getRootView, getRootWindowInsets, getRotation, getRotationX, getRotationY, getScaleX, getScaleY, getScrollBarDefaultDelayBeforeFade, getScrollBarFadeDuration, getScrollBarSize, getScrollBarStyle, getScrollIndicators, getScrollX, getScrollY, getSolidColor, getStateListAnimator, getSystemUiVisibility, getTag, getTag, getTextAlignment, getTextDirection, getTop, getTouchables, getTouchDelegate, getTransitionName, getTranslationX, getTranslationY, getTranslationZ, getVerticalFadingEdgeLength, getVerticalScrollbarPosition, getVerticalScrollbarWidth, getViewTreeObserver, getVisibility, getWidth, getWindowId, getWindowSystemUiVisibility, getWindowToken, getWindowVisibility, getWindowVisibleDisplayFrame, getX, getY, getZ, hasFocus, hasFocusable, hasNestedScrollingParent, hasOnClickListeners, hasTransientState, hasWindowFocus, inflate, invalidate, invalidate, invalidate, invalidateOutline, isAccessibilityFocused, isActivated, isAttachedToWindow, isClickable, isContextClickable, isDirty, isDrawingCacheEnabled, isDuplicateParentStateEnabled, isEnabled, isFocusable, isFocusableInTouchMode, isFocused, isHapticFeedbackEnabled, isHardwareAccelerated, isHorizontalFadingEdgeEnabled, isHorizontalScrollBarEnabled, isHovered, isImportantForAccessibility, isInEditMode, isInLayout, isInTouchMode, isLaidOut, isLayoutDirectionResolved, isLayoutRequested, isLongClickable, isNestedScrollingEnabled, isOpaque, isPaddingRelative, isPressed, isSaveEnabled, isSaveFromParentEnabled, isScrollbarFadingEnabled, isScrollContainer, isSelected, isShown, isSoundEffectsEnabled, isTemporarilyDetached, isTextAlignmentResolved, isTextDirectionResolved, isVerticalFadingEdgeEnabled, isVerticalScrollBarEnabled, layout, measure, offsetLeftAndRight, offsetTopAndBottom, onApplyWindowInsets, onCancelPendingInputEvents, onDrawForeground, onFilterTouchEventForSecurity, onFinishTemporaryDetach, onHoverChanged, onHoverEvent, onInitializeAccessibilityEvent, onInitializeAccessibilityNodeInfo, onKeyLongPress, onPopulateAccessibilityEvent, onProvideVirtualStructure, onStartTemporaryDetach, onVisibilityAggregated, onWindowSystemUiVisibilityChanged, performAccessibilityAction, performClick, performContextClick, performContextClick, performHapticFeedback, performHapticFeedback, performLongClick, playSoundEffect, post, postDelayed, postInvalidate, postInvalidate, postInvalidateDelayed, postInvalidateDelayed, postInvalidateOnAnimation, postInvalidateOnAnimation, postOnAnimation, postOnAnimationDelayed, refreshDrawableState, removeCallbacks, removeOnAttachStateChangeListener, removeOnLayoutChangeListener, requestApplyInsets, requestFitSystemWindows, requestFocus, requestFocus, requestFocus, requestFocusFromTouch, requestLayout, requestRectangleOnScreen, requestRectangleOnScreen, requestUnbufferedDispatch, resolveSize, resolveSizeAndState, restoreHierarchyState, saveHierarchyState, scheduleDrawable, scrollBy, scrollTo, sendAccessibilityEvent, sendAccessibilityEventUnchecked, setAccessibilityDelegate, setAccessibilityLiveRegion, setAccessibilityTraversalAfter, setAccessibilityTraversalBefore, setActivated, setAlpha, setAnimation, setBackground, setBackgroundColor, setBackgroundDrawable, setBackgroundResource, setBackgroundTintList, setBackgroundTintMode, setBottom, setCameraDistance, setClickable, setClipBounds, setClipToOutline, setContentDescription, setContextClickable, setDrawingCacheBackgroundColor, setDrawingCacheEnabled, setDrawingCacheQuality, setDuplicateParentStateEnabled, setElevation, setFadingEdgeLength, setFilterTouchesWhenObscured, setFitsSystemWindows, setFocusable, setFocusableInTouchMode, setForeground, setForegroundGravity, setForegroundTintList, setForegroundTintMode, setHapticFeedbackEnabled, setHasTransientState, setHorizontalFadingEdgeEnabled, setHorizontalScrollBarEnabled, setHovered, setId, setImportantForAccessibility, setKeepScreenOn, setLabelFor, setLayerPaint, setLayerType, setLayoutDirection, setLayoutParams, setLeft, setLongClickable, setMinimumHeight, setMinimumWidth, setNestedScrollingEnabled, setNextFocusDownId, setNextFocusForwardId, setNextFocusLeftId, setNextFocusRightId, setNextFocusUpId, setOnApplyWindowInsetsListener, setOnClickListener, setOnContextClickListener, setOnCreateContextMenuListener, setOnDragListener, setOnFocusChangeListener, setOnGenericMotionListener, setOnHoverListener, setOnKeyListener, setOnLongClickListener, setOnScrollChangeListener, setOnSystemUiVisibilityChangeListener, setOnTouchListener, setOutlineProvider, setOverScrollMode, setPivotX, setPivotY, setPointerIcon, setPressed, setRevealOnFocusHint, setRight, setRotation, setRotationX, setRotationY, setSaveEnabled, setSaveFromParentEnabled, setScaleX, setScaleY, setScrollBarDefaultDelayBeforeFade, setScrollBarFadeDuration, setScrollbarFadingEnabled, setScrollBarSize, setScrollBarStyle, setScrollContainer, setScrollIndicators, setScrollIndicators, setScrollX, setScrollY, setSoundEffectsEnabled, setStateListAnimator, setSystemUiVisibility, setTag, setTag, setTextAlignment, setTextDirection, setTop, setTouchDelegate, setTransitionName, setTranslationX, setTranslationY, setTranslationZ, setVerticalFadingEdgeEnabled, setVerticalScrollBarEnabled, setVerticalScrollbarPosition, setVisibility, setWillNotCacheDrawing, setWillNotDraw, setX, setY, setZ, startActionMode, startActionMode, startAnimation, startDrag, startDragAndDrop, startNestedScroll, stopNestedScroll, toString, unscheduleDrawable, unscheduleDrawable, updateDragShadow, willNotCacheDrawing, willNotDraw`

        &nbsp;
        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, wait, wait, wait`

-   -   ### Field Detail

        -   #### ICON\_COLOR

                public static final int ICON_COLOR

            The constant ICON\_COLOR.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### BACKGROUND\_COLOR

                public static final int BACKGROUND_COLOR

            The constant BACKGROUND\_COLOR.

    &nbsp;
    -   ### Constructor Detail

        -   #### IconView

                public IconView(android.content.Context context,                java.lang.String type,                int color,                int size)

            Instantiate the font icon text view by type, color and size.

            [Parameters:]{.paramLabel}
            :   `context` - The context
            :   `type` - The type of icon to use, use `IconType` to
                reference the unicode or type the font icon unicode
            :   `color` - The color int value, as generated in `Color`
            :   `size` - The size of the font icon in SP (Scaled Pixel)
                units

        &nbsp;
        -   #### IconView

                public IconView(android.content.Context context,                java.lang.String type)

            Instantiate the font icon text view by type.

            [Parameters:]{.paramLabel}
            :   `context` - The context
            :   `type` - The type of icon to use, use `IconType` to
                reference the unicode or type the font icon unicode

        &nbsp;
        -   #### IconView

                public IconView(android.content.Context context,                java.lang.String type,                int color)

            Instantiate the font icon text view by type and color.

            [Parameters:]{.paramLabel}
            :   `context` - The context
            :   `type` - The type of icon to use, use `IconType` to
                reference the unicode or type the font icon unicode
            :   `color` - The color int value, as generated in `Color`

    &nbsp;
    -   ### Method Detail

        -   #### setType

                public void setType(java.lang.String type)

            Set the type of the icon view

            [Parameters:]{.paramLabel}
            :   `type` - The type of icon to use, use `IconType` to
                lookup and reference the unicode or type the font icon
                unicode

com.mapspeople.ui

Class InfoSnippetView {#class-infosnippetview .title title="Class InfoSnippetView"}
---------------------

-   java.lang.Object
-   -   android.view.View
    -   -   android.view.ViewGroup
        -   -   android.widget.LinearLayout
            -   -   com.mapspeople.ui.InfoSnippetView

-   

    All Implemented Interfaces:
    :   android.graphics.drawable.Drawable.Callback,
        android.view.accessibility.AccessibilityEventSource,
        android.view.KeyEvent.Callback,
        android.view.View.OnClickListener, android.view.ViewManager,
        android.view.ViewParent

    ------------------------------------------------------------------------

    \

        public class InfoSnippetViewextends android.widget.LinearLayoutimplements android.view.View.OnClickListener

    Creates an info-snippet view to hold basic information about a
    location. The view is used to place information on top of the map.
    To place one manually use `addToView(ViewGroup)`.
    The view comes with 6 predefined "info slots":

      -------------------------- -------------------------- -------------------------
      POSITION\_LEFT\_TOP\*      POSITION\_CENTER\_TOP      POSITION\_RIGHT\_TOP
      POSITION\_LEFT\_BOTTOM\*   POSITION\_CENTER\_BOTTOM   POSITION\_RIGHT\_BOTTOM
      -------------------------- -------------------------- -------------------------

    Then, to place info in right bottom corner position, use:

          InfoSnippetView v = new InfoSnippetView(context); v.setText("12.00 $", InfoSnippetView.POSITION_RIGHT_BOTTOM); * 

    \* Must be enabled using `enableLeftView()`

-   -   ### Nested Class Summary

        -   ### Nested classes/interfaces inherited from class android.widget.LinearLayout

            `android.widget.LinearLayout.LayoutParams`

        &nbsp;
        -   ### Nested classes/interfaces inherited from class android.view.ViewGroup

            `android.view.ViewGroup.MarginLayoutParams, android.view.ViewGroup.OnHierarchyChangeListener`

        &nbsp;
        -   ### Nested classes/interfaces inherited from class android.view.View

            `android.view.View.AccessibilityDelegate, android.view.View.BaseSavedState, android.view.View.DragShadowBuilder, android.view.View.MeasureSpec, android.view.View.OnApplyWindowInsetsListener, android.view.View.OnAttachStateChangeListener, android.view.View.OnClickListener, android.view.View.OnContextClickListener, android.view.View.OnCreateContextMenuListener, android.view.View.OnDragListener, android.view.View.OnFocusChangeListener, android.view.View.OnGenericMotionListener, android.view.View.OnHoverListener, android.view.View.OnKeyListener, android.view.View.OnLayoutChangeListener, android.view.View.OnLongClickListener, android.view.View.OnScrollChangeListener, android.view.View.OnSystemUiVisibilityChangeListener, android.view.View.OnTouchListener`

    &nbsp;
    -   ### Field Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `addCenterView(android.view.View  |
        |                                   | view)`                            |
        |                                   | Add one more view to the center   |
        |                                   | block                             |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `addLeftView(android.view.View vi |
        |                                   | ew)`                              |
        |                                   | Add one more view to the left     |
        |                                   | block                             |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `addOnSnippetTappedListener(OnSni |
        |                                   | ppetTappedListener callback)`     |
        |                                   | Register tap event listener       |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `addRightView(android.widget.Text |
        |                                   | View view)`                       |
        |                                   | Add one more view to the right    |
        |                                   | block                             |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `addToView(android.view.ViewGroup |
        |                                   |  view)`                           |
        |                                   | Add/display the info snippet view |
        |                                   | in a parent view, e.g.            |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `attachLocation(Location location |
        |                                   | ,              boolean animate)`  |
        |                                   | Attach a location to the view,    |
        |                                   | the location name will appear in  |
        |                                   | top center child view             |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `attachLocation(Location location |
        |                                   | ,              PositionIndicator  |
        |                                   | positionIndicator)`               |
        |                                   | Attach some content using using a |
        |                                   | given location and a user         |
        |                                   | position indication.              |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `detach()`                        |
        |                                   | Detach/hide the the info snippet  |
        |                                   | view                              |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `enableLeftView()`                |
        |                                   | Enable left view (not enabled by  |
        |                                   | default)                          |
        +-----------------------------------+-----------------------------------+
        | `android.view.View`               | `getCenterView()`                 |
        |                                   | Get the center block view,        |
        |                                   | containing the top center and     |
        |                                   | bottom center views               |
        +-----------------------------------+-----------------------------------+
        | `android.view.View`               | `getLeftView()`                   |
        |                                   | Get the left block view,          |
        |                                   | containing the top left and       |
        |                                   | bottom left views                 |
        +-----------------------------------+-----------------------------------+
        | `android.view.View`               | `getRightView()`                  |
        |                                   | Get the right block view,         |
        |                                   | containing the top right and      |
        |                                   | bottom right views                |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `insertIcon(java.lang.String icon |
        |                                   | Type,          int position)`     |
        |                                   | Insert font icon into the         |
        +-----------------------------------+-----------------------------------+
        | `boolean`                         | `isShown()`                       |
        |                                   | Is shown boolean.                 |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `onClick(android.view.View view)` |
        |                                   | On click.                         |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOnAttachListener(OnLocationAt |
        |                                   | tachedListener onAttachListener)` |
        |                                   | Register event listener to catch  |
        |                                   | whenever a location is attached   |
        |                                   | for display on the info snippet   |
        |                                   | view                              |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setText(android.text.Spanned tex |
        |                                   | t,       int position)`           |
        |                                   | Sets text.                        |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setText(java.lang.String text,   |
        |                                   |      int position)`               |
        |                                   | Set text into the given position  |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setupNavigationButton()`         |
        |                                   | Setup navigation button, e.g.     |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `show()`                          |
        |                                   | Immediately show the info snippet |
        |                                   | view                              |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class android.widget.LinearLayout

            `generateLayoutParams, getAccessibilityClassName, getBaseline, getBaselineAlignedChildIndex, getDividerDrawable, getDividerPadding, getGravity, getOrientation, getShowDividers, getWeightSum, isBaselineAligned, isMeasureWithLargestChildEnabled, onRtlPropertiesChanged, setBaselineAligned, setBaselineAlignedChildIndex, setDividerDrawable, setDividerPadding, setGravity, setHorizontalGravity, setMeasureWithLargestChildEnabled, setOrientation, setShowDividers, setVerticalGravity, setWeightSum, shouldDelayChildPressedState`

        &nbsp;
        -   ### Methods inherited from class android.view.ViewGroup

            `addChildrenForAccessibility, addFocusables, addStatesFromChildren, addTouchables, addView, addView, addView, addView, addView, bringChildToFront, childDrawableStateChanged, childHasTransientStateChanged, clearChildFocus, clearDisappearingChildren, clearFocus, dispatchApplyWindowInsets, dispatchConfigurationChanged, dispatchDisplayHint, dispatchDragEvent, dispatchDrawableHotspotChanged, dispatchKeyEvent, dispatchKeyEventPreIme, dispatchKeyShortcutEvent, dispatchProvideStructure, dispatchSetActivated, dispatchSetSelected, dispatchSystemUiVisibilityChanged, dispatchTouchEvent, dispatchTrackballEvent, dispatchUnhandledMove, dispatchWindowFocusChanged, dispatchWindowSystemUiVisiblityChanged, dispatchWindowVisibilityChanged, endViewTransition, findFocus, findViewsWithText, focusableViewAvailable, focusSearch, gatherTransparentRegion, getChildAt, getChildCount, getChildMeasureSpec, getChildVisibleRect, getClipChildren, getClipToPadding, getDescendantFocusability, getFocusedChild, getLayoutAnimation, getLayoutAnimationListener, getLayoutMode, getLayoutTransition, getNestedScrollAxes, getOverlay, getPersistentDrawingCache, getTouchscreenBlocksFocus, hasFocus, hasFocusable, hasTransientState, indexOfChild, invalidateChild, invalidateChildInParent, isAlwaysDrawnWithCacheEnabled, isAnimationCacheEnabled, isMotionEventSplittingEnabled, isTransitionGroup, jumpDrawablesToCurrentState, layout, notifySubtreeAccessibilityStateChanged, offsetDescendantRectToMyCoords, offsetRectIntoDescendantCoords, onInterceptHoverEvent, onInterceptTouchEvent, onNestedFling, onNestedPreFling, onNestedPrePerformAccessibilityAction, onNestedPreScroll, onNestedScroll, onNestedScrollAccepted, onRequestSendAccessibilityEvent, onResolvePointerIcon, onStartNestedScroll, onStopNestedScroll, onViewAdded, onViewRemoved, recomputeViewAttributes, removeAllViews, removeAllViewsInLayout, removeView, removeViewAt, removeViewInLayout, removeViews, removeViewsInLayout, requestChildFocus, requestChildRectangleOnScreen, requestDisallowInterceptTouchEvent, requestFocus, requestSendAccessibilityEvent, requestTransparentRegion, scheduleLayoutAnimation, setAddStatesFromChildren, setAlwaysDrawnWithCacheEnabled, setAnimationCacheEnabled, setClipChildren, setClipToPadding, setDescendantFocusability, setLayoutAnimation, setLayoutAnimationListener, setLayoutMode, setLayoutTransition, setMotionEventSplittingEnabled, setOnHierarchyChangeListener, setPersistentDrawingCache, setTouchscreenBlocksFocus, setTransitionGroup, showContextMenuForChild, showContextMenuForChild, startActionModeForChild, startActionModeForChild, startLayoutAnimation, startViewTransition, updateViewLayout`

        &nbsp;
        -   ### Methods inherited from class android.view.View

            `addFocusables, addOnAttachStateChangeListener, addOnLayoutChangeListener, animate, announceForAccessibility, bringToFront, buildDrawingCache, buildDrawingCache, buildLayer, callOnClick, cancelDragAndDrop, cancelLongPress, cancelPendingInputEvents, canResolveLayoutDirection, canResolveTextAlignment, canResolveTextDirection, canScrollHorizontally, canScrollVertically, checkInputConnectionProxy, clearAnimation, combineMeasuredStates, computeScroll, computeSystemWindowInsets, createAccessibilityNodeInfo, createContextMenu, destroyDrawingCache, dispatchFinishTemporaryDetach, dispatchGenericMotionEvent, dispatchNestedFling, dispatchNestedPreFling, dispatchNestedPrePerformAccessibilityAction, dispatchNestedPreScroll, dispatchNestedScroll, dispatchPopulateAccessibilityEvent, dispatchStartTemporaryDetach, draw, drawableHotspotChanged, findViewById, findViewWithTag, focusSearch, forceHasOverlappingRendering, forceLayout, generateViewId, getAccessibilityLiveRegion, getAccessibilityNodeProvider, getAccessibilityTraversalAfter, getAccessibilityTraversalBefore, getAlpha, getAnimation, getApplicationWindowToken, getBackground, getBackgroundTintList, getBackgroundTintMode, getBottom, getCameraDistance, getClipBounds, getClipBounds, getClipToOutline, getContentDescription, getContext, getDefaultSize, getDisplay, getDrawableState, getDrawingCache, getDrawingCache, getDrawingCacheBackgroundColor, getDrawingCacheQuality, getDrawingRect, getDrawingTime, getElevation, getFilterTouchesWhenObscured, getFitsSystemWindows, getFocusables, getFocusedRect, getForeground, getForegroundGravity, getForegroundTintList, getForegroundTintMode, getGlobalVisibleRect, getGlobalVisibleRect, getHandler, getHasOverlappingRendering, getHeight, getHitRect, getHorizontalFadingEdgeLength, getId, getImportantForAccessibility, getKeepScreenOn, getKeyDispatcherState, getLabelFor, getLayerType, getLayoutDirection, getLayoutParams, getLeft, getLocalVisibleRect, getLocationInWindow, getLocationOnScreen, getMatrix, getMeasuredHeight, getMeasuredHeightAndState, getMeasuredState, getMeasuredWidth, getMeasuredWidthAndState, getMinimumHeight, getMinimumWidth, getNextFocusDownId, getNextFocusForwardId, getNextFocusLeftId, getNextFocusRightId, getNextFocusUpId, getOnFocusChangeListener, getOutlineProvider, getOverScrollMode, getPaddingBottom, getPaddingEnd, getPaddingLeft, getPaddingRight, getPaddingStart, getPaddingTop, getParent, getParentForAccessibility, getPivotX, getPivotY, getPointerIcon, getResources, getRevealOnFocusHint, getRight, getRootView, getRootWindowInsets, getRotation, getRotationX, getRotationY, getScaleX, getScaleY, getScrollBarDefaultDelayBeforeFade, getScrollBarFadeDuration, getScrollBarSize, getScrollBarStyle, getScrollIndicators, getScrollX, getScrollY, getSolidColor, getStateListAnimator, getSystemUiVisibility, getTag, getTag, getTextAlignment, getTextDirection, getTop, getTouchables, getTouchDelegate, getTransitionName, getTranslationX, getTranslationY, getTranslationZ, getVerticalFadingEdgeLength, getVerticalScrollbarPosition, getVerticalScrollbarWidth, getViewTreeObserver, getVisibility, getWidth, getWindowId, getWindowSystemUiVisibility, getWindowToken, getWindowVisibility, getWindowVisibleDisplayFrame, getX, getY, getZ, hasNestedScrollingParent, hasOnClickListeners, hasOverlappingRendering, hasWindowFocus, inflate, invalidate, invalidate, invalidate, invalidateDrawable, invalidateOutline, isAccessibilityFocused, isActivated, isAttachedToWindow, isClickable, isContextClickable, isDirty, isDrawingCacheEnabled, isDuplicateParentStateEnabled, isEnabled, isFocusable, isFocusableInTouchMode, isFocused, isHapticFeedbackEnabled, isHardwareAccelerated, isHorizontalFadingEdgeEnabled, isHorizontalScrollBarEnabled, isHovered, isImportantForAccessibility, isInEditMode, isInLayout, isInTouchMode, isLaidOut, isLayoutDirectionResolved, isLayoutRequested, isLongClickable, isNestedScrollingEnabled, isOpaque, isPaddingRelative, isPressed, isSaveEnabled, isSaveFromParentEnabled, isScrollbarFadingEnabled, isScrollContainer, isSelected, isSoundEffectsEnabled, isTemporarilyDetached, isTextAlignmentResolved, isTextDirectionResolved, isVerticalFadingEdgeEnabled, isVerticalScrollBarEnabled, measure, offsetLeftAndRight, offsetTopAndBottom, onApplyWindowInsets, onCancelPendingInputEvents, onCheckIsTextEditor, onCreateInputConnection, onDragEvent, onDrawForeground, onFilterTouchEventForSecurity, onFinishTemporaryDetach, onGenericMotionEvent, onHoverChanged, onHoverEvent, onInitializeAccessibilityEvent, onInitializeAccessibilityNodeInfo, onKeyDown, onKeyLongPress, onKeyMultiple, onKeyPreIme, onKeyShortcut, onKeyUp, onPopulateAccessibilityEvent, onProvideStructure, onProvideVirtualStructure, onScreenStateChanged, onStartTemporaryDetach, onTouchEvent, onTrackballEvent, onVisibilityAggregated, onWindowFocusChanged, onWindowSystemUiVisibilityChanged, performAccessibilityAction, performClick, performContextClick, performContextClick, performHapticFeedback, performHapticFeedback, performLongClick, performLongClick, playSoundEffect, post, postDelayed, postInvalidate, postInvalidate, postInvalidateDelayed, postInvalidateDelayed, postInvalidateOnAnimation, postInvalidateOnAnimation, postOnAnimation, postOnAnimationDelayed, refreshDrawableState, removeCallbacks, removeOnAttachStateChangeListener, removeOnLayoutChangeListener, requestApplyInsets, requestFitSystemWindows, requestFocus, requestFocus, requestFocusFromTouch, requestLayout, requestRectangleOnScreen, requestRectangleOnScreen, requestUnbufferedDispatch, resolveSize, resolveSizeAndState, restoreHierarchyState, saveHierarchyState, scheduleDrawable, scrollBy, scrollTo, sendAccessibilityEvent, sendAccessibilityEventUnchecked, setAccessibilityDelegate, setAccessibilityLiveRegion, setAccessibilityTraversalAfter, setAccessibilityTraversalBefore, setActivated, setAlpha, setAnimation, setBackground, setBackgroundColor, setBackgroundDrawable, setBackgroundResource, setBackgroundTintList, setBackgroundTintMode, setBottom, setCameraDistance, setClickable, setClipBounds, setClipToOutline, setContentDescription, setContextClickable, setDrawingCacheBackgroundColor, setDrawingCacheEnabled, setDrawingCacheQuality, setDuplicateParentStateEnabled, setElevation, setEnabled, setFadingEdgeLength, setFilterTouchesWhenObscured, setFitsSystemWindows, setFocusable, setFocusableInTouchMode, setForeground, setForegroundGravity, setForegroundTintList, setForegroundTintMode, setHapticFeedbackEnabled, setHasTransientState, setHorizontalFadingEdgeEnabled, setHorizontalScrollBarEnabled, setHovered, setId, setImportantForAccessibility, setKeepScreenOn, setLabelFor, setLayerPaint, setLayerType, setLayoutDirection, setLayoutParams, setLeft, setLongClickable, setMinimumHeight, setMinimumWidth, setNestedScrollingEnabled, setNextFocusDownId, setNextFocusForwardId, setNextFocusLeftId, setNextFocusRightId, setNextFocusUpId, setOnApplyWindowInsetsListener, setOnClickListener, setOnContextClickListener, setOnCreateContextMenuListener, setOnDragListener, setOnFocusChangeListener, setOnGenericMotionListener, setOnHoverListener, setOnKeyListener, setOnLongClickListener, setOnScrollChangeListener, setOnSystemUiVisibilityChangeListener, setOnTouchListener, setOutlineProvider, setOverScrollMode, setPadding, setPaddingRelative, setPivotX, setPivotY, setPointerIcon, setPressed, setRevealOnFocusHint, setRight, setRotation, setRotationX, setRotationY, setSaveEnabled, setSaveFromParentEnabled, setScaleX, setScaleY, setScrollBarDefaultDelayBeforeFade, setScrollBarFadeDuration, setScrollbarFadingEnabled, setScrollBarSize, setScrollBarStyle, setScrollContainer, setScrollIndicators, setScrollIndicators, setScrollX, setScrollY, setSelected, setSoundEffectsEnabled, setStateListAnimator, setSystemUiVisibility, setTag, setTag, setTextAlignment, setTextDirection, setTop, setTouchDelegate, setTransitionName, setTranslationX, setTranslationY, setTranslationZ, setVerticalFadingEdgeEnabled, setVerticalScrollBarEnabled, setVerticalScrollbarPosition, setVisibility, setWillNotCacheDrawing, setWillNotDraw, setX, setY, setZ, showContextMenu, showContextMenu, startActionMode, startActionMode, startAnimation, startDrag, startDragAndDrop, startNestedScroll, stopNestedScroll, toString, unscheduleDrawable, unscheduleDrawable, updateDragShadow, willNotCacheDrawing, willNotDraw`

        &nbsp;
        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, wait, wait, wait`

        &nbsp;
        -   ### Methods inherited from interface android.view.ViewParent

            `canResolveLayoutDirection, canResolveTextAlignment, canResolveTextDirection, createContextMenu, getLayoutDirection, getParent, getParentForAccessibility, getTextAlignment, getTextDirection, isLayoutDirectionResolved, isLayoutRequested, isTextAlignmentResolved, isTextDirectionResolved, requestFitSystemWindows, requestLayout`

-   -   ### Field Detail

        -   #### POSITION\_LEFT

                public static final int POSITION_LEFT

            The constant POSITION\_LEFT.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### POSITION\_RIGHT

                public static final int POSITION_RIGHT

            The constant POSITION\_RIGHT.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### POSITION\_CENTER

                public static final int POSITION_CENTER

            The constant POSITION\_CENTER.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### POSITION\_LEFT\_TOP

                public static final int POSITION_LEFT_TOP

            The constant POSITION\_LEFT\_TOP.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### POSITION\_RIGHT\_TOP

                public static final int POSITION_RIGHT_TOP

            The constant POSITION\_RIGHT\_TOP.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### POSITION\_CENTER\_TOP

                public static final int POSITION_CENTER_TOP

            The constant POSITION\_CENTER\_TOP.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### POSITION\_LEFT\_BOTTOM

                public static final int POSITION_LEFT_BOTTOM

            The constant POSITION\_LEFT\_BOTTOM.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### POSITION\_RIGHT\_BOTTOM

                public static final int POSITION_RIGHT_BOTTOM

            The constant POSITION\_RIGHT\_BOTTOM.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### POSITION\_CENTER\_BOTTOM

                public static final int POSITION_CENTER_BOTTOM

            The constant POSITION\_CENTER\_BOTTOM.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### TEXT\_COLOR

                public static final int TEXT_COLOR

            The constant TEXT\_COLOR.

            [See Also:]{.seeLabel}
            :   Constant Field Values

    &nbsp;
    -   ### Constructor Detail

        -   #### InfoSnippetView

                public InfoSnippetView(android.content.Context context)

            Initiate the info snippet view

            [Parameters:]{.paramLabel}
            :   `context` - The context

    &nbsp;
    -   ### Method Detail

        -   #### addOnSnippetTappedListener

                public void addOnSnippetTappedListener(OnSnippetTappedListener callback)

            Register tap event listener

            [Parameters:]{.paramLabel}
            :   `callback` - The listener object

        &nbsp;
        -   #### getLeftView

                public android.view.View getLeftView()

            Get the left block view, containing the top left and bottom
            left views

            [Returns:]{.returnLabel}
            :   The view

        &nbsp;
        -   #### addLeftView

                public void addLeftView(android.view.View view)

            Add one more view to the left block

            [Parameters:]{.paramLabel}
            :   `view` - the view

        &nbsp;
        -   #### getCenterView

                public android.view.View getCenterView()

            Get the center block view, containing the top center and
            bottom center views

            [Returns:]{.returnLabel}
            :   The view

        &nbsp;
        -   #### addCenterView

                public void addCenterView(android.view.View view)

            Add one more view to the center block

            [Parameters:]{.paramLabel}
            :   `view` - the view

        &nbsp;
        -   #### getRightView

                public android.view.View getRightView()

            Get the right block view, containing the top right and
            bottom right views

            [Returns:]{.returnLabel}
            :   The view

        &nbsp;
        -   #### enableLeftView

                public void enableLeftView()

            Enable left view (not enabled by default)

        &nbsp;
        -   #### addRightView

                public void addRightView(android.widget.TextView view)

            Add one more view to the right block

            [Parameters:]{.paramLabel}
            :   `view` - the view

        &nbsp;
        -   #### setText

                public void setText(java.lang.String text,                    int position)

            Set text into the given position

            [Parameters:]{.paramLabel}
            :   `text` - The text value
            :   `position` - The position - integer value, e.g.
                `POSITION_CENTER_BOTTOM`

        &nbsp;
        -   #### setText

                public void setText(android.text.Spanned text,                    int position)

            Sets text.

            [Parameters:]{.paramLabel}
            :   `text` - the text
            :   `position` - the position

        &nbsp;
        -   #### show

                public void show()

            Immediately show the info snippet view

        &nbsp;
        -   #### attachLocation

                public void attachLocation(Location location,                           boolean animate)

            Attach a location to the view, the location name will appear
            in top center child view

            [Parameters:]{.paramLabel}
            :   `location` - the location
            :   `animate` - the animate

        &nbsp;
        -   #### detach

                public void detach()

            Detach/hide the the info snippet view

        &nbsp;
        -   #### attachLocation

                public void attachLocation(Location location,                           PositionIndicator positionIndicator)

            Attach some content using using a given location and a user
            position indication. Location name will appear in top center
            child view and a beeline distance will appear in the bottom
            right view.

            [Parameters:]{.paramLabel}
            :   `location` - The location
            :   `positionIndicator` - The user position indicator

        &nbsp;
        -   #### addToView

                public void addToView(android.view.ViewGroup view)

            Add/display the info snippet view in a parent view, e.g. a
            Google map view.

            [Parameters:]{.paramLabel}
            :   `view` - The parent view

        &nbsp;
        -   #### onClick

                public void onClick(android.view.View view)

            On click.

            [Specified by:]{.overrideSpecifyLabel}
            :   `onClick` in
                interface `android.view.View.OnClickListener`

            [Parameters:]{.paramLabel}
            :   `view` - the view

        &nbsp;
        -   #### setupNavigationButton

                public void setupNavigationButton()

            Setup navigation button, e.g. display a location arrow in
            top right child view.

        &nbsp;
        -   #### insertIcon

                public void insertIcon(java.lang.String iconType,                       int position)

            Insert font icon into the

            [Parameters:]{.paramLabel}
            :   `iconType` - The type of icon to use, use `IconType` to
                reference the unicode or type the font icon unicode
            :   `position` - The position, either `POSITION_LEFT_TOP` or
                `POSITION_RIGHT_TOP`

        &nbsp;
        -   #### setOnAttachListener

                public void setOnAttachListener(OnLocationAttachedListener onAttachListener)

            Register event listener to catch whenever a location is
            attached for display on the info snippet view

            [Parameters:]{.paramLabel}
            :   `onAttachListener` - the on attach listener

        &nbsp;
        -   #### isShown

                public boolean isShown()

            Is shown boolean.

            [Overrides:]{.overrideSpecifyLabel}
            :   `isShown` in class `android.view.View`

            [Returns:]{.returnLabel}
            :   the boolean

com.mapspeople.ui

Class LocationListItem {#class-locationlistitem .title title="Class LocationListItem"}
----------------------

-   java.lang.Object
-   -   android.view.View
    -   -   android.view.ViewGroup
        -   -   android.widget.LinearLayout
            -   -   com.mapspeople.ui.LocationListItem

-   

    All Implemented Interfaces:
    :   android.graphics.drawable.Drawable.Callback,
        android.view.accessibility.AccessibilityEventSource,
        android.view.KeyEvent.Callback, android.view.ViewManager,
        android.view.ViewParent

    ------------------------------------------------------------------------

    \

        public class LocationListItemextends android.widget.LinearLayout

    The type Location list item.

-   -   ### Nested Class Summary

        -   ### Nested classes/interfaces inherited from class android.widget.LinearLayout

            `android.widget.LinearLayout.LayoutParams`

        &nbsp;
        -   ### Nested classes/interfaces inherited from class android.view.ViewGroup

            `android.view.ViewGroup.MarginLayoutParams, android.view.ViewGroup.OnHierarchyChangeListener`

        &nbsp;
        -   ### Nested classes/interfaces inherited from class android.view.View

            `android.view.View.AccessibilityDelegate, android.view.View.BaseSavedState, android.view.View.DragShadowBuilder, android.view.View.MeasureSpec, android.view.View.OnApplyWindowInsetsListener, android.view.View.OnAttachStateChangeListener, android.view.View.OnClickListener, android.view.View.OnContextClickListener, android.view.View.OnCreateContextMenuListener, android.view.View.OnDragListener, android.view.View.OnFocusChangeListener, android.view.View.OnGenericMotionListener, android.view.View.OnHoverListener, android.view.View.OnKeyListener, android.view.View.OnLayoutChangeListener, android.view.View.OnLongClickListener, android.view.View.OnScrollChangeListener, android.view.View.OnSystemUiVisibilityChangeListener, android.view.View.OnTouchListener`

    &nbsp;
    -   ### Field Summary

        -   ### Fields inherited from class android.widget.LinearLayout

            `HORIZONTAL, SHOW_DIVIDER_BEGINNING, SHOW_DIVIDER_END, SHOW_DIVIDER_MIDDLE, SHOW_DIVIDER_NONE, VERTICAL`

        &nbsp;
        -   ### Fields inherited from class android.view.ViewGroup

            `FOCUS_AFTER_DESCENDANTS, FOCUS_BEFORE_DESCENDANTS, FOCUS_BLOCK_DESCENDANTS, LAYOUT_MODE_CLIP_BOUNDS, LAYOUT_MODE_OPTICAL_BOUNDS, PERSISTENT_ALL_CACHES, PERSISTENT_ANIMATION_CACHE, PERSISTENT_NO_CACHE, PERSISTENT_SCROLLING_CACHE`

        &nbsp;
        -   ### Fields inherited from class android.view.View

            `ACCESSIBILITY_LIVE_REGION_ASSERTIVE, ACCESSIBILITY_LIVE_REGION_NONE, ACCESSIBILITY_LIVE_REGION_POLITE, ALPHA, DRAG_FLAG_GLOBAL, DRAG_FLAG_GLOBAL_PERSISTABLE_URI_PERMISSION, DRAG_FLAG_GLOBAL_PREFIX_URI_PERMISSION, DRAG_FLAG_GLOBAL_URI_READ, DRAG_FLAG_GLOBAL_URI_WRITE, DRAG_FLAG_OPAQUE, DRAWING_CACHE_QUALITY_AUTO, DRAWING_CACHE_QUALITY_HIGH, DRAWING_CACHE_QUALITY_LOW, FIND_VIEWS_WITH_CONTENT_DESCRIPTION, FIND_VIEWS_WITH_TEXT, FOCUS_BACKWARD, FOCUS_DOWN, FOCUS_FORWARD, FOCUS_LEFT, FOCUS_RIGHT, FOCUS_UP, FOCUSABLES_ALL, FOCUSABLES_TOUCH_MODE, GONE, HAPTIC_FEEDBACK_ENABLED, IMPORTANT_FOR_ACCESSIBILITY_AUTO, IMPORTANT_FOR_ACCESSIBILITY_NO, IMPORTANT_FOR_ACCESSIBILITY_NO_HIDE_DESCENDANTS, IMPORTANT_FOR_ACCESSIBILITY_YES, INVISIBLE, KEEP_SCREEN_ON, LAYER_TYPE_HARDWARE, LAYER_TYPE_NONE, LAYER_TYPE_SOFTWARE, LAYOUT_DIRECTION_INHERIT, LAYOUT_DIRECTION_LOCALE, LAYOUT_DIRECTION_LTR, LAYOUT_DIRECTION_RTL, MEASURED_HEIGHT_STATE_SHIFT, MEASURED_SIZE_MASK, MEASURED_STATE_MASK, MEASURED_STATE_TOO_SMALL, NO_ID, OVER_SCROLL_ALWAYS, OVER_SCROLL_IF_CONTENT_SCROLLS, OVER_SCROLL_NEVER, ROTATION, ROTATION_X, ROTATION_Y, SCALE_X, SCALE_Y, SCREEN_STATE_OFF, SCREEN_STATE_ON, SCROLL_AXIS_HORIZONTAL, SCROLL_AXIS_NONE, SCROLL_AXIS_VERTICAL, SCROLL_INDICATOR_BOTTOM, SCROLL_INDICATOR_END, SCROLL_INDICATOR_LEFT, SCROLL_INDICATOR_RIGHT, SCROLL_INDICATOR_START, SCROLL_INDICATOR_TOP, SCROLLBAR_POSITION_DEFAULT, SCROLLBAR_POSITION_LEFT, SCROLLBAR_POSITION_RIGHT, SCROLLBARS_INSIDE_INSET, SCROLLBARS_INSIDE_OVERLAY, SCROLLBARS_OUTSIDE_INSET, SCROLLBARS_OUTSIDE_OVERLAY, SOUND_EFFECTS_ENABLED, STATUS_BAR_HIDDEN, STATUS_BAR_VISIBLE, SYSTEM_UI_FLAG_FULLSCREEN, SYSTEM_UI_FLAG_HIDE_NAVIGATION, SYSTEM_UI_FLAG_IMMERSIVE, SYSTEM_UI_FLAG_IMMERSIVE_STICKY, SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN, SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION, SYSTEM_UI_FLAG_LAYOUT_STABLE, SYSTEM_UI_FLAG_LIGHT_STATUS_BAR, SYSTEM_UI_FLAG_LOW_PROFILE, SYSTEM_UI_FLAG_VISIBLE, SYSTEM_UI_LAYOUT_FLAGS, TEXT_ALIGNMENT_CENTER, TEXT_ALIGNMENT_GRAVITY, TEXT_ALIGNMENT_INHERIT, TEXT_ALIGNMENT_TEXT_END, TEXT_ALIGNMENT_TEXT_START, TEXT_ALIGNMENT_VIEW_END, TEXT_ALIGNMENT_VIEW_START, TEXT_DIRECTION_ANY_RTL, TEXT_DIRECTION_FIRST_STRONG, TEXT_DIRECTION_FIRST_STRONG_LTR, TEXT_DIRECTION_FIRST_STRONG_RTL, TEXT_DIRECTION_INHERIT, TEXT_DIRECTION_LOCALE, TEXT_DIRECTION_LTR, TEXT_DIRECTION_RTL, TRANSLATION_X, TRANSLATION_Y, TRANSLATION_Z, VISIBLE, X, Y, Z`

    &nbsp;
    -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `android.view.View`               | `getIconView()`                   |
        |                                   | Gets icon view.                   |
        +-----------------------------------+-----------------------------------+
        | `android.widget.TextView`         | `getSubTitleView()`               |
        |                                   | Gets sub title view.              |
        +-----------------------------------+-----------------------------------+
        | `android.widget.TextView`         | `getTitleView()`                  |
        |                                   | Gets title view.                  |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setIconView(android.view.View ic |
        |                                   | onView)`                          |
        |                                   | Sets icon view.                   |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setSubTitleView(android.widget.T |
        |                                   | extView subTitleView)`            |
        |                                   | Sets sub title view.              |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setTitleView(android.widget.Text |
        |                                   | View titleView)`                  |
        |                                   | Sets title view.                  |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class android.widget.LinearLayout

            `generateLayoutParams, getAccessibilityClassName, getBaseline, getBaselineAlignedChildIndex, getDividerDrawable, getDividerPadding, getGravity, getOrientation, getShowDividers, getWeightSum, isBaselineAligned, isMeasureWithLargestChildEnabled, onRtlPropertiesChanged, setBaselineAligned, setBaselineAlignedChildIndex, setDividerDrawable, setDividerPadding, setGravity, setHorizontalGravity, setMeasureWithLargestChildEnabled, setOrientation, setShowDividers, setVerticalGravity, setWeightSum, shouldDelayChildPressedState`

        &nbsp;
        -   ### Methods inherited from class android.view.ViewGroup

            `addChildrenForAccessibility, addFocusables, addStatesFromChildren, addTouchables, addView, addView, addView, addView, addView, bringChildToFront, childDrawableStateChanged, childHasTransientStateChanged, clearChildFocus, clearDisappearingChildren, clearFocus, dispatchApplyWindowInsets, dispatchConfigurationChanged, dispatchDisplayHint, dispatchDragEvent, dispatchDrawableHotspotChanged, dispatchKeyEvent, dispatchKeyEventPreIme, dispatchKeyShortcutEvent, dispatchProvideStructure, dispatchSetActivated, dispatchSetSelected, dispatchSystemUiVisibilityChanged, dispatchTouchEvent, dispatchTrackballEvent, dispatchUnhandledMove, dispatchWindowFocusChanged, dispatchWindowSystemUiVisiblityChanged, dispatchWindowVisibilityChanged, endViewTransition, findFocus, findViewsWithText, focusableViewAvailable, focusSearch, gatherTransparentRegion, getChildAt, getChildCount, getChildMeasureSpec, getChildVisibleRect, getClipChildren, getClipToPadding, getDescendantFocusability, getFocusedChild, getLayoutAnimation, getLayoutAnimationListener, getLayoutMode, getLayoutTransition, getNestedScrollAxes, getOverlay, getPersistentDrawingCache, getTouchscreenBlocksFocus, hasFocus, hasFocusable, hasTransientState, indexOfChild, invalidateChild, invalidateChildInParent, isAlwaysDrawnWithCacheEnabled, isAnimationCacheEnabled, isMotionEventSplittingEnabled, isTransitionGroup, jumpDrawablesToCurrentState, layout, notifySubtreeAccessibilityStateChanged, offsetDescendantRectToMyCoords, offsetRectIntoDescendantCoords, onInterceptHoverEvent, onInterceptTouchEvent, onNestedFling, onNestedPreFling, onNestedPrePerformAccessibilityAction, onNestedPreScroll, onNestedScroll, onNestedScrollAccepted, onRequestSendAccessibilityEvent, onResolvePointerIcon, onStartNestedScroll, onStopNestedScroll, onViewAdded, onViewRemoved, recomputeViewAttributes, removeAllViews, removeAllViewsInLayout, removeView, removeViewAt, removeViewInLayout, removeViews, removeViewsInLayout, requestChildFocus, requestChildRectangleOnScreen, requestDisallowInterceptTouchEvent, requestFocus, requestSendAccessibilityEvent, requestTransparentRegion, scheduleLayoutAnimation, setAddStatesFromChildren, setAlwaysDrawnWithCacheEnabled, setAnimationCacheEnabled, setClipChildren, setClipToPadding, setDescendantFocusability, setLayoutAnimation, setLayoutAnimationListener, setLayoutMode, setLayoutTransition, setMotionEventSplittingEnabled, setOnHierarchyChangeListener, setPersistentDrawingCache, setTouchscreenBlocksFocus, setTransitionGroup, showContextMenuForChild, showContextMenuForChild, startActionModeForChild, startActionModeForChild, startLayoutAnimation, startViewTransition, updateViewLayout`

        &nbsp;
        -   ### Methods inherited from class android.view.View

            `addFocusables, addOnAttachStateChangeListener, addOnLayoutChangeListener, animate, announceForAccessibility, bringToFront, buildDrawingCache, buildDrawingCache, buildLayer, callOnClick, cancelDragAndDrop, cancelLongPress, cancelPendingInputEvents, canResolveLayoutDirection, canResolveTextAlignment, canResolveTextDirection, canScrollHorizontally, canScrollVertically, checkInputConnectionProxy, clearAnimation, combineMeasuredStates, computeScroll, computeSystemWindowInsets, createAccessibilityNodeInfo, createContextMenu, destroyDrawingCache, dispatchFinishTemporaryDetach, dispatchGenericMotionEvent, dispatchNestedFling, dispatchNestedPreFling, dispatchNestedPrePerformAccessibilityAction, dispatchNestedPreScroll, dispatchNestedScroll, dispatchPopulateAccessibilityEvent, dispatchStartTemporaryDetach, draw, drawableHotspotChanged, findViewById, findViewWithTag, focusSearch, forceHasOverlappingRendering, forceLayout, generateViewId, getAccessibilityLiveRegion, getAccessibilityNodeProvider, getAccessibilityTraversalAfter, getAccessibilityTraversalBefore, getAlpha, getAnimation, getApplicationWindowToken, getBackground, getBackgroundTintList, getBackgroundTintMode, getBottom, getCameraDistance, getClipBounds, getClipBounds, getClipToOutline, getContentDescription, getContext, getDefaultSize, getDisplay, getDrawableState, getDrawingCache, getDrawingCache, getDrawingCacheBackgroundColor, getDrawingCacheQuality, getDrawingRect, getDrawingTime, getElevation, getFilterTouchesWhenObscured, getFitsSystemWindows, getFocusables, getFocusedRect, getForeground, getForegroundGravity, getForegroundTintList, getForegroundTintMode, getGlobalVisibleRect, getGlobalVisibleRect, getHandler, getHasOverlappingRendering, getHeight, getHitRect, getHorizontalFadingEdgeLength, getId, getImportantForAccessibility, getKeepScreenOn, getKeyDispatcherState, getLabelFor, getLayerType, getLayoutDirection, getLayoutParams, getLeft, getLocalVisibleRect, getLocationInWindow, getLocationOnScreen, getMatrix, getMeasuredHeight, getMeasuredHeightAndState, getMeasuredState, getMeasuredWidth, getMeasuredWidthAndState, getMinimumHeight, getMinimumWidth, getNextFocusDownId, getNextFocusForwardId, getNextFocusLeftId, getNextFocusRightId, getNextFocusUpId, getOnFocusChangeListener, getOutlineProvider, getOverScrollMode, getPaddingBottom, getPaddingEnd, getPaddingLeft, getPaddingRight, getPaddingStart, getPaddingTop, getParent, getParentForAccessibility, getPivotX, getPivotY, getPointerIcon, getResources, getRevealOnFocusHint, getRight, getRootView, getRootWindowInsets, getRotation, getRotationX, getRotationY, getScaleX, getScaleY, getScrollBarDefaultDelayBeforeFade, getScrollBarFadeDuration, getScrollBarSize, getScrollBarStyle, getScrollIndicators, getScrollX, getScrollY, getSolidColor, getStateListAnimator, getSystemUiVisibility, getTag, getTag, getTextAlignment, getTextDirection, getTop, getTouchables, getTouchDelegate, getTransitionName, getTranslationX, getTranslationY, getTranslationZ, getVerticalFadingEdgeLength, getVerticalScrollbarPosition, getVerticalScrollbarWidth, getViewTreeObserver, getVisibility, getWidth, getWindowId, getWindowSystemUiVisibility, getWindowToken, getWindowVisibility, getWindowVisibleDisplayFrame, getX, getY, getZ, hasNestedScrollingParent, hasOnClickListeners, hasOverlappingRendering, hasWindowFocus, inflate, invalidate, invalidate, invalidate, invalidateDrawable, invalidateOutline, isAccessibilityFocused, isActivated, isAttachedToWindow, isClickable, isContextClickable, isDirty, isDrawingCacheEnabled, isDuplicateParentStateEnabled, isEnabled, isFocusable, isFocusableInTouchMode, isFocused, isHapticFeedbackEnabled, isHardwareAccelerated, isHorizontalFadingEdgeEnabled, isHorizontalScrollBarEnabled, isHovered, isImportantForAccessibility, isInEditMode, isInLayout, isInTouchMode, isLaidOut, isLayoutDirectionResolved, isLayoutRequested, isLongClickable, isNestedScrollingEnabled, isOpaque, isPaddingRelative, isPressed, isSaveEnabled, isSaveFromParentEnabled, isScrollbarFadingEnabled, isScrollContainer, isSelected, isShown, isSoundEffectsEnabled, isTemporarilyDetached, isTextAlignmentResolved, isTextDirectionResolved, isVerticalFadingEdgeEnabled, isVerticalScrollBarEnabled, measure, offsetLeftAndRight, offsetTopAndBottom, onApplyWindowInsets, onCancelPendingInputEvents, onCheckIsTextEditor, onCreateInputConnection, onDragEvent, onDrawForeground, onFilterTouchEventForSecurity, onFinishTemporaryDetach, onGenericMotionEvent, onHoverChanged, onHoverEvent, onInitializeAccessibilityEvent, onInitializeAccessibilityNodeInfo, onKeyDown, onKeyLongPress, onKeyMultiple, onKeyPreIme, onKeyShortcut, onKeyUp, onPopulateAccessibilityEvent, onProvideStructure, onProvideVirtualStructure, onScreenStateChanged, onStartTemporaryDetach, onTouchEvent, onTrackballEvent, onVisibilityAggregated, onWindowFocusChanged, onWindowSystemUiVisibilityChanged, performAccessibilityAction, performClick, performContextClick, performContextClick, performHapticFeedback, performHapticFeedback, performLongClick, performLongClick, playSoundEffect, post, postDelayed, postInvalidate, postInvalidate, postInvalidateDelayed, postInvalidateDelayed, postInvalidateOnAnimation, postInvalidateOnAnimation, postOnAnimation, postOnAnimationDelayed, refreshDrawableState, removeCallbacks, removeOnAttachStateChangeListener, removeOnLayoutChangeListener, requestApplyInsets, requestFitSystemWindows, requestFocus, requestFocus, requestFocusFromTouch, requestLayout, requestRectangleOnScreen, requestRectangleOnScreen, requestUnbufferedDispatch, resolveSize, resolveSizeAndState, restoreHierarchyState, saveHierarchyState, scheduleDrawable, scrollBy, scrollTo, sendAccessibilityEvent, sendAccessibilityEventUnchecked, setAccessibilityDelegate, setAccessibilityLiveRegion, setAccessibilityTraversalAfter, setAccessibilityTraversalBefore, setActivated, setAlpha, setAnimation, setBackground, setBackgroundColor, setBackgroundDrawable, setBackgroundResource, setBackgroundTintList, setBackgroundTintMode, setBottom, setCameraDistance, setClickable, setClipBounds, setClipToOutline, setContentDescription, setContextClickable, setDrawingCacheBackgroundColor, setDrawingCacheEnabled, setDrawingCacheQuality, setDuplicateParentStateEnabled, setElevation, setEnabled, setFadingEdgeLength, setFilterTouchesWhenObscured, setFitsSystemWindows, setFocusable, setFocusableInTouchMode, setForeground, setForegroundGravity, setForegroundTintList, setForegroundTintMode, setHapticFeedbackEnabled, setHasTransientState, setHorizontalFadingEdgeEnabled, setHorizontalScrollBarEnabled, setHovered, setId, setImportantForAccessibility, setKeepScreenOn, setLabelFor, setLayerPaint, setLayerType, setLayoutDirection, setLayoutParams, setLeft, setLongClickable, setMinimumHeight, setMinimumWidth, setNestedScrollingEnabled, setNextFocusDownId, setNextFocusForwardId, setNextFocusLeftId, setNextFocusRightId, setNextFocusUpId, setOnApplyWindowInsetsListener, setOnClickListener, setOnContextClickListener, setOnCreateContextMenuListener, setOnDragListener, setOnFocusChangeListener, setOnGenericMotionListener, setOnHoverListener, setOnKeyListener, setOnLongClickListener, setOnScrollChangeListener, setOnSystemUiVisibilityChangeListener, setOnTouchListener, setOutlineProvider, setOverScrollMode, setPadding, setPaddingRelative, setPivotX, setPivotY, setPointerIcon, setPressed, setRevealOnFocusHint, setRight, setRotation, setRotationX, setRotationY, setSaveEnabled, setSaveFromParentEnabled, setScaleX, setScaleY, setScrollBarDefaultDelayBeforeFade, setScrollBarFadeDuration, setScrollbarFadingEnabled, setScrollBarSize, setScrollBarStyle, setScrollContainer, setScrollIndicators, setScrollIndicators, setScrollX, setScrollY, setSelected, setSoundEffectsEnabled, setStateListAnimator, setSystemUiVisibility, setTag, setTag, setTextAlignment, setTextDirection, setTop, setTouchDelegate, setTransitionName, setTranslationX, setTranslationY, setTranslationZ, setVerticalFadingEdgeEnabled, setVerticalScrollBarEnabled, setVerticalScrollbarPosition, setVisibility, setWillNotCacheDrawing, setWillNotDraw, setX, setY, setZ, showContextMenu, showContextMenu, startActionMode, startActionMode, startAnimation, startDrag, startDragAndDrop, startNestedScroll, stopNestedScroll, toString, unscheduleDrawable, unscheduleDrawable, updateDragShadow, willNotCacheDrawing, willNotDraw`

        &nbsp;
        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, wait, wait, wait`

        &nbsp;
        -   ### Methods inherited from interface android.view.ViewParent

            `canResolveLayoutDirection, canResolveTextAlignment, canResolveTextDirection, createContextMenu, getLayoutDirection, getParent, getParentForAccessibility, getTextAlignment, getTextDirection, isLayoutDirectionResolved, isLayoutRequested, isTextAlignmentResolved, isTextDirectionResolved, requestFitSystemWindows, requestLayout`

-   -   ### Constructor Detail

        -   #### LocationListItem

                public LocationListItem(android.content.Context context)

            Instantiates a new Location list item.

            [Parameters:]{.paramLabel}
            :   `context` - the context

    &nbsp;
    -   ### Method Detail

        -   #### getIconView

                public android.view.View getIconView()

            Gets icon view.

            [Returns:]{.returnLabel}
            :   the icon view

        &nbsp;
        -   #### setIconView

                public void setIconView(android.view.View iconView)

            Sets icon view.

            [Parameters:]{.paramLabel}
            :   `iconView` - the icon view

        &nbsp;
        -   #### getTitleView

                public android.widget.TextView getTitleView()

            Gets title view.

            [Returns:]{.returnLabel}
            :   the title view

        &nbsp;
        -   #### setTitleView

                public void setTitleView(android.widget.TextView titleView)

            Sets title view.

            [Parameters:]{.paramLabel}
            :   `titleView` - the title view

        &nbsp;
        -   #### getSubTitleView

                public android.widget.TextView getSubTitleView()

            Gets sub title view.

            [Returns:]{.returnLabel}
            :   the sub title view

        &nbsp;
        -   #### setSubTitleView

                public void setSubTitleView(android.widget.TextView subTitleView)

            Sets sub title view.

            [Parameters:]{.paramLabel}
            :   `subTitleView` - the sub title view

com.mapspeople.ui

Interface OnFloorSelectedListener {#interface-onfloorselectedlistener .title title="Interface OnFloorSelectedListener"}
---------------------------------

-   

    ------------------------------------------------------------------------

    \

        public interface OnFloorSelectedListener

    Floor level select event listener

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `onFloorSelected(int floor)`      |
        |                                   | Floor level select event listener |
        |                                   | method                            |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### onFloorSelected

                void onFloorSelected(int floor)

            Floor level select event listener method

            [Parameters:]{.paramLabel}
            :   `floor` - The selected floor level index

com.mapspeople.ui

Interface OnLocationAttachedListener {#interface-onlocationattachedlistener .title title="Interface OnLocationAttachedListener"}
------------------------------------

-   

    ------------------------------------------------------------------------

    \

        public interface OnLocationAttachedListener

    Event listener to catch whenever a locations details are displayed
    in a view.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `onLocationAttached(Location loca |
        |                                   | tion,                  android.vi |
        |                                   | ew.ViewGroup view)`               |
        |                                   | Event listener method to catch    |
        |                                   | whenever a locations details are  |
        |                                   | displayed in a view.              |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### onLocationAttached

                void onLocationAttached(Location location,                        android.view.ViewGroup view)

            Event listener method to catch whenever a locations details
            are displayed in a view.

            [Parameters:]{.paramLabel}
            :   `location` - The location attached
            :   `view` - The view displaying the location details

com.mapspeople.ui

Interface OnSnippetTappedListener {#interface-onsnippettappedlistener .title title="Interface OnSnippetTappedListener"}
---------------------------------

-   

    ------------------------------------------------------------------------

    \

        public interface OnSnippetTappedListener

    Event listener to catch whenever a info snippet view is tapped

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `onSnippetTapped(int tapPosition, |
        |                                   |                Location marker)`  |
        |                                   | Event listener method to catch    |
        |                                   | whenever a info snippet view is   |
        |                                   | tapped                            |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### onSnippetTapped

                void onSnippetTapped(int tapPosition,                     Location marker)

            Event listener method to catch whenever a info snippet view
            is tapped

            [Parameters:]{.paramLabel}
            :   `tapPosition` - The position of the tap, either one of
                {com.mapspeople.mapcontrol.ui.InfoSnippetView.POSITION\_LEFT},
                {com.mapspeople.mapcontrol.ui.InfoSnippetView.POSITION\_CENTER}
                and
                {com.mapspeople.mapcontrol.ui.InfoSnippetView.POSITION\_RIGHT}
            :   `marker` - The marker that invoked the info snippet

com.mapspeople.ui

Interface RoutingControl.OnRouteStepListener {#interface-routingcontrol.onroutesteplistener .title title="Interface RoutingControl.OnRouteStepListener"}
--------------------------------------------

-   

    Enclosing class:
    :   RoutingControl

    ------------------------------------------------------------------------

    \

        public static interface RoutingControl.OnRouteStepListener

    Event listener interface to catch routing events

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `onAfterRouteStep(RouteStep actio |
        |                                   | n)`                               |
        |                                   | Event listener method to catch    |
        |                                   | whenever a route action has been  |
        |                                   | completed                         |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `onBeforeRouteStep(RouteStep acti |
        |                                   | on)`                              |
        |                                   | Event listener method to catch    |
        |                                   | whenever a route action is to be  |
        |                                   | completed                         |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `onRoutingClose(Location currentD |
        |                                   | estination)`                      |
        |                                   | Event listener method that fires  |
        |                                   | when a routing session is closed  |
        +-----------------------------------+-----------------------------------+

-   -   ### Method Detail

        -   #### onAfterRouteStep

                void onAfterRouteStep(RouteStep action)

            Event listener method to catch whenever a route action has
            been completed

            [Parameters:]{.paramLabel}
            :   `action` - The completed route action

        &nbsp;
        -   #### onBeforeRouteStep

                void onBeforeRouteStep(RouteStep action)

            Event listener method to catch whenever a route action is to
            be completed

            [Parameters:]{.paramLabel}
            :   `action` - The current route action

        &nbsp;
        -   #### onRoutingClose

                void onRoutingClose(Location currentDestination)

            Event listener method that fires when a routing session is
            closed

            [Parameters:]{.paramLabel}
            :   `currentDestination` - The destination location

com.mapspeople.ui

Class RoutingControl {#class-routingcontrol .title title="Class RoutingControl"}
--------------------

-   java.lang.Object
-   -   android.view.View
    -   -   android.view.ViewGroup
        -   -   android.widget.LinearLayout
            -   -   com.mapspeople.ui.RoutingControl

-   

    All Implemented Interfaces:
    :   android.graphics.drawable.Drawable.Callback,
        android.view.accessibility.AccessibilityEventSource,
        android.view.KeyEvent.Callback, android.view.ViewManager,
        android.view.ViewParent, OnPositionUpdateListener

    ------------------------------------------------------------------------

    \

        public class RoutingControlextends android.widget.LinearLayoutimplements OnPositionUpdateListener

    Creates routing control view to be placed on top of the map. This
    class adds navigation to the map by tilting the map and placing
    routes, buttons and views on the map

-   -   ### Nested Class Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `addToView(android.view.ViewGroup |
        |                                   |  googleMapView)`                  |
        |                                   | Add to view.                      |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `close()`                         |
        |                                   | Close.                            |
        +-----------------------------------+-----------------------------------+
        | `boolean`                         | `doStep(RouteStep action)`        |
        |                                   | Do step boolean.                  |
        +-----------------------------------+-----------------------------------+
        | `RouteStep`                       | `getCurrentStep()`                |
        |                                   | Get current route action          |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `onPositionFailed(PositionProvide |
        |                                   | r provider)`                      |
        |                                   | On position failed.               |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `onPositioningStarted(PositionPro |
        |                                   | vider provider)`                  |
        |                                   | On positioning started.           |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `onPositionUpdate(PositionResult  |
        |                                   | pos)`                             |
        |                                   | On position update.               |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `overviewRoute(Route route,       |
        |                                   |        Location destination,      |
        |                                   |         GoogleMap map)`           |
        |                                   | Overview route.                   |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `overviewRoute(Route route,       |
        |                                   |        Location destination,      |
        |                                   |         GoogleMap map,            |
        |                                   |   android.graphics.Bitmap bmp,    |
        |                                   |           android.graphics.Bitmap |
        |                                   |  bmpUnselected)`                  |
        |                                   | Overview route.                   |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `realtimeNavigation(Route route,  |
        |                                   |                  Location destina |
        |                                   | tion,                  GoogleMap  |
        |                                   | map)`                             |
        |                                   | Start routing session in          |
        |                                   | realtime, based on device         |
        |                                   | position - requires that a        |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setCurrentPosition(PositionUpdat |
        |                                   | e currentPosition)`               |
        |                                   | Sets current position.            |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `setOnRouteStepListener(RoutingCo |
        |                                   | ntrol.OnRouteStepListener listene |
        |                                   | r)`                               |
        |                                   | Register a routing event listener |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `showStep(Marker marker)`         |
        |                                   | Show step.                        |
        +-----------------------------------+-----------------------------------+
        | `boolean`                         | `showStep(RouteStep step)`        |
        |                                   | Show step boolean.                |
        +-----------------------------------+-----------------------------------+
        | `void`                            | `turnByTurn(Route route,          |
        |                                   |  Location destination,          G |
        |                                   | oogleMap map)`                    |
        |                                   | Start routing session turn by     |
        |                                   | turn, as the user tabs the screen |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class android.widget.LinearLayout

            `generateLayoutParams, getAccessibilityClassName, getBaseline, getBaselineAlignedChildIndex, getDividerDrawable, getDividerPadding, getGravity, getOrientation, getShowDividers, getWeightSum, isBaselineAligned, isMeasureWithLargestChildEnabled, onRtlPropertiesChanged, setBaselineAligned, setBaselineAlignedChildIndex, setDividerDrawable, setDividerPadding, setGravity, setHorizontalGravity, setMeasureWithLargestChildEnabled, setOrientation, setShowDividers, setVerticalGravity, setWeightSum, shouldDelayChildPressedState`

        &nbsp;
        -   ### Methods inherited from class android.view.ViewGroup

            `addChildrenForAccessibility, addFocusables, addStatesFromChildren, addTouchables, addView, addView, addView, addView, addView, bringChildToFront, childDrawableStateChanged, childHasTransientStateChanged, clearChildFocus, clearDisappearingChildren, clearFocus, dispatchApplyWindowInsets, dispatchConfigurationChanged, dispatchDisplayHint, dispatchDragEvent, dispatchDrawableHotspotChanged, dispatchKeyEvent, dispatchKeyEventPreIme, dispatchKeyShortcutEvent, dispatchProvideStructure, dispatchSetActivated, dispatchSetSelected, dispatchSystemUiVisibilityChanged, dispatchTouchEvent, dispatchTrackballEvent, dispatchUnhandledMove, dispatchWindowFocusChanged, dispatchWindowSystemUiVisiblityChanged, dispatchWindowVisibilityChanged, endViewTransition, findFocus, findViewsWithText, focusableViewAvailable, focusSearch, gatherTransparentRegion, getChildAt, getChildCount, getChildMeasureSpec, getChildVisibleRect, getClipChildren, getClipToPadding, getDescendantFocusability, getFocusedChild, getLayoutAnimation, getLayoutAnimationListener, getLayoutMode, getLayoutTransition, getNestedScrollAxes, getOverlay, getPersistentDrawingCache, getTouchscreenBlocksFocus, hasFocus, hasFocusable, hasTransientState, indexOfChild, invalidateChild, invalidateChildInParent, isAlwaysDrawnWithCacheEnabled, isAnimationCacheEnabled, isMotionEventSplittingEnabled, isTransitionGroup, jumpDrawablesToCurrentState, layout, notifySubtreeAccessibilityStateChanged, offsetDescendantRectToMyCoords, offsetRectIntoDescendantCoords, onInterceptHoverEvent, onInterceptTouchEvent, onNestedFling, onNestedPreFling, onNestedPrePerformAccessibilityAction, onNestedPreScroll, onNestedScroll, onNestedScrollAccepted, onRequestSendAccessibilityEvent, onResolvePointerIcon, onStartNestedScroll, onStopNestedScroll, onViewAdded, onViewRemoved, recomputeViewAttributes, removeAllViews, removeAllViewsInLayout, removeView, removeViewAt, removeViewInLayout, removeViews, removeViewsInLayout, requestChildFocus, requestChildRectangleOnScreen, requestDisallowInterceptTouchEvent, requestFocus, requestSendAccessibilityEvent, requestTransparentRegion, scheduleLayoutAnimation, setAddStatesFromChildren, setAlwaysDrawnWithCacheEnabled, setAnimationCacheEnabled, setClipChildren, setClipToPadding, setDescendantFocusability, setLayoutAnimation, setLayoutAnimationListener, setLayoutMode, setLayoutTransition, setMotionEventSplittingEnabled, setOnHierarchyChangeListener, setPersistentDrawingCache, setTouchscreenBlocksFocus, setTransitionGroup, showContextMenuForChild, showContextMenuForChild, startActionModeForChild, startActionModeForChild, startLayoutAnimation, startViewTransition, updateViewLayout`

        &nbsp;
        -   ### Methods inherited from class android.view.View

            `addFocusables, addOnAttachStateChangeListener, addOnLayoutChangeListener, animate, announceForAccessibility, bringToFront, buildDrawingCache, buildDrawingCache, buildLayer, callOnClick, cancelDragAndDrop, cancelLongPress, cancelPendingInputEvents, canResolveLayoutDirection, canResolveTextAlignment, canResolveTextDirection, canScrollHorizontally, canScrollVertically, checkInputConnectionProxy, clearAnimation, combineMeasuredStates, computeScroll, computeSystemWindowInsets, createAccessibilityNodeInfo, createContextMenu, destroyDrawingCache, dispatchFinishTemporaryDetach, dispatchGenericMotionEvent, dispatchNestedFling, dispatchNestedPreFling, dispatchNestedPrePerformAccessibilityAction, dispatchNestedPreScroll, dispatchNestedScroll, dispatchPopulateAccessibilityEvent, dispatchStartTemporaryDetach, draw, drawableHotspotChanged, findViewById, findViewWithTag, focusSearch, forceHasOverlappingRendering, forceLayout, generateViewId, getAccessibilityLiveRegion, getAccessibilityNodeProvider, getAccessibilityTraversalAfter, getAccessibilityTraversalBefore, getAlpha, getAnimation, getApplicationWindowToken, getBackground, getBackgroundTintList, getBackgroundTintMode, getBottom, getCameraDistance, getClipBounds, getClipBounds, getClipToOutline, getContentDescription, getContext, getDefaultSize, getDisplay, getDrawableState, getDrawingCache, getDrawingCache, getDrawingCacheBackgroundColor, getDrawingCacheQuality, getDrawingRect, getDrawingTime, getElevation, getFilterTouchesWhenObscured, getFitsSystemWindows, getFocusables, getFocusedRect, getForeground, getForegroundGravity, getForegroundTintList, getForegroundTintMode, getGlobalVisibleRect, getGlobalVisibleRect, getHandler, getHasOverlappingRendering, getHeight, getHitRect, getHorizontalFadingEdgeLength, getId, getImportantForAccessibility, getKeepScreenOn, getKeyDispatcherState, getLabelFor, getLayerType, getLayoutDirection, getLayoutParams, getLeft, getLocalVisibleRect, getLocationInWindow, getLocationOnScreen, getMatrix, getMeasuredHeight, getMeasuredHeightAndState, getMeasuredState, getMeasuredWidth, getMeasuredWidthAndState, getMinimumHeight, getMinimumWidth, getNextFocusDownId, getNextFocusForwardId, getNextFocusLeftId, getNextFocusRightId, getNextFocusUpId, getOnFocusChangeListener, getOutlineProvider, getOverScrollMode, getPaddingBottom, getPaddingEnd, getPaddingLeft, getPaddingRight, getPaddingStart, getPaddingTop, getParent, getParentForAccessibility, getPivotX, getPivotY, getPointerIcon, getResources, getRevealOnFocusHint, getRight, getRootView, getRootWindowInsets, getRotation, getRotationX, getRotationY, getScaleX, getScaleY, getScrollBarDefaultDelayBeforeFade, getScrollBarFadeDuration, getScrollBarSize, getScrollBarStyle, getScrollIndicators, getScrollX, getScrollY, getSolidColor, getStateListAnimator, getSystemUiVisibility, getTag, getTag, getTextAlignment, getTextDirection, getTop, getTouchables, getTouchDelegate, getTransitionName, getTranslationX, getTranslationY, getTranslationZ, getVerticalFadingEdgeLength, getVerticalScrollbarPosition, getVerticalScrollbarWidth, getViewTreeObserver, getVisibility, getWidth, getWindowId, getWindowSystemUiVisibility, getWindowToken, getWindowVisibility, getWindowVisibleDisplayFrame, getX, getY, getZ, hasNestedScrollingParent, hasOnClickListeners, hasOverlappingRendering, hasWindowFocus, inflate, invalidate, invalidate, invalidate, invalidateDrawable, invalidateOutline, isAccessibilityFocused, isActivated, isAttachedToWindow, isClickable, isContextClickable, isDirty, isDrawingCacheEnabled, isDuplicateParentStateEnabled, isEnabled, isFocusable, isFocusableInTouchMode, isFocused, isHapticFeedbackEnabled, isHardwareAccelerated, isHorizontalFadingEdgeEnabled, isHorizontalScrollBarEnabled, isHovered, isImportantForAccessibility, isInEditMode, isInLayout, isInTouchMode, isLaidOut, isLayoutDirectionResolved, isLayoutRequested, isLongClickable, isNestedScrollingEnabled, isOpaque, isPaddingRelative, isPressed, isSaveEnabled, isSaveFromParentEnabled, isScrollbarFadingEnabled, isScrollContainer, isSelected, isShown, isSoundEffectsEnabled, isTemporarilyDetached, isTextAlignmentResolved, isTextDirectionResolved, isVerticalFadingEdgeEnabled, isVerticalScrollBarEnabled, measure, offsetLeftAndRight, offsetTopAndBottom, onApplyWindowInsets, onCancelPendingInputEvents, onCheckIsTextEditor, onCreateInputConnection, onDragEvent, onDrawForeground, onFilterTouchEventForSecurity, onFinishTemporaryDetach, onGenericMotionEvent, onHoverChanged, onHoverEvent, onInitializeAccessibilityEvent, onInitializeAccessibilityNodeInfo, onKeyDown, onKeyLongPress, onKeyMultiple, onKeyPreIme, onKeyShortcut, onKeyUp, onPopulateAccessibilityEvent, onProvideStructure, onProvideVirtualStructure, onScreenStateChanged, onStartTemporaryDetach, onTouchEvent, onTrackballEvent, onVisibilityAggregated, onWindowFocusChanged, onWindowSystemUiVisibilityChanged, performAccessibilityAction, performClick, performContextClick, performContextClick, performHapticFeedback, performHapticFeedback, performLongClick, performLongClick, playSoundEffect, post, postDelayed, postInvalidate, postInvalidate, postInvalidateDelayed, postInvalidateDelayed, postInvalidateOnAnimation, postInvalidateOnAnimation, postOnAnimation, postOnAnimationDelayed, refreshDrawableState, removeCallbacks, removeOnAttachStateChangeListener, removeOnLayoutChangeListener, requestApplyInsets, requestFitSystemWindows, requestFocus, requestFocus, requestFocusFromTouch, requestLayout, requestRectangleOnScreen, requestRectangleOnScreen, requestUnbufferedDispatch, resolveSize, resolveSizeAndState, restoreHierarchyState, saveHierarchyState, scheduleDrawable, scrollBy, scrollTo, sendAccessibilityEvent, sendAccessibilityEventUnchecked, setAccessibilityDelegate, setAccessibilityLiveRegion, setAccessibilityTraversalAfter, setAccessibilityTraversalBefore, setActivated, setAlpha, setAnimation, setBackground, setBackgroundColor, setBackgroundDrawable, setBackgroundResource, setBackgroundTintList, setBackgroundTintMode, setBottom, setCameraDistance, setClickable, setClipBounds, setClipToOutline, setContentDescription, setContextClickable, setDrawingCacheBackgroundColor, setDrawingCacheEnabled, setDrawingCacheQuality, setDuplicateParentStateEnabled, setElevation, setEnabled, setFadingEdgeLength, setFilterTouchesWhenObscured, setFitsSystemWindows, setFocusable, setFocusableInTouchMode, setForeground, setForegroundGravity, setForegroundTintList, setForegroundTintMode, setHapticFeedbackEnabled, setHasTransientState, setHorizontalFadingEdgeEnabled, setHorizontalScrollBarEnabled, setHovered, setId, setImportantForAccessibility, setKeepScreenOn, setLabelFor, setLayerPaint, setLayerType, setLayoutDirection, setLayoutParams, setLeft, setLongClickable, setMinimumHeight, setMinimumWidth, setNestedScrollingEnabled, setNextFocusDownId, setNextFocusForwardId, setNextFocusLeftId, setNextFocusRightId, setNextFocusUpId, setOnApplyWindowInsetsListener, setOnClickListener, setOnContextClickListener, setOnCreateContextMenuListener, setOnDragListener, setOnFocusChangeListener, setOnGenericMotionListener, setOnHoverListener, setOnKeyListener, setOnLongClickListener, setOnScrollChangeListener, setOnSystemUiVisibilityChangeListener, setOnTouchListener, setOutlineProvider, setOverScrollMode, setPadding, setPaddingRelative, setPivotX, setPivotY, setPointerIcon, setPressed, setRevealOnFocusHint, setRight, setRotation, setRotationX, setRotationY, setSaveEnabled, setSaveFromParentEnabled, setScaleX, setScaleY, setScrollBarDefaultDelayBeforeFade, setScrollBarFadeDuration, setScrollbarFadingEnabled, setScrollBarSize, setScrollBarStyle, setScrollContainer, setScrollIndicators, setScrollIndicators, setScrollX, setScrollY, setSelected, setSoundEffectsEnabled, setStateListAnimator, setSystemUiVisibility, setTag, setTag, setTextAlignment, setTextDirection, setTop, setTouchDelegate, setTransitionName, setTranslationX, setTranslationY, setTranslationZ, setVerticalFadingEdgeEnabled, setVerticalScrollBarEnabled, setVerticalScrollbarPosition, setVisibility, setWillNotCacheDrawing, setWillNotDraw, setX, setY, setZ, showContextMenu, showContextMenu, startActionMode, startActionMode, startAnimation, startDrag, startDragAndDrop, startNestedScroll, stopNestedScroll, toString, unscheduleDrawable, unscheduleDrawable, updateDragShadow, willNotCacheDrawing, willNotDraw`

        &nbsp;
        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, wait, wait, wait`

        &nbsp;
        -   ### Methods inherited from interface android.view.ViewParent

            `canResolveLayoutDirection, canResolveTextAlignment, canResolveTextDirection, createContextMenu, getLayoutDirection, getParent, getParentForAccessibility, getTextAlignment, getTextDirection, isLayoutDirectionResolved, isLayoutRequested, isTextAlignmentResolved, isTextDirectionResolved, requestFitSystemWindows, requestLayout`

-   -   ### Constructor Detail

        -   #### RoutingControl

                public RoutingControl(android.content.Context context)

            Instantiate the routing control view

            [Parameters:]{.paramLabel}
            :   `context` - the context

    &nbsp;
    -   ### Method Detail

        -   #### setOnRouteStepListener

                public void setOnRouteStepListener(RoutingControl.OnRouteStepListener listener)

            Register a routing event listener

            [Parameters:]{.paramLabel}
            :   `listener` - The listener

        &nbsp;
        -   #### getCurrentStep

                public RouteStep getCurrentStep()

            Get current route action

            [Returns:]{.returnLabel}
            :   The current route action

        &nbsp;
        -   #### turnByTurn

                public void turnByTurn(Route route,                       Location destination,                       GoogleMap map)

            Start routing session turn by turn, as the user tabs the
            screen

            [Parameters:]{.paramLabel}
            :   `route` - The current route
            :   `destination` - The destination
            :   `map` - The Google map to interoperate with

        &nbsp;
        -   #### overviewRoute

                public void overviewRoute(Route route,                          Location destination,                          GoogleMap map)

            Overview route.

            [Parameters:]{.paramLabel}
            :   `route` - the route
            :   `destination` - the destination
            :   `map` - the map

        &nbsp;
        -   #### overviewRoute

                public void overviewRoute(Route route,                          Location destination,                          GoogleMap map,                          android.graphics.Bitmap bmp,                          android.graphics.Bitmap bmpUnselected)

            Overview route.

            [Parameters:]{.paramLabel}
            :   `route` - the route
            :   `destination` - the destination
            :   `map` - the map
            :   `bmp` - the bmp
            :   `bmpUnselected` - the bmp unselected

        &nbsp;
        -   #### realtimeNavigation

                public void realtimeNavigation(Route route,                               Location destination,                               GoogleMap map)

            Start routing session in realtime, based on device
            position - requires that a

            [Parameters:]{.paramLabel}
            :   `route` - The current route
            :   `destination` - The destination
            :   `map` - The Google map to interoperate with

        &nbsp;
        -   #### showStep

                public boolean showStep(RouteStep step)

            Show step boolean.

            [Parameters:]{.paramLabel}
            :   `step` - the step

            [Returns:]{.returnLabel}
            :   the boolean

        &nbsp;
        -   #### doStep

                public boolean doStep(RouteStep action)

            Do step boolean.

            [Parameters:]{.paramLabel}
            :   `action` - the action

            [Returns:]{.returnLabel}
            :   the boolean

        &nbsp;
        -   #### addToView

                public void addToView(android.view.ViewGroup googleMapView)

            Add to view.

            [Parameters:]{.paramLabel}
            :   `googleMapView` - the google map view

        &nbsp;
        -   #### close

                public void close()

            Close.

        &nbsp;
        -   #### setCurrentPosition

                public void setCurrentPosition(PositionUpdate currentPosition)

            Sets current position.

            [Parameters:]{.paramLabel}
            :   `currentPosition` - the current position

        &nbsp;
        -   #### onPositionUpdate

                public void onPositionUpdate(PositionResult pos)

            On position update.

            [Specified by:]{.overrideSpecifyLabel}
            :   `onPositionUpdate` in
                interface `OnPositionUpdateListener`

            [Parameters:]{.paramLabel}
            :   `pos` - the pos

        &nbsp;
        -   #### showStep

                public void showStep(Marker marker)

            Show step.

            [Parameters:]{.paramLabel}
            :   `marker` - the marker

        &nbsp;
        -   #### onPositionFailed

                public void onPositionFailed(PositionProvider provider)

            On position failed.

            [Specified by:]{.overrideSpecifyLabel}
            :   `onPositionFailed` in
                interface `OnPositionUpdateListener`

            [Parameters:]{.paramLabel}
            :   `provider` - the provider

        &nbsp;
        -   #### onPositioningStarted

                public void onPositioningStarted(PositionProvider provider)

            On positioning started.

            [Specified by:]{.overrideSpecifyLabel}
            :   `onPositioningStarted` in
                interface `OnPositionUpdateListener`

            [Parameters:]{.paramLabel}
            :   `provider` - the provider

util
====

com.mapspeople.util

Class BitmapLabel {#class-bitmaplabel .title title="Class BitmapLabel"}
-----------------

-   java.lang.Object
-   -   com.mapspeople.util.BitmapLabel

-   

    ------------------------------------------------------------------------

    \

        public class BitmapLabelextends java.lang.Object

    The type Bitmap label.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `static android.graphics.Bitmap`  | `drawLabel(java.lang.String label |
        |                                   | Content,         android.graphics |
        |                                   | .Bitmap icon)`                    |
        |                                   | Draw label bitmap.                |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### BitmapLabel

                public BitmapLabel()

    &nbsp;
    -   ### Method Detail

        -   #### drawLabel

                public static android.graphics.Bitmap drawLabel(java.lang.String labelContent,                                                android.graphics.Bitmap icon)

            Draw label bitmap.

            [Parameters:]{.paramLabel}
            :   `labelContent` - the label content
            :   `icon` - the icon

            [Returns:]{.returnLabel}
            :   the bitmap

com.mapspeople.util

Class ConversionFactors {#class-conversionfactors .title title="Class ConversionFactors"}
-----------------------

-   java.lang.Object
-   -   com.mapspeople.util.ConversionFactors

-   

    ------------------------------------------------------------------------

    \

        public class ConversionFactorsextends java.lang.Object

    This class holds fixed conversion factors.

-   -   ### Field Summary

          Constructor and Description
          -----------------------------
          `ConversionFactors()` 

    &nbsp;
    -   ### Method Summary

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Field Detail

        -   #### DegreesToRadians

                public static final double DegreesToRadians

            Conversion factor from degrees to radians.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### GonToRadians

                public static final double GonToRadians

            Conversion factor from gon to radians.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### RadiansToDegrees

                public static final double RadiansToDegrees

            Conversion factor from radians to degrees.

            [See Also:]{.seeLabel}
            :   Constant Field Values

        &nbsp;
        -   #### RadiansToGon

                public static final double RadiansToGon

            Conversion factor from radians to gon.

            [See Also:]{.seeLabel}
            :   Constant Field Values

    &nbsp;
    -   ### Constructor Detail

        -   #### ConversionFactors

                public ConversionFactors()

com.mapspeople.util

Class Convert {#class-convert .title title="Class Convert"}
-------------

-   java.lang.Object
-   -   com.mapspeople.util.Convert

-   

    ------------------------------------------------------------------------

    \

        public class Convertextends java.lang.Object

    The type Convert.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `static android.content.Context`  | `getContext()`                    |
        |                                   | Gets context.                     |
        +-----------------------------------+-----------------------------------+
        | `static int`                      | `getPixels(float densityIndepende |
        |                                   | ntPixels)`                        |
        |                                   | Gets pixels.                      |
        +-----------------------------------+-----------------------------------+
        | `static int`                      | `getPixels(float densityIndepende |
        |                                   | ntPixels,         android.content |
        |                                   | .Context appContext)`             |
        |                                   | Gets pixels.                      |
        +-----------------------------------+-----------------------------------+
        | `static void`                     | `init(android.content.Context app |
        |                                   | Context)`                         |
        |                                   | Init.                             |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### Convert

                public Convert()

    &nbsp;
    -   ### Method Detail

        -   #### init

                public static void init(android.content.Context appContext)

            Init.

            [Parameters:]{.paramLabel}
            :   `appContext` - the app context

        &nbsp;
        -   #### getPixels

                public static int getPixels(float densityIndependentPixels,                            android.content.Context appContext)

            Gets pixels.

            [Parameters:]{.paramLabel}
            :   `densityIndependentPixels` - the density independent
                pixels
            :   `appContext` - the app context

            [Returns:]{.returnLabel}
            :   the pixels

        &nbsp;
        -   #### getPixels

                public static int getPixels(float densityIndependentPixels)

            Gets pixels.

            [Parameters:]{.paramLabel}
            :   `densityIndependentPixels` - the density independent
                pixels

            [Returns:]{.returnLabel}
            :   the pixels

        &nbsp;
        -   #### getContext

                public static android.content.Context getContext()

            Gets context.

            [Returns:]{.returnLabel}
            :   the context

com.mapspeople.util

Class FilePathHelper {#class-filepathhelper .title title="Class FilePathHelper"}
--------------------

-   java.lang.Object
-   -   com.mapspeople.util.FilePathHelper

-   

    ------------------------------------------------------------------------

    \

        public class FilePathHelperextends java.lang.Object

    The type File path helper.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `static java.lang.String`         | `getPath(android.content.Context  |
        |                                   | context)`                         |
        |                                   | Gets path.                        |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### FilePathHelper

                public FilePathHelper()

    &nbsp;
    -   ### Method Detail

        -   #### getPath

                public static java.lang.String getPath(android.content.Context context)

            Gets path.

            [Parameters:]{.paramLabel}
            :   `context` - the context

            [Returns:]{.returnLabel}
            :   the path

com.mapspeople.util

Class GeoAnimator {#class-geoanimator .title title="Class GeoAnimator"}
-----------------

-   java.lang.Object
-   -   com.mapspeople.util.GeoAnimator

-   

    ------------------------------------------------------------------------

    \

        public class GeoAnimatorextends java.lang.Object

    The type Geo animator.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `static void`                     | `doAnimation(Marker _marker,      |
        |                                   |       LatLng _target,           i |
        |                                   | nt _duration)`                    |
        |                                   | Do animation.                     |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### GeoAnimator

                public GeoAnimator()

    &nbsp;
    -   ### Method Detail

        -   #### doAnimation

                public static void doAnimation(Marker _marker,                               LatLng _target,                               int _duration)

            Do animation.

            [Parameters:]{.paramLabel}
            :   `_marker` - the marker
            :   `_target` - the target
            :   `_duration` - the duration

com.mapspeople.util

Class JsonUtil {#class-jsonutil .title title="Class JsonUtil"}
--------------

-   java.lang.Object
-   -   com.mapspeople.util.JsonUtil

-   

    ------------------------------------------------------------------------

    \

        public class JsonUtilextends java.lang.Object

    The type Json util.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `<T> T`                           | `deserialize(java.lang.String dat |
        |                                   | a,           java.lang.reflect.Ty |
        |                                   | pe typeOfSrc)`                    |
        |                                   | Deserialize t.                    |
        +-----------------------------------+-----------------------------------+
        | `java.lang.String`                | `toJson(java.lang.Object src,     |
        |                                   |   java.lang.reflect.Type typeOfSr |
        |                                   | c)`                               |
        |                                   | To json string.                   |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### JsonUtil

                public JsonUtil()

    &nbsp;
    -   ### Method Detail

        -   #### deserialize

                public <T> T deserialize(java.lang.String data,                         java.lang.reflect.Type typeOfSrc)

            Deserialize t.

            [Type Parameters:]{.paramLabel}
            :   `T` - the type parameter

            [Parameters:]{.paramLabel}
            :   `data` - the data
            :   `typeOfSrc` - the type of src

            [Returns:]{.returnLabel}
            :   the t

        &nbsp;
        -   #### toJson

                public java.lang.String toJson(java.lang.Object src,                               java.lang.reflect.Type typeOfSrc)

            To json string.

            [Parameters:]{.paramLabel}
            :   `src` - the src
            :   `typeOfSrc` - the type of src

            [Returns:]{.returnLabel}
            :   the string

com.mapspeople.util

Class MathUtil {#class-mathutil .title title="Class MathUtil"}
--------------

-   java.lang.Object
-   -   com.mapspeople.util.MathUtil

-   

    ------------------------------------------------------------------------

    \

        public class MathUtilextends java.lang.Object

    Utility functions that are used my both PolyUtil and SphericalUtil.

-   -   ### Field Summary

          Constructor and Description
          -----------------------------
          `MathUtil()` 

    &nbsp;
    -   ### Method Summary

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Field Detail

        -   #### EARTH\_RADIUS

                public static final double EARTH_RADIUS

            The earth's radius, in meters. Mean radius as defined by
            IUGG.

            [See Also:]{.seeLabel}
            :   Constant Field Values

    &nbsp;
    -   ### Constructor Detail

        -   #### MathUtil

                public MathUtil()

com.mapspeople.util

Class PolyUtil {#class-polyutil .title title="Class PolyUtil"}
--------------

-   java.lang.Object
-   -   com.mapspeople.util.PolyUtil

-   

    ------------------------------------------------------------------------

    \

        public class PolyUtilextends java.lang.Object

    The type Poly util.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `static boolean`                  | `containsLocation(LatLng point,   |
        |                                   |               java.util.List<LatL |
        |                                   | ng> polygon,                boole |
        |                                   | an geodesic)`                     |
        |                                   | Computes whether the given point  |
        |                                   | lies inside the specified         |
        |                                   | polygon.                          |
        +-----------------------------------+-----------------------------------+
        | `static java.util.List<LatLng>`   | `decode(java.lang.String encodedP |
        |                                   | ath)`                             |
        |                                   | Decodes an encoded path string    |
        |                                   | into a sequence of LatLngs.       |
        +-----------------------------------+-----------------------------------+
        | `static java.lang.String`         | `encode(java.util.List<LatLng> pa |
        |                                   | th)`                              |
        |                                   | Encodes a sequence of LatLngs     |
        |                                   | into an encoded path string.      |
        +-----------------------------------+-----------------------------------+
        | `static boolean`                  | `isLocationOnEdge(LatLng point,   |
        |                                   |               java.util.List<LatL |
        |                                   | ng> polygon,                boole |
        |                                   | an geodesic)`                     |
        |                                   | Same as                           |
        |                                   | `isLocationOnEdge(LatLng, List, b |
        |                                   | oolean, double)`                  |
        |                                   | with a default tolerance of 0.1   |
        |                                   | meters.                           |
        +-----------------------------------+-----------------------------------+
        | `static boolean`                  | `isLocationOnEdge(LatLng point,   |
        |                                   |               java.util.List<LatL |
        |                                   | ng> polygon,                boole |
        |                                   | an geodesic,                doubl |
        |                                   | e tolerance)`                     |
        |                                   | Computes whether the given point  |
        |                                   | lies on or near the edge of a     |
        |                                   | polygon, within a specified       |
        |                                   | tolerance in meters.              |
        +-----------------------------------+-----------------------------------+
        | `static boolean`                  | `isLocationOnPath(LatLng point,   |
        |                                   |               java.util.List<LatL |
        |                                   | ng> polyline,                bool |
        |                                   | ean geodesic)`                    |
        |                                   | Same as                           |
        |                                   | `isLocationOnPath(LatLng, List, b |
        |                                   | oolean, double)`                  |
        +-----------------------------------+-----------------------------------+
        | `static boolean`                  | `isLocationOnPath(LatLng point,   |
        |                                   |               java.util.List<LatL |
        |                                   | ng> polyline,                bool |
        |                                   | ean geodesic,                doub |
        |                                   | le tolerance)`                    |
        |                                   | Computes whether the given point  |
        |                                   | lies on or near a polyline,       |
        |                                   | within a specified tolerance in   |
        |                                   | meters.                           |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Method Detail

        -   #### containsLocation

                public static boolean containsLocation(LatLng point,                                       java.util.List<LatLng> polygon,                                       boolean geodesic)

            Computes whether the given point lies inside the specified
            polygon. The polygon is always cosidered closed, regardless
            of whether the last point equals the first or not. Inside is
            defined as not containing the South Pole -- the South Pole
            is always outside. The polygon is formed of great circle
            segments if geodesic is true, and of rhumb (loxodromic)
            segments otherwise.

            [Parameters:]{.paramLabel}
            :   `point` - the point
            :   `polygon` - the polygon
            :   `geodesic` - the geodesic

            [Returns:]{.returnLabel}
            :   the boolean

        &nbsp;
        -   #### isLocationOnEdge

                public static boolean isLocationOnEdge(LatLng point,                                       java.util.List<LatLng> polygon,                                       boolean geodesic,                                       double tolerance)

            Computes whether the given point lies on or near the edge of
            a polygon, within a specified tolerance in meters. The
            polygon edge is composed of great circle segments if
            geodesic is true, and of Rhumb segments otherwise. The
            polygon edge is implicitly closed -- the closing segment
            between the first point and the last point is included.

            [Parameters:]{.paramLabel}
            :   `point` - the point
            :   `polygon` - the polygon
            :   `geodesic` - the geodesic
            :   `tolerance` - the tolerance

            [Returns:]{.returnLabel}
            :   the boolean

        &nbsp;
        -   #### isLocationOnEdge

                public static boolean isLocationOnEdge(LatLng point,                                       java.util.List<LatLng> polygon,                                       boolean geodesic)

            Same as `isLocationOnEdge(LatLng, List, boolean, double)`
            with a default tolerance of 0.1 meters.

            [Parameters:]{.paramLabel}
            :   `point` - the point
            :   `polygon` - the polygon
            :   `geodesic` - the geodesic

            [Returns:]{.returnLabel}
            :   the boolean

        &nbsp;
        -   #### isLocationOnPath

                public static boolean isLocationOnPath(LatLng point,                                       java.util.List<LatLng> polyline,                                       boolean geodesic,                                       double tolerance)

            Computes whether the given point lies on or near a polyline,
            within a specified tolerance in meters. The polyline is
            composed of great circle segments if geodesic is true, and
            of Rhumb segments otherwise. The polyline is not closed --
            the closing segment between the first point and the last
            point is not included.

            [Parameters:]{.paramLabel}
            :   `point` - the point
            :   `polyline` - the polyline
            :   `geodesic` - the geodesic
            :   `tolerance` - the tolerance

            [Returns:]{.returnLabel}
            :   the boolean

        &nbsp;
        -   #### isLocationOnPath

                public static boolean isLocationOnPath(LatLng point,                                       java.util.List<LatLng> polyline,                                       boolean geodesic)

            Same as `isLocationOnPath(LatLng, List, boolean, double)`
            with a default tolerance of 0.1 meters.

            [Parameters:]{.paramLabel}
            :   `point` - the point
            :   `polyline` - the polyline
            :   `geodesic` - the geodesic

            [Returns:]{.returnLabel}
            :   the boolean

        &nbsp;
        -   #### decode

                public static java.util.List<LatLng> decode(java.lang.String encodedPath)

            Decodes an encoded path string into a sequence of LatLngs.

            [Parameters:]{.paramLabel}
            :   `encodedPath` - the encoded path

            [Returns:]{.returnLabel}
            :   the list

        &nbsp;
        -   #### encode

                public static java.lang.String encode(java.util.List<LatLng> path)

            Encodes a sequence of LatLngs into an encoded path string.

            [Parameters:]{.paramLabel}
            :   `path` - the path

            [Returns:]{.returnLabel}
            :   the string

com.mapspeople.util

Class SphericalUtil {#class-sphericalutil .title title="Class SphericalUtil"}
-------------------

-   java.lang.Object
-   -   com.mapspeople.util.SphericalUtil

-   

    ------------------------------------------------------------------------

    \

        public class SphericalUtilextends java.lang.Object

    The type Spherical util.

-   -   ### Method Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `static double`                   | `computeArea(java.util.List<LatLn |
        |                                   | g> path)`                         |
        |                                   | Returns the area of a closed path |
        |                                   | on Earth.                         |
        +-----------------------------------+-----------------------------------+
        | `static double`                   | `computeDistanceBetween(LatLng fr |
        |                                   | om,                      LatLng t |
        |                                   | o)`                               |
        |                                   | Returns the distance between two  |
        |                                   | LatLngs, in meters.               |
        +-----------------------------------+-----------------------------------+
        | `static double`                   | `computeHeading(LatLng from,      |
        |                                   |          LatLng to)`              |
        |                                   | Returns the heading from one      |
        |                                   | LatLng to another LatLng.         |
        +-----------------------------------+-----------------------------------+
        | `static double`                   | `computeLength(java.util.List<Lat |
        |                                   | Lng> path)`                       |
        |                                   | Returns the length of the given   |
        |                                   | path, in meters, on Earth.        |
        +-----------------------------------+-----------------------------------+
        | `static LatLng`                   | `computeOffset(LatLng from,       |
        |                                   |        double distance,           |
        |                                   |    double heading)`               |
        |                                   | Returns the LatLng resulting from |
        |                                   | moving a distance from an origin  |
        |                                   | in the specified heading          |
        |                                   | (expressed in degrees clockwise   |
        |                                   | from north).                      |
        +-----------------------------------+-----------------------------------+
        | `static LatLng`                   | `computeOffsetOrigin(LatLng to,   |
        |                                   |                  double distance, |
        |                                   |                    double heading |
        |                                   | )`                                |
        |                                   | Returns the location of origin    |
        |                                   | when provided with a LatLng       |
        |                                   | destination, meters travelled and |
        |                                   | original heading.                 |
        +-----------------------------------+-----------------------------------+
        | `static double`                   | `computeSignedArea(java.util.List |
        |                                   | <LatLng> path)`                   |
        |                                   | Returns the signed area of a      |
        |                                   | closed path on Earth.             |
        +-----------------------------------+-----------------------------------+
        | `static LatLng`                   | `interpolate(LatLng from,         |
        |                                   |    LatLng to,           double fr |
        |                                   | action)`                          |
        |                                   | Returns the LatLng which lies the |
        |                                   | given fraction of the way between |
        |                                   | the origin LatLng and the         |
        |                                   | destination LatLng.               |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Method Detail

        -   #### computeHeading

                public static double computeHeading(LatLng from,                                    LatLng to)

            Returns the heading from one LatLng to another LatLng.
            Headings are expressed in degrees clockwise from North
            within the range \[-180,180).

            [Parameters:]{.paramLabel}
            :   `from` - the from
            :   `to` - the to

            [Returns:]{.returnLabel}
            :   The heading in degrees clockwise from north.

        &nbsp;
        -   #### computeOffset

                public static LatLng computeOffset(LatLng from,                                   double distance,                                   double heading)

            Returns the LatLng resulting from moving a distance from an
            origin in the specified heading (expressed in degrees
            clockwise from north).

            [Parameters:]{.paramLabel}
            :   `from` - The LatLng from which to start.
            :   `distance` - The distance to travel.
            :   `heading` - The heading in degrees clockwise from north.

            [Returns:]{.returnLabel}
            :   the lat lng

        &nbsp;
        -   #### computeOffsetOrigin

                public static LatLng computeOffsetOrigin(LatLng to,                                         double distance,                                         double heading)

            Returns the location of origin when provided with a LatLng
            destination, meters travelled and original heading. Headings
            are expressed in degrees clockwise from North. This function
            returns null when no solution is available.

            [Parameters:]{.paramLabel}
            :   `to` - The destination LatLng.
            :   `distance` - The distance travelled, in meters.
            :   `heading` - The heading in degrees clockwise from north.

            [Returns:]{.returnLabel}
            :   the lat lng

        &nbsp;
        -   #### interpolate

                public static LatLng interpolate(LatLng from,                                 LatLng to,                                 double fraction)

            Returns the LatLng which lies the given fraction of the way
            between the origin LatLng and the destination LatLng.

            [Parameters:]{.paramLabel}
            :   `from` - The LatLng from which to start.
            :   `to` - The LatLng toward which to travel.
            :   `fraction` - A fraction of the distance to travel.

            [Returns:]{.returnLabel}
            :   The interpolated LatLng.

        &nbsp;
        -   #### computeDistanceBetween

                public static double computeDistanceBetween(LatLng from,                                            LatLng to)

            Returns the distance between two LatLngs, in meters.

            [Parameters:]{.paramLabel}
            :   `from` - the from
            :   `to` - the to

            [Returns:]{.returnLabel}
            :   the double

        &nbsp;
        -   #### computeLength

                public static double computeLength(java.util.List<LatLng> path)

            Returns the length of the given path, in meters, on Earth.

            [Parameters:]{.paramLabel}
            :   `path` - the path

            [Returns:]{.returnLabel}
            :   the double

        &nbsp;
        -   #### computeArea

                public static double computeArea(java.util.List<LatLng> path)

            Returns the area of a closed path on Earth.

            [Parameters:]{.paramLabel}
            :   `path` - A closed path.

            [Returns:]{.returnLabel}
            :   The path's area in square meters.

        &nbsp;
        -   #### computeSignedArea

                public static double computeSignedArea(java.util.List<LatLng> path)

            Returns the signed area of a closed path on Earth. The sign
            of the area may be used to determine the orientation of the
            path. "inside" is the surface that does not contain the
            South Pole.

            [Parameters:]{.paramLabel}
            :   `path` - A closed path.

            [Returns:]{.returnLabel}
            :   The loop's area in square meters.

com.mapspeople.util

Class ThreadUtil {#class-threadutil .title title="Class ThreadUtil"}
----------------

-   java.lang.Object
-   -   com.mapspeople.util.ThreadUtil

-   

    ------------------------------------------------------------------------

    \

        public class ThreadUtilextends java.lang.Object

    ThreadUtil created by mh on 09-02-2016.

-   -   ### Constructor Summary

        +-----------------------------------+-----------------------------------+
        | Modifier and Type                 | Method and Description            |
        +===================================+===================================+
        | `void`                            | `sleep(int milliseconds)`         |
        |                                   | Sleep.                            |
        +-----------------------------------+-----------------------------------+

        -   ### Methods inherited from class java.lang.Object

            `equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail

        -   #### ThreadUtil

                public ThreadUtil()

    &nbsp;
    -   ### Method Detail

        -   #### sleep

                public void sleep(int milliseconds)

            Sleep.

            [Parameters:]{.paramLabel}
            :   `milliseconds` - the milliseconds
