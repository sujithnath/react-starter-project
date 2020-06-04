module.exports = {
  clearMocks: true,
  displayName: {
    name: "CLIENT",
    color: "blue",
  },
  collectCoverageFrom: ["src/**/*.{js,jsx}", "!src/**/*.test.{js,jsx}"],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 91,
      functions: 98,
      lines: 98,
    },
  },
  coverageReporters: ["json", "lcov", "text-summary"],
  moduleFileExtensions: ["js", "json", "jsx"],
  moduleDirectories: ["node_modules", "src"],
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  verbose: true,
};
