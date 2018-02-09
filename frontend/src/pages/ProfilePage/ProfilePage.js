import React from 'react';
import classNames from 'classnames/bind';

import { PageTemplate } from 'components';
import styles from './ProfilePage.scss';

const cx = classNames.bind(styles);

const ProfilePage = () => {
  return (
    <PageTemplate>
      <main className={cx('main')}>
        profile
      </main>
    </PageTemplate>
  );
};

export default ProfilePage;
