const express = require('express');
const router = express.Router();

const logger = require('../config/logger.js');
const indexcontroller = require('../controllers/indexcontroller');

router.get('/', indexcontroller.index);

module.exports = router;

