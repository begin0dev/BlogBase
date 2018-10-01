require('dotenv').config(); // LOAD CONFIG
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const api = require('api/index');
const db = require('db/index');
const jwtMiddleware = require('lib/middlewares/jwt');

const { NODE_ENV, PORT, COOKIE_SECRET } = process.env;

const app = express();
const port = PORT || 3000;

/* mongoose connected */
db.connect();

/* ENABLE DEBUG WHEN DEV ENVIRONMENT */
if (NODE_ENV === 'production') {
  app.use(morgan('combined'));
} else {
  app.use(morgan('dev')); // server logger
}

/* SETUP MIDDLEWARE */
// Allows express to read `x-www-form-urlencoded` data:
app.use(express.json()); // parses json
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(COOKIE_SECRET));
app.use(session({
  resave: false,
  secret: COOKIE_SECRET,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: NODE_ENV === 'production',
  },
}));

/* SETUP ROUTER */
app.use(jwtMiddleware);
app.use('/api', api);

/* 404 error */
app.use((req, res, next) => {
  const err = new Error('Not found router');
  err.status = 404;
  return next(err);
});

/* handle error */
app.use((err, req, res) => {
  console.error(err.message);
  res.status(err.status || 500);
  res.json({
    success: false,
    message: err.message,
  });
});

app.listen(port, () => {
  console.log(`Express is running on port ${port}`);
});
