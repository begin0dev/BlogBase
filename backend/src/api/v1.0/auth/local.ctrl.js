const express = require('express');
const Joi = require('joi');

const { generatePassword, comparePassword } = require('../../../lib/crypto');
const { generateToken } = require('../../../lib/token');
const User = require('../../../db/models/user');

const router = express.Router();

/*
code 0 - sever error
code 1 - valid error
code 2 - wrong data
code 3 - success
*/

router.get('/', async (req, res) => {
  if(req.user) {
      return res.status(200).json({state: 'login'});
  }else {
      return res.status(200).json({state: 'not logged'});
  }
});

router.post('/register', async (req, res) => {
  const { body } = req;
  const { userName, displayName, email, password } = body;

  // check validate user info
  const schema = Joi.object({
    userName: Joi.string().email().required(),
    displayName: Joi.string().regex(/^[a-zA-Z0-9ㄱ-힣]{3,12}$/).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(15)
  });
  const validResult = Joi.validate(body, schema);
  if(validResult.error) {
    console.log(validResult.error);
    return res.status(200).json({code: 1, success: false, message: validResult.error.details[0].message});
  }

  try {
    // check username
    const userNameExists = await User.findByUsername(userName);
    if(userNameExists) {
      return res.status(200).json({code: 2, success: false, message: 'userName is already exists'});
    }

    // check email
    const emailExists = await User.findByEmail(email);
    if(emailExists) {
      return res.status(200).json({code: 2, success: false, message: 'email is already exists'});
    }

    // generate password
    const hashPassword = await generatePassword(password);   
    
    // create user
    const user = await User.localRegister({
      userName, 
      password: hashPassword.password, 
      salt: hashPassword.salt, 
      displayName, 
      email
    });

    // create access token
    const accessToken = await generateToken({
      user: {
        _id: user._id,
        displayName: user.common_profile.displayName
      }
    }, 'user');

    // access token set cookie
    res.cookie('access_token', accessToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 3
    });

    return res.status(200).json({code: 3, success: true, message: 'success local register'});
  }catch(err) {
    console.log(err);
    return res.status(500).json({code: 0, success: false, message: err});
  }
});

router.post('/login', async (req, res) => {
  const { body } = req;
  const { userName, password } = body;

  // check validate user info
  const schema = Joi.object({
    userName: Joi.string().email().required(),
    password: Joi.string().min(6).max(15)
  });
  const validResult = Joi.validate(body, schema);
  if(validResult.error) {
    console.log(validResult.error);
    return res.status(200).json({code: 1, success: false, message: validResult.error.details[0].message});
  }
  
  try {
    // find by username
    const user = await User.findByUsername(userName);
    if(!user) {
      return res.status(200).json({code: 2, success: false, message: 'not find user data'});
    }

    // find one user compare password
    const result = await comparePassword(
      password,
      user.password,
      user.salt
    );
    if(!result.result) {
      return res.status(200).json({code: 2, success: false, message: 'password is incorrect'});
    }

    // create access token
    const accessToken = await generateToken({
      user: {
        _id: user._id,
        displayName: user.common_profile.displayName
      }
    }, 'user');

    // access token set cookie
    res.cookie('access_token', accessToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 3
    });

    return res.status(200).json({code: 3, success: true, message: 'success local login'});
  }catch(err) {
    console.log(err);
    return res.status(500).json({code: 0, success: false, message: err});
  }
});

module.exports = router;
