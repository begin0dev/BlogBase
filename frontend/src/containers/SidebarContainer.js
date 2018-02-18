import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Hamburger, Sidebar } from 'components';

@inject('commonStore')
@withRouter
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
