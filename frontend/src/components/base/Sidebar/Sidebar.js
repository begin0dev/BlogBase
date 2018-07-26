import React, { Component } from 'react';
import classNames from 'classnames/bind';
import onClickOutside from 'react-onclickoutside';

import { SearchInput } from 'components';
import Navi from './Navi/Navi';
import styles from './Sidebar.scss';

const cx = classNames.bind(styles);

class Sidebar extends Component {
  handleClickOutside = () => {
    const { sidebar } = this.props;
    if (!sidebar.visible) return;
    console.log('aaaa');
    // toggleSidebar();
  };
  render() {
    const { sidebar, setSearchValue, expandedNavi } = this.props;
    return (
      <aside className={cx('sidebar', { open: sidebar.visible })}>
        <div className={cx('nav-search')}>
          <SearchInput
            value={sidebar.searchValue}
            loading={sidebar.searchLoading}
            setValue={setSearchValue}
            placeholder="Search..."
          />
        </div>
        <div className={cx('nav-wrap')}>
          <Navi expanded={sidebar.expanded} expandedNavi={expandedNavi} />
        </div>
      </aside>
    );
  }
}

export default onClickOutside(Sidebar);
