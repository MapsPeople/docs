module.exports = {
  eleventyNavigation: {
    key: (data) => data.page.url,
    title: (data) => data.title,
    parent: (data) => parentPath(data.page.url),
  },
};
