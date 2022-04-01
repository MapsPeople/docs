---
title: Create a New Project
toc: true
eleventyNavigation:
  title: Create a New Project
  key: getting-started-web-project
  parent: getting-started-web
  order: 120
---

<!-- Overview -->
{% include "src/content/shared/getting-started/project/overview.md" %}

<!-- Environment -->
## Set Up Your Environment

1. While not strictly neccesary, if you do not have prior development experience, it is advised to install an Integrated Development Environment (IDE). A common one to use is [Visual Studio Code](https://code.visualstudio.com/), which is free.
1. Start by creating a new project folder. The location is not important, just remember the location, and ensure your newly created project folder is empty.
1. Inside that, create two empty files: `index.html` and `main.js`.

    > The file `index.html` is the entry point for our application and contains the HTML code. The file `main.js` will be read by `index.html` and consists of the JavaScript code for the actual application to run.

1. Open `index.html`. Create a basic HTML structure and include the `main.js` file, as follows:

```html/0
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

Both here, and in future code examples, you will always be able to see which of two files the code should go in, by looking at the first line, where the name of the file is written.

<p class="next-article"><a class="mi-button mi-button--outline" href="{{ site.url }}/content/getting-started/web/map/">Next up: Show a map</a></p>
