import React from 'react';
import classNames from 'classnames/bind';
import SearchIcon from 'react-icons/lib/md/search';
import Spinner from '../Spinner';
import styles from './SearchInput.scss';

const cx = classNames.bind(styles);

const SearchInput = ({ loading, placeholder, value, setValue }) => {
  return (
    <div className={cx('wrapper')}>
      <input
        type="text"
        className={cx('input', 'icon')}
        value={value}
        placeholder={placeholder}
        onChange={setValue}
      />
      {
        loading ?
          <div className={cx('loading-wrap')}>
            <Spinner size=".8rem" />
          </div>
          :
          <i aria-hidden="true" className={cx('icon')}><SearchIcon /></i>
      }
    </div>
  );
};

export default SearchInput;
