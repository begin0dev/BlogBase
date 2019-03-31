import * as React from 'react';
import * as classNames from 'classnames/bind';

import { Logo } from 'assets/svgs';
import Navi from './Navi';
import { Overlay, Hamburger } from 'components';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

interface IProps {
  isMobile: boolean;
  visible: boolean;
  toggleSidebar(bool: boolean): void;
}

const Header: React.FunctionComponent<IProps> = ({ isMobile, visible, toggleSidebar }) => (
  <header className={cx('header')}>
    <div className={cx('wrapper')}>
      <div className={cx('left')}>
        <div className={cx('logo')}>
          <Logo />
        </div>
        {isMobile && <Overlay visible={visible} />}
        <Navi visible={visible} isMobile={isMobile} />
      </div>
      <div className={cx('right')}>
        <button type='button' className={cx('login')}>Log In</button>
        <button type='button' className={cx('signup')}>Sign Up</button>
        {isMobile && <Hamburger visible={visible} toggleSidebar={toggleSidebar} />}
      </div>
    </div>
  </header>
);

export default Header;
