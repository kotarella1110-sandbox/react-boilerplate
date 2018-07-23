const rewireStyledComponents = require('react-app-rewire-styled-components');

module.exports = (config, env) => {
  let overrodeConfig = Object.assign({}, config);
  overrodeConfig = rewireStyledComponents(config, env, {
    displayName: true,
  });
  return overrodeConfig;
};
