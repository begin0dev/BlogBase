import React from 'react'
import classNames from 'classnames/bind'
import Search from 'react-icons/lib/md/search'

import styles from './SearchInput.scss'
const cx = classNames.bind(styles)

const SearchInput = ({ loading, placeholder, value }) => {
  return (
    <div className={cx('wrapper')}>
      <input type='text' className={cx('input', 'icon')} value={value} placeholder={placeholder}/>
      {
        loading
          ? <i aria-hidden="true" className={cx('icon', 'loading')} />
          : <i aria-hidden="true" className={cx('icon')}><Search /></i>
      }
    </div>
  )
}

export default SearchInput
