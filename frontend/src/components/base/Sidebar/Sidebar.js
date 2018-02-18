import React from 'react';
import classNames from 'classnames/bind';

import { SearchInput } from 'components';
import Navi from './Navi/Navi';
import styles from './Sidebar.scss';

const cx = classNames.bind(styles);

const Sidebar = ({ sidebar }) => {
  return (
    <aside className={cx('sidebar', { open: sidebar })}>
      <div className={cx('nav-search')}>
        <SearchInput
          loading={false}
          placeholder="Search..."
        />
      </div>
      <div className={cx('nav-wrap')}>
        <Navi />
      </div>
    </aside>
  );
};

export default Sidebar;
