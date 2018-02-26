import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';

// imports all file except index.js
const req = require.context('.', true, /^(?!.\/index).*.js$/);

const reducers = {};

req.keys().forEach((key) => {
  const regex = /.\/(.*?).js$/;
  const reducerName = regex.test(key) && key.match(regex)[1];
  reducers[reducerName] = req(key).default;
});

reducers.pender = penderReducer;

export default combineReducers(reducers);
