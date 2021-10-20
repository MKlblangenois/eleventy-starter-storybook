const htmlmin = require("html-minifier");
const Nunjucks = require("nunjucks");

module.exports = (eleventyConfig) => {
   if (process.env.ELEVENTY_ENV !== "development") {
      let nunjucksEnvironment = new Nunjucks.Environment([
         new Nunjucks.FileSystemLoader(["src/_includes", "src/pages"]),
      ]);

      eleventyConfig.setLibrary("njk", nunjucksEnvironment);
   }

   // BrowserSync config
   eleventyConfig.setBrowserSyncConfig({
      files: [
         "**/*.njk",
         "**/*.md",
         "_site/**/*.css",
         "_site/**/*.js",
         // "!_site/**",
      ],
   });

   // Minife HTML
   eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
      // Eleventy 1.0+: use this.inputPath and this.outputPath instead
      if (outputPath && outputPath.endsWith(".html")) {
         let minified = htmlmin.minify(content, {
            useShortDoctype: true,
            removeComments: true,
            collapseWhitespace: true,
         });
         return minified;
      }

      return content;
   });

   // Nunjucks Filter
   eleventyConfig.addNunjucksFilter("nl2br", (str) =>
      str.replace(/\r|\n|\r\n/g, "<br />")
   );

   return {
      templateFormats: ["html", "md", "njk"],
      dir: { input: "src", output: "_site" },
   };
};
