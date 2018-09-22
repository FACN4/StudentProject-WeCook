const merge = require('webpack-merge');
const webpackBase = require('./webpack.base.config.js');

module.exports = merge(webpackBase, {
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    contentBase: './dist',
    proxy: { '/api': { target: 'http://localhost:5000', secure: false } },
    historyApiFallback: true,
    hot: true,
  },
  watch: true,
});
