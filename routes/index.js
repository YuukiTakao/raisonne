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

    logger.info('route.get START');   // ここでログ出してます！！！
    // tasksモデルの全データを取得
    models.tasks.findAll().then(task=> {  
      var taskObjArray = JSON.parse(JSON.stringify(task, null, 2));

      const responseJson = {
        title: 'raisonne',
        tasks: taskObjArray,
      };
      // ViewにModelのデータを渡す
      res.render('index', responseJson);
      logger.info('route.get END');  // ここでログ出してます！！！
  });
});

router.post('/task/update', );

module.exports = router;
