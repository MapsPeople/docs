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
};
