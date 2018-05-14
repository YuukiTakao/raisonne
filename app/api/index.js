var express = require('express');
var router = express.Router();

var indexController = require('../controllers/index');
var allTaskList = indexController; 

var testTask = {a1:'model implements',a2:'controller implements'};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: allTaskList, task: testTask})
});

module.exports = router;
