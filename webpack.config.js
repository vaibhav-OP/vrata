const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
    })
  ],
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: path.resolve('./my-loader.js'),
            enforce: 'pre',
            options: {text: 'hello world'},
          }
    ]
  }
};