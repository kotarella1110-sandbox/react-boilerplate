import React from 'react';
import style, { keyframes } from 'styled-components';
import logo from './logo.svg';

const AppWrapper = style.div`
  text-align: center;
`;

const AppHeader = style.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const spin = keyframes`

  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = style.img.attrs({
  src: logo,
  alt: 'logo',
})`
  animation: ${spin} infinite 20s linear;
  height: 80px;
`;

const AppTitle = style.h1`
  font-size: 1.5em;
`;

const AppIntro = style.p`
  font-size: large;
`;

const App = () => (
  <AppWrapper>
    <AppHeader>
      <AppLogo />
      <AppTitle>Welcome to React</AppTitle>
    </AppHeader>
    <AppIntro>
      To get started, edit <code>src/components/App/index.js</code> and save to
      reload.
    </AppIntro>
  </AppWrapper>
);

export default App;
