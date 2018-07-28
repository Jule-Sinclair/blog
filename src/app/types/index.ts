import { RouterState } from 'react-router-redux';
import { Store } from '../../../node_modules/redux';

export type LoadEvent = CustomEvent<{
  targetElementId: string;
}>;


export type StoreType = Store<{
  router: RouterState;
}> & {
  dispatch: object;
};