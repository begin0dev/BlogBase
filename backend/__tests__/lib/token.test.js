require('../testHelper');

const jwt = require('jsonwebtoken');
const { generateAccessToken, decodeAccessToken } = require('lib/token');

const { JWT_SECRET } = process.env;
const payload = {
  _id: 'asd12ed3s123',
  displayName: 'displayName',
};
const expiresIn = '1h';

describe('generateToken', () => {
  test('success', async () => {
    await expect(generateAccessToken(payload, expiresIn)).resolves;
    await expect(generateAccessToken(payload)).resolves;
  });
});

describe('decodeToken', () => {
  test('success', async () => {
    const token = await generateAccessToken(payload, expiresIn);

    const decode = await decodeAccessToken(token);
    ['_id', 'displayName', 'iat', 'exp', 'iss'].forEach((key) => {
      expect(decode).toHaveProperty(key);
    });
  });
  test('failed', async () => {
    const expiredToken = await jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) - 60,
        data: payload,
      },
      JWT_SECRET,
      { issuer: 'beginner' },
    );
    await expect(decodeAccessToken(expiredToken)).rejects.toMatch('TokenExpiredError');

    const invalidToken = await jwt.sign(
      payload,
      `wrong${JWT_SECRET}`,
      { issuer: 'beginner', expiresIn: '1d' },
    );
    await expect(decodeAccessToken(invalidToken)).rejects.toMatch('JsonWebTokenError');
  });
});
