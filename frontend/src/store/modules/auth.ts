import produce from 'immer';

import { ActionsUnion } from 'utils/types';
import { createAction } from 'utils/actionHelper';

// actions
const INITIALIZE_AUTH_FORM_DATA = 'INITIALIZE_AUTH_FORM_DATA';
const CHANGE_AUTH_FORM = 'CHANGE_AUTH_FORM';
const TOGGLE_AUTH_FORM = 'TOGGLE_AUTH_FORM';
const SET_AUTH_FORM_VALUE = 'SET_AUTH_FORM_VALUE';

export const Actions = {
  initializeAuthFormData: () => createAction(INITIALIZE_AUTH_FORM_DATA),
  changeAuthForm: (formName: string) => createAction(CHANGE_AUTH_FORM, formName),
  toggleAuthForm: (active: boolean) => createAction(TOGGLE_AUTH_FORM, active),
  setAuthFormValue: (payload: { name: string; value: string; }) => createAction(SET_AUTH_FORM_VALUE, payload),
};
export type Actions = ActionsUnion<typeof Actions>

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

export default (state = defaultState, action: Actions) => {
  switch (action.type) {
    case INITIALIZE_AUTH_FORM_DATA:
      return produce(state, draft => {
        draft.formValue = initFormValue;
      });
    case CHANGE_AUTH_FORM:
      return produce(state, draft => {
        draft.state.form = action.payload;
      });
    case TOGGLE_AUTH_FORM:
      return produce(state, draft => {
        draft.state.active = action.payload;
      });
    case SET_AUTH_FORM_VALUE:
      return produce(state, draft => {
        draft.formValue[action.payload.name] = action.payload.value;
      });
    default:
      return state;
  }
};
