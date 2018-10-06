require('dotenv').config({ path: './.env.test' });

const mongoose = require('mongoose');
const MongodbMemoryServer = require('mongodb-memory-server');

const mongoServer = new MongodbMemoryServer.MongoMemoryServer();

beforeAll(async () => {
  const mongoUri = await mongoServer.getConnectionString();
  try {
    await mongoose.connect(mongoUri, { useNewUrlParser: true });
  } catch (err) {
    console.error('Mongodb connection error', err);
  }
});

afterAll(async () => {
  await mongoose.disconnect();
  mongoServer.stop();
});
