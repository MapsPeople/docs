---
title: Create a new project
toc: true
eleventyNavigation:
  title: Create a project
  key: web-v4-getting-started-project
  parent: web-v4-getting-started
  order: 120
---

<!-- Overview -->
{% include "src/shared/getting-started/project/overview.md" %}

<!-- Environment -->
{% include "src/shared/getting-started/project/environment.md" %}

* **TODO: Install and setup dependencies (Eg. CocoaPods, build.gradle file, node.js, NPM, and MI Components)**
* **TODO: Create an empty project (Xcode, Android application)**

### Create a new app project

### Initialize MapsIndoors

When building your own app you can choose between two paths:

1. Loading the SDK manually using a script tag which requires no dependencies.
2. Installing the configurable [MapsIndoors Web Components](http://components.mapsindoors.com/) which handles all the configurations of MapsIndoors behind the scene.

Each of the coming steps in this getting started tutorial will have an option for both paths.

<mi-tabs>
<mi-tab label="Manually" tab-for="manually"></mi-tab>
<mi-tab label="MapsIndoors Web Components" tab-for="components"></mi-tab>

<mi-tab-panel id="manually">

The MapsIndoors SDK will be loaded using a script tag and requires no more in this step.

</mi-tab-panel>

<mi-tab-panel id="components">

Using the MapsIndoors Web Components, you need to install the following:

* **Node.js**<br>
For more information on installing Node.js, see [nodejs.org](https://nodejs.org/). If you are unsure what version of Node.js runs on your system, run node -v in a terminal window.

* **npm package manager**<br>
For more information about npm and how to install, see [npmjs.com](https://docs.npmjs.com/about-npm).

* **MapsIndoors Web Components**<br>
For more information about MapsIndoors Web Components and how to install, see [components.mapsindoors.com/](https://components.mapsindoors.com/) and [npmjs.com/package/@mapsindoors/components](https://www.npmjs.com/package/@mapsindoors/components).

</mi-tab-panel>
</mi-tabs>
