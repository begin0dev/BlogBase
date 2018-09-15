const mongoose = require('mongoose');

const User = new mongoose.Schema({
  email: String,
  password: String,
  commonProfile: {
    displayName: String,
  },
  oAuth: {
    github: {
      id: String,
      accessToken: String,
    },
    facebook: {
      id: String,
      accessToken: String,
    },
    google: {
      id: String,
      accessToken: String,
    },
    kakao: {
      id: String,
      accessToken: String,
    },
  },
}, { timestamps: true });

// static methods
User.statics.findUserInfo = function findUserInfo(id) {
  return this.findOne({ _id: id });
};

User.statics.findByEmail = function findByEmail(email) {
  return this.findOne({ email: email });
};

User.statics.findById = function findById(id) {
  return this.findOne({ _id: id });
};

User.statics.findBySocialId = function findBySocialId({ provider, id }) {
  const key = `social.${provider}.id`;
  return this.findOne({ [key]: id });
};

User.statics.localRegister = function localRegister({ email, password, displayName }) {
  const user = new this({
    email,
    password,
    commonProfile: {
      displayName,
    },
  });
  return user.save();
};

module.exports = mongoose.model('User', User);
