var express = require('express');
var router = express.Router();

var users = require('../models/tasks.js');


/* GET home page. */
router.get('/', function(req, res, next) {
    users.findAll().then(user=> {
    console.log(user[0].dataValues);
    var userArray = Array(user[0].dataValues);
    res.render('index', { title: 'raisonne', task: userArray})
  });
});

module.exports = router;
