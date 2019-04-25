//需要热加载功能
const merge = require('webpack-merge') //merge合并公共配置
const common = require('./webpack.config.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 8080,
    // host: '0.0.0.0',
    overlay: {
      errors: true
    },
    historyApiFallback: {
      index: '/index.html'
    }
  }
})
