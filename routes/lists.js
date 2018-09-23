const express = require('express');
const router = express.Router();

const logger = require('../config/logger.js');
const listcontroller = require('../controllers/listcontroller');

router.get('/:id', listcontroller.index);
router.post('/regist', listcontroller.regist);
router.post('/update/:id', listcontroller.update);
router.post('/delete/:id', listcontroller.delete);

module.exports = router;

