const Oauth = require('lib/oauth');

describe('Test Oauth use', () => {
  test('Success-1', () => {
    function Strategy() {
      this.name = 'test';
    }
    Oauth.use(new Strategy());
    expect(typeof Oauth.strategires.test).toBe('object');
  });
  test('Success-2', () => {
    function Strategy() {
    }
    Oauth.use('test', new Strategy());
    expect(typeof Oauth.strategires.test).toBe('object');
  });
  test('Failed', () => {
    expect(() => Oauth.use()).toThrowError('Authentication strategies must have a name');
  });
});

describe('Test Oauth authenticate', () => {
  test('Success-1', () => {
    function Strategy() {
      this.name = 'test';
    }

    Oauth.use(new Strategy());
  });
});
