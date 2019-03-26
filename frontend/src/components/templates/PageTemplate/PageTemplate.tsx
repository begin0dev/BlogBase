import * as React from 'react';
import * as classNames from 'classnames/bind';

import { HeaderContainer } from 'containers';
import styles from './PageTemplate.scss';

const cx = classNames.bind(styles);

interface IProps {
  children: React.ReactNode;
}

const PageTemplate: React.FunctionComponent<IProps> = ({ children }) => (
  <React.Fragment>
    <HeaderContainer />
    <main className={cx('contents-wrap')}>{children}</main>
  </React.Fragment>
);

export default PageTemplate;
