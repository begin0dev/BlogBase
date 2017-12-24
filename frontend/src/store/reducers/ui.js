import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';

// action types
const CONTROLL_SIDEBAR = 'ui/CONTROLL_SIDEBAR';

// action create
export const controllSidebar = createAction(CONTROLL_SIDEBAR);

// initial state
const initialState = Map({
  sidebar: Map({
    visible: true
  })
});

// reducer
export default handleActions({
  [CONTROLL_SIDEBAR] : (state, action) => {
    return state.setIn(['sidebar', 'visible'], action.payload);
  }
}, initialState)