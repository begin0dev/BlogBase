const crypto = require('crypto');
const sha512 = require('sha512');

exports.generatePassword = (password) => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if(err) return reject(err);
      crypto.pbkdf2(password, buf.toString('base64'), 100000, 64, 'sha512', (err, key) => {
        if(err) return reject(err);
        else return resolve({password: key.toString('base64'), salt: buf.toString('base64')});
      });
    });
  });
};

exports.comparePassword = (getPassword, password, salt) => {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(getPassword, salt, 100000, 64, 'sha512', (err, key) => {
      if(err) return reject(err);
      if(key.toString('base64') === password) {
        return resolve({result: true});
      } else {
        return resolve({result: false});
      }
    });
  });
};
