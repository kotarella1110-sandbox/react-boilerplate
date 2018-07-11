module.exports = {
  linters: {
    '**/*.js': ['yarn lint:js --fix', 'git add'],
    '**/*.{css,html}': ['yarn lint:css --fix', 'git add'],
  },
  ignore: ['/node_modules/**', '/build/**'],
};
