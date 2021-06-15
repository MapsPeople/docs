---
title: Display language
eleventyNavigation:
  key: ios-v3-display-language
  parent: ios-v3-guides
  title: Display language
  order: 700
---

The language of MapsIndoors is independent of the chosen language on the device on which the app is used. This means that you need to explicitly tell MapsIndoors which language to use.

If you do not specify a language, MapsIndoors will show information in the default language defined in the MapsIndoors CMS.

## Use fixed language

The MapsIndoors language can be fixed to a specific language by supplying an [ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes), for example French:

```swift
MapsIndoors.setLanguage("fr");
```

## Use device language

The MapsIndoors language can be aligned with the device language by supplying the current language code of the device:

```swift
let languageCode = Locale.current.languageCode
MapsIndoors.setLanguage(languageCode!);
```
