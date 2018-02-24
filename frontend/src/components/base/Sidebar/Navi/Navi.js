import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Navi.scss';

const cx = classNames.bind(styles);

const menu = [
  { name: 'HOME', url: '/', child: null },
  { name: '프로필', url: '/profile', child: null },
  {
    name: '끄적끄적',
    url: '/category/all',
    child: [
      { name: 'node', url: '/category/node' },
      { name: 'javascript', url: '/category/javascript' },
    ],
  },
];

const Navi = ({ url }) => {
  return (
    <ul className={cx('ul')}>
      {menu.map((item) => {
        return (
          !item.child ?
          (
            <li className={cx('li', { active: url === item.url })}>
              <Link to={item.url} key={item.name}>
                {item.name}
              </Link>
            </li>
          ) :
          (
            <li className={cx('li', { active: url === item.url })}>
              <Link to={item.url} key={item.name}>
                {item.name}
              </Link>
              <ul className={cx('child-ul')}>
                {item.child.map((child) => {
                  return (
                    <li className={cx('li')}>
                      <Link to={child.url} key={child.name}>
                        {child.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          )
        );
      })}
    </ul>
  );
};

export default Navi;
