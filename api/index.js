const express = require('express');
const router = express.Router();

const models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  models.tasks.findAll().then(task=> {
    
    var taskArray = JSON.parse(JSON.stringify(task, null, 2));
    res.render('index', { title: 'raisonne', tasks: taskArray})
  });
});

module.exports = router;
