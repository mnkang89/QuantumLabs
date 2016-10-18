import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, IndexRoute, Route, Link, Redirect, browserHistory } from "react-router";

import reducers from './reducers';
import app from './components/app';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={app}>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.main'));
