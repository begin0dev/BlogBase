import * as React from 'react';
import * as classNames from 'classnames/bind';

import { Logo } from 'assets/svgs';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

// interface IProps {
// }

const Header: React.FunctionComponent = () => (
  <header className={cx('header')}>
    <div className={cx('wrapper')}>
      <div className={cx('left')}>
        <div className={cx('logo')}>
          <Logo />
        </div>
      </div>
      <div className={cx('right')}>right</div>
    </div>
  </header>
);

export default Header;
