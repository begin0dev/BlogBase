const { NODE_ENV, MONGO_URI: mongoUri } = process.env;
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = {
  connect() {
    const connect = () => {
      if (NODE_ENV !== 'production') {
        mongoose.set('debug', true);
      }
      mongoose.connect(mongoUri, { useNewUrlParser: true }, (err) => {
        if (err) console.error('Mongodb connection error', err);
        console.log('Mongodb connected');
      });
    };
    connect();
    mongoose.connection.on('error', (err) => {
      console.error('Mongodb connection error', err);
    });
    mongoose.connection.on('disconnected', () => {
      console.error('The connection to the Mongodb has been lost. Retry the connection');
      connect();
    });
  },
  disconnect() {
    return mongoose.disconnect();
  },
};
