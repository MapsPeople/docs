---
title: Custom Properties
eleventyNavigation:
  key: Custom-Properties
  title: Custom Properties
  parent: various
  order: 3
---

You have the option of adding Custom Properties to any piece of geodata within MapsIndoors. They can be anything that makes sense for you in building your app.

## Creating Custom Properties

Custom Properties are created for each Location, defined using a `key` and a `value`. This is found in a section in the menu for each Location.

![custom-properties](/assets/various/custom-properties.png)

## Reading Custom Properties

The method for reading and using these custom properties depends on which platform you're developing for. Here are some examples:

### Web SDK

dncjdncjdnc

### Android SDK

cmndcndjcndc

### iOS SDK

dcndjcnjdcndjc

### An Example

You are a conference organizer that needs to associate some pieces of data with each exhibitor, like the sponsor level they are are on and what the size of their stand should be. You would create two Custom Properties, one called `sponsorLevel` and another called `standSize`. When building your app on top of our SDK, you could use these Custom Properties to assign a gold color to your highest paying sponsors' names, and a larger image because of their larger stand size.

Your Custom Properties can contain any combination of letters and numbers. They can not contain special characters (underscores, hyphens, dots etc.) for technical reasons. Moreover, if your Solution has multiple languages, you must provide the necessary translations for each Custom Property. When adding a Custom Property through the CMS, a value input field will be provided for each language in your Solution allowing you to input the translated values directly in the CMS.

You can also add Custom Properties through the Integration API with the exact same requirements and options as when adding them via the MapsIndoors CMS.
