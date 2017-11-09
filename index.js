import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Home from './app/screens/Home';
import User from './app/screens/User';
import Signup from './app/screens/Auth/Signup';
import Landing from './app/screens/Auth/Landing';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Landing} />
    <Route path="/Signup" component={Signup} />
    <Route path="/:username" component={User} />
  </Router>,
  document.getElementById('container')
);
