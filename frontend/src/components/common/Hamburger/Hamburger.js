import React from 'react'
import classNames from 'classnames/bind'

import styles from './Hamburger.scss'
const cx = classNames.bind(styles)

const Hamburger = ({ sidebar, sidebarOnToggle }) => {
  return (
    <div className={cx('wrapper')} onClick={sidebarOnToggle}>
      <div className={classNames('hamburger hamburger--spin', {'is-active': sidebar}, cx('spin'))}>
        <span className='hamburger-box'>
          <span className='hamburger-inner' />
        </span>
      </div>
    </div>
  )
}

export default Hamburger
