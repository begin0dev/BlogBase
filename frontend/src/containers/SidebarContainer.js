import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Hamburger, Sidebar } from 'components';
import * as uiActions from 'store/modules/common';

class SidebarContainer extends Component {
  componentDidMount() {
    window.addEventListener('resize', this.sidebarResizeEvent);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.sidebarResizeEvent);
  }

  toggleSidebar = () => {
    const { UiActions, sidebar } = this.props;
    if (window.innerWidth < 768) {
      UiActions.toggleSidebar(!sidebar);
    }
  }
  sidebarResizeEvent = () => {
    const { UiActions, sidebar } = this.props;
    if (!sidebar && window.innerWidth >= 768) {
      UiActions.toggleSidebar(true);
    }
    if (sidebar && window.innerWidth < 768) {
      UiActions.toggleSidebar(false);
    }
  }
  render() {
    const { toggleSidebar } = this;
    const { sidebar } = this.props;
    return [
      <Hamburger
        visible={sidebar.visible}
        toggleSidebar={toggleSidebar}
        key="hamburger"
      />,
      <Sidebar
        sidebar={sidebar}
        key="sidebar"
      />,
    ];
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
)(SidebarContainer);
