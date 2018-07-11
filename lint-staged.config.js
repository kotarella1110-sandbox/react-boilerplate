module.exports = {
  linters: {
    '*.js': ['yarn lint --fix', 'git add'],
  },
  ignore: ['/node_modules/**', '/build/**'],
};
