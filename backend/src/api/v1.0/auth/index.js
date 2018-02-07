const express = require('express');

const localCtrl = require('./local.ctrl');

const router = express.Router();

router.use('/local', localCtrl);

module.exports = router;
