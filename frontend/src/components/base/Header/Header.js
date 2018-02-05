import React from 'react'
import classNames from 'classnames/bind'

import styles from './Header.scss'

const cx = classNames.bind(styles)

const Header = () => {
  return (
    <header className={cx('header')}>
      <div className={cx('title-wrap')}>
        BEGINNER
      </div>
      <div className={cx('spacer')}></div>
      <div className={cx('nav-wrap')}>
        <div className={cx('nav-item')}>
          로그인
        </div>
        <div className={cx('nav-item')}>
          /
        </div>
        <div className={cx('nav-item')}>
          회원가입
        </div>
      </div>
    </header>
  )
}

export default Header
