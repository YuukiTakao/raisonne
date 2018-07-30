const express = require('express');
const taskapi = require('../controllers/taskapi')
const router = express.Router();

router.post('/task/regist', taskapi.regist);
router.post('/task/update/:id', taskapi.update);
router.get('/task/delete/:id', taskapi.delete);

module.exports = router;
