---
title: Booking
eleventyNavigation:
  key: android-v3-guides-booking
  parent: android-v3-guides
  title: Booking
  order: 400
---


This guide covers the different aspects of _Booking_ in the MapsIndoors Android SDK. The concept of booking in MapsIndoors implies that specific Locations in your MapsIndoors dataset is treated as Bookable resources. Typical bookable resources could be meeting rooms and workspaces.

A MapsIndoors dataset can only have bookable resources if an integration with a booking provider exists. Current examples of booking providers are _Google Calendar_ and _Microsoft Office 365_. These providers and more can be added and integrated to your MapsIndoors project by request.

The central service in the SDK managing bookings is the Booking Service, `MPBookingService`.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
MPBookingservice bookingService = MPBookingService.getInstance();
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
val bookingService = MPBookingService.getInstance()
```

</mi-tab-panel>
</mi-tabs>

The Booking Service can help with the following tasks:

- [Bookable Locations](#bookable-locations)
- [Bookings](#bookings)
  - [Listing Bookings for a Location](#listing-bookings-for-a-location)
  - [Performing a Booking of a Location](#performing-a-booking-of-a-location)
  - [Cancelling a Booking of a Location](#cancelling-a-booking-of-a-location)

## Bookable Locations

To determine whether or not a Location is bookable can be looked up using the `MPBookingService.getBookableLocations()` method. Below is an example of querying for bookable locations:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

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

</mi-tab-panel>
<mi-tab-panel id="kotlin">

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

</mi-tab-panel>
</mi-tabs>

The above example creates a query for locations that are bookable for a timespan between now and 1 hour ahead.

It is also possible to check a location statically using `MPLocation.isBookable`, but please note that this information is not a dynamic property reflecting the current bookable state from the Booking Service. If `MPLocation.isBookable` is true it means that the Location has a potentially bookable resource known by the integrated booking provider, but still it might be booked for a specific time.

## Bookings

A Booking is a timeboxed event model referring to the resource being booked and the users participating in the booked event.

### Listing Bookings for a Location

Before trying to book a Location for a given time, it is convenient to know in advance whether or not the Location is already booked for the given time.

It is possible to get a list of bookings using the `MPBookingService.getBookingsUsingQuery()` method.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

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

</mi-tab-panel>
<mi-tab-panel id="kotlin">

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

</mi-tab-panel>
</mi-tabs>

The above example creates a query for bookings that exists for a location with timespan between 1 hour ago and 24 hours ahead.

### Performing a Booking of a Location

It is possible execute a booking creation request using the `MPBookingService.perform()` method which takes a booking object as input. If the booking is successfully performed, the booking will return in the block with an assigned `bookingId`.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

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

</mi-tab-panel>
<mi-tab-panel id="kotlin">

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

</mi-tab-panel>
</mi-tabs>

In the above example a Booking object is created and several properties are assigned:

- The related Location object
- A Title for the Booking
- Participants for the Event being created through the Booking
- Start and end time

Depending on the Booking provider, the participants will receive invites for an event created by this Booking request.

> By default, the `MPBookingService` performs anonymous bookings using a service account known to MapsIndoors. However, it is also possible to list, perform and cancel Bookings [on behalf of a user](../booking/user-authenticated-booking).

### Cancelling a Booking of a Location

It is possible to cancel a created Booking using the `MPBookingService.cancelBooking()` method which takes an existing booking object as input.

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
MPBookingService bookingService = MPBookingService.getInstance();

bookingService.cancelBooking(myBooking, (booking, error) -> {
    ...
});
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
val bookingService = MPBookingService.getInstance()
bookingService.cancelBooking(myBooking) { booking, error -> 
    ...
}
```

</mi-tab-panel>
</mi-tabs>
