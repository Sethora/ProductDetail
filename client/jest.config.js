module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/setUpTests.js'],
  "moduleNameMapper": {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy"
  }
};