---
title: Event Logging
eleventyNavigation:
  key: android-v3-event-logging
  parent: android-v3-guides
  title: Event Logging
  order: 600
---

<!-- Introduction -->
{% include "src/shared/event-logging/intro.md" %}

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
