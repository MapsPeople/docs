const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

module.exports = function(eleventyConfig) {
  // Copy './assets/' to '_site/assets/'
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.setBrowserSyncConfig({
    ui: false,
    tunnel: true
  });

  // Get only content that matches multiple tags
  eleventyConfig.addCollection('androidV3', function(collection) {
    return collection.getFilteredByTags('android', 'v3').sort((b, a) => {
      if (a.data.eleventyNavigation.order > b.data.eleventyNavigation.order) return -1;
      else if (a.data.eleventyNavigation.order < b.data.eleventyNavigation.order) return 1;
      else return 0;
    });
  });
  eleventyConfig.addCollection('androidV3Tutorials', function(collection) {
    return collection
      .getFilteredByTags('android', 'v3', 'tutorials')
      .sort((b, a) => {
        if (a.data.eleventyNavigation.order > b.data.eleventyNavigation.order) return -1;
        else if (a.data.eleventyNavigation.order < b.data.eleventyNavigation.order) return 1;
        else return 0;
      });
  });

  // Universal Shortcodes (Adds to Liquid, Nunjucks, Handlebars)
  eleventyConfig.addShortcode('sdk', function(tutorialsList) {
    return ``;
  });
  return {
    dir: {
      input: './', // Equivalent to Jekyll's source property
      output: './_site', // Equivalent to Jekyll's destination property
      layouts: './_layouts'
    }
  };
};

// {{ array | where: key,value }} - like Jekyll's 'where' function, e.g. {{ site.members | where: "graduation_year","2014" }}
