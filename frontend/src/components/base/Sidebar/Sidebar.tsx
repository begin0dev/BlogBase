import * as React from "react";
import { Link } from "react-router-dom";
import * as classNames from "classnames/bind";

import { SearchInput } from "components";
import Navi from "./Navi/Navi";
import styles from "./Sidebar.scss";

import { ISidebarState } from "store/modules/sidebar";

const cx = classNames.bind(styles);

interface IProps {
  sidebarState: ISidebarState;
  setSearchValue(e: any): void;
  expandedNavi(expand: boolean): () => void;
}

const Sidebar: React.SFC<IProps> = ({
  sidebarState,
  setSearchValue,
  expandedNavi
}) => {
  return (
    <aside className={cx("sidebar", { open: sidebarState.visible })}>
      <div className={cx("title-wrap")}>
        <Link to="/">BEGINNER</Link>
      </div>
      <div className={cx("nav-wrapper")}>
        <div className={cx("nav-search")}>
          <SearchInput
            value={sidebarState.searchValue}
            loading={sidebarState.searchLoading}
            setValue={setSearchValue}
            placeholder="Search..."
          />
        </div>
        <div className={cx("spacer")} />
        <Navi expanded={sidebarState.expanded} expandedNavi={expandedNavi} />
      </div>
    </aside>
  );
};

export default Sidebar;
