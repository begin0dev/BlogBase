require('dotenv').config(); // LOAD CONFIG
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const api = require('./api');
const db = require('./db');
const jwtMiddleware = require('./lib/middlewares/jwt');

const { NODE_ENV, PORT, COOKIE_SECRET } = process.env;

const app = express();
const port = PORT || 3000;

/* mongoose connected */
db.connect();

/* ENABLE DEBUG WHEN DEV ENVIRONMENT */
if (NODE_ENV === 'development') {
  mongoose.set('debug', true);
  app.use(morgan('dev')); // server logger
}

/* SETUP MIDDLEWARE */
// Allows express to read `x-www-form-urlencoded` data:
app.use(express.json()); // parses json
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
}));

/* SETUP ROUTER */
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

app.listen(port, () => {
  console.log(`Express is running on port ${port}`);
});
