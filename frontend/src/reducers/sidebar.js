export const defaultState = {
  visible: true,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        visible: action.boolean,
      };
    default:
      return state;
  }
};
