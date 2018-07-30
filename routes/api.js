const express = require('express');
const router = express.Router();

const logger = require('../config/logger.js');
const taskapi = require('../controllers/taskapi');

router.get('/', taskapi.index);
router.post('/regist', taskapi.regist);
router.post('/update/:id', taskapi.update);
router.get('/delete/:id', taskapi.delete);

module.exports = router;
