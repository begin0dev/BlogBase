const moment = require('moment');

const User = require('db/models/user');
const { decodeAccessToken, generateAccessToken } = require('../token');

exports.checkedAccessToken = async (req, res, next) => {
  const accessToken = req.get('x-access-token');

  if (!accessToken) {
    req.user = null;
    return next();
  }
  try {
    const decoded = await decodeAccessToken(accessToken);
    req.user = decoded.user;
    next();
  } catch (err) {
    req.user = null;
    res.set('x-access-token', null);
    next();
  }
};

exports.checkedRefreshToken = async (req, res, next) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    req.user = null;
    return next();
  }
  try {
    const user = await User.findByLocalRefreshToken(refreshToken);
    if (!user) {
      req.user = null;
      res.clearCookie('refresh_token');
      return next();
    }

    const { expiredAt } = user.oAuth.local;
    if (moment() > moment(expiredAt)) {
      req.user = null;
      res.clearCookie('refresh_token');
      await user.update({ $set: { oAuth: { local: { refreshToken: null, expiredAt: null } } } });
      return next();
    }

    req.user = user.toJSON();
    const accessToken = await generateAccessToken({ user: req.user });
    res.set('x-access-token', accessToken);

    // extended your refresh token so they do not expire while using your site
    if (moment().diff(expiredAt, 'seconds') <= 300) {
      user.update({ $set: { oAuth: { local: { expiredAt: moment().add(1, 'hour') } } } }).exec();
    }
    next();
  } catch (err) {
    console.error(err);
    req.user = null;
    res.clearCookie('refresh_token');
    return next();
  }
};
