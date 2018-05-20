var express = require('express');
var router = express.Router();

var indexController = require('../controllers/index');
var allTaskList = indexController; 

var testTask = [{a1:'model implements',a2:'controller implements'},
		{b1:'view TV Show',b2:'Have dinner' }];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: allTaskList, task: testTask})
});

module.exports = router;
