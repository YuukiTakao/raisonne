const express = require('express');
const router = express.Router();

const logger = require('../config/logger.js');
// logger.trace('trace log'); // level 10
// logger.debug('debug log'); // level 20
// logger.info('info log'); // level 30
// logger.warn('warn log'); // level 40
// logger.error('error log'); // level 50
// logger.fatal('fatal log'); // level 60

const models = require('../models');

/* ルートディレクトリにGETメソッドでリクエストが来た場合の処理　*/
router.get('/', function(req, res, next) {

    // tasksモデルの全データを取得
    models.tasks.findAll().then(task=> {  
      var taskArray = JSON.parse(JSON.stringify(task, null, 2));

      const responseJson = {
        title: 'raisonne',
        tasks: taskArray
      };

      // ViewにModelのデータを渡す
      res.render('index', responseJson);
  });
});

router.post('/update', function(req, res, next) {
  
  models.tasks
    .update({completed: Boolean(req.body.task_status)},{ where: { id: req.body.id}}) // {更新内容},{更新対象}
    .then(result=> {
      const param = {result:"Hello World !"};
      res.header('Content-Type', 'application/json; charset=utf-8')
      res.send(param);
  })
});

module.exports = router;
