const express = require('express');

const router = express.Router();

router.get('facebook', (req, res) => {
  console.log(req, res);
  res.json({ test: 0 });
});

module.exports = router;
