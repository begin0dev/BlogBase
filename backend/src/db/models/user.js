const mongoose = require('mongoose');

const type = ['local', 'facebook', 'google', 'naver', 'kakao'];

const User = new mongoose.Schema({
  type: { type: String, enum: type },
  userName: String,
  password: String,
  common_profile: {
    displayName: String,
    email: String,
  },
  o_auth: {
    facebook: {
      id: String,
      access_token: String,
    },
    google: {
      id: String,
      access_token: String,
    },
    naver: {
      id: String,
      access_token: String,
    },
    kakao: {
      id: String,
      access_token: String,
    },
  },
}, { timestamps: true });

// static methods
User.statics.findUserInfo = function findUserInfo(id) {
  return this.findOne({ _id: id });
};

User.statics.findByUsername = function findByUsername(userName) {
  return this.findOne({ userName });
};

User.statics.findByEmail = function findByEmail(email) {
  return this.findOne({ 'common_profile.email': email });
};

User.statics.findById = function findById(id) {
  return this.findOne({ _id: id });
};

User.statics.findBySocialId = function findBySocialId({ provider, id }) {
  const key = `social.${provider}.id`;
  return this.findOne({ [key]: id });
};

User.statics.localRegister = function localRegister({ userName, password, displayName, email }) {
  const user = new this({
    type: 'local',
    userName,
    password,
    common_profile: {
      displayName,
      email,
    },
  });
  return user.save();
};

module.exports = mongoose.model('User', User);
