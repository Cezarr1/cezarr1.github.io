module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("**/*.{jpg,jpeg,png,gif,webp,tif,tiff,jfif,bmp,svg,ico}");
  eleventyConfig.addPassthroughCopy("**/*.{txt}");
  return {
    dir: {
      output: "_site"
    }
  };
};
