import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import sidebar from './sidebar';

const rootReducer = combineReducers({
  routing,
  sidebar,
});

export default rootReducer;
