const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

exports.generateToken = (payload, expiresIn) => {
  return new Promise(async (resolve, reject) => {
    try {
      const token = await jwt.sign(
        payload,
        JWT_SECRET,
        { issuer: 'beginner', expiresIn },
      );
      resolve(token);
    } catch (err) {
      console.error(err);
      reject(err);
    }
  });
};

exports.decodeToken = (token) => {
  return new Promise(async (resolve, reject) => {
    try {
      const decoded = await jwt.verify(token, JWT_SECRET);
      resolve(decoded);
    } catch (err) {
      console.error(err);
      reject(err.name);
    }
  });
};
