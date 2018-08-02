import React from 'react';
import classNames from 'classnames/bind';
import styles from './Spinner.scss';

const cx = classNames.bind(styles);

const Spinner = ({ size }) => {
  return (
    <div className={cx('fading-circle')} style={{ width: size, height: size }}>
      <div className={cx('circle', 'circle1')} />
      <div className={cx('circle', 'circle2')} />
      <div className={cx('circle', 'circle3')} />
      <div className={cx('circle', 'circle4')} />
      <div className={cx('circle', 'circle5')} />
      <div className={cx('circle', 'circle6')} />
      <div className={cx('circle', 'circle7')} />
      <div className={cx('circle', 'circle8')} />
      <div className={cx('circle', 'circle9')} />
      <div className={cx('circle', 'circle10')} />
      <div className={cx('circle', 'circle11')} />
      <div className={cx('circle', 'circle12')} />
    </div>
  );
};

export default Spinner;