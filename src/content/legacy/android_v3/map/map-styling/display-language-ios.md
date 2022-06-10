---
title: Display Language for iOS
toc: true
eleventyNavigation:
  key: map-map-styling-display-language-ios
  parent: map-map-styling
  title: Display Language for iOS
  order: 380
---

<!-- Known Issues -->
{% include "src/content/shared/known-issues-ios.md" %}

<!-- Introduction -->
{% include "src/content/shared/display-language/intro.md" %}

Additionally, aside from methods mentioned here, you can provide translations via the standard method for iOS, `LocalizedString`.

<!-- CMS Language-->
{% include "src/content/shared/display-language/cms-language.md" %}

<!-- Fixed Language -->
{% include "src/content/shared/display-language/fixed-language.md" %}

```swift
MapsIndoors.setLanguage("fr");
```

<!-- Device Language -->
{% include "src/content/shared/display-language/device-language.md" %}

```swift
let languageCode = Locale.current.languageCode
MapsIndoors.setLanguage(languageCode!);
```
