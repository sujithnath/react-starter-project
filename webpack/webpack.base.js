/**
 * COMMON WEBPACK CONFIGURATION
 */
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const InlineSourcePlugin = require("html-webpack-inline-source-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/index.js"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/react"],
            plugins: [
              "@babel/proposal-class-properties",
              "@babel/plugin-proposal-object-rest-spread",
              "@babel/plugin-syntax-dynamic-import",
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: "file-loader",
      },
      { test: /\.json$/, loader: "json-loader" },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                enabled: false,
                // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
                // Try enabling it in your environment by switching the config to:
                // enabled: true,
                // progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: "65-90",
                speed: 4,
              },
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
          },
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "src/assets/img",
        to: "src/assets/img",
      },
    ]),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inlineSource: "runtime~.+\\.js",
      chunksSortMode: "none",
    }),
    new InlineSourcePlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  target: "web", // Make web variables accessible to webpack, e.g. window
};
