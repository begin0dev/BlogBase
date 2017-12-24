import React from 'react';
import classNames from 'classnames/bind';

import styles from './Header.scss';
import Title from './Title/index';

const cx = classNames.bind(styles);

const Header = ({sidebar}) => {
  return (
    <header className={cx('header')}>
      <Title />
    </header>
  );
};

export default Header;