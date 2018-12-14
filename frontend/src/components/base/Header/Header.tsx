import * as React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import styles from "./Header.scss";

const cx = classNames.bind(styles);

const Header: React.SFC = () => (
  <header className={cx("header")}>
    <div className={cx("title-wrap")}>
      <Link to="/">BEGINNER</Link>
    </div>
    <div className={cx("spacer")} />
    <div className={cx("nav-wrap")}>
      <span className={cx("nav-item", "sign")}>SIGN IN</span>
      <span className={cx("nav-item")}>or</span>
      <span className={cx("nav-item", "sign")}>SIGN UP</span>
    </div>
  </header>
);

export default Header;
