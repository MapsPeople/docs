---
title: 2-Factor Authentication
eleventyNavigation:
    key: 2fa
    parent: various
    title: 2-Factor Authentication
    order: 440
---

## Enabling 2-Factor Authentication

Enabling 2-Factor Authentication (2FA) is done by the user themselves via the CMS. If a user clicks their avatar in the top-right corner, a drop-down menu will appear, where "Settings" should be clicked. The user should now follow the instructions to enable 2FA.

![2fa instructions](/assets/various/Dashboard/2fa.png)

## Disabling 2FA

Once 2FA is enabled, this page will change to allow disabling of 2FA, should the user want to do this at a later point. Simply follow the instructions on the page.

![2fa-disable instructions](/assets/various/Dashboard/2fa-disable.png)

### Disabling 2FA on behalf of a user

In case a user loses their ability to generate a code, a Solution owner can help them out via a request to: `DELETE /api/account/{userId}/twofactor`
