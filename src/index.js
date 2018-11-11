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


import ApolloClient from "apollo-boost";
import {  ApolloProvider  } from "react-apollo";

import settings from "./api/env"

const API_URL = settings.API_URL;


const client = new ApolloClient({
  uri: `${API_URL}/graphql`
})


const store = createStore(commonReducers, applyMiddleware(thunk, logger));





ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App/>
      </ApolloProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
serviceWorker.unregister();
