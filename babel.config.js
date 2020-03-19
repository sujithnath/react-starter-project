module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        modules: false,
      },
    ],
  ],
  plugins: ["@babel/plugin-syntax-dynamic-import"],
};
