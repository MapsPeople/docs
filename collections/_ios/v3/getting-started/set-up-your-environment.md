---
title: Set up your environment
layout: tutorial
parent: getting-started
nav_weight: 1 
published: true
date: 2019-08-26
---

## Setup CocoaPods

If you haven’t already, install CocoaPods:
[Getting Started with CocoaPods](https://guides.cocoapods.org/using/getting-started.html)

## Setup MapsIndoors

* If you don't have an Xcode project yet, create one now and save it to your local machine. (If you're new to iOS development, create a "Single View Application".)
* Create a file named `Podfile` in your project directory. This file defines your project's dependencies.
* Edit the `Podfile` and add your dependencies. Here is an example:

```
{% raw %}source 'https://github.com/CocoaPods/Specs.git'
target 'YOUR_APPLICATION_TARGET_NAME_HERE' do
  pod 'MapsIndoors' '{{%product-version%}}'
end{% endraw %}
```

* Save the `Podfile`.
* Open a terminal and go to the directory containing the `Podfile`:
* `cd <path-to-project>`
* Run the `pod install` command. This will install the APIs specified in the `Podfile`, along with any dependencies they may have.
* Close Xcode, and then open (double-click) your project's *.xcworkspace* file to launch Xcode. From this time onwards, you must use the *.xcworkspace* file to open the project.

Add your credentials to your `AppDelegate.swift` as follows:

Add the following import statements:

```swift
import GoogleMaps
import MapsIndoors
```

Add the following to your `application(_:didFinishLaunchingWithOptions:)` method:

```swift
GMSServices.provideAPIKey(      "YOUR_GOOGLE_API_KEY")
MapsIndoors.provideAPIKey(      "YOUR_MAPSINDOORS_API_KEY", 
            googleAPIKey:       "YOUR_GOOGLE_API_KEY")
```

Replace:

* `YOUR_GOOGLE_API_KEY` with your Google API key
* `YOUR_MAPSINDOORS_API_KEY` with your MapsIndoors API key. (In MapsIndoors iOS SDK v1, this key was known as your `Solution Id`)
