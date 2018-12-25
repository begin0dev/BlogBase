import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import sidebar, { ISidebarState } from "./sidebar";
import account, { IAccountState } from "./account";

export interface IStoreState {
  account: IAccountState;
  sidebar: ISidebarState;
}

const rootReducer = combineReducers({
  routing,
  account,
  sidebar
});

export default rootReducer;
