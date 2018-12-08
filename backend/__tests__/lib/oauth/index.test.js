const request = require('supertest');

const Oauth = require('lib/oauth');
const app = require('../../testApp');

describe('Test Oauth use', () => {
  test('Success: strategy', () => {
    function Strategy() {
      this.name = 'test';
    }
    Oauth.use(new Strategy());
    expect(typeof Oauth.strategires.test).toBe('object');
  });
  test('Success: name, strategy', () => {
    function Strategy() {
    }
    Oauth.use('test', new Strategy());
    expect(typeof Oauth.strategires.test).toBe('object');
  });
});

describe('Test Oauth authenticate', () => {
  test('Success', () => {
    function Strategy() {
      this.name = 'facebook';
    }
    Oauth.use(new Strategy());

    app.get('/', Oauth.authenticate('test', (req, res) => {
      res.status(201).json({ status: 'success' });
    }));
  });
});
