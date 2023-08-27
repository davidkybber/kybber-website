const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const markdownIt = require('markdown-it');
const markdownItClass = require('@toycode/markdown-it-class');

const mapping = {
  h1: ['title is-1'],
  h2: ['title is-3'],
  h3: ['title is-5'],
  p: ['subtitle is-6 is-spaced'],
  a: ['text-blue-300', 'hover:underline'],
};

const md = markdownIt({ linkify: true, html: true });
md.use(markdownItClass, mapping);

module.exports = function(eleventyConfig) {
  eleventyConfig.setLibrary('md', md);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy("styles/debug.css");
};
