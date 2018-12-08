const url = require('url');
const faker = require('faker');

const Strategy = require('lib/oauth/strategy');

describe('Test Strategy constructor', () => {
  test('Success', () => {
    const strategy = new Strategy({
      name: 'facebook',
      clientID: 'test-id',
      clientSecret: 'test-secret',
      callbackURL: '/test',
    }, ['test_scope'], () => {});
    expect(strategy.name).toBe('facebook');
    expect(strategy.authorizationURL).toBe('https://www.facebook.com/dialog/oauth');
    expect(typeof strategy.scope).toBe('string');
    expect(strategy.scope).toBe('email,public_profile,test_scope');
    expect(typeof strategy.verify).toBe('function');
  });

  test('Failed', () => {
    expect(() => (
      new Strategy({
        name: 'facebook',
        clientSecret: 'test-secret',
        callbackURL: '/test',
      }, () => {})
    )).toThrowError('You must provide options the clientID configuration value');
  });
});

describe('Test Strategy authorizeEndPoint', () => {
  test('Success', () => {
    const redirectURI = faker.internet.url();
    const strategy = new Strategy({
      name: 'facebook',
      clientID: 'test-id',
      clientSecret: 'test-secret',
      callbackURL: '/test',
    }, ['test_scope'], () => {});
    expect(decodeURIComponent(strategy.authorizeEndPoint(redirectURI)))
      .toBe(`https://www.facebook.com/dialog/oauth?client_id=test-id&redirect_uri=${redirectURI}&response_type=code`);
  });
});
