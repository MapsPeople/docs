# Docs for MapsIndoors iOS, Android, Web SDKs, and Public API

This is the repository holding all documentation related to developing apps on the [MapsIndoors](https://www.mapspeople.com/mapsindoors/) platform.

---

## Getting started

The documentation site is built with [Jekyll](https://jekyllrb.com) and hosted on GitHub Pages.

Jekyll automatically builds and deploys from the `gh-pages` branch in this repository. Only members of this organization can merge into the `gh-pages` branch.

### Using Jekyll on your own machine to preview content

1. Clone this repository to your machine: 

  ```bash
  git clone git@github.com:MapsPeople/MIDOCS-jekyll
  cd MIDOCS-jekyll
  ```

2. Start Jekyll: 

  ```bash
  bundle exec jekyll serve --watch
  ```

3. Open `https://127.0.0.1:4000`

### Create a new post

1. Create a feature branch:

  ```bash
  git checkout -b feature/teleportation-tutorial
  ```

2. Copy an existing `.md`-file from e.g. `./collections/ios-v3/tutorials/` and modify it.
3. Make sure the [Front matter](https://jekyllrb.com/docs/step-by-step/03-front-matter/) at the top of the file is formatted like this:

  ```yaml
  ---
  title: Open a teleportation portal
  slug: open-teleportation-portal
  published: true
  date: 2019-07-10
  last_modified_at: 2019-07-12
  ---
  ```

4. Update the `date:` to today's date (perhaps using [a handy Snippet in VS Code](https://marketplace.visualstudio.com/items?itemName=jsynowiec.vscode-insertdatestring))
5. `last_modified_at` is optional. If left empty, it won't be rendered on the tutorial-page.
6. To add your new tutorial to the side-navigation, add it to the correct `data`-file. E.g. creating a new tutorial for iOS SDK v3, open `./_data/sdks/ios-v3.yml` and add the `page` and `url` to the right place like so:

  ```yaml
  tutorials:
    [...]
  - title: Teleportation
    subfolderitems:
    - page: Open a teleportation portal
      slug: open-teleportation-portal
  ```

7. Run `bundle exec jekyll serve --watch` and navigate to your new tutorial to check it out.
8. If all looks well, use `git` to add, commit and push your new tutorial:

  ```bash
  git status
  git add .
  git commit -m "Added new post about Teleportation"
  git push -u origin feature/teleportation-tutorial
  ```

9. Go to [mapsindoors.github.io](https://mapsindoors.github.io) to see your new tutorial live.

#### Tips

1. Please use feature-branches. That makes it much easier to review new tutorials before they're live.
1. The folder structure and filenames inside `tutorials` don't affect the url of the tutorial; the `collection` and `slug` defines its url. The reason there are numbers on the tutorial-folders and -files is to make them more readable.

### Markdown

Jekyll uses Markdown ([cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)) for rendering posts to html.

It uses a converter called [kramdown](https://kramdown.gettalong.org/index.html), which works the same as [Commonmark](https://commonmark.org) or [GitHub-flavored Markdown](https://help.github.com/en/articles/basic-writing-and-formatting-syntax), with some extra sprinkle on top. The [kramdown Quick Reference](https://kramdown.gettalong.org/quickref.html) gives an overview of the options, but you probably won't notice any differences.

### Jekyll tips

Jekyll offers [some extra features](https://jekyllrb.com/docs/usage/) when previewing content on your own machine.

Here are a few of them:

1. Include all drafts, future and unpublished posts:
  ```bash
  bundle exec jekyll serve --watch --drafts --future --unpublished
  ```

2. If serving locally is slow, use the experimental "Incremental build" that only rebuilds pages touched by changes: 

  ```bash
  bundle exec jekyll serve --watch --incremental
  ```

3. Do a one-off build to `./_site`:

  ```bash
  bundle exec jekyll build
  ```

### FAQ

#### Why `bundle exec jekyll serve` and not `jekyll serve`?

`bundle exec` uses the Jekyll version defined for the project in the `Gemfile`, not just any version of Jekyll that might be lying around on the machine. [Stack Overflow](https://stackoverflow.com/questions/51157446/whats-the-difference-between-bundle-exec-jekyll-serve-and-jekyll-serve)
