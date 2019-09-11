## class `FAImageView` {#interface_f_a_image_view}

```
class FAImageView
  : public UIImageView
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} UIColor *defaultIconColor `[`UI_APPEARANCE_SELECTOR`](#interface_f_a_image_view_1ab79d2697a02b4d69d639a63d6d17fe6e) | 
`{property} NSString * `[`defaultIconIdentifier`](#interface_f_a_image_view_1ad115c737ba73f278ea06e0a45f0cae3a) | 
`{property} FAIcon `[`defaultIcon`](#interface_f_a_image_view_1a113f901c04413fbcc403be555e377f49) | 
`{property} UILabel * `[`defaultView`](#interface_f_a_image_view_1aed8d5150b3cd8d53346d7b636fa7c0a0) | 

### Members

##### `{property} UIColor *defaultIconColor `[`UI_APPEARANCE_SELECTOR`](#interface_f_a_image_view_1ab79d2697a02b4d69d639a63d6d17fe6e) {#interface_f_a_image_view_1ab79d2697a02b4d69d639a63d6d17fe6e}

##### `{property} NSString * `[`defaultIconIdentifier`](#interface_f_a_image_view_1ad115c737ba73f278ea06e0a45f0cae3a) {#interface_f_a_image_view_1ad115c737ba73f278ea06e0a45f0cae3a}

##### `{property} FAIcon `[`defaultIcon`](#interface_f_a_image_view_1a113f901c04413fbcc403be555e377f49) {#interface_f_a_image_view_1a113f901c04413fbcc403be555e377f49}

##### `{property} UILabel * `[`defaultView`](#interface_f_a_image_view_1aed8d5150b3cd8d53346d7b636fa7c0a0) {#interface_f_a_image_view_1aed8d5150b3cd8d53346d7b636fa7c0a0}

## class `MapsIndoors` {#interface_maps_indoors}

```
class MapsIndoors
  : public NSObject
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} UIFont * `[`mapLabelFont`](#interface_maps_indoors_1a9bc9cc20d5f2728ee55e91c4d303888c) | The font that MapsIndoors should use when rendering labels on the map.
`{property} UIColor * `[`mapLabelColor`](#interface_maps_indoors_1a8dbf0429c7d89849e53c43839343cccb) | The color that MapsIndoors should use when rendering labels on the map.
`{property} id< MPPositionProvider > `[`positionProvider`](#interface_maps_indoors_1a14e631fe875ff10b0c5424c75e56d71e) | The position provider that MapsIndoors should use when user location services are needed.
`{property} CGSize `[`mapIconSize`](#interface_maps_indoors_1aa9a9c129d1258ebbd30455f9a0b27a3a) | Default map icon size
`{property} id< MPImageProvider > `[`imageProvider`](#interface_maps_indoors_1af90eeaff4b502921f231473105c117ba) | The image provider that MapsIndoors should use when image ressources are needed. MapsIndoors will provide a default if this property is nil.
`{property} id< `[`MPLocationsProvider`](#interface_m_p_locations_provider)` > `[`locationsProvider`](#interface_maps_indoors_1abd504db700139b41c29b6336f6fe9d6f) | The location provider that MapsIndoors should use.

### Members

##### `{property} UIFont * `[`mapLabelFont`](#interface_maps_indoors_1a9bc9cc20d5f2728ee55e91c4d303888c) {#interface_maps_indoors_1a9bc9cc20d5f2728ee55e91c4d303888c}

The font that MapsIndoors should use when rendering labels on the map.

##### `{property} UIColor * `[`mapLabelColor`](#interface_maps_indoors_1a8dbf0429c7d89849e53c43839343cccb) {#interface_maps_indoors_1a8dbf0429c7d89849e53c43839343cccb}

The color that MapsIndoors should use when rendering labels on the map.

##### `{property} id< MPPositionProvider > `[`positionProvider`](#interface_maps_indoors_1a14e631fe875ff10b0c5424c75e56d71e) {#interface_maps_indoors_1a14e631fe875ff10b0c5424c75e56d71e}

The position provider that MapsIndoors should use when user location services are needed.

##### `{property} CGSize `[`mapIconSize`](#interface_maps_indoors_1aa9a9c129d1258ebbd30455f9a0b27a3a) {#interface_maps_indoors_1aa9a9c129d1258ebbd30455f9a0b27a3a}

Default map icon size

##### `{property} id< MPImageProvider > `[`imageProvider`](#interface_maps_indoors_1af90eeaff4b502921f231473105c117ba) {#interface_maps_indoors_1af90eeaff4b502921f231473105c117ba}

The image provider that MapsIndoors should use when image ressources are needed. MapsIndoors will provide a default if this property is nil.

##### `{property} id< `[`MPLocationsProvider`](#interface_m_p_locations_provider)` > `[`locationsProvider`](#interface_maps_indoors_1abd504db700139b41c29b6336f6fe9d6f) {#interface_maps_indoors_1abd504db700139b41c29b6336f6fe9d6f}

The location provider that MapsIndoors should use.

## class `MPAppData` {#interface_m_p_app_data}

```
class MPAppData
  : public MPJSONModel
```  

Provides the contextual information needed for setting up a map with specific MapsPeople site data

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} `[`MPLocationDisplayRuleset`](#interface_m_p_location_display_ruleset)`< Ignore > * `[`displayRuleset`](#interface_m_p_app_data_1a77b8f57c90db45a6e366c695b61173c6) | Ruleset that defines how and when to show the different map markers
`{property} NSString< Optional > * `[`colorPrimary`](#interface_m_p_app_data_1a1180b96bf7d767d1a555c218105feecc) | 
`{property} NSString< Optional > * `[`colorPrimaryDark`](#interface_m_p_app_data_1a2fe0873f1b674a6cb0ba25d57015c8df) | 
`{property} NSString< Optional > * `[`colorAccent`](#interface_m_p_app_data_1a33a541d14f776cd98781469def9a0f44) | 
`{property} NSDictionary< NSString *, NSArray< NSDictionary * > * > * `[`menuInfo`](#interface_m_p_app_data_1a0d3faf7040492e38b1c7a507893bcef8) | 
`{property} NSDictionary< NSString *, NSString * >< Optional > * `[`venueImages`](#interface_m_p_app_data_1a2350cf760fecb3fafe465e59525e1282) | 
`{property} NSDictionary< NSString *, NSString * >< Optional > * `[`appSettings`](#interface_m_p_app_data_1a879a2fc46beb408a23104b4d0eaff7e0) | 

### Members

##### `{property} `[`MPLocationDisplayRuleset`](#interface_m_p_location_display_ruleset)`< Ignore > * `[`displayRuleset`](#interface_m_p_app_data_1a77b8f57c90db45a6e366c695b61173c6) {#interface_m_p_app_data_1a77b8f57c90db45a6e366c695b61173c6}

Ruleset that defines how and when to show the different map markers

##### `{property} NSString< Optional > * `[`colorPrimary`](#interface_m_p_app_data_1a1180b96bf7d767d1a555c218105feecc) {#interface_m_p_app_data_1a1180b96bf7d767d1a555c218105feecc}

##### `{property} NSString< Optional > * `[`colorPrimaryDark`](#interface_m_p_app_data_1a2fe0873f1b674a6cb0ba25d57015c8df) {#interface_m_p_app_data_1a2fe0873f1b674a6cb0ba25d57015c8df}

##### `{property} NSString< Optional > * `[`colorAccent`](#interface_m_p_app_data_1a33a541d14f776cd98781469def9a0f44) {#interface_m_p_app_data_1a33a541d14f776cd98781469def9a0f44}

##### `{property} NSDictionary< NSString *, NSArray< NSDictionary * > * > * `[`menuInfo`](#interface_m_p_app_data_1a0d3faf7040492e38b1c7a507893bcef8) {#interface_m_p_app_data_1a0d3faf7040492e38b1c7a507893bcef8}

##### `{property} NSDictionary< NSString *, NSString * >< Optional > * `[`venueImages`](#interface_m_p_app_data_1a2350cf760fecb3fafe465e59525e1282) {#interface_m_p_app_data_1a2350cf760fecb3fafe465e59525e1282}

##### `{property} NSDictionary< NSString *, NSString * >< Optional > * `[`appSettings`](#interface_m_p_app_data_1a879a2fc46beb408a23104b4d0eaff7e0) {#interface_m_p_app_data_1a879a2fc46beb408a23104b4d0eaff7e0}

## class `MPAppDataProvider` {#interface_m_p_app_data_provider}

```
class MPAppDataProvider
  : public NSObject
```  

The app data provider acts as a service for the metadata ([MPAppData](#interface_m_p_app_data)) of a MapsIndoors app solution.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} id< MPAppDataProviderDelegate > `[`delegate`](#interface_m_p_app_data_provider_1a9487b57e520fbd4af5d99475b1db9e19) | Delegate object. This is another way of handling data fetching. Using completionHandler block instead is recommended.
`public virtual void `[`getAppDataAsync:language:completionHandler:`](#interface_m_p_app_data_provider_1ac0a1d2bc865b2d6ea2ddc6a0ae0a954d)`(NSString * solutionId,NSString * language,"Use `[`getAppDataWithCompletion:`](#interface_m_p_app_data_provider_1ab13c6cb7cbe52f6ccae5aa9b6d34e8e9)` instead" MP_DEPRECATED_MSG_ATTRIBUTE)` | Get app metadata and handle the data with a callback block 
`public virtual void `[`getAppDataAsync:language:`](#interface_m_p_app_data_provider_1abe631a71679e1de304eb69848534f79f)`(NSString * solutionId,"Use `[`getAppData`](#interface_m_p_app_data_provider_1a5b9d1ba89072e4afbe3a3b381bc04571)` instead" MP_DEPRECATED_MSG_ATTRIBUTE)` | Get app metadata. Assign a delegate object to this instance in order to handle the data fetch.
`public virtual void `[`getAppDataWithCompletion:`](#interface_m_p_app_data_provider_1ab13c6cb7cbe52f6ccae5aa9b6d34e8e9)`(`[`mpAppDataHandlerBlockType`](#interface_m_p_app_data_provider_1a4f9c76d9c3fea4b2bb5ca71e4b3d9190)` handler)` | Get app metadata and handle the data with a callback block 
`public virtual void `[`getAppData`](#interface_m_p_app_data_provider_1a5b9d1ba89072e4afbe3a3b381bc04571)`()` | Get app metadata. Assign a delegate object to this instance in order to handle the data fetch.

### Members

##### `{property} id< MPAppDataProviderDelegate > `[`delegate`](#interface_m_p_app_data_provider_1a9487b57e520fbd4af5d99475b1db9e19) {#interface_m_p_app_data_provider_1a9487b57e520fbd4af5d99475b1db9e19}

Delegate object. This is another way of handling data fetching. Using completionHandler block instead is recommended.

##### `public virtual void `[`getAppDataAsync:language:completionHandler:`](#interface_m_p_app_data_provider_1ac0a1d2bc865b2d6ea2ddc6a0ae0a954d)`(NSString * solutionId,NSString * language,"Use `[`getAppDataWithCompletion:`](#interface_m_p_app_data_provider_1ab13c6cb7cbe52f6ccae5aa9b6d34e8e9)` instead" MP_DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_app_data_provider_1ac0a1d2bc865b2d6ea2ddc6a0ae0a954d}

Get app metadata and handle the data with a callback block 
##### Parameters
* `solutionId` The solution to get app metadata for 

* `language` Specifies which language to fetch. Only supports the available languages in the specified solution. 

* `handler` Data fetch and error callback handler block

##### `public virtual void `[`getAppDataAsync:language:`](#interface_m_p_app_data_provider_1abe631a71679e1de304eb69848534f79f)`(NSString * solutionId,"Use `[`getAppData`](#interface_m_p_app_data_provider_1a5b9d1ba89072e4afbe3a3b381bc04571)` instead" MP_DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_app_data_provider_1abe631a71679e1de304eb69848534f79f}

Get app metadata. Assign a delegate object to this instance in order to handle the data fetch.

##### Parameters
* `solutionId` The solution to get app metadata for 

* `language` Specifies which language to fetch content for. Uses 2 character ISO 639-1 representation. Only supports the available languages in the specified solution.

##### `public virtual void `[`getAppDataWithCompletion:`](#interface_m_p_app_data_provider_1ab13c6cb7cbe52f6ccae5aa9b6d34e8e9)`(`[`mpAppDataHandlerBlockType`](#interface_m_p_app_data_provider_1a4f9c76d9c3fea4b2bb5ca71e4b3d9190)` handler)` {#interface_m_p_app_data_provider_1ab13c6cb7cbe52f6ccae5aa9b6d34e8e9}

Get app metadata and handle the data with a callback block 
##### Parameters
* `handler` Data fetch and error callback handler block

##### `public virtual void `[`getAppData`](#interface_m_p_app_data_provider_1a5b9d1ba89072e4afbe3a3b381bc04571)`()` {#interface_m_p_app_data_provider_1a5b9d1ba89072e4afbe3a3b381bc04571}

Get app metadata. Assign a delegate object to this instance in order to handle the data fetch.

## class `MPBeacon` {#interface_m_p_beacon}

```
class MPBeacon
  : public MPJSONModel
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSString * `[`beaconId`](#interface_m_p_beacon_1a209787fa58acd85e3fd614ded608ba7b) | 
`{property} NSNumber * `[`maxTxPower`](#interface_m_p_beacon_1a2c696b6d633dc6d4b11601d53ebed954) | 
`{property} NSNumber * `[`maxTxDistance`](#interface_m_p_beacon_1afb8dd189415b06e0c34ce9cdabfe6356) | 
`{property} NSNumber * `[`floor`](#interface_m_p_beacon_1a0dac73d6d84945a341755c7d2533b2af) | 
`{property} NSString * `[`building`](#interface_m_p_beacon_1a719392daa0084fb00e956e49f12ff03a) | 
`{property} NSString * `[`venue`](#interface_m_p_beacon_1a9a80920309da62c2ec32f80fecfaca87) | 
`{property} NSMutableArray< Optional > * `[`RSSI`](#interface_m_p_beacon_1ac82caf07f149b5830788bb0737da119f) | 
`{property} NSDate< Optional > * `[`latestTimeStamp`](#interface_m_p_beacon_1ac081eac97db01b41d1be1d39dcbf0181) | 
`{property} `[`MPPoint`](#interface_m_p_point)` * `[`geometry`](#interface_m_p_beacon_1ac2aa513c8b5c75143bbe09d92ef9703f) | 

### Members

##### `{property} NSString * `[`beaconId`](#interface_m_p_beacon_1a209787fa58acd85e3fd614ded608ba7b) {#interface_m_p_beacon_1a209787fa58acd85e3fd614ded608ba7b}

##### `{property} NSNumber * `[`maxTxPower`](#interface_m_p_beacon_1a2c696b6d633dc6d4b11601d53ebed954) {#interface_m_p_beacon_1a2c696b6d633dc6d4b11601d53ebed954}

##### `{property} NSNumber * `[`maxTxDistance`](#interface_m_p_beacon_1afb8dd189415b06e0c34ce9cdabfe6356) {#interface_m_p_beacon_1afb8dd189415b06e0c34ce9cdabfe6356}

##### `{property} NSNumber * `[`floor`](#interface_m_p_beacon_1a0dac73d6d84945a341755c7d2533b2af) {#interface_m_p_beacon_1a0dac73d6d84945a341755c7d2533b2af}

##### `{property} NSString * `[`building`](#interface_m_p_beacon_1a719392daa0084fb00e956e49f12ff03a) {#interface_m_p_beacon_1a719392daa0084fb00e956e49f12ff03a}

##### `{property} NSString * `[`venue`](#interface_m_p_beacon_1a9a80920309da62c2ec32f80fecfaca87) {#interface_m_p_beacon_1a9a80920309da62c2ec32f80fecfaca87}

##### `{property} NSMutableArray< Optional > * `[`RSSI`](#interface_m_p_beacon_1ac82caf07f149b5830788bb0737da119f) {#interface_m_p_beacon_1ac82caf07f149b5830788bb0737da119f}

##### `{property} NSDate< Optional > * `[`latestTimeStamp`](#interface_m_p_beacon_1ac081eac97db01b41d1be1d39dcbf0181) {#interface_m_p_beacon_1ac081eac97db01b41d1be1d39dcbf0181}

##### `{property} `[`MPPoint`](#interface_m_p_point)` * `[`geometry`](#interface_m_p_beacon_1ac2aa513c8b5c75143bbe09d92ef9703f) {#interface_m_p_beacon_1ac2aa513c8b5c75143bbe09d92ef9703f}

## class `MPBeaconCollection` {#interface_m_p_beacon_collection}

```
class MPBeaconCollection
  : public MPJSONModel
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSArray< MPBeacon * >< MPBeacon > * `[`list`](#interface_m_p_beacon_collection_1a360faf6d11a2b8cfab6d46356e2ebb9f) | 

### Members

##### `{property} NSArray< MPBeacon * >< MPBeacon > * `[`list`](#interface_m_p_beacon_collection_1a360faf6d11a2b8cfab6d46356e2ebb9f) {#interface_m_p_beacon_collection_1a360faf6d11a2b8cfab6d46356e2ebb9f}

## class `MPBeaconProvider` {#interface_m_p_beacon_provider}

```
class MPBeaconProvider
  : public NSObject
  : public <MPBeaconProvider>
```  

Beacons provider that defines a delegate and a method to initiate fetching of Beacons from the provider.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} id< MPBeaconProviderDelegate > `[`delegate`](#interface_m_p_beacon_provider_1af37b46deb3a777feabae310004e9b2f9) | Beacons provider delegate.
`public virtual void `[`getBeacons:clientId:`](#interface_m_p_beacon_provider_1a5e1b2bc146678fadd334c044d7ff2266)`(NSArray * beaconIds,"Use -(void)`[`getBeacons:`](#interface_m_p_beacon_provider_1afca31c4a22cbdcf2ba354610221e4a7c)(NSString*)`solutionId instead" MP_DEPRECATED_MSG_ATTRIBUTE)` | Method to initiate fetching of Beacons from the provider.
`public virtual void `[`getBeacons:`](#interface_m_p_beacon_provider_1afca31c4a22cbdcf2ba354610221e4a7c)`(NSString * solutionId)` | Method to initiate fetching of Beacons from the provider.
`public virtual id `[`init`](#interface_m_p_beacon_provider_1ab9ea8ba85600ad9966f4f8c6452760a7)`()` | 

### Members

##### `{property} id< MPBeaconProviderDelegate > `[`delegate`](#interface_m_p_beacon_provider_1af37b46deb3a777feabae310004e9b2f9) {#interface_m_p_beacon_provider_1af37b46deb3a777feabae310004e9b2f9}

Beacons provider delegate.

##### `public virtual void `[`getBeacons:clientId:`](#interface_m_p_beacon_provider_1a5e1b2bc146678fadd334c044d7ff2266)`(NSArray * beaconIds,"Use -(void)`[`getBeacons:`](#interface_m_p_beacon_provider_1afca31c4a22cbdcf2ba354610221e4a7c)(NSString*)`solutionId instead" MP_DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_beacon_provider_1a5e1b2bc146678fadd334c044d7ff2266}

Method to initiate fetching of Beacons from the provider.

##### `public virtual void `[`getBeacons:`](#interface_m_p_beacon_provider_1afca31c4a22cbdcf2ba354610221e4a7c)`(NSString * solutionId)` {#interface_m_p_beacon_provider_1afca31c4a22cbdcf2ba354610221e4a7c}

Method to initiate fetching of Beacons from the provider.

##### `public virtual id `[`init`](#interface_m_p_beacon_provider_1ab9ea8ba85600ad9966f4f8c6452760a7)`()` {#interface_m_p_beacon_provider_1ab9ea8ba85600ad9966f4f8c6452760a7}

## class `MPBuilding` {#interface_m_p_building}

```
class MPBuilding
  : public MPJSONModel
```  

Holds relevant data for a single building, and provides a way to interact with the buildings floor levels.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSNumber< Optional > * `[`currentFloor`](#interface_m_p_building_1aef33226b85d92422b1771d5df273803a) | Holds the current floor.
`{property} id< MPBuildingDelegate, Optional > `[`delegate`](#interface_m_p_building_1abf501b936ed0247f6b594e66aee3a7e3) | Delegate that holds the building ready event method. Relevant when using offline mode, as it will take a while to load the database upon first app start.
`{property} GMSMapView< Optional > * `[`map`](#interface_m_p_building_1a3372fd43df4abba298dce04246091c8c) | Reference to the map. The reference is used to activate/deactivate tile layers.
`{property} NSNumber< Optional > * `[`floorsReady`](#interface_m_p_building_1ae3d94bf67e209478056c67f1f624506d) | Simple counter that keeps track of how many floors and related tile layers are ready.
`{property} NSString * `[`buildingId`](#interface_m_p_building_1a27f3aa01bc410d9626ae12cf07c3ed60) | 
`{property} NSString * `[`administrativeId`](#interface_m_p_building_1a275636d3fc34d1ec190974ee2a984d3b) | 
`{property} NSMutableDictionary< NSString *, `[`MPFloor](#interface_m_p_floor) * >< [MPFloor`](#interface_m_p_floor)`, Optional > * `[`floors`](#interface_m_p_building_1ac009c08bf75947a4e6e2bc07e78c1404) | 
`{property} NSString * `[`name`](#interface_m_p_building_1a84fd33d6ac21171c132a906e0f6c00e5) | 
`{property} `[`MPPoint`](#interface_m_p_point)` * `[`anchor`](#interface_m_p_building_1ab934521da4234fc469bd0c6a9b03f571) | 
`{property} NSArray< NSArray * > * `[`bounds`](#interface_m_p_building_1a8f514cd1eef1607cff29adf9473410f5) | 
`public virtual `[`MPFloor`](#interface_m_p_floor)` * `[`getFloor`](#interface_m_p_building_1a9e2afdc91453ee32c24bbcc2c00fa62c)`()` | Get the current floor.
`public virtual NSNumber * `[`getInitFloor`](#interface_m_p_building_1a73740f62e0d1d382d76d14b4bbd97b42)`()` | Get the initial/default floor upon creation.
`public virtual NSNumber * `[`getFloors`](#interface_m_p_building_1a2bcabdf7056f81d47ae2ea53d7bc6f11)`()` | Get the number of floors.
`public virtual NSArray< `[`MPFloor`](#interface_m_p_floor)` * > * `[`getFloorArray`](#interface_m_p_building_1ac1cb59b1640c95bbbe1d3194888bb7dc)`()` | Get the floors as an array of [MPFloor](#interface_m_p_floor).
`public virtual void `[`setFloor:`](#interface_m_p_building_1a8990d9d8b8ce5ac5fdb590ba9358c1c0)`(NSNumber * floor)` | Set the current floor property (without affecting the building display). 
`public virtual void `[`showBuilding:onMap:`](#interface_m_p_building_1a04fabf42175150701c5f69eb7c6c85a4)`(NSNumber * newFloor,GMSMapView * DEPRECATED_ATTRIBUTE)` | Use this method to actually shift floor and show the building level. 
`public virtual void `[`DEPRECATED_ATTRIBUTE`](#interface_m_p_building_1a9271cc8e3a55b442406a388ee864cf43)`()` | Hide the building from the map.
`public virtual GMSCoordinateBounds * `[`getBuildingBounds`](#interface_m_p_building_1a6d5957f663fa720fac065573e6cd8f08)`()` | Get the geographic bounds for the building

### Members

##### `{property} NSNumber< Optional > * `[`currentFloor`](#interface_m_p_building_1aef33226b85d92422b1771d5df273803a) {#interface_m_p_building_1aef33226b85d92422b1771d5df273803a}

Holds the current floor.

##### `{property} id< MPBuildingDelegate, Optional > `[`delegate`](#interface_m_p_building_1abf501b936ed0247f6b594e66aee3a7e3) {#interface_m_p_building_1abf501b936ed0247f6b594e66aee3a7e3}

Delegate that holds the building ready event method. Relevant when using offline mode, as it will take a while to load the database upon first app start.

##### `{property} GMSMapView< Optional > * `[`map`](#interface_m_p_building_1a3372fd43df4abba298dce04246091c8c) {#interface_m_p_building_1a3372fd43df4abba298dce04246091c8c}

Reference to the map. The reference is used to activate/deactivate tile layers.

##### `{property} NSNumber< Optional > * `[`floorsReady`](#interface_m_p_building_1ae3d94bf67e209478056c67f1f624506d) {#interface_m_p_building_1ae3d94bf67e209478056c67f1f624506d}

Simple counter that keeps track of how many floors and related tile layers are ready.

##### `{property} NSString * `[`buildingId`](#interface_m_p_building_1a27f3aa01bc410d9626ae12cf07c3ed60) {#interface_m_p_building_1a27f3aa01bc410d9626ae12cf07c3ed60}

##### `{property} NSString * `[`administrativeId`](#interface_m_p_building_1a275636d3fc34d1ec190974ee2a984d3b) {#interface_m_p_building_1a275636d3fc34d1ec190974ee2a984d3b}

##### `{property} NSMutableDictionary< NSString *, `[`MPFloor](#interface_m_p_floor) * >< [MPFloor`](#interface_m_p_floor)`, Optional > * `[`floors`](#interface_m_p_building_1ac009c08bf75947a4e6e2bc07e78c1404) {#interface_m_p_building_1ac009c08bf75947a4e6e2bc07e78c1404}

##### `{property} NSString * `[`name`](#interface_m_p_building_1a84fd33d6ac21171c132a906e0f6c00e5) {#interface_m_p_building_1a84fd33d6ac21171c132a906e0f6c00e5}

##### `{property} `[`MPPoint`](#interface_m_p_point)` * `[`anchor`](#interface_m_p_building_1ab934521da4234fc469bd0c6a9b03f571) {#interface_m_p_building_1ab934521da4234fc469bd0c6a9b03f571}

##### `{property} NSArray< NSArray * > * `[`bounds`](#interface_m_p_building_1a8f514cd1eef1607cff29adf9473410f5) {#interface_m_p_building_1a8f514cd1eef1607cff29adf9473410f5}

##### `public virtual `[`MPFloor`](#interface_m_p_floor)` * `[`getFloor`](#interface_m_p_building_1a9e2afdc91453ee32c24bbcc2c00fa62c)`()` {#interface_m_p_building_1a9e2afdc91453ee32c24bbcc2c00fa62c}

Get the current floor.

##### `public virtual NSNumber * `[`getInitFloor`](#interface_m_p_building_1a73740f62e0d1d382d76d14b4bbd97b42)`()` {#interface_m_p_building_1a73740f62e0d1d382d76d14b4bbd97b42}

Get the initial/default floor upon creation.

##### `public virtual NSNumber * `[`getFloors`](#interface_m_p_building_1a2bcabdf7056f81d47ae2ea53d7bc6f11)`()` {#interface_m_p_building_1a2bcabdf7056f81d47ae2ea53d7bc6f11}

Get the number of floors.

##### `public virtual NSArray< `[`MPFloor`](#interface_m_p_floor)` * > * `[`getFloorArray`](#interface_m_p_building_1ac1cb59b1640c95bbbe1d3194888bb7dc)`()` {#interface_m_p_building_1ac1cb59b1640c95bbbe1d3194888bb7dc}

Get the floors as an array of [MPFloor](#interface_m_p_floor).

##### `public virtual void `[`setFloor:`](#interface_m_p_building_1a8990d9d8b8ce5ac5fdb590ba9358c1c0)`(NSNumber * floor)` {#interface_m_p_building_1a8990d9d8b8ce5ac5fdb590ba9358c1c0}

Set the current floor property (without affecting the building display). 
##### Parameters
* `floor` The floor number to replace current floor with.

##### `public virtual void `[`showBuilding:onMap:`](#interface_m_p_building_1a04fabf42175150701c5f69eb7c6c85a4)`(NSNumber * newFloor,GMSMapView * DEPRECATED_ATTRIBUTE)` {#interface_m_p_building_1a04fabf42175150701c5f69eb7c6c85a4}

Use this method to actually shift floor and show the building level. 
##### Parameters
* `newFloor` The floor number that represents the building level. 

* `map` Affected map.

##### `public virtual void `[`DEPRECATED_ATTRIBUTE`](#interface_m_p_building_1a9271cc8e3a55b442406a388ee864cf43)`()` {#interface_m_p_building_1a9271cc8e3a55b442406a388ee864cf43}

Hide the building from the map.

##### `public virtual GMSCoordinateBounds * `[`getBuildingBounds`](#interface_m_p_building_1a6d5957f663fa720fac065573e6cd8f08)`()` {#interface_m_p_building_1a6d5957f663fa720fac065573e6cd8f08}

Get the geographic bounds for the building

## class `MPBuildingCollection` {#interface_m_p_building_collection}

```
class MPBuildingCollection
  : public MPJSONModel
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSArray< `[`MPBuilding](#interface_m_p_building) * >< [MPBuilding`](#interface_m_p_building)` > * `[`buildings`](#interface_m_p_building_collection_1a14fcc737af9c30df39b889b6de63add2) | 

### Members

##### `{property} NSArray< `[`MPBuilding](#interface_m_p_building) * >< [MPBuilding`](#interface_m_p_building)` > * `[`buildings`](#interface_m_p_building_collection_1a14fcc737af9c30df39b889b6de63add2) {#interface_m_p_building_collection_1a14fcc737af9c30df39b889b6de63add2}

## class `MPBuildingDataset` {#interface_m_p_building_dataset}

```
class MPBuildingDataset
  : public MPJSONModel
```  

Collection of buildings with some retrieval and calculation functionality.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSString * `[`type`](#interface_m_p_building_dataset_1a9e19140e212b7259b6505bc91a99c3e3) | The type of data (equals "FeatureCollection").
`{property} NSArray * `[`features`](#interface_m_p_building_dataset_1aea1c8540422f35402cf4d6d797239603) | Array of buildings contained in the collection.
`public virtual `[`MPBuilding`](#interface_m_p_building)` * `[`getBuilding:`](#interface_m_p_building_dataset_1a2f7fc8791f83409966302bf835d11f73)`(NSString * shortName)` | Retrieve a building by its unique shortname. 
`public virtual void `[`setBuildingDelegate:`](#interface_m_p_building_dataset_1ae1030d6b1206ae47f9c5a33b179c909a)`(NSObject< MPBuildingDelegate > * delegate)` | Assign a delegate object to all buildings in the collection, this object will hold the onBuildingReady:shortName event method. 
`public virtual double `[`intersectionAreaBetweenBounds:andBounds:`](#interface_m_p_building_dataset_1a4463faf28dac3f076969f213e9670b3d)`(GMSCoordinateBounds * b1,GMSCoordinateBounds * b2)` | Get the intersection area on two GMSCoordinateBounds. 

### Members

##### `{property} NSString * `[`type`](#interface_m_p_building_dataset_1a9e19140e212b7259b6505bc91a99c3e3) {#interface_m_p_building_dataset_1a9e19140e212b7259b6505bc91a99c3e3}

The type of data (equals "FeatureCollection").

##### `{property} NSArray * `[`features`](#interface_m_p_building_dataset_1aea1c8540422f35402cf4d6d797239603) {#interface_m_p_building_dataset_1aea1c8540422f35402cf4d6d797239603}

Array of buildings contained in the collection.

##### `public virtual `[`MPBuilding`](#interface_m_p_building)` * `[`getBuilding:`](#interface_m_p_building_dataset_1a2f7fc8791f83409966302bf835d11f73)`(NSString * shortName)` {#interface_m_p_building_dataset_1a2f7fc8791f83409966302bf835d11f73}

Retrieve a building by its unique shortname. 
##### Parameters
* `shortName` The shortname of the building

##### `public virtual void `[`setBuildingDelegate:`](#interface_m_p_building_dataset_1ae1030d6b1206ae47f9c5a33b179c909a)`(NSObject< MPBuildingDelegate > * delegate)` {#interface_m_p_building_dataset_1ae1030d6b1206ae47f9c5a33b179c909a}

Assign a delegate object to all buildings in the collection, this object will hold the onBuildingReady:shortName event method. 
##### Parameters
* `delegate` The delegate object

##### `public virtual double `[`intersectionAreaBetweenBounds:andBounds:`](#interface_m_p_building_dataset_1a4463faf28dac3f076969f213e9670b3d)`(GMSCoordinateBounds * b1,GMSCoordinateBounds * b2)` {#interface_m_p_building_dataset_1a4463faf28dac3f076969f213e9670b3d}

Get the intersection area on two GMSCoordinateBounds. 
##### Parameters
* `b1` Some coordinate bounds (Typically the current map viewport bounds) 

* `b2` Some other coordinate bounds (Typically building bounds)

## class `MPBuildingInfo` {#interface_m_p_building_info}

```
class MPBuildingInfo
  : public MPJSONModel
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSString * `[`name`](#interface_m_p_building_info_1a5909259ec0271f9d913d5fdd1ee9bd04) | 
`{property} NSArray< NSString * > * `[`aliases`](#interface_m_p_building_info_1a2e6b272ef056e41ca7a02d454d1b7406) | 

### Members

##### `{property} NSString * `[`name`](#interface_m_p_building_info_1a5909259ec0271f9d913d5fdd1ee9bd04) {#interface_m_p_building_info_1a5909259ec0271f9d913d5fdd1ee9bd04}

##### `{property} NSArray< NSString * > * `[`aliases`](#interface_m_p_building_info_1a2e6b272ef056e41ca7a02d454d1b7406) {#interface_m_p_building_info_1a2e6b272ef056e41ca7a02d454d1b7406}

## class `MPBuildingReference` {#interface_m_p_building_reference}

```
class MPBuildingReference
  : public MPJSONModel
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSString * `[`refId`](#interface_m_p_building_reference_1a93d556395c3562de826831a48d31d72e) | 

### Members

##### `{property} NSString * `[`refId`](#interface_m_p_building_reference_1a93d556395c3562de826831a48d31d72e) {#interface_m_p_building_reference_1a93d556395c3562de826831a48d31d72e}

## class `MPCategories` {#interface_m_p_categories}

```
class MPCategories
  : public MPJSONModel
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSArray< MPDataField * >< MPDataField > * `[`list`](#interface_m_p_categories_1a9726d4697db758e283222ce91c3cb5cf) | 

### Members

##### `{property} NSArray< MPDataField * >< MPDataField > * `[`list`](#interface_m_p_categories_1a9726d4697db758e283222ce91c3cb5cf) {#interface_m_p_categories_1a9726d4697db758e283222ce91c3cb5cf}

## class `MPCategoriesProvider` {#interface_m_p_categories_provider}

```
class MPCategoriesProvider
  : public NSObject
```  

A categories provider acts as a service for the location categories belonging to a specific MapsIndoors solution/dataset.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} id< MPCategoriesProviderDelegate > `[`delegate`](#interface_m_p_categories_provider_1a666a411d05e4efc04206b2b22c982119) | Categories provider delegate.
`public virtual void `[`getCategoriesAsync:locale:`](#interface_m_p_categories_provider_1a982595abfd7f4a88f4ea49d977354151)`(NSString * solutionId,"Use `[`getCategories`](#interface_m_p_categories_provider_1a4a43b9b30b37e59bc1e069a3085c6be8)` instead" MP_DEPRECATED_MSG_ATTRIBUTE)` | Get categories from the specified solution.
`public virtual void `[`getCategoriesAsync:locale:completionHandler:`](#interface_m_p_categories_provider_1aa91c1010eafee66ac6d2d690960ef2c7)`(NSString * solutionId,NSString * locale,"Use `[`getCategoriesWithCompletion:`](#interface_m_p_categories_provider_1ac5d6556e3ce47c1e847c609d2eb9c939)` instead" MP_DEPRECATED_MSG_ATTRIBUTE)` | Get Categories from this provider and provide a callback handler.
`public virtual void `[`getCategories`](#interface_m_p_categories_provider_1a4a43b9b30b37e59bc1e069a3085c6be8)`()` | Get categories from the specified solution.
`public virtual void `[`getCategoriesWithCompletion:`](#interface_m_p_categories_provider_1ac5d6556e3ce47c1e847c609d2eb9c939)`(mpCategoriesHandlerBlockType completionHandler)` | Get Categories from this provider and provide a callback handler.

### Members

##### `{property} id< MPCategoriesProviderDelegate > `[`delegate`](#interface_m_p_categories_provider_1a666a411d05e4efc04206b2b22c982119) {#interface_m_p_categories_provider_1a666a411d05e4efc04206b2b22c982119}

Categories provider delegate.

##### `public virtual void `[`getCategoriesAsync:locale:`](#interface_m_p_categories_provider_1a982595abfd7f4a88f4ea49d977354151)`(NSString * solutionId,"Use `[`getCategories`](#interface_m_p_categories_provider_1a4a43b9b30b37e59bc1e069a3085c6be8)` instead" MP_DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_categories_provider_1a982595abfd7f4a88f4ea49d977354151}

Get categories from the specified solution.

##### Parameters
* `solutionId` MapsIndoors solution id string 

* `locale` Specifies which language to fetch categories in. Uses 2 character ISO 639-1 representation

##### `public virtual void `[`getCategoriesAsync:locale:completionHandler:`](#interface_m_p_categories_provider_1aa91c1010eafee66ac6d2d690960ef2c7)`(NSString * solutionId,NSString * locale,"Use `[`getCategoriesWithCompletion:`](#interface_m_p_categories_provider_1ac5d6556e3ce47c1e847c609d2eb9c939)` instead" MP_DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_categories_provider_1aa91c1010eafee66ac6d2d690960ef2c7}

Get Categories from this provider and provide a callback handler.

##### `public virtual void `[`getCategories`](#interface_m_p_categories_provider_1a4a43b9b30b37e59bc1e069a3085c6be8)`()` {#interface_m_p_categories_provider_1a4a43b9b30b37e59bc1e069a3085c6be8}

Get categories from the specified solution.

##### `public virtual void `[`getCategoriesWithCompletion:`](#interface_m_p_categories_provider_1ac5d6556e3ce47c1e847c609d2eb9c939)`(mpCategoriesHandlerBlockType completionHandler)` {#interface_m_p_categories_provider_1ac5d6556e3ce47c1e847c609d2eb9c939}

Get Categories from this provider and provide a callback handler.

## class `MPCategoryUIBarButtonItem` {#interface_m_p_category_u_i_bar_button_item}

```
class MPCategoryUIBarButtonItem
  : public UIBarButtonItem
```  

Category button item. Convenient for setting up a menu bar of main categories.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSString * `[`category`](#interface_m_p_category_u_i_bar_button_item_1ab2eb45f83689dc1d69e1b72940484659) | Category for the button.

### Members

##### `{property} NSString * `[`category`](#interface_m_p_category_u_i_bar_button_item_1ab2eb45f83689dc1d69e1b72940484659) {#interface_m_p_category_u_i_bar_button_item_1ab2eb45f83689dc1d69e1b72940484659}

Category for the button.

## class `MPContactModule` {#interface_m_p_contact_module}

```
class MPContactModule
  : public MPJSONModel
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} MPDataField< Optional > * `[`email`](#interface_m_p_contact_module_1aa1e17072cd5fca32b2fd2c5215f8ca36) | 
`{property} MPDataField< Optional > * `[`phone`](#interface_m_p_contact_module_1a78524bc4b11be79b33332adfd39e8492) | 
`{property} MPDataField< Optional > * `[`faxNumber`](#interface_m_p_contact_module_1a39f1b10d4a44f0641a162f6d66350615) | 
`{property} MPDataField< Optional > * `[`website`](#interface_m_p_contact_module_1a516284553fe39788be513bab598d5a8d) | 

### Members

##### `{property} MPDataField< Optional > * `[`email`](#interface_m_p_contact_module_1aa1e17072cd5fca32b2fd2c5215f8ca36) {#interface_m_p_contact_module_1aa1e17072cd5fca32b2fd2c5215f8ca36}

##### `{property} MPDataField< Optional > * `[`phone`](#interface_m_p_contact_module_1a78524bc4b11be79b33332adfd39e8492) {#interface_m_p_contact_module_1a78524bc4b11be79b33332adfd39e8492}

##### `{property} MPDataField< Optional > * `[`faxNumber`](#interface_m_p_contact_module_1a39f1b10d4a44f0641a162f6d66350615) {#interface_m_p_contact_module_1a39f1b10d4a44f0641a162f6d66350615}

##### `{property} MPDataField< Optional > * `[`website`](#interface_m_p_contact_module_1a516284553fe39788be513bab598d5a8d) {#interface_m_p_contact_module_1a516284553fe39788be513bab598d5a8d}

## class `MPDataField` {#interface_m_p_data_field}

```
class MPDataField
  : public MPJSONModel
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSString< Optional > * `[`key`](#interface_m_p_data_field_1abefba27e22e9ddc519ef112d43ede599) | 
`{property} NSString * `[`value`](#interface_m_p_data_field_1a4fa316c738ae2553c6d46e4e158c9c74) | 

### Members

##### `{property} NSString< Optional > * `[`key`](#interface_m_p_data_field_1abefba27e22e9ddc519ef112d43ede599) {#interface_m_p_data_field_1abefba27e22e9ddc519ef112d43ede599}

##### `{property} NSString * `[`value`](#interface_m_p_data_field_1a4fa316c738ae2553c6d46e4e158c9c74) {#interface_m_p_data_field_1a4fa316c738ae2553c6d46e4e158c9c74}

## class `MPDirectionsQuery` {#interface_m_p_directions_query}

```
class MPDirectionsQuery
  : public NSObject
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSArray< NSString * > * `[`avoidWayTypes`](#interface_m_p_directions_query_1a86e4476b2c9c29d2826506406b68b9fc) | 
`{property} `[`MPLocation`](#interface_m_p_location)` * `[`origin`](#interface_m_p_directions_query_1a6af44266cfa622e6afe42ea9237407bd) | 
`{property} `[`MPLocation`](#interface_m_p_location)` * `[`destination`](#interface_m_p_directions_query_1a018a06cacdcee6915154cb4d10de36cf) | 
`{property} NSDate * `[`arrival`](#interface_m_p_directions_query_1a20a028a2e9a3ad54b515553a7b3234d9) | 
`{property} NSDate * `[`departure`](#interface_m_p_directions_query_1a2ab61b54f619c1c3b76eaf02e1c2b404) | 
`{property} MPTravelMode `[`travelMode`](#interface_m_p_directions_query_1ac116e248725b3f2926ff984754c21dc7) | 
`public virtual nonnull instancetype `[`init`](#interface_m_p_directions_query_1a3e5a19692ecfd6e61900c85b7384a94d)`()` | 
`public virtual nonnull instancetype `[`initWithOrigin:destination:`](#interface_m_p_directions_query_1aad6af3989dd9cb557fc1e358c4352c45)`(nonnull `[`MPLocation`](#interface_m_p_location)` * origin,nonnull `[`MPLocation`](#interface_m_p_location)` * destination)` | 
`public virtual nonnull instancetype `[`initWithOriginPoint:destination:`](#interface_m_p_directions_query_1ad47f38a5f170f17d1f7aefb689a3826c)`(nonnull `[`MPPoint`](#interface_m_p_point)` * origin,nonnull `[`MPPoint`](#interface_m_p_point)` * destination)` | 

### Members

##### `{property} NSArray< NSString * > * `[`avoidWayTypes`](#interface_m_p_directions_query_1a86e4476b2c9c29d2826506406b68b9fc) {#interface_m_p_directions_query_1a86e4476b2c9c29d2826506406b68b9fc}

##### `{property} `[`MPLocation`](#interface_m_p_location)` * `[`origin`](#interface_m_p_directions_query_1a6af44266cfa622e6afe42ea9237407bd) {#interface_m_p_directions_query_1a6af44266cfa622e6afe42ea9237407bd}

##### `{property} `[`MPLocation`](#interface_m_p_location)` * `[`destination`](#interface_m_p_directions_query_1a018a06cacdcee6915154cb4d10de36cf) {#interface_m_p_directions_query_1a018a06cacdcee6915154cb4d10de36cf}

##### `{property} NSDate * `[`arrival`](#interface_m_p_directions_query_1a20a028a2e9a3ad54b515553a7b3234d9) {#interface_m_p_directions_query_1a20a028a2e9a3ad54b515553a7b3234d9}

##### `{property} NSDate * `[`departure`](#interface_m_p_directions_query_1a2ab61b54f619c1c3b76eaf02e1c2b404) {#interface_m_p_directions_query_1a2ab61b54f619c1c3b76eaf02e1c2b404}

##### `{property} MPTravelMode `[`travelMode`](#interface_m_p_directions_query_1ac116e248725b3f2926ff984754c21dc7) {#interface_m_p_directions_query_1ac116e248725b3f2926ff984754c21dc7}

##### `public virtual nonnull instancetype `[`init`](#interface_m_p_directions_query_1a3e5a19692ecfd6e61900c85b7384a94d)`()` {#interface_m_p_directions_query_1a3e5a19692ecfd6e61900c85b7384a94d}

##### `public virtual nonnull instancetype `[`initWithOrigin:destination:`](#interface_m_p_directions_query_1aad6af3989dd9cb557fc1e358c4352c45)`(nonnull `[`MPLocation`](#interface_m_p_location)` * origin,nonnull `[`MPLocation`](#interface_m_p_location)` * destination)` {#interface_m_p_directions_query_1aad6af3989dd9cb557fc1e358c4352c45}

##### `public virtual nonnull instancetype `[`initWithOriginPoint:destination:`](#interface_m_p_directions_query_1ad47f38a5f170f17d1f7aefb689a3826c)`(nonnull `[`MPPoint`](#interface_m_p_point)` * origin,nonnull `[`MPPoint`](#interface_m_p_point)` * destination)` {#interface_m_p_directions_query_1ad47f38a5f170f17d1f7aefb689a3826c}

## class `MPDirectionsRenderer` {#interface_m_p_directions_renderer}

```
class MPDirectionsRenderer
  : public NSObject
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} id< MPDirectionsRendererDelegate > `[`delegate`](#interface_m_p_directions_renderer_1ad55b0ed4af7270e7cda05c708191b27e) | 
`{property} GMSMapView * `[`map`](#interface_m_p_directions_renderer_1ae2e447ccde79fd245c040f7a92c1df13) | Assigns (or unassigns) a Google map object
`{property} `[`MPRoute`](#interface_m_p_route)` * `[`route`](#interface_m_p_directions_renderer_1a800260817fb8f2145bf025f9e9489cdd) | Assigns (or unassigns) a route object
`{property} UIButton * `[`nextRouteLegButton`](#interface_m_p_directions_renderer_1a6caa9d600e2cbea9b24c3b80f4ec3c53) | 
`{property} UIButton * `[`previousRouteLegButton`](#interface_m_p_directions_renderer_1adc2b8247b91026362bfd8fbe6c6c99d4) | 
`{property} NSInteger `[`routeLegIndex`](#interface_m_p_directions_renderer_1aac9e35f1806b65382bfc3cfc274f942b) | 
`{property} NSInteger `[`routeStepIndex`](#interface_m_p_directions_renderer_1a564087449194aa5ced3555ca2a92bf5a) | 
`{property} UIColor * `[`solidColor`](#interface_m_p_directions_renderer_1a22d815a2fe140fda2859c24730631f39) | 
`{property} UIColor * `[`backgroundColor`](#interface_m_p_directions_renderer_1ade52a2b5a96b2dedfe6ddcfad2186c3c) | 
`{property} BOOL `[`fitBounds`](#interface_m_p_directions_renderer_1aca2ba59f6448662438af94e0791364df) | 
`{property} MPDirectionsRenderFit `[`fitMode`](#interface_m_p_directions_renderer_1aea1d95829f64ec08bc0ba9827d45f9c7) | 
`{property} UIEdgeInsets `[`edgeInsets`](#interface_m_p_directions_renderer_1a989870cc8bbcfbe27070c210864dff3e) | 
`public virtual void `[`animate:`](#interface_m_p_directions_renderer_1af52553a750797723c27e82a2562f31de)`(NSTimeInterval duration)` | 

### Members

##### `{property} id< MPDirectionsRendererDelegate > `[`delegate`](#interface_m_p_directions_renderer_1ad55b0ed4af7270e7cda05c708191b27e) {#interface_m_p_directions_renderer_1ad55b0ed4af7270e7cda05c708191b27e}

##### `{property} GMSMapView * `[`map`](#interface_m_p_directions_renderer_1ae2e447ccde79fd245c040f7a92c1df13) {#interface_m_p_directions_renderer_1ae2e447ccde79fd245c040f7a92c1df13}

Assigns (or unassigns) a Google map object

##### `{property} `[`MPRoute`](#interface_m_p_route)` * `[`route`](#interface_m_p_directions_renderer_1a800260817fb8f2145bf025f9e9489cdd) {#interface_m_p_directions_renderer_1a800260817fb8f2145bf025f9e9489cdd}

Assigns (or unassigns) a route object

##### `{property} UIButton * `[`nextRouteLegButton`](#interface_m_p_directions_renderer_1a6caa9d600e2cbea9b24c3b80f4ec3c53) {#interface_m_p_directions_renderer_1a6caa9d600e2cbea9b24c3b80f4ec3c53}

##### `{property} UIButton * `[`previousRouteLegButton`](#interface_m_p_directions_renderer_1adc2b8247b91026362bfd8fbe6c6c99d4) {#interface_m_p_directions_renderer_1adc2b8247b91026362bfd8fbe6c6c99d4}

##### `{property} NSInteger `[`routeLegIndex`](#interface_m_p_directions_renderer_1aac9e35f1806b65382bfc3cfc274f942b) {#interface_m_p_directions_renderer_1aac9e35f1806b65382bfc3cfc274f942b}

##### `{property} NSInteger `[`routeStepIndex`](#interface_m_p_directions_renderer_1a564087449194aa5ced3555ca2a92bf5a) {#interface_m_p_directions_renderer_1a564087449194aa5ced3555ca2a92bf5a}

##### `{property} UIColor * `[`solidColor`](#interface_m_p_directions_renderer_1a22d815a2fe140fda2859c24730631f39) {#interface_m_p_directions_renderer_1a22d815a2fe140fda2859c24730631f39}

##### `{property} UIColor * `[`backgroundColor`](#interface_m_p_directions_renderer_1ade52a2b5a96b2dedfe6ddcfad2186c3c) {#interface_m_p_directions_renderer_1ade52a2b5a96b2dedfe6ddcfad2186c3c}

##### `{property} BOOL `[`fitBounds`](#interface_m_p_directions_renderer_1aca2ba59f6448662438af94e0791364df) {#interface_m_p_directions_renderer_1aca2ba59f6448662438af94e0791364df}

##### `{property} MPDirectionsRenderFit `[`fitMode`](#interface_m_p_directions_renderer_1aea1d95829f64ec08bc0ba9827d45f9c7) {#interface_m_p_directions_renderer_1aea1d95829f64ec08bc0ba9827d45f9c7}

##### `{property} UIEdgeInsets `[`edgeInsets`](#interface_m_p_directions_renderer_1a989870cc8bbcfbe27070c210864dff3e) {#interface_m_p_directions_renderer_1a989870cc8bbcfbe27070c210864dff3e}

##### `public virtual void `[`animate:`](#interface_m_p_directions_renderer_1af52553a750797723c27e82a2562f31de)`(NSTimeInterval duration)` {#interface_m_p_directions_renderer_1af52553a750797723c27e82a2562f31de}

## class `MPDirectionsService` {#interface_m_p_directions_service}

```
class MPDirectionsService
  : public NSObject
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSUInteger `[`maxElementsPerGoogleDistanceMatrixRequest`](#interface_m_p_directions_service_1ae9f03f41d509a005a782d0ece74a1582) | The maximum number of elements to "spend" in each call to the Distance Matrix API.
`{property} id< MPRoutingProviderDelegate > `[`delegate`](#interface_m_p_directions_service_1a0b07be7c2c817682389e40c6d6490754) | 
`public NSString *solutionId `[`MP_DEPRECATED_MSG_ATTRIBUTE`](#interface_m_p_directions_service_1af385a18c5a560e710bbb82c1cef0e7d7)`("Use  to apply MapsIndoors API key,content key and Google API key")` | 
`public NSString *googleApiKey `[`MP_DEPRECATED_MSG_ATTRIBUTE`](#interface_m_p_directions_service_1ab952008113412c51c87a5bfb3b46b083)`("Use  to apply MapsIndoors API key,content key and Google API key")` | 
`public NSString *language `[`MP_DEPRECATED_MSG_ATTRIBUTE`](#interface_m_p_directions_service_1a7d832eca736f85bcbabb037ea4a27995)`("Use  to apply language globally")` | 
`public virtual id `[`initWithMapsIndoorsSolutionId:googleApiKey:`](#interface_m_p_directions_service_1aa88fb0cacac9a8f8bd53da248f7cea0c)`(NSString * solutionId,"Use  to apply MapsIndoors API key,content key and Google API key" MP_DEPRECATED_MSG_ATTRIBUTE)` | 
`public virtual void `[`routingFrom:to:by:avoid:depart:arrive:`](#interface_m_p_directions_service_1a48df55af15a64efb099763c8f62ca5db)`(`[`MPLocation`](#interface_m_p_location)` * from,`[`MPLocation`](#interface_m_p_location)` * to,NSString * mode,NSArray * restrictions,NSDate * departureTime,"Use routingWithQuery: instead" MP_DEPRECATED_MSG_ATTRIBUTE)` | 
`public virtual void `[`routingFrom:to:by:`](#interface_m_p_directions_service_1a4a244f6168699629e068e0bba081f30e)`(`[`MPLocation`](#interface_m_p_location)` * from,`[`MPLocation`](#interface_m_p_location)` * to,"Use routingWithQuery: instead" MP_DEPRECATED_MSG_ATTRIBUTE)` | 
`public virtual void `[`routingFrom:to:by:avoid:depart:arrive:completionHandler:`](#interface_m_p_directions_service_1a4d2b47acb0bf300d2a8c52d99222b81e)`(`[`MPLocation`](#interface_m_p_location)` * from,`[`MPLocation`](#interface_m_p_location)` * to,NSString * mode,NSArray * restrictions,NSDate * departureTime,NSDate * arrivalTime,"Use routingWithQuery:completionHandler: instead" MP_DEPRECATED_MSG_ATTRIBUTE)` | 
`public virtual void `[`routingFrom:to:by:completionHandler:`](#interface_m_p_directions_service_1ad790647c88d29632c618ed3c4b53d434)`(`[`MPLocation`](#interface_m_p_location)` * from,`[`MPLocation`](#interface_m_p_location)` * to,NSString * mode,"Use routingWithQuery:completionHandler: instead" MP_DEPRECATED_MSG_ATTRIBUTE)` | 
`public virtual void `[`routingWithQuery:completionHandler:`](#interface_m_p_directions_service_1a5974cb22ccb2c2eec826eb8a483b94db)`(MPDirectionsQuery * directionsQuery,mpRouteHandlerBlockType handler)` | 
`public virtual void `[`routingWithQuery:`](#interface_m_p_directions_service_1a91327e69fb248f76a7952ade9b84fccb)`(MPDirectionsQuery * directionsQuery)` | 

### Members

##### `{property} NSUInteger `[`maxElementsPerGoogleDistanceMatrixRequest`](#interface_m_p_directions_service_1ae9f03f41d509a005a782d0ece74a1582) {#interface_m_p_directions_service_1ae9f03f41d509a005a782d0ece74a1582}

The maximum number of elements to "spend" in each call to the Distance Matrix API.

##### `{property} id< MPRoutingProviderDelegate > `[`delegate`](#interface_m_p_directions_service_1a0b07be7c2c817682389e40c6d6490754) {#interface_m_p_directions_service_1a0b07be7c2c817682389e40c6d6490754}

##### `public NSString *solutionId `[`MP_DEPRECATED_MSG_ATTRIBUTE`](#interface_m_p_directions_service_1af385a18c5a560e710bbb82c1cef0e7d7)`("Use  to apply MapsIndoors API key,content key and Google API key")` {#interface_m_p_directions_service_1af385a18c5a560e710bbb82c1cef0e7d7}

##### `public NSString *googleApiKey `[`MP_DEPRECATED_MSG_ATTRIBUTE`](#interface_m_p_directions_service_1ab952008113412c51c87a5bfb3b46b083)`("Use  to apply MapsIndoors API key,content key and Google API key")` {#interface_m_p_directions_service_1ab952008113412c51c87a5bfb3b46b083}

##### `public NSString *language `[`MP_DEPRECATED_MSG_ATTRIBUTE`](#interface_m_p_directions_service_1a7d832eca736f85bcbabb037ea4a27995)`("Use  to apply language globally")` {#interface_m_p_directions_service_1a7d832eca736f85bcbabb037ea4a27995}

##### `public virtual id `[`initWithMapsIndoorsSolutionId:googleApiKey:`](#interface_m_p_directions_service_1aa88fb0cacac9a8f8bd53da248f7cea0c)`(NSString * solutionId,"Use  to apply MapsIndoors API key,content key and Google API key" MP_DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_directions_service_1aa88fb0cacac9a8f8bd53da248f7cea0c}

##### `public virtual void `[`routingFrom:to:by:avoid:depart:arrive:`](#interface_m_p_directions_service_1a48df55af15a64efb099763c8f62ca5db)`(`[`MPLocation`](#interface_m_p_location)` * from,`[`MPLocation`](#interface_m_p_location)` * to,NSString * mode,NSArray * restrictions,NSDate * departureTime,"Use routingWithQuery: instead" MP_DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_directions_service_1a48df55af15a64efb099763c8f62ca5db}

##### `public virtual void `[`routingFrom:to:by:`](#interface_m_p_directions_service_1a4a244f6168699629e068e0bba081f30e)`(`[`MPLocation`](#interface_m_p_location)` * from,`[`MPLocation`](#interface_m_p_location)` * to,"Use routingWithQuery: instead" MP_DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_directions_service_1a4a244f6168699629e068e0bba081f30e}

##### `public virtual void `[`routingFrom:to:by:avoid:depart:arrive:completionHandler:`](#interface_m_p_directions_service_1a4d2b47acb0bf300d2a8c52d99222b81e)`(`[`MPLocation`](#interface_m_p_location)` * from,`[`MPLocation`](#interface_m_p_location)` * to,NSString * mode,NSArray * restrictions,NSDate * departureTime,NSDate * arrivalTime,"Use routingWithQuery:completionHandler: instead" MP_DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_directions_service_1a4d2b47acb0bf300d2a8c52d99222b81e}

##### `public virtual void `[`routingFrom:to:by:completionHandler:`](#interface_m_p_directions_service_1ad790647c88d29632c618ed3c4b53d434)`(`[`MPLocation`](#interface_m_p_location)` * from,`[`MPLocation`](#interface_m_p_location)` * to,NSString * mode,"Use routingWithQuery:completionHandler: instead" MP_DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_directions_service_1ad790647c88d29632c618ed3c4b53d434}

##### `public virtual void `[`routingWithQuery:completionHandler:`](#interface_m_p_directions_service_1a5974cb22ccb2c2eec826eb8a483b94db)`(MPDirectionsQuery * directionsQuery,mpRouteHandlerBlockType handler)` {#interface_m_p_directions_service_1a5974cb22ccb2c2eec826eb8a483b94db}

##### `public virtual void `[`routingWithQuery:`](#interface_m_p_directions_service_1a91327e69fb248f76a7952ade9b84fccb)`(MPDirectionsQuery * directionsQuery)` {#interface_m_p_directions_service_1a91327e69fb248f76a7952ade9b84fccb}

## class `MPDistanceMatrixElements` {#interface_m_p_distance_matrix_elements}

```
class MPDistanceMatrixElements
  : public MPJSONModel
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} MPRouteProperty< Optional > * `[`distance`](#interface_m_p_distance_matrix_elements_1afc90d9d3ba943b50c1f4ef0164322b57) | 
`{property} MPRouteProperty< Optional > * `[`duration`](#interface_m_p_distance_matrix_elements_1a8546b17b883830ef5282808c0d33db1c) | 
`{property} NSString * `[`status`](#interface_m_p_distance_matrix_elements_1a7b3acb4786b038e85e569938085c2f8f) | 

### Members

##### `{property} MPRouteProperty< Optional > * `[`distance`](#interface_m_p_distance_matrix_elements_1afc90d9d3ba943b50c1f4ef0164322b57) {#interface_m_p_distance_matrix_elements_1afc90d9d3ba943b50c1f4ef0164322b57}

##### `{property} MPRouteProperty< Optional > * `[`duration`](#interface_m_p_distance_matrix_elements_1a8546b17b883830ef5282808c0d33db1c) {#interface_m_p_distance_matrix_elements_1a8546b17b883830ef5282808c0d33db1c}

##### `{property} NSString * `[`status`](#interface_m_p_distance_matrix_elements_1a7b3acb4786b038e85e569938085c2f8f) {#interface_m_p_distance_matrix_elements_1a7b3acb4786b038e85e569938085c2f8f}

## class `MPDistanceMatrixProvider` {#interface_m_p_distance_matrix_provider}

```
class MPDistanceMatrixProvider
  : public NSObject
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} id< MPDistanceMatrixProviderDelegate > `[`delegate`](#interface_m_p_distance_matrix_provider_1a4754c6dc721d5de03ab006c80917b668) | 
`{property} NSString * `[`solutionId`](#interface_m_p_distance_matrix_provider_1aa8c338be084114fe489b1d5fe3ce4d8c) | 
`{property} NSString * `[`googleApiKey`](#interface_m_p_distance_matrix_provider_1ab76edc8729fa5beebd13c8f94e5e6a79) | 
`{property} NSString * `[`graphId`](#interface_m_p_distance_matrix_provider_1a549ab83dc09edba45c5521e6fda23927) | 
`{property} NSString * `[`vehicle`](#interface_m_p_distance_matrix_provider_1a09b55ab8d56086b0d10cb65716c83fe3) | 
`public virtual void `[`getDistanceMatrixWithOrigins:destinations:travelMode:avoid:depart:arrive:completionHandler:`](#interface_m_p_distance_matrix_provider_1ae8a335e7bfcbe0348ac22ae4f61a8b12)`(NSArray * origins,NSArray * destinations,NSString * travelMode,NSArray * restrictions,NSDate * departureTime,NSDate * arrivalTime,mpMatrixHandlerBlockType handler)` | 
`public virtual void `[`getDistanceMatrixWithOrigins:destinations:travelMode:`](#interface_m_p_distance_matrix_provider_1a77e32d864d41cec492f0c79f6e234af1)`(NSArray * origins,NSArray * destinations,NSString * travelMode)` | 
`public virtual void `[`getGoogleDistanceMatrixWithOrigins:destinations:travelMode:avoid:depart:arrive:completionHandler:`](#interface_m_p_distance_matrix_provider_1a9dbbd659ffbc81cbfe8ca0100c06ec07)`(NSArray * origins,NSArray * destinations,NSString * travelMode,NSArray * restrictions,NSDate * departureTime,NSDate * arrivalTime,mpMatrixHandlerBlockType handler)` | 
`public virtual void `[`getGoogleDistanceMatrixWithOrigins:destinations:travelMode:`](#interface_m_p_distance_matrix_provider_1acb74ec2d8227f3d1f355bc4a80de0a28)`(NSArray * origins,NSArray * destinations,NSString * travelMode)` | 

### Members

##### `{property} id< MPDistanceMatrixProviderDelegate > `[`delegate`](#interface_m_p_distance_matrix_provider_1a4754c6dc721d5de03ab006c80917b668) {#interface_m_p_distance_matrix_provider_1a4754c6dc721d5de03ab006c80917b668}

##### `{property} NSString * `[`solutionId`](#interface_m_p_distance_matrix_provider_1aa8c338be084114fe489b1d5fe3ce4d8c) {#interface_m_p_distance_matrix_provider_1aa8c338be084114fe489b1d5fe3ce4d8c}

##### `{property} NSString * `[`googleApiKey`](#interface_m_p_distance_matrix_provider_1ab76edc8729fa5beebd13c8f94e5e6a79) {#interface_m_p_distance_matrix_provider_1ab76edc8729fa5beebd13c8f94e5e6a79}

##### `{property} NSString * `[`graphId`](#interface_m_p_distance_matrix_provider_1a549ab83dc09edba45c5521e6fda23927) {#interface_m_p_distance_matrix_provider_1a549ab83dc09edba45c5521e6fda23927}

##### `{property} NSString * `[`vehicle`](#interface_m_p_distance_matrix_provider_1a09b55ab8d56086b0d10cb65716c83fe3) {#interface_m_p_distance_matrix_provider_1a09b55ab8d56086b0d10cb65716c83fe3}

##### `public virtual void `[`getDistanceMatrixWithOrigins:destinations:travelMode:avoid:depart:arrive:completionHandler:`](#interface_m_p_distance_matrix_provider_1ae8a335e7bfcbe0348ac22ae4f61a8b12)`(NSArray * origins,NSArray * destinations,NSString * travelMode,NSArray * restrictions,NSDate * departureTime,NSDate * arrivalTime,mpMatrixHandlerBlockType handler)` {#interface_m_p_distance_matrix_provider_1ae8a335e7bfcbe0348ac22ae4f61a8b12}

##### `public virtual void `[`getDistanceMatrixWithOrigins:destinations:travelMode:`](#interface_m_p_distance_matrix_provider_1a77e32d864d41cec492f0c79f6e234af1)`(NSArray * origins,NSArray * destinations,NSString * travelMode)` {#interface_m_p_distance_matrix_provider_1a77e32d864d41cec492f0c79f6e234af1}

##### `public virtual void `[`getGoogleDistanceMatrixWithOrigins:destinations:travelMode:avoid:depart:arrive:completionHandler:`](#interface_m_p_distance_matrix_provider_1a9dbbd659ffbc81cbfe8ca0100c06ec07)`(NSArray * origins,NSArray * destinations,NSString * travelMode,NSArray * restrictions,NSDate * departureTime,NSDate * arrivalTime,mpMatrixHandlerBlockType handler)` {#interface_m_p_distance_matrix_provider_1a9dbbd659ffbc81cbfe8ca0100c06ec07}

##### `public virtual void `[`getGoogleDistanceMatrixWithOrigins:destinations:travelMode:`](#interface_m_p_distance_matrix_provider_1acb74ec2d8227f3d1f355bc4a80de0a28)`(NSArray * origins,NSArray * destinations,NSString * travelMode)` {#interface_m_p_distance_matrix_provider_1acb74ec2d8227f3d1f355bc4a80de0a28}

## class `MPDistanceMatrixResult` {#interface_m_p_distance_matrix_result}

```
class MPDistanceMatrixResult
  : public MPJSONModel
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSArray * `[`destination_addresses`](#interface_m_p_distance_matrix_result_1a7800f304caede8aaf701c8a337721e91) | 
`{property} NSArray * `[`origin_addresses`](#interface_m_p_distance_matrix_result_1a698e1c53d83a4d58c29b653b358015bd) | 
`{property} NSArray< MPDistanceMatrixRows * >< MPDistanceMatrixRows > * `[`rows`](#interface_m_p_distance_matrix_result_1a9534d97249ee2a962becc5a8e2dcc782) | 
`{property} NSString * `[`status`](#interface_m_p_distance_matrix_result_1a9e8c907f7b4dec5fbf72cc3ac4ca71c4) | 
`{property} NSString< Optional > * `[`venue`](#interface_m_p_distance_matrix_result_1a4f2349ac28432e5e8a1fc9defaec4376) | 
`{property} NSString< Optional > * `[`bestOrigin`](#interface_m_p_distance_matrix_result_1ae3577762a132942d0f6c9a3ec3317925) | 
`{property} NSString< Optional > * `[`bestDestination`](#interface_m_p_distance_matrix_result_1af3cfc34603ed34b7b3f3ae9d0fcb1f66) | 
`{property} NSObject< Optional > * `[`provider`](#interface_m_p_distance_matrix_result_1a46bc86f319038be76df5dff60ee2d70e) | 

### Members

##### `{property} NSArray * `[`destination_addresses`](#interface_m_p_distance_matrix_result_1a7800f304caede8aaf701c8a337721e91) {#interface_m_p_distance_matrix_result_1a7800f304caede8aaf701c8a337721e91}

##### `{property} NSArray * `[`origin_addresses`](#interface_m_p_distance_matrix_result_1a698e1c53d83a4d58c29b653b358015bd) {#interface_m_p_distance_matrix_result_1a698e1c53d83a4d58c29b653b358015bd}

##### `{property} NSArray< MPDistanceMatrixRows * >< MPDistanceMatrixRows > * `[`rows`](#interface_m_p_distance_matrix_result_1a9534d97249ee2a962becc5a8e2dcc782) {#interface_m_p_distance_matrix_result_1a9534d97249ee2a962becc5a8e2dcc782}

##### `{property} NSString * `[`status`](#interface_m_p_distance_matrix_result_1a9e8c907f7b4dec5fbf72cc3ac4ca71c4) {#interface_m_p_distance_matrix_result_1a9e8c907f7b4dec5fbf72cc3ac4ca71c4}

##### `{property} NSString< Optional > * `[`venue`](#interface_m_p_distance_matrix_result_1a4f2349ac28432e5e8a1fc9defaec4376) {#interface_m_p_distance_matrix_result_1a4f2349ac28432e5e8a1fc9defaec4376}

##### `{property} NSString< Optional > * `[`bestOrigin`](#interface_m_p_distance_matrix_result_1ae3577762a132942d0f6c9a3ec3317925) {#interface_m_p_distance_matrix_result_1ae3577762a132942d0f6c9a3ec3317925}

##### `{property} NSString< Optional > * `[`bestDestination`](#interface_m_p_distance_matrix_result_1af3cfc34603ed34b7b3f3ae9d0fcb1f66) {#interface_m_p_distance_matrix_result_1af3cfc34603ed34b7b3f3ae9d0fcb1f66}

##### `{property} NSObject< Optional > * `[`provider`](#interface_m_p_distance_matrix_result_1a46bc86f319038be76df5dff60ee2d70e) {#interface_m_p_distance_matrix_result_1a46bc86f319038be76df5dff60ee2d70e}

## class `MPDistanceMatrixRows` {#interface_m_p_distance_matrix_rows}

```
class MPDistanceMatrixRows
  : public MPJSONModel
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSArray< MPDistanceMatrixElements * >< MPDistanceMatrixElements > * `[`elements`](#interface_m_p_distance_matrix_rows_1a15b3cf872b0211168cc38d0d9566b9f2) | 

### Members

##### `{property} NSArray< MPDistanceMatrixElements * >< MPDistanceMatrixElements > * `[`elements`](#interface_m_p_distance_matrix_rows_1a15b3cf872b0211168cc38d0d9566b9f2) {#interface_m_p_distance_matrix_rows_1a15b3cf872b0211168cc38d0d9566b9f2}

## class `MPEncodedPolyline` {#interface_m_p_encoded_polyline}

```
class MPEncodedPolyline
  : public MPJSONModel
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSString * `[`points`](#interface_m_p_encoded_polyline_1af2080504ee9eb29cf1f3c5a0ca42ebb9) | 

### Members

##### `{property} NSString * `[`points`](#interface_m_p_encoded_polyline_1af2080504ee9eb29cf1f3c5a0ca42ebb9) {#interface_m_p_encoded_polyline_1af2080504ee9eb29cf1f3c5a0ca42ebb9}

## class `MPFloor` {#interface_m_p_floor}

```
class MPFloor
  : public MPJSONModel
```  

Floor data model. Holds the floor geometry, display name, z-index and id of the building it belongs to. Furthermore it can hold a reference to a GMSTileLayer.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} GMSTileLayer< Optional > * `[`tileLayer`](#interface_m_p_floor_1a00fab89c3dc31a76f5b7b13df2239932) | Floor geometry. 
`{property} NSString< Optional > * `[`style`](#interface_m_p_floor_1a09f172d9e4a8e656f676a4286d564819) | Floor layer style, if any.
`{property} NSNumber< Optional > * `[`zIndex`](#interface_m_p_floor_1a7cf6714843497ee570286d7332e3211d) | 
`{property} NSString< Optional > * `[`buildingId`](#interface_m_p_floor_1abca699d11312507f943243f6b7902833) | 
`{property} NSArray< NSArray * > * `[`bounds`](#interface_m_p_floor_1ad4e143c7181797f29efbbc5b8c91e9cc) | 
`{property} NSString * `[`name`](#interface_m_p_floor_1a3ef096480bd95aa800ae510be91163db) | 

### Members

##### `{property} GMSTileLayer< Optional > * `[`tileLayer`](#interface_m_p_floor_1a00fab89c3dc31a76f5b7b13df2239932) {#interface_m_p_floor_1a00fab89c3dc31a76f5b7b13df2239932}

Floor geometry. 
The GMSTileLayer created to this floor.

##### `{property} NSString< Optional > * `[`style`](#interface_m_p_floor_1a09f172d9e4a8e656f676a4286d564819) {#interface_m_p_floor_1a09f172d9e4a8e656f676a4286d564819}

Floor layer style, if any.

##### `{property} NSNumber< Optional > * `[`zIndex`](#interface_m_p_floor_1a7cf6714843497ee570286d7332e3211d) {#interface_m_p_floor_1a7cf6714843497ee570286d7332e3211d}

##### `{property} NSString< Optional > * `[`buildingId`](#interface_m_p_floor_1abca699d11312507f943243f6b7902833) {#interface_m_p_floor_1abca699d11312507f943243f6b7902833}

##### `{property} NSArray< NSArray * > * `[`bounds`](#interface_m_p_floor_1ad4e143c7181797f29efbbc5b8c91e9cc) {#interface_m_p_floor_1ad4e143c7181797f29efbbc5b8c91e9cc}

##### `{property} NSString * `[`name`](#interface_m_p_floor_1a3ef096480bd95aa800ae510be91163db) {#interface_m_p_floor_1a3ef096480bd95aa800ae510be91163db}

## class `MPFloorButton` {#interface_m_p_floor_button}

```
class MPFloorButton
  : public UIButton
```  

Create a button with a floor index property

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSNumber * `[`floorIndex`](#interface_m_p_floor_button_1a941849ad3d05884960e55c2dbcb7bb2b) | Floor index property, corresponds to the index property of [MPFloor](#interface_m_p_floor)

### Members

##### `{property} NSNumber * `[`floorIndex`](#interface_m_p_floor_button_1a941849ad3d05884960e55c2dbcb7bb2b) {#interface_m_p_floor_button_1a941849ad3d05884960e55c2dbcb7bb2b}

Floor index property, corresponds to the index property of [MPFloor](#interface_m_p_floor)

## class `MPFloorSelectorControl` {#interface_m_p_floor_selector_control}

```
class MPFloorSelectorControl
  : public UIView
  : public <MPFloorSelectorProtocol>
```  

Floor selection UI element. Can be added to the map, but should be linked to an [MPBuilding](#interface_m_p_building) to make sense.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} UIColor * `[`floorButtonTitleColor`](#interface_m_p_floor_selector_control_1a273403b7921faf20a91532e8295f158e) | The textColor of floor selector buttons in normal state.
`{property} UIColor * `[`selectedFloorButtonTitleColor`](#interface_m_p_floor_selector_control_1a08c5ac366b846443a20fd57ce2c792d3) | The textColor of floor selector buttons in selected state.
`{property} UIColor * `[`userFloorColor`](#interface_m_p_floor_selector_control_1a5254a9e0096ca66fef76f5661f587b44) | The color of the indicator current user location floor.
`{property} UIColor * `[`floorButtonBackgroundColor`](#interface_m_p_floor_selector_control_1a60acb08feddbcb69c8198b4b6f4ee3c4) | The backgroundColor of floor selector buttons in normal state.
`{property} UIColor * `[`selectedFloorButtonBackgroundColor`](#interface_m_p_floor_selector_control_1aa0dc1776823a34bf6ef8545807bcb08f) | The backgroundColor of floor selector buttons in selected state.
`{property} NSInteger `[`floorButtonBorderPadding`](#interface_m_p_floor_selector_control_1a08668c910a04d98221cb301dd48fb58a) | The padding around floor selector buttons. Defaults to 1.
`{property} NSNumber * `[`currentFloor`](#interface_m_p_floor_selector_control_1a8c7e1f6162de78c21735d40b1fdf7dd0) | The current floor.
`{property} NSNumber * `[`fromFloorIndex`](#interface_m_p_floor_selector_control_1a392f6a0223ebc1e82a55012f1517ae97) | Floor index to start from (typically 0).
`{property} NSNumber * `[`nFloors`](#interface_m_p_floor_selector_control_1a041f62c04e3ef2211fbd74484f8ee370) | The number of floors.
`{property} NSNumber * `[`buttonSize`](#interface_m_p_floor_selector_control_1a341a425cf2d79903d9abd25f309464cf) | The size of a single floor button (buttonSize x buttonSize).
`{property} NSMutableArray * `[`buttons`](#interface_m_p_floor_selector_control_1a5425ddfd0d185f0e278df207cb9da223) | Array of the floor selector buttons.
`{property} UIImage * `[`topIcon`](#interface_m_p_floor_selector_control_1a31321ea6e984cecf3cb8f997ddb3b950) | The top icon image.
`{property} UIImageView * `[`topImageView`](#interface_m_p_floor_selector_control_1a675cdbb915a934d2d0a6278183e1eaaa) | UIImageView containing the top image.
`{property} CGFloat `[`maxHeight`](#interface_m_p_floor_selector_control_1ae38bc482275aace5224ab1b8f61f242b) | The maximum height that the floor selector may occupy
`{property} BOOL `[`disableAutomaticLayoutManagement`](#interface_m_p_floor_selector_control_1a409dd444cda1d99391b37a13cd1c2d6c) | 
`public virtual void `[`notifyFloorSelect:`](#interface_m_p_floor_selector_control_1a6c754d482ef2232873e8d338ae2a1de5)`(id sender)` | Method that fires when a floor button is pressed. 
`public virtual void `[`addToMap:`](#interface_m_p_floor_selector_control_1a3941c88b198a4e71dca49da830ef6dfe)`("Please use addSubview on containing view instead" DEPRECATED_MSG_ATTRIBUTE)` | Add the floor selector to a map. 
`public virtual void `[`addToView:`](#interface_m_p_floor_selector_control_1ad6c2ed3bff006fb5066853481a7fff52)`("Please use addSubview on containing view instead" DEPRECATED_MSG_ATTRIBUTE)` | Add the floor selector to a view. 
`public virtual void `[`updateFrame`](#interface_m_p_floor_selector_control_1a8f34e521db4c1060a0a347d33b2a7ed3)`()` | Update the floor selector view frame. Needed upon switch to landscape/portrait
`public virtual void `[`setUserFloor:`](#interface_m_p_floor_selector_control_1affe9f9d0bfdefd8642e09ba5b45049f1)`(NSNumber * floorIndex)` | Sets the floor index that the user/device is located. This value is used to provide an indicator on the floor selector, regardless of the floor actually displayed

### Members

##### `{property} UIColor * `[`floorButtonTitleColor`](#interface_m_p_floor_selector_control_1a273403b7921faf20a91532e8295f158e) {#interface_m_p_floor_selector_control_1a273403b7921faf20a91532e8295f158e}

The textColor of floor selector buttons in normal state.

##### `{property} UIColor * `[`selectedFloorButtonTitleColor`](#interface_m_p_floor_selector_control_1a08c5ac366b846443a20fd57ce2c792d3) {#interface_m_p_floor_selector_control_1a08c5ac366b846443a20fd57ce2c792d3}

The textColor of floor selector buttons in selected state.

##### `{property} UIColor * `[`userFloorColor`](#interface_m_p_floor_selector_control_1a5254a9e0096ca66fef76f5661f587b44) {#interface_m_p_floor_selector_control_1a5254a9e0096ca66fef76f5661f587b44}

The color of the indicator current user location floor.

##### `{property} UIColor * `[`floorButtonBackgroundColor`](#interface_m_p_floor_selector_control_1a60acb08feddbcb69c8198b4b6f4ee3c4) {#interface_m_p_floor_selector_control_1a60acb08feddbcb69c8198b4b6f4ee3c4}

The backgroundColor of floor selector buttons in normal state.

##### `{property} UIColor * `[`selectedFloorButtonBackgroundColor`](#interface_m_p_floor_selector_control_1aa0dc1776823a34bf6ef8545807bcb08f) {#interface_m_p_floor_selector_control_1aa0dc1776823a34bf6ef8545807bcb08f}

The backgroundColor of floor selector buttons in selected state.

##### `{property} NSInteger `[`floorButtonBorderPadding`](#interface_m_p_floor_selector_control_1a08668c910a04d98221cb301dd48fb58a) {#interface_m_p_floor_selector_control_1a08668c910a04d98221cb301dd48fb58a}

The padding around floor selector buttons. Defaults to 1.

##### `{property} NSNumber * `[`currentFloor`](#interface_m_p_floor_selector_control_1a8c7e1f6162de78c21735d40b1fdf7dd0) {#interface_m_p_floor_selector_control_1a8c7e1f6162de78c21735d40b1fdf7dd0}

The current floor.

##### `{property} NSNumber * `[`fromFloorIndex`](#interface_m_p_floor_selector_control_1a392f6a0223ebc1e82a55012f1517ae97) {#interface_m_p_floor_selector_control_1a392f6a0223ebc1e82a55012f1517ae97}

Floor index to start from (typically 0).

##### `{property} NSNumber * `[`nFloors`](#interface_m_p_floor_selector_control_1a041f62c04e3ef2211fbd74484f8ee370) {#interface_m_p_floor_selector_control_1a041f62c04e3ef2211fbd74484f8ee370}

The number of floors.

##### `{property} NSNumber * `[`buttonSize`](#interface_m_p_floor_selector_control_1a341a425cf2d79903d9abd25f309464cf) {#interface_m_p_floor_selector_control_1a341a425cf2d79903d9abd25f309464cf}

The size of a single floor button (buttonSize x buttonSize).

##### `{property} NSMutableArray * `[`buttons`](#interface_m_p_floor_selector_control_1a5425ddfd0d185f0e278df207cb9da223) {#interface_m_p_floor_selector_control_1a5425ddfd0d185f0e278df207cb9da223}

Array of the floor selector buttons.

##### `{property} UIImage * `[`topIcon`](#interface_m_p_floor_selector_control_1a31321ea6e984cecf3cb8f997ddb3b950) {#interface_m_p_floor_selector_control_1a31321ea6e984cecf3cb8f997ddb3b950}

The top icon image.

##### `{property} UIImageView * `[`topImageView`](#interface_m_p_floor_selector_control_1a675cdbb915a934d2d0a6278183e1eaaa) {#interface_m_p_floor_selector_control_1a675cdbb915a934d2d0a6278183e1eaaa}

UIImageView containing the top image.

##### `{property} CGFloat `[`maxHeight`](#interface_m_p_floor_selector_control_1ae38bc482275aace5224ab1b8f61f242b) {#interface_m_p_floor_selector_control_1ae38bc482275aace5224ab1b8f61f242b}

The maximum height that the floor selector may occupy

##### `{property} BOOL `[`disableAutomaticLayoutManagement`](#interface_m_p_floor_selector_control_1a409dd444cda1d99391b37a13cd1c2d6c) {#interface_m_p_floor_selector_control_1a409dd444cda1d99391b37a13cd1c2d6c}

##### `public virtual void `[`notifyFloorSelect:`](#interface_m_p_floor_selector_control_1a6c754d482ef2232873e8d338ae2a1de5)`(id sender)` {#interface_m_p_floor_selector_control_1a6c754d482ef2232873e8d338ae2a1de5}

Method that fires when a floor button is pressed. 
##### Parameters
* `sender` The button tapped

##### `public virtual void `[`addToMap:`](#interface_m_p_floor_selector_control_1a3941c88b198a4e71dca49da830ef6dfe)`("Please use addSubview on containing view instead" DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_floor_selector_control_1a3941c88b198a4e71dca49da830ef6dfe}

Add the floor selector to a map. 
##### Parameters
* `map` The map that should hold the floor selector.

##### `public virtual void `[`addToView:`](#interface_m_p_floor_selector_control_1ad6c2ed3bff006fb5066853481a7fff52)`("Please use addSubview on containing view instead" DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_floor_selector_control_1ad6c2ed3bff006fb5066853481a7fff52}

Add the floor selector to a view. 
##### Parameters
* `view` The view that should hold the floor selector.

##### `public virtual void `[`updateFrame`](#interface_m_p_floor_selector_control_1a8f34e521db4c1060a0a347d33b2a7ed3)`()` {#interface_m_p_floor_selector_control_1a8f34e521db4c1060a0a347d33b2a7ed3}

Update the floor selector view frame. Needed upon switch to landscape/portrait

##### `public virtual void `[`setUserFloor:`](#interface_m_p_floor_selector_control_1affe9f9d0bfdefd8642e09ba5b45049f1)`(NSNumber * floorIndex)` {#interface_m_p_floor_selector_control_1affe9f9d0bfdefd8642e09ba5b45049f1}

Sets the floor index that the user/device is located. This value is used to provide an indicator on the floor selector, regardless of the floor actually displayed

## class `MPFloorTileLayer` {#interface_m_p_floor_tile_layer}

```
class MPFloorTileLayer
  : public MPOnlineTileLayer
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSString * `[`urlTemplate`](#interface_m_p_floor_tile_layer_1a3dabbc81564b882bd151e4a30d597f1b) | The url template string to use when fetching tiles. Must have format "prefix{param_1}infix{param_N}suffix", e.g.: "http://tiles.url.com/{floor}/{x}/{y}/{zoom}.png" By default the implementation of this tilelayer will look for {venueId}/{style}/{buildingId}/{floor}/{z}/{x}/{y}, where x, y and z is mandatory.
`{property} `[`MPFloor`](#interface_m_p_floor)` * `[`floor`](#interface_m_p_floor_tile_layer_1a09b69683d98b5dd4f80fe295b66bdcb8) | Floor property
`{property} NSNumber * `[`venueId`](#interface_m_p_floor_tile_layer_1afe436c402c510b94cd51b54dba9e5e2a) | Venue id
`{property} NSArray * `[`subdomains`](#interface_m_p_floor_tile_layer_1ad763dfb273c2a45479dedbc0c71114b4) | Array of strings identifying subdomains. If this property is set, and the url template contains the parameter {subdomain}, the tilelayer will do round-robin over the subdomains specified.
`public virtual id `[`initWithVenue:andFloor:`](#interface_m_p_floor_tile_layer_1a004edc00d0ff57ee6cb3dab6ac0c416c)`(`[`MPVenue`](#interface_m_p_venue)` * venue,`[`MPFloor`](#interface_m_p_floor)` * floor)` | Instantiate using a venue and a floor object.
`public virtual void `[`setUrlTemplate:`](#interface_m_p_floor_tile_layer_1ad334219da53f1d2e996c4914ea875950)`(NSString * urlTemplate)` | Set the url template to base the tilelayer on
`public virtual void `[`parseUrl`](#interface_m_p_floor_tile_layer_1ae9733001500cc00f72f885fb3aca1833)`()` | Parse the url template. Normally, this is done automatically

### Members

##### `{property} NSString * `[`urlTemplate`](#interface_m_p_floor_tile_layer_1a3dabbc81564b882bd151e4a30d597f1b) {#interface_m_p_floor_tile_layer_1a3dabbc81564b882bd151e4a30d597f1b}

The url template string to use when fetching tiles. Must have format "prefix{param_1}infix{param_N}suffix", e.g.: "http://tiles.url.com/{floor}/{x}/{y}/{zoom}.png" By default the implementation of this tilelayer will look for {venueId}/{style}/{buildingId}/{floor}/{z}/{x}/{y}, where x, y and z is mandatory.

##### `{property} `[`MPFloor`](#interface_m_p_floor)` * `[`floor`](#interface_m_p_floor_tile_layer_1a09b69683d98b5dd4f80fe295b66bdcb8) {#interface_m_p_floor_tile_layer_1a09b69683d98b5dd4f80fe295b66bdcb8}

Floor property

##### `{property} NSNumber * `[`venueId`](#interface_m_p_floor_tile_layer_1afe436c402c510b94cd51b54dba9e5e2a) {#interface_m_p_floor_tile_layer_1afe436c402c510b94cd51b54dba9e5e2a}

Venue id

##### `{property} NSArray * `[`subdomains`](#interface_m_p_floor_tile_layer_1ad763dfb273c2a45479dedbc0c71114b4) {#interface_m_p_floor_tile_layer_1ad763dfb273c2a45479dedbc0c71114b4}

Array of strings identifying subdomains. If this property is set, and the url template contains the parameter {subdomain}, the tilelayer will do round-robin over the subdomains specified.

##### `public virtual id `[`initWithVenue:andFloor:`](#interface_m_p_floor_tile_layer_1a004edc00d0ff57ee6cb3dab6ac0c416c)`(`[`MPVenue`](#interface_m_p_venue)` * venue,`[`MPFloor`](#interface_m_p_floor)` * floor)` {#interface_m_p_floor_tile_layer_1a004edc00d0ff57ee6cb3dab6ac0c416c}

Instantiate using a venue and a floor object.

##### `public virtual void `[`setUrlTemplate:`](#interface_m_p_floor_tile_layer_1ad334219da53f1d2e996c4914ea875950)`(NSString * urlTemplate)` {#interface_m_p_floor_tile_layer_1ad334219da53f1d2e996c4914ea875950}

Set the url template to base the tilelayer on

##### `public virtual void `[`parseUrl`](#interface_m_p_floor_tile_layer_1ae9733001500cc00f72f885fb3aca1833)`()` {#interface_m_p_floor_tile_layer_1ae9733001500cc00f72f885fb3aca1833}

Parse the url template. Normally, this is done automatically

## class `MPGeometry` {#interface_m_p_geometry}

```
class MPGeometry
  : public MPJSONModel
```  

Basic geometry class holding one or more coordinate sets

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSArray * `[`coordinates`](#interface_m_p_geometry_1ae86762b0b04d24607eea790c81734da5) | Type of data (equals Geometry) 

### Members

##### `{property} NSArray * `[`coordinates`](#interface_m_p_geometry_1ae86762b0b04d24607eea790c81734da5) {#interface_m_p_geometry_1ae86762b0b04d24607eea790c81734da5}

Type of data (equals Geometry) 
Array holding one or more coordinate sets (if so, the array will be an array of arrays)

## class `MPImageProvider` {#interface_m_p_image_provider}

```
class MPImageProvider
  : public NSObject
  : public <MPImageProvider>
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public virtual void `[`getImageFromUrlStringAsync:imageSize:completionHandler:`](#interface_m_p_image_provider_1a1d7737ff1a0a487c117034a8bb737bed)`(NSString * url,CGSize size,void(^)(UIImage *image, NSError *error) completionHandler)` | 

### Members

##### `public virtual void `[`getImageFromUrlStringAsync:imageSize:completionHandler:`](#interface_m_p_image_provider_1a1d7737ff1a0a487c117034a8bb737bed)`(NSString * url,CGSize size,void(^)(UIImage *image, NSError *error) completionHandler)` {#interface_m_p_image_provider_1a1d7737ff1a0a487c117034a8bb737bed}

## class `MPImageRenderer` {#interface_m_p_image_renderer}

```
class MPImageRenderer
  : public NSObject
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

### Members

## class `MPInfoSnippetView` {#interface_m_p_info_snippet_view}

```
class MPInfoSnippetView
  : public UIView
```  

Create an location info view, designed to contain information from a tapped location on the map.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} id< MPInfoSnippetViewDelegate > `[`delegate`](#interface_m_p_info_snippet_view_1a8d0a56329ec42f3da0cfaf16b8017b47) | Info snippet view delegate
`{property} int `[`snippetHeight`](#interface_m_p_info_snippet_view_1a30f02e599de673e3ec402f51e0edc0d3) | Set the height of the info snippet
`{property} `[`MPLocation`](#interface_m_p_location)` * `[`location`](#interface_m_p_info_snippet_view_1a552583e1fe4d71bd7fbc378b094ad5eb) | Set the location which information will show in the view
`{property} UIView * `[`parentView`](#interface_m_p_info_snippet_view_1a3169cb5841bcd2c43c776b5fb7f5ed8f) | Parent view property
`{property} UIView * `[`containerView`](#interface_m_p_info_snippet_view_1a7ee3206dfdb5652e847bfa71a8e9126b) | View containing the child views
`{property} UIView * `[`centerView`](#interface_m_p_info_snippet_view_1a0b0df355a0f3fbcfe88d0edcf00e671b) | Center view. To customize, just remove or add views inside this view.
`{property} UIView * `[`leftView`](#interface_m_p_info_snippet_view_1a5b7123d2f905885c156a715b2678a039) | Left view. To customize, just remove or add views inside this view.
`{property} UIView * `[`rightView`](#interface_m_p_info_snippet_view_1a0479be2ac0d8d9104d03f20c772a2a72) | Right view. To customize, just remove or add views inside this view.
`{property} UILabel * `[`centerTopTextView`](#interface_m_p_info_snippet_view_1acebe8d1ead03023d132b8e3030cab6a8) | Label view positioned top center (inside centerView)
`{property} UILabel * `[`leftTopTextView`](#interface_m_p_info_snippet_view_1a2e5673a81fdf9f0197486d5df33d94a6) | Label view positioned top left (inside leftView)
`{property} UILabel * `[`rightTopTextView`](#interface_m_p_info_snippet_view_1acb6d518dba57a386f672ebf0bae9e768) | Label view positioned top right (inside rightView)
`{property} UILabel * `[`centerBottomTextView`](#interface_m_p_info_snippet_view_1a174e11d4ff1f48731b30aa6f2fad8a4e) | Label view positioned bottom center (inside centerView)
`{property} UILabel * `[`leftBottomTextView`](#interface_m_p_info_snippet_view_1ae682602f147beba4d369f156acbe92a9) | Label view positioned bottom left (inside leftView)
`{property} UILabel * `[`rightBottomTextView`](#interface_m_p_info_snippet_view_1a264eb6860b6d078e6e3c6a9218b10496) | Label view positioned bottom right (inside rightView)
`public virtual void `[`addToView:`](#interface_m_p_info_snippet_view_1a48effd14d5d3e3b5a257df5d53580996)`(UIView * view)` | Add the info snippet to another view
`public virtual void `[`attachLocation:`](#interface_m_p_info_snippet_view_1a808c950ff0bdc33e48d6fa6893eb1d4a)`(`[`MPLocation`](#interface_m_p_location)` * location)` | Attach a new location object to the info snippet
`public virtual void `[`attachLocation:currentPosition:`](#interface_m_p_info_snippet_view_1aa2316a70db6701154448aa423d64d9bb)`(`[`MPLocation`](#interface_m_p_location)` * location,`[`MPLocation`](#interface_m_p_location)` * position)` | Attach a new location object to the info snippet and provide an initial user position (for displaying distances).
`public virtual void `[`enableLeftView`](#interface_m_p_info_snippet_view_1ac1597103fb19da84a5a00ab2971d0017)`()` | Enable the left view, disabled by default
`public virtual void `[`hide`](#interface_m_p_info_snippet_view_1ad1d41cc61dc07640c21fa27cc7e4c252)`()` | Hide the info snippet
`public virtual void `[`show`](#interface_m_p_info_snippet_view_1a38932b0498c8061007c1c78e7fbda98f)`()` | Show the info snippet, by animating from bottom and up
`public virtual void `[`touchesBegan:withEvent:`](#interface_m_p_info_snippet_view_1a502ae2947098d6eab19b2642b177067e)`(NSSet * touches,UIEvent * event)` | 
`public virtual void `[`touchesMoved:withEvent:`](#interface_m_p_info_snippet_view_1a5644ec4450e066a64f5822afea533962)`(NSSet * touches,UIEvent * event)` | 
`public virtual void `[`touchesEnded:withEvent:`](#interface_m_p_info_snippet_view_1a00a49e43c1e39a526bd0f9a093e9dfbf)`(NSSet * touches,UIEvent * event)` | 
`public virtual void `[`touchesCancelled:withEvent:`](#interface_m_p_info_snippet_view_1adddc3e9d26caff9d0c0848403b9904ce)`(NSSet * touches,UIEvent * event)` | 

### Members

##### `{property} id< MPInfoSnippetViewDelegate > `[`delegate`](#interface_m_p_info_snippet_view_1a8d0a56329ec42f3da0cfaf16b8017b47) {#interface_m_p_info_snippet_view_1a8d0a56329ec42f3da0cfaf16b8017b47}

Info snippet view delegate

##### `{property} int `[`snippetHeight`](#interface_m_p_info_snippet_view_1a30f02e599de673e3ec402f51e0edc0d3) {#interface_m_p_info_snippet_view_1a30f02e599de673e3ec402f51e0edc0d3}

Set the height of the info snippet

##### `{property} `[`MPLocation`](#interface_m_p_location)` * `[`location`](#interface_m_p_info_snippet_view_1a552583e1fe4d71bd7fbc378b094ad5eb) {#interface_m_p_info_snippet_view_1a552583e1fe4d71bd7fbc378b094ad5eb}

Set the location which information will show in the view

##### `{property} UIView * `[`parentView`](#interface_m_p_info_snippet_view_1a3169cb5841bcd2c43c776b5fb7f5ed8f) {#interface_m_p_info_snippet_view_1a3169cb5841bcd2c43c776b5fb7f5ed8f}

Parent view property

##### `{property} UIView * `[`containerView`](#interface_m_p_info_snippet_view_1a7ee3206dfdb5652e847bfa71a8e9126b) {#interface_m_p_info_snippet_view_1a7ee3206dfdb5652e847bfa71a8e9126b}

View containing the child views

##### `{property} UIView * `[`centerView`](#interface_m_p_info_snippet_view_1a0b0df355a0f3fbcfe88d0edcf00e671b) {#interface_m_p_info_snippet_view_1a0b0df355a0f3fbcfe88d0edcf00e671b}

Center view. To customize, just remove or add views inside this view.

##### `{property} UIView * `[`leftView`](#interface_m_p_info_snippet_view_1a5b7123d2f905885c156a715b2678a039) {#interface_m_p_info_snippet_view_1a5b7123d2f905885c156a715b2678a039}

Left view. To customize, just remove or add views inside this view.

##### `{property} UIView * `[`rightView`](#interface_m_p_info_snippet_view_1a0479be2ac0d8d9104d03f20c772a2a72) {#interface_m_p_info_snippet_view_1a0479be2ac0d8d9104d03f20c772a2a72}

Right view. To customize, just remove or add views inside this view.

##### `{property} UILabel * `[`centerTopTextView`](#interface_m_p_info_snippet_view_1acebe8d1ead03023d132b8e3030cab6a8) {#interface_m_p_info_snippet_view_1acebe8d1ead03023d132b8e3030cab6a8}

Label view positioned top center (inside centerView)

##### `{property} UILabel * `[`leftTopTextView`](#interface_m_p_info_snippet_view_1a2e5673a81fdf9f0197486d5df33d94a6) {#interface_m_p_info_snippet_view_1a2e5673a81fdf9f0197486d5df33d94a6}

Label view positioned top left (inside leftView)

##### `{property} UILabel * `[`rightTopTextView`](#interface_m_p_info_snippet_view_1acb6d518dba57a386f672ebf0bae9e768) {#interface_m_p_info_snippet_view_1acb6d518dba57a386f672ebf0bae9e768}

Label view positioned top right (inside rightView)

##### `{property} UILabel * `[`centerBottomTextView`](#interface_m_p_info_snippet_view_1a174e11d4ff1f48731b30aa6f2fad8a4e) {#interface_m_p_info_snippet_view_1a174e11d4ff1f48731b30aa6f2fad8a4e}

Label view positioned bottom center (inside centerView)

##### `{property} UILabel * `[`leftBottomTextView`](#interface_m_p_info_snippet_view_1ae682602f147beba4d369f156acbe92a9) {#interface_m_p_info_snippet_view_1ae682602f147beba4d369f156acbe92a9}

Label view positioned bottom left (inside leftView)

##### `{property} UILabel * `[`rightBottomTextView`](#interface_m_p_info_snippet_view_1a264eb6860b6d078e6e3c6a9218b10496) {#interface_m_p_info_snippet_view_1a264eb6860b6d078e6e3c6a9218b10496}

Label view positioned bottom right (inside rightView)

##### `public virtual void `[`addToView:`](#interface_m_p_info_snippet_view_1a48effd14d5d3e3b5a257df5d53580996)`(UIView * view)` {#interface_m_p_info_snippet_view_1a48effd14d5d3e3b5a257df5d53580996}

Add the info snippet to another view

##### `public virtual void `[`attachLocation:`](#interface_m_p_info_snippet_view_1a808c950ff0bdc33e48d6fa6893eb1d4a)`(`[`MPLocation`](#interface_m_p_location)` * location)` {#interface_m_p_info_snippet_view_1a808c950ff0bdc33e48d6fa6893eb1d4a}

Attach a new location object to the info snippet

##### `public virtual void `[`attachLocation:currentPosition:`](#interface_m_p_info_snippet_view_1aa2316a70db6701154448aa423d64d9bb)`(`[`MPLocation`](#interface_m_p_location)` * location,`[`MPLocation`](#interface_m_p_location)` * position)` {#interface_m_p_info_snippet_view_1aa2316a70db6701154448aa423d64d9bb}

Attach a new location object to the info snippet and provide an initial user position (for displaying distances).

##### `public virtual void `[`enableLeftView`](#interface_m_p_info_snippet_view_1ac1597103fb19da84a5a00ab2971d0017)`()` {#interface_m_p_info_snippet_view_1ac1597103fb19da84a5a00ab2971d0017}

Enable the left view, disabled by default

##### `public virtual void `[`hide`](#interface_m_p_info_snippet_view_1ad1d41cc61dc07640c21fa27cc7e4c252)`()` {#interface_m_p_info_snippet_view_1ad1d41cc61dc07640c21fa27cc7e4c252}

Hide the info snippet

##### `public virtual void `[`show`](#interface_m_p_info_snippet_view_1a38932b0498c8061007c1c78e7fbda98f)`()` {#interface_m_p_info_snippet_view_1a38932b0498c8061007c1c78e7fbda98f}

Show the info snippet, by animating from bottom and up

##### `public virtual void `[`touchesBegan:withEvent:`](#interface_m_p_info_snippet_view_1a502ae2947098d6eab19b2642b177067e)`(NSSet * touches,UIEvent * event)` {#interface_m_p_info_snippet_view_1a502ae2947098d6eab19b2642b177067e}

##### `public virtual void `[`touchesMoved:withEvent:`](#interface_m_p_info_snippet_view_1a5644ec4450e066a64f5822afea533962)`(NSSet * touches,UIEvent * event)` {#interface_m_p_info_snippet_view_1a5644ec4450e066a64f5822afea533962}

##### `public virtual void `[`touchesEnded:withEvent:`](#interface_m_p_info_snippet_view_1a00a49e43c1e39a526bd0f9a093e9dfbf)`(NSSet * touches,UIEvent * event)` {#interface_m_p_info_snippet_view_1a00a49e43c1e39a526bd0f9a093e9dfbf}

##### `public virtual void `[`touchesCancelled:withEvent:`](#interface_m_p_info_snippet_view_1adddc3e9d26caff9d0c0848403b9904ce)`(NSSet * touches,UIEvent * event)` {#interface_m_p_info_snippet_view_1adddc3e9d26caff9d0c0848403b9904ce}

## class `MPJSONAPI` {#interface_m_p_j_s_o_n_a_p_i}

```
class MPJSONAPI
  : public NSObject
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

### Members

## class `MPJSONHTTPClient` {#interface_m_p_j_s_o_n_h_t_t_p_client}

```
class MPJSONHTTPClient
  : public NSObject
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

### Members

## class `MPJSONKeyMapper` {#interface_m_p_j_s_o_n_key_mapper}

```
class MPJSONKeyMapper
  : public NSObject
```  

**You won't need to create or store instances of this class yourself.** If you want your model to have different property names than the JSON feed keys, look below on how to make your model use a key mapper.

For example if you consume JSON from twitter you get back underscore_case style key names. For example:

"profile_sidebar_border_color": "0094C2",
"profile_background_tile": false,

To comply with Obj-C accepted camelCase property naming for your classes, you need to provide mapping between JSON keys and ObjC property names.

In your model overwrite the + ([MPJSONKeyMapper](#interface_m_p_j_s_o_n_key_mapper) *)keyMapper method and provide a [MPJSONKeyMapper](#interface_m_p_j_s_o_n_key_mapper) instance to convert the key names for your model.

If you need custom mapping it's as easy as: 
+ ([MPJSONKeyMapper](#interface_m_p_j_s_o_n_key_mapper) *)keyMapper {
 return [[[MPJSONKeyMapper](#interface_m_p_j_s_o_n_key_mapper)alloc]initWithDictionary:"crazy_JSON_name":@"myCamelCaseName"}];
}
 In case you want to handle underscore_case, **use the predefined key mapper**, like so: 
+ ([MPJSONKeyMapper](#interface_m_p_j_s_o_n_key_mapper) *)keyMapper {
 return [[MPJSONKeyMapper](#interface_m_p_j_s_o_n_key_mapper)mapperFromUnderscoreCaseToCamelCase];
}

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} MPJSONModelKeyMapBlock JSONToModelKeyBlock `[`MP_DEPRECATED_ATTRIBUTE`](#interface_m_p_j_s_o_n_key_mapper_1a97e0c07d5283d3925913369726599b00) | 
`public virtual NSString * `[`convertValue:isImportingToModel:`](#interface_m_p_j_s_o_n_key_mapper_1a1b7239f4bfdaf3b8f99619d7c4e7da99)`(NSString * value,"use `[`convertValue:`](#interface_m_p_j_s_o_n_key_mapper_1ae6d2776b66dd287d6b7a03958e8d00df)`" MP_DEPRECATED_MSG_ATTRIBUTE)` | 
`public virtual instancetype `[`initWithDictionary:`](#interface_m_p_j_s_o_n_key_mapper_1aa33224c8c839d359429acf3d5be54510)`("use `[`initWithModelToJSONDictionary:`](#interface_m_p_j_s_o_n_key_mapper_1a846c056dc15a9caf1271555d2b244990)`" MP_DEPRECATED_MSG_ATTRIBUTE)` | 
`public virtual instancetype `[`initWithJSONToModelBlock:modelToJSONBlock:`](#interface_m_p_j_s_o_n_key_mapper_1af1ea6c8cf35354bf25db555c947a6d82)`(MPJSONModelKeyMapBlock toModel,"use `[`initWithModelToJSONBlock:`](#interface_m_p_j_s_o_n_key_mapper_1a6edee8804a741501579155ccdfced8ee)`" MP_DEPRECATED_MSG_ATTRIBUTE)` | 

### Members

##### `{property} MPJSONModelKeyMapBlock JSONToModelKeyBlock `[`MP_DEPRECATED_ATTRIBUTE`](#interface_m_p_j_s_o_n_key_mapper_1a97e0c07d5283d3925913369726599b00) {#interface_m_p_j_s_o_n_key_mapper_1a97e0c07d5283d3925913369726599b00}

##### `public virtual NSString * `[`convertValue:isImportingToModel:`](#interface_m_p_j_s_o_n_key_mapper_1a1b7239f4bfdaf3b8f99619d7c4e7da99)`(NSString * value,"use `[`convertValue:`](#interface_m_p_j_s_o_n_key_mapper_1ae6d2776b66dd287d6b7a03958e8d00df)`" MP_DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_j_s_o_n_key_mapper_1a1b7239f4bfdaf3b8f99619d7c4e7da99}

##### `public virtual instancetype `[`initWithDictionary:`](#interface_m_p_j_s_o_n_key_mapper_1aa33224c8c839d359429acf3d5be54510)`("use `[`initWithModelToJSONDictionary:`](#interface_m_p_j_s_o_n_key_mapper_1a846c056dc15a9caf1271555d2b244990)`" MP_DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_j_s_o_n_key_mapper_1aa33224c8c839d359429acf3d5be54510}

##### `public virtual instancetype `[`initWithJSONToModelBlock:modelToJSONBlock:`](#interface_m_p_j_s_o_n_key_mapper_1af1ea6c8cf35354bf25db555c947a6d82)`(MPJSONModelKeyMapBlock toModel,"use `[`initWithModelToJSONBlock:`](#interface_m_p_j_s_o_n_key_mapper_1a6edee8804a741501579155ccdfced8ee)`" MP_DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_j_s_o_n_key_mapper_1af1ea6c8cf35354bf25db555c947a6d82}

## class `MPJSONModel` {#interface_m_p_j_s_o_n_model}

```
class MPJSONModel
  : public NSObject
  : public <AbstractMPJSONModelProtocol>
  : public <NSSecureCoding>
```  

The [MPJSONModel](#interface_m_p_j_s_o_n_model) is an abstract model class, you should not instantiate it directly, as it does not have any properties, and therefore cannot serve as a data model. Instead you should subclass it, and define the properties you want your data model to have as properties of your own class.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public virtual void `[`mergeFromDictionary:useKeyMapping:`](#interface_m_p_j_s_o_n_model_1a5f98e957552311837fcf691b4bfd19ed)`(NSDictionary * dict,"use `[`mergeFromDictionary:useKeyMapping:error:`](#interface_m_p_j_s_o_n_model_1a8199374eb52b69f2a8f31d3f5f269080)`" DEPRECATED_MSG_ATTRIBUTE)` | 
`public virtual NSString * `[`DEPRECATED_ATTRIBUTE`](#interface_m_p_j_s_o_n_model_1aa12148f100c3f83d41534782f6b7c0be)`()` | 
`public virtual NSComparisonResult `[`compare:`](#interface_m_p_j_s_o_n_model_1ac3692dc92f5f40bae21f4671ee81cdb6)`(id DEPRECATED_ATTRIBUTE)` | 

### Members

##### `public virtual void `[`mergeFromDictionary:useKeyMapping:`](#interface_m_p_j_s_o_n_model_1a5f98e957552311837fcf691b4bfd19ed)`(NSDictionary * dict,"use `[`mergeFromDictionary:useKeyMapping:error:`](#interface_m_p_j_s_o_n_model_1a8199374eb52b69f2a8f31d3f5f269080)`" DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_j_s_o_n_model_1a5f98e957552311837fcf691b4bfd19ed}

##### `public virtual NSString * `[`DEPRECATED_ATTRIBUTE`](#interface_m_p_j_s_o_n_model_1aa12148f100c3f83d41534782f6b7c0be)`()` {#interface_m_p_j_s_o_n_model_1aa12148f100c3f83d41534782f6b7c0be}

##### `public virtual NSComparisonResult `[`compare:`](#interface_m_p_j_s_o_n_model_1ac3692dc92f5f40bae21f4671ee81cdb6)`(id DEPRECATED_ATTRIBUTE)` {#interface_m_p_j_s_o_n_model_1ac3692dc92f5f40bae21f4671ee81cdb6}

## class `MPJSONModelClassProperty` {#interface_m_p_j_s_o_n_model_class_property}

```
class MPJSONModelClassProperty
  : public NSObject
```  

**You do not need to instantiate this class yourself.** This class is used internally by [MPJSONModel](#interface_m_p_j_s_o_n_model) to inspect the declared properties of your model class.

Class to contain the information, representing a class property It features the property's name, type, whether it's a required property, and (optionally) the class protocol

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} BOOL isIndex `[`DEPRECATED_ATTRIBUTE`](#interface_m_p_j_s_o_n_model_class_property_1a15cc797d6c43196f27d2eedf8da344e2) | 
`{property} NSString * `[`name`](#interface_m_p_j_s_o_n_model_class_property_1a4021a40a03dfd58ef8e26ea94e581429) | The name of the declared property (not the ivar name)
`{property} Class `[`type`](#interface_m_p_j_s_o_n_model_class_property_1a8ec985f14709479d4ac377b44ef24da0) | A property class type
`{property} NSString * `[`structName`](#interface_m_p_j_s_o_n_model_class_property_1ae00e1ed473da7e722b3792ddb7de982c) | Struct name if a struct
`{property} NSString * `[`protocol`](#interface_m_p_j_s_o_n_model_class_property_1ab1898b24ffb6800507f3106af3527c95) | The name of the protocol the property conforms to (or nil)
`{property} BOOL `[`isOptional`](#interface_m_p_j_s_o_n_model_class_property_1a0f036917570e1e5482c36ca1ddbfb75a) | If YES, it can be missing in the input data, and the input would be still valid
`{property} BOOL `[`isStandardJSONType`](#interface_m_p_j_s_o_n_model_class_property_1a2473bea0731f27d49743d3c6d072f415) | If YES - don't call any transformers on this property's value
`{property} BOOL `[`isMutable`](#interface_m_p_j_s_o_n_model_class_property_1af0077e93ce72cc2350608a6858f7b3a3) | If YES - create a mutable object for the value of the property
`{property} PropertyGetterType `[`getterType`](#interface_m_p_j_s_o_n_model_class_property_1a89d6ad7bf6e0f13665ec5294f4a8d29f) | The status of property getter introspection in a model
`{property} SEL `[`customGetter`](#interface_m_p_j_s_o_n_model_class_property_1a9fe96e185a0f1a1e6a88ed9bc6a68d9c) | a custom getter for this property, found in the owning model
`{property} NSMutableDictionary * `[`customSetters`](#interface_m_p_j_s_o_n_model_class_property_1a1aeb4c68cf99e761a36391d8264c1dc3) | custom setters for this property, found in the owning model

### Members

##### `{property} BOOL isIndex `[`DEPRECATED_ATTRIBUTE`](#interface_m_p_j_s_o_n_model_class_property_1a15cc797d6c43196f27d2eedf8da344e2) {#interface_m_p_j_s_o_n_model_class_property_1a15cc797d6c43196f27d2eedf8da344e2}

##### `{property} NSString * `[`name`](#interface_m_p_j_s_o_n_model_class_property_1a4021a40a03dfd58ef8e26ea94e581429) {#interface_m_p_j_s_o_n_model_class_property_1a4021a40a03dfd58ef8e26ea94e581429}

The name of the declared property (not the ivar name)

##### `{property} Class `[`type`](#interface_m_p_j_s_o_n_model_class_property_1a8ec985f14709479d4ac377b44ef24da0) {#interface_m_p_j_s_o_n_model_class_property_1a8ec985f14709479d4ac377b44ef24da0}

A property class type

##### `{property} NSString * `[`structName`](#interface_m_p_j_s_o_n_model_class_property_1ae00e1ed473da7e722b3792ddb7de982c) {#interface_m_p_j_s_o_n_model_class_property_1ae00e1ed473da7e722b3792ddb7de982c}

Struct name if a struct

##### `{property} NSString * `[`protocol`](#interface_m_p_j_s_o_n_model_class_property_1ab1898b24ffb6800507f3106af3527c95) {#interface_m_p_j_s_o_n_model_class_property_1ab1898b24ffb6800507f3106af3527c95}

The name of the protocol the property conforms to (or nil)

##### `{property} BOOL `[`isOptional`](#interface_m_p_j_s_o_n_model_class_property_1a0f036917570e1e5482c36ca1ddbfb75a) {#interface_m_p_j_s_o_n_model_class_property_1a0f036917570e1e5482c36ca1ddbfb75a}

If YES, it can be missing in the input data, and the input would be still valid

##### `{property} BOOL `[`isStandardJSONType`](#interface_m_p_j_s_o_n_model_class_property_1a2473bea0731f27d49743d3c6d072f415) {#interface_m_p_j_s_o_n_model_class_property_1a2473bea0731f27d49743d3c6d072f415}

If YES - don't call any transformers on this property's value

##### `{property} BOOL `[`isMutable`](#interface_m_p_j_s_o_n_model_class_property_1af0077e93ce72cc2350608a6858f7b3a3) {#interface_m_p_j_s_o_n_model_class_property_1af0077e93ce72cc2350608a6858f7b3a3}

If YES - create a mutable object for the value of the property

##### `{property} PropertyGetterType `[`getterType`](#interface_m_p_j_s_o_n_model_class_property_1a89d6ad7bf6e0f13665ec5294f4a8d29f) {#interface_m_p_j_s_o_n_model_class_property_1a89d6ad7bf6e0f13665ec5294f4a8d29f}

The status of property getter introspection in a model

##### `{property} SEL `[`customGetter`](#interface_m_p_j_s_o_n_model_class_property_1a9fe96e185a0f1a1e6a88ed9bc6a68d9c) {#interface_m_p_j_s_o_n_model_class_property_1a9fe96e185a0f1a1e6a88ed9bc6a68d9c}

a custom getter for this property, found in the owning model

##### `{property} NSMutableDictionary * `[`customSetters`](#interface_m_p_j_s_o_n_model_class_property_1a1aeb4c68cf99e761a36391d8264c1dc3) {#interface_m_p_j_s_o_n_model_class_property_1a1aeb4c68cf99e761a36391d8264c1dc3}

custom setters for this property, found in the owning model

## class `MPJSONModelError` {#interface_m_p_j_s_o_n_model_error}

```
class MPJSONModelError
  : public NSError
```  

Custom NSError subclass with shortcut methods for creating the common [MPJSONModel](#interface_m_p_j_s_o_n_model) errors

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSHTTPURLResponse * `[`httpResponse`](#interface_m_p_j_s_o_n_model_error_1a833f0ea828b37bf642259f2cf454ff55) | 
`{property} NSData * `[`responseData`](#interface_m_p_j_s_o_n_model_error_1a7b7e39fed51ac5769b4af3e9e4377ae6) | 
`public virtual instancetype `[`errorByPrependingKeyPathComponent:`](#interface_m_p_j_s_o_n_model_error_1a4e94fbcdd3522e3fccbde9abf6553046)`(NSString * component)` | Creates a new [MPJSONModelError](#interface_m_p_j_s_o_n_model_error) with the same values plus information about the key-path of the error. Properties in the new error object are the same as those from the receiver, except that a new key kMPJSONModelKeyPath is added to the userInfo dictionary. This key contains the component string parameter. If the key is already present then the new error object has the component string prepended to the existing value.

### Members

##### `{property} NSHTTPURLResponse * `[`httpResponse`](#interface_m_p_j_s_o_n_model_error_1a833f0ea828b37bf642259f2cf454ff55) {#interface_m_p_j_s_o_n_model_error_1a833f0ea828b37bf642259f2cf454ff55}

##### `{property} NSData * `[`responseData`](#interface_m_p_j_s_o_n_model_error_1a7b7e39fed51ac5769b4af3e9e4377ae6) {#interface_m_p_j_s_o_n_model_error_1a7b7e39fed51ac5769b4af3e9e4377ae6}

##### `public virtual instancetype `[`errorByPrependingKeyPathComponent:`](#interface_m_p_j_s_o_n_model_error_1a4e94fbcdd3522e3fccbde9abf6553046)`(NSString * component)` {#interface_m_p_j_s_o_n_model_error_1a4e94fbcdd3522e3fccbde9abf6553046}

Creates a new [MPJSONModelError](#interface_m_p_j_s_o_n_model_error) with the same values plus information about the key-path of the error. Properties in the new error object are the same as those from the receiver, except that a new key kMPJSONModelKeyPath is added to the userInfo dictionary. This key contains the component string parameter. If the key is already present then the new error object has the component string prepended to the existing value.

## class `MPJSONValueTransformer` {#interface_m_p_j_s_o_n_value_transformer}

```
class MPJSONValueTransformer
  : public NSObject
```  

**You don't need to call methods of this class manually.**

Class providing methods to transform values from one class to another. You are given a number of built-in transformers, but you are encouraged to extend this class with your own categories to add further value transformers. Just few examples of what can you add to [MPJSONValueTransformer](#interface_m_p_j_s_o_n_value_transformer): hex colors in JSON to UIColor, hex numbers in JSON to NSNumber model properties, base64 encoded strings in JSON to UIImage properties, and more.

The class is invoked by [MPJSONModel](#interface_m_p_j_s_o_n_model) while transforming incoming JSON types into your target class property classes, and vice versa. One static copy is create and store in the [MPJSONModel](#interface_m_p_j_s_o_n_model) class scope.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSDictionary * `[`primitivesNames`](#interface_m_p_j_s_o_n_value_transformer_1af4227c089b31f82aa9783850d7f11868) | 

### Members

##### `{property} NSDictionary * `[`primitivesNames`](#interface_m_p_j_s_o_n_value_transformer_1af4227c089b31f82aa9783850d7f11868) {#interface_m_p_j_s_o_n_value_transformer_1af4227c089b31f82aa9783850d7f11868}

## class `MPLatLng` {#interface_m_p_lat_lng}

```
class MPLatLng
  : public MPJSONModel
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} double `[`lat`](#interface_m_p_lat_lng_1a8b52339b0dfde555e60d7c67a2706d6b) | 
`{property} double `[`lng`](#interface_m_p_lat_lng_1ade39e50cf0c4b46757ce5067fca936e3) | 

### Members

##### `{property} double `[`lat`](#interface_m_p_lat_lng_1a8b52339b0dfde555e60d7c67a2706d6b) {#interface_m_p_lat_lng_1a8b52339b0dfde555e60d7c67a2706d6b}

##### `{property} double `[`lng`](#interface_m_p_lat_lng_1ade39e50cf0c4b46757ce5067fca936e3) {#interface_m_p_lat_lng_1ade39e50cf0c4b46757ce5067fca936e3}

## class `MPLatLngBounds` {#interface_m_p_lat_lng_bounds}

```
class MPLatLngBounds
  : public MPJSONModel
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} MPLatLng * `[`southWest`](#interface_m_p_lat_lng_bounds_1a081c0a353b339d46fd90cce1dddafbe1) | 
`{property} MPLatLng * `[`northEast`](#interface_m_p_lat_lng_bounds_1ab1888b4859293c02153787e7eb139b5e) | 

### Members

##### `{property} MPLatLng * `[`southWest`](#interface_m_p_lat_lng_bounds_1a081c0a353b339d46fd90cce1dddafbe1) {#interface_m_p_lat_lng_bounds_1a081c0a353b339d46fd90cce1dddafbe1}

##### `{property} MPLatLng * `[`northEast`](#interface_m_p_lat_lng_bounds_1ab1888b4859293c02153787e7eb139b5e) {#interface_m_p_lat_lng_bounds_1ab1888b4859293c02153787e7eb139b5e}

## class `MPLayerType` {#interface_m_p_layer_type}

```
class MPLayerType
  : public NSObject
```  

Provides a static way to access the possible layer types for general purpose MapsPeople services

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

### Members

## class `MPLineGeometry` {#interface_m_p_line_geometry}

```
class MPLineGeometry
  : public MPGeometry
```  

Line geometry class

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSArray * `[`bbox`](#interface_m_p_line_geometry_1a0f1c5a0e34067740dc33724adc7b87b0) | 

### Members

##### `{property} NSArray * `[`bbox`](#interface_m_p_line_geometry_1a0f1c5a0e34067740dc33724adc7b87b0) {#interface_m_p_line_geometry_1a0f1c5a0e34067740dc33724adc7b87b0}

## class `MPLoadIndicator` {#interface_m_p_load_indicator}

```
class MPLoadIndicator
  : public NSObject
```  

A basic load indicator, with the option to set a text.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} UIActivityIndicatorView * `[`indicatorView`](#interface_m_p_load_indicator_1aac6fbf144687c20d4beb0c90e9f5c0c0) | The indicator view.
`{property} UIView * `[`parentView`](#interface_m_p_load_indicator_1ad09d75a482f5511246e667b5a19b0f12) | View holding the load indicator.
`{property} UITextView * `[`textView`](#interface_m_p_load_indicator_1ae064a65d2957a0a9c8a3decfafc202da) | The text view
`public virtual id `[`initOnView:`](#interface_m_p_load_indicator_1a7a68685216c30b9d49f5ee4df95806dd)`(UIView * view)` | Instantiates the indicator and places the indicator in a view. 
`public virtual id `[`initOnView:withText:`](#interface_m_p_load_indicator_1aca60d254224ec4e16a6123e66eb526f0)`(UIView * view,NSString * text)` | Instantiates the indicator and places the indicator in a view with a given text. 
`public virtual void `[`start`](#interface_m_p_load_indicator_1a848db3a8894437bc0116c678d5cc12ae)`()` | Start and show the indicator animation
`public virtual void `[`stop`](#interface_m_p_load_indicator_1ae1e3403db1765aa74e15bc570d299954)`()` | Stop and hide the indicator animation

### Members

##### `{property} UIActivityIndicatorView * `[`indicatorView`](#interface_m_p_load_indicator_1aac6fbf144687c20d4beb0c90e9f5c0c0) {#interface_m_p_load_indicator_1aac6fbf144687c20d4beb0c90e9f5c0c0}

The indicator view.

##### `{property} UIView * `[`parentView`](#interface_m_p_load_indicator_1ad09d75a482f5511246e667b5a19b0f12) {#interface_m_p_load_indicator_1ad09d75a482f5511246e667b5a19b0f12}

View holding the load indicator.

##### `{property} UITextView * `[`textView`](#interface_m_p_load_indicator_1ae064a65d2957a0a9c8a3decfafc202da) {#interface_m_p_load_indicator_1ae064a65d2957a0a9c8a3decfafc202da}

The text view

##### `public virtual id `[`initOnView:`](#interface_m_p_load_indicator_1a7a68685216c30b9d49f5ee4df95806dd)`(UIView * view)` {#interface_m_p_load_indicator_1a7a68685216c30b9d49f5ee4df95806dd}

Instantiates the indicator and places the indicator in a view. 
##### Parameters
* `view` The view to hold the indicator.

##### `public virtual id `[`initOnView:withText:`](#interface_m_p_load_indicator_1aca60d254224ec4e16a6123e66eb526f0)`(UIView * view,NSString * text)` {#interface_m_p_load_indicator_1aca60d254224ec4e16a6123e66eb526f0}

Instantiates the indicator and places the indicator in a view with a given text. 
##### Parameters
* `view` The view to hold the indicator. 

* `text` The text to display with the indicator.

##### `public virtual void `[`start`](#interface_m_p_load_indicator_1a848db3a8894437bc0116c678d5cc12ae)`()` {#interface_m_p_load_indicator_1a848db3a8894437bc0116c678d5cc12ae}

Start and show the indicator animation

##### `public virtual void `[`stop`](#interface_m_p_load_indicator_1ae1e3403db1765aa74e15bc570d299954)`()` {#interface_m_p_load_indicator_1ae1e3403db1765aa74e15bc570d299954}

Stop and hide the indicator animation

## class `MPLocation` {#interface_m_p_location}

```
class MPLocation
  : public MPJSONModel
```  

This class holds the data for a single location and a marker to display the data on a map.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSString * `[`locationId`](#interface_m_p_location_1a1486fc0bd7f1251bae6f40cd311c0ea8) | Location ID string.
`{property} NSString * `[`type`](#interface_m_p_location_1a07a4d47167b3ebe8edfed863208a039f) | 
`{property} NSNumber< Optional > * `[`activeFrom`](#interface_m_p_location_1a09edfb11e11b1e49e6f96c39976a28d2) | 
`{property} NSNumber< Optional > * `[`activeTo`](#interface_m_p_location_1a22f92cfb607e9c23bc7230d3c30d6279) | 
`{property} NSString< Optional > * `[`venue`](#interface_m_p_location_1a7cd9696b8a9eddb200b78dada5d9e40e) | 
`{property} NSString< Optional > * `[`building`](#interface_m_p_location_1a9245da70a9128aa97ecf294752d3e051) | 
`{property} NSString< Optional > * `[`roomId`](#interface_m_p_location_1a0047af67d3441e5416343311c857e4ff) | 
`{property} NSString< Optional > * `[`descr`](#interface_m_p_location_1a4218a24c7f6ba094cf64455aefcff237) | 
`{property} NSDictionary< MPLocationField, Optional > * `[`fields`](#interface_m_p_location_1aa498cb890c2256de06e4cd392cdb0ff1) | 
`{property} NSArray< NSString * >< Optional > * `[`aliases`](#interface_m_p_location_1a639a52233266ef397d497d786535e3d1) | 
`{property} NSString< Optional > * `[`name`](#interface_m_p_location_1aa37e8c5a298792238d9b7d1b985375a6) | Location name.
`{property} NSNumber * `[`floor`](#interface_m_p_location_1a83aed601237723340539ff76610b3b68) | If the location resides on a specific floor level, this string property is set.
`{property} NSMutableDictionary< Optional > * `[`categories`](#interface_m_p_location_1aba7a82dc879d92b2067741fa28bb6723) | The categories for this location, as an array of strings.
`{property} NSMutableDictionary * `[`properties`](#interface_m_p_location_1a740623ead5e934170dea0765804c410f) | Dictionary of location properties. The keys 'image' and 'description' will always be present, and possibly others, such as 'address', 'contact', 'openinghours' and '_tags' or your own data structure.
`{property} `[`MPPoint`](#interface_m_p_point)` * `[`geometry`](#interface_m_p_location_1a79a9cc4f1a3bab247e6fa344143cd4ac) | The data type (equals "Feature"). 
`{property} GMSMarker< Optional > * `[`marker`](#interface_m_p_location_1a1e2a536ac8ee737e3efd33672bf3c723) | Marker property used to display on map.
`{property} UIImage< Optional > * `[`image`](#interface_m_p_location_1aeca27260b477da7af519f3b752c5411f) | Location image.
`{property} `[`MPLocationDisplayRule`](#interface_m_p_location_display_rule)`< Optional > * `[`displayRule`](#interface_m_p_location_1a0619c2294a585a79277c98fcd10155b6) | Location display rule.
`public virtual id `[`initWithPoint:andName:`](#interface_m_p_location_1aba8ca31ea077fa3032fa7af31d390450)`(`[`MPPoint`](#interface_m_p_point)` * point,NSString * name)` | Location constructor. 
`public virtual id `[`initWithLocation:`](#interface_m_p_location_1a26176bf7808bff044cefb90486723e4f)`(`[`MPLocation`](#interface_m_p_location)` * location)` | 
`public virtual void `[`addToMap:`](#interface_m_p_location_1ac7c0b5db1604a60355bc1878950ab1d9)`(GMSMapView * map)` | Add the location to a map 
`public virtual void `[`addToMap:WithRules:`](#interface_m_p_location_1a1943f30dffd865df18760cd6b2014ff5)`(GMSMapView * map,`[`MPLocationDisplayRuleset`](#interface_m_p_location_display_ruleset)` * displayRuleset)` | Add the location to a map with given display rules. 
`public virtual void `[`addToMap:floor:WithRules:`](#interface_m_p_location_1a403629fde5f4312b94b0830ed6f29e93)`(GMSMapView * map,int floor,`[`MPLocationDisplayRuleset`](#interface_m_p_location_display_ruleset)` * displayRuleset)` | Add the location to a map with given display rules. 
`public virtual void `[`updateView:floor:displayRules:`](#interface_m_p_location_1a9c589b40b8b1bc445974b843feb14e1a)`(GMSMapView * map,int floor,`[`MPLocationDisplayRuleset`](#interface_m_p_location_display_ruleset)` * displayRuleset)` | Update the location on a map with given display rules. 
`public virtual UIImage * `[`drawLabel:`](#interface_m_p_location_1a553902a10dfe3f56b09458a48eaa0157)`(NSString * text)` | Create a label image with a given text. 
`public virtual void `[`removeFromMap`](#interface_m_p_location_1a605880b1072359274e810784151a9252)`()` | 
`public virtual void `[`setImage`](#interface_m_p_location_1a1d707aaac16b8b349c37dc2d9cbcc1e7)`()` | Set the location image based on information in:
`public virtual `[`MPPoint`](#interface_m_p_point)` * `[`getPoint`](#interface_m_p_location_1a8db0fd67165b0a8925b021d891ac347d)`()` | Get the point holding coordinates for the location object
`public virtual `[`MPLocationProperty`](#interface_m_p_location_property)` * `[`getProperty:`](#interface_m_p_location_1a840eb75f328b9bced989bc248afcae0b)`(NSString * propertyType)` | Get location property of the given type identifier
`public virtual void `[`showTemporary:`](#interface_m_p_location_1a1ae07c9e0890c39a2c291c5ad22d8acc)`(GMSMapView * map)` | 
`public virtual void `[`hideTemporary`](#interface_m_p_location_1afb7e162bf05364e9e297a6cc9616e4ce)`()` | 
`public virtual void `[`showDynamically`](#interface_m_p_location_1abe56149ca48d73d6a4828a31bc2b7924)`()` | 

### Members

##### `{property} NSString * `[`locationId`](#interface_m_p_location_1a1486fc0bd7f1251bae6f40cd311c0ea8) {#interface_m_p_location_1a1486fc0bd7f1251bae6f40cd311c0ea8}

Location ID string.

##### `{property} NSString * `[`type`](#interface_m_p_location_1a07a4d47167b3ebe8edfed863208a039f) {#interface_m_p_location_1a07a4d47167b3ebe8edfed863208a039f}

##### `{property} NSNumber< Optional > * `[`activeFrom`](#interface_m_p_location_1a09edfb11e11b1e49e6f96c39976a28d2) {#interface_m_p_location_1a09edfb11e11b1e49e6f96c39976a28d2}

##### `{property} NSNumber< Optional > * `[`activeTo`](#interface_m_p_location_1a22f92cfb607e9c23bc7230d3c30d6279) {#interface_m_p_location_1a22f92cfb607e9c23bc7230d3c30d6279}

##### `{property} NSString< Optional > * `[`venue`](#interface_m_p_location_1a7cd9696b8a9eddb200b78dada5d9e40e) {#interface_m_p_location_1a7cd9696b8a9eddb200b78dada5d9e40e}

##### `{property} NSString< Optional > * `[`building`](#interface_m_p_location_1a9245da70a9128aa97ecf294752d3e051) {#interface_m_p_location_1a9245da70a9128aa97ecf294752d3e051}

##### `{property} NSString< Optional > * `[`roomId`](#interface_m_p_location_1a0047af67d3441e5416343311c857e4ff) {#interface_m_p_location_1a0047af67d3441e5416343311c857e4ff}

##### `{property} NSString< Optional > * `[`descr`](#interface_m_p_location_1a4218a24c7f6ba094cf64455aefcff237) {#interface_m_p_location_1a4218a24c7f6ba094cf64455aefcff237}

##### `{property} NSDictionary< MPLocationField, Optional > * `[`fields`](#interface_m_p_location_1aa498cb890c2256de06e4cd392cdb0ff1) {#interface_m_p_location_1aa498cb890c2256de06e4cd392cdb0ff1}

##### `{property} NSArray< NSString * >< Optional > * `[`aliases`](#interface_m_p_location_1a639a52233266ef397d497d786535e3d1) {#interface_m_p_location_1a639a52233266ef397d497d786535e3d1}

##### `{property} NSString< Optional > * `[`name`](#interface_m_p_location_1aa37e8c5a298792238d9b7d1b985375a6) {#interface_m_p_location_1aa37e8c5a298792238d9b7d1b985375a6}

Location name.

##### `{property} NSNumber * `[`floor`](#interface_m_p_location_1a83aed601237723340539ff76610b3b68) {#interface_m_p_location_1a83aed601237723340539ff76610b3b68}

If the location resides on a specific floor level, this string property is set.

##### `{property} NSMutableDictionary< Optional > * `[`categories`](#interface_m_p_location_1aba7a82dc879d92b2067741fa28bb6723) {#interface_m_p_location_1aba7a82dc879d92b2067741fa28bb6723}

The categories for this location, as an array of strings.

##### `{property} NSMutableDictionary * `[`properties`](#interface_m_p_location_1a740623ead5e934170dea0765804c410f) {#interface_m_p_location_1a740623ead5e934170dea0765804c410f}

Dictionary of location properties. The keys 'image' and 'description' will always be present, and possibly others, such as 'address', 'contact', 'openinghours' and '_tags' or your own data structure.

##### `{property} `[`MPPoint`](#interface_m_p_point)` * `[`geometry`](#interface_m_p_location_1a79a9cc4f1a3bab247e6fa344143cd4ac) {#interface_m_p_location_1a79a9cc4f1a3bab247e6fa344143cd4ac}

The data type (equals "Feature"). 
Geometry as a Lat/Long point.

##### `{property} GMSMarker< Optional > * `[`marker`](#interface_m_p_location_1a1e2a536ac8ee737e3efd33672bf3c723) {#interface_m_p_location_1a1e2a536ac8ee737e3efd33672bf3c723}

Marker property used to display on map.

##### `{property} UIImage< Optional > * `[`image`](#interface_m_p_location_1aeca27260b477da7af519f3b752c5411f) {#interface_m_p_location_1aeca27260b477da7af519f3b752c5411f}

Location image.

##### `{property} `[`MPLocationDisplayRule`](#interface_m_p_location_display_rule)`< Optional > * `[`displayRule`](#interface_m_p_location_1a0619c2294a585a79277c98fcd10155b6) {#interface_m_p_location_1a0619c2294a585a79277c98fcd10155b6}

Location display rule.

##### `public virtual id `[`initWithPoint:andName:`](#interface_m_p_location_1aba8ca31ea077fa3032fa7af31d390450)`(`[`MPPoint`](#interface_m_p_point)` * point,NSString * name)` {#interface_m_p_location_1aba8ca31ea077fa3032fa7af31d390450}

Location constructor. 
##### Parameters
* `point` The geographic point. 

* `name` The name of the location.

##### `public virtual id `[`initWithLocation:`](#interface_m_p_location_1a26176bf7808bff044cefb90486723e4f)`(`[`MPLocation`](#interface_m_p_location)` * location)` {#interface_m_p_location_1a26176bf7808bff044cefb90486723e4f}

##### `public virtual void `[`addToMap:`](#interface_m_p_location_1ac7c0b5db1604a60355bc1878950ab1d9)`(GMSMapView * map)` {#interface_m_p_location_1ac7c0b5db1604a60355bc1878950ab1d9}

Add the location to a map 
##### Parameters
* `map` The map that will hold the marker.

##### `public virtual void `[`addToMap:WithRules:`](#interface_m_p_location_1a1943f30dffd865df18760cd6b2014ff5)`(GMSMapView * map,`[`MPLocationDisplayRuleset`](#interface_m_p_location_display_ruleset)` * displayRuleset)` {#interface_m_p_location_1a1943f30dffd865df18760cd6b2014ff5}

Add the location to a map with given display rules. 
##### Parameters
* `map` The map that will hold the marker. 

* `displayRuleset` The display ruleset that defines the display of the marker. 

**See also**: [MPLocationDisplayRuleset](#interface_m_p_location_display_ruleset)

##### `public virtual void `[`addToMap:floor:WithRules:`](#interface_m_p_location_1a403629fde5f4312b94b0830ed6f29e93)`(GMSMapView * map,int floor,`[`MPLocationDisplayRuleset`](#interface_m_p_location_display_ruleset)` * displayRuleset)` {#interface_m_p_location_1a403629fde5f4312b94b0830ed6f29e93}

Add the location to a map with given display rules. 
##### Parameters
* `map` The map that will hold the marker. 

* `floor` Floor level. 

* `displayRuleset` The display ruleset that defines the display of the marker. 

**See also**: [MPLocationDisplayRuleset](#interface_m_p_location_display_ruleset)

##### `public virtual void `[`updateView:floor:displayRules:`](#interface_m_p_location_1a9c589b40b8b1bc445974b843feb14e1a)`(GMSMapView * map,int floor,`[`MPLocationDisplayRuleset`](#interface_m_p_location_display_ruleset)` * displayRuleset)` {#interface_m_p_location_1a9c589b40b8b1bc445974b843feb14e1a}

Update the location on a map with given display rules. 
##### Parameters
* `map` The map that triggered the update. 

* `displayRuleset` The display ruleset that defines the display of the marker. 

* `floor` Floor level. 

**See also**: [MPLocationDisplayRuleset](#interface_m_p_location_display_ruleset)

##### `public virtual UIImage * `[`drawLabel:`](#interface_m_p_location_1a553902a10dfe3f56b09458a48eaa0157)`(NSString * text)` {#interface_m_p_location_1a553902a10dfe3f56b09458a48eaa0157}

Create a label image with a given text. 
##### Parameters
* `text` The text to label with.

##### `public virtual void `[`removeFromMap`](#interface_m_p_location_1a605880b1072359274e810784151a9252)`()` {#interface_m_p_location_1a605880b1072359274e810784151a9252}

##### `public virtual void `[`setImage`](#interface_m_p_location_1a1d707aaac16b8b349c37dc2d9cbcc1e7)`()` {#interface_m_p_location_1a1d707aaac16b8b349c37dc2d9cbcc1e7}

Set the location image based on information in:

[self.properties objectForKey:"image"];

##### `public virtual `[`MPPoint`](#interface_m_p_point)` * `[`getPoint`](#interface_m_p_location_1a8db0fd67165b0a8925b021d891ac347d)`()` {#interface_m_p_location_1a8db0fd67165b0a8925b021d891ac347d}

Get the point holding coordinates for the location object

##### `public virtual `[`MPLocationProperty`](#interface_m_p_location_property)` * `[`getProperty:`](#interface_m_p_location_1a840eb75f328b9bced989bc248afcae0b)`(NSString * propertyType)` {#interface_m_p_location_1a840eb75f328b9bced989bc248afcae0b}

Get location property of the given type identifier

##### `public virtual void `[`showTemporary:`](#interface_m_p_location_1a1ae07c9e0890c39a2c291c5ad22d8acc)`(GMSMapView * map)` {#interface_m_p_location_1a1ae07c9e0890c39a2c291c5ad22d8acc}

##### `public virtual void `[`hideTemporary`](#interface_m_p_location_1afb7e162bf05364e9e297a6cc9616e4ce)`()` {#interface_m_p_location_1afb7e162bf05364e9e297a6cc9616e4ce}

##### `public virtual void `[`showDynamically`](#interface_m_p_location_1abe56149ca48d73d6a4828a31bc2b7924)`()` {#interface_m_p_location_1abe56149ca48d73d6a4828a31bc2b7924}

## class `MPLocationDataset` {#interface_m_p_location_dataset}

```
class MPLocationDataset
  : public MPJSONModel
```  

Dataset that holds locations, searched results and a filter.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSArray< `[`MPLocation](#interface_m_p_location) * >< [MPLocation`](#interface_m_p_location)` > * `[`list`](#interface_m_p_location_dataset_1a87649bb7cabfb56ada0eab6c8e68a83f) | Main location array in the data set.
`{property} NSArray< Optional > *searchResult `[`DEPRECATED_ATTRIBUTE`](#interface_m_p_location_dataset_1aa6d59a55f50ae98c47cda431ba049712) | Array to hold filtered results in the data set.
`{property} NSArray< Optional > *categories `[`DEPRECATED_ATTRIBUTE`](#interface_m_p_location_dataset_1a824a8020edea6a1f31d40e9a8b5516da) | String used as text filter.
`public virtual NSArray * `[`filterByName:`](#interface_m_p_location_dataset_1a19d456337d01cf096087a2161993e533)`(NSString * DEPRECATED_ATTRIBUTE)` | 
`public virtual NSArray * `[`filterByName:andCategories:`](#interface_m_p_location_dataset_1a98e3f587b1156815defeb07e24bda3e9)`(NSString * name,NSArray * DEPRECATED_ATTRIBUTE)` | 

### Members

##### `{property} NSArray< `[`MPLocation](#interface_m_p_location) * >< [MPLocation`](#interface_m_p_location)` > * `[`list`](#interface_m_p_location_dataset_1a87649bb7cabfb56ada0eab6c8e68a83f) {#interface_m_p_location_dataset_1a87649bb7cabfb56ada0eab6c8e68a83f}

Main location array in the data set.

##### `{property} NSArray< Optional > *searchResult `[`DEPRECATED_ATTRIBUTE`](#interface_m_p_location_dataset_1aa6d59a55f50ae98c47cda431ba049712) {#interface_m_p_location_dataset_1aa6d59a55f50ae98c47cda431ba049712}

Array to hold filtered results in the data set.

##### `{property} NSArray< Optional > *categories `[`DEPRECATED_ATTRIBUTE`](#interface_m_p_location_dataset_1a824a8020edea6a1f31d40e9a8b5516da) {#interface_m_p_location_dataset_1a824a8020edea6a1f31d40e9a8b5516da}

String used as text filter.

##### `public virtual NSArray * `[`filterByName:`](#interface_m_p_location_dataset_1a19d456337d01cf096087a2161993e533)`(NSString * DEPRECATED_ATTRIBUTE)` {#interface_m_p_location_dataset_1a19d456337d01cf096087a2161993e533}

##### `public virtual NSArray * `[`filterByName:andCategories:`](#interface_m_p_location_dataset_1a98e3f587b1156815defeb07e24bda3e9)`(NSString * name,NSArray * DEPRECATED_ATTRIBUTE)` {#interface_m_p_location_dataset_1a98e3f587b1156815defeb07e24bda3e9}

## class `MPLocationDisplayRule` {#interface_m_p_location_display_rule}

```
class MPLocationDisplayRule
  : public MPJSONModel
```  

This class serves as a display rule for locations.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSString< Ignore > * `[`name`](#interface_m_p_location_display_rule_1a82cfd6b1a7607cabafbcb9febb3e9aa2) | Name/identifier of the rule. Also used as the rule condition for the location types.
`{property} NSNumber * `[`zOn`](#interface_m_p_location_display_rule_1acfd77f19411fc19ecd47b6c88aa1fabb) | The map zoom level above which the location marker should be visible.
`{property} NSNumber * `[`zOff`](#interface_m_p_location_display_rule_1af6281dd37e8142cd858da005d42468d7) | The map zoom level beneath which the location marker should be visible.
`{property} NSString * `[`iconPath`](#interface_m_p_location_display_rule_1a250b50eff4fe27fbfd3098e7580368b7) | Relative path of the marker icon to use, without extension. Format is png.
`{property} NSString * `[`label`](#interface_m_p_location_display_rule_1a5f45cf7be0ce255292f18f5e0de9ee0d) | Label template for the resulting location marker - e.g. "{{name}}", "{{roomId}}", "Room #{{roomId}}" etc..
`{property} UIColor< Optional > * `[`highlightOutlineColor`](#interface_m_p_location_display_rule_1a0ca7a9641ca8fd62deb035f447d2f3bd) | The highlight outline color.
`{property} UIImage< Ignore > * `[`icon`](#interface_m_p_location_display_rule_1a0c471a5863d20dab21cea7265e9c4ec0) | The marker icon to use on markers that apply to the display rule.
`{property} BOOL `[`showLabel`](#interface_m_p_location_display_rule_1a8368e5386c8da0d7b2d9e62660a02c86) | Whether or not to show a text label. See label property
`{property} BOOL `[`showOutline`](#interface_m_p_location_display_rule_1a0749340593c09d92ba43e3eb7dd94c6c) | Whether or not to show an outline.
`{property} BOOL `[`visible`](#interface_m_p_location_display_rule_1a1b3750837ffc6b79eb9e650eaa290e6c) | Whether or not to show the icon.
`{property} CGSize `[`iconSize`](#interface_m_p_location_display_rule_1a1ea2f3a3aaf3c0b0772e750058bc7e08) | Size of the icon image
`public virtual BOOL `[`show:`](#interface_m_p_location_display_rule_1a521f75164e7fbd9018d82ea345619906)`(CGFloat zLevel)` | Processes the rule conditions at the given map zoom level. 
`public virtual NSString * `[`getLabelContent:`](#interface_m_p_location_display_rule_1a1466767460c730ec1c94a100cc2bf5ba)`(`[`MPLocation`](#interface_m_p_location)` * location)` | Get the label from the display rule, based on the location input. 
`public virtual void `[`fetchIcon:`](#interface_m_p_location_display_rule_1ad74673f3d4cee22cf7fbf1d1d7cbe04a)`(NSString * basePathOrBundle)` | Retrieve the icon from the ressources and store in memory.
`public virtual id `[`initWithName:AndZoomLevelOn:AndShowLabel:`](#interface_m_p_location_display_rule_1ad9513965be913e42e817d1c924863e21)`(NSString * name,CGFloat zOn,BOOL doShowLabel)` | Instantiate a display rule with parameters. 
`public virtual id `[`initWithName:AndIcon:AndZoomLevelOn:`](#interface_m_p_location_display_rule_1a0f235cbdb46a0720bfefd8fbfad8f7af)`(NSString * name,UIImage * icon,CGFloat zOn)` | Instantiate a display rule with parameters. 
`public virtual id `[`initWithName:AndIcon:AndZoomLevelOn:AndShowLabel:`](#interface_m_p_location_display_rule_1ae2c7d940bf67278ba39b2d58ea042763)`(NSString * name,UIImage * icon,CGFloat zOn,BOOL doShowLabel)` | Instantiate a display rule with parameters. 
`public virtual id `[`initWithName:AndIconURL:AndZoomLevelOn:AndShowLabel:`](#interface_m_p_location_display_rule_1a555f3083a36cc046d0f8d9cffb68d5e6)`(NSString * name,NSString * iconURL,CGFloat zOn,BOOL doShowLabel)` | Defered instantiate a display rule with parameters. 

### Members

##### `{property} NSString< Ignore > * `[`name`](#interface_m_p_location_display_rule_1a82cfd6b1a7607cabafbcb9febb3e9aa2) {#interface_m_p_location_display_rule_1a82cfd6b1a7607cabafbcb9febb3e9aa2}

Name/identifier of the rule. Also used as the rule condition for the location types.

##### `{property} NSNumber * `[`zOn`](#interface_m_p_location_display_rule_1acfd77f19411fc19ecd47b6c88aa1fabb) {#interface_m_p_location_display_rule_1acfd77f19411fc19ecd47b6c88aa1fabb}

The map zoom level above which the location marker should be visible.

##### `{property} NSNumber * `[`zOff`](#interface_m_p_location_display_rule_1af6281dd37e8142cd858da005d42468d7) {#interface_m_p_location_display_rule_1af6281dd37e8142cd858da005d42468d7}

The map zoom level beneath which the location marker should be visible.

##### `{property} NSString * `[`iconPath`](#interface_m_p_location_display_rule_1a250b50eff4fe27fbfd3098e7580368b7) {#interface_m_p_location_display_rule_1a250b50eff4fe27fbfd3098e7580368b7}

Relative path of the marker icon to use, without extension. Format is png.

##### `{property} NSString * `[`label`](#interface_m_p_location_display_rule_1a5f45cf7be0ce255292f18f5e0de9ee0d) {#interface_m_p_location_display_rule_1a5f45cf7be0ce255292f18f5e0de9ee0d}

Label template for the resulting location marker - e.g. "{{name}}", "{{roomId}}", "Room #{{roomId}}" etc..

##### `{property} UIColor< Optional > * `[`highlightOutlineColor`](#interface_m_p_location_display_rule_1a0ca7a9641ca8fd62deb035f447d2f3bd) {#interface_m_p_location_display_rule_1a0ca7a9641ca8fd62deb035f447d2f3bd}

The highlight outline color.

##### `{property} UIImage< Ignore > * `[`icon`](#interface_m_p_location_display_rule_1a0c471a5863d20dab21cea7265e9c4ec0) {#interface_m_p_location_display_rule_1a0c471a5863d20dab21cea7265e9c4ec0}

The marker icon to use on markers that apply to the display rule.

##### `{property} BOOL `[`showLabel`](#interface_m_p_location_display_rule_1a8368e5386c8da0d7b2d9e62660a02c86) {#interface_m_p_location_display_rule_1a8368e5386c8da0d7b2d9e62660a02c86}

Whether or not to show a text label. See label property

##### `{property} BOOL `[`showOutline`](#interface_m_p_location_display_rule_1a0749340593c09d92ba43e3eb7dd94c6c) {#interface_m_p_location_display_rule_1a0749340593c09d92ba43e3eb7dd94c6c}

Whether or not to show an outline.

##### `{property} BOOL `[`visible`](#interface_m_p_location_display_rule_1a1b3750837ffc6b79eb9e650eaa290e6c) {#interface_m_p_location_display_rule_1a1b3750837ffc6b79eb9e650eaa290e6c}

Whether or not to show the icon.

##### `{property} CGSize `[`iconSize`](#interface_m_p_location_display_rule_1a1ea2f3a3aaf3c0b0772e750058bc7e08) {#interface_m_p_location_display_rule_1a1ea2f3a3aaf3c0b0772e750058bc7e08}

Size of the icon image

##### `public virtual BOOL `[`show:`](#interface_m_p_location_display_rule_1a521f75164e7fbd9018d82ea345619906)`(CGFloat zLevel)` {#interface_m_p_location_display_rule_1a521f75164e7fbd9018d82ea345619906}

Processes the rule conditions at the given map zoom level. 
##### Parameters
* `zLevel` The current map zoom level. 

##### Returns
Whether or not to show the location.

##### `public virtual NSString * `[`getLabelContent:`](#interface_m_p_location_display_rule_1a1466767460c730ec1c94a100cc2bf5ba)`(`[`MPLocation`](#interface_m_p_location)` * location)` {#interface_m_p_location_display_rule_1a1466767460c730ec1c94a100cc2bf5ba}

Get the label from the display rule, based on the location input. 
##### Returns
An string.

##### `public virtual void `[`fetchIcon:`](#interface_m_p_location_display_rule_1ad74673f3d4cee22cf7fbf1d1d7cbe04a)`(NSString * basePathOrBundle)` {#interface_m_p_location_display_rule_1ad74673f3d4cee22cf7fbf1d1d7cbe04a}

Retrieve the icon from the ressources and store in memory.

##### `public virtual id `[`initWithName:AndZoomLevelOn:AndShowLabel:`](#interface_m_p_location_display_rule_1ad9513965be913e42e817d1c924863e21)`(NSString * name,CGFloat zOn,BOOL doShowLabel)` {#interface_m_p_location_display_rule_1ad9513965be913e42e817d1c924863e21}

Instantiate a display rule with parameters. 
##### Parameters
* `name` The name and identifier of the rule. 

* `zOn` The map zoom level above which the location marker should display. 

* `doShowLabel` Whether or not to show a text label instead of the icon.

##### `public virtual id `[`initWithName:AndIcon:AndZoomLevelOn:`](#interface_m_p_location_display_rule_1a0f235cbdb46a0720bfefd8fbfad8f7af)`(NSString * name,UIImage * icon,CGFloat zOn)` {#interface_m_p_location_display_rule_1a0f235cbdb46a0720bfefd8fbfad8f7af}

Instantiate a display rule with parameters. 
##### Parameters
* `name` The name and identifier of the rule. 

* `icon` The icon used to display locations that qualify conditions of this rule. 

* `zOn` The map zoom level above which the location marker should display.

##### `public virtual id `[`initWithName:AndIcon:AndZoomLevelOn:AndShowLabel:`](#interface_m_p_location_display_rule_1ae2c7d940bf67278ba39b2d58ea042763)`(NSString * name,UIImage * icon,CGFloat zOn,BOOL doShowLabel)` {#interface_m_p_location_display_rule_1ae2c7d940bf67278ba39b2d58ea042763}

Instantiate a display rule with parameters. 
##### Parameters
* `name` The name and identifier of the rule. 

* `icon` The icon used to display locations that qualify conditions of this rule. 

* `zOn` The map zoom level above which the location marker should display. 

* `doShowLabel` Whether or not to show a text label instead of the icon.

##### `public virtual id `[`initWithName:AndIconURL:AndZoomLevelOn:AndShowLabel:`](#interface_m_p_location_display_rule_1a555f3083a36cc046d0f8d9cffb68d5e6)`(NSString * name,NSString * iconURL,CGFloat zOn,BOOL doShowLabel)` {#interface_m_p_location_display_rule_1a555f3083a36cc046d0f8d9cffb68d5e6}

Defered instantiate a display rule with parameters. 
##### Parameters
* `name` The name and identifier of the rule. 

* `iconURL` The icon URL used to display locations that qualify conditions of this rule. 

* `zOn` The map zoom level above which the location marker should display. 

* `doShowLabel` Whether or not to show a text label instead of the icon.

## class `MPLocationDisplayRuleset` {#interface_m_p_location_display_ruleset}

```
class MPLocationDisplayRuleset
  : public MPJSONModel
```  

This class holds a ruleset that defines how and when to show different location markers.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSString * `[`iconBaseUrl`](#interface_m_p_location_display_ruleset_1ad6d818462dff9b2fbea0a4ff73e3982a) | The base url to the bundle containing the icons for this ruleset. Set the value to your bundle identifier.
`{property} NSMutableArray * `[`displayRules`](#interface_m_p_location_display_ruleset_1a10bb9ab68d6f954e52217433efd53e22) | Array of display rules.
`public virtual `[`MPLocationDisplayRule`](#interface_m_p_location_display_rule)` * `[`getRule:`](#interface_m_p_location_display_ruleset_1a4882455dabd17bdb84ab392192c7faac)`(NSArray * ruleNames)` | Method for retrieving the first occurence of a rule based on a set of rule names.
`public virtual `[`MPLocationDisplayRule`](#interface_m_p_location_display_rule)` * `[`firstOccur:`](#interface_m_p_location_display_ruleset_1a0b1b6b8aa4055135c200e5e16076f4da)`(NSString * ruleName)` | Get the first occurence of a rule based on a rule name.
`public virtual NSArray * `[`getListOfNamesOnZoomLevel:`](#interface_m_p_location_display_ruleset_1a874aa3bc9d1d9697e789459ddb1d7f36)`(float zoom)` | 
`public virtual UIImage * `[`getIcon:`](#interface_m_p_location_display_ruleset_1af044e378bf5bb33268f62e473768a447)`(NSArray * ruleNames)` | Method for retrieving the first occurence of a rules icon based on a set of rule names.
`public virtual void `[`fetchIcons`](#interface_m_p_location_display_ruleset_1a02066dcd78ed6fb604ec03957e793d8a)`()` | Fetch all the ruleset icons and store them into memory.

### Members

##### `{property} NSString * `[`iconBaseUrl`](#interface_m_p_location_display_ruleset_1ad6d818462dff9b2fbea0a4ff73e3982a) {#interface_m_p_location_display_ruleset_1ad6d818462dff9b2fbea0a4ff73e3982a}

The base url to the bundle containing the icons for this ruleset. Set the value to your bundle identifier.

##### `{property} NSMutableArray * `[`displayRules`](#interface_m_p_location_display_ruleset_1a10bb9ab68d6f954e52217433efd53e22) {#interface_m_p_location_display_ruleset_1a10bb9ab68d6f954e52217433efd53e22}

Array of display rules.

##### `public virtual `[`MPLocationDisplayRule`](#interface_m_p_location_display_rule)` * `[`getRule:`](#interface_m_p_location_display_ruleset_1a4882455dabd17bdb84ab392192c7faac)`(NSArray * ruleNames)` {#interface_m_p_location_display_ruleset_1a4882455dabd17bdb84ab392192c7faac}

Method for retrieving the first occurence of a rule based on a set of rule names.

##### `public virtual `[`MPLocationDisplayRule`](#interface_m_p_location_display_rule)` * `[`firstOccur:`](#interface_m_p_location_display_ruleset_1a0b1b6b8aa4055135c200e5e16076f4da)`(NSString * ruleName)` {#interface_m_p_location_display_ruleset_1a0b1b6b8aa4055135c200e5e16076f4da}

Get the first occurence of a rule based on a rule name.

##### `public virtual NSArray * `[`getListOfNamesOnZoomLevel:`](#interface_m_p_location_display_ruleset_1a874aa3bc9d1d9697e789459ddb1d7f36)`(float zoom)` {#interface_m_p_location_display_ruleset_1a874aa3bc9d1d9697e789459ddb1d7f36}

##### `public virtual UIImage * `[`getIcon:`](#interface_m_p_location_display_ruleset_1af044e378bf5bb33268f62e473768a447)`(NSArray * ruleNames)` {#interface_m_p_location_display_ruleset_1af044e378bf5bb33268f62e473768a447}

Method for retrieving the first occurence of a rules icon based on a set of rule names.

##### `public virtual void `[`fetchIcons`](#interface_m_p_location_display_ruleset_1a02066dcd78ed6fb604ec03957e793d8a)`()` {#interface_m_p_location_display_ruleset_1a02066dcd78ed6fb604ec03957e793d8a}

Fetch all the ruleset icons and store them into memory.

## class `MPLocationField` {#interface_m_p_location_field}

```
class MPLocationField
  : public MPJSONModel
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSString * `[`type`](#interface_m_p_location_field_1abe9a4f961c1e90ff3266bcd2aabeb8e9) | 
`{property} NSString * `[`text`](#interface_m_p_location_field_1a59056ce2d9cd1995e604c36edfee98b4) | 
`{property} NSString< Optional > * `[`value`](#interface_m_p_location_field_1a55fa37f2c9441fecc8a150dea932a5e4) | 

### Members

##### `{property} NSString * `[`type`](#interface_m_p_location_field_1abe9a4f961c1e90ff3266bcd2aabeb8e9) {#interface_m_p_location_field_1abe9a4f961c1e90ff3266bcd2aabeb8e9}

##### `{property} NSString * `[`text`](#interface_m_p_location_field_1a59056ce2d9cd1995e604c36edfee98b4) {#interface_m_p_location_field_1a59056ce2d9cd1995e604c36edfee98b4}

##### `{property} NSString< Optional > * `[`value`](#interface_m_p_location_field_1a55fa37f2c9441fecc8a150dea932a5e4) {#interface_m_p_location_field_1a55fa37f2c9441fecc8a150dea932a5e4}

## class `MPLocationProperty` {#interface_m_p_location_property}

```
class MPLocationProperty
  : public NSObject
```  

Creates a location property, holding a type identifier and a value

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSString * `[`propertyType`](#interface_m_p_location_property_1a112d81e6eef5c5f79ee89a90104d7364) | 
`{property} NSObject * `[`propertyValue`](#interface_m_p_location_property_1a165c9dc2867c75d2b0b17c5d8b792836) | 
`public virtual id `[`initWithValue:andType:`](#interface_m_p_location_property_1a0bc6ee9f0f1b4e232a31a1488555e0c5)`(NSObject * value,NSString * type)` | Initialization that takes a type identifier and a value

### Members

##### `{property} NSString * `[`propertyType`](#interface_m_p_location_property_1a112d81e6eef5c5f79ee89a90104d7364) {#interface_m_p_location_property_1a112d81e6eef5c5f79ee89a90104d7364}

##### `{property} NSObject * `[`propertyValue`](#interface_m_p_location_property_1a165c9dc2867c75d2b0b17c5d8b792836) {#interface_m_p_location_property_1a165c9dc2867c75d2b0b17c5d8b792836}

##### `public virtual id `[`initWithValue:andType:`](#interface_m_p_location_property_1a0bc6ee9f0f1b4e232a31a1488555e0c5)`(NSObject * value,NSString * type)` {#interface_m_p_location_property_1a0bc6ee9f0f1b4e232a31a1488555e0c5}

Initialization that takes a type identifier and a value

## class `MPLocationPropertyTableCell` {#interface_m_p_location_property_table_cell}

```
class MPLocationPropertyTableCell
  : public UITableViewCell
```  

Creates a special table cell view. Does nothing but presetting the cell style UITableViewCellStyleValue2 regardless of the input.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

### Members

## class `MPLocationPropertyView` {#interface_m_p_location_property_view}

```
class MPLocationPropertyView
  : public UIView
```  

Creates a view designed to contain an icon and some content (default is text) side by side.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} id< MPLocationPropertyViewDelegate > `[`delegate`](#interface_m_p_location_property_view_1adb7c2581b615b614951ce7563859d575) | Delegate object
`{property} UIView * `[`parentView`](#interface_m_p_location_property_view_1a50bb600e81b28c8048a838eb10437c62) | Parent view reference.
`{property} UIView * `[`containerView`](#interface_m_p_location_property_view_1ab6668ec7db2d9951a4754866b09e606c) | Container view, holding the icon and content view.
`{property} UIView * `[`iconView`](#interface_m_p_location_property_view_1a26144cbc29013e9ce60946b5e9e3c6e8) | The icon view, which normally will be placed to the left.
`{property} UIView * `[`contentView`](#interface_m_p_location_property_view_1a11d060965aa4a69856fc4211c79ef171) | The content view, which normally will be placed to the right.
`{property} `[`MPLocationProperty`](#interface_m_p_location_property)` * `[`locationProperty`](#interface_m_p_location_property_view_1a9ed778699e06a96fe3cbb29eb5784310) | The location property, that should be displayed in the view
`public virtual id `[`initWithProperty:andIcon:useFontIcon:`](#interface_m_p_location_property_view_1af792f37432811bc673fa6e30b0a0d2b7)`(`[`MPLocationProperty`](#interface_m_p_location_property)` * property,NSString * icon,BOOL useFont)` | Initialization with location property, icon and whether to interpret the icon value as a reference or a font icon value.
`public virtual void `[`addToView:`](#interface_m_p_location_property_view_1a2bb3fe53185215293d57f061db34a0d9)`(UIView * view)` | Add the view to it's parent, setting the width to its parents width.
`public virtual void `[`attachProperty:andIcon:`](#interface_m_p_location_property_view_1a7489f8b0e44352ce368ba0814c4a54ed)`(`[`MPLocationProperty`](#interface_m_p_location_property)` * property,NSString * icon)` | Attach a new location property to this view
`public virtual void `[`touchesBegan:withEvent:`](#interface_m_p_location_property_view_1a8d685d97337871b82740415ee30394ca)`(NSSet * touches,UIEvent * event)` | 
`public virtual void `[`touchesMoved:withEvent:`](#interface_m_p_location_property_view_1a097063cafde496d85aae2d858571a6dd)`(NSSet * touches,UIEvent * event)` | 
`public virtual void `[`touchesEnded:withEvent:`](#interface_m_p_location_property_view_1a7847670429a0e10fe78f3f00c9aafa07)`(NSSet * touches,UIEvent * event)` | 
`public virtual void `[`touchesCancelled:withEvent:`](#interface_m_p_location_property_view_1ad43cb20785426b197c0f498013674347)`(NSSet * touches,UIEvent * event)` | 

### Members

##### `{property} id< MPLocationPropertyViewDelegate > `[`delegate`](#interface_m_p_location_property_view_1adb7c2581b615b614951ce7563859d575) {#interface_m_p_location_property_view_1adb7c2581b615b614951ce7563859d575}

Delegate object

##### `{property} UIView * `[`parentView`](#interface_m_p_location_property_view_1a50bb600e81b28c8048a838eb10437c62) {#interface_m_p_location_property_view_1a50bb600e81b28c8048a838eb10437c62}

Parent view reference.

##### `{property} UIView * `[`containerView`](#interface_m_p_location_property_view_1ab6668ec7db2d9951a4754866b09e606c) {#interface_m_p_location_property_view_1ab6668ec7db2d9951a4754866b09e606c}

Container view, holding the icon and content view.

##### `{property} UIView * `[`iconView`](#interface_m_p_location_property_view_1a26144cbc29013e9ce60946b5e9e3c6e8) {#interface_m_p_location_property_view_1a26144cbc29013e9ce60946b5e9e3c6e8}

The icon view, which normally will be placed to the left.

##### `{property} UIView * `[`contentView`](#interface_m_p_location_property_view_1a11d060965aa4a69856fc4211c79ef171) {#interface_m_p_location_property_view_1a11d060965aa4a69856fc4211c79ef171}

The content view, which normally will be placed to the right.

##### `{property} `[`MPLocationProperty`](#interface_m_p_location_property)` * `[`locationProperty`](#interface_m_p_location_property_view_1a9ed778699e06a96fe3cbb29eb5784310) {#interface_m_p_location_property_view_1a9ed778699e06a96fe3cbb29eb5784310}

The location property, that should be displayed in the view

##### `public virtual id `[`initWithProperty:andIcon:useFontIcon:`](#interface_m_p_location_property_view_1af792f37432811bc673fa6e30b0a0d2b7)`(`[`MPLocationProperty`](#interface_m_p_location_property)` * property,NSString * icon,BOOL useFont)` {#interface_m_p_location_property_view_1af792f37432811bc673fa6e30b0a0d2b7}

Initialization with location property, icon and whether to interpret the icon value as a reference or a font icon value.

##### `public virtual void `[`addToView:`](#interface_m_p_location_property_view_1a2bb3fe53185215293d57f061db34a0d9)`(UIView * view)` {#interface_m_p_location_property_view_1a2bb3fe53185215293d57f061db34a0d9}

Add the view to it's parent, setting the width to its parents width.

##### `public virtual void `[`attachProperty:andIcon:`](#interface_m_p_location_property_view_1a7489f8b0e44352ce368ba0814c4a54ed)`(`[`MPLocationProperty`](#interface_m_p_location_property)` * property,NSString * icon)` {#interface_m_p_location_property_view_1a7489f8b0e44352ce368ba0814c4a54ed}

Attach a new location property to this view

##### `public virtual void `[`touchesBegan:withEvent:`](#interface_m_p_location_property_view_1a8d685d97337871b82740415ee30394ca)`(NSSet * touches,UIEvent * event)` {#interface_m_p_location_property_view_1a8d685d97337871b82740415ee30394ca}

##### `public virtual void `[`touchesMoved:withEvent:`](#interface_m_p_location_property_view_1a097063cafde496d85aae2d858571a6dd)`(NSSet * touches,UIEvent * event)` {#interface_m_p_location_property_view_1a097063cafde496d85aae2d858571a6dd}

##### `public virtual void `[`touchesEnded:withEvent:`](#interface_m_p_location_property_view_1a7847670429a0e10fe78f3f00c9aafa07)`(NSSet * touches,UIEvent * event)` {#interface_m_p_location_property_view_1a7847670429a0e10fe78f3f00c9aafa07}

##### `public virtual void `[`touchesCancelled:withEvent:`](#interface_m_p_location_property_view_1ad43cb20785426b197c0f498013674347)`(NSSet * touches,UIEvent * event)` {#interface_m_p_location_property_view_1ad43cb20785426b197c0f498013674347}

## class `MPLocationQuery` {#interface_m_p_location_query}

```
class MPLocationQuery
  : public NSObject
```  

Locations query object used in conjunction with the [MPLocationsProvider](#interface_m_p_locations_provider)

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSString * `[`query`](#interface_m_p_location_query_1a5075c1a4cf312582b828b902534cd51e) | Free text search string
`{property} NSString * `[`venue`](#interface_m_p_location_query_1afb0596526ac4f7a7e6eea49651cef707) | Venue filter. Supports the venue key provided in [MPVenue.venueKey](#interface_m_p_venue_1a05a17a66fc775f961033e79359adad46) and MPLocation.venue
`{property} NSString * `[`building`](#interface_m_p_location_query_1abdf60bbff6226420297b42e30ef149b9) | Building filter. Supports the building key provided in MPLocation.building
`{property} NSString * `[`orderBy`](#interface_m_p_location_query_1a01096cc5d462cc6e4831a0d3543e23a8) | Order by "relevance", "name", "roomId", "venue", "building", "floor". Default is "relevance".
`{property} NSString * `[`sortOrder`](#interface_m_p_location_query_1a01e11e89b289bc8422107dcc61e00637) | Apply a sort order. Can either be "asc" or "desc". Default is "asc"
`{property} `[`MPPoint`](#interface_m_p_point)` * `[`near`](#interface_m_p_location_query_1a5ec97c261400138c4f2435212696c7b6) | Set a reference position coordinate. Distances to this position will affect the relevance of the search results. Only applies when ordering by relevance (default sort order).
`{property} NSNumber * `[`radius`](#interface_m_p_location_query_1a99331273e24c05b9e77b104e37355864) | Sets a radius limit in meters. Only to be used in conjunction with near property. This will cap the search results to the locations which distance to the near-position is less than specified as radius
`{property} NSNumber * `[`zoomLevel`](#interface_m_p_location_query_1ae627b0fe0aac82ab085b3ba2b7509d00) | Sets the zoom level. Currently has no effect on the search results.
`{property} NSNumber * `[`floor`](#interface_m_p_location_query_1abe78f01be94dee8b8ea977f105341dfa) | Floor filter. Supports the floor index provided in [MPMapControl.currentFloor](#interface_m_p_map_control_1a466b8884c41adbba58b75fd40a99a10b) and [MPLocation.floor](#interface_m_p_location_1a83aed601237723340539ff76610b3b68)
`{property} MPMapExtend * `[`mapExtend`](#interface_m_p_location_query_1ac18a502319782d00549637eb8a74dfe4) | Adds a geographic filter as a bounding box, specified by north, east, south and west
`{property} NSArray< NSString * > * `[`categories`](#interface_m_p_location_query_1aa7ff54cf7d299cd43d6d56fadef1cc9d) | Category filter. Supports the category keys provided from the [MPCategoriesProvider](#interface_m_p_categories_provider). Does not support the localized names of the categories.
`{property} NSArray< NSString * > * `[`types`](#interface_m_p_location_query_1a2afd5b96b07dd6b7b28bde0f112f8752) | Types filter. Supports the type strings provided from the MPSolutionsProvider.
`{property} int `[`max`](#interface_m_p_location_query_1a9e35c71859ca0911fce387e333146dbd) | Limit the amount of results from the [MPLocationsProvider](#interface_m_p_locations_provider)
`{property} MPLocationQueryMode `[`queryMode`](#interface_m_p_location_query_1a1a6cb1869457ed91c5b2c5bafa2d2b85) | Location query mode. Defaults to MPLocationQueryModeNormal.
`{property} NSUInteger `[`queryGeneration`](#interface_m_p_location_query_1aeeec0562203bb0e731bbbf7dad1c0c3e) | Query Generation - if the query is reused for multiple searches this will hold the most recent query generation
`public NSString *solutionId `[`MP_DEPRECATED_MSG_ATTRIBUTE`](#interface_m_p_location_query_1ae374df7a2f3bc6f56fb99ace7c1c8003)`("solutionId is now called contentKey and can only be provided through ")` | Solution id. Mandatory field.
`public NSString *arg `[`MP_DEPRECATED_MSG_ATTRIBUTE`](#interface_m_p_location_query_1a989d83e537fddd4b2101dbbd3adcca81)`("arg is now called contentKey and can only be provided through ")` | Previously used for solution id. Now using solutionId as Solution Id

### Members

##### `{property} NSString * `[`query`](#interface_m_p_location_query_1a5075c1a4cf312582b828b902534cd51e) {#interface_m_p_location_query_1a5075c1a4cf312582b828b902534cd51e}

Free text search string

##### `{property} NSString * `[`venue`](#interface_m_p_location_query_1afb0596526ac4f7a7e6eea49651cef707) {#interface_m_p_location_query_1afb0596526ac4f7a7e6eea49651cef707}

Venue filter. Supports the venue key provided in [MPVenue.venueKey](#interface_m_p_venue_1a05a17a66fc775f961033e79359adad46) and MPLocation.venue

##### `{property} NSString * `[`building`](#interface_m_p_location_query_1abdf60bbff6226420297b42e30ef149b9) {#interface_m_p_location_query_1abdf60bbff6226420297b42e30ef149b9}

Building filter. Supports the building key provided in MPLocation.building

##### `{property} NSString * `[`orderBy`](#interface_m_p_location_query_1a01096cc5d462cc6e4831a0d3543e23a8) {#interface_m_p_location_query_1a01096cc5d462cc6e4831a0d3543e23a8}

Order by "relevance", "name", "roomId", "venue", "building", "floor". Default is "relevance".

##### `{property} NSString * `[`sortOrder`](#interface_m_p_location_query_1a01e11e89b289bc8422107dcc61e00637) {#interface_m_p_location_query_1a01e11e89b289bc8422107dcc61e00637}

Apply a sort order. Can either be "asc" or "desc". Default is "asc"

##### `{property} `[`MPPoint`](#interface_m_p_point)` * `[`near`](#interface_m_p_location_query_1a5ec97c261400138c4f2435212696c7b6) {#interface_m_p_location_query_1a5ec97c261400138c4f2435212696c7b6}

Set a reference position coordinate. Distances to this position will affect the relevance of the search results. Only applies when ordering by relevance (default sort order).

##### `{property} NSNumber * `[`radius`](#interface_m_p_location_query_1a99331273e24c05b9e77b104e37355864) {#interface_m_p_location_query_1a99331273e24c05b9e77b104e37355864}

Sets a radius limit in meters. Only to be used in conjunction with near property. This will cap the search results to the locations which distance to the near-position is less than specified as radius

##### `{property} NSNumber * `[`zoomLevel`](#interface_m_p_location_query_1ae627b0fe0aac82ab085b3ba2b7509d00) {#interface_m_p_location_query_1ae627b0fe0aac82ab085b3ba2b7509d00}

Sets the zoom level. Currently has no effect on the search results.

##### `{property} NSNumber * `[`floor`](#interface_m_p_location_query_1abe78f01be94dee8b8ea977f105341dfa) {#interface_m_p_location_query_1abe78f01be94dee8b8ea977f105341dfa}

Floor filter. Supports the floor index provided in [MPMapControl.currentFloor](#interface_m_p_map_control_1a466b8884c41adbba58b75fd40a99a10b) and [MPLocation.floor](#interface_m_p_location_1a83aed601237723340539ff76610b3b68)

##### `{property} MPMapExtend * `[`mapExtend`](#interface_m_p_location_query_1ac18a502319782d00549637eb8a74dfe4) {#interface_m_p_location_query_1ac18a502319782d00549637eb8a74dfe4}

Adds a geographic filter as a bounding box, specified by north, east, south and west

##### `{property} NSArray< NSString * > * `[`categories`](#interface_m_p_location_query_1aa7ff54cf7d299cd43d6d56fadef1cc9d) {#interface_m_p_location_query_1aa7ff54cf7d299cd43d6d56fadef1cc9d}

Category filter. Supports the category keys provided from the [MPCategoriesProvider](#interface_m_p_categories_provider). Does not support the localized names of the categories.

##### `{property} NSArray< NSString * > * `[`types`](#interface_m_p_location_query_1a2afd5b96b07dd6b7b28bde0f112f8752) {#interface_m_p_location_query_1a2afd5b96b07dd6b7b28bde0f112f8752}

Types filter. Supports the type strings provided from the MPSolutionsProvider.

##### `{property} int `[`max`](#interface_m_p_location_query_1a9e35c71859ca0911fce387e333146dbd) {#interface_m_p_location_query_1a9e35c71859ca0911fce387e333146dbd}

Limit the amount of results from the [MPLocationsProvider](#interface_m_p_locations_provider)

##### `{property} MPLocationQueryMode `[`queryMode`](#interface_m_p_location_query_1a1a6cb1869457ed91c5b2c5bafa2d2b85) {#interface_m_p_location_query_1a1a6cb1869457ed91c5b2c5bafa2d2b85}

Location query mode. Defaults to MPLocationQueryModeNormal.

The location query mode determines what happens when a [MPLocationQuery](#interface_m_p_location_query) is re-used, and executed multiple time.

MPLocationQueryModeNormal: Results will be delivered for all executions of the query.

MPLocationQueryModeAutocomplete: If a query is already executing it will be cancelled when a new query is started. This allows starting a query as th euser types, where only the result of the last query is relevant.

##### `{property} NSUInteger `[`queryGeneration`](#interface_m_p_location_query_1aeeec0562203bb0e731bbbf7dad1c0c3e) {#interface_m_p_location_query_1aeeec0562203bb0e731bbbf7dad1c0c3e}

Query Generation - if the query is reused for multiple searches this will hold the most recent query generation

##### `public NSString *solutionId `[`MP_DEPRECATED_MSG_ATTRIBUTE`](#interface_m_p_location_query_1ae374df7a2f3bc6f56fb99ace7c1c8003)`("solutionId is now called contentKey and can only be provided through ")` {#interface_m_p_location_query_1ae374df7a2f3bc6f56fb99ace7c1c8003}

Solution id. Mandatory field.

##### `public NSString *arg `[`MP_DEPRECATED_MSG_ATTRIBUTE`](#interface_m_p_location_query_1a989d83e537fddd4b2101dbbd3adcca81)`("arg is now called contentKey and can only be provided through ")` {#interface_m_p_location_query_1a989d83e537fddd4b2101dbbd3adcca81}

Previously used for solution id. Now using solutionId as Solution Id

## class `MPLocationsCache` {#interface_m_p_locations_cache}

```
class MPLocationsCache
  : public NSObject
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

### Members

## class `MPLocationsProvider` {#interface_m_p_locations_provider}

```
class MPLocationsProvider
  : public NSObject
  : public <MPLocationsProvider>
```  

Locations provider that defines a delegate and a method to initiate fetching of locations from the provider.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

### Members

## class `MPLocationView` {#interface_m_p_location_view}

```
class MPLocationView
  : public UIScrollView
```  

Creates a specialized scroll view, designed to hold a locations details

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} id< MPLocationViewDelegate > `[`mpdelegate`](#interface_m_p_location_view_1af4cc95aa397212e1664047c21a189f9b) | Delegate protocol specification, to keep track of the tapping on a locations details.
`{property} NSMutableArray * `[`locationPropertyViews`](#interface_m_p_location_view_1ac6fdcd3d5246c3815f3cfbb117394174) | The array of the locations properties views.
`{property} `[`MPLocation`](#interface_m_p_location)` * `[`location`](#interface_m_p_location_view_1aaf5967e194c64b7f29cf48b817aa60a0) | The location that will be displayed in the view as layouted properties.
`public virtual id `[`initWithLocation:`](#interface_m_p_location_view_1af0fa03d4737e93dc35e785f50d8da840)`(`[`MPLocation`](#interface_m_p_location)` * location)` | Initialization of the view using a location.
`public virtual void `[`addDetail:withType:andIcon:useFontIcon:`](#interface_m_p_location_view_1ad3d63c52e10e4171032a0290e4570cc6)`(NSString * value,NSString * type,NSString * icon,BOOL useFont)` | Add a simple text detail. This will add a location property view to this view.

### Members

##### `{property} id< MPLocationViewDelegate > `[`mpdelegate`](#interface_m_p_location_view_1af4cc95aa397212e1664047c21a189f9b) {#interface_m_p_location_view_1af4cc95aa397212e1664047c21a189f9b}

Delegate protocol specification, to keep track of the tapping on a locations details.

##### `{property} NSMutableArray * `[`locationPropertyViews`](#interface_m_p_location_view_1ac6fdcd3d5246c3815f3cfbb117394174) {#interface_m_p_location_view_1ac6fdcd3d5246c3815f3cfbb117394174}

The array of the locations properties views.

##### `{property} `[`MPLocation`](#interface_m_p_location)` * `[`location`](#interface_m_p_location_view_1aaf5967e194c64b7f29cf48b817aa60a0) {#interface_m_p_location_view_1aaf5967e194c64b7f29cf48b817aa60a0}

The location that will be displayed in the view as layouted properties.

##### `public virtual id `[`initWithLocation:`](#interface_m_p_location_view_1af0fa03d4737e93dc35e785f50d8da840)`(`[`MPLocation`](#interface_m_p_location)` * location)` {#interface_m_p_location_view_1af0fa03d4737e93dc35e785f50d8da840}

Initialization of the view using a location.

##### `public virtual void `[`addDetail:withType:andIcon:useFontIcon:`](#interface_m_p_location_view_1ad3d63c52e10e4171032a0290e4570cc6)`(NSString * value,NSString * type,NSString * icon,BOOL useFont)` {#interface_m_p_location_view_1ad3d63c52e10e4171032a0290e4570cc6}

Add a simple text detail. This will add a location property view to this view.

## class `MPMapButtonControl` {#interface_m_p_map_button_control}

```
class MPMapButtonControl
  : public UIButton
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

### Members

## class `MPMapControl` {#interface_m_p_map_control}

```
class MPMapControl
  : public NSObject
  : public <GMSMapViewDelegate>
  : public <MPFloorSelectorDelegate>
  : public <MPBuildingDelegate>
  : public <MPLocationsProviderDelegate>
  : public <MPVenueProviderDelegate>
  : public <MPPositionProviderDelegate>
```  

Convenience class for setting up a Google map with MapsIndoors venues, buildings, locations and other map content.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} id< MPMapControlDelegate > `[`delegate`](#interface_m_p_map_control_1a921068264cdd34847953f4913d0a23ee) | Delegate object containing data events
`{property} id< MPFloorSelectorProtocol > `[`customFloorSelector`](#interface_m_p_map_control_1a35047ef84fcbf5f0e98892def6ade60f) | Custom floor selector for the map to use. When provided, the MapControl will not create a floor selector control autonomously.
`{property} `[`MPFloorSelectorControl`](#interface_m_p_floor_selector_control)` * `[`floorSelector`](#interface_m_p_map_control_1a16c888611e16ae5198d293d6b5c223db) | Floor selector UI element.
`{property} BOOL `[`floorSelectorHidden`](#interface_m_p_map_control_1a037d86eca2af6aa4c1f66d3c9bbd0fe0) | Hide floor selector UI element. Only applies to default floor selector; if a custom floor selector is provided, the MapControl is not repsonsible for it's visibility.
`{property} MPPositionIndicator * `[`currentPosition`](#interface_m_p_map_control_1a16b8947f5b3249c2e41b927e73694673) | Current user location.
`{property} `[`MPLocation`](#interface_m_p_location)` * `[`selectedLocation`](#interface_m_p_map_control_1a92bf04f310fb49a0b2ccbc3e8c592f61) | Current single location selection.
`{property} NSArray< `[`MPLocation`](#interface_m_p_location)` * > * `[`searchResult`](#interface_m_p_map_control_1ae537d5595f805f9a81ac127f1af2ca7e) | Current location search result.
`{property} NSNumber * `[`currentFloor`](#interface_m_p_map_control_1a466b8884c41adbba58b75fd40a99a10b) | The current floor.
`{property} BOOL `[`mapLocationsHidden`](#interface_m_p_map_control_1a86a76bdde4c56067a3401e655dde01f4) | Whether or not to hide all map locations. Default is NO
`{property} NSString * `[`venue`](#interface_m_p_map_control_1a49d81ecdce6b8528f25f040720530f9a) | The venue name, at which the map should target its view.
`{property} BOOL `[`mapContentReady`](#interface_m_p_map_control_1ae727d1eb057c9789a9dedcc328486d9a) | Indicates whether or not basic data for the map has been loaded. This does *not* indicate whether maptiles have been loaded and displayed.
`public NSString *language `[`MP_DEPRECATED_MSG_ATTRIBUTE`](#interface_m_p_map_control_1a23791a2b0c5110e609e8d145a79a4252)`("Use / instead")` | Current language.
`public virtual id `[`initWithMap:`](#interface_m_p_map_control_1a902543e20cc53209c663081b9d0563d7)`(GMSMapView * map)` | Initialize a [MPMapControl](#interface_m_p_map_control) object with given map. 
`public virtual void `[`setupMapWith:venues:routing:`](#interface_m_p_map_control_1a4237157f96720923947efabf4fc39ffe)`(`[`MPLocationsProvider`](#interface_m_p_locations_provider)` * locationsProvider,`[`MPVenueProvider`](#interface_m_p_venue_provider)` * venueProvider,"Use  and `[`initWithMap:`](#interface_m_p_map_control_1a902543e20cc53209c663081b9d0563d7)` when setting up" MP_DEPRECATED_MSG_ATTRIBUTE)` | Setup the venue map with given providers. 
`public virtual void `[`setupMapWith:`](#interface_m_p_map_control_1ad8c14719ebbfca8f00695cb5a6671fc1)`("Use  and `[`initWithMap:`](#interface_m_p_map_control_1a902543e20cc53209c663081b9d0563d7)` when setting up" MP_DEPRECATED_MSG_ATTRIBUTE)` | Setup the venue map with default providers based on given solution id (only venues). 
`public virtual void `[`setupMapWith:site:`](#interface_m_p_map_control_1a785678d85018d4a78d67db2b94e5ed7e)`(NSString * solutionId,"Use only  and `[`initWithMap:`](#interface_m_p_map_control_1a902543e20cc53209c663081b9d0563d7)` when setting up" MP_DEPRECATED_MSG_ATTRIBUTE)` | Setup the venue map with default providers based on given solution id (venues, locations and routing if accessible). 
`public virtual void `[`setupMapWith:site:locations:venues:routing:`](#interface_m_p_map_control_1a32603c955be2d84cd573f454ed54b7c8)`(NSString * solutionId,NSString * venueName,`[`MPLocationsProvider`](#interface_m_p_locations_provider)` * locationsProvider,`[`MPVenueProvider`](#interface_m_p_venue_provider)` * venueProvider,"Use only  and - or - when setting up" MP_DEPRECATED_MSG_ATTRIBUTE)` | Setup the venue map with default providers based on given solution id (venues, locations and routing if accessible). 
`public virtual void `[`setupMapWithVenue:`](#interface_m_p_map_control_1ae5113583dc7798bb89fe91b70067c099)`(NSString * venueName)` | Setup the venue map with default providers based on MapsIndoors.solutionId. 
`public virtual `[`MPLocation`](#interface_m_p_location)` * `[`getLocation:`](#interface_m_p_map_control_1ae11ad10eea5d035152e8b5c8f2bf72a2)`(GMSMarker * marker)` | Get the location that wraps the given marker.
`public virtual `[`MPLocation`](#interface_m_p_location)` * `[`getLocationById:`](#interface_m_p_map_control_1a94f0ec22e8ecdbbf6bb4ad06628acc7a)`(NSString * idString)` | Get location by string id reference.
`public virtual void `[`showSearchResult:`](#interface_m_p_map_control_1a49d8f20b2654d8fddca32c862718cf00)`(BOOL fitBounds)` | Show a given array of locations. The display will override any zoom level condition made from display rules. Clear the locations by calling again with [showLocations:nil fitBounds:NO]
`public virtual void `[`addDisplayRule:`](#interface_m_p_map_control_1a1abf17de0c9ac32912e1f7d8755e5270)`(`[`MPLocationDisplayRule`](#interface_m_p_location_display_rule)` * rule)` | Add a location display rule - you need to know the categories applied to the map locations The display rule name corresponds to the location category we want the rule to apply for Adding a rule with name nil, will apply generally to all categories Adding a rule with a name, will override a more general rule
`public virtual void `[`addDisplayRules:`](#interface_m_p_map_control_1a2e5144b9ea593464ddef047234f227aa)`(NSArray< `[`MPLocationDisplayRule`](#interface_m_p_location_display_rule)` * > * rules)` | 
`public virtual void `[`addPositionProvider:`](#interface_m_p_map_control_1a904b0a45c9d71bd15fed222c9475c5bd)`("Use MapsIndoors.positionProvider instead" MP_DEPRECATED_MSG_ATTRIBUTE)` | 
`public virtual void `[`clearTileCache`](#interface_m_p_map_control_1ac777eaf8f6ee95745814ec52f917497b)`()` | 
`public virtual void `[`clearMap`](#interface_m_p_map_control_1ade2ac203066e2d176095f9b4b7edc0db)`()` | 
`public virtual void `[`showUserPosition:`](#interface_m_p_map_control_1aca27e0bc9cdf4f56ff00286d1a8ccf9f)`(BOOL show)` | 
`public virtual void `[`goTo:`](#interface_m_p_map_control_1a8640b658d6a6ff34c3c7dac588586208)`(`[`MPLocation`](#interface_m_p_location)` * location)` | 
`public virtual void `[`updateViews:`](#interface_m_p_map_control_1a29ae71aeddfa714d55a31db1016e53f0)`(NSNotification * notification)` | 

### Members

##### `{property} id< MPMapControlDelegate > `[`delegate`](#interface_m_p_map_control_1a921068264cdd34847953f4913d0a23ee) {#interface_m_p_map_control_1a921068264cdd34847953f4913d0a23ee}

Delegate object containing data events

##### `{property} id< MPFloorSelectorProtocol > `[`customFloorSelector`](#interface_m_p_map_control_1a35047ef84fcbf5f0e98892def6ade60f) {#interface_m_p_map_control_1a35047ef84fcbf5f0e98892def6ade60f}

Custom floor selector for the map to use. When provided, the MapControl will not create a floor selector control autonomously.

##### `{property} `[`MPFloorSelectorControl`](#interface_m_p_floor_selector_control)` * `[`floorSelector`](#interface_m_p_map_control_1a16c888611e16ae5198d293d6b5c223db) {#interface_m_p_map_control_1a16c888611e16ae5198d293d6b5c223db}

Floor selector UI element.

If a custom floor selector is not provided (
**See also**: [customFloorSelector](#interface_m_p_map_control_1a35047ef84fcbf5f0e98892def6ade60f)), [MPMapControl](#interface_m_p_map_control) will create a default floor selector. If you need a customized floor selector beyond what [MPFloorSelectorControl](#interface_m_p_floor_selector_control) provides, or need finer control over location and visibility of the floor selector, a custom floor selector can be provided to the MapControl using the [MPFloorSelectorControl](#interface_m_p_floor_selector_control) property.

May be nil if a custom floor selector has been provided.

##### `{property} BOOL `[`floorSelectorHidden`](#interface_m_p_map_control_1a037d86eca2af6aa4c1f66d3c9bbd0fe0) {#interface_m_p_map_control_1a037d86eca2af6aa4c1f66d3c9bbd0fe0}

Hide floor selector UI element. Only applies to default floor selector; if a custom floor selector is provided, the MapControl is not repsonsible for it's visibility.

##### `{property} MPPositionIndicator * `[`currentPosition`](#interface_m_p_map_control_1a16b8947f5b3249c2e41b927e73694673) {#interface_m_p_map_control_1a16b8947f5b3249c2e41b927e73694673}

Current user location.

##### `{property} `[`MPLocation`](#interface_m_p_location)` * `[`selectedLocation`](#interface_m_p_map_control_1a92bf04f310fb49a0b2ccbc3e8c592f61) {#interface_m_p_map_control_1a92bf04f310fb49a0b2ccbc3e8c592f61}

Current single location selection.

##### `{property} NSArray< `[`MPLocation`](#interface_m_p_location)` * > * `[`searchResult`](#interface_m_p_map_control_1ae537d5595f805f9a81ac127f1af2ca7e) {#interface_m_p_map_control_1ae537d5595f805f9a81ac127f1af2ca7e}

Current location search result.

##### `{property} NSNumber * `[`currentFloor`](#interface_m_p_map_control_1a466b8884c41adbba58b75fd40a99a10b) {#interface_m_p_map_control_1a466b8884c41adbba58b75fd40a99a10b}

The current floor.

##### `{property} BOOL `[`mapLocationsHidden`](#interface_m_p_map_control_1a86a76bdde4c56067a3401e655dde01f4) {#interface_m_p_map_control_1a86a76bdde4c56067a3401e655dde01f4}

Whether or not to hide all map locations. Default is NO

##### `{property} NSString * `[`venue`](#interface_m_p_map_control_1a49d81ecdce6b8528f25f040720530f9a) {#interface_m_p_map_control_1a49d81ecdce6b8528f25f040720530f9a}

The venue name, at which the map should target its view.

##### `{property} BOOL `[`mapContentReady`](#interface_m_p_map_control_1ae727d1eb057c9789a9dedcc328486d9a) {#interface_m_p_map_control_1ae727d1eb057c9789a9dedcc328486d9a}

Indicates whether or not basic data for the map has been loaded. This does *not* indicate whether maptiles have been loaded and displayed.

##### `public NSString *language `[`MP_DEPRECATED_MSG_ATTRIBUTE`](#interface_m_p_map_control_1a23791a2b0c5110e609e8d145a79a4252)`("Use / instead")` {#interface_m_p_map_control_1a23791a2b0c5110e609e8d145a79a4252}

Current language.

##### `public virtual id `[`initWithMap:`](#interface_m_p_map_control_1a902543e20cc53209c663081b9d0563d7)`(GMSMapView * map)` {#interface_m_p_map_control_1a902543e20cc53209c663081b9d0563d7}

Initialize a [MPMapControl](#interface_m_p_map_control) object with given map. 
##### Parameters
* `map` The map to build the map control on.

##### `public virtual void `[`setupMapWith:venues:routing:`](#interface_m_p_map_control_1a4237157f96720923947efabf4fc39ffe)`(`[`MPLocationsProvider`](#interface_m_p_locations_provider)` * locationsProvider,`[`MPVenueProvider`](#interface_m_p_venue_provider)` * venueProvider,"Use  and `[`initWithMap:`](#interface_m_p_map_control_1a902543e20cc53209c663081b9d0563d7)` when setting up" MP_DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_map_control_1a4237157f96720923947efabf4fc39ffe}

Setup the venue map with given providers. 
##### Parameters
* `locationsProvider` The locations provider from which the MapControl is fetching its location data. 

* `venueProvider` The venue provider from which the MapControl is fetching its venue data. 

* `routingProvider` The routing provider to which the MapControl is performing its route requests.

##### `public virtual void `[`setupMapWith:`](#interface_m_p_map_control_1ad8c14719ebbfca8f00695cb5a6671fc1)`("Use  and `[`initWithMap:`](#interface_m_p_map_control_1a902543e20cc53209c663081b9d0563d7)` when setting up" MP_DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_map_control_1ad8c14719ebbfca8f00695cb5a6671fc1}

Setup the venue map with default providers based on given solution id (only venues). 
##### Parameters
* `solutionId` The MapsPeople solution id.

##### `public virtual void `[`setupMapWith:site:`](#interface_m_p_map_control_1a785678d85018d4a78d67db2b94e5ed7e)`(NSString * solutionId,"Use only  and `[`initWithMap:`](#interface_m_p_map_control_1a902543e20cc53209c663081b9d0563d7)` when setting up" MP_DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_map_control_1a785678d85018d4a78d67db2b94e5ed7e}

Setup the venue map with default providers based on given solution id (venues, locations and routing if accessible). 
##### Parameters
* `solutionId` The MapsPeople solution id. 

* `venueName` The MapsPeople site id, used for locations and routing.

##### `public virtual void `[`setupMapWith:site:locations:venues:routing:`](#interface_m_p_map_control_1a32603c955be2d84cd573f454ed54b7c8)`(NSString * solutionId,NSString * venueName,`[`MPLocationsProvider`](#interface_m_p_locations_provider)` * locationsProvider,`[`MPVenueProvider`](#interface_m_p_venue_provider)` * venueProvider,"Use only  and - or - when setting up" MP_DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_map_control_1a32603c955be2d84cd573f454ed54b7c8}

Setup the venue map with default providers based on given solution id (venues, locations and routing if accessible). 
##### Parameters
* `solutionId` The MapsPeople solution id. 

* `venueName` The MapsPeople site id, used for locations and routing. 

* `locationsProvider` The locations provider from which the MapControl is fetching its location data. 

* `venueProvider` The venue provider from which the MapControl is fetching its venue data. 

* `routingProvider` The routing provider to which the MapControl is performing its route requests.

##### `public virtual void `[`setupMapWithVenue:`](#interface_m_p_map_control_1ae5113583dc7798bb89fe91b70067c099)`(NSString * venueName)` {#interface_m_p_map_control_1ae5113583dc7798bb89fe91b70067c099}

Setup the venue map with default providers based on MapsIndoors.solutionId. 
##### Parameters
* `venueName` The MapsPeople site id, used for locations and routing.

##### `public virtual `[`MPLocation`](#interface_m_p_location)` * `[`getLocation:`](#interface_m_p_map_control_1ae11ad10eea5d035152e8b5c8f2bf72a2)`(GMSMarker * marker)` {#interface_m_p_map_control_1ae11ad10eea5d035152e8b5c8f2bf72a2}

Get the location that wraps the given marker.

##### `public virtual `[`MPLocation`](#interface_m_p_location)` * `[`getLocationById:`](#interface_m_p_map_control_1a94f0ec22e8ecdbbf6bb4ad06628acc7a)`(NSString * idString)` {#interface_m_p_map_control_1a94f0ec22e8ecdbbf6bb4ad06628acc7a}

Get location by string id reference.

##### `public virtual void `[`showSearchResult:`](#interface_m_p_map_control_1a49d8f20b2654d8fddca32c862718cf00)`(BOOL fitBounds)` {#interface_m_p_map_control_1a49d8f20b2654d8fddca32c862718cf00}

Show a given array of locations. The display will override any zoom level condition made from display rules. Clear the locations by calling again with [showLocations:nil fitBounds:NO]

##### `public virtual void `[`addDisplayRule:`](#interface_m_p_map_control_1a1abf17de0c9ac32912e1f7d8755e5270)`(`[`MPLocationDisplayRule`](#interface_m_p_location_display_rule)` * rule)` {#interface_m_p_map_control_1a1abf17de0c9ac32912e1f7d8755e5270}

Add a location display rule - you need to know the categories applied to the map locations The display rule name corresponds to the location category we want the rule to apply for Adding a rule with name nil, will apply generally to all categories Adding a rule with a name, will override a more general rule

##### `public virtual void `[`addDisplayRules:`](#interface_m_p_map_control_1a2e5144b9ea593464ddef047234f227aa)`(NSArray< `[`MPLocationDisplayRule`](#interface_m_p_location_display_rule)` * > * rules)` {#interface_m_p_map_control_1a2e5144b9ea593464ddef047234f227aa}

##### `public virtual void `[`addPositionProvider:`](#interface_m_p_map_control_1a904b0a45c9d71bd15fed222c9475c5bd)`("Use MapsIndoors.positionProvider instead" MP_DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_map_control_1a904b0a45c9d71bd15fed222c9475c5bd}

##### `public virtual void `[`clearTileCache`](#interface_m_p_map_control_1ac777eaf8f6ee95745814ec52f917497b)`()` {#interface_m_p_map_control_1ac777eaf8f6ee95745814ec52f917497b}

##### `public virtual void `[`clearMap`](#interface_m_p_map_control_1ade2ac203066e2d176095f9b4b7edc0db)`()` {#interface_m_p_map_control_1ade2ac203066e2d176095f9b4b7edc0db}

##### `public virtual void `[`showUserPosition:`](#interface_m_p_map_control_1aca27e0bc9cdf4f56ff00286d1a8ccf9f)`(BOOL show)` {#interface_m_p_map_control_1aca27e0bc9cdf4f56ff00286d1a8ccf9f}

##### `public virtual void `[`goTo:`](#interface_m_p_map_control_1a8640b658d6a6ff34c3c7dac588586208)`(`[`MPLocation`](#interface_m_p_location)` * location)` {#interface_m_p_map_control_1a8640b658d6a6ff34c3c7dac588586208}

##### `public virtual void `[`updateViews:`](#interface_m_p_map_control_1a29ae71aeddfa714d55a31db1016e53f0)`(NSNotification * notification)` {#interface_m_p_map_control_1a29ae71aeddfa714d55a31db1016e53f0}

## class `MPMapExtend` {#interface_m_p_map_extend}

```
class MPMapExtend
  : public NSObject
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} double `[`south`](#interface_m_p_map_extend_1af03da780a3c056612777f91e5556aeb7) | 
`{property} double `[`west`](#interface_m_p_map_extend_1a2933e5031c1464a0854c4cfb7b17aeb6) | 
`{property} double `[`north`](#interface_m_p_map_extend_1a954c3d550992a9bf2220ca8cf4a0ac0c) | 
`{property} double `[`east`](#interface_m_p_map_extend_1afc0f3b68b332df3bd1b9851d92f1d07a) | 
`public virtual id `[`initWithGMSBounds:`](#interface_m_p_map_extend_1a22ce3f260545583b820209cd47a7bda1)`(GMSCoordinateBounds * bounds)` | 

### Members

##### `{property} double `[`south`](#interface_m_p_map_extend_1af03da780a3c056612777f91e5556aeb7) {#interface_m_p_map_extend_1af03da780a3c056612777f91e5556aeb7}

##### `{property} double `[`west`](#interface_m_p_map_extend_1a2933e5031c1464a0854c4cfb7b17aeb6) {#interface_m_p_map_extend_1a2933e5031c1464a0854c4cfb7b17aeb6}

##### `{property} double `[`north`](#interface_m_p_map_extend_1a954c3d550992a9bf2220ca8cf4a0ac0c) {#interface_m_p_map_extend_1a954c3d550992a9bf2220ca8cf4a0ac0c}

##### `{property} double `[`east`](#interface_m_p_map_extend_1afc0f3b68b332df3bd1b9851d92f1d07a) {#interface_m_p_map_extend_1afc0f3b68b332df3bd1b9851d92f1d07a}

##### `public virtual id `[`initWithGMSBounds:`](#interface_m_p_map_extend_1a22ce3f260545583b820209cd47a7bda1)`(GMSCoordinateBounds * bounds)` {#interface_m_p_map_extend_1a22ce3f260545583b820209cd47a7bda1}

## class `MPMapRouteLegButton` {#interface_m_p_map_route_leg_button}

```
class MPMapRouteLegButton
  : public UIButton
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

### Members

## class `MPMapStyle` {#interface_m_p_map_style}

```
class MPMapStyle
  : public MPJSONModel
```  

Map style (used by MapsPeoples services)

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSString * `[`folder`](#interface_m_p_map_style_1a51c1e78a4571201fc13200b8a65da728) | 
`{property} NSString * `[`displayName`](#interface_m_p_map_style_1ada51b29709f7e6c7fac9b48a93e7d281) | 

### Members

##### `{property} NSString * `[`folder`](#interface_m_p_map_style_1a51c1e78a4571201fc13200b8a65da728) {#interface_m_p_map_style_1a51c1e78a4571201fc13200b8a65da728}

##### `{property} NSString * `[`displayName`](#interface_m_p_map_style_1ada51b29709f7e6c7fac9b48a93e7d281) {#interface_m_p_map_style_1ada51b29709f7e6c7fac9b48a93e7d281}

## class `MPMarkerView` {#interface_m_p_marker_view}

```
class MPMarkerView
  : public UIView
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public virtual void `[`setImageSize:`](#interface_m_p_marker_view_1a880dcecdcb0ccc27782f46d8e6efdcc8)`(CGSize size)` | 
`public virtual void `[`setImage:`](#interface_m_p_marker_view_1a3605b578accf73039143204b9ad01b91)`(UIImage * image)` | 
`public virtual void `[`setTitle:`](#interface_m_p_marker_view_1aae0bcfa4397af7dedc9d9ae459933716)`(NSString * title)` | 

### Members

##### `public virtual void `[`setImageSize:`](#interface_m_p_marker_view_1a880dcecdcb0ccc27782f46d8e6efdcc8)`(CGSize size)` {#interface_m_p_marker_view_1a880dcecdcb0ccc27782f46d8e6efdcc8}

##### `public virtual void `[`setImage:`](#interface_m_p_marker_view_1a3605b578accf73039143204b9ad01b91)`(UIImage * image)` {#interface_m_p_marker_view_1a3605b578accf73039143204b9ad01b91}

##### `public virtual void `[`setTitle:`](#interface_m_p_marker_view_1aae0bcfa4397af7dedc9d9ae459933716)`(NSString * title)` {#interface_m_p_marker_view_1aae0bcfa4397af7dedc9d9ae459933716}

## class `MPMenuItem` {#interface_m_p_menu_item}

```
class MPMenuItem
  : public MPJSONModel
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSString< Optional > * `[`categoryKey`](#interface_m_p_menu_item_1a9c28f450d3609afa7ac4136cdf79a8d1) | 
`{property} NSString< Optional > * `[`menuImageUrl`](#interface_m_p_menu_item_1ab732eb8ceaef005ba4257c944c80fc95) | 
`{property} NSString< Optional > * `[`iconUrl`](#interface_m_p_menu_item_1ae312a32af20869a7af338691f34de2b7) | 

### Members

##### `{property} NSString< Optional > * `[`categoryKey`](#interface_m_p_menu_item_1a9c28f450d3609afa7ac4136cdf79a8d1) {#interface_m_p_menu_item_1a9c28f450d3609afa7ac4136cdf79a8d1}

##### `{property} NSString< Optional > * `[`menuImageUrl`](#interface_m_p_menu_item_1ab732eb8ceaef005ba4257c944c80fc95) {#interface_m_p_menu_item_1ab732eb8ceaef005ba4257c944c80fc95}

##### `{property} NSString< Optional > * `[`iconUrl`](#interface_m_p_menu_item_1ae312a32af20869a7af338691f34de2b7) {#interface_m_p_menu_item_1ae312a32af20869a7af338691f34de2b7}

## class `MPMessage` {#interface_m_p_message}

```
class MPMessage
  : public MPJSONModel
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSString * `[`messageId`](#interface_m_p_message_1aa28b8d462d3e9a8bf4af8116ac203f82) | 
`{property} NSString< Optional > * `[`beaconId`](#interface_m_p_message_1a6c905f8b9cbb0451d805f7041e4259b3) | 
`{property} NSString< Optional > * `[`locationId`](#interface_m_p_message_1a7abed0316daea957a577f6b56b52befc) | 
`{property} NSString< Optional > * `[`title`](#interface_m_p_message_1afe2025394b631073f67fa623ef5555fa) | 
`{property} NSString< Optional > * `[`content`](#interface_m_p_message_1a5307ff824972fbd96ec9186db9cb561c) | 
`{property} NSString< Optional > * `[`imagePath`](#interface_m_p_message_1a9094168c5e644364e7cc0c4e07b3bf46) | 
`{property} NSNumber< Optional > * `[`maxPushTimes`](#interface_m_p_message_1a7ffb28a627b8f3c08fc6550bfd0055a0) | 
`{property} NSNumber< Optional > * `[`pushInterval`](#interface_m_p_message_1aff61531ac75e80520e99a90dffdf7bdb) | 
`{property} NSNumber< Optional > * `[`notificationCount`](#interface_m_p_message_1aef4ed16172f67219a68d179275264f03) | 
`{property} UIImage< Ignore > * `[`image`](#interface_m_p_message_1acf48fa9bc9861df383fd7533a0fab3e2) | 
`{property} NSDictionary< Optional > * `[`geometry`](#interface_m_p_message_1a4e14bff9d080f7e90eee675556ecf258) | 
`{property} NSDate< Ignore > * `[`deliveredDate`](#interface_m_p_message_1ac71b297cac554abb7f4ef5c76b9086c9) | 

### Members

##### `{property} NSString * `[`messageId`](#interface_m_p_message_1aa28b8d462d3e9a8bf4af8116ac203f82) {#interface_m_p_message_1aa28b8d462d3e9a8bf4af8116ac203f82}

##### `{property} NSString< Optional > * `[`beaconId`](#interface_m_p_message_1a6c905f8b9cbb0451d805f7041e4259b3) {#interface_m_p_message_1a6c905f8b9cbb0451d805f7041e4259b3}

##### `{property} NSString< Optional > * `[`locationId`](#interface_m_p_message_1a7abed0316daea957a577f6b56b52befc) {#interface_m_p_message_1a7abed0316daea957a577f6b56b52befc}

##### `{property} NSString< Optional > * `[`title`](#interface_m_p_message_1afe2025394b631073f67fa623ef5555fa) {#interface_m_p_message_1afe2025394b631073f67fa623ef5555fa}

##### `{property} NSString< Optional > * `[`content`](#interface_m_p_message_1a5307ff824972fbd96ec9186db9cb561c) {#interface_m_p_message_1a5307ff824972fbd96ec9186db9cb561c}

##### `{property} NSString< Optional > * `[`imagePath`](#interface_m_p_message_1a9094168c5e644364e7cc0c4e07b3bf46) {#interface_m_p_message_1a9094168c5e644364e7cc0c4e07b3bf46}

##### `{property} NSNumber< Optional > * `[`maxPushTimes`](#interface_m_p_message_1a7ffb28a627b8f3c08fc6550bfd0055a0) {#interface_m_p_message_1a7ffb28a627b8f3c08fc6550bfd0055a0}

##### `{property} NSNumber< Optional > * `[`pushInterval`](#interface_m_p_message_1aff61531ac75e80520e99a90dffdf7bdb) {#interface_m_p_message_1aff61531ac75e80520e99a90dffdf7bdb}

##### `{property} NSNumber< Optional > * `[`notificationCount`](#interface_m_p_message_1aef4ed16172f67219a68d179275264f03) {#interface_m_p_message_1aef4ed16172f67219a68d179275264f03}

##### `{property} UIImage< Ignore > * `[`image`](#interface_m_p_message_1acf48fa9bc9861df383fd7533a0fab3e2) {#interface_m_p_message_1acf48fa9bc9861df383fd7533a0fab3e2}

##### `{property} NSDictionary< Optional > * `[`geometry`](#interface_m_p_message_1a4e14bff9d080f7e90eee675556ecf258) {#interface_m_p_message_1a4e14bff9d080f7e90eee675556ecf258}

##### `{property} NSDate< Ignore > * `[`deliveredDate`](#interface_m_p_message_1ac71b297cac554abb7f4ef5c76b9086c9) {#interface_m_p_message_1ac71b297cac554abb7f4ef5c76b9086c9}

## class `MPMessageDataset` {#interface_m_p_message_dataset}

```
class MPMessageDataset
  : public MPJSONModel
```  

Dataset that holds Messages, searched results and a filter.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSArray< MPMessage > * `[`list`](#interface_m_p_message_dataset_1ac5009a9bb115c34dd3be34ab63990378) | Main Message array in the data set.

### Members

##### `{property} NSArray< MPMessage > * `[`list`](#interface_m_p_message_dataset_1ac5009a9bb115c34dd3be34ab63990378) {#interface_m_p_message_dataset_1ac5009a9bb115c34dd3be34ab63990378}

Main Message array in the data set.

## class `MPMessagesProvider` {#interface_m_p_messages_provider}

```
class MPMessagesProvider
  : public NSObject
  : public <MPMessagesProvider>
```  

Messages provider that defines a delegate and a method to initiate fetching of Messages from the provider.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

### Members

## class `MPMIAPI` {#interface_m_p_m_i_a_p_i}

```
class MPMIAPI
  : public NSObject
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

### Members

## class `MPMyLocationButton` {#interface_m_p_my_location_button}

```
class MPMyLocationButton
  : public UIButton
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

### Members

## class `MPNotificationsHelper` {#interface_m_p_notifications_helper}

```
class MPNotificationsHelper
  : public NSObject
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

### Members

## class `MPOnlineTileLayer` {#interface_m_p_online_tile_layer}

```
class MPOnlineTileLayer
  : public NSObject
```  

Online tile layer. Used to serve a google map with a MapsPeople online tileservice.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} GMSTileLayer * `[`layer`](#interface_m_p_online_tile_layer_1a56a9802ce3fca7a9ac690127688aeb8f) | The google GMSTileLayer object.
`{property} NSString * `[`layerType`](#interface_m_p_online_tile_layer_1a7574d3705a32f5a932acc78ab394f49e) | Layer type / identifier.
`public virtual id `[`initWithLayer:`](#interface_m_p_online_tile_layer_1a7bc334b8e41858e36943b0cf6c918256)`(NSString * layerType)` | Instantiate using a layer type.
`public virtual id `[`init`](#interface_m_p_online_tile_layer_1ab67bc4d0e928f7ac91b4a87ddd1ad11c)`()` | 
`public virtual NSString * `[`getTileUrl:x:y:`](#interface_m_p_online_tile_layer_1afa03bc15ab74b8dbe289f7b272ba272f)`(NSUInteger zoom,NSUInteger x,NSUInteger y)` | Helper method to generate the correct url, based on level and layer type.
`public virtual void `[`addToMap:`](#interface_m_p_online_tile_layer_1ab852ecc00314e5c172c4405190c64764)`(GMSMapView * map)` | Add the layer to a map. 
`protected int `[`_balancingIndex`](#interface_m_p_online_tile_layer_1a17635afbb51d0aa5f063baf47febe937) | 

### Members

##### `{property} GMSTileLayer * `[`layer`](#interface_m_p_online_tile_layer_1a56a9802ce3fca7a9ac690127688aeb8f) {#interface_m_p_online_tile_layer_1a56a9802ce3fca7a9ac690127688aeb8f}

The google GMSTileLayer object.

##### `{property} NSString * `[`layerType`](#interface_m_p_online_tile_layer_1a7574d3705a32f5a932acc78ab394f49e) {#interface_m_p_online_tile_layer_1a7574d3705a32f5a932acc78ab394f49e}

Layer type / identifier.

##### `public virtual id `[`initWithLayer:`](#interface_m_p_online_tile_layer_1a7bc334b8e41858e36943b0cf6c918256)`(NSString * layerType)` {#interface_m_p_online_tile_layer_1a7bc334b8e41858e36943b0cf6c918256}

Instantiate using a layer type.

##### `public virtual id `[`init`](#interface_m_p_online_tile_layer_1ab67bc4d0e928f7ac91b4a87ddd1ad11c)`()` {#interface_m_p_online_tile_layer_1ab67bc4d0e928f7ac91b4a87ddd1ad11c}

##### `public virtual NSString * `[`getTileUrl:x:y:`](#interface_m_p_online_tile_layer_1afa03bc15ab74b8dbe289f7b272ba272f)`(NSUInteger zoom,NSUInteger x,NSUInteger y)` {#interface_m_p_online_tile_layer_1afa03bc15ab74b8dbe289f7b272ba272f}

Helper method to generate the correct url, based on level and layer type.

##### `public virtual void `[`addToMap:`](#interface_m_p_online_tile_layer_1ab852ecc00314e5c172c4405190c64764)`(GMSMapView * map)` {#interface_m_p_online_tile_layer_1ab852ecc00314e5c172c4405190c64764}

Add the layer to a map. 
##### Parameters
* `map` The Google map view.

##### `protected int `[`_balancingIndex`](#interface_m_p_online_tile_layer_1a17635afbb51d0aa5f063baf47febe937) {#interface_m_p_online_tile_layer_1a17635afbb51d0aa5f063baf47febe937}

## class `MPPersistentCacheGMSTileLayer` {#interface_m_p_persistent_cache_g_m_s_tile_layer}

```
class MPPersistentCacheGMSTileLayer
  : public GMSTileLayer
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSString * `[`urlTemplate`](#interface_m_p_persistent_cache_g_m_s_tile_layer_1a24ec0567e1b044f70600b76cc86b990c) | The url template string to use when fetching tiles. Must have format "prefix{param_1}infix{param_N}suffix", e.g.: "http://tiles.url.com/{floor}/{x}/{y}/{zoom}.png" By default the implementation of this tilelayer will look for {venueId}/{style}/{buildingId}/{floor}/{z}/{x}/{y}, where x, y and z is mandatory.
`{property} `[`MPFloor`](#interface_m_p_floor)` * `[`floor`](#interface_m_p_persistent_cache_g_m_s_tile_layer_1af01bed885b534598f61c862d6610ac3c) | Floor property
`{property} NSNumber * `[`venueId`](#interface_m_p_persistent_cache_g_m_s_tile_layer_1a26de848994f6b9ec72851a87c0b71780) | Venue id
`{property} NSArray * `[`subdomains`](#interface_m_p_persistent_cache_g_m_s_tile_layer_1af54977d5b1e0d42ec345c06004067125) | Array of strings identifying subdomains. If this property is set, and the url template contains the parameter {subdomain}, the tilelayer will do round-robin over the subdomains specified.
`public virtual id `[`initWithVenue:andFloor:`](#interface_m_p_persistent_cache_g_m_s_tile_layer_1a135d54e97f4c680f91ef5d552391d5bc)`(`[`MPVenue`](#interface_m_p_venue)` * venue,`[`MPFloor`](#interface_m_p_floor)` * floor)` | Instantiate using a venue and a floor object.
`public virtual void `[`setUrlTemplate:`](#interface_m_p_persistent_cache_g_m_s_tile_layer_1a037fc2a83713644b75e83f4c0ed0e172)`(NSString * urlTemplate)` | Set the url template to base the tilelayer on
`public virtual void `[`parseUrl`](#interface_m_p_persistent_cache_g_m_s_tile_layer_1a33bf9e9cc3a4a204400a9604ee63e379)`()` | Parse the url template. Normally, this is done automatically

### Members

##### `{property} NSString * `[`urlTemplate`](#interface_m_p_persistent_cache_g_m_s_tile_layer_1a24ec0567e1b044f70600b76cc86b990c) {#interface_m_p_persistent_cache_g_m_s_tile_layer_1a24ec0567e1b044f70600b76cc86b990c}

The url template string to use when fetching tiles. Must have format "prefix{param_1}infix{param_N}suffix", e.g.: "http://tiles.url.com/{floor}/{x}/{y}/{zoom}.png" By default the implementation of this tilelayer will look for {venueId}/{style}/{buildingId}/{floor}/{z}/{x}/{y}, where x, y and z is mandatory.

##### `{property} `[`MPFloor`](#interface_m_p_floor)` * `[`floor`](#interface_m_p_persistent_cache_g_m_s_tile_layer_1af01bed885b534598f61c862d6610ac3c) {#interface_m_p_persistent_cache_g_m_s_tile_layer_1af01bed885b534598f61c862d6610ac3c}

Floor property

##### `{property} NSNumber * `[`venueId`](#interface_m_p_persistent_cache_g_m_s_tile_layer_1a26de848994f6b9ec72851a87c0b71780) {#interface_m_p_persistent_cache_g_m_s_tile_layer_1a26de848994f6b9ec72851a87c0b71780}

Venue id

##### `{property} NSArray * `[`subdomains`](#interface_m_p_persistent_cache_g_m_s_tile_layer_1af54977d5b1e0d42ec345c06004067125) {#interface_m_p_persistent_cache_g_m_s_tile_layer_1af54977d5b1e0d42ec345c06004067125}

Array of strings identifying subdomains. If this property is set, and the url template contains the parameter {subdomain}, the tilelayer will do round-robin over the subdomains specified.

##### `public virtual id `[`initWithVenue:andFloor:`](#interface_m_p_persistent_cache_g_m_s_tile_layer_1a135d54e97f4c680f91ef5d552391d5bc)`(`[`MPVenue`](#interface_m_p_venue)` * venue,`[`MPFloor`](#interface_m_p_floor)` * floor)` {#interface_m_p_persistent_cache_g_m_s_tile_layer_1a135d54e97f4c680f91ef5d552391d5bc}

Instantiate using a venue and a floor object.

##### `public virtual void `[`setUrlTemplate:`](#interface_m_p_persistent_cache_g_m_s_tile_layer_1a037fc2a83713644b75e83f4c0ed0e172)`(NSString * urlTemplate)` {#interface_m_p_persistent_cache_g_m_s_tile_layer_1a037fc2a83713644b75e83f4c0ed0e172}

Set the url template to base the tilelayer on

##### `public virtual void `[`parseUrl`](#interface_m_p_persistent_cache_g_m_s_tile_layer_1a33bf9e9cc3a4a204400a9604ee63e379)`()` {#interface_m_p_persistent_cache_g_m_s_tile_layer_1a33bf9e9cc3a4a204400a9604ee63e379}

Parse the url template. Normally, this is done automatically

## class `MPPngImageProvider` {#interface_m_p_png_image_provider}

```
class MPPngImageProvider
  : public NSObject
  : public <MPImageProvider>
```  

The image provider acts as a service for fetching images either online or cached offline. Only intended for png images.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

### Members

## class `MPPoint` {#interface_m_p_point}

```
class MPPoint
  : public MPGeometry
```  

Basic point geometry class.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public virtual id `[`initWithLat:lon:`](#interface_m_p_point_1a064401eafa70ea547e706467d38e82b2)`(double latitude,double longitude)` | Regular geographic point geometry initialization.
`public virtual id `[`initWithLat:lon:zValue:`](#interface_m_p_point_1a52dbd354ba34a4dadebfc208766438a2)`(double latitude,double longitude,double z)` | Indoor geographic point geometry initialization.
`public virtual double `[`lat`](#interface_m_p_point_1af2eb0b1aabd3988b9c54955e49b6cde4)`()` | Get the latitude component.
`public virtual double `[`lng`](#interface_m_p_point_1ab4534470d392f22875fb6ca660954008)`()` | Get the longitude component.
`public virtual double `[`z`](#interface_m_p_point_1a79d4f3ed1555f009c2413f0281129e6f)`()` | Get the z / floorIndex component.
`public virtual int `[`zIndex`](#interface_m_p_point_1a0bc6427eb2371c096063c27d6e9bdc66)`()` | Get the z / floorIndex component as a rounded index.
`public virtual void `[`setZValue:`](#interface_m_p_point_1aa379dd0eb3ae7d1c2004cda651689cad)`(double z)` | Set the z / floorIndex component.
`public virtual double `[`distanceTo:`](#interface_m_p_point_1a5c5eb357f3b24d646bfa33ce131bbe4d)`(`[`MPPoint`](#interface_m_p_point)` * point)` | Calculate the 2d geographic distance to another point.
`public virtual NSString * `[`latLngString`](#interface_m_p_point_1ac15df391ece825ee254ba2ae60658f68)`()` | Get latitude/logitude value as a string
`public virtual CLLocationCoordinate2D `[`getCoordinate`](#interface_m_p_point_1ad3000aa843d22b2c7b4484f301829700)`()` | Get a CoreLocation coordinate struct representation of the [MPPoint](#interface_m_p_point)

### Members

##### `public virtual id `[`initWithLat:lon:`](#interface_m_p_point_1a064401eafa70ea547e706467d38e82b2)`(double latitude,double longitude)` {#interface_m_p_point_1a064401eafa70ea547e706467d38e82b2}

Regular geographic point geometry initialization.

##### `public virtual id `[`initWithLat:lon:zValue:`](#interface_m_p_point_1a52dbd354ba34a4dadebfc208766438a2)`(double latitude,double longitude,double z)` {#interface_m_p_point_1a52dbd354ba34a4dadebfc208766438a2}

Indoor geographic point geometry initialization.

##### `public virtual double `[`lat`](#interface_m_p_point_1af2eb0b1aabd3988b9c54955e49b6cde4)`()` {#interface_m_p_point_1af2eb0b1aabd3988b9c54955e49b6cde4}

Get the latitude component.

##### `public virtual double `[`lng`](#interface_m_p_point_1ab4534470d392f22875fb6ca660954008)`()` {#interface_m_p_point_1ab4534470d392f22875fb6ca660954008}

Get the longitude component.

##### `public virtual double `[`z`](#interface_m_p_point_1a79d4f3ed1555f009c2413f0281129e6f)`()` {#interface_m_p_point_1a79d4f3ed1555f009c2413f0281129e6f}

Get the z / floorIndex component.

##### `public virtual int `[`zIndex`](#interface_m_p_point_1a0bc6427eb2371c096063c27d6e9bdc66)`()` {#interface_m_p_point_1a0bc6427eb2371c096063c27d6e9bdc66}

Get the z / floorIndex component as a rounded index.

##### `public virtual void `[`setZValue:`](#interface_m_p_point_1aa379dd0eb3ae7d1c2004cda651689cad)`(double z)` {#interface_m_p_point_1aa379dd0eb3ae7d1c2004cda651689cad}

Set the z / floorIndex component.

##### `public virtual double `[`distanceTo:`](#interface_m_p_point_1a5c5eb357f3b24d646bfa33ce131bbe4d)`(`[`MPPoint`](#interface_m_p_point)` * point)` {#interface_m_p_point_1a5c5eb357f3b24d646bfa33ce131bbe4d}

Calculate the 2d geographic distance to another point.

##### `public virtual NSString * `[`latLngString`](#interface_m_p_point_1ac15df391ece825ee254ba2ae60658f68)`()` {#interface_m_p_point_1ac15df391ece825ee254ba2ae60658f68}

Get latitude/logitude value as a string

##### Returns
Latitude/logitude as comma separated string

##### `public virtual CLLocationCoordinate2D `[`getCoordinate`](#interface_m_p_point_1ad3000aa843d22b2c7b4484f301829700)`()` {#interface_m_p_point_1ad3000aa843d22b2c7b4484f301829700}

Get a CoreLocation coordinate struct representation of the [MPPoint](#interface_m_p_point)

##### Returns
A 2d coordinate struct

## class `MPPositionIndicator` {#interface_m_p_position_indicator}

```
class MPPositionIndicator
  : public MPLocation
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} double `[`probability`](#interface_m_p_position_indicator_1aa69afba399b671ff0c63a71a169e153b) | 
`{property} double `[`bearing`](#interface_m_p_position_indicator_1a8e8b827ea43a92d246e705b0e167dec1) | 
`{property} CLLocationCoordinate2D `[`position`](#interface_m_p_position_indicator_1aa061d732169b0561cbeb5d9ef2d6edd6) | 
`{property} bool `[`showProbability`](#interface_m_p_position_indicator_1afa057153e92ce02ef366a316a83e90c3) | 
`public virtual id `[`initWithPoint:andName:`](#interface_m_p_position_indicator_1a3e64b146251d623094a3aa1456998cf1)`(`[`MPPoint`](#interface_m_p_point)` * point,NSString * name)` | 
`public virtual void `[`updateView:floor:displayRules:`](#interface_m_p_position_indicator_1ae5b11bdd06c196eae98534e9b71c1732)`(GMSMapView * map,int floor,`[`MPLocationDisplayRuleset`](#interface_m_p_location_display_ruleset)` * displayRuleset)` | 

### Members

##### `{property} double `[`probability`](#interface_m_p_position_indicator_1aa69afba399b671ff0c63a71a169e153b) {#interface_m_p_position_indicator_1aa69afba399b671ff0c63a71a169e153b}

##### `{property} double `[`bearing`](#interface_m_p_position_indicator_1a8e8b827ea43a92d246e705b0e167dec1) {#interface_m_p_position_indicator_1a8e8b827ea43a92d246e705b0e167dec1}

##### `{property} CLLocationCoordinate2D `[`position`](#interface_m_p_position_indicator_1aa061d732169b0561cbeb5d9ef2d6edd6) {#interface_m_p_position_indicator_1aa061d732169b0561cbeb5d9ef2d6edd6}

##### `{property} bool `[`showProbability`](#interface_m_p_position_indicator_1afa057153e92ce02ef366a316a83e90c3) {#interface_m_p_position_indicator_1afa057153e92ce02ef366a316a83e90c3}

##### `public virtual id `[`initWithPoint:andName:`](#interface_m_p_position_indicator_1a3e64b146251d623094a3aa1456998cf1)`(`[`MPPoint`](#interface_m_p_point)` * point,NSString * name)` {#interface_m_p_position_indicator_1a3e64b146251d623094a3aa1456998cf1}

##### `public virtual void `[`updateView:floor:displayRules:`](#interface_m_p_position_indicator_1ae5b11bdd06c196eae98534e9b71c1732)`(GMSMapView * map,int floor,`[`MPLocationDisplayRuleset`](#interface_m_p_location_display_ruleset)` * displayRuleset)` {#interface_m_p_position_indicator_1ae5b11bdd06c196eae98534e9b71c1732}

## class `MPPositionResult` {#interface_m_p_position_result}

```
class MPPositionResult
  : public MPJSONModel
```  

Position result model

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} `[`MPPoint`](#interface_m_p_point)` * `[`geometry`](#interface_m_p_position_result_1a7c611894315cb07783e24475c0a96947) | The geographic point geometry of the position
`{property} NSMutableDictionary * `[`properties`](#interface_m_p_position_result_1a80c3d4b34b3ce100423987197c489d91) | Properties dictionary
`{property} id< Optional > `[`provider`](#interface_m_p_position_result_1a532c2b51f8f2c7b76e28760510bf90dd) | Position provider that delivered this position
`public NSString *type `[`DEPRECATED_MSG_ATTRIBUTE`](#interface_m_p_position_result_1a7cc946d45df22cbc0e0f0c44e609bd87)`("Marked as obsolete property")` | Type property
`public virtual double `[`getProbability`](#interface_m_p_position_result_1a6a574c4abef199eb10c3a816527d0cf0)`()` | Get the probability of the position. This is a radius in meters. Can be used to generate an approximation circle.
`public virtual double `[`getHeadingDegrees`](#interface_m_p_position_result_1ac757416f8b8546160d5c3ca2eafdb4c4)`()` | Get the heading in degrees from north
`public virtual "Marked as obsolete method" `[`DEPRECATED_MSG_ATTRIBUTE`](#interface_m_p_position_result_1ab70e79f58088619e8cf26bfa6faedc95)`()` | Get the age of the this position result; the time in seconds since the position was first determined.
`public virtual NSNumber * `[`getFloor`](#interface_m_p_position_result_1a241a333e463125323cbeb030303bc651)`()` | Get the floor index property
`public virtual void `[`setProbability:`](#interface_m_p_position_result_1addf9e60269adad29d3782b259ceded02)`(double probability)` | 
`public virtual void `[`setHeadingDegrees:`](#interface_m_p_position_result_1affedc34d7fedf3f191304177e0717f22)`(double heading)` | Set the heading of the position result in degrees from north

### Members

##### `{property} `[`MPPoint`](#interface_m_p_point)` * `[`geometry`](#interface_m_p_position_result_1a7c611894315cb07783e24475c0a96947) {#interface_m_p_position_result_1a7c611894315cb07783e24475c0a96947}

The geographic point geometry of the position

##### `{property} NSMutableDictionary * `[`properties`](#interface_m_p_position_result_1a80c3d4b34b3ce100423987197c489d91) {#interface_m_p_position_result_1a80c3d4b34b3ce100423987197c489d91}

Properties dictionary

##### `{property} id< Optional > `[`provider`](#interface_m_p_position_result_1a532c2b51f8f2c7b76e28760510bf90dd) {#interface_m_p_position_result_1a532c2b51f8f2c7b76e28760510bf90dd}

Position provider that delivered this position

##### `public NSString *type `[`DEPRECATED_MSG_ATTRIBUTE`](#interface_m_p_position_result_1a7cc946d45df22cbc0e0f0c44e609bd87)`("Marked as obsolete property")` {#interface_m_p_position_result_1a7cc946d45df22cbc0e0f0c44e609bd87}

Type property

##### `public virtual double `[`getProbability`](#interface_m_p_position_result_1a6a574c4abef199eb10c3a816527d0cf0)`()` {#interface_m_p_position_result_1a6a574c4abef199eb10c3a816527d0cf0}

Get the probability of the position. This is a radius in meters. Can be used to generate an approximation circle.

##### Returns
A double representing the positions accuracy in meters.

##### `public virtual double `[`getHeadingDegrees`](#interface_m_p_position_result_1ac757416f8b8546160d5c3ca2eafdb4c4)`()` {#interface_m_p_position_result_1ac757416f8b8546160d5c3ca2eafdb4c4}

Get the heading in degrees from north

##### Returns
The heading value in degrees from north as a double

##### `public virtual "Marked as obsolete method" `[`DEPRECATED_MSG_ATTRIBUTE`](#interface_m_p_position_result_1ab70e79f58088619e8cf26bfa6faedc95)`()` {#interface_m_p_position_result_1ab70e79f58088619e8cf26bfa6faedc95}

Get the age of the this position result; the time in seconds since the position was first determined.

##### Returns
The age property as a number

##### `public virtual NSNumber * `[`getFloor`](#interface_m_p_position_result_1a241a333e463125323cbeb030303bc651)`()` {#interface_m_p_position_result_1a241a333e463125323cbeb030303bc651}

Get the floor index property

##### Returns
The floor index property

##### `public virtual void `[`setProbability:`](#interface_m_p_position_result_1addf9e60269adad29d3782b259ceded02)`(double probability)` {#interface_m_p_position_result_1addf9e60269adad29d3782b259ceded02}

##### `public virtual void `[`setHeadingDegrees:`](#interface_m_p_position_result_1affedc34d7fedf3f191304177e0717f22)`(double heading)` {#interface_m_p_position_result_1affedc34d7fedf3f191304177e0717f22}

Set the heading of the position result in degrees from north

##### Parameters
* `heading` The heading value in degrees from north as a double

## class `MPRoute` {#interface_m_p_route}

```
class MPRoute
  : public MPJSONModel
```  

Routing is under development. The route model contains the route components: The start and end point, the overall route distance, the duration using the chosen vehicle(s), the actual route components (routeLegs) containing the route geometry and actions (shifts, turns, climbs etc.) performed to get to the destination point. Typically this object is not manually instantiated, but returns as a result from a routing provider (MPRoutingProvider).

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSString< Optional > * `[`copyrights`](#interface_m_p_route_1a96f78b0d30314fb90c0b99c8e491018b) | 
`{property} NSMutableArray< `[`MPRouteLeg](#interface_m_p_route_leg) * >< [MPRouteLeg`](#interface_m_p_route_leg)`, Optional > * `[`legs`](#interface_m_p_route_1a4fcc6bb9aa0ba38e6c316e6159891f62) | The route legs: the different route components. Typically a route from 1st floor to 2nd floor will consist of two route legs.
`{property} MPEncodedPolyline< Optional > * `[`overview_polyline`](#interface_m_p_route_1a8414cda8edf11eec8257ba14e4742c58) | 
`{property} NSString< Optional > * `[`summary`](#interface_m_p_route_1a8bd4c9c16f8faf76dd89c5c71d83412e) | 
`{property} NSArray< Optional > * `[`warnings`](#interface_m_p_route_1acb9e51b455536dd520a04f5f1c2295b5) | 
`{property} MPRouteBounds< Optional > * `[`bounds`](#interface_m_p_route_1a00d65546b52a80b4ba22cd62df5788d3) | 
`{property} NSNumber< Optional > * `[`distance`](#interface_m_p_route_1ac1de7e57d3d60c0b7b0b1d01a90d8c8b) | 
`{property} NSNumber< Optional > * `[`duration`](#interface_m_p_route_1a43c153b9b1882f58b1eb1340f9010ad8) | 
`{property} NSArray< NSString * >< Optional > * `[`restrictions`](#interface_m_p_route_1a22dd6d70e7dbe98cf22d883e7a7cddb4) | 
`public virtual MPRouteSegmentPath `[`findNearestRouteSegmentPathFromPoint:floor:`](#interface_m_p_route_1a8778f836eb6b03ddb7c4b5cbf8aefa3c)`(`[`MPPoint`](#interface_m_p_point)` * point,NSNumber * floorIndex)` | Find route segment path (route leg and route step) nearest to a point and floor index.

### Members

##### `{property} NSString< Optional > * `[`copyrights`](#interface_m_p_route_1a96f78b0d30314fb90c0b99c8e491018b) {#interface_m_p_route_1a96f78b0d30314fb90c0b99c8e491018b}

##### `{property} NSMutableArray< `[`MPRouteLeg](#interface_m_p_route_leg) * >< [MPRouteLeg`](#interface_m_p_route_leg)`, Optional > * `[`legs`](#interface_m_p_route_1a4fcc6bb9aa0ba38e6c316e6159891f62) {#interface_m_p_route_1a4fcc6bb9aa0ba38e6c316e6159891f62}

The route legs: the different route components. Typically a route from 1st floor to 2nd floor will consist of two route legs.

##### `{property} MPEncodedPolyline< Optional > * `[`overview_polyline`](#interface_m_p_route_1a8414cda8edf11eec8257ba14e4742c58) {#interface_m_p_route_1a8414cda8edf11eec8257ba14e4742c58}

##### `{property} NSString< Optional > * `[`summary`](#interface_m_p_route_1a8bd4c9c16f8faf76dd89c5c71d83412e) {#interface_m_p_route_1a8bd4c9c16f8faf76dd89c5c71d83412e}

##### `{property} NSArray< Optional > * `[`warnings`](#interface_m_p_route_1acb9e51b455536dd520a04f5f1c2295b5) {#interface_m_p_route_1acb9e51b455536dd520a04f5f1c2295b5}

##### `{property} MPRouteBounds< Optional > * `[`bounds`](#interface_m_p_route_1a00d65546b52a80b4ba22cd62df5788d3) {#interface_m_p_route_1a00d65546b52a80b4ba22cd62df5788d3}

##### `{property} NSNumber< Optional > * `[`distance`](#interface_m_p_route_1ac1de7e57d3d60c0b7b0b1d01a90d8c8b) {#interface_m_p_route_1ac1de7e57d3d60c0b7b0b1d01a90d8c8b}

##### `{property} NSNumber< Optional > * `[`duration`](#interface_m_p_route_1a43c153b9b1882f58b1eb1340f9010ad8) {#interface_m_p_route_1a43c153b9b1882f58b1eb1340f9010ad8}

##### `{property} NSArray< NSString * >< Optional > * `[`restrictions`](#interface_m_p_route_1a22dd6d70e7dbe98cf22d883e7a7cddb4) {#interface_m_p_route_1a22dd6d70e7dbe98cf22d883e7a7cddb4}

##### `public virtual MPRouteSegmentPath `[`findNearestRouteSegmentPathFromPoint:floor:`](#interface_m_p_route_1a8778f836eb6b03ddb7c4b5cbf8aefa3c)`(`[`MPPoint`](#interface_m_p_point)` * point,NSNumber * floorIndex)` {#interface_m_p_route_1a8778f836eb6b03ddb7c4b5cbf8aefa3c}

Find route segment path (route leg and route step) nearest to a point and floor index.

## class `MPRouteBounds` {#interface_m_p_route_bounds}

```
class MPRouteBounds
  : public MPJSONModel
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} MPRouteCoordinate * `[`northeast`](#interface_m_p_route_bounds_1ad25cca9a4376d057cdddd1979557b3e8) | 
`{property} MPRouteCoordinate * `[`southwest`](#interface_m_p_route_bounds_1a37f96e57f8bda224ec2cab4799d6de33) | 

### Members

##### `{property} MPRouteCoordinate * `[`northeast`](#interface_m_p_route_bounds_1ad25cca9a4376d057cdddd1979557b3e8) {#interface_m_p_route_bounds_1ad25cca9a4376d057cdddd1979557b3e8}

##### `{property} MPRouteCoordinate * `[`southwest`](#interface_m_p_route_bounds_1a37f96e57f8bda224ec2cab4799d6de33) {#interface_m_p_route_bounds_1a37f96e57f8bda224ec2cab4799d6de33}

## class `MPRouteCoordinate` {#interface_m_p_route_coordinate}

```
class MPRouteCoordinate
  : public MPJSONModel
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSNumber< Optional > * `[`zLevel`](#interface_m_p_route_coordinate_1ae8471c8126c9bdeefd1ecaabcf21d976) | 
`{property} NSNumber * `[`lat`](#interface_m_p_route_coordinate_1a906003000e9352bfc8020121d176f7c5) | 
`{property} NSNumber * `[`lng`](#interface_m_p_route_coordinate_1ad34b689eccaf834e47055efc048b0adc) | 
`{property} NSString< Optional > * `[`floor_name`](#interface_m_p_route_coordinate_1ad6af838302727b51107d4b6b3eee095f) | 

### Members

##### `{property} NSNumber< Optional > * `[`zLevel`](#interface_m_p_route_coordinate_1ae8471c8126c9bdeefd1ecaabcf21d976) {#interface_m_p_route_coordinate_1ae8471c8126c9bdeefd1ecaabcf21d976}

##### `{property} NSNumber * `[`lat`](#interface_m_p_route_coordinate_1a906003000e9352bfc8020121d176f7c5) {#interface_m_p_route_coordinate_1a906003000e9352bfc8020121d176f7c5}

##### `{property} NSNumber * `[`lng`](#interface_m_p_route_coordinate_1ad34b689eccaf834e47055efc048b0adc) {#interface_m_p_route_coordinate_1ad34b689eccaf834e47055efc048b0adc}

##### `{property} NSString< Optional > * `[`floor_name`](#interface_m_p_route_coordinate_1ad6af838302727b51107d4b6b3eee095f) {#interface_m_p_route_coordinate_1ad6af838302727b51107d4b6b3eee095f}

## class `MPRouteLeg` {#interface_m_p_route_leg}

```
class MPRouteLeg
  : public MPJSONModel
```  

Route leg model. A route model will consist of one ore more route legs. Typically a route from 1st floor to 2nd floor will consist of two route legs. Thus, a route leg defines a continueus route part within the same floor and/or building and/or vehicle.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSNumber< Optional > * `[`distance`](#interface_m_p_route_leg_1aeaa3f3ba8ecacfd6302024319593519a) | The routeleg distance
`{property} NSNumber< Optional > * `[`duration`](#interface_m_p_route_leg_1a4cbd96f25678b1e0789e14ebb753d395) | The routeleg duration
`{property} MPRouteCoordinate< Optional > * `[`start_location`](#interface_m_p_route_leg_1adf2a93d7920e232708c3c1cef82298f8) | 
`{property} MPRouteCoordinate< Optional > * `[`end_location`](#interface_m_p_route_leg_1aa0438df0a228abca1e40e7a2335d6c9f) | 
`{property} NSString< Optional > * `[`start_address`](#interface_m_p_route_leg_1a555070b38f75d7b0fca849667251b463) | 
`{property} NSString< Optional > * `[`end_address`](#interface_m_p_route_leg_1a9344d8e46912f77ed7f2f1ab120a7456) | 
`{property} NSMutableArray< MPRouteStep * >< MPRouteStep, Optional > * `[`steps`](#interface_m_p_route_leg_1a42929f880fe6c5a3c7733c5e81c8275d) | The array of route actions in this route leg.
`{property} MPRouteLegType `[`routeLegType`](#interface_m_p_route_leg_1acd28cd710f7fc75e891d80de0b8a24e4) | 

### Members

##### `{property} NSNumber< Optional > * `[`distance`](#interface_m_p_route_leg_1aeaa3f3ba8ecacfd6302024319593519a) {#interface_m_p_route_leg_1aeaa3f3ba8ecacfd6302024319593519a}

The routeleg distance

##### `{property} NSNumber< Optional > * `[`duration`](#interface_m_p_route_leg_1a4cbd96f25678b1e0789e14ebb753d395) {#interface_m_p_route_leg_1a4cbd96f25678b1e0789e14ebb753d395}

The routeleg duration

##### `{property} MPRouteCoordinate< Optional > * `[`start_location`](#interface_m_p_route_leg_1adf2a93d7920e232708c3c1cef82298f8) {#interface_m_p_route_leg_1adf2a93d7920e232708c3c1cef82298f8}

##### `{property} MPRouteCoordinate< Optional > * `[`end_location`](#interface_m_p_route_leg_1aa0438df0a228abca1e40e7a2335d6c9f) {#interface_m_p_route_leg_1aa0438df0a228abca1e40e7a2335d6c9f}

##### `{property} NSString< Optional > * `[`start_address`](#interface_m_p_route_leg_1a555070b38f75d7b0fca849667251b463) {#interface_m_p_route_leg_1a555070b38f75d7b0fca849667251b463}

##### `{property} NSString< Optional > * `[`end_address`](#interface_m_p_route_leg_1a9344d8e46912f77ed7f2f1ab120a7456) {#interface_m_p_route_leg_1a9344d8e46912f77ed7f2f1ab120a7456}

##### `{property} NSMutableArray< MPRouteStep * >< MPRouteStep, Optional > * `[`steps`](#interface_m_p_route_leg_1a42929f880fe6c5a3c7733c5e81c8275d) {#interface_m_p_route_leg_1a42929f880fe6c5a3c7733c5e81c8275d}

The array of route actions in this route leg.

##### `{property} MPRouteLegType `[`routeLegType`](#interface_m_p_route_leg_1acd28cd710f7fc75e891d80de0b8a24e4) {#interface_m_p_route_leg_1acd28cd710f7fc75e891d80de0b8a24e4}

## class `MPRouteProperty` {#interface_m_p_route_property}

```
class MPRouteProperty
  : public MPJSONModel
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSString * `[`text`](#interface_m_p_route_property_1aae2b307643dacb3689dcdd5e6102b1ad) | 
`{property} NSNumber * `[`value`](#interface_m_p_route_property_1a3623431cb0deba0b3732ba3783691cb4) | 

### Members

##### `{property} NSString * `[`text`](#interface_m_p_route_property_1aae2b307643dacb3689dcdd5e6102b1ad) {#interface_m_p_route_property_1aae2b307643dacb3689dcdd5e6102b1ad}

##### `{property} NSNumber * `[`value`](#interface_m_p_route_property_1a3623431cb0deba0b3732ba3783691cb4) {#interface_m_p_route_property_1a3623431cb0deba0b3732ba3783691cb4}

## class `MPRouteResult` {#interface_m_p_route_result}

```
class MPRouteResult
  : public MPJSONModel
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSArray< `[`MPRoute`](#interface_m_p_route)`, Optional > * `[`routes`](#interface_m_p_route_result_1afe08283bad953676eb356bb1b50fb33d) | 
`{property} NSString< Optional > * `[`status`](#interface_m_p_route_result_1a9f602c89b7901c426a3a4423967df843) | 

### Members

##### `{property} NSArray< `[`MPRoute`](#interface_m_p_route)`, Optional > * `[`routes`](#interface_m_p_route_result_1afe08283bad953676eb356bb1b50fb33d) {#interface_m_p_route_result_1afe08283bad953676eb356bb1b50fb33d}

##### `{property} NSString< Optional > * `[`status`](#interface_m_p_route_result_1a9f602c89b7901c426a3a4423967df843) {#interface_m_p_route_result_1a9f602c89b7901c426a3a4423967df843}

## class `MPRouteStep` {#interface_m_p_route_step}

```
class MPRouteStep
  : public MPJSONModel
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSString< Optional > * `[`travel_mode`](#interface_m_p_route_step_1ab3497114a535d1679b942c93bfa1852f) | 
`{property} MPRouteCoordinate< Optional > * `[`end_location`](#interface_m_p_route_step_1aaa75adca5b17f761ed73fdc17f70f228) | 
`{property} MPRouteCoordinate< Optional > * `[`start_location`](#interface_m_p_route_step_1a81b536bcdac1873d6e6524a2293d5d62) | 
`{property} NSNumber< Optional > * `[`distance`](#interface_m_p_route_step_1ac07a9246d5b4987a844245d2622bf5fd) | 
`{property} NSNumber< Optional > * `[`duration`](#interface_m_p_route_step_1a48f30deb716b6f5550f99920cf45b06b) | 
`{property} NSString< Optional > * `[`maneuver`](#interface_m_p_route_step_1ae9916bf2ba36ed8c957218495611508f) | 
`{property} MPEncodedPolyline< Optional > * `[`polyline`](#interface_m_p_route_step_1a9ee7174e24317482e324d84644bd6368) | 
`{property} NSMutableArray< MPRouteCoordinate * >< MPRouteCoordinate, Optional > * `[`geometry`](#interface_m_p_route_step_1abb328353ab5db64e22b05d7202288bb1) | 
`{property} NSString< Optional > * `[`html_instructions`](#interface_m_p_route_step_1aff76e19b8eb2de29490cf4f4ac7e4d15) | 
`{property} NSString< Optional > * `[`highway`](#interface_m_p_route_step_1aa0cb6097d5fd981ece89400239213374) | 
`{property} NSString< Optional > * `[`routeContext`](#interface_m_p_route_step_1ad5307f801246fde99a3d060b538f6b14) | 
`{property} NSMutableArray< MPRouteStep * >< MPRouteStep, Optional > * `[`steps`](#interface_m_p_route_step_1a3868b3bf0096d94b30d7c3113b8a58ba) | 
`{property} MPTransitDetails< Optional > * `[`transit_details`](#interface_m_p_route_step_1adc63a225ef9d3a9f29fd06fb3ac299ca) | 
`public virtual `[`MPPoint`](#interface_m_p_point)` * `[`getActionPoint`](#interface_m_p_route_step_1a4eff4d46caa5d3fcac1c03b870ec6896)`()` | 
`public virtual NSNumber * `[`getStartFloorName`](#interface_m_p_route_step_1a5462bb0851d8f0746014bd6cdb2ba572)`()` | 
`public virtual `[`MPPoint`](#interface_m_p_point)` * `[`getStartPoint`](#interface_m_p_route_step_1ad1f94d91ef82b529eeacf7e78ca588b1)`()` | 
`public virtual `[`MPPoint`](#interface_m_p_point)` * `[`getEndPoint`](#interface_m_p_route_step_1abf15427ff7cf808b6b66bdc520080297)`()` | 

### Members

##### `{property} NSString< Optional > * `[`travel_mode`](#interface_m_p_route_step_1ab3497114a535d1679b942c93bfa1852f) {#interface_m_p_route_step_1ab3497114a535d1679b942c93bfa1852f}

##### `{property} MPRouteCoordinate< Optional > * `[`end_location`](#interface_m_p_route_step_1aaa75adca5b17f761ed73fdc17f70f228) {#interface_m_p_route_step_1aaa75adca5b17f761ed73fdc17f70f228}

##### `{property} MPRouteCoordinate< Optional > * `[`start_location`](#interface_m_p_route_step_1a81b536bcdac1873d6e6524a2293d5d62) {#interface_m_p_route_step_1a81b536bcdac1873d6e6524a2293d5d62}

##### `{property} NSNumber< Optional > * `[`distance`](#interface_m_p_route_step_1ac07a9246d5b4987a844245d2622bf5fd) {#interface_m_p_route_step_1ac07a9246d5b4987a844245d2622bf5fd}

##### `{property} NSNumber< Optional > * `[`duration`](#interface_m_p_route_step_1a48f30deb716b6f5550f99920cf45b06b) {#interface_m_p_route_step_1a48f30deb716b6f5550f99920cf45b06b}

##### `{property} NSString< Optional > * `[`maneuver`](#interface_m_p_route_step_1ae9916bf2ba36ed8c957218495611508f) {#interface_m_p_route_step_1ae9916bf2ba36ed8c957218495611508f}

##### `{property} MPEncodedPolyline< Optional > * `[`polyline`](#interface_m_p_route_step_1a9ee7174e24317482e324d84644bd6368) {#interface_m_p_route_step_1a9ee7174e24317482e324d84644bd6368}

##### `{property} NSMutableArray< MPRouteCoordinate * >< MPRouteCoordinate, Optional > * `[`geometry`](#interface_m_p_route_step_1abb328353ab5db64e22b05d7202288bb1) {#interface_m_p_route_step_1abb328353ab5db64e22b05d7202288bb1}

##### `{property} NSString< Optional > * `[`html_instructions`](#interface_m_p_route_step_1aff76e19b8eb2de29490cf4f4ac7e4d15) {#interface_m_p_route_step_1aff76e19b8eb2de29490cf4f4ac7e4d15}

##### `{property} NSString< Optional > * `[`highway`](#interface_m_p_route_step_1aa0cb6097d5fd981ece89400239213374) {#interface_m_p_route_step_1aa0cb6097d5fd981ece89400239213374}

##### `{property} NSString< Optional > * `[`routeContext`](#interface_m_p_route_step_1ad5307f801246fde99a3d060b538f6b14) {#interface_m_p_route_step_1ad5307f801246fde99a3d060b538f6b14}

##### `{property} NSMutableArray< MPRouteStep * >< MPRouteStep, Optional > * `[`steps`](#interface_m_p_route_step_1a3868b3bf0096d94b30d7c3113b8a58ba) {#interface_m_p_route_step_1a3868b3bf0096d94b30d7c3113b8a58ba}

##### `{property} MPTransitDetails< Optional > * `[`transit_details`](#interface_m_p_route_step_1adc63a225ef9d3a9f29fd06fb3ac299ca) {#interface_m_p_route_step_1adc63a225ef9d3a9f29fd06fb3ac299ca}

##### `public virtual `[`MPPoint`](#interface_m_p_point)` * `[`getActionPoint`](#interface_m_p_route_step_1a4eff4d46caa5d3fcac1c03b870ec6896)`()` {#interface_m_p_route_step_1a4eff4d46caa5d3fcac1c03b870ec6896}

##### `public virtual NSNumber * `[`getStartFloorName`](#interface_m_p_route_step_1a5462bb0851d8f0746014bd6cdb2ba572)`()` {#interface_m_p_route_step_1a5462bb0851d8f0746014bd6cdb2ba572}

##### `public virtual `[`MPPoint`](#interface_m_p_point)` * `[`getStartPoint`](#interface_m_p_route_step_1ad1f94d91ef82b529eeacf7e78ca588b1)`()` {#interface_m_p_route_step_1ad1f94d91ef82b529eeacf7e78ca588b1}

##### `public virtual `[`MPPoint`](#interface_m_p_point)` * `[`getEndPoint`](#interface_m_p_route_step_1abf15427ff7cf808b6b66bdc520080297)`()` {#interface_m_p_route_step_1abf15427ff7cf808b6b66bdc520080297}

## class `MPRoutingControl` {#interface_m_p_routing_control}

```
class MPRoutingControl
  : public UIView
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} id< MPRouteActionDelegate > `[`delegate`](#interface_m_p_routing_control_1a6f055112887d8c9622025eb6af45cc17) | 
`{property} int `[`currentActionIndex`](#interface_m_p_routing_control_1a63a285394d40010c68130afb01e2b063) | 
`{property} int `[`currentRouteLegIndex`](#interface_m_p_routing_control_1ad64105ec62e8eb79e779b6c9e8d8c211) | 
`{property} `[`MPRoute`](#interface_m_p_route)` * `[`route`](#interface_m_p_routing_control_1a30de0843a285b497311f87066a056a79) | 
`{property} UIView * `[`parent`](#interface_m_p_routing_control_1a0d41ca4e1ccf59aded939f21e92665c8) | 
`{property} UIButton * `[`nextButton`](#interface_m_p_routing_control_1a84813725a2ef259b05f735d5d0b21257) | 
`{property} UIButton * `[`cancelButton`](#interface_m_p_routing_control_1ad26509de0a855f7a43083190d8df6a71) | 
`{property} `[`MPInfoSnippetView`](#interface_m_p_info_snippet_view)` * `[`infoView`](#interface_m_p_routing_control_1aa2348b7a3892b91c3de1e8898e218e8c) | 
`{property} `[`MPLocation`](#interface_m_p_location)` * `[`destination`](#interface_m_p_routing_control_1a79499c7150ea6a92a90a809f624c1f4a) | 
`{property} int `[`currentTotalDistance`](#interface_m_p_routing_control_1a3e5b51566754ef00ec2b81bb4d97c9d8) | 
`{property} NSMutableArray * `[`actionLocations`](#interface_m_p_routing_control_1a0f8cf3116a5cee88d842cd025c44f37f) | 
`{property} NSMutableArray * `[`actions`](#interface_m_p_routing_control_1a1e3e1bc18e2310b84bf2964aa2788047) | 
`{property} `[`MPLocation`](#interface_m_p_location)` * `[`currentActionLocation`](#interface_m_p_routing_control_1afdeaf53ddbbfaa04f5abcb25d2125226) | 
`{property} GMSMapView * `[`map`](#interface_m_p_routing_control_1a9f2a15ccd838dcad668f07c42e7e28f2) | 
`public virtual id `[`initOnMap:`](#interface_m_p_routing_control_1ae1bfd68a271c452f0cd10322bf6d984d)`(GMSMapView * map)` | 
`public virtual id `[`initOnView:`](#interface_m_p_routing_control_1a0a42b5badad9651a9d68b13d51eb8570)`(UIView * view)` | 
`public virtual void `[`addToView:`](#interface_m_p_routing_control_1acbac26c61e9be0d532bf92ba7e94ce28)`(UIView * view)` | 
`public virtual void `[`turnByTurn:`](#interface_m_p_routing_control_1ae7009907cd0944d0156f346aa0a6ca2f)`(`[`MPRoute`](#interface_m_p_route)` * route)` | 
`public virtual void `[`routeOverview:`](#interface_m_p_routing_control_1a062516067c76242711a178161083946c)`(`[`MPRoute`](#interface_m_p_route)` * route)` | 
`public virtual void `[`routeOverview:floor:`](#interface_m_p_routing_control_1ad85a05c073de4e4c70986b43d42bbdb8)`(`[`MPRoute`](#interface_m_p_route)` * route,NSNumber * floor)` | 
`public virtual void `[`notifyNewTurn:`](#interface_m_p_routing_control_1a08964482658a32e40738fbf0df9b9eaa)`(id caller)` | 
`public virtual void `[`doTurn`](#interface_m_p_routing_control_1a13c338961d356053f8778b34bee3aad8)`()` | 
`public virtual void `[`doTurn:`](#interface_m_p_routing_control_1ac4656e668162154c1bc69cc33d560ab6)`(int positionIndex)` | 
`public virtual void `[`showAction:`](#interface_m_p_routing_control_1afb4b1c88b0df390f6e9478b7a3b7e846)`(MPRouteStep * action)` | 
`public virtual void `[`showActionByMarker:`](#interface_m_p_routing_control_1a7cf1d14757227385a8f13990b121c5a5)`(GMSMarker * marker)` | 
`public virtual void `[`close`](#interface_m_p_routing_control_1ae14aa78f87f3730a4606cdeed85ffe4e)`()` | 
`public virtual MPRouteStep * `[`getAction:routeLegIndex:`](#interface_m_p_routing_control_1a3b478a47975b0b5a913210bfcc8c670e)`(int positionIndex,int legIndex)` | 

### Members

##### `{property} id< MPRouteActionDelegate > `[`delegate`](#interface_m_p_routing_control_1a6f055112887d8c9622025eb6af45cc17) {#interface_m_p_routing_control_1a6f055112887d8c9622025eb6af45cc17}

##### `{property} int `[`currentActionIndex`](#interface_m_p_routing_control_1a63a285394d40010c68130afb01e2b063) {#interface_m_p_routing_control_1a63a285394d40010c68130afb01e2b063}

##### `{property} int `[`currentRouteLegIndex`](#interface_m_p_routing_control_1ad64105ec62e8eb79e779b6c9e8d8c211) {#interface_m_p_routing_control_1ad64105ec62e8eb79e779b6c9e8d8c211}

##### `{property} `[`MPRoute`](#interface_m_p_route)` * `[`route`](#interface_m_p_routing_control_1a30de0843a285b497311f87066a056a79) {#interface_m_p_routing_control_1a30de0843a285b497311f87066a056a79}

##### `{property} UIView * `[`parent`](#interface_m_p_routing_control_1a0d41ca4e1ccf59aded939f21e92665c8) {#interface_m_p_routing_control_1a0d41ca4e1ccf59aded939f21e92665c8}

##### `{property} UIButton * `[`nextButton`](#interface_m_p_routing_control_1a84813725a2ef259b05f735d5d0b21257) {#interface_m_p_routing_control_1a84813725a2ef259b05f735d5d0b21257}

##### `{property} UIButton * `[`cancelButton`](#interface_m_p_routing_control_1ad26509de0a855f7a43083190d8df6a71) {#interface_m_p_routing_control_1ad26509de0a855f7a43083190d8df6a71}

##### `{property} `[`MPInfoSnippetView`](#interface_m_p_info_snippet_view)` * `[`infoView`](#interface_m_p_routing_control_1aa2348b7a3892b91c3de1e8898e218e8c) {#interface_m_p_routing_control_1aa2348b7a3892b91c3de1e8898e218e8c}

##### `{property} `[`MPLocation`](#interface_m_p_location)` * `[`destination`](#interface_m_p_routing_control_1a79499c7150ea6a92a90a809f624c1f4a) {#interface_m_p_routing_control_1a79499c7150ea6a92a90a809f624c1f4a}

##### `{property} int `[`currentTotalDistance`](#interface_m_p_routing_control_1a3e5b51566754ef00ec2b81bb4d97c9d8) {#interface_m_p_routing_control_1a3e5b51566754ef00ec2b81bb4d97c9d8}

##### `{property} NSMutableArray * `[`actionLocations`](#interface_m_p_routing_control_1a0f8cf3116a5cee88d842cd025c44f37f) {#interface_m_p_routing_control_1a0f8cf3116a5cee88d842cd025c44f37f}

##### `{property} NSMutableArray * `[`actions`](#interface_m_p_routing_control_1a1e3e1bc18e2310b84bf2964aa2788047) {#interface_m_p_routing_control_1a1e3e1bc18e2310b84bf2964aa2788047}

##### `{property} `[`MPLocation`](#interface_m_p_location)` * `[`currentActionLocation`](#interface_m_p_routing_control_1afdeaf53ddbbfaa04f5abcb25d2125226) {#interface_m_p_routing_control_1afdeaf53ddbbfaa04f5abcb25d2125226}

##### `{property} GMSMapView * `[`map`](#interface_m_p_routing_control_1a9f2a15ccd838dcad668f07c42e7e28f2) {#interface_m_p_routing_control_1a9f2a15ccd838dcad668f07c42e7e28f2}

##### `public virtual id `[`initOnMap:`](#interface_m_p_routing_control_1ae1bfd68a271c452f0cd10322bf6d984d)`(GMSMapView * map)` {#interface_m_p_routing_control_1ae1bfd68a271c452f0cd10322bf6d984d}

##### `public virtual id `[`initOnView:`](#interface_m_p_routing_control_1a0a42b5badad9651a9d68b13d51eb8570)`(UIView * view)` {#interface_m_p_routing_control_1a0a42b5badad9651a9d68b13d51eb8570}

##### `public virtual void `[`addToView:`](#interface_m_p_routing_control_1acbac26c61e9be0d532bf92ba7e94ce28)`(UIView * view)` {#interface_m_p_routing_control_1acbac26c61e9be0d532bf92ba7e94ce28}

##### `public virtual void `[`turnByTurn:`](#interface_m_p_routing_control_1ae7009907cd0944d0156f346aa0a6ca2f)`(`[`MPRoute`](#interface_m_p_route)` * route)` {#interface_m_p_routing_control_1ae7009907cd0944d0156f346aa0a6ca2f}

##### `public virtual void `[`routeOverview:`](#interface_m_p_routing_control_1a062516067c76242711a178161083946c)`(`[`MPRoute`](#interface_m_p_route)` * route)` {#interface_m_p_routing_control_1a062516067c76242711a178161083946c}

##### `public virtual void `[`routeOverview:floor:`](#interface_m_p_routing_control_1ad85a05c073de4e4c70986b43d42bbdb8)`(`[`MPRoute`](#interface_m_p_route)` * route,NSNumber * floor)` {#interface_m_p_routing_control_1ad85a05c073de4e4c70986b43d42bbdb8}

##### `public virtual void `[`notifyNewTurn:`](#interface_m_p_routing_control_1a08964482658a32e40738fbf0df9b9eaa)`(id caller)` {#interface_m_p_routing_control_1a08964482658a32e40738fbf0df9b9eaa}

##### `public virtual void `[`doTurn`](#interface_m_p_routing_control_1a13c338961d356053f8778b34bee3aad8)`()` {#interface_m_p_routing_control_1a13c338961d356053f8778b34bee3aad8}

##### `public virtual void `[`doTurn:`](#interface_m_p_routing_control_1ac4656e668162154c1bc69cc33d560ab6)`(int positionIndex)` {#interface_m_p_routing_control_1ac4656e668162154c1bc69cc33d560ab6}

##### `public virtual void `[`showAction:`](#interface_m_p_routing_control_1afb4b1c88b0df390f6e9478b7a3b7e846)`(MPRouteStep * action)` {#interface_m_p_routing_control_1afb4b1c88b0df390f6e9478b7a3b7e846}

##### `public virtual void `[`showActionByMarker:`](#interface_m_p_routing_control_1a7cf1d14757227385a8f13990b121c5a5)`(GMSMarker * marker)` {#interface_m_p_routing_control_1a7cf1d14757227385a8f13990b121c5a5}

##### `public virtual void `[`close`](#interface_m_p_routing_control_1ae14aa78f87f3730a4606cdeed85ffe4e)`()` {#interface_m_p_routing_control_1ae14aa78f87f3730a4606cdeed85ffe4e}

##### `public virtual MPRouteStep * `[`getAction:routeLegIndex:`](#interface_m_p_routing_control_1a3b478a47975b0b5a913210bfcc8c670e)`(int positionIndex,int legIndex)` {#interface_m_p_routing_control_1a3b478a47975b0b5a913210bfcc8c670e}

## class `MPRoutingProvider` {#interface_m_p_routing_provider}

```
class MPRoutingProvider
  : public NSObject
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} id< MPRoutingProviderDelegate > `[`delegate`](#interface_m_p_routing_provider_1a173ae2cef7851e04504914105fab8f3b) | 
`{property} NSString * `[`solutionId`](#interface_m_p_routing_provider_1abca6c5ed2f3c32aaaa2f566acd40ecb6) | 
`{property} NSString * `[`googleApiKey`](#interface_m_p_routing_provider_1a384c7df8c893d2bf508188770f218742) | 
`{property} NSString * `[`venue`](#interface_m_p_routing_provider_1ac0a1b4cdc93264f15c6db4ed428dc7ba) | 
`{property} NSString * `[`vehicle`](#interface_m_p_routing_provider_1a4a3dccd0e666cc88e2e149165bba9d35) | 
`{property} NSString * `[`language`](#interface_m_p_routing_provider_1a8b941c8a00c4b80225eb5139d6c71d02) | 
`public virtual id `[`initWithArea:`](#interface_m_p_routing_provider_1a20dcd3dfe6aee0c5bdec14dbb0957ecd)`(NSString * venueName)` | 
`public virtual id `[`initWithMapsIndoorsSolutionId:googleApiKey:`](#interface_m_p_routing_provider_1ac479f557ff4ee1c0b532446bd5682655)`(NSString * solutionId,NSString * googleApiKey)` | 
`public virtual void `[`getRoutingFrom:to:by:avoid:`](#interface_m_p_routing_provider_1a6061a2c5a0efa4568147c7147ac909bb)`(`[`MPPoint`](#interface_m_p_point)` * from,`[`MPPoint`](#interface_m_p_point)` * to,NSString * mode,NSArray * restrictions)` | 
`public virtual void `[`getRoutingFrom:to:by:avoid:depart:arrive:`](#interface_m_p_routing_provider_1aa32b9cd58d8ca8bbc3b26b0974499354)`(`[`MPPoint`](#interface_m_p_point)` * from,`[`MPPoint`](#interface_m_p_point)` * to,NSString * mode,NSArray * restrictions,NSDate * departureTime,NSDate * arrivalTime)` | 
`public virtual void `[`getGoogleRoutingFrom:to:by:avoid:`](#interface_m_p_routing_provider_1a2e05579d9e0029c044f66709663ca693)`(NSString * from,NSString * to,NSString * mode,NSArray * restrictions)` | 
`public virtual void `[`getGoogleRoutingFrom:to:by:avoid:depart:arrive:`](#interface_m_p_routing_provider_1a2378d5ce7ae9af23ed32fa7c8d845da9)`(NSString * from,NSString * to,NSString * mode,NSArray * restrictions,NSDate * departureTime,NSDate * arrivalTime)` | 
`public virtual void `[`getRoutingFrom:to:by:avoid:completionHandler:`](#interface_m_p_routing_provider_1a5981898310efbe827a80fe3b2ba4163c)`(`[`MPPoint`](#interface_m_p_point)` * from,`[`MPPoint`](#interface_m_p_point)` * to,NSString * mode,NSArray * restrictions,mpRouteHandlerBlockType handler)` | 
`public virtual void `[`getRoutingFrom:to:by:avoid:depart:arrive:completionHandler:`](#interface_m_p_routing_provider_1a5242f8979ea982cfdce6140f686ea124)`(`[`MPPoint`](#interface_m_p_point)` * from,`[`MPPoint`](#interface_m_p_point)` * to,NSString * mode,NSArray * restrictions,NSDate * departureTime,NSDate * arrivalTime,mpRouteHandlerBlockType handler)` | 
`public virtual void `[`getGoogleRoutingFrom:to:by:avoid:completionHandler:`](#interface_m_p_routing_provider_1a1d929c1d281f868a8b1838972975269c)`(NSString * from,NSString * to,NSString * mode,NSArray * restrictions,mpRouteHandlerBlockType handler)` | 
`public virtual void `[`getGoogleRoutingFrom:to:by:avoid:depart:arrive:completionHandler:`](#interface_m_p_routing_provider_1a3be7bf7473c7d8815f5d1444bac8eb50)`(NSString * from,NSString * to,NSString * mode,NSArray * restrictions,NSDate * departureTime,NSDate * arrivalTime,mpRouteHandlerBlockType handler)` | 

### Members

##### `{property} id< MPRoutingProviderDelegate > `[`delegate`](#interface_m_p_routing_provider_1a173ae2cef7851e04504914105fab8f3b) {#interface_m_p_routing_provider_1a173ae2cef7851e04504914105fab8f3b}

##### `{property} NSString * `[`solutionId`](#interface_m_p_routing_provider_1abca6c5ed2f3c32aaaa2f566acd40ecb6) {#interface_m_p_routing_provider_1abca6c5ed2f3c32aaaa2f566acd40ecb6}

##### `{property} NSString * `[`googleApiKey`](#interface_m_p_routing_provider_1a384c7df8c893d2bf508188770f218742) {#interface_m_p_routing_provider_1a384c7df8c893d2bf508188770f218742}

##### `{property} NSString * `[`venue`](#interface_m_p_routing_provider_1ac0a1b4cdc93264f15c6db4ed428dc7ba) {#interface_m_p_routing_provider_1ac0a1b4cdc93264f15c6db4ed428dc7ba}

##### `{property} NSString * `[`vehicle`](#interface_m_p_routing_provider_1a4a3dccd0e666cc88e2e149165bba9d35) {#interface_m_p_routing_provider_1a4a3dccd0e666cc88e2e149165bba9d35}

##### `{property} NSString * `[`language`](#interface_m_p_routing_provider_1a8b941c8a00c4b80225eb5139d6c71d02) {#interface_m_p_routing_provider_1a8b941c8a00c4b80225eb5139d6c71d02}

##### `public virtual id `[`initWithArea:`](#interface_m_p_routing_provider_1a20dcd3dfe6aee0c5bdec14dbb0957ecd)`(NSString * venueName)` {#interface_m_p_routing_provider_1a20dcd3dfe6aee0c5bdec14dbb0957ecd}

##### `public virtual id `[`initWithMapsIndoorsSolutionId:googleApiKey:`](#interface_m_p_routing_provider_1ac479f557ff4ee1c0b532446bd5682655)`(NSString * solutionId,NSString * googleApiKey)` {#interface_m_p_routing_provider_1ac479f557ff4ee1c0b532446bd5682655}

##### `public virtual void `[`getRoutingFrom:to:by:avoid:`](#interface_m_p_routing_provider_1a6061a2c5a0efa4568147c7147ac909bb)`(`[`MPPoint`](#interface_m_p_point)` * from,`[`MPPoint`](#interface_m_p_point)` * to,NSString * mode,NSArray * restrictions)` {#interface_m_p_routing_provider_1a6061a2c5a0efa4568147c7147ac909bb}

##### `public virtual void `[`getRoutingFrom:to:by:avoid:depart:arrive:`](#interface_m_p_routing_provider_1aa32b9cd58d8ca8bbc3b26b0974499354)`(`[`MPPoint`](#interface_m_p_point)` * from,`[`MPPoint`](#interface_m_p_point)` * to,NSString * mode,NSArray * restrictions,NSDate * departureTime,NSDate * arrivalTime)` {#interface_m_p_routing_provider_1aa32b9cd58d8ca8bbc3b26b0974499354}

##### `public virtual void `[`getGoogleRoutingFrom:to:by:avoid:`](#interface_m_p_routing_provider_1a2e05579d9e0029c044f66709663ca693)`(NSString * from,NSString * to,NSString * mode,NSArray * restrictions)` {#interface_m_p_routing_provider_1a2e05579d9e0029c044f66709663ca693}

##### `public virtual void `[`getGoogleRoutingFrom:to:by:avoid:depart:arrive:`](#interface_m_p_routing_provider_1a2378d5ce7ae9af23ed32fa7c8d845da9)`(NSString * from,NSString * to,NSString * mode,NSArray * restrictions,NSDate * departureTime,NSDate * arrivalTime)` {#interface_m_p_routing_provider_1a2378d5ce7ae9af23ed32fa7c8d845da9}

##### `public virtual void `[`getRoutingFrom:to:by:avoid:completionHandler:`](#interface_m_p_routing_provider_1a5981898310efbe827a80fe3b2ba4163c)`(`[`MPPoint`](#interface_m_p_point)` * from,`[`MPPoint`](#interface_m_p_point)` * to,NSString * mode,NSArray * restrictions,mpRouteHandlerBlockType handler)` {#interface_m_p_routing_provider_1a5981898310efbe827a80fe3b2ba4163c}

##### `public virtual void `[`getRoutingFrom:to:by:avoid:depart:arrive:completionHandler:`](#interface_m_p_routing_provider_1a5242f8979ea982cfdce6140f686ea124)`(`[`MPPoint`](#interface_m_p_point)` * from,`[`MPPoint`](#interface_m_p_point)` * to,NSString * mode,NSArray * restrictions,NSDate * departureTime,NSDate * arrivalTime,mpRouteHandlerBlockType handler)` {#interface_m_p_routing_provider_1a5242f8979ea982cfdce6140f686ea124}

##### `public virtual void `[`getGoogleRoutingFrom:to:by:avoid:completionHandler:`](#interface_m_p_routing_provider_1a1d929c1d281f868a8b1838972975269c)`(NSString * from,NSString * to,NSString * mode,NSArray * restrictions,mpRouteHandlerBlockType handler)` {#interface_m_p_routing_provider_1a1d929c1d281f868a8b1838972975269c}

##### `public virtual void `[`getGoogleRoutingFrom:to:by:avoid:depart:arrive:completionHandler:`](#interface_m_p_routing_provider_1a3be7bf7473c7d8815f5d1444bac8eb50)`(NSString * from,NSString * to,NSString * mode,NSArray * restrictions,NSDate * departureTime,NSDate * arrivalTime,mpRouteHandlerBlockType handler)` {#interface_m_p_routing_provider_1a3be7bf7473c7d8815f5d1444bac8eb50}

## class `MPSDKVersion` {#interface_m_p_s_d_k_version}

```
class MPSDKVersion
  : public NSObject
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

### Members

## class `MPSolution` {#interface_m_p_solution}

```
class MPSolution
  : public MPJSONModel
```  

The solution model holds data about the buildings and floors in a solution, plus additional meta-data.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSString * `[`name`](#interface_m_p_solution_1a0179bdd56ddbd708281375bde1744370) | 
`{property} NSString * `[`defaultLanguage`](#interface_m_p_solution_1a1d0326c3fdf2fceb3314ab0f12f2532c) | 
`{property} NSArray< NSString * > * `[`availableLanguages`](#interface_m_p_solution_1a051a658e4b802be2ad3e342db19a9bd5) | 
`{property} NSArray< NSString * > * `[`modules`](#interface_m_p_solution_1a0c7ef22b68aa93ba724f01671dbe3554) | 
`{property} NSString< Optional > * `[`mapClientUrl`](#interface_m_p_solution_1ae70fbbabead98e06774c5bc7117556b9) | 
`{property} NSArray< `[`MPType](#interface_m_p_type) * >< [MPType`](#interface_m_p_type)` > * `[`types`](#interface_m_p_solution_1a0b5c7f2803171c723a3ee1d23ce68296) | Array of types in this solution.
`public virtual NSString * `[`getTypeUrl:`](#interface_m_p_solution_1a0a5d80b553c2cd248b31438e4eaeb7a7)`(NSString * arg)` | Get a URL for a given type.
`public virtual NSString * `[`getMapClientUrlForVenueId:locationId:`](#interface_m_p_solution_1a1cd2ee43744cab8a2e53f05245580d86)`(NSString * venueId,NSString * locationId)` | Get a link for a location in a specific venue, for use with the web-client.

### Members

##### `{property} NSString * `[`name`](#interface_m_p_solution_1a0179bdd56ddbd708281375bde1744370) {#interface_m_p_solution_1a0179bdd56ddbd708281375bde1744370}

##### `{property} NSString * `[`defaultLanguage`](#interface_m_p_solution_1a1d0326c3fdf2fceb3314ab0f12f2532c) {#interface_m_p_solution_1a1d0326c3fdf2fceb3314ab0f12f2532c}

##### `{property} NSArray< NSString * > * `[`availableLanguages`](#interface_m_p_solution_1a051a658e4b802be2ad3e342db19a9bd5) {#interface_m_p_solution_1a051a658e4b802be2ad3e342db19a9bd5}

##### `{property} NSArray< NSString * > * `[`modules`](#interface_m_p_solution_1a0c7ef22b68aa93ba724f01671dbe3554) {#interface_m_p_solution_1a0c7ef22b68aa93ba724f01671dbe3554}

##### `{property} NSString< Optional > * `[`mapClientUrl`](#interface_m_p_solution_1ae70fbbabead98e06774c5bc7117556b9) {#interface_m_p_solution_1ae70fbbabead98e06774c5bc7117556b9}

##### `{property} NSArray< `[`MPType](#interface_m_p_type) * >< [MPType`](#interface_m_p_type)` > * `[`types`](#interface_m_p_solution_1a0b5c7f2803171c723a3ee1d23ce68296) {#interface_m_p_solution_1a0b5c7f2803171c723a3ee1d23ce68296}

Array of types in this solution.

##### `public virtual NSString * `[`getTypeUrl:`](#interface_m_p_solution_1a0a5d80b553c2cd248b31438e4eaeb7a7)`(NSString * arg)` {#interface_m_p_solution_1a0a5d80b553c2cd248b31438e4eaeb7a7}

Get a URL for a given type.

##### `public virtual NSString * `[`getMapClientUrlForVenueId:locationId:`](#interface_m_p_solution_1a1cd2ee43744cab8a2e53f05245580d86)`(NSString * venueId,NSString * locationId)` {#interface_m_p_solution_1a1cd2ee43744cab8a2e53f05245580d86}

Get a link for a location in a specific venue, for use with the web-client.

## class `MPSolutionProvider` {#interface_m_p_solution_provider}

```
class MPSolutionProvider
  : public NSObject
```  

Solution provider interface, that defines a delegate and a method for solution queries.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} id< MPSolutionProviderDelegate > `[`delegate`](#interface_m_p_solution_provider_1aac9331ff6956f00158721c7715750683) | Solution provider delegate.
`public virtual void `[`getSolutionAsync:`](#interface_m_p_solution_provider_1abb44ff6942655af98763a6ba675ade47)`("Use `[`getSolution`](#interface_m_p_solution_provider_1a63e3ef6e5b1dce10539b83c584a3e851)` instead" MP_DEPRECATED_MSG_ATTRIBUTE)` | Get solution from this provider.
`public virtual void `[`getSolutionAsync:completionHandler:`](#interface_m_p_solution_provider_1ab490877a4006cb1381b016356b6739aa)`(NSString * solutionId,"Use `[`getSolutionWithCompletion:`](#interface_m_p_solution_provider_1a04c10737113dd73b67dbcd83c7905255)` instead" MP_DEPRECATED_MSG_ATTRIBUTE)` | Get solution from this provider and supply a callback handler function.
`public virtual void `[`getSolution`](#interface_m_p_solution_provider_1a63e3ef6e5b1dce10539b83c584a3e851)`()` | Get solution from this provider.
`public virtual void `[`getSolutionWithCompletion:`](#interface_m_p_solution_provider_1a04c10737113dd73b67dbcd83c7905255)`(mpSolutionHandlerBlockType completionHandler)` | Get solution from this provider and supply a callback handler function.

### Members

##### `{property} id< MPSolutionProviderDelegate > `[`delegate`](#interface_m_p_solution_provider_1aac9331ff6956f00158721c7715750683) {#interface_m_p_solution_provider_1aac9331ff6956f00158721c7715750683}

Solution provider delegate.

##### `public virtual void `[`getSolutionAsync:`](#interface_m_p_solution_provider_1abb44ff6942655af98763a6ba675ade47)`("Use `[`getSolution`](#interface_m_p_solution_provider_1a63e3ef6e5b1dce10539b83c584a3e851)` instead" MP_DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_solution_provider_1abb44ff6942655af98763a6ba675ade47}

Get solution from this provider.

##### `public virtual void `[`getSolutionAsync:completionHandler:`](#interface_m_p_solution_provider_1ab490877a4006cb1381b016356b6739aa)`(NSString * solutionId,"Use `[`getSolutionWithCompletion:`](#interface_m_p_solution_provider_1a04c10737113dd73b67dbcd83c7905255)` instead" MP_DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_solution_provider_1ab490877a4006cb1381b016356b6739aa}

Get solution from this provider and supply a callback handler function.

##### `public virtual void `[`getSolution`](#interface_m_p_solution_provider_1a63e3ef6e5b1dce10539b83c584a3e851)`()` {#interface_m_p_solution_provider_1a63e3ef6e5b1dce10539b83c584a3e851}

Get solution from this provider.

##### `public virtual void `[`getSolutionWithCompletion:`](#interface_m_p_solution_provider_1a04c10737113dd73b67dbcd83c7905255)`(mpSolutionHandlerBlockType completionHandler)` {#interface_m_p_solution_provider_1a04c10737113dd73b67dbcd83c7905255}

Get solution from this provider and supply a callback handler function.

## class `MPStringCache` {#interface_m_p_string_cache}

```
class MPStringCache
  : public NSObject
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

### Members

## class `MPTransitAgency` {#interface_m_p_transit_agency}

```
class MPTransitAgency
  : public MPJSONModel
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSString< Optional > * `[`name`](#interface_m_p_transit_agency_1a2456a157bf4589e06bdc70f7cf4b07ff) | 
`{property} NSString< Optional > * `[`url`](#interface_m_p_transit_agency_1aeb0f98c7e5fcc55d88dfa58fc665718d) | 
`{property} NSString< Optional > * `[`phone`](#interface_m_p_transit_agency_1a1afea464c91b90c080ccd74be179188b) | 

### Members

##### `{property} NSString< Optional > * `[`name`](#interface_m_p_transit_agency_1a2456a157bf4589e06bdc70f7cf4b07ff) {#interface_m_p_transit_agency_1a2456a157bf4589e06bdc70f7cf4b07ff}

##### `{property} NSString< Optional > * `[`url`](#interface_m_p_transit_agency_1aeb0f98c7e5fcc55d88dfa58fc665718d) {#interface_m_p_transit_agency_1aeb0f98c7e5fcc55d88dfa58fc665718d}

##### `{property} NSString< Optional > * `[`phone`](#interface_m_p_transit_agency_1a1afea464c91b90c080ccd74be179188b) {#interface_m_p_transit_agency_1a1afea464c91b90c080ccd74be179188b}

## class `MPTransitDetails` {#interface_m_p_transit_details}

```
class MPTransitDetails
  : public MPJSONModel
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} MPTransitLine< Optional > * `[`line`](#interface_m_p_transit_details_1a9ba7074a6f2860495e460a66430e1614) | 
`{property} MPTransitStop< Optional > * `[`arrival_stop`](#interface_m_p_transit_details_1a04014a3d3142daad794b284f408338ac) | 
`{property} MPTransitStop< Optional > * `[`departure_stop`](#interface_m_p_transit_details_1a1d417869889d9573cc544fee3002ef2d) | 
`{property} MPTransitTime< Optional > * `[`arrival_time`](#interface_m_p_transit_details_1a6d34437c2cc9110b6dc3a204d22cab65) | 
`{property} MPTransitTime< Optional > * `[`departure_time`](#interface_m_p_transit_details_1a0cba1d232efb0bcf6a72b52c4282d1c0) | 
`{property} NSString< Optional > * `[`headsign`](#interface_m_p_transit_details_1a30811c05d58a081552fcd833d5da0932) | 
`{property} NSNumber< Optional > * `[`headway`](#interface_m_p_transit_details_1a2f71211a0e262744cc054e628d46303e) | 
`{property} NSNumber< Optional > * `[`num_stops`](#interface_m_p_transit_details_1a76872d5ebf16d505a02535ba9428f550) | 

### Members

##### `{property} MPTransitLine< Optional > * `[`line`](#interface_m_p_transit_details_1a9ba7074a6f2860495e460a66430e1614) {#interface_m_p_transit_details_1a9ba7074a6f2860495e460a66430e1614}

##### `{property} MPTransitStop< Optional > * `[`arrival_stop`](#interface_m_p_transit_details_1a04014a3d3142daad794b284f408338ac) {#interface_m_p_transit_details_1a04014a3d3142daad794b284f408338ac}

##### `{property} MPTransitStop< Optional > * `[`departure_stop`](#interface_m_p_transit_details_1a1d417869889d9573cc544fee3002ef2d) {#interface_m_p_transit_details_1a1d417869889d9573cc544fee3002ef2d}

##### `{property} MPTransitTime< Optional > * `[`arrival_time`](#interface_m_p_transit_details_1a6d34437c2cc9110b6dc3a204d22cab65) {#interface_m_p_transit_details_1a6d34437c2cc9110b6dc3a204d22cab65}

##### `{property} MPTransitTime< Optional > * `[`departure_time`](#interface_m_p_transit_details_1a0cba1d232efb0bcf6a72b52c4282d1c0) {#interface_m_p_transit_details_1a0cba1d232efb0bcf6a72b52c4282d1c0}

##### `{property} NSString< Optional > * `[`headsign`](#interface_m_p_transit_details_1a30811c05d58a081552fcd833d5da0932) {#interface_m_p_transit_details_1a30811c05d58a081552fcd833d5da0932}

##### `{property} NSNumber< Optional > * `[`headway`](#interface_m_p_transit_details_1a2f71211a0e262744cc054e628d46303e) {#interface_m_p_transit_details_1a2f71211a0e262744cc054e628d46303e}

##### `{property} NSNumber< Optional > * `[`num_stops`](#interface_m_p_transit_details_1a76872d5ebf16d505a02535ba9428f550) {#interface_m_p_transit_details_1a76872d5ebf16d505a02535ba9428f550}

## class `MPTransitLine` {#interface_m_p_transit_line}

```
class MPTransitLine
  : public MPJSONModel
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSString< Optional > * `[`name`](#interface_m_p_transit_line_1aa05b0b248f3546c50e01ff82bc58282f) | 
`{property} NSString< Optional > * `[`short_name`](#interface_m_p_transit_line_1a958560e9954a3400d8fbcbefc6bf46b1) | 
`{property} NSString< Optional > * `[`color`](#interface_m_p_transit_line_1a519f0c33b6bdc89f3702943808d1800f) | 
`{property} NSArray< MPTransitAgency * >< MPTransitAgency > * `[`agencies`](#interface_m_p_transit_line_1aa288151dcd9e53a857b81c8369c97b2a) | 
`{property} NSString< Optional > * `[`url`](#interface_m_p_transit_line_1a08ab69264123cfa51dd60361e046d3fb) | 
`{property} NSString< Optional > * `[`icon`](#interface_m_p_transit_line_1ad3144afbd9e93ef4bfbb96b89f479d29) | 
`{property} NSString< Optional > * `[`text_color`](#interface_m_p_transit_line_1a778d29f2602117792071e8dfdcfd9766) | 
`{property} MPTransitVehicle< Optional > * `[`vehicle`](#interface_m_p_transit_line_1a53ade705d0804f96a1238bb67273abd2) | 

### Members

##### `{property} NSString< Optional > * `[`name`](#interface_m_p_transit_line_1aa05b0b248f3546c50e01ff82bc58282f) {#interface_m_p_transit_line_1aa05b0b248f3546c50e01ff82bc58282f}

##### `{property} NSString< Optional > * `[`short_name`](#interface_m_p_transit_line_1a958560e9954a3400d8fbcbefc6bf46b1) {#interface_m_p_transit_line_1a958560e9954a3400d8fbcbefc6bf46b1}

##### `{property} NSString< Optional > * `[`color`](#interface_m_p_transit_line_1a519f0c33b6bdc89f3702943808d1800f) {#interface_m_p_transit_line_1a519f0c33b6bdc89f3702943808d1800f}

##### `{property} NSArray< MPTransitAgency * >< MPTransitAgency > * `[`agencies`](#interface_m_p_transit_line_1aa288151dcd9e53a857b81c8369c97b2a) {#interface_m_p_transit_line_1aa288151dcd9e53a857b81c8369c97b2a}

##### `{property} NSString< Optional > * `[`url`](#interface_m_p_transit_line_1a08ab69264123cfa51dd60361e046d3fb) {#interface_m_p_transit_line_1a08ab69264123cfa51dd60361e046d3fb}

##### `{property} NSString< Optional > * `[`icon`](#interface_m_p_transit_line_1ad3144afbd9e93ef4bfbb96b89f479d29) {#interface_m_p_transit_line_1ad3144afbd9e93ef4bfbb96b89f479d29}

##### `{property} NSString< Optional > * `[`text_color`](#interface_m_p_transit_line_1a778d29f2602117792071e8dfdcfd9766) {#interface_m_p_transit_line_1a778d29f2602117792071e8dfdcfd9766}

##### `{property} MPTransitVehicle< Optional > * `[`vehicle`](#interface_m_p_transit_line_1a53ade705d0804f96a1238bb67273abd2) {#interface_m_p_transit_line_1a53ade705d0804f96a1238bb67273abd2}

## class `MPTransitStop` {#interface_m_p_transit_stop}

```
class MPTransitStop
  : public MPJSONModel
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSString< Optional > * `[`name`](#interface_m_p_transit_stop_1ae96b7f7c86a47de88a70dd9f48208808) | 
`{property} MPRouteProperty< Optional > * `[`location`](#interface_m_p_transit_stop_1a4315884761fed695777d47dd53b8efb7) | 

### Members

##### `{property} NSString< Optional > * `[`name`](#interface_m_p_transit_stop_1ae96b7f7c86a47de88a70dd9f48208808) {#interface_m_p_transit_stop_1ae96b7f7c86a47de88a70dd9f48208808}

##### `{property} MPRouteProperty< Optional > * `[`location`](#interface_m_p_transit_stop_1a4315884761fed695777d47dd53b8efb7) {#interface_m_p_transit_stop_1a4315884761fed695777d47dd53b8efb7}

## class `MPTransitTime` {#interface_m_p_transit_time}

```
class MPTransitTime
  : public MPJSONModel
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSString< Optional > * `[`text`](#interface_m_p_transit_time_1a17379396757fce8e76ab0fbb05c290f3) | 
`{property} NSNumber< Optional > * `[`value`](#interface_m_p_transit_time_1aa6302555669d03b39e235f357a089767) | 
`{property} NSString< Optional > * `[`time_zone`](#interface_m_p_transit_time_1a43922a07b3ec717bf617419d51f6d2ec) | 

### Members

##### `{property} NSString< Optional > * `[`text`](#interface_m_p_transit_time_1a17379396757fce8e76ab0fbb05c290f3) {#interface_m_p_transit_time_1a17379396757fce8e76ab0fbb05c290f3}

##### `{property} NSNumber< Optional > * `[`value`](#interface_m_p_transit_time_1aa6302555669d03b39e235f357a089767) {#interface_m_p_transit_time_1aa6302555669d03b39e235f357a089767}

##### `{property} NSString< Optional > * `[`time_zone`](#interface_m_p_transit_time_1a43922a07b3ec717bf617419d51f6d2ec) {#interface_m_p_transit_time_1a43922a07b3ec717bf617419d51f6d2ec}

## class `MPTransitVehicle` {#interface_m_p_transit_vehicle}

```
class MPTransitVehicle
  : public MPJSONModel
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSString< Optional > * `[`name`](#interface_m_p_transit_vehicle_1a225936a7f8a3128cda5559f92fc3393c) | 
`{property} NSString< Optional > * `[`type`](#interface_m_p_transit_vehicle_1ac3072105df71c4e2f5be2fa7c14bfa1d) | 
`{property} NSString< Optional > * `[`icon`](#interface_m_p_transit_vehicle_1ae665cd2279a37880669a7b08bbf97626) | 
`{property} NSString< Optional > * `[`local_icon`](#interface_m_p_transit_vehicle_1ac0ae58ff89df36a2a80957da4d8a1842) | 

### Members

##### `{property} NSString< Optional > * `[`name`](#interface_m_p_transit_vehicle_1a225936a7f8a3128cda5559f92fc3393c) {#interface_m_p_transit_vehicle_1a225936a7f8a3128cda5559f92fc3393c}

##### `{property} NSString< Optional > * `[`type`](#interface_m_p_transit_vehicle_1ac3072105df71c4e2f5be2fa7c14bfa1d) {#interface_m_p_transit_vehicle_1ac3072105df71c4e2f5be2fa7c14bfa1d}

##### `{property} NSString< Optional > * `[`icon`](#interface_m_p_transit_vehicle_1ae665cd2279a37880669a7b08bbf97626) {#interface_m_p_transit_vehicle_1ae665cd2279a37880669a7b08bbf97626}

##### `{property} NSString< Optional > * `[`local_icon`](#interface_m_p_transit_vehicle_1ac0ae58ff89df36a2a80957da4d8a1842) {#interface_m_p_transit_vehicle_1ac0ae58ff89df36a2a80957da4d8a1842}

## class `MPType` {#interface_m_p_type}

```
class MPType
  : public MPJSONModel
```  

POI types (used by MapsPeoples services)

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSString * `[`name`](#interface_m_p_type_1aef1b01e97c4bd78d4f30d533aa288a28) | 
`{property} NSString * `[`icon`](#interface_m_p_type_1a0e55d333c0066a5a2bde2f8001a14a62) | 
`{property} `[`MPLocationDisplayRule`](#interface_m_p_location_display_rule)`< Optional > * `[`displayRule`](#interface_m_p_type_1a198a2f531b39226d61bfa6dabbbd9f31) | 

### Members

##### `{property} NSString * `[`name`](#interface_m_p_type_1aef1b01e97c4bd78d4f30d533aa288a28) {#interface_m_p_type_1aef1b01e97c4bd78d4f30d533aa288a28}

##### `{property} NSString * `[`icon`](#interface_m_p_type_1a0e55d333c0066a5a2bde2f8001a14a62) {#interface_m_p_type_1a0e55d333c0066a5a2bde2f8001a14a62}

##### `{property} `[`MPLocationDisplayRule`](#interface_m_p_location_display_rule)`< Optional > * `[`displayRule`](#interface_m_p_type_1a198a2f531b39226d61bfa6dabbbd9f31) {#interface_m_p_type_1a198a2f531b39226d61bfa6dabbbd9f31}

## class `MPURITemplate` {#interface_m_p_u_r_i_template}

```
class MPURITemplate
  : public NSObject
```  

Generates an url based on an URI template. Template string must have format "prefix{param_1}infix{param_N}suffix", e.g.: "http://tiles.url.com/{floor}/{x}/{y}/{zoom}.png"

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSString * `[`templateURI`](#interface_m_p_u_r_i_template_1a1719b174afbda9861330cd772d76a9ec) | Template string property. Must have format "prefix{param_1}infix{param_N}suffix", e.g.: "http://tiles.url.com/{floor}/{x}/{y}/{zoom}.png"
`{property} NSString * `[`resultURI`](#interface_m_p_u_r_i_template_1a8f7457132404117311b047920acd6d3a) | Get the resulting url string
`public virtual id `[`initWithTemplateString:`](#interface_m_p_u_r_i_template_1a101beb4df43259fcf20471b1cad2b3ff)`(NSString * url)` | Initialization with template string. Must have format "prefix{param_1}infix{param_N}suffix", e.g.: "http://tiles.url.com/{floor}/{x}/{y}/{zoom}.png"
`public virtual void `[`addParam:value:`](#interface_m_p_u_r_i_template_1af700977fc0ef38982564331b4926c2ad)`(NSString * name,NSString * value)` | Find the parameter placeholder {name} with given name and replace with given string value
`public virtual void `[`addIntParam:value:`](#interface_m_p_u_r_i_template_1a6c80bc26a12e716d6a96e25da82b991a)`(NSString * name,int value)` | Find the parameter placeholder {name} with given name and replace with given int value
`public virtual void `[`resetParams`](#interface_m_p_u_r_i_template_1acf6523942bb6f4dca3605aac44066455)`()` | Reset the url parameters.

### Members

##### `{property} NSString * `[`templateURI`](#interface_m_p_u_r_i_template_1a1719b174afbda9861330cd772d76a9ec) {#interface_m_p_u_r_i_template_1a1719b174afbda9861330cd772d76a9ec}

Template string property. Must have format "prefix{param_1}infix{param_N}suffix", e.g.: "http://tiles.url.com/{floor}/{x}/{y}/{zoom}.png"

##### `{property} NSString * `[`resultURI`](#interface_m_p_u_r_i_template_1a8f7457132404117311b047920acd6d3a) {#interface_m_p_u_r_i_template_1a8f7457132404117311b047920acd6d3a}

Get the resulting url string

##### `public virtual id `[`initWithTemplateString:`](#interface_m_p_u_r_i_template_1a101beb4df43259fcf20471b1cad2b3ff)`(NSString * url)` {#interface_m_p_u_r_i_template_1a101beb4df43259fcf20471b1cad2b3ff}

Initialization with template string. Must have format "prefix{param_1}infix{param_N}suffix", e.g.: "http://tiles.url.com/{floor}/{x}/{y}/{zoom}.png"

##### `public virtual void `[`addParam:value:`](#interface_m_p_u_r_i_template_1af700977fc0ef38982564331b4926c2ad)`(NSString * name,NSString * value)` {#interface_m_p_u_r_i_template_1af700977fc0ef38982564331b4926c2ad}

Find the parameter placeholder {name} with given name and replace with given string value

##### `public virtual void `[`addIntParam:value:`](#interface_m_p_u_r_i_template_1a6c80bc26a12e716d6a96e25da82b991a)`(NSString * name,int value)` {#interface_m_p_u_r_i_template_1a6c80bc26a12e716d6a96e25da82b991a}

Find the parameter placeholder {name} with given name and replace with given int value

##### `public virtual void `[`resetParams`](#interface_m_p_u_r_i_template_1acf6523942bb6f4dca3605aac44066455)`()` {#interface_m_p_u_r_i_template_1acf6523942bb6f4dca3605aac44066455}

Reset the url parameters.

## class `MPVector` {#interface_m_p_vector}

```
class MPVector
  : public MPGeometry
```  

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

### Members

## class `MPVenue` {#interface_m_p_venue}

```
class MPVenue
  : public MPJSONModel
```  

The venue model holds data about the buildings and floors in a venue, plus additional meta-data.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSString< Optional > * `[`solutionId`](#interface_m_p_venue_1a986da8c89e4e3d4344772a451f06b3a2) | Solution id
`{property} NSString * `[`venueId`](#interface_m_p_venue_1ad6eef03b5a8dd6867214706eb42bfaec) | Venue id
`{property} NSNumber< Optional > * `[`defaultFloor`](#interface_m_p_venue_1abd7aba3abd6292f66e274ae108d523b2) | Venue default floor
`{property} NSString * `[`tilesUrl`](#interface_m_p_venue_1ab878aee353b14dc57c9966ddd722fe43) | The general url template to be used when creating floor layers for this venue. If used by this framework, the url string must have format "prefix{param_1}infix{param_N}suffix", e.g.: "http://tiles.url.com/{floor}/{x}/{y}/{zoom}.png". See also [MPURITemplate](#interface_m_p_u_r_i_template).
`{property} NSArray< `[`MPBuilding](#interface_m_p_building) * >< [MPBuilding`](#interface_m_p_building)`, Optional > * `[`buildings`](#interface_m_p_venue_1aeca264f8fd019ace7aa9109c9d2f95c3) | Array of buildings in this venue.
`{property} `[`MPPoint`](#interface_m_p_point)`< Optional > * `[`anchor`](#interface_m_p_venue_1a517c1cdef5e9d240ab0a265a78a1938a) | Venue anchor point.
`{property} NSArray< Optional > * `[`bbox`](#interface_m_p_venue_1aa68202a40df14df73aafd1cab41361bf) | Geographic BBox array [w,s,e,n] for this venue.
`{property} NSArray< NSArray * > * `[`bounds`](#interface_m_p_venue_1a26858d56dabe7b1f076ae51e23253d23) | Geographic bounds array [[lng,lat],[lng,lat],...] for this venue.
`{property} NSArray< `[`MPPoint](#interface_m_p_point) * >< Optional, [MPPoint`](#interface_m_p_point)` > * `[`entryPoints`](#interface_m_p_venue_1ad6dfa669c76db393632c709e5f1770f0) | Array of entry points in this venue.
`{property} NSString< Optional > * `[`graphId`](#interface_m_p_venue_1abc35e41329a1b9eda1ba625b2363d1c7) | Route network/graph identifier for the given venue.
`{property} NSString< Optional > * `[`venueKey`](#interface_m_p_venue_1a05a17a66fc775f961033e79359adad46) | Venue key.
`{property} NSString< Optional > * `[`name`](#interface_m_p_venue_1a8aced3e7654929fa690b0da079d71088) | Venue name.
`{property} NSArray< `[`MPMapStyle](#interface_m_p_map_style) * >< [MPMapStyle`](#interface_m_p_map_style)` > * `[`styles`](#interface_m_p_venue_1aa297dcb321b25123429e627dda3628a7) | Array of possible map styles.
`public virtual `[`MPMapStyle`](#interface_m_p_map_style)` * `[`getDefaultStyle`](#interface_m_p_venue_1af7c5adb1f64dd722ac4c521e541cb768)`()` | Get a default style. If none is set, it will be the first string value in the list of map styles
`public virtual GMSCoordinateBounds * `[`getBoundingBox`](#interface_m_p_venue_1a94a027fcf9e1e1375ff58e9bf14bfe85)`()` | Get the geographic bounding box for the venue
`public virtual "Use `[`getBoundingBox`](#interface_m_p_venue_1a94a027fcf9e1e1375ff58e9bf14bfe85)`" `[`DEPRECATED_MSG_ATTRIBUTE`](#interface_m_p_venue_1a384764528829286edf025b8ea4f6be87)`()` | Get the geographic bounds for the venue

### Members

##### `{property} NSString< Optional > * `[`solutionId`](#interface_m_p_venue_1a986da8c89e4e3d4344772a451f06b3a2) {#interface_m_p_venue_1a986da8c89e4e3d4344772a451f06b3a2}

Solution id

##### `{property} NSString * `[`venueId`](#interface_m_p_venue_1ad6eef03b5a8dd6867214706eb42bfaec) {#interface_m_p_venue_1ad6eef03b5a8dd6867214706eb42bfaec}

Venue id

##### `{property} NSNumber< Optional > * `[`defaultFloor`](#interface_m_p_venue_1abd7aba3abd6292f66e274ae108d523b2) {#interface_m_p_venue_1abd7aba3abd6292f66e274ae108d523b2}

Venue default floor

##### `{property} NSString * `[`tilesUrl`](#interface_m_p_venue_1ab878aee353b14dc57c9966ddd722fe43) {#interface_m_p_venue_1ab878aee353b14dc57c9966ddd722fe43}

The general url template to be used when creating floor layers for this venue. If used by this framework, the url string must have format "prefix{param_1}infix{param_N}suffix", e.g.: "http://tiles.url.com/{floor}/{x}/{y}/{zoom}.png". See also [MPURITemplate](#interface_m_p_u_r_i_template).

##### `{property} NSArray< `[`MPBuilding](#interface_m_p_building) * >< [MPBuilding`](#interface_m_p_building)`, Optional > * `[`buildings`](#interface_m_p_venue_1aeca264f8fd019ace7aa9109c9d2f95c3) {#interface_m_p_venue_1aeca264f8fd019ace7aa9109c9d2f95c3}

Array of buildings in this venue.

##### `{property} `[`MPPoint`](#interface_m_p_point)`< Optional > * `[`anchor`](#interface_m_p_venue_1a517c1cdef5e9d240ab0a265a78a1938a) {#interface_m_p_venue_1a517c1cdef5e9d240ab0a265a78a1938a}

Venue anchor point.

##### `{property} NSArray< Optional > * `[`bbox`](#interface_m_p_venue_1aa68202a40df14df73aafd1cab41361bf) {#interface_m_p_venue_1aa68202a40df14df73aafd1cab41361bf}

Geographic BBox array [w,s,e,n] for this venue.

##### `{property} NSArray< NSArray * > * `[`bounds`](#interface_m_p_venue_1a26858d56dabe7b1f076ae51e23253d23) {#interface_m_p_venue_1a26858d56dabe7b1f076ae51e23253d23}

Geographic bounds array [[lng,lat],[lng,lat],...] for this venue.

##### `{property} NSArray< `[`MPPoint](#interface_m_p_point) * >< Optional, [MPPoint`](#interface_m_p_point)` > * `[`entryPoints`](#interface_m_p_venue_1ad6dfa669c76db393632c709e5f1770f0) {#interface_m_p_venue_1ad6dfa669c76db393632c709e5f1770f0}

Array of entry points in this venue.

##### `{property} NSString< Optional > * `[`graphId`](#interface_m_p_venue_1abc35e41329a1b9eda1ba625b2363d1c7) {#interface_m_p_venue_1abc35e41329a1b9eda1ba625b2363d1c7}

Route network/graph identifier for the given venue.

##### `{property} NSString< Optional > * `[`venueKey`](#interface_m_p_venue_1a05a17a66fc775f961033e79359adad46) {#interface_m_p_venue_1a05a17a66fc775f961033e79359adad46}

Venue key.

##### `{property} NSString< Optional > * `[`name`](#interface_m_p_venue_1a8aced3e7654929fa690b0da079d71088) {#interface_m_p_venue_1a8aced3e7654929fa690b0da079d71088}

Venue name.

##### `{property} NSArray< `[`MPMapStyle](#interface_m_p_map_style) * >< [MPMapStyle`](#interface_m_p_map_style)` > * `[`styles`](#interface_m_p_venue_1aa297dcb321b25123429e627dda3628a7) {#interface_m_p_venue_1aa297dcb321b25123429e627dda3628a7}

Array of possible map styles.

##### `public virtual `[`MPMapStyle`](#interface_m_p_map_style)` * `[`getDefaultStyle`](#interface_m_p_venue_1af7c5adb1f64dd722ac4c521e541cb768)`()` {#interface_m_p_venue_1af7c5adb1f64dd722ac4c521e541cb768}

Get a default style. If none is set, it will be the first string value in the list of map styles

##### `public virtual GMSCoordinateBounds * `[`getBoundingBox`](#interface_m_p_venue_1a94a027fcf9e1e1375ff58e9bf14bfe85)`()` {#interface_m_p_venue_1a94a027fcf9e1e1375ff58e9bf14bfe85}

Get the geographic bounding box for the venue

##### `public virtual "Use `[`getBoundingBox`](#interface_m_p_venue_1a94a027fcf9e1e1375ff58e9bf14bfe85)`" `[`DEPRECATED_MSG_ATTRIBUTE`](#interface_m_p_venue_1a384764528829286edf025b8ea4f6be87)`()` {#interface_m_p_venue_1a384764528829286edf025b8ea4f6be87}

Get the geographic bounds for the venue

## class `MPVenueCollection` {#interface_m_p_venue_collection}

```
class MPVenueCollection
  : public MPJSONModel
```  

Venue collection model, just holds an array.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} NSArray< `[`MPVenue`](#interface_m_p_venue)` > * `[`venues`](#interface_m_p_venue_collection_1a43408625d9b12ff7cd764af2adb6726f) | The array of venues in this collection.
`public virtual `[`MPBuilding`](#interface_m_p_building)` * `[`getBuilding:`](#interface_m_p_venue_collection_1a05925a6ccb6cc56a1dda9cb793330ce2)`(NSString * buildingId)` | 
`public virtual `[`MPVenue`](#interface_m_p_venue)` * `[`getNearestVenue:withinRadius:`](#interface_m_p_venue_collection_1a86d683f64288f47424fb3063a8d77f88)`(`[`MPPoint`](#interface_m_p_point)` * geometry,int meterRadius)` | 

### Members

##### `{property} NSArray< `[`MPVenue`](#interface_m_p_venue)` > * `[`venues`](#interface_m_p_venue_collection_1a43408625d9b12ff7cd764af2adb6726f) {#interface_m_p_venue_collection_1a43408625d9b12ff7cd764af2adb6726f}

The array of venues in this collection.

##### `public virtual `[`MPBuilding`](#interface_m_p_building)` * `[`getBuilding:`](#interface_m_p_venue_collection_1a05925a6ccb6cc56a1dda9cb793330ce2)`(NSString * buildingId)` {#interface_m_p_venue_collection_1a05925a6ccb6cc56a1dda9cb793330ce2}

##### `public virtual `[`MPVenue`](#interface_m_p_venue)` * `[`getNearestVenue:withinRadius:`](#interface_m_p_venue_collection_1a86d683f64288f47424fb3063a8d77f88)`(`[`MPPoint`](#interface_m_p_point)` * geometry,int meterRadius)` {#interface_m_p_venue_collection_1a86d683f64288f47424fb3063a8d77f88}

## class `MPVenueProvider` {#interface_m_p_venue_provider}

```
class MPVenueProvider
  : public NSObject
```  

Venue provider interface, that defines a delegate and a method for venue queries.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} id< MPVenueProviderDelegate > `[`delegate`](#interface_m_p_venue_provider_1ad9031ee3ebc4a9cc10bc8c3eef0c0273) | Venue provider delegate.
`public virtual void `[`getVenuesAsync:language:`](#interface_m_p_venue_provider_1a57630ebfb0e9a1525cfc2b91fd8ded9b)`(NSString * arg,"Use `[`getVenues`](#interface_m_p_venue_provider_1a6f74879273c1f386cb7b5fe821ed4c6d)` instead" MP_DEPRECATED_MSG_ATTRIBUTE)` | Get venues from this provider
`public virtual void `[`getBuildingWithinBoundsAsync:arg:language:`](#interface_m_p_venue_provider_1ae1ff19737ec38f8d8c4d1574431bbbdd)`(MPMapExtend * mapExtend,NSString * solutionId,"Use `[`getBuildingWithinBounds:`](#interface_m_p_venue_provider_1a238f58cbb48aab4fe248e915a3c02406)` instead" MP_DEPRECATED_MSG_ATTRIBUTE)` | Get a single building within given bounds
`public virtual void `[`getBuildingsAsync:arg:language:`](#interface_m_p_venue_provider_1a0377942d9bb5abc17810e21fa97f8b95)`(NSString * venue,NSString * solutionId,"Use getBuildingsAsync instead" MP_DEPRECATED_MSG_ATTRIBUTE)` | Get buildings from this provider
`public virtual void `[`getBuildingDetailsAsync:arg:language:`](#interface_m_p_venue_provider_1a3cacb33589e129ce217ef0e70fc4923f)`(NSString * buildingId,NSString * solutionId,"Use `[`getBuildingWithId:`](#interface_m_p_venue_provider_1a5324f04b79c3498608bd190a5d4317e7)` instead" MP_DEPRECATED_MSG_ATTRIBUTE)` | Get a single building detail object
`public virtual void `[`getVenueDetailsAsync:arg:language:`](#interface_m_p_venue_provider_1ac52141d4cd41d9b1280b74ee099e5e8b)`(NSString * venueId,NSString * solutionId,"Use `[`getVenueWithId:`](#interface_m_p_venue_provider_1a653c43137fced064a38cf81e28ae4bfa)` instead" MP_DEPRECATED_MSG_ATTRIBUTE)` | Get a single venue detail object
`public virtual void `[`getVenuesAsync:language:completionHandler:`](#interface_m_p_venue_provider_1a80dd351319382e4d9f00761dd87ba186)`(NSString * arg,NSString * language,"Use `[`getVenuesWithCompletion:`](#interface_m_p_venue_provider_1a7c4671f492e312507989d02c317d990f)` instead" MP_DEPRECATED_MSG_ATTRIBUTE)` | Get all venues from this provider
`public virtual void `[`getBuildingWithinBoundsAsync:arg:language:completionHandler:`](#interface_m_p_venue_provider_1ab457b63112bdf320f9e900dda716e8a0)`(MPMapExtend * mapExtend,NSString * solutionId,NSString * language,"Use `[`getBuildingWithinBounds:completionHandler:`](#interface_m_p_venue_provider_1aff9c5120b6967ccfe433fdc86c0f763a)` instead" MP_DEPRECATED_MSG_ATTRIBUTE)` | Get a single building within given bounds
`public virtual void `[`getBuildingsAsync:arg:language:completionHandler:`](#interface_m_p_venue_provider_1a5534a8c3dc6046f14f5821a366c16091)`(NSString * venue,NSString * solutionId,NSString * language,"Use `[`getBuildingsWithCompletion:`](#interface_m_p_venue_provider_1ade2bb53ba541d073cac53c09b6874ea0)` instead" MP_DEPRECATED_MSG_ATTRIBUTE)` | Get buildings from this provider
`public virtual void `[`getBuildingDetailsAsync:arg:language:completionHandler:`](#interface_m_p_venue_provider_1aebde09c608165fee9e1543c5ef3856ee)`(NSString * buildingId,NSString * solutionId,NSString * language,"Use `[`getBuildingWithId:completionHandler:`](#interface_m_p_venue_provider_1a9f666fe1794f2b771d41d5fe3ef1864e)` instead" MP_DEPRECATED_MSG_ATTRIBUTE)` | Get single building detail object
`public virtual void `[`getVenueDetailsAsync:arg:language:completionHandler:`](#interface_m_p_venue_provider_1ae52aa956e9b0622d5818d40b348e5e28)`(NSString * venueId,NSString * solutionId,NSString * language,"Use `[`getVenueWithId:completionHandler:`](#interface_m_p_venue_provider_1a2716a5d996b878bbcc8ef91a964dc819)` instead" MP_DEPRECATED_MSG_ATTRIBUTE)` | Get single venue details object
`public virtual void `[`getDataFromPointAsync:solutionId:language:completionHandler:`](#interface_m_p_venue_provider_1a2056d35cb7efbcd6681bbf6ba95f7810)`(`[`MPPoint`](#interface_m_p_point)` * point,NSString * solutionId,NSString * language,"Use `[`getDataFromPoint:completionHandler:`](#interface_m_p_venue_provider_1abb11090088c4e0d45991a6db47167d0b)` instead" MP_DEPRECATED_MSG_ATTRIBUTE)` | Get all possible data related to the provided geographical point. Callback arguments will be nullable venue, building and floor objects.
`public virtual void `[`getVenues`](#interface_m_p_venue_provider_1a6f74879273c1f386cb7b5fe821ed4c6d)`()` | V2 Methods 
`public virtual void `[`getBuildingWithinBounds:`](#interface_m_p_venue_provider_1a238f58cbb48aab4fe248e915a3c02406)`(MPMapExtend * mapExtend)` | Get a single building within given bounds
`public virtual void `[`getBuildings`](#interface_m_p_venue_provider_1a6706267f367c8d752b90b17973facfc5)`()` | Get buildings from this provider
`public virtual void `[`getBuildingWithId:`](#interface_m_p_venue_provider_1a5324f04b79c3498608bd190a5d4317e7)`(NSString * buildingId)` | Get a single building detail object
`public virtual void `[`getVenueWithId:`](#interface_m_p_venue_provider_1a653c43137fced064a38cf81e28ae4bfa)`(NSString * venueId)` | Get a single venue detail object
`public virtual void `[`getVenuesWithCompletion:`](#interface_m_p_venue_provider_1a7c4671f492e312507989d02c317d990f)`(mpVenueListHandlerBlockType handler)` | Get all venues from this provider
`public virtual void `[`getBuildingWithinBounds:completionHandler:`](#interface_m_p_venue_provider_1aff9c5120b6967ccfe433fdc86c0f763a)`(MPMapExtend * mapExtend,mpBuildingDetailsHandlerBlockType handler)` | Get a single building within given bounds
`public virtual void `[`getBuildingsWithCompletion:`](#interface_m_p_venue_provider_1ade2bb53ba541d073cac53c09b6874ea0)`(mpBuildingListHandlerBlockType handler)` | Get buildings from this provider
`public virtual void `[`getBuildingWithId:completionHandler:`](#interface_m_p_venue_provider_1a9f666fe1794f2b771d41d5fe3ef1864e)`(NSString * buildingId,mpBuildingDetailsHandlerBlockType handler)` | Get single building detail object
`public virtual void `[`getVenueWithId:completionHandler:`](#interface_m_p_venue_provider_1a2716a5d996b878bbcc8ef91a964dc819)`(NSString * venueId,mpVenueDetailsHandlerBlockType handler)` | Get single venue details object
`public virtual void `[`getDataFromPoint:completionHandler:`](#interface_m_p_venue_provider_1abb11090088c4e0d45991a6db47167d0b)`(`[`MPPoint`](#interface_m_p_point)` * point,mpGeocodeHandlerBlockType completionHandler)` | Get all possible data related to the provided geographical point. Callback arguments will be nullable venue, building and floor objects.

### Members

##### `{property} id< MPVenueProviderDelegate > `[`delegate`](#interface_m_p_venue_provider_1ad9031ee3ebc4a9cc10bc8c3eef0c0273) {#interface_m_p_venue_provider_1ad9031ee3ebc4a9cc10bc8c3eef0c0273}

Venue provider delegate.

##### `public virtual void `[`getVenuesAsync:language:`](#interface_m_p_venue_provider_1a57630ebfb0e9a1525cfc2b91fd8ded9b)`(NSString * arg,"Use `[`getVenues`](#interface_m_p_venue_provider_1a6f74879273c1f386cb7b5fe821ed4c6d)` instead" MP_DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_venue_provider_1a57630ebfb0e9a1525cfc2b91fd8ded9b}

Get venues from this provider

##### Parameters
* `arg` Solution id 

* `language` Language specified with 2-letters (ISO 639-1)

##### `public virtual void `[`getBuildingWithinBoundsAsync:arg:language:`](#interface_m_p_venue_provider_1ae1ff19737ec38f8d8c4d1574431bbbdd)`(MPMapExtend * mapExtend,NSString * solutionId,"Use `[`getBuildingWithinBounds:`](#interface_m_p_venue_provider_1a238f58cbb48aab4fe248e915a3c02406)` instead" MP_DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_venue_provider_1ae1ff19737ec38f8d8c4d1574431bbbdd}

Get a single building within given bounds

##### Parameters
* `mapExtend` The geographic bounds, defined by north, south, west and east 

* `solutionId` Solution id 

* `language` Language specified with 2-letters (ISO 639-1)

##### `public virtual void `[`getBuildingsAsync:arg:language:`](#interface_m_p_venue_provider_1a0377942d9bb5abc17810e21fa97f8b95)`(NSString * venue,NSString * solutionId,"Use getBuildingsAsync instead" MP_DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_venue_provider_1a0377942d9bb5abc17810e21fa97f8b95}

Get buildings from this provider

##### Parameters
* `venue` Venue key as set in [MPVenue.venueKey](#interface_m_p_venue_1a05a17a66fc775f961033e79359adad46)

* `solutionId` Solution id 

* `language` Language specified with 2-letters (ISO 639-1)

##### `public virtual void `[`getBuildingDetailsAsync:arg:language:`](#interface_m_p_venue_provider_1a3cacb33589e129ce217ef0e70fc4923f)`(NSString * buildingId,NSString * solutionId,"Use `[`getBuildingWithId:`](#interface_m_p_venue_provider_1a5324f04b79c3498608bd190a5d4317e7)` instead" MP_DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_venue_provider_1a3cacb33589e129ce217ef0e70fc4923f}

Get a single building detail object

##### Parameters
* `buildingId` Building id 

* `solutionId` Solution id 

* `language` Language specified with 2-letters (ISO 639-1)

##### `public virtual void `[`getVenueDetailsAsync:arg:language:`](#interface_m_p_venue_provider_1ac52141d4cd41d9b1280b74ee099e5e8b)`(NSString * venueId,NSString * solutionId,"Use `[`getVenueWithId:`](#interface_m_p_venue_provider_1a653c43137fced064a38cf81e28ae4bfa)` instead" MP_DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_venue_provider_1ac52141d4cd41d9b1280b74ee099e5e8b}

Get a single venue detail object

##### Parameters
* `venueId` Venue id 

* `solutionId` Solution id 

* `language` Language specified with 2-letters (ISO 639-1)

##### `public virtual void `[`getVenuesAsync:language:completionHandler:`](#interface_m_p_venue_provider_1a80dd351319382e4d9f00761dd87ba186)`(NSString * arg,NSString * language,"Use `[`getVenuesWithCompletion:`](#interface_m_p_venue_provider_1a7c4671f492e312507989d02c317d990f)` instead" MP_DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_venue_provider_1a80dd351319382e4d9f00761dd87ba186}

Get all venues from this provider

##### Parameters
* `arg` Solution id 

* `language` Language specified with 2-letters (ISO 639-1) 

* `handler` Venue fetch callback block

##### `public virtual void `[`getBuildingWithinBoundsAsync:arg:language:completionHandler:`](#interface_m_p_venue_provider_1ab457b63112bdf320f9e900dda716e8a0)`(MPMapExtend * mapExtend,NSString * solutionId,NSString * language,"Use `[`getBuildingWithinBounds:completionHandler:`](#interface_m_p_venue_provider_1aff9c5120b6967ccfe433fdc86c0f763a)` instead" MP_DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_venue_provider_1ab457b63112bdf320f9e900dda716e8a0}

Get a single building within given bounds

##### Parameters
* `mapExtend` The geographic bounds, defined by north, south, west and east 

* `solutionId` Solution id 

* `language` Language specified with 2-letters (ISO 639-1) 

* `handler` Building fetch callback block

##### `public virtual void `[`getBuildingsAsync:arg:language:completionHandler:`](#interface_m_p_venue_provider_1a5534a8c3dc6046f14f5821a366c16091)`(NSString * venue,NSString * solutionId,NSString * language,"Use `[`getBuildingsWithCompletion:`](#interface_m_p_venue_provider_1ade2bb53ba541d073cac53c09b6874ea0)` instead" MP_DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_venue_provider_1a5534a8c3dc6046f14f5821a366c16091}

Get buildings from this provider

##### Parameters
* `venue` Venue key as set in [MPVenue.venueKey](#interface_m_p_venue_1a05a17a66fc775f961033e79359adad46)

* `solutionId` Solution id 

* `language` Language specified with 2-letters (ISO 639-1) 

* `handler` Buildings fetch callback block

##### `public virtual void `[`getBuildingDetailsAsync:arg:language:completionHandler:`](#interface_m_p_venue_provider_1aebde09c608165fee9e1543c5ef3856ee)`(NSString * buildingId,NSString * solutionId,NSString * language,"Use `[`getBuildingWithId:completionHandler:`](#interface_m_p_venue_provider_1a9f666fe1794f2b771d41d5fe3ef1864e)` instead" MP_DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_venue_provider_1aebde09c608165fee9e1543c5ef3856ee}

Get single building detail object

##### Parameters
* `buildingId` Building id 

* `solutionId` Solution id 

* `language` Language specified with 2-letters (ISO 639-1) 

* `handler` Building details fetch callback block

##### `public virtual void `[`getVenueDetailsAsync:arg:language:completionHandler:`](#interface_m_p_venue_provider_1ae52aa956e9b0622d5818d40b348e5e28)`(NSString * venueId,NSString * solutionId,NSString * language,"Use `[`getVenueWithId:completionHandler:`](#interface_m_p_venue_provider_1a2716a5d996b878bbcc8ef91a964dc819)` instead" MP_DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_venue_provider_1ae52aa956e9b0622d5818d40b348e5e28}

Get single venue details object

##### Parameters
* `venueId` Venue id 

* `solutionId` Solution id 

* `language` Language specified with 2-letters (ISO 639-1) 

* `handler` Venue details fetch callback block

##### `public virtual void `[`getDataFromPointAsync:solutionId:language:completionHandler:`](#interface_m_p_venue_provider_1a2056d35cb7efbcd6681bbf6ba95f7810)`(`[`MPPoint`](#interface_m_p_point)` * point,NSString * solutionId,NSString * language,"Use `[`getDataFromPoint:completionHandler:`](#interface_m_p_venue_provider_1abb11090088c4e0d45991a6db47167d0b)` instead" MP_DEPRECATED_MSG_ATTRIBUTE)` {#interface_m_p_venue_provider_1a2056d35cb7efbcd6681bbf6ba95f7810}

Get all possible data related to the provided geographical point. Callback arguments will be nullable venue, building and floor objects.

##### Parameters
* `point` Geographic point 

* `solutionId` Solution id 

* `language` Language specified with 2-letters (ISO 639-1) 

* `completionHandler` Data fetch callback block. Arguments will be nullable venue, building and floor objects.

##### `public virtual void `[`getVenues`](#interface_m_p_venue_provider_1a6f74879273c1f386cb7b5fe821ed4c6d)`()` {#interface_m_p_venue_provider_1a6f74879273c1f386cb7b5fe821ed4c6d}

V2 Methods 
Get venues from this provider

##### `public virtual void `[`getBuildingWithinBounds:`](#interface_m_p_venue_provider_1a238f58cbb48aab4fe248e915a3c02406)`(MPMapExtend * mapExtend)` {#interface_m_p_venue_provider_1a238f58cbb48aab4fe248e915a3c02406}

Get a single building within given bounds

##### Parameters
* `mapExtend` The geographic bounds, defined by north, south, west and east

##### `public virtual void `[`getBuildings`](#interface_m_p_venue_provider_1a6706267f367c8d752b90b17973facfc5)`()` {#interface_m_p_venue_provider_1a6706267f367c8d752b90b17973facfc5}

Get buildings from this provider

##### `public virtual void `[`getBuildingWithId:`](#interface_m_p_venue_provider_1a5324f04b79c3498608bd190a5d4317e7)`(NSString * buildingId)` {#interface_m_p_venue_provider_1a5324f04b79c3498608bd190a5d4317e7}

Get a single building detail object

##### Parameters
* `buildingId` Building id

##### `public virtual void `[`getVenueWithId:`](#interface_m_p_venue_provider_1a653c43137fced064a38cf81e28ae4bfa)`(NSString * venueId)` {#interface_m_p_venue_provider_1a653c43137fced064a38cf81e28ae4bfa}

Get a single venue detail object

##### Parameters
* `venueId` Venue id

##### `public virtual void `[`getVenuesWithCompletion:`](#interface_m_p_venue_provider_1a7c4671f492e312507989d02c317d990f)`(mpVenueListHandlerBlockType handler)` {#interface_m_p_venue_provider_1a7c4671f492e312507989d02c317d990f}

Get all venues from this provider

##### Parameters
* `handler` Venue fetch callback block

##### `public virtual void `[`getBuildingWithinBounds:completionHandler:`](#interface_m_p_venue_provider_1aff9c5120b6967ccfe433fdc86c0f763a)`(MPMapExtend * mapExtend,mpBuildingDetailsHandlerBlockType handler)` {#interface_m_p_venue_provider_1aff9c5120b6967ccfe433fdc86c0f763a}

Get a single building within given bounds

##### Parameters
* `mapExtend` The geographic bounds, defined by north, south, west and east 

* `handler` Building fetch callback block

##### `public virtual void `[`getBuildingsWithCompletion:`](#interface_m_p_venue_provider_1ade2bb53ba541d073cac53c09b6874ea0)`(mpBuildingListHandlerBlockType handler)` {#interface_m_p_venue_provider_1ade2bb53ba541d073cac53c09b6874ea0}

Get buildings from this provider

##### Parameters
* `handler` Buildings fetch callback block

##### `public virtual void `[`getBuildingWithId:completionHandler:`](#interface_m_p_venue_provider_1a9f666fe1794f2b771d41d5fe3ef1864e)`(NSString * buildingId,mpBuildingDetailsHandlerBlockType handler)` {#interface_m_p_venue_provider_1a9f666fe1794f2b771d41d5fe3ef1864e}

Get single building detail object

##### Parameters
* `buildingId` Building id 

* `handler` Building details fetch callback block

##### `public virtual void `[`getVenueWithId:completionHandler:`](#interface_m_p_venue_provider_1a2716a5d996b878bbcc8ef91a964dc819)`(NSString * venueId,mpVenueDetailsHandlerBlockType handler)` {#interface_m_p_venue_provider_1a2716a5d996b878bbcc8ef91a964dc819}

Get single venue details object

##### Parameters
* `venueId` Venue id 

* `handler` Venue details fetch callback block

##### `public virtual void `[`getDataFromPoint:completionHandler:`](#interface_m_p_venue_provider_1abb11090088c4e0d45991a6db47167d0b)`(`[`MPPoint`](#interface_m_p_point)` * point,mpGeocodeHandlerBlockType completionHandler)` {#interface_m_p_venue_provider_1abb11090088c4e0d45991a6db47167d0b}

Get all possible data related to the provided geographical point. Callback arguments will be nullable venue, building and floor objects.

##### Parameters
* `point` Geographic point 

* `completionHandler` Data fetch callback block. Arguments will be nullable venue, building and floor objects.

## struct `MPLocationCoordinate3D` {#struct_m_p_location_coordinate3_d}

A structure that contains a coordinate in 3D space: latitude/longitude and floor.

Fields: latLng: The geographical location (latitude/longitude( in degrees. floorId: The id of the floor. Additional information about the floor can be found in the solution/building data.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`protected CLLocationCoordinate2D `[`latLng`](#struct_m_p_location_coordinate3_d_1a4577b29fec3cbe90422b87596ce0b08f) | 
`protected NSInteger `[`floorId`](#struct_m_p_location_coordinate3_d_1a088ffc8ccc109f9e6d5c08d37703fe88) | 

### Members

##### `protected CLLocationCoordinate2D `[`latLng`](#struct_m_p_location_coordinate3_d_1a4577b29fec3cbe90422b87596ce0b08f) {#struct_m_p_location_coordinate3_d_1a4577b29fec3cbe90422b87596ce0b08f}

##### `protected NSInteger `[`floorId`](#struct_m_p_location_coordinate3_d_1a088ffc8ccc109f9e6d5c08d37703fe88) {#struct_m_p_location_coordinate3_d_1a088ffc8ccc109f9e6d5c08d37703fe88}

## struct `MPRouteSegmentPath` {#struct_m_p_route_segment_path}

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`protected NSInteger `[`legIndex`](#struct_m_p_route_segment_path_1a603d5381fceb35d358b5d12211d5026d) | 
`protected NSInteger `[`stepIndex`](#struct_m_p_route_segment_path_1a1b921a9a7f8835dcf9c9cb1b6a860005) | 

### Members

##### `protected NSInteger `[`legIndex`](#struct_m_p_route_segment_path_1a603d5381fceb35d358b5d12211d5026d) {#struct_m_p_route_segment_path_1a603d5381fceb35d358b5d12211d5026d}

##### `protected NSInteger `[`stepIndex`](#struct_m_p_route_segment_path_1a1b921a9a7f8835dcf9c9cb1b6a860005) {#struct_m_p_route_segment_path_1a1b921a9a7f8835dcf9c9cb1b6a860005}

Generated by [Moxygen](https://sourcey.com/moxygen)
