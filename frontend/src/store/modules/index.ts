import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import sidebar, { ISidebarState } from "./sidebar";
import auth, { IAuthState } from "./auth";

export interface IStoreState {
  auth: IAuthState;
  sidebar: ISidebarState;
}

const rootReducer = combineReducers({
  routing,
  auth,
  sidebar
});

export default rootReducer;
