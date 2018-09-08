import * as React from "react";
import * as classNames from "classnames/bind";

import styles from "./Hamburger.scss";

const cx = classNames.bind(styles);

interface IProps {
  visible: boolean;
  hamburgerRef: React.Ref<HTMLDivElement>;
  toggleSidebar: () => void;
}

const Hamburger: React.SFC<IProps> = ({
  visible,
  toggleSidebar,
  hamburgerRef
}) => {
  return (
    <div className={cx("wrapper")} ref={hamburgerRef} onClick={toggleSidebar}>
      <div
        className={`hamburger hamburger--slider ${visible && "is-active"} ${cx(
          "spin"
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
