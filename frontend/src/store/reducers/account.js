const initFormData = {
  email: '',
  password: '',
  displayName: '',
};

export const defaultState = {
  form: {
    ...initFormData,
  },
  state: {
    form: 'login',
    active: false,
    loading: false,
  },
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'INITIALIZE_FORM_DATA':
      return {
        ...state,
        form: {
          ...initFormData,
        },
      };
    case 'CHANGE_ACCOUNT_FORM_VALUE':
      return {
        ...state,
        form: {
          ...state.form,
          [action.name]: action.value,
        },
      };
    default:
      return state;
  }
};
