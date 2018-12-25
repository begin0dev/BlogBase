import * as React from 'react';
import { connect } from 'react-redux';

import { IStoreState } from 'store/reducers';
import { IAccountState } from 'store/reducers/account';
import { Account, Modal } from 'components';

interface IProps {
  accountState: IAccountState;
  dispatchChangeAccountFormValue(name: string, value: string): void;
}

class AccountContainer extends React.Component<IProps> {
  changeAccountFormValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { dispatchChangeAccountFormValue } = this.props;
    const { name, value } = e.target;
    dispatchChangeAccountFormValue(name, value);
  };

  render() {
    const { accountState } = this.props;
    const { changeAccountFormValue } = this;
    return (
      <Modal
        active={accountState.state.active}
        fullScreen={window.innerWidth < 450}
        size={{ width: '700px' }}
      >
        <Account
          accountState={accountState}
          changeAccountFormValue={changeAccountFormValue}
        />
      </Modal>
    );
  }
}

const mapStateToProps = (state: IStoreState) => ({
  accountState: state.account,
});
const mapDispatchToProps = (dispatch: any) => ({
  dispatchChangeAccountFormValue(name: string, value: string): void {
    dispatch({ type: 'CHANGE_ACCOUNT_FORM_VALUE', name, value });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountContainer);
