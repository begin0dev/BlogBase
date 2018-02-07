const { MONGO_URI: mongoURI } = process.env;

const mongoose = require('mongoose');

module.exports = (function () {
  mongoose.Promise = global.Promise;

  return {
    connect() {
      return mongoose.connect(mongoURI, { useMongoClient: true }, (err) => {
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
}());
