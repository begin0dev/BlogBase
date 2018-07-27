export const defaultState = {
  visible: window.innerWidth >= 768,
  expanded: false,
  searchLoading: true,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        visible: action.boolean,
      };
    case 'EXPANDED_NAVI':
      return {
        ...state,
        expanded: action.boolean,
      };
    default:
      return state;
  }
};
