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

The project setup is simple. We use pure JavaScript so we do not need to install any frameworks.

1. Start by creating a new project folder
1. Inside that, create two empty files: `index.html` and `main.js`.

    > The file `index.html` is the entry point for our application and contains the HTML code. The file `main.js` will be included in `index.html` and consists of the JavaScript code for the sample application.

1. Open `index.html`. Create a basic HTML structure and include the `main.js` file:

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
