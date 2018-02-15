import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Hamburger, Sidebar } from 'components';

@inject('commonStore')
@observer
class SidebarContainer extends Component {
  componentDidMount() {
    window.addEventListener('resize', this.sidebarResizeEvent);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.sidebarResizeEvent);
  }

  toggleSidebar = () => {
    const { commonStore } = this.props;
    const { sidebar } = commonStore;
    if (window.innerWidth < 768) {
      commonStore.toggleSidebar(!sidebar);
    }
  }
  sidebarResizeEvent = () => {
    const { commonStore } = this.props;
    const { sidebar } = commonStore;
    if (!sidebar && window.innerWidth >= 768) {
      commonStore.toggleSidebar(true);
    }
    if (sidebar && window.innerWidth < 768) {
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
        sidebar={sidebar}
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

export default SidebarContainer;
