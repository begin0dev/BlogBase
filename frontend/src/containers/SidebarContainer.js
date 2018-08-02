import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';

import { Hamburger, Sidebar, Overlay } from 'components';

class SidebarContainer extends Component {
  componentDidMount() {
    window.addEventListener('resize', this.sidebarResizeEvent);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.sidebarResizeEvent);
  }
  handleClickOutside = (e) => {
    const { toggleSidebar, hamburgerRef } = this;
    const { sidebar } = this.props;
    if (hamburgerRef.contains(e.target)) return;
    if (!sidebar.visible || window.innerWidth >= 768) return;
    toggleSidebar();
  };
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
      <React.Fragment>
        <Sidebar
          sidebar={sidebar}
          setSearchValue={setSearchValue}
          toggleSidebar={toggleSidebar}
          expandedNavi={expandedNavi}
          key="sidebar"
        />
        { window.innerWidth < 768 && <Overlay visible={sidebar.visible} key="sidebar-overlay" /> }
        <Hamburger
          visible={sidebar.visible}
          toggleSidebar={toggleSidebar}
          hamburgerRef={(hamburger) => { this.hamburgerRef = hamburger; }}
          key="hamburger"
        />
      </React.Fragment>
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
