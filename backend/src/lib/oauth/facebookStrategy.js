class facebookStrategy {
  constructor(initOptions, initVerify) {
    this.name = 'facebook';
    let options = initOptions;
    let verify = initVerify;

    if (typeof initOptions === 'function') {
      verify = initOptions;
      options = {};
    }
    if (!verify) throw new Error('Strategy requires a verify callback!');
    ['domain', 'clientID', 'clientSecret', 'callbackURL'].forEach((k) => {
      if (!options[k]) throw new Error(`You must provide options the ${k} configuration value`);
    });
  }
}

export default facebookStrategy;
