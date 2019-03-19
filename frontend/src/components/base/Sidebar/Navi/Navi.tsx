import * as React from 'react';
import * as classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import styles from './Navi.module.scss';

const cx = classNames.bind(styles);

interface IBaseMenu {
  name: string;
  url: string;
}
interface IMenu extends IBaseMenu {
  children?: IBaseMenu[];
}

interface IProps {
  expanded: boolean;
  expandedNavi(expanded: boolean): () => void;
}

const Navi: React.FunctionComponent<IProps> = ({ expanded, expandedNavi }) => {
  const naviList: ReadonlyArray<IMenu> = [
    { name: 'HOME', url: '/' },
    { name: 'PROFILE', url: '/profile' },
    {
      name: 'DEVELOPMENT',
      url: '',
      children: [
        { name: 'All', url: '/category/all' },
        { name: 'Node', url: '/category/node' },
        { name: 'Javascript', url: '/category/javascript' },
      ],
    },
  ];
  return (
    <ul className={cx('ul')}>
      {naviList.map((navi: IMenu) => {
        return navi.children ? (
          <li className={cx('li')} key={navi.name}>
            <div className={cx('li-wrap', 'expand-li', { expanded })} onClick={expandedNavi(!expanded)}>
              {navi.name}
              {expanded ? (
                <MdKeyboardArrowUp className={cx('expand-icon')} />
              ) : (
                <MdKeyboardArrowDown className={cx('expand-icon')} />
              )}
            </div>
            <ul className={cx('children-ul')}>
              {navi.children.map(children => {
                return (
                  <li className={cx('li')} key={children.name}>
                    <NavLink className={cx('li-wrap', 'children-li')} activeClassName={cx('active')} to={children.url}>
                      {children.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </li>
        ) : (
          <li className={cx('li')} key={navi.name}>
            <NavLink exact className={cx('li-wrap')} activeClassName={cx('active')} to={navi.url}>
              {navi.name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Navi;
