const mongoose = require('mongoose');
const loadModels = require('./models');

mongoose.Promise = global.Promise;

module.exports = () => {
  const connect = () => {
    mongoose.connect(process.env.MONGO_URI, (err) => {
      if(err) {
        console.error('mongodb connection error', err);
      }else {
        console.log('mongodb connected');
      }
    });
  };
  connect();

  mongoose.connection.on('error', console.log);
  mongoose.connection.on('disconnected', connect);

  loadModels();
};
