const express = require('express');
const router = express.Router();

const logger = require('../config/logger.js');
const list_controller = require('../controllers/list_controller');

router.get('/', list_controller.index);


module.exports = router;

