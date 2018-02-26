import React, { Component } from 'react';
import classNames from 'classnames/bind';
import ArrowDown from 'react-icons/lib/md/arrow-drop-down';
import { Link } from 'react-router-dom';

import styles from './Navi.scss';

const cx = classNames.bind(styles);
const menu = [
  { name: 'HOME', url: '/', child: null },
  { name: '프로필', url: '/profile', child: null },
  {
    name: '끄적끄적',
    url: null,
    child: [
      { name: 'All', url: '/category/all' },
      { name: 'Node', url: '/category/node' },
      { name: 'Javascript', url: '/category/javascript' },
    ],
  },
];

class Navi extends Component {
  render() {
    const { url } = this.props.match;
    return (
      <ul className={cx('ul')}>
        {menu.map((item) => {
          return (
            !item.child ?
              (
                <li className={cx('li', { active: url === item.url })} key={item.name}>
                  <Link className={cx('li-wrap')} to={item.url}>
                    {item.name}
                  </Link>
                </li>
              ) :
              (
                <li className={cx('li')} key={item.name}>
                  <div className={cx('li-wrap')}>
                    {item.name}
                  </div>
                  <ArrowDown className={cx('drop')} />
                  <ul className={cx('child-ul')}>
                    {item.child.map((child) => {
                      return (
                        <li className={cx('li', { 'child-active': url === child.url })} key={child.name}>
                          <Link className={cx('li-wrap')} to={child.url}>
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
  }
}

export default Navi;
