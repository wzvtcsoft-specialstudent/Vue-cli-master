//production 要求更小的代码量以加快网页的加载速度，对源代码进行压缩
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.config.js') //引入公共配置

module.exports = merge(common, {
  mode: 'production',//声明当前配置所处的环境
  optimization: {
    splitChunks: {
      chunks: 'initial',
      automaticNameDelimiter: '.',
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2,
          priority: 3
        }
      }
    }
  }
})
