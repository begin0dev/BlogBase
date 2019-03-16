import { combineReducers } from 'redux';
import sidebar, { ISidebarState } from './sidebar';
import auth, { IAuthState } from './auth';

export interface IStoreState {
  auth: IAuthState;
  sidebar: ISidebarState;
}

const rootReducer = combineReducers({
  auth,
  sidebar,
});

export default rootReducer;
