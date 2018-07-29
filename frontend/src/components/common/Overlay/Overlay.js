import React from 'react';
import classNames from 'classnames/bind';

import styles from './Overlay.scss';

const cx = classNames.bind(styles);

const Overlay = ({ visible }) => {
  return (
    <div className={cx('overlay', { visible })} />
  );
};

export default Overlay;
