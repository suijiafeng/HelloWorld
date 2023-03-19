const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  pages: {
    index: {
      entry: "./main.js",
      template: "../public/index.html",
      title: "V3 Page",
    },
  },
});