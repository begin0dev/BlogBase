import React, { Component } from 'react';
import { Hamburger, Sidebar } from 'components';

class SidebarContainer extends Component {
  componentDidMount() {
    window.addEventListener('resize', this.sidebarResizeEvent);
    this.sidebarResizeEvent();
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
  toggleNavi = (index) => {
    const { UiActions, active } = this.props;
    if (active === index) return;
    UiActions.toggleNavi(index);
  }
  render() {
    const { toggleSidebar } = this;
    const { sidebar, active } = this.props;
    return [
      <Hamburger
        sidebar={sidebar}
        toggleSidebar={toggleSidebar}
        key="hamburger"
      />,
      <Sidebar
        sidebar={sidebar}
        active={active}
        key="sidebar"
      />,
    ];
  }
}

export default SidebarContainer;
