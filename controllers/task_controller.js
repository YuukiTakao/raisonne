const models = require('../models/')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
let task = {};


/* タスクの登録 */
task.regist = (req, res, next) => {
  console.log(req.method);
  console.log(req.body);
  const param = req.body;
  console.log('target_order_id: '+param.target_order_id);

  /* タスク並び順の更新 */
  const incrementTasksGteOrderId = models.tasks.increment(
    'order_id', // 更新内容
    { 
      where:{
        list_id: param.list_id,
        order_id:{[Op.gte]:param.target_order_id}
      }
    } 
  );
  incrementTasksGteOrderId.then(ret=> {
    console.log('task update ok');
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
  insertTask.then((result) => {
    res.json({
      isSucceeded: true,
      response:result,
    });
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
  const updateObj = makeTaskUpdateObj(req.body.title,req.body.taskStatus);
  console.log(req.method);
  console.log(req.body);
  console.log(updateObj);
  const updateTask = models.tasks.update(
    updateObj, // 更新内容
    { 
      where: { 
        id: targetId
      }
    } // 更新対象
  );
  updateTask.then(result=> {
    console.log(result);
    res.json({
      isSucceeded: true,
      response:result,
    });
  })
  updateTask.error((e) => {
    res.json({
      isSucceeded: false,
      message: e.message
    });
  })
};


const makeTaskUpdateObj = (title, taskStatus) => {
  if (title){
    return {title: title};
  } else if (taskStatus != null) {
    return {completed: taskStatus};
  };
}


/* タスクの削除 */
task.delete = (req, res, next) => {
  const targetId = req.params.id;
  const param = req.body;
  console.log(param.list_id);
  console.log(param.target_order_id);
  
  /* タスク並び順の更新 */
  const decrementTasksGteOrderId = models.tasks.decrement(
    'order_id', // 更新内容
    { 
      where:{
        list_id: param.list_id,
        order_id:{[Op.gte]: param.target_order_id}
      }
    } // 更新対象
  );
  decrementTasksGteOrderId.then(ret=> {
    console.log('task order id update ok');
  });
  decrementTasksGteOrderId.error((e) => {
    res.json({
      isSucceeded: false,
      message: e.message
    });
  });
  const delTask = models.tasks.destroy({
    where:{
      id: targetId
    }
  })
  delTask.then((result) => {
    res.json({
      isSucceeded: true,
      response:result
    });
  })
  delTask.error((e) => {
    res.json({
      isSucceeded: false,
      message: e.message
    });
  })
}

module.exports = task;
