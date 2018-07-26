const express = require('express');
const Joi = require('joi');

const { generatePassword, comparePassword } = require('../../../lib/bcrypt');
const { generateToken } = require('../../../lib/token');
const User = require('../../../db/models/user');

const router = express.Router();

router.get('/', (req, res) => {
  if (req.user) {
    res.status(200).json({ state: 'login' });
  } else {
    res.status(401).end();
  }
});

router.post('/register', async (req, res, next) => {
  const { body } = req;
  const {
    userName,
    displayName,
    email,
    password,
  } = body;

  // check validate user info
  const schema = Joi.object({
    userName: Joi.string().email().required(),
    displayName: Joi.string().regex(/^[a-zA-Z0-9ㄱ-힣]{3,12}$/).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(15),
  });
  const validate = Joi.validate(body, schema);
  if (validate.error) {
    console.log(validate.error);
    return res.status(400).json({ success: false, message: validate.error.details[0].message });
  }

  try {
    // check username
    const userNameExists = await User.findByUsername(userName);
    if (userNameExists) return res.status(400).json({ success: false, message: 'userName is already exists' });

    // check email
    const emailExists = await User.findByEmail(email);
    if (emailExists) return res.status(400).json({ success: false, message: 'email is already exists' });

    // generate password
    const hashPassword = await generatePassword(password);

    // create user
    const user = await User.localRegister({
      userName,
      password: hashPassword,
      displayName,
      email,
    });

    // create access token
    const accessToken = await generateToken({
      user: {
        id: user._id,
        displayName: user.common_profile.displayName,
      },
    }, 'user');

    // access token set cookie
    res.cookie('access_token', accessToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
    });

    return res.status(200).json({ success: true, message: 'success local register' });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post('/login', async (req, res, next) => {
  const { body } = req;
  const { userName, password } = body;

  // check validate user info
  const schema = Joi.object({
    userName: Joi.string().email().required(),
    password: Joi.string().min(6).max(15),
  });
  const validate = Joi.validate(body, schema);
  if (validate.error) {
    console.log(validate.error);
    return res.status(400).json({ success: false, message: validate.error.details[0].message });
  }

  try {
    // find by username
    const user = await User.findByUsername(userName);
    if (!user) return res.status(400).json({ success: false, message: 'user is incorrect!' });

    // find one user compare password
    const result = await comparePassword(password, user.password);
    if (!result) return res.status(400).json({ success: false, message: 'user is incorrect!' });

    // create access token
    const accessToken = await generateToken({
      user: {
        id: user._id,
        displayName: user.common_profile.displayName,
      },
    }, 'user');

    // access token set cookie
    res.cookie('access_token', accessToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
    });

    return res.status(200).json({ success: true, message: 'success local login' });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
