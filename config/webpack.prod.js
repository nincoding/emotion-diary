const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const configuration = {
  mode: "production",
  devtool: "cheap-module-source-map",
  output: {
    path: path.resolve(__dirname, "..", "dist/client"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
  devServer: {
    static: path.join(__dirname, "..", "public"),
    port: 3001,
    open: true,
    compress: true,
    historyApiFallback: true,
    hot: true,
  },
};

module.exports = merge(common, configuration);