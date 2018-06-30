const { JWT_SECRET: secret } = process.env;
const jwt = require('jsonwebtoken');

exports.generateToken = (payload, subject) => {
  return new Promise(async (resolve, reject) => {
    try {
      const token = await jwt.sign(payload, secret, { issuer: 'Beginner', expiresIn: '1d', subject });
      resolve(token);
    } catch (err) {
      reject(err);
    }
  });
};

exports.decodeToken = (token) => {
  return new Promise(async (resolve, reject) => {
    try {
      const decoded = await jwt.verify(token, secret);
      resolve(decoded);
    } catch (err) {
      reject(err);
    }
  });
};
