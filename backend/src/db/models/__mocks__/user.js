const faker = require('faker');

const userData = () => {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
    displayName: faker.internet.userName(),
  };
};

module.exports = userData;
