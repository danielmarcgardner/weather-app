import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Landing from './landing';
import FiveDay from './fiveday';
import Whoops from './whoops';

export const Routes = () => (
  <Switch>
    <Route component={ Landing } path="/" exact={ true } />
    <Route component={ FiveDay } path="/zip/:zip" />
    <Route component={ Whoops } />
  </Switch>
);

export default withRouter(Routes);
