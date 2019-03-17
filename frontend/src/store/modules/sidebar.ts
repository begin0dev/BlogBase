import produce from 'immer';

import { ActionsUnion } from 'utils/types';
import { createAction } from 'utils/actionHelper';

// actions
const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
const EXPANDED_NAVI = 'EXPANDED_NAVI';

export const Actions = {
  toggleSidebar: (visible: boolean) => createAction(TOGGLE_SIDEBAR, visible),
  expandedNavi: (expand: boolean) => createAction(EXPANDED_NAVI, expand),
};
export type Actions = ActionsUnion<typeof Actions>

// reducer
export interface ISidebarState {
  visible: boolean;
  expanded: boolean;
  search: {
    keyword: string,
    loading: boolean,
  }
}

export const defaultState: ISidebarState = {
  visible: window.innerWidth > 768,
  expanded: true,
  search: {
    keyword: '',
    loading: false,
  }
};

export default (state = defaultState, action: Actions) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return produce(state, draft => {
        draft.visible = action.payload;
      });
    case EXPANDED_NAVI:
      return produce(state, draft => {
        draft.expanded = action.payload;
      });
    default:
      return state;
  }
};
