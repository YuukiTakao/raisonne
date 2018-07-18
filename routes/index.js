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

/* GET home page. */
router.post('/update', function(req, res, next) {
  console.log(req.body.id);
  models.tasks
    .update({completed: 1},{ where: { id: req.body.id}}) // {更新内容},{更新対象}
    .then(result=> {
      console.log(result);
      const param = {result:"Hello World !"};
      res.header('Content-Type', 'application/json; charset=utf-8')
      res.send(param);
  })
});


module.exports = router;
