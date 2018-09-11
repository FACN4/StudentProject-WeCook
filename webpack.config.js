const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/src/index.js',
  output: {
    path: path.join(__dirname, 'client', 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      '/api': 'http://localhost:5000',
    },
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/src/index.html',
    }),
  ],

};
