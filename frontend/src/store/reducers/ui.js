import { createAction, handleActions } from 'redux-actions'

import { Map } from 'immutable'

// action types
const CONTROL_SIDEBAR = 'ui/CONTROL_SIDEBAR'

// action create
export const controlSidebar = createAction(CONTROL_SIDEBAR)

// initial state
const initialState = Map({
  sidebar: Map({
    visible: true,
  })
})

// reducer
export default handleActions({
  [CONTROL_SIDEBAR] : (state, action) => {
    return state.setIn(['sidebar', 'visible'], action.payload)
  }
}, initialState)
