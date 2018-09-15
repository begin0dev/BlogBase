const jwt = require('jsonwebtoken');

const { JWT_SECRET: secret } = process.env;

exports.generateToken = (payload, expiresIn) => {
  return new Promise(async (resolve, reject) => {
    try {
      const token = await jwt.sign(
        payload,
        secret,
        { issuer: 'Beginner', expiresIn },
      );
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
      console.log(decoded);
      resolve(decoded);
    } catch (err) {
      reject(err);
    }
  });
};
