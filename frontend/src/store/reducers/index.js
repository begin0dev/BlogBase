import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import sidebar from './sidebar';
import account from './account';

const rootReducer = combineReducers({
  routing,
  sidebar,
  account,
});

export default rootReducer;
