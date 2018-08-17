const initFormState = {
  userName: '',
  displayName: '',
  email: '',
  password: '',
};

export const defaultState = {
  form: {
    ...initFormState,
  },
  state: {
    form: 'login',
    active: false,
    loading: false,
  },
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_ACCOUNT_FORM_VALUE':
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};
