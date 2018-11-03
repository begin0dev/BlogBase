const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json()); // parses json
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

module.exports = app;
