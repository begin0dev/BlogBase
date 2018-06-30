const { MONGO_URI: mongoUri } = process.env;
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = {
  connect() {
    return mongoose.connect(mongoUri, { useMongoClient: true }, (err) => {
      if (err) {
        console.error('mongodb connection error', err);
      } else {
        console.log('mongodb connected');
      }
    });
  },
  disconnect() {
    return mongoose.disconnect();
  },
};
