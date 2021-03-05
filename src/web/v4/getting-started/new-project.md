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

The project setup is really simple. Because we only want to use pure JavaScript we do not need to install any frameworks.

* Start by creating a new project folder
* Inside that, create two empty files: index.html and main.js.

> The file index.html is the entry point for our application and contains the HTML code. The file main.js will be included in index.html and going to consist of the corresponding JavaScript code needed for the sample application.

* Open index.html and create a basic HTML structure and include the main.js file.

```html
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MapsIndoors</title>
</head>
<body>
  <script src="main.js"></script>
</body>
</html>
```
