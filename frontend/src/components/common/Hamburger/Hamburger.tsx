import * as React from 'react';
import * as classNames from 'classnames/bind';

import styles from './Hamburger.module.scss';

const cx = classNames.bind(styles);

interface IProps {
  visible: boolean;
  hamburgerRef: React.RefObject<HTMLDivElement>;
  toggleSidebar: () => void;
}

const Hamburger: React.FunctionComponent<IProps> = ({
  visible,
  toggleSidebar,
  hamburgerRef,
}) => {
  return (
    <div className={cx('wrapper')} ref={hamburgerRef} onClick={toggleSidebar}>
      <div
        className={`hamburger hamburger--slider ${visible && 'is-active'} ${cx(
          'spin',
        )}`}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </div>
    </div>
  );
};

export default Hamburger;
