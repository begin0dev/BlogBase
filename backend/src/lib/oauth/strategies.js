const oAuth = require('lib/oauth');
const Strategy = require('lib/oauth/Strategy');
const User = require('datebase/models/user');

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

oAuth.use(
  new Strategy({
    name: 'facebook',
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_SECRET,
    callbackURL: '/api/v1.0/auth/social/facebook',
  },
  (accessToken, profile) => {
    console.log(accessToken, profile);
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
