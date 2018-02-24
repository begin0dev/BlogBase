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

  setSearchValue = (e) => {
    const { commonStore } = this.props;
    commonStore.setSearchValue(e.target.value);
  }
  toggleSidebar = () => {
    const { commonStore } = this.props;
    const { visible } = commonStore.sidebar;
    if (window.innerWidth < 768) {
      commonStore.toggleSidebar(!visible);
    }
  }
  sidebarResizeEvent = () => {
    const { commonStore } = this.props;
    const { visible } = commonStore.sidebar;
    if (!visible && window.innerWidth >= 768) {
      commonStore.toggleSidebar(true);
    }
    if (visible && window.innerWidth < 768) {
      commonStore.toggleSidebar(false);
    }
  }
  render() {
    const { toggleSidebar, setSearchValue } = this;
    const { url } = this.props.match;
    const { sidebar } = this.props.commonStore;
    return [
      <Hamburger
        visible={sidebar.visible}
        toggleSidebar={toggleSidebar}
        key="hamburger"
      />,
      <Sidebar
        url={url}
        sidebar={sidebar}
        setSearchValue={setSearchValue}
        key="sidebar"
      />,
    ];
  }
}

export default SidebarContainer;
