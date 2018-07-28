import { Dispatch } from 'react-redux';
import { routerMiddleware, routerReducer, RouterState } from 'react-router-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import history from 'app/conf/history';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

function* rootSaga(dispatch: Dispatch<BlogState>) {
  yield all([]);
}

export interface BlogState {
  router: RouterState;
}


const reducers = combineReducers({
  router: routerReducer,
});

const sagaMiddleware = createSagaMiddleware();

const enhancers = compose(
  applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware,
  ),
);

export const store = createStore(reducers, enhancers);
sagaMiddleware.run(rootSaga, store.dispatch);
