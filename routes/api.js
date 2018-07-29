const express = require('express');
const models = require('../models/')
const router = express.Router();

/* タスクの登録 */
router.post('/task/regist', (req, res, next) => {
  const param = req.body;
  const insertTask = models.tasks.create({
    title: param.title,
    start_date: param.start_date,
    close_date: param.close_date,
  })
  insertTask.then((ret) => {
    res.send('insert succeeded');
  })
  insertTask.error((e) => {
    res.send(e.message);
  })
});

module.exports = router;
