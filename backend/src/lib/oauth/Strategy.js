const _ = require('lodash');
const url = require('url');
const axios = require('axios');

/**
 * options
 * {
 *   name: '',
 *   clientID: '',
 *   clientSecret: '',
 *   authorizationURL: '',
 *   tokenURL: '',
 *   profileURL: '',
 *   callbackURL: '',
 * }
 */

class Strategy {
  constructor(options, scope, verify) {
    const essentialElements = ['name', 'clientID', 'clientSecret', 'authorizationURL', 'tokenURL', 'profileURL', 'callbackURL'];

    if (typeof scope === 'function') {
      /* eslint-disable */
      verify = scope;
      scope = [];
      /* eslint-enable */
    }
    if (!verify) throw new Error('Strategy requires a verify callback!');
    if (!Array.isArray(scope)) throw new Error('Scope type must be array!');
    essentialElements.forEach((key) => {
      if (!options[key]) throw new Error(`You must provide options the ${key} configuration value`);
      this[key] = options[key];
    });

    this.scope = _.chain(['email', 'public_profile'])
      .concat(scope)
      .uniq()
      .join(',')
      .value();
    this.verify = verify;
  }

  authorizationRedirectURL(redirectURI) {
    const { clientID, authorizationURL } = this;
    const query = {
      client_id: clientID,
      redirect_uri: redirectURI,
      response_type: 'code',
    };
    const parsed = url.parse(authorizationURL);
    parsed.query = query;
    return url.format(parsed);
  }

  getOauthAccessToken(code, redirectURI) {
    return new Promise(async (resolve, reject) => {
      try {
        const { clientID, clientSecret, tokenURL } = this;
        const params = {
          client_id: clientID,
          client_secret: clientSecret,
          redirect_uri: redirectURI,
          code,
        };
        const payload = await axios.get(tokenURL, { params });
        const accessToken = payload.data.access_token;
        resolve(accessToken);
      } catch (err) {
        reject(err);
      }
    });
  }

  getUserProfile(accessToken) {
    return new Promise(async (resolve, reject) => {
      try {
        const { profileURL, scope } = this;
        const params = {
          access_token: accessToken,
          scope,
        };
        const payload = await axios.get(profileURL, { params });
        resolve(payload.data);
      } catch (err) {
        reject(err);
      }
    });
  }
}


module.exports = Strategy;
