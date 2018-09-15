import * as React from "react";
import * as classNames from "classnames/bind";

import {
  AccountContainer,
  HeaderContainer,
  SidebarContainer
} from "containers";
import styles from "./PageTemplate.scss";

const cx = classNames.bind(styles);

interface IProps {
  children: React.ReactNode;
}

const PageTemplate: React.SFC<IProps> = ({ children }) => {
  return (
    <div className={cx("app-wrap")}>
      <HeaderContainer />
      <SidebarContainer />
      <AccountContainer />
      <div className={cx("contents-wrap")}>{children}</div>
    </div>
  );
};

export default PageTemplate;