---
title: 2-Factor Authentication
eleventyNavigation:
    key: web-v4-guides-authentication-2fa
    parent: web-v4-guides-authentication
    title: 2-Factor Authentication
    order: 440
---

## Enabling 2-Factor Authentication

Details about the user’s current 2FA activation can be retrieved via the command: `GET /api/account/twofactor`

If 2FA is **not** activated for the requesting user, the response will look like this:

```js
{
  twoFactorEnabled: false,
  sharedKey: "GENERATED_KEY",
  authenticatorUri: "otpauth://totp/ISSUER:USER_EMAIL?secret=GENERATED_KEY&issuer=ISSUER&digits=6"
}
```

* `twoFactorEnabled` is true or false, depending on whether or not the user has activated 2FA

* `sharedKey` is a generated secret to be inserted into an authenticator app

* `authenticatorUri` is an URI that when followed activates a trigger on the device in order to enter the secret directly into an app. It is commonly used to create a QR code for mobile devices to follow the link.

> As long as 2FA is not enabled, a new key will be generated and persist on each request. Be careful not to insert the key into an authenticator app, and then request a new key before validating the existing key, as this will create a mismatch between key and generated code.

Even though a key has been generated and returned, and persisted for the user as well, 2FA is still not enabled. This can only be done by actually entering the secret into an activator - i. e. an app that can generate the 6-digit codes by utilizing the secret and system clock, for example Google Authenticator. Once this is done and a code is available, this code can be submitted for the user by the call: `PUT /api/account/twofactor/verification?code=CODE`

The code will then be verified using the last generated key. If verification is possible it will return true, otherwise false.

> This is a PUT request with an empty request body. It might seem strange, but it is due to the nature of REST APIs and their inability to represent actions that are not directly manipulating resources. PUT is used instead of GET as this does indeed altering something, just on something that cannot be altered directly.

If 2FA is already enabled for the requesting user, the response will instead look like this:

```js
{
  twoFactorEnabled: true,
  sharedKey: null,
  authenticatorUri: null
}
```

The details are no longer needed as the key is persisted in the database and it is presumed that the secret is in an authenticator app kept by the user.

## Disabling 2FA

This can be done by the user themselves by requesting: `DELETE /api/account/twofactor?code=CODE`

Once the code is verified, `twoFactorEnabled` will once again be set to false. The key will be kept, since a new key will be generated on the next request of the details route.

### Disabling 2FA on behalf of a user

In case a user loses their ability to generate a code using the activated secret, an owner can help them out via a request to: `DELETE /api/account/{userId}/twofactor`
