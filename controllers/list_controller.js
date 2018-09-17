const models = require('../models/')
let lists = {};

/* タスク一覧 */
lists.index = (req, res, next) => {
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


/* タスクの登録 */
lists.regist = (req, res, next) => {
  console.log(req.method);
  console.log(req.body);
  const param = req.body;
  console.log('target_order_id: '+param.target_order_id);

  const insertList = models.lists.create({
    // title: "dummy",
    // space_id: param.space_id,
    // progress_rate: param.pregress_rate
    title: "dummy",
    space_id: 1,
    progress_rate: 77,
  });
  insertList.then((result) => {
    res.json({
      isSucceeded: true,
      response:result,
    });
  })
  insertList.error((e) => {
    res.json({
      isSucceeded: false,
      message: e.message
    });
  })
}


module.exports = lists;