import React from 'react';
import classNames from 'classnames/bind';

import styles from './Title.scss';
const cx = classNames.bind(styles);

const Title = props => {
  return (
    <div className={cx('title')}>
      Beginner
    </div>
  );
};

export default Title;