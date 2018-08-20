import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Modal, Account } from 'components';

class AccountContainer extends Component {
  changeAccountFormValue = (e) => {
    const { dispatchChangeAccountFormValue } = this.props;
    const { name, value } = e.target;
    dispatchChangeAccountFormValue(name, value);
  }
  render() {
    const { changeAccountFormValue } = this;
    return (
      <Modal active fullScreen={window.innerWidth < 450} size={{ width: '340px' }}>
        <Account changeAccountFormValue={changeAccountFormValue} />
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  accountState: state.account,
});
const mapDispatchToProps = dispatch => ({
  dispatchChangeAccountFormValue: (name, value) => {
    dispatch({ type: 'CHANGE_ACCOUNT_FORM_VALUE', name, value });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);
