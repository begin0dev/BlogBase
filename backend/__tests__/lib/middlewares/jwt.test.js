require('../../testHelper');

const httpMocks = require('node-mocks-http');
const jwt = require('jsonwebtoken');
const { generateAccessToken } = require('lib/token');
const { checkedAccessToken, checkedRefreshToken } = require('lib/middlewares/jwt');

const { JWT_SECRET } = process.env;

const user = {
  _id: 'id',
  displayName: 'displayName',
};

describe('Test checkedAccessToken', () => {
  test('Success-1', async () => {
    const req = httpMocks.createRequest({
      headers: {
        'x-access-token': null,
      },
    });
    const res = httpMocks.createResponse();

    await checkedAccessToken(req, res, (err) => {
      if (err) console.error(err);
      expect(req.user).toEqual(null);
    });
  });
  test('Success-2', async () => {
    const token = await generateAccessToken({ user });
    const req = httpMocks.createRequest({
      headers: {
        'x-access-token': token,
      },
    });
    const res = httpMocks.createResponse();

    await checkedAccessToken(req, res, (err) => {
      if (err) console.error(err);
      expect(req.user).toEqual(user);
    });
  });
  test('Success-3', async () => {
    const token = await jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) - 60,
        data: user,
      },
      JWT_SECRET,
      { issuer: 'beginner' },
    );
    const req = httpMocks.createRequest({
      headers: {
        'x-access-token': token,
      },
    });
    const res = httpMocks.createResponse();

    await checkedAccessToken(req, res, (err) => {
      if (err) console.error(err);
      expect(req.user).toEqual(null);
    });
  });
});
