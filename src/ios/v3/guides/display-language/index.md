---
title: Display Language
eleventyNavigation:
  key: ios-v3-display-language
  parent: ios-v3-guides
  title: Display Language
  order: 700
---

<!-- Introduction -->
{% include "src/shared/display-language/intro.md" %}

Addionally, aside from methods mentioned here, you can provide translations via the standard method for your device, such as `LocalizedString`.

<!-- CMS Language-->
{% include "src/shared/display-language/cms-language.md" %}

<!-- Fixed Language -->
{% include "src/shared/display-language/fixed-language.md" %}

```swift
MapsIndoors.setLanguage("fr");
```

<!-- Device Language -->
{% include "src/shared/display-language/device-language.md" %}

```swift
let languageCode = Locale.current.languageCode
MapsIndoors.setLanguage(languageCode!);
```
