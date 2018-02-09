import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Header } from 'components';
import * as uiActions from '../store/reducers/ui';

class HeaderContainer extends Component {
  render() {
    return (
      <Header />
    );
  }
}

export default connect(
  state => ({
    sidebar: state.ui.sidebar.visible,
    active: state.ui.sidebar.active,
  }),
  dispatch => ({
    UiActions: bindActionCreators(uiActions, dispatch),
  }),
)(HeaderContainer);
