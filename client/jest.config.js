module.exports = {
  "setupFiles": ["./src/setupTests.js"],
  setupFilesAfterEnv: ['<rootDir>/src/setUpTests.js'],
  "moduleNameMapper": {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy"
  },
  "snapshotSerializers": ["enzyme-to-json/serializer"]
};