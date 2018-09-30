const { NODE_ENV, MONGO_URI, MONGO_USER, MONGO_PWD } = process.env;
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = {
  connect() {
    const connect = () => {
      if (NODE_ENV !== 'production') {
        mongoose.set('debug', true);
      }
      mongoose.connect(MONGO_URI, {
        user: MONGO_USER,
        pass: MONGO_PWD,
        dbName: `blog-${NODE_ENV}`,
        useNewUrlParser: true,
      }).then(() => {
        console.log('Mongodb connected');
      }).catch((err) => {
        console.error('Mongodb connection error', err);
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
