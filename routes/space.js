const express = require('express');
const router = express.Router();

const logger = require('../config/logger.js');
// logger.trace('trace log'); // level 10
// logger.debug('debug log'); // level 20
// logger.info('info log'); // level 30
// logger.warn('warn log'); // level 40
// logger.error('error log'); // level 50
// logger.fatal('fatal log'); // level 60

const models = require('../models');

const spacecontroller = require('../controllers/spacecontroller');

/* ルートディレクトリにGETメソッドでリクエストが来た場合の処理　*/
router.get('/:id', spacecontroller.index);


module.exports = router;
