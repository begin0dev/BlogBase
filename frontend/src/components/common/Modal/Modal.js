import React from 'react';
import classNames from 'classnames/bind';

import styles from './Modal.scss';

const cx = classNames.bind(styles);

const Modal = ({ active, size, style, hideOverlay, fullScreen, scrollable, children }) => {
  return (
    <div className={cx('modal-overlay', { 'hide-overlay': hideOverlay }, { active })}>
      <div className={cx('modal', { 'full-screen': fullScreen }, { scrollable })} style={{ ...style, ...(!fullScreen && size) }}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
