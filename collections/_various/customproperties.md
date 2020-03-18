---
title: Custom Properties
permalink: /custom-properties/
published: true
date: 2020-03-16
---

You have the option of adding Custom Properties to any piece of geodata within MapsIndoors. They can be anything that makes sense for you in building your app.

An example:

You are a conference organizer that needs to associate some pieces of data with each exhibitor, like the sponsor level they are are on and what the size of their stand should be. You would create two Custom Properties, one called `sponsor_level` and another called `stand_size`. When building your app on top of our SDK, you could use these Custom Properties to assign a gold color to your highest paying sponsors' names, and a larger image because of their huge stand size.

In general, your Custom Properties can contain any combination of letters, numbers and special characters. Moreover, if your Solution has multiple languages, you must provide a translation per language for each Custom Property. Adding Custom Properties through the CMS, we will help you do this, but you will need to input the translated names.

You can also add Custom Properties through the Integration API with the exact same requirements and options as when adding via the MapsIndoors CMS.
