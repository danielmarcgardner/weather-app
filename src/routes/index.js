import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Landing from './landing';
import FiveDay from './fiveday';
import Whoops from './whoops';

//All routes in the app
export const Routes = () => (
  <Switch>
    <Route component={ Landing } path="/" exact={ true } />
    <Route component={ FiveDay } path="/zip/:zip" />
    {/* Whoops is a catch all */}
    <Route component={ Whoops } />
  </Switch>
);

export default withRouter(Routes);
