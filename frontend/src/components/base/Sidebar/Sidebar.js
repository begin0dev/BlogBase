import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { SearchInput } from 'components';
import Navi from './Navi';
import styles from './Sidebar.scss';

const cx = classNames.bind(styles);

const Sidebar = ({ sidebar, setSearchValue, expandedNavi }) => {
  return (
    <aside className={cx('sidebar', { open: sidebar.visible })}>
      <div className={cx('title-wrap')}>
        <Link to="/">
          <span>B</span>EGINNER
        </Link>
      </div>
      <div className={cx('nav-wrapper')}>
        <div className={cx('nav-search')}>
          <SearchInput
            value={sidebar.searchValue}
            loading={sidebar.searchLoading}
            setValue={setSearchValue}
            placeholder="Search..."
          />
        </div>
        <div className={cx('spacer')} />
        <Navi expanded={sidebar.expanded} expandedNavi={expandedNavi} />
      </div>
    </aside>
  );
};

export default Sidebar;
