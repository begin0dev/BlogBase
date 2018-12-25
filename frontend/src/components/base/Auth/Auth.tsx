import * as React from 'react';
import * as classNames from 'classnames/bind';
import {
  FaArrowRight,
  FaFacebook as Facebook,
  FaGithub as Github,
  FaGooglePlusSquare as Google,
} from 'react-icons/fa';

import { IAuthState } from 'store/reducers/auth';
import { TextInput } from 'components';
import { Kakao } from 'assets/svgs';

import styles from './Auth.module.scss';

const cx = classNames.bind(styles);

interface IProps {
  authState: IAuthState;
  changeAuthFormValue(e: React.ChangeEvent<HTMLInputElement>): void;
}

const Auth: React.FunctionComponent<IProps> = ({
  authState,
  changeAuthFormValue,
}) => (
  <div className={cx('auth')}>
    <div className={cx('sign-in')}>
      <div className={cx('row', 'circle-row')}>
        <div className={cx('circle')} />
      </div>
      <div className={cx('row', 'title-row')}>SIGN IN</div>
      <div className={cx('row', 'desc-row')}>
        <span>Hi there! Sign in and start Beginner blog</span>
      </div>
      <div className={cx('row', 'input-wrap')}>
        <div className={cx('input-row')}>
          <TextInput
            type="text"
            name="email"
            label="Email"
            value={authState.form.email}
            placeholder="Enter your Email"
            color="#00b0ff"
            setValue={changeAuthFormValue}
          />
        </div>
        <div className={cx('input-row')}>
          <TextInput
            type="password"
            name="password"
            label="Password"
            value={authState.form.password}
            placeholder="Enter your Password"
            color="#00b0ff"
            setValue={changeAuthFormValue}
          />
        </div>
      </div>
      <div className={cx('row', 'submit-row')}>
        <button type="button" className={cx('submit-btn')}>
          SIGN IN NOW
          <FaArrowRight />
        </button>
      </div>
      <div className={cx('row', 'social-row')}>
        <div className={cx('btn', 'social-btn', 'github-icon')}>
          <Github />
        </div>
        <div className={cx('btn', 'social-btn', 'kakao-icon')}>
          <Kakao />
        </div>
        <div className={cx('btn', 'social-btn', 'facebook-icon')}>
          <Facebook />
        </div>
        <div className={cx('btn', 'social-btn', 'google-icon')}>
          <Google />
        </div>
      </div>
    </div>
  </div>
);

export default Auth;
