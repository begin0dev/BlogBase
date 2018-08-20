import React from 'react';
import classNames from 'classnames/bind';
import { FaGithub as Github, FaFacebook as Facebook, FaGooglePlusSquare as Google } from 'react-icons/fa';

import { TextInput } from 'components';
import { Kakao } from 'assets/svgs';
import styles from './Account.scss';

const cx = classNames.bind(styles);

const Account = ({ changeAccountFormValue }) => {
  return (
    <div className={cx('account')}>
      <div className={cx('log-in')}>
        <div className={cx('row', 'title')}>
          <span>Login</span>
          <span className={cx('disabled')}>Signup</span>
        </div>
        <div className={cx('row', 'input-wrap')}>
          <div className={cx('input-row')}>
            <TextInput type="text" name="email" label="Email" placeholder="Enter your Email" color="#00b0ff" setValue={changeAccountFormValue} />
          </div>
          <div className={cx('input-row')}>
            <TextInput type="password" name="password" label="Password" placeholder="Enter your Password" color="#00b0ff" setValue={changeAccountFormValue} />
          </div>
        </div>
        <div className={cx('row', 'social-wrap')}>
          <span>or login with any Social media</span>
          <div className={cx('social-btns')}>
            <div className={cx('btns', 'social-btn', 'github-icon')}><Github /></div>
            <div className={cx('btns', 'social-btn', 'kakao-icon')}><Kakao /></div>
            <div className={cx('btns', 'social-btn', 'facebook-icon')}><Facebook /></div>
            <div className={cx('btns', 'social-btn', 'google-icon')}><Google /></div>
          </div>
        </div>
        <div className={cx('row', 'submit-row')}>
          <button type="button" className={cx('btns', 'submit-btn')}>Login</button>
        </div>
        <div className={cx('row', 'forgot-row')}>
          <span className={cx('btns')}>Forgot your Password?</span>
        </div>
      </div>
    </div>
  );
};

export default Account;
