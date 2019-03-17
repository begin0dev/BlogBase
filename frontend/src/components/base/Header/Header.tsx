import * as React from 'react';
import * as classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

interface IProps {
  toggleAuthForm(name: string, active: boolean): void;
}

const Header: React.FunctionComponent<IProps> = ({ toggleAuthForm }) => (
  <header className={cx('header')}>
    <div className={cx('title-wrap')}>
      <Link to="/">BEGIN0DEV</Link>
    </div>
    <div className={cx('spacer')} />
    <div className={cx('nav-wrap')}>
      <span className={cx('nav-item', 'sign')} onClick={() => toggleAuthForm('signin', true)}>
        SIGN IN
      </span>
      <span className={cx('nav-item')}>or</span>
      <span className={cx('nav-item', 'sign')}>SIGN UP</span>
    </div>
  </header>
);

export default Header;
