---
title: Password Reset
eleventyNavigation:
    key: passwordreset
    parent: various
    title: Password Reset
    order: 440
---

## Password Validation

A password must be 16 characters or longer in order to be valid.

## Password Reset

Any user can reset their password via [https://auth.mapsindoors.com/login/forgotpassword](https://auth.mapsindoors.com/login/forgotpassword). After submitting an e-mail address, a token is generated and a link containing e-mail address and token is sent to the submitted e-mail address.

Clicking the link, the user will see a password reset page, where a password must be entered twice. Once these are validated and submitted, a confirmation page is shown, and the password is reset and changed. The used token, along with all others, are invalidated after successfully changing the password.

Token expiration is currently set to 1 hour, individually set for each token upon requesting a password reset.
