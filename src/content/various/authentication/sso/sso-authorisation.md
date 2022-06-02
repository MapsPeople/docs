---
title: SSO Authorisation
toc: true
eleventyNavigation:
  key: various-authentication-sso-authorisation
  title: SSO Authorisation
  parent: various-authentication-sso
  order: 20
---

What a user can see and do is by default controlled in the MapsIndoors CMS.
When signing in with a username and password, or via one of the public authentication providers, authorization will be determined by the user configuration.

If an organization-specific authentication server is configured and used for signing in, there are more possibilities.
Similar to the login methods mentioned above, authorization will by default be determined based on the MapsIndoors user configuration.
However, if a user that can sign in via the authentication server, but does not exist in MapsIndoors, it will have its authorization determined via the authentication server.
This will be done via OAuth claims that can be found on the id_token (or via the userinfo endpoint upon authentication).
If no claims are provided, the user will still get read access to the solutions associated with the authentication provider.
If claims are provided, they will be mapped to MapsIndoors access definitions, so that authorization can occur based on what claims are associated with the user in the authentication server.

There is a default mapping that will occur if claims are provided in the following format:

```json
"custom:maps_access": [
  {
    "objectId": "012345678901234567891234",
    "objectType": "dataset",
    "role": "editor"
  },
  ...
]
```

There are three types of roles: admin, editor, and viewer.
Authorization can be given on two levels: organization and dataset.
A valid MapsIndoors ID must be provided as ObjectId.
The claim allows for more than one access definition.

If a different mapping is needed - possibly due to reuse of existing claims, or limitations in the authentication server, this will also be possible.
It will, however, require some additional configuration done by MapsPeople.
