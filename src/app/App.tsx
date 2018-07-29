import * as React from 'react';
import { Provider } from 'react-redux';
import { StoreType } from 'app/types';


export const App: React.SFC<{ store: StoreType }> = ({ store }) => (
  <Provider store={store}>
    test
  </Provider>
);
