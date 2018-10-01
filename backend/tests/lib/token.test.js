require('../../scripts/test');

const jwt = require('jsonwebtoken');
const { generateToken, decodeToken } = require('lib/token');

const { JWT_SECRET } = process.env;
const payload = {
  _id: 'asd12ed3s123',
  displayName: 'displayName',
};
const expiresIn = '1h';

describe('generateToken', () => {
  test('success', async () => {
    console.log('1');
    await expect(generateToken(payload, expiresIn)).resolves;
  });
  test('failed', async () => {
    await expect(generateToken(payload)).rejects.toThrowError();
  });
});

describe('decodeToken', () => {
  test('success', async () => {
    const token = await generateToken(payload, expiresIn);

    const decode = await decodeToken(token);
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
    await expect(decodeToken(expiredToken)).rejects.toMatch('TokenExpiredError');

    const invalidToken = await jwt.sign(
      payload,
      `not${JWT_SECRET}`,
      { issuer: 'beginner', expiresIn: '1d' },
    );
    await expect(decodeToken(invalidToken)).rejects.toMatch('JsonWebTokenError');
  });
});
