const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",
  mode: "development",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "../dist"),
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  devServer: { hot: true },
  module: {
    rules: [
      {
        test: /\.(.js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
