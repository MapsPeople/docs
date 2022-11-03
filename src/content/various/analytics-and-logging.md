---
title: Google Analytics & Logging
toc: true
eleventyNavigation:
  key: Google Analytics & Logging
  parent: various
  order: 7
---

## Overview

Google Analytics is a free tool that gives you the opportunity to analyze data to get a deeper understanding of your customers and how they use your app. Examples include understanding which places are hardest to find in your venue or what users typically search for when looking for a location. When implementing your own application using the MapsIndoors SDKs, you can implement event tracking using your analytics service of choice, however this page will focus on using Google Analytics.

The following diagram represents the flow of information from MapsIndoors to Google Analytics.

![Google Analytics Flow]({{ site.url }}/assets/various/Google_Analytics_Flow.png)

### Events Captured

#### General Analytics

* Current active users, their geography, and whether they're accessing on desktop or mobile
* Current active sessions by country
* Users by time of day
* Number of users and new users
* Number of sessions and sessions per user
* Page views
* Pages per session
* Average session duration
* Bounce rate
* Number of and percentage of users for each language
* Browser type
* Service provider
* Mobile device type
* ...And more!

#### MapsIndoors Events

* Search queried and enter key pressed
* Location selected in search results list
* Category selected
* "Get Directions" clicked
* Directions with "From" location and "To" location
* Input cleared
* Avoid stairs selected
* Location clicked on map
* Cluster clicked on map
