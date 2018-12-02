const moment = require('moment');

const oAuth = require('lib/oauth');
const Strategy = require('lib/oauth/Strategy');
const User = require('datebase/models/user');
const { generateAccessToken, generateRefreshToken } = require('lib/token');

const {
  GITHUB_APP_ID,
  GITHUB_SECRET,
  GOOGLE_APP_ID,
  GOOGLE_SECRET,
  FACEBOOK_APP_ID,
  FACEBOOK_SECRET,
  KAKAO_APP_ID,
  KAKAO_SECRET,
} = process.env;

const socialLogin = async (provider, id, accessToken, email, displayName, done) => {
  try {
    let user = await User.findBySocialId(provider, id);
    if (!user) {
      user = await User.socialRegister({ provider, id, accessToken, email, displayName });
    }
    const userJson = user.toJSON();
    // access token and refresh token set cookie
    const localAccessToken = await generateAccessToken({ user: userJson });
    const refreshToken = await generateRefreshToken();
    await user.updateOne({
      $set: {
        'oAuth.local.refreshToken': refreshToken,
        'oAuth.local.expiredAt': moment().add(1, 'hour'),
      },
    });
    done(null, {
      accessToken: localAccessToken,
      refreshToken,
    });
  } catch (err) {
    done(err);
  }
};

oAuth.use(
  new Strategy({
    name: 'facebook',
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_SECRET,
    callbackURL: '/api/v1.0/auth/social/facebook',
  },
  (accessToken, profile, done) => {
    const { id, name, email } = profile;
    return socialLogin('facebook', id, accessToken, email, name, done);
  }),
);

oAuth.use(
  new Strategy({
    name: 'kakao',
    clientID: KAKAO_APP_ID,
    clientSecret: KAKAO_SECRET,
    callbackURL: '/api/v1.0/auth/social/kakao',
    grantType: 'authorization_code',
  },
  (accessToken, profile) => {

  }),
);

// oAuth.use(
//   new Strategy({
//     name: 'github',
//     clientID: GITHUB_APP_ID,
//     clientSecret: GITHUB_SECRET,
//     callbackURL: '/api/v1.0/auth/social/github',
//     grantType: 'authorization_code',
//   },
//   (accessToken, profile) => {
//
//   }),
// );

// oAuth.use(
//   new Strategy({
//     name: 'google',
//     clientID: GOOGLE_APP_ID,
//     clientSecret: GOOGLE_SECRET,
//     callbackURL: '/api/v1.0/auth/social/google',
//     grantType: 'authorization_code',
//   },
//   (accessToken, profile) => {
//
//   }),
// );
