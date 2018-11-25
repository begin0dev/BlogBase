const oAuth = require('lib/oauth');
const Strategy = require('lib/oauth/Strategy');

const { GITHUB_APP_ID,
  GITHUB_SECRET,
  GOOGLE_APP_ID,
  GOOGLE_SECRET,
  FACEBOOK_APP_ID,
  FACEBOOK_SECRET,
  KAKAO_APP_ID,
  KAKAO_SECRET,
} = process.env;

oAuth.use(new Strategy({
  name: 'facebook',
  clientID: FACEBOOK_APP_ID,
  clientSecret: FACEBOOK_SECRET,
  callbackURL: '/api/v1.0/auth/social/facebook',
  authorizationURL: 'https://www.facebook.com/dialog/oauth',
  tokenURL: 'https://graph.facebook.com/v3.2/oauth/access_token',
  profileURL: 'https://graph.facebook.com/v2.5/me',
},
[],
(accessToken, profile) => {

}));
