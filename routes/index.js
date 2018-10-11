const express = require('express');
const router = express.Router();

const logger = require('../config/logger.js');
const indexcontroller = require('../controllers/indexcontroller');
const Authenticator = require('../config/passport/authenticator.js');

router.get('/', indexcontroller.index);
router.post('/login', Authenticator.isAuthenticated, function(req, res) {
  const user = req.user;
  res.render('user', {
    user: user
  });
});

// router.get('/logout', indexcontroller.logout());

module.exports = router;

