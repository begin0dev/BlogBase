import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Hamburger, Sidebar } from 'components';

@inject('commonStore')
@observer
class SidebarContainer extends Component {
  componentDidMount() {
    window.addEventListener('resize', this.sidebarResizeEvent);
    this.sidebarResizeEvent();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.sidebarResizeEvent);
  }

  toggleSidebar = () => {
    const { commonStore } = this.props;
    const { sidebar } = commonStore;
    if (window.innerWidth < 768) {
      commonStore.toggleSidebar(!sidebar.visible);
    }
  }
  sidebarResizeEvent = () => {
    const { commonStore } = this.props;
    const { sidebar } = commonStore;
    if (!sidebar.visible && window.innerWidth >= 768) {
      commonStore.toggleSidebar(true);
    }
    if (sidebar.visible && window.innerWidth < 768) {
      commonStore.toggleSidebar(false);
    }
  }
  toggleNavi = (index) => {
    // const { UiActions, active } = this.props;
    // if (active === index) return;
    // UiActions.toggleNavi(index);
  }
  render() {
    const { toggleSidebar } = this;
    const { sidebar } = this.props.commonStore;
    return [
      <Hamburger
        sidebar={sidebar.visible}
        toggleSidebar={toggleSidebar}
        key="hamburger"
      />,
      <Sidebar
        sidebar={sidebar.visible}
        active={sidebar.active}
        key="sidebar"
      />,
    ];
  }
}

export default SidebarContainer;
