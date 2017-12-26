import React from 'react';
import classNames from 'classnames/bind';

import { PageTemplate } from 'components';
import styles from './TestPage.scss';

const cx = classNames.bind(styles);

const TestPage = () => {
  return (
      <PageTemplate>
        <main className={cx('main')}>
          test
        </main>
      </PageTemplate>
  );
};

export default TestPage;