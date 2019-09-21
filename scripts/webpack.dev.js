const webpackMerge = require('webpack-merge')
const DotEnv = require('dotenv-webpack')
const webpackBaseConfig = require('./webpack.base.js')
const path = require('path')
const { development: devConfig } = require('./config.js')

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
    quiet: true,
    hotOnly: true
  },
  plugins: [
    new DotEnv({
      path: path.resolve(__dirname, '../.env.development')
    })
  ]
}

module.exports = webpackMerge(webpackBaseConfig, webpackConfig)
