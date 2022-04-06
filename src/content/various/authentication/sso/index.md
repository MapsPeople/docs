---
title: Single Sign-On
eleventyNavigation:
  key: various-authentication-sso
  title: Single Sign-On
  parent: various-authentication
  order: 40
---

In order to access certain MapsIndoors apps, and certain custom apps, SSO (Single Sign-On) login can be used. This includes the MapsIndoors Auth SSO, as well as organization-specific authentication providers - see [Configuration]({{ site.url }}/content/various/authentication/sso/sso-configuration/).

The MapsIndoors Auth SSO page is located at [https://auth.mapsindoors.com/login](https://auth.mapsindoors.com/login).

MapsIndoors has the following apps where SSO can be used to sign in:

* MapsIndoors CMS
* MapsIndoors Standard Web App
* MapsIndoors Standard Web Kiosk

Unless an organization-specific provider is used, it is only possible to sign in for users invited orcreated via MapsIndoors CMS. Once a user exists in MapsIndoors, it is possible to sign in via username/password, or public authentication providers such as:

* Google
* Azure Active Directory (pending)

This is only authentication - authorization is still based on the user configuration in MapsIndoors. This also means that the security is extremely tight. MapsIndoors does not gain any access to the authentication provider, as it only expects an id_token (as opposed to an access token) in order to authenticate. Based on this external authentication, and then internal authorization, an internal access token is granted to the app - which is completely unrelated to the authentication provider and therefore only can be used to access MapsIndoors services. If an organization-specific authentication provider is used, then there are more options in regards to authorization - see [Authorization]({{ site.url }}/content/various/authentication/sso/sso-authorisation/).
