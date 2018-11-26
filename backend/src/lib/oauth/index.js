const url = require('url');

class Oauth {
  constructor() {
    this.strategires = {};
  }

  use(name, strategy) {
    if (!strategy) {
      /* eslint-disable */
      strategy = name;
      name = strategy.name;
      /* eslint-enable */
    }
    if (!name) throw new Error('Authentication strategies must have a name');
    this.strategires[name] = strategy;
    return this;
  }

  authenticate(name, options) {
    return async (req, res, next) => {
      const strategy = this.strategires[name];
      const { callbackURL } = strategy;
      const { error, code } = req.query;
      const originalURL = url.format({
        protocol: req.protocol,
        host: req.get('host'),
      });
      const redirectURI = url.resolve(originalURL, callbackURL);

      if (error) {
        throw new Error(error);
      }
      if (code) {
        try {
          const accessToken = await strategy.getOauthAccessToken(code, redirectURI);
          const profile = await strategy.getUserProfile(accessToken);
          res.json({ accessToken, profile });
        } catch (err) {
          return next(err);
        }
      } else {
        const authorizationRedirectURL = strategy.authorizationRedirectURL(redirectURI);
        res.redirect(authorizationRedirectURL);
      }
    };
  }
}

module.exports = new Oauth();
