import React from 'react';
import classNames from 'classnames/bind';

import {PageTemplate} from 'components';
import styles from './MainPage.scss';

const cx = classNames.bind(styles);

const MainPage = () => {
  return (
      <PageTemplate>
        <main className={cx('main')}>
          main
        </main>
      </PageTemplate>
  );
};

export default MainPage;