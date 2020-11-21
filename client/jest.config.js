module.exports = {
  "setupFiles": ["./setupTests.js"],
  setupFilesAfterEnv: ['<rootDir>/setUpTests.js'],
  "moduleNameMapper": {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy"
  },
  "snapshotSerializers": ["enzyme-to-json/serializer"]
};