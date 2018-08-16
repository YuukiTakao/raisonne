const models = require('../models/')
let task = {};


/* タスクの登録 */
task.regist = (req, res, next) => {
  const param = req.body;
  console.log('list_id: '+ param.list_id);
  console.log('listId: '+ param.listId);
  const insertTask = models.tasks.create({
    title: param.title,
    list_id: param.list_id
  });
  insertTask.then((ret) => {
    res.json({isSucceeded: true});
  });
  insertTask.error((e) => {
    res.json({
      isSucceeded: false,
      message: e.message
    });
  });
}

/* タスクの更新 */
task.update = (req, res, next) => {
  const targetId = req.params.id;
  console.log(req.body.taskStatus);
  
  if (req.body.title){
    updateObj = {title: req.body.title};
  } else if (req.body.taskStatus != null) {
    updateObj = {completed: req.body.taskStatus};
  };

  const updateTask = models.tasks.update(
    updateObj, //更新内容
    { where: { id: targetId}} //更新対象
  );
  updateTask.then(result=> {
    res.json({isSucceeded: true});
  })
  updateTask.error((e) => {
    res.json({
      isSucceeded: false,
      message: e.message
    });
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
