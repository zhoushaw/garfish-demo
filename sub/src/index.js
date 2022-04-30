import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { reactBridge } from '@garfish/bridge';

if (!window.__GARFISH__) {
  ReactDOM.render(<App />, document.getElementById('root'));
}

export const provider = reactBridge({
  React,
  ReactDOM,
  el: '#root',
  rootComponent: App,
});
