import React from 'react'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './Sidebar.scss'
import { SearchInput } from 'components'

const cx = classNames.bind(styles)

const Sidebar = ({ sidebar }) => {
  return (
    <aside className={cx('sidebar', {open: sidebar})}>
      <div className={cx('nav-search')}>
        <SearchInput
          loading={false}
          placeholder={'Search...'}
        />
      </div>
      <div className={cx('nav-wrap')}>
        <Link to="/">Home</Link>
        <Link to="/test">Test</Link>
      </div>
    </aside>
  )
}

export default Sidebar
