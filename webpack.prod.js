const path = require('path');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  output: {
    filename: 'main-[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Demo',
      template: './src/template.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'main-[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, // check for any css or scss files
        use: [
          // Extracts CSS from the JS into separate files
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          // {
          //   loader: 'css-loader',
          //   options: { importLoaders: 1 }, // not sure why this is necessary but the internet says to use it so.
          // },
          'css-loader',
          // postcss
          'postcss-loader',
        ],
      },
    ],
  },
});