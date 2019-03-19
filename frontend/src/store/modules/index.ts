import { combineReducers } from 'redux';
import auth, { IAuthState } from './auth';
import base, { IBaseState } from './base';
import sidebar, { ISidebarState } from './sidebar';

export interface IStoreState {
  auth: IAuthState;
  base: IBaseState;
  sidebar: ISidebarState;
}

const rootReducer = combineReducers({
  auth,
  base,
  sidebar,
});

export default rootReducer;
