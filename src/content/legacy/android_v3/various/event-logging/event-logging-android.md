---
title: Event Logging for Android
eleventyNavigation:
  key: legacy-android-v3-various-event-logging-android
  parent: legacy-android-v3-various-event-logging
  title: Event Logging for Android
  order: 20
---

The MapsIndoors SDK records anonymous usage statistics and diagnostic events per default and sends the logged data to a server at MapsPeople.

Logging may be disabled entirely by calling:

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
MapsIndoors.disableEventLogging(true);
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
MapsIndoors.disableEventLogging(true)
```

</mi-tab-panel>
</mi-tabs>
