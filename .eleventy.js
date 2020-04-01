module.exports = function(eleventyConfig) {

  /* Pass through - stop eleventy touching */
  // eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/android-chrome-192x192.png');
  eleventyConfig.addPassthroughCopy('src/android-chrome-512x512.png');
  eleventyConfig.addPassthroughCopy('src/apple-touch-icon.png');
  eleventyConfig.addPassthroughCopy('src/favicon-16x16.png');
  eleventyConfig.addPassthroughCopy('src/favicon-32x32.png');
  eleventyConfig.addPassthroughCopy('src/favicon.ico');
  eleventyConfig.addPassthroughCopy('src/site.webmanifest');

  return {
    dir: { input: 'src', output: '_site', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk'
  }
}
