import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route } from 'react-router';
import App from './App';

const history = createHistory();
  
const Routes = () => {
  return (
    <Router history={history}>
      <Route path="" component={App}/>
    </Router>
  );
};

export default Routes;