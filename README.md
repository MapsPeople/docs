# Docs for MapsIndoors iOS, Android, Web SDKs, and Integration API

This is the repository holding all documentation related to developing apps on the [MapsIndoors](https://www.mapspeople.com/mapsindoors/) platform.

---

## Getting started

The documentation site is built with [Eleventy](https://www.11ty.dev).

Eleventy automatically builds and deploys from the `main` branch in this repository. Only members of this organization can approve Pull Requests into the `main` branch.

### Preview the site on your own machine

#### Prerequisites

* Node

#### Clone repository and run Eleventy

1. Clone this repository to your machine:

    ```bash
    git clone git@github.com:MapsPeople/docs
    cd docs
    ```

1. Install dependencies

    ```bash
    npm i
    ```

1. Run Eleventy

    ```bash
    npm run start
    ```

    OR IF THAT DOESN'T WORK

    ```bash
    eleventy --serve
    ```

1. Open <http://localhost:8080>

### Create a new page

1. Create a feature branch:

    ```bash
    git checkout -b feature/teleportation-guide
    ```

2. Copy an existing `.md`-file from e.g. `./ios/v3/search/` to `./ios/v3/teleportation/`.
3. The [Front matter](https://jekyllrb.com/docs/step-by-step/03-front-matter/) at the top of the file only needs to things; `title` and `eleventyNavigation`:

    ```yaml
    ---
    title: Teleportation
    eleventyNavigation:
        key: Teleportation
        parent: ios-v3-teleportation
        order: 420
    ---
    ```

    `tags` and `layout` are defined in the `*.json`-files named after their parent folders to avoid having to write it for every file.

4. Navigate to your new page to check it out.
5. If all looks well, use `git` to add, commit and push your new page:

    ```bash
    git status
    git add .
    git commit -m "Added new guide to Teleportation"
    git push -u origin feature/teleportation-guide
    ```

6. Go to [docs.mapsindoors.com](https://docs.mapsindoors.com) to see your new page live.

#### Create a new root folder

You might need to add a new folder alongside the existing "Map", "Searching", "Data" and "Directions" folders. In order to ensure that the exisiting templates are applied correctly, and that these folders can feature in, for example, the sidebar and footer, there are some steps you must take.

If in doubt for any of these steps, take a look at how it's already done in `.eleventy.js`, `sidebar.njk` and `footer.njk`.

1. In `.eleventy.js`, add the following lines of code:

```js
eleventyConfig.addCollection("REPLACE", function (collectionApi) {
        return collectionApi.getFilteredByTags("REPLACE");
    });
```

This creates a "collection", which gathers all the files under this new root folder to a combined entity. Replace "REPLACE" with whatever you wish to name your collection, often the same as the name of the folder.

1. In `sidebar.njk`, to ensure your new folder displays a sidebar, add the following code:

```html
{% if '/REPLACE' in page.url %}
    <p class="sidebar__header"><a href="/replace/">REPLACE</p>
    {% set navPages = collections.published | eleventyNavigation("REPLACE") %}
  {% endif %}
```

Replace "REPLACE" with the name of the collection to created in Step 1.

1. Lastly, you might want to ensure that your new menu features in the footer as well. To do this, insert the following code in `footer.njk`

```html
    <h2>
      <a href="/REPLACE/">REPLACE</a>
    </h2>
    <ul class="list">
      {% set REPLACE = collections.published | eleventyNavigation("REPLACE") %}
      {%- for entry in REPLACE %}
        {{ renderNavListItem(entry) }}
      {%- endfor -%}
    </ul>
```

Replace "REPLACE" with the name of your collection. Your menu should now appear in the footer as well.

#### Tips

1. Use feature-branches. That makes it much easier to review new tutorials before they're live.
2. The folder structure determines the url structure of the page.
3. The `*.json`-files named for their parent folders are used to inject data into the Markdown-files in that folder. That way you can set the template for all files without repeating yourself in each file's Front Matter, or set a tag on all pages to add it to a collection to set up navigation.
4. If a page has the same `key` in `eleventyNavigation` as another page, we have a problem. You can override what is displayed in the sidebar by setting a `title` under `eleventyNavigation` and making the `key` something distinct.
5. Creating a redirecting page

    Set the front matter to the following:

    ```markdown
    layout: redirect
    destination: /path/to/page/
    ```

### Markdown

Eleventy uses Markdown ([cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)) for rendering posts to html.

#### Linting Markdown

To ensure consistency throughout the Markdown-files, we use a linter. The best linter for VS Code is the extension with the telling name "[VS Code Markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)".
 
Two rules are turned off specifically:

* [MD013 - Line length](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md013)
* [MD033 - No inline HTML](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md033)
