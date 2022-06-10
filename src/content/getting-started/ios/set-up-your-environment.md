---
title: Set Up Your Environment
toc: true
eleventyNavigation:
  title: Set Up Your Environment
  key: getting-started-ios-setupyourenvironment
  parent: getting-started-ios
  order: 91
---

Now that you have taken care of all the preliminary issues, we can start building the app. Throughout this guide, you will continously modify this project to extend its functionality to cover a number of basic features.

<!-- Known Issues -->
{% include "src/content/shared/known-issues-ios.md" %}

## Create an Xcode Project

We recommend using [Xcode](https://developer.apple.com/xcode/) for following along, for this guide we will be using Xcode 13.0. Note that an iOS mobile device is not required, as Xcode allows the use of a simulator. Furthermore, in accordance with the known issues with Google Maps and Arm-based Apple Silicon (M1) Macs, we will be using an iPhone 11 (iOS 13.7) simulator throughout.

We start off by creating an Xcode project using the App template,

![Xcode Template](/assets/ios/getting-started/xcode_template.png)

For the project settings, you can call it anything you like, however ensure the following settings are set to follow along easier,

* Interface: Storyboard
* Language: Swift

![Project Options](/assets/ios/getting-started/project_options.png)

You should now have a project folder with the following files,

![Project Folder](/assets/ios/getting-started/project_folder.png)

For the sake of simplicity we will only be operating on these pre-generated files throughout the guide.

## Installing the MapsIndoors SDK

MapsIndoors can either be installed using CocoaPods ([Getting Started with CocoaPods](https://guides.cocoapods.org/using/getting-started.html)) or through a manual installation.

<mi-tabs>
<mi-tab label="Using CocoaPods" tab-for="cocoapods"></mi-tab>
<mi-tab label="Manually" tab-for="manually"></mi-tab>
<mi-tab-panel id="cocoapods">

### Installing MapsIndoors Using CocoaPods

From MapsIndoors SDK version 3.32.0 and upwards, in order for CocoaPods to fetch the SDK properly it is neccessary to install `git-lfs` ([Install Guide](https://git-lfs.github.com/)).

1. Create an empty text file named `Podfile` in your project directory (same folder as your *.xcodeproj*).
2. Add your dependecies to the Podfile as followed (replace `YOUR_APPLICATION_TARGET_NAME_HERE` with your project name),

    ```text
    source 'https://github.com/CocoaPods/Specs.git'

    platform :ios, '15.0'

    target 'YOUR_APPLICATION_TARGET_NAME_HERE' do
      use_frameworks!

      pod 'MapsIndoors', '~>3.34.0'

    end
    ```

3. Save the Podfile and open a terminal in the directory of the project.
`cd \<path-to-project>`

4. Run `pod install` in the terminal.

5. Close Xcode.

6. From this time onwards, use the *.xcworkspace* file to open the project from now on.

<!-- Known Issues -->
{% include "src/content/shared/known-issues-ios.md" %}

</mi-tab-panel>
<mi-tab-panel id="manually">

### Install MapsIndoors Manually

Since MapsIndoors is dependent on [Google Maps iOS SDK](https://developers.google.com/maps/documentation/ios-sdk/overview), you must also install this SDK, either [manually](https://developers.google.com/maps/documentation/ios-sdk/start#install-manually), [using Carthage](https://developers.google.com/maps/documentation/ios-sdk/start#use-carthage) or [using CocoaPods](https://developers.google.com/maps/documentation/ios-sdk/start#use-cocoapods). You should use [Google Maps iOS version 4.2.0](https://dl.google.com/dl/cpdc/870a9df85dbcbadc/GoogleMaps-4.2.0.tar.gz) since MapsIndoors >=3.30.0 is linked against this version.

When the Google Maps installation is completed, go through these steps to install MapsIndoors:

* Download and unzip the latest [MapsIndoors.xcframework](https://github.com/MapsIndoors/MapsIndoorsIOS/releases/download/{{ ios.sdkVersion }}/MapsIndoors.xcframework.zip).
* Drag and drop the framework into your XCode project. In the dialog that pops up, choose “Copy items if needed” and make sure the framework is added to the correct target.
* From XCode, right click the imported framework and click "Show in Finder".
* In Finder, Locate ios-arm64 > MapsIndoors.framework > Resources > MapsIndoors.bundle, and drag the bundle into your XCode project as well. This time, make sure to uncheck “Copy items if needed”.

</mi-tab-panel>
</mi-tabs>

> This "Getting Started" guide is created using a specific version of the SDK. When moving beyond the "Getting Started" guide, please be sure to use the latest version of the SDK.

## Adding API Credentials

Open back up the project and navigate to the file `AppDelegate.swift`.

1. Add the following import statements to the top of the file,  

    ```swift
    import GoogleMaps  
    import MapsIndoors
    ````

2. Insert the following into the `application(_:didFinishLaunchingWithOptions:)` method,

```swift
GMSServices.provideAPIKey(      "YOUR_GOOGLE_API_KEY")  
MapsIndoors.provideAPIKey(      "YOUR_MAPSINDOORS_API_KEY",  
            googleAPIKey:       "YOUR_GOOGLE_API_KEY")
````

Finally, remember to replace `YOUR_GOOGLE_API_KEY` with your Google API key and `YOUR_MAPSINDOORS_API_KEY` with your MapsIndoors API demo key (d876ff0e60bb430b8fabb145).

<p class="next-article"><a class="mi-button mi-button--outline" href="{{ site.url }}/content/getting-started/ios/display-a-map/">Next up: Display a Map</a></p>
