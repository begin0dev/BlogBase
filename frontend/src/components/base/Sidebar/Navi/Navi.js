import React from 'react';
import classNames from 'classnames/bind';
import ArrowDown from 'react-icons/lib/md/arrow-drop-down';
import { NavLink } from 'react-router-dom';

import styles from './Navi.scss';

const cx = classNames.bind(styles);

const menu = [
  { name: 'HOME', url: '/', children: null },
  { name: 'PROFILE', url: '/profile', children: null },
  {
    name: 'DEV',
    url: null,
    children: [
      { name: 'All', url: '/category/all' },
      { name: 'Node', url: '/category/node' },
      { name: 'Javascript', url: '/category/javascript' },
    ],
  },
];

const Navi = ({ expanded, expandedNavi }) => {
  return (
    <ul className={cx('ul')}>
      {menu.map((item) => {
        return (
          !item.children ?
            <li className={cx('li')} key={item.name}>
              <NavLink exact className={cx('li-wrap')} activeClassName={cx('active')} to={item.url}>
                {item.name}
              </NavLink>
            </li>
            :
            <li className={cx('li')} key={item.name}>
              <div className={cx('li-wrap', { expanded })} onClick={expandedNavi(!expanded)}>
                {item.name}
                <ArrowDown className={cx('expand-icon')} />
              </div>
              <ul className={cx('children-ul')}>
                {item.children.map((children) => {
                  return (
                    <li className={cx('li')} key={children.name}>
                      <NavLink className={cx('li-wrap')} activeClassName={cx('active')} to={children.url}>
                        {`- ${children.name}`}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </li>
        );
      })}
    </ul>
  );
};

export default Navi;
