module.exports = {
  linters: {
    'docs/**': ['yarn lint:text --fix', 'git add'],
    '**/*.{js,jsx}': ['yarn lint:js --fix', 'git add'],
    'public/**/*.{s?(a|c)ss,html}': ['yarn lint:css --fix', 'git add'],
    'src/**/*.{js,jsx}': ['yarn lint:sc', 'git add'],
    '**/*.test.{js,jsx}': ['yarn coverage', 'git add'],
  },
  ignore: ['/node_modules/**', '/build/**'],
};
