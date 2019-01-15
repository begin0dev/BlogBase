import produce from 'immer';

// actions
const INITIALIZE_AUTH_FORM_DATA = 'INITIALIZE_AUTH_FORM_DATA';
const CHANGE_AUTH_FORM = 'CHANGE_AUTH_FORM';
const TOGGLE_AUTH_FORM = 'TOGGLE_AUTH_FORM';
const SET_AUTH_FORM_VALUE = 'SET_AUTH_FORM_VALUE';

class InitializeAuthFormData {
  readonly type = INITIALIZE_AUTH_FORM_DATA;
}
class ChangeAuthForm {
  readonly type = CHANGE_AUTH_FORM;
  constructor(public formName: string) {}
}
class ToggleAuthForm {
  readonly type = TOGGLE_AUTH_FORM;
  constructor(public active: boolean) {}
}
class SetAuthFormValue {
  readonly type = SET_AUTH_FORM_VALUE;
  constructor(public name: string, public value: string) {}
}

export type AuthActions =
  | InitializeAuthFormData
  | ChangeAuthForm
  | ToggleAuthForm
  | SetAuthFormValue;

// reducer
interface IFormData {
  displayName: string;
  email: string;
  password: string;
}
const initFormValue: IFormData = {
  displayName: '',
  email: '',
  password: '',
};

export interface IAuthState {
  formValue: IFormData;
  state: {
    form: string;
    active: boolean;
    isLoading: boolean;
  };
}

export const defaultState: IAuthState = {
  formValue: {
    ...initFormValue,
  },
  state: {
    form: 'signin',
    active: false,
    isLoading: false,
  },
};

export default (state = defaultState, action: AuthActions) => {
  switch (action.type) {
    case 'INITIALIZE_AUTH_FORM_DATA':
      return produce(state, draft => {
        draft.formValue = initFormValue;
      });
    case 'CHANGE_AUTH_FORM':
      return produce(state, draft => {
        draft.state.form = action.formName;
      });
    case 'TOGGLE_AUTH_FORM':
      return produce(state, draft => {
        draft.state.active = action.active;
      });
    case 'SET_AUTH_FORM_VALUE':
      return produce(state, draft => {
        draft.formValue[action.name] = action.value;
      });
    default:
      return state;
  }
};
