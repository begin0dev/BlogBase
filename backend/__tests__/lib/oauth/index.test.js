const request = require('supertest');

const Oauth = require('lib/oauth');
const Strategy = require('lib/oauth/strategy');
const app = require('../../testApp');

describe('Test Oauth use', () => {
  test('Success: strategy', () => {
    function MockStrategy() {
      this.name = 'test';
    }
    Oauth.use(new MockStrategy());
    expect(typeof Oauth.strategires.test).toBe('object');
  });
  test('Success: name, strategy', () => {
    function MockStrategy() {
    }
    Oauth.use('test', new MockStrategy());
    expect(typeof Oauth.strategires.test).toBe('object');
  });
});

describe('Test Oauth authenticate', () => {
  Oauth.use(new Strategy({
    name: 'facebook',
    clientID: 'test-id',
    clientSecret: 'test-secret',
    callbackURL: '/test',
  }, (accessToken, profile, done) => { done(); }));

  app.get('/facebook', Oauth.authenticate('facebook', (req, res) => {
    res.status(201).json({ status: 'success' });
  }));
  const agent = request.agent(app);

  test('Success', () => {
    agent.get('/facebook').expect(302);
  });
});
