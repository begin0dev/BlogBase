import React from 'react';
import classNames from 'classnames/bind';

import { PageTemplate } from 'components';
import styles from './CategoryPage.scss';

const cx = classNames.bind(styles);

const CategoryPage = () => {
  return (
    <PageTemplate>
      <main className={cx('main')}>
        category
      </main>
    </PageTemplate>
  );
};

export default CategoryPage;
