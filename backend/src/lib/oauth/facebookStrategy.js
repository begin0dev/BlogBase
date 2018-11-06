class facebookStrategy {
  constructor(options, verify) {
    this.name = 'facebook';

    if (typeof options === 'function') {
      /* eslint-disable */
      verify = options;
      options = {};
      /* eslint-enable */
    }
    if (!verify) throw new Error('Strategy requires a verify callback!');

    ['domain', 'clientID', 'clientSecret', 'callbackURL'].forEach((key) => {
      if (!options[key]) throw new Error(`You must provide options the ${key} configuration value`);
    });
  }
}

export default facebookStrategy;
