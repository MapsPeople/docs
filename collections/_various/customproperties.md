---
title: Custom Properties
permalink: /custom-properties/
published: true
date: 2020-03-16
---

For all pieces of geodata in MapsIndoors, you have the option of adding Custom Properties. They can be anything that makes sense for you in building your app.

An example:

You are an exhibitor that needs to associate some pieces of data with each exhibitor, like the sponsor level they are are on and what the size of their stand should be. You would create two Custom Properties, one called `sponsor_level` and another called `stand_size`. When building your app on top of our SDK, you could use these Custom Properties to assign a gold color to your highest paying sponsors' names, and a larger image because of their huge stand size.

Your Custom Properties can only contain a-z letters and 0-9 numbers. Moreover, if your Solution has multiple languages, you must provide a translation per language for each Custom Property. Adding Custom Properties through the CMS, this will be done automatically for you. It will not, however, when adding them through the Integration API.
