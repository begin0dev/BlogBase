import React from 'react';
import classNames from 'classnames/bind';
import styles from './Hamburger.scss';

const cx = classNames.bind(styles);

const Hamburger = ({ sidebar, toggleSidebar }) => {
  return (
    <div className={cx('wrapper')} onClick={toggleSidebar}>
      <div className={classNames('hamburger hamburger--slider', { 'is-active': sidebar }, cx('spin'))}>
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </div>
    </div>
  );
};

export default Hamburger;
