const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/src/index.js',
  output: {
    path: path.join(__dirname, 'client', 'public'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
        // query: {
        //   presets: ['react', 'env'],
        // },
      },
    ],
  },
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      '/api': 'http;//localhost:5000',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/src/template/index.html',
    }),
  ],
};
