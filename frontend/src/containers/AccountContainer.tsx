import * as React from 'react';
import { connect } from 'react-redux';

import { IStoreState } from 'store/modules';
import { IAccountState } from "store/modules/account";
import { Modal, Account } from 'components';

interface IProps {
	accountState: IAccountState;
	dispatchChangeAccountFormValue(name: string, value: string): void;
}

class AccountContainer extends React.Component<IProps> {
  changeAccountFormValue = (e: any): void => {
    const { dispatchChangeAccountFormValue } = this.props;
    const { name, value } = e.target;
    dispatchChangeAccountFormValue(name, value);
  }

  render() {
    const { accountState } = this.props;
    const { changeAccountFormValue } = this;
    return (
      <Modal active fullScreen={window.innerWidth < 450} size={{ width: '600px' }}>
        <Account accountState={accountState} changeAccountFormValue={changeAccountFormValue} />
      </Modal>
    );
  }
}

const mapStateToProps = (state: IStoreState) => ({
  accountState: state.account,
});
const mapDispatchToProps = (dispatch: any) => ({
  dispatchChangeAccountFormValue: (name: string, value: string) => {
    dispatch({ type: 'CHANGE_ACCOUNT_FORM_VALUE', name, value });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);
