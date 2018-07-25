const rewireEslint = require('react-app-rewire-eslint');
const rewireStylelint = require('react-app-rewire-stylelint');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const rewireStyledComponents = require('react-app-rewire-styled-components');

module.exports = (config, env) => {
  let overrodeConfig = Object.assign({}, config);
  overrodeConfig = rewireEslint(overrodeConfig, env, opts => {
    // eslint-disable-next-line no-param-reassign
    opts.fix = true;
    return opts;
  });
  overrodeConfig = rewireStylelint.withLoaderOptions({
    files: ['public/**/*.{s?(a|c)ss,html}'],
    emitErrors: false,
    fix: true,
  })(overrodeConfig, env);
  overrodeConfig = rewireStylelint.withLoaderOptions({
    files: ['src/**/*.{js,jsx}'],
    emitErrors: false,
  })(overrodeConfig, env);
  overrodeConfig = rewireReactHotLoader(overrodeConfig, env);
  overrodeConfig = rewireStyledComponents(overrodeConfig, env, {
    displayName: true,
  });
  return overrodeConfig;
};
