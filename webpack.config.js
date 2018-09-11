const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  watch: true,
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
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file-loader',
      },
    ],
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    proxy: { '/api': { target: 'https://localhost:5000', secure: false } },
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/src/index.html',
    }),
  ],
};
