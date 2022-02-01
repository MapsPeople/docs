---
title: Single Sign-On 
eleventyNavigation:
  parent: auth
  key: auth-sso
  order: 10
  title: Single Sign-On
---

In order to access certain MapsIndoors apps, and certain custom apps, SSO (Single Sign-On) login can be used.
This includes the MapsIndoors Auth SSO, as well as organization-specific authentication providers - see [Configuration](configuration).

The MapsIndoors Auth SSO page is located at [https://auth.mapsindoors.com/login](https://auth.mapsindoors.com/login).

MapsIndoors has the following apps where it is possible to sign into:

* MapsIndoors CMS
* MapsIndoors standard web app
* MapsIndoors standard web kiosk

Unless an organization-specific provider is used, it is only possible to sign in via MapsIndoors users - i. e. users invited/created via MapsIndoors CMS.
Once a user exists in MapsIndoors, it is possible to sign in via username/password, or public authentication providers:

* Google
* Azure Active Directory (pending)

This is only authentication - authorization is still based on the user configuration in MapsIndoors.
This also means that the security is extremely tight.
MapsIndoors does not gain any access to the authentication provider, as it only expects an id_token (as opposed to an access token) in order to authenticate.
Based on this external authentication, and then internal authorization, an internal access token is granted to the app - which is completely unrelated to the authentication provider and therefore only can be used to access MapsIndoors services.
If an organization-specific authentication provider is used, then there are more options in regards to authorization - see [Authorization](authorization).
