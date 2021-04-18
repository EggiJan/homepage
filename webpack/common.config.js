const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const outPath = path.resolve(__dirname, "../dist");

const config = {
  entry: {
    fonts: "./fonts.js",
  },
  output: {
    filename: "[name].bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./templates/index.jade",
      inject: "head",
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./public",
          to: outPath,
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jade/,
        loader: "source-loader",
      },
      {
        test: /\.(js|ts)x?$/,
        exclude: /(node_modules)/,
      },
      {
        test: /\.less$/,
        exclude: /(node_modules)/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    usedExports: true,
  },
  mode: "production",
};

module.exports = config;
