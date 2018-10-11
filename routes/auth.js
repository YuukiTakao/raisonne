const express = require('express');
const router = express.Router();
const Authenticator = require('../config/passport/authenticator');

/* GET users listing. */
router.get('/', (req, res) => {
  const message = req.flash();
  res.render('auth/login', {
    message: message.error,
    title: 'ログイン'
  });
});

router.post('/', (req, res, next) => {
  Authenticator.authenticate(req, res, next);
});

module.exports = router;