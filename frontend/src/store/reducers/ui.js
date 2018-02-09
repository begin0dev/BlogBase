import { createAction, handleActions } from 'redux-actions';

import { Record } from 'immutable';

// action types
const TOGGLE_SIDEBAR = 'ui/TOGGLE_SIDEBAR';
const TOGGLE_NAVI = 'ui/TOGGLE_NAVI';

// action create
export const toggleSidebar = createAction(TOGGLE_SIDEBAR);
export const toggleNavi = createAction(TOGGLE_NAVI);

const sidebar = Record({
  visible: true,
  active: 1,
});

// initial state
const initialState = Record({
  sidebar: sidebar(),
})();

// reducer
export default handleActions({
  [TOGGLE_SIDEBAR]: (state, action) => {
    return state.setIn(['sidebar', 'visible'], action.payload);
  },
  [TOGGLE_NAVI]: (state, action) => {
    return state.setIn(['sidebar', 'active'], action.payload);
  },
}, initialState);
