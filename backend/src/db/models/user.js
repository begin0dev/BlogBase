const mongoose = require('mongoose');

const User = new mongoose.Schema({
  email: String,
  password: String,
  common_profile: {
    displayName: String,
  },
  o_auth: {
    github: {
      id: String,
      access_token: String,
    },
    facebook: {
      id: String,
      access_token: String,
    },
    google: {
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

User.statics.localRegister = function localRegister({ email, password, displayName }) {
  const user = new this({
    email,
    password,
    common_profile: {
      displayName,
    },
  });
  return user.save();
};

module.exports = mongoose.model('User', User);
