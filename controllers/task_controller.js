const models = require('../models/')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
let task = {};


/* タスクの登録 */
task.regist = (req, res, next) => {
  const param = req.body;
  console.log('target_order_id: '+param.target_order_id);

  /* タスク並び順の更新 */
  const incrementTasksGteOrderId = models.tasks.increment(
    'order_id', // 更新内容
    { 
      //where:{[Op.gte]:param.target_order_id}
      where:{
        list_id: param.list_id,
        order_id:{[Op.gte]:param.target_order_id}
      }
    } // 更新対象
  );
  incrementTasksGteOrderId.then(result=> {
    // res.json({isSucceeded: true});
    console.log('task order update success');
  });
  incrementTasksGteOrderId.error((e) => {
    res.json({
      isSucceeded: false,
      message: e.message
    });
  });

  /* タスク登録 */
  const insertTask = models.tasks.create({
    title: param.title,
    list_id: param.list_id,
    order_id: param.target_order_id
  });
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
  
  console.log(req.body.taskStatus);

  const updateObj = makeTaskUpdateObj(req.body.title,req.body.taskStatus);

  const updateTask = models.tasks.update(
    updateObj, // 更新内容
    { 
      where: { 
        id: targetId
      }
    } // 更新対象
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


var makeTaskUpdateObj = (title, taskStatus) => {
  if (title){
    return {title: title};
  } else if (taskStatus) {
    return {completed: taskStatus};
  };
}


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
