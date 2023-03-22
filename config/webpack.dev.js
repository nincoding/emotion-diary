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
      {
        test: /\.(png|jpe?g|gif)$/i,
        include: path.resolve(__dirname, 'public/assets/images'),
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/images',
        },
      },
    ],
  },
  plugins: [new RefreshWebpackPlugin()],
  devServer: {
    static: {
      directory: path.join(__dirname, '..', 'public'), // public 폴더 경로
    },
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