import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {Header} from 'components';
import * as uiActions from 'store/reducers/ui';

class HeaderContainer extends Component {
  render() {
    const {sidebar} = this.props;
    return (
      <Header sidebar={sidebar}/>
    );
  }
}

export default connect(
  (state) => ({
    sidebar: state.ui.getIn(['sidebar', 'visible'])
  }),
  (dispatch) => ({
    UiActions: bindActionCreators(uiActions, dispatch),
  })
)(HeaderContainer);
