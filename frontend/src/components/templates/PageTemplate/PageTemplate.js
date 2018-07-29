import React from 'react';
import classNames from 'classnames/bind';
import { HeaderContainer, SidebarContainer, OverlayContainer } from 'containers';
import styles from './PageTemplate.scss';

const cx = classNames.bind(styles);

const PageTemplate = ({ children }) => {
  return (
    <div className={cx('app-wrap')}>
      <HeaderContainer />
      <SidebarContainer />
      <div className={cx('contents-wrap')}>
        {children}
      </div>
      <OverlayContainer />
    </div>
  );
};

export default PageTemplate;
