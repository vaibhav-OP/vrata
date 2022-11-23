const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: 'development',
  target: "web",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
        template: "./public/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?vr$/,
        exclude: /node_modules/,
        loader: "html-loader",
      }
    ]
  }
};