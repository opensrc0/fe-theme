module.exports = function babelConfig(api) {
  api.cache(false);
  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
    ],
    plugins: [
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-transform-export-namespace-from',
      '@babel/plugin-transform-class-properties',
      '@babel/plugin-transform-object-rest-spread',
      'syntax-trailing-function-commas',
      '@babel/plugin-transform-runtime',
      'styled-components',
    ],
    env: {
      cjs: {
        presets: [
          ['@babel/preset-env', {
            loose: true,
            modules: 'commonjs',
          }],
        ],
      },
    },
  };
};