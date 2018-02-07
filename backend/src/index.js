require('dotenv').config(); // LOAD CONFIG

const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const jwtMiddleware = require('./lib/middlewares/jwt');
const api = require('./api');
const db = require('./db');

const app = express();
const port = process.env.PORT || 3000;

/* SETUP MIDDLEWARE */
// Allows express to read `x-www-form-urlencoded` data:
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // parses json

// mongoose connected
db.connect();

// SETUP ROUTER
app.use(jwtMiddleware);
app.use('/api', api);

/* 404 error */
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/* handle error */
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({
    error: {
      message: 'Something Broke!',
    },
  });
  next();
});

// ENABLE DEBUG WHEN DEV ENVIRONMENT
if (process.env.NODE_ENV === 'development') {
  mongoose.set('debug', true);
  app.use(morgan('tiny')); // server logger
}

app.listen(port, () => {
  console.log(`Express is running on port ${port}`);
});
