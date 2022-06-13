---
title: Display Language for Android
toc: true
eleventyNavigation:
  key: legacy-android-v3-map-map-styling-display-language-android
  parent: legacy-android-v3-map-map-styling
  title: Display Language for Android
  order: 390
---

<!-- Introduction -->
{% include "src/content/shared/display-language/intro.md" %}

Additionally, aside from methods mentioned here, you can provide translations via the standard method for your device, such as using individual localized strings.

<!-- CMS Language-->
{% include "src/content/shared/display-language/cms-language.md" %}

<!-- Fixed Language -->
{% include "src/content/shared/display-language/fixed-language.md" %}

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
MapsIndoors.setLanguage("fr");
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
MapsIndoors.setLanguage("fr")
```

</mi-tab-panel>
</mi-tabs>

<!-- Device Language -->
{% include "src/content/shared/display-language/device-language.md" %}

<mi-tabs>
<mi-tab label="Java" tab-for="java"></mi-tab>
<mi-tab label="Kotlin" tab-for="kotlin"></mi-tab>
<mi-tab-panel id="java">

```java
String languageCode = getResources().getConfiguration().getLocales().get(0).getLanguage();
MapsIndoors.setLanguage(languageCode);
```

</mi-tab-panel>
<mi-tab-panel id="kotlin">

```kotlin
val lang = resources.configuration.locales[0].language
MapsIndoors.setLanguage(lang)
```

</mi-tab-panel>
</mi-tabs>
