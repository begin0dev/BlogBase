import React from 'react'
import classNames from 'classnames/bind'

import { Hamburger } from 'components'
import styles from './Header.scss'

const cx = classNames.bind(styles)

const Header = ({ sidebar, sidebarOnToggle }) => {
  return (
    <header className={cx('header')}>
      <Hamburger
        sidebar={sidebar}
        sidebarOnToggle={sidebarOnToggle}
      />
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
