import * as React from 'react';
import * as classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { MdArrowDropDown } from 'react-icons/md';

import styles from './Navi.module.scss';

const cx = classNames.bind(styles);

interface INaviChild {
  name: string;
  url: string;
}
interface INavi {
  name: string;
  hasChildren: boolean;
  url: string;
  children?: INaviChild[];
}

const navi: INavi[] = [
  {
    name: 'Development',
    hasChildren: true,
    url: '',
    children: [
      { name: 'All', url: '/develop/all' },
      { name: 'Node', url: '/develop/node' },
      { name: 'Javascript', url: '/develop/javascript' },
    ],
  },
  { name: 'Profile', url: '/profile', hasChildren: false },
  { name: 'Test', url: '/test', hasChildren: false },
];

interface IProps {
  isMobile: boolean;
  visible: boolean;
}

const Navi: React.FunctionComponent<IProps> = ({ isMobile, visible }) => (
  <nav className={cx('navi', { isMobile }, { active: visible })}>
    <div className={cx('list')}>
      {navi.map((link: INavi) => {
        return link.hasChildren ? (
          <div className={cx('wrapper')} key={link.name}>
            <div className={cx('type')}>
              {link.name}
              {!isMobile && <MdArrowDropDown className={cx('expandIcon')} />}
            </div>
            <div className={cx('dropdown')}>
              {link.children &&
                link.children.map((child: { name: string; url: string }) => (
                  <NavLink className={cx('type')} to={child.url} key={child.name}>
                    {child.name}
                  </NavLink>
                ))}
            </div>
          </div>
        ) : (
          <NavLink className={cx('type')} to={link.url} key={link.name}>
            {link.name}
          </NavLink>
        );
      })}
    </div>
  </nav>
);

export default Navi;
