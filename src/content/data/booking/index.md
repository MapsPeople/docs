---
title: Booking
eleventyNavigation:
  parent: data
  key: data-booking
  title: Booking
  order: 10
---

<mi-tabs>
<mi-tab label="Android - Java" tab-for="java"></mi-tab>
<mi-tab label="Android - Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab label="iOS" tab-for="ios"></mi-tab>
<mi-tab label="Web" tab-for="web"></mi-tab>
<mi-tab-panel id="java">

This guide covers the different aspects of _Booking_ in the MapsIndoors Android SDK. The concept of booking in MapsIndoors implies that specific Locations in your MapsIndoors dataset is treated as Bookable resources. Typical bookable resources could be meeting rooms and workspaces.

A MapsIndoors dataset can only have bookable resources if an integration with a booking provider exists. Current examples of booking providers are _Google Calendar_ and _Microsoft Office 365_. These providers and more can be added and integrated to your MapsIndoors project by request.

The central service in the SDK managing bookings is the Booking Service, `MPBookingService`.

```java
MPBookingservice bookingService = MPBookingService.getInstance();
```

The Booking Service can help with the following tasks:

- [Bookable Locations](#bookable-locations)
- [Bookings](#bookings)
  - [Listing Bookings for a Location](#listing-bookings-for-a-location)
  - [Performing a Booking of a Location](#performing-a-booking-of-a-location)
  - [Cancelling a Booking of a Location](#cancelling-a-booking-of-a-location)

## Bookable Locations in Java

To determine whether or not a Location is bookable can be looked up using the `MPBookingService.getBookableLocations()` method. Below is an example of querying for bookable locations:

```java
MPBookingService bookingService = MPBookingService.getInstance();
MPBookableQuery bookableQuery = new MPBookableQuery.Builder()
        .setStartTime(new Date())
        .setEndTime(new Date(System.currentTimeMillis() + 60*60*1000))
        .build();

bookingService.getBookableLocations(bookableQuery, (locations, error) -> {
    ...
});
```

The above example creates a query for locations that are bookable for a timespan between now and 1 hour ahead.

It is also possible to check a location statically using `MPLocation.isBookable`, but please note that this information is not a dynamic property reflecting the current bookable state from the Booking Service. If `MPLocation.isBookable` is true it means that the Location has a potentially bookable resource known by the integrated booking provider, but still it might be booked for a specific time.

## Bookings in Java

A Booking is a timeboxed event model referring to the resource being booked and the users participating in the booked event.

### Listing Bookings for a Location in Java

Before trying to book a Location for a given time, it is convenient to know in advance whether or not the Location is already booked for the given time.

It is possible to get a list of bookings using the `MPBookingService.getBookingsUsingQuery()` method.

```java
MPBookingService bookingService = MPBookingService.getInstance();
MPBookingsQuery bookingsQuery = new MPBookingsQuery.Builder()
        .setLocation(myRoomLocation)
        .setStartTime(new Date())
        .setEndTime(new Date(System.currentTimeMillis() + 60*60*1000))
        .build();

bookingService.getBookingsUsingQuery(bookingsQuery, (bookings, error) -> {
    ...
});
```

The above example creates a query for bookings that exists for a location with timespan between 1 hour ago and 24 hours ahead.

### Performing a Booking of a Location in Java

It is possible execute a booking creation request using the `MPBookingService.perform()` method which takes a booking object as input. If the booking is successfully performed, the booking will return in the block with an assigned `bookingId`.

```java
MPBookingService bookingService = MPBookingService.getInstance();
MPBooking myBooking = new MPBooking.Builder()
        .setLocation(myRoomLocation)
        .setTitle("Meeting")
        .setParticipants(new String[] {"myemail@email.com"})
        .setStartTime(new Date())
        .setEndTime(new Date(System.currentTimeMillis() + 60*60*1000))
        .build();

bookingService.performBooking(myBooking, (booking, error) -> {
    if (error == null) {
        myBooking = booking;
    }
    ...
});
```

In the above example a Booking object is created and several properties are assigned:

- The related Location object
- A Title for the Booking
- Participants for the Event being created through the Booking
- Start and end time

Depending on the Booking provider, the participants will receive invites for an event created by this Booking request.

> By default, the `MPBookingService` performs anonymous bookings using a service account known to MapsIndoors. However, it is also possible to list, perform and cancel Bookings [on behalf of a user](http://docs.mapsindoors.com/data/booking/user-authenticated-booking-android/).

### Cancelling a Booking of a Location in Java

It is possible to cancel a created Booking using the `MPBookingService.cancelBooking()` method which takes an existing booking object as input.

```java
MPBookingService bookingService = MPBookingService.getInstance();

bookingService.cancelBooking(myBooking, (booking, error) -> {
    ...
});
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

This guide covers the different aspects of _Booking_ in the MapsIndoors Android SDK. The concept of booking in MapsIndoors implies that specific Locations in your MapsIndoors dataset is treated as Bookable resources. Typical bookable resources could be meeting rooms and workspaces.

A MapsIndoors dataset can only have bookable resources if an integration with a booking provider exists. Current examples of booking providers are _Google Calendar_ and _Microsoft Office 365_. These providers and more can be added and integrated to your MapsIndoors project by request.

The central service in the SDK managing bookings is the Booking Service, `MPBookingService`.

```kotlin
val bookingService = MPBookingService.getInstance()
```

The Booking Service can help with the following tasks:

- [Bookable Locations](#bookable-locations)
- [Bookings](#bookings)
  - [Listing Bookings for a Location](#listing-bookings-for-a-location)
  - [Performing a Booking of a Location](#performing-a-booking-of-a-location)
  - [Cancelling a Booking of a Location](#cancelling-a-booking-of-a-location)

## Bookable Locations in Kotlin

To determine whether or not a Location is bookable can be looked up using the `MPBookingService.getBookableLocations()` method. Below is an example of querying for bookable locations:

```kotlin
val bookingService = MPBookingService.getInstance()
val bookableQuery = MPBookableQuery.Builder()
        .setStartTime(Date())
        .setEndTime(Date(System.currentTimeMillis() + 60*60*1000))
        .build()

bookingService.getBookableLocations(bookableQuery) { locations, error ->
    ...
}
```

The above example creates a query for locations that are bookable for a timespan between now and 1 hour ahead.

It is also possible to check a location statically using `MPLocation.isBookable`, but please note that this information is not a dynamic property reflecting the current bookable state from the Booking Service. If `MPLocation.isBookable` is true it means that the Location has a potentially bookable resource known by the integrated booking provider, but still it might be booked for a specific time.

## Bookings in Kotlin

A Booking is a timeboxed event model referring to the resource being booked and the users participating in the booked event.

### Listing Bookings for a Location in Kotlin

Before trying to book a Location for a given time, it is convenient to know in advance whether or not the Location is already booked for the given time.

It is possible to get a list of bookings using the `MPBookingService.getBookingsUsingQuery()` method.

```kotlin
val bookingService = MPBookingService.getInstance()
val bookingsQuery = MPBookingsQuery.Builder()
    .setLocation(myRoomLocation)
    .setStartTime(Date(System.currentTimeMillis() - 60*60*1000))
    .setEndTime(Date(System.currentTimeMillis() + 24*60*60*1000))
    .build()

bookingService.getBookingsUsingQuery(bookingsQuery) {bookings, error ->
    ...
}
```

The above example creates a query for bookings that exists for a location with timespan between 1 hour ago and 24 hours ahead.

### Performing a Booking of a Location in Kotlin

It is possible execute a booking creation request using the `MPBookingService.perform()` method which takes a booking object as input. If the booking is successfully performed, the booking will return in the block with an assigned `bookingId`.

```kotlin
val bookingService = MPBookingService.getInstance()
var myBooking = MPBooking.Builder()
    .setLocation(myRoomLocation)
    .setTitle("Meeting")
    .setParticipants(arrayOf("myemail@email.com"))
    .setStartTime(Date())
    .setEndTime(Date(System.currentTimeMillis() + 60*60*1000))
    .build()

bookingService.performBooking(myBooking!!) {booking, error ->
    if (error == null) {
        myBooking = booking
    }
    ...
}
```

In the above example a Booking object is created and several properties are assigned:

- The related Location object
- A Title for the Booking
- Participants for the Event being created through the Booking
- Start and end time

Depending on the Booking provider, the participants will receive invites for an event created by this Booking request.

> By default, the `MPBookingService` performs anonymous bookings using a service account known to MapsIndoors. However, it is also possible to list, perform and cancel Bookings [on behalf of a user](http://docs.mapsindoors.com/data/booking/user-authenticated-booking-android/).

### Cancelling a Booking of a Location in Kotlin

It is possible to cancel a created Booking using the `MPBookingService.cancelBooking()` method which takes an existing booking object as input.

```kotlin
val bookingService = MPBookingService.getInstance()
bookingService.cancelBooking(myBooking) { booking, error ->
    ...
}
```

</mi-tab-panel>
<mi-tab-panel id="ios">

<!-- Known Issues -->
{% include "src/content/shared/known-issues-ios.md" %}

This guide covers the different aspects of _Booking_ in the MapsIndoors iOS SDK. The concept of Booking in MapsIndoors implies that specific Locations in your MapsIndoors dataset is treated as Bookable resources. Typical bookable resources could be meeting rooms and workspaces.

A MapsIndoors dataset can only have bookable resources if an integration with a Booking provider exists. Current examples of Booking providers are _Google Calendar_ and _Microsoft Office 365_. These providers and more can be added and integrated to your MapsIndoors project by request.

The central service in the SDK managing Bookings is the Booking Service, `MPBookingService`.

```swift
let bookingService = MPBookingService.sharedInstance()
```

The Booking Service can help with the following tasks:

- [List Bookable Locations](#bookable-locations)
- [Work with Bookings](#bookings)
  - [Listing Bookings for a Location](#listing-bookings-for-a-location)
  - [Performing a Booking of a Location](#performing-a-booking-of-a-location)
  - [Cancelling a Booking of a Location](#cancelling-a-booking-of-a-location)
  
> By default, the `MPBookingService` performs anonymous Bookings using a service account known to MapsIndoors. However, it is also possible to list, perform and cancel Bookings [on behalf of a user](#user-authenticated-bookings).

## Bookable Locations for iOS

To determine whether or not a Location is bookable can be looked up using the `MPBookingService.getBookableLocationsUsingQuery()` method. Below is an example of querying for bookable Locations:

```swift
let bookingService = MPBookingService.sharedInstance()
let bookableQuery = MPBookableQuery.init()

bookableQuery.startTime = Date.init()
bookableQuery.endTime = bookableQuery.startTime.advanced(by: 60*60)

bookingService.getBookableLocations(using: bookableQuery, completion: { (locations, error) in

})
```

The above example creates a query for Locations that are bookable for a timespan between now and 1 hour ahead.

It is also possible to check a location statically using `MPLocation.isBookable`, but please note that this information is not a dynamic property reflecting the current bookable state from the Booking Service. If `MPLocation.isBookable` is true it means that the Location has a potentially bookable resource known by the integrated Booking provider, but still it might be booked for a specific time.

## Bookings for iOS

A Booking is a timeboxed event model referring to the resource being booked and the users participating in the booked event.

### Listing Bookings for a Location for iOS

Before trying to book a Location for a given time, it is convenient to know in advance whether or not the Location is already booked for the given time.

It is possible to get a list of bookings using the `MPBookingService.getBookingsUsing()` method.

```swift
let bookingService = MPBookingService.sharedInstance()
let bookingsQuery = MPBookingsQuery.init()

bookingsQuery.location = myRoomLocation
bookingsQuery.startTime = Date.init().advanced(by: -60*60)
bookingsQuery.endTime = bookingsQuery.startTime?.advanced(by: 24*60*60)

bookingService.getBookingsUsing(bookingsQuery) { (bookings, error) in
}
```

The above example creates a query for bookings that exists for a location with timespan between 1 hour ago and 24 hours ahead.

### Performing a Booking of a Location for iOS

It is possible execute a booking creation request using the `MPBookingService.perform()` method which takes a booking object as input. If the booking is successfully performed, the booking will return in the block with an assigned `bookingId`.

```swift
let bookingService = MPBookingService.sharedInstance()
var myBooking = MPBooking.init()

myBooking.location = myRoomLocation
myBooking.title = "Meeting"
myBooking.participantIds = ["myemail@email.com"]
myBooking.startTime = Date.init()
myBooking.endTime = myBooking.startTime!.addingTimeInterval(60*60)

bookingService.perform(myBooking) { (booking, error) in
    myBooking = booking
}
```

In the above example a Booking object is created and several properties are assigned:

- The related Location object
- A Title for the Booking
- Participants for the Event being created through the Booking
- Start and end time

Depending on the Booking provider, the participants will receive invites for an event created by this Booking request.

### Cancelling a Booking of a Location for iOS

It is possible to cancel a created Booking using the `MPBookingService.cancel()` method which takes an existing Booking object as input.

```swift
let bookingService = MPBookingService.sharedInstance()

bookingService.cancel(myBooking) { (booking, error) in
}
```

## User Authenticated Bookings for iOS

By default, the `MPBookingService` performs anonymous bookings using a service account known to MapsIndoors. However, it is also possible to list, perform and cancel Bookings on behalf of a user. For the `MPBookingService` to work on behalf of a user, it must identify the tenant with a given tenant id (optional for single tenant setups) and prove user access with an access token. See the following example.

```swift
let bookingService = MPBookingService.sharedInstance()

bookingService.authenticationConfig = MPBookingAuthConfig.init(accessToken: "some-user-access-token")
bookingService.authenticationConfig?.tenantId = "some-tenant-id"
}
```

When the above configuration is in place, all following operations through the `MPBookingService` will be performed on behalf of a user. If the access token expires, the different Booking methods will result in errors and a new token must be obtained.

### Obtaining a Tenant ID for User Bookings for iOS

The tenant id is specific for each tenant / Booking provider. If you don't know your tenant id, your IT administrator should be able to provide the information needed. Note that this is optional for single tenant setups and single tenant setups are the most common.

### Obtaining an Access Token for User Bookings for iOS

Obtaining an access token for working with Bookings on behalf of a user is outside of the scope of this guide. Usually an access token is obtained in a login flow in your own application.

> Note that the access token obtained from a [MapsIndoors Single Sign-on flow]({{ site.url }}/content/various/authentication/sso/) cannot be used as access token for the `MPBookingService`. Single Sign-on access tokens are issued by MapsIndoors and not the underlying tenant. You need to login directly on your Booking tenant to get an access token that can be used for working with the Booking Service as an authenticated user.

### Disabling User Authenticated Bookings for iOS

Disabling User Authenticated Bookings is as simple as setting the `authenticationConfig` to `nil`:

```swift
let bookingService = MPBookingService.sharedInstance().authenticationConfig = nil
}
```

After disabling user authenticated Bookings, all following operations will be treated as anonymous Booking operations.

</mi-tab-panel>
<mi-tab-panel id="web">

This guide covers the different aspects of _Booking_ in the MapsIndoors JavaScript SDK. The concept of Booking in MapsIndoors implies that specific Locations in your MapsIndoors dataset is treated as Bookable resources. Typical bookable resources could be meeting rooms and workspaces.

A MapsIndoors dataset can only have bookable resources if an integration with a Booking provider exists. Current examples of Booking providers are _Google Calendar_ and _Microsoft Office 365_. These providers and more can be added and integrated to your MapsIndoors project by request.

The central service in the SDK managing Bookings is the Booking Service, `mapsindoors.services.BookingService`.

```javascript
  const bookingService = mapsindoors.services.BookingService;
```

The Booking Service can help with the following tasks:

- [List Bookable Locations](#bookable-locations)
- [Work with Bookings](#bookings)
  - [Listing Bookings for a Location](#listing-bookings-for-a-location)
  - [Performing a Booking of a Location](#performing-a-booking-of-a-location)
  - [Cancelling a Booking of a Location](#cancelling-a-booking-of-a-location)

> By default, the `BookingService` performs anonymous Bookings using a service account known to MapsIndoors. However, it is also possible to list, perform and cancel Bookings [on behalf of a user](#user-authenticated-bookings).

## Bookable Locations for Web

To determine whether or not a `Location` is bookable can be looked up using the `bookingService.getBookableLocationsUsingQuery()` method. Below is an example of querying for bookable Locations:

```javascript
  const bookingService = mapsindoors.services.BookingService;
  const start = new Date();
  const end = new Date(start).setHours(start.getHours() + 1);

  const locations = await bookingService.getBookableLocations({
      startTime: start,
      endTime: end
  });
```

The above example creates a query for Locations that are bookable for a timespan between now and 1 hour ahead.

To check if a specific `Locaiton` is bookable it possible to parse the `Location` object as a paramter to the `getBookingsUsingQuery` function.

```javascript
  const bookingService = mapsindoors.services.BookingService;
  const myMeetingRoom = await locationsService.getLocation('0c44207987174561a53fb00a');

  const start = new Date();
  const end = new Date(start).setHours(start.getHours() + 1);

  const bookings = await bookingService.getBookingsUsingQuery({
      location: myMeetingRoom,
      startTime: start,
      endTime: end
  });
```

## Bookings for Web

A Booking is a timeboxed event model referring to the resource being booked and the users participating in the booked event.

### Listing Bookings for a Location for Web

Before trying to book a Location for a given time, it is convenient to know in advance whether or not the Location is already booked for the given time.

It is possible to get a list of bookings using the `bookingService.getBookableLocationsUsingQuery()` method.

```javascript
  const bookingService = mapsindoors.services.BookingService;
  const myMeetingRoom = await locationsService.getLocation('0c44207987174561a53fb00a');
  const start = new Date().setHours(new Date().getHours() -1);
  const end = new Date(start).setHours(start.getHours() + 24);

  const bookings = await bookingService.getBookingsUsingQuery({
    location: myMeetingRoom,
    startTime: start,
    endTime: end
  });
}
```

The above example creates a query for bookings that exists for a location with timespan between 1 hour ago and 24 hours ahead.

### Performing a Booking of a Location for Web

It is possible execute a booking creation request using the `bookingService.performBooking()` method which takes a booking object as input. If the booking is successfully performed, the booking will return in the block with an assigned `bookingId`.

```javascript
  const bookingService = mapsindoors.services.BookingService;
  const start = new Date();
  const end = new Date(start).setHours(start.getHours() + 1);
  const bookingRequest = new bookingService.MPBooking({
    locationId: '0c44207987174561a53fb00a',
    title: 'Meeting',
    description: 'Meeting description',
    participants: ["myemail@email.com"],
    startTime: start,
    endTime: end
  });

  const myBooking = await bookingService.performBooking(bookingRequest);
```

In the above example a `Booking` object is created and several properties are assigned:

- The ID of related Location object
- A title for the booking
- A description for the booking.
- Participants for the Event being created through the booking
- Start and end time

Depending on the Booking provider, the participants will receive invites for an event created by this Booking request.

### Cancelling a Booking of a Location for Web

It is possible to cancel a created `Booking` using the `bookingService.cancelBooking()` method which takes an existing `Booking` object as input.

```javascript
  const bookingService = mapsindoors.services.BookingService;
  const myMeetingRoom = await locationsService.getLocation('0c44207987174561a53fb00a');

  const start = new Date();
  const end = new Date(start).setHours(start.getHours() + 1);

  const bookings = await bookingService.getBookingsUsingQuery({
      location: myMeetingRoom,
      startTime: start,
      endTime: end
  });

  if(bookings.length > 0) {
    await bookingService.cancelBooking(bookings[0]);
  }
```

## User Authenticated Bookings for Web

By default, the `BookingService` performs anonymous bookings using a service account known to MapsIndoors. However, it is also possible to list, perform and cancel Bookings on behalf of a user. For the `BookingService` to work on behalf of a user, it must identify the tenant with a given tenant id (optional for single tenant setups) and prove user access with an access token. See the following example.

```javascript
  const bookingService = mapsindoors.services.BookingService;
  const bookingAuthenticationConfig = new bookingService.AuthenticationConfig('some-user-access-token', `some-tenant-id`);
  bookingService.setAuthenticationConfig(bookingAuthenticationConfig);
}
```

When the above configuration is in place, all following operations through the `BookingService` will be performed on behalf of a user. If the access token expires, the different Booking methods will result in errors and a new token must be obtained.

### Obtaining a Tenant ID for User Bookings for Web

The tenant id is specific for each tenant / Booking provider. If you don't know your tenant id, your IT administrator should be able to provide the information needed. Note that this is optional for single tenant setups and single tenant setups are the most common.

### Obtaining an Access Token for User Bookings for Web

Obtaining an access token for working with Bookings on behalf of a user is outside of the scope of this guide. Usually an access token is obtained in a login flow in your own application.

> Note that the access token obtained from a MapsIndoors Single Sign-on flow cannot be used as access token for the `BookingService`. Single Sign-on access tokens are issued by MapsIndoors and not the underlying tenant. You need to login directly on your Booking tenant to get an access token that can be used for working with the Booking Service as an authenticated user.

### Disabling User Authenticated Bookings for Web

Disabling User Authenticated Bookings is as simple as calling the `setAuthenticationConfig` with `null` as the argument:

```javascript
bookingService.setAuthenticationConfig(null);
}
```

After disabling user authenticated Bookings, all following operations will be treated as anonymous Booking operations.

</mi-tab-panel>
</mi-tabs>