const express = require('express');
const router = express.Router();

const logger = require('../config/logger.js');
const task_controller = require('../controllers/task_controller');

router.post('/regist', task_controller.regist);
router.post('/update/:id', task_controller.update);
router.get('/delete/:id', task_controller.delete);

module.exports = router;

