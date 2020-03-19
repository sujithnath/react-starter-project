/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require("path");
const webpack = require("webpack");
const CircularDependencyPlugin = require("circular-dependency-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.base");
const InlineSourcePlugin = require("html-webpack-inline-source-plugin");

module.exports = merge(commonConfig, {
  mode: "development",
  // Add hot reloading in development
  entry: [
    "@babel/polyfill",
    path.join(process.cwd(), "src/index.js"), // Start with js/app.js
  ],
  output: {
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
  },
  devServer: { hot: true },
  optimization: {
    namedModules: true,
    splitChunks: {
      chunks: "all",
    },
  },
  devtool: "eval-source-map",
  // Emit a source map for easier debugging
  // See https://webpack.js.org/configuration/devtool/#devtool

  // Add development plugins
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/, // exclude node_modules
      failOnError: false, // show a warning when there is a circular dependency
    }),
    new CopyWebpackPlugin([
      {
        from: "src/assets/img",
        to: "src/assets/img",
      },
    ]),
    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; Terser will automatically
    // drop any unreachable code.
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development",
    }),
    new InlineSourcePlugin(),
    new webpack.NamedModulesPlugin(),
  ],

  performance: {
    hints: "warning",
  },
});
