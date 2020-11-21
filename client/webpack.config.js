const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SRC_DIR = path.join(__dirname, './src/index.js');
const PUBLIC_DIR = path.join(__dirname, '../public');

module.exports = {
  entry: ['@babel/polyfill', SRC_DIR],
  output: {
    path: PUBLIC_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        type: 'asset/inline'
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
    ],
  },
  mode: 'production',
  // devServer: {
  //   historyApiFallback: true,
  //   contentBase: path.resolve(__dirname, '../public'),
  //   open: true,
  //   compress: true,
  //   hot: true,
  //   port: 8080
  // },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Sethora',
      favicon: false,
      showErrors: true,
      cache: true,
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
    // new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv()
  ]
};