const express = require('express');
const router = express.Router();

const logger = require('../config/logger.js');
const taskcontroller = require('../controllers/taskcontroller');

router.post('/regist', taskcontroller.regist);
router.post('/update/:id', taskcontroller.update);
router.post('/delete/:id', taskcontroller.delete);

module.exports = router;

