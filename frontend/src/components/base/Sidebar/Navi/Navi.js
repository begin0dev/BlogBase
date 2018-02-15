import React from 'react';
import classNames from 'classnames/bind';
import { observable, action } from 'mobx';
import { Link } from 'react-router-dom';

import styles from './Navi.scss';

const cx = classNames.bind(styles);

class NaviStore {
  @observable active = 1;

  @action toggleActive(index) {
    this.active = index;
  }
}

const Navi = ({ active }) => {
  return (
    <ul className={cx('ul')}>
      <Link to="/">
        <li className={cx('li', { active: active === 1 })}>
          HOME
        </li>
      </Link>
      <Link to="/profile">
        <li className={cx('li', { active: active === 2 })}>
          프로필
        </li>
      </Link>
      <li className={cx('li', { active: active === 3 })}>
        전체글
      </li>
      <ul className={cx('ul', 'cd-ul')}>
        <li className={cx('li')}>
          Test
        </li>
        <li className={cx('li')}>
          Test
        </li>
      </ul>
    </ul>
  );
};

export default Navi;
