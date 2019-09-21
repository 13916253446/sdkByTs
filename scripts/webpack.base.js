const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { noParse, stats, alias } = require('./config.js')

const babelLoader = {
  loader: 'babel-loader',
  exclude: [/node_modules/],
  options: {
    cacheDirectory: true,
    cacheIdentifier: 1
  }
}
const tsLoader = {
  loaders: [
    babelLoader,
    {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
        appendTsSuffixTo: ['\\.vue$'],
        happyPackMode: false
      }
    }
  ]
}

const webpackConfig = {
  resolveLoader: {
    modules: [path.resolve(__dirname, '../node_modules')]
  },
  module: {
    noParse,
    rules: [
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        options: {
          cacheDirectory: true,
          cacheIdentifier: 1
        }
      },
      {
        test: /\.ts$/,
        ...tsLoader
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: [/node_modules/],
        options: {
          loaders: {
            ts: tsLoader
          },
          cssSourceMap: false,
          cacheBusting: true,
          transformToRequire: {
            video: ['src', 'poster'],
            source: 'src',
            img: 'src',
            image: 'xlink:href'
          }
        }
      },
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      chunksSortMode: 'none',
      template: path.resolve(__dirname, '../demo/index.html'),
      filename: 'index.html',
      inject: true
    })
  ],
  node: {
    setImmediate: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  stats,
  resolve: {
    symlinks: true,
    extensions: ['.ts', '.js', '.vue', '.mjs'],
    alias
  }
}

module.exports = webpackConfig
