import produce from 'immer';

import { ActionsUnion } from 'utils/types';
import { createAction } from 'utils/actionHelper';

// actions
const SET_VIEW_TYPE = 'SET_VIEW_TYPE';

export const Actions = {
  setViewType: (payload: { typeName: 'isMobile' | 'isTablet'; bool: boolean }) =>
    createAction(SET_VIEW_TYPE, payload),
};
export type Actions = ActionsUnion<typeof Actions>;

// reducer
export interface IBaseState {
  isMobile: boolean;
  isTablet: boolean;
}

export const defaultState: IBaseState = {
  isMobile: window.innerWidth <= 450,
  isTablet: window.innerWidth <= 768,
};

export default (state = defaultState, action: Actions) => {
  switch (action.type) {
    case SET_VIEW_TYPE:
      return produce(state, draft => {
        const { typeName, bool } = action.payload;
        draft[typeName] = bool;
      });
    default:
      return state;
  }
};
