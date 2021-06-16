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
