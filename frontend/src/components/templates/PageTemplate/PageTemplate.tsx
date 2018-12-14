import * as React from "react";
import classNames from "classnames";

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
    <React.Fragment>
      <HeaderContainer />
      <SidebarContainer />
      <AccountContainer />
      <div className={cx("contents-wrap")}>{children}</div>
    </React.Fragment>
  );
};

export default PageTemplate;
