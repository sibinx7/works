import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';

import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger';

import {  AppoloProvider } from "react-apollo"

import commonReducers from './reducers'


import {Provider} from 'react-redux'

const store = createStore(commonReducers, applyMiddleware(thunk, logger));





ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
serviceWorker.unregister();
