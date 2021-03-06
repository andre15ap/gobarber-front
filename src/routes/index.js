import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/signin/SignIn';
import SignUp from '../pages/signup/SignUp';
import Dashboard from '../pages/dashboard/Dashboard';
import Profile from '../pages/profile/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" exact component={SignUp} />
      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/profile" exact component={Profile} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
