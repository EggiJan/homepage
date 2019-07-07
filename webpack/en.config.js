const webpack = require('webpack');
const path = require('path');
const commonConfig = require('./common.config');
const merge = require('webpack-merge');

const outPath = path.resolve(__dirname, '../dist/en');

const config = {
  entry: {
    app_en: './index.js'
  },
  output: {
    path: outPath,
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
