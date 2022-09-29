---
title: Display Language
toc: true
eleventyNavigation:
  key: v3-map-map-styling-display-language
  parent: v3-map-map-styling
  title: Display Language
  order: 40
---

<!-- Introduction -->
{% include "src/content/shared/display-language/intro.md" %}

Additionally, aside from methods mentioned here, you can provide translations via the standard method for your device, such as using individual localized strings.

<!-- CMS Language-->
{% include "src/content/shared/display-language/cms-language.md" %}

<!-- Fixed Language -->
{% include "src/content/shared/display-language/fixed-language.md" %}

<mi-tabs>
<mi-tab label="Android - Java" tab-for="android-java"></mi-tab>
<mi-tab label="Android - Kotlin" tab-for="android-kotlin"></mi-tab>
<mi-tab label="iOS" tab-for="ios"></mi-tab>
<mi-tab-panel id="android-java">

```java
MapsIndoors.setLanguage("fr");
```

</mi-tab-panel>
<mi-tab-panel id="android-kotlin">

```kotlin
MapsIndoors.setLanguage("fr")
```

</mi-tab-panel>
<mi-tab-panel id="ios">

<!-- Known Issues -->
{% include "src/content/shared/known-issues-ios.md" %}

```swift
MapsIndoors.setLanguage("fr");
```

</mi-tab-panel>
</mi-tabs>

<!-- Device Language -->
{% include "src/content/shared/display-language/device-language.md" %}

<mi-tabs>
<mi-tab label="Android - Java" tab-for="android-java"></mi-tab>
<mi-tab label="Android - Kotlin" tab-for="android-kotlin"></mi-tab>
<mi-tab label="iOS" tab-for="ios"></mi-tab>
<mi-tab label="Web" tab-for="web"></mi-tab>
<mi-tab-panel id="android-java">

```java
String languageCode = getResources().getConfiguration().getLocales().get(0).getLanguage();
MapsIndoors.setLanguage(languageCode);
```

</mi-tab-panel>
<mi-tab-panel id="android-kotlin">

```kotlin
val lang = resources.configuration.locales[0].language
MapsIndoors.setLanguage(lang)
```

</mi-tab-panel>
<mi-tab-panel id="ios">

<!-- Known Issues -->
{% include "src/content/shared/known-issues-ios.md" %}

```swift
let languageCode = Locale.current.languageCode
MapsIndoors.setLanguage(languageCode!);
```

</mi-tab-panel>
<mi-tab-panel id="web">

The web-app will automatically adjust the language to the language set in the user's browser settings, otherwise default to English. When using Safari, the device's language setting will be used. This is limited to the following languages, and will default to English if the selected language is not supported:

* English
* Danish
* Spanish
* Portuguese
* Italian
* French

</mi-tab-panel>
</mi-tabs>
