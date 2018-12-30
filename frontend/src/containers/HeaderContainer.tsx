import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Header } from 'components';
import { IStoreState } from '../store/reducers';
import { IAuthState, AuthActions } from 'store/reducers/auth';

interface IProps {
  authState: IAuthState;
  dispatchToggleAuthForm(active: boolean): void;
}

class HeaderContainer extends React.Component<IProps> {
  toggleAuthForm = (name: string): void => {
    const { authState, dispatchToggleAuthForm } = this.props;
    dispatchToggleAuthForm(!authState.state.active);
  };

  render() {
    const { toggleAuthForm } = this;
    return <Header toggleAuthForm={toggleAuthForm} />;
  }
}

const mapStateToProps = (state: IStoreState) => ({
  authState: state.auth,
});
const mapDispatchToProps = (dispatch: Dispatch<AuthActions>) => {
  return {
    dispatchInitializeFormData() {
      return dispatch({ type: 'INITIALIZE_FORM_DATA' });
    },
    dispatchToggleAuthForm(active: boolean) {
      return dispatch({ type: 'TOGGLE_AUTH_FORM', active });
    },
    dispatchSetAuthFormValue(name: string, value: string) {
      return dispatch({ type: 'SET_AUTH_FORM_VALUE', name, value });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderContainer);
