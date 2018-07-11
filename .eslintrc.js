module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 0,
  },
};