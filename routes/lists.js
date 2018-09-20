const express = require('express');
const router = express.Router();

const logger = require('../config/logger.js');
const list_controller = require('../controllers/list_controller');

router.get('/:id', list_controller.index);
router.post('/regist', list_controller.regist);
router.post('/update/:id', list_controller.update);
router.post('/delete/:id', list_controller.delete);

module.exports = router;

