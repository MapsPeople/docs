---
title: Switching Solutions
eleventyNavigation:
  parent: data-various
  key: data-various-switching-solutions
  title: Switching Solutions
  order: 10
---

Some larger organisations may have not just multiple Venues, but also multiple Solutions in the MapsIndoors system. Therefore, it is naturally important to be able to switch between them.

At it's core, this is done simply by switching out the API key and reloading the system. However, there are a few more steps that can be done to ensure smooth transition between Solutions.

<mi-tabs>
<mi-tab label="Android - Java" tab-for="android-java"></mi-tab>
<mi-tab label="Android - Kotlin" tab-for="android-kotlin"></mi-tab>
<mi-tab label="iOS" tab-for="ios"></mi-tab>
<mi-tab-panel id="android-java">

```java
MapsIndoors.synchronizeContent((e) -> {
    ...
});
```

</mi-tab-panel>
<mi-tab-panel id="android-kotlin">

```java
MapsIndoors.synchronizeContent((e) -> {
    ...
});
```

</mi-tab-panel>
<mi-tab-panel id="ios">

```kotlin
MapsIndoors.synchronizeContent { error ->
    ...
}
```

</mi-tab-panel>
</mi-tabs>
