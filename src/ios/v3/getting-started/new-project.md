---
title: Create a new project
toc: true
eleventyNavigation:
  title: Create a project
  key: ios-v3-getting-started-project
  parent: ios-v3-getting-started
  order: 120
---

<!-- Overview -->
{% include "src/shared/getting-started/project/overview.md" %}

<!-- Environment -->
{% include "src/shared/getting-started/project/environment.md" %}

### Create Xcode project

If you don't have an Xcode project yet, create one now and save it to your local machine.

If you're new to iOS development, create a "Single View Application" or "App" (depending on your version of Xcode) for iOS. Name it how you like, e.g. "MIstarter".

This guide uses Swift as the programming language and Storyboards for creating user interfaces, so choose that for your project if you want to follow along easier.

### Install CocoaPods

If you haven't already, install CocoaPods:
[Getting Started with CocoaPods](https://guides.cocoapods.org/using/getting-started.html)

* Create a file named `Podfile` in your project directory (same folder as your *.xcodeproj* file). The `Podfile` file defines your project's dependencies.
* Edit the `Podfile` and add your dependencies. Here is an example:

  ```ruby
  source 'https://github.com/CocoaPods/Specs.git'

  platform :ios, '14.0'

  target 'YOUR_APPLICATION_TARGET_NAME_HERE' do
    pod 'MapsIndoors', '~>3.19' # Check CocoaPods for latest version
  end
  ```

* Save the `Podfile`.
* Open a terminal and go to the directory containing the `Podfile`:

  ```shell
  cd <path-to-project>
  ```

* Run the `pod install` command. This will install the APIs specified in the `Podfile`, along with any dependencies they may have.

### Provide credentials

Close Xcode, and then open (double-click) your project's *.xcworkspace* file to launch Xcode. From this time onwards, you must use the *.xcworkspace* file to open the project.

Add your credentials to your `AppDelegate.swift`

  1. Add the following import statements:

      ```swift
      import GoogleMaps
      import MapsIndoors
      ```

  1. Add the following to your `application(_:didFinishLaunchingWithOptions:)` method:

      ```swift
      GMSServices.provideAPIKey(      "YOUR_GOOGLE_API_KEY")
      MapsIndoors.provideAPIKey(      "YOUR_MAPSINDOORS_API_KEY",
                  googleAPIKey:       "YOUR_GOOGLE_API_KEY")
      ```

      Replace:

        * `YOUR_GOOGLE_API_KEY` with your Google API key.
        * `YOUR_MAPSINDOORS_API_KEY` with your MapsIndoors API key.

<p class="next-article"><a class="mi-button mi-button--outline" href="{{ site.url }}/ios/v3/getting-started/map/">Next up: Show a map</a></p>
