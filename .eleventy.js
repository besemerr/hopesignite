// .eleventy.js
module.exports = function(eleventyConfig) {
  // Static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "src/scripts": "js" });

  // Watch SCSS for changes
  eleventyConfig.addWatchTarget("src/styles/");

  return {
    dir: {
      input:      "src/pages",
      includes:   "../_includes",
      layouts:    "../layouts",
      data:       "../_data",
      output:     "dist"
    },
    htmlTemplateEngine:    "njk",
    markdownTemplateEngine:"njk",
    dataTemplateEngine:    "njk"
  };
};
