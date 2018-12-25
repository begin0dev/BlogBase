import * as React from 'react';
import { connect } from 'react-redux';

import { Header } from 'components';
import { IStoreState } from '../store/reducers';
import { IAuthState } from 'store/reducers/auth';

interface IProps {
  authState: IAuthState;
}

class HeaderContainer extends React.Component<IProps> {
  render() {
    return <Header />;
  }
}

const mapStateToProps = (state: IStoreState) => ({
  authState: state.auth,
});
const mapDispatchToProps = (dispatch: any) => ({
  dispatchToggleAuthForm(active: boolean): void {
    dispatch({ type: 'TOGGLE_AUTH_FORM', active });
  },
  dispatchInitializeFormData(): void {
    dispatch({ type: 'INITIALIZE_FORM_DATA' });
  },
  dispatchSetAuthFormValue(name: string, value: string): void {
    dispatch({ type: 'SET_AUTH_FORM_VALUE', name, value });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderContainer);
