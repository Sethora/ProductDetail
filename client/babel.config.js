module.exports = {
  "presets": [
    "@babel/env",
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties"
  ],
  "env": {
    "test": {
      "plugins": [
        "@babel/plugin-transform-modules-commonjs",
        "babel-plugin-dynamic-import-node"
      ]
    }
  }
};