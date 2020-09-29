'use strict'
module.exports = {
  publicPath: "./",
  devServer: {
    compress: true,
    disableHostCheck: true, //webpack4.0 开启热更新
    overlay: {
      warnings: false,
    },
  }
}