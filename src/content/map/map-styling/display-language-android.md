---
title: Display Language
toc: true
eleventyNavigation:
  key: map-map-styling-display-language
  parent: map-map-styling
  title: Display Language
  order: 390
---

<!-- Introduction -->
{% include "src/content/shared/display-language/intro.md" %}

Additionally, aside from methods mentioned here, you can provide translations via the standard method for your device, such as using individual localized strings.

<!-- CMS Language-->
{% include "src/content/shared/display-language/cms-language.md" %}

<mi-tabs>
<mi-tab label="Android - Java" tab-for="android-java"></mi-tab>
<mi-tab label="Android - Kotlin" tab-for="android-kotlin"></mi-tab>
<mi-tab label="iOS" tab-for="ios"></mi-tab>
<mi-tab label="Web" tab-for="web"></mi-tab>
<mi-tab-panel id="android-java">

<!-- Fixed Language -->
{% include "src/content/shared/display-language/fixed-language.md" %}

```java
MapsIndoors.setLanguage("fr");
```

<!-- Device Language -->
{% include "src/content/shared/display-language/device-language.md" %}

```java
String languageCode = getResources().getConfiguration().getLocales().get(0).getLanguage();
MapsIndoors.setLanguage(languageCode);
```

</mi-tab-panel>
<mi-tab-panel id="android-kotlin">

<!-- Fixed Language -->
{% include "src/content/shared/display-language/fixed-language.md" %}

```kotlin
MapsIndoors.setLanguage("fr")
```

<!-- Device Language -->
{% include "src/content/shared/display-language/device-language.md" %}

```kotlin
val lang = resources.configuration.locales[0].language
MapsIndoors.setLanguage(lang)
```

</mi-tab-panel>
</mi-tabs>
