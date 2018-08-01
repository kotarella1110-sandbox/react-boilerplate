import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
// eslint-disable-next-line import/no-unresolved
import App from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders welcome message', () => {
  const wrapper = mount(<App />);
  const welcome = 'Welcome to React';
  expect(
    wrapper
      .find('AppTitle')
      .children()
      .text()
  ).toBe(welcome);
});
