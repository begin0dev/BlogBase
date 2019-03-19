import * as React from 'react';
import * as classNames from 'classnames/bind';

import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

interface IProps {
  size?: object;
  style?: object;
  active?: boolean;
  fullScreen?: boolean;
  hideOverlay?: boolean;
  backgroundColor?: string;
  children: React.ReactNode;
}

const Modal: React.FunctionComponent<IProps> = ({
  active,
  size,
  style,
  hideOverlay,
  fullScreen,
  backgroundColor,
  children,
}) => {
  return (
    <div className={cx('modal-overlay', { 'hide-overlay': hideOverlay }, { active })}>
      <div
        className={cx('modal', { 'full-screen': fullScreen })}
        style={{ backgroundColor, ...style, ...(!fullScreen && size) }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
