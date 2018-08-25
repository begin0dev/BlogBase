
exports.Oauth = (provider, options) => {
  ['domain', 'clientID', 'clientSecret', 'callbackURL'].forEach((k) => {
    if (!options[k]) throw new Error(`You must provide the ${k} configuration value`);
  });
};
