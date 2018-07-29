import * as React from 'react';
import { Switch, Router } from 'react-router';
import { Route } from 'react-router-dom';


import history from 'app/conf/history';

export const Routes: React.SFC = (props) => {
  return (
    <Router history={history}>
      <Switch>
        <Route
          path="/"
          render={() => "test"} />
      </Switch>
    </Router>
  );
};

export default Routes;
