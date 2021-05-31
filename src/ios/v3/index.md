---
title: MapsIndoors iOS SDK v3
eleventyNavigation:
  parent: index
  key: ios-v3
  title: iOS v3
  order: 1
---

This guide explains how to start using a MapsIndoors map in your iOS application using the MapsIndoors iOS SDK v3.

To benefit from the guides, you will need basic knowledge about:

* iOS Development
* Google Maps iOS SDK

> Known Issues:
>
> 1. If you are compiling with Xcode 11 with bitcode ON, you should either switch OFF bitcode or update to version 3.6.0 or later. With bitcode ON, previous versions of the SDK could crash. We are in dialog with Apple regarding the bitcode issue.
> 2. [This issue](https://forums.developer.apple.com/thread/123003) makes our SDK crash if built with XCode 10 and below. We implement a workaround in 3.7.0. An immediate workaround for you is to build with XCode 11.
