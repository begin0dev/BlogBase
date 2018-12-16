import * as React from "react";
import classNames from "classnames";

import styles from "./Overlay.scss";

const cx = classNames.bind(styles);

interface IProps {
  visible?: boolean;
}

const Overlay: React.FunctionComponent<IProps> = ({ visible }) => {
  return <div className={cx("overlay", { visible })} />;
};

export default Overlay;
