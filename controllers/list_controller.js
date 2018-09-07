const models = require('../models/')
let tasks = {};

/* タスク一覧 */
tasks.index = (req, res, next) => {
  console.log(req.method);
  
  const targetId = req.params.id;

  // task table
  models.tasks.findAll(
    {
      order:['order_id'],
      where:{
        list_id: targetId
      }
    }
  ).then(taskResults=> {
      // list table
    models.lists.findAll(
      {
        where:{
          id: targetId
        }
      }
    ).then(listResults => {
      const listObj = JSON.parse(JSON.stringify(listResults, null, 2))[0];
      const taskObjArray = JSON.parse(JSON.stringify(taskResults, null, 2));

      const responseJson = {
        title: listObj.title,
        tasks: taskObjArray,
      };
      console.log(taskObjArray);
  
      // ViewにModelのデータを渡す
      res.render('list', responseJson); 
    })
  })
}
module.exports = tasks;