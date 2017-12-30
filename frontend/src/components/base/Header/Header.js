import React from 'react'
import classNames from 'classnames/bind'

import styles from './Header.scss'

const cx = classNames.bind(styles)

const Header = ({ sidebar, sidebarChangeState }) => {
  return (
    <header className={cx('header')}>
      <div className={cx('title-wrap')}>
        Beginner
      </div>
      <div className={cx('nav')}>
        login / sign up
      </div>
    </header>
  )
}

export default Header
