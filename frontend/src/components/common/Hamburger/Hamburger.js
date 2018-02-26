import React from 'react';
import classNames from 'classnames/bind';
import styles from './Hamburger.scss';

const cx = classNames.bind(styles);

const Hamburger = ({ visible, toggleSidebar }) => {
  return (
    <div className={cx('wrapper')} onClick={toggleSidebar}>
      <div className={classNames('hamburger hamburger--slider', { 'is-active': visible }, cx('spin'))}>
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </div>
    </div>
  );
};

export default Hamburger;
