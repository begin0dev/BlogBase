import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Modal } from 'components';

class AccountContainer extends Component {
  render() {
    return (
      <Modal modalStyle={{ width: '400px', height: '400px' }}>
        asdasdas
      </Modal>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);
