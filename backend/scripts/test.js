require('dotenv').config({ path: './.env.test' });

const db = require('db');

beforeAll(async () => {
  console.log('initializeSetup');
  await db.connect();
});
