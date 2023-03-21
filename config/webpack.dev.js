const path = require("path");
const webpack = require("webpack");
require("webpack-dev-server");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const configuration = {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "..", "dist/client"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new RefreshWebpackPlugin()],
  devServer: {
    static: path.join(__dirname, "..", "public"),
    port: 3000,
    open: true,
    compress: true,
    historyApiFallback: true,
    hot: true,
  },
  watchOptions: {
    ignored: /node_modules/,
  },
};

module.exports = merge(common, configuration);