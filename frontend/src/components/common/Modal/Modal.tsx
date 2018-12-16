import * as React from 'react';
import classNames from 'classnames';

import styles from './Modal.scss';

const cx = classNames.bind(styles);

interface IProps {
  size?: object;
  style?: object;
  active?: boolean;
  fullScreen?: boolean;
  scrollable?: boolean;
  hideOverlay?: boolean;
  children: React.ReactNode;
}

const Modal: React.FunctionComponent<IProps> = ({
  active,
  size,
  style,
  hideOverlay,
  fullScreen,
  scrollable,
  children,
}) => {
  return (
    <div
      className={cx(
        'modal-overlay',
        { 'hide-overlay': hideOverlay },
        { active },
      )}
    >
      <div
        className={cx('modal', { 'full-screen': fullScreen }, { scrollable })}
        style={{ ...style, ...(!fullScreen && size) }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
