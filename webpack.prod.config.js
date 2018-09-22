const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBase = require('./webpack.base.config.js');

module.exports = merge(webpackBase, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
});
