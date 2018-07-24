import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Hamburger, Sidebar } from 'components';

class SidebarContainer extends Component {
  componentDidMount() {
    this.toggleSidebar();
    window.addEventListener('resize', this.sidebarResizeEvent);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.sidebarResizeEvent);
  }

  // setSearchValue = (e) => {
  //   const { sidebar } = this.props;
  //   commonStore.setSearchValue(e.target.value);
  // }
  toggleSidebar = () => {
    const { sidebar, dispatchToggleSidebar } = this.props;
    if (window.innerWidth < 768) {
      dispatchToggleSidebar(!sidebar.visible);
    }
  }
  sidebarResizeEvent = () => {
    const { sidebar, dispatchToggleSidebar } = this.props;
    const { visible } = sidebar;
    if (!visible && window.innerWidth >= 768) {
      dispatchToggleSidebar(true);
    }
    if (visible && window.innerWidth < 768) {
      dispatchToggleSidebar(false);
    }
  }
  render() {
    const { toggleSidebar, setSearchValue } = this;
    const { sidebar } = this.props;
    return (
      <React.Fragment>
        <Hamburger
          visible={sidebar.visible}
          toggleSidebar={toggleSidebar}
          key="hamburger"
        />
        <Sidebar
          sidebar={sidebar}
          setSearchValue={setSearchValue}
          key="sidebar"
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
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
