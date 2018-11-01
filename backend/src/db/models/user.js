const mongoose = require('mongoose');
const { generatePassword } = require('lib/bcrypt');

const User = new mongoose.Schema({
  email: String,
  password: String,
  commonProfile: {
    displayName: String,
  },
  oAuth: {
    local: {
      refreshToken: {
        type: String,
        unique: true,
        index: true,
      },
      expiredAt: Date,
    },
    github: {
      id: {
        type: String,
        unique: true,
        index: true,
      },
      accessToken: String,
    },
    facebook: {
      id: {
        type: String,
        unique: true,
        index: true,
      },
      accessToken: String,
    },
    google: {
      id: {
        type: String,
        unique: true,
        index: true,
      },
      accessToken: String,
    },
    kakao: {
      id: {
        type: String,
        unique: true,
        index: true,
      },
      accessToken: String,
    },
  },
}, { timestamps: true });

User.set('toJSON', {
  transform(doc) {
    return {
      _id: doc._id,
      email: doc.email,
      commonProfile: {
        displayName: doc.commonProfile.displayName,
      },
    };
  },
});

// static methods
User.statics.findById = function findById(id) {
  return this.findOne({ _id: id });
};

User.statics.findByEmail = function findByEmail(email) {
  return this.findOne({ email });
};

User.statics.findBySocialId = function findBySocialId({ provider, id }) {
  return this.findOne({
    oAuth: {
      [provider]: { id },
    },
  });
};

User.statics.localRegister = async function localRegister({ email, password, displayName }) {
  // generate password
  const hashPassword = await generatePassword(password);
  const user = new this({
    email,
    password: hashPassword,
    commonProfile: {
      displayName,
    },
  });
  return user.save();
};

User.statics.findByLocalRefreshToken = function findByLocalRefreshToken({ token }) {
  return this.findOne({
    oAuth: {
      local: token,
    },
  });
};

module.exports = mongoose.model('User', User);
