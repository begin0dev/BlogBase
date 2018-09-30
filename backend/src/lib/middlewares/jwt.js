const { decodeToken, generateToken } = require('../token');

module.exports = async (req, res, next) => {
  const accessToken = req.get['x-access-token'] || req.cookies.access_token;

  if (!accessToken) {
    req.user = null;
    return next();
  }
  try {
    const decoded = await decodeToken(accessToken);
    req.user = decoded.user;
    return next();
  } catch (err) {
    req.user = null;
    res.set('x-access-token', '');
    return next();
  }
};

module.exports = async (req, res, next) => {
  const refreshToken = req.cookies.refresh_token;

  if (req.user) return next();
  if (!refreshToken) {
    req.user = null;
    return next();
  }
  try {
    const decoded = await decodeToken(refreshToken);
    const { user } = decoded;
    // generate tokens and setup token
    const accessToken = await generateToken({ user }, '1h');
    res.set('x-access-token', accessToken);
    // extended your refresh token so they do not expire while using your site
    const compareExp = Math.floor(Date.now() / 1000) + (60 * 5);
    if (decoded.exp <= compareExp) {
      const newRefreshToken = await generateToken({ user }, '3h');
      res.cookie('refresh_token', newRefreshToken);
    }
    req.user = user;
    return next();
  } catch (err) {
    req.user = null;
    res.clearCookie('refresh_token');
    return next();
  }
};
