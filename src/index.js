import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './reducers';
import { Router, Route, browserHistory } from 'react-router';

import './public/css/bootstrap/dist/css/bootstrap.css';
import './public/css/fontawesome/css/font-awesome.css';
import './public/css/style.css';
import 'react-notifications/lib/notifications.css';
import 'react-bootstrap/lib/NavbarHeader';

import Login from './containers/auth/login';
import Home from './containers/home';
import Gallery from './containers/gallery';

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Login}></Route>
      <Route path="/home" component={Home}></Route>
      <Route path="/gallery" component={Gallery}></Route>
    </Router>
  </Provider>
,document.getElementById('root'))
