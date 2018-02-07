const { JWT_SECRET: secret } = process.env;
const jwt = require('jsonwebtoken');

exports.generateToken = (payload, subject) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secret, {
      issuer: 'beginnerblog.com',
      expiresIn: '3d',
      subject,
    }, (err, token) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(token);
    });
  });
};

exports.decodeToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(decoded);
    });
  });
};
