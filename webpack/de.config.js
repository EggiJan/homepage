const webpack = require("webpack");
const path = require("path");
const commonConfig = require("./common.config");
const { merge } = require("webpack-merge");

const outPath = path.resolve(__dirname, "../dist/de");

const config = {
  entry: {
    app_de: "./index.js",
  },
  output: {
    path: outPath,
  },

  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: "pug-static-loader",
        options: {
          pretty: false,
          locals: require("../locals_de"),
        },
      },
    ],
  },
};

const conf = merge(commonConfig, config);
module.exports = conf;
