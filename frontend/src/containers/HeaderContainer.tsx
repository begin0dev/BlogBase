import * as React from 'react';
import { connect } from 'react-redux';

import { Header } from 'components';
import { IStoreState } from '../store/reducers';

class HeaderContainer extends React.Component {
  render() {
    return <Header />;
  }
}

const mapStateToProps = (state: IStoreState) => ({
  accountState: state.account,
});
const mapDispatchToProps = (dispatch: any) => ({
  dispatchToggleAccountForm(active: boolean): void {
    dispatch({ type: 'TOGGLE_ACCOUNT_FORM', active });
  },
  dispatchInitializeFormData(): void {
    dispatch({ type: 'INITIALIZE_FORM_DATA' });
  },
  dispatchSetAccountFormValue(name: string, value: string): void {
    dispatch({ type: 'SET_ACCOUNT_FORM_VALUE', name, value });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderContainer);
