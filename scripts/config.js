const path = require('path')

module.exports = {
  alias: {
    'vue$': 'vue/dist/vue.esm.js',
    'vuex$': 'vuex/dist/vuex.esm.js',
    'vue-router$': 'vue-router/dist/vue-router.esm.js',
    '@': path.resolve(__dirname, '../src')
  },
  stats: {
    all: undefined,
    assets: true,
    assetsSort: 'field',
    builtAt: true,
    cached: true,
    cachedAssets: true,
    children: true,
    chunks: true,
    chunkModules: true,
    chunksSort: 'field',
    context: path.resolve(__dirname, '../'),
    colors: true,
    depth: true,
    entrypoints: false,
    env: false,
    errors: true,
    errorDetails: true,
    hash: true,
    maxModules: 15,
    modules: true,
    modulesSort: 'field',
    moduleTrace: true,
    performance: true,
    providedExports: false,
    publicPath: true,
    reasons: true,
    source: true,
    timings: true,
    usedExports: false,
    version: true,
    warnings: true
  },
  // TODO: 确定没有任何依赖的模块，直接跳过解析，增加编译速度
  noParse: /^(vue|vue-router|vuex|axios)$/,
  development: {
    cssSourceMap: false,
    assetsRoot: path.resolve(__dirname, '../dist'),
    serverPort: 9988
  },
  production: {
    assetsRoot: path.resolve(__dirname, '../dist'),
    publicPath: ''
  }
}
