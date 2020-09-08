const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const embedYouTube = require('eleventy-plugin-youtube-embed');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(embedYouTube);
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy({
    './node_modules/@mapsindoors/components/': 'assets/components',
  });
  eleventyConfig.addWatchTarget('./src/assets/');
  eleventyConfig.setBrowserSyncConfig({
    ui: false,
  });
  eleventyConfig.setUseGitIgnore(false);

  module.exports = function (eleventyConfig) {
    eleventyConfig.addCollection('androidv2', function (collectionApi) {
      return collectionApi.getFilteredByTags('android', 'v2');
    });
  };

  module.exports = function (eleventyConfig) {
    eleventyConfig.addCollection('androidv3', function (collectionApi) {
      return collectionApi.getFilteredByTags('android', 'v3');
    });
  };

  module.exports = function (eleventyConfig) {
    eleventyConfig.addCollection('iosv2', function (collectionApi) {
      return collectionApi.getFilteredByTags('ios', 'v2');
    });
  };

  module.exports = function (eleventyConfig) {
    eleventyConfig.addCollection('iosv3', function (collectionApi) {
      return collectionApi.getFilteredByTags('ios', 'v3');
    });
  };

  module.exports = function (eleventyConfig) {
    eleventyConfig.addCollection('webv3', function (collectionApi) {
      return collectionApi.getFilteredByTags('web', 'v3');
    });
  };

  return {
    dir: {
      input: `src`,
      output: `dist`,
      includes: `_includes`,
      data: `_data`,
    },
    templateFormats: ['njk', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
};
