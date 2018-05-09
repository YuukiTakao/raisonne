var express = require('express');
var router = express.Router();

var indexController = require('../controllers/index');
var allTaskList = indexController; 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: allTaskList });
});

module.exports = router;
