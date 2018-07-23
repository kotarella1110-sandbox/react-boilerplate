const rewireStyledComponents = require('react-app-rewire-styled-components');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

module.exports = (config, env) => {
  let overrodeConfig = Object.assign({}, config);
  overrodeConfig = rewireReactHotLoader(overrodeConfig, env);
  overrodeConfig = rewireStyledComponents(config, env, {
    displayName: true,
  });
  return overrodeConfig;
};
