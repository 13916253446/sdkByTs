module.exports = {
  'presets': [
    [
      '@babel/preset-env',
      {
        'modules': false,
        'useBuiltIns': 'usage',
        'corejs': 3
      }
    ]
  ],
  'plugins': [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-external-helpers',
    ['@babel/plugin-transform-runtime', {
      'regenerator': false,
      // 垫片通过preset-env注入
      'corejs': false,
      // usage的模式需要设置为true
      'helpers': true,
      useESModules: true
     }],
     '@babel/plugin-proposal-optional-chaining',
      ['@babel/plugin-proposal-pipeline-operator', { 'proposal': 'minimal' }]
   ]
}