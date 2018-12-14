import * as React from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import styles from "./Navi.scss";

const cx = classNames.bind(styles);

interface IChildrenObject {
  name: string;
  url: string;
}
interface IMenuObject {
  name: string;
  url: string;
  hasChildren: boolean;
  children: IChildrenObject[];
}

const menu: IMenuObject[] = [
  { name: "HOME", url: "/", hasChildren: false, children: [] },
  { name: "PROFILE", url: "/profile", hasChildren: false, children: [] },
  {
    name: "DEVELOPMENT",
    url: "",
    hasChildren: true,
    children: [
      { name: "All", url: "/category/all" },
      { name: "Node", url: "/category/node" },
      { name: "Javascript", url: "/category/javascript" }
    ]
  }
];

interface IProps {
  expanded: boolean;
  expandedNavi(expanded: boolean): () => void;
}

const Navi: React.SFC<IProps> = ({ expanded, expandedNavi }) => (
  <ul className={cx("ul")}>
    {menu.map((item: IMenuObject) => {
      return item.hasChildren ? (
        <li className={cx("li")} key={item.name}>
          <div className={cx("spacer")} />
          <div
            className={cx("li-wrap", "expand-li", { expanded })}
            onClick={expandedNavi(!expanded)}
          >
            {item.name}
            {expanded ? (
              <MdKeyboardArrowUp className={cx("expand-icon")} />
            ) : (
              <MdKeyboardArrowDown className={cx("expand-icon")} />
            )}
          </div>
          <ul className={cx("children-ul")}>
            {item.children.map(children => {
              return (
                <li className={cx("li")} key={children.name}>
                  <NavLink
                    className={cx("li-wrap", "children-li")}
                    activeClassName={cx("active")}
                    to={children.url}
                  >
                    {children.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </li>
      ) : (
        <li className={cx("li")} key={item.name}>
          <NavLink
            exact
            className={cx("li-wrap")}
            activeClassName={cx("active")}
            to={item.url}
          >
            {item.name}
          </NavLink>
        </li>
      );
    })}
  </ul>
);

export default Navi;
