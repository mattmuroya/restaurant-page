const path = require('path');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'img/[hash][ext]',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Demo',
      template: './src/template.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, // check for any css or scss files
        use: [
          // Injects `style` tag into the DOM
          'style-loader',
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }, // not sure why this is necessary but the internet says to use it so.
          },
          // postcss
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
});