const { decodeToken, generateToken } = require('../token');

module.exports = async (req, res, next) => {
  const token = req.headers['x-access-token'] || req.cookies.access_token;

  if (!token) {
    req.user = null;
    return next();
  }
  try {
    const decoded = await decodeToken(token);
    const { user } = decoded;
    req.user = user;
    return next();
  } catch (err) {
    req.user = null;
    return next();
  }
};

module.exports = async (req, res, next) => {
  const token = req.cookies.refresh_token;

  if (req.user) return next();
  if (!token) {
    req.user = null;
    return next();
  }
  try {
    const decoded = await decodeToken(token);
    const { user } = decoded;
    // generate access token
    const accessToken = await generateToken({ user }, '3h');
    res.cookie('access_token', accessToken);
    req.user = user;
    return next();
  } catch (err) {
    req.user = null;
    return next();
  }
};
