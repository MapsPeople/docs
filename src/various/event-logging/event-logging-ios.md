---
title: Event Logging for iOS
eleventyNavigation:
  key: various-event-logging-ios
  parent: various-event-logging
  title: Event Logging for iOS
  order: 10
---

The MapsIndoors SDK records anonymous usage statistics and diagnostic events per default and sends the logged data to a server at MapsPeople.

Logging may be disabled entirely by calling:

```swift
MapsIndoors.eventLoggingDisabled = true
```
