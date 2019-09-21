const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const DotEnv = require('dotenv-webpack')
const friendlyErrorPlugin = require('friendly-errors-webpack-plugin')
const errorOverlayWebpackPlugin = require('error-overlay-webpack-plugin')
const webpackbar = require('webpackbar')
const address = require('address')
const webpackBaseConfig = require('./webpack.base.js')
const path = require('path')
const { development: devConfig } = require('./config.js')
const { createNotifierCallback } = require('./util.lib.js')

const webpackConfig = {
  entry: {
    demo: path.resolve(__dirname, '../demo/index.ts')
  },
  devServer: {
    host: '0.0.0.0',
    port: devConfig.serverPort,
    hot: true,
    overlay: {
      warnings: true,
      errors: true
    },
    contentBase: devConfig.assetsRoot,
    quiet: false,
    hotOnly: true
  },
  plugins: [
    new DotEnv({
      path: path.resolve(__dirname, '../.env.development')
    }),
    new friendlyErrorPlugin({
      compilationSuccessInfo: {
        messages: [`You application is running here http://${address.ip()}:${devConfig.serverPort}`]
      },
      onErrors: createNotifierCallback(),
      clearConsole: false,
      additionalFormatters: [],
      additionalTransformers: []
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new errorOverlayWebpackPlugin(),
    new webpackbar(),
  ]
}

module.exports = webpackMerge(webpackBaseConfig, webpackConfig)
