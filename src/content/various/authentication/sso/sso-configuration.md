---
title: SSO Configuration
eleventyNavigation:
  key: various-authentication-sso-configuration
  title: SSO Configuration
  parent: various-authentication-sso
  order: 10
---

Configuring the SSO is currently handled by MapsPeople. Therefore there needs to be an exchange of information - metadata and credentials related to the authentication server, and a unique redirect URL to MapsIndoors. In case of issues, these details must also be documented.

The list of supported providers currently includes Okta, Active Directory Federation Services, Azure Active Directory, Google and Amazon Cognito. However, any provider that can meet the OIDC requirements described below can be supported.

## OIDC

OIDC ([Open ID Connect](https://openid.net/connect/)) is the best option for enabling login to MapsIndoors via an authentication server, available from most authentication providers. OIDC is an open standard for authentication, built upon [OAuth 2](https://oauth.net/2/) - an open standard for authorization.

The bare minimum needed by MapsIndoors Auth - given that the authentication server follows the standard as closely as possible - is the following:

* **Authority URL** - The base URL of the authentication server, where the OIDC/OAuth URLs are relative to.
* **Client ID** - The ID of the MapsIndoors-specific client configured at the authentication server.
* **Client Secret**, unless [**client assertion**](https://datatracker.ietf.org/doc/html/rfc7523) is applicable - The secret that was generated for the client, unless client assertion is to be used.

A valid **e-mail** must provided through the `id_token`, or `userinfo endpoint`, as one of the following claim types:

* `email`
* `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`
* `preferred_username`
* `name`

This information is all MapsIndoors Auth needs. For the authentication server, it will also need **whitelisting of the sign-in URL** for the configured client:

`https://auth.mapsindoors.com/signin-NAME`

The `NAME` is usually a short handle based on the organisation name and possibly the type of authentication server - e.g. `mapspeople_okta`.

If client assertion is to be used, the public certificate of MapsIndoors Auth can be retreived at the MapsIndoors Auth [jwks endpoint](https://auth.mapsindoors.com/.well-known/openid-configuration/jwks).

### Additional configuration

Using a configuration like described above, the following will be assumed - with further possibility for configuration.

MapsIndoors Auth will start an OAuth 2 authorization code flow, using the defaults:

* The authentication server OIDC metadata is found at `.well-known/openid-configuration`, a relative URL to the Authority URL given earlier. If the metadata is found elsewhere, the absolute URL must be provided.
* Two scopes are requested: `openid profile`. If other, or no, scopes should be provided, this must be specified.
* MapsIndoors Auth will use the `access_token` to retrieve additional claims from the `userinfo endpoint`. This can be disabled if needed.

For client assertions, these are the defaults:

* The signing algorithm to be used is RS256. Others are available upon request.
* The audience parameter is set to the same as the Authority URL. If this differs it must be specified.

## Organization-specific CMS URL

If an authentication server has been configured, there will now be an IDP (IDentity Provider) with the `NAME` as defined above. For apps, this can be set via the `acr_values` parameter of the authorize request - e.g. `[...]&acr_values=idp:mapspeople_okta` - in order to have MapsIndoors Auth SSO directly redirect to the authentication server SSO. However, specifically for MapsIndoors CMS, a name can also be set which allows for organization-specific login - i. e. using the authentication server. Note that it does not have to be the same name used for the sign-in redirect URL.

For example, with an organization name of `mapspeople`, a URL will be available at `https://cms.mapsindoors.com?organizationName=mapspeople`. If a login is required, it will redirect to the authentication server SSO, as opposed to MapsIndoors Auth SSO. Alternatively, the organization name can be entered at `https://auth.mapsindoors.com/login/organization`, if a login flow was initiated at the CMS without the `organizationName` parameter, or possibly initiated by a third-party app.
