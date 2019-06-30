const webpack = require('webpack');
const path = require('path');
const commonConfig = require('./common.config');
const merge = require('webpack-merge');

const config = {
  entry: {
    app_de: './index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist_new/de'),
  },
  
  module: {
    rules: [
      {
        test: /\.jade$/,
        loader: 'pug-static-loader',
          options: {
            pretty: false,
            locals: require('../locals_de')
          }
      },
    ]
  },
}

const conf = merge(commonConfig, config);
module.exports = conf;