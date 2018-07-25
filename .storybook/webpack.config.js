const { appPublic, appSrc } = require('react-scripts/config/paths');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(js|jsx|mjs)$/,
    enforce: 'pre',
    use: [
      {
        options: {
          ignore: true,
          useEslintrc: true,
          fix: true,
        },
        loader: require.resolve('eslint-loader'),
      },
    ],
    include: appSrc,
  });
  config.plugins.push(
    new StylelintWebpackPlugin({
      configBasedir: appPublic,
      context: appPublic,
      files: ['**/*.{s?(a|c)ss,html}'],
      emitErrors: false,
      fix: true,
    })
  );
  config.plugins.push(
    new StylelintWebpackPlugin({
      context: appSrc,
      files: ['**/*.{js,jsx}'],
      emitErrors: false,
    })
  );
  if (env === 'DEVELOPMENT') {
    config.plugins.push(
      new OpenBrowserPlugin({ url: 'http://localhost:9009' })
    );
  }
  return config;
};
