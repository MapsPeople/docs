const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const embedYouTube = require("eleventy-plugin-youtube-embed");
const fs = require("fs");
const pluginTOC = require('eleventy-plugin-toc')
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(embedYouTube);
    // Generates a Table of Content using an Eleventy filter
    eleventyConfig.addPlugin(pluginTOC, {
        tags: ['h2'],
    });
    // Provides syntax highlighting
    eleventyConfig.addPlugin(syntaxHighlight, {
        templateFormats: ["md"],
        alwaysWrapLineHighlights: false,
    });
    eleventyConfig.addWatchTarget("./src/assets/");
    eleventyConfig.setBrowserSyncConfig({
        ui: false,
        callbacks: {
            ready: function (err, bs) {
                bs.addMiddleware("*", (req, res) => {
                    const content_404 = fs.readFileSync("dist/404.html");
                    // Provides the 404 content without redirect.
                    res.write(content_404);
                    // Add 404 http status code in request header.
                    // res.writeHead(404, { "Content-Type": "text/html" });
                    res.writeHead(404);
                    res.end();
                });
            },
        },
    });
    eleventyConfig.setUseGitIgnore(false);

    // Populates all headings with an id attribute
    const markdownIt = require("markdown-it");
    const markdownItAnchor = require("markdown-it-anchor");
    const markdownLib = markdownIt({ html: true }).use(markdownItAnchor);
    eleventyConfig.setLibrary("md", markdownLib);

    eleventyConfig.addCollection("androidv2", function (collectionApi) {
        return collectionApi.getFilteredByTags("android", "v2");
    });

    eleventyConfig.addCollection("androidv3", function (collectionApi) {
        return collectionApi.getFilteredByTags("android", "v3");
    });

    eleventyConfig.addCollection("iosv2", function (collectionApi) {
        return collectionApi.getFilteredByTags("ios", "v2");
    });

    eleventyConfig.addCollection("iosv3", function (collectionApi) {
        return collectionApi.getFilteredByTags("ios", "v3");
    });

    eleventyConfig.addCollection("webv3", function (collectionApi) {
        return collectionApi.getFilteredByTags("web", "v3");
    });

    eleventyConfig.addCollection("changelogs", function (collectionApi) {
        return collectionApi.getFilteredByTags("changelogs");
    });

    eleventyConfig.addCollection("directions", function (collectionApi) {
        return collectionApi.getFilteredByTags("directions");
    });

    eleventyConfig.addCollection("map", function (collectionApi) {
        return collectionApi.getFilteredByTags("map");
    });

    eleventyConfig.addCollection("data", function (collectionApi) {
        return collectionApi.getFilteredByTags("data");
    });

    eleventyConfig.addCollection("searching", function (collectionApi) {
        return collectionApi.getFilteredByTags("searching");
    });

    eleventyConfig.addCollection("cms", function (collectionApi) {
        return collectionApi.getFilteredByTags("cms");
    });

    eleventyConfig.addCollection("published", function (collectionApi) {
        return [...collectionApi.getFilteredByGlob("./src/**/*.md")].filter(
            (post) => !post.data.draft
        );
    });

    return {
        dir: {
            input: `src`,
            output: `dist`,
            includes: `_includes`,
            data: `_data`,
        },
        templateFormats: ["njk", "md"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
    };
};
