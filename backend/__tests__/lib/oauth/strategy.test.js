const Strategy = require('lib/oauth/strategy');

describe('Test constructor Strategy', () => {
  test('Success', () => {
    const strategy = new Strategy({
      name: 'facebook',
      clientID: 'test-id',
      clientSecret: 'test-secret',
      callbackURL: '/test',
    }, () => {});
    expect(strategy.name).toBe('facebook');
    expect(strategy.authorizationURL).toBe('https://www.facebook.com/dialog/oauth');
    expect(typeof strategy.verify).toBe('function');
  });

  test('Failed', () => {
    const strategy = new Strategy({
      name: 'facebook',
      clientID: 'test-id',
      clientSecret: 'test-secret',
      callbackURL: '/test',
    }, () => {});
    expect(strategy.name).toBe('facebook');
  });
});
