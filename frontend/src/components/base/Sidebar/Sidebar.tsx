import * as React from "react";
import classNames from "classnames";

import {SearchInput} from "components";
import Navi from "./Navi/Navi";
import styles from "./Sidebar.scss";

import {ISidebarState} from "store/modules/sidebar";

const cx = classNames.bind(styles);

interface IProps {
  sidebarState: ISidebarState;
  expandedNavi(expand: boolean): () => void;
  setSearchValue(e: React.ChangeEvent<HTMLInputElement>): void;
}

const Sidebar: React.SFC<IProps> = ({
  sidebarState,
  setSearchValue,
  expandedNavi
}) => {
  return (
    <aside className={cx("sidebar", { open: sidebarState.visible })}>
      <div className={cx("nav-search")}>
        <SearchInput
          value={sidebarState.searchValue}
          loading={sidebarState.searchLoading}
          setValue={setSearchValue}
          placeholder="Search..."
        />
      </div>
      <Navi expanded={sidebarState.expanded} expandedNavi={expandedNavi} />
    </aside>
  );
};

export default Sidebar;
