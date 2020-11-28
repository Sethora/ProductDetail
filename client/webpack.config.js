const resolve = require('path').resolve;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SRC_DIR = resolve(__dirname, './src/index.js');
const PUBLIC_DIR = resolve(__dirname, '..', './public');

module.exports = {
  entry: ['@babel/polyfill', SRC_DIR],
  output: {
    path: PUBLIC_DIR,
    publicPath: '/',
    filename: 'bundle.js'
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
        use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader', 'postcss-loader']
      },
    ],
  },
  mode: 'production',
  devServer: {
    historyApiFallback: true,
    // contentBase: path.resolve(__dirname, '../public'),
    open: true,
    compress: true,
    hot: true,
    port: 8082
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Sethora',
      favicon: false,
      showErrors: true,
      cache: true,
      template: resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html'
    }),
    // new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin(),
    new Dotenv()
  ]
};