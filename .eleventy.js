const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const embedYouTube = require('eleventy-plugin-youtube-embed');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(embedYouTube);
};

module.exports = function(eleventyConfig) {
  // Copy './assets/' to '_site/assets/'
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.setBrowserSyncConfig({
    ui: false
  });
  eleventyConfig.addLayoutAlias('default', 'default.njk');

  return {
    templateFormats: ['njk', 'md', '11ty.js'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  };

  // Get only content that matches multiple tags
  // eleventyConfig.addCollection('androidV3', function(collection) {
  //   return collection.getFilteredByTags('android', 'v3').sort((b, a) => {
  //     if (a.data.eleventyNavigation.order > b.data.eleventyNavigation.order)
  //       return -1;
  //     else if (
  //       a.data.eleventyNavigation.order < b.data.eleventyNavigation.order
  //     )
  //       return 1;
  //     else return 0;
  //   });
  // });
  // eleventyConfig.addCollection('androidV3Tutorials', function(collection) {
  //   return collection
  //     .getFilteredByTags('android', 'v3', 'tutorials')
  //     .sort((b, a) => {
  //       if (a.data.eleventyNavigation.order > b.data.eleventyNavigation.order)
  //         return -1;
  //       else if (
  //         a.data.eleventyNavigation.order < b.data.eleventyNavigation.order
  //       )
  //         return 1;
  //       else return 0;
  //     });
  // });
  // eleventyConfig.addCollection('iosV2Guides', function(collection) {
  //   return collection.getFilteredByTags('ios', 'v2', 'guides').sort((b, a) => {
  //     if (a.data.eleventyNavigation.order > b.data.eleventyNavigation.order)
  //       return -1;
  //     else if (
  //       a.data.eleventyNavigation.order < b.data.eleventyNavigation.order
  //     )
  //       return 1;
  //     else return 0;
  //   });
  // });
  // eleventyConfig.addCollection('iosV3Guides', function(collection) {
  //   return collection.getFilteredByTags('ios', 'v3', 'guides').sort((b, a) => {
  //     if (a.data.eleventyNavigation.order > b.data.eleventyNavigation.order)
  //       return -1;
  //     else if (
  //       a.data.eleventyNavigation.order < b.data.eleventyNavigation.order
  //     )
  //       return 1;
  //     else return 0;
  //   });
  // });
  // eleventyConfig.addCollection('iosV2', function(collection) {
  //   return collection.getFilteredByTags('ios', 'v2').sort((b, a) => {
  //     if (a.data.eleventyNavigation.order > b.data.eleventyNavigation.order)
  //       return -1;
  //     else if (
  //       a.data.eleventyNavigation.order < b.data.eleventyNavigation.order
  //     )
  //       return 1;
  //     else return 0;
  //   });
  // });
  // eleventyConfig.addCollection('iosV3', function(collection) {
  //   return collection.getFilteredByTags('ios', 'v3').sort((b, a) => {
  //     if (a.data.eleventyNavigation.order > b.data.eleventyNavigation.order)
  //       return -1;
  //     else if (
  //       a.data.eleventyNavigation.order < b.data.eleventyNavigation.order
  //     )
  //       return 1;
  //     else return 0;
  //   });
  // });
  // eleventyConfig.addCollection('iosV2Tutorials', function(collection) {
  //   return collection
  //     .getFilteredByTags('ios', 'v2', 'tutorials')
  //     .sort((b, a) => {
  //       if (a.data.eleventyNavigation.order > b.data.eleventyNavigation.order)
  //         return -1;
  //       else if (
  //         a.data.eleventyNavigation.order < b.data.eleventyNavigation.order
  //       )
  //         return 1;
  //       else return 0;
  //     });
  // });
  // eleventyConfig.addCollection('iosV3Tutorials', function(collection) {
  //   return collection
  //     .getFilteredByTags('ios', 'v3', 'tutorials')
  //     .sort((b, a) => {
  //       if (a.data.eleventyNavigation.order > b.data.eleventyNavigation.order)
  //         return -1;
  //       else if (
  //         a.data.eleventyNavigation.order < b.data.eleventyNavigation.order
  //       )
  //         return 1;
  //       else return 0;
  //     });
  // });
  // eleventyConfig.addCollection('webV3Guides', function(collection) {
  //   return collection.getFilteredByTags('web', 'v3', 'guides').sort((b, a) => {
  //     if (a.data.eleventyNavigation.order > b.data.eleventyNavigation.order)
  //       return -1;
  //     else if (
  //       a.data.eleventyNavigation.order < b.data.eleventyNavigation.order
  //     )
  //       return 1;
  //     else return 0;
  //   });
  // });
  // eleventyConfig.addCollection('webV3', function(collection) {
  //   return collection.getFilteredByTags('web', 'v3').sort((b, a) => {
  //     if (a.data.eleventyNavigation.order > b.data.eleventyNavigation.order)
  //       return -1;
  //     else if (
  //       a.data.eleventyNavigation.order < b.data.eleventyNavigation.order
  //     )
  //       return 1;
  //     else return 0;
  //   });
  // });
  // eleventyConfig.addCollection('various', function(collection) {
  //   return collection.getFilteredByTags('various').sort((b, a) => {
  //     if (a.data.eleventyNavigation.order > b.data.eleventyNavigation.order)
  //       return -1;
  //     else if (
  //       a.data.eleventyNavigation.order < b.data.eleventyNavigation.order
  //     )
  //       return 1;
  //     else return 0;
  //   });
  // });
  // eleventyConfig.addCollection('api', function(collection) {
  //   return collection.getFilteredByTags('api').sort((b, a) => {
  //     if (a.data.eleventyNavigation.order > b.data.eleventyNavigation.order)
  //       return -1;
  //     else if (
  //       a.data.eleventyNavigation.order < b.data.eleventyNavigation.order
  //     )
  //       return 1;
  //     else return 0;
  //   });
  // });
  // eleventyConfig.addCollection('cms', function(collection) {
  //   return collection.getFilteredByTags('cms').sort((b, a) => {
  //     if (a.data.eleventyNavigation.order > b.data.eleventyNavigation.order)
  //       return -1;
  //     else if (
  //       a.data.eleventyNavigation.order < b.data.eleventyNavigation.order
  //     )
  //       return 1;
  //     else return 0;
  //   });
  // });
  // return {
  // dir: {
  //     input: './', // Equivalent to Jekyll's source property
  //     output: './_site', // Equivalent to Jekyll's destination property
  // layouts: './_layouts'
  // }
  // };
};

// {{ array | where: key,value }} - like Jekyll's 'where' function, e.g. {{ site.members | where: "graduation_year","2014" }}
