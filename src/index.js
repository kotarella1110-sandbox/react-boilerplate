import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from 'components/App';
import registerServiceWorker from './registerServiceWorker';

injectGlobal([
  `
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`,
]);

const root = document.getElementById('root');
render(<App />, root);
registerServiceWorker();

if (module.hot) {
  module.hot.accept('components/App', () => {
    // eslint-disable-next-line global-require
    require('components/App');
    render(<App />, root);
  });
}
