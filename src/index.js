import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import state from './state/reducers'
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(state);

render(
  <Root store={store} />,
  document.getElementById('root')
);
registerServiceWorker();