module.exports = {
  linters: {
    'docs/**': ['yarn lint:text --fix', 'git add'],
    '**/*.js': ['yarn lint:js --fix', 'git add'],
    '**/*.{css,scss,html}': ['yarn lint:css --fix', 'git add'],
  },
  ignore: ['/node_modules/**', '/build/**'],
};
