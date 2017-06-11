import React from 'react';
import { IndexRoute, Router, Route, browserhistory } from 'react-router';
import App from './App';
import Dashboard from './modules/dashboard';
import Members from './modules/members';


const Routes = () => {
  return (
    <Router history={browserhistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard}/>
        <Route path="/members" component={Members}/>
      </Route>
    </Router>
  );
};

export default Routes;