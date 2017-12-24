require('dotenv').config(); // LOAD CONFIG

const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const jwtMiddleware = require('./lib/middlewares/jwt');
const api = require('./api');
const connect = require('./db/connect');

const app = express();
const port = process.env.PORT || 3000;

/* SETUP MIDDLEWARE */
// Allows express to read `x-www-form-urlencoded` data:
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(express.json()); // parses json

// SETUP ROUTER
app.use(jwtMiddleware);
app.use('/api', api);

/* handle error */
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({
    error: {
      message: 'Something Broke!',
      code: 0
    }
  });
  next();
});

// mongoose connected
connect();

// ENABLE DEBUG WHEN DEV ENVIRONMENT
if(process.env.NODE_ENV === 'development') {
  mongoose.set('debug', true);
  app.use(morgan('tiny')); // server logger
}

app.listen(port, () => {
  console.log(`Express is running on port ${port}`);
});
