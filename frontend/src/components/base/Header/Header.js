import React from 'react';
import classNames from 'classnames/bind';

import styles from './Header.scss';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('header')}>
      <div className={cx('title-wrap')}>
        BEGINNER
      </div>
      <div className={cx('spacer')} />
      <div className={cx('nav-wrap')}>
        <div className={cx('nav-item')}>
          LOGIN
        </div>
        <div className={cx('nav-item')}>
          or
        </div>
        <div className={cx('nav-item')}>
          SIGN UP
        </div>
      </div>
    </header>
  );
};

export default Header;
