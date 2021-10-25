---
title: User Authentication and Authorization
eleventyNavigation:
    key: ios-v3-guides-sso
    title: User Authentication and Authorization
    parent: ios-v3-guides
    order: 440
---

This guide covers the different aspects of _User Authentication and Authorization_ in the MapsIndoors iOS SDK.

A MapsIndoors dataset can only be subject to User Authentication and Authorization if an integration with an identity provider exists. Current examples of such identity providers are _Google_ and _Microsoft_. These providers and more can be added and integrated to your MapsIndoors project by request.

MapsIndoors follows a common Auth2-based Single Sign-on flow that allows for multiple login services. As such, we recommend that you use a commonly used SSO client library for your application. We created this sample with the SSO client library from Open Id.
