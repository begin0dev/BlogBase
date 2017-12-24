const mongoose = require('mongoose');

const type = ['local', 'facebook', 'google', 'naver', 'kakao'];

const User = new mongoose.Schema({
  type: {type: String, enum: type},
  userName: String,
  password: String,
  salt: String,
  common_profile: {
    displayName: String,
    email: String
  },
  o_auth: {
    facebook: {
      id: String,
      access_token: String
    },
    google: {
      id: String,
      access_token: String
    },
    naver: {
      id: String,
      access_token: String
    },
    kakao: {
      id: String,
      access_token: String
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// static methods
User.statics.findUserInfo = function(id) {
  return this.findOne({'_id': id}).exec();
};

User.statics.findByUsername = function(userName) {
  return this.findOne({'userName': userName}).exec();
};

User.statics.findByEmail = function(email) {
  return this.findOne({'common_profile.email': email}).exec();
};

User.statics.findById = function(id) {
  return this.findOne({'_id': id}).exec();
};

User.statics.findBySocialId = function({provider, id}) {
  const key = `social.${provider}.id`;
  return this.findOne({
    [key]: id
  }).exec();
};

User.statics.localRegister = function({userName, password, salt, displayName, email}) {
  const user = new this({
    type: 'local',
    userName,
    password,
    salt,
    common_profile: {
      displayName,
      email
    }
  });
  return user.save();
};

module.exports = mongoose.model('User', User);
