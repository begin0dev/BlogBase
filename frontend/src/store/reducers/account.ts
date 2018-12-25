import produce from 'immer';

// actions
const TOGGLE_ACCOUNT_FORM = 'TOGGLE_ACCOUNT_FORM';
const INITIALIZE_FORM_DATA = 'INITIALIZE_FORM_DATA';
const SET_ACCOUNT_FORM_VALUE = 'SET_ACCOUNT_FORM_VALUE';

interface IFormData {
  displayName: string;
  email: string;
  password: string;
}
export interface IAccountState {
  form: IFormData;
  state: {
    form: string;
    active: boolean;
    loading: boolean;
  };
}

class TogglAccountForm {
  readonly type = TOGGLE_ACCOUNT_FORM;
  constructor(public active: boolean) {}
}

class InitializeFormData {
  readonly type = INITIALIZE_FORM_DATA;
  constructor(public payload: IFormData) {}
}

class SetAccountFormValue {
  readonly type = SET_ACCOUNT_FORM_VALUE;
  constructor(public name: string, public value: string) {}
}

type AccountActions =
  | TogglAccountForm
  | InitializeFormData
  | SetAccountFormValue;

const initFormData: IFormData = {
  displayName: '',
  email: '',
  password: '',
};

export const defaultState: IAccountState = {
  form: {
    ...initFormData,
  },
  state: {
    form: 'signin',
    active: false,
    loading: false,
  },
};

export default (state = defaultState, action: AccountActions) => {
  switch (action.type) {
    case 'TOGGLE_ACCOUNT_FORM':
      return produce(state, draft => {
        draft.state.active = action.active;
      });
    case 'INITIALIZE_FORM_DATA':
      return produce(state, draft => {
        draft.form = initFormData;
      });
    case 'SET_ACCOUNT_FORM_VALUE':
      return produce(state, draft => {
        draft.form[action.name] = action.value;
      });
    default:
      return state;
  }
};
