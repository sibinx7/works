import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';

import {createStore, combineReducers } from 'redux';
import commonReducers from './reducers'

import {Provider} from 'react-redux'

const store = createStore(combineReducers({...commonReducers}));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
