import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Modal, Account } from 'components';

class AccountContainer extends Component {
  render() {
    return (
      <Modal active fullScreen={window.innerWidth < 450} size={{ width: '350px' }}>
        <Account />
      </Modal>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);
