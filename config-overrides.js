const rewireEslint = require('react-app-rewire-eslint');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const rewireStyledComponents = require('react-app-rewire-styled-components');

module.exports = (config, env) => {
  let overrodeConfig = Object.assign({}, config);
  overrodeConfig = rewireEslint(config, env);
  overrodeConfig = rewireReactHotLoader(overrodeConfig, env);
  overrodeConfig = rewireStyledComponents(config, env, {
    displayName: true,
  });
  return overrodeConfig;
};
