import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import clubsReducer from './reduxcore/reducers'

import clubs from './containers/clubs'

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let store = createStore(clubsReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();
