const { decodeToken } = require('../token')

module.exports = async (req, res, next) => {
  const token = req.headers['x-access-token'] || req.cookies.access_token
  if(!token) {
    // if there is no token, skip!
    console.log('token is not exists!')
    req.user = null
    return next()
  }

  try {
    const decoded = await decodeToken(token)
    const { user } = decoded
    // re-issue token when its age is over 3 days
    if(Date.now() / 1000 - decoded.iat > 60 * 60 * 24 * 3) {
      // if there is no token, skip!
      console.log('token is expired!')
      req.user = null
    }else{
      console.log('token is abled!')
      req.user = user
    }
  } catch (e) {
    req.user = null
  }
  return next()
}