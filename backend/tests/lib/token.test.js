const jwt = require('jsonwebtoken');
const { generateToken, decodeToken } = require('lib/token');

describe('generateToken', () => {
  test('success', async () => {
    const payload = {
      _id: 'asd12ed3s123',
      displayName: 'displayName',
    };
    const secret = 'test';
    const expiresIn = '1h';

    const token = await generateToken(payload, expiresIn);
    const expectToken = await jwt.sign(
      payload,
      secret,
      { issuer: 'Beginner', expiresIn },
    );

    console.log(token);
    expect(token).toEqual(expectToken);
  });
});
