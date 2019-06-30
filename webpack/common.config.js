const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  entry: {
    fonts: './fonts.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist_new'),
    filename: '[name].bundle.js',
  },
  devServer: {
    port: 3400,
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './templates/index.jade',
      inject: 'head',
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new CopyWebpackPlugin([
      {
        from: './public/img',
        to: '../img'
      }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.jade/,
        loader: 'source-loader'
      },
      {
        test: /\.(js|ts)x?$/,
        exclude: /(node_modules)/,
      },
      {
        test: /\.less$/,
        exclude: /(node_modules)/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    usedExports: true,
  },
  mode: 'production'
}

module.exports = config;