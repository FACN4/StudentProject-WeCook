const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './client/src/index.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: 'file-loader?name=[name].[ext]',
      },
    ],
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    proxy: { '/api': { target: 'http://localhost:5000', secure: false } },
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/src/index.html',
    }),
    new Dotenv(),
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
};
