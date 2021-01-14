const webpack = require('webpack')
const {
  merge
} = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const glob = require("glob-all");
const PurgeCSSPlugin = require('purgecss-webpack-plugin')
const {
  resolve
} = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  // devtool: 'none',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: {
            pure_funcs: ["console.log"]
          }
        }
      }),
      new OptimizeCssAssetsPlugin()
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
      ignoreOrder: false,
    }),
    new PurgeCSSPlugin({
      paths: glob.sync([
        `${resolve(__dirname, "../src")}/**/*.{tsx,scss,less,css}`,
        `${resolve(__dirname, "../public/*.html")}`,
      ], {
        nodir: true
      }),
    }),
    new webpack.BannerPlugin({
      raw: true,
      banner: '/** @preserve Powered by chenwl */',
    }),
  ]
})