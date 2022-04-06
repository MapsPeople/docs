---
title: Authentication
eleventyNavigation:
  key: various-authentication
  title: Authentication
  parent: various
  order: 10
---

MapsIndoors Auth is handled in two ways:

* API keys - This is how standard apps and custom apps built on top of the SDKs authorize by default,
* MapsIndoors Auth server - This is how the MapsIndoors CMS authorizes, as well as apps accessing secured solutions.

The MapsIndoors Auth server is located at [https://auth.mapsindoors.com](https://auth.mapsindoors.com) - including [SSO page](https://auth.mapsindoors.com/login) and [OIDC metadata](https://auth.mapsindoors.com/.well-known/openid-configuration).
The server is an [IdentityServer4](https://identityserver4.readthedocs.io/en/3.1.0/) implementation - with support for OAauth 2 and OIDC protocols.
It stores all users that are managed through the MapsIndoors CMS, as well as configurations for authentication providers.
Based on these users and authentication providers, it can authenticate and authorize users in order to access the MapsIndoors CMS and secured MapsIndoors solutions.
