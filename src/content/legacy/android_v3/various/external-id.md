---
title: External ID
toc: true
eleventyNavigation:
  key: legacy-android-v3-External ID
  parent: legacy-android-v3-various
  order: 5
---

The ExternalID is a reference from your real-life data to a piece of MapsIndoors geodata.

In a large venue like a conference hall, headquarter, or university, every room will have a unique ID like `1.234AB` or `HALL_A` in a naming scheme that makes sense to that organisation.

In MapsIndoors, we create all Rooms, Buildings, and Venues with an internal id that is a unique identifier, and it will not change. However, you might need to change the ID for a particular room in your physical building. It might be a large meeting room that is now split in two smaller rooms and one of them keeps that original ID. The ExternalID should then reflect your naming scheme, and not concern itself with the internal random identifier our database handed out to any of your rooms, as they will now be two new ones.

Previously, regardless of the type of geodata, we called it `RoomID`. This is less than optimal when a `RoomID` refers to a Building, or even a whole Venue, hence the change.

## Advanced Uses of ExternalID

You can also use the ExternalID as an identifier for an external system of your choosing. If you have a queue monitoring system and want to display some regularly updated statuses on a piece of geodata in MapsIndoors, you can use the ExternalID as the common denominator between the systems.

There are many ways you can utilise the power of ExternalID as a reference point for one of your systems, and we recommend looking at the [Integration API documentation](https://docs.mapsindoors.com/api/v1/) and [getting in touch](https://resources.mapspeople.com/contact-us) to hear more about your options with this feature.
