import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import Home from './Home'

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/app" component={App} />
      </Switch>
    </div>
  );
};
