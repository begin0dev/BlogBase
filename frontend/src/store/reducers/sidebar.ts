import produce from 'immer';

const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
const EXPANDED_NAVI = 'EXPANDED_NAVI';

class ToggleSidebar {
  readonly type = TOGGLE_SIDEBAR;
  constructor(public visible: boolean) {}
}
class ExpandedNavi {
  readonly type = EXPANDED_NAVI;
  constructor(public expand: boolean) {}
}

type SidebarActions = ToggleSidebar | ExpandedNavi;

export interface ISidebarState {
	visible: boolean;
  expanded: boolean;
	searchValue: string;
	searchLoading: boolean;
}

export const defaultState: ISidebarState = {
  visible: window.innerWidth >= 768,
  expanded: true,
  searchValue: '',
  searchLoading: false,
};

export default (state = defaultState, action: SidebarActions) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return produce(state, draft => {
        draft.visible = action.visible
      });
    case 'EXPANDED_NAVI':
      return produce(state, draft => {
        draft.expanded = action.expand
      });
    default:
      return state;
  }
};
