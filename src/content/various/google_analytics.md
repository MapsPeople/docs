---
title: Google Analytics
toc: true
---

## Overview

Google Analytics is a free tool that gives you the opportunity to analyze data to get a deeper understanding of your customers and how they use your app. Examples include understanding which places are hardest to find in your venue or what users typically search for when looking for a location.

MapsPeople can enable event tracking for your [MapsIndoors Standard Web Application](https://clients.mapsindoors.com/demo). When implementing your own application using the MapsIndoors SDKs, you can implement event tracking using your analytics service of choice.

The following diagram represents the flow of information from MapsIndoors to Google Analytics.

![Google Analytics Flow]({{ site.url }}/assets/various/Google_Analytics_Flow.png)

### Get Started

To start seeing stats for your [standard web app](https://clients.mapsindoors.com/):

1. Create or sign in to your Analytics account:

* Go to [google.com/analytics](https://marketingplatform.google.com/about/analytics/)
* Do one of the following:
  * To create an account, click "Start for free".
  * To sign in to your account, Click "Sign in to Analytics".

1. [Set up a property in your Analytics account](https://support.google.com/analytics/answer/1042508). A [property](https://support.google.com/analytics/answer/2649554?hl=en&ref_topic=1009620) represents your website, and is the collection point in Analytics for the data from your site.
1. Provide your MapsIndoors project manager with your newly created Property ID.

After doing this, within 24 hours you will start receiving stats and events in your Google Analytics Dashboard.

### Events Overview

When a `Property ID` is added to your MapsIndoors Solution you will see the following events in Google Analytics.

> Events seen below are only tracked in the Standard Web App.

| Category   | Action                                   | Label                                                                | Description                                                |
| ---------- | ---------------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------- |
| Search     | Pressed "Enter" key                      | "Cantee" search query                                                | Entered search query when Enter Key is hit                 |
| Search     | Selected Location in search results list | "Main Cannteen" – locationId ("Cantee" search query)                 | Location name and id followed by the entered search query  |
| Categories | Selected Category                        | "Canteens" – categoryId                                              | Category name and id                                       |
| Directions | Clicked "Get Directions"                 | "Main Canteen" – locationId                                          | "Get directions" button was clicked for selected location" |
| Directions | Got directions                           | From "User location" to "Main Canteen" – locationId                  | Directions from users position to an MapsIndoors location  |
| Directions | Got directions                           | From "Office" – locationId to "Main Canteen" – locationId            | Directions between two MapsIndoors locations               |
| Directions | Got directions                           | From "Main Canteen" – locationdId to external location               | Directions from MapsIndoors location to external location  |
| Directions | Clear input                              | Origin input field                                                   | Origin was cleared                                         |
| Directions | Clear input                              | Destination input field                                              | Destination was cleared                                    |
| Directions | Selected avoid stairs                    | Avoided stairs enabled for directions to "Main Canteen" – locationId | Avoid stairs was enabled                                   |
| Directions | Selected avoid stairs                    | Avoided stairs enabled for directions to external location           | Avoid stairs was enabled                                   |
| Map        | Location clicked on map                  | "Main Canteen" - locationId                                          | Location name and id                                       |
| Map        | Cluster clicked on map                   | "type of locations" type                                             | Location type for selected cluster                         |

### General Statistics

Using Google Analytics also gives you access to general website statistics such as:

* Current active users and their geography
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
* ...and more

For more information on how to get started with Google Analytics please read this article: [https://support.google.com/analytics/answer/1008015](https://support.google.com/analytics/answer/1008015).
