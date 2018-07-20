import { configure, setAddon } from '@storybook/react';
import '@storybook/addon-console';
import { setOptions } from '@storybook/addon-options/preview';
import JSXAddon from 'storybook-addon-jsx';

setOptions({
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
});

setAddon(JSXAddon);

const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
