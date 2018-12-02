const express = require('express');

const oAuth = require('lib/oauth');

const router = express.Router();

router.get('/facebook', oAuth.authenticate('facebook', {}), (req, res) => {
  return res.json({});
});

router.get('/kakao', oAuth.authenticate('kakao', {}), (req, res) => {
  return res.json({});
});

module.exports = router;
