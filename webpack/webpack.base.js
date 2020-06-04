/**
 * COMMON WEBPACK CONFIGURATION
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: { path: path.resolve(process.cwd(), "build"), publicPath: "/" },
  target: "web", // Make web variables accessible to webpack, e.g. window,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
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
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
      template: "src/index.html",
      inlineSource: "runtime~.+\\.js",
      chunksSortMode: "none",
    }),
  ],
};
