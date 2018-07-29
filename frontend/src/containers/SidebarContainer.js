import React, { Component } from 'react';
import { connect } from 'react-redux';
import onClickOutside from 'react-onclickoutside';
import { withRouter } from 'react-router-dom';

import { Hamburger, Sidebar } from 'components';

class SidebarContainer extends Component {
  componentDidMount() {
    window.addEventListener('resize', this.sidebarResizeEvent);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.sidebarResizeEvent);
  }
  handleClickOutside = () => {
    const { toggleSidebar } = this;
    const { sidebar } = this.props;
    if (!sidebar.visible || window.innerWidth >= 768) return;
    toggleSidebar();
  };
  // setSearchValue = (e) => {
  //   const { sidebar } = this.props;
  //   commonStore.setSearchValue(e.target.value);
  // }
  toggleSidebar = () => {
    const { sidebar, dispatchToggleSidebar } = this.props;
    if (window.innerWidth < 768) dispatchToggleSidebar(!sidebar.visible);
  }
  sidebarResizeEvent = () => {
    const { sidebar, dispatchToggleSidebar } = this.props;
    const { visible } = sidebar;
    if (!visible && window.innerWidth >= 768) dispatchToggleSidebar(true);
    if (visible && window.innerWidth < 768) dispatchToggleSidebar(false);
  }
  expandedNavi = boolean => () => {
    const { dispatchExpandedNavi } = this.props;
    dispatchExpandedNavi(boolean);
  }
  render() {
    const { toggleSidebar, expandedNavi, setSearchValue } = this;
    const { sidebar } = this.props;
    return (
      <div>
        <Sidebar
          sidebar={sidebar}
          setSearchValue={setSearchValue}
          toggleSidebar={toggleSidebar}
          expandedNavi={expandedNavi}
          key="sidebar"
        />
        <Hamburger
          visible={sidebar.visible}
          toggleSidebar={toggleSidebar}
          key="hamburger"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sidebar: state.sidebar,
});

const mapDispatchToProps = dispatch => ({
  dispatchToggleSidebar: (boolean) => {
    dispatch({ type: 'TOGGLE_SIDEBAR', boolean });
  },
  dispatchExpandedNavi: (boolean) => {
    dispatch({ type: 'EXPANDED_NAVI', boolean });
  },
});

const outsideWrap = onClickOutside(SidebarContainer);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(outsideWrap));
