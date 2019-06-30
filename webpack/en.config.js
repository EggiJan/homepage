const webpack = require('webpack');
const path = require('path');
const commonConfig = require('./common.config');
const merge = require('webpack-merge');
const util = require('util');

const config = {
  entry: {
    app_en: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist_new/en'),
  },
  
  module: {
    rules: [
      {
        test: /\.jade$/,
        loader: 'pug-static-loader',
          options: {
            pretty: false,
            locals: require('../locals_en')
          }
      },
    ]
  },
}

const conf = merge(commonConfig, config);
module.exports = conf;