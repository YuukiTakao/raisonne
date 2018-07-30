const models = require('../models/')
let task = {};

/* タスクの登録 */
task.regist = (req, res, next) => {
  const param = req.body;
  const insertTask = models.tasks.create({
    title: param.title,
    start_date: param.start_date,
    close_date: param.close_date,
  })
  insertTask.then((ret) => {
    res.json({isSucceeded: true});
  })
  insertTask.error((e) => {
    res.json({
      isSucceeded: false,
      message: e.message
    });
  })
}

/* タスクの更新 */
task.update = (req, res, next) => {
  const targetId = req.params.id;
  const updateTask = models.tasks.update(
    {completed: Boolean(req.body.task_status)}, //更新内容
    { where: { id: targetId}} //更新対象
  );
  updateTask.then(result=> {
    res.json({isSucceeded: true});
  })
};

/* タスクの削除 */
task.delete = (req, res, next) => {
  const targetId = req.params.id;
  const delTask = models.tasks.destroy({
    where:{
      id: targetId
    }
  })
  delTask.then((ret) => {
    res.json({isSucceeded: true});
  })
  delTask.error((e) => {
    res.json({
      isSucceeded: false,
      message: e.message
    });
  })
}

module.exports = task;
