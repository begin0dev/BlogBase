import produce from 'immer';

// actions
const CHANGE_AUTH_FORM = 'CHANGE_AUTH_FORM';
const TOGGLE_AUTH_FORM = 'TOGGLE_AUTH_FORM';
const INITIALIZE_AUTH_FORM_DATA = 'INITIALIZE_AUTH_FORM_DATA';
const SET_AUTH_FORM_VALUE = 'SET_AUTH_FORM_VALUE';

interface IFormData {
  displayName: string;
  email: string;
  password: string;
}
export interface IAuthState {
  form: IFormData;
  state: {
    form: string;
    active: boolean;
    loading: boolean;
  };
}

class ChangeAuthForm {
  readonly type = CHANGE_AUTH_FORM;
  constructor(public formName: string) {}
}

class ToggleAuthForm {
  readonly type = TOGGLE_AUTH_FORM;
  constructor(public active: boolean) {}
}

class InitializeAuthFormData {
  readonly type = INITIALIZE_AUTH_FORM_DATA;
  constructor(public payload: IFormData) {}
}

class SetAuthFormValue {
  readonly type = SET_AUTH_FORM_VALUE;
  constructor(public name: string, public value: string) {}
}

export type AuthActions =
  | ChangeAuthForm
  | ToggleAuthForm
  | InitializeAuthFormData
  | SetAuthFormValue;

const initFormData: IFormData = {
  displayName: '',
  email: '',
  password: '',
};

export const defaultState: IAuthState = {
  form: {
    ...initFormData,
  },
  state: {
    form: 'signin',
    active: false,
    loading: false,
  },
};

export default (state = defaultState, action: AuthActions) => {
  switch (action.type) {
    case 'CHANGE_AUTH_FORM':
      return produce(state, draft => {
        draft.state.form = action.formName;
      });
    case 'TOGGLE_AUTH_FORM':
      return produce(state, draft => {
        draft.state.active = action.active;
      });
    case 'INITIALIZE_AUTH_FORM_DATA':
      return produce(state, draft => {
        draft.form = initFormData;
      });
    case 'SET_AUTH_FORM_VALUE':
      return produce(state, draft => {
        draft.form[action.name] = action.value;
      });
    default:
      return state;
  }
};
