import produce from 'immer';

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

export default (state = defaultState, action: any) => {
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
