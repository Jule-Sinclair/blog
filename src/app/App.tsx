import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Switch } from 'react-router-dom';

import { StoreType } from 'app/types';
import Routes from 'app/routes';


const App: React.SFC<{ store: StoreType }> = ({ store }) => (
  <Provider store={store}>
    <Routes />
  </Provider>
);


export default App;
